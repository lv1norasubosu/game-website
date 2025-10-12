// ページが読み込まれたら、すべてのJavaScriptを実行する
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM読み込み完了。スクリプト初期化開始。'); // ★追加

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
    
    // ★追加: ヘッダーが見つかったか確認
    if (header) {
        console.log('ヘッダー要素を発見。スクロールイベント監視を開始します。');
    } else {
        console.error('致命的エラー: ヘッダー要素が見つかりませんでした。');
    }

    window.addEventListener('scroll', () => {
        // ★追加: イベントが発生したことを確認
        console.log('スクロールイベント発生！');

        if (!header) return;

        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        // ★追加: スクロール位置の数値を表示
        console.log(`現在位置: ${currentScrollPosition}, 前回位置: ${lastScrollPosition}`);

        if (currentScrollPosition > lastScrollPosition) {
            // 下にスクロールした場合
            header.style.transform = 'translateY(-100%)';
            // ★追加: どちらの処理が実行されたか表示
            console.log('▼ 下スクロール検知 → ヘッダーを隠します');
        } else {
            // 上にスクロールした場合
            header.style.transform = 'translateY(0)';
            // ★追加: どちらの処理が実行されたか表示
            console.log('▲ 上スクロール検知 → ヘッダーを表示します');
        }
        lastScrollPosition = currentScrollPosition;
    });

});