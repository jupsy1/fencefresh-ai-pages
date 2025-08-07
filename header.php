<?php
/**
 * The header for our theme
 * 
 * @package FenceFresh
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <header id="masthead" class="site-header">
        <div class="container">
            <div class="header-container">
                <!-- Logo -->
                <div class="site-branding">
                    <?php if (has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <a href="<?php echo esc_url(home_url('/')); ?>" class="logo" rel="home">
                            <div class="logo-icon">F</div>
                            <span class="logo-text"><?php bloginfo('name'); ?></span>
                        </a>
                    <?php endif; ?>
                </div>

                <!-- Navigation -->
                <nav id="site-navigation" class="main-nav">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'container'      => false,
                        'menu_class'     => 'main-nav',
                        'fallback_cb'    => 'fencefresh_fallback_menu',
                    ));
                    ?>
                </nav>

                <!-- Contact & CTA -->
                <div class="header-actions" style="display: flex; align-items: center; gap: 1rem;">
                    <a href="tel:<?php echo esc_attr(fencefresh_get_option('fencefresh_phone', '07398243131')); ?>" class="phone-link" style="display: none;">
                        <span>📞</span>
                        <span><?php echo esc_html(fencefresh_get_option('fencefresh_phone', '07398 243131')); ?></span>
                    </a>
                    <a href="#contact" class="btn btn-accent">Free Quote</a>
                    
                    <!-- Mobile Menu Button -->
                    <button class="mobile-menu-button" id="mobile-menu-button" style="display: none; background: none; border: none; font-size: 1.5rem; cursor: pointer;" aria-label="Toggle mobile menu">
                        ☰
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Mobile Menu -->
        <div class="mobile-menu" id="mobile-menu" style="display: none; background: hsl(var(--background)); border-top: 1px solid hsl(var(--border)); padding: 1rem;">
            <div class="container">
                <nav class="mobile-nav">
                    <a href="<?php echo esc_url(home_url('/fencing-services-in-walsall')); ?>" class="nav-link" style="display: block; padding: 0.5rem 0; border-bottom: 1px solid hsl(var(--border));">Walsall</a>
                    <a href="<?php echo esc_url(home_url('/fencing-services-in-birmingham')); ?>" class="nav-link" style="display: block; padding: 0.5rem 0; border-bottom: 1px solid hsl(var(--border));">Birmingham</a>
                    <a href="<?php echo esc_url(home_url('/fencing-services-in-wolverhampton')); ?>" class="nav-link" style="display: block; padding: 0.5rem 0; border-bottom: 1px solid hsl(var(--border));">Wolverhampton</a>
                    <a href="<?php echo esc_url(home_url('/fencing-services-in-coventry')); ?>" class="nav-link" style="display: block; padding: 0.5rem 0; border-bottom: 1px solid hsl(var(--border));">Coventry</a>
                    <a href="<?php echo esc_url(home_url('/fencing-services-in-stafford')); ?>" class="nav-link" style="display: block; padding: 0.5rem 0; border-bottom: 1px solid hsl(var(--border));">Stafford</a>
                    <div style="padding-top: 1rem; border-top: 1px solid hsl(var(--border)); margin-top: 1rem;">
                        <a href="tel:<?php echo esc_attr(fencefresh_get_option('fencefresh_phone', '07398243131')); ?>" class="phone-link">
                            <span>📞</span>
                            <span><?php echo esc_html(fencefresh_get_option('fencefresh_phone', '07398 243131')); ?></span>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    </header>

    <main id="main" class="site-main">

<?php
/**
 * Fallback menu for when no menu is assigned
 */
function fencefresh_fallback_menu() {
    echo '<div class="main-nav">';
    echo '<a href="' . esc_url(home_url('/fencing-services-in-walsall')) . '" class="nav-link">Walsall</a>';
    echo '<a href="' . esc_url(home_url('/fencing-services-in-birmingham')) . '" class="nav-link">Birmingham</a>';
    echo '<a href="' . esc_url(home_url('/fencing-services-in-wolverhampton')) . '" class="nav-link">Wolverhampton</a>';
    echo '<a href="' . esc_url(home_url('/fencing-services-in-coventry')) . '" class="nav-link">Coventry</a>';
    echo '<a href="' . esc_url(home_url('/fencing-services-in-stafford')) . '" class="nav-link">Stafford</a>';
    echo '</div>';
}
?>