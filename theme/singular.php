<?php get_header(); ?>

<div class="page">

    <div class="section">

        <div class="subsection margins">

            <div class="section-header">
                <div class="title"><?php the_title(); ?></div>
                <div class="subtitle">
                    <?php get_secondary_title(); ?>
                </div>
            </div>

        </div>

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
