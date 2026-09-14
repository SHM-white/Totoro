# 小程序发布包与当前 Totoro 的业务逻辑对比

对比日期：2026-09-05。排除登录流程。结论来自本地静态代码和隔离的模拟检查，没有调用生产接口。

这里的“小程序”指 `security-audit/wx8e8598deed63f9b1/unpacked/`；“当前项目”指根目录实际运行的 Next.js 项目。`backend/` 仅有旧 Python 字节码缓存，不是本次运行入口。

**主要结论：当前项目是基于 App 接口的记录生成与提交工具，小程序实现的是实时跑步及其过程校验。两者并不是仅登录方式不同。**

## 对比依据

实际页面注册对应关系：

| 页面 | 发布包文件 | 本次格式化副本 |
| --- | --- | --- |
| `pages/run/index` | `chunk_96.appservice.js` | `analysis/chunk_96.appservice.formatted.js` |
| `pages/run/statement` | `chunk_97.appservice.js` | `analysis/chunk_97.appservice.formatted.js` |
| `pages/scoreCloud/index` | `chunk_98.appservice.js` | `analysis/chunk_98.appservice.formatted.js` |
| `pages/scoreCloud/scoreCloudInfo` | `chunk_99.appservice.js` | `analysis/chunk_99.appservice.formatted.js` |
| `pages/scoreMgt/index` | `chunk_100.appservice.js` | `analysis/chunk_100.appservice.formatted.js` |

共享 `appservice.app.formatted.js` 中还保留了旧跑步实现，不能直接当作当前页面。例如旧实现起跑距离阈值为 200m，实际 `chunk_96` 页面为 100m。本报告以实际页面注册代码为准。

下文行号中的 `mini-run`、`mini-statement`、`mini-records` 分别指上述 `chunk_96`、`chunk_97`、`chunk_98` 格式化副本；其他路径相对项目根目录。

## 一、接口协议不同，不能只替换路径

| 环节 | 小程序 | 当前项目 |
| --- | --- | --- |
| 业务地址 | `globalData.host`，默认 `https://wxxcx.xtotoro.com` | 固定 `https://app.xtotoro.com` |
| 请求内容 | JSON 对象 | 基础业务请求为分段 RSA 加密后的 Base64；详情为 JSON |
| 任务 | `/wxxcx/sunrun/getSunrunPaper` | `/app/sunrun/getSunrunPaper` |
| 开跑 | `/wxxcx/sunrun/getRunBegin` | `/app/sunrun/getRunBegin` |
| 基础记录 | `/wxxcx/sunrun/sunRunExercises` | `/app/platform/recrecord/sunRunExercises` |
| 轨迹详情 | `/wxxcx/platform/recrecord/sunRunExercisesDetail` | `/app/platform/recrecord/sunRunExercisesDetail` |
| 云端记录 | `/wxxcx/sunrun/getSunrunArch` | `/app/sunrun/getSunrunSport` |
| 成功判断 | 开跑对 `code` 转数值后比较 0；基础提交检查 `status === "00"` | 检查 `code === "0"` |

证据：共享脚本 23985–24026；`mini-run:1465、2112`；`mini-records:285`；`lib/server/service.js:148–201`；`lib/server/crypto.js:15`。

这是两套客户端协议的静态差异。没有 App 服务端实现或接口实测，不能据此断言当前 App 接口必须采用小程序的字段或返回格式。

## 二、跑步会话 ID 的生命周期不同

小程序：选择任务/路线 → 开跑提交 `paperId、lineId、runType、设备信息、faceBase64` → 保存开跑返回的 `scantronId` → 过程中用该 ID 查询打卡、提交检查 → 结束时基础成绩与轨迹继续使用同一 ID。缺少该 ID 时基础成绩提交会直接抛错。

当前项目：开跑仅发送学号、学校、校区；只检查开跑成功，不传递其 ID → 生成数据并提交基础记录 → 从基础记录响应取 `scantronId` → 上传详情。基础记录成功但未返回 ID 时，会用空字符串继续上传详情。

