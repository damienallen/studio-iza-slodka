<div id="sidebar">

    <div class="logo-container">
        <img id="logo" src="<?php echo get_stylesheet_directory_uri(); ?>/images/logo.png" alt="" />
        <div id="top-arrow">
            <svg
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:svg="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                width="120"
                height="150"
                viewBox="0 0 512 512"
            >
                <path d="M 256,56.094248 464,575.99152 h 48 L 256,-63.882047 0,575.99152 h 48 z"
                    style="stroke-width:1.58098257" />
            </svg>
        </div>
    </div>

    <a href="<?php echo get_bloginfo( 'wpurl' );?>">
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
