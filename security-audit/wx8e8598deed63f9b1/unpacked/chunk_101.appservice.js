$gwx_XC_4=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_4 || [];
function gz$gwx_XC_4_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_4=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_4=true;
var x=['./pages/setting/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_4_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_4";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_4();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/setting/index.wxml'] = [$gwx_XC_4, './pages/setting/index.wxml'];else __wxAppCode__['pages/setting/index.wxml'] = $gwx_XC_4( './pages/setting/index.wxml' );
	;__wxRoute = "pages/setting/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/setting/index.js";define("pages/setting/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../CDE443310A0D562FAB822B3611B0EFA3.js");Page({data:{keepScreenOn:!1,vibrate:!1},onLoad:function(e){wx.setNavigationBarTitle({title:"设置"}),wx.setNavigationBarColor({frontColor:"#000000",backgroundColor:"#ffffff"}),this.setData({vibrate:wx.getStorageSync("vibrate")||!1,keepScreenOn:wx.getStorageSync("keepScreenOn")||!1})},onUnload:function(){wx.setStorageSync("vibrate",this.data.vibrate),wx.setStorageSync("keepScreenOn",this.data.keepScreenOn)},keepScreenOnSwitch:function(e){this.triggerVibrate();var t=e.detail.value;this.setData({keepScreenOn:t}),wx.setKeepScreenOn({keepScreenOn:t,success:function(){console.log("屏幕常亮:",t)}}),wx.setStorageSync("keepScreenOn",t)},vibrateSwitch:function(e){var t=e.detail.value;this.setData({vibrate:t}),t&&wx.vibrateShort({type:"light"}),wx.setStorageSync("vibrate",t)},settingMenu:function(){this.triggerVibrate(),wx.openSetting({})},settingheightweight:function(){this.triggerVibrate(),wx.navigateTo({url:"../login/setting"})},clearStorage:function(){var e=this;this.triggerVibrate(),wx.showModal({title:"危险操作",content:"确定要清空所有本地数据吗？这也将清除未同步的跑步记录且无法撤回。",confirmColor:"#ff3b30",success:function(t){t.confirm&&wx.clearStorage({complete:function(){wx.showToast({title:"已重置",icon:"success"}),e.setData({keepScreenOn:!1,vibrate:!1})}})}})},outLogin:function(){this.triggerVibrate(),wx.showModal({title:"退出登录",content:"确定要退出当前账号吗？",confirmColor:"#ff3b30",success:function(t){t.confirm&&e.getData({url:"/wxxcx/platform/serverlist/unBindInfo",success:function(e){e&&0==+e.code?(wx.removeStorageSync("token"),wx.removeStorageSync("userInfo"),wx.reLaunch({url:"../login/index"})):(wx.removeStorageSync("token"),wx.reLaunch({url:"../login/index"}))},fail:function(){wx.removeStorageSync("token"),wx.reLaunch({url:"../login/index"})}})}})},triggerVibrate:function(){this.data.vibrate&&wx.vibrateShort({type:"light"})}});
},{isPage:true,isComponent:true,currentFile:'pages/setting/index.js'});require("pages/setting/index.js");