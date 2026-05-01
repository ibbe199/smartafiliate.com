(function(){
  function base(path){return path.startsWith('/') ? path : '/' + path;}
  function style(){
    if(document.getElementById('smart-footer-full-style'))return;
    const s=document.createElement('style');
    s.id='smart-footer-full-style';
    s.textContent=`
.smart-final-footer{background:#071d35!important;color:#fff!important;padding:14px 0!important;margin-top:28px!important;border-top:1px solid rgba(147,197,253,.18)!important;direction:rtl!important;overflow:hidden!important}
.smart-final-footer *{box-sizing:border-box!important}.smart-final-footer a{text-decoration:none!important}.smart-final-footer .container{max-width:1180px!important;margin:0 auto!important;padding-left:16px!important;padding-right:16px!important;width:100%!important}
.smart-footer-layout{display:grid!important;grid-template-columns:1fr auto 1fr!important;align-items:center!important;gap:14px!important;width:100%!important}
.smart-footer-side{display:flex!important;align-items:center!important;gap:7px!important;flex-wrap:wrap!important;min-width:0!important}.smart-footer-right{justify-content:flex-start!important;text-align:right!important}.smart-footer-left{justify-content:flex-end!important;text-align:left!important;direction:ltr!important}
.smart-footer-center{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;text-align:center!important;gap:4px!important;min-width:230px!important}.smart-footer-brand-mini{color:#fff!important;font-weight:900!important;font-size:1.05rem!important;line-height:1.2!important;white-space:nowrap!important}.smart-footer-brand-mini small{display:block!important;color:#cbd5e1!important;font-size:.76rem!important;font-weight:700!important;margin-top:2px!important}.smart-footer-copy{color:#cbd5e1!important;font-size:.74rem!important;line-height:1.35!important;white-space:nowrap!important}.smart-footer-copy a{color:#93c5fd!important}
.smart-footer-link{display:inline-flex!important;align-items:center!important;justify-content:center!important;color:#dbeafe!important;background:rgba(59,130,246,.12)!important;border:1px solid rgba(147,197,253,.16)!important;border-radius:999px!important;font-weight:800!important;font-size:.82rem!important;line-height:1.2!important;padding:6px 9px!important;white-space:nowrap!important}.smart-footer-link:hover{color:#fff!important;background:rgba(59,130,246,.32)!important}
@media(max-width:860px){.smart-footer-layout{grid-template-columns:1fr!important;gap:10px!important}.smart-footer-right,.smart-footer-left{justify-content:center!important;text-align:center!important;direction:rtl!important}.smart-footer-center{order:-1!important;min-width:0!important}.smart-footer-copy{white-space:normal!important}}
@media(max-width:520px){.smart-final-footer{padding:12px 0!important}.smart-final-footer .container{padding-left:12px!important;padding-right:12px!important}.smart-footer-side{gap:6px!important}.smart-footer-link{font-size:.78rem!important;padding:6px 8px!important}.smart-footer-brand-mini{font-size:.98rem!important}}
    `;
    document.head.appendChild(s);
  }
  function footerHTML(){
    return '<div class="container smart-footer-layout">'+
      '<nav class="smart-footer-side smart-footer-right" aria-label="Footer right links">'+
        '<a class="smart-footer-link" href="'+base('about.html')+'">من نحن</a>'+
        '<a class="smart-footer-link" href="'+base('contact.html')+'">تواصل</a>'+
        '<a class="smart-footer-link" href="'+base('articles.html')+'">المقالات</a>'+
        '<a class="smart-footer-link" href="'+base('ai-articles.html')+'">مكتبة AI</a>'+
      '</nav>'+
      '<div class="smart-footer-center">'+
        '<div class="smart-footer-brand-mini">smartafiliate <small>AI + Affiliate</small></div>'+
        '<div class="smart-footer-copy">© 2026 — <a href="mailto:info@smartafiliate.com">info@smartafiliate.com</a></div>'+
      '</div>'+
      '<nav class="smart-footer-side smart-footer-left" aria-label="Footer left links">'+
        '<a class="smart-footer-link" href="'+base('best-ai-tools.html')+'">أفضل أدوات AI</a>'+
        '<a class="smart-footer-link" href="'+base('learn-ai.html')+'">تعلم AI</a>'+
        '<a class="smart-footer-link" href="'+base('open-source.html')+'">مصادر مفتوحة</a>'+
        '<a class="smart-footer-link" href="'+base('privacy-policy.html')+'">الخصوصية</a>'+
        '<a class="smart-footer-link" href="'+base('sitemap.html')+'">Sitemap</a>'+
      '</nav>'+
      '</div>';
  }
  function build(){
    style();
    document.querySelectorAll('footer,.site-footer,.smart-global-footer,.smart-final-footer,.smart-global-contact').forEach(function(f){f.remove();});
    var footer=document.createElement('footer');
    footer.className='smart-final-footer';
    footer.innerHTML=footerHTML();
    var main=document.querySelector('main');
    if(main)main.insertAdjacentElement('afterend',footer);else document.body.appendChild(footer);
  }
  function run(){build();setTimeout(build,1000);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
})();
