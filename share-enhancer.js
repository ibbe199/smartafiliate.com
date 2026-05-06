(function(){
  'use strict';

  const EXCLUDED=new Set([
    'contact.html','about.html','privacy.html','privacy-policy.html','cookie-policy.html','terms.html','disclosure.html','sitemap.html','sitemap.xml','robots.txt'
  ]);

  function pathName(){return (location.pathname.split('/').pop()||'index.html').toLowerCase();}
  function isLiveContentPage(){
    const p=pathName();
    if(EXCLUDED.has(p))return false;
    if(location.pathname.includes('/posts-ai/'))return true;
    if(location.pathname.includes('/articles/'))return true;
    return ['index.html','articles.html','ai-articles.html','posts-ai.html','best-ai-tools.html','learn-ai.html','open-source.html','ai-tools-comparison.html','ai-automation-offer.html'].includes(p);
  }
  function style(){
    if(document.getElementById('share-enhancer-style'))return;
    var s=document.createElement('style');
    s.id='share-enhancer-style';
    s.textContent=`
.share-section{padding-top:2rem!important;margin-top:2rem!important}.share-box{background:linear-gradient(135deg,rgba(234,88,12,.08),rgba(245,158,11,.12))!important;border:1px solid rgba(234,88,12,.18)!important;border-radius:22px!important;padding:2rem!important;text-align:center!important;box-shadow:0 2px 10px rgba(15,23,42,.04)!important}.share-badge{display:inline-block!important;background:#fff7ed!important;color:#c2410c!important;padding:.35rem 1rem!important;border-radius:999px!important;font-size:.8rem!important;font-weight:900!important;margin-bottom:1rem!important}.share-box h2{margin-bottom:.75rem!important;color:#0b1f3a!important}.share-box p{color:#475569!important;margin-bottom:1.25rem!important;line-height:1.8!important}.share-buttons{display:flex!important;flex-wrap:wrap!important;justify-content:center!important;gap:.8rem!important}.share-btn{border:none!important;border-radius:999px!important;padding:.8rem 1.2rem!important;font-weight:900!important;font-size:.92rem!important;cursor:pointer!important;text-decoration:none!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;min-width:105px!important;min-height:42px!important}.share-whatsapp{background:#25d366!important;color:#fff!important}.share-telegram{background:#229ed9!important;color:#fff!important}.share-facebook{background:#1877f2!important;color:#fff!important}.share-messenger{background:#0084ff!important;color:#fff!important}.share-x{background:#111827!important;color:#fff!important}.share-copy{background:#fff!important;color:#0f172a!important;border:1px solid #dbe4f0!important}.share-message{margin-top:1rem!important;font-size:.9rem!important;color:#c2410c!important;font-weight:900!important;min-height:1.4rem!important}@media(max-width:640px){.share-box{padding:1.35rem!important}.share-btn{min-width:96px!important;padding:.72rem .9rem!important}}
    `;
    document.head.appendChild(s);
  }
  function pageUrl(){return location.href.split('#')[0];}
  function pageTitle(){return (document.querySelector('h1')?.textContent||document.title||'smartafiliate').trim();}
  function encodedUrl(){return encodeURIComponent(pageUrl());}
  function encodedTitle(){return encodeURIComponent(pageTitle());}
  function copyId(){return 'shareMessageAuto';}
  function shareBoxHtml(){
    const url=encodedUrl();
    const title=encodedTitle();
    return '<section class="share-section smart-auto-share" data-managed="1"><div class="container"><div class="share-box"><span class="share-badge">📢 شارك الصفحة</span><h2>إذا أعجبك المحتوى، شاركه</h2><p>ساعد غيرك يكتشف هذا المحتوى المفيد حول الذكاء الاصطناعي والأدوات الرقمية.</p><div class="share-buttons"><a class="share-btn share-whatsapp" href="https://wa.me/?text='+title+'%20'+url+'" target="_blank" rel="noopener noreferrer">واتساب</a><a class="share-btn share-telegram" href="https://t.me/share/url?url='+url+'&text='+title+'" target="_blank" rel="noopener noreferrer">تيليجرام</a><a class="share-btn share-facebook" href="https://www.facebook.com/sharer/sharer.php?u='+url+'" target="_blank" rel="noopener noreferrer">فيسبوك</a><a class="share-btn share-messenger" href="fb-messenger://share/?link='+url+'" target="_blank" rel="noopener noreferrer">ماسنجر</a><a class="share-btn share-x" href="https://twitter.com/intent/tweet?url='+url+'&text='+title+'" target="_blank" rel="noopener noreferrer">X</a><button class="share-btn share-copy" type="button" data-copy-share="1">نسخ الرابط</button></div><p id="'+copyId()+'" class="share-message" aria-live="polite"></p></div></div></section>';
  }
  function ensureShareBox(){
    if(!isLiveContentPage())return;
    if(document.querySelector('.share-section'))return;
    const main=document.querySelector('main');
    if(!main)return;
    main.insertAdjacentHTML('beforeend',shareBoxHtml());
  }
  function addButtons(){
    style();
    document.querySelectorAll('.share-buttons').forEach(function(box){
      var url=encodedUrl();
      var title=encodedTitle();
      if(!box.querySelector('.share-facebook')){
        var fb=document.createElement('a');
        fb.className='share-btn share-facebook';
        fb.href='https://www.facebook.com/sharer/sharer.php?u='+url;
        fb.target='_blank';
        fb.rel='noopener noreferrer';
        fb.textContent='فيسبوك';
        var x=box.querySelector('.share-x');
        if(x)box.insertBefore(fb,x);else box.appendChild(fb);
      }
      if(!box.querySelector('.share-messenger')){
        var ms=document.createElement('a');
        ms.className='share-btn share-messenger';
        ms.href='fb-messenger://share/?link='+url;
        ms.target='_blank';
        ms.rel='noopener noreferrer';
        ms.textContent='ماسنجر';
        var copy=box.querySelector('.share-copy');
        if(copy)box.insertBefore(ms,copy);else box.appendChild(ms);
      }
    });
  }
  function bindCopy(){
    document.addEventListener('click',function(e){
      const btn=e.target.closest('[data-copy-share]');
      if(!btn)return;
      const msg=document.getElementById(copyId())||btn.closest('.share-box')?.querySelector('.share-message');
      navigator.clipboard.writeText(pageUrl()).then(function(){if(msg)msg.textContent='تم نسخ رابط الصفحة ✅';}).catch(function(){if(msg)msg.textContent='تعذر نسخ الرابط، انسخه يدوياً: '+pageUrl();});
    },{passive:true});
  }
  function run(){style();ensureShareBox();addButtons();bindCopy();setTimeout(function(){ensureShareBox();addButtons();},700);setTimeout(function(){ensureShareBox();addButtons();},1800);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
})();
