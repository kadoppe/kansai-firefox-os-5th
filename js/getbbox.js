(function () {
  var visible = document.querySelector("#visible");
  var invisible = document.querySelector("#invisible");

  try {
    alert(visible.getBBox().width);
    alert(invisible.getBBox().width);
  } catch (e) {
    alert(e);
  }
})();
