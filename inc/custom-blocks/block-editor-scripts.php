<?php
/*
Engue block editor scripts and styles
*/

function jp_register_custom_block_scripts_and_styles() {
    wp_register_script(
        'jp-gruttemberg-script',
        get_template_directory_uri() . '/inc/custom-blocks/block.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-i18n' ),
        true
    );
 
    register_block_type( 'jakub-pise/program-card', array(
        'editor_script' => 'jp-gruttemberg-script',
    ) );
 
}
add_action( 'enqueue_block_editor_assets', 'jp_register_custom_block_scripts_and_styles' );