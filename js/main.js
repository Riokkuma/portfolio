// Navigation and Scroll Effects
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');
    const backToTop = document.getElementById('back-to-top');
    let lastScrollY = window.scrollY;

    // Navigation and Scroll logic
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (nav) {
            // Shadow on scroll
            if (currentScrollY > 50) {
                nav.classList.add('shadow-lg', 'py-2');
                nav.classList.remove('py-4');
            } else {
                nav.classList.remove('shadow-lg', 'py-2');
                nav.classList.add('py-4');
            }

            // Hide/Show on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 500) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }
        }

        if (backToTop) {
            // Back to Top button visibility
            if (currentScrollY > 800) {
                backToTop.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-10');
            } else {
                backToTop.classList.add('opacity-0', 'pointer-events-none', 'translate-y-10');
            }
        }

        lastScrollY = currentScrollY;
    });

    if (backToTop) {
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Intersection Observer for Scroll Reveal ---
    // Instead of hiding with JS (which can fail), we rely on CSS classes for initial state
    // but here we just ensure consistency.
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    entry.target.style.opacity = '1';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('section, header, footer').forEach(el => {
            if (!el.classList.contains('no-reveal')) {
                // Ensure visibility is managed by the fade-in-up class or just keep it visible
                // For safety, we only set opacity: 0 if it's NOT already in view
                const rect = el.getBoundingClientRect();
                const isInView = (rect.top <= window.innerHeight && rect.bottom >= 0);

                if (!isInView) {
                    el.style.opacity = '0';
                    el.style.transition = 'opacity 0.8s ease-out';
                    observer.observe(el);
                } else {
                    el.style.opacity = '1';
                }
            }
        });
    } else {
        // Fallback for older browsers
        document.querySelectorAll('section, header, footer').forEach(el => {
            el.style.opacity = '1';
        });
    }
});