证据：`mini-run:1465–1493、2123–2175`；`app/api/sunrun/submit/route.js:36–56`；`lib/server/service.js:169–175、236–237`。

影响：如果目标是对齐小程序，需要重新核对完整会话关联，不能仅修改最后的提交参数。

## 三、任务、路线与时间规则被简化

小程序接收 `getSunrunPaperResponseList` 多任务列表，任务内有 `runPointList` 和 `runTimeRuleList`；支持切换任务及路线，默认从首个任务中选离当前位置最近的路线。开跑校验任务日期、多个允许时段，以及当前位置与选中路线参考坐标的距离。

当前项目 `makeRunTask` 只读取响应顶层单任务字段，未保留多任务或 `runTimeRuleList`。路线按传入序号、校区名称匹配或第一条选取；默认时长从 `minTime/maxTime` 加减边距后随机取值。没有等价的实时位置、多个时段检查。单次提交也没有验证所选日期是否在任务周期内。

当任务路线为空时，当前项目仍会使用写死的历史 `taskId/routeId` 和默认坐标生成圆形轨迹，而不是报告缺少有效任务路线。

证据：`mini-run:1849–1895、1973–2073`；`lib/server/models.js:1–32`；`lib/server/run-data.js:186–212、218–253`。

注意：顶层单任务是否为 App 接口的正确结构，仍需 App 协议证据；这里只确认其与小程序结构不一致。

## 四、实时跑步过程没有对应实现

小程序实际页面包含：

- 后台定位、定位精度过滤、异常跳点处理、轨迹补偿与逐段里程累计；轨迹点含 `time/timestamp`。
- 根据配置执行起跑人脸检查和途中随机人脸检查。
- 摄像头配置、打卡点及异常状态查询、近摄像头轮询。
- 路线偏离检测、实算轨迹拟合度、运动分析结果 `cheatCode`。
- 暂停/恢复，单次最多暂停两次，进行中数据本地保存及恢复。

当前项目没有这些过程，直接生成坐标和跑步数据：步数由里程推算；拟合度固定为 `1`；异常标记固定为 `0`；设备信息和版本写死；人脸与传感器字段为空。生成坐标点只有经纬度。

证据：`mini-run:833–909、1235–1275、1364–1457、1622、1738、2081、2126、2222`；`lib/server/run-data.js:139–157、244–287`。

这只能说明当前项目缺少过程证据，不能从静态客户端推断上游会如何审核、是否接受记录。

## 五、同名字段的含义也有差别

`avgSpeed`：小程序把 `calSpeed()` 算出的配速字符串传入；当前项目计算的是 km/h 数值字符串。以 3km、20 分钟为例，小程序为 `6'40"`，当前项目为 `9.00`。不能因字段名相同就互换。

小程序基础提交含开跑 ID、`schoolCode` 和标准路线 `sunrunPathPointList`；当前基础提交含 `routeId、submitDate、ifLocalSubmit` 等另一套字段。小程序详情含真实轨迹、`cheatCode` 以及两个空传感器数组；当前详情含生成轨迹、学号和空 `faceData`。

证据：`mini-run:1958–1968、2126–2175`；`lib/server/run-data.js:127–129、258–288`；`lib/server/service.js:191–201`。

## 六、时间来源和历史记录处理不同

小程序向服务端校时，用校正后的时间记录实时起跑、结束和轨迹。失败后可用本地保存的同一场跑步数据重新上传。

当前项目使用 Node 运行环境本地时间，或用户指定/随机生成的历史日期、开始时间；批量接口按过去空缺日期生成新数据。这与小程序的“原记录失败补传”不是同一个业务流程。

证据：`mini-run:743–769、1450–1452、2292`；`mini-statement:302–386`；`lib/server/run-data.js:218–241`；`lib/server/bulk.js:35–65、78–105`。

## 七、成绩查询及完成次数统计不同

小程序支持月份、学期、任务、阳光跑/自由跑筛选，直接使用服务端 `requireNumber、completedTimes、incompleteTimes、totalMileage`。记录区分无效、有效、申诉有效、补录有效，并有详情及申诉入口。

