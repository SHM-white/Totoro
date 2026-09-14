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
Z([3,'right-icon'])
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
Z([3,'submitClick'])
Z([3,'bg-blue round margin-top'])
Z([3,'提 交'])
Z([3,'twiceShowConfirm'])
Z([[7],[3,'twiceShow']])
Z([3,'请再次确认申请信息'])
Z([3,'twiceShowClass'])
Z([3,'margin-bottom:30rpx;'])
Z([3,'申请类型：阳光跑免测'])
Z([3,'overflow'])
Z([a,[3,'申请说明：'],[[2,'||'],[[7],[3,'remark']],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_102_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_102_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_102=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_102=true;
var x=['./pages/noTestAppeal/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_102_1()
var lWVC=_n('view')
_rz(z,lWVC,'class',0,e,s,gg)
var b1VC=_mz(z,'van-field',['readonly',-1,'label',1,'value',1],[],e,s,gg)
b1VC.rawAttr={"model:value":"{{schName}}",};_(lWVC,b1VC)
var o2VC=_mz(z,'van-field',['readonly',-1,'label',3,'value',1],[],e,s,gg)
o2VC.rawAttr={"model:value":"{{studentName}}",};_(lWVC,o2VC)
var x3VC=_mz(z,'van-field',['readonly',-1,'label',5,'value',1],[],e,s,gg)
x3VC.rawAttr={"model:value":"{{snCode}}",};_(lWVC,x3VC)
var o4VC=_mz(z,'van-field',['readonly',-1,'label',7,'value',1],[],e,s,gg)
o4VC.rawAttr={"model:value":"{{termName}}",};_(lWVC,o4VC)
var f5VC=_mz(z,'van-field',['readonly',-1,'label',9,'value',1],[],e,s,gg)
f5VC.rawAttr={"model:value":"{{campusName}}",};_(lWVC,f5VC)
var c6VC=_mz(z,'van-popup',['round',-1,'closabled',11,'customStyle',1,'position',2,'show',3,'zIndex',4],[],e,s,gg)
var h7VC=_n('view')
var o8VC=_mz(z,'van-picker',['showToolbar',-1,'bind:cancel',16,'bind:confirm',1,'columns',2,'title',3,'valueKey',4],[],e,s,gg)
_(h7VC,o8VC)
_(c6VC,h7VC)
_(lWVC,c6VC)
var c9VC=_mz(z,'van-calendar',['bind:close',21,'bind:confirm',1,'maxDate',2,'minDate',3,'show',4],[],e,s,gg)
_(lWVC,c9VC)
var o0VC=_mz(z,'van-popup',['round',-1,'closabled',26,'customStyle',1,'position',2,'show',3,'zIndex',4],[],e,s,gg)
var lAWC=_n('view')
var aBWC=_mz(z,'van-datetime-picker',['bind:cancel',31,'bind:confirm',1,'type',2,'value',3],[],e,s,gg)
_(lAWC,aBWC)
_(o0VC,lAWC)
_(lWVC,o0VC)
var tCWC=_mz(z,'van-field',['autosize',35,'label',1,'value',2,'placeholder',3],[],e,s,gg)
tCWC.rawAttr={"model:value":"{{remark}}",};_(lWVC,tCWC)
var eDWC=_n('van-cell')
_rz(z,eDWC,'title',39,e,s,gg)
var bEWC=_n('view')
_rz(z,bEWC,'solt',40,e,s,gg)
var oFWC=_mz(z,'van-uploader',['accept',41,'bind:after-read',1,'bind:delete',2,'deletable',3,'fileList',4],[],e,s,gg)
_(bEWC,oFWC)
_(eDWC,bEWC)
_(lWVC,eDWC)
var aXVC=_v()
_(lWVC,aXVC)
if(_oz(z,46,e,s,gg)){aXVC.wxVkey=1
var xGWC=_mz(z,'van-field',['readonly',-1,'label',47,'value',1],[],e,s,gg)
xGWC.rawAttr={"model:value":"{{applyStatus}}",};_(aXVC,xGWC)
}
var tYVC=_v()
_(lWVC,tYVC)
if(_oz(z,49,e,s,gg)){tYVC.wxVkey=1
var oHWC=_mz(z,'van-field',['readonly',-1,'label',50,'value',1],[],e,s,gg)
oHWC.rawAttr={"model:value":"{{rejectName}}",};_(tYVC,oHWC)
}
var eZVC=_v()
_(lWVC,eZVC)
if(_oz(z,52,e,s,gg)){eZVC.wxVkey=1
var fIWC=_mz(z,'button',['bindtap',53,'class',1],[],e,s,gg)
var cJWC=_oz(z,55,e,s,gg)
_(fIWC,cJWC)
_(eZVC,fIWC)
}
var hKWC=_mz(z,'van-dialog',['showCancelButton',-1,'useSlot',-1,'bind:confirm',56,'show',1,'title',2],[],e,s,gg)
var oLWC=_n('view')
_rz(z,oLWC,'class',59,e,s,gg)
var cMWC=_n('view')
_rz(z,cMWC,'style',60,e,s,gg)
var oNWC=_oz(z,61,e,s,gg)
_(cMWC,oNWC)
_(oLWC,cMWC)
var lOWC=_n('view')
_rz(z,lOWC,'class',62,e,s,gg)
var aPWC=_oz(z,63,e,s,gg)
_(lOWC,aPWC)
_(oLWC,lOWC)
_(hKWC,oLWC)
_(lWVC,hKWC)
aXVC.wxXCkey=1
aXVC.wxXCkey=3
tYVC.wxXCkey=1
tYVC.wxXCkey=3
eZVC.wxXCkey=1
_(r,lWVC)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_102";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_102();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/noTestAppeal/index.wxml'] = [$gwx_XC_102, './pages/noTestAppeal/index.wxml'];else __wxAppCode__['pages/noTestAppeal/index.wxml'] = $gwx_XC_102( './pages/noTestAppeal/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/noTestAppeal/index.wxss']=setCssToHead([".",[1],"appeal{width:100%}\n.",[1],"twiceShowClass{font-size:14px;height:",[0,300],";padding:10px}\n.",[1],"overflow{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n",],undefined,{path:"./pages/noTestAppeal/index.wxss"});
}