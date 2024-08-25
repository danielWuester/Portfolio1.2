// Wenn der Benutzer nach unten scrollt, wird der Button angezeigt
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollTopBtn").style.display = "block";
} else {
    document.getElementById("scrollTopBtn").style.display = "none";
}
}

// mein Alter für Text berechnen
const geburtsdatum = new Date('1976-06-28');
const heute = new Date();

let alter = heute.getFullYear() - geburtsdatum.getFullYear();
const monat = heute.getMonth() - geburtsdatum.getMonth();

if(monat < 0 || (monat === 0 && heute.getDate() < geburtsdatum.getDate())) {
  alter--;
}

document.getElementById('age').textContent = alter;

// Wenn der Benutzer auf den Button klickt, wird nach oben gescrollt
function topFunction() {
  document.body.scrollTop = 0; // Für Safari
  document.documentElement.scrollTop = 0; // Für Chrome, Firefox, IE und Opera
}
