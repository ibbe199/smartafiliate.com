(function(){
  const STORE_KEY='smartafiliate_profit_clicks_v1';
  const AFFILIATE_HOSTS=['hop.clickbank.net'];
  const PROFIT_PAGES=['/ai-tools-comparison.html','/ai-automation-offer.html'];

  function now(){return new Date().toISOString();}
  function pageSlug(){return location.pathname.replace(/^\//,'').replace(/\/?$/,'')||'home';}
  function safeParse(value){try{return JSON.parse(value)||[];}catch(e){return [];}}
  function read(){return safeParse(localStorage.getItem(STORE_KEY));}
  function write(data){localStorage.setItem(STORE_KEY,JSON.stringify(data.slice(-500)));}
  function isAffiliate(url){return AFFILIATE_HOSTS.some(function(host){return url.hostname.indexOf(host)>-1;});}
  function isProfitPage(url){return PROFIT_PAGES.indexOf(url.pathname)>-1;}
  function trackedUrl(anchor,url){
    if(!isAffiliate(url)) return url.toString();
    const source=pageSlug();
    const label=(anchor.textContent||'cta').trim().replace(/\s+/g,'-').slice(0,50);
    url.searchParams.set('utm_source','smartafiliate');
    url.searchParams.set('utm_medium','article_cta');
    url.searchParams.set('utm_campaign',source);
    url.searchParams.set('subid',source+'_'+label);
    return url.toString();
  }
  function record(anchor,url,type){
    const data=read();
    const item={time:now(),page:location.pathname,title:document.title,href:url.toString(),type:type,text:(anchor.textContent||'').trim().slice(0,80)};
    data.push(item);write(data);
    window.dataLayer=window.dataLayer||[];
    window.dataLayer.push({event:'affiliate_click',affiliate_type:type,article_page:item.page,link_text:item.text,link_url:item.href});
  }
  function handleClick(e){
    const anchor=e.target.closest&&e.target.closest('a[href]');
    if(!anchor) return;
    let url;
    try{url=new URL(anchor.getAttribute('href'),location.origin);}catch(err){return;}
    if(!isAffiliate(url)&&!isProfitPage(url)) return;
    const type=isAffiliate(url)?'affiliate':'profit_page';
    record(anchor,url,type);
    if(isAffiliate(url)) anchor.href=trackedUrl(anchor,url);
  }
  function injectDashboard(){
    if(location.pathname!=='/profit-dashboard.html') return;
    const data=read();
    const grouped=data.reduce(function(acc,item){const key=item.page||'unknown';acc[key]=(acc[key]||0)+1;return acc;},{});
    const rows=Object.keys(grouped).sort(function(a,b){return grouped[b]-grouped[a];}).map(function(page){return '<tr><td>'+page+'</td><td>'+grouped[page]+'</td></tr>';}).join('');
    document.body.innerHTML='<main style="max-width:900px;margin:40px auto;font-family:Tahoma,Arial;padding:16px;direction:rtl"><h1>تتبع أرباح Smartafiliate</h1><p>هذا التقرير يحسب النقرات المسجلة في هذا المتصفح فقط. للتتبع العام استخدم Google Analytics أو ClickBank SubID.</p><h2>إجمالي النقرات: '+data.length+'</h2><table style="width:100%;border-collapse:collapse;background:#fff"><thead><tr><th style="text-align:right;border:1px solid #ddd;padding:10px">الصفحة</th><th style="text-align:right;border:1px solid #ddd;padding:10px">النقرات</th></tr></thead><tbody>'+rows+'</tbody></table><button id="clearProfitData" style="margin-top:20px;background:#ea580c;color:white;border:0;border-radius:999px;padding:10px 18px;font-weight:bold">مسح البيانات</button></main>';
    document.getElementById('clearProfitData').onclick=function(){localStorage.removeItem(STORE_KEY);location.reload();};
  }
  document.addEventListener('click',handleClick,true);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',injectDashboard,{once:true});else injectDashboard();
})();
