$gwx_XC_34=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_34 || [];
function gz$gwx_XC_34_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_34_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_34_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_34=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_34=true;
var x=['./miniprogram/miniprogram_npm/vant-weapp/stepper/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_34_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_34";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_34();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram/miniprogram_npm/vant-weapp/stepper/index.wxml'] = [$gwx_XC_34, './miniprogram/miniprogram_npm/vant-weapp/stepper/index.wxml'];else __wxAppCode__['miniprogram/miniprogram_npm/vant-weapp/stepper/index.wxml'] = $gwx_XC_34( './miniprogram/miniprogram_npm/vant-weapp/stepper/index.wxml' );
	;__wxRoute = "miniprogram/miniprogram_npm/vant-weapp/stepper/index";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram/miniprogram_npm/vant-weapp/stepper/index.js";define("miniprogram/miniprogram_npm/vant-weapp/stepper/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(0,require("../common/component").VantComponent)({field:!0,classes:["input-class","plus-class","minus-class"],props:{value:null,integer:Boolean,disabled:Boolean,inputWidth:String,asyncChange:Boolean,disableInput:Boolean,min:{type:null,value:1},max:{type:null,value:Number.MAX_SAFE_INTEGER},step:{type:null,value:1},showPlus:{type:Boolean,value:!0},showMinus:{type:Boolean,value:!0},disablePlus:Boolean,disableMinus:Boolean},computed:{minusDisabled:function(){return this.data.disabled||this.data.disableMinus||this.data.value<=this.data.min},plusDisabled:function(){return this.data.disabled||this.data.disablePlus||this.data.value>=this.data.max}},watch:{value:function(t){if(""!==t){var a=this.range(t);"number"==typeof a&&+this.data.value!==a&&this.set({value:a})}},max:"check",min:"check"},data:{focus:!1},created:function(){this.set({value:this.range(this.data.value)})},methods:{check:function(){var t=this.range(this.data.value);"number"==typeof t&&+this.data.value!==t&&this.set({value:t})},onFocus:function(t){this.$emit("focus",t.detail)},onBlur:function(t){var a=this.range(this.data.value);this.triggerInput(a),this.$emit("blur",t.detail)},range:function(t){return t=String(t).replace(/[^0-9.-]/g,""),Math.max(Math.min(this.data.max,t),this.data.min)},onInput:function(t){var a=(t.detail||{}).value,e=void 0===a?"":a;this.triggerInput(e)},onChange:function(t){if(this.data["".concat(t,"Disabled")])this.$emit("overlimit",t);else{var a="minus"===t?-this.data.step:+this.data.step,e=Math.round(100*(+this.data.value+a))/100;this.triggerInput(this.range(e)),this.$emit(t)}},onMinus:function(){this.onChange("minus")},onPlus:function(){this.onChange("plus")},triggerInput:function(t){this.set({value:this.data.asyncChange?this.data.value:t}),this.$emit("change",t)}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram/miniprogram_npm/vant-weapp/stepper/index.js'});require("miniprogram/miniprogram_npm/vant-weapp/stepper/index.js");