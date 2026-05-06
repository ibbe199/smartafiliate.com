(function(){
  'use strict';
  function style(){
    if(document.getElementById('share-enhancer-style'))return;
    var s=document.createElement('style');
    s.id='share-enhancer-style';
    s.textContent='.share-facebook{background:#1877f2!important;color:#fff!important}.share-messenger{background:#0084ff!important;color:#fff!important}.share-buttons{display:flex!important;flex-wrap:wrap!important;justify-content:center!important;gap:.8rem!important}.share-btn{min-width:105px!important}';
    document.head.appendChild(s);
  }
  function pageUrl(){return location.href.split('#')[0];}
  function pageTitle(){return (document.querySelector('h1')?.textContent||document.title||'smartafiliate').trim();}
  function addButtons(){
    style();
    document.querySelectorAll('.share-buttons').forEach(function(box){
      var url=encodeURIComponent(pageUrl());
      var title=encodeURIComponent(pageTitle());
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
  function run(){addButtons();setTimeout(addButtons,700);setTimeout(addButtons,1800);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
})();
