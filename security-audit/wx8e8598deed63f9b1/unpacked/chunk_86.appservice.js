$gwx_XC_93=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_93 || [];
function gz$gwx_XC_93_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_93_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_93_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_93_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_93_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_93_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_93=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_93=true;
var x=['./pages/history/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_93_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_93";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_93();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/history/index.wxml'] = [$gwx_XC_93, './pages/history/index.wxml'];else __wxAppCode__['pages/history/index.wxml'] = $gwx_XC_93( './pages/history/index.wxml' );
	;__wxRoute = "pages/history/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/history/index.js";define("pages/history/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";require("../../@babel/runtime/helpers/Arrayincludes");var e=require("../../@babel/runtime/helpers/regeneratorRuntime"),t=require("../../@babel/runtime/helpers/asyncToGenerator"),r=require("../../CDE443310A0D562FAB822B3611B0EFA3.js");Page({data:{runinfo_data:[],userInfo:wx.getStorageSync("userInfo")},onLoad:function(){wx.setNavigationBarTitle({title:"本地记录"}),wx.setNavigationBarColor({frontColor:"#000000",backgroundColor:"#ffffff"})},onShow:function(){this.initData()},initData:function(){for(var e=wx.getStorageInfoSync().keys,t=[],r=0;r<e.length;r++){var n=e[r].split("-");"RunInfo"==n[0]&&t.push(n[1])}t=t.sort().reverse();for(var a=[],o=["日","一","二","三","四","五","六"],s=0;s<t.length;s++)try{var i=JSON.parse(wx.getStorageSync("RunInfo-"+t[s]));i.id=t[s];var u=new Date(1e3*parseInt(t[s])),c=u.getMonth()+1,d=u.getDate(),l=u.getHours()<10?"0"+u.getHours():u.getHours(),g=u.getMinutes()<10?"0"+u.getMinutes():u.getMinutes(),f=u.getDay();i.time_format=c+"月"+d+"日 "+l+":"+g+" 周"+o[f],i.allKm&&(i.allKm=parseFloat(i.allKm).toFixed(2)),void 0===i.isCloud&&(i.isCloud=!0),a.push(i)}catch(e){console.error("解析记录失败",e)}this.setData({runinfo_data:a})},toDetail:function(e){this.vibrateFunc(1);var t=e.currentTarget.dataset.id;t&&wx.navigateTo({url:"./detail?id="+t})},retryUpload:function(n){var a=this;return t(e().mark((function t(){var o,s,i,u,c,d;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.vibrateFunc(1),o=n.currentTarget.dataset.id,s=wx.getStorageSync("RunInfo-"+o)){e.next=5;break}return e.abrupt("return");case 5:return i=JSON.parse(s),u=a.data.userInfo,c=function(e,t){return e&&(e.includes("T")?e.split("T"):e.split(" "))[t]||""},wx.showLoading({title:"连接服务器...",mask:!0}),d={scantronId:i.scantronId||"",stuNumber:u.snCode||"",schoolCode:u.schoolCode||"",runType:2==i.runType?1:0,km:i.distance_data||"",usedTime:i.time_data||"",fitDegree:Number(i.fitDegree).toFixed(2)||"",avgSpeed:i.speed_data||"",steps:i.steps||"0",token:wx.getStorageSync("token")||"",version:i.version||"",phoneInfo:(i.brand||"")+"&"+(i.model||"")+"&"+(i.system||""),evaluateDate:c(i.create_time_data,0)||"",endTime:c(i.end_time_data,1)||"",startTime:c(i.create_time_data,1)||"",taskId:i.taskId||"",sunrunPathPointList:[],flag:"1"},e.prev=10,e.next=13,new Promise((function(e,t){r.request({url:"/wxxcx/sunrun/sunRunExercises",data:d,showLoading:!1,success:function(r){r&&"00"==r.status?e():t(new Error(r.msg||r.message||"服务器繁忙"))},doFail:function(){return t(new Error("网络环境异常，请检查网络"))}})}));case 13:return e.next=15,new Promise((function(e,t){r.request({url:"/wxxcx/platform/recrecord/sunRunExercisesDetail",data:{pointList:i.points_data||[],gyroscope:[],accelerometer:[],cheatCode:i.cheatCode||"正常跑步",scantronId:i.scantronId,token:wx.getStorageSync("token")},showLoading:!1,success:function(){return e()},doFail:function(){return e()}})}));case 15:wx.hideLoading(),a.vibrateFunc(1),wx.showToast({title:"上传成功",icon:"success"}),i.isCloud=!0,wx.setStorageSync("RunInfo-"+o,JSON.stringify(i)),a.initData(),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(10),wx.hideLoading(),wx.showModal({title:"上传失败",content:e.t0.message||"请确保连接至 5G/4G 网络后重试。",showCancel:!1});case 27:case"end":return e.stop()}}),t,null,[[10,23]])})))()},vibrateFunc:function(e){!1!==wx.getStorageSync("vibrate")&&(1==e&&wx.vibrateShort({type:"light"}),2==e&&wx.vibrateLong())}});
},{isPage:true,isComponent:true,currentFile:'pages/history/index.js'});require("pages/history/index.js");