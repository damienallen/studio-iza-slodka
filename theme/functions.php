<?php


    function register_menus() {
        register_nav_menus(
            array(
                'primary-menu' => __( 'Primary Menu' ),
            )
        );
    }

    function add_scripts() {
        wp_scripts()->add_data( 'jquery', 'group', 1 );
        wp_scripts()->add_data( 'jquery-core', 'group', 1 );
        wp_scripts()->add_data( 'jquery-migrate', 'group', 1 );

        wp_enqueue_script(
            'theme-scripts',
            get_stylesheet_directory_uri() . '/bundle.js',
            array(), false, true
        );
    }

    function add_styles() {
        wp_enqueue_style(
            'theme-main',
            get_stylesheet_directory_uri() . '/main.css',
            false
        );
    }

    
    add_action( 'init', 'register_menus' );
    add_action( 'wp_enqueue_scripts', 'add_styles' );
    add_action( 'wp_enqueue_scripts', 'add_scripts' );
    // add_theme_support( 'post-thumbnails' );

?>