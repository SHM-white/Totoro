# 微信小程序发布包可逆向性审计

## 范围

- AppID：`wx8e8598deed63f9b1`
- 缓存版本目录：`65`
- 原始缓存包 SHA-256：`BDF47920469355201E2BB6F042139EE2E9E9BE7CA5367F4437E2AAED38ED1BAA`
- 原始包大小：4,202,413 字节
- 审计仅针对用户确认归属自己的发布包；未调用生产接口，未读取真实用户 Token。

## 结论

发布包能够仅凭公开 AppID 从 `V1MMWX` 缓存格式恢复为标准 wxapkg，并提取出 557 条文件索引。即使开启了微信代码加固，攻击者仍可恢复页面路由、业务域名、接口路径、登录调用顺序和客户端鉴权方式。因此不能依赖包加密、混淆或隐藏接口地址来保护业务。

## 已恢复的登录流程

1. 登录页请求 `https://wxxcx.xtotoro.com/wxapi/platform/active/getSunRunSchoolList` 获取学校及动态业务域名。
2. 用户提交学校代码和学号到 `/wxxcx/platform/serverlist/selectSunRunStudent`。
3. 客户端调用 `wx.login()` 获取一次性 code。
4. code 被提交到 `/wxxcx/platform/serverlist/getLesseeServerByNewDecode`。
5. 返回 Token 被写入 `wx.setStorageSync("token", ...)`。
6. 后续请求统一发送 `Authorization: Bearer <token>`。

静态包中共恢复出 54 个 `/wxxcx/` 接口路径，包括跑步、成绩、申诉、人脸与学生信息相关接口。

## 风险发现

### P0：生产包通过明文 HTTP 查询参数传递 Token 和用户资料

`pages/sunrunh5/index.js` 构造以下地址：

`http://192.168.2.214:8080/sunshine-run?token=<token>&userInfo=<serialized-user-info>`

问题包括：

- 使用明文 HTTP；
- Token 和完整用户资料进入 URL 查询参数；
- URL 被 `console.log` 输出；
- 私网 IP 被打入生产包；
- 该页面仍注册在正式路由表中。

同一局域网中的恶意节点、代理日志、WebView 历史或调试日志都有机会获得凭据。应立即从生产版本删除该页面/配置，吊销可能受影响的 Token，并改为 HTTPS、短期一次性票据和 POST 请求；不要把用户资料放入 URL。

### P1：登录响应和运行状态存在调试日志

登录流程中存在 `console.log(response)` 与 `console.log("App.globalData", ...)`。如果响应或全局状态包含 Token、学校业务域名或用户资料，这些数据可能出现在调试日志中。生产构建应移除或统一脱敏日志。

### P1：Bearer Token 长期存放在本地 Storage

发布包明确显示 Token 使用 `wx.setStorageSync` 持久化，并直接作为 Bearer Token 使用。建议：

- Access Token 短有效期；
- 服务端支持撤销、轮换和异常会话检测；
- 高风险操作使用二次校验或一次性票据；
- 不把长期 Refresh Token 暴露给不可信 WebView；
- 服务端按用户、学校、接口权限和资源所有权逐项鉴权。

### P2：接口与业务结构可枚举

代码加固开关已启用，但仍可识别 54 个业务接口及 `wxxcx.xtotoro.com`、`cppu.xtotoro.com`、`oss.xtotoro.com`、`app.xtotoro.com` 等域名。这本身不是漏洞，但意味着所有接口都必须假设客户端和路径完全公开，不能依赖“没人知道 URL”。

### P2：旧应用跳转信息仍在包内

登录页包含跳转到另一个小程序 AppID `wxfb4d255c8de7378e` 的逻辑。应确认这是预期迁移逻辑，并确保学校代码、目标 AppID 和版本生命周期由服务端或受控配置维护。

## 优先加固顺序

1. 删除 `pages/sunrunh5/index` 中的内网 HTTP 地址及 URL Token；吊销相关会话。
2. 清理生产日志，禁止记录 Token、登录响应、用户资料和完整请求 URL。
3. 对 `getLesseeServerByNewDecode` 实施一次性 code、防重放、短 TTL、速率限制和异常检测。
4. 对全部 54 个业务接口做服务端对象级权限校验，尤其是成绩、申诉、人脸、跑步记录和学生信息接口。
5. 对 Access Token 实施短期化、轮换、撤销和敏感操作二次授权。
6. 在 CI 中扫描 `http://`、私网 IP、`console.log`、密钥命名和 URL 中的 `token`/`userInfo`。
7. 将“发布包可完全读取”作为威胁模型，不在客户端保存 AppSecret、服务端签名密钥或可复用的主密钥。

## 产物说明

- `original/`：原缓存包副本。
- `decrypted/`：恢复后的标准 wxapkg。
- `unpacked/`：按包索引提取的文件。
- `analysis/`：仅包含为审计格式化的关键脚本副本。
- `tools/`：本次使用的最小解密、解包和静态扫描脚本。
