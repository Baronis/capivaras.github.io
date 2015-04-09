(function() {
  window.fixedVisible = false;
  window.fixedHeader = document.getElementById("fixed_header");
  // Fade functions
  window.fadeOut = function(time) {
    window.fade(100, 0, time);
  }

  window.fadeIn = function(time) {
    window.fade(0, 100, time);
  }

  window.fade = function(ini, fin, time) {
    var alpha = ini, inc = fin >= ini ? 2 : -2;
    var i = setInterval(function() {
      if ((inc > 0 && alpha >= fin) || (inc < 0 && alpha <= fin)) {
        clearInterval(i);
      }
      window.fixedHeader.style.filter = "alpha(opacity=" + alpha + ")";
      window.fixedHeader.style.opacity = alpha / 100;
      alpha += inc;
    }, time ? time : 1);
  };
  window.fadeOut(0);
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