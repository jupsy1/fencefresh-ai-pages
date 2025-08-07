<?php
/**
 * Template for service area pages
 * 
 * @package FenceFresh
 */

$service_area = get_query_var('service_area');
$area_name = ucfirst($service_area);

get_header(); ?>

<!-- Hero Section -->
<section class="hero" style="background-image: url('<?php echo esc_url(get_template_directory_uri() . '/assets/hero-fencing.jpg'); ?>');">
    <div class="hero-overlay"></div>
    <div class="container">
        <div class="hero-content">
            <div class="hero-rating">
                <div class="stars">
                    ★★★★★
                </div>
                <span style="color: rgba(255, 255, 255, 0.9); font-weight: 500;">4.9/5 from 250+ customers</span>
            </div>
            
            <h1 class="hero-title">
                Professional <span class="hero-accent">Fence Painting Services</span> in <?php echo esc_html($area_name); ?>
            </h1>
            
            <p class="hero-description">
                <?php
                switch($service_area) {
                    case 'walsall':
                        echo 'Transform your Walsall property with premium fence painting services. From residential gardens to commercial properties, we deliver quality craftsmanship with a 2-year guarantee throughout Walsall and surrounding areas.';
                        break;
                    case 'birmingham':
                        echo 'Professional fence painting services across Birmingham. Our experienced team serves all Birmingham districts with high-quality paint finishes and 2-year guarantees for both residential and commercial properties.';
                        break;
                    case 'wolverhampton':
                        echo 'Expert fence painting services in Wolverhampton. We provide comprehensive painting solutions for all fence types with premium weather-resistant paints and professional application techniques.';
                        break;
                    case 'coventry':
                        echo 'Quality fence painting services throughout Coventry. From small garden fences to large commercial boundaries, we deliver exceptional results with a 2-year paint guarantee.';
                        break;
                    case 'stafford':
                        echo 'Professional fence painting in Stafford and surrounding areas. Our skilled painters use only the finest weather-resistant paints to ensure lasting beauty and protection for your fence.';
                        break;
                    default:
                        echo 'Professional fence painting services in ' . $area_name . '. Quality craftsmanship with a 2-year guarantee.';
                }
                ?>
            </p>
            
            <div class="hero-actions">
                <a href="#contact" class="btn btn-accent btn-lg">Get Your Free Quote Today</a>
                <a href="tel:07398243131" class="btn btn-outline btn-lg" style="border-color: white; color: white;">Call Now: 07398 243131</a>
            </div>
            
            <div class="hero-features">
                <div class="hero-feature">
                    <span class="check-icon">✓</span>
                    <span>2-Year Paint Guarantee</span>
                </div>
                <div class="hero-feature">
                    <span class="check-icon">✓</span>
                    <span>Free Quotations</span>
                </div>
                <div class="hero-feature">
                    <span class="check-icon">✓</span>
                    <span>Local <?php echo esc_html($area_name); ?> Service</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Services Section -->
