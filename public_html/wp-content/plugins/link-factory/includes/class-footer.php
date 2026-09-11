<?php
/**
 * Footer renderer.
 *
 * @package LinkFactory
 */

namespace LinkFactory;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Footer {

	/**
	 * @var Repository
	 */
	private $repository;

	public function __construct( Repository $repository ) {
		$this->repository = $repository;
	}

	public function render() {
		$sentences = is_front_page()
			? $this->repository->find_all()
			: $this->repository->find_sitewide();
		if ( empty( $sentences ) ) {
			return;
		}

		echo '<div class="link-factory-sentences" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;">';
		foreach ( $sentences as $sentence ) {
			echo '<div>' . $sentence['html'] . '</div>';
		}
		echo '</div>';
	}
}
