(function(){
  function addStyle(){
    if(document.getElementById('home-hero-fix-style')) return;
    var css = `
      .home-page .page-hero .page-badge{
        display:none!important;
      }
      .home-page .page-hero{
        padding-top:3.4rem!important;
        padding-bottom:2.6rem!important;
      }
      .home-page .page-hero .container{
        max-width:1280px!important;
        width:min(100% - 1.5rem,1280px)!important;
      }
      .home-page .page-hero h1{
        max-width:1150px!important;
        margin-left:auto!important;
        margin-right:auto!important;
        white-space:normal!important;
      }
      .home-page .page-hero p{
        max-width:900px!important;
      }
      @media(max-width:760px){
        .home-page .page-hero{
          padding-top:2rem!important;
          padding-bottom:1.45rem!important;
        }
        .home-page .page-hero .container{
          width:min(100% - 18px,1280px)!important;
        }
        .home-page .page-hero h1{
          font-size:1.55rem!important;
          line-height:1.55!important;
        }
      }
    `;
    var style=document.createElement('style');
    style.id='home-hero-fix-style';
    style.textContent=css;
    document.head.appendChild(style);
  }

  function removeBadgeText(){
    document.querySelectorAll('.home-page .page-hero .page-badge').forEach(function(el){
      if((el.textContent||'').toLowerCase().includes('smartafiliate')) el.style.display='none';
    });
  }

  function run(){addStyle();removeBadgeText();}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run,{once:true}); else run();
})();