<?php
/**
 * REST controller for the homepage sentence channel.
 *
 * Stores signed HTML sentences that are later rendered in wp_footer.
 *
 * @package LinkFactory
 */

namespace LinkFactory;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Sentences {

	use SignatureVerification;

	/**
	 * @var Repository
	 */
	private $repository;

	public function __construct( Repository $repository ) {
		$this->repository = $repository;
	}

	public function register_routes() {
		register_rest_route(
			LINK_FACTORY_NAMESPACE,
			'/sentences',
			array(
				'methods'             => 'POST',
				'callback'            => array( $this, 'handle_create_sentence' ),
				'permission_callback' => array( $this, 'check_signature' ),
				'args'                => array(
					'html'     => array(
						'type'              => 'string',
						'required'          => true,
						'sanitize_callback' => 'wp_kses_post',
					),
					'sitewide' => array(
						'type'              => 'boolean',
						'required'          => false,
						'default'           => false,
						'sanitize_callback' => 'rest_sanitize_boolean',
					),
				),
			)
		);

		register_rest_route(
			LINK_FACTORY_NAMESPACE,
			'/sentences/(?P<id>[a-zA-Z0-9-]+)',
			array(
				'methods'             => 'DELETE',
				'callback'            => array( $this, 'handle_delete_sentence' ),
				'permission_callback' => array( $this, 'check_signature' ),
				'args'                => array(
					'id' => array(
						'type'              => 'string',
						'required'          => true,
						'sanitize_callback' => 'sanitize_text_field',
					),
				),
			)
		);
	}

	public function handle_create_sentence( \WP_REST_Request $request ) {
		$html = $request->get_param( 'html' );
		if ( ! is_string( $html ) || trim( $html ) === '' ) {
			return new \WP_Error( 'invalid_html', 'Parameter "html" is required', array( 'status' => 400 ) );
		}

		$sitewide = (bool) $request->get_param( 'sitewide' );
		$id       = wp_generate_uuid4();
		$result   = $this->repository->insert( $id, $html, $sitewide );
		if ( false === $result ) {
			return new \WP_Error( 'db_error', 'Failed to persist sentence', array( 'status' => 500 ) );
		}

		return rest_ensure_response(
			array(
				'id' => $id,
			)
		);
	}

	public function handle_delete_sentence( \WP_REST_Request $request ) {
		$id = $request->get_param( 'id' );
		if ( ! is_string( $id ) || $id === '' ) {
			return new \WP_Error( 'invalid_id', 'Parameter "id" is required', array( 'status' => 400 ) );
		}
		$deleted = $this->repository->delete_by_id( $id );
		if ( 0 === $deleted ) {
			return new \WP_Error( 'not_found', 'Sentence not found', array( 'status' => 404 ) );
		}
		return rest_ensure_response( array( 'status' => 'deleted' ) );
	}
}
