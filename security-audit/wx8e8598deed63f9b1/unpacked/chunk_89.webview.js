$gwx_XC_96=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_96 || [];
function gz$gwx_XC_96_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_96_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_96_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_96_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'loginBox'])
Z([3,'background'])
Z([3,'aspectFill'])
Z([3,'https://cppu.xtotoro.com/longmao/sunrunwx/loginbg.png'])
Z([3,'mainBox'])
Z([3,'fieldbox'])
Z([3,'showSchoolPicker'])
Z([3,'fieldcustom'])
Z([3,'fieldinputcustom'])
Z([3,'所在学校'])
Z([3,'fieldlabelcustom'])
Z([[7],[3,'schoolName']])
Z([3,'请选择学校'])
Z([3,'margin:10rpx;'])
Z([3,'hideSchoolPopup'])
Z([3,'bottom'])
Z([[7],[3,'showSchoolPopup']])
Z([3,'onSearchSchool'])
Z([3,'搜索学校名称'])
Z([[7],[3,'schoolSearchKeyword']])
Z(z[14])
Z([3,'onConfirmSchool'])
Z([[7],[3,'filteredSchoolList']])
Z([3,'name'])
Z([3,'inputChange'])
Z(z[7])
Z(z[8])
Z([3,'学生证号'])
Z(z[10])
Z([[7],[3,'snCode']])
Z([3,'请输入学生证号'])
Z([3,'margin-bottom:10px;'])
Z([[2,'&&'],[[7],[3,'ishaveStudent']],[[2,'!'],[[7],[3,'ismessageCode']]]])
Z(z[24])
Z(z[7])
Z(z[8])
Z([3,'学生姓名'])
Z(z[10])
Z([[7],[3,'studentName']])
Z([3,'请输入学生姓名'])
Z(z[13])
Z([[2,'&&'],[[7],[3,'ishaveStudent']],[[7],[3,'ismessageCode']]])
Z(z[24])
Z(z[7])
Z(z[8])
Z([3,'手机号'])
Z(z[10])
Z([[7],[3,'phoneNumber']])
Z([3,'请输入手机号'])
Z(z[13])
Z([3,'number'])
Z(z[41])
Z(z[24])
Z(z[7])
Z(z[8])
Z([3,'短信验证码'])
Z(z[10])
Z([[7],[3,'messageCode']])
Z([3,'请输入短信验证码'])
Z([3,'sendMessage'])
Z([3,'code-button'])
Z([3,'button'])
Z([a,[[2,'?:'],[[7],[3,'waitingCode']],[[7],[3,'waiteTime']],[1,'发送验证码']],[[2,'?:'],[[7],[3,'waitingCode']],[1,'s'],[1,'']]])
Z([[7],[3,'ishaveStudent']])
Z([3,'redirect'])
Z([3,'login-button'])
Z([a,[3,'background:'],[[2,'?:'],[[7],[3,'confirmable']],[1,'#0B7BFBFF'],[1,'#D8D8D8']],[3,';color:white;width:100%;']])
Z([3,'登 录'])
Z([[2,'!'],[[7],[3,'ishaveStudent']]])
Z([3,'gethaveStudent'])
Z(z[65])
Z([a,z[66][1],[[2,'?:'],[[7],[3,'nextconfirmable']],[1,'#0B7BFBFF'],[1,'#D8D8D8']],z[66][3]])
Z([3,'下一步'])
Z([3,'closeDialogSchool'])
Z([3,'confirmDialogSchool'])
Z([[7],[3,'dialogModalShow']])
Z([3,'标题'])
Z([3,'当前学号暂未在系统内绑定，请联系管理员进行绑定。'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_96_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_96_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_96=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_96=true;
var x=['./pages/login/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_96_1()
var tQBC=_n('view')
_rz(z,tQBC,'class',0,e,s,gg)
var eRBC=_mz(z,'image',['class',1,'mode',1,'src',2],[],e,s,gg)
_(tQBC,eRBC)
var bSBC=_n('view')
_rz(z,bSBC,'class',4,e,s,gg)
var oTBC=_n('view')
_rz(z,oTBC,'class',5,e,s,gg)
var oZBC=_mz(z,'van-field',['center',-1,'clearable',-1,'readonly',-1,'useButtonSlot',-1,'bindtap',6,'customClass',1,'inputClass',2,'label',3,'labelClass',4,'value',5,'placeholder',6,'style',7],[],e,s,gg)
oZBC.rawAttr={"model:value":"{{schoolName}}",};_(oTBC,oZBC)
var c1BC=_mz(z,'van-popup',['round',-1,'bind:close',14,'position',1,'show',2],[],e,s,gg)
var o2BC=_mz(z,'van-search',['bind:change',17,'placeholder',1,'value',2],[],e,s,gg)
_(c1BC,o2BC)
var l3BC=_mz(z,'van-picker',['showToolbar',-1,'bind:cancel',20,'bind:confirm',1,'columns',2,'valueKey',3],[],e,s,gg)
_(c1BC,l3BC)
_(oTBC,c1BC)
var a4BC=_mz(z,'van-fieldlogin',['bindinput',24,'customClass',1,'inputClass',2,'label',3,'labelClass',4,'value',5,'placeholder',6,'style',7],[],e,s,gg)
a4BC.rawAttr={"model:value":"{{snCode}}",};_(oTBC,a4BC)
var xUBC=_v()
_(oTBC,xUBC)
if(_oz(z,32,e,s,gg)){xUBC.wxVkey=1
var t5BC=_mz(z,'van-field',['bindinput',33,'customClass',1,'inputClass',2,'label',3,'labelClass',4,'value',5,'placeholder',6,'style',7],[],e,s,gg)
t5BC.rawAttr={"model:value":"{{studentName}}",};_(xUBC,t5BC)
}
var oVBC=_v()
_(oTBC,oVBC)
if(_oz(z,41,e,s,gg)){oVBC.wxVkey=1
var e6BC=_mz(z,'van-field',['bindinput',42,'customClass',1,'inputClass',2,'label',3,'labelClass',4,'value',5,'placeholder',6,'style',7,'type',8],[],e,s,gg)
e6BC.rawAttr={"model:value":"{{phoneNumber}}",};_(oVBC,e6BC)
}
var fWBC=_v()
_(oTBC,fWBC)
if(_oz(z,51,e,s,gg)){fWBC.wxVkey=1
var b7BC=_mz(z,'van-field',['center',-1,'clearable',-1,'useButtonSlot',-1,'bindinput',52,'customClass',1,'inputClass',2,'label',3,'labelClass',4,'value',5,'placeholder',6],[],e,s,gg)
b7BC.rawAttr={"model:value":"{{messageCode}}",};var o8BC=_mz(z,'view',['bindtap',59,'class',1,'slot',2],[],e,s,gg)
var x9BC=_oz(z,62,e,s,gg)
_(o8BC,x9BC)
_(b7BC,o8BC)
_(fWBC,b7BC)
}
var cXBC=_v()
_(oTBC,cXBC)
if(_oz(z,63,e,s,gg)){cXBC.wxVkey=1
var o0BC=_mz(z,'button',['bindtap',64,'class',1,'style',2],[],e,s,gg)
var fACC=_oz(z,67,e,s,gg)
_(o0BC,fACC)
_(cXBC,o0BC)
}
var hYBC=_v()
_(oTBC,hYBC)
if(_oz(z,68,e,s,gg)){hYBC.wxVkey=1
var cBCC=_mz(z,'button',['bindtap',69,'class',1,'style',2],[],e,s,gg)
var hCCC=_oz(z,72,e,s,gg)
_(cBCC,hCCC)
_(hYBC,cBCC)
}
xUBC.wxXCkey=1
xUBC.wxXCkey=3
oVBC.wxXCkey=1
oVBC.wxXCkey=3
fWBC.wxXCkey=1
fWBC.wxXCkey=3
cXBC.wxXCkey=1
hYBC.wxXCkey=1
_(bSBC,oTBC)
_(tQBC,bSBC)
var oDCC=_mz(z,'van-dialog',['showCancelButton',-1,'useSlot',-1,'bind:close',73,'bind:confirm',1,'show',2,'title',3],[],e,s,gg)
var cECC=_n('view')
var oFCC=_oz(z,77,e,s,gg)
_(cECC,oFCC)
_(oDCC,cECC)
_(tQBC,oDCC)
_(r,tQBC)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_96";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_96();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/login/index.wxml'] = [$gwx_XC_96, './pages/login/index.wxml'];else __wxAppCode__['pages/login/index.wxml'] = $gwx_XC_96( './pages/login/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/login/index.wxss']=setCssToHead([".",[1],"loginBox{height:100vh;position:relative}\n.",[1],"background-blobs{height:100vh;left:0;pointer-events:none;position:fixed;top:0;width:100%;z-index:0}\n.",[1],"blob{border-radius:50%;-webkit-filter:blur(60px);filter:blur(60px);opacity:.6;position:absolute}\n.",[1],"blob-1{-webkit-animation:float 8s ease-in-out infinite;animation:float 8s ease-in-out infinite;background:#a0c4ff;height:300px;left:-50px;top:-50px;width:300px}\n.",[1],"blob-2{animation:float 8s ease-in-out infinite reverse;background:#b9fbc0;bottom:-50px;height:250px;right:-50px;width:250px}\n.",[1],"mainBox{position:absolute;top:28%;width:100%}\n.",[1],"fieldbox{margin:auto;width:98%;width:90%}\n.",[1],"fieldcustom{background-color:hsla(0,0%,100%,.6)!important;border:1px solid #fff;border-radius:",[0,20],"}\n.",[1],"fieldcustom .",[1],"van-cell__title{max-width:5.2em!important;min-width:5.2em!important}\n.",[1],"fieldlabelcustom{color:#333;font-weight:600}\n.",[1],"fieldinputcustom{border-left:1px solid hsla(0,0%,60%,.295)!important;padding-left:",[0,20],"!important}\n.",[1],"background{background-size:100% 100%;height:100%;position:fixed;width:100%;z-index:-1}\n.",[1],"row-center{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row}\n.",[1],"flex1{-webkit-flex:1;flex:1}\n.",[1],"input-container{box-sizing:border-box;width:100%}\n.",[1],"input{border:",[0,0],";height:",[0,104],"}\n.",[1],"input,.",[1],"input-hint{font-family:PingFangSC-Regular,PingFang SC;font-size:",[0,32],";font-weight:400;line-height:",[0,44],"}\n.",[1],"input-hint{color:#2e2e2e;margin:0 ",[0,32],";width:",[0,160],"}\n.",[1],"input-button-container{height:",[0,106],";overflow:hidden;padding-right:",[0,32],"}\n.",[1],"divider{background:#e5e5e5;height:",[0,2],";margin-left:",[0,32],"}\n.",[1],"code-button{background-color:#0a7aff;border:2px solid #0a7aff;border-radius:",[0,15],";color:#fff;font-family:PingFangSC-Regular,PingFang SC;font-size:",[0,26],";font-weight:400;height:",[0,56],";line-height:",[0,50],";text-align:center;width:",[0,168],"}\n.",[1],"login-button{border-radius:",[0,50],";color:#fff;height:",[0,90],";line-height:",[0,90],";margin:",[0,100]," auto;width:80%}\n.",[1],"login-button::after{border:0;border-radius:",[0,50],"}\n",],undefined,{path:"./pages/login/index.wxss"});
}