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