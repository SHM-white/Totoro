$gwx_XC_86=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_86 || [];
function gz$gwx_XC_86_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_86_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_86_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_86_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([a,[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'badge']],[[8],'active',[[7],[3,'active']]]]],[3,' van-hairline custom-class']])
Z([3,'van-badge--hover'])
Z([3,'70'])
Z([[2,'!=='],[[7],[3,'info']],[1,null]])
Z([3,'right: 4px'])
Z([[7],[3,'info']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_86_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_86_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_86=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_86=true;
var x=['./miniprogram/miniprogram_npm/vant-weapp/badge/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_86_1()
var oVY=_mz(z,'view',['bind:tap',0,'class',1,'hoverClass',1,'hoverStayTime',2],[],e,s,gg)
var fWY=_v()
_(oVY,fWY)
if(_oz(z,4,e,s,gg)){fWY.wxVkey=1
var cXY=_mz(z,'van-info',['customStyle',5,'info',1],[],e,s,gg)
_(fWY,cXY)
}
fWY.wxXCkey=1
fWY.wxXCkey=3
_(r,oVY)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_86";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_86();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram/miniprogram_npm/vant-weapp/badge/index.wxml'] = [$gwx_XC_86, './miniprogram/miniprogram_npm/vant-weapp/badge/index.wxml'];else __wxAppCode__['miniprogram/miniprogram_npm/vant-weapp/badge/index.wxml'] = $gwx_XC_86( './miniprogram/miniprogram_npm/vant-weapp/badge/index.wxml' );
	;__wxRoute = "miniprogram/miniprogram_npm/vant-weapp/badge/index";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram/miniprogram_npm/vant-weapp/badge/index.js";define("miniprogram/miniprogram_npm/vant-weapp/badge/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(0,require("../common/component").VantComponent)({relation:{type:"ancestor",name:"badge-group",linked:function(t){this.parent=t}},props:{info:null,title:String},methods:{onClick:function(){var t=this,e=this.parent;if(e){var n=e.badges.indexOf(this);e.setActive(n).then((function(){t.$emit("click",n),e.$emit("change",n)}))}},setActive:function(t){return this.set({active:t})}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram/miniprogram_npm/vant-weapp/badge/index.js'});require("miniprogram/miniprogram_npm/vant-weapp/badge/index.js");