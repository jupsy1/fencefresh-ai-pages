    </main><!-- #main -->

    <footer id="colophon" class="site-footer">
        <div class="container">
            <div class="footer-grid">
                <!-- Company Info -->
                <div class="footer-section">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                        <div style="height: 2rem; width: 2rem; border-radius: var(--radius); background: hsl(var(--accent)); display: flex; align-items: center; justify-content: center;">
                            <span style="color: hsl(var(--accent-foreground)); font-weight: bold; font-size: 1.125rem;">F</span>
                        </div>
                        <span style="font-size: 1.25rem; font-weight: bold;">FenceFresh</span>
                    </div>
                    <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6; margin-bottom: 1rem;">
                        Professional fence painting services across the West Midlands. 
                        Quality craftsmanship with a 2-year guarantee.
                    </p>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <div style="display: flex; align-items: center; font-size: 0.875rem;">
                            <span style="margin-right: 0.5rem;">📞</span>
                            <a href="tel:<?php echo esc_attr(fencefresh_get_option('fencefresh_phone', '07398243131')); ?>" class="footer-link">
                                <?php echo esc_html(fencefresh_get_option('fencefresh_phone', '07398 243131')); ?>
                            </a>
                        </div>
                        <div style="display: flex; align-items: center; font-size: 0.875rem;">
                            <span style="margin-right: 0.5rem;">✉️</span>
                            <a href="mailto:<?php echo esc_attr(fencefresh_get_option('fencefresh_email', 'info@fencefresh.com')); ?>" class="footer-link">
                                <?php echo esc_html(fencefresh_get_option('fencefresh_email', 'info@fencefresh.com')); ?>
                            </a>
                        </div>
                        <div style="display: flex; align-items: flex-start; font-size: 0.875rem;">
                            <span style="margin-right: 0.5rem; margin-top: 0.125rem;">📍</span>
                            <span style="color: rgba(255, 255, 255, 0.8);"><?php echo esc_html(fencefresh_get_option('fencefresh_address', 'Walsall, West Midlands WS5 3EY')); ?></span>
                        </div>
                    </div>
                </div>

                <!-- Services -->
                <div class="footer-section">
                    <h3>Our Services</h3>
                    <ul class="footer-links">
                        <li><a href="#services" class="footer-link">Small Fence Painting</a></li>
                        <li><a href="#services" class="footer-link">Medium Fence Painting</a></li>
                        <li><a href="#services" class="footer-link">Large Fence Painting</a></li>
                        <li><a href="#services" class="footer-link">Gate Painting</a></li>
                        <li><a href="#services" class="footer-link">Fence Repairs</a></li>
                        <li><a href="#services" class="footer-link">Color Consultation</a></li>
                    </ul>
                </div>

                <!-- Service Areas -->
                <div class="footer-section">
                    <h3>Service Areas</h3>
                    <ul class="footer-links">
                        <li><a href="<?php echo esc_url(home_url('/fencing-services-in-walsall')); ?>" class="footer-link">Walsall</a></li>
                        <li><a href="<?php echo esc_url(home_url('/fencing-services-in-birmingham')); ?>" class="footer-link">Birmingham</a></li>
                        <li><a href="<?php echo esc_url(home_url('/fencing-services-in-wolverhampton')); ?>" class="footer-link">Wolverhampton</a></li>
                        <li><a href="<?php echo esc_url(home_url('/fencing-services-in-coventry')); ?>" class="footer-link">Coventry</a></li>
                        <li><a href="<?php echo esc_url(home_url('/fencing-services-in-stafford')); ?>" class="footer-link">Stafford</a></li>
                        <li><a href="#" class="footer-link">Dudley</a></li>
                        <li><a href="#" class="footer-link">West Bromwich</a></li>
                        <li><a href="#" class="footer-link">Sutton Coldfield</a></li>
                        <li><a href="#" class="footer-link">Solihull</a></li>
                        <li><a href="#" class="footer-link">Cannock</a></li>
                    </ul>
                </div>

                <!-- Business Hours & Quick Links -->
                <div class="footer-section">
                    <h3>Business Hours</h3>
                    <div style="margin-bottom: 1.5rem; font-size: 0.875rem;">
                        <div style="display: flex; align-items: center; margin-bottom: 0.5rem;">
                            <span style="margin-right: 0.5rem;">🕒</span>
                            <span style="color: rgba(255, 255, 255, 0.8);">Mon-Fri: 8AM-6PM</span>
                        </div>
                        <div style="margin-left: 1.5rem; color: rgba(255, 255, 255, 0.8);">Sat: 8AM-4PM</div>
                        <div style="margin-left: 1.5rem; color: rgba(255, 255, 255, 0.8);">Sun: Closed</div>
                        <p style="color: hsl(var(--accent)); font-size: 0.75rem; margin-top: 0.5rem;">Emergency repairs 24/7</p>
                    </div>
                    
                    <h4 style="font-weight: 600; margin-bottom: 0.75rem;">Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="#services" class="footer-link">Services</a></li>
                        <li><a href="#contact" class="footer-link">Free Quote</a></li>
                        <li><a href="<?php echo esc_url(home_url('/privacy')); ?>" class="footer-link">Privacy Policy</a></li>
                        <li><a href="<?php echo esc_url(home_url('/terms')); ?>" class="footer-link">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p class="footer-copyright">
                    © <?php echo date('Y'); ?> FenceFresh. All rights reserved.
                </p>
                <div class="footer-legal">
                    <a href="<?php echo esc_url(home_url('/privacy')); ?>" class="footer-link">Privacy Policy</a>
                    <a href="<?php echo esc_url(home_url('/terms')); ?>" class="footer-link">Terms of Service</a>
                    <a href="<?php echo esc_url(home_url('/sitemap')); ?>" class="footer-link">Sitemap</a>
                </div>
            </div>
        </div>
    </footer>
</div><!-- #page -->

<?php wp_footer(); ?>

<!-- Mobile Menu Script -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const phoneLink = document.querySelector('.header-actions .phone-link');
    
    // Show mobile menu button and hide phone link on mobile
    function checkMobile() {
        if (window.innerWidth <= 767) {
            mobileMenuButton.style.display = 'block';
            if (phoneLink) phoneLink.style.display = 'none';
        } else {
            mobileMenuButton.style.display = 'none';
            if (phoneLink) phoneLink.style.display = 'flex';
            mobileMenu.style.display = 'none';
        }
    }
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', function() {
        if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
            mobileMenu.style.display = 'block';
        } else {
            mobileMenu.style.display = 'none';
        }
    });
    
    // Close mobile menu when clicking on a link
    const mobileNavLinks = mobileMenu.querySelectorAll('.nav-link');
    mobileNavLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mobileMenu.style.display = 'none';
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
</script>

</body>
</html>