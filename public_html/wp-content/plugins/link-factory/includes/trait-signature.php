<?php
/**
 * Ed25519 request-signature verification (BR-SEC-03).
 *
 * Shared by every controller exposing signed routes.
 *
 * @package LinkFactory
 */

namespace LinkFactory;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

trait SignatureVerification {

	/**
	 * Permission callback for Ed25519-signed routes (BR-SEC-03).
	 *
	 * Verifies the four signature headers and the detached Ed25519 signature
	 * over the canonical string `<METHOD>\n<HOST>\n<PATH>\n<TIMESTAMP>\n<NONCE>\n<BODY_SHA256_HEX>`
	 * using the trusted public key constant.
	 *
	 * @return true|\WP_Error
	 */
	public function check_signature( \WP_REST_Request $request ) {
		$signature        = $request->get_header( 'X-Link-Factory-Signature' );
		$timestamp_header = $request->get_header( 'X-Link-Factory-Timestamp' );
		$nonce            = $request->get_header( 'X-Link-Factory-Nonce' );
		$protocol_version = $request->get_header( 'X-Link-Factory-Protocol-Version' );

		if (
			! is_string( $signature ) || $signature === '' ||
			! is_string( $timestamp_header ) || $timestamp_header === '' ||
			! is_string( $nonce ) || $nonce === '' ||
			! is_string( $protocol_version ) || $protocol_version === ''
		) {
			return new \WP_Error( 'rest_forbidden', 'Required signature headers missing', array( 'status' => 403 ) );
		}

		$timestamp = intval( $timestamp_header );
		if ( $timestamp <= 0 ) {
			return new \WP_Error( 'rest_forbidden', 'Invalid X-Link-Factory-Timestamp', array( 'status' => 403 ) );
		}

		if ( abs( time() - $timestamp ) > LINK_FACTORY_SIGNATURE_TOLERANCE_SECONDS ) {
			return new \WP_Error( 'rest_forbidden', 'Timestamp outside tolerance window', array( 'status' => 403 ) );
		}

		$nonce_key = 'lf_nonce_' . $nonce;
		if ( get_transient( $nonce_key ) !== false ) {
			return new \WP_Error( 'rest_forbidden', 'Nonce replay detected', array( 'status' => 403 ) );
		}
		set_transient( $nonce_key, 1, LINK_FACTORY_SIGNATURE_TOLERANCE_SECONDS );

		$method = strtoupper( $request->get_method() );
		$host   = isset( $_SERVER['HTTP_HOST'] ) ? sanitize_text_field( wp_unslash( $_SERVER['HTTP_HOST'] ) ) : '';
		$path   = isset( $_SERVER['REQUEST_URI'] ) ? sanitize_text_field( wp_unslash( $_SERVER['REQUEST_URI'] ) ) : '';
		$body   = (string) $request->get_body();

		$canonical = $method . "\n" . $host . "\n" . $path . "\n" . $timestamp . "\n" . $nonce . "\n" . hash( 'sha256', $body );

		$signature_raw  = base64_decode( $signature, true );
		$public_key_raw = base64_decode( LINK_FACTORY_TRUSTED_PUBLIC_KEY, true );
		if ( $signature_raw === false || $public_key_raw === false || strlen( $public_key_raw ) !== 32 ) {
			return new \WP_Error( 'rest_forbidden', 'Malformed signature or public key', array( 'status' => 403 ) );
		}

		if ( ! function_exists( 'sodium_crypto_sign_verify_detached' ) ) {
			return new \WP_Error( 'rest_forbidden', 'libsodium not available on this host', array( 'status' => 500 ) );
		}

		$ok = sodium_crypto_sign_verify_detached( $signature_raw, $canonical, $public_key_raw );
		if ( ! $ok ) {
			return new \WP_Error( 'rest_forbidden', 'Invalid request signature', array( 'status' => 403 ) );
		}
		return true;
	}
}
