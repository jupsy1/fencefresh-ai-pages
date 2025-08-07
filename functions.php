<?php
/**
 * FenceFresh Theme Functions
 * 
 * @package FenceFresh
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme setup
 */
function fencefresh_setup() {
    // Add theme support for post thumbnails
    add_theme_support('post-thumbnails');
    
    // Add theme support for custom logo
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    
    // Add theme support for title tag
    add_theme_support('title-tag');
    
    // Add theme support for HTML5 markup
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));
    
    // Add theme support for responsive embeds
    add_theme_support('responsive-embeds');
    
    // Add theme support for wide alignment
    add_theme_support('align-wide');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => esc_html__('Primary Menu', 'fencefresh'),
        'footer'  => esc_html__('Footer Menu', 'fencefresh'),
    ));
    
    // Add image sizes
    add_image_size('hero-image', 1920, 1080, true);
    add_image_size('service-image', 400, 300, true);
}
add_action('after_setup_theme', 'fencefresh_setup');

/**
 * Enqueue scripts and styles
 */
function fencefresh_scripts() {
    // Enqueue Google Fonts
    wp_enqueue_style('fencefresh-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', array(), null);
    
    // Enqueue theme stylesheet
    wp_enqueue_style('fencefresh-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Enqueue jQuery (included with WordPress)
    wp_enqueue_script('jquery');
    
    // Enqueue custom JavaScript
    wp_enqueue_script('fencefresh-script', get_template_directory_uri() . '/js/theme.js', array('jquery'), '1.0.0', true);
    
    // Localize script for AJAX
    wp_localize_script('fencefresh-script', 'fencefresh_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce'    => wp_create_nonce('fencefresh_nonce'),
    ));
}
add_action('wp_enqueue_scripts', 'fencefresh_scripts');

/**
 * Register widget areas
 */
