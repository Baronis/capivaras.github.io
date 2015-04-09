(function() {
  window.fixedVisible = false;
  window.fixedHeader = document.getElementById("fixed_header");
  window.fixedHeader.style.webkitTransitionDuration = "0.5s";
  document.body.onscroll = function(e) {
    if (window.scrollY >= 160) {
      // Show fixed bar
      if (!fixedVisible) {
        window.fixedHeader.style.display = "block";
        window.fixedHeader.style.opacity = 1;
        window.fixedVisible = true;
      }
    } else {
      // Hide fixed bar
      if (fixedVisible) {
        window.fixedHeader.style.display = "none";
        window.fixedHeader.style.opacity = 0;
        window.fixedVisible = false;
      }
    }
  };
})();