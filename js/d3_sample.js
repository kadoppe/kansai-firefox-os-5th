(function () {
  // 初期設定
  var svg = d3.select("svg");
  var svgNode = svg.node();
  var width = svgNode.clientWidth || svgNode.parentNode.clientWidth;
  var height = svgNode.clientHeight || svgNode.parentNode.clientHeight;
  var scale = d3.scale.linear()
    .domain([0, 20000])
    .range([3, 15]);
  var button = d3.select('#action')

  // Dataの取得
  d3.json('/data/network.json', function(error, network) {
    // link（線）の追加
    var link = svg.selectAll('line').data(network.links)
      .enter().append('line');

    // node（円）の追加
    var node = svg.selectAll('circle')
      .data(network.nodes, function(d) { return d.id })
      .enter().append('circle')
      .attr({
        class: function(d) { return d.gender },
        r: function(d) {return scale(d.checkins)},
      });

    // レイアウト（force-directedアルゴリズム）の設定
    var force = d3.layout.force()
      .nodes(network.nodes)
      .links(network.links)
      .size([width, height])

    force.on('tick', function () {
      link.attr({
        x1: function(d) { return d.source.x; },
        y1: function(d) { return d.source.y; },
        x2: function(d) { return d.target.x; },
        y2: function(d) { return d.target.y; }
      });

      node.attr({
        cx: function(d) { return d.x; },
        cy: function(d) { return d.y; }
      });
    })

    force.start();

    // ドラッグ操作の有効化
    node.call(force.drag)

    // ボタンクリック時の処理
    button.on('click', function() {
      var filteredLinks = network.links.filter(function(link) {
        return link.source.gender === 'male' && link.target.gender === 'male'
      });

      link.data(filteredLinks)
        .exit().remove();
      force.links(filteredLinks).resume();
    });
  });
})();
