<?php
/**
 * Plugin Name:       Learn More Button Block
 * Description:       Animated "Learn More" button block built with Gutenberg and @wordpress/scripts.
 * Version:           1.0.0
 * Author:            Manu HD
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 */
function learn_more_button_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'learn_more_button_block_init' );