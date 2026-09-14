$gwx_XC_89=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_89 || [];
function gz$gwx_XC_89_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_89_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_89_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_89_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_89_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_89_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_89=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_89=true;
var x=['./pages/bmi/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_89_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_89";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_89();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/bmi/index.wxml'] = [$gwx_XC_89, './pages/bmi/index.wxml'];else __wxAppCode__['pages/bmi/index.wxml'] = $gwx_XC_89( './pages/bmi/index.wxml' );
	;__wxRoute = "pages/bmi/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/bmi/index.js";define("pages/bmi/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Page({data:{bmi:"--",statusText:"未知",statusColor:"#8e8e93",statusBgColor:"rgba(142, 142, 147, 0.1)",currentLevel:-1},onLoad:function(t){wx.setNavigationBarTitle({title:"BMI计算"}),wx.setNavigationBarColor({frontColor:"#000000",backgroundColor:"#ffffff"})},onShow:function(){this.calBMI()},calBMI:function(){var t=wx.getStorageSync("weight"),a=wx.getStorageSync("height");if(t&&a){var o=a/100,e=t/Math.pow(o,2),r=e.toFixed(1);this.analyzeBMI(e,r)}else wx.showModal({title:"提示",content:"请先在“我的-基础设置”中完善身高体重信息",confirmText:"去设置",success:function(t){t.confirm&&wx.navigateTo({url:"../setting/index"})}})},analyzeBMI:function(t,a){var o="",e="",r="",n=-1;t<18.5?(o="体重过轻",e="#007aff",n=0,r="rgba(0, 122, 255, 0.1)"):t>=18.5&&t<24?(o="正常范围",e="#34c759",n=1,r="rgba(52, 199, 89, 0.1)"):t>=24&&t<27?(o="体重过重",e="#d4a000",n=2,r="rgba(255, 204, 0, 0.15)"):t>=27&&t<30?(o="轻度肥胖",e="#ff9500",n=3,r="rgba(255, 149, 0, 0.1)"):t>=30&&t<35?(o="中度肥胖",e="#ff3b30",n=4,r="rgba(255, 59, 48, 0.1)"):(o="重度肥胖",e="#800000",n=5,r="rgba(128, 0, 0, 0.1)"),this.setData({bmi:a,statusText:o,statusColor:e,statusBgColor:r,currentLevel:n})}});
},{isPage:true,isComponent:true,currentFile:'pages/bmi/index.js'});require("pages/bmi/index.js");