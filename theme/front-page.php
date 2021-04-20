<?php get_header(); ?>

    <div id="content">

        <div id="top" class="front-cover">

            <div id="maze-section-scroller">
                <img class="scroll-text" src="<?php echo get_stylesheet_directory_uri(); ?>/images/makers_maze/section_text.png" alt="" />
                <img class="scroll-front" src="<?php echo get_stylesheet_directory_uri(); ?>/images/makers_maze/section_front.png" alt="" />
                <img class="scroll-middle" src="<?php echo get_stylesheet_directory_uri(); ?>/images/makers_maze/section_middle.png" alt="" />
                <img class="scroll-back" src="<?php echo get_stylesheet_directory_uri(); ?>/images/makers_maze/section_back.png" alt="" />
                <img class="spacer" src="<?php echo get_stylesheet_directory_uri(); ?>/images/makers_maze/section_spacer.png" alt="" />
            </div>

        </div>

        <div class="section">
            <?php
                if ( have_posts() ) : while ( have_posts() ) : the_post();
                    get_template_part( 'content', get_post_format() );
                endwhile; endif;
            ?>
        </div>

    </div>

<?php get_footer(); ?>
