/**
 * FenceFresh Theme JavaScript
 */

(function($) {
    'use strict';

    // DOM Ready
    $(document).ready(function() {
        
        // Initialize smooth scrolling for anchor links
        initSmoothScrolling();
        
        // Initialize mobile menu
        initMobileMenu();
        
        // Initialize contact forms
        initContactForms();
        
        // Initialize animations
        initScrollAnimations();
        
        // Initialize service cards
        initServiceCards();
        
    });

    /**
     * Smooth scrolling for anchor links
     */
    function initSmoothScrolling() {
        $('a[href^="#"]').on('click', function(event) {
            var target = $(this.getAttribute('href'));
            
            if(target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
            }
        });
    }

    /**
     * Mobile menu functionality
     */
    function initMobileMenu() {
        const $mobileMenuButton = $('#mobile-menu-button');
        const $mobileMenu = $('#mobile-menu');
        
        $mobileMenuButton.on('click', function() {
            $mobileMenu.slideToggle(300);
        });
        
        // Close mobile menu when clicking on links
        $mobileMenu.find('a').on('click', function() {
            $mobileMenu.slideUp(300);
        });
        
        // Close mobile menu when clicking outside
        $(document).on('click', function(event) {
            if (!$(event.target).closest('.mobile-menu, #mobile-menu-button').length) {
                $mobileMenu.slideUp(300);
            }
        });
        
        // Handle responsive behavior
        $(window).on('resize', function() {
            if ($(window).width() > 767) {
                $mobileMenu.hide();
            }
        });
    }

    /**
     * Contact form handling
     */
    function initContactForms() {
        $('.contact-form').on('submit', function(event) {
            event.preventDefault();
            
            const $form = $(this);
            const $submitButton = $form.find('button[type="submit"]');
            const originalText = $submitButton.text();
            
            // Show loading state
            $submitButton.text('Sending...').prop('disabled', true);
            
            // Get form data
            const formData = new FormData(this);
            formData.append('action', 'fencefresh_contact_form');
            formData.append('nonce', fencefresh_ajax.nonce);
            
            // Send AJAX request
            $.ajax({
                url: fencefresh_ajax.ajax_url,
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function(response) {
                    if (response.success) {
                        showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                        $form[0].reset();
                    } else {
                        showNotification(response.data || 'There was an error sending your message. Please try again.', 'error');
                    }
                },
                error: function() {
                    showNotification('There was an error sending your message. Please try again.', 'error');
                },
                complete: function() {
                    $submitButton.text(originalText).prop('disabled', false);
                }
            });
        });
    }

    /**
     * Scroll animations
     */
    function initScrollAnimations() {
        // Intersection Observer for fade-in animations
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            // Observe elements for animation
            $('.service-card, .section-header, .hero-content').each(function() {
                observer.observe(this);
            });
        }
    }

    /**
     * Service card interactions
     */
    function initServiceCards() {
        $('.service-card').hover(
            function() {
                $(this).addClass('hovered');
            },
            function() {
                $(this).removeClass('hovered');
            }
        );
        
        // Add click tracking for service cards
        $('.service-card .btn').on('click', function() {
            const serviceName = $(this).closest('.service-card').find('.service-title').text();
            
            // Track service interest (if analytics is available)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'service_interest', {
                    'service_name': serviceName,
                    'event_category': 'engagement'
                });
            }
        });
    }

    /**
     * Show notification
     */
    function showNotification(message, type) {
        const notification = $('<div class="notification notification-' + type + '">' + 
            '<span>' + message + '</span>' +
            '<button class="notification-close">&times;</button>' +
        '</div>');
        
        $('body').append(notification);
        
        // Show notification
        setTimeout(function() {
            notification.addClass('show');
        }, 100);
        
        // Auto hide after 5 seconds
        setTimeout(function() {
            hideNotification(notification);
        }, 5000);
        
        // Close button functionality
        notification.find('.notification-close').on('click', function() {
            hideNotification(notification);
        });
    }

    /**
     * Hide notification
     */
    function hideNotification($notification) {
        $notification.removeClass('show');
        setTimeout(function() {
            $notification.remove();
        }, 300);
    }

    /**
     * Phone number tracking
     */
    $('a[href^="tel:"]').on('click', function() {
        const phoneNumber = $(this).attr('href').replace('tel:', '');
        
        // Track phone click (if analytics is available)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'phone_click', {
                'phone_number': phoneNumber,
                'event_category': 'contact'
            });
        }
    });

    /**
     * Email tracking
     */
    $('a[href^="mailto:"]').on('click', function() {
        const email = $(this).attr('href').replace('mailto:', '');
        
        // Track email click (if analytics is available)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'email_click', {
                'email_address': email,
                'event_category': 'contact'
            });
        }
    });

})(jQuery);

// Add CSS for notifications and animations
const dynamicCSS = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: var(--radius);
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-success {
        background: hsl(var(--primary));
        color: hsl(var(--primary-foreground));
    }
    
    .notification-error {
        background: hsl(var(--destructive));
        color: hsl(var(--destructive-foreground));
    }
    
    .notification-close {
        background: none;
        border: none;
        color: inherit;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: 0.5rem;
        opacity: 0.7;
    }
    
    .notification-close:hover {
        opacity: 1;
    }
    
    .service-card {
        opacity: 0;
        transform: translateY(20px);
        transition: var(--transition-smooth);
    }
    
    .service-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .service-card.hovered {
        transform: translateY(-5px);
    }
    
    .section-header {
        opacity: 0;
        transform: translateY(20px);
        transition: var(--transition-smooth);
    }
    
    .section-header.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hero-content {
        opacity: 0;
        transform: translateY(30px);
        transition: var(--transition-smooth);
    }
    
    .hero-content.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    @media (max-width: 767px) {
        .notification {
            right: 10px;
            left: 10px;
            max-width: none;
            transform: translateY(-100px);
        }
        
        .notification.show {
            transform: translateY(0);
        }
    }
`;

// Inject CSS
const style = document.createElement('style');
style.textContent = dynamicCSS;
document.head.appendChild(style);