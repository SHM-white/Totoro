# Totoro Sunrun

Next.js 全栈练习项目，使用 App Router 承载前端页面和 `/api` 服务端接口，可直接部署到 Vercel。

## 技术栈

- Next.js App Router
- React
- Zustand
- Lucide React
- BullMQ + Redis（跑步延迟队列）
- pnpm

## 开发

```bash
pnpm install
pnpm dev
```

## Windows 一键本地部署

双击项目根目录的 [`start-local.cmd`](start-local.cmd)。脚本会先按 [WMPFDebugger 中文文档](https://github.com/evi0s/WMPFDebugger/blob/main/README.zh.md) 下载并启动小程序调试器。看到提示后，在微信中打开目标小程序并按任意键；脚本会打开小程序 DevTools，并在终端说明如何从 Network 请求中找到 Token。

脚本还会从 [WMPFDebugger PR #279](https://github.com/evi0s/WMPFDebugger/pull/279) 的固定提交安装 WMPF 25560 静态配置。随后自动完成 Totoro 依赖安装、生产构建与启动，并在服务就绪后打开浏览器。默认使用 `http://127.0.0.1:3000`；端口被占用时会自动尝试后续端口。WMPFDebugger 要求 Node.js 22 或更高版本，首次安装 Frida 依赖可能需要较长时间。

终端窗口需要在使用期间保持打开，按 `Ctrl+C` 即可停止服务。也可在 PowerShell 中指定端口：

```powershell
.\start-local.ps1 -Port 8080
```

如果已经取得 Token、不需要再次启动小程序调试器：

```powershell
.\start-local.ps1 -SkipDebugger
```

## 验证

```bash
pnpm lint
pnpm test
pnpm build
```

## 部署

Vercel 使用默认 npm 流程即可：

- Install Command: `npm install`
- Build Command: `npm run build`
- Output: Next.js 默认输出

### 腾讯云生产环境

推送到 `main` 后，[GitHub Actions 工作流](.github/workflows/deploy.yml) 会通过专用 SSH 密钥发布到腾讯云；也可以在 GitHub 的 Actions 页面手动运行。生产环境需要配置以下 Actions secrets：

- `DEPLOY_HOST`：服务器地址
- `DEPLOY_USER`：部署用户
- `DEPLOY_SSH_KEY`：专用 Ed25519 私钥
- `DEPLOY_KNOWN_HOSTS`：经过人工核验的服务器 SSH 公钥记录

服务端的 [`ops/deploy.sh`](ops/deploy.sh) 会串行执行部署，在独立 Git worktree 中安装依赖和构建。构建成功后才原子切换 `/opt/totoro-runtime/current` 并重启服务；健康检查失败时自动恢复上一个版本，服务器保留最近三个版本。

查看生产日志：

```bash
sudo journalctl -u totoro -f
sudo tail -f /var/log/nginx/error.log
```

## 当前功能与平台限制

保留 Next.js 网页与服务端。浏览器只访问本站 `/api/*`，由服务端调用小程序业务接口。

- 输入小程序 Token 登录，支持 Bearer 前缀；GetStudentInfoByToken 校验并获取学生资料。
- getSunrunPaper 获取任务、路线、任务周期、里程与用时要求。
- 网页尚未实现等价的微信后台定位、运动分析、人脸与摄像头采集；学校要求这些校验时，开始跑步会在创建场次前停止。批量接口与旧提交入口已删除。
- 提供“开始跑步”入口，按所选任务与路线执行准备、创建场次、点位查询和成绩提交。

按 `.env.example` 设置 `SUNRUN_MINIPROGRAM_BASE_URL` 为学校实际小程序业务域名，默认 `https://wxxcx.xtotoro.com`，仅允许 HTTPS origin，不添加 `/wxxcx` 路径。原域名发生网络连接错误或超时时，会自动尝试 `SUNRUN_MINIPROGRAM_FALLBACK_BASE_URL`。

本项目不兑换或生成 Token。验证成功且资料包含 snCode、schoolCode、schoolCampusCode 后保存登录状态；旧扫码登录缓存会清除。

`npm test` 使用本地模拟响应检查登录、任务与跑步请求契约，不请求生产接口。`security-audit/` 为分析材料，不参与项目 lint。

## 早操打卡

登录后的任务页会调用 `/wxxcx/platform/mornSign/getMornSignPaper` 获取当前账号的早操任务，展示任务日期、签到时段、今日完成数、允许范围和点位列表。

选择点位并点击“提交签到”后，服务端会重新获取一次当前任务，使用该点位返回的经纬度和二维码，按小程序 `encryptLong` 协议加密请求，再调用 `/wxxcx/platform/mornSign/morningExercises`。每次点击只提交一次，不会因上游业务拒绝自动重试；提交后会刷新任务，以确认 `dayCompSignCount` 是否变化。

## 开始跑步

任务页会先生成路线、里程、用时、配速和步数预览，确认后再执行真实跑步接口。预览数据以随机 ID 在服务端临时保存十分钟，不包含 Token 或生成后的轨迹点；服务重启后需要重新生成预览。确认开始时使用预览选定的统计参数，以 `Math.random` 生成随机起点、约 2 米 GPS 抖动、8–12 米采样间距和非均匀时间戳，然后依次执行准备配置、`getRunBegin`、点位查询、`sunRunExercises` 和 `sunRunExercisesDetail`，成绩仍然立即提交。

任务没有固定路线时，预览显示“无固定路线”，开始后使用内置路线 1 生成轨迹，同时继续向上游提交空 `lineId` 和空 `sunrunPathPointList`。若学校启用了开跑人脸、随机人脸或摄像头检查，流程会在创建场次前停止，不会伪造校验资料。

`SUNRUN_MINIPROGRAM_BASE_URL` 必须设置为无路径的 HTTPS origin；使用原接口时为 `https://wxxcx.xtotoro.com`。开始跑步会请求 `getRunBegin` 和两段成绩提交接口。

## 跑步延迟队列

“确认开始”固定把任务写入 Redis，并按预览的完整跑步用时延迟执行。到期后，独立 Worker 使用确认时刻作为跑步开始时间，依次调用准备配置、`getRunBegin`、点位查询、`sunRunExercises` 和 `sunRunExercisesDetail` 正式接口。账号和记录是否隔离由正式后端负责，本项目不维护账号白名单或模式开关。

配置 Redis 地址：

```dotenv
REDIS_URL=redis://127.0.0.1:6379
```

Worker 执行正式请求需要完整请求资料，因此 Token、任务、路线和跑步计划会作为任务载荷直接保存在 Redis 中。Redis 必须部署在受信网络，禁止暴露到公网，并应配置访问认证与最小权限。

网页与 Worker 必须使用完全相同的配置，并分别作为常驻进程启动：

```bash
pnpm dev
pnpm worker:run
```

生产服务器使用 `totoro.service` 运行网页，使用 `ops/totoro-worker.service` 运行延迟任务 Worker。两者都连接仅监听本机的 Redis；部署脚本切换版本、失败回滚时会同时重启两个服务。

整段正式接口流程不是幂等操作，因此每个 BullMQ 任务只执行一次，不对整个流程自动重试。成功结果保留一小时，失败结果保留一天；前端通过任务状态接口轮询并展示最终场次编号。

## Markdown 对话框

公共组件 `components/MarkdownDialog.jsx` 使用原生 `<dialog>` 提供焦点管理、Escape 与遮罩关闭。对话内容固定从项目根目录的 `dialog/index.md` 导入，由 `@next/mdx` 在开发或生产构建阶段编译，不会在浏览器运行时读取文件。

## 评论区

任务页底部通过 `@giscus/react` 接入仓库的 GitHub Discussions。评论按页面路径映射到 `General` 分类，首次发言需要使用 GitHub 账号授权 Giscus；仓库需要保持 Discussions 开启并安装 [Giscus GitHub App](https://github.com/apps/giscus)。嵌入区域会从站点同源的 `public/giscus-theme.css` 加载自定义主题，使编辑器、按钮和评论卡片保持项目的纸张底色、粗黑边框与方角风格。
