// ページが読み込まれたら、すべてのJavaScriptを実行する
document.addEventListener('DOMContentLoaded', () => {
    /* ===============================================
       1. スクロールでコンテンツをフワッと表示させる機能
       =============================================== */
    const sections = document.querySelectorAll('.content-section');
    if (sections.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    /* ===============================================
       2. スクリーンショットギャラリーの機能
       =============================================== */
    const mainImage = document.getElementById('main-screenshot');
    const thumbnails = document.querySelectorAll('.thumbnail-img');
    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                mainImage.src = thumbnail.src;
                thumbnails.forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
            });
        });
    }

    /* ===============================================
       3. スクロールでヘッダーを表示/非表示にする機能
       =============================================== */
    let lastScrollPosition = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (!header) return;

        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollPosition > lastScrollPosition) {
            // 下にスクロールした場合
            header.style.transform = 'translateY(-100%)';
        } else {
            // 上にスクロールした場合
            header.style.transform = 'translateY(0)';
        }
        lastScrollPosition = currentScrollPosition;
    });

});