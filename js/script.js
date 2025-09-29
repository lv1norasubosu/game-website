// ページが読み込まれたら実行
document.addEventListener('DOMContentLoaded', () => {

    // content-sectionというクラス名がついた全ての要素を取得
    const sections = document.querySelectorAll('.content-section');

    // 要素が表示されているか監視する機能
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // 監視対象が画面内に入ったら
            if (entry.isIntersecting) {
                // visibleクラスを追加して表示させる
                entry.target.classList.add('visible');
                // 一度表示したら監視を停止する
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // 要素が10%見えたら実行
    });

    // 各セクションを監視対象に設定
    sections.forEach(section => {
        observer.observe(section);
    });
});

/* ===============================================
   スクリーンショットギャラリーの機能
   =============================================== */
// DOMContentLoaded はHTMLの読み込みが終わったら実行されるおまじない
document.addEventListener('DOMContentLoaded', () => {

    // ギャラリー機能が必要なページでのみ実行
    const mainImage = document.getElementById('main-screenshot');
    const thumbnails = document.querySelectorAll('.thumbnail-img');

    if (mainImage && thumbnails.length > 0) {
        
        thumbnails.forEach(thumbnail => {
            // 各サムネイルにクリックイベントを追加
            thumbnail.addEventListener('click', () => {
                // 1. クリックされたサムネイルの画像パスを取得
                const newImageSrc = thumbnail.getAttribute('src');
                
                // 2. 大きい画像の表示を更新
                mainImage.setAttribute('src', newImageSrc);

                // 3. 全てのサムネイルから 'active' クラスを一旦削除
                thumbnails.forEach(t => t.classList.remove('active'));

                // 4. クリックされたサムネイルにだけ 'active' クラスを追加
                thumbnail.classList.add('active');
            });
        });
    }
});