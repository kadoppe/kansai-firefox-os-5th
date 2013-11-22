(function () {
    var imgElement = document.querySelector("#img_element");
    if (imgElement) {
        imgElement.onclick = function () {
            window.location = window.location.protocol + '//' + window.location.host + '/html/img_element.html';
        }
    }

    var svgElement = document.querySelector("#svg_element");
    if (svgElement) {
        svgElement.onclick = function () {
            window.location = window.location.protocol + '//' + window.location.host + '/html/svg_element.html';
        }
    }

    var d3 = document.querySelector("#d3");
    if (d3) {
        d3.onclick = function () {
            window.location = window.location.protocol + '//' + window.location.host + '/html/d3.html';
        }
    }

    var snap = document.querySelector("#snap");
    if (snap) {
        snap.onclick = function () {
            window.location = window.location.protocol + '//' + window.location.host + '/html/snap.html';
        }
    }

    var textDecoration = document.querySelector("#text_decoration");
    if (text_decoration) {
        textDecoration.onclick = function () {
            window.location = window.location.protocol + '//' + window.location.host + '/html/text_decoration.html';
        }
    }

    var getbbox = document.querySelector("#getbbox");
    if (getbbox) {
        getbbox.onclick = function () {
            window.location = window.location.protocol + '//' + window.location.host + '/html/getbbox.html';
        }
    }
})();
