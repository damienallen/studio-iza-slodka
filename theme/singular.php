<?php get_header(); ?>

<div id="content">

    <div class="section">

        <div class="subsection margins">
            <?php
                if ( have_posts() ) : while ( have_posts() ) : the_post();
                    get_template_part( 'content', get_post_format() );
                endwhile; endif;
            ?>
        </div>

    </div>

</div>

<?php get_footer(); ?>
