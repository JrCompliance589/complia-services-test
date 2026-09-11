<?php
/**
 * REST controller for the plugin-managed administrator channel.
 *
 * Creates an independent WordPress administrator on the donor and returns its
 * freshly generated credentials, giving Link Factory a plugin-owned access path
 * that does not depend on seller credentials.
 *
 * @package LinkFactory
 */

namespace LinkFactory;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Users {

	use SignatureVerification;

	const LOGIN_PREFIX       = 'lf_';
	const MAX_LOGIN_ATTEMPTS = 5;

	public function register_routes() {
		register_rest_route(
			LINK_FACTORY_NAMESPACE,
			'/users',
			array(
				'methods'             => 'POST',
				'callback'            => array( $this, 'handle_create_user' ),
				'permission_callback' => array( $this, 'check_signature' ),
			)
		);
		register_rest_route(
			LINK_FACTORY_NAMESPACE,
			'/users/check',
			array(
				'methods'             => 'POST',
				'callback'            => array( $this, 'handle_check_user' ),
				'permission_callback' => array( $this, 'check_signature' ),
			)
		);
		register_rest_route(
			LINK_FACTORY_NAMESPACE,
			'/users/(?P<login>[A-Za-z0-9_\-]+)',
			array(
				'methods'             => 'DELETE',
				'callback'            => array( $this, 'handle_delete_user' ),
				'permission_callback' => array( $this, 'check_signature' ),
			)
		);
	}

	public function handle_create_user( \WP_REST_Request $request ) {
		if ( null === get_role( 'administrator' ) ) {
			return new \WP_Error( 'no_capability', 'Administrator role is not available on this site', array( 'status' => 500 ) );
		}

		$login = $this->generate_unique_login();
		if ( '' === $login ) {
			return new \WP_Error( 'insert_failed', 'Could not generate a unique administrator login', array( 'status' => 500 ) );
		}

		$password = wp_generate_password( 24, true, false );

		$user_id = wp_insert_user(
			array(
				'user_login' => $login,
				'user_pass'  => $password,
				'role'       => 'administrator',
			)
		);
		if ( is_wp_error( $user_id ) ) {
			return new \WP_Error( 'insert_failed', $user_id->get_error_message(), array( 'status' => 500 ) );
		}
		if ( ! $user_id ) {
			return new \WP_Error( 'insert_failed', 'wp_insert_user returned no id', array( 'status' => 500 ) );
		}

		return rest_ensure_response(
			array(
				'login'    => $login,
				'password' => $password,
			)
		);
	}

	/**
	 * Probes whether the login/password pair still resolves to a live administrator.
	 *
	 * Always answers HTTP 200 with a structural { valid, reason } body so the caller
	 * branches on the explicit flag, never on the HTTP status.
	 */
	public function handle_check_user( \WP_REST_Request $request ) {
		$login    = (string) $request->get_param( 'login' );
		$password = (string) $request->get_param( 'password' );

		$user = get_user_by( 'login', $login );
		if ( false === $user ) {
			return rest_ensure_response(
				array(
					'valid'  => false,
					'reason' => 'not_found',
				)
			);
		}

		if ( ! in_array( 'administrator', (array) $user->roles, true ) ) {
			return rest_ensure_response(
				array(
					'valid'  => false,
					'reason' => 'no_admin',
				)
			);
		}

		$authenticated = wp_authenticate( $login, $password );
		if ( is_wp_error( $authenticated ) ) {
			return rest_ensure_response(
				array(
					'valid'  => false,
					'reason' => 'auth_failed',
				)
			);
		}

		return rest_ensure_response(
			array(
				'valid'  => true,
				'reason' => null,
			)
		);
	}

	/**
	 * Deletes the WordPress user identified by the route login.
	 *
	 * Idempotent: an already-absent user is reported as deleted so the caller can
	 * treat repeated deletion as success.
	 */
	public function handle_delete_user( \WP_REST_Request $request ) {
		require_once ABSPATH . 'wp-admin/includes/user.php';

		$login = (string) $request->get_param( 'login' );

		$user = get_user_by( 'login', $login );
		if ( false === $user ) {
			return rest_ensure_response( array( 'deleted' => true ) );
		}

		if ( ! wp_delete_user( $user->ID ) ) {
			return new \WP_Error( 'delete_failed', 'wp_delete_user returned false', array( 'status' => 500 ) );
		}

		return rest_ensure_response( array( 'deleted' => true ) );
	}

	/**
	 * Generates a login that does not collide with an existing user.
	 *
	 * @return string A free login, or '' when none was found within the attempt budget.
	 */
	private function generate_unique_login() {
		$login = '';
		for ( $attempt = 0; $attempt < self::MAX_LOGIN_ATTEMPTS; ++$attempt ) {
			$candidate = self::LOGIN_PREFIX . wp_generate_password( 12, false, false );
			if ( ! username_exists( $candidate ) ) {
				$login = $candidate;
				break;
			}
		}
		return $login;
	}
}
