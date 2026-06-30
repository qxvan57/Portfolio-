(function() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  var dot = document.getElementById('cursor-dot');
  var ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;
  document.addEventListener('mousemove', function(e) {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    ring.style.left = e.clientX + 'px';
    ring.style.top = e.clientY + 'px';
  });
  document.addEventListener('mouseover', function(e) {
    if (e.target.closest('a, button')) {
      document.body.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', function(e) {
    if (e.target.closest('a, button')) {
      document.body.classList.remove('cursor-hover');
    }
  });
})();
