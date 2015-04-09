(function() {
  window.fixedVisible = false;
  window.fixedHeader = document.getElementById("fixed_header");
  // Fade functions
  window.fadeOut = function() {
    window.fade(100, 0);
  }

  window.fadeIn = function() {
    window.fade(0, 100);
  }

  window.fade = function(ini, fin) {
    var alpha = ini, inc = fin >= ini ? 2 : -2;
    var i = setInterval(function() {
      if ((inc > 0 && alpha >= fin) || (inc < 0 && alpha <= fin)) {
        clearInterval(i);
      }
      window.fixedHeader.style.filter = "alpha(opacity=" + alpha + ")";
      window.fixedHeader.style.opacity = alpha / 100;
      window.fixedHeader.style.zIndex = ini > fin ? 10 : 4;
      alpha += inc;
    }, 1);
  };
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