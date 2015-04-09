(function() {
  window.fixedVisible = false;
  window.fixedHeader = document.getElementById("fixed_header");
  window.fixedHeader.style.webkitTransitionDuration = "0.5s";
  document.body.onscroll = function(e) {
    if (window.scrollY >= 160) {
      // Show fixed bar
      if (!fixedVisible) {
        window.fixedHeader.style.opacity = 1;
        window.setTimeout(function(e) {
          window.fixedHeader.style.visibility = "visible";
        }, 500);
        window.fixedVisible = true;
      }
    } else {
      // Hide fixed bar
      if (fixedVisible) {
        
        window.fixedHeader.style.opacity = 0;
        window.setTimeout(function(e) {
          window.fixedHeader.style.visibility = "hidden";
        }, 500);
        window.fixedVisible = false;
      }
    }
  };
})();