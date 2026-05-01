const MOBILE_FIX=true;
(function(){
if(!document.getElementById('header-fix-css')){
const l=document.createElement('link');
l.id='header-fix-css';
l.rel='stylesheet';
l.href='/header-fix.css?v=20260501d';
document.head.appendChild(l);
}
const LOGO='/assets/images/icons/logo.png';
function page(){return location.pathname.toLowerCase().split('/').pop()||'index.html';}
function closeMenu(){const nav=document.getElementById('mainNav');const btn=document.querySelector('.menu-toggle');if(nav)nav.classList.remove('active');if(btn)btn.setAttribute('aria-expanded','false');}
function toggleMenu(){const nav=document.getElementById('mainNav');const btn=document.querySelector('.menu-toggle');if(!nav||!btn)return;const open=nav.classList.toggle('active');btn.setAttribute('aria-expanded',open?'true':'false');}
function init(){
let header=document.querySelector('.site-header');
if(!header){document.body.insertAdjacentHTML('afterbegin','<header class="site-header"><div class="container header-inner"><a class="logo" href="index.html"></a><nav class="main-nav" id="mainNav"></nav><div class="header-actions"></div><button class="menu-toggle" aria-expanded="false" aria-controls="mainNav">☰</button></div></header>');}
document.querySelectorAll('.site-header').forEach((el,i)=>{if(i>0)el.remove();});
const logo=document.querySelector('.site-header .logo');
if(logo){logo.innerHTML='<img class="site-logo-img" src="'+LOGO+'" alt="Smart Affiliate"><span class="site-logo-word">Smart Affiliate</span>';}
const nav=document.getElementById('mainNav');
if(nav){nav.innerHTML='<a href="index.html">الرئيسية</a><a href="best-ai-tools.html">أفضل أدوات AI</a><a href="ai-articles.html">مكتبة AI</a><a href="learn-ai.html">تعلم AI</a><a href="open-source.html">أدوات مفتوحة المصدر</a><a href="articles.html">المقالات</a>';nav.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href')===page())a.classList.add('active');a.onclick=closeMenu;});}
const actions=document.querySelector('.header-actions');if(actions)actions.innerHTML='';
const btn=document.querySelector('.menu-toggle');if(btn)btn.onclick=toggleMenu;
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
window.closeMenu=closeMenu;window.toggleMenu=toggleMenu;
})();