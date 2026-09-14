$gwx_XC_107=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_107 || [];
function gz$gwx_XC_107_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_107_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_107_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_107_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-container'])
Z([3,'myMap'])
Z([[7],[3,'latitude']])
Z([[7],[3,'longitude']])
Z([[7],[3,'markers']])
Z([[7],[3,'polyline']])
Z([1,17])
Z([3,'width:100%;height:100vh;'])
Z([3,'glass-sheet fade-in-up'])
Z([3,'drag-handle-bar'])
Z([3,'drag-handle'])
Z([3,'padding-lr padding-bottom'])
Z([3,'flex justify-between align-start margin-bottom'])
Z([3,'flex align-center margin-bottom-xs'])
Z([3,'type-icon'])
Z([[2,'?:'],[[2,'=='],[[6],[[7],[3,'detalData']],[3,'runType']],[1,2]],[1,'https://img.icons8.com/ios-filled/50/34c759/running.png'],[1,'https://img.icons8.com/ios-filled/50/ff9500/sun.png']])
Z([3,'text-xl text-bold text-black margin-left-xs'])
Z([a,[3,'\n                            '],[[6],[[7],[3,'runTypeMap']],[[6],[[7],[3,'detalData']],[3,'runType']]],[3,'\n                        ']])
Z([3,'text-sm text-gray'])
Z([a,[[6],[[7],[3,'detalData']],[3,'date']],[3,' '],[[6],[[7],[3,'detalData']],[3,'time']],[3,' ~ '],[[6],[[7],[3,'detalData']],[3,'endTime']]])
Z([3,'text-right'])
Z([a,[3,'status-badge '],[[2,'?:'],[[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'detalData']],[3,'scorePassType']],[1,1]],[[2,'=='],[[6],[[7],[3,'detalData']],[3,'scorePassType']],[1,2]]],[[2,'=='],[[6],[[7],[3,'detalData']],[3,'scorePassType']],[1,3]]],[1,'bg-green-light text-green'],[1,'bg-red-light text-red']]])
Z([a,[[2,'||'],[[6],[[7],[3,'SetValue']],[[6],[[7],[3,'detalData']],[3,'scorePassType']]],[1,'- -']]])
Z([[2,'!='],[[6],[[7],[3,'detalData']],[3,'scorePassType']],[1,'0']])
Z([3,'status-badge bg-red-light text-red'])
Z([3,'warning-o'])
Z([a,[[6],[[7],[3,'item']],[3,'scorePassRemark']],z[19][2]])
Z([3,'mileage-section border-bottom'])
Z([3,'flex align-baseline'])
Z([3,'hero-number din-font'])
Z([a,[[6],[[7],[3,'detalData']],[3,'mileage']]])
Z([3,'text-xl text-gray margin-left-sm'])
Z([3,'km'])
Z([3,'grid-stats margin-top'])
Z([3,'stat-item'])
Z([3,'flex align-center text-gray text-xs margin-bottom-xs'])
Z([3,'mini-icon'])
Z([3,'https://img.icons8.com/ios/50/8e8e93/speed.png'])
Z([3,'平均时速'])
Z([3,'stat-value din-font'])
Z([a,[[6],[[7],[3,'detalData']],[3,'avgSpeed']]])
Z(z[34])
Z(z[35])
Z(z[36])
Z([3,'https://img.icons8.com/ios/50/8e8e93/clock--v1.png'])
Z([3,'用时'])
Z(z[39])
Z([a,[[6],[[7],[3,'detalData']],[3,'usedTime']]])
Z(z[34])
Z(z[35])
Z(z[36])
Z([3,'https://img.icons8.com/ios/50/8e8e93/timer.png'])
Z([3,'配速'])
Z(z[39])
Z([a,[[6],[[7],[3,'detalData']],[3,'avgPace']]])
Z(z[34])
Z(z[35])
Z(z[36])
Z([3,'https://img.icons8.com/?size\x3d100\x26id\x3d3723\x26format\x3dpng\x26color\x3d000000'])
Z([3,'拟合度'])
Z(z[39])
Z([a,[[6],[[7],[3,'detalData']],[3,'trajectorySimilary']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_107_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_107_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_107=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_107=true;
var x=['./pages/scoreCloud/scoreCloudInfo.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_107_1()
var o6BD=_n('view')
_rz(z,o6BD,'class',0,e,s,gg)
var c7BD=_mz(z,'map',['showLocation',-1,'id',1,'latitude',1,'longitude',2,'markers',3,'polyline',4,'scale',5,'style',6],[],e,s,gg)
_(o6BD,c7BD)
var o8BD=_n('view')
_rz(z,o8BD,'class',8,e,s,gg)
var l9BD=_n('view')
_rz(z,l9BD,'class',9,e,s,gg)
var a0BD=_n('view')
_rz(z,a0BD,'class',10,e,s,gg)
_(l9BD,a0BD)
_(o8BD,l9BD)
var tACD=_n('view')
_rz(z,tACD,'class',11,e,s,gg)
var eBCD=_n('view')
_rz(z,eBCD,'class',12,e,s,gg)
var bCCD=_n('view')
var oDCD=_n('view')
_rz(z,oDCD,'class',13,e,s,gg)
var xECD=_mz(z,'image',['class',14,'src',1],[],e,s,gg)
_(oDCD,xECD)
var oFCD=_n('text')
_rz(z,oFCD,'class',16,e,s,gg)
var fGCD=_oz(z,17,e,s,gg)
_(oFCD,fGCD)
_(oDCD,oFCD)
_(bCCD,oDCD)
var cHCD=_n('text')
_rz(z,cHCD,'class',18,e,s,gg)
var hICD=_oz(z,19,e,s,gg)
_(cHCD,hICD)
_(bCCD,cHCD)
_(eBCD,bCCD)
var oJCD=_n('view')
_rz(z,oJCD,'class',20,e,s,gg)
var oLCD=_n('view')
_rz(z,oLCD,'class',21,e,s,gg)
var lMCD=_oz(z,22,e,s,gg)
_(oLCD,lMCD)
_(oJCD,oLCD)
var cKCD=_v()
_(oJCD,cKCD)
if(_oz(z,23,e,s,gg)){cKCD.wxVkey=1
var aNCD=_n('view')
_rz(z,aNCD,'class',24,e,s,gg)
var tOCD=_n('van-icon')
_rz(z,tOCD,'name',25,e,s,gg)
_(aNCD,tOCD)
var ePCD=_oz(z,26,e,s,gg)
_(aNCD,ePCD)
_(cKCD,aNCD)
}
cKCD.wxXCkey=1
cKCD.wxXCkey=3
_(eBCD,oJCD)
_(tACD,eBCD)
var bQCD=_n('view')
_rz(z,bQCD,'class',27,e,s,gg)
var oRCD=_n('view')
_rz(z,oRCD,'class',28,e,s,gg)
var xSCD=_n('text')
_rz(z,xSCD,'class',29,e,s,gg)
var oTCD=_oz(z,30,e,s,gg)
_(xSCD,oTCD)
_(oRCD,xSCD)
var fUCD=_n('text')
_rz(z,fUCD,'class',31,e,s,gg)
var cVCD=_oz(z,32,e,s,gg)
_(fUCD,cVCD)
_(oRCD,fUCD)
_(bQCD,oRCD)
_(tACD,bQCD)
var hWCD=_n('view')
_rz(z,hWCD,'class',33,e,s,gg)
var oXCD=_n('view')
_rz(z,oXCD,'class',34,e,s,gg)
var cYCD=_n('view')
_rz(z,cYCD,'class',35,e,s,gg)
var oZCD=_mz(z,'image',['class',36,'src',1],[],e,s,gg)
_(cYCD,oZCD)
var l1CD=_oz(z,38,e,s,gg)
_(cYCD,l1CD)
_(oXCD,cYCD)
var a2CD=_n('text')
_rz(z,a2CD,'class',39,e,s,gg)
var t3CD=_oz(z,40,e,s,gg)
_(a2CD,t3CD)
_(oXCD,a2CD)
_(hWCD,oXCD)
var e4CD=_n('view')
_rz(z,e4CD,'class',41,e,s,gg)
var b5CD=_n('view')
_rz(z,b5CD,'class',42,e,s,gg)
var o6CD=_mz(z,'image',['class',43,'src',1],[],e,s,gg)
_(b5CD,o6CD)
var x7CD=_oz(z,45,e,s,gg)
_(b5CD,x7CD)
_(e4CD,b5CD)
var o8CD=_n('text')
_rz(z,o8CD,'class',46,e,s,gg)
var f9CD=_oz(z,47,e,s,gg)
_(o8CD,f9CD)
_(e4CD,o8CD)
_(hWCD,e4CD)
var c0CD=_n('view')
_rz(z,c0CD,'class',48,e,s,gg)
var hADD=_n('view')
_rz(z,hADD,'class',49,e,s,gg)
var oBDD=_mz(z,'image',['class',50,'src',1],[],e,s,gg)
_(hADD,oBDD)
var cCDD=_oz(z,52,e,s,gg)
_(hADD,cCDD)
_(c0CD,hADD)
var oDDD=_n('text')
_rz(z,oDDD,'class',53,e,s,gg)
var lEDD=_oz(z,54,e,s,gg)
_(oDDD,lEDD)
_(c0CD,oDDD)
_(hWCD,c0CD)
var aFDD=_n('view')
_rz(z,aFDD,'class',55,e,s,gg)
var tGDD=_n('view')
_rz(z,tGDD,'class',56,e,s,gg)
var eHDD=_mz(z,'image',['class',57,'src',1],[],e,s,gg)
_(tGDD,eHDD)
var bIDD=_oz(z,59,e,s,gg)
_(tGDD,bIDD)
_(aFDD,tGDD)
var oJDD=_n('text')
_rz(z,oJDD,'class',60,e,s,gg)
var xKDD=_oz(z,61,e,s,gg)
_(oJDD,xKDD)
_(aFDD,oJDD)
_(hWCD,aFDD)
_(tACD,hWCD)
_(o8BD,tACD)
_(o6BD,o8BD)
_(r,o6BD)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_107";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_107();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/scoreCloud/scoreCloudInfo.wxml'] = [$gwx_XC_107, './pages/scoreCloud/scoreCloudInfo.wxml'];else __wxAppCode__['pages/scoreCloud/scoreCloudInfo.wxml'] = $gwx_XC_107( './pages/scoreCloud/scoreCloudInfo.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/scoreCloud/scoreCloudInfo.wxss']=setCssToHead(["body{font-family:-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Segoe UI,Arial,Roboto,PingFang SC,sans-serif;overflow:hidden}\n.",[1],"page-container{height:100vh;position:relative;width:100%}\n.",[1],"nav-mask{background:linear-gradient(180deg,hsla(0,0%,100%,.8),transparent);height:",[0,180],";pointer-events:none;top:0;z-index:10}\n.",[1],"glass-sheet,.",[1],"nav-mask{left:0;position:fixed;width:100%}\n.",[1],"glass-sheet{background:hsla(0,0%,100%,.9);border-radius:",[0,40]," ",[0,40]," 0 0;border-top:",[0,1]," solid hsla(0,0%,100%,.8);bottom:0;box-shadow:0 ",[0,-10]," ",[0,40]," rgba(0,0,0,.08);padding-bottom:calc(",[0,30]," + env(safe-area-inset-bottom));z-index:100}\n.",[1],"drag-handle-bar{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;height:",[0,40],";-webkit-justify-content:center;justify-content:center;width:100%}\n.",[1],"drag-handle{background:#e5e5ea;border-radius:",[0,10],";height:",[0,10],";width:",[0,80],"}\n.",[1],"type-icon{height:",[0,40],";width:",[0,40],"}\n.",[1],"mini-icon{height:",[0,24],";margin-right:",[0,6],";opacity:.6;width:",[0,24],"}\n@font-face{font-family:DINPro-Regular;src:url(\x22https://cppu.xtotoro.com/longmao/sunrunwx/font/DINPro-Regular.otf\x22)}\n.",[1],"din-font{font-family:DINPro-Regular,-apple-system,sans-serif}\n.",[1],"hero-number{font-size:",[0,100],";letter-spacing:-2px;line-height:1}\n.",[1],"hero-number,.",[1],"stat-value{color:#1c1c1e;font-weight:600}\n.",[1],"stat-value{font-size:",[0,36],"}\n.",[1],"status-badge{-webkit-align-items:center;align-items:center;border-radius:",[0,100],";display:-webkit-inline-flex;display:inline-flex;font-size:",[0,22],";font-weight:600;padding:",[0,6]," ",[0,16],"}\n.",[1],"bg-red-light{background:rgba(255,59,48,.1)}\n.",[1],"bg-green-light{background:rgba(52,199,89,.1)}\n.",[1],"mileage-section{border-bottom:",[0,1]," solid rgba(0,0,0,.05);padding-bottom:",[0,30],"}\n.",[1],"grid-stats{-webkit-justify-content:space-between;justify-content:space-between}\n.",[1],"grid-stats,.",[1],"stat-item{display:-webkit-flex;display:flex}\n.",[1],"stat-item{-webkit-flex:1;flex:1;-webkit-flex-direction:column;flex-direction:column}\n.",[1],"flex{display:-webkit-flex;display:flex}\n.",[1],"justify-between{-webkit-justify-content:space-between;justify-content:space-between}\n.",[1],"align-center{-webkit-align-items:center;align-items:center}\n.",[1],"align-start{-webkit-align-items:flex-start;align-items:flex-start}\n.",[1],"align-baseline{-webkit-align-items:baseline;align-items:baseline}\n.",[1],"text-right{text-align:right}\n.",[1],"margin-bottom{margin-bottom:",[0,30],"}\n.",[1],"margin-bottom-xs{margin-bottom:",[0,10],"}\n.",[1],"margin-top{margin-top:",[0,30],"}\n.",[1],"margin-left-xs{margin-left:",[0,10],"}\n.",[1],"margin-left-sm{margin-left:",[0,20],"}\n.",[1],"padding-lr{padding-left:",[0,40],";padding-right:",[0,40],"}\n.",[1],"text-xl{font-size:",[0,36],"}\n.",[1],"text-sm{font-size:",[0,26],"}\n.",[1],"text-xs{font-size:",[0,22],"}\n.",[1],"text-bold{font-weight:600}\n.",[1],"text-black{color:#1c1c1e}\n.",[1],"text-gray{color:#8e8e93}\n.",[1],"text-red{color:#ff3b30}\n.",[1],"text-green{color:#34c759}\n.",[1],"fade-in-up{-webkit-animation:fadeInUp .5s cubic-bezier(.16,1,.3,1) forwards;animation:fadeInUp .5s cubic-bezier(.16,1,.3,1) forwards;-webkit-transform:translateY(100%);transform:translateY(100%)}\n@-webkit-keyframes fadeInUp{to{-webkit-transform:translateY(0);transform:translateY(0)}\n}@keyframes fadeInUp{to{-webkit-transform:translateY(0);transform:translateY(0)}\n}.",[1],"user-pill-glass{background:hsla(0,0%,100%,.8);border:",[0,1]," solid hsla(0,0%,100%,.4);border-radius:",[0,32],";box-sizing:border-box;height:24px;padding:",[0,6]," ",[0,14],"}\n.",[1],"border-top-white-light{background-color:hsla(0,0%,100%,.2);height:1px;width:100%}\n.",[1],"bg-white-transparent{background-color:hsla(0,0%,100%,.15)}\n.",[1],"border-top-dashed{border-top:1px dashed hsla(0,0%,100%,.3)}\n.",[1],"text-xxl{font-size:",[0,44],"}\n.",[1],"text-md{font-size:",[0,28],"}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/scoreCloud/scoreCloudInfo.wxss:1:1)",{path:"./pages/scoreCloud/scoreCloudInfo.wxss"});
}