当前项目查询 `runList`，默认仅第 1 页 100 条，后端再按当前任务日期过滤，返回过滤后的长度作为 `total`；前端按日期去重，并用去重后的全部记录数量计算完成次数，目标固定 36 次。页面只将字符串 `status === "1"` 显示为有效，其他统一显示待审核。

影响：记录天数不等于有效完成次数；同一天多条记录会丢失；多个任务周期重叠时，只有日期筛选无法确定任务归属；超出首批记录时也可能漏算。小程序 `scorePassType` 与 App `status` 的取值是否可直接映射，尚不能确认。

证据：`mini-records:226–235、285–309、314–385`；`app/api/sunrun/records/route.js:16–20、34–57`；`app/records/page.jsx:39–45、157、244–267、346–347`。

## 八、当前项目中已复现的问题

以下均使用本地代码、模拟服务及固定时间，无生产请求。它们是当前实现内部可观察的问题，不依赖两套上游协议是否兼容。

| 问题 | 检查输入 | 实际行为 | 位置 |
| --- | --- | --- | --- |
| 批量忽略详情失败 | 基础结果 `code:"0"`，详情结果 `code:"1"` | `successCount:1`，显示提交成功；单次接口会把同样情况判失败 | `lib/server/bulk.js:97–105`；`app/api/sunrun/submit/route.js:65` |
| 查历史失败被当作无历史 | 历史接口返回非零业务 code | `getExistingDays()` 返回空集合，调用方继续选日期 | `lib/server/bulk.js:22–24`；两条 bulk 路由 |
| 当前页面未判为有效的记录也增加完成数，且同日有效记录可被丢弃 | 同一天先 `status:"0"` 后 `status:"1"`，另一天 `status:"0"`，共三条 | 留下两条页面显示为待审核的记录，完成数显示 2 | `app/records/page.jsx:39–45、244` |
| 自选日期漏掉昨天 | Asia/Shanghai，当前 2026-09-05，任务覆盖整月 | 可选日期仅 09-01 至 09-03，缺少 09-04 | `app/records/page.jsx:71–90` |
| 未来日期修正成前一天 | 同一时区和固定当前日，提交 2026-09-06 | 实际传给提交服务的是 2026-09-04，而非 09-05 | `app/api/sunrun/submit/route.js:11–15` |
| 不存在的日历日期通过校验 | 任务覆盖该日期，传入 `2026-02-30` | 进入 `validDates` | `lib/server/bulk.js:45–65` |

两个日期偏移来自 UTC 和本地时间混用：`new Date("YYYY-MM-DD")` 与本地零点比较，以及本地零点转换成 `toISOString()` 后截取 UTC 日期。

另已检查空路线会生成硬编码任务/路线 ID；23:50 起跑、20 分钟用时会生成 00:10 结束时间，但 payload 不携带独立结束日期。后者是否符合 App 服务端跨日约定，不能仅凭本地代码确定。

## 九、小程序本身也有不能当作正确规范的地方

- 实际跑步页和结算补传页的轨迹详情请求，网络失败回调也会 resolve，之后仍把本地记录标记为已上云；不能据此认为其两段提交有完整一致性保障。证据：`mini-run:2164–2187`；`mini-statement:346–371`。
- `checkStopRun()` 定义了里程不足提示，但实际 `stopRun()` 没有调用它，因此不能把“有这个函数”写成“结束时一定强制拦截不达标”。证据：`mini-run:2215–2220、2274–2293`。
- 开跑环境检查 `startUpNote` 网络失败时选择放行。证据：`mini-run:1255–1275`。

## 建议处理顺序

先处理当前项目内部的成功判定、历史查询失败处理、有效次数统计和日期偏移；再决定是否要对齐小程序协议。若要对齐，应同时核对任务结构、开跑 ID、过程数据、字段单位和服务端成绩统计，不能只增加几个提交字段。

本次没有修改业务代码。仅新增用于定位证据的格式化分析副本和本报告。
