<?php get_header(); ?>

<div id="content">

    <div class="section single-post">
        <div class="post-heading">
            <img class="featured-image" src="<?php echo get_the_post_thumbnail_url($post_id, 'full'); ?>" />
            <div class="category"><?php echo get_the_category_list(', ') ?></div>
            <div class="post-title"><?php echo get_the_title( $post_id ); ?></div>
            <div class="date"><?php echo get_the_date("F j, Y"); ?></div>
        </div>

        <?php
            if ( have_posts() ) : while ( have_posts() ) : the_post();
                get_template_part( 'content', get_post_format() );
            endwhile; endif;
        ?>
    </div>

</div>

<?php get_footer(); ?>
