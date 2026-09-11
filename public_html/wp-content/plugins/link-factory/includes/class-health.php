<?php
/**
 * REST controller for the plugin health check.
 *
 * Exposes an unauthenticated endpoint that reports the plugin and protocol
 * versions, used by the backend to probe plugin presence and compatibility.
 *
 * @package LinkFactory
 */

namespace LinkFactory;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Health {

	public function register_routes() {
		register_rest_route(
			LINK_FACTORY_NAMESPACE,
			'/health',
			array(
				'methods'             => 'GET',
				'callback'            => array( $this, 'handle_health' ),
				'permission_callback' => '__return_true',
			)
		);
	}

	public function handle_health() {
		return rest_ensure_response(
			array(
				'status'          => 'ok',
				'version'         => LINK_FACTORY_VERSION,
				'protocolVersion' => LINK_FACTORY_PROTOCOL_VERSION,
			)
		);
	}
}
