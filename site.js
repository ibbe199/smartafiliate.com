(function () {
  const BRAND = 'Smartafiliate';
  const SYSTEM_PAGE = 'https://alishede.systeme.io/affiliate';
  const SYSTEM_LABEL = 'نظام Affiliate';
  const CLICKBANK_LINK = 'https://alishede.systeme.io/affiliate';
  const isMobile = () => window.matchMedia('(max-width:760px)').matches;
  const idle = (fn, timeout) => ('requestIdleCallback' in window ? requestIdleCallback(fn, { timeout: timeout || 1600 }) : setTimeout(fn, timeout || 1600));

  function loadIdentityLayer(){
    if(!document.getElementById('smart-identity-layer')){const link=document.createElement('link');link.id='smart-identity-layer';link.rel='stylesheet';link.href='/identity-fix.css?v=20260501-ux3';document.head.appendChild(link);}
    const style=document.createElement('style');style.id='smart-critical-mobile-fix';style.textContent='@media(max-width:760px){.topbar,.ai-tool-finder,.finder-bar,.promo-bar,.quick-tool-bar,[class*=tool-finder],[id*=tool-finder]{display:none!important}.page-hero,.hero{padding:28px 0!important}.articles-grid,.posts-grid,.tools-grid{grid-template-columns:1fr!important}.article-image,.post-image{height:82px!important;min-height:82px!important;max-height:82px!important}.article-card,.post-card{border-radius:16px!important}.filter-bar,.filters,.library-filters{display:flex!important;overflow-x:auto!important;flex-wrap:nowrap!important}}';if(!document.getElementById('smart-critical-mobile-fix'))document.head.appendChild(style);
  }

  function normalizeBranding(){document.title=(document.title||'').replace(/smartafiliate/gi,BRAND);document.querySelectorAll('.logo').forEach(function(logo){const light=logo.querySelector('.logo-text-light');const accent=logo.querySelector('.logo-text-accent');if(light&&accent){light.textContent='Smart';accent.textContent='afiliate';}});}
  function removeLegacyBars(){document.querySelectorAll('.topbar,.ai-tool-finder,.finder-bar,.promo-bar,.quick-tool-bar,[class*=tool-finder],[id*=tool-finder]').forEach(function(el){el.remove();});}
  function injectAffiliateCss(){if(document.getElementById('smart-affiliate-system-css'))return;const style=document.createElement('style');style.id='smart-affiliate-system-css';style.textContent='.smart-system-nav-link{font-weight:900!important}.smart-breadcrumb{width:min(1100px,calc(100% - 32px));margin:1rem auto 0;padding:.75rem 1rem;border:1px solid #dbeafe;border-radius:999px;background:#f8fafc;color:#334155;font-size:.9rem;font-weight:800;display:flex;gap:.45rem;align-items:center;flex-wrap:wrap}.smart-breadcrumb a{color:#1d4ed8!important;text-decoration:none!important;font-weight:900}';document.head.appendChild(style);}
  function getPageTitle(){const h1=document.querySelector('h1');return(h1?h1.textContent:document.title).replace(/\s+/g,' ').replace(/\|\s*Smartafiliate/i,'').trim();}
  function addBreadcrumbs(){if(document.querySelector('.smart-breadcrumb'))return;const path=location.pathname.toLowerCase();if(!path.includes('/posts-ai/')&&!path.endsWith('/posts-ai.html')&&!path.endsWith('/blog.html'))return;const nav=document.createElement('nav');nav.className='smart-breadcrumb';nav.innerHTML='<a href="/index.html">الرئيسية</a><span>›</span><a href="/posts-ai.html">جميع المقالات</a><span>›</span><span class="current">'+getPageTitle()+'</span>';const main=document.querySelector('main');if(main)main.insertBefore(nav,main.firstChild);}
  function addSystemLinks(){document.querySelectorAll('.main-nav').forEach(function(nav){if(!nav.querySelector('a[href="'+SYSTEM_PAGE+'"]')){const a=document.createElement('a');a.href=SYSTEM_PAGE;a.textContent=SYSTEM_LABEL;a.className='smart-system-nav-link';a.target='_blank';a.rel='noopener noreferrer';nav.appendChild(a);}});}
  function prepareImages(){document.querySelectorAll('img').forEach(function(img){img.decoding='async';img.loading='lazy';});}
  function applyBasicAffiliateLinks(){Array.from(document.querySelectorAll('.tool-card')).slice(0,4).forEach(function(card){const link=card.querySelector('.tool-link');if(!link)return;link.href=CLICKBANK_LINK;link.target='_blank';});}
  function init(){loadIdentityLayer();removeLegacyBars();injectAffiliateCss();normalizeBranding();addBreadcrumbs();addSystemLinks();prepareImages();idle(applyBasicAffiliateLinks,2500);setTimeout(removeLegacyBars,500);setTimeout(removeLegacyBars,1500);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
function closeMenu(){const nav=document.getElementById('mainNav');const button=document.querySelector('.menu-toggle');if(!nav||!button)return;nav.classList.remove('active');button.setAttribute('aria-expanded','false');}
function toggleMenu(){const nav=document.getElementById('mainNav');const button=document.querySelector('.menu-toggle');if(!nav||!button)return;const open=nav.classList.toggle('active');button.setAttribute('aria-expanded',open?'true':'false');}
