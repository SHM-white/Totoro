# Token 登录与校验

在首页输入有效的小程序 Token，可直接粘贴带 Bearer 前缀的内容。Token 默认隐藏，点击眼睛按钮可切换显示。

浏览器向 `/api/login/token` 发送 POST JSON。服务端通过 `GET /wxxcx/platform/serverlist/GetStudentInfoByToken` 和 Authorization Bearer 请求学生资料，Token 不出现在 URL 中。该接口必须返回 code 为 0 或字符串 0，且 obj 包含 snCode、schoolCode、schoolCampusCode，才允许登录。

验证成功后保存在浏览器的 totoro-store 中，刷新后仍可使用；退出登录会清除凭据。存储版本升为 1，旧扫码登录缓存自动失效。不要在共用设备保留登录状态。

无效凭据、资料缺失和网络错误都会留在输入页并显示提示，不保存失败的 Token。登录响应禁用缓存，服务端不记录 Token，也不向前端透传上游原始错误。

任务和成绩查询失败会显示具体错误，不再将所有业务失败误判为 Token 过期。Token 过期后退出登录并输入新的有效 Token。业务域名通过 SUNRUN_MINIPROGRAM_BASE_URL 配置，需要与 Token 所属的小程序学校服务匹配。

本地测试使用模拟响应，真实学校 Token 的有效性及资料字段仍需实际联调。
