// Navigation and Scroll Effects
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');
    const backToTop = document.getElementById('back-to-top');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    let lastScrollY = window.scrollY;

    // Mobile Menu Logic
    if (mobileMenuBtn && mobileMenu) {
        // メニューを開く
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('menu-open');
            document.body.style.overflow = 'hidden'; // 背面のスクロール防止
        });

        // メニューを閉じる
        const closeMenu = () => {
            mobileMenu.classList.remove('menu-open');
            document.body.style.overflow = ''; // スクロール再開
        };

        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', closeMenu);
        }

        // リンクをクリックしたらメニューを閉じる
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

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
    // クマの修正：スマホで見えなくなるバグを防ぐため、フワッと表示するアニメーションを完全に停止し、
    // 最初からすべてのコンテンツが確実に見えるようにしました🐻
    document.querySelectorAll('section, header, footer').forEach(el => {
        el.style.opacity = '1';
    });
});
