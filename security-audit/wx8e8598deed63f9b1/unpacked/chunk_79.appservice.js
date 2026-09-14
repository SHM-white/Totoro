$gwx_XC_85=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_85 || [];
function gz$gwx_XC_85_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_85_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_85_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_85_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'showCamera']]])
Z([[7],[3,'showCamera']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_85_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_85_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_85=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_85=true;
var x=['./pages/admissionTicket/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_85_1()
var bSY=_v()
_(r,bSY)
if(_oz(z,0,e,s,gg)){bSY.wxVkey=1
}
var oTY=_v()
_(r,oTY)
if(_oz(z,1,e,s,gg)){oTY.wxVkey=1
}
bSY.wxXCkey=1
oTY.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_85";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_85();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/admissionTicket/index.wxml'] = [$gwx_XC_85, './pages/admissionTicket/index.wxml'];else __wxAppCode__['pages/admissionTicket/index.wxml'] = $gwx_XC_85( './pages/admissionTicket/index.wxml' );
	;__wxRoute = "pages/admissionTicket/index";__wxRouteBegin = true;__wxAppCurrentFile__="pages/admissionTicket/index.js";define("pages/admissionTicket/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var e=require("../../2395CE910A0D562F45F3A6963120EFA3.js");Page({data:{showCamera:!1,ctx:null,device:"back",Img1:""},onLoad:function(e){this.setData({ctx:wx.createCameraContext()})},takePhotoZ:function(){wx.getSystemInfoSync().windowWidth;var e=this;e.data.ctx.takePhoto({quality:"normal",success:function(t){console.log(t);t.tempImagePath;wx.getFileInfo({filePath:t.tempImagePath,success:function(t){console.log("getFileInfo",t);var a=t.width,o=t.height;e.cWidth=a,e.cHeight=o}}),console.log(t,console.log(wx.getFileSystemManager().readFileSync(t.tempImagePath,"base64")))},fail:function(e){},complete:function(e){}})},chooseImgF2:function(t){var a=t.currentTarget.dataset.index,o=wx.getSystemInfoSync().windowWidth;console.log(o);var s=this;wx.chooseImage({sizeType:["compressed"],sourceType:["album","camera"],count:1,success:function(t){wx.showLoading({title:"加载中",mask:!0});var n=t.tempFilePaths[0];wx.getFileInfo({filePath:t.tempFilePaths[0],success:function(e){var t=e.width,a=e.height;s.cWidth=t,s.cHeight=a}}),e.getLessLimitSizeImage("canvas",n,400,o,(function(e){wx.getFileInfo({filePath:e,success:function(t){console.log("压缩后："+t.size/1024+"kb"),wx.getFileSystemManager().readFile({filePath:e,encoding:"base64",success:function(e){var t=e.data;console.log(a),s.getBase64ImageUrlF2(t,a)}})}})}))},fail:function(e){console.log(e)}})},getBase64ImageUrlF2:function(e,t){var a=e;a=wx.arrayBufferToBase64(wx.base64ToArrayBuffer(a));var o="data:image/png;base64,".concat(a),s=o.indexOf("="),n=(o=-1!=s?o.substring(0,s):o).length,i=n-n/8*2;console.log(i+"大小"),this.setData({showCamera:!1,Img1:"".concat(a)}),console.log(this.data.Img1)},toPhoto:function(e){this.setData({showCamera:!0,index:e.currentTarget.dataset.index})},close:function(){this.setData({showCamera:!1})},changeCamera:function(){"front"==this.data.device?this.setData({device:"back"}):this.setData({device:"front"})}});
},{isPage:true,isComponent:true,currentFile:'pages/admissionTicket/index.js'});require("pages/admissionTicket/index.js");