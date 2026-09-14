$gwx_XC_5=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_5 || [];
function gz$gwx_XC_5_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_5=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_5=true;
var x=['./pages/share/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_5_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_5";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_5();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/share/index.wxml'] = [$gwx_XC_5, './pages/share/index.wxml'];else __wxAppCode__['pages/share/index.wxml'] = $gwx_XC_5( './pages/share/index.wxml' );
	;__wxRoute = "pages/share/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/share/index.js";define("pages/share/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";getApp();Page({data:{qtsheXcxCode:"../../icon/qrcode.png",shareImagePath:"",run_data:null,canvasWidth:350,canvasHeight:520},onLoad:function(t){var a=this;if(wx.setNavigationBarTitle({title:"生成海报"}),wx.setNavigationBarColor({frontColor:"#000000",backgroundColor:"#ffffff"}),t.id){var e=JSON.parse(wx.getStorageSync("RunInfo-"+t.id));this.data.run_data=e;var i=new Date(1e3*t.id);this.data.year=i.getFullYear(),this.data.month=i.getMonth()+1,this.data.date=i.getDate(),this.data.hour=i.getHours().toString().padStart(2,"0"),this.data.minute=i.getMinutes().toString().padStart(2,"0"),setTimeout((function(){a.drawAppleStylePoster()}),300)}},goback:function(){wx.navigateBack({delta:1})},drawAppleStylePoster:function(){var t=this;wx.showLoading({title:"绘制中..."});var a=wx.createCanvasContext("mycanvas"),e=this.data.canvasWidth,i=this.data.canvasHeight,s=this.data.run_data;this.roundRect(a,0,0,e,i,24),a.clip(),a.setFillStyle("#f2f2f7"),a.fillRect(0,0,e,i);var o=a.createCircularGradient(0,i,.6*e);o.addColorStop(0,"rgba(255, 204, 188, 0.6)"),o.addColorStop(1,"rgba(255, 204, 188, 0)"),a.setFillStyle(o),a.fillRect(0,0,e,i);var n=a.createCircularGradient(e,0,.6*e);n.addColorStop(0,"rgba(160, 196, 255, 0.6)"),n.addColorStop(1,"rgba(160, 196, 255, 0)"),a.setFillStyle(n),a.fillRect(0,0,e,i);var l=e-40,r=i-40;a.setShadow(0,10,30,"rgba(0, 0, 0, 0.08)"),a.setFillStyle("rgba(255, 255, 255, 0.65)"),this.roundRect(a,20,20,l,r,20),a.fill(),a.setShadow(0,0,0,"transparent"),a.setStrokeStyle("rgba(255, 255, 255, 0.8)"),a.setLineWidth(1),a.stroke();var d=e-20-24;a.setTextAlign("left"),a.font="bold 26px sans-serif",a.setFillStyle("#1c1c1e"),a.fillText("".concat(this.data.month,"月").concat(this.data.date,"日"),44,60),a.font="14px sans-serif",a.setFillStyle("#8e8e93"),a.fillText("".concat(this.data.year," · ").concat(this.data.hour,":").concat(this.data.minute),44,84),a.setTextAlign("right"),a.font="bold italic 18px sans-serif",a.setFillStyle("#007aff"),a.fillText("SUNRUN",d,60);a.setTextAlign("center"),a.font="bold 100px sans-serif",a.setFillStyle("#1c1c1e"),a.setShadow(0,4,10,"rgba(0,0,0,0.05)"),a.fillText(s.distance_data,e/2,180),a.setShadow(0,0,0,"transparent"),a.font="14px sans-serif",a.setFillStyle("#8e8e93"),a.fillText("公里",e/2,210);var c=(l-48)/3,f=44+c/2,h=function(t,e,i){var s=f+i*c;a.font="bold 24px sans-serif",a.setFillStyle("#1c1c1e"),a.fillText(e,s,260),a.font="12px sans-serif",a.setFillStyle("#8e8e93"),a.fillText(t,s,280)};h("用时",s.time_data,0),h("配速",s.speed_data,1),h("千卡",s.kcal_data,2),a.setStrokeStyle("rgba(0,0,0,0.05)"),a.beginPath(),a.moveTo(44,310),a.lineTo(d,310),a.stroke();a.drawImage(this.data.qtsheXcxCode,44,340,70,70),a.setTextAlign("left");a.font="bold 16px sans-serif",a.setFillStyle("#1c1c1e"),a.fillText("长按识别二维码",130,366),a.font="12px sans-serif",a.setFillStyle("#8e8e93"),a.fillText("加入校园阳光跑，记录每一步",130,388),a.draw(!1,(function(){setTimeout((function(){wx.canvasToTempFilePath({canvasId:"mycanvas",destWidth:2*e,destHeight:2*i,success:function(a){wx.hideLoading(),t.setData({shareImagePath:a.tempFilePath})},fail:function(t){wx.hideLoading()}},t)}),300)}))},roundRect:function(t,a,e,i,s,o){t.beginPath(),t.moveTo(a+o,e),t.arcTo(a+i,e,a+i,e+s,o),t.arcTo(a+i,e+s,a,e+s,o),t.arcTo(a,e+s,a,e,o),t.arcTo(a,e,a+i,e,o),t.closePath()},savePhoto:function(){this.data.shareImagePath?wx.saveImageToPhotosAlbum({filePath:this.data.shareImagePath,success:function(){wx.showToast({title:"已保存",icon:"success"})},fail:function(t){t.errMsg.indexOf("auth")>-1?wx.openSetting({}):wx.showToast({title:"保存失败",icon:"none"})}}):wx.showToast({title:"绘制中...",icon:"none"})}});
},{isPage:true,isComponent:true,currentFile:'pages/share/index.js'});require("pages/share/index.js");