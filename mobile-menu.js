(function(){
  function ready(fn){
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn, {once:true});
    else fn();
  }

  function closeMenu(){
    var nav = document.getElementById('mainNav');
    var btn = document.querySelector('.menu-toggle');
    if(nav){
      nav.classList.remove('mobile-open');
      nav.style.display = '';
    }
    if(btn) btn.setAttribute('aria-expanded','false');
  }

  function toggleMenu(e){
    if(e){
      e.preventDefault();
      e.stopPropagation();
    }
    var nav = document.getElementById('mainNav');
    var btn = document.querySelector('.menu-toggle');
    if(!nav || !btn) return false;
    var open = !nav.classList.contains('mobile-open');
    nav.classList.toggle('mobile-open', open);
    nav.style.display = open ? 'flex' : '';
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    return false;
  }

  ready(function(){
    var btn = document.querySelector('.menu-toggle');
    var nav = document.getElementById('mainNav');
    if(btn && nav){
      btn.removeAttribute('onclick');
      btn.onclick = toggleMenu;
      btn.addEventListener('touchstart', toggleMenu, {passive:false});
      btn.addEventListener('click', toggleMenu, false);
      nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click', closeMenu);});
    }
    document.addEventListener('click', function(e){
      if(!e.target.closest('.site-header')) closeMenu();
    }, false);
  });

  window.toggleMenu = toggleMenu;
  window.closeMenu = closeMenu;
})();
