var width = window.innerWidth;
var height = window.innerHeight;

console.log(`The width is ${width} and the height is ${height}`);

var guestName = function () {
    const name = document.getElementById('guestName').innerHTML;
    return name;
}

const audio = document.getElementById('bgm');

window.location.href = '/?#';

var changeHtml = function (event) {
    const mainBody = document.getElementById("articleUtama");
    const secBody = document.getElementById("articleKedua")
    mainBody.style.animationName = 'fadeOut';
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
        secBody.style.display = 'block';
        audio.play();
        audio.loop = true;
        audio.volume = 10/100;
        if(audio.play()) {
            console.log('Audio is playing');
        } else {
            console.log('Audio is not playing');
        }
    }, 1200);
}

var form = document.formTemplate;
var guestNameHusband = document.getElementById("guestNameHusband");
var innerGuestName = document.getElementById("innerGuestName");
var guestNameWife = document.getElementById("guestNameWife");
var gloomName = document.getElementById("gloomName");
var brideName = document.getElementById("brideName");
var gloomNameBig = document.getElementById("gloomNameBig");
var brideNameBig = document.getElementById("brideNameBig");

form.yes.onclick = function (event) {
    var innerFormOne = document.getElementById('formOne');
    var innerFormTwo = document.getElementById('formTwoYes');
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

form.no.onclick = function (event) {
    var innerFormOne = document.getElementById('formOne');
    var innerFormTwo = document.getElementById('formTwoNo');
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

form.nextYes.onclick = function (event) {
    var innerFormThree = document.getElementById('formThree');
    var innerFormTwo = document.getElementById('formTwoYes');
    guestNameHusband.innerHTML = form.recepientHus.value;
    guestNameWife.innerHTML = form.recepientWife.value;
    innerGuestName.innerHTML = `Dear ${form.recepientHus.value} and Wife`;
    innerFormTwo.style.animationName = 'fadeOut';
    innerFormTwo.style.animationDuration = '0.5s';
    innerFormTwo.style.animationFillMode = 'forwards';
    innerFormThree.style.animationName = 'fadeIn';
    innerFormThree.style.animationDuration = '0.5s';
    innerFormThree.style.animationFillMode = 'forwards';
    setTimeout(function () {
        innerFormTwo.style.display = 'none';
        innerFormThree.style.display = 'block';
    }, 1000);
}

form.nextNo.onclick = function (event) {
    guestNameWife.remove();
    var innerFormThree = document.getElementById('formThree');
    var innerFormTwo = document.getElementById('formTwoNo');
    guestNameHusband.innerHTML = form.recepient.value;
    innerGuestName.innerHTML = `Dear ${form.recepient.value}`;
    innerFormTwo.style.animationName = 'fadeOut';
    innerFormTwo.style.animationDuration = '0.5s';
    innerFormTwo.style.animationFillMode = 'forwards';
    innerFormThree.style.animationName = 'fadeIn';
    innerFormThree.style.animationDuration = '0.5s';
    innerFormThree.style.animationFillMode = 'forwards';
    setTimeout(function () {
        innerFormTwo.style.display = 'none';
        innerFormThree.style.display = 'block';
    }, 1000);
}

form.onsubmit = function (event) {
    event.preventDefault();
    var innerFormTwo = document.getElementById('formTwo');
    var innerFormThree = document.getElementById('formThree');
    gloomName.innerHTML = form.gloomName.value.split(" ")[0];
    brideName.innerHTML = form.brideName.value.split(" ")[0];
    gloomNameBig.innerHTML = form.gloomName.value;
    brideNameBig.innerHTML = form.brideName.value;
    innerFormThree.style.animationName = 'fadeOut';
    innerFormThree.style.animationDuration = '0.5s';
    innerFormThree.style.animationFillMode = 'forwards';
    setTimeout(function () {
        innerFormThree.style.display = 'none';
        document.getElementById("outerPopup").innerHTML = "<h2>You Ready To Go!</h2>";
    }, 600);
    setTimeout(function () {
        document.getElementById("popup").style.display = 'none';
    }, 1100);
}


var formDoa = document.doaGuest
var doaJadi = {
    "Bagas": "May Allah blessing upon you both, Also don't forget to love each other. Allah will guide you both to be the best family ever",
    "Anonymous": "Hope you both live happily!"
}
var boxDoa = document.getElementById('chatDoa')
var hasil = ``
for(var key in doaJadi) {
    hasil += `<h6 class="namaPengirim">${key}</h6>`
    hasil += `<div class="chat-bubble">`
    hasil += `<p>${doaJadi[key]}</p>`
    hasil += `</div>`
}
boxDoa.innerHTML = hasil
var i = 0;
formDoa.onsubmit = function(event) {
    event.preventDefault();
    var doa = formDoa.doa.value, nama = formDoa.nama.value;
    if(nama === "") {
        nama = "Anonymous"
        for(var key in doaJadi) {
        if(nama == key) {
            nama += ` ${++i}`
        }
        }
    }
    console.log(nama)
    Object.defineProperty(doaJadi, nama, {
        value: doa,
        writable: false,
        enumerable: true,
        configurable: true
    })
    var hasil = ``
    for(var key in doaJadi) {
        hasil += `<h6 class="namaPengirim">${key}</h6>`
        hasil += `<div class="chat-bubble">`
        hasil += `<p>${doaJadi[key]}</p>`
        hasil += `</div>`
    }
    return boxDoa.innerHTML = hasil
}

formDoa.addEventListener = ('submit', function(event) {
})
