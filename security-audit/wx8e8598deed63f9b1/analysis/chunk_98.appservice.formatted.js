$gwx_XC_106 = function (_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_106 || [];
    function gz$gwx_XC_106_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_106_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_106_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_106_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, 'main-container fade-in']);
        Z([[2, '=='], [[6], [[7], [3, 'userInfo']], [3, 'schoolName']], [1, '南京信息工程大学']]);
        Z([3, '#ff3b30']);
        Z([3, 'volume-o']);
        Z([3, '16px']);
        Z([3, 'margin-right:8rpx;']);
        Z([3, '#007aff']);
        Z(z[3]);
        Z(z[4]);
        Z(z[5]);
        Z([[2, '=='], [[6], [[7], [3, 'userInfo']], [3, 'schoolCode']], [1, '13905']]);
        Z(z[2]);
        Z(z[3]);
        Z(z[4]);
        Z(z[5]);
        Z([3, 'list-warp']);
        Z([[6], [[7], [3, 'list']], [3, 'length']]);
        Z([[7], [3, 'list']]);
        Z([3, 'index']);
        Z([3, 'JumpDetails']);
        Z([3, 'item-row']);
        Z([[7], [3, 'item']]);
        Z([3, 'item-right glass-card-sm']);
        Z([[2, '&&'], [[2, '=='], [[6], [[7], [3, 'item']], [3, 'scorePassType']], [1, '0']], [[6], [[7], [3, 'item']], [3, 'scorePassRemark']]]);
        Z([3, 'margin-top-xs flex align-center justify-center']);
        Z([3, 'warning-o']);
        Z([[2, '=='], [[6], [[7], [3, 'item']], [3, 'scorePassType']], [1, 0]]);
        Z([3, 'flex justify-between padding-top-sm border-top']);
        Z(z[6]);
        Z([3, 'underway-o']);
        Z([3, '14px']);
        Z([3, '#ff9500']);
        Z([3, 'location-o']);
        Z(z[30]);
        Z([3, '未查询到成绩数据']);
        Z([3, 'search']);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_106_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_106_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_106 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_106 = true;
    var x = ['./pages/scoreCloud/index.wxml'];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_106_1();
      var hQDB = _n('view');
      _rz(z, hQDB, 'class', 0, e, s, gg);
      var oRDB = _v();
      _(hQDB, oRDB);
      if (_oz(z, 1, e, s, gg)) {
        oRDB.wxVkey = 1;
        var oTDB = _mz(z, 'van-icon', ['color', 2, 'name', 1, 'size', 2, 'style', 3], [], e, s, gg);
        _(oRDB, oTDB);
      }
      var lUDB = _mz(z, 'van-icon', ['color', 6, 'name', 1, 'size', 2, 'style', 3], [], e, s, gg);
      _(hQDB, lUDB);
      var cSDB = _v();
      _(hQDB, cSDB);
      if (_oz(z, 10, e, s, gg)) {
        cSDB.wxVkey = 1;
        var aVDB = _mz(z, 'van-icon', ['color', 11, 'name', 1, 'size', 2, 'style', 3], [], e, s, gg);
        _(cSDB, aVDB);
      }
      var tWDB = _n('view');
      _rz(z, tWDB, 'class', 15, e, s, gg);
      var eXDB = _v();
      _(tWDB, eXDB);
      if (_oz(z, 16, e, s, gg)) {
        eXDB.wxVkey = 1;
        var bYDB = _v();
        _(eXDB, bYDB);
        var oZDB = function (o2DB, x1DB, f3DB, gg) {
          var h5DB = _mz(z, 'view', ['bindtap', 19, 'class', 1, 'data-item', 2], [], o2DB, x1DB, gg);
          var o6DB = _n('view');
          _rz(z, o6DB, 'class', 22, o2DB, x1DB, gg);
          var c7DB = _v();
          _(o6DB, c7DB);
          if (_oz(z, 23, o2DB, x1DB, gg)) {
            c7DB.wxVkey = 1;
            var o8DB = _n('view');
            _rz(z, o8DB, 'class', 24, o2DB, x1DB, gg);
            var a0DB = _n('van-icon');
            _rz(z, a0DB, 'name', 25, o2DB, x1DB, gg);
            _(o8DB, a0DB);
            var l9DB = _v();
            _(o8DB, l9DB);
            if (_oz(z, 26, o2DB, x1DB, gg)) {
              l9DB.wxVkey = 1;
            }
            l9DB.wxXCkey = 1;
            _(c7DB, o8DB);
          }
          var tAEB = _n('view');
          _rz(z, tAEB, 'class', 27, o2DB, x1DB, gg);
          var eBEB = _mz(z, 'van-icon', ['color', 28, 'name', 1, 'size', 2], [], o2DB, x1DB, gg);
          _(tAEB, eBEB);
          var bCEB = _mz(z, 'van-icon', ['color', 31, 'name', 1, 'size', 2], [], o2DB, x1DB, gg);
          _(tAEB, bCEB);
          _(o6DB, tAEB);
          c7DB.wxXCkey = 1;
          c7DB.wxXCkey = 3;
          _(h5DB, o6DB);
          _(f3DB, h5DB);
          return f3DB;
        };
        bYDB.wxXCkey = 4;
        _2z(z, 17, oZDB, e, s, gg, bYDB, 'item', 'index', 'index');
      } else {
        eXDB.wxVkey = 2;
        var oDEB = _mz(z, 'van-empty', ['description', 34, 'image', 1], [], e, s, gg);
        _(eXDB, oDEB);
      }
      eXDB.wxXCkey = 1;
      eXDB.wxXCkey = 3;
      eXDB.wxXCkey = 3;
      _(hQDB, tWDB);
      oRDB.wxXCkey = 1;
      oRDB.wxXCkey = 3;
      cSDB.wxXCkey = 1;
      cSDB.wxXCkey = 3;
      _(r, hQDB);
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
        g = "$gwx_XC_106";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_106();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/scoreCloud/index.wxml'] = [$gwx_XC_106, './pages/scoreCloud/index.wxml'];else __wxAppCode__['pages/scoreCloud/index.wxml'] = $gwx_XC_106('./pages/scoreCloud/index.wxml');
