import { buildRunFixture } from './run-regression-data.js';

const PRODUCTION_ORIGIN = 'https://wxxcx.xtotoro.com';
const PATHS = {
  time: '/wxxcx/platform/camera/currentTimeMillis',
  config: '/wxxcx/platform/sunrunFace/selectSunRunStartConfiguration',
  camera: '/wxxcx/platform/camera/getCameraConfig',
  random: '/wxxcx/platform/sunrunFace/selectSunRunRandomConfiguration',
  check: '/wxxcx/platform/sunrunFace/startUpNote',
  begin: '/wxxcx/sunrun/getRunBegin',
  points: '/wxxcx/sunrun/getRunPointList',
  abnormal: '/wxxcx/sunrun/getRunPointListAbnormal',
  exercise: '/wxxcx/sunrun/sunRunExercises',
  detail: '/wxxcx/platform/recrecord/sunRunExercisesDetail',
};

function assertSuccessful(result, endpoint) {
  if (!result || typeof result !== 'object') throw new Error(`${endpoint} 未返回 JSON 对象`);
  if (result.status != null && String(result.status) !== '00') throw new Error(result.msg || `${endpoint} 返回失败`);
  if (result.code != null && String(result.code) !== '0') throw new Error(result.msg || result.message || `${endpoint} 返回失败`);
  return result;
}

function mockResponse(endpoint, now) {
  const scantronId = `mock-sunrun-${now.getTime()}`;
  const responses = {
    [PATHS.time]: { status: '00', code: '0', body: now.getTime() },
    [PATHS.config]: { status: '00', code: '0', body: { sunrunStartFace: '0', sunrunPointRandom: '0', sunrunPointShowOff: '1' } },
    [PATHS.camera]: { status: '00', code: '0', body: { flag: 0 }, data: [] },
    [PATHS.random]: { status: '00', code: '0', body: { startDistance: 200, checkDistance: 230, offsetDistance: 30 } },
    [PATHS.check]: { status: '00', code: '0' },
    [PATHS.begin]: { status: '00', code: '0', scantronId },
    [PATHS.points]: { status: '00', code: '0', data: [] },
    [PATHS.abnormal]: { status: '00', code: '0', data: [] },
    [PATHS.exercise]: { status: '00', code: '0' },
    [PATHS.detail]: { status: '00', code: '0' },
  };
  return structuredClone(responses[endpoint]);
}

function testOrigin(baseUrl, allowTestSubmit) {
  if (!allowTestSubmit) throw new Error('测试环境提交未启用');
  const base = new URL(baseUrl);
  if (base.protocol !== 'https:' || base.username || base.password || base.search || base.hash || base.pathname !== '/') {
    throw new Error('测试域名必须是无路径、无凭据的 HTTPS origin');
  }
  return base;
}

export async function runRegression(input, options = {}) {
  const mode = options.mode || process.env.SUNRUN_REGRESSION_MODE || 'mock';
  if (!['mock', 'test'].includes(mode)) throw new Error('SUNRUN_REGRESSION_MODE 只能是 mock 或 test');
  const now = options.now || new Date();
  const identity = mode === 'mock'
    ? { token: 'mock-token', stuNumber: input.stuNumber || 'mock-student', schoolCode: input.schoolCode || 'mock-school' }
    : { token: input.token, stuNumber: input.stuNumber, schoolCode: input.schoolCode };
  if (mode === 'test' && (!identity.token || !identity.stuNumber || !identity.schoolCode)) throw new Error('测试环境缺少账号资料');
  const fixture = buildRunFixture({ task: input.task, route: input.route, identity, now });
  const steps = [];
  const fetchImpl = options.fetchImpl || fetch;
  const base = mode === 'test' ? testOrigin(
    options.baseUrl || process.env.SUNRUN_MINIPROGRAM_BASE_URL || PRODUCTION_ORIGIN,
    options.allowTestSubmit ?? process.env.SUNRUN_REGRESSION_ALLOW_TEST_SUBMIT === 'true',
  ) : null;

  async function post(endpoint, payload) {
    const started = Date.now();
    let result;
    if (mode === 'mock') {
      result = mockResponse(endpoint, now);
    } else {
      const response = await fetchImpl(new URL(endpoint, base), {
        method: 'POST', cache: 'no-store', redirect: 'error', signal: AbortSignal.timeout(30000),
        headers: { 'Content-Type': 'application/json;charset=UTF-8', Authorization: `Bearer ${identity.token}` },
        body: JSON.stringify({ ...payload, token: identity.token }),
      });
      if (!response.ok) throw new Error(`${endpoint} HTTP ${response.status}`);
      result = await response.json().catch(() => { throw new Error(`${endpoint} 未返回有效 JSON`); });
    }
    assertSuccessful(result, endpoint);
    steps.push({ endpoint, ok: true, elapsedMs: Date.now() - started, status: String(result.status ?? '00'), code: String(result.code ?? '0') });
    return result;
  }

  await post(PATHS.time, {});
  const configuration = await post(PATHS.config, { snCode: identity.stuNumber });
  const camera = await post(PATHS.camera, { lineId: input.route.pointId });
  await post(PATHS.random, { lineId: input.route.pointId });
  await post(PATHS.check, {});
  if (mode === 'test' && configuration.body?.sunrunStartFace === '1') {
    throw new Error('测试环境要求开跑人脸校验，回归执行器不会伪造人脸数据');
  }
  if (mode === 'test' && configuration.body?.sunrunPointRandom == '1') {
    throw new Error('测试环境启用了随机人脸抽检，当前回归执行器无法完成真实抽检');
  }
  if (mode === 'test' && camera.body?.flag) {
    throw new Error('测试环境启用了路线摄像头校验，当前回归执行器无法完成真实拍摄');
  }
  const begin = await post(PATHS.begin, fixture.begin);
  const scantronId = begin.scantronId;
  if (!scantronId) throw new Error('创建场次成功响应缺少 scantronId');
  await post(PATHS.points, { scantronId });
  await post(PATHS.abnormal, { scantronId });
  await post(PATHS.exercise, { ...fixture.exercise, scantronId });
  await post(PATHS.detail, { ...fixture.detail, scantronId });

  return {
    mode, target: mode === 'mock' ? '内存 Mock（无网络）' : base.origin,
    scantronId, track: fixture.summary, steps,
    sample: { first: fixture.detail.pointList[0], last: fixture.detail.pointList.at(-1) },
  };
}
