<div id="sidebar">

    <div class="logo-container">
        <img id="logo" src="<?php echo get_stylesheet_directory_uri(); ?>/images/logo.png" alt="" />
        <div id="top-arrow">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px"
                viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                <path d="M256,176l208,208h48L256,128L0,384h48L256,176z" />
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

        <!-- <a href="#makers-maze">Makers' Maze</a>
        <a href="#collage-continuity">Collage & Continuity</a>
        <a href="#about">About</a>
        <a href="#news">News</a> -->

        <div id="links">
            <a href="https://instagram.com/studio.izaslodka" rel="noreferrer" target="_blank">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/icons/instagram.svg" alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/company/37555218" rel="noreferrer" target="_blank">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/icons/linkedin.svg" alt="linkedin" />
            </a>
        </div>

    </nav>
    <div class="right-nav-spacer"></div>
</div>
