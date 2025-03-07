<?php
/**
 * Plugin Name: BlocksBuster
 * Description: A Family of Gutenberg Blocks
 * Version:     0.0.1
 * Author:      WPBrigade
 * Author URI:  https://wpbrigade.com/
 * Text Domain: blocksbuster
 * Domain Path: /languages
 * License:     GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

namespace Blocks_Buster;

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Gets this plugin's absolute directory path.
 *
 * @since  0.0.1
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since  0.0.1
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}

// Enqueue JS and CSS
require __DIR__ . '/lib/enqueue-scripts.php';

