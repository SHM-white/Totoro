$gwx_XC_94=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_94 || [];
function gz$gwx_XC_94_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_94_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_94_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_94_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'main-container'])
Z([3,'header-section fade-in'])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'userInfo']],[3,'schoolCode']],[1,'10289']],[[2,'=='],[[6],[[7],[3,'userInfo']],[3,'schoolCode']],[1,'111051']]])
Z([[2,'=='],[[6],[[7],[3,'frontPageData']],[3,'sunRunFreeType']],[1,1]])
Z([[7],[3,'noticeContent']])
Z([3,'noticeModal'])
Z([[7],[3,'noticeTitle']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_94_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_94_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_94=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_94=true;
var x=['./pages/index/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_94_1()
var aVZ=_n('view')
_rz(z,aVZ,'class',0,e,s,gg)
var tWZ=_n('view')
_rz(z,tWZ,'class',1,e,s,gg)
var eXZ=_v()
_(tWZ,eXZ)
if(_oz(z,2,e,s,gg)){eXZ.wxVkey=1
}
var bYZ=_v()
_(tWZ,bYZ)
if(_oz(z,3,e,s,gg)){bYZ.wxVkey=1
}
eXZ.wxXCkey=1
bYZ.wxXCkey=1
_(aVZ,tWZ)
var oZZ=_mz(z,'bubble-modal',['content',4,'id',1,'title',2],[],e,s,gg)
_(aVZ,oZZ)
_(r,aVZ)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_94";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_94();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/index/index.wxml'] = [$gwx_XC_94, './pages/index/index.wxml'];else __wxAppCode__['pages/index/index.wxml'] = $gwx_XC_94( './pages/index/index.wxml' );
	;__wxRoute = "pages/index/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/index/index.js";define("pages/index/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../../@babel/runtime/helpers/regeneratorRuntime"),e=require("../../@babel/runtime/helpers/asyncToGenerator");require("../../@babel/runtime/helpers/Arrayincludes");var n=require("../../CDE443310A0D562FAB822B3611B0EFA3.js"),o=require("../../CDE443310A0D562FAB822B3611B0EFA3.js");getApp();Page({data:{userInfo:{},frontPageData:{todayTotalKm:"0.00",todayCalorie:"0",sunRunFreeType:0,sunRunInfoVo:{totalMileage:"0.00",usedTime:"00:00:00",avgPace:"0'00\"",calorie:"0"},freeRunInfoVo:{totalMileage:"0.00"},mornSignData:{}},noticeTitle:"系统通知",noticeContent:"",noteList:[]},onLoad:function(){wx.setNavigationBarTitle({title:"首页"}),wx.setNavigationBarColor({frontColor:"#000000",backgroundColor:"#ffffff"}),this.selectSunRunNote(),this.checkDeviceSettings()},onShow:function(){this.againsaveScores(),this.initData(),wx.getStorageInfoSync().keys.length<2&&wx.navigateTo({url:"../login/index"})},checkDeviceSettings:function(){if(!wx.getStorageSync("hasShownDeviceAlert_v1")){var t=wx.getSystemInfoSync(),e=t.brand?t.brand.toLowerCase():"",n=t.platform?t.platform.toLowerCase():"";console.log(t);var o=!1,i="",a="";if(["huawei","xiaomi","oppo","vivo","honor","redmi"].includes(e))i="手机跑步特别提醒",a='为防止阳光跑轨迹中断：\n1. 请确保手机未开启【省电模式】\n2. 请在系统"应用启动管理"中允许微信【后台活动/自启动】。',o=!0;else if("ios"===n)try{var r=wx.getBatteryInfoSync();r.level<=20&&!r.isCharging&&(i="手机电量提醒",a="检测到您当前电量较低。如果您开启了【低电量模式】，系统会严格限制后台定位导致轨迹中断。建议关闭低电量模式后再跑步。",o=!0)}catch(t){}o&&wx.showModal({title:i,content:a,showCancel:!1,confirmText:"我知道了",confirmColor:"#1aad19",success:function(t){t.confirm&&wx.setStorageSync("hasShownDeviceAlert_v1",!0)}})}},selectSunRunNote:function(){var t=this;o.request({url:"/wxxcx/platform/note/selectSunRunNote",data:{},success:function(e){if(console.log("后端通知数据:",e.body),e&&e.body){var n=Array.isArray(e.body)?e.body:[e.body];t.setData({noteList:n})}},doFail:function(t){}})},initData:function(){var t=this,e=wx.getStorageSync("userInfo"),o=wx.getStorageSync("token");e&&o&&(this.setData({userInfo:e}),n.request({url:"/wxxcx/platform/serverlist/getAppFrontPage",data:{snCode:e.snCode,token:o,stuNumber:e.snCode},success:function(e){console.log("首页数据:",e),e&&t.setData({frontPageData:e})}}),n.request({url:"/wxxcx/platform/mornSign/getMornSignPaper",data:{snCode:e.snCode,token:o,stuNumber:e.snCode},success:function(e){console.log("首页数据111:",e),e&&t.setData({mornSignData:e})}}))},showNoticeDetail2:function(){this.vibrateFunc(1);this.setData({noticeTitle:"阳光跑系统升级提示",noticeContent:'\n     <div style="font-size: 15px; color: #333;">\n       <p style="margin-bottom: 10px; text-indent: 2em;">阳光跑系统升级3.0。</p>\n       <p style="margin-bottom: 10px; text-indent: 2em;">本次升级添加了手机打卡功能，每300米至500米随机出现手机打卡，自拍提交完成打卡。</p>\n       <p style="margin-bottom: 10px; text-indent: 2em;">隐藏跑步中过点信息，跑步过程中抬头跑步。</p>\n       <p style="text-align: right; margin-top: 20px; color: #888; font-size: 13px;">技术支持中心</p>\n     </div>\n   '});var t=this.selectComponent("#noticeModal");t&&t.show()},showNoticeDetail10289:function(){this.vibrateFunc(1);this.setData({noticeTitle:"江苏科技大学室外运动场地运动风险告知书",noticeContent:'\n    <div style="font-size: 14px; color: #333; max-height: 60vh; overflow-y: auto; padding-right: 10px;">\n      <p style="margin-bottom: 10px; text-indent: 2em;">请您在使用室外运动场地前，仔细阅读本告知书，并确保理解和接受以下内容。若您继续使用运动场地，即表示您已经充分理解并同意本告知书的所有条款。</p>\n      \n      <p style="margin-bottom: 8px; color: #1aad19;"><strong>★ 个人健康与安全风险</strong></p>\n      <p style="margin-bottom: 8px; text-indent: 2em;">在进行体育运动前，应自行根据自身的身体健康和体能状况进行评估，并选择与身体状况相适应的运动项目。<span style=" font-weight: bold; text-decoration: underline;">如有心脏病、高血压、哮喘等慢性疾病者，在使用室外运动场地前应咨询医生，并获得医生的健康建议。</span></p>\n      <p style="margin-bottom: 15px; text-indent: 2em;"><span style=" font-weight: bold; text-decoration: underline;">近期身体有不适的（如咳嗽、发热、乏力等症状），请暂勿进入运动场地。</span></p>\n      \n      <p style="margin-bottom: 8px; color: #1aad19;"><strong>★ 运动前准备</strong></p>\n      <p style="margin-bottom: 8px; text-indent: 2em;">在运动前应做好充分的热身活动，如：关节活动、肌肉拉伸等，以提高身体柔韧性和减少受伤风险。</p>\n      <p style="margin-bottom: 8px; text-indent: 2em;">穿着合适的运动装备和鞋子，避免穿戴过于宽松或紧绷；禁止佩戴尖锐、坚硬配饰，杜绝运动中的安全隐患。</p>\n      <p style="margin-bottom: 15px; text-indent: 2em;">根据运动项目的需要，提前做好相应的保护措施，如：佩戴相应的护具，检查运动器具等。</p>\n      \n      <p style="margin-bottom: 8px; color: #1aad19;"><strong>★ 运动期间风险提示 </strong></p>\n      <p style="margin-bottom: 8px; text-indent: 2em;">在进行体育运动时，应充分注意自身的身体状况及承受能力，避免对身体造成不必要的负担或伤害。</p>\n      <p style="margin-bottom: 15px; text-indent: 2em;">\n      <span style="font-weight: bold; text-decoration: underline;">\n      若在体育运动过程中出现头晕、胸痛等症状，应立刻终止体育运动，其本人或在场师生\n      <span style="color: red;">立即拨打120</span>\n      急救电话或校医院电话求助。</span>\n      </p>\n\n      <p style="text-align: right; margin-top: 20px;margin-bottom:100px; font-weight: bold; font-size: 14px;">江苏科技大学体育运动委员会<br>2026年3月11日</p>\n    </div>\n  '});var t=this.selectComponent("#noticeModal");t&&t.show()},showNoticeDetail:function(){this.vibrateFunc(1);this.setData({noticeTitle:"⚠️ 升级风险提示",noticeContent:'\n      <div style="font-size: 15px; color: #333;">\n        <p style="margin-bottom: 10px;"><strong>亲爱的同学：</strong></p>\n        <p style="margin-bottom: 10px; text-indent: 2em;">近期收到反馈，部分升级到 <strong>鸿蒙6.0（HarmonyOS NEXT）</strong> 系统的设备在运行微信小程序时，存在获取定位失败的问题。</p>\n        <p style="margin-bottom: 10px; text-indent: 2em; color: #ff3b30;">为了不影响您的正常阳光跑和早操打卡成绩，<strong>请暂时不要升级系统</strong>。</p>\n        <p style="margin-bottom: 10px; text-indent: 2em;">我们正在与微信官方及相关厂商紧急排查修复中，修复完成后将第一时间在此发布通知。</p>\n        <p style="text-align: right; margin-top: 20px; color: #888; font-size: 13px;">技术支持中心</p>\n      </div>\n    '});var t=this.selectComponent("#noticeModal");t&&t.show()},showDynamicNotice:function(t){this.vibrateFunc(1);var e=t.currentTarget.dataset.index,n=this.data.noteList[e];if(n){var o=n.content||"暂无内容";o=o.split("\n").map((function(t){return'<p style="margin-bottom: 10px; text-indent: 2em; line-height: 1.6;">'.concat(t,"</p>")})).join("");var i='\n      <div style="font-size: 14px; color: #333; max-height: 60vh; overflow-y: auto; padding-right: 10px;">\n        '.concat(o,"\n      </div>\n    ");this.setData({noticeTitle:n.title||"系统通知",noticeContent:i});var a=this.selectComponent("#noticeModal");a&&a.show()}},toRun:function(t){this.vibrateFunc(1);var e=t.currentTarget.dataset.value;console.log("跳转跑步类型:",e),wx.switchTab({url:"../run/index?runType=".concat(e)}).catch((function(t){console.warn("SwitchTab failed, trying navigateTo",t),wx.navigateTo({url:"../run/index?runType=".concat(e)})}))},toMorningSign:function(){this.vibrateFunc(1),wx.switchTab({url:"../morningSign/index"}).catch((function(t){console.warn("SwitchTab failed, trying navigateTo",t),wx.navigateTo({url:"../morningSign/index"})}))},toHistory:function(){this.vibrateFunc(1),wx.navigateTo({url:"../history/index"})},vibrateFunc:function(t){!1!==wx.getStorageSync("vibrate")&&(1==t?wx.vibrateShort({type:"light"}):2==t&&wx.vibrateLong())},againsaveScores:function(){wx.getStorageInfoSync()},saveScores:function(n){var i=this;return e(t().mark((function e(){var a,r,s;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i,a=0,2==n.runType&&(a=1),r=wx.getStorageSync("userInfo"),s={scantronId:n.scantronId,stuNumber:r.snCode,schoolCode:r.schoolCode,runType:a,km:n.allKm,usedTime:n.time_data,fitDegree:n.fitDegree,avgSpeed:n.speed_data,steps:0,token:wx.getStorageSync("token"),version:n.version,phoneInfo:n.brand+"&"+n.model+"&"+n.system,evaluateDate:n.create_time_data.split("T")[0],endTime:n.end_time_data.split("T")[1],startTime:n.create_time_data.split("T")[1],taskId:n.taskId,flag:"1"},t.next=7,o.request({url:"/wxxcx/sunrun/sunRunExercises",data:s,success:function(t){t&&"00"==t.status&&(n.isCloud=!0,wx.setStorageSync("RunInfo-"+n.id,JSON.stringify(n)))},doFail:function(t){}});case 7:if(n.scantronId&&""!=n.scantronId){t.next=9;break}return t.abrupt("return");case 9:return t.next=11,o.request({url:"/wxxcx/platform/recrecord/sunRunExercisesDetail",data:{pointList:n.points_data,scantronId:n.scantronId,token:wx.getStorageSync("token")},success:function(t){},doFail:function(t){}});case 11:case"end":return t.stop()}}),e)})))()}});
},{isPage:true,isComponent:true,currentFile:'pages/index/index.js'});require("pages/index/index.js");