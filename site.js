const MOBILE_FIX=true;
(function(){
const LOGO='/assets/images/icons/logo.png';
function loadCss(){
  if(document.getElementById('header-fix-css'))return;
  const l=document.createElement('link');
  l.id='header-fix-css';
  l.rel='stylesheet';
  l.href='/header-fix.css?v=20260501_PERF2';
  document.head.appendChild(l);
}
function loadAllArticles(){
  const p=page();
  if(p!=='articles.html'&&p!=='ai-articles.html'&&p!=='posts-ai.html')return;
  if(document.getElementById('all-articles-js'))return;
  const s=document.createElement('script');
  s.id='all-articles-js';
  s.src='/all-articles.js?v=20260501_all_articles';
  s.defer=true;
  document.body.appendChild(s);
}
function page(){return location.pathname.toLowerCase().split('/').pop()||'index.html';}
function lockMobile(){document.documentElement.style.overflowX='hidden';document.body.style.overflowX='hidden';}
function isLogoImg(img){const src=(img.getAttribute('src')||'').toLowerCase();return src.endsWith('logo.png')||src.includes('/assets/images/icons/logo.png');}
function hasFooterText(el){const t=(el.textContent||'').replace(/\s+/g,' ').trim();return t.includes('Contact:')||t.includes('info@smartafiliate.com')||t.includes('السياسات')||t.includes('سياسة الخصوصية')||t.includes('سياسة الكوكيز')||t.includes('الشروط والأحكام');}
function safeRemove(el){if(!el||el.closest('.smart-final-footer')||el.closest('.site-header'))return;const target=el.closest('section,footer,.footer-col,.footer-grid,.footer-bottom,.smart-global-contact,.smart-global-footer,.site-footer,div')||el;if(target&&target!==document.body&&target.tagName!=='MAIN')target.remove();}
function cleanMisplacedFooterText(){document.querySelectorAll('main a, main h1, main h2, main h3, main p, main div, main section, .hero a, .hero h3, .hero p, .page-hero a, .page-hero h3, .page-hero p').forEach(el=>{if(hasFooterText(el))safeRemove(el);});document.querySelectorAll('footer,.site-footer,.smart-global-footer,.smart-global-contact').forEach(e=>{if(!e.classList.contains('smart-final-footer'))e.remove();});}
function hardClean(){document.querySelectorAll('footer,.site-footer,.smart-global-footer,.smart-final-footer,.smart-global-contact').forEach(e=>e.remove());document.querySelectorAll('img').forEach(img=>{if(isLogoImg(img)&&!img.closest('.site-header'))img.remove();});cleanMisplacedFooterText();}
function optimizeImages(){
  document.querySelectorAll('img').forEach((img,i)=>{
    if(!img.hasAttribute('decoding'))img.setAttribute('decoding','async');
    if(!img.hasAttribute('width'))img.setAttribute('width',img.classList.contains('site-logo-img')?'50':'640');
    if(!img.hasAttribute('height'))img.setAttribute('height',img.classList.contains('site-logo-img')?'50':'360');
    if(i>0&&!img.hasAttribute('loading'))img.setAttribute('loading','lazy');
  });
}
function closeMenu(){const nav=document.getElementById('mainNav');const btn=document.querySelector('.menu-toggle');if(nav){nav.classList.remove('mobile-open');nav.style.display='';}if(btn)btn.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open');}
function toggleMenu(e){if(e){e.preventDefault();e.stopPropagation();}const nav=document.getElementById('mainNav');const btn=document.querySelector('.menu-toggle');if(!nav||!btn)return false;const open=!nav.classList.contains('mobile-open');nav.classList.toggle('mobile-open',open);nav.style.display=open?'flex':'';btn.setAttribute('aria-expanded',open?'true':'false');document.body.classList.toggle('menu-open',open);return false;}
function bindMenu(){const nav=document.getElementById('mainNav');const btn=document.querySelector('.menu-toggle');if(!nav||!btn||btn.dataset.menuBound==='1')return;btn.dataset.menuBound='1';btn.addEventListener('click',toggleMenu,false);nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();},false);document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();},false);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();},false);}
function buildHeader(){let header=document.querySelector('.site-header');if(!header)document.body.insertAdjacentHTML('afterbegin','<header class="site-header"></header>');header=document.querySelector('.site-header');header.innerHTML='<div class="container header-inner"><a class="logo" href="index.html" aria-label="smartafiliate"><img class="site-logo-img" src="'+LOGO+'" alt="smartafiliate logo" width="50" height="50" decoding="async"></a><button type="button" class="menu-toggle" aria-label="فتح القائمة" aria-expanded="false" aria-controls="mainNav"><span class="menu-icon" aria-hidden="true">☰</span></button><nav class="main-nav" id="mainNav"><a href="index.html">الرئيسية</a><a href="best-ai-tools.html">أفضل أدوات AI</a><a href="ai-articles.html">مكتبة AI</a><a href="learn-ai.html">تعلم AI</a><a href="open-source.html">أدوات مفتوحة المصدر</a><a href="articles.html">المقالات</a></nav></div>';const nav=document.getElementById('mainNav');if(nav){nav.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href')===page())a.classList.add('active-page');});}bindMenu();}
function addAiFeatured(){if(page()!=='ai-articles.html'||document.querySelector('.ai-featured-smart'))return;const hero=document.querySelector('main .page-hero');if(!hero)return;const html='<section class="section section-alt ai-featured-smart"><div class="container"><div class="section-header"><span class="section-tag">Featured</span><h2>ابدأ بهذه المقالات</h2><p>أهم مقالات مكتبة AI للبدء السريع.</p></div><div class="articles-grid"><article class="article-card"><a href="posts-ai/chatgpt-review.html"><div class="article-image"><img src="assets/images/best-ai-tools/ai-writing.svg" alt="مراجعة ChatGPT" loading="lazy" decoding="async" width="640" height="360"></div><div class="article-content"><span class="article-category">AI</span><h3>مراجعة ChatGPT</h3><p class="article-excerpt">استخدام عملي للكتابة والتحليل والعمل.</p></div></a></article><article class="article-card"><a href="posts-ai/midjourney-guide.html"><div class="article-image"><img src="assets/images/best-ai-tools/ai-design.svg" alt="دليل Midjourney" loading="lazy" decoding="async" width="640" height="360"></div><div class="article-content"><span class="article-category">Design</span><h3>دليل Midjourney</h3><p class="article-excerpt">إنشاء صور احترافية بالذكاء الاصطناعي.</p></div></a></article><article class="article-card"><a href="posts-ai/ollama-guide.html"><div class="article-image"><img src="assets/images/open-source/ollama.svg" alt="دليل Ollama" loading="lazy" decoding="async" width="640" height="360"></div><div class="article-content"><span class="article-category">Open Source</span><h3>دليل Ollama</h3><p class="article-excerpt">تشغيل النماذج محليًا على جهازك.</p></div></a></article><article class="article-card"><a href="posts-ai/ai-affiliate-tools.html"><div class="article-image"><img src="assets/images/articles/affiliate.svg" alt="AI Affiliate Tools" loading="lazy" decoding="async" width="640" height="360"></div><div class="article-content"><span class="article-category">Affiliate</span><h3>AI + Affiliate</h3><p class="article-excerpt">أدوات للربح والتحليل والتحويل.</p></div></a></article></div></div></section>';hero.insertAdjacentHTML('afterend',html);}
function buildFooter(){document.querySelectorAll('.smart-final-footer').forEach(e=>e.remove());const footer=document.createElement('footer');footer.className='smart-final-footer defer-section';footer.innerHTML='<div class="container smart-final-footer-inner"><p class="smart-footer-contact">Contact: <a href="mailto:info@smartafiliate.com">info@smartafiliate.com</a></p><div class="smart-footer-policies"><h3>السياسات</h3><a href="privacy-policy.html">سياسة الخصوصية</a><a href="cookie-policy.html">سياسة الكوكيز</a><a href="terms.html">الشروط والأحكام</a></div></div>';const main=document.querySelector('main');if(main)main.insertAdjacentElement('afterend',footer);else document.body.appendChild(footer);}
function finalPass(){cleanMisplacedFooterText();addAiFeatured();document.querySelectorAll('img').forEach(img=>{if(isLogoImg(img)&&!img.closest('.site-header'))img.remove();});optimizeImages();const footers=document.querySelectorAll('.smart-final-footer');footers.forEach((f,i)=>{if(i<footers.length-1)f.remove();});lockMobile();}
function init(){loadCss();hardClean();buildHeader();optimizeImages();requestAnimationFrame(()=>{loadAllArticles();addAiFeatured();buildFooter();finalPass();});setTimeout(finalPass,900);}
window.toggleMenu=toggleMenu;window.closeMenu=closeMenu;
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();