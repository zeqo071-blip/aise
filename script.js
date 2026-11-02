var D={"i": {"roses": "assets/img/roses.jpg", "p28": "assets/img/p28.jpg", "p29": "assets/img/p29.jpg", "p31": "assets/img/p31.jpg", "cake": "assets/img/cake.jpg", "hands": "assets/img/hands.jpg", "p22": "assets/img/p22.jpg", "p23": "assets/img/p23.jpg", "p36": "assets/img/p36.jpg", "p35": "assets/img/p35.jpg", "p34": "assets/img/p34.jpg", "p04": "assets/img/p04.jpg", "p05": "assets/img/p05.jpg", "p06": "assets/img/p06.jpg", "p03": "assets/img/p03.jpg", "p01": "assets/img/p01.jpg", "p08": "assets/img/p08.jpg", "p18": "assets/img/p18.jpg", "p21": "assets/img/p21.jpg", "p37": "assets/img/p37.jpg", "p38": "assets/img/p38.jpg", "p39": "assets/img/p39.jpg", "msg1": "assets/img/msg1.jpg", "msg2": "assets/img/msg2.jpg", "bayram": "assets/img/bayram.jpg", "repost": "assets/img/repost.jpg", "p07": "assets/img/p07.jpg", "p09": "assets/img/p09.jpg", "p10": "assets/img/p10.jpg", "p11": "assets/img/p11.jpg", "p12": "assets/img/p12.jpg", "p13": "assets/img/p13.jpg", "p15": "assets/img/p15.jpg", "p16": "assets/img/p16.jpg", "p17": "assets/img/p17.jpg", "p19": "assets/img/p19.jpg", "p20": "assets/img/p20.jpg", "p24": "assets/img/p24.jpg", "p25": "assets/img/p25.jpg", "p26": "assets/img/p26.jpg", "p27": "assets/img/p27.jpg", "p40": "assets/img/p40.jpg", "p41": "assets/img/p41.jpg"}, "g": ["roses", "p28", "p29", "p31", "cake", "hands", "p22", "p23", "p36", "p35", "p34", "p04", "p05", "p06", "p03", "p01", "p08", "p18", "p21", "p37", "p38", "p39"], "v": ["assets/video/9-cu-ay.mp4", "assets/video/video-01.mp4", "assets/video/video-02.mp4", "assets/video/video-03.mp4", "assets/video/video-04.mp4", "assets/video/video-05.mp4", "assets/video/video-06.mp4", "assets/video/video-07.mp4", "assets/video/video-08.mp4", "assets/video/video-09.mp4", "assets/video/video-10.mp4", "assets/video/video-11.mp4", "assets/video/video-12.mp4", "assets/video/video-13.mp4", "assets/video/video-14.mp4", "assets/video/video-15.mp4", "assets/video/video-16.mp4", "assets/video/video-17.mp4", "assets/video/video-18.mp4", "assets/video/video-19.mp4", "assets/video/video-20.mp4", "assets/video/video-21.mp4"]};
document.querySelectorAll('[data-img]').forEach(function(e){e.src=D.i[e.dataset.img]});
document.querySelectorAll('[data-svgimg]').forEach(function(e){e.setAttribute('href',D.i[e.dataset.svgimg])});
var FEAT=0;var shown=0;var vs=document.getElementById('vs');
D.v.forEach(function(u,ix){if(ix===FEAT||shown>=6)return;shown++;
  var b=document.createElement('div');b.className='vid';b.tabIndex=0;b.setAttribute('role','button');b.setAttribute('aria-label','Videonu oynat');
  var v=document.createElement('video');v.src=u;v.preload='metadata';v.playsInline=true;
  var p=document.createElement('span');p.className='pb';p.textContent='▶';
  var d=document.createElement('span');d.className='du';d.textContent='';
  v.addEventListener('loadedmetadata',function(){var s=Math.round(v.duration||0);d.textContent='00:'+(s<10?'0':'')+s;});
  function t(){if(v.paused){document.querySelectorAll('video').forEach(function(o){o.pause()});v.play();b.classList.add('pl2')}else{v.pause();b.classList.remove('pl2')}}
  b.addEventListener('click',t);b.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();t()}});
  v.addEventListener('ended',function(){b.classList.remove('pl2')});
  b.append(v,p,d);vs.appendChild(b);
});
var pl=document.getElementById('pl');D.g.slice(0,9).forEach(function(k,n){var f=document.createElement('figure');f.className='po';f.style.margin='0';f.style.transform='rotate('+(((n*37)%9)-4)+'deg)';var m=document.createElement('img');m.src=D.i[k];m.alt='Şəkil';m.loading='lazy';f.appendChild(m);pl.appendChild(f)});
var trk=document.getElementById('trk');
function mid(){var c=trk.querySelector('.on');if(c)trk.scrollLeft=c.offsetLeft-(trk.clientWidth-c.offsetWidth)/2}
addEventListener('load',mid);
document.getElementById('pv').onclick=function(){trk.scrollBy({left:-200,behavior:'smooth'})};
document.getElementById('nx').onclick=function(){trk.scrollBy({left:200,behavior:'smooth'})};
var sb=document.getElementById('sb'),sx=document.getElementById('sx');
sb.onclick=function(){var o=sx.classList.toggle('open');sb.setAttribute('aria-expanded',o)};
var mus=document.getElementById('mus'),ok=!(matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches);
var bg=document.getElementById('bg'),wasOn=false,got=false;bg.volume=.6;
function ui(){var on=!bg.paused;mus.textContent=on?'♫ ❚❚':'♫ ▶';mus.setAttribute('aria-label',on?'Musiqini dayandır':'Musiqini başlat')}
function go(){var p=bg.play();if(p&&p.catch)p.catch(function(){});ui()}
mus.onclick=function(){got=true;if(bg.paused)go();else{bg.pause();ui()}};
function first(e){if(got)return;if(e.target&&e.target.closest&&e.target.closest('#mus'))return;got=true;go()}
addEventListener('pointerdown',first);addEventListener('keydown',first);
bg.addEventListener('play',ui);bg.addEventListener('pause',ui);
function anyVid(){return Array.prototype.some.call(document.querySelectorAll('video'),function(v){return !v.paused&&!v.ended})}
document.addEventListener('play',function(e){if(e.target.tagName==='VIDEO'&&!bg.paused){bg.pause();wasOn=true}},true);
['pause','ended'].forEach(function(n){document.addEventListener(n,function(e){if(e.target.tagName==='VIDEO')setTimeout(function(){if(wasOn&&!anyVid()){wasOn=false;bg.play().catch(function(){})}},80)},true)});
if(ok)setInterval(function(){if(document.body.classList.contains('paused'))return;var h=document.createElement('div');h.className='fh';h.textContent='♥';h.style.left=Math.random()*100+'vw';h.style.fontSize=(12+Math.random()*18)+'px';h.style.animationDuration=(8+Math.random()*6)+'s';document.body.appendChild(h);setTimeout(function(){h.remove()},14500)},1500);

