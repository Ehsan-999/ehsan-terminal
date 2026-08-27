
(function () {
  "use strict";

  var preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", function () {
      preloader.remove();
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
