$gwx_XC_101=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_101 || [];
function gz$gwx_XC_101_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_101_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_101_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_101_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'appeal-list-warp '])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
Z([3,'未查询到申请数据'])
Z([3,'100'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_101_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_101_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_101=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_101=true;
var x=['./pages/noTestAppeal/home.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_101_1()
var cZAB=_n('section')
_rz(z,cZAB,'class',0,e,s,gg)
var h1AB=_v()
_(cZAB,h1AB)
if(_oz(z,1,e,s,gg)){h1AB.wxVkey=1
}
else{h1AB.wxVkey=2
var o2AB=_mz(z,'van-empty',['description',2,'imageSize',1],[],e,s,gg)
_(h1AB,o2AB)
}
h1AB.wxXCkey=1
h1AB.wxXCkey=3
_(r,cZAB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_101";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_101();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/noTestAppeal/home.wxml'] = [$gwx_XC_101, './pages/noTestAppeal/home.wxml'];else __wxAppCode__['pages/noTestAppeal/home.wxml'] = $gwx_XC_101( './pages/noTestAppeal/home.wxml' );
	;__wxRoute = "pages/noTestAppeal/home";__wxRouteBegin = true;__wxAppCurrentFile__="pages/noTestAppeal/home.js";define("pages/noTestAppeal/home.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../CDE443310A0D562FAB822B3611B0EFA3.js");Page({data:{list:[],projectActive:"阳光跑",token:"",ButtonList:[{text:"新增申请",type:2}],userInfo:{},SetValue:{0:"未处理",1:"通过",3:"驳回",4:"撤销"}},addClick:function(){wx.navigateTo({url:"./index"})},projectActiveClick:function(t){console.log(t.detail.name),this.setData({projectActive:t.detail.name}),this.getAppealListFn()},JumpDetails:function(t){console.log(t);var e=t.currentTarget.dataset.id,n=t.currentTarget.dataset.projectname;console.log(e,n),wx.navigateTo({url:"./index?id=".concat(e,"&projectName=").concat(n)})},getAppealListFn:function(){var e=this;t.request({url:"/wxxcx/platform/h5/getProjectFreeAndDelayList",data:{projectName:this.data.projectActive,stuNumber:this.data.userInfo.snCode,token:wx.getStorageSync("token"),snCode:this.data.userInfo.snCode,pageNumber:1,rowNumber:1e5},success:function(t){e.setData({list:t.data})}})},onLoad:function(t){this.setData({userInfo:wx.getStorageSync("userInfo")})},onReady:function(){},onShow:function(){this.getAppealListFn()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}});
},{isPage:true,isComponent:true,currentFile:'pages/noTestAppeal/home.js'});require("pages/noTestAppeal/home.js");