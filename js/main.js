document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = !isExpanded ? 'hidden' : '';
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    // 3. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal-up');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 4. Animated Number Counter
    const countElements = document.querySelectorAll('.proof-number');
    let hasCounted = false;

    const animateValue = (obj, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // easeOutQuart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            
            let currentVal = Math.floor(easeProgress * (end - start) + start);
            
            // Format number with commas if >= 1000
            if (currentVal >= 1000) {
                obj.innerHTML = currentVal.toLocaleString('es-UY');
            } else {
                obj.innerHTML = currentVal;
            }
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                if (end >= 1000) {
                    obj.innerHTML = end.toLocaleString('es-UY');
                } else {
                    obj.innerHTML = end;
                }
            }
        };
        window.requestAnimationFrame(step);
    };

    const statsSection = document.querySelector('.social-proof');
    
    if (statsSection && countElements.length > 0) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasCounted) {
                hasCounted = true;
                countElements.forEach(el => {
                    const target = parseInt(el.getAttribute('data-target'), 10);
                    animateValue(el, 0, target, 2000);
                });
            }
        }, { threshold: 0.5 });

        statsObserver.observe(statsSection);
    }
});
