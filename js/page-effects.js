(function () {
  function initScrollProgress() {
    if (!document.body.classList.contains("case-study")) return;
    var bar = document.getElementById("scroll-progress");
    if (!bar) return;
    function update() {
      var el = document.documentElement;
      var scrollTop = el.scrollTop || document.body.scrollTop;
      var max = el.scrollHeight - el.clientHeight;
      var pct = max <= 0 ? 0 : (scrollTop / max) * 100;
      bar.style.height = pct + "%";
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  document.addEventListener("DOMContentLoaded", initScrollProgress);
})();
