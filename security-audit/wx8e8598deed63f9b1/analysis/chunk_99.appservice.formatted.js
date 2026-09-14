$gwx_XC_107 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_107 || [];
    function gz$gwx_XC_107_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_107_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_107_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_107_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[2, '!='], [[6], [[7], [3, 'detalData']], [3, 'scorePassType']], [1, '0']]);
        Z([3, 'warning-o']);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_107_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_107_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_107 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_107 = true;
    var x = ['./pages/scoreCloud/scoreCloudInfo.wxml'];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_107_1();
      var oFEB = _v();
      _(r, oFEB);
      if (_oz(z, 0, e, s, gg)) {
        oFEB.wxVkey = 1;
        var fGEB = _n('van-icon');
        _rz(z, fGEB, 'name', 1, e, s, gg);
        _(oFEB, fGEB);
      }
      oFEB.wxXCkey = 1;
      oFEB.wxXCkey = 3;
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
        g = "$gwx_XC_107";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_107();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/scoreCloud/scoreCloudInfo.wxml'] = [$gwx_XC_107, './pages/scoreCloud/scoreCloudInfo.wxml'];else __wxAppCode__['pages/scoreCloud/scoreCloudInfo.wxml'] = $gwx_XC_107('./pages/scoreCloud/scoreCloudInfo.wxml');
;
__wxRoute = "pages/scoreCloud/scoreCloudInfo";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/scoreCloud/scoreCloudInfo.js";
define("pages/scoreCloud/scoreCloudInfo.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var t = require("../../@babel/runtime/helpers/defineProperty"),
    o = require("../../CDE443310A0D562FAB822B3611B0EFA3.js");
  Page({
    data: {
      latitude: 0,
      longitude: 0,
      show: !0,
      runTypeMap: ["阳光跑", "自由跑"],
      statusMap: ["不合格", "合格", "申诉合格", "补录合格"],
      userInfo: wx.getStorageSync("userInfo"),
      SetValue: {
        0: "无效",
        1: "有效",
        2: "申诉有效",
        3: "补录有效"
      },
      SetwarnType: ["", "步数异常", "人脸异常", "拟合度异常"],
      location: "",
      address: "",
      lat: "",
      lng: "",
      center: [],
      mapPolyline: [],
      polyline: [{
        points: [],
        color: "#07c160",
        width: 8,
        arrowLine: !0,
        borderWidth: 1,
        borderColor: "#fff"
      }],
      placeSearchComponent: "",
      autoCompleteComponent: "",
      searchWord: "",
      placeSearch: "",
      city: "",
      test: "",
      detalData: {
        status: 0,
        date: "2023-10-29",
        time: "18:43:27",
        mileage: "9.96",
        usedTime: 0,
        avgSpeed: 0,
        avgPace: 0,
        runType: 0,
        pointList: 0,
        calorie: 0,
        flag: 0
      }
    },
    onLoad: function (t) {
      this.init(t.id);
    },
    init: function (e) {
      var n = this;
      o.request({
        url: "/wxxcx/sunrun/getSunrunArchDetail",
        data: {
          scoreId: e
        },
        success: function (o) {
          var e;
          console.log(o), o.body.pointList && o.body.pointList.length > 0 && n.setData({
            longitude: o.body.pointList[o.body.pointList.length - 1].longitude,
            latitude: o.body.pointList[o.body.pointList.length - 1].latitude
          });
          var i = [];
          null === (e = o.body.pointList) || void 0 === e || e.forEach(function (t) {
            i.push({
              longitude: t.longitude,
              latitude: t.latitude
            });
          });
          n.setData(t({
            detalData: o.body
          }, "polyline[0].points", i)), console.log(n.data, "data");
          var a = n;
          0 == i.length && wx.getLocation({
            success: function (t) {
              a.setData({
                latitude: t.latitude,
                longitude: t.longitude
              }), setTimeout(function () {
                wx.createMapContext("myMap").moveToLocation();
              }, 2e3);
            }
          });
        }
      });
    },
    loadAmapUI: function (t) {
      var o = this;
      window.AMap;
      window.AMapUI.loadUI(["misc/PositionPicker"], function (e) {
        var n = new e({
          mode: "dragMap",
          map: t
        });
        n.on("success", function (t) {
          var e = t.position;
          o.placeSearch.searchNearBy("", e, function (t, o) {
            console.log(t, o);
          });
        }), n.on("fail", function (t) {
          console.error(t);
        }), n.start(), t.panBy(0, 1);
      });
    },
    onReady: function () {},
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {},
    onPullDownRefresh: function () {},
    onReachBottom: function () {},
    onShareAppMessage: function () {}
  });
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'pages/scoreCloud/scoreCloudInfo.js'
});
require("pages/scoreCloud/scoreCloudInfo.js");
