$gwx_XC_100=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_100 || [];
function gz$gwx_XC_100_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_100_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_100_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_100_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'circles']])
Z([3,'map-bg'])
Z([[7],[3,'enableSatellite']])
Z([3,'myMap'])
Z([[6],[[7],[3,'currentLocation']],[3,'latitude']])
Z([[6],[[7],[3,'currentLocation']],[3,'longitude']])
Z([[7],[3,'markers']])
Z([3,'17'])
Z([3,'ui-container'])
Z([[7],[3,'hasTask']])
Z([3,'glass-card header-card fade-in'])
Z([3,'margin-top:140rpx;'])
Z([3,'flex justify-between align-center margin-bottom-xs'])
Z([3,'flex align-center'])
Z([3,'text-lg text-bold text-black'])
Z([3,'早操进行中'])
Z([3,'glass-pill pill-blue'])
Z([a,[3,'签到进度 '],[[6],[[7],[3,'taskData']],[3,'dayCompSignCount']],[3,'/'],[[6],[[7],[3,'taskData']],[3,'dayNeedSignCount']]])
Z([3,'info-grid'])
Z([3,'info-item'])
Z([3,'label'])
Z([3,'打卡时段'])
Z([3,'value din-font'])
Z([a,[[6],[[7],[3,'taskData']],[3,'startTime']],[3,' - '],[[6],[[7],[3,'taskData']],[3,'endTime']]])
Z(z[19])
Z(z[20])
Z([3,'有效范围'])
Z(z[22])
Z([a,[[6],[[7],[3,'taskData']],[3,'offsetRange']],[3,'米']])
Z([3,'info-tips text-xs text-gray margin-top-xs flex align-center'])
Z([3,'cuIcon-locationfill text-orange margin-right-xs'])
Z([3,'请前往地图蓝色圆圈范围内扫码'])
Z([[2,'&&'],[[2,'!'],[[7],[3,'loading']]],[[2,'!'],[[7],[3,'hasTask']]]])
Z([3,'glass-card header-card fade-in flex justify-center align-center'])
Z([3,'mini-icon margin-right-sm'])
Z([3,'https://img.icons8.com/ios/50/999999/coffee--v1.png'])
Z([3,'opacity:0.5'])
Z([3,'text-gray'])
Z([3,'当前暂无早操任务'])
Z([3,'right-toolbar'])
Z([3,'toggleSatellite'])
Z([a,[3,'round-btn '],[[2,'?:'],[[2,'!'],[[7],[3,'isSatelliteActive']]],[1,'icon-satellite'],[1,'icon-satellite-active']]])
Z([3,'moveToLocation'])
Z([3,'round-btn icon-location margin-top-sm'])
Z([3,'aim'])
Z([3,'action-area fade-in delay-2'])
Z([3,'handleSign'])
Z([3,'sign-btn shadow-blur'])
Z([[2,'!'],[[7],[3,'hasTask']]])
Z([3,'circle-inner flex align-center justify-center'])
Z([3,'btn-content flex flex-direction align-center'])
Z([3,'#fff'])
Z([3,'font-size: 80rpx; display: block;'])
Z([3,'map-marked'])
Z([3,'text-xl text-bold text-white margin-top-sm'])
Z([3,'扫码打卡'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_100_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_100_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_100=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_100=true;
var x=['./pages/morningSign/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_100_1()
var oXTC=_mz(z,'map',['enable3D',-1,'showCompass',-1,'showLocation',-1,'circles',0,'class',1,'enableSatellite',1,'id',2,'latitude',3,'longitude',4,'markers',5,'scale',6],[],e,s,gg)
_(r,oXTC)
var lYTC=_n('view')
_rz(z,lYTC,'class',8,e,s,gg)
var aZTC=_v()
_(lYTC,aZTC)
if(_oz(z,9,e,s,gg)){aZTC.wxVkey=1
var e2TC=_mz(z,'view',['class',10,'style',1],[],e,s,gg)
var b3TC=_n('view')
_rz(z,b3TC,'class',12,e,s,gg)
var o4TC=_n('view')
_rz(z,o4TC,'class',13,e,s,gg)
var x5TC=_n('text')
_rz(z,x5TC,'class',14,e,s,gg)
var o6TC=_oz(z,15,e,s,gg)
_(x5TC,o6TC)
_(o4TC,x5TC)
_(b3TC,o4TC)
var f7TC=_n('view')
_rz(z,f7TC,'class',16,e,s,gg)
var c8TC=_oz(z,17,e,s,gg)
_(f7TC,c8TC)
_(b3TC,f7TC)
_(e2TC,b3TC)
var h9TC=_n('view')
_rz(z,h9TC,'class',18,e,s,gg)
var o0TC=_n('view')
_rz(z,o0TC,'class',19,e,s,gg)
var cAUC=_n('text')
_rz(z,cAUC,'class',20,e,s,gg)
var oBUC=_oz(z,21,e,s,gg)
_(cAUC,oBUC)
_(o0TC,cAUC)
var lCUC=_n('text')
_rz(z,lCUC,'class',22,e,s,gg)
var aDUC=_oz(z,23,e,s,gg)
_(lCUC,aDUC)
_(o0TC,lCUC)
_(h9TC,o0TC)
var tEUC=_n('view')
_rz(z,tEUC,'class',24,e,s,gg)
var eFUC=_n('text')
_rz(z,eFUC,'class',25,e,s,gg)
var bGUC=_oz(z,26,e,s,gg)
_(eFUC,bGUC)
_(tEUC,eFUC)
var oHUC=_n('text')
_rz(z,oHUC,'class',27,e,s,gg)
var xIUC=_oz(z,28,e,s,gg)
_(oHUC,xIUC)
_(tEUC,oHUC)
_(h9TC,tEUC)
_(e2TC,h9TC)
var oJUC=_n('view')
_rz(z,oJUC,'class',29,e,s,gg)
var fKUC=_n('text')
_rz(z,fKUC,'class',30,e,s,gg)
_(oJUC,fKUC)
var cLUC=_n('text')
var hMUC=_oz(z,31,e,s,gg)
_(cLUC,hMUC)
_(oJUC,cLUC)
_(e2TC,oJUC)
_(aZTC,e2TC)
}
var t1TC=_v()
_(lYTC,t1TC)
if(_oz(z,32,e,s,gg)){t1TC.wxVkey=1
var oNUC=_n('view')
_rz(z,oNUC,'class',33,e,s,gg)
var cOUC=_mz(z,'image',['class',34,'src',1,'style',2],[],e,s,gg)
_(oNUC,cOUC)
var oPUC=_n('text')
_rz(z,oPUC,'class',37,e,s,gg)
var lQUC=_oz(z,38,e,s,gg)
_(oPUC,lQUC)
_(oNUC,oPUC)
_(t1TC,oNUC)
}
var aRUC=_n('view')
_rz(z,aRUC,'class',39,e,s,gg)
var tSUC=_mz(z,'view',['bindtap',40,'class',1],[],e,s,gg)
_(aRUC,tSUC)
var eTUC=_mz(z,'view',['bindtap',42,'class',1],[],e,s,gg)
var bUUC=_n('van-icon')
_rz(z,bUUC,'name',44,e,s,gg)
_(eTUC,bUUC)
_(aRUC,eTUC)
_(lYTC,aRUC)
var oVUC=_n('view')
_rz(z,oVUC,'class',45,e,s,gg)
var xWUC=_mz(z,'button',['bindtap',46,'class',1,'disabled',2],[],e,s,gg)
var oXUC=_n('view')
_rz(z,oXUC,'class',49,e,s,gg)
var fYUC=_n('view')
_rz(z,fYUC,'class',50,e,s,gg)
var cZUC=_mz(z,'van-icon',['color',51,'customStyle',1,'name',2],[],e,s,gg)
_(fYUC,cZUC)
var h1UC=_n('view')
_rz(z,h1UC,'class',54,e,s,gg)
var o2UC=_oz(z,55,e,s,gg)
_(h1UC,o2UC)
_(fYUC,h1UC)
_(oXUC,fYUC)
_(xWUC,oXUC)
_(oVUC,xWUC)
_(lYTC,oVUC)
aZTC.wxXCkey=1
t1TC.wxXCkey=1
_(r,lYTC)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_100";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_100();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/morningSign/index.wxml'] = [$gwx_XC_100, './pages/morningSign/index.wxml'];else __wxAppCode__['pages/morningSign/index.wxml'] = $gwx_XC_100( './pages/morningSign/index.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['pages/morningSign/index.wxss']=setCssToHead(["body{height:100%;overflow:hidden;width:100%}\n.",[1],"map-bg{height:100vh;left:0;position:absolute;top:0;width:100%;z-index:1}\n.",[1],"ui-container{box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100%;-webkit-justify-content:space-between;justify-content:space-between;padding:",[0,30],";pointer-events:none;position:relative;width:100%;z-index:10}\n.",[1],"ui-container wx-button,.",[1],"ui-container wx-view{pointer-events:auto}\n.",[1],"header-card{backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);background-color:hsla(0,0%,100%,.15);border:1px solid hsla(0,0%,100%,.8);border-radius:",[0,32],";box-shadow:0 8px 12px 0 rgba(31,38,135,.15);margin-top:",[0,20],";padding:",[0,30],";width:100%}\n.",[1],"info-grid{border-top:",[0,1]," solid rgba(0,0,0,.05);margin-top:",[0,24],";padding-top:",[0,20],"}\n.",[1],"info-grid,.",[1],"info-item{display:-webkit-flex;display:flex}\n.",[1],"info-item{-webkit-flex:1;flex:1;-webkit-flex-direction:column;flex-direction:column}\n.",[1],"label{color:#8e8e93;font-size:",[0,24],"}\n.",[1],"value{color:#1c1c1e;font-size:",[0,30],";font-weight:600;margin-top:",[0,8],"}\n.",[1],"glass-pill{border-radius:",[0,8],";font-size:",[0,20],";font-weight:600;padding:",[0,6]," ",[0,16],"}\n.",[1],"pill-blue{background:rgba(0,122,255,.1);color:#007aff}\n.",[1],"right-toolbar{-webkit-align-items:center;align-items:center;bottom:",[0,340],";display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;position:absolute;right:",[0,20],";z-index:20}\n.",[1],"round-btn{background-color:#fff;background-position:50%;background-size:100% 100%;border-radius:50%;box-shadow:0 ",[0,4]," ",[0,12]," rgba(0,0,0,.15);height:",[0,90],";transition:-webkit-transform .1s;transition:transform .1s;transition:transform .1s,-webkit-transform .1s;width:",[0,90],"}\n.",[1],"round-btn:active{-webkit-transform:scale(.9);transform:scale(.9)}\n.",[1],"margin-top-sm{margin-top:",[0,30],"}\n.",[1],"icon-satellite{background-image:url(\x22https://cppu.xtotoro.com/longmao/sunrunwx/run/卫星地图.png\x22)}\n.",[1],"icon-satellite-active{background-image:url(\x22https://cppu.xtotoro.com/longmao/sunrunwx/run/卫星地图点击.png\x22)}\n.",[1],"icon-location{font-size:",[0,36],";line-height:",[0,100],";text-align:center}\n.",[1],"action-area{display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;margin-bottom:",[0,60],";width:100%}\n.",[1],"sign-btn{background:transparent;border:",[0,4]," solid hsla(0,0%,100%,.7);border-radius:50%;box-shadow:0 ",[0,16]," ",[0,40]," rgba(0,122,255,.35);height:",[0,220],";padding:0;position:relative;width:",[0,220],"}\n.",[1],"sign-btn:active{box-shadow:0 ",[0,8]," ",[0,20]," rgba(0,122,255,.3);-webkit-transform:scale(.96);transform:scale(.96)}\n.",[1],"circle-inner{background:linear-gradient(135deg,#29f19c,#02a1f9);border-radius:50%;height:100%;width:100%}\n.",[1],"circle-inner .",[1],"text-xl{margin-top:",[0,10],"}\n.",[1],"scan-icon{height:",[0,80],";width:",[0,80],"}\n.",[1],"flex{display:-webkit-flex;display:flex}\n.",[1],"flex-direction{-webkit-flex-direction:column;flex-direction:column}\n.",[1],"justify-between{-webkit-justify-content:space-between;justify-content:space-between}\n.",[1],"justify-center{-webkit-justify-content:center;justify-content:center}\n.",[1],"align-center{-webkit-align-items:center;align-items:center}\n.",[1],"text-bold{font-weight:600}\n.",[1],"text-lg{font-size:",[0,32],"}\n.",[1],"text-xl{font-size:",[0,36],"}\n.",[1],"text-xs{font-size:",[0,22],"}\n.",[1],"text-gray{color:#666}\n.",[1],"text-orange{color:#ff9500}\n.",[1],"text-white{color:#fff}\n.",[1],"text-black{color:#333}\n.",[1],"margin-bottom-xs{margin-bottom:",[0,10],"}\n.",[1],"margin-right-xs{margin-right:",[0,10],"}\n.",[1],"margin-right-sm{margin-right:",[0,20],"}\n.",[1],"margin-top-xs{margin-top:",[0,10],"}\n.",[1],"mini-icon{height:",[0,40],";width:",[0,40],"}\n.",[1],"din-font{font-family:DINPro-Regular,-apple-system,sans-serif;letter-spacing:1px}\n.",[1],"fade-in{-webkit-animation:fadeIn .6s cubic-bezier(.16,1,.3,1) forwards;animation:fadeIn .6s cubic-bezier(.16,1,.3,1) forwards}\n.",[1],"delay-2{-webkit-animation-delay:.2s;animation-delay:.2s}\n@-webkit-keyframes fadeIn{from{opacity:0;-webkit-transform:translateY(",[0,20],");transform:translateY(",[0,20],")}\nto{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}\n}@keyframes fadeIn{from{opacity:0;-webkit-transform:translateY(",[0,20],");transform:translateY(",[0,20],")}\nto{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}\n}",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/morningSign/index.wxss:1:408)",{path:"./pages/morningSign/index.wxss"});
}