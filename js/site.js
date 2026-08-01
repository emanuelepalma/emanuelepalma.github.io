/* Reveal-on-scroll. Nothing else on this site needs JavaScript. */
(function () {
  var nodes = document.querySelectorAll('[data-reveal]');
  if (!nodes.length) return;

  if (!('IntersectionObserver' in window)) {
    nodes.forEach(function (n) { n.classList.add('is-visible'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });

  nodes.forEach(function (n) { io.observe(n); });
})();
