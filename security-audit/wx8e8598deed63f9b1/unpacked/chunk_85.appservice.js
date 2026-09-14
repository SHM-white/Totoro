$gwx_XC_92=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_92 || [];
function gz$gwx_XC_92_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_92_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_92_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_92_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'main-container fade-in'])
Z([[7],[3,'runPointData']])
Z([[2,'||'],[[2,'=='],[[7],[3,'runType']],[1,0]],[[2,'=='],[[7],[3,'runType']],[1,2]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_92_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_92_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_92=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_92=true;
var x=['./pages/history/detail.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_92_1()
var hQZ=_n('view')
_rz(z,hQZ,'class',0,e,s,gg)
var oRZ=_v()
_(hQZ,oRZ)
if(_oz(z,1,e,s,gg)){oRZ.wxVkey=1
}
var cSZ=_v()
_(hQZ,cSZ)
if(_oz(z,2,e,s,gg)){cSZ.wxVkey=1
}
oRZ.wxXCkey=1
cSZ.wxXCkey=1
_(r,hQZ)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_92";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_92();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/history/detail.wxml'] = [$gwx_XC_92, './pages/history/detail.wxml'];else __wxAppCode__['pages/history/detail.wxml'] = $gwx_XC_92( './pages/history/detail.wxml' );
	;__wxRoute = "pages/history/detail";__wxRouteBegin = true;__wxAppCurrentFile__="pages/history/detail.js";define("pages/history/detail.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t,e=require("../../@babel/runtime/helpers/typeof"),a=require("../../@babel/runtime/helpers/defineProperty"),i=(t=require("../../7D1FC0F00A0D562F1B79A8F7B1F0EFA3.js"))&&t.__esModule?t:{default:t};var n,o=require("../../CDE443310A0D562FAB822B3611B0EFA3.js"),s=require("../../312F5B050A0D562F57493302C930EFA3.js"),r=s.encrypt,l=(s.decrypt,null),c=null;Page({data:{userInfo:wx.getStorageSync("userInfo"),cWidth:0,cHeight:0,polyline:[{points:[],color:"#07c160",width:2}],latitude:0,longitude:0,time_data:"00:00",distance_data:"0.00",speed_data:"0'00\"",kcal_data:"0.00",fitDegree:0,runType:0,scantronId:"",allKm:0,runPointData:{}},onLoad:function(t){var e;wx.setNavigationBarTitle({title:"运动详情"}),n=this,this.cWidth=wx.getSystemInfoSync().windowWidth,this.cHeight=wx.getSystemInfoSync().windowWidth/750*504,console.log("options",t),"{}"==JSON.stringify(t)&&wx.showModal({title:"提示",content:"参数传递错误",showCancel:!1,success:function(t){t.confirm&&wx.redirectTo({url:"./index"})}}),this.data.id=t.id;var i=JSON.parse(wx.getStorageSync("RunInfo-"+t.id)),o=i.time_data,s=i.distance_data,r=i.kcal_data,l=i.fitDegree,c=i.points_data,d=i.km_speed_data,u=i.altitude,h=i.altitude_data,g=[],p=[],f=[],w=[],x=i.runType;isNaN(x)&&(x=0),c.length>0&&this.setData({longitude:c[c.length-1].longitude,latitude:c[c.length-1].latitude}),console.log(c[c.length-1]);var m=o.split(":"),y=m[0],v=m[1],b=m[2],S=0;S="0.00"==s?0:(60*parseFloat(y)+parseFloat(v)+parseFloat(b)/60)/s;var L=Math.floor(S);S=L+"'"+Math.floor(60*(S-L))+'"';this.setData((e={id:t.id,time_data:o,distance_data:s,speed_data:S,kcal_data:r,fitDegree:l},a(e,"polyline[0].points",c),a(e,"km_speed_data",[]),a(e,"altitude_data",[]),a(e,"runType",x),a(e,"scantronId",i.scantronId),a(e,"allKm",i.allKm),e)),this.getRunPointList();for(var F=0;F<d.length;F++){var T=d[F];T=(T=T.replace("'",".")).replace('"',""),T=parseFloat(T),g.push(T),p.push(F+1+"Km")}0==d.length?p.push("<1Km"):p.push("<"+(d.length+1)+"Km");var _=S;_=(_=_.replace("'",".")).replace('"',""),_=parseFloat(_),g.push(_),p.push(""),p.push("");for(var I=0;I<h.length;I++){var A=h[I];A=parseFloat(A),f.push(A.toFixed(2)),w.push(I+1+"Km")}0==h.length?w.push("<1Km"):w.push("<"+(h.length+1)+"Km"),_=u,_=parseFloat(_),f.push(_.toFixed(2)),w.push(""),w.push("");var D=this;0==c.length&&wx.getLocation({success:function(t){D.setData({latitude:t.latitude,longitude:t.longitude}),setTimeout((function(){wx.createMapContext("myMap").moveToLocation()}),2e3)}});var k={categories:p,series:g};n.showLineA("canvasLineA",k),k={categories:w,series:f},n.showLineB("canvasLineB",k)},copyText:function(){var t=wx.getStorageSync("RunInfo-"+this.data.id);wx.setClipboardData({data:t,success:function(t){wx.showToast({title:"复制成功",icon:"success",duration:1500}),wx.getClipboardData({success:function(t){console.log("剪贴板内容：",t.data)}})},fail:function(t){wx.showToast({title:"复制失败，请重试",icon:"none",duration:1500}),console.error("复制失败：",t)}})},copyEncryptedText:function(){var t=wx.getStorageSync("RunInfo-"+this.data.id);wx.showLoading({title:"加密中..."});try{console.log(e(t));var a=r(t);wx.setClipboardData({data:a,success:function(){wx.hideLoading(),wx.showToast({title:"复制成功",icon:"success",duration:2e3})},fail:function(t){wx.hideLoading(),wx.showToast({title:"复制失败",icon:"none"}),console.error("复制失败：",t)}})}catch(t){wx.hideLoading(),wx.showToast({title:"加密失败",icon:"none"}),console.error("加密失败：",t)}},getRunPointList:function(){var t=this,e={scantronId:this.data.scantronId};o.request({url:"/wxxcx/sunrun/getRunPointList",data:e,success:function(e){t.setData({runPointData:e}),console.log(e)}})},showLineA:function(t,e){l=new i.default({$this:n,canvasId:t,type:"line",fontSize:11,legend:!0,dataLabel:!0,dataPointShape:!0,background:"#FFFFFF",colors:["#f37b1d"],pixelRatio:1,categories:e.categories,series:[{data:e.series,name:"配速"}],animation:!0,enableScroll:!0,xAxis:{disableGrid:!1,type:"grid",gridType:"dash",itemCount:5,scrollShow:!0,scrollAlign:"left"},yAxis:{disabled:!1,gridType:"dash",splitNumber:5,min:0,max:15},width:n.cWidth,height:n.cHeight,extra:{line:{type:"straight"}}})},touchLineA:function(t){l.scrollStart(t)},moveLineA:function(t){l.scroll(t)},touchEndLineA:function(t){l.scrollEnd(t),l.showToolTip(t,{format:function(t,e){return e+" "+t.name+":"+t.data+"分/公里"}})},showLineB:function(t,e){console.log(e),c=new i.default({$this:n,canvasId:t,type:"line",fontSize:11,legend:!0,dataLabel:!0,dataPointShape:!0,background:"#FFFFFF",colors:["#1cbbb4"],pixelRatio:1,categories:e.categories,series:[{data:e.series,name:"海拔"}],animation:!0,enableScroll:!0,xAxis:{disableGrid:!1,type:"grid",gridType:"dash",itemCount:5,scrollShow:!0,scrollAlign:"left"},yAxis:{disabled:!1,gridType:"dash",splitNumber:5,min:0,max:15},width:n.cWidth,height:n.cHeight,extra:{line:{type:"straight"}}})},touchLineB:function(t){c.scrollStart(t)},moveLineB:function(t){c.scroll(t)},touchEndLineB:function(t){c.scrollEnd(t),c.showToolTip(t,{format:function(t,e){return e+" "+t.name+":"+t.data+"米"}})},toShare:function(){this.vibrateFunc(1);var t=this.data.id;wx.navigateTo({url:"../share/index?id="+t})},delHistory:function(){console.log(11111,this.data.id),this.vibrateFunc(1);var t=this.data.id;wx.showModal({title:"提示",content:"确定要删除这条记录吗?",success:function(e){e.confirm&&wx.removeStorage({key:"RunInfo-"+t,success:function(t){wx.showModal({title:"提示",content:"删除成功",showCancel:!1,success:function(){wx.navigateBack({delta:1})}})},fail:function(){wx.showModal({title:"提示",content:"删除失败",showCancel:!1})}})}})},vibrateFunc:function(t){wx.getStorageSync("vibrate")&&(1==t&&wx.vibrateShort({complete:function(t){}}),2==t&&wx.vibrateLong({complete:function(t){}}))}});
},{isPage:true,isComponent:true,currentFile:'pages/history/detail.js'});require("pages/history/detail.js");