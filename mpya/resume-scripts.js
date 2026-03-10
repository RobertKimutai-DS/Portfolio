/**
 * Resume Interactive Scripts
 * Author: Robert Kimutai
 * Description: JavaScript enhancements for the professional resume
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ---- Smooth Scrolling ----
    initSmoothScrolling();
    
    // ---- Print Functionality ----
    initPrintButton();
    
    // ---- Progress Bars Animation ----
    initProgressBars();
    
    // ---- Intersection Observer for Animations ----
    initScrollAnimations();
    
    // ---- Dynamic Year Update ----
    updateCopyrightYear();
    
    // ---- Contact Links Protection ----
    protectEmailLinks();
    
    // ---- Reading Time Calculator ----
    calculateReadingTime();
    
    // ---- Theme Toggle (if needed) ----
    initThemeToggle();
    
});

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Initialize print button functionality
 */
function initPrintButton() {
    // Create print button if it doesn't exist
    const existingButton = document.querySelector('.print-button');
    if (!existingButton && !window.matchMedia('print').matches) {
        const printBtn = document.createElement('button');
        printBtn.className = 'print-button';
        printBtn.innerHTML = '<i class="fas fa-print"></i> Print Resume';
        printBtn.setAttribute('aria-label', 'Print this resume');
        
        // Style the button
        Object.assign(printBtn.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '10px 20px',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            zIndex: '1000',
            transition: 'all 0.3s ease'
        });
        
        // Add hover effect
        printBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
        });
        
        printBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
        
        // Add click handler
        printBtn.addEventListener('click', function() {
            window.print();
        });
        
        // Append to body
        document.body.appendChild(printBtn);
    }
}

/**
 * Initialize progress bars for skills (if using them)
 */
function initProgressBars() {
    const progressBars = document.querySelectorAll('.skill-progress');
    
    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-value') || '0';
        const progressFill = bar.querySelector('.progress-fill');
        
        if (progressFill) {
            // Animate on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        progressFill.style.width = value + '%';
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(bar);
        }
    });
}

/**
 * Initialize scroll animations using Intersection Observer
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.project-item, .experience-item, .education-item, .achievement-item'
    );
    
    if (animatedElements.length === 0) return;
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Set initial styles
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

/**
 * Update copyright year dynamically
 */
function updateCopyrightYear() {
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

/**
 * Protect email links from scrapers
 */
function protectEmailLinks() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const email = this.getAttribute('href').replace('mailto:', '');
            
            // Copy to clipboard
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    showTooltip(this, 'Email copied to clipboard!');
                });
            } else {
                // Fallback for older browsers
                window.location.href = this.getAttribute('href');
            }
        });
    });
}

/**
 * Calculate and display reading time
 */
function calculateReadingTime() {
    const content = document.querySelector('body');
    if (!content) return;
    
    const text = content.textContent || content.innerText;
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / wordsPerMinute);
    
    // Create reading time element if needed
    const readingTimeElement = document.createElement('div');
    readingTimeElement.className = 'reading-time';
    readingTimeElement.innerHTML = `<i class="fas fa-clock"></i> ${readingTime} min read`;
    
    Object.assign(readingTimeElement.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '5px 10px',
        background: 'rgba(102, 126, 234, 0.1)',
        borderRadius: '15px',
        fontSize: '12px',
        color: '#667eea',
        display: 'none' // Hidden by default
    });
    
    // Only show on larger screens
    if (window.innerWidth > 768) {
        readingTimeElement.style.display = 'block';
        document.body.appendChild(readingTimeElement);
    }
}

/**
 * Initialize theme toggle (dark/light mode)
 */
function initThemeToggle() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('resumeTheme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = savedTheme === 'light' ? 
        '<i class="fas fa-moon"></i>' : 
        '<i class="fas fa-sun"></i>';
    themeToggle.setAttribute('aria-label', 'Toggle theme');
    
    Object.assign(themeToggle.style, {
        position: 'fixed',
        top: '20px',
        left: '20px',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'white',
        border: '2px solid #e2e8f0',
        cursor: 'pointer',
        fontSize: '16px',
        color: '#667eea',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        zIndex: '1000'
    });
    
    // Add click handler
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('resumeTheme', newTheme);
        
        this.innerHTML = newTheme === 'light' ? 
            '<i class="fas fa-moon"></i>' : 
            '<i class="fas fa-sun"></i>';
    });
    
    // Only add theme toggle on web version
    if (!window.matchMedia('print').matches) {
        // Comment out the next line if you don't want theme toggle
        // document.body.appendChild(themeToggle);
    }
}

/**
 * Show tooltip helper function
 */
function showTooltip(element, message) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = message;
    
    Object.assign(tooltip.style, {
        position: 'absolute',
        background: '#2d3748',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '4px',
        fontSize: '12px',
        zIndex: '9999',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        opacity: '0',
        transition: 'opacity 0.3s ease'
    });
    
    document.body.appendChild(tooltip);
    
    // Position tooltip
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = (rect.top - 30) + 'px';
    
    // Show tooltip
    setTimeout(() => {
        tooltip.style.opacity = '1';
    }, 10);
    
    // Remove tooltip after 2 seconds
    setTimeout(() => {
        tooltip.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(tooltip);
        }, 300);
    }, 2000);
}

/**
 * Analytics tracking (optional)
 */
function trackEvent(category, action, label) {
    // Implement Google Analytics or other tracking here
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

/**
 * Handle window resize
 */
window.addEventListener('resize', function() {
    // Adjust mobile-specific elements
    const readingTime = document.querySelector('.reading-time');
    if (readingTime) {
        readingTime.style.display = window.innerWidth > 768 ? 'block' : 'none';
    }
});

/**
 * Performance optimization - lazy load images if any
 */
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Export functions for potential use in other scripts
window.resumeScripts = {
    initSmoothScrolling,
    initPrintButton,
    initProgressBars,
    initScrollAnimations,
    trackEvent,
    showTooltip
};