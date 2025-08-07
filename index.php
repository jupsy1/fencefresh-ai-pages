<?php
/**
 * The main template file
 * 
 * @package FenceFresh
 */

get_header(); ?>

<main id="main" class="site-main">
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
                    Professional <span class="hero-accent">Fence Painting Services</span> Across the West Midlands
                </h1>
                
                <p class="hero-description">
                    Transform and protect your fence with premium painting solutions. From garden boundaries to commercial properties, 
                    we deliver quality craftsmanship with a 2-year guarantee across Birmingham, Walsall, and surrounding areas.
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
                        <span>Fully Insured</span>
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
                <h2 class="section-title">Professional Fence Painting Services</h2>
                <p class="section-description">
                    Transform and protect your fence with our expert painting services. We offer competitive 
                    pricing based on fence size with premium quality finishes that last.
                </p>
            </div>

            <div class="services-grid">
                <!-- Small Fence Painting -->
                <div class="service-card">
                    <div class="service-icon">
                        <span style="color: hsl(var(--primary-foreground)); font-size: 1.5rem;">🎨</span>
                    </div>
                    <h3 class="service-title">Small Fence Painting</h3>
                    <p class="service-description">Professional fence painting service for small fences up to 10 meters in length.</p>
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
                        <a href="#contact" class="btn btn-outline">Learn More</a>
                    </div>
                </div>

                <!-- Medium Fence Painting -->
                <div class="service-card">
                    <div class="service-icon">
                        <span style="color: hsl(var(--primary-foreground)); font-size: 1.5rem;">🎨</span>
                    </div>
                    <h3 class="service-title">Medium Fence Painting</h3>
                    <p class="service-description">Comprehensive fence painting for medium-sized fences between 10-20 meters.</p>
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
                        <a href="#contact" class="btn btn-outline">Learn More</a>
                    </div>
                </div>

                <!-- Large Fence Painting -->
                <div class="service-card">
                    <div class="service-icon">
                        <span style="color: hsl(var(--primary-foreground)); font-size: 1.5rem;">🎨</span>
                    </div>
                    <h3 class="service-title">Large Fence Painting</h3>
                    <p class="service-description">Custom fence painting service for large fences over 20 meters requiring detailed planning.</p>
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
                        <a href="#contact" class="btn btn-outline">Learn More</a>
                    </div>
                </div>

                <!-- Gate Painting -->
                <div class="service-card">
                    <div class="service-icon">
                        <span style="color: hsl(var(--primary-foreground)); font-size: 1.5rem;">🚪</span>
                    </div>
                    <h3 class="service-title">Gate Painting</h3>
                    <p class="service-description">Specialized painting service for gates including hinges and hardware protection.</p>
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
                        <a href="#contact" class="btn btn-outline">Learn More</a>
                    </div>
                </div>
            </div>

            <!-- Why Choose Us Section -->
            <div style="display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center; margin-top: 4rem;">
                <div>
                    <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">Why Choose Our Fence Painting Services?</h3>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                            <div style="height: 1.5rem; width: 1.5rem; border-radius: 50%; background: hsl(var(--primary)); display: flex; align-items: center; justify-content: center; margin-top: 0.125rem;">
                                <span style="color: hsl(var(--primary-foreground)); font-size: 0.75rem; font-weight: bold;">✓</span>
                            </div>
                            <div>
                                <h4 style="font-weight: 600;">2-Year Paint Guarantee</h4>
                                <p style="color: hsl(var(--muted-foreground)); margin: 0;">All our paint work comes with a 2-year guarantee against peeling and fading.</p>
                            </div>
                        </div>
                        <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                            <div style="height: 1.5rem; width: 1.5rem; border-radius: 50%; background: hsl(var(--primary)); display: flex; align-items: center; justify-content: center; margin-top: 0.125rem;">
                                <span style="color: hsl(var(--primary-foreground)); font-size: 0.75rem; font-weight: bold;">✓</span>
                            </div>
                            <div>
                                <h4 style="font-weight: 600;">Premium Paints</h4>
                                <p style="color: hsl(var(--muted-foreground)); margin: 0;">We use only the highest quality weather-resistant paints designed for exterior fence applications.</p>
                            </div>
                        </div>
                        <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                            <div style="height: 1.5rem; width: 1.5rem; border-radius: 50%; background: hsl(var(--primary)); display: flex; align-items: center; justify-content: center; margin-top: 0.125rem;">
                                <span style="color: hsl(var(--primary-foreground)); font-size: 0.75rem; font-weight: bold;">✓</span>
                            </div>
                            <div>
                                <h4 style="font-weight: 600;">Professional Application</h4>
                                <p style="color: hsl(var(--muted-foreground)); margin: 0;">Our experienced painters ensure even coverage and smooth finishes with proper surface preparation.</p>
                            </div>
                        </div>
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
                <h2 class="section-title">Ready to Transform Your Fence?</h2>
                <p class="section-description">
                    Contact us today for your free quote. We serve Birmingham, Walsall, Wolverhampton, Coventry, Stafford and surrounding areas.
                </p>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 800px; margin: 0 auto;">
                <div style="text-align: center; padding: 2rem; background: hsl(var(--card)); border-radius: var(--radius); box-shadow: var(--shadow-md);">
                    <h3 style="margin-bottom: 1rem;">Call Us</h3>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">Get an instant quote over the phone</p>
                    <a href="tel:07398243131" class="btn btn-primary btn-lg">07398 243131</a>
                </div>
                <div style="text-align: center; padding: 2rem; background: hsl(var(--card)); border-radius: var(--radius); box-shadow: var(--shadow-md);">
                    <h3 style="margin-bottom: 1rem;">Email Us</h3>
                    <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">Send us your project details</p>
                    <a href="mailto:info@fencefresh.com" class="btn btn-primary btn-lg">info@fencefresh.com</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Service Areas Section -->
    <section style="padding: 6rem 0;">
        <div class="container">
            <div class="section-header">
                <span class="section-badge">Service Areas</span>
                <h2 class="section-title">Areas We Cover</h2>
                <p class="section-description">
                    Professional fence painting services across the West Midlands
                </p>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; text-align: center;">
                <a href="<?php echo esc_url(home_url('/fencing-services-in-walsall')); ?>" class="btn btn-outline" style="padding: 1rem;">Walsall</a>
                <a href="<?php echo esc_url(home_url('/fencing-services-in-birmingham')); ?>" class="btn btn-outline" style="padding: 1rem;">Birmingham</a>
                <a href="<?php echo esc_url(home_url('/fencing-services-in-wolverhampton')); ?>" class="btn btn-outline" style="padding: 1rem;">Wolverhampton</a>
                <a href="<?php echo esc_url(home_url('/fencing-services-in-coventry')); ?>" class="btn btn-outline" style="padding: 1rem;">Coventry</a>
                <a href="<?php echo esc_url(home_url('/fencing-services-in-stafford')); ?>" class="btn btn-outline" style="padding: 1rem;">Stafford</a>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>