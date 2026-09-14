$gwx_XC_102=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_102 || [];
function gz$gwx_XC_102_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_102_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_102_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_102_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'appeal'])
Z([3,'学校'])
Z([[7],[3,'schName']])
Z([3,'姓名'])
Z([[7],[3,'studentName']])
Z([3,'学号'])
Z([[7],[3,'snCode']])
Z([3,'学期'])
Z([[7],[3,'termName']])
Z([3,'校区'])
Z([[7],[3,'campusName']])
Z([1,true])
Z([3,'height: 40%;'])
Z([3,'bottom'])
Z([[7],[3,'setSystemDialog']])
Z([3,'1025'])
Z([3,'onCancelSetSystem'])
Z([3,'onConfirmSetSystem'])
Z([[7],[3,'systemporductList']])
Z([3,'选择申请类型'])
Z([3,'systemName'])
Z([3,'onCloseAppealDate'])
Z([3,'onConfirmAppealDate'])
Z([[7],[3,'maxData']])
Z([[7],[3,'minData']])
Z([[7],[3,'showAppealDate']])
Z(z[11])
Z(z[12])
Z(z[13])
Z([[7],[3,'setBeginTimeDialog']])
Z(z[15])
Z([3,'onCancelBeginTime'])
Z([3,'onConfirmBeginTime'])
Z([3,'time'])
Z([[7],[3,'beginTime']])
Z([3,'{ minHeight: 70, maxHeight: 140 }'])
Z([3,'申请说明'])
Z([[7],[3,'remark']])
Z([3,'请添加申请说明'])
Z([3,'申请材料'])
Z([3,'image'])
Z([3,'afterRead'])
Z([3,'delImg'])
Z(z[11])
Z([[7],[3,'fileList']])
Z([[2,'!=='],[[7],[3,'queryId']],[1,'']])
Z([3,'申请状态'])
Z([[7],[3,'applyStatus']])
Z([[2,'=='],[[7],[3,'applyStatus']],[1,'驳回']])
Z([3,'驳回原因'])
Z([[7],[3,'rejectName']])
Z([[2,'=='],[[7],[3,'queryId']],[1,'']])
Z([3,'twiceShowConfirm'])
Z([[7],[3,'twiceShow']])
Z([3,'请再次确认申请信息'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_102_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_102_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_102=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_102=true;
var x=['./pages/noTestAppeal/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_102_1()
var o4AB=_n('view')
_rz(z,o4AB,'class',0,e,s,gg)
var e8AB=_mz(z,'van-field',['readonly',-1,'label',1,'value',1],[],e,s,gg)
e8AB.rawAttr={"model:value":"{{schName}}",};_(o4AB,e8AB)
var b9AB=_mz(z,'van-field',['readonly',-1,'label',3,'value',1],[],e,s,gg)
b9AB.rawAttr={"model:value":"{{studentName}}",};_(o4AB,b9AB)
var o0AB=_mz(z,'van-field',['readonly',-1,'label',5,'value',1],[],e,s,gg)
o0AB.rawAttr={"model:value":"{{snCode}}",};_(o4AB,o0AB)
var xABB=_mz(z,'van-field',['readonly',-1,'label',7,'value',1],[],e,s,gg)
xABB.rawAttr={"model:value":"{{termName}}",};_(o4AB,xABB)
var oBBB=_mz(z,'van-field',['readonly',-1,'label',9,'value',1],[],e,s,gg)
oBBB.rawAttr={"model:value":"{{campusName}}",};_(o4AB,oBBB)
var fCBB=_mz(z,'van-popup',['round',-1,'closabled',11,'customStyle',1,'position',2,'show',3,'zIndex',4],[],e,s,gg)
var cDBB=_mz(z,'van-picker',['showToolbar',-1,'bind:cancel',16,'bind:confirm',1,'columns',2,'title',3,'valueKey',4],[],e,s,gg)
_(fCBB,cDBB)
_(o4AB,fCBB)
var hEBB=_mz(z,'van-calendar',['bind:close',21,'bind:confirm',1,'maxDate',2,'minDate',3,'show',4],[],e,s,gg)
_(o4AB,hEBB)
var oFBB=_mz(z,'van-popup',['round',-1,'closabled',26,'customStyle',1,'position',2,'show',3,'zIndex',4],[],e,s,gg)
var cGBB=_mz(z,'van-datetime-picker',['bind:cancel',31,'bind:confirm',1,'type',2,'value',3],[],e,s,gg)
_(oFBB,cGBB)
_(o4AB,oFBB)
var oHBB=_mz(z,'van-field',['autosize',35,'label',1,'value',2,'placeholder',3],[],e,s,gg)
oHBB.rawAttr={"model:value":"{{remark}}",};_(o4AB,oHBB)
var lIBB=_n('van-cell')
_rz(z,lIBB,'title',39,e,s,gg)
var aJBB=_mz(z,'van-uploader',['accept',40,'bind:after-read',1,'bind:delete',2,'deletable',3,'fileList',4],[],e,s,gg)
_(lIBB,aJBB)
_(o4AB,lIBB)
var l5AB=_v()
_(o4AB,l5AB)
if(_oz(z,45,e,s,gg)){l5AB.wxVkey=1
var tKBB=_mz(z,'van-field',['readonly',-1,'label',46,'value',1],[],e,s,gg)
tKBB.rawAttr={"model:value":"{{applyStatus}}",};_(l5AB,tKBB)
}
var a6AB=_v()
_(o4AB,a6AB)
if(_oz(z,48,e,s,gg)){a6AB.wxVkey=1
var eLBB=_mz(z,'van-field',['readonly',-1,'label',49,'value',1],[],e,s,gg)
eLBB.rawAttr={"model:value":"{{rejectName}}",};_(a6AB,eLBB)
}
var t7AB=_v()
_(o4AB,t7AB)
if(_oz(z,51,e,s,gg)){t7AB.wxVkey=1
}
var bMBB=_mz(z,'van-dialog',['showCancelButton',-1,'useSlot',-1,'bind:confirm',52,'show',1,'title',2],[],e,s,gg)
_(o4AB,bMBB)
l5AB.wxXCkey=1
l5AB.wxXCkey=3
a6AB.wxXCkey=1
a6AB.wxXCkey=3
t7AB.wxXCkey=1
_(r,o4AB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_102";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_102();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/noTestAppeal/index.wxml'] = [$gwx_XC_102, './pages/noTestAppeal/index.wxml'];else __wxAppCode__['pages/noTestAppeal/index.wxml'] = $gwx_XC_102( './pages/noTestAppeal/index.wxml' );
	;__wxRoute = "pages/noTestAppeal/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/noTestAppeal/index.js";define("pages/noTestAppeal/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e,t=require("../../@babel/runtime/helpers/objectSpread2");require("../../F78721300A0D562F91E1493714A0EFA3.js"),(e=require("../../26F2EC640A0D562F40948463D340EFA3.js"))&&e.__esModule;var a=require("../../CDE443310A0D562FAB822B3611B0EFA3.js");Page({data:{disabled:!0,buttonList:"button",twiceShow:!1,button:[{text:"申请记录",type:1,CustomFunction:function(){router.replace({path:"/appeal-home"})}},{text:"提交",disabled:!1,type:2}],studentName:"",schName:"",snCode:"",schoolCode:"",campusCode:"",campusName:"",remark:"",rejectName:"",appealDate:"",beginTime:"",campus:"",system:"",systemName:"",projectId:"",projectName:"",applyStatus:"",appealVideoUrls:[],code:!1,systemporductList:[],setSystemDialog:!1,showAppealDate:!1,maxData:(new Date).getTime(),minData:new Date(2024,10,1).getTime(),fileList:[],setBeginTimeDialog:!1,queryId:""},getUserInfo:function(){var e=wx.getStorageSync("userInfo");this.setData({studentName:e.studentName,schName:e.schoolName,schoolCode:e.schoolCode,snCode:e.snCode,campusCode:e.schoolCampusCode,campusName:e.schoolCampusName})},watch:function(){},onPullDownSystemName:function(){this.setData({setSystemDialog:!0})},onCancelSetSystem:function(){this.setData({setSystemDialog:!1})},onConfirmSetSystem:function(e){console.log(e.detail.value),this.setData({system:e.detail.value.systemId,systemName:e.detail.value.systemName,projectId:e.detail.value.systemId,projectName:e.detail.value.systemName,setSystemDialog:!1})},onPullDownAppealDate:function(){this.setData({showAppealDate:!0})},onCloseAppealDate:function(){this.setData({showAppealDate:!1})},formatDate:function(e){var t=(e=new Date(e)).getFullYear(),a=(e.getMonth()+1).toString().padStart(2,"0"),s=e.getDate().toString().padStart(2,"0");return"".concat(t,"-").concat(a,"-").concat(s)},onConfirmAppealDate:function(e){console.log(e.detail),this.setData({showAppealDate:!1,appealDate:this.formatDate(e.detail)})},onPullDownbeginTime:function(){this.setData({setBeginTimeDialog:!0})},onConfirmBeginTime:function(e){console.log(e),this.setData({setBeginTimeDialog:!1,beginTime:e.detail})},onCancelBeginTime:function(){this.setData({setBeginTimeDialog:!1})},delImg:function(e){var t=e.detail.index;console.log(t);var a=this.data.fileList;a.splice(t,1),this.setData({fileList:a})},afterRead:function(e){console.log(e);var a=e.detail.file;wx.showLoading({title:"加载中"});var s=wx.getStorageSync("token")||null,o=wx.getStorageSync("schoolBaseUrl"),i=o+"/wxxcx/platform/h5/uploadFileSunRunScan"||null,n=this;wx.uploadFile({url:i,filePath:a.url,name:"test",formData:{user:"test"},header:{"content-type":"application/json;charset=UTF-8",Authorization:"Bearer "+s},success:function(e){var s=JSON.parse(e.data),i=o+s.body[0].url;console.log(111,s.body[0].url);var l=n.data,c=l.fileList,u=void 0===c?[]:c,r=l.appealVideoUrls,m=void 0===r?[]:r;u.push(t(t({},a),{},{url:i})),m.push(i),n.setData({fileList:u,appealVideoUrls:m}),wx.hideLoading(),console.log(a)},fail:function(){wx.hideLoading()}})},submitClick:function(){0!=this.data.fileList.length?this.setData({twiceShow:!0}):wx.showToast({title:"请先上传申请材料！",icon:"none"})},twiceShowConfirm:function(){var e,t=[];null===(e=this.data.fileList)||void 0===e||e.forEach((function(e){t.push(e.url)}));var s={studentName:this.data.studentName,schName:this.data.schName,snCode:this.data.snCode,campusCode:this.data.campusCode,campusName:this.data.campusName,remark:this.data.remark,appealDate:this.data.appealDate,beginTime:this.data.beginTime,campus:this.data.campus,system:this.data.system,systemName:this.data.systemName,projectId:this.data.projectId,projectName:this.data.projectName,termCode:this.data.termId,termName:this.data.termName,urlList:t,isFreeStatus:1};a.request({url:"/wxxcx/platform/h5/saveSunAppealInfoList",data:s,success:function(e){console.log(e),"00"==e.status?wx.showModal({title:"提示",content:"申请提交成功",showCancel:!1,success:function(e){e.confirm&&wx.navigateBack({delta:1})}}):wx.showModal({title:"提示",content:e.msg,showCancel:!1,success:function(e){}})}})},submitint:function(e){e.studentName&&""!=e.studentName?twiceShow.value=!0:wx.showModal({title:"提示",content:"请先绑定学生信息！！",showCancel:!1})},onLoad:function(e){var t=this;console.log(e);var s=e.id;e.projectName,this.data.state;this.setData({queryId:s}),this.getUserInfo(),s?a.request({url:"/wxxcx/platform/h5/getFreeAndDelayt",data:{id:s,isFreestatus:"1"},success:function(e){var a,s=e.body,o=[];null===(a=s.urlList)||void 0===a||a.forEach((function(e){o.push({url:e})})),console.log(s),"3"==s.applyStatus&&t.setData({remark:s.remark,rejectName:s.rejectName});t.setData({campus:s.campusName,system:s.projectName,systemName:s.projectName,remark:s.remark,beginTime:s.beginTime,appealDate:s.appealDate,appealVideoUrls:[{url:s.appealVideoUrl}],fileList:o,applyStatus:{0:"未处理",1:"通过",3:"驳回",4:"撤销"}[s.applyStatus],code:!0})}}):this.setData({code:!0}),a.request({url:"/wxxcx/sunrun/getSchoolTerm",data:{},success:function(e){console.log(e),t.setData({termName:e.obj.name,termId:e.obj.id})}}),a.getData({url:"/wxxcx/sunrun/systemporductList",success:function(e){t.setData({systemporductList:[{businessType:"0",iconUrl:"https://oss.xtotoro.com/longmao/dev/product/logo.jpg",schoolType:"010301",systemId:"SYSTEM_PRODUCT-20210616000001",systemLevel:null,systemName:"阳光跑",systemType:"1",webRoute:"/sunrun"}]})}})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}});
},{isPage:true,isComponent:true,currentFile:'pages/noTestAppeal/index.js'});require("pages/noTestAppeal/index.js");