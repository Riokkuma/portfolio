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

            // スクロールしても常にナビを表示し続けるよ🐻
            nav.style.transform = 'translateY(0)';
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

    // 🐻 画像の簡単保存防止（右クリック禁止・ドラッグ禁止） 🐾
    document.querySelectorAll('img').forEach(img => {
        // 右クリックで「名前を付けて保存」メニューが出るのを防ぐよ
        img.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
        // ドラッグ開始をJavaScriptでもしっかり禁止するよ
        img.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });
    });
    // --- 🐻 抽出ギミック 1: スクロールゲージを歩くクマ (Walking Bear) ---
    initWalkingBear();

    // --- 🐻 抽出ギミック 2: マウスを目で追うクマ (Follow Bear) ---
    initFollowBear();
});


/**
 * 🐻 ギミック 1: スクロール進捗ゲージの上を歩くクマ
 */
function initWalkingBear() {
    // 既存コンテナがない場合、DOMに動的追加
    let container = document.getElementById('bear-scroll-container');
    let wrapper = document.getElementById('walking-bear-wrapper');

    if (!container) {
        container = document.createElement('div');
        container.id = 'bear-scroll-container';
        container.innerHTML = '<div id="bear-scroll-bar"></div>';
        document.body.appendChild(container);
    }

    if (!wrapper) {
        wrapper = document.createElement('div');
        wrapper.id = 'walking-bear-wrapper';
        wrapper.innerHTML = `
            <svg viewBox="0 0 62 42" class="walking-bear-svg" aria-hidden="true">
                <!-- 🐻 尻尾（左側・背中） -->
                <ellipse cx="9" cy="27" rx="5" ry="4" fill="#F0DFC8" />
                <ellipse cx="9" cy="27" rx="3" ry="2.5" fill="#FFFDFA" opacity="0.8" />
                <!-- 🐻 胴体 -->
                <g class="walking-bear-body">
                    <ellipse cx="31" cy="27" rx="16" ry="10" fill="#E2C7A9" />
                    <!-- 頭（右側） -->
                    <circle cx="48" cy="20" r="10" fill="#E2C7A9" />
                    <!-- 耳（左） -->
                    <circle cx="41" cy="11" r="5" fill="#E2C7A9" />
                    <circle cx="41" cy="11" r="2.5" fill="#F4CDD5" />
                    <!-- 耳（右） -->
                    <circle cx="53" cy="10" r="5" fill="#E2C7A9" />
                    <circle cx="53" cy="10" r="2.5" fill="#F4CDD5" />
                    <!-- マズル（口元の白い部分） -->
                    <ellipse cx="55" cy="23" rx="5" ry="3.5" fill="#FFFDFA" opacity="0.9" />
                    <!-- 鼻 -->
                    <ellipse cx="57" cy="21.5" rx="1.8" ry="1.3" fill="#4A3A31" />
                    <!-- 目 -->
                    <circle cx="49" cy="16" r="2" fill="#4A3A31" />
                    <circle cx="49.8" cy="15.2" r="0.6" fill="white" />
                </g>
                <!-- 🐾 足（左右） -->
                <rect class="walking-bear-leg-left" x="21" y="33" width="7" height="8" rx="3.5" fill="#D3B492" />
                <rect class="walking-bear-leg-right" x="35" y="33" width="7" height="8" rx="3.5" fill="#D3B492" />
            </svg>
        `;
        document.body.appendChild(wrapper);
    }

    const scrollBar = document.getElementById('bear-scroll-bar');
    let scrollTimeout = null;

    const updateScrollProgress = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0 ? Math.min(1, Math.max(0, scrollTop / scrollHeight)) : 0;
        const percentage = progress * 100;

        if (scrollBar) {
            scrollBar.style.width = `${percentage}%`;
        }
        if (wrapper) {
            wrapper.style.left = `${percentage}%`;
            wrapper.classList.add('is-scrolling');
        }

        // スクロール停止検知
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (wrapper) {
                wrapper.classList.remove('is-scrolling');
            }
        }, 150);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();
}

/**
 * 🐻 ギミック 2: マウスカーソルを目で追うクマ
 */
function initFollowBear() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const followBears = document.querySelectorAll('.follow-bear-svg');
    if (followBears.length === 0) return;

    window.addEventListener('pointermove', (event) => {
        followBears.forEach(svg => {
            const pupils = svg.querySelectorAll('.follow-bear-pupil');
            if (pupils.length === 0) return;

            const box = svg.getBoundingClientRect();
            const centerX = box.left + box.width / 2;
            const centerY = box.top + box.height / 2;

            const dx = event.clientX - centerX;
            const dy = event.clientY - centerY;
            const dist = Math.hypot(dx, dy) || 1;
            // 目の動きを控えめ(最大1.6px)にして優しく自然に動かす
            const reach = Math.min(1, dist / 300) * 1.6;

            const pupilX = (dx / dist) * reach;
            const pupilY = (dy / dist) * reach;

            pupils.forEach(pupil => {
                pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
            });
        });
    }, { passive: true });
}