;
__wxRoute = "pages/scoreCloud/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/scoreCloud/index.js";
define("pages/scoreCloud/index.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e,
    t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
    n = require("../../@babel/runtime/helpers/asyncToGenerator");
  (e = require("../../28A8E4E60A0D562F4ECE8CE18960EFA3.js")) && e.__esModule;
  var a = require("../../CDE443310A0D562FAB822B3611B0EFA3.js");
  Page({
    data: {
      list: [],
      scoreObj: {
        sunRunFreeType: 0,
        totalMileage: "0.00"
      },
      frontPageData: {
        sunRunFreeType: 0
      },
      option1: [],
      option2: [],
      option3: [],
      value1: "",
      value2: "",
      value3: "",
      value1Text: "",
      value2Text: "",
      value3Text: "",
      value1Index: 0,
      value2Index: 0,
      value3Index: 0,
      runTypeMap: ["阳光跑", "自由跑"],
      projectActive: "阳光跑",
      token: wx.getStorageSync("token"),
      userInfo: wx.getStorageSync("userInfo"),
      SetValue: {
        0: "无效",
        1: "有效",
        2: "申诉有效",
        3: "补录有效"
      },
      SetwarnType: {
        1: "步数异常",
        2: "人脸异常",
        3: "拟合度异常"
      }
    },
    vanDropdownChange: function (e) {
      var t = e.detail.value,
        n = this.data.option1[t];
      this.setData({
        value1Index: t,
        value1: n.value,
        value1Text: n.text
      }), this.getSunrunArchFn();
    },
    vanDropdownChange2: function (e) {
      var t = e.detail.value,
        n = this.data.option2[t];
      this.setData({
        value2Index: t,
        value2: n.value,
        value2Text: n.text
      }), this.getSunrunArchFn();
    },
    vanDropdownChange3: function (e) {
      var t = e.detail.value,
        n = this.data.option3[t];
      this.setData({
        value3Index: t,
        value3: n.value,
        value3Text: n.text
      }), this.getSunrunArchFn();
    },
    JumpDetails: function (e) {
      var t = e.currentTarget.dataset.item;
      1 == +t.flag && (wx.navigateTo({
        url: "./scoreCloudInfo?id=" + t.scoreId
      }), wx.setStorageSync("scoreHomeData", {
        value1: this.data.value1,
        value2: this.data.value2
      }));
    },
    goappeal: function (e) {
      var t = e.currentTarget.dataset.item;
      if (t) {
        var n = t.scoreId || "",
          a = t.paperId || "",
          r = "";
        t.startTmie && t.runTime && (r = t.runTime), wx.navigateTo({
          url: "/pages/appeal/index?scantronId=".concat(n, "&taskId=").concat(a, "&create_time_data=").concat(r)
        });
      }
    },
    getSunrunArchFn: function () {
      var e = this;
      a.request({
        url: "/wxxcx/sunrun/getSunrunArch",
        data: {
          projectName: this.data.projectActive,
          monthId: this.data.value1,
          termId: this.data.value2,
          paperId: this.data.value3,
          stuNumber: this.data.userInfo.snCode,
          token: this.data.token,
          snCode: this.data.userInfo.snCode,
          pageNumber: 1,
          rowNumber: 1e5
        },
        success: function (t) {
          e.setData({
            scoreObj: {
              requireNumber: t.requireNumber,
              completedTimes: t.completedTimes,
              incompleteTimes: t.incompleteTimes,
              totalMileage: t.totalMileage,
              sunRunFreeType: 0
            },
            list: t.data
          });
        }
      });
    },
    getSchoolMonthByTermFn: function () {
      var e = this;
      return n(t().mark(function n() {
        var r, o, u;
        return t().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return t.next = 2, a.request({
                url: "/wxxcx/sunrun/getSchoolMonthByTerm",
                data: {},
                success: function (t) {
                  var n = t.monthList || [];
                  n.forEach(function (e) {
                    e.text = e.monthName, e.value = e.monthId;
                  });
                  var a = 0,
                    r = "",
                    o = "",
                    u = n.find(function (e) {
                      return 1 == +e.ifCurrent;
                    });
                  u ? (r = u.monthId, o = u.monthName, a = n.indexOf(u)) : n.length > 0 && (r = n[0].monthId, o = n[0].monthName), e.setData({
                    option1: n,
                    value1: r,
                    value1Text: o,
                    value1Index: a
                  });
                }
              });
            case 2:
              return t.next = 4, a.request({
                url: "/wxxcx/sunrun/getTermList",
                data: {},
                success: function (t) {
                  var n = t.termList || [];
                  n.forEach(function (e) {
                    e.text = e.name, e.value = e.id;
                  });
                  var a = 0,
                    r = "",
                    o = "",
                    u = n.find(function (e) {
                      return 1 == +e.isActive;
                    });
                  u ? (r = u.id, o = u.name, a = n.indexOf(u)) : n.length > 0 && (r = n[0].id, o = n[0].name), e.setData({
                    option2: n,
                    value2: r,
                    value2Text: o,
                    value2Index: a
                  });
                }
              });
            case 4:
              return t.next = 6, a.request({
                url: "/wxxcx/sunrun/getSunrunPaperList",
                data: {
                  stuNumber: e.data.userInfo.snCode,
                  snCode: e.data.userInfo.snCode
                },
                success: function (t) {
                  var n = t.sunrunTaskList || [];
                  n.forEach(function (e) {
                    e.text = e.name, e.value = e.id;
                  }), n.unshift({
                    text: "全部任务",
                    value: ""
                  }), e.setData({
                    option3: n,
                    value3: "",
                    value3Text: "全部任务",
                    value3Index: 0
                  });
                }
              });
            case 6:
              (r = wx.getStorageSync("scoreHomeData")) && r.value1 && (o = e.data.option1.findIndex(function (e) {
                return e.value == r.value1;
              }), u = e.data.option2.findIndex(function (e) {
                return e.value == r.value2;
              }), o > -1 && e.setData({
                value1: r.value1,
                value1Index: o,
                value1Text: e.data.option1[o].text
              }), u > -1 && e.setData({
                value2: r.value2,
                value2Index: u,
                value2Text: e.data.option2[u].text
              }));
            case 8:
            case "end":
              return t.stop();
          }
        }, n);
      }))();
    },
    againsaveScores: function () {
      var e = this;
      return n(t().mark(function n() {
        var a, r, o, u, s, i, c, l;
        return t().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              for (console.log(wx.getStorageInfoSync()), a = wx.getStorageInfoSync(), r = wx.getStorageSync("userInfo"), a = a.keys, o = [], u = 0; u < a.length; u++) "RunInfo" == (s = a[u].split("-"))[0] && o.push(s[1]);
              o = o.sort().reverse(), i = [], 0, c = 0;
            case 10:
              if (!(c < o.length)) {
                t.next = 23;
                break;
              }
              if ((l = JSON.parse(wx.getStorageSync("RunInfo-" + o[c]))).id = o[c], !(+l.allKm > 0 && 2 == +l.runType && !l.isCloud || +l.allKm >= 1 && "男" == r.sex && !l.isCloud || +l.allKm >= .8 && "女" == r.sex && !l.isCloud)) {
                t.next = 19;
                break;
              }
              return console.log("temp", l), t.next = 17, e.saveScores(l);
            case 17:
              1;
            case 19:
              i.push(l);
            case 20:
              c++, t.next = 10;
              break;
            case 23:
              console.log("runinfo_data", i);
            case 24:
            case "end":
              return t.stop();
          }
        }, n);
      }))();
    },
    saveScores: function (e) {
      var r = this;
      return n(t().mark(function n() {
        var o, u, s;
        return t().wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              return console.log("tempsunRunExercises", e), r, o = 0, 2 == e.runType && (o = 1), u = wx.getStorageSync("userInfo"), s = {
                scantronId: e.scantronId,
                stuNumber: u.snCode,
                schoolCode: u.schoolCode,
                runType: o,
                km: e.allKm,
                usedTime: e.time_data,
                fitDegree: Number(e.fitDegree).toFixed(2),
                avgSpeed: e.speed_data,
                steps: 0,
                token: wx.getStorageSync("token"),
                version: e.version,
                phoneInfo: e.brand + "&" + e.model + "&" + e.system,
                evaluateDate: e.create_time_data.split("T")[0],
                endTime: e.end_time_data.split("T")[1],
                startTime: e.create_time_data.split("T")[1],
                taskId: e.taskId,
                flag: "1"
              }, console.log("sunRunExercises", s), t.next = 9, a.request({
                url: "/wxxcx/sunrun/sunRunExercises",
                data: s,
                success: function (t) {
                  console.log("sunRunExercises", e), t && 0 == +t.code && (e.isCloud = !0, wx.setStorageSync("RunInfo-" + e.id, JSON.stringify(e)));
                },
                doFail: function (e) {}
              });
            case 9:
              if (e.scantronId && "" != e.scantronId) {
                t.next = 11;
                break;
              }
              return t.abrupt("return");
            case 11:
              return t.next = 13, a.request({
                url: "/wxxcx/platform/recrecord/sunRunExercisesDetail",
                data: {
                  pointList: e.points_data,
                  scantronId: e.scantronId,
                  token: wx.getStorageSync("token")
                },
                success: function (e) {},
                doFail: function (e) {}
              });
            case 13:
            case "end":
              return t.stop();
          }
        }, n);
      }))();
    },
    getAppFrontPage: function () {
      var e = this,
        t = wx.getStorageSync("userInfo"),
        n = wx.getStorageSync("token");
      a.request({
        url: "/wxxcx/platform/serverlist/getAppFrontPage",
        data: {
          snCode: t.snCode,
          token: n,
          stuNumber: t.snCode
        },
        success: function (t) {
          console.log(t), e.setData({
            frontPageData: t
          });
        }
      });
    },
    onLoad: function (e) {
      var a = this;
      return n(t().mark(function e() {
        return t().wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (a.data.userInfo.snCode && "" != a.data.userInfo.snCode) {
                e.next = 2;
                break;
              }
              return e.abrupt("return");
            case 2:
              return e.next = 4, a.againsaveScores();
            case 4:
              return e.next = 6, a.getSchoolMonthByTermFn();
            case 6:
              console.log(22222222222), a.getSunrunArchFn(), a.getAppFrontPage(), console.log(444444444444);
            case 10:
            case "end":
              return e.stop();
          }
        }, e);
      }))();
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
  currentFile: 'pages/scoreCloud/index.js'
});
require("pages/scoreCloud/index.js");
