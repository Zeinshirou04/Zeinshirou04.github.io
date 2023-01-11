var width = window.innerWidth;
var height = window.innerHeight;

console.log(`The width is ${width} and the height is ${height}`);

var guestName = function () {
    const name = document.getElementById('guestName').innerHTML;
    return name;
}

window.location.href = '/?#';

var changeHtml = function (event) {
    const mainBody = document.getElementById("articleUtama");
    const secBody = document.getElementById("articleKedua")
    mainBody.style.animationName = 'swipeUp';
    mainBody.style.animationDuration = '1s';
    mainBody.style.animationFillMode = 'forwards';
    setTimeout(function () {
        mainBody.style.display = 'none';
        var secStyle = document.querySelector("link[rel='stylesheet']");
        var secJs = document.getElementById("firstJs");
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css';
        link.integrity = 'sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
        secStyle.href = "./content/styles/styles.css";
        secJs.src = "./config/configSec.js";
        secBody.style.display = 'block';
    }, 1000);
}

var form = document.formTemplate;
var guestNameHusband = document.getElementById("guestNameHusband");
var guestNameWife = document.getElementById("guestNameWife");

form.yes.onclick = function (event) {
    var innerFormOne = document.getElementById('formOne');
    var innerFormTwo = document.getElementById('formTwo');
    innerFormOne.style.animationName = 'fadeOut';
    innerFormOne.style.animationDuration = '0.5s';
    innerFormOne.style.animationFillMode = 'forwards';
    innerFormTwo.style.animationName = 'fadeIn';
    innerFormTwo.style.animationDuration = '0.5s';
    innerFormTwo.style.animationFillMode = 'forwards';
    setTimeout(function () {
        innerFormOne.style.display = 'none';
        innerFormTwo.style.display = 'block';
    }, 1000);
}

form.onsubmit = function (event) {
    event.preventDefault();
    guestNameHusband.innerHTML = form.recepientHus.value;
    guestNameWife.innerHTML = form.recepientWife.value;
    var innerFormTwo = document.getElementById('formTwo');
    var innerFormThree = document.getElementById('formThree');
    innerFormTwo.style.animationName = 'fadeOut';
    innerFormTwo.style.animationDuration = '0.5s';
    innerFormTwo.style.animationFillMode = 'forwards';
    setTimeout(function () {
        innerFormTwo.style.display = 'none';
        document.getElementById("outerPopup").innerHTML = "<h2>You Ready To Go!</h2>";
    }, 600);
    setTimeout(function () {
        document.getElementById("popup").style.display = 'none';
    }, 1100);
}
