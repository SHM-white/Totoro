$gwx_XC_33=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_33 || [];
function gz$gwx_XC_33_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_33_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_33_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_33_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([a,[3,'custom-class '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'slider']],[[8],'disabled',[[7],[3,'disabled']]]]]])
Z([[2,'?:'],[[7],[3,'inactiveColor']],[[2,'+'],[1,'background:'],[[7],[3,'inactiveColor']]],[1,'']])
Z([3,'onTouchEnd'])
Z(z[3])
Z([3,'onTouchStart'])
Z([3,'onTouchMove'])
Z([3,'van-slider__button-wrapper'])
Z([[7],[3,'useButtonSlot']])
Z([3,'button'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_33_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_33_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_33=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_33=true;
var x=['./miniprogram/miniprogram_npm/vant-weapp/slider/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_33_1()
var bKL=_mz(z,'view',['bind:tap',0,'class',1,'style',1],[],e,s,gg)
var oLL=_mz(z,'view',['bind:touchcancel',3,'bind:touchend',1,'bind:touchstart',2,'catch:touchmove',3,'class',4],[],e,s,gg)
var xML=_v()
_(oLL,xML)
if(_oz(z,8,e,s,gg)){xML.wxVkey=1
var oNL=_n('slot')
_rz(z,oNL,'name',9,e,s,gg)
_(xML,oNL)
}
else{xML.wxVkey=2
}
xML.wxXCkey=1
_(bKL,oLL)
_(r,bKL)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_33";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_33();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram/miniprogram_npm/vant-weapp/slider/index.wxml'] = [$gwx_XC_33, './miniprogram/miniprogram_npm/vant-weapp/slider/index.wxml'];else __wxAppCode__['miniprogram/miniprogram_npm/vant-weapp/slider/index.wxml'] = $gwx_XC_33( './miniprogram/miniprogram_npm/vant-weapp/slider/index.wxml' );
	;__wxRoute = "miniprogram/miniprogram_npm/vant-weapp/slider/index";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram/miniprogram_npm/vant-weapp/slider/index.js";define("miniprogram/miniprogram_npm/vant-weapp/slider/index.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=require("../common/component"),a=require("../mixins/touch");(0,t.VantComponent)({mixins:[a.touch],props:{disabled:Boolean,useButtonSlot:Boolean,activeColor:String,inactiveColor:String,max:{type:Number,value:100},min:{type:Number,value:0},step:{type:Number,value:1},value:{type:Number,value:0},barHeight:{type:String,value:"2px"}},watch:{value:function(t){this.updateValue(t,!1)}},created:function(){this.updateValue(this.data.value)},methods:{onTouchStart:function(t){this.data.disabled||(this.touchStart(t),this.startValue=this.format(this.data.value))},onTouchMove:function(t){var a=this;this.data.disabled||(this.touchMove(t),this.getRect(".van-slider").then((function(t){var e=a.deltaX/t.width*100;a.newValue=a.startValue+e,a.updateValue(a.newValue,!1,!0)})))},onTouchEnd:function(){this.data.disabled||this.updateValue(this.newValue,!0)},onClick:function(t){var a=this;this.data.disabled||this.getRect(".van-slider").then((function(e){var i=(t.detail.x-e.left)/e.width*100;a.updateValue(i,!0)}))},updateValue:function(t,a,e){t=this.format(t),this.set({value:t,barStyle:"width: ".concat(t,"%; height: ").concat(this.data.barHeight,";")}),e&&this.$emit("drag",{value:t}),a&&this.$emit("change",t)},format:function(t){var a=this.data,e=a.max,i=a.min,u=a.step;return Math.round(Math.max(i,Math.min(t,e))/u)*u}}});
},{isPage:false,isComponent:true,currentFile:'miniprogram/miniprogram_npm/vant-weapp/slider/index.js'});require("miniprogram/miniprogram_npm/vant-weapp/slider/index.js");