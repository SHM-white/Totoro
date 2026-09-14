export const RUN_DEBUG_STEPS = [
  { id: 'tasks', name: '获取任务', path: '/wxxcx/sunrun/getSunrunPaper' },
  { id: 'time', name: '校准时间', path: '/wxxcx/platform/camera/currentTimeMillis' },
  { id: 'config', name: '开跑与人脸配置', path: '/wxxcx/platform/sunrunFace/selectSunRunStartConfiguration' },
  { id: 'camera', name: '路线摄像头配置', path: '/wxxcx/platform/camera/getCameraConfig' },
  { id: 'random', name: '随机抽检距离配置', path: '/wxxcx/platform/sunrunFace/selectSunRunRandomConfiguration' },
  { id: 'check', name: '开跑前检查', path: '/wxxcx/platform/sunrunFace/startUpNote' },
];

export function explainRunResponse(step, data) {
  if (!data || typeof data !== 'object') return ['响应不是对象，无法判断配置是否启用。'];
  const body = data.body;
  const describe = value => value === undefined ? '未返回' : JSON.stringify(value);
  const flag = (name, value, strict = false) => `${name} = ${describe(value)}；${value == null ? '未知，不能当作关闭' : (strict ? value === '1' : value == '1') ? '开启' : '未命中开启条件'}${strict ? '（小程序使用字符串 "1" 严格比较）' : ''}`;
  switch (step) {
    case 'tasks': return [Array.isArray(data.getSunrunPaperResponseList) ? `返回 ${data.getSunrunPaperResponseList.length} 个任务，展开 JSON 查看路线和时段。` : '未返回任务列表，不能视为没有任务。'];
    case 'time': return [`body = ${describe(body)}；${body && Number.isFinite(Number(body)) ? '已返回可解析的服务端时间戳' : '未获得有效校准时间'}`];
    case 'config': return [flag('sunrunStartFace', body?.sunrunStartFace, true), flag('sunrunPointRandom', body?.sunrunPointRandom), `sunrunPointShowOff = ${describe(body?.sunrunPointShowOff)}（点位显示配置，不代表人脸开关）`];
    case 'camera': return [`body.flag = ${describe(body?.flag)}；${body?.flag == null ? '摄像头开关未知' : body.flag ? '源码真值判断开启' : '源码真值判断关闭'}，返回 ${Array.isArray(data.data) ? data.data.length : '未知数量的'} 个摄像头。`, `pointPoleTime = ${describe(data.data?.[0]?.pointPoleTime)} 秒；cameraPoleTime = ${describe(data.data?.[0]?.cameraPoleTime)} 秒；cameraPoleDistance = ${describe(data.data?.[0]?.cameraPoleDistance)} 米。`, '实际轮询还要求位置进入摄像头范围；这里只查询配置。'];
    case 'random': return [`status = ${describe(data.status)}；${data.status == '00' ? '源码应用返回的距离配置' : '源码不更新配置'}。`, `startDistance = ${describe(body?.startDistance)}；checkDistance = ${describe(body?.checkDistance)}；offsetDistance = ${describe(body?.offsetDistance)}。`, '距离配置不代表随机人脸已启用，开关来自 sunrunPointRandom；源码 Number(value) || 默认值分别为 200 / 230 / 30 米。'];
    case 'check': return [`status = ${describe(data.status)}；${data.status == '00' ? '本次后端检查放行' : '本次后端检查未放行'}。`, '这不是开跑成功；尚需设备、当前时段、位置及按配置要求的人脸检查。'];
    default: return [];
  }
}
