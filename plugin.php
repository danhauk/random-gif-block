<?php
/**
 * Plugin Name: Random Gif Block
 * Plugin URI: https://danhauk.com/
 * Description: Generate a random gif on your pages.
 * Author: danhauk
 * Author URI: https://danhauk.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
