// 定数の定義
const loading = document.getElementById('loading');

// cssクラスを追加する関数
function animation(){
  loading.classList.add('loaded');
}

// 指定秒後に動作させる
window.setTimeout( animation, 2000 );
