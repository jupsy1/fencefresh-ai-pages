<?php
/**
 * The template for displaying 404 pages (not found)
 * 
 * @package FenceFresh
 */

get_header(); ?>

<section style="padding: 6rem 0; text-align: center; min-height: 60vh; display: flex; align-items: center;">
    <div class="container">
        <div style="max-width: 600px; margin: 0 auto;">
            <div style="font-size: 6rem; font-weight: bold; color: hsl(var(--primary)); margin-bottom: 1rem; line-height: 1;">
                404
            </div>
            
            <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem; color: hsl(var(--foreground));">
                Page Not Found
            </h1>
            
            <p style="font-size: 1.125rem; color: hsl(var(--muted-foreground)); margin-bottom: 2rem; line-height: 1.6;">
                Sorry, we couldn't find the page you're looking for. The page may have been moved or doesn't exist.
            </p>
            
            <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn-primary btn-lg">
                    Return to Homepage
                </a>
                
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; margin-top: 1rem;">
                    <a href="<?php echo esc_url(home_url('/fencing-services-in-walsall')); ?>" class="btn btn-outline">Walsall Services</a>
                    <a href="<?php echo esc_url(home_url('/fencing-services-in-birmingham')); ?>" class="btn btn-outline">Birmingham Services</a>
                    <a href="<?php echo esc_url(home_url('/fencing-services-in-wolverhampton')); ?>" class="btn btn-outline">Wolverhampton Services</a>
                </div>
            </div>
            
            <div style="margin-top: 3rem; padding: 2rem; background: hsl(var(--muted) / 0.5); border-radius: var(--radius);">
                <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">
                    Looking for Our Services?
                </h3>
                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem;">
                    We provide professional fence painting services across the West Midlands.
                </p>
                <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">
                    <a href="tel:07398243131" class="btn btn-accent">
                        📞 Call Now: 07398 243131
                    </a>
                    <a href="mailto:info@fencefresh.com" class="btn btn-outline">
                        ✉️ Email Us
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>