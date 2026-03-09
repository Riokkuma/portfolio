// Tailwind Configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'bg-main': '#F8EBDD',
                'card-bg': '#FFF9F4',
                'primary': '#A47148',
                'dark': '#5C4033',
                'accent-pink': '#F7C6C7',
                'accent-purple': '#E6B8E8',
                'accent-yellow': '#F4C430',
                'text-main': '#6E5C4F',
            }
        }
    }
}

// Navigation and Scroll Effects
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');
    const backToTop = document.getElementById('back-to-top');
    let lastScrollY = window.scrollY;

    // Scroll events
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (nav) {
            // Scroll behavior for navigation
            if (currentScrollY > 50) {
                nav.classList.add('shadow-lg', 'py-2');
                nav.classList.remove('py-4');
            } else {
                nav.classList.remove('shadow-lg', 'py-2');
                nav.classList.add('py-4');
            }

            if (currentScrollY > lastScrollY && currentScrollY > 500) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }
        }

        if (backToTop) {
            // Back to Top button visibility
            if (currentScrollY > 800) {
                backToTop.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
            } else {
                backToTop.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
            }
        }

        lastScrollY = currentScrollY;
    });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Intersection Observer for Scroll Reveal
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
            el.style.opacity = '0';
            observer.observe(el);
        }
    });
});
