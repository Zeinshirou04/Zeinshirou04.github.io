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

var formOne = document.getElementById("EO");
var formTwo = document.getElementById("Public");

var form = document.formTemplate;
var guestNameHusband = document.getElementById("guestNameHusband"), 
    innerGuestName = document.getElementById("innerGuestName"),
    guestNameWife = document.getElementById("guestNameWife"),
    gloomName = document.getElementById("gloomName"),
    brideName = document.getElementById("brideName"),
    gloomNameBig = document.getElementById("gloomNameBig"),
    brideNameBig = document.getElementById("brideNameBig"),
    marriedDate = document.getElementById("marriedDate"),
    dowryName = document.getElementById("dowryName"),
    eventDate = document.getElementById("eventDate")
    eventTimeStart = document.getElementById("eventTimeBeg"),
    eventTimeEnd = document.getElementById("eventTimeEnd");

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
    if(form.recepientHus.value == '' || form.recepientWife.value == '') return
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
    if(form.recepient.value == '') return
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

form.nextBride.onclick = function (event) {
    if(form.gloomName.value == '' || form.brideName.value == '') return
    event.preventDefault();
    var innerFormThree = document.getElementById('formThree');
    var innerFormFour = document.getElementById('formFour');
    gloomName.innerHTML = form.gloomName.value.split(" ")[0];
    brideName.innerHTML = form.brideName.value.split(" ")[0];
    gloomNameBig.innerHTML = form.gloomName.value;
    brideNameBig.innerHTML = form.brideName.value;
    innerFormThree.style.animationName = 'fadeOut';
    innerFormThree.style.animationDuration = '0.5s';
    innerFormThree.style.animationFillMode = 'forwards';
    innerFormFour.style.animationName = 'fadeIn';
    innerFormFour.style.animationDuration = '0.5s';
    innerFormFour.style.animationFillMode = 'forwards';
    setTimeout(function () {
        innerFormThree.style.display = 'none';
        innerFormFour.style.display = 'block'
    }, 1000);
}

form.nextDate.onclick = function (event) {
    if(form.marriedDate == '' || form.dowry.value == '' || form.reservationDate.value == '' || form.reservationTime.value == '') return
    event.preventDefault();
    var innerFormFour = document.getElementById('formFour');
    var innerFormFive = document.getElementById('formFive');
    marriedDate.innerHTML = form.marriedDates.value;
    dowryName.innerHTML = form.dowry.value;
    eventDate.innerHTML = form.reservationDate.value;
    eventTimeStart.innerHTML = form.reservationTime.value.split("-")[0];
    eventTimeEnd.innerHTML = form.reservationTime.value.split("-")[1];
    innerFormFour.style.animationName = 'fadeOut';
    innerFormFour.style.animationDuration = '0.5s';
    innerFormFour.style.animationFillMode = 'forwards';
    setTimeout(function () {
        innerFormFour.style.display = 'none';
        innerFormFive.style.display = 'block';
        document.getElementById("outerPopup").style.marginBottom = '220px'
    }, 1000);
}

form.finish.onclick = function (event) {
    if (form.eventAddress.value == '' || form.embedMaps.value == '') return
    event.preventDefault();
    var innerFormFive = document.getElementById('formFive');
    var titlePopup = document.getElementById("titlePopUp");
    var alamatAcara = document.getElementById("eventAddressReady");
    var mapsAcara = document.getElementById("iframeMaps");
    alamatAcara.innerHTML = form.eventAddress.value;
    mapsAcara.innerHTML = form.embedMaps.value;
    innerFormFive.style.animationName = 'fadeOut';
    innerFormFive.style.animationDuration = '0.5s';
    innerFormFive.style.animationFillMode = 'forwards';
    titlePopup.style.animationName = 'fadeOut';
    titlePopup.style.animationDuration = '0.5s';
    titlePopup.style.animationFillMode = 'forwards';
    setTimeout(function () {
        document.getElementById("outerPopup").style.marginBottom = '0px'
        innerFormFive.style.display = 'none';
        titlePopup.style.display = 'none';
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

var menuHover = document.getElementById("hoverNav"),
    menuDown = document.getElementById("menuDown"),
    menuUp = document.getElementById("menuUp"),
    menuWa = document.getElementById("menuWa"),
    menuMusic = document.getElementById("menuMusic");
    menuMain = document.getElementById("menu"),
    menuMainImg = document.getElementById("menuMainImage"),
    menuMusicTombol = document.getElementById("musicIcon"),
    menuUpTombol = document.getElementById("upIcon"),
    menuDownTombol = document.getElementById("downIcon"),
    menuWaTombol = document.getElementById("waIcon");
let active = false;

menuHover.addEventListener("mouseover", function (event) {
    menuDown.style.display = "block";
    menuUp.style.display = "block";
    menuWa.style.display = "block";
    menuMusic.style.display = "block";
    menuDown.style.animationName = "menuDownIn";
    menuUp.style.animationName = "menuUpIn";
    menuWa.style.animationName = "menuWaIn";
    menuMusic.style.animationName = "menuMusicIn";
    menuMainImg.style.transform = "rotate(180deg)";
})

menuHover.addEventListener("mouseout", function (event) {
    if(active) return;
        menuDown.style.animationName = "menuDownOut";
        menuUp.style.animationName = "menuUpOut";
        menuWa.style.animationName = "menuWaOut";
        menuMusic.style.animationName = "menuMusicOut";
        menuMainImg.style.transform = "rotate(0deg)";
})

menuHover.addEventListener("click", function() {
    active = true;
})

menuHover.addEventListener("dblclick", function() {
    active = false;
})

document.addEventListener("click", function(event) {
    if((event.target != menuMainImg) && (event.target != menuDownTombol) && (event.target != menuUpTombol) && (event.target != menuWaTombol) && (event.target != menuMusicTombol) && (event.target != menuHover)) {
        active = false;
        menuDown.style.animationName = "menuDownOut";
        menuUp.style.animationName = "menuUpOut";
        menuWa.style.animationName = "menuWaOut";
        menuMusic.style.animationName = "menuMusicOut";
        menuMainImg.style.transform = "rotate(0deg)";
    }
})

menuMusicTombol.addEventListener = ('click', function(event) {
    audio.pause();
})

menuMusicTombol.addEventListener = ('dblclick', function(event) {
    audio.play();
})