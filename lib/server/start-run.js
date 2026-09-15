import { fetchMiniProgram } from './miniprogram-fetch.js';
import { buildRouteFreeFixture, buildRunFixture } from './run-data.js';

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

export async function startRun(input, options = {}) {
  const identity = {
    token: input.token,
    stuNumber: input.stuNumber,
    schoolCode: input.schoolCode,
  };
  if (!identity.token || !identity.stuNumber || !identity.schoolCode) throw new Error('缺少账号资料');

  const fetchImpl = options.fetchImpl || fetch;
  const baseUrls = options.baseUrl ? [options.baseUrl] : undefined;
  let preferredBaseUrl = options.baseUrl;
  const steps = [];

  async function post(endpoint, payload) {
    const started = Date.now();
    const response = await fetchMiniProgram(endpoint, {
      method: 'POST',
      cache: 'no-store',
      redirect: 'error',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${identity.token}`,
      },
      body: JSON.stringify({ ...payload, token: identity.token }),
    }, {
      fetchImpl,
      baseUrls,
      preferredBaseUrl,
      onSuccess: origin => { preferredBaseUrl = origin; },
    });
    if (!response.ok) throw new Error(`${endpoint} HTTP ${response.status}`);
    const result = await response.json().catch(() => { throw new Error(`${endpoint} 未返回有效 JSON`); });
    assertSuccessful(result, endpoint);
    steps.push({
      endpoint,
      ok: true,
      elapsedMs: Date.now() - started,
      status: String(result.status ?? '00'),
      code: String(result.code ?? '0'),
    });
    return result;
  }

  const now = options.now || new Date();
  const hasConfiguredRoute = Boolean(input.route?.pointId);
  const fixture = hasConfiguredRoute
    ? buildRunFixture({ task: input.task, route: input.route, identity, now })
    : buildRouteFreeFixture({ task: input.task, identity, now });

  await post(PATHS.time, {});
  const configuration = await post(PATHS.config, { snCode: identity.stuNumber });
  let camera;
  if (hasConfiguredRoute) {
    camera = await post(PATHS.camera, { lineId: input.route.pointId });
    await post(PATHS.random, { lineId: input.route.pointId });
  }
  await post(PATHS.check, {});

  if (configuration.body?.sunrunStartFace === '1') {
    throw new Error('学校要求开跑人脸校验，当前网页无法完成真实人脸采集');
  }
  if (configuration.body?.sunrunPointRandom == '1') {
    throw new Error('学校启用了随机人脸抽检，当前网页无法完成真实抽检');
  }
  if (camera?.body?.flag) {
    throw new Error('学校启用了路线摄像头校验，当前网页无法完成真实拍摄');
  }

  const begin = await post(PATHS.begin, fixture.begin);
  const scantronId = begin.scantronId;
  if (!scantronId) throw new Error('创建场次成功响应缺少 scantronId');
  await post(PATHS.points, { scantronId });
  await post(PATHS.abnormal, { scantronId });
  await post(PATHS.exercise, { ...fixture.exercise, scantronId });
  await post(PATHS.detail, { ...fixture.detail, scantronId });

  return { mode: 'completed', scantronId, track: fixture.summary, steps };
}
