(function () {
  'use strict';

  var hamburger = document.querySelector('[data-nav-open]');
  var closeBtn = document.querySelector('[data-nav-close]');
  var drawer = document.querySelector('[data-nav-drawer]');

  function openNav() {
    if (!drawer) return;
    drawer.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
  }

  function closeNav() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  }

  if (hamburger && drawer) {
    hamburger.addEventListener('click', function () {
      var isOpen = drawer.classList.contains('is-open');
      if (isOpen) { closeNav(); } else { openNav(); }
    });
  }
  if (closeBtn) closeBtn.addEventListener('click', closeNav);
  if (drawer) {
    drawer.addEventListener('click', function (e) {
      if (e.target === drawer) closeNav();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });
})();
