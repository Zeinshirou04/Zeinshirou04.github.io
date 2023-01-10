var width = window.innerWidth;
var height = window.innerHeight;

console.log(`The width is ${width} and the height is ${height}`);

var guestName = function () {
    const name = document.getElementById('guestName').innerHTML;
    return name;
}

window.location.href = '/?#';

var changeHtml = function (event) {
    const body = document.body;
    body.style.animationName = 'changeHtml';
    body.style.animationDuration = '1s';
    body.style.animationFillMode = 'forwards';
    setTimeout(function () {
        window.location.href = 'content/index.html';
    }, 1500);
}