<section id="services" class="services">
    <div class="container">
        <div class="section-header">
            <span class="section-badge">Our Services</span>
            <h2 class="section-title">Fence Painting Services in <?php echo esc_html($area_name); ?></h2>
            <p class="section-description">
                We provide comprehensive fence painting services throughout <?php echo esc_html($area_name); ?> with competitive 
                pricing based on fence size and premium quality finishes that last.
            </p>
        </div>

        <div class="services-grid">
            <!-- Small Fence Painting -->
            <div class="service-card">
                <div class="service-icon">
                    <span style="color: hsl(var(--primary-foreground)); font-size: 1.5rem;">🎨</span>
                </div>
                <h3 class="service-title">Small Fence Painting</h3>
                <p class="service-description">Professional fence painting service for small fences up to 10 meters in length throughout <?php echo esc_html($area_name); ?>.</p>
                <ul class="service-features">
                    <li class="service-feature">
                        <span class="service-bullet"></span>
                        High-quality weather-resistant paint
                    </li>
                    <li class="service-feature">
                        <span class="service-bullet"></span>
                        Surface preparation included
                    </li>
                    <li class="service-feature">
                        <span class="service-bullet"></span>
                        Multiple color options
                    </li>
                </ul>
                <div class="service-footer">
                    <span class="service-price">£450–£500</span>
                    <a href="#contact" class="btn btn-outline">Get Quote</a>
                </div>
            </div>

            <!-- Medium Fence Painting -->
            <div class="service-card">
                <div class="service-icon">
                    <span style="color: hsl(var(--primary-foreground)); font-size: 1.5rem;">🎨</span>
                </div>
                <h3 class="service-title">Medium Fence Painting</h3>
                <p class="service-description">Comprehensive fence painting for medium-sized fences between 10-20 meters in <?php echo esc_html($area_name); ?>.</p>
                <ul class="service-features">
                    <li class="service-feature">
                        <span class="service-bullet"></span>
                        Premium exterior paint
                    </li>
                    <li class="service-feature">
                        <span class="service-bullet"></span>
                        Power washing included
                    </li>
                    <li class="service-feature">
                        <span class="service-bullet"></span>
                        2-coat application
                    </li>
                </ul>
                <div class="service-footer">
                    <span class="service-price">£500–£750</span>
                    <a href="#contact" class="btn btn-outline">Get Quote</a>
                </div>
            </div>

            <!-- Large Fence Painting -->
            <div class="service-card">
                <div class="service-icon">
                    <span style="color: hsl(var(--primary-foreground)); font-size: 1.5rem;">🎨</span>
                </div>
                <h3 class="service-title">Large Fence Painting</h3>
                <p class="service-description">Custom fence painting service for large fences over 20 meters in <?php echo esc_html($area_name); ?>.</p>
                <ul class="service-features">
                    <li class="service-feature">
                        <span class="service-bullet"></span>
                        Site survey included
                    </li>
                    <li class="service-feature">
                        <span class="service-bullet"></span>
                        Custom color matching
                    </li>
                    <li class="service-feature">
                        <span class="service-bullet"></span>
                        Professional finish guarantee
                    </li>
                </ul>
                <div class="service-footer">
                    <span class="service-price">£750+ (custom quote)</span>
                    <a href="#contact" class="btn btn-outline">Get Quote</a>
                </div>
            </div>

            <!-- Gate Painting -->
            <div class="service-card">
                <div class="service-icon">
                    <span style="color: hsl(var(--primary-foreground)); font-size: 1.5rem;">🚪</span>
                </div>
                <h3 class="service-title">Gate Painting</h3>
                <p class="service-description">Specialized painting service for gates in <?php echo esc_html($area_name); ?> including hinges and hardware protection.</p>
                <ul class="service-features">
                    <li class="service-feature">
                        <span class="service-bullet"></span>
                        Hardware masking
                    </li>
                    <li class="service-feature">
                        <span class="service-bullet"></span>
                        Rust treatment
                    </li>
                    <li class="service-feature">
                        <span class="service-bullet"></span>
                        Smooth operation maintained
                    </li>
                </ul>
                <div class="service-footer">
                    <span class="service-price">£150–£300 per gate</span>
                    <a href="#contact" class="btn btn-outline">Get Quote</a>
                </div>
            </div>
        </div>

        <!-- Local Area Information -->
        <div style="margin-top: 4rem; padding: 2rem; background: hsl(var(--card)); border-radius: var(--radius); box-shadow: var(--shadow-md);">
            <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">Why Choose FenceFresh in <?php echo esc_html($area_name); ?>?</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                <div>
                    <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Local Knowledge</h4>
                    <p style="color: hsl(var(--muted-foreground)); margin: 0;">Our team knows <?php echo esc_html($area_name); ?> well and understands the local climate conditions that affect fence painting.</p>
                </div>
                <div>
                    <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Quick Response</h4>
                    <p style="color: hsl(var(--muted-foreground)); margin: 0;">Being local to <?php echo esc_html($area_name); ?>, we can provide fast quotes and quick project starts.</p>
                </div>
                <div>
                    <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Quality Guarantee</h4>
                    <p style="color: hsl(var(--muted-foreground)); margin: 0;">All our work in <?php echo esc_html($area_name); ?> comes with a 2-year paint guarantee for your peace of mind.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" style="padding: 6rem 0; background: hsl(var(--muted) / 0.5);">
    <div class="container">
        <div class="section-header">
            <span class="section-badge">Get In Touch</span>
            <h2 class="section-title">Ready to Transform Your Fence in <?php echo esc_html($area_name); ?>?</h2>
            <p class="section-description">
                Contact us today for your free quote. We're proud to serve <?php echo esc_html($area_name); ?> with professional fence painting services.
            </p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 800px; margin: 0 auto;">
            <div style="text-align: center; padding: 2rem; background: hsl(var(--card)); border-radius: var(--radius); box-shadow: var(--shadow-md);">
                <h3 style="margin-bottom: 1rem;">Call Us</h3>
                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">Get an instant quote for your <?php echo esc_html($area_name); ?> fence painting</p>
                <a href="tel:07398243131" class="btn btn-primary btn-lg">07398 243131</a>
            </div>
            <div style="text-align: center; padding: 2rem; background: hsl(var(--card)); border-radius: var(--radius); box-shadow: var(--shadow-md);">
                <h3 style="margin-bottom: 1rem;">Email Us</h3>
                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">Send us your <?php echo esc_html($area_name); ?> project details</p>
                <a href="mailto:info@fencefresh.com" class="btn btn-primary btn-lg">info@fencefresh.com</a>
            </div>
        </div>
        
        <!-- Service Areas Links -->
        <div style="margin-top: 3rem; text-align: center;">
            <h3 style="margin-bottom: 1rem;">We Also Serve These Areas:</h3>
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem;">
                <?php
                $areas = array('walsall', 'birmingham', 'wolverhampton', 'coventry', 'stafford');
                foreach ($areas as $area) {
                    if ($area !== $service_area) {
                        $area_display = ucfirst($area);
                        echo '<a href="' . esc_url(home_url("/fencing-services-in-{$area}")) . '" class="btn btn-outline" style="margin: 0.25rem;">' . esc_html($area_display) . '</a>';
                    }
                }
                ?>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>