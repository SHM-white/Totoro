$gwx_XC_38=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_38 || [];
function gz$gwx_XC_38_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_38_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_38_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_38_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'border']])
Z([3,'van-switch-cell'])
Z([[7],[3,'icon']])
Z([[7],[3,'label']])
Z([[7],[3,'title']])
Z([[7],[3,'useLabelSlot']])
Z([3,'icon'])
Z(z[6])
Z([3,'title'])
Z(z[8])
Z([3,'label'])
Z(z[10])
Z([[7],[3,'activeColor']])
Z([[7],[3,'activeValue']])
Z([3,'onChange'])
Z([[7],[3,'checked']])
Z([3,'van-switch-cell__switch'])
Z([[7],[3,'disabled']])
Z([[7],[3,'inactiveColor']])
Z([[7],[3,'inactiveValue']])
Z([[7],[3,'loading']])
Z([[7],[3,'size']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_38_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_38_1
}
function gz$gwx_XC_38_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_38_2)return __WXML_GLOBAL__.ops_cached.$gwx_XC_38_2
__WXML_GLOBAL__.ops_cached.$gwx_XC_38_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onClick'])
Z([a,[3,'custom-class '],[[12],[[6],[[7],[3,'utils']],[3,'bem']],[[5],[[5],[1,'switch']],[[9],[[8],'on',[[2,'==='],[[7],[3,'value']],[[7],[3,'activeValue']]]],[[8],'disabled',[[7],[3,'disabled']]]]]]])
Z([a,[3,'font-size:'],[[7],[3,'size']],[3,';'],[[2,'?:'],[[2,'?:'],[[7],[3,'checked']],[[7],[3,'activeColor']],[[7],[3,'inactiveColor']]],[[2,'+'],[1,'background-color: '],[[2,'?:'],[[7],[3,'checked']],[[7],[3,'activeColor']],[[7],[3,'inactiveColor']]]],[1,'']]])
Z([3,'van-switch__node node-class'])
Z([[7],[3,'loading']])
Z([3,'van-switch__loading'])
Z([3,'50%'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_38_2);return __WXML_GLOBAL__.ops_cached.$gwx_XC_38_2
}
__WXML_GLOBAL__.ops_set.$gwx_XC_38=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_38=true;
var x=['./miniprogram/miniprogram_npm/vant-weapp/switch-cell/index.wxml','./miniprogram/miniprogram_npm/vant-weapp/switch/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_38_1()
var o2DB=_mz(z,'van-cell',['center',-1,'border',0,'customClass',1,'icon',1,'label',2,'title',3,'useLabelSlot',4],[],e,s,gg)
var f3DB=_mz(z,'slot',['name',6,'slot',1],[],e,s,gg)
_(o2DB,f3DB)
var c4DB=_mz(z,'slot',['name',8,'slot',1],[],e,s,gg)
_(o2DB,c4DB)
var h5DB=_mz(z,'slot',['name',10,'slot',1],[],e,s,gg)
_(o2DB,h5DB)
var o6DB=_mz(z,'van-switch',['activeColor',12,'activeValue',1,'bind:change',2,'checked',3,'customClass',4,'disabled',5,'inactiveColor',6,'inactiveValue',7,'loading',8,'size',9],[],e,s,gg)
_(o2DB,o6DB)
_(r,o2DB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_XC_38_2()
var o8DB=_mz(z,'view',['bind:tap',0,'class',1,'style',1],[],e,s,gg)
var l9DB=_n('view')
_rz(z,l9DB,'class',3,e,s,gg)
var a0DB=_v()
_(l9DB,a0DB)
if(_oz(z,4,e,s,gg)){a0DB.wxVkey=1
var tAEB=_mz(z,'van-loading',['customClass',5,'size',1],[],e,s,gg)
_(a0DB,tAEB)
}
a0DB.wxXCkey=1
a0DB.wxXCkey=3
_(o8DB,l9DB)
_(r,o8DB)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_38";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(outerGlobal.__webview_engine_version__)!='undefined'&&outerGlobal.__webview_engine_version__+1e-6>=0.02+1e-6&&outerGlobal.__mergeData__)
{
env=outerGlobal.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(outerGlobal.__webview_engine_version__)=='undefined'|| outerGlobal.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_38();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram/miniprogram_npm/vant-weapp/switch-cell/index.wxml'] = [$gwx_XC_38, './miniprogram/miniprogram_npm/vant-weapp/switch-cell/index.wxml'];else __wxAppCode__['miniprogram/miniprogram_npm/vant-weapp/switch-cell/index.wxml'] = $gwx_XC_38( './miniprogram/miniprogram_npm/vant-weapp/switch-cell/index.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram/miniprogram_npm/vant-weapp/switch/index.wxml'] = [$gwx_XC_38, './miniprogram/miniprogram_npm/vant-weapp/switch/index.wxml'];else __wxAppCode__['miniprogram/miniprogram_npm/vant-weapp/switch/index.wxml'] = $gwx_XC_38( './miniprogram/miniprogram_npm/vant-weapp/switch/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['miniprogram/miniprogram_npm/vant-weapp/switch-cell/index.wxss']=setCssToHead([[2,"./miniprogram/miniprogram_npm/vant-weapp/common/index.wxss"],".",[1],"van-switch-cell{padding-bottom:9px;padding-top:9px}\n.",[1],"van-switch-cell__switch{vertical-align:middle}\n",],undefined,{path:"./miniprogram/miniprogram_npm/vant-weapp/switch-cell/index.wxss"});__wxAppCode__['miniprogram/miniprogram_npm/vant-weapp/switch/index.wxss']=setCssToHead([[2,"./miniprogram/miniprogram_npm/vant-weapp/common/index.wxss"],".",[1],"van-switch{border:1px solid rgba(0,0,0,.1);border-radius:1em;box-sizing:initial;display:inline-block;position:relative;transition:background-color .3s;width:2em}\n.",[1],"van-switch,.",[1],"van-switch__node{background-color:#fff;height:1em}\n.",[1],"van-switch__node{border-radius:100%;box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);left:0;position:absolute;top:0;transition:.3s;width:1em;z-index:1}\n.",[1],"van-switch__loading{left:25%;position:absolute!important;top:25%}\n.",[1],"van-switch--on{background-color:#1989fa}\n.",[1],"van-switch--on .",[1],"van-switch__node{-webkit-transform:translateX(1em);transform:translateX(1em)}\n.",[1],"van-switch--disabled{opacity:.4}\n",],undefined,{path:"./miniprogram/miniprogram_npm/vant-weapp/switch/index.wxss"});
}