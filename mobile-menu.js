(function(){
  function ready(fn){
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn, {once:true});
    else fn();
  }

  function getParts(){
    return {
      nav: document.getElementById('mainNav'),
      btn: document.querySelector('.menu-toggle')
    };
  }

  function closeMenu(){
    var parts = getParts();
    if(parts.nav){
      parts.nav.classList.remove('mobile-open');
      parts.nav.style.display = '';
    }
    if(parts.btn) parts.btn.setAttribute('aria-expanded','false');
    document.body.classList.remove('menu-open');
  }

  function openMenu(){
    var parts = getParts();
    if(!parts.nav || !parts.btn) return;
    parts.nav.classList.add('mobile-open');
    parts.nav.style.display = 'flex';
    parts.btn.setAttribute('aria-expanded','true');
    document.body.classList.add('menu-open');
  }

  function toggleMenu(e){
    if(e){
      e.preventDefault();
      e.stopPropagation();
    }
    var parts = getParts();
    if(!parts.nav || !parts.btn) return false;
    if(parts.nav.classList.contains('mobile-open')) closeMenu();
    else openMenu();
    return false;
  }

  function bind(){
    var parts = getParts();
    if(!parts.btn || !parts.nav) return;
    if(parts.btn.dataset.menuBound === '1') return;
    parts.btn.dataset.menuBound = '1';
    parts.btn.removeAttribute('onclick');
    parts.btn.setAttribute('type','button');
    parts.btn.addEventListener('click', toggleMenu, false);
    parts.nav.addEventListener('click', function(e){
      if(e.target.closest('a')) closeMenu();
    }, false);
    document.addEventListener('click', function(e){
      if(!e.target.closest('.site-header')) closeMenu();
    }, false);
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape') closeMenu();
    }, false);
  }

  ready(bind);
  window.toggleMenu = toggleMenu;
  window.closeMenu = closeMenu;
})();
