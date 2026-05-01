const MOBILE_FIX=true;
(function(){
const LOGO='/assets/images/icons/logo.png';
function loadCss(){let old=document.getElementById('header-fix-css');if(old)old.remove();const l=document.createElement('link');l.id='header-fix-css';l.rel='stylesheet';l.href='/header-fix.css?v=20260501_FINAL';document.head.appendChild(l);}
function loadMenuScript(){if(document.getElementById('mobile-menu-js'))return;const s=document.createElement('script');s.id='mobile-menu-js';s.src='/mobile-menu.js?v=20260501a';document.body.appendChild(s);}
function page(){return location.pathname.toLowerCase().split('/').pop()||'index.html';}
function lockMobile(){document.documentElement.style.overflowX='hidden';document.body.style.overflowX='hidden';}
function isPolicyBlock(el){const t=(el.textContent||'').replace(/\s+/g,' ');return t.includes('السياسات')||t.includes('سياسة الخصوصية')||t.includes('سياسة الكوكيز')||t.includes('الشروط والأحكام')||t.includes('Privacy')||t.includes('Cookie')||t.includes('Terms');}
function isBrandBlock(el){const t=(el.textContent||'').toLowerCase();return t.includes('smart affiliate')||t.includes('smartafiliate')||t.includes('smart affiliate ©')||t.includes('smartafiliate ©');}
function hardClean(){
  document.querySelectorAll('footer,.site-footer,.smart-global-footer,.smart-final-footer,.smart-global-contact').forEach(e=>e.remove());
  document.querySelectorAll('main .footer-col,main .footer-bottom,main .footer-grid,main .footer-description,.hero .footer-col,.page-hero .footer-col,.hero .footer-bottom,.page-hero .footer-bottom').forEach(e=>e.remove());
  document.querySelectorAll('main section,main div,main aside,.hero div,.page-hero div').forEach(el=>{if(isPolicyBlock(el)&&!el.closest('.smart-final-footer'))el.remove();});
  document.querySelectorAll('main img,.hero img,.page-hero img,body>img').forEach(img=>{const src=(img.getAttribute('src')||'').toLowerCase();if(src.endsWith('logo.png')||src.includes('/assets/images/icons/logo.png'))img.remove();});
}
function buildHeader(){
  let header=document.querySelector('.site-header');
  if(!header)document.body.insertAdjacentHTML('afterbegin','<header class="site-header"></header>');
  header=document.querySelector('.site-header');
  header.innerHTML='<div class="container header-inner"><a class="logo" href="index.html"><img class="site-logo-img" src="'+LOGO+'" alt="logo"></a><button type="button" class="menu-toggle" aria-expanded="false" aria-controls="mainNav">☰</button><nav class="main-nav" id="mainNav"><a href="index.html">الرئيسية</a><a href="best-ai-tools.html">أفضل أدوات AI</a><a href="ai-articles.html">مكتبة AI</a><a href="learn-ai.html">تعلم AI</a><a href="open-source.html">أدوات مفتوحة المصدر</a><a href="articles.html">المقالات</a></nav></div>';
  const nav=document.getElementById('mainNav');if(nav){nav.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href')===page())a.classList.add('active-page');});}
}
function buildFooter(){
  const html='<footer class="smart-final-footer"><div class="container smart-final-footer-inner"><img class="footer-logo-img" src="'+LOGO+'" alt="logo"><p class="smart-footer-contact">Contact: <a href="mailto:info@smartafiliate.com">info@smartafiliate.com</a></p><div class="smart-footer-policies"><h3>السياسات</h3><a href="privacy-policy.html">سياسة الخصوصية</a><a href="cookie-policy.html">سياسة الكوكيز</a><a href="terms.html">الشروط والأحكام</a></div></div></footer>';
  document.body.insertAdjacentHTML('beforeend',html);
}
function init(){
  loadCss();
  hardClean();
  buildHeader();
  loadMenuScript();
  buildFooter();
  setTimeout(function(){hardClean();buildFooter();lockMobile();},500);
  lockMobile();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();