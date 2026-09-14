$gwx_XC_99=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_99 || [];
function gz$gwx_XC_99_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_99_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_99_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_99_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'glass-card menu-group fade-in delay-1'])
Z([[2,'&&'],[[6],[[7],[3,'userInfo']],[3,'teacherType']],[[2,'=='],[[6],[[7],[3,'userInfo']],[3,'teacherType']],[1,'1']]])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'userInfo']],[3,'schoolCode']],[1,'111051']],[[2,'=='],[[6],[[7],[3,'userInfo']],[3,'schoolCode']],[1,'13905']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_99_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_99_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_99=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_99=true;
var x=['./pages/me/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_99_1()
var oNAB=_n('view')
_rz(z,oNAB,'class',0,e,s,gg)
var cOAB=_v()
_(oNAB,cOAB)
if(_oz(z,1,e,s,gg)){cOAB.wxVkey=1
}
var oPAB=_v()
_(oNAB,oPAB)
if(_oz(z,2,e,s,gg)){oPAB.wxVkey=1
}
cOAB.wxXCkey=1
oPAB.wxXCkey=1
_(r,oNAB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_99";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_99();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/me/index.wxml'] = [$gwx_XC_99, './pages/me/index.wxml'];else __wxAppCode__['pages/me/index.wxml'] = $gwx_XC_99( './pages/me/index.wxml' );
	;__wxRoute = "pages/me/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/me/index.js";define("pages/me/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";getApp();Page({data:{userInfo:{studentName:"lebu",schoolName:"",schoolCampusName:""}},onLoad:function(e){wx.setNavigationBarTitle({title:"我的"}),wx.setNavigationBarColor({frontColor:"#000000",backgroundColor:"#ffffff"}),this.checkLogin()},onShow:function(){this.checkLogin()},requestSubscribeMsg:function(){wx.requestSubscribeMessage({tmplIds:["a_vOZqPzASOa69ydQUqDeHL7vLkedQuEXjAo46CbHSg"],success:function(e){var t="a_vOZqPzASOa69ydQUqDeHL7vLkedQuEXjAo46CbHSg";"accept"===e[t]?wx.showToast({title:"已订阅打卡提醒",icon:"success"}):"reject"===e[t]||"ban"===e[t]&&wx.showToast({title:"暂无法订阅提醒",icon:"none"})},fail:function(e){console.error("订阅授权失败：",e),wx.showToast({title:"订阅失败，请重试",icon:"none"})}})},checkLogin:function(){if(-1!=wx.getStorageInfoSync().keys.indexOf("userInfo")){var e=wx.getStorageSync("userInfo");this.setData({userInfo:e})}},getUserInfo:function(){var e=this;wx.getUserProfile({desc:"用于完善会员资料"}).then((function(t){console.log("* 用户同意授权UserInfo",t),e.setData({userInfo:t.userInfo}),wx.setStorageSync("userInfo",t.userInfo)})).catch((function(e){console.warn("* 用户拒绝或取消授权",e)}))},click:function(e){this.vibrateFunc(1);var t=e.currentTarget.dataset.url;t&&wx.navigateTo({url:t,fail:function(e){console.error("跳转失败，可能是tabbar页面请改用switchTab",e),wx.switchTab({url:t}).catch((function(){}))}})},vibrateFunc:function(e){var t=wx.getStorageSync("vibrate");""!==t&&!0!==t||(1==e?wx.vibrateShort({type:"light"}):2==e&&wx.vibrateLong())},outLogin:function(){wx.removeStorageSync("token"),wx.removeStorageSync("userInfo"),this.setData({userInfo:{studentName:"lebu"}}),wx.showToast({title:"已退出登录",icon:"none"})}});
},{isPage:true,isComponent:true,currentFile:'pages/me/index.js'});require("pages/me/index.js");