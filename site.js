(function () {
  var GTM_ID = 'GTM-P96QVPT3';

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

  if (!document.querySelector('script[src*="googletagmanager.com/gtm.js?id=' + GTM_ID + '"]')) {
    var firstScript = document.getElementsByTagName('script')[0];
    var gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
    firstScript.parentNode.insertBefore(gtmScript, firstScript);
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (!document.getElementById('smartafiliate-logo-fix')) {
      var logoFix = document.createElement('style');
      logoFix.id = 'smartafiliate-logo-fix';
      logoFix.textContent = '.logo{direction:ltr!important;unicode-bidi:isolate!important}.logo-text{direction:ltr!important;unicode-bidi:isolate!important}.site-header .logo{display:inline-flex!important;flex-direction:row!important}';
      document.head.appendChild(logoFix);
    }

    if (!document.body || document.getElementById('gtm-noscript-fallback')) return;

    var wrapper = document.createElement('div');
    wrapper.id = 'gtm-noscript-fallback';
    wrapper.innerHTML = '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=' + GTM_ID + '" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>';
    document.body.insertBefore(wrapper, document.body.firstChild);
  });
})();

function closeMenu() {
  const nav = document.getElementById('mainNav');
  const button = document.querySelector('.menu-toggle');
  if (!nav || !button) return;
  nav.classList.remove('active');
  button.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}

function toggleMenu() {
  const nav = document.getElementById('mainNav');
  const button = document.querySelector('.menu-toggle');
  if (!nav || !button) return;
  const isOpen = nav.classList.toggle('active');
  button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  document.body.classList.toggle('menu-open', isOpen);
}

document.addEventListener('click', function (event) {
  const nav = document.getElementById('mainNav');
  const button = document.querySelector('.menu-toggle');
  if (!nav || !button) return;
  if (nav.classList.contains('active') && !nav.contains(event.target) && !button.contains(event.target)) {
    closeMenu();
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 900) closeMenu();
});

window.addEventListener('scroll', function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  if (window.scrollY > 50) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});
