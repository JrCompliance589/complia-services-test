<?php
/**
 * REST controller for the article publication channel.
 *
 * Publishes a standard WordPress post via wp_insert_post() under a site
 * administrator and returns the final permalink in the same response.
 *
 * @package LinkFactory
 */

namespace LinkFactory;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Articles {

	use SignatureVerification;

	public function register_routes() {
		register_rest_route(
			LINK_FACTORY_NAMESPACE,
			'/articles',
			array(
				'methods'             => 'POST',
				'callback'            => array( $this, 'handle_create_article' ),
				'permission_callback' => array( $this, 'check_signature' ),
				'args'                => array(
					'title'    => array(
						'type'              => 'string',
						'required'          => true,
						'sanitize_callback' => 'sanitize_text_field',
					),
					'content'  => array(
						'type'              => 'string',
						'required'          => true,
						'sanitize_callback' => 'wp_kses_post',
					),
					'category' => array(
						'type'              => 'string',
						'required'          => false,
						'sanitize_callback' => 'sanitize_text_field',
					),
				),
			)
		);

		register_rest_route(
			LINK_FACTORY_NAMESPACE,
			'/articles',
			array(
				'methods'             => 'GET',
				'callback'            => array( $this, 'handle_list_articles' ),
				'permission_callback' => array( $this, 'check_signature' ),
				'args'                => array(
					'per_page'        => array(
						'type'              => 'integer',
						'required'          => false,
						'sanitize_callback' => 'absint',
					),
					'perPage'         => array(
						'type'              => 'integer',
						'required'          => false,
						'sanitize_callback' => 'absint',
					),
					'page'            => array(
						'type'              => 'integer',
						'required'          => false,
						'sanitize_callback' => 'absint',
					),
					'include_content' => array(
						'type'     => 'boolean',
						'required' => false,
					),
				),
			)
		);

		register_rest_route(
			LINK_FACTORY_NAMESPACE,
			'/articles/(?P<id>[0-9]+)',
			array(
				'methods'             => 'GET',
				'callback'            => array( $this, 'handle_get_article' ),
				'permission_callback' => array( $this, 'check_signature' ),
				'args'                => array(
					'id' => array(
						'type'              => 'integer',
						'required'          => true,
						'sanitize_callback' => 'absint',
					),
				),
			)
		);

		register_rest_route(
			LINK_FACTORY_NAMESPACE,
			'/articles/(?P<id>[0-9]+)',
			array(
				'methods'             => 'POST',
				'callback'            => array( $this, 'handle_update_article' ),
				'permission_callback' => array( $this, 'check_signature' ),
				'args'                => array(
					'id'      => array(
						'type'              => 'integer',
						'required'          => true,
						'sanitize_callback' => 'absint',
					),
					'content' => array(
						'type'              => 'string',
						'required'          => true,
						'sanitize_callback' => 'wp_kses_post',
					),
				),
			)
		);

		register_rest_route(
			LINK_FACTORY_NAMESPACE,
			'/articles/(?P<id>[0-9]+)',
			array(
				'methods'             => 'DELETE',
				'callback'            => array( $this, 'handle_delete_article' ),
				'permission_callback' => array( $this, 'check_signature' ),
				'args'                => array(
					'id' => array(
						'type'              => 'integer',
						'required'          => true,
						'sanitize_callback' => 'absint',
					),
				),
			)
		);
	}

	public function handle_create_article( \WP_REST_Request $request ) {
		$title    = $request->get_param( 'title' );
		$content  = $request->get_param( 'content' );
		$category = $request->get_param( 'category' );

		if ( ! is_string( $title ) || trim( $title ) === '' ) {
			return new \WP_Error( 'invalid_title', 'Parameter "title" is required', array( 'status' => 400 ) );
		}
		if ( ! is_string( $content ) || trim( $content ) === '' ) {
			return new \WP_Error( 'invalid_content', 'Parameter "content" is required', array( 'status' => 400 ) );
		}

		$author_id = $this->resolve_admin_author();
		if ( 0 === $author_id ) {
			return new \WP_Error( 'no_admin_user', 'No administrator user found on the site', array( 'status' => 400 ) );
		}

		$postarr = array(
			'post_title'   => $title,
			'post_content' => $content,
			'post_status'  => 'publish',
			'post_type'    => 'post',
			'post_author'  => $author_id,
		);

		if ( is_string( $category ) && trim( $category ) !== '' ) {
			$category_id = $this->resolve_category_id( $category );
			if ( $category_id > 0 ) {
				$postarr['post_category'] = array( $category_id );
			}
		}

		$post_id = wp_insert_post( $postarr, true );
		if ( is_wp_error( $post_id ) ) {
			return new \WP_Error( 'insert_failed', $post_id->get_error_message(), array( 'status' => 500 ) );
		}
		if ( ! $post_id ) {
			return new \WP_Error( 'insert_failed', 'wp_insert_post returned no id', array( 'status' => 500 ) );
		}

		return rest_ensure_response(
			array(
				'id'        => (string) $post_id,
				'permalink' => get_permalink( $post_id ),
			)
		);
	}

	public function handle_delete_article( \WP_REST_Request $request ) {
		$id = absint( $request->get_param( 'id' ) );
		if ( $id <= 0 ) {
			return new \WP_Error( 'invalid_id', 'Parameter "id" is required', array( 'status' => 400 ) );
		}
		$deleted = wp_delete_post( $id, true );
		if ( ! $deleted ) {
			return new \WP_Error( 'not_found', 'Post not found', array( 'status' => 404 ) );
		}
		return rest_ensure_response( array( 'status' => 'deleted' ) );
	}

