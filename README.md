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

保留 Next.js 网页与服务端。生产页面直接调用已授权本站 Origin 的小程序业务接口，避开云函数出口限制；浏览器连接失败时，登录与任务查询会回退本站 `/api/*`。

- 输入小程序 Token 登录，支持 Bearer 前缀；GetStudentInfoByToken 校验并获取学生资料。
- getSunrunPaper 获取任务、路线、任务周期、里程与用时要求。
- 网页尚未实现等价的微信后台定位、运动分析、人脸与摄像头采集；学校要求这些校验时，开始跑步会在创建场次前停止。批量接口与旧提交入口已删除。
- 提供“开始跑步”入口，按所选任务与路线执行准备、创建场次、点位查询和成绩提交。

按 `.env.example` 设置 `SUNRUN_MINIPROGRAM_BASE_URL` 为学校实际小程序业务域名，默认 `https://wxxcx.xtotoro.com`，仅允许 HTTPS origin，不添加 `/wxxcx` 路径。原域名发生网络连接错误或超时时，会自动尝试 `SUNRUN_MINIPROGRAM_FALLBACK_BASE_URL`。

本项目不兑换或生成 Token。验证成功且资料包含 snCode、schoolCode、schoolCampusCode 后保存登录状态；旧扫码登录缓存会清除。

`npm test` 使用本地模拟响应检查登录、任务与跑步请求契约，不请求生产接口。`security-audit/` 为分析材料，不参与项目 lint。

## 开始跑步

任务页的“开始跑步”会从所选路线生成约 10 米间隔、连续时间戳、符合任务里程和时长的小程序轨迹，并依次执行准备配置、`getRunBegin`、点位查询、`sunRunExercises` 和 `sunRunExercisesDetail`。执行完成后显示场次 ID、路线、里程、用时、配速和步数。必须先取得真实任务与路线；若学校启用了开跑人脸、随机人脸或摄像头检查，流程会在创建场次前停止，不会伪造校验资料。

`SUNRUN_MINIPROGRAM_BASE_URL` 必须设置为无路径的 HTTPS origin；使用原接口时为 `https://wxxcx.xtotoro.com`。开始跑步会请求 `getRunBegin` 和两段成绩提交接口。

## Markdown 对话框

公共组件 `components/MarkdownDialog.jsx` 使用原生 `<dialog>` 提供焦点管理、Escape 与遮罩关闭。对话内容固定从项目根目录的 `dialog/index.md` 导入，由 `@next/mdx` 在开发或生产构建阶段编译，不会在浏览器运行时读取文件。
