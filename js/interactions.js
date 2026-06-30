/**
 * Hero fade-in: .intro__headline + .intro__bio (CSS transition 0.6s ease-out, 100ms delay via JS).
 */
document.addEventListener("DOMContentLoaded", function () {
  var intro = document.querySelector("main header.intro");
  var reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!intro) return;

  if (reduce) {
    intro.classList.add("is-intro-ready");
  } else {
    window.setTimeout(function () {
      intro.classList.add("is-intro-ready");
    }, 100);
  }
});
