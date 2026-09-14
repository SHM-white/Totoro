$gwx_XC_104 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
  return function (path, global) {
    if (typeof global === 'undefined') {
      if (typeof __GWX_GLOBAL__ === 'undefined') global = {};else global = __GWX_GLOBAL__;
    }
    if (typeof __WXML_GLOBAL__ === 'undefined') {
      __WXML_GLOBAL__ = {};
    }
    __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
    var e_ = {};
    if (typeof global.entrys === 'undefined') global.entrys = {};
    e_ = global.entrys;
    var d_ = {};
    if (typeof global.defines === 'undefined') global.defines = {};
    d_ = global.defines;
    var f_ = {};
    if (typeof global.modules === 'undefined') global.modules = {};
    f_ = global.modules || {};
    var p_ = {};
    __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {};
    __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
    __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_104 || [];
    function gz$gwx_XC_104_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_104_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_104_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_104_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[2, '=='], [[7], [3, 'motion_status']], [1, 0]]);
        Z([1, true]);
        Z([3, 'height: 45%;padding-bottom:60px;']);
        Z([3, 'bottom']);
        Z([[7], [3, 'setTaskDialog']]);
        Z([3, '1026']);
        Z([3, 'onCancelSetTask']);
        Z([3, 'onConfirmSetTask']);
        Z([[7], [3, 'taskList']]);
        Z([[7], [3, 'taskDefaultIndex']]);
        Z([3, '选择跑步任务']);
        Z([3, 'paperName']);
        Z(z[1]);
        Z(z[2]);
        Z(z[3]);
        Z([[7], [3, 'setLineDialog']]);
        Z(z[5]);
        Z([3, 'onCancelSetLine']);
        Z([3, 'onConfirmSetLine']);
        Z([[7], [3, 'columnsLine']]);
        Z([[7], [3, 'lineDefaultIndex']]);
        Z([3, '选择跑步路线']);
        Z([3, 'pointName']);
        Z([[7], [3, 'lockShow']]);
        Z([3, '9999']);
        Z([[2, '||'], [[2, '=='], [[7], [3, 'runType']], [1, 0]], [[2, '=='], [[7], [3, 'runType']], [1, 2]]]);
        Z([[7], [3, 'circles']]);
        Z([[7], [3, 'enableSatellite']]);
        Z([3, 'myMap']);
        Z([[7], [3, 'latitude']]);
        Z([[7], [3, 'longitude']]);
        Z([[7], [3, 'markers']]);
        Z([[7], [3, 'polyline']]);
        Z([1, 18]);
        Z([a, [3, 'width:100%;height:'], [[7], [3, 'screenHeight']], [3, ';']]);
        Z([3, 'position:absolute;top:8%;left:50%;transform:translate(-50%,0);width:90%;']);
        Z([[2, '==='], [[7], [3, 'locationSignalStatus']], [1, 'lost']]);
        Z([3, 'cu-item shadow no-card']);
        Z([3, 'border-radius:20px;']);
        Z([[2, '!='], [[7], [3, 'abnormalPointType']], [1, 0]]);
        Z([3, 'toggleFold']);
        Z([3, ' align-center']);
        Z([3, 'font-size:12px;margin-top:10px;padding:0 24px;']);
        Z([[7], [3, 'isFold']]);
        Z([3, 'arrow-up']);
        Z([[2, '!'], [[7], [3, 'isFold']]]);
        Z([3, 'arrow-down']);
        Z(z[43]);
        Z([[2, '=='], [[7], [3, 'runType']], [1, 0]]);
        Z([3, 'flex justify-center']);
        Z(z[0]);
        Z([[2, '=='], [[7], [3, 'motion_status']], [1, 1]]);
        Z([3, 'pauseRun']);
        Z([a, [3, 'bottoncommBox animation-'], [[7], [3, 'animation']], [3, '  margin-left pauseRunBox margin-right round lg shadow']]);
        Z([3, 'height:180rpx;padding:0 30rpx;']);
        Z([3, 'pause']);
        Z([3, 'font-size:60rpx;']);
        Z([[2, '=='], [[7], [3, 'motion_status']], [1, 2]]);
        Z([3, 'reRun']);
        Z([a, z[53][1], z[53][2], [3, '  margin-left startRunBox margin-right round lg shadow']]);
        Z(z[54]);
        Z([3, 'play']);
        Z(z[56]);
        Z([[2, '||'], [[2, '=='], [[7], [3, 'motion_status']], [1, 1]], [[2, '=='], [[7], [3, 'motion_status']], [1, 2]]]);
        Z([3, 'onTouchEnd']);
        Z([3, 'onTouchStart']);
        Z([3, 'button overBox shadow']);
        Z([3, 'stop']);
        Z(z[56]);
        Z([[2, '=='], [[7], [3, 'runType']], [1, 1]]);
        Z(z[49]);
        Z(z[0]);
        Z(z[51]);
        Z(z[57]);
        Z(z[63]);
        Z([[7], [3, 'showFaceCamera']]);
        Z([3, '10000']);
        Z([3, 'camera-container']);
        Z([[2, '!'], [[7], [3, 'isCameraReady']]]);
        Z([3, 'camera-placeholder']);
        Z([[7], [3, 'cameraInitFailed']]);
        Z([3, '#ff3b30']);
        Z([3, 'warning-o']);
        Z([3, '36px']);
        Z([3, '#007aff']);
        Z([3, '24px']);
        Z([3, 'spinner']);
        Z([[2, '&&'], [[7], [3, 'showFaceCamera']], [[7], [3, 'isCameraReady']]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_104_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_104_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_104 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_104 = true;
    var x = ['./pages/run/index.wxml'];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_104_1();
      var c6BB = _v();
      _(r, c6BB);
      if (_oz(z, 0, e, s, gg)) {
        c6BB.wxVkey = 1;
      }
      var c9BB = _mz(z, 'van-popup', ['round', -1, 'closabled', 1, 'customStyle', 1, 'position', 2, 'show', 3, 'zIndex', 4], [], e, s, gg);
      var o0BB = _mz(z, 'van-picker', ['showToolbar', -1, 'bind:cancel', 6, 'bind:confirm', 1, 'columns', 2, 'defaultIndex', 3, 'title', 4, 'valueKey', 5], [], e, s, gg);
      _(c9BB, o0BB);
      _(r, c9BB);
      var lACB = _mz(z, 'van-popup', ['round', -1, 'closabled', 12, 'customStyle', 1, 'position', 2, 'show', 3, 'zIndex', 4], [], e, s, gg);
      var aBCB = _mz(z, 'van-picker', ['showToolbar', -1, 'bind:cancel', 17, 'bind:confirm', 1, 'columns', 2, 'defaultIndex', 3, 'title', 4, 'valueKey', 5], [], e, s, gg);
      _(lACB, aBCB);
      _(r, lACB);
      var tCCB = _mz(z, 'van-overlay', ['show', 23, 'zIndex', 1], [], e, s, gg);
      _(r, tCCB);
      var h7BB = _v();
      _(r, h7BB);
      if (_oz(z, 25, e, s, gg)) {
        h7BB.wxVkey = 1;
        var eDCB = _mz(z, 'map', ['showLocation', -1, 'circles', 26, 'enableSatellite', 1, 'id', 2, 'latitude', 3, 'longitude', 4, 'markers', 5, 'polyline', 6, 'scale', 7, 'style', 8], [], e, s, gg);
        var oFCB = _n('view');
        _rz(z, oFCB, 'style', 35, e, s, gg);
        var xGCB = _v();
        _(oFCB, xGCB);
        if (_oz(z, 36, e, s, gg)) {
          xGCB.wxVkey = 1;
        }
        var oHCB = _mz(z, 'view', ['class', 37, 'style', 1], [], e, s, gg);
        var fICB = _v();
        _(oHCB, fICB);
        if (_oz(z, 39, e, s, gg)) {
          fICB.wxVkey = 1;
        }
        var cJCB = _mz(z, 'view', ['bindtap', 40, 'class', 1, 'style', 2], [], e, s, gg);
        var oLCB = _n('view');
        var cMCB = _v();
        _(oLCB, cMCB);
        if (_oz(z, 43, e, s, gg)) {
          cMCB.wxVkey = 1;
          var lOCB = _n('van-icon');
          _rz(z, lOCB, 'name', 44, e, s, gg);
          _(cMCB, lOCB);
        }
        var oNCB = _v();
        _(oLCB, oNCB);
        if (_oz(z, 45, e, s, gg)) {
          oNCB.wxVkey = 1;
          var aPCB = _n('van-icon');
          _rz(z, aPCB, 'name', 46, e, s, gg);
          _(oNCB, aPCB);
        }
        cMCB.wxXCkey = 1;
        cMCB.wxXCkey = 3;
        oNCB.wxXCkey = 1;
        oNCB.wxXCkey = 3;
        _(cJCB, oLCB);
        var hKCB = _v();
        _(cJCB, hKCB);
        if (_oz(z, 47, e, s, gg)) {
          hKCB.wxVkey = 1;
        }
        hKCB.wxXCkey = 1;
        _(oHCB, cJCB);
        fICB.wxXCkey = 1;
        _(oFCB, oHCB);
        xGCB.wxXCkey = 1;
        _(eDCB, oFCB);
        var bECB = _v();
        _(eDCB, bECB);
        if (_oz(z, 48, e, s, gg)) {
          bECB.wxVkey = 1;
        }
        var tQCB = _n('view');
        _rz(z, tQCB, 'class', 49, e, s, gg);
        var eRCB = _v();
        _(tQCB, eRCB);
        if (_oz(z, 50, e, s, gg)) {
          eRCB.wxVkey = 1;
        }
        var bSCB = _v();
        _(tQCB, bSCB);
        if (_oz(z, 51, e, s, gg)) {
          bSCB.wxVkey = 1;
          var oVCB = _mz(z, 'view', ['bindtap', 52, 'class', 1, 'style', 2], [], e, s, gg);
          var fWCB = _mz(z, 'van-icon', ['name', 55, 'style', 1], [], e, s, gg);
          _(oVCB, fWCB);
          _(bSCB, oVCB);
        }
        var oTCB = _v();
        _(tQCB, oTCB);
        if (_oz(z, 57, e, s, gg)) {
          oTCB.wxVkey = 1;
          var cXCB = _mz(z, 'view', ['bindtap', 58, 'class', 1, 'style', 2], [], e, s, gg);
          var hYCB = _mz(z, 'van-icon', ['name', 61, 'style', 1], [], e, s, gg);
          _(cXCB, hYCB);
          _(oTCB, cXCB);
        }
        var xUCB = _v();
        _(tQCB, xUCB);
        if (_oz(z, 63, e, s, gg)) {
          xUCB.wxVkey = 1;
          var oZCB = _mz(z, 'view', ['bindtouchend', 64, 'bindtouchstart', 1, 'class', 2], [], e, s, gg);
          var c1CB = _mz(z, 'van-icon', ['name', 67, 'style', 1], [], e, s, gg);
          _(oZCB, c1CB);
          _(xUCB, oZCB);
        }
        eRCB.wxXCkey = 1;
        bSCB.wxXCkey = 1;
        bSCB.wxXCkey = 3;
        oTCB.wxXCkey = 1;
        oTCB.wxXCkey = 3;
        xUCB.wxXCkey = 1;
        xUCB.wxXCkey = 3;
        _(eDCB, tQCB);
        bECB.wxXCkey = 1;
        _(h7BB, eDCB);
      }
      var o8BB = _v();
      _(r, o8BB);
      if (_oz(z, 69, e, s, gg)) {
        o8BB.wxVkey = 1;
        var o2CB = _n('view');
        _rz(z, o2CB, 'class', 70, e, s, gg);
        var l3CB = _v();
        _(o2CB, l3CB);
        if (_oz(z, 71, e, s, gg)) {
          l3CB.wxVkey = 1;
        }
        var a4CB = _v();
        _(o2CB, a4CB);
        if (_oz(z, 72, e, s, gg)) {
          a4CB.wxVkey = 1;
        }
        var t5CB = _v();
        _(o2CB, t5CB);
        if (_oz(z, 73, e, s, gg)) {
          t5CB.wxVkey = 1;
        }
        var e6CB = _v();
        _(o2CB, e6CB);
        if (_oz(z, 74, e, s, gg)) {
          e6CB.wxVkey = 1;
        }
        l3CB.wxXCkey = 1;
        a4CB.wxXCkey = 1;
        t5CB.wxXCkey = 1;
        e6CB.wxXCkey = 1;
        _(o8BB, o2CB);
      }
      var b7CB = _mz(z, 'van-overlay', ['show', 75, 'zIndex', 1], [], e, s, gg);
      var o8CB = _n('view');
      _rz(z, o8CB, 'class', 77, e, s, gg);
      var x9CB = _v();
      _(o8CB, x9CB);
      if (_oz(z, 78, e, s, gg)) {
        x9CB.wxVkey = 1;
        var fADB = _n('view');
        _rz(z, fADB, 'class', 79, e, s, gg);
        var cBDB = _v();
        _(fADB, cBDB);
        if (_oz(z, 80, e, s, gg)) {
          cBDB.wxVkey = 1;
          var hCDB = _mz(z, 'van-icon', ['color', 81, 'name', 1, 'size', 2], [], e, s, gg);
          _(cBDB, hCDB);
        } else {
          cBDB.wxVkey = 2;
          var oDDB = _mz(z, 'van-loading', ['color', 84, 'size', 1, 'type', 2], [], e, s, gg);
          _(cBDB, oDDB);
        }
        cBDB.wxXCkey = 1;
        cBDB.wxXCkey = 3;
        cBDB.wxXCkey = 3;
        _(x9CB, fADB);
      }
      var o0CB = _v();
      _(o8CB, o0CB);
      if (_oz(z, 87, e, s, gg)) {
        o0CB.wxVkey = 1;
      }
      x9CB.wxXCkey = 1;
      x9CB.wxXCkey = 3;
      o0CB.wxXCkey = 1;
      _(b7CB, o8CB);
      _(r, b7CB);
      c6BB.wxXCkey = 1;
      h7BB.wxXCkey = 1;
      h7BB.wxXCkey = 3;
      o8BB.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = {
      f: m0,
      j: [],
      i: [],
      ti: [],
      ic: []
    };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = {
          "tag": "wx-page"
        };
        root.children = [];
        g = "$gwx_XC_104";
        var main = e_[path].f;
        if (typeof global === "undefined") global = {};
        global.f = $gdc(f_[path], "", 1);
        try {
          main(env, {}, root, global);
          _tsd(root);
        } catch (err) {
          console.log(err);
        }
        ;
        g = "";
        return root;
      };
    }
  };
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_104();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/run/index.wxml'] = [$gwx_XC_104, './pages/run/index.wxml'];else __wxAppCode__['pages/run/index.wxml'] = $gwx_XC_104('./pages/run/index.wxml');
;
__wxRoute = "pages/run/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/run/index.js";
define("pages/run/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  require("../../@babel/runtime/helpers/Arrayincludes");
  var t = require("../../@babel/runtime/helpers/defineProperty"),
    e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
    a = require("../../@babel/runtime/helpers/asyncToGenerator"),
    n = s(require("../../28A8E4E60A0D562F4ECE8CE18960EFA3.js")),
    i = s(require("../../8C205DC10A0D562FEA4635C6D060EFA3.js")),
    o = (s(require("../../FAFA0EC30A0D562F9C9C66C47680EFA3.js")), s(require("../../F68288B70A0D562F90E4E0B01FD0EFA3.js")), s(require("../../4B2F30B70A0D562F2D4958B01890EFA3.js")));
  function s(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  var r = require("../../CDE443310A0D562FAB822B3611B0EFA3.js"),
    u = require("../../8D736DE50A0D562FEB1505E291D0EFA3.js"),
    c = [],
    d = 0,
    l = 0,
    h = 0,
    m = !1,
    g = 0,
    f = wx.getBackgroundAudioManager(),
    p = 0,
    x = null,
    w = null,
    C = null,
    v = null,
    T = 0,
    y = 0,
    D = 0;
  Page({
    pollingTimer: null,
    isForeground: !0,
    pendingFaceCheck: !1,
    _locationRetryCount: 0,
    _locationRetryTimer: null,
    MAX_LOCATION_RETRY: 3,
    RETRY_COOLDOWN: 1e4,
    _locationWatchTimer: null,
    LOCATION_TIMEOUT: 15e3,
    _isCheckingFaceStatus: !1,
    _faceExpireTime: 0,
    data: {
      pauseCount: 0,
      CameraConfigFlag: !1,
      cameraInitFailed: !1,
      CameraConfigpointPoleTime: 30,
      CameraConfigcameraPoleTime: 30,
      CameraConfigcameraPoleDistance: 10,
      CameraConfig: [],
      isGetCameraPolling: !0,
      currentCameraId: null,
      setLineBindtap: !1,
      setSatelliteBindtap: !1,
      setLockBindtap: !1,
      userInfo: {},
      animation: "",
      _msg: "",
      noticeBarMsg: "阳光跑任务跑步时间为",
      screenHeight: 0,
      enableSatellite: !1,
      lockShow: !1,
      setTaskDialog: !1,
      setLineDialog: !1,
      lineDefaultIndex: 0,
      linePickerZindex: 1,
      taskDefaultIndex: 0,
      taskId: "",
      pointId: "",
      taskList: [],
      columnsLine: [],
      sunrunlimiting: {},
      fitDegree: 0,
      polyline: [{
        points: [],
        color: "#07c160",
        width: 10,
        zIndex: 1
      }, {
        points: [],
        color: "#FA6400",
        width: 8,
        borderWidth: 1,
        borderColor: "#fff",
        zIndex: 2
      }],
      circles: [{
        latitude: "",
        longitude: "",
        radius: 200,
        color: "#0651f5",
        fillColor: "#0652f525"
      }],
      markers: [{
        id: 1,
        callout: {
          content: "",
          color: "#40f309",
          fontSize: 14,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "#fff",
          bgColor: "#fff",
          padding: 5,
          display: "ALWAYS",
          textAlign: "center"
        }
      }, {
        id: 2,
        callout: {
          content: "",
          color: "#f30909",
          fontSize: 14,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "#fff",
          bgColor: "#fff",
          padding: 5,
          display: "ALWAYS",
          textAlign: "center"
        }
      }, {
        id: 3,
        callout: {
          anchorY: -50,
          content: "",
          color: "#000",
          fontSize: 14,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: "#fff",
          bgColor: "#fff",
          padding: 5,
          display: "ALWAYS",
          joinCluster: !1,
          textAlign: "center"
        }
      }],
      latitude: 0,
      longitude: 0,
      allKm: "0.00",
      alldistanceM: 0,
      altitude_data: [],
      time_data: "00:00:00",
      kcal_data: "0.00",
      speed_data: "0'00\"",
      distance_data: "0.00",
      steps: 0,
      motion_status: 0,
      create_time_data: null,
      end_time_data: null,
      time_id: 0,
      points_time: 0,
      km_speed_data: [],
      km_distance_data: 0,
      runType: 0,
      scantronId: "",
      systemInfo: {},
      runPointData: {
        allCount: 0,
        nullCount: 0,
        alreadyCount: 0
      },
      abnormalPointType: 0,
      isPressing: !1,
      progressRotation: 0,
      ringSize: 180,
      progressMax: 360,
      startTime: 0,
      progressInterval: null,
      getRunPointTimes: null,
      getRunPointQuestTime: 15e3,
      isBackgroundLocating: !1,
      fastPaceFormat: "",
      slowPaceFormat: "",
      isFold: !0,
      isFaceUploading: !1,
      showFaceCamera: !1,
      isCameraReady: !1,
      faceCameraTitle: "开始打卡",
      faceCameraCountdown: 0,
      faceCameraType: 0,
      faceBase64: "",
      needRandomFaceCheck: !1,
      nextRandomDistance: 0,
      lastNotifiedDistance: 0,
      randomConfig: {
        startDistance: 200,
        checkDistance: 230,
        offsetDistance: 30
      },
      sunrunConfig: {
        sunrunPointShowOff: "1",
        sunrunStartFace: "0",
        sunrunPointRandom: "0"
      },
      noticeTitle: "",
      noticeContent: "",
      locationSignalStatus: "good",
      lastLocationTime: 0
    },
    onLoad: function (t) {
      var e = this,
        a = wx.getStorageSync("userInfo");
      this.setData({
        runType: t.runType || 0,
        userInfo: a
      }), this.setData({
        isCameraReady: !1,
        showFaceCamera: !1
      }), wx.setInnerAudioOption({
        mixWithOther: !0,
        obeyMuteSwitch: !1,
        success: function () {
          return console.log("混音模式开启成功");
        },
        fail: function (t) {
          return console.error("混音模式开启失败", t);
        }
      }), this.innerAudioContext = wx.createInnerAudioContext(), this.innerAudioContext.onError(function (t) {
        console.error("内部音频播放异常:", t.errMsg, t.errCode);
      }), this.syncServerTime().then(function () {
        e.setData({
          points_time: parseInt(e.getRealTime() / 1e3)
        });
      }), this.getSunRunConfig(), this.initAudioEvent(), this.initRun(), 0 != this.data.runType && 2 != this.data.runType || wx.startLocationUpdateBackground({
        success: function () {
          wx.onLocationChange(function (t) {
            e.isBackgroundLocating = !0, e.handleLocationChange(t);
          });
        },
        fail: function (t) {
          wx.showModal({
            title: "定位启动失败",
            content: "获取后台位置信息异常！请确保微信定位权限已设为“使用小程序期间和离开小程序后”。",
            showCancel: !0,
            confirmText: "去设置",
            success: function (t) {
              t.confirm && wx.openSetting({});
            }
          });
        }
      }), wx.offLocationChangeError(), wx.onLocationChangeError(this.handleLocationError.bind(this)), this.motionAnalyzer = new o.default({
        sampleInterval: "ui",
        enableAnalysis: !0,
        onAnalysisUpdate: function (t) {},
        onSuspicious: function (t) {
          "e_bike" === t.type || t.type;
        }
      });
    },
    getNearestPointIndex: function (t, e, a) {
      for (var n = 1 / 0, i = -1, o = 0; o < a.length; o++) {
        var s = this.getDistance(t, e, Number(a[o].latitude), Number(a[o].longitude));
        s < n && (n = s, i = o);
      }
      return i;
    },
    getRouteCompensationDistance: function (t, e, a, n, i, o) {
      var s = this.getDistance(t, e, a, n);
      if (!i || i.length < 2 || s < 5) return s;
      var r = this.getNearestPointIndex(t, e, i),
        u = this.getNearestPointIndex(a, n, i);
      if (-1 === r || -1 === u || Math.abs(r - u) <= 1) return s;
      var c = 0,
        d = 0,
        l = this.getDistance(Number(i[0].latitude), Number(i[0].longitude), Number(i[i.length - 1].latitude), Number(i[i.length - 1].longitude)) < 30;
      if (r <= u) for (var h = r; h < u; h++) c += this.getDistance(Number(i[h].latitude), Number(i[h].longitude), Number(i[h + 1].latitude), Number(i[h + 1].longitude));else if (l) {
        for (var m = r; m < i.length - 1; m++) c += this.getDistance(Number(i[m].latitude), Number(i[m].longitude), Number(i[m + 1].latitude), Number(i[m + 1].longitude));
        c += this.getDistance(Number(i[i.length - 1].latitude), Number(i[i.length - 1].longitude), Number(i[0].latitude), Number(i[0].longitude));
        for (var g = 0; g < u; g++) c += this.getDistance(Number(i[g].latitude), Number(i[g].longitude), Number(i[g + 1].latitude), Number(i[g + 1].longitude));
      } else c = 1 / 0;
      if (isFinite(c) || (c = s), isFinite(d) || (d = s), r >= u) for (var f = r; f > u; f--) d += this.getDistance(Number(i[f].latitude), Number(i[f].longitude), Number(i[f - 1].latitude), Number(i[f - 1].longitude));else if (l) {
        for (var p = r; p > 0; p--) d += this.getDistance(Number(i[p].latitude), Number(i[p].longitude), Number(i[p - 1].latitude), Number(i[p - 1].longitude));
        d += this.getDistance(Number(i[0].latitude), Number(i[0].longitude), Number(i[i.length - 1].latitude), Number(i[i.length - 1].longitude));
        for (var x = i.length - 1; x > u; x--) d += this.getDistance(Number(i[x].latitude), Number(i[x].longitude), Number(i[x - 1].latitude), Number(i[x - 1].longitude));
      } else d = 1 / 0;
      var w = 9 * o,
        C = [];
      if (c < w && C.push(c), d < w && C.push(d), C.length > 0) {
        var v = Math.min.apply(Math, C);
        return Math.max(v, s);
      }
      return s;
    },
    handleLocationError: function (t) {
      var e = this;
      console.error("持续定位出错:", t);
      var a = {
        1e3: "定位权限未开启，请前往设置授权",
        1001: "系统定位服务未开启",
        1002: "GPS信号弱，请移至室外开阔处",
        1003: "网络信号弱，定位失败",
        1004: "其他定位错误"
      }[t.errCode] || "定位异常(".concat(t.errCode, ")");
      (!this._lastLocationErrorTime || Date.now() - this._lastLocationErrorTime > 1e4) && (this._lastLocationErrorTime = Date.now(), wx.showToast({
        title: a,
        icon: "none",
        duration: 2e3
      })), 1 !== this.data.motion_status || [1e3, 1001].includes(t.errCode) || (wx.vibrateLong(), this.playAudio("https://cppu.xtotoro.com/longmao/sunrunwx/audio/定位信号弱请保持跑步结束后可申诉.mp3", !1), m ? this._hasLocationErrorOccurred = !0 : (m = !0, wx.showModal({
        title: "定位信号弱",
        content: "由于手机省电策略或信号问题，当前定位可能不准。\n\n✅ 您可以继续跑步，结束后如果成绩无效请务必通过“申诉”通道提交成绩。",
        showCancel: !1,
        confirmText: "我知道了",
        success: function () {
          e._hasLocationErrorOccurred = !0;
        }
      })));
      var n = [1002, 1003, 1004].includes(t.errCode),
        i = this._locationRetryCount < this.MAX_LOCATION_RETRY;
      n && i && (this._locationRetryTimer && clearTimeout(this._locationRetryTimer), this._locationRetryTimer = setTimeout(function () {
        e._locationRetryCount++, wx.stopLocationUpdate({
          success: function () {
            wx.startLocationUpdateBackground({
              success: function () {
                e._locationRetryCount = 0, wx.offLocationChange(), wx.onLocationChange(function (t) {
                  e.isBackgroundLocating = !0, e.handleLocationChange(t);
                });
              },
              fail: function (t) {
                t.errMsg && t.errMsg.includes("auth") && (e._locationRetryCount = e.MAX_LOCATION_RETRY);
              }
            });
          },
          fail: function () {
            wx.startLocationUpdateBackground();
          }
        });
      }, this.RETRY_COOLDOWN));
    },
    manualRetryLocation: function () {
      this._locationRetryCount = 0, this._locationRetryTimer && clearTimeout(this._locationRetryTimer), wx.stopLocationUpdate({
        complete: function () {
          wx.startLocationUpdateBackground({
            success: function () {
              return wx.showToast({
                title: "定位已恢复",
                icon: "success"
              });
            },
            fail: function () {
              return wx.showToast({
                title: "定位重启失败，请检查权限",
                icon: "none"
              });
            }
          });
        }
      });
    },
    startLocationWatch: function () {
      var t = this;
      this.stopLocationWatch(), this._locationWatchTimer = setInterval(function () {
        if (1 === t.data.motion_status) {
          var e = t.getRealTime() - t.data.lastLocationTime;
          if (e > t.LOCATION_TIMEOUT ? "lost" !== t.data.locationSignalStatus && (t.setData({
            locationSignalStatus: "lost"
          }), wx.showToast({
            title: "定位信号丢失，请检查后台限制",
            icon: "none",
            duration: 3e3
          })) : e > t.LOCATION_TIMEOUT / 2 && "good" === t.data.locationSignalStatus && t.setData({
            locationSignalStatus: "weak"
          }), e > 3e4) {
            var a = t;
            wx.getLocation({
              type: "gcj02",
              success: function (t) {
                return a.handleLocationChange(t);
              },
              fail: function () {
                a.playAudio("https://cppu.xtotoro.com/longmao/sunrunwx/audio/定位信号弱请保持跑步结束后可申诉.mp3", !1), wx.showToast({
                  title: "定位中断，请亮屏恢复",
                  icon: "none",
                  duration: 3e3
                });
              }
            });
          }
        }
      }, 1e4);
    },
    stopLocationWatch: function () {
      this._locationWatchTimer && (clearInterval(this._locationWatchTimer), this._locationWatchTimer = null);
    },
    syncServerTime: function () {
      return new Promise(function (t) {
        r.request({
          url: "/wxxcx/platform/camera/currentTimeMillis",
          data: {
            token: wx.getStorageSync("token")
          },
          showLoading: !1,
          success: function (e) {
            if (e && e.body) {
              var a = Number(e.body),
                n = Date.now();
              g = a - n;
            }
            t();
          },
          doFail: function () {
            t();
          }
        });
      });
    },
    getRealTime: function () {
      return Date.now() + g;
    },
    getRealDate: function () {
      return new Date(this.getRealTime());
    },
    onReady: function () {
      this.setScreenHeight();
    },
    onShow: function () {
      var t = this;
      (this.isForeground = !0, 1 === this.data.motion_status && c.length > 0 && this.setData({
        "polyline[0].points": c,
        time_data: n.default.getTime()
      }), 1 === this.data.motion_status) && (this._locationRetryCount = 0, this.getRealTime() - this.data.lastLocationTime > this.LOCATION_TIMEOUT && (console.log("检测到后台定位已死，执行前台强制心跳复苏！"), wx.showToast({
        title: "正在恢复GPS信号...",
        icon: "loading",
        duration: 2e3
      }), wx.stopLocationUpdate({
        complete: function () {
          wx.startLocationUpdateBackground({
            success: function () {
              wx.offLocationChange(), wx.onLocationChange(function (e) {
                t.isBackgroundLocating = !0, t.handleLocationChange(e);
              }), t.setData({
                locationSignalStatus: "good"
              });
            },
            fail: function () {
              wx.getLocation({
                type: "gcj02",
                success: function (e) {
                  return t.handleLocationChange(e);
                }
              });
            }
          });
        }
      })));
      this.checkLocation(), this.pendingFaceCheck && (this.pendingFaceCheck = !1, 1 === this.data.faceCameraType ? this.triggerRandomFaceCheck() : 0 === this.data.faceCameraType && (this.setData({
        showFaceCamera: !0
      }), C && clearTimeout(C), C = setTimeout(function () {
        t.data.showFaceCamera && t.setData({
          isCameraReady: !0
        });
      }, 300)));
    },
    onHide: function () {
      this.isForeground = !1, this.data.showFaceCamera && (C && clearTimeout(C), this.setData({
        isCameraReady: !1,
        showFaceCamera: !1
      }), this.pendingFaceCheck = !0, this.stopFaceWarning());
    },
    onUnload: function () {
      n.default.end(), n.default.reset(), this.stopCameraPolling(), this.stopFaceWarning(), this.data.time_id && clearInterval(this.data.time_id), this.data.getRunPointTimes && clearInterval(this.data.getRunPointTimes), this.data.progressInterval && clearInterval(this.data.progressInterval), x && clearInterval(x), w && clearInterval(w), C && clearTimeout(C), 0 != this.data.runType && 2 != this.data.runType || (wx.stopLocationUpdate(), wx.offLocationChange()), c = [], d = 0, l = 0, v = null, y = 0, T = 0, D = 0, this.setData({
        motion_status: 2,
        pauseCount: 0
      }), i.default.reset(), this._faceExpireTime = 0, this._locationRetryTimer && (clearTimeout(this._locationRetryTimer), this._locationRetryTimer = null), this._locationRetryCount = 0, this.motionAnalyzer && this.motionAnalyzer.stop(), this.stopLocationWatch(), wx.offLocationChange(), wx.offLocationChangeError();
    },
    showNoticeDetail: function () {
      this.vibrateFunc(1);
      this.setData({
        noticeTitle: "⚠️ 升级风险提示",
        noticeContent: "..."
      });
      var t = this.selectComponent("#noticeModal");
      t && t.show();
    },
    getSunRunConfig: function () {
      var t = this;
      r.request({
        url: "/wxxcx/platform/sunrunFace/selectSunRunStartConfiguration",
        data: {
          snCode: this.data.userInfo.snCode,
          token: wx.getStorageSync("token")
        },
        success: function (e) {
          e && (t.setData({
            sunrunConfig: {
              sunrunPointShowOff: e.body.sunrunPointShowOff || "1",
              sunrunStartFace: e.body.sunrunStartFace || "0",
              sunrunPointRandom: e.body.sunrunPointRandom || "0"
            }
          }), "1" == e.body.sunrunPointRandom && t.setData({
            needRandomFaceCheck: !0
          }));
        }
      });
    },
    handleLocationChange: function (t) {
      if (1 === this.data.motion_status) {
        var e = this.getRealTime();
        if (this.setData({
          lastLocationTime: e,
          locationSignalStatus: "good"
        }), console.log("result", t), t.mockGps || t.isMock) return wx.showToast({
          title: "警告：检测到虚拟定位插件，数据已阻断！",
          icon: "none"
        }), void this.setData({
          abnormalPointType: 1
        });
        if (t.accuracy > 100) c.length < 5 && e - D > 5e3 && (wx.showToast({
          title: "正在搜索高精度GPS信号，请在开阔处走动...",
          icon: "none"
        }), D = e);else if (t.accuracy > 80) console.warn("精度极差，丢弃该点位", t.accuracy);else {
          var a = t.latitude,
            n = t.longitude,
            i = 0,
            o = {
              latitude: a,
              longitude: n,
              time: this.getCurrentTime(),
              timestamp: e
            };
          if (0 == this.data.runType && this.checkCameraConfig(t), !v) return v = o, c.push(o), void (this.isForeground && this.setData({
            "polyline[0].points": c
          }));
          var s = (e - v.timestamp) / 1e3;
          if (s > 0) {
            var r = 0,
              u = 0 == this.data.runType ? this.data.columnsLine[this.data.lineDefaultIndex] : null;
            r = s > 2 && u && u.pointList ? this.getRouteCompensationDistance(v.latitude, v.longitude, t.latitude, t.longitude, u.pointList, s) : this.getDistance(v.latitude, v.longitude, t.latitude, t.longitude);
            var m = 0,
              g = !1;
            if ((m = s < 1.2 ? t.speed && t.speed >= 0 ? t.speed : 0 : r / s) > 12 || t.accuracy > 50 && m > 8) return void console.warn("发生严重瞬间平移飞点，彻底丢弃");
            if ((m > 6 || t.accuracy > 35 && m > 4.5) && (g = !0), g && ++y >= 5 && (g = !1, y = 0), g) {
              var f = c[c.length - 1];
              a = .1 * t.latitude + .9 * f.latitude, n = .1 * t.longitude + .9 * f.longitude, o.latitude = a, o.longitude = n, i = 0;
            } else y = 0, (i = r) < 1.5 ? i = 0 : v = o;
          }
          c.push(o);
          var p = (parseFloat(this.data.alldistanceM) || 0) + i,
            x = (p / 1e3).toFixed(2);
          this.data.alldistanceM = p, this.data.allKm = x, this.data.distance_data = x, 0 == this.data.runType && (!(this.data.needRandomFaceCheck && p >= this.data.nextRandomDistance) || this.data.showFaceCamera || this.data.isFaceUploading || this.pendingFaceCheck || this._isFaceFlowActive || (this._isFaceFlowActive = !0, this.checkFaceMiddleStatusAndTrigger(p)), p - h >= 15 && (h = p, this.checkRouteDeviation(a, n)), p - l >= 100 && (l = p, this.checkLiveFitDegree()));
          var w = {
            longitude: n,
            latitude: a,
            distance_data: x,
            km_distance_data: x,
            alldistanceM: p,
            allKm: x,
            speed_data: this.calSpeed(x, this.data.time_data),
            kcal_data: this.CalMotionCalories(x)
          };
          this.isForeground && (this.data.showFaceCamera ? (delete w["polyline[0].points"], this.setData(w)) : (c.length < 5 || e - T > 2500) && (w["polyline[0].points"] = c, this.setData(w), T = e)), this.playAudioLogicFun(), e - d > 3e4 && (this.setLocalStorageRunDataAsync(), d = e);
        }
      }
    },
    playAudioLogicFun: function () {
      var t = this.data.alldistanceM,
        e = t / 1e3,
        a = this.data.sunrunlimiting.mileage,
        n = 1e3 * a;
      void 0 === this._lastAnnouncedMeter && (this._lastAnnouncedMeter = 0);
      for (var i = 0, o = [500, 1e3, 2e3, 3e3, 4e3, 5e3]; i < o.length; i++) {
        var s = o[i];
        if (t >= s && this._lastAnnouncedMeter < s) if (500 === s) this.playAudio("https://cppu.xtotoro.com/longmao/sunrunwx/audio/500m.mp3", !1);else if (1e3 === s) this.playAudio("https://cppu.xtotoro.com/longmao/sunrunwx/audio/1km.mp3", !1);else {
          var r = s / 1e3;
          this.playAudio("https://cppu.xtotoro.com/longmao/sunrunwx/audio/".concat(r, "km.mp3"), !1);
        }
      }
      if (this._lastAnnouncedMeter = Math.floor(t), 1 === this.data.motion_status) {
        var u = this.getRealTime();
        if (!this._lastPaceWarningTime || u - this._lastPaceWarningTime > 12e4) {
          var c = this.data.time_data.split(":").map(Number),
            d = 3600 * c[0] + 60 * c[1] + c[2];
          if (t >= 100) {
            var l = d / e,
              h = this.data.sunrunlimiting.minTime,
              m = this.data.sunrunlimiting.maxTime;
            if (a > 0) {
              var g = h / a * 60;
              l > m / a * 60 ? (this.playAudio("https://cppu.xtotoro.com/longmao/sunrunwx/audio/配速慢.mp3", !1), this._lastPaceWarningTime = u) : l < g && (this.playAudio("https://cppu.xtotoro.com/longmao/sunrunwx/audio/配速快.mp3", !1), this._lastPaceWarningTime = u);
            }
          }
        }
      }
      if (n > 0) {
        var f = n - t;
        f <= 200 && f > 0 && !this._hasAnnouncedNearEnd && (this._hasAnnouncedNearEnd = !0, this.playAudio("https://cppu.xtotoro.com/longmao/sunrunwx/audio/还剩200.mp3", !1));
      }
    },
    retryInitCamera: function () {
      var t = this;
      wx.showLoading({
        title: "正在唤醒...",
        mask: !0
      }), this.setData({
        isCameraReady: !1,
        cameraInitFailed: !1
      }), setTimeout(function () {
        wx.hideLoading(), t.data.showFaceCamera && t.setData({
          isCameraReady: !0
        });
      }, 500);
    },
    cameraError: function (t) {
      console.error("相机初始化失败，可能被占用:", t), this.setData({
        isCameraReady: !1,
        cameraInitFailed: !0
      }), wx.showToast({
        title: "相机权限被拒绝，请开启！",
        icon: "none"
      });
    },
    cancelFaceCamera: function () {
      C && clearTimeout(C), this.setData({
        isCameraReady: !1,
        showFaceCamera: !1,
        isFaceUploading: !1,
        cameraInitFailed: !1
      }), this.pendingFaceCheck = !1, this.stopFaceWarning(), this._faceExpireTime = 0, 1 === this.data.faceCameraType && this.setNextRandomDistance(!1);
    },
    takeFacePhoto: function () {
      if (!this.data.isFaceUploading) {
        this.stopFaceWarning();
        var t = wx.createCameraContext(),
          e = this;
        e.setData({
          isFaceUploading: !0
        }), t.takePhoto({
          quality: "normal",
          success: function (t) {
            wx.showLoading({
              title: "人脸识别中...",
              mask: !0
            }), C && clearTimeout(C), e.setData({
              isCameraReady: !1,
              showFaceCamera: !1
            }), e.pendingFaceCheck = !1, wx.getFileSystemManager().readFile({
              filePath: t.tempImagePath,
              encoding: "base64",
              success: function (t) {
                var a = t.data;
                0 === e.data.faceCameraType ? e.checkStartFace(a) : e.checkMiddleFace(a);
              },
              fail: function () {
                e.setData({
                  isFaceUploading: !1
                }), wx.hideLoading(), wx.showToast({
                  title: "读取图片失败",
                  icon: "none"
                }), e.retryShowCamera();
              }
            });
          },
          fail: function () {
            e.setData({
              isFaceUploading: !1
            }), wx.showToast({
              title: "拍照失败，请重试",
              icon: "none"
            }), 1 === e.data.faceCameraType && e.showRandomFaceCameraOnly();
          }
        });
      }
    },
    checkStartFace: function (t) {
      var e = this;
      r.request({
        url: "/wxxcx/platform/sunrunFace/checkFaceStartSunRun",
        data: {
          faceData: t,
          snCode: this.data.userInfo.snCode,
          token: wx.getStorageSync("token")
        },
        success: function (a) {
          wx.hideLoading(), e.setData({
            isFaceUploading: !1
          }), !a || "00" != a.status && 0 != a.code && "200" != a.code ? (wx.showToast({
            title: a.msg || "非本人，请重试",
            icon: "none"
          }), e.retryShowCamera()) : (e.data.faceBase64 = t, e.setData({
            showFaceCamera: !1
          }), e.realStartRun());
        },
        doFail: function () {
          wx.hideLoading(), e.setData({
            isFaceUploading: !1
          }), wx.showToast({
            title: "网络异常，请重试",
            icon: "none"
          }), e.retryShowCamera();
        }
      });
    },
    retryShowCamera: function () {
      var t = this;
      setTimeout(function () {
        t.isForeground ? 1 === t.data.faceCameraType ? t.showRandomFaceCameraOnly() : (t.setData({
          showFaceCamera: !0
        }), C && clearTimeout(C), C = setTimeout(function () {
          t.data.showFaceCamera && t.setData({
            isCameraReady: !0
          });
        }, 300)) : t.pendingFaceCheck = !0;
      }, 500);
    },
    checkFaceMiddleStatusAndTrigger: function (t) {
      var e = this;
      this._isCheckingFaceStatus || (this._isCheckingFaceStatus = !0, r.request({
        url: "/wxxcx/platform/sunrunFace/selectFaceMiddleStatus",
        data: {
          totalRun: t.toFixed(2),
          snCode: this.data.userInfo.snCode,
          scantronId: this.data.scantronId,
          token: wx.getStorageSync("token")
        },
        showLoading: !1,
        success: function (t) {
          e._isCheckingFaceStatus = !1, t && "00" == t.status && "1" == t.body ? e.triggerRandomFaceCheck() : e.setNextRandomDistance(!1);
        },
        doFail: function () {
          e._isCheckingFaceStatus = !1, e.setNextRandomDistance(!1);
        }
      }));
    },
    setNextRandomDistance: function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        e = this.data.randomConfig,
        a = e.startDistance,
        n = e.checkDistance,
        i = e.offsetDistance,
        o = 0,
        s = t ? a : this.data.nextRandomDistance > 0 ? this.data.nextRandomDistance : Number(this.data.alldistanceM) || 0,
        r = n + Math.floor(Math.random() * (i + 1));
      o = s + r, this.setData({
        nextRandomDistance: o,
        faceCameraCountdown: 0
      }), this._isFaceFlowActive = !1;
    },
    triggerRandomFaceCheck: function () {
      var t = this;
      if (!this.isForeground) return this.pendingFaceCheck = !0, this.setData({
        faceCameraType: 1
      }), this.stopFaceWarning(), this.playAudio("https://cppu.xtotoro.com/longmao/sunrunwx/audio/请进行手机打卡.mp3", !0), console.log("请进行手机打卡"), void (x = setInterval(function () {
        t.playAudio("https://cppu.xtotoro.com/longmao/sunrunwx/audio/请进行手机打卡.mp3", !0);
      }, 5e3));
      this.data.showFaceCamera || (this.data.lastNotifiedDistance != this.data.nextRandomDistance ? (this.setData({
        faceCameraType: 1
      }), wx.showLoading({
        title: "准备打卡...",
        mask: !0
      }), r.request({
        url: "/wxxcx/platform/sunrunFace/faceMiddleStart",
        data: {
          totalRun: this.data.alldistanceM,
          snCode: this.data.userInfo.snCode,
          scantronId: this.data.scantronId,
          studentName: this.data.userInfo.studentName || this.data.userInfo.name || "",
          token: wx.getStorageSync("token")
        },
        showLoading: !1,
        success: function (e) {
          if (wx.hideLoading(), t.setData({
            lastNotifiedDistance: t.data.nextRandomDistance
          }), !t.isForeground) return t.pendingFaceCheck = !0, void t.triggerRandomFaceCheck();
          t.showRandomFaceCameraOnly();
        },
        doFail: function () {
          wx.hideLoading(), t.setNextRandomDistance(!1);
        }
      })) : this.showRandomFaceCameraOnly());
    },
    showRandomFaceCameraOnly: function () {
      var t = this;
      if (this.isForeground) {
        this._faceExpireTime || (this._faceExpireTime = this.getRealTime() + 3e4), this.stopFaceWarning();
        var e = this.getRealTime(),
          a = this._faceExpireTime - e,
          n = Math.ceil(a / 1e3);
        n <= 0 ? this.handleFaceTimeout() : (this.setData({
          showFaceCamera: !0,
          faceCameraType: 1,
          faceCameraTitle: "随机抽查打卡",
          faceCameraCountdown: n
        }), C && clearTimeout(C), C = setTimeout(function () {
          t.data.showFaceCamera && t.setData({
            isCameraReady: !0
          });
        }, 300), this.playAudio("https://cppu.xtotoro.com/longmao/sunrunwx/audio/请进行手机打卡.mp3", !0), this.vibrateFunc(2), w = setInterval(function () {
          var e = t.getRealTime(),
            a = t._faceExpireTime - e,
            n = Math.ceil(a / 1e3);
          n <= 0 ? t.handleFaceTimeout() : (t.setData({
            faceCameraCountdown: n
          }), n % 5 == 0 && (t.playAudio("https://cppu.xtotoro.com/longmao/sunrunwx/audio/请进行手机打卡.mp3", !0), t.vibrateFunc(2)));
        }, 1e3));
      }
    },
    handleFaceTimeout: function () {
      this.stopFaceWarning(), this.pendingFaceCheck = !1, this._faceExpireTime = 0, C && clearTimeout(C), this.setData({
        isCameraReady: !1,
        showFaceCamera: !1,
        faceCameraCountdown: 0
      }), wx.showToast({
        title: "打卡超时！成绩可能无效",
        icon: "none",
        duration: 2e3
      }), this.setNextRandomDistance(!1);
    },
    checkMiddleFace: function (t) {
      var e = this;
      r.request({
        url: "/wxxcx/platform/sunrunFace/checkFaceMiddleSunRun",
        data: {
          faceData: t,
          snCode: this.data.userInfo.snCode,
          totalRun: this.data.alldistanceM,
          scantronId: this.data.scantronId,
          studentName: this.data.userInfo.studentName || this.data.userInfo.name || "",
          longitude: this.data.longitude,
          latitude: this.data.latitude,
          token: wx.getStorageSync("token")
        },
        success: function (t) {
          wx.hideLoading(), e.setData({
            isFaceUploading: !1
          }), !t || "00" != t.status && 0 != t.code && "200" != t.code ? (wx.showToast({
            title: t.msg || "验证失败，请重新拍摄",
            icon: "none"
          }), e.retryShowCamera()) : (e.stopFaceWarning(), e._faceExpireTime = 0, e.setData({
            showFaceCamera: !1,
            isCameraReady: !1
          }), wx.showToast({
            title: "打卡成功，继续加油！",
            icon: "success"
          }), e.setNextRandomDistance(!1));
        },
        doFail: function () {
          wx.hideLoading(), e.setData({
            isFaceUploading: !1
          }), wx.showToast({
            title: "网络异常，请重试",
            icon: "none"
          }), e.retryShowCamera();
        }
      });
    },
    stopFaceWarning: function () {
      x && (clearInterval(x), x = null), w && (clearInterval(w), w = null);
    },
    pointToSegmentDistHaversine: function (t, e, a, n, i, o) {
      var s,
        r,
        u = i - a,
        c = o - n,
        d = u * u + c * c,
        l = -1;
      return 0 !== d && (l = ((t - a) * u + (e - n) * c) / d), l < 0 ? (s = a, r = n) : l > 1 ? (s = i, r = o) : (s = a + l * u, r = n + l * c), this.getDistance(t, e, s, r);
    },
    getMinDistanceFromRoute: function (t, e, a) {
      for (var n = 1 / 0, i = 0; i < a.length - 1; i++) {
        var o = Number(a[i].latitude),
          s = Number(a[i].longitude),
          r = Number(a[i + 1].latitude),
          u = Number(a[i + 1].longitude),
          c = this.pointToSegmentDistHaversine(t, e, o, s, r, u);
        c < n && (n = c);
      }
      return n;
    },
    checkRouteDeviation: function (t, e) {
      var a = this.data.columnsLine[this.data.lineDefaultIndex];
      a && a.pointList && this.getMinDistanceFromRoute(t, e, a.pointList) > 50 && this.data.alldistanceM > 300 && (this.playAudio("https://cppu.xtotoro.com/longmao/sunrunwx/audio/轨迹偏离.mp3", !1), this.vibrateFunc(2), wx.showToast({
        title: "当前偏离路线过远，请回到路线上！",
        icon: "none",
        duration: 2500
      }));
    },
    checkLiveFitDegree: function () {
      var t = this;
      if (!(c.length < 5)) {
        var e = this.data.columnsLine[this.data.lineDefaultIndex];
        if (e && e.pointList) {
          var a = e.pointList.map(function (t) {
              return [Number(t.latitude), Number(t.longitude)];
            }),
            n = c.map(function (t) {
              return [Number(t.latitude), Number(t.longitude)];
            });
          setTimeout(function () {
            var e = u.calculateRouteSimilarity(n, a, 5, 25);
            t.setData({
              fitDegree: Number(e).toFixed(2)
            });
          }, 10);
        }
      }
    },
    checkBackendStartUpNote: function () {
      return new Promise(function (t) {
        wx.showLoading({
          title: "校验环境...",
          mask: !0
        }), r.request({
          url: "/wxxcx/platform/sunrunFace/startUpNote",
          method: "POST",
          data: {
            token: wx.getStorageSync("token")
          },
          success: function (e) {
            wx.hideLoading(), e && "00" == e.status ? t(!0) : (wx.showModal({
              title: "提示",
              content: e.msg || "暂无法开始跑步",
              showCancel: !1
            }), t(!1));
          },
          doFail: function () {
            wx.hideLoading(), t(!0);
          }
        });
      });
    },
    startRun: function () {
      var t = this;
      return a(e().mark(function n() {
        return e().wrap(function (n) {
          for (;;) switch (n.prev = n.next) {
            case 0:
              if (wx.getStorageSync("hasReadLocationGuide")) {
                n.next = 4;
                break;
              }
              return wx.showModal({
                title: "🔋 后台定位保护指南",
                content: "为防止息屏后轨迹丢失，请确保：\n1. 微信定位权限设为“使用小程序期间和离开小程序后”\n2. 关闭手机的省电模式\n3. 将微信加入后台白名单\n\n详细设置方法可查看“常见问题”页。",
                confirmText: "我知道了",
                showCancel: !1,
                success: function () {
                  var n = a(e().mark(function a() {
                    return e().wrap(function (e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          if (wx.setStorageSync("hasReadLocationGuide", !0), 0 != t.data.runType) {
                            e.next = 4;
                            break;
                          }
                          return e.next = 4, t.selectSunRunRandomConfiguration();
                        case 4:
                          t._continueStartRun();
                        case 5:
                        case "end":
                          return e.stop();
                      }
                    }, a);
                  }));
                  return function () {
                    return n.apply(this, arguments);
                  };
                }()
              }), n.abrupt("return");
            case 4:
              if (0 != t.data.runType) {
                n.next = 7;
                break;
              }
              return n.next = 7, t.selectSunRunRandomConfiguration();
            case 7:
              t._continueStartRun();
            case 8:
            case "end":
              return n.stop();
          }
        }, n);
      }))();
    },
    selectSunRunRandomConfiguration: function () {
      var t = this;
      return new Promise(function (e) {
        var a = 0 == t.data.runType ? t.data.columnsLine[t.data.lineDefaultIndex] : {};
        a && a.pointId ? r.request({
          url: "/wxxcx/platform/sunrunFace/selectSunRunRandomConfiguration",
          data: {
            lineId: a.pointId,
            token: wx.getStorageSync("token")
          },
          success: function (a) {
            if (a && "00" == a.status) {
              var n = a.body || {},
                i = n.checkDistance,
                o = n.offsetDistance,
                s = n.startDistance;
              t.setData({
                randomConfig: {
                  startDistance: Number(s) || 200,
                  checkDistance: Number(i) || 230,
                  offsetDistance: Number(o) || 30
                }
              });
            }
            e();
          },
          doFail: function (t) {
            e();
          }
        }) : e();
      });
    },
    _continueStartRun: function () {
      var t = this;
      return a(e().mark(function a() {
        var n;
        return e().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return e.next = 2, t.checkBackendStartUpNote();
            case 2:
              if (e.sent) {
                e.next = 5;
                break;
              }
              return e.abrupt("return");
            case 5:
              return n = !0, e.next = 8, t.checkStartRun().then(function (t) {
                n = t;
              });
            case 8:
              if (0 != t.data.runType || !n) {
                e.next = 10;
                break;
              }
              return e.abrupt("return");
            case 10:
              2 == t.data.runType ? t.realStartRun() : "1" === t.data.sunrunConfig.sunrunStartFace ? (t.setData({
                showFaceCamera: !0,
                faceCameraType: 0,
                faceCameraTitle: "开始跑步前请打卡",
                faceCameraCountdown: 0
              }), C && clearTimeout(C), C = setTimeout(function () {
                t.data.showFaceCamera && t.setData({
                  isCameraReady: !0
                });
              }, 300)) : t.realStartRun();
            case 11:
            case "end":
              return e.stop();
          }
        }, a);
      }))();
    },
    realStartRun: function () {
      var t = this;
      return a(e().mark(function a() {
        var i, o, s, r, u, h;
        return e().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (i = t, o = !1, t._hasAnnounced500 = !1, t._hasAnnounced1000 = !1, t._hasAnnouncedNearEnd = !1, t._lastPaceWarningTime = 0, t._lastAnnouncedMeter = 0, m = !1, t._hasLocationErrorOccurred = !1, t.setData({
                lastLocationTime: t.getRealTime(),
                locationSignalStatus: "good",
                pauseCount: 0
              }), t.startLocationWatch(), 0 != t.data.runType && 2 != t.data.runType) {
                e.next = 15;
                break;
              }
              return e.next = 14, t.startRequest().then(function (t) {
                o = !0;
              }).catch(function (t) {});
            case 14:
              0 == t.data.runType && (i.getRunPointList(), t.data.getRunPointTimes = setInterval(function () {
                i.getRunPointList();
              }, i.data.getRunPointQuestTime));
            case 15:
              if (o) {
                e.next = 17;
                break;
              }
              return e.abrupt("return");
            case 17:
              0 != t.data.runType && 2 != t.data.runType || t.isBackgroundLocating || wx.startLocationUpdateBackground({
                success: function () {},
                fail: function () {
                  wx.showModal({
                    title: "提示",
                    content: "后台定位开启异常！请去设置页开启。",
                    showCancel: !1
                  });
                }
              }), wx.hideTabBar(), s = ["用脚步丈量青春.mp3", "准备好迎接今天的阳光了吗一起奔跑吧.mp3", "又是元气满满的一天让跑步点亮你的青春.mp3", "青春不设限跑步正当时加油.mp3", "每一步都在遇见更好的自己欢迎加入阳光跑.mp3", "不管快慢坚持就是胜利欢迎开跑.mp3"], r = Math.floor(Math.random() * s.length), u = s[r], t.playAudio("https://cppu.xtotoro.com/longmao/sunrunwx/audio/".concat(u), !0), (h = t).setData({
                animation: "scale-down"
              }), setTimeout(function () {
                h.setData({
                  animation: ""
                });
              }, 1e3), t.vibrateFunc(1), wx.setStorageSync("runStartTime", JSON.stringify(0)), wx.setStorageSync("runMsec", JSON.stringify(0)), c = [], d = 0, l = 0, v = null, n.default.start(), i.setData({
                motion_status: 1,
                create_time_data: n.default.formatTime(t.getRealDate())
              }), i.lockClick(), i.data.time_id = setInterval(function () {
                i.isForeground && i.setData({
                  time_data: n.default.getTime()
                });
              }, 500), t.motionAnalyzer && t.motionAnalyzer.start(t.data.scantronId || "unknown"), t.data.needRandomFaceCheck && t.setNextRandomDistance(!0);
            case 39:
            case "end":
              return e.stop();
          }
        }, a);
      }))();
    },
    startRequest: function () {
      var t = this;
      return a(e().mark(function a() {
        var n, i, o, s;
        return e().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return n = t, i = 2 == t.data.runType ? 1 : 0, o = 0 == t.data.runType ? t.data.columnsLine[t.data.lineDefaultIndex] : {}, s = {
                runType: i,
                version: t.data.systemInfo.version,
                phoneInfo: t.data.systemInfo.brand + "&" + t.data.systemInfo.model + "&" + t.data.systemInfo.system,
                paperId: o.taskId || "",
                lineId: o.pointId || "",
                faceBase64: t.data.faceBase64
              }, wx.showLoading({
                title: "系统准备中..",
                mask: !0
              }), e.next = 7, new Promise(function (t, e) {
                r.request({
                  url: "/wxxcx/sunrun/getRunBegin",
                  data: s,
                  success: function (a) {
                    wx.hideLoading(), a && 0 == +a.code ? (n.setData({
                      scantronId: a.scantronId
                    }), t()) : (wx.showModal({
                      title: "提示",
                      content: a.msg,
                      showCancel: !1
                    }), e());
                  },
                  doFail: function (t) {
                    wx.hideLoading(), e();
                  }
                });
              });
            case 7:
            case "end":
              return e.stop();
          }
        }, a);
      }))();
    },
    initAudioEvent: function () {
      f.onError(function (t) {
        console.error("❌ 音频播放错误:", t.errMsg, t.errCode);
      });
    },
    playAudio: function (t) {
      var e = this,
        a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = this.getRealTime(),
        i = encodeURI(decodeURIComponent(t)),
        o = !this.isForeground || a;
      !a && n - p < 2e3 || (p = n, o ? (f.title = "阳光跑提示", f.epname = "运动状态", f.singer = "系统提示", f.src = i) : this.innerAudioContext && (this.innerAudioContext.stop(), setTimeout(function () {
        e.innerAudioContext.src = i, e.innerAudioContext.play();
      }, 50)));
    },
    onTouchStart: function (t) {
      var e = this;
      this.data.progressInterval && clearInterval(this.data.progressInterval), this.setData({
        isPressing: !0,
        progressRotation: 0
      }), this.startTime = this.getRealTime(), this.data.progressInterval = setInterval(function () {
        if (e.data.isPressing) {
          var t = e.getRealTime() - e.startTime,
            a = Math.min(t / 3e3 * e.data.progressMax, e.data.progressMax);
          e.setData({
            progressRotation: a
          }, function () {
            e.data.progressRotation >= e.data.progressMax && e.onTouchOver();
          });
        }
      }, 50);
    },
    onTouchOver: function (t) {
      clearInterval(this.data.progressInterval), this.setData({
        isPressing: !1
      }), this.stopRun();
    },
    onTouchEnd: function (t) {
      clearInterval(this.data.progressInterval), this.setData({
        isPressing: !1
      });
    },
    toggleFold: function () {
      this.setData({
        isFold: !this.data.isFold
      });
    },
    tabSelect: function (t) {
      0 === this.data.motion_status ? (this.setData({
        runType: t.currentTarget.dataset.id
      }), 0 == this.data.runType && (this.setData({
        "polyline[1]": {
          color: "#FA6400",
          width: 10,
          borderWidth: 1,
          borderColor: "#fff"
        },
        markers: [{
          id: 1,
          callout: {
            content: "",
            color: "#40f309",
            fontSize: 14,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#fff",
            bgColor: "#fff",
            padding: 5,
            display: "ALWAYS",
            textAlign: "center"
          }
        }, {
          id: 2,
          callout: {
            content: "",
            color: "#f30909",
            fontSize: 14,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#fff",
            bgColor: "#fff",
            padding: 5,
            display: "ALWAYS",
            textAlign: "center"
          }
        }, {
          id: 3,
          callout: {
            anchorY: -50,
            content: "",
            color: "#000",
            fontSize: 14,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#fff",
            bgColor: "#fff",
            padding: 5,
            display: "ALWAYS",
            joinCluster: !1,
            textAlign: "center"
          }
        }],
        circles: [{
          latitude: "",
          longitude: "",
          radius: 200,
          color: "#0651f5",
          fillColor: "#0652f525"
        }]
      }), this.initSunRunLine())) : wx.showToast({
        title: "正在进行跑步！",
        icon: "error",
        duration: 1500
      });
    },
    getRunPointList: function () {
      var t = this,
        e = {
          scantronId: this.data.scantronId
        };
      r.request({
        url: "/wxxcx/sunrun/getRunPointList",
        data: e,
        showLoading: !1,
        success: function (e) {
          t.setData({
            runPointData: e
          });
        }
      }), r.request({
        url: "/wxxcx/sunrun/getRunPointListAbnormal",
        data: e,
        showLoading: !1,
        success: function (e) {
          t.setData({
            abnormalPointType: e.abnormalPointType || 0
          }), 0 != e.abnormalPointType && t.vibrateFunc(1);
        }
      });
    },
    toggleSatellite: function () {
      this.setData({
        enableSatellite: !this.data.enableSatellite,
        setSatelliteBindtap: !this.data.setSatelliteBindtap
      });
    },
    lockClick: function () {
      this.setData({
        lockShow: !0,
        setLockBindtap: !0
      }), wx.setKeepScreenOn({
        keepScreenOn: !0
      }), wx.hideTabBar();
    },
    unlockClick: function () {
      this.setData({
        lockShow: !1,
        setLockBindtap: !1
      }), this.vibrateFunc(2), this.playAudio("https://cppu.xtotoro.com/longmao/sunrunwx/audio/关闭锁屏.mp3", !1), 0 == this.data.motion_status && wx.showTabBar();
    },
    setLineDialogShow: function () {
      0 === this.data.motion_status ? this.setData({
        setTaskDialog: !0,
        setLineBindtap: !0
      }) : wx.showToast({
        title: "正在进行跑步！",
        icon: "error",
        duration: 1500
      });
    },
    onConfirmSetTask: function (t) {
      var e,
        a = t.detail,
        n = (a.picker, a.value),
        i = a.index,
        o = n;
      this.setData({
        columnsLine: o.runPointList,
        taskDefaultIndex: i,
        linePickerZindex: 2,
        sunrunlimiting: o,
        setTaskDialog: !1,
        setLineDialog: !0
      }), this.calcPaceLimit();
      var s = "";
      null == o || null === (e = o.runTimeRuleList) || void 0 === e || e.forEach(function (t) {
        s = s + (t.startTime + "~") + t.endTime + "  ";
      }), this.setData({
        columnsLine: n.runPointList
      });
    },
    onCancelSetTask: function () {
      this.setData({
        setLineBindtap: !1,
        setTaskDialog: !1
      });
    },
    onConfirmSetLine: function (e) {
      var a,
        n = e.detail,
        i = (n.picker, n.value),
        o = n.index;
      this.getSunRunLine(i.pointList), this.getCameraConfig(i), this.setData((a = {
        latitude: i.latitude,
        longitude: i.longitude,
        setLineDialog: !1
      }, t(a, "markers[2].callout.content", i.pointName || ""), t(a, "lineDefaultIndex", o), t(a, "setLineBindtap", !1), t(a, "taskId", i.taskId), t(a, "pointId", i.pointId), a));
    },
    onCancelSetLine: function () {
      this.setData({
        setLineBindtap: !1,
        setLineDialog: !1
      });
    },
    checkCameraConfig: function (t) {
      var e = this,
        a = this.data,
        n = a.CameraConfigFlag,
        i = a.CameraConfig,
        o = a.CameraConfigcameraPoleDistance;
      if (n && i && 0 !== i.length) {
        var s = null,
          r = Number.MAX_VALUE;
        i.forEach(function (a) {
          var n = e.getDistance(t.latitude, t.longitude, a.latitude, a.longitude);
          n <= o && n < r && (r = n, s = a);
        }), s ? this.data.currentCameraId !== s.cameraPoleId ? (this.data.currentCameraId && this.stopCameraPolling(), this.setData({
          currentCameraId: s.cameraPoleId
        }), this.startCameraPolling(s, t)) : this.currentLocation = {
          lat: t.latitude,
          lng: t.longitude
        } : this.data.currentCameraId && this.stopCameraPolling();
      } else this.stopCameraPolling();
    },
    startCameraPolling: function (t, e) {
      var a = this,
        n = 1e3 * this.data.CameraConfigcameraPoleTime;
      this.currentLocation = {
        lat: e.latitude,
        lng: e.longitude
      }, this.executeCameraRequest(t), this.pollingTimer = setInterval(function () {
        a.executeCameraRequest(t);
      }, n);
    },
    stopCameraPolling: function () {
      this.pollingTimer && (clearInterval(this.pollingTimer), this.pollingTimer = null), this.setData({
        currentCameraId: null
      });
    },
    executeCameraRequest: function (t) {
      var e = this,
        a = this.currentLocation ? this.currentLocation.lat : t.latitude,
        n = this.currentLocation ? this.currentLocation.lng : t.longitude;
      r.request({
        url: "/wxxcx/platform/camera/getCameraPolling",
        data: {
          latitude: a,
          longitude: n,
          cameraPoleId: t.cameraPoleId,
          lineId: t.lineId,
          scantronId: e.data.scantronId,
          token: wx.getStorageSync("token")
        },
        showLoading: !1,
        success: function (t) {
          var a, n;
          0 == (null === (a = t.body) || void 0 === a ? void 0 : a.isPoint) && e.triggerWarning(), e.setData({
            isGetCameraPolling: (null === (n = t.body) || void 0 === n ? void 0 : n.isPoint) || !0
          });
        }
      });
    },
    triggerWarning: function () {
      wx.showToast({
        title: "请抬头跑步!",
        icon: "none",
        duration: 1500
      }), this.playAudio("https://cppu.xtotoro.com/longmao/sunrunwx/audio/抬头看摄像头.mp3", !1), wx.vibrateLong();
    },
    setLocalStorageRunDataAsync: function () {
      var t = this.data.polyline;
      c && c.length > 0 && (t[0].points = c);
      var e = {
        distance_data: this.data.distance_data,
        alldistanceM: this.data.alldistanceM,
        time_data: this.data.time_data,
        lineDefaultIndex: this.data.lineDefaultIndex,
        pointId: this.data.pointId,
        polyline: t,
        circles: this.data.circles,
        markers: this.data.markers,
        columnsLine: this.data.columnsLine,
        sunrunlimiting: this.data.sunrunlimiting,
        motion_status: this.data.motion_status,
        scantronId: this.data.scantronId,
        runStartTime: wx.getStorageSync("runStartTime"),
        runMsec: wx.getStorageSync("runMsec"),
        runType: this.data.runType,
        create_time_data: this.data.create_time_data,
        end_time_data: this.data.end_time_data,
        km_distance_data: this.data.km_distance_data,
        taskId: this.data.taskId,
        flag: "1",
        nextRandomDistance: this.data.nextRandomDistance,
        lastNotifiedDistance: this.data.lastNotifiedDistance,
        randomConfig: this.data.randomConfig,
        _faceExpireTime: this._faceExpireTime || 0
      };
      wx.setStorage({
        key: "runData",
        data: e
      });
    },
    getCurrentTime: function () {
      var t = this.getRealDate();
      return "".concat(t.getFullYear(), "-").concat(this.formatNumber(t.getMonth() + 1), "-").concat(this.formatNumber(t.getDate()), " ").concat(this.formatNumber(t.getHours()), ":").concat(this.formatNumber(t.getMinutes()), ":").concat(this.formatNumber(t.getSeconds()));
    },
    formatNumber: function (t) {
      return (t = t.toString())[1] ? t : "0".concat(t);
    },
    calcPaceLimit: function () {
      var t = this.data.sunrunlimiting,
        e = t.minTime,
        a = t.maxTime,
        n = t.mileage;
      if (0 != n) {
        var i = e / n,
          o = a / n;
        this.setData({
          fastPaceFormat: this.formatPace(i),
          slowPaceFormat: this.formatPace(o)
        });
      } else this.setData({
        fastPaceFormat: "0'00\"",
        slowPaceFormat: "0'00\""
      });
    },
    formatPace: function (t) {
      var e = Math.floor(t),
        a = Math.round(60 * (t - e));
      return "".concat(e, "'").concat(a.toString().padStart(2, "0"), '"');
    },
    getNearestRoute: function (t, e, a) {
      var n = this;
      if (!t || !t.getSunrunPaperResponseList || 0 == t.getSunrunPaperResponseList.length) return null;
      var i = t.getSunrunPaperResponseList[0].runPointList;
      if (!i || 0 == i.length) return null;
      var o = null,
        s = 1 / 0,
        r = 0;
      return i.forEach(function (t, i) {
        var u = parseFloat(t.pointList[0].latitude),
          c = parseFloat(t.pointList[0].longitude),
          d = n.getDistance(e, a, u, c);
        d < s && (s = d, o = t, r = i);
      }), {
        route: o,
        distance: s,
        routeIndex: r
      };
    },
    initSunRunLine: function () {
      var e = this;
      r.request({
        url: "/wxxcx/sunrun/getSunrunPaper",
        data: {
          stuNumber: this.data.userInfo.snCode,
          campusId: this.data.userInfo.schoolCampusCode,
          token: wx.getStorageSync("token")
        },
        success: function (a) {
          if (a.getSunrunPaperResponseList.length > 0) {
            var n,
              i = a.getSunrunPaperResponseList[0];
            e.setData({
              taskList: a.getSunrunPaperResponseList,
              columnsLine: i.runPointList,
              sunrunlimiting: i
            }), e.calcPaceLimit();
            var o = "";
            if (null == i || null === (n = i.runTimeRuleList) || void 0 === n || n.forEach(function (t) {
              o = o + (t.startTime + "~") + t.endTime + "  ";
            }), e.data.columnsLine.length > 0) {
              var s = e.getNearestRoute(a, e.data.latitude, e.data.longitude);
              e.getSunRunLine(s.route.pointList), e.getCameraConfig(s.route), e.setData(t({
                noticeBarMsg: o,
                taskDefaultIndex: 0,
                lineDefaultIndex: s.routeIndex
              }, "markers[2].callout.content", s.route.pointName || ""));
            }
          }
        }
      });
    },
    getCameraConfig: function (t) {
      var e = this;
      r.request({
        url: "/wxxcx/platform/camera/getCameraConfig",
        data: {
          lineId: t.pointId,
          token: wx.getStorageSync("token")
        },
        success: function (t) {
          var a;
          e.setData({
            CameraConfigFlag: (null === (a = t.body) || void 0 === a ? void 0 : a.flag) || !1
          }), t.data && t.data.length > 0 && e.setData({
            CameraConfig: t.data,
            getRunPointQuestTime: 1e3 * +t.data[0].pointPoleTime,
            CameraConfigpointPoleTime: +t.data[0].pointPoleTime,
            CameraConfigcameraPoleTime: +t.data[0].cameraPoleTime,
            CameraConfigcameraPoleDistance: t.data[0].cameraPoleDistance
          });
        }
      });
    },
    getSunRunLine: function (e) {
      var a;
      this.setData(t({}, "polyline[1].points", e)), this.setData((t(a = {}, "markers[0].latitude", e[0].latitude), t(a, "markers[0].longitude", e[0].longitude), t(a, "circles[0].latitude", e[0].latitude), t(a, "circles[0].longitude", e[0].longitude), t(a, "markers[1].latitude", e[e.length - 1].latitude), t(a, "markers[1].longitude", e[e.length - 1].longitude), t(a, "markers[2].latitude", e[1].latitude), t(a, "markers[2].longitude", e[1].longitude), a));
    },
    initRun: function () {
      var t = this;
      0 != this.data.runType && 2 != this.data.runType || wx.getLocation({
        altitude: !0,
        type: "gcj02",
        isHighAccuracy: !0,
        success: function (e) {
          t.setData({
            latitude: e.latitude,
            longitude: e.longitude,
            altitude: e.altitude
          }), wx.getStorageSync("runData") ? t.getLocalStorageRunData() : t.initSunRunLine(), setTimeout(function () {
            wx.createMapContext("myMap").moveToLocation();
          }, 1e3);
        },
        fail: function (e) {
          wx.showModal({
            title: "提示",
            content: "您未开启微信定位服务，请在设置中开启后重试。",
            showCancel: !1
          }), t.checkLocation();
        }
      });
    },
    getDistance: function (t, e, a, n) {
      var i = t * Math.PI / 180,
        o = a * Math.PI / 180,
        s = i - o,
        r = e * Math.PI / 180 - n * Math.PI / 180;
      return 6378137 * (2 * Math.asin(Math.sqrt(Math.pow(Math.sin(s / 2), 2) + Math.cos(i) * Math.cos(o) * Math.pow(Math.sin(r / 2), 2))));
    },
    calSpeed: function (t, e) {
      if (!e || t <= 0) return "0'00\"";
      var a = e.split(":"),
        n = 0,
        i = 0,
        o = 0;
      3 === a.length ? (n = parseFloat(a[0]) || 0, i = parseFloat(a[1]) || 0, o = parseFloat(a[2]) || 0) : 2 === a.length && (i = parseFloat(a[0]) || 0, o = parseFloat(a[1]) || 0);
      var s = (60 * n + i + o / 60) / parseFloat(t),
        r = Math.floor(s),
        u = Math.floor(60 * (s - r));
      return "".concat(r, "'").concat(u.toString().padStart(2, "0"), '"');
    },
    CalMotionCalories: function (t) {
      return (55 * t * 1.036).toFixed(2);
    },
    checkStartRun: function () {
      var t = this;
      return a(e().mark(function a() {
        var n, i, o, s, r, u, c, d, l;
        return e().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (2 != t.data.runType) {
                e.next = 2;
                break;
              }
              return e.abrupt("return", !1);
            case 2:
              if (n = wx.getSystemInfoSync(), i = n.platform.toLowerCase(), !["windows", "mac", "devtools"].includes(i)) {
                e.next = 7;
                break;
              }
              return wx.showModal({
                title: "作弊警告",
                content: "请勿使用模拟器或电脑端运行，一经发现成绩作废！",
                showCancel: !1
              }), e.abrupt("return", !0);
            case 7:
              if (!(n.model.toLowerCase().includes("mumu") || n.model.toLowerCase().includes("virtual") || n.brand.toLowerCase().includes("google"))) {
                e.next = 10;
                break;
              }
              return wx.showModal({
                title: "作弊警告",
                content: "设备环境异常，疑似使用作弊软件！",
                showCancel: !1
              }), e.abrupt("return", !0);
            case 10:
              if (o = t.data.columnsLine[t.data.lineDefaultIndex], (s = {
                isDuringDate: function (t, e) {
                  var a = this.getRealDate(),
                    n = new Date(t.replace(/-/g, "/")),
                    i = new Date(e.replace(/-/g, "/"));
                  return a >= n && a <= i;
                }.bind(t)
              }).isDuringDate(t.data.sunrunlimiting.startDate, t.data.sunrunlimiting.endDate)) {
                e.next = 15;
                break;
              }
              return wx.showModal({
                title: "提示",
                content: "当前日期不在阳光跑任务日期范围".concat(t.data.sunrunlimiting.startDate, "~").concat(t.data.sunrunlimiting.endDate, "内！！"),
                showCancel: !1
              }), e.abrupt("return", !0);
            case 15:
              r = !1, u = t.getRealDate(), c = 0;
            case 18:
              if (!(c < t.data.sunrunlimiting.runTimeRuleList.length)) {
                e.next = 28;
                break;
              }
              if (d = t.data.sunrunlimiting.runTimeRuleList[c], console.log("element", d), l = "".concat(u.getFullYear(), "-").concat(u.getMonth() + 1, "-").concat(u.getDate(), " "), !s.isDuringDate(l + d.startTime, l + d.endTime)) {
                e.next = 25;
                break;
              }
              return r = !0, e.abrupt("break", 28);
            case 25:
              c++, e.next = 18;
              break;
            case 28:
              if (r) {
                e.next = 31;
                break;
              }
              return wx.showModal({
                title: "提示",
                content: "当前时间不在阳光跑任务范围时间内！！",
                showCancel: !1
              }), e.abrupt("return", !0);
            case 31:
              return e.next = 33, new Promise(function (e, a) {
                wx.getLocation({
                  type: "gcj02",
                  success: function (a) {
                    t.setData({
                      latitude: a.latitude,
                      longitude: a.longitude
                    }), e();
                  },
                  fail: function () {
                    a();
                  }
                });
              });
            case 33:
              if (!(0 == t.data.runType && t.getDistance(t.data.latitude, t.data.longitude, o.latitude, o.longitude) > 100)) {
                e.next = 36;
                break;
              }
              return wx.showModal({
                title: "提示",
                content: "当前位置距离路线大于100m！！（请切换附近的路线）",
                showCancel: !1
              }), e.abrupt("return", !0);
            case 36:
              return e.abrupt("return", !1);
            case 37:
            case "end":
              return e.stop();
          }
        }, a);
      }))();
    },
    pauseRun: function () {
      var t = this;
      this.data.pauseCount >= 2 ? wx.showToast({
        title: "单次跑步最多只能暂停2次！",
        icon: "none"
      }) : 0 === this.data.pauseCount ? wx.showModal({
        title: "暂停提示",
        content: "由于作弊风控，单次跑步仅允许暂停2次，确认要暂停吗？",
        showCancel: !0,
        success: function (e) {
          e.confirm && t.executePause();
        }
      }) : this.executePause();
    },
    executePause: function () {
      this.setData({
        pauseCount: this.data.pauseCount + 1
      }), this.vibrateFunc(1), n.default.pause(), this.playAudio("https://cppu.xtotoro.com/longmao/sunrunwx/audio/暂停跑步.mp3", !1), this.setData({
        motion_status: 2
      });
    },
    reRun: function () {
      this.vibrateFunc(1), this.setData({
        motion_status: 1
      }), n.default.start(), this.playAudio("https://cppu.xtotoro.com/longmao/sunrunwx/audio/恢复跑步.mp3", !1);
    },
    overRun: function () {
      wx.showTabBar(), n.default.end(), n.default.reset(), this.setData({
        points_time: parseInt(this.getRealTime() / 1e3)
      }), this.playAudio("https://cppu.xtotoro.com/longmao/sunrunwx/audio/跑步结束.mp3", !1);
    },
    saveScores: function () {
      var t = this;
      return a(e().mark(function a() {
        var n, i, o, s, u, c, d, l, h, m, g, f, p, x, w, C, v, T, y, D, S, R;
        return e().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (i = t, o = 0 == +t.data.runType && (null === (n = t.data.columnsLine) || void 0 === n ? void 0 : n[+t.data.lineDefaultIndex]) || {
                taskId: ""
              }, s = function (t, e) {
                return (null == t ? void 0 : t.split("T")[e]) || "";
              }, u = 2 == t.data.runType ? 1 : 0, c = t.data.scantronId, d = "成绩疑似提交失败，已保存至本地，请稍后重试。", l = !1, wx.showLoading({
                title: "结算提交中...",
                mask: !0
              }), h = "正常跑步", t.motionAnalyzer && (g = t.motionAnalyzer.stop(), h = (null == g || null === (m = g.analysis) || void 0 === m ? void 0 : m.verdict) || "正常跑步"), e.prev = 10, R = {
                scantronId: c || "",
                stuNumber: (null === (f = t.data.userInfo) || void 0 === f ? void 0 : f.snCode) || "",
                schoolCode: (null === (p = t.data.userInfo) || void 0 === p ? void 0 : p.schoolCode) || "",
                runType: u,
                km: (null === (x = t.data) || void 0 === x ? void 0 : x.distance_data) || "",
                usedTime: (null === (w = t.data) || void 0 === w ? void 0 : w.time_data) || "",
                fitDegree: Number(null === (C = t.data) || void 0 === C ? void 0 : C.fitDegree).toFixed(2) || "",
                avgSpeed: (null === (v = t.data) || void 0 === v ? void 0 : v.speed_data) || "",
                steps: (null === (T = t.data) || void 0 === T ? void 0 : T.steps) || "",
                token: wx.getStorageSync("token") || "",
                version: t.data.systemInfo.version || "",
                phoneInfo: (null === (y = t.data.systemInfo) || void 0 === y ? void 0 : y.brand) || "&" + (null === (D = t.data.systemInfo) || void 0 === D ? void 0 : D.model) || "&" + (null === (S = t.data.systemInfo) || void 0 === S ? void 0 : S.system) || "",
                evaluateDate: s(t.data.create_time_data, 0) || "",
                endTime: s(t.data.end_time_data, 1) || "",
                startTime: s(t.data.create_time_data, 1) || "",
                taskId: (null == o ? void 0 : o.taskId) || "",
                sunrunPathPointList: (null == o ? void 0 : o.pointList) || [],
                flag: "1"
              }, c && "" != c) {
                e.next = 14;
                break;
              }
              throw new Error("测试ID丢失，无法提交");
            case 14:
              return e.next = 16, new Promise(function (t, e) {
                r.request({
                  url: "/wxxcx/sunrun/sunRunExercises",
                  data: R,
                  showLoading: !1,
                  success: function (a) {
                    a && "00" == a.status ? t() : e(new Error(a.msg || a.message || "成绩提交失败"));
                  },
                  doFail: function (t) {
                    return e(new Error("网络环境异常或被拦截"));
                  }
                });
              });
            case 16:
              return e.next = 18, new Promise(function (t, e) {
                var a = i.data.polyline && i.data.polyline[0] && i.data.polyline[0].points ? i.data.polyline[0].points : [];
                r.request({
                  url: "/wxxcx/platform/recrecord/sunRunExercisesDetail",
                  data: {
                    pointList: a,
                    gyroscope: [],
                    accelerometer: [],
                    cheatCode: h,
                    scantronId: c,
                    token: wx.getStorageSync("token")
                  },
                  showLoading: !1,
                  success: function (e) {
                    return t();
                  },
                  doFail: function (e) {
                    return t();
                  }
                });
              });
            case 18:
              i.stopRunSetStorageSync(!0, h), e.next = 27;
              break;
            case 21:
              e.prev = 21, e.t0 = e.catch(10), console.error("提交异常，转存本地:", e.t0), l = !0, d = e.t0.message || d, i.stopRunSetStorageSync(!1, h);
            case 27:
              return e.prev = 27, wx.hideLoading(), i.overRun(), i.removeLocalStorageRunData(), i.sunRunExercisesRedirectTo(l, d), e.finish(27);
            case 33:
            case "end":
              return e.stop();
          }
        }, a, null, [[10, 21, 27, 33]]);
      }))();
    },
    sunRunExercisesRedirectTo: function (t, e) {
      var a = parseInt(new Date(this.data.create_time_data).getTime() / 1e3);
      t ? wx.showModal({
        title: "提示",
        content: e,
        showCancel: !1,
        success: function () {
          wx.redirectTo({
            url: "./statement?id=" + a
          });
        }
      }) : wx.redirectTo({
        url: "./statement?id=" + a
      });
    },
    checkStopRun: function () {
      if (this.data.distance_data < this.data.sunrunlimiting.mileage) return wx.showModal({
        title: "提示",
        content: "任务要求里程".concat(this.data.sunrunlimiting.mileage, "，当前跑步未达标！"),
        showCancel: !1
      }), !0;
    },
    getLocalStorageRunData: function () {
      var t = this,
        e = wx.getStorageSync("runData");
      if (e) {
        var a = e;
        a && null != a && a.scantronId ? (c = a.polyline && a.polyline[0] && a.polyline[0].points ? a.polyline[0].points : [], d = 0, this.setData({
          distance_data: a.distance_data,
          alldistanceM: a.alldistanceM || 0,
          time_data: a.time_data,
          lineDefaultIndex: a.lineDefaultIndex,
          columnsLine: a.columnsLine,
          sunrunlimiting: a.sunrunlimiting,
          pointId: a.pointId,
          polyline: a.polyline,
          circles: a.circles,
          markers: a.markers,
          motion_status: a.motion_status,
          scantronId: a.scantronId,
          runType: a.runType,
          create_time_data: a.create_time_data,
          end_time_data: a.end_time_data,
          km_distance_data: a.km_distance_data,
          taskId: a.taskId || "",
          flag: "1",
          nextRandomDistance: a.nextRandomDistance || 0,
          lastNotifiedDistance: a.lastNotifiedDistance || 0,
          randomConfig: a.randomConfig || {
            startDistance: 200,
            checkDistance: 230,
            offsetDistance: 30
          }
        }), this._faceExpireTime = a._faceExpireTime || 0, this.calcPaceLimit(), wx.setStorageSync("runStartTime", a.runStartTime), wx.setStorageSync("runMsec", a.runMsec), 0 == this.data.runType && (this.data.getRunPointTimes = setInterval(function () {
          t.getRunPointList();
        }, this.data.getRunPointQuestTime)), wx.hideTabBar(), 0 != this.data.runType && 2 != this.data.runType || this.isBackgroundLocating || wx.startLocationUpdateBackground({
          success: function () {},
          fail: function () {
            wx.showModal({
              title: "提示",
              content: "获取位置异常，请开启权限！",
              showCancel: !1
            });
          }
        }), n.default.loactionStart(), this.data.time_id = setInterval(function () {
          t.isForeground && t.setData({
            time_data: n.default.getTime()
          });
        }, 500)) : this.removeLocalStorageRunData();
      }
    },
    removeLocalStorageRunData: function () {
      wx.getStorageSync("runData") && wx.removeStorageSync("runData");
    },
    stopRun: function () {
      var t = this;
      return a(e().mark(function a() {
        var o, s, r, c;
        return e().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return t.vibrateFunc(2), t.stopLocationWatch(), 0 == t.data.runType && (o = t.data.columnsLine[t.data.lineDefaultIndex], s = o.pointList.map(function (t) {
                return [Number(t.latitude), Number(t.longitude)];
              }), r = t.data.polyline[0].points.map(function (t) {
                return [Number(t.latitude), Number(t.longitude)];
              }), c = u.calculateRouteSimilarity(r, s), t.setData({
                fitDegree: Number(c).toFixed(2) || 0
              })), t.setData({
                motion_status: 2
              }), i.default.reset(), clearInterval(t.data.time_id), clearInterval(t.data.getRunPointTimes), t.stopCameraPolling(), t.setData({
                getRunPointTimes: null,
                time_id: null,
                end_time_data: n.default.formatTime(t.getRealDate())
              }), t.stopRunSetStorageSync(!1), e.next = 12, t.saveScores();
            case 12:
            case "end":
              return e.stop();
          }
        }, a);
      }))();
    },
    stopRunSetStorageSync: function (t, e) {
      var a, n, i, o, s, r, u, c;
      if (this.data) {
        var d = parseInt(new Date(this.data.create_time_data).getTime() / 1e3),
          l = (null === (a = this.data.columnsLine) || void 0 === a ? void 0 : a[this.data.lineDefaultIndex]) || {},
          h = {
            scantronId: this.data.scantronId || "",
            time_data: this.data.time_data || "",
            speed_data: this.data.speed_data || "",
            kcal_data: this.data.kcal_data || "",
            distance_data: this.data.distance_data || "",
            km_speed_data: this.data.km_speed_data || "",
            points_data: (null === (n = this.data.polyline) || void 0 === n || null === (i = n[0]) || void 0 === i ? void 0 : i.points) || "",
            altitude_data: this.data.altitude_data || "",
            altitude: this.data.altitude || "",
            runType: this.data.runType,
            taskId: l.taskId || "",
            create_time_data: this.data.create_time_data || "",
            end_time_data: this.data.end_time_data || "",
            allKm: this.data.allKm || "",
            mileage: function (t, e) {
              var a,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
              return null !== (a = e.split(".").reduce(function (t, e) {
                return (t || {})[e];
              }, t)) && void 0 !== a ? a : n;
            }(this.data, "sunrunlimiting.mileage", 0),
            model: (null === (o = this.data.systemInfo) || void 0 === o ? void 0 : o.model) || "",
            brand: (null === (s = this.data.systemInfo) || void 0 === s ? void 0 : s.brand) || "",
            version: (null === (r = this.data.systemInfo) || void 0 === r ? void 0 : r.version) || "",
            system: (null === (u = this.data.systemInfo) || void 0 === u ? void 0 : u.system) || "",
            fitDegree: Number(null === (c = this.data) || void 0 === c ? void 0 : c.fitDegree).toFixed(2) || "",
            cheatCode: e || "正常跑步",
            isCloud: t || !1
          };
        try {
          wx.setStorageSync("RunInfo-" + d, JSON.stringify(h));
        } catch (t) {
          console.error("保存本地存根失败", t);
        }
      }
    },
    vibrateFunc: function (t) {
      wx.getStorageSync("vibrate") && (1 == t && wx.vibrateShort({}), 2 == t && wx.vibrateLong({}));
    },
    setScreenHeight: function () {
      var t = this;
      wx.getSystemInfo({
        success: function (e) {
          t.setData({
            systemInfo: e,
            screenHeight: 1 * e.screenHeight + "px"
          });
        }
      });
    },
    checkLocation: function () {
      1 != this.data.runType && wx.getSetting({
        success: function (t) {
          var e = t.authSetting["scope.userLocationBackground"];
          0 != e && null != e && 0 != t.authSetting["scope.userLocation"] || wx.showModal({
            title: "提示",
            content: '请先设置位置信息为"使用小程序期间和离开小程序后",才可运行跑步模块',
            showCancel: !1,
            success: function (t) {
              t.confirm ? wx.openSetting({
                success: function () {
                  wx.reLaunch({
                    url: "/pages/run/index"
                  });
                }
              }) : wx.switchTab({
                url: "../me/index"
              });
            }
          });
        }
      });
    }
  });
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'pages/run/index.js'
});
require("pages/run/index.js");
