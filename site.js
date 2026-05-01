const MOBILE_FIX=true;
(function(){
const LOGO='/assets/images/icons/logo.png';
function loadCss(){let old=document.getElementById('header-fix-css');if(old)old.remove();const l=document.createElement('link');l.id='header-fix-css';l.rel='stylesheet';l.href='/header-fix.css?v=20260501l';document.head.appendChild(l);}
function loadMenuScript(){if(document.getElementById('mobile-menu-js'))return;const s=document.createElement('script');s.id='mobile-menu-js';s.src='/mobile-menu.js?v=20260501a';document.body.appendChild(s);}
function lockMobile(){document.documentElement.style.overflowX='hidden';document.body.style.overflowX='hidden';}
function page(){return location.pathname.toLowerCase().split('/').pop()||'index.html';}
function removeAllOldFooters(){
  document.querySelectorAll('footer,.site-footer,.smart-global-footer').forEach(e=>e.remove());
}
function addFinalFooter(){
  const html='<footer class="site-footer smart-final-footer"><div class="container"><div class="smart-footer-logo-wrap"><img class="footer-logo-img" src="'+LOGO+'" alt="Smart Affiliate"></div><p class="smart-footer-contact">Contact: <a href="mailto:info@smartafiliate.com">info@smartafiliate.com</a></p><div class="smart-footer-policies"><h3>السياسات</h3><a href="privacy-policy.html">سياسة الخصوصية</a><a href="cookie-policy.html">سياسة الكوكيز</a><a href="terms.html">الشروط والأحكام</a></div></div></footer>';
  document.body.insertAdjacentHTML('beforeend',html);
}
function cleanupMisplacedBlocks(){
  document.querySelectorAll('main .footer-col, main .footer-bottom, .hero .footer-col, .page-hero .footer-col, .hero .footer-bottom, .page-hero .footer-bottom, .hero .smart-global-contact, .page-hero .smart-global-contact, main .smart-global-footer').forEach(e=>e.remove());
}
function init(){
  loadCss();
  cleanupMisplacedBlocks();
  removeAllOldFooters();
  let header=document.querySelector('.site-header');
  if(!header) document.body.insertAdjacentHTML('afterbegin','<header class="site-header"></header>');
  header=document.querySelector('.site-header');
  header.innerHTML='<div class="container header-inner"><a class="logo" href="index.html"><img class="site-logo-img" src="'+LOGO+'" alt="Smart Affiliate"></a><button type="button" class="menu-toggle" aria-expanded="false" aria-controls="mainNav">☰</button><nav class="main-nav" id="mainNav"><a href="index.html">الرئيسية</a><a href="best-ai-tools.html">أفضل أدوات AI</a><a href="ai-articles.html">مكتبة AI</a><a href="learn-ai.html">تعلم AI</a><a href="open-source.html">أدوات مفتوحة المصدر</a><a href="articles.html">المقالات</a></nav></div>';
  const nav=document.getElementById('mainNav');
  if(nav){nav.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href')===page())a.classList.add('active-page');});}
  loadMenuScript();
  addFinalFooter();
  lockMobile();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();