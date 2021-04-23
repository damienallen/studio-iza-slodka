<?php

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