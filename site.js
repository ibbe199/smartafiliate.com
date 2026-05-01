const MOBILE_FIX=true;
(function(){
const LOGO='/assets/images/icons/logo.png';
function loadCss(){let old=document.getElementById('header-fix-css');if(old)old.remove();const l=document.createElement('link');l.id='header-fix-css';l.rel='stylesheet';l.href='/header-fix.css?v=20260501f';document.head.appendChild(l);}
function loadMenuScript(){if(document.getElementById('mobile-menu-js'))return;const s=document.createElement('script');s.id='mobile-menu-js';s.src='/mobile-menu.js?v=20260501a';document.body.appendChild(s);}
function lockMobile(){document.documentElement.style.overflowX='hidden';document.body.style.overflowX='hidden';}
function page(){return location.pathname.toLowerCase().split('/').pop()||'index.html';}
function init(){
loadCss();
let header=document.querySelector('.site-header');
if(!header){document.body.insertAdjacentHTML('afterbegin','<header class="site-header"></header>');}
header=document.querySelector('.site-header');
header.innerHTML='<div class="container header-inner"><a class="logo" href="index.html"><img class="site-logo-img" src="'+LOGO+'" alt="Smart Affiliate"><span class="site-logo-word">Smart Affiliate</span></a><button type="button" class="menu-toggle" aria-expanded="false" aria-controls="mainNav">☰</button><nav class="main-nav" id="mainNav"><a href="index.html">الرئيسية</a><a href="best-ai-tools.html">أفضل أدوات AI</a><a href="ai-articles.html">مكتبة AI</a><a href="learn-ai.html">تعلم AI</a><a href="open-source.html">أدوات مفتوحة المصدر</a><a href="articles.html">المقالات</a></nav></div>';
const nav=document.getElementById('mainNav');
if(nav){nav.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href')===page())a.classList.add('active-page');});}
loadMenuScript();
lockMobile();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();