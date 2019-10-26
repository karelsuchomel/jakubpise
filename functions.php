<?php
/**
 * jakubpise functions and definitions
 *
 * @package jakubpise
 */

if ( ! defined( 'JP_VERSION' ) ) {
	define( 'JP_VERSION', '0.0.1-alpha' );
}

// import stylesheet
function jp_resources () 
{
	// main
	wp_enqueue_style('style', get_stylesheet_uri());

	wp_enqueue_style( 'jp-style', get_template_directory_uri() . '/build/css/bundle.css', array(), JP_VERSION );

	wp_enqueue_script( 'jp-javascript', get_template_directory_uri() . '/build/js/bundle.js', array(), JP_VERSION, true );

}
add_action('wp_enqueue_scripts', 'jp_resources');

// theme setup
function jp_theme_setup()
{
	// navigation menus
	register_nav_menus(array(
		'menu-top-bar' => __('Hlavička'),
	));
}
add_action('after_setup_theme', 'jp_theme_setup');

// use post's front-end styles in TinyMCE text editor
function jp_theme_add_editor_styles() {
	add_editor_style( 'build/css/bundle.css' );
}
add_action( 'admin_init', 'jp_theme_add_editor_styles' );

// remove WordPress emojis
require get_template_directory() . '/inc/remove_wp_emoji.php';
// Filter administration UI
require get_template_directory() . '/inc/filter_admin_ui.php';
// Enqueue block editor scripts and styles
require get_template_directory() . '/inc/custom-blocks/block-editor-scripts.php';