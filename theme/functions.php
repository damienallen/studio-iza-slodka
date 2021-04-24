<?php

    // wp_register_script( 'bundle', get_stylesheet_directory_uri() . '/bundle.js', array('jquery'), '1.0' true );
    // wp_enqueue_script( 'bundle');
    add_action( 'init', 'register_my_menus' );
    // add_theme_support( 'post-thumbnails' );

    function register_my_menus() {
        register_nav_menus(
            array(
                'primary-menu' => __( 'Primary Menu' ),
            )
        );
    }

?>