// ハンバーガーボタンとメニュー要素を取得
const hamburgerBtn = document.getElementById('hamburger-btn');
const overlayMenu = document.getElementById('overlay-menu');

// ボタンがクリックされた時の処理
hamburgerBtn.addEventListener('click', function() {
    // ボタンに 'open' クラスをつけ外しする（×印になる）
    this.classList.toggle('open');
    
    // メニューに 'active' クラスをつけ外しする（ふわっと出る）
    overlayMenu.classList.toggle('active');
});