var width = window.innerWidth;
var height = window.innerHeight;

console.log(`The width is ${width} and the height is ${height}`);

const audio = document.getElementById('bgm');
audio.autoplay = true;
audio.loop = true;
audio.volume = 10/100;

if(audio.play() == true) {
    console.log('Audio is playing');
} else {
    console.log('Audio is not playing');
}

const bgm = {
  clicked: function(event) {  // Sertakan event sebagai parameter
    audio.pause();
    event.preventDefault();
  }
};

const audControl = document.getElementById('aud-wrapper');
// audControl.onclick = bgm.clicked;

window.addEventListener = ('scroll', function() {
  keAtas.style.top = 50 + windows.scrollY + '%';
  keAtas.style.top = 50 + windows.scrollY + '%';
});

var i = 0, j = 0;

const keAtas = document.getElementById('keAtas');
const keBawah = document.getElementById('keBawah');

// keAtas.onclick = function() {
//   pindah(1);
// }

function pindah(x) {
  keAtas = document.getElementById('keAtas');
  keBawah = document.getElementById('keBawah');
  console.log(x);
  switch (x) {
    case 1:
      if (j == 0) {
        alert('Anda sudah berada di halaman pertama');
      } else if (j == 1) {
        keAtas.href = '#bagAtas';
        j--;
        i--;
      } else if (j == 2) {
        keAtas.href = '#bagTengah';
        j--;
        i--;
      } else if (j == 3) {
        keAtas.href = '#bagBawah';
        j--;
        i--;
      }
      break;

    case 2:
      if (i == 0) {
        keBawah.href = '#bagTengah';
        j++;
        i++;
      } else if (i == 1) {
        keBawah.href = '#bagBawah';
        j--;
        i--;
      } else if (i == 2) {
        alert('Anda sudah berada di halaman terakhir');
      }
      break;

    default:
      break;
  }
}

var form = document.doaGuest
var doaJadi = {
  "Bagas": "May Allah blessing upon you both, Also don't forget to love each other. Allah will guide you both to be the best family ever",
  "Anonymous": "Hope you both live happily!"
}
var boxDoa = document.getElementById('chatDoa')
var hasil = `<h1 id="doaChatTitle">Wishes and Du'a</h1>`
for(var key in doaJadi) {
  hasil += `<h6 class="namaPengirim">${key}</h6>`
  hasil += `<div class="chat-bubble">`
  hasil += `<p>${doaJadi[key]}</p>`
  hasil += `</div>`
}
boxDoa.innerHTML = hasil
form.onsubmit = function() {
  var doa = form.doa.value, nama = form.nama.value;
  Object.defineProperty(doaJadi, nama, {
    value: doa,
    writable: false,
    enumerable: true,
    configurable: true
  })
  var hasil = `<h1 id="doaChatTitle">Wishes and Du'a</h1>`
  for(var key in doaJadi) {
    hasil += `<h6 class="namaPengirim">${key}</h6>`
    hasil += `<div class="chat-bubble">`
    hasil += `<p>${doaJadi[key]}</p>`
    hasil += `</div>`
  }
  return boxDoa.innerHTML = hasil
}

form.addEventListener = ("submit", function(event) {
  event.preventDefault();
})


