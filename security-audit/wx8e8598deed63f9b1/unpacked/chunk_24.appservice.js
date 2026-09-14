$gwx_XC_25=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_25 || [];
function gz$gwx_XC_25_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_25_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'van-notify'])
Z([a,[3,'background-color:'],[[7],[3,'backgroundColor']],[3,'; color: '],[[7],[3,'color']],[3,'; z-index: '],[[7],[3,'zIndex']],[3,';']])
Z([3,'slide-down'])
Z([[7],[3,'show']])
Z([[7],[3,'safeAreaInsetTop']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_25_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_25_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_25=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_25=true;
var x=['./miniprogram/miniprogram_npm/vant-weapp/notify/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_25_1()
var xOJ=_mz(z,'van-transition',['customClass',0,'customStyle',1,'name',1,'show',2],[],e,s,gg)
var oPJ=_v()
_(xOJ,oPJ)
if(_oz(z,4,e,s,gg)){oPJ.wxVkey=1
}
oPJ.wxXCkey=1
_(r,xOJ)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_25";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_25();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram/miniprogram_npm/vant-weapp/notify/index.wxml'] = [$gwx_XC_25, './miniprogram/miniprogram_npm/vant-weapp/notify/index.wxml'];else __wxAppCode__['miniprogram/miniprogram_npm/vant-weapp/notify/index.wxml'] = $gwx_XC_25( './miniprogram/miniprogram_npm/vant-weapp/notify/index.wxml' );
	;__wxRoute = "miniprogram/miniprogram_npm/vant-weapp/notify/index";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram/miniprogram_npm/vant-weapp/notify/index.js";define("miniprogram/miniprogram_npm/vant-weapp/notify/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../common/component"),t=require("../common/color"),i=require("../mixins/safe-area");(0,e.VantComponent)({mixins:[(0,i.safeArea)()],props:{text:String,color:{type:String,value:"#fff"},backgroundColor:{type:String,value:t.RED},duration:{type:Number,value:3e3},zIndex:{type:Number,value:110}},methods:{show:function(){var e=this,t=this.data.duration;clearTimeout(this.timer),this.set({show:!0}),t>0&&t!==1/0&&(this.timer=setTimeout((function(){e.hide()}),t))},hide:function(){clearTimeout(this.timer),this.set({show:!1})}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram/miniprogram_npm/vant-weapp/notify/index.js'});require("miniprogram/miniprogram_npm/vant-weapp/notify/index.js");