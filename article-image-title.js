(function(){
  'use strict';

  function addStyles(){
    if(document.getElementById('article-image-title-style'))return;
    var style=document.createElement('style');
    style.id='article-image-title-style';
    style.textContent=`
.article-image{position:relative!important;background:linear-gradient(135deg,#06182d,#0b2748)!important;display:flex!important;align-items:center!important;justify-content:center!important;overflow:hidden!important}
.article-image img{opacity:.42!important;filter:saturate(.95) contrast(1.05)!important}
.article-image-title{position:absolute!important;inset:auto 14px 14px 14px!important;z-index:3!important;display:flex!important;align-items:center!important;justify-content:center!important;min-height:58px!important;padding:10px 12px!important;border-radius:16px!important;background:linear-gradient(135deg,rgba(6,24,45,.88),rgba(234,88,12,.82))!important;color:#fff!important;text-align:center!important;font-weight:950!important;font-size:clamp(.92rem,3.5vw,1.08rem)!important;line-height:1.55!important;text-shadow:0 2px 10px rgba(0,0,0,.35)!important;box-shadow:0 12px 26px rgba(0,0,0,.22)!important;backdrop-filter:blur(6px)!important;direction:rtl!important}
.article-card:hover .article-image-title{transform:translateY(-2px)!important;background:linear-gradient(135deg,rgba(6,24,45,.94),rgba(249,115,22,.9))!important}
@media(max-width:520px){.article-image-title{inset:auto 10px 10px 10px!important;min-height:54px!important;padding:9px 10px!important;font-size:.95rem!important;border-radius:14px!important}}
    `;
    document.head.appendChild(style);
  }

  function clean(text){
    return (text||'').replace(/\s+/g,' ').trim();
  }

  function titleFor(card){
    var title=card.querySelector('.article-content h3,.post-content h3,.post-title,h3');
    if(title)return clean(title.textContent);
    var img=card.querySelector('.article-image img,.post-image img');
    if(img&&img.alt)return clean(img.alt);
    return '';
  }

  function enhanceCard(card){
    if(!card||card.dataset.imageTitleDone==='1')return;
    var image=card.querySelector('.article-image,.post-image');
    if(!image)return;
    var title=titleFor(card);
    if(!title)return;
    if(!image.querySelector('.article-image-title')){
      var label=document.createElement('div');
      label.className='article-image-title';
      label.textContent=title;
      image.appendChild(label);
    }
    card.dataset.imageTitleDone='1';
  }

  function enhanceAll(){
    addStyles();
    document.querySelectorAll('.article-card,.post-card').forEach(enhanceCard);
  }

  function start(){
    enhanceAll();
    var count=0;
    var timer=setInterval(function(){
      enhanceAll();
      count++;
      if(count>14)clearInterval(timer);
    },500);
    if('MutationObserver' in window){
      new MutationObserver(enhanceAll).observe(document.body,{childList:true,subtree:true});
    }
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