/* 9-cu ay videosu + qalereya */
(function(){
var $=function(i){return document.getElementById(i)};
function resumeBg(){setTimeout(function(){if(wasOn&&!anyVid()){wasOn=false;bg.play().catch(function(){})}},80)}
document.addEventListener('play',function(e){var t=e.target;if(t.tagName!=='VIDEO')return;document.querySelectorAll('video').forEach(function(o){if(o!==t&&!o.paused)o.pause()});document.querySelectorAll('.vid').forEach(function(b){var v=b.querySelector('video');if(v&&v.paused)b.classList.remove('pl2')})},true);
var fv=$('fv'),fb=$('fbig');fv.src=D.v[FEAT];
fb.onclick=$('fpl').onclick=function(){fv.play();$('fv').scrollIntoView({block:'center',behavior:'smooth'})};
fv.addEventListener('play',function(){fb.classList.add('h');fv.controls=true});
fv.addEventListener('ended',function(){fb.classList.remove('h');fv.controls=false});
$('ffs').onclick=function(){var f=fv.requestFullscreen||fv.webkitRequestFullscreen;if(f)f.call(fv);else if(fv.webkitEnterFullscreen)fv.webkitEnterFullscreen();fv.play()};

var K=D.g.concat(Object.keys(D.i).filter(function(k){return D.g.indexOf(k)<0}));
var VO=[FEAT].concat(D.v.map(function(_,i){return i}).filter(function(i){return i!==FEAT}));
var lb=$('lb'),gr=$('lbg'),vw=$('lbv'),sl=$('lbs'),tt=$('lbt'),bk=$('lbb'),mode='',idx=0,opener=null,built={};
function N(){return mode==='p'?K.length:VO.length}
function stop(){var v=sl.querySelector('video');if(v){v.pause();v.removeAttribute('src');v.load()}sl.innerHTML='';resumeBg()}
function build(m){
  if(built[m])return;built[m]=1;var g=document.createElement('div');g.style.display='contents';g.dataset.m=m;
  (m==='p'?K:VO).forEach(function(x,i){
    var b=document.createElement('button');b.type='button';b.className='th';b.onclick=function(){show(i)};
    if(m==='p'){b.setAttribute('aria-label','Şəkil '+(i+1));var im=document.createElement('img');im.src=D.i[x];im.loading='lazy';im.alt='';b.appendChild(im)}
    else{b.setAttribute('aria-label','Video '+(i+1));var v=document.createElement('video');v.muted=true;v.playsInline=true;v.preload='metadata';v.src=D.v[x]+'#t=0.5';var p=document.createElement('span');p.className='pb';p.textContent='▶';b.append(v,p);if(x===FEAT){var f=document.createElement('span');f.className='fbadge sc';f.textContent='9 ay ♡';b.appendChild(f)}}
    g.appendChild(b)});
  gr.appendChild(g)}
function grid(){stop();vw.hidden=true;gr.hidden=false;bk.hidden=true;tt.textContent=mode==='p'?'Bütün şəkillərimiz ♡':'Bütün videolarımız ♡';[].forEach.call(gr.children,function(c){c.hidden=c.dataset.m!==mode})}
function open(m,i){opener=document.activeElement;mode=m;build(m);lb.hidden=false;document.documentElement.style.overflow='hidden';grid();if(i!=null)show(i);else $('lbx').focus()}
function show(i){
  stop();idx=(i+N())%N();gr.hidden=true;vw.hidden=false;bk.hidden=false;
  var x=mode==='p'?K[idx]:VO[idx],e;
  if(mode==='p'){e=document.createElement('img');e.src=D.i[x];e.alt='Şəkil'}
  else{e=document.createElement('video');e.controls=true;e.autoplay=true;e.playsInline=true;e.src=D.v[x]}
  var c=document.createElement('div');c.className='lbc';c.textContent=(idx+1)+' / '+N();
  sl.append(e,c);tt.textContent=mode==='p'?'Şəkillərimiz ♡':'Videolarımız ♡';
  if(mode==='v'){var pr=e.play();if(pr&&pr.catch)pr.catch(function(){})}
  $('lbnx').focus()}
function close(){stop();lb.hidden=true;document.documentElement.style.overflow='';if(opener&&opener.focus)opener.focus()}
$('allp').onclick=function(){open('p')};$('allv').onclick=function(){open('v')};
$('lbx').onclick=close;bk.onclick=grid;$('lbp').onclick=function(){show(idx-1)};$('lbnx').onclick=function(){show(idx+1)};
document.addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape'){if(!vw.hidden)grid();else close()}else if(!vw.hidden&&e.key==='ArrowLeft')show(idx-1);else if(!vw.hidden&&e.key==='ArrowRight')show(idx+1)});
var sx0=null;vw.addEventListener('touchstart',function(e){sx0=e.touches[0].clientX},{passive:true});
vw.addEventListener('touchend',function(e){if(sx0==null)return;var d=e.changedTouches[0].clientX-sx0;sx0=null;if(Math.abs(d)>60)show(idx+(d<0?1:-1))},{passive:true});
document.addEventListener('click',function(e){var im=e.target;if(!(im.tagName==='IMG')||im.closest('#lb'))return;var k=im.dataset.img;if(!k&&im.closest('.po')){for(var q in D.i)if(D.i[q]===im.getAttribute('src')){k=q;break}}var i=K.indexOf(k);if(i>=0)open('p',i)});
})();

/* animasiyalar */
(function(){
var $=function(i){return document.getElementById(i)},RM=matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
var fv=$('fv'),fe=document.querySelector('.fe'),ph=document.querySelector('.phone');
function burst(x,y,n){for(var i=0;i<n;i++){var h=document.createElement('span'),a=Math.random()*6.283,d=50+Math.random()*110;h.className='bh';h.textContent=Math.random()<.3?'✦':'♥';h.style.left=x+'px';h.style.top=y+'px';h.style.fontSize=(10+Math.random()*16)+'px';h.style.setProperty('--dx',Math.cos(a)*d+'px');h.style.setProperty('--dy',(Math.sin(a)*d-40)+'px');h.style.setProperty('--r',(Math.random()*120-60)+'deg');document.body.appendChild(h);setTimeout(function(e){e.remove()},1400,h)}}
if(!RM)addEventListener('pointerdown',function(e){if(e.target.tagName==='VIDEO'||(e.target.closest&&e.target.closest('#lb')))return;burst(e.clientX,e.clientY,5)});
/* yazi masinasi */
function prep(el){var t=el.textContent;el._t=t;el.textContent='';var a=document.createElement('span'),g=document.createElement('span');g.style.visibility='hidden';g.textContent=t;a.className='tw1';var w=document.createElement('span');w.append(a,g);el.append(w);el._a=a;el._g=g}
function run(el,sp,cb){var ch=Array.from(el._t),i=0;el.classList.add('typing');(function st(){if(i>=ch.length){el.classList.remove('typing');cb&&cb();return}var c=ch[i++];el._a.textContent+=c;el._g.textContent=ch.slice(i).join('');setTimeout(st,sp*(/[.,…!?]/.test(c)?7:1)+Math.random()*sp*.7)})()}
function seq(list,i,done){if(i>=list.length){done&&done();return}run(list[i][0],list[i][1],function(){setTimeout(seq,list[i][2]||120,list,i+1,done)})}
function once(el,th,fn){if(!('IntersectionObserver' in window)){fn();return}var o=new IntersectionObserver(function(es){if(es[0].isIntersecting){o.disconnect();fn()}},{threshold:th});o.observe(el)}
/* 9-cu ay: yazilir, sonra video avtomatik acilir */
var eye=document.querySelector('#ay9 .eye'),h2=document.querySelector('#ay9 h2'),pp=document.querySelector('#ay9 .fe p'),row=document.querySelector('#ay9 .row');
function start(){
  ph.classList.add('on');
  setTimeout(function(){var pr;try{fv.muted=false;pr=fv.play()}catch(e){}
    function mute(){fv.muted=true;var q=fv.play();if(q&&q.catch)q.catch(function(){$('fbig').classList.remove('h')});$('funm').hidden=false}
    if(pr&&pr.catch)pr.catch(mute)},900)}
fv.addEventListener('volumechange',function(){if(!fv.muted)$('funm').hidden=true});
$('funm').onclick=function(e){e.stopPropagation();fv.muted=false;$('funm').hidden=true};
if(RM){ph.classList.add('on')}
else{
  fe.classList.add('jsf');[eye,h2,pp].forEach(prep);
  once(fe,.4,function(){seq([[eye,45,250],[h2,70,350],[pp,32,300]],0,function(){row.classList.add('show');setTimeout(start,600)})});
  if('IntersectionObserver' in window)new IntersectionObserver(function(es){if(es[0].intersectionRatio<.08&&!fv.paused&&!fv.webkitDisplayingFullscreen&&!document.fullscreenElement)fv.pause()},{threshold:[0,.08,.3]}).observe(ph);
}
/* mektub: sətir-sətir yazilir */
var lt=document.querySelector('.paper2');
if(!RM){var L=[].slice.call(lt.querySelectorAll('.ph,.pb2 p,.sg2'));L.forEach(prep);once(lt,.35,function(){seq(L.map(function(e,i){return[e,i===0?60:26,260]}),0)})}
/* gizli mesaj */
var gm=document.querySelector('.gm'),sb=$('sb'),gdone=false;
sb.addEventListener('click',function(){if($('sx').classList.contains('open')){var r=sb.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2,26);if(!gdone&&!RM){gdone=true;prep(gm);setTimeout(run,500,gm,55)}}});
/* scroll ile cixma */
var sel='.eye,.sec h2,.sec .sub,.head .ghost,.card,.chats figure,.po,.vid,.hart,.sur .t,.sur>.btn,.paper2,.ft>div';
[].forEach.call(document.querySelectorAll(sel),function(e,n){
  if(e.closest('#ay9')||e.closest('.hero'))return;
  var sib=[].indexOf.call(e.parentNode.children,e),z=e.matches('.card,.chats figure,.po,.vid');
  e.classList.add('rv');if(z)e.classList.add('z');else if(e.matches('.paper2'))e.classList.add('l');else if(e.matches('.hart'))e.classList.add('r');
  var d=(sib%6)*110;e.style.transitionDelay=d+'ms';
  once(e,.12,function(){e.classList.add('in');setTimeout(function(){e.classList.remove('rv','in','z','l','r');e.style.transitionDelay=''},1500+d)})});
/* yuxari zolaq + parallax */
var sp=document.createElement('div');sp.id='sp';document.body.appendChild(sp);var art=document.querySelector('.art'),tk=0;
addEventListener('scroll',function(){if(tk)return;tk=1;requestAnimationFrame(function(){tk=0;var h=document.documentElement,m=h.scrollHeight-innerHeight;sp.style.width=(m>0?scrollY/m*100:0)+'%';if(!RM&&art&&scrollY<innerHeight)art.style.translate='0 '+(scrollY*.18)+'px'})},{passive:true});
/* qalereya siralama gecikmesi */
new MutationObserver(function(ms){ms.forEach(function(m){[].forEach.call(m.addedNodes,function(n){if(n.dataset&&n.dataset.m)[].forEach.call(n.children,function(c,i){c.style.setProperty('--i',i%14)})})})}).observe($('lbg'),{childList:true});
})();
