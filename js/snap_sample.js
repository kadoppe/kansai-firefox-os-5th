(function () {
  var s = Snap("svg");
  var node = s.node;
  var width = node.clientWidth || node.parentNode.clientWidth;
  var height = node.clientHeight || node.parentNode.clientHeight;

  var colors = ['orange', 'red', 'blue', 'green'];
  var count = 0;

  var button = document.querySelector('#action');
  button.onclick = function () {
    put();
    console.log(this);
    this.innerHTML = ++count;
  }

  function put() {
    var circle = s.circle(Math.random() * width, Math.random() * height, 15);
    circle.attr({fill: colors[Math.random() * colors.length | 0]});
    move(circle);
  }

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