	/**
	 * Paginated listing of published `post`-type posts.
	 *
	 * Returns each post's id, permalink (`link`) and title. The raw stored
	 * content (`content`) is included unless the caller passes
	 * `include_content=0` (a plain 0/1 flag; a comma-separated `fields` list is
	 * avoided because the signed REQUEST_URI is run through sanitize_text_field(),
	 * which strips percent-encoded octets such as the `%2C` from a comma).
	 * Listing without `content` keeps large post bodies off the wire so the
	 * backend never has to parse multi-MB list pages just to read id/link/title
	 * (CLR-02); the body is fetched one post at a time via GET /articles/{id}.
	 *
	 * Accepts `per_page` (preferred) and the legacy `perPage` alias.
	 */
	public function handle_list_articles( \WP_REST_Request $request ) {
		$per_page = absint( $request->get_param( 'per_page' ) );
		if ( $per_page <= 0 ) {
			$per_page = absint( $request->get_param( 'perPage' ) );
		}
		if ( $per_page <= 0 ) {
			$per_page = 10;
		}
		$page = absint( $request->get_param( 'page' ) );
		if ( $page <= 0 ) {
			$page = 1;
		}

		$include_content_param = $request->get_param( 'include_content' );
		$include_content       = true;
		if ( null !== $include_content_param ) {
			$include_content = filter_var( $include_content_param, FILTER_VALIDATE_BOOLEAN );
		}

		$query = new \WP_Query(
			array(
				'post_type'      => 'post',
				'post_status'    => 'publish',
				'posts_per_page' => $per_page,
				'paged'          => $page,
				'orderby'        => 'ID',
				'order'          => 'DESC',
			)
		);

		$items = array();
		foreach ( $query->posts as $post ) {
			$item = array(
				'id'    => (string) $post->ID,
				'link'  => get_permalink( $post->ID ),
				'title' => $post->post_title,
			);
			if ( $include_content ) {
				$item['content'] = $post->post_content;
			}
			$items[] = $item;
		}

		return rest_ensure_response(
			array(
				'items' => $items,
				'total' => (int) $query->found_posts,
			)
		);
	}

	/**
	 * Returns a single `post`-type post's id, permalink (`link`), title and
	 * raw stored content (`get_post()->post_content`) for cleanup (CLR-04).
	 */
	public function handle_get_article( \WP_REST_Request $request ) {
		$id = absint( $request->get_param( 'id' ) );
		if ( $id <= 0 ) {
			return new \WP_Error( 'invalid_id', 'Parameter "id" is required', array( 'status' => 400 ) );
		}

		$post = get_post( $id );
		if ( ! $post || 'post' !== $post->post_type ) {
			return new \WP_Error( 'not_found', 'Post not found', array( 'status' => 404 ) );
		}

		return rest_ensure_response(
			array(
				'id'      => (string) $post->ID,
				'link'    => get_permalink( $post->ID ),
				'title'   => $post->post_title,
				'content' => $post->post_content,
			)
		);
	}

	/**
	 * Updates the raw content of a single `post`-type post via wp_update_post
	 * and returns its id and permalink (`link`) — the unlinked content produced
	 * by competitor-link removal (CLR-04).
	 */
	public function handle_update_article( \WP_REST_Request $request ) {
		$id = absint( $request->get_param( 'id' ) );
		if ( $id <= 0 ) {
			return new \WP_Error( 'invalid_id', 'Parameter "id" is required', array( 'status' => 400 ) );
		}

		$content = $request->get_param( 'content' );
		if ( ! is_string( $content ) || trim( $content ) === '' ) {
			return new \WP_Error( 'invalid_content', 'Parameter "content" is required', array( 'status' => 400 ) );
		}

		$post = get_post( $id );
		if ( ! $post || 'post' !== $post->post_type ) {
			return new \WP_Error( 'not_found', 'Post not found', array( 'status' => 404 ) );
		}

		$result = wp_update_post(
			array(
				'ID'           => $id,
				'post_content' => $content,
			),
			true
		);
		if ( is_wp_error( $result ) ) {
			return new \WP_Error( 'update_failed', $result->get_error_message(), array( 'status' => 500 ) );
		}
		if ( ! $result ) {
			return new \WP_Error( 'update_failed', 'wp_update_post returned no id', array( 'status' => 500 ) );
		}

		return rest_ensure_response(
			array(
				'id'   => (string) $id,
				'link' => get_permalink( $id ),
			)
		);
	}

	/**
	 * Resolves the post author: the first user carrying the `administrator` role.
	 *
	 * @return int User ID, or 0 when no administrator exists.
	 */
	private function resolve_admin_author() {
		$admins = get_users(
			array(
				'role'    => 'administrator',
				'number'  => 1,
				'fields'  => 'ID',
				'orderby' => 'ID',
				'order'   => 'ASC',
			)
		);
		if ( empty( $admins ) ) {
			return 0;
		}
		return (int) $admins[0];
	}

	/**
	 * Resolves a category term id by name, creating the term when absent.
	 *
	 * @return int Term id, or 0 when resolution failed.
	 */
	private function resolve_category_id( $name ) {
		$existing = term_exists( $name, 'category' );
		if ( is_array( $existing ) && isset( $existing['term_id'] ) ) {
			return (int) $existing['term_id'];
		}
		$created = wp_insert_term( $name, 'category' );
		if ( is_wp_error( $created ) || ! isset( $created['term_id'] ) ) {
			return 0;
		}
		return (int) $created['term_id'];
	}
}
