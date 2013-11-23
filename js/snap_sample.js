(function () {
  // 初期設定
  var s = Snap("svg");
  var node = s.node;
  var width = node.clientWidth || node.parentNode.clientWidth;
  var height = node.clientHeight || node.parentNode.clientHeight;
  var count = 0;

  // ランダムな色を設定するための配列
  var colors = ['orange', 'red', 'blue', 'green'];

  // ボタンクリック時の処理
  var button = document.querySelector('#action');
  button.onclick = function () {
    put();
    console.log(this);
    this.innerHTML = ++count;
  }

  // 円を配置する処理
  function put() {
    var circle = s.circle(Math.random() * width, Math.random() * height, 15);
    circle.attr({fill: colors[Math.random() * colors.length | 0]});
    move(circle);
  }

  // 円をランダムに動かし続ける処理
  function move(circle) {
    circle.animate({cx: Math.random() * width, cy: Math.random() * height},
      Math.random() * 500 + 500,
      null,
      function() {
        move(circle);
      }
    );
  }
})();
