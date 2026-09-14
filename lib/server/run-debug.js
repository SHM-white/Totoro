import { MINIPROGRAM_BASE_URL } from './config.js';
import { RUN_DEBUG_STEPS, explainRunResponse } from '../run-debug.js';

export function redactDebug(value, token) {
  if (Array.isArray(value)) return value.map(item => redactDebug(item, token));
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key,
    /token|authorization|password|secret|faceData|faceBase64|phoneNumber|idCard/i.test(key) ? '[已隐藏]' : redactDebug(item, token)]));
  if (typeof value === 'string' && token) return value.split(token).join('[已隐藏]');
  return value;
}

export async function runDebugStep(input, { fetchImpl = fetch } = {}) {
  const step = RUN_DEBUG_STEPS.find(item => item.id === input?.step);
  if (!step) throw new Error('未知调试步骤');
  const token = typeof input.token === 'string' ? input.token.trim().replace(/^Bearer\s+/i, '') : '';
  if (!token || /\s/.test(token)) throw new Error('缺少有效 Token');
  const payload = { token };
  if (step.id === 'tasks' || step.id === 'config') {
    if (typeof input.stu_number !== 'string' || !input.stu_number) throw new Error('缺少学号');
    if (step.id === 'tasks') {
      if (typeof input.campus_id !== 'string' || !input.campus_id) throw new Error('缺少校区代码');
      Object.assign(payload, { stuNumber: input.stu_number, campusId: input.campus_id });
    } else payload.snCode = input.stu_number;
  }
  if (step.id === 'camera' || step.id === 'random') {
    if (typeof input.line_id !== 'string' || !input.line_id) throw new Error('请先选择路线');
    payload.lineId = input.line_id;
  }
  const base = new URL(MINIPROGRAM_BASE_URL);
  if (base.protocol !== 'https:' || base.username || base.password || base.search || base.hash || base.pathname !== '/') throw new Error('业务域名配置有误');
  const started = Date.now();
  const response = await fetchImpl(new URL(step.path, base), {
    method: 'POST', cache: 'no-store', redirect: 'error', signal: AbortSignal.timeout(15000),
    headers: { 'Content-Type': 'application/json;charset=UTF-8', Authorization: `Bearer ${token}` },
    body: JSON.stringify(payload),
  });
  const raw = await response.text();
  let data;
  let isJson = true;
  try { data = JSON.parse(raw); } catch { data = raw; isJson = false; }
  return redactDebug({
    step: step.id, endpoint: step.path, method: 'POST', host: base.origin,
    request: payload, httpStatus: response.status, transportOk: response.ok, isJson,
    elapsedMs: Date.now() - started, receivedAt: new Date().toISOString(), response: data,
    notes: !response.ok ? ['上游 HTTP 请求失败，不能据此判断学校功能已关闭。'] : !isJson ? ['上游未返回 JSON，不能判断功能开关。'] : explainRunResponse(step.id, data),
  }, token);
}
