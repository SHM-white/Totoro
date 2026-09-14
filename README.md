# Totoro Sunrun

Next.js 全栈练习项目，使用 App Router 承载前端页面和 `/api` 服务端接口，可直接部署到 Vercel。

## 技术栈

- Next.js App Router
- React
- Zustand
- Lucide React
- npm

## 开发

```bash
npm install
npm run dev
```

## 验证

```bash
npm run lint
npm test
npm run build
```

## 部署

Vercel 使用默认 npm 流程即可：

- Install Command: `npm install`
- Build Command: `npm run build`
- Output: Next.js 默认输出

## 当前功能与平台限制

保留 Next.js 网页与服务端。浏览器只访问本站 `/api/*`，由服务端调用小程序业务接口。

- 输入小程序 Token 登录，支持 Bearer 前缀；GetStudentInfoByToken 校验并获取学生资料。
- getSunrunPaper 获取任务、路线、任务周期、里程与用时要求。
- getSunrunArch 查询成绩，显示上游状态与完成次数。
- 已删除批量历史补跑、日期队列、自定义运动参数及轨迹／步数生成器。
- 网页尚未实现等价的微信后台定位、运动分析、人脸与摄像头校验，因此禁用开跑。旧 `/api/sunrun/submit` 返回 HTTP 410，批量接口已删除；不会创建场次或提交运动记录。
- 提供独立的完整流程回归入口；默认在内存中模拟小程序上游，校验场次、轨迹和两段提交契约，不写入学校数据。

按 `.env.example` 设置 SUNRUN_MINIPROGRAM_BASE_URL 为学校实际小程序业务域名，默认 `https://wxxcx.xtotoro.com`，仅允许 HTTPS origin，不添加 `/wxxcx` 路径。

本项目不兑换或生成 Token。验证成功且资料包含 snCode、schoolCode、schoolCampusCode 后保存登录状态；旧扫码登录缓存会清除。

## 与逆向小程序的差异

当前不是完整小程序复刻。网页可查询任务和成绩；真实运动采集、定位校时、最近路线推荐、人脸／摄像头校验、暂停恢复、结算补传以及成绩详情与申诉流程尚未完整接入。选择路线不代表已通过位置检查；后台开跑能力不能由客户端参数开启。

详细源码证据见 [流程对齐清单](docs/superpowers/plans/2026-09-05-web-miniprogram-parity.md)。真实场次失败后的补传与任意历史日期补跑是不同功能，不能用后者代替前者。

`npm test` 使用本地模拟响应检查登录、任务、成绩与禁用提交行为，不请求生产接口。`security-audit/` 为分析材料，不参与项目 lint。真实学校 Token 尚未联调。

## 逐步接口调试

首页已开放“开始跑步 · 逐步调试”。每次点击通过 Next.js `/api/sunrun/debug` 请求一个上游准备接口：任务、服务端时间、开跑配置、摄像头配置、抽检距离和开跑资格检查。页面显示脱敏请求与返回 JSON、HTTP 状态和判断说明；缺失字段标记未知。切换任务／路线会重新开始。

此入口取代页面整块禁用提示，但尚不创建真实跑步场次，也不调用运动记录提交接口。之前的“网页禁用开跑”描述针对真实运动提交流程。

## 完整流程回归

任务页的“运行完整回归流程”会从所选路线生成约 10 米间隔、连续时间戳、符合任务里程和时长的小程序轨迹，并依次执行准备配置、`getRunBegin`、点位查询、`sunRunExercises` 和 `sunRunExercisesDetail`。Mock 模式不调用 `fetch`；即使上游任务或 Token 不可用，也会改用内置的本地任务与路线。结果会显示实际运行目标、场次 ID、里程、配速、步数、点数和每个接口步骤。测试模式不会使用内置任务，必须先从测试环境取得任务；若测试环境启用了开跑人脸、随机人脸或摄像头检查，执行器会在创建场次前停止，不会伪造校验资料。

切换到真实接口回归时，将 `SUNRUN_MINIPROGRAM_BASE_URL` 设置为无路径的 HTTPS origin。使用原接口时设置为 `https://wxxcx.xtotoro.com`。仅使用后端已隔离、不会污染正常成绩的回归 Token，并同时设置：

```dotenv
SUNRUN_REGRESSION_MODE=test
SUNRUN_REGRESSION_ALLOW_TEST_SUBMIT=true
```

回归执行器仍要求 HTTPS origin 和显式提交开关，但允许原接口作为目标。完整流程会请求 `getRunBegin` 和两段成绩提交接口，因此普通用户 Token 不得用于此模式。旧 `/api/sunrun/submit` 继续保持 HTTP 410。
