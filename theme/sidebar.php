<div id="sidebar">

        <a href="<?php echo get_bloginfo( 'wpurl' );?>">

        <div class="logo-container">
            <img id="logo" src="<?php echo get_stylesheet_directory_uri(); ?>/images/logo.png" alt="" />
        </div>

        <div class="name">
                <span class="studio">studio</span>
                <span>Iza</span>
                <span>S&#322;odka</span>
        </div>
    </a>

</div>

<div id="nav-toggle">
    <img id="nav-open" src="<?php echo get_stylesheet_directory_uri(); ?>/icons/menu.svg" alt="open nav" />
    <img id="nav-close" src="<?php echo get_stylesheet_directory_uri(); ?>/icons/close.svg" alt="close nav" />
</div>

<div id="nav-container">

    <div class="left-nav-spacer"></div>

    <nav>
        <?php wp_nav_menu( array( 'theme_location' => 'primary-menu' ) ); ?>
    </nav>

    <div class="right-nav-spacer"></div>

</div>
