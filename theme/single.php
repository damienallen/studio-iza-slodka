<?php get_header(); ?>

<div id="content">

    <div class="section">
        <div class="post-heading">
            <div class="post-date"><?php echo get_the_date(); ?></div>
            <h3><?php echo get_the_title( $post_id ); ?></h3>
            <div><?php echo get_the_category_list(', ') ?></div>
            <div>
                <img src="<?php echo get_the_post_thumbnail_url($post_id, 'full'); ?>" />
            </div>
        </div>

        <?php
            if ( have_posts() ) : while ( have_posts() ) : the_post();
                get_template_part( 'content', get_post_format() );
            endwhile; endif;
        ?>
    </div>

</div>

<?php get_footer(); ?>
