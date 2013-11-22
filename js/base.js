// Reload content
var reload = document.querySelector("#reload");
if (reload) {
    reload.onclick = function () {
        location.reload(true);
    };
}

// Back to index.html
var back = document.querySelector("#back");
if (back) {
    back.onclick = function () {
        window.location = window.location.protocol + '//' + window.location.host + '/index.html';
    };
}
