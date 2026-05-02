const MOBILE_FIX=true;
(function(){
'use strict';
const LOGO='/assets/images/icons/logo.png';
const PAGE=(location.pathname.toLowerCase().split('/').pop()||'index.html');
const ARTICLE_INDEX=new Set(['articles.html','ai-articles.html','posts-ai.html']);
const STATIC_NO_ENHANCE=new Set(['contact.html','about.html','privacy.html','privacy-policy.html','cookie-policy.html','terms.html','disclosure.html','sitemap.html']);
function idle(fn){if('requestIdleCallback' in window)requestIdleCallback(fn,{timeout:2000});else setTimeout(fn,600);}
function afterLoad(fn,delay){if(document.readyState==='complete')setTimeout(fn,delay||0);else window.addEventListener('load',function(){setTimeout(fn,delay||0);},{once:true});}
function addCss(id,href){if(document.getElementById(id))return;const l=document.createElement('link');l.id=id;l.rel='stylesheet';l.href=href;document.head.appendChild(l);}
function loadCss(){if(PAGE==='index.html')return;addCss('cls-fix-css','/cls-fix.css?v=20260502_CLS1');addCss('header-fix-css','/header-fix.css?v=20260502_PAGESPEED_MENU_NORMAL');}
function addPreload(){
  if(!document.getElementById('logo-preload')){const p=document.createElement('link');p.id='logo-preload';p.rel='preload';p.as='image';p.href=LOGO;document.head.appendChild(p);}
  if(PAGE!=='index.html'){
    if(!document.getElementById('cls-css-preload')){const x=document.createElement('link');x.id='cls-css-preload';x.rel='preload';x.as='style';x.href='/cls-fix.css?v=20260502_CLS1';document.head.appendChild(x);}
    if(!document.getElementById('critical-css-preload')){const c=document.createElement('link');c.id='critical-css-preload';c.rel='preload';c.as='style';c.href='/header-fix.css?v=20260502_PAGESPEED_MENU_NORMAL';document.head.appendChild(c);}
  }
}
function loadScript(id,src){if(document.getElementById(id))return;const s=document.createElement('script');s.id=id;s.src=src;s.defer=true;document.body.appendChild(s);}
function loadAllArticles(){if(ARTICLE_INDEX.has(PAGE)){loadScript('all-articles-js','/all-articles.js?v=20260502_all_articles_health');loadScript('featured-health-article-js','/featured-health-article.js?v=20260502_health_published');loadScript('article-image-title-js','/article-image-title.js?v=20260502_titles_on_images');}}
function loadImageTitles(){if(PAGE==='index.html')loadScript('article-image-title-js','/article-image-title.js?v=20260502_titles_on_images');}
function loadLinkEnhancer(){if(!STATIC_NO_ENHANCE.has(PAGE))loadScript('link-enhancer-js','/link-enhancer.js?v=20260501_links_google2');}
function loadMonetizationManager(){loadScript('monetization-manager-js','/monetization-manager.js?v=20260501_monetization2');}
function loadFooterManager(){loadScript('footer-manager-js','/footer-manager.js?v=20260502_footer_perf');}
function lockMobile(){document.documentElement.style.overflowX='hidden';document.body.style.overflowX='hidden';}
function optimizeImages(){
  document.querySelectorAll('img').forEach((img,i)=>{
    img.decoding='async';
    if(!img.hasAttribute('width'))img.setAttribute('width',img.classList.contains('site-logo-img')?'50':'640');
    if(!img.hasAttribute('height'))img.setAttribute('height',img.classList.contains('site-logo-img')?'50':'360');
    if(i>1&&!img.hasAttribute('loading'))img.loading='lazy';
    img.style.maxWidth='100%';
  });
}
function buildHeader(){
  let header=document.querySelector('.site-header');
  if(!header){document.body.insertAdjacentHTML('afterbegin','<header class="site-header"></header>');header=document.querySelector('.site-header');}
  if(PAGE==='index.html'&&header.innerHTML.trim())return;
  header.innerHTML='<div class="container header-inner"><a class="logo" href="/index.html" aria-label="smartafiliate"><img class="site-logo-img" src="'+LOGO+'" alt="smartafiliate logo" width="50" height="50" decoding="async" fetchpriority="high"></a><nav class="main-nav" id="mainNav" aria-label="القائمة الرئيسية"><a href="/index.html">الرئيسية</a><a href="/best-ai-tools.html">أفضل أدوات AI</a><a href="/ai-articles.html">مكتبة AI</a><a href="/learn-ai.html">تعلم AI</a><a href="/open-source.html">أدوات مفتوحة المصدر</a><a href="/articles.html">المقالات</a><a href="/about.html">من نحن</a><a href="/contact.html">تواصل معنا</a></nav></div>';
  const nav=document.getElementById('mainNav');if(nav){nav.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href').endsWith('/'+PAGE)||a.getAttribute('href').endsWith(PAGE))a.classList.add('active-page');});}
}
function addAiFeatured(){
  if(PAGE!=='ai-articles.html'||document.querySelector('.ai-featured-smart'))return;
  const hero=document.querySelector('main .page-hero');if(!hero)return;
  hero.insertAdjacentHTML('afterend','<section class="section section-alt ai-featured-smart"><div class="container"><div class="section-header"><span class="section-tag">Featured</span><h2>ابدأ بهذه المقالات</h2><p>أهم مقالات مكتبة AI للبدء السريع.</p></div><div class="articles-grid"><article class="article-card"><a href="posts-ai/chatgpt-review.html"><div class="article-image"><img src="assets/images/best-ai-tools/ai-writing.svg" alt="مراجعة ChatGPT" loading="lazy" decoding="async" width="640" height="360"></div><div class="article-content"><span class="article-category">AI</span><h3>مراجعة ChatGPT</h3><p class="article-excerpt">استخدام عملي للكتابة والتحليل والعمل.</p></div></a></article><article class="article-card"><a href="posts-ai/ollama-guide.html"><div class="article-image"><img src="assets/images/open-source/ollama.svg" alt="دليل Ollama" loading="lazy" decoding="async" width="640" height="360"></div><div class="article-content"><span class="article-category">Open Source</span><h3>دليل Ollama</h3><p class="article-excerpt">تشغيل النماذج محليًا على جهازك.</p></div></a></article></div></div></section>');
}
function init(){
  addPreload();loadCss();buildHeader();lockMobile();optimizeImages();
  afterLoad(()=>{idle(()=>{loadFooterManager();loadAllArticles();loadImageTitles();addAiFeatured();optimizeImages();});},700);
  afterLoad(()=>{idle(()=>{loadLinkEnhancer();loadMonetizationManager();});},3000);
}
window.toggleMenu=function(){return true;};window.closeMenu=function(){return true;};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();