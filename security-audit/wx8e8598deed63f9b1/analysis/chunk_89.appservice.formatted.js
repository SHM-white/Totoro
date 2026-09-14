$gwx_XC_96 = (function (
  _,
  _v,
  _n,
  _p,
  _s,
  _wp,
  _wl,
  $gwn,
  $gwl,
  $gwh,
  wh,
  $gstack,
  $gwrt,
  gra,
  grb,
  TestTest,
  wfor,
  _ca,
  _da,
  _r,
  _rz,
  _o,
  _oz,
  _1,
  _1z,
  _2,
  _2z,
  _m,
  _mz,
  nv_getDate,
  nv_getRegExp,
  nv_console,
  nv_parseInt,
  nv_parseFloat,
  nv_isNaN,
  nv_isFinite,
  nv_decodeURI,
  nv_decodeURIComponent,
  nv_encodeURI,
  nv_encodeURIComponent,
  $gdc,
  nv_JSON,
  _af,
  _gv,
  _ai,
  _grp,
  _gd,
  _gapi,
  $ixc,
  _ic,
  _w,
  _ev,
  _tsd,
) {
  return function (path, global) {
    if (typeof global === "undefined") {
      if (typeof __GWX_GLOBAL__ === "undefined") global = {};
      else global = __GWX_GLOBAL__;
    }
    if (typeof __WXML_GLOBAL__ === "undefined") {
      __WXML_GLOBAL__ = {};
    }
    __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
    var e_ = {};
    if (typeof global.entrys === "undefined") global.entrys = {};
    e_ = global.entrys;
    var d_ = {};
    if (typeof global.defines === "undefined") global.defines = {};
    d_ = global.defines;
    var f_ = {};
    if (typeof global.modules === "undefined") global.modules = {};
    f_ = global.modules || {};
    var p_ = {};
    __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {};
    __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
    __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_96 || [];
    function gz$gwx_XC_96_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_96_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_96_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_96_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "loginBox"]);
        Z([3, "fieldbox"]);
        Z([3, "showSchoolPicker"]);
        Z([3, "fieldcustom"]);
        Z([3, "fieldinputcustom"]);
        Z([3, "所在学校"]);
        Z([3, "fieldlabelcustom"]);
        Z([[7], [3, "schoolName"]]);
        Z([3, "请选择学校"]);
        Z([3, "margin:10rpx;"]);
        Z([3, "hideSchoolPopup"]);
        Z([3, "bottom"]);
        Z([[7], [3, "showSchoolPopup"]]);
        Z([3, "onSearchSchool"]);
        Z([3, "搜索学校名称"]);
        Z([[7], [3, "schoolSearchKeyword"]]);
        Z(z[10]);
        Z([3, "onConfirmSchool"]);
        Z([[7], [3, "filteredSchoolList"]]);
        Z([3, "name"]);
        Z([3, "inputChange"]);
        Z(z[3]);
        Z(z[4]);
        Z([3, "学生证号"]);
        Z(z[6]);
        Z([[7], [3, "snCode"]]);
        Z([3, "请输入学生证号"]);
        Z([3, "margin-bottom:10px;"]);
        Z([
          [2, "&&"],
          [[7], [3, "ishaveStudent"]],
          [
            [2, "!"],
            [[7], [3, "ismessageCode"]],
          ],
        ]);
        Z(z[20]);
        Z(z[3]);
        Z(z[4]);
        Z([3, "学生姓名"]);
        Z(z[6]);
        Z([[7], [3, "studentName"]]);
        Z([3, "请输入学生姓名"]);
        Z(z[9]);
        Z([
          [2, "&&"],
          [[7], [3, "ishaveStudent"]],
          [[7], [3, "ismessageCode"]],
        ]);
        Z(z[20]);
        Z(z[3]);
        Z(z[4]);
        Z([3, "手机号"]);
        Z(z[6]);
        Z([[7], [3, "phoneNumber"]]);
        Z([3, "请输入手机号"]);
        Z(z[9]);
        Z([3, "number"]);
        Z(z[37]);
        Z(z[20]);
        Z(z[3]);
        Z(z[4]);
        Z([3, "短信验证码"]);
        Z(z[6]);
        Z([[7], [3, "messageCode"]]);
        Z([3, "请输入短信验证码"]);
        Z([[7], [3, "ishaveStudent"]]);
        Z([
          [2, "!"],
          [[7], [3, "ishaveStudent"]],
        ]);
        Z([3, "closeDialogSchool"]);
        Z([3, "confirmDialogSchool"]);
        Z([[7], [3, "dialogModalShow"]]);
        Z([3, "标题"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_96_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_96_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_96 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_96 = true;
    var x = ["./pages/login/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_96_1();
      var c4Z = _n("view");
      _rz(z, c4Z, "class", 0, e, s, gg);
      var h5Z = _n("view");
      _rz(z, h5Z, "class", 1, e, s, gg);
      var tA1 = _mz(
        z,
        "van-field",
        [
          "center",
          -1,
          "clearable",
          -1,
          "readonly",
          -1,
          "useButtonSlot",
          -1,
          "bindtap",
          2,
          "customClass",
          1,
          "inputClass",
          2,
          "label",
          3,
          "labelClass",
          4,
          "value",
          5,
          "placeholder",
          6,
          "style",
          7,
        ],
        [],
        e,
        s,
        gg,
      );
      tA1.rawAttr = { "model:value": "{{schoolName}}" };
      _(h5Z, tA1);
      var eB1 = _mz(
        z,
        "van-popup",
        ["round", -1, "bind:close", 10, "position", 1, "show", 2],
        [],
        e,
        s,
        gg,
      );
      var bC1 = _mz(
        z,
        "van-search",
        ["bind:change", 13, "placeholder", 1, "value", 2],
        [],
        e,
        s,
        gg,
      );
      _(eB1, bC1);
      var oD1 = _mz(
        z,
        "van-picker",
        [
          "showToolbar",
          -1,
          "bind:cancel",
          16,
          "bind:confirm",
          1,
          "columns",
          2,
          "valueKey",
          3,
        ],
        [],
        e,
        s,
        gg,
      );
      _(eB1, oD1);
      _(h5Z, eB1);
      var xE1 = _mz(
        z,
        "van-fieldlogin",
        [
          "bindinput",
          20,
          "customClass",
          1,
          "inputClass",
          2,
          "label",
          3,
          "labelClass",
          4,
          "value",
          5,
          "placeholder",
          6,
          "style",
          7,
        ],
        [],
        e,
        s,
        gg,
      );
      xE1.rawAttr = { "model:value": "{{snCode}}" };
      _(h5Z, xE1);
      var o6Z = _v();
      _(h5Z, o6Z);
      if (_oz(z, 28, e, s, gg)) {
        o6Z.wxVkey = 1;
        var oF1 = _mz(
          z,
          "van-field",
          [
            "bindinput",
            29,
            "customClass",
            1,
            "inputClass",
            2,
            "label",
            3,
            "labelClass",
            4,
            "value",
            5,
            "placeholder",
            6,
            "style",
            7,
          ],
          [],
          e,
          s,
          gg,
        );
        oF1.rawAttr = { "model:value": "{{studentName}}" };
        _(o6Z, oF1);
      }
      var c7Z = _v();
      _(h5Z, c7Z);
      if (_oz(z, 37, e, s, gg)) {
        c7Z.wxVkey = 1;
        var fG1 = _mz(
          z,
          "van-field",
          [
            "bindinput",
            38,
            "customClass",
            1,
            "inputClass",
            2,
            "label",
            3,
            "labelClass",
            4,
            "value",
            5,
            "placeholder",
            6,
            "style",
            7,
            "type",
            8,
          ],
          [],
          e,
          s,
          gg,
        );
        fG1.rawAttr = { "model:value": "{{phoneNumber}}" };
        _(c7Z, fG1);
      }
      var o8Z = _v();
      _(h5Z, o8Z);
      if (_oz(z, 47, e, s, gg)) {
        o8Z.wxVkey = 1;
        var cH1 = _mz(
          z,
          "van-field",
          [
            "center",
            -1,
            "clearable",
            -1,
            "useButtonSlot",
            -1,
            "bindinput",
            48,
            "customClass",
            1,
            "inputClass",
            2,
            "label",
            3,
            "labelClass",
            4,
            "value",
            5,
            "placeholder",
            6,
          ],
          [],
          e,
          s,
          gg,
        );
        cH1.rawAttr = { "model:value": "{{messageCode}}" };
        _(o8Z, cH1);
      }
      var l9Z = _v();
      _(h5Z, l9Z);
      if (_oz(z, 55, e, s, gg)) {
        l9Z.wxVkey = 1;
      }
      var a0Z = _v();
      _(h5Z, a0Z);
      if (_oz(z, 56, e, s, gg)) {
        a0Z.wxVkey = 1;
      }
      o6Z.wxXCkey = 1;
      o6Z.wxXCkey = 3;
      c7Z.wxXCkey = 1;
      c7Z.wxXCkey = 3;
      o8Z.wxXCkey = 1;
      o8Z.wxXCkey = 3;
      l9Z.wxXCkey = 1;
      a0Z.wxXCkey = 1;
      _(c4Z, h5Z);
      var hI1 = _mz(
        z,
        "van-dialog",
        [
          "showCancelButton",
          -1,
          "useSlot",
          -1,
          "bind:close",
          57,
          "bind:confirm",
          1,
          "show",
          2,
          "title",
          3,
        ],
        [],
        e,
        s,
        gg,
      );
      _(c4Z, hI1);
      _(r, c4Z);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_96";
        var main = e_[path].f;
        if (typeof global === "undefined") global = {};
        global.f = $gdc(f_[path], "", 1);
        try {
          main(env, {}, root, global);
          _tsd(root);
        } catch (err) {
          console.log(err);
        }
        g = "";
        return root;
      };
    }
  };
})(
  __g.a,
  __g.b,
  __g.c,
  __g.d,
  __g.e,
  __g.f,
  __g.g,
  __g.h,
  __g.i,
  __g.j,
  __g.k,
  __g.l,
  __g.m,
  __g.n,
  __g.o,
  __g.p,
  __g.q,
  __g.r,
  __g.s,
  __g.t,
  __g.u,
  __g.v,
  __g.w,
  __g.x,
  __g.y,
  __g.z,
  __g.A,
  __g.B,
  __g.C,
  __g.D,
  __g.E,
  __g.F,
  __g.G,
  __g.H,
  __g.I,
  __g.J,
  __g.K,
  __g.L,
  __g.M,
  __g.N,
  __g.O,
  __g.P,
  __g.Q,
  __g.R,
  __g.S,
  __g.T,
  __g.U,
  __g.V,
  __g.W,
  __g.X,
  __g.Y,
  __g.Z,
  __g.aa,
);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_96();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/login/index.wxml"] = [
    $gwx_XC_96,
    "./pages/login/index.wxml",
  ];
else
  __wxAppCode__["pages/login/index.wxml"] = $gwx_XC_96(
    "./pages/login/index.wxml",
  );
__wxRoute = "pages/login/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/login/index.js";
define(
  "pages/login/index.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore,
  ) {
    "use strict";
    var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
      o = require("../../@babel/runtime/helpers/asyncToGenerator"),
      t = require("../../CDE443310A0D562FAB822B3611B0EFA3.js"),
      a = getApp();
    Page({
      data: {
        snCode: "",
        studentName: "",
        schoolCode: "",
        schoolName: "",
        vertificationCode: "",
        phoneNumber: "",
        password: "123456",
        school_index: 0,
        school_picker: ["龙猫大学", "龙猫大学1", "龙猫大学2", "龙猫大学3"],
        schoolList: [],
        selectedSchoolName: "",
        selectedSchoolCode: "",
        showSchoolPopup: !1,
        schoolSearchKeyword: "",
        filteredSchoolList: [],
        dialogModalShow: !1,
        confirmable: !1,
        nextconfirmable: !1,
        waitingCode: !1,
        waiteTime: 0,
        interval: -1,
        messageCode: "",
        isLogin: !0,
        isRegister: !1,
        ishaveStudent: !1,
        ismessageCode: !0,
        isRequire: !0,
      },
      getSunRunFirstConfiguration: function () {
        var a = this;
        return o(
          e().mark(function o() {
            var s;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (s = a),
                      (e.next = 3),
                      t.request({
                        url: "/wxxcx/sunrun/getSunRunFirstConfiguration",
                        data: { schoolCode: a.data.schoolCode },
                        success: function (e) {
                          var o;
                          1 ==
                          +(null == e || null === (o = e.obj) || void 0 === o
                            ? void 0
                            : o.studentNameLoginType)
                            ? s.setData({ ismessageCode: !1 })
                            : s.setData({ ismessageCode: !0 });
                        },
                        doFail: function (e) {},
                      })
                    );
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, o);
          }),
        )();
      },
      checkSchoolRedirect: function (e) {
        return (
          "10289" === e &&
          (wx.showModal({
            title: "服务迁移升级通知",
            content:
              "亲爱的同学，江苏科技大学校园跑服务已全面升级！\n为保证您的正常跑操打卡，请前往专属小程序【江苏科技大学校园跑】进行操作。",
            confirmText: "一键前往",
            confirmColor: "#07c160",
            cancelText: "我知道了",
            success: function (e) {
              e.confirm &&
                wx.navigateToMiniProgram({
                  appId: "wxfb4d255c8de7378e",
                  path: "pages/login/index",
                  success: function (e) {
                    console.log("跳转新小程序成功");
                  },
                  fail: function (e) {
                    wx.showToast({
                      title: "跳转失败，请在微信搜索【江苏科技大学校园跑】",
                      icon: "none",
                      duration: 3e3,
                    });
                  },
                });
            },
          }),
          !0)
        );
      },
      gethaveStudent: function () {
        var s = this;
        return o(
          e().mark(function o() {
            var n;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = s),
                      wx.getStorageSync("schoolBaseUrl"),
                      "" != s.data.schoolCode)
                    ) {
                      e.next = 5;
                      break;
                    }
                    return (
                      wx.showToast({ title: "请先选择学校", icon: "none" }),
                      e.abrupt("return")
                    );
                  case 5:
                    if ("" != s.data.snCode) {
                      e.next = 8;
                      break;
                    }
                    return (
                      wx.showToast({ title: "请先填写学生证号", icon: "none" }),
                      e.abrupt("return")
                    );
                  case 8:
                    if (!s.checkSchoolRedirect(s.data.schoolCode)) {
                      e.next = 10;
                      break;
                    }
                    return e.abrupt("return");
                  case 10:
                    return ((e.next = 12), s.getSunRunFirstConfiguration());
                  case 12:
                    return (
                      (e.next = 14),
                      t.request({
                        url: "/wxxcx/platform/serverlist/selectSunRunStudent",
                        data: {
                          schoolCode: s.data.schoolCode,
                          snCode: s.data.snCode,
                        },
                        success: function (e) {
                          (wx.hideLoading(),
                            console.log(e),
                            n.setData({ isRequire: !0 }),
                            e.code && 0 == +e.code
                              ? n.setData({ ishaveStudent: !0 })
                              : n.setData({ ishaveStudent: !1 }),
                            console.log("1", n.data.ishaveStudent));
                        },
                        doFail: function (e) {
                          (console.log(123, e),
                            wx.hideLoading(),
                            wx.showModal({
                              title: "提示",
                              content: "接口超时重新登录！",
                              showCancel: !1,
                              success: function (e) {
                                e.confirm;
                              },
                            }));
                        },
                      })
                    );
                  case 14:
                    (console.log("2", s.data.ishaveStudent),
                      s.data.ishaveStudent
                        ? (wx.showLoading({ title: "进行中..", mask: !0 }),
                          wx.login({
                            success: function (e) {
                              var o = e.code;
                              t.request({
                                url: "/wxxcx/platform/serverlist/getLesseeServerByNewDecode",
                                data: { code: o },
                                success: function (e) {
                                  (wx.hideLoading(),
                                    console.log("App.globalData", a.globalData),
                                    wx.setStorageSync("token", e.token || ""),
                                    e.code &&
                                      0 == +e.code &&
                                      (e.code && 0 == +e.code
                                        ? (n.setData({ isRegister: !0 }),
                                          n.getUserInfo(),
                                          wx.getStorageSync("height")
                                            ? wx.switchTab({
                                                url: "../index/index",
                                              })
                                            : wx.navigateTo({
                                                url: "./setting",
                                              }))
                                        : e.code && "-6001" == e.code
                                          ? (n.setData({ isRegister: !1 }),
                                            wx.showToast({
                                              title: e.message,
                                              icon: "none",
                                            }))
                                          : (n.setData({ isLogin: !1 }),
                                            wx.showToast({
                                              title:
                                                "系统异常请联系管理员处理！！",
                                              icon: "none",
                                            }))));
                                },
                                doFail: function (e) {
                                  (wx.hideLoading(),
                                    wx.showModal({
                                      title: "提示",
                                      content: "接口超时重新登录！",
                                      showCancel: !1,
                                      success: function (e) {
                                        e.confirm;
                                      },
                                    }),
                                    console.log("过点接口失败", e));
                                },
                              });
                            },
                          }))
                        : wx.showToast({
                            title: "暂未录入学生",
                            icon: "none",
                          }));
                  case 16:
                  case "end":
                    return e.stop();
                }
            }, o);
          }),
        )();
      },
      showSchoolPicker: function () {
        (console.log(11),
          this.setData({
            showSchoolPopup: !0,
            filteredSchoolList: this.data.schoolList,
          }));
      },
      hideSchoolPopup: function () {
        this.setData({ showSchoolPopup: !1, schoolSearchKeyword: "" });
      },
      onSearchSchool: function (e) {
        var o = e.detail;
        if ((this.setData({ schoolSearchKeyword: o }), o)) {
          if (this.data.schoolList.length > 0) {
            var t,
              a =
                null === (t = this.data.schoolList) || void 0 === t
                  ? void 0
                  : t.filter(function (e) {
                      return e.name && e.name.indexOf(o) > -1;
                    });
            this.setData({ filteredSchoolList: a });
          }
        } else this.setData({ filteredSchoolList: this.data.schoolList });
      },
      onConfirmSchool: function (e) {
        var o = e.detail.value;
        if (o) {
          if (this.checkSchoolRedirect(o.code))
            return void this.setData({
              showSchoolPopup: !1,
              schoolSearchKeyword: "",
            });
          (this.setData({
            schoolName: o.name,
            schoolCode: o.code,
            showSchoolPopup: !1,
            schoolSearchKeyword: "",
          }),
            wx.setStorageSync("schoolBaseUrl", o.baseUrl),
            wx.setStorageSync("schoolNameBase", o.name),
            wx.setStorageSync("schoolCodeBase", o.code),
            (a.globalData.host = o.baseUrl),
            console.log("App.globalData", a.globalData),
            console.log("选中学校:", o.name, "baseUrl:", o.baseUrl));
        }
      },
      schoolSetting: function (e) {
        (this.data.vibrate && wx.vibrateShort({}),
          this.setData({ school_index: e.detail.value }));
      },
      inputChange: function () {
        this.setData({
          confirmable:
            !this.isEmpty(this.data.snCode) &&
            !this.isEmpty(this.data.schoolName),
          nextconfirmable:
            !this.isEmpty(this.data.snCode) &&
            !this.isEmpty(this.data.schoolName),
        });
      },
      isEmpty: function (e) {
        return void 0 === e || null == e || "" == e;
      },
      sendMessage: function () {
        if (!this.data.waitingCode)
          if ("" != this.data.snCode)
            if ("" != this.data.schoolCode)
              if ("" != this.data.phoneNumber) {
                wx.showLoading({ title: "正在发送短信" });
                var e = this;
                t.request({
                  url: "/wxxcx/platform/serverlist/getVerificationCode",
                  data: {
                    schoolCode: this.data.schoolCode,
                    phoneNumber: this.data.phoneNumber,
                    snCode: this.data.snCode,
                  },
                  success: function (o) {
                    if ((console.log(o), o && o.code && 1 == +o.code))
                      return (
                        wx.showModal({
                          title: "提示",
                          content: o.msg,
                          showCancel: !1,
                        }),
                        void wx.hideLoading()
                      );
                    (wx.hideLoading(),
                      wx.showToast({ title: "发送短信成功" }),
                      e.setData({
                        waitingCode: !0,
                        waiteTime: 60,
                        interval: setInterval(function (o) {
                          e.data.waiteTime > 0
                            ? e.setData({ waiteTime: --e.data.waiteTime })
                            : (e.clearMessage(),
                              e.setData({ waitingCode: !1, waiteTime: 0 }));
                        }, 1e3),
                      }));
                  },
                });
              } else wx.showToast({ title: "请先填写手机号", icon: "none" });
            else wx.showToast({ title: "请先识别学校", icon: "none" });
          else wx.showToast({ title: "请先填写学生证号", icon: "none" });
      },
      clearMessage: function () {
        (clearInterval(this.data.interval),
          this.setData({ waitingCode: !1, waiteTime: 0, interval: -1 }));
      },
      confirmDialogSchool: function (e) {
        t.request({
          url: "you/url/to/do/something",
          data: { mobile: this.data.phoneNumber, code: this.data.messageCode },
          success: function (e) {
            (wx.showToast({ title: "绑定成功" }),
              wx.navigateBack({ delta: 1 }));
          },
        });
      },
      closeDialogSchool: function () {},
      wxLogin: function () {
        return new Promise(function (e, o) {
          wx.login({
            success: function (o) {
              e(o.code);
            },
          });
        });
      },
      getUserInfo: function () {
        t.getData({
          url: "/wxxcx/platform/serverlist/GetStudentInfoByToken",
          success: function (e) {
            e.code &&
              0 == +e.code &&
              wx.setStorageSync("userInfo", e.obj || "");
          },
        });
      },
      appLogin: function () {
        var e = this;
        this.checkSchoolRedirect(this.data.schoolCode) ||
          (wx.showLoading({ title: "登录中..", mask: !0 }),
          wx.login({
            success: function (o) {
              var a = o.code;
              t.request({
                url: "/wxxcx/platform/serverlist/getLesseeServerByNewDecode",
                data: { code: a },
                success: function (o) {
                  (console.log(o),
                    wx.hideLoading(),
                    wx.setStorageSync("token", o.token || ""),
                    o.code && 0 == +o.code
                      ? (e.setData({ isRegister: !0 }),
                        e.getUserInfo(),
                        wx.getStorageSync("height")
                          ? wx.switchTab({ url: "../index/index" })
                          : wx.navigateTo({ url: "./setting" }))
                      : o.code && "-6001" == o.code
                        ? (e.setData({ isRegister: !1 }),
                          wx.showToast({ title: o.message, icon: "none" }))
                        : (e.setData({ isLogin: !1 }),
                          wx.showToast({
                            title: "系统异常请联系管理员处理！！",
                            icon: "none",
                          })));
                },
                fail: function (o) {
                  (wx.hideLoading(),
                    wx.showModal({
                      title: "提示",
                      content: "网络超时，请检查网络或切换WiFi/4G后重试",
                      showCancel: !1,
                      success: function (o) {
                        o.confirm && e.appLogin();
                      },
                    }));
                },
                complete: function () {
                  wx.hideLoading();
                },
              });
            },
          }));
      },
      getSchool: function () {
        var a = this;
        return o(
          e().mark(function o() {
            var s;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (s = a).setData({ schoolCode: "", schoolName: "" }),
                      (e.next = 4),
                      t.request({
                        url: "/wxxcx/platform/serverlist/GetStudentInfo",
                        data: { snCode: s.data.snCode },
                        success: function (e) {
                          e && 0 == +e.code
                            ? s.setData({
                                schoolCode: e.obj.schoolCode,
                                schoolName: e.obj.schoolName,
                              })
                            : (s.setData({ schoolCode: "", schoolName: "" }),
                              wx.showToast({ icon: "none", title: e.msg }));
                        },
                      })
                    );
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, o);
          }),
        )();
      },
      hideModalSchool: function (e) {},
      onLoad: function () {
        wx.setNavigationBarTitle({ title: "登录" });
        var e = this;
        wx.request({
          url: "https://wxxcx.xtotoro.com/wxapi/platform/active/getSunRunSchoolList",
          header: { "content-type": "application/json;charset=UTF-8" },
          method: "POST",
          success: function (o) {
            if (
              (console.log(),
              o.data.body &&
                o.data.body.length > 0 &&
                (o.data.body.forEach(function (e) {
                  ((e.baseUrl = e.domainUrl),
                    (e.code = e.schoolCode),
                    (e.name = e.schoolName));
                }),
                1 == o.data.body.length))
            ) {
              var t = o.data.body[0];
              (e.setData({ schoolName: t.name, schoolCode: t.code }),
                wx.setStorageSync("schoolBaseUrl", t.baseUrl),
                wx.setStorageSync("schoolNameBase", t.name),
                wx.setStorageSync("schoolCodeBase", t.code),
                (a.globalData.host = t.baseUrl));
            }
            e.setData({ schoolList: o.data.body });
          },
          fail: function (e) {
            wx.showToast({
              title: "网络异常,服务超时！",
              icon: "error",
              duration: 2e3,
            });
          },
        });
        var o = wx.getStorageSync("schoolBaseUrl"),
          t = wx.getStorageSync("schoolNameBase"),
          s = wx.getStorageSync("schoolCodeBase");
        (this.setData({ schoolName: t, schoolCode: s }),
          o &&
            "" !== o &&
            ((a.globalData.host = o),
            console.log("App.globalData", a.globalData),
            this.appLogin()));
      },
      redirect: function (e) {
        if ("" != this.data.snCode)
          if ("" != this.data.schoolCode) {
            (this.vibrateFunc(1),
              wx.showToast({
                title: "登录中..",
                icon: "loading",
                duration: 1e4,
              }));
            var o = this;
            t.request({
              url: "/wxxcx/platform/serverlist/bindLogin",
              data: {
                schoolCode: this.data.schoolCode,
                phoneNumber: this.data.phoneNumber,
                snCode: this.data.snCode,
                vertificationCode: this.data.messageCode,
                password: this.data.password,
                studentName: this.data.studentName,
              },
              success: function (e) {
                (wx.hideToast(),
                  e && 0 == +e.code
                    ? o.appLogin()
                    : wx.showToast({ icon: "none", title: e.msg }));
              },
            });
          } else wx.showToast({ title: "请先识别学校", icon: "none" });
        else wx.showToast({ title: "请先填写学生证号", icon: "none" });
      },
      vibrateFunc: function (e) {
        wx.getStorageSync("vibrate") &&
          (1 == e && wx.vibrateShort({ complete: function (e) {} }),
          2 == e && wx.vibrateLong({ complete: function (e) {} }));
      },
    });
  },
  { isPage: true, isComponent: true, currentFile: "pages/login/index.js" },
);
require("pages/login/index.js");
