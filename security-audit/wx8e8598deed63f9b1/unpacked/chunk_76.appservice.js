$gwx_XC_82=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_82 || [];
function gz$gwx_XC_82_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_82_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_82_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_82_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'locationStatus']],[3,'lastCheck']])
Z([3,'sheet-content'])
Z([[2,'=='],[[7],[3,'isActive']],[1,1]])
Z([[2,'=='],[[7],[3,'isActive']],[1,2]])
Z([[2,'=='],[[7],[3,'isActive']],[1,5]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_82_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_82_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_82=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_82=true;
var x=['./pages/FAQ/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_82_1()
var cJY=_v()
_(r,cJY)
if(_oz(z,0,e,s,gg)){cJY.wxVkey=1
}
var hKY=_mz(z,'scroll-view',['scrollY',-1,'class',1],[],e,s,gg)
var oLY=_v()
_(hKY,oLY)
if(_oz(z,2,e,s,gg)){oLY.wxVkey=1
}
var cMY=_v()
_(hKY,cMY)
if(_oz(z,3,e,s,gg)){cMY.wxVkey=1
}
var oNY=_v()
_(hKY,oNY)
if(_oz(z,4,e,s,gg)){oNY.wxVkey=1
}
oLY.wxXCkey=1
cMY.wxXCkey=1
oNY.wxXCkey=1
_(r,hKY)
cJY.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_82";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_82();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/FAQ/index.wxml'] = [$gwx_XC_82, './pages/FAQ/index.wxml'];else __wxAppCode__['pages/FAQ/index.wxml'] = $gwx_XC_82( './pages/FAQ/index.wxml' );
	;__wxRoute = "pages/FAQ/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/FAQ/index.js";define("pages/FAQ/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../@babel/runtime/helpers/Arrayincludes");var t=require("../../@babel/runtime/helpers/slicedToArray");Page({data:{show:!1,isActive:1,locationStatus:{auth:"unknown",systemGPS:"unknown",lastCheck:""},isChecking:!1},onLoad:function(t){wx.setNavigationBarTitle({title:"常见问题"}),wx.setNavigationBarColor({frontColor:"#000000",backgroundColor:"#ffffff"}),this.checkLocationStatus(!1)},checkLocationStatus:function(){var n=this,o=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.setData({isChecking:!0}),Promise.all([this.getBackgroundAuthSetting(),this.getSystemGPSStatus()]).then((function(s){var e=t(s,2),i=e[0]?"authorized":"denied",a=e[1]?"on":"off";n.setData({locationStatus:{auth:i,systemGPS:a,lastCheck:n.formatTime(new Date)},isChecking:!1}),o&&wx.showToast({title:"状态已刷新",icon:"success",duration:1500})})).catch((function(t){console.error("状态检查失败",t),n.setData({isChecking:!1}),o&&wx.showToast({title:"状态获取失败",icon:"none"})}))},getBackgroundAuthSetting:function(){return new Promise((function(t){wx.getSetting({success:function(n){var o=n.authSetting["scope.userLocationBackground"];t(!!o)},fail:function(){return t(!1)}})}))},getSystemGPSStatus:function(){return new Promise((function(t){wx.getLocation({type:"gcj02",isHighAccuracy:!0,success:function(){return t(!0)},fail:function(n){var o=n.errMsg||"";o.includes("system")||o.includes("GPS")||o.includes("location")?t(!1):t(!0)}})}))},formatTime:function(t){var n=t.getHours().toString().padStart(2,"0"),o=t.getMinutes().toString().padStart(2,"0");return"".concat(n,":").concat(o)},startDiagnosis:function(){var t=this;this.setData({isChecking:!0});var n={authFront:!1,authBackground:!1,systemGPS:!1,locationSuccess:!1,suggestions:[]};wx.getSetting({success:function(o){n.authFront=!!o.authSetting["scope.userLocation"],n.authBackground=!!o.authSetting["scope.userLocationBackground"],n.authFront||n.suggestions.push("未授予微信定位权限（前台）"),n.authBackground||n.suggestions.push("未授予微信后台定位权限，跑步时息屏将无法记录轨迹"),wx.getLocation({type:"gcj02",isHighAccuracy:!0,success:function(){n.locationSuccess=!0,n.systemGPS=!0,t.finishDiagnosis(n)},fail:function(o){var s=o.errMsg||"";s.includes("system")||s.includes("GPS")?(n.systemGPS=!1,n.suggestions.push("手机系统GPS未开启，请在手机设置中打开位置服务")):s.includes("auth")||s.includes("permission")||n.suggestions.push("定位失败，请检查网络或移至开阔地带"),t.finishDiagnosis(n)}})},fail:function(){n.suggestions.push("无法获取权限状态，请手动检查"),t.finishDiagnosis(n)}})},finishDiagnosis:function(t){var n={auth:t.authBackground?"authorized":"denied",systemGPS:t.systemGPS?"on":"off",lastCheck:this.formatTime(new Date)};this.setData({locationStatus:n,isChecking:!1});var o="";t.authFront&&t.authBackground&&t.locationSuccess?o="✅ 定位功能完全正常，可以开始跑步！\n\n已开启后台定位，息屏后仍可记录轨迹。":(o="❌ 定位存在问题，跑步可能无法正常记录：\n",t.authFront||(o+="• 微信前台定位权限未授权\n"),t.authBackground||(o+="• 微信后台定位权限未授权（重要！）\n"),t.systemGPS||(o+="• 系统GPS未开启\n"),t.authFront&&t.authBackground&&!t.locationSuccess&&(o+="• 无法获取当前位置，可能信号弱\n"),o+="\n请根据上方提示进行修复。"),wx.showModal({title:"诊断结果",content:o,showCancel:!0,cancelText:"关闭",confirmText:t.authFront&&t.authBackground?"去设置":"去授权",success:function(n){n.confirm&&(t.authFront&&t.authBackground?wx.showModal({title:"提示",content:"请在手机系统设置中开启GPS定位服务，然后返回重试。",showCancel:!1}):wx.openSetting())}})},openSetting:function(){var t=this;wx.openSetting({success:function(){setTimeout((function(){return t.checkLocationStatus(!1)}),500)}})},showPopup:function(t){var n=t.currentTarget.dataset.id;this.setData({isActive:n,show:!0}),this.triggerVibrate()},onClose:function(){this.setData({show:!1})},showImg1:function(){wx.previewImage({urls:["https://cppu.xtotoro.com/longmao/sunrunwx/FAQ/img1.png","https://cppu.xtotoro.com/longmao/sunrunwx/FAQ/图片2.png"]})},showImg3:function(){wx.previewImage({urls:["https://cppu.xtotoro.com/longmao/sunrunwx/FAQ/图片3.png"]})},showImg4:function(){wx.previewImage({urls:["https://cppu.xtotoro.com/longmao/sunrunwx/FAQ/图片4.png","https://cppu.xtotoro.com/longmao/sunrunwx/FAQ/图片5.png"]})},triggerVibrate:function(){!1!==wx.getStorageSync("vibrate")&&wx.vibrateShort({type:"light"})}});
},{isPage:true,isComponent:true,currentFile:'pages/FAQ/index.js'});require("pages/FAQ/index.js");