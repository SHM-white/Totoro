$gwx_XC_1=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_1 || [];
function gz$gwx_XC_1_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'closeModal'])
Z([a,[3,'modal-mask '],[[2,'?:'],[[7],[3,'visible']],[1,'show'],[1,'']]])
Z([3,'preventScroll'])
Z([a,[3,'modal-content '],[[2,'?:'],[[7],[3,'visible']],[1,'bubble-in'],[1,'']]])
Z([3,'modal-header'])
Z([3,'modal-title'])
Z([a,[[7],[3,'title']]])
Z(z[0])
Z([3,'modal-close'])
Z([3,'close-icon'])
Z([3,'https://img.icons8.com/ios/50/8e8e93/multiply.png'])
Z([3,'modal-body'])
Z([[7],[3,'content']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_1=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_1=true;
var x=['./components/bubble-modal/bubble-modal.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_1_1()
var cGC=_mz(z,'view',['bindtap',0,'class',1],[],e,s,gg)
var oHC=_mz(z,'view',['catchtap',2,'class',1],[],e,s,gg)
var lIC=_n('view')
_rz(z,lIC,'class',4,e,s,gg)
var aJC=_n('text')
_rz(z,aJC,'class',5,e,s,gg)
var tKC=_oz(z,6,e,s,gg)
_(aJC,tKC)
_(lIC,aJC)
var eLC=_mz(z,'view',['bindtap',7,'class',1],[],e,s,gg)
var bMC=_mz(z,'image',['class',9,'src',1],[],e,s,gg)
_(eLC,bMC)
_(lIC,eLC)
_(oHC,lIC)
var oNC=_mz(z,'scroll-view',['scrollY',-1,'class',11],[],e,s,gg)
var xOC=_n('rich-text')
_rz(z,xOC,'nodes',12,e,s,gg)
_(oNC,xOC)
_(oHC,oNC)
_(cGC,oHC)
_(r,cGC)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_1";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(outerGlobal.__webview_engine_version__)!='undefined'&&outerGlobal.__webview_engine_version__+1e-6>=0.02+1e-6&&outerGlobal.__mergeData__)
{
env=outerGlobal.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(outerGlobal.__webview_engine_version__)=='undefined'|| outerGlobal.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_1();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/bubble-modal/bubble-modal.wxml'] = [$gwx_XC_1, './components/bubble-modal/bubble-modal.wxml'];else __wxAppCode__['components/bubble-modal/bubble-modal.wxml'] = $gwx_XC_1( './components/bubble-modal/bubble-modal.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/bubble-modal/bubble-modal.wxss']=setCssToHead([".",[1],"modal-mask{-webkit-align-items:center;align-items:center;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);background:rgba(0,0,0,.4);bottom:0;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;left:0;opacity:0;position:fixed;right:0;top:0;transition:opacity .3s ease;visibility:hidden;z-index:9999}\n.",[1],"modal-mask.",[1],"show{opacity:1;visibility:visible}\n.",[1],"modal-content{background:hsla(0,0%,100%,.95);border-radius:",[0,32],";box-shadow:0 ",[0,16]," ",[0,48]," rgba(0,0,0,.15);display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;max-height:70vh;opacity:0;padding:",[0,40],";-webkit-transform:scale(.3);transform:scale(.3);width:80%}\n.",[1],"bubble-in{-webkit-animation:bubbleScale .4s cubic-bezier(.175,.885,.32,1.275) forwards;animation:bubbleScale .4s cubic-bezier(.175,.885,.32,1.275) forwards}\n@-webkit-keyframes bubbleScale{0%{opacity:0;-webkit-transform:scale(.3);transform:scale(.3)}\n100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}\n}@keyframes bubbleScale{0%{opacity:0;-webkit-transform:scale(.3);transform:scale(.3)}\n100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}\n}.",[1],"modal-header{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:",[0,30],"}\n.",[1],"modal-title{color:#1c1c1e;font-size:",[0,34],";font-weight:700}\n.",[1],"modal-close{padding:",[0,10],"}\n.",[1],"close-icon{height:",[0,36],";width:",[0,36],"}\n.",[1],"modal-body{color:#3a3a3c;font-size:",[0,28],";line-height:1.6;max-height:50vh}\n",],undefined,{path:"./components/bubble-modal/bubble-modal.wxss"});
}