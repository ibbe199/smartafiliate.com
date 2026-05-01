const MOBILE_FIX=true;
(function(){
'use strict';
const LOGO='/assets/images/icons/logo.png';
const PAGE=(location.pathname.toLowerCase().split('/').pop()||'index.html');
const ARTICLE_INDEX=new Set(['articles.html','ai-articles.html','posts-ai.html']);
const STATIC_NO_ENHANCE=new Set(['contact.html','about.html','privacy.html','privacy-policy.html','cookie-policy.html','terms.html','disclosure.html','sitemap.html']);
function idle(fn){if('requestIdleCallback' in window)requestIdleCallback(fn,{timeout:1500});else setTimeout(fn,250);}
function loadCss(){
  if(document.getElementById('header-fix-css'))return;
  const l=document.createElement('link');l.id='header-fix-css';l.rel='stylesheet';l.href='/header-fix.css?v=20260501_PERF3';document.head.appendChild(l);
}
function addPreload(){if(document.getElementById('logo-preload'))return;const p=document.createElement('link');p.id='logo-preload';p.rel='preload';p.as='image';p.href=LOGO;document.head.appendChild(p);}
function loadScript(id,src){if(document.getElementById(id))return;const s=document.createElement('script');s.id=id;s.src=src;s.defer=true;document.body.appendChild(s);}
function loadAllArticles(){if(ARTICLE_INDEX.has(PAGE)){loadScript('all-articles-js','/all-articles.js?v=20260501_all_articles2');loadScript('featured-health-article-js','/featured-health-article.js?v=20260501_health_article');}}
function loadLinkEnhancer(){if(!STATIC_NO_ENHANCE.has(PAGE))loadScript('link-enhancer-js','/link-enhancer.js?v=20260501_links_google2');}
function loadMonetizationManager(){loadScript('monetization-manager-js','/monetization-manager.js?v=20260501_monetization2');}
function loadFooterManager(){loadScript('footer-manager-js','/footer-manager.js?v=20260501_footer_perf');}
function lockMobile(){document.documentElement.style.overflowX='hidden';document.body.style.overflowX='hidden';}
function optimizeImages(){
  document.querySelectorAll('img').forEach((img,i)=>{
    img.decoding='async';
    if(!img.hasAttribute('width'))img.setAttribute('width',img.classList.contains('site-logo-img')?'50':'640');
    if(!img.hasAttribute('height'))img.setAttribute('height',img.classList.contains('site-logo-img')?'50':'360');
    if(i>0&&!img.hasAttribute('loading'))img.loading='lazy';
    img.style.maxWidth='100%';
  });
}
function closeMenu(){const nav=document.getElementById('mainNav');const btn=document.querySelector('.menu-toggle');if(nav){nav.classList.remove('mobile-open');nav.style.display='';}if(btn)btn.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open');}
function toggleMenu(e){if(e){e.preventDefault();e.stopPropagation();}const nav=document.getElementById('mainNav');const btn=document.querySelector('.menu-toggle');if(!nav||!btn)return false;const open=!nav.classList.contains('mobile-open');nav.classList.toggle('mobile-open',open);nav.style.display=open?'flex':'';btn.setAttribute('aria-expanded',open?'true':'false');document.body.classList.toggle('menu-open',open);return false;}
function bindMenu(){const nav=document.getElementById('mainNav');const btn=document.querySelector('.menu-toggle');if(!nav||!btn||btn.dataset.menuBound==='1')return;btn.dataset.menuBound='1';btn.addEventListener('click',toggleMenu,{passive:false});nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();},{passive:true});document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();},{passive:true});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();},{passive:true});}
function buildHeader(){
  let header=document.querySelector('.site-header');
  if(!header){document.body.insertAdjacentHTML('afterbegin','<header class="site-header"></header>');header=document.querySelector('.site-header');}
  header.innerHTML='<div class="container header-inner"><a class="logo" href="/index.html" aria-label="smartafiliate"><img class="site-logo-img" src="'+LOGO+'" alt="smartafiliate logo" width="50" height="50" decoding="async" fetchpriority="high"></a><button type="button" class="menu-toggle" aria-label="فتح القائمة" aria-expanded="false" aria-controls="mainNav"><span class="menu-icon" aria-hidden="true">☰</span></button><nav class="main-nav" id="mainNav"><a href="/index.html">الرئيسية</a><a href="/best-ai-tools.html">أفضل أدوات AI</a><a href="/ai-articles.html">مكتبة AI</a><a href="/learn-ai.html">تعلم AI</a><a href="/open-source.html">أدوات مفتوحة المصدر</a><a href="/articles.html">المقالات</a><a href="/about.html">من نحن</a><a href="/contact.html">تواصل معنا</a></nav></div>';
  const nav=document.getElementById('mainNav');if(nav){nav.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href').endsWith('/'+PAGE)||a.getAttribute('href').endsWith(PAGE))a.classList.add('active-page');});}
  bindMenu();
}
function addAiFeatured(){
  if(PAGE!=='ai-articles.html'||document.querySelector('.ai-featured-smart'))return;
  const hero=document.querySelector('main .page-hero');if(!hero)return;
  hero.insertAdjacentHTML('afterend','<section class="section section-alt ai-featured-smart"><div class="container"><div class="section-header"><span class="section-tag">Featured</span><h2>ابدأ بهذه المقالات</h2><p>أهم مقالات مكتبة AI للبدء السريع.</p></div><div class="articles-grid"><article class="article-card"><a href="posts-ai/chatgpt-review.html"><div class="article-image"><img src="assets/images/best-ai-tools/ai-writing.svg" alt="مراجعة ChatGPT" loading="lazy" decoding="async" width="640" height="360"></div><div class="article-content"><span class="article-category">AI</span><h3>مراجعة ChatGPT</h3><p class="article-excerpt">استخدام عملي للكتابة والتحليل والعمل.</p></div></a></article><article class="article-card"><a href="posts-ai/ollama-guide.html"><div class="article-image"><img src="assets/images/open-source/ollama.svg" alt="دليل Ollama" loading="lazy" decoding="async" width="640" height="360"></div><div class="article-content"><span class="article-category">Open Source</span><h3>دليل Ollama</h3><p class="article-excerpt">تشغيل النماذج محليًا على جهازك.</p></div></a></article></div></div></section>');
}
function init(){
  addPreload();loadCss();buildHeader();optimizeImages();lockMobile();
  idle(()=>{loadFooterManager();loadAllArticles();loadLinkEnhancer();loadMonetizationManager();addAiFeatured();optimizeImages();});
}
window.toggleMenu=toggleMenu;window.closeMenu=closeMenu;
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();