<?php get_header(); ?>

<div id="content">

    <div class="section news-section">
        <?php
            if ( have_posts() ) : while ( have_posts() ) : the_post();
                get_template_part( 'content', get_post_format() );
            endwhile; endif;
        ?>
    </div>

</div>

<?php get_footer(); ?>