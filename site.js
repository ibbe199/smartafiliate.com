const MOBILE_FIX=true;
(function(){
const LOGO='/assets/images/icons/logo.png';
function loadCss(){
  let old=document.getElementById('header-fix-css');
  if(old) old.remove();
  const l=document.createElement('link');
  l.id='header-fix-css';
  l.rel='stylesheet';
  l.href='/header-fix.css?v=20260501f';
  document.head.appendChild(l);
}
function lockMobile(){
  document.documentElement.style.overflowX='hidden';
  document.documentElement.style.width='100%';
  document.body.style.overflowX='hidden';
  document.body.style.width='100%';
  document.body.style.maxWidth='100%';
  document.querySelectorAll('img,video,iframe,canvas,svg').forEach(el=>{el.style.maxWidth='100%';});
  document.querySelectorAll('.hero-card,.hero-card img,.container,.hero,.section,main').forEach(el=>{el.style.maxWidth='100%';});
}
function page(){return location.pathname.toLowerCase().split('/').pop()||'index.html';}
function closeMenu(){
  const nav=document.getElementById('mainNav');
  const btn=document.querySelector('.menu-toggle');
  if(nav){nav.classList.remove('mobile-open');nav.style.display='';}
  if(btn)btn.setAttribute('aria-expanded','false');
}
function toggleMenu(ev){
  if(ev){ev.preventDefault();ev.stopPropagation();}
  const nav=document.getElementById('mainNav');
  const btn=document.querySelector('.menu-toggle');
  if(!nav||!btn)return false;
  const open=!nav.classList.contains('mobile-open');
  nav.classList.toggle('mobile-open',open);
  btn.setAttribute('aria-expanded',open?'true':'false');
  return false;
}
function init(){
  loadCss();
  let header=document.querySelector('.site-header');
  if(!header){document.body.insertAdjacentHTML('afterbegin','<header class="site-header"><div class="container header-inner"><a class="logo" href="index.html"></a><button type="button" class="menu-toggle" aria-expanded="false" aria-controls="mainNav">☰</button><nav class="main-nav" id="mainNav"></nav></div></header>');}
  document.querySelectorAll('.site-header').forEach((el,i)=>{if(i>0)el.remove();});
  header=document.querySelector('.site-header');
  header.innerHTML='<div class="container header-inner"><a class="logo" href="index.html"><img class="site-logo-img" src="'+LOGO+'" alt="Smart Affiliate"><span class="site-logo-word">Smart Affiliate</span></a><button type="button" class="menu-toggle" aria-expanded="false" aria-controls="mainNav">☰</button><nav class="main-nav" id="mainNav"><a href="index.html">الرئيسية</a><a href="best-ai-tools.html">أفضل أدوات AI</a><a href="ai-articles.html">مكتبة AI</a><a href="learn-ai.html">تعلم AI</a><a href="open-source.html">أدوات مفتوحة المصدر</a><a href="articles.html">المقالات</a></nav></div>';
  const nav=document.getElementById('mainNav');
  if(nav){nav.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href')===page())a.classList.add('active-page');a.addEventListener('click',closeMenu);});}
  const btn=document.querySelector('.menu-toggle');
  if(btn){btn.addEventListener('click',toggleMenu);btn.onclick=toggleMenu;}
  document.addEventListener('click',function(e){if(!e.target.closest('.site-header'))closeMenu();});
  lockMobile();
  setTimeout(lockMobile,300);
  setTimeout(lockMobile,1200);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
window.closeMenu=closeMenu;
window.toggleMenu=toggleMenu;
})();