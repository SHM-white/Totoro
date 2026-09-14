$gwx_XC_105 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_105 || [];
    function gz$gwx_XC_105_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_105_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_105_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_105_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, 'main-container fade-in']);
        Z([[7], [3, 'isCloud']]);
        Z([a, [3, 'glass-card status-card '], [[2, '?:'], [[2, '=='], [[6], [[7], [3, 'runPointData']], [3, 'sunRunStatus']], [1, 0]], [1, 'bg-gradient-red'], [1, 'bg-gradient-blue']], [3, ' margin-bottom shadow-blur padding-lg']]);
        Z([3, 'flex flex-direction align-center justify-center margin-bottom']);
        Z([[2, '=='], [[6], [[7], [3, 'runPointData']], [3, 'sunRunStatus']], [1, 0]]);
        Z([[6], [[7], [3, 'runPointData']], [3, 'sunRunMsg']]);
        Z([[2, '&&'], [[6], [[7], [3, 'runPointData']], [3, 'sunRunMsg']], [[2, '=='], [[6], [[7], [3, 'runPointData']], [3, 'sunRunMsg']], [1, '点位不达标']]]);
        Z([[2, '=='], [[6], [[7], [3, 'sunrunConfig']], [3, 'sunrunPointShowOff']], [1, '1']]);
        Z([[2, '&&'], [[2, '=='], [[6], [[7], [3, 'runPointData']], [3, 'runPointType']], [1, 0]], [[2, '=='], [[6], [[7], [3, 'reissueCardData']], [3, 'bkStatus']], [1, 1]]]);
        Z([[2, '||'], [[2, '=='], [[7], [3, 'runType']], [1, 0]], [[2, '=='], [[7], [3, 'runType']], [1, 2]]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_105_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_105_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_105 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_105 = true;
    var x = ['./pages/run/statement.wxml'];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_105_1();
      var oFDB = _n('view');
      _rz(z, oFDB, 'class', 0, e, s, gg);
      var lGDB = _v();
      _(oFDB, lGDB);
      if (_oz(z, 1, e, s, gg)) {
        lGDB.wxVkey = 1;
        var tIDB = _n('view');
        _rz(z, tIDB, 'class', 2, e, s, gg);
        var oLDB = _n('view');
        _rz(z, oLDB, 'class', 3, e, s, gg);
        var xMDB = _v();
        _(oLDB, xMDB);
        if (_oz(z, 4, e, s, gg)) {
          xMDB.wxVkey = 1;
        }
        var oNDB = _v();
        _(oLDB, oNDB);
        if (_oz(z, 5, e, s, gg)) {
          oNDB.wxVkey = 1;
        }
        var fODB = _v();
        _(oLDB, fODB);
        if (_oz(z, 6, e, s, gg)) {
          fODB.wxVkey = 1;
        }
        xMDB.wxXCkey = 1;
        oNDB.wxXCkey = 1;
        fODB.wxXCkey = 1;
        _(tIDB, oLDB);
        var eJDB = _v();
        _(tIDB, eJDB);
        if (_oz(z, 7, e, s, gg)) {
          eJDB.wxVkey = 1;
        }
        var bKDB = _v();
        _(tIDB, bKDB);
        if (_oz(z, 8, e, s, gg)) {
          bKDB.wxVkey = 1;
        }
        eJDB.wxXCkey = 1;
        bKDB.wxXCkey = 1;
        _(lGDB, tIDB);
      } else {
        lGDB.wxVkey = 2;
      }
      var aHDB = _v();
      _(oFDB, aHDB);
      if (_oz(z, 9, e, s, gg)) {
        aHDB.wxVkey = 1;
      }
      lGDB.wxXCkey = 1;
      aHDB.wxXCkey = 1;
      _(r, oFDB);
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
        g = "$gwx_XC_105";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_105();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/run/statement.wxml'] = [$gwx_XC_105, './pages/run/statement.wxml'];else __wxAppCode__['pages/run/statement.wxml'] = $gwx_XC_105('./pages/run/statement.wxml');
;
__wxRoute = "pages/run/statement";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/run/statement.js";
define("pages/run/statement.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  require("../../@babel/runtime/helpers/Arrayincludes");
  var t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
    e = require("../../@babel/runtime/helpers/asyncToGenerator"),
    a = require("../../@babel/runtime/helpers/defineProperty"),
    n = require("../../CDE443310A0D562FAB822B3611B0EFA3.js");
  Page({
    data: {
      userInfo: {},
      polyline: [{
        points: [],
        color: "#07c160",
        width: 2
      }],
      latitude: 0,
      longitude: 0,
      time_data: "00:00",
      distance_data: "0.00",
      fitDegree: "0",
      create_time_data: "",
      speed_data: "0'00\"",
      kcal_data: "0.00",
      scantronId: "",
      reissueCardData: {
        bkStatus: 0,
        count: 0,
        startTime: "00:00",
        endTime: "00:00"
      },
      abnormalPointType: 0,
      runPointData: {
        sunRunStatus: 1,
        allCount: 0,
        nullCount: 0,
        alreadyCount: 0
      },
      sunrunConfig: {
        sunrunPointShowOff: "0",
        sunrunStartFace: "0",
        sunrunPointRandom: "0"
      },
      isCloud: !0,
      run_data_cache: null
    },
    onLoad: function (t) {
      var e;
      wx.setNavigationBarTitle({
        title: "运动结算"
      }), wx.setNavigationBarColor({
        frontColor: "#000000",
        backgroundColor: "#ffffff"
      });
      var n = {};
      try {
        n = JSON.parse(wx.getStorageSync("RunInfo-" + t.id));
      } catch (t) {
        console.error("读取本地缓存失败", t);
      }
      var r = n.time_data || "00:00",
        o = n.distance_data || "0.00",
        i = n.fitDegree || "0",
        s = n.create_time_data || "",
        u = n.kcal_data || "0.00",
        d = n.points_data || [],
        c = n.runType || 0,
        l = !1 !== n.isCloud,
        f = r.split(":"),
        g = f[0] || 0,
        h = f[1] || 0,
        x = f[2] || 0,
        p = 0;
      p = "0.00" == o ? 0 : (60 * parseFloat(g) + parseFloat(h) + parseFloat(x) / 60) / parseFloat(o);
      var m = Math.floor(p),
        w = Math.floor(60 * (p - m));
      p = m + "'" + (w < 10 ? "0" + w : w) + '"';
      var _ = wx.getStorageSync("userInfo");
      this.setData((e = {
        userInfo: _,
        id: t.id,
        time_data: r,
        distance_data: o,
        fitDegree: i,
        create_time_data: s,
        speed_data: p,
        kcal_data: u
      }, a(e, "polyline[0].points", d), a(e, "runType", c), a(e, "scantronId", n.scantronId), a(e, "taskId", n.taskId), a(e, "isCloud", l), a(e, "run_data_cache", n), e)), this.getSunRunConfig(), l && (this.getRunPointList(), this.selectAdditionalCardBySnCode());
      var v = this;
      wx.getLocation({
        success: function (t) {
          v.setData({
            latitude: t.latitude,
            longitude: t.longitude
          }), setTimeout(function () {
            var t = wx.createMapContext("myMap");
            t && t.moveToLocation();
          }, 2e3);
        }
      });
    },
    getSunRunConfig: function () {
      var t = this;
      n.request({
        url: "/wxxcx/platform/sunrunFace/selectSunRunStartConfiguration",
        data: {
          snCode: this.data.userInfo.snCode,
          token: wx.getStorageSync("token")
        },
        success: function (e) {
          e && t.setData({
            sunrunConfig: {
              sunrunPointShowOff: e.body.sunrunPointShowOff || "0",
              sunrunStartFace: e.body.sunrunStartFace || "0",
              sunrunPointRandom: e.body.sunrunPointRandom || "0"
            }
          });
        }
      });
    },
    getRunPointList: function () {
      var t = this,
        e = {
          scantronId: this.data.scantronId
        };
      n.request({
        url: "/wxxcx/sunrun/getRunPointList",
        data: e,
        success: function (e) {
          t.setData({
            runPointData: e
          });
        }
      }), n.request({
        url: "/wxxcx/sunrun/getRunPointListAbnormal",
        data: e,
        success: function (e) {
          t.setData({
            abnormalPointType: e.abnormalPointType || 0
          });
        }
      });
    },
    selectAdditionalCardBySnCode: function () {
      var t = this,
        e = {
          snCode: wx.getStorageSync("userInfo").snCode,
          paperId: this.data.taskId
        };
      n.request({
        url: "/wxxcx/platform/h5/selectAdditionalCardBySnCode",
        data: e,
        success: function (e) {
          t.setData({
            reissueCardData: e.body
          });
        }
      });
    },
    retrySubmit: function () {
      var a = this;
      return e(t().mark(function e() {
        var r, o, i, s;
        return t().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return a, r = a.data.run_data_cache, o = a.data.userInfo, i = function (t, e) {
                return t && (t.includes("T") ? t.split("T") : t.split(" "))[e] || "";
              }, wx.showLoading({
                title: "安全连接中...",
                mask: !0
              }), s = {
                scantronId: r.scantronId || "",
                stuNumber: o.snCode || "",
                schoolCode: o.schoolCode || "",
                runType: 2 == r.runType ? 1 : 0,
                km: r.distance_data || "",
                usedTime: r.time_data || "",
                fitDegree: Number(r.fitDegree).toFixed(2) || "",
                avgSpeed: r.speed_data || "",
                steps: r.steps || "0",
                token: wx.getStorageSync("token") || "",
                version: r.version || "",
                phoneInfo: (r.brand || "") + "&" + (r.model || "") + "&" + (r.system || ""),
                evaluateDate: i(r.create_time_data, 0) || "",
                endTime: i(r.end_time_data, 1) || "",
                startTime: i(r.create_time_data, 1) || "",
                taskId: r.taskId || "",
                sunrunPathPointList: [],
                flag: "1"
              }, t.prev = 6, t.next = 9, new Promise(function (t, e) {
                n.request({
                  url: "/wxxcx/sunrun/sunRunExercises",
                  data: s,
                  showLoading: !1,
                  success: function (a) {
                    a && "00" == a.status ? t() : e(new Error(a.msg || a.message || "服务器繁忙"));
                  },
                  doFail: function () {
                    return e(new Error("网络被拦截或信号弱"));
                  }
                });
              });
            case 9:
              return t.next = 11, new Promise(function (t, e) {
                n.request({
                  url: "/wxxcx/platform/recrecord/sunRunExercisesDetail",
                  data: {
                    pointList: r.points_data || [],
                    gyroscope: [],
                    accelerometer: [],
                    cheatCode: r.cheatCode || "正常跑步",
                    scantronId: r.scantronId,
                    token: wx.getStorageSync("token")
                  },
                  showLoading: !1,
                  success: function () {
                    return t();
                  },
                  doFail: function () {
                    return t();
                  }
                });
              });
            case 11:
              wx.hideLoading(), a.vibrateFunc(1), wx.showToast({
                title: "成绩上传成功",
                icon: "success"
              }), r.isCloud = !0, wx.setStorageSync("RunInfo-" + a.data.id, JSON.stringify(r)), a.setData({
                isCloud: !0,
                run_data_cache: r
              }), a.getRunPointList(), a.selectAdditionalCardBySnCode(), t.next = 25;
              break;
            case 21:
              t.prev = 21, t.t0 = t.catch(6), wx.hideLoading(), wx.showModal({
                title: "上传未能完成",
                content: t.t0.message || "请确保连接至 5G/4G 网络后重试。",
                showCancel: !1
              });
            case 25:
            case "end":
              return t.stop();
          }
        }, e, null, [[6, 21]]);
      }))();
    },
    goToLocalRecords: function () {
      this.vibrateFunc(1), wx.navigateTo({
        url: "/pages/history/index"
      });
    },
    goappeal: function () {
      var t = this.data.scantronId,
        e = this.data.taskId,
        a = this.data.create_time_data ? this.data.create_time_data.split("T")[0] : "";
      wx.navigateTo({
        url: "/pages/appeal/index?scantronId=".concat(t, "&taskId=").concat(e, "&create_time_data=").concat(a)
      });
    },
    goback: function () {
      this.vibrateFunc(1), wx.switchTab({
        url: "../run/index"
      });
    },
    toDetail: function () {
      this.vibrateFunc(1);
      var t = this.data.id;
      wx.navigateTo({
        url: "../history/detail?id=" + t
      });
    },
    toReissueCard: function () {
      this.vibrateFunc(1);
      var t = this.data.id;
      wx.redirectTo({
        url: "../reissueCard/index?id=" + t
      });
    },
    toShare: function () {
      this.vibrateFunc(1);
      var t = this.data.id;
      wx.navigateTo({
        url: "../share/index?id=" + t
      });
    },
    vibrateFunc: function (t) {
      wx.getStorageSync("vibrate") && (1 == t && wx.vibrateShort(), 2 == t && wx.vibrateLong());
    }
  });
}, {
  isPage: true,
  isComponent: true,
  currentFile: 'pages/run/statement.js'
});
require("pages/run/statement.js");