function fencefresh_widgets_init() {
    register_sidebar(array(
        'name'          => esc_html__('Footer Widget Area 1', 'fencefresh'),
        'id'            => 'footer-1',
        'description'   => esc_html__('Add widgets here to appear in the first footer column.', 'fencefresh'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => esc_html__('Footer Widget Area 2', 'fencefresh'),
        'id'            => 'footer-2',
        'description'   => esc_html__('Add widgets here to appear in the second footer column.', 'fencefresh'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => esc_html__('Footer Widget Area 3', 'fencefresh'),
        'id'            => 'footer-3',
        'description'   => esc_html__('Add widgets here to appear in the third footer column.', 'fencefresh'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => esc_html__('Footer Widget Area 4', 'fencefresh'),
        'id'            => 'footer-4',
        'description'   => esc_html__('Add widgets here to appear in the fourth footer column.', 'fencefresh'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'fencefresh_widgets_init');

/**
 * Custom excerpt length
 */
function fencefresh_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'fencefresh_excerpt_length');

/**
 * Custom excerpt more string
 */
function fencefresh_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'fencefresh_excerpt_more');

/**
 * Add custom rewrite rules for service area pages
 */
function fencefresh_rewrite_rules() {
    add_rewrite_rule('^fencing-services-in-([^/]+)/?$', 'index.php?service_area=$matches[1]', 'top');
}
add_action('init', 'fencefresh_rewrite_rules');

/**
 * Add custom query var
 */
function fencefresh_query_vars($vars) {
    $vars[] = 'service_area';
    return $vars;
}
add_filter('query_vars', 'fencefresh_query_vars');

/**
 * Template redirect for service area pages
 */
function fencefresh_template_redirect() {
    $service_area = get_query_var('service_area');
    
    if ($service_area) {
        $allowed_areas = array('walsall', 'birmingham', 'wolverhampton', 'coventry', 'stafford');
        
        if (in_array($service_area, $allowed_areas)) {
            include(get_template_directory() . '/page-service-area.php');
            exit;
        } else {
            global $wp_query;
            $wp_query->set_404();
            status_header(404);
            get_template_part(404);
            exit();
        }
    }
}
add_action('template_redirect', 'fencefresh_template_redirect');

/**
 * Customize the title for service area pages
 */
function fencefresh_wp_title($title, $sep) {
    $service_area = get_query_var('service_area');
    
    if ($service_area) {
        $area_name = ucfirst($service_area);
        return "Fence Painting Services in {$area_name} {$sep} " . get_bloginfo('name');
    }
    
    return $title;
}
add_filter('wp_title', 'fencefresh_wp_title', 10, 2);

/**
 * Add meta description for service area pages
 */
function fencefresh_meta_description() {
    $service_area = get_query_var('service_area');
    
    if ($service_area) {
        $area_name = ucfirst($service_area);
        echo '<meta name="description" content="Professional fence painting services in ' . $area_name . '. Expert fence painters with 2-year guarantee. Free quotes. Call 07398 243131.">' . "\n";
    }
}
add_action('wp_head', 'fencefresh_meta_description');

/**
 * Customizer settings
 */
function fencefresh_customize_register($wp_customize) {
    // Company Information Section
    $wp_customize->add_section('fencefresh_company_info', array(
        'title'    => __('Company Information', 'fencefresh'),
        'priority' => 30,
    ));
    
    // Phone Number Setting
    $wp_customize->add_setting('fencefresh_phone', array(
        'default'           => '07398 243131',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('fencefresh_phone', array(
        'label'   => __('Phone Number', 'fencefresh'),
        'section' => 'fencefresh_company_info',
        'type'    => 'text',
    ));
    
    // Email Setting
    $wp_customize->add_setting('fencefresh_email', array(
        'default'           => 'info@fencefresh.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('fencefresh_email', array(
        'label'   => __('Email Address', 'fencefresh'),
        'section' => 'fencefresh_company_info',
        'type'    => 'email',
    ));
    
    // Address Setting
    $wp_customize->add_setting('fencefresh_address', array(
        'default'           => 'Walsall, West Midlands WS5 3EY',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('fencefresh_address', array(
        'label'   => __('Business Address', 'fencefresh'),
        'section' => 'fencefresh_company_info',
        'type'    => 'textarea',
    ));
    
    // Hero Section
    $wp_customize->add_section('fencefresh_hero', array(
        'title'    => __('Hero Section', 'fencefresh'),
        'priority' => 35,
    ));
    
    // Hero Title Setting
    $wp_customize->add_setting('fencefresh_hero_title', array(
        'default'           => 'Professional Fence Painting Services Across the West Midlands',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('fencefresh_hero_title', array(
        'label'   => __('Hero Title', 'fencefresh'),
        'section' => 'fencefresh_hero',
        'type'    => 'text',
    ));
    
    // Hero Description Setting
    $wp_customize->add_setting('fencefresh_hero_description', array(
        'default'           => 'Transform and protect your fence with premium painting solutions. From garden boundaries to commercial properties, we deliver quality craftsmanship with a 2-year guarantee across Birmingham, Walsall, and surrounding areas.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('fencefresh_hero_description', array(
        'label'   => __('Hero Description', 'fencefresh'),
        'section' => 'fencefresh_hero',
        'type'    => 'textarea',
    ));
    
    // Hero Background Image Setting
    $wp_customize->add_setting('fencefresh_hero_image', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'fencefresh_hero_image', array(
        'label'   => __('Hero Background Image', 'fencefresh'),
        'section' => 'fencefresh_hero',
    )));
}
add_action('customize_register', 'fencefresh_customize_register');

/**
 * Get customizer option with default fallback
 */
function fencefresh_get_option($option_name, $default = '') {
    return get_theme_mod($option_name, $default);
}

/**
 * Security: Remove WordPress version from head
 */
remove_action('wp_head', 'wp_generator');

/**
 * Security: Remove unnecessary WordPress head tags
 */
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');

/**
 * Add schema markup for business
 */
function fencefresh_schema_markup() {
    if (is_front_page()) {
        $schema = array(
            '@context' => 'https://schema.org',
            '@type' => 'LocalBusiness',
            'name' => 'FenceFresh',
            'description' => 'Professional fence painting services across the West Midlands',
            'telephone' => fencefresh_get_option('fencefresh_phone', '07398 243131'),
            'email' => fencefresh_get_option('fencefresh_email', 'info@fencefresh.com'),
            'address' => array(
                '@type' => 'PostalAddress',
                'addressLocality' => 'Walsall',
                'addressRegion' => 'West Midlands',
                'postalCode' => 'WS5 3EY',
                'addressCountry' => 'GB'
            ),
            'areaServed' => array(
                'Walsall', 'Birmingham', 'Wolverhampton', 'Coventry', 'Stafford'
            ),
            'serviceType' => 'Fence Painting Services',
            'url' => home_url(),
            'sameAs' => array(
                // Add social media URLs here when available
            )
        );
        
        echo '<script type="application/ld+json">' . json_encode($schema) . '</script>' . "\n";
    }
}
add_action('wp_head', 'fencefresh_schema_markup');

/**
 * Flush rewrite rules on theme activation
 */
function fencefresh_activation() {
    fencefresh_rewrite_rules();
    flush_rewrite_rules();
}
add_action('after_switch_theme', 'fencefresh_activation');

/**
 * Flush rewrite rules on theme deactivation
 */
function fencefresh_deactivation() {
    flush_rewrite_rules();
}
add_action('switch_theme', 'fencefresh_deactivation');