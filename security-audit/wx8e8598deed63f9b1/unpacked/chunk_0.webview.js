$gwx_XC_0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_0 || [];
function gz$gwx_XC_0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'cu-custom'])
Z([a,[3,'height:'],[[7],[3,'CustomBar']],[3,'px']])
Z([a,[3,'cu-bar fixed '],[[2,'?:'],[[2,'!='],[[7],[3,'bgImage']],[1,'']],[1,'none-bg text-white bg-img'],[1,'']],[3,' '],[[7],[3,'bgColor']]])
Z([a,z[1][1],z[1][2],[3,'px;padding-top:'],[[7],[3,'StatusBar']],[3,'px;'],[[2,'?:'],[[7],[3,'bgImage']],[[2,'+'],[[2,'+'],[1,'background-image:url('],[[7],[3,'bgImage']]],[1,')']],[1,'']]])
Z([[7],[3,'isBack']])
Z([3,'BackPage'])
Z([3,'action'])
Z([3,'cuIcon-back'])
Z([3,'backText'])
Z([[7],[3,'isCustom']])
Z([3,'action border-custom'])
Z([a,[3,'width:'],[[6],[[7],[3,'Custom']],[3,'width']],[3,'px;height:'],[[6],[[7],[3,'Custom']],[3,'height']],[3,'px;margin-left:calc(750rpx - '],[[6],[[7],[3,'Custom']],[3,'right']],[3,'px)']])
Z(z[5])
Z(z[7])
Z([3,'toHome'])
Z([3,'cuIcon-homefill'])
Z([3,'content'])
Z([a,[3,'top:'],z[3][4],z[1][3]])
Z(z[16])
Z([3,'right'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_0=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_0=true;
var x=['./colorui/components/cu-custom.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_0_1()
var c3B=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var o4B=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
var l5B=_v()
_(o4B,l5B)
if(_oz(z,4,e,s,gg)){l5B.wxVkey=1
var t7B=_mz(z,'view',['bindtap',5,'class',1],[],e,s,gg)
var e8B=_n('text')
_rz(z,e8B,'class',7,e,s,gg)
_(t7B,e8B)
var b9B=_n('slot')
_rz(z,b9B,'name',8,e,s,gg)
_(t7B,b9B)
_(l5B,t7B)
}
var a6B=_v()
_(o4B,a6B)
if(_oz(z,9,e,s,gg)){a6B.wxVkey=1
var o0B=_mz(z,'view',['class',10,'style',1],[],e,s,gg)
var xAC=_mz(z,'text',['bindtap',12,'class',1],[],e,s,gg)
_(o0B,xAC)
var oBC=_mz(z,'text',['bindtap',14,'class',1],[],e,s,gg)
_(o0B,oBC)
_(a6B,o0B)
}
var fCC=_mz(z,'view',['class',16,'style',1],[],e,s,gg)
var cDC=_n('slot')
_rz(z,cDC,'name',18,e,s,gg)
_(fCC,cDC)
_(o4B,fCC)
var hEC=_n('slot')
_rz(z,hEC,'name',19,e,s,gg)
_(o4B,hEC)
l5B.wxXCkey=1
a6B.wxXCkey=1
_(c3B,o4B)
_(r,c3B)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_0";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_0();	if (__vd_version_info__.delayedGwx) __wxAppCode__['colorui/components/cu-custom.wxml'] = [$gwx_XC_0, './colorui/components/cu-custom.wxml'];else __wxAppCode__['colorui/components/cu-custom.wxml'] = $gwx_XC_0( './colorui/components/cu-custom.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['colorui/components/cu-custom.wxss']=setCssToHead([],undefined,{path:"./colorui/components/cu-custom.wxss"});
}