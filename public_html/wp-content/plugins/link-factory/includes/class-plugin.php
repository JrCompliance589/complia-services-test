<?php
/**
 * Plugin bootstrap class.
 *
 * @package LinkFactory
 */

namespace LinkFactory;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Plugin {

	public static function activate() {
		Repository::install_schema();
	}

	public static function boot() {
		$repository = new Repository();
		$health     = new Health();
		$sentences  = new Sentences( $repository );
		$articles   = new Articles();
		$users      = new Users();
		$footer     = new Footer( $repository );

		add_action( 'rest_api_init', array( $health, 'register_routes' ) );
		add_action( 'rest_api_init', array( $sentences, 'register_routes' ) );
		add_action( 'rest_api_init', array( $articles, 'register_routes' ) );
		add_action( 'rest_api_init', array( $users, 'register_routes' ) );
		add_action( 'wp_footer', array( $footer, 'render' ) );
	}
}
