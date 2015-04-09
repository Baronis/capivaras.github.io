(function() {
  window.fixedVisible = false;
  window.fixedHeader = document.getElementById("fixed_header");
  window.fixedHeader.style.webkitTransitionDuration = "0.5s";
  document.body.onscroll = function(e) {
    if (window.scrollY >= 160) {
      // Show fixed bar
      if (!fixedVisible) {
        window.fadeIn();
        window.fixedVisible = true;
      }
    } else {
      // Hide fixed bar
      if (fixedVisible) {
        window.fadeOut();
        window.fixedVisible = false;
      }
    }
  };
})();

window.fadeOut = function() {
  window.fade(100, 0);
}

window.fadeIn = function() {
  window.fade(0, 100);
}

window.fade = function(ini, fin) {
  var alpha = ini;
  var inc;
  if (fin >= ini) { 
    inc = 2; 
  } else {
    inc = -2;
  }
  timer = (0.2 * 1000) / 50;
  var i = setInterval(
    function() {
      if ((inc > 0 && alpha >= fin) || (inc < 0 && alpha <= fin)) {
        clearInterval(i);
      }
    window.setAlpha(window.fixedHeader, alpha);
    alpha += inc;
  }, timer);
}

window.setAlpha(target, alpha) {
  target.style.filter = "alpha(opacity=" + alpha + ")";
  target.style.opacity = alpha / 100;
}