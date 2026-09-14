# 小程序业务接口迁移实施计划

**目标：** 在 `codex/miniprogram-api` 分支将现有阳光跑业务请求迁移到解包小程序使用的接口，保留现有页面和提交流程。

**依据：** `security-audit/wx8e8598deed63f9b1/LOGIC-COMPARISON.md`，实际页面为 `chunk_96/97/98`，请求封装为共享模块 `CDE443310A0D562FAB822B3611B0EFA3.js`。

**范围：** 已有业务链的接口适配；不在本次实现微信小程序登录、实时定位或人脸采集。保留现有一键及批量入口；上游是否接受历史日期、生成数据及现有凭据需要真实联调确认，不以本地测试替代。

**约束：** 登录服务继续使用既有 App 配置；业务服务独立使用 `SUNRUN_MINIPROGRAM_BASE_URL`，默认 `https://wxxcx.xtotoro.com`。不调用生产写接口，不自动提交或推送代码。

## 1. 业务协议及响应模型

- [x] 新建 `lib/server/sunrun-service.js`、`lib/server/sunrun-models.js`；旧 `service.js` 保留登录服务并重新导出业务服务。
- [x] 所有业务请求为 JSON POST，同时发送 `Authorization: Bearer <token>`；不再走 App RSA 请求。
- [x] 解析 `getSunrunPaperResponseList`，保留多任务、多路线、多时段；支持明确任务 ID，空列表和未知 ID 明确报错。
- [x] 云端记录使用 `getSunrunArch`，规范化 `scorePassType/runTime/startTmie` 等字段，保留同日多记录及服务端统计。
- [x] 使用 Node 内置测试与模拟 fetch 验证 URL、头、payload、响应状态和失败分支。

## 2. 场次提交与时间规则

- [x] 准备数据时选定任务和路线；移除空任务时写死的历史 ID。
- [x] `getRunBegin` 发送 `paperId/lineId/runType/phoneInfo/version/faceBase64`；保留其 `scantronId`，贯穿基础及详情提交。
- [x] 基础提交发送小程序字段；`avgSpeed` 转为配速；详情独立判断网络错误和显式业务失败，返回部分成功阶段及场次 ID。
- [x] 日期统一使用 Asia/Shanghai 日历日期；校验真实日期和允许时段，处理无效、未来、跨日及窄时段输入。
- [x] 批量复用同一完整提交函数；查询历史失败时停止，详情失败不计成功。

## 3. 路由与页面适配

- [x] 修改 `app/api/sunrun/{submit,records,bulk,bulk-v2}/route.js`；增加任务查询路由；保留前端可识别的响应结构。
- [x] 页面提供任务、路线选择；记录保留同日记录，使用服务端完成次数和目标次数，展示明确的成绩状态与错误信息。
- [x] 业务失败保留在当前页面，避免把所有业务失败都处理成退出登录。
- [x] React 调整遵循既有视觉样式及性能规范，不重做设计。

## 4. 验证与交付

- [x] `npm test`：模拟契约、场次关联、部分失败、记录统计及日期边界。
- [x] `npm run lint`、`npm run build`；解包审计目录从项目 lint 中排除。
- [x] 本地页面以模拟响应检查任务切换、记录状态、配速展示及错误反馈；不调用生产接口。
- [x] 更新 README 和 `.env.example`，说明业务域名配置以及未迁移登录的凭据兼容性限制。
- [x] 核对 diff，确认登录实现未变、业务请求无旧 `/app/` 路径，再交付分支和验证结果。

验证记录：13 项 Node 测试通过；浏览器模拟检查通过（任务与路线选择、配速、部分失败、同日记录、服务端统计、任务切换、移动端布局及业务错误反馈）。生产接口未调用。登录类与登录模型通过 AST 对比确认未改变。
