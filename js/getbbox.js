(function () {
  // 表示されている円を取得
  var visible = document.querySelector("#visible");

  // 表示されていない円を取得
  var invisible = document.querySelector("#invisible");

  // getBBoxの呼び出し
  try {
    alert(visible.getBBox().width);
    alert(invisible.getBBox().width);
  } catch (e) {
    alert(e);
  }
})();
