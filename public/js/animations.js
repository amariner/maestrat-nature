/**
 * Subtle Fade-in and Lazy Load Animations
 * Using Intersection Observer for performance
 */

// Configuration for the observer
const observerConfig = {
    root: null,
    rootMargin: '0px 0px -50px 0px', // Trigger slightly before element enters viewport
    threshold: 0.1 // Trigger when 10% of element is visible
};

// Create the intersection observer
const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the visible class to trigger animation
            entry.target.classList.add('is-visible');

            // Optionally unobserve after animation to improve performance
            // Comment this line if you want elements to animate every time they enter viewport
            observer.unobserve(entry.target);
        }
    });
}, observerConfig);

// Initialize animations when DOM is ready
function initAnimations() {
    // Select all elements with fade-in classes
    const fadeElements = document.querySelectorAll(
        '.fade-in-heading, .fade-in-description, .fade-in-card, .fade-in-image, .fade-in'
    );

    // Observe each element
    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
}

// Lazy load images
function initLazyLoad() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;

                // Add a subtle fade-in when image loads
                img.classList.add('lazy-loading');

                // When image is fully loaded, add loaded class
                if (img.complete) {
                    img.classList.add('lazy-loaded');
                } else {
                    img.addEventListener('load', () => {
                        img.classList.add('lazy-loaded');
                    });
                }

                observer.unobserve(img);
            }
        });
    }, observerConfig);

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
}

// Parallax effect for hero section
function initParallax() {
    const heroSection = document.querySelector('.section.full-screen');

    if (!heroSection) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        // Only apply if hero is in view
        if (scrolled < window.innerHeight) {
            // Move background slower than scroll (subtle parallax)
            const yPos = -(scrolled * 0.2);
            heroSection.style.backgroundPosition = `50% calc(50% + ${yPos}px)`;
        }
    });
}

// Initialize everything when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initAnimations();
        initLazyLoad();
        initParallax();
    });
} else {
    // DOM is already ready
    initAnimations();
    initLazyLoad();
    initParallax();
}

// Re-initialize on page navigation (for SPAs)
document.addEventListener('astro:page-load', () => {
    initAnimations();
    initLazyLoad();
    initParallax();
});
