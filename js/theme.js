(function() {
  var btn = document.querySelector('.theme-toggle');
  if (!btn) return;

  function getScheme() {
    return document.documentElement.getAttribute('data-scheme') || 'dark';
  }

  function setScheme(scheme) {
    document.documentElement.setAttribute('data-scheme', scheme);
    localStorage.setItem('qv-color-scheme', scheme);
    btn.setAttribute('aria-label', scheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    btn.innerHTML = scheme === 'dark' ? '&#9728;' : '&#9790;';
  }

  btn.addEventListener('click', function() {
    setScheme(getScheme() === 'dark' ? 'light' : 'dark');
  });

  setScheme(getScheme());
})();
