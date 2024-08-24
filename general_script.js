// Wenn der Benutzer nach unten scrollt, wird der Button angezeigt
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollTopBtn").style.display = "block";
} else {
    document.getElementById("scrollTopBtn").style.display = "none";
}
}

// Wenn der Benutzer auf den Button klickt, wird nach oben gescrollt
function topFunction() {
  document.body.scrollTop = 0; // Für Safari
  document.documentElement.scrollTop = 0; // Für Chrome, Firefox, IE und Opera
}
