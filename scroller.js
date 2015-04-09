(function() {
  window.fixedVisible = false;
  document.body.onscroll = function(e) {
    if (window.scrollY >= 160) {
      // Show fixed bar
      if (!fixedVisible) {
        console.log("Show");
        window.fixedVisible = true;
      }
    } else {
      // Hide fixed bar
      if (fixedVisible) {
        console.log("Hide");
        window.fixedVisible = false;
      }
    }
  };
})();