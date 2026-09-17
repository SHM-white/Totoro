import { createHash, randomUUID } from 'node:crypto';
import { createRunPlan, summarizeRunPlan } from './run-data.js';

const PREVIEW_LIFETIME_MS = 10 * 60 * 1000;
const PREVIEW_STORE_KEY = Symbol.for('totoro.runPreviewStore');

function previewStore() {
  if (!globalThis[PREVIEW_STORE_KEY]) globalThis[PREVIEW_STORE_KEY] = new Map();
  return globalThis[PREVIEW_STORE_KEY];
}

function pruneExpiredPreviews(now) {
  for (const [key, value] of previewStore()) {
    if (value.expiresAt <= now) previewStore().delete(key);
  }
}

function fingerprint(value) {
  return createHash('sha256').update(JSON.stringify(value)).digest('base64url');
}

function bindings({ task, route, identity }) {
  if (!task?.taskId || !identity?.stuNumber || !identity?.schoolCode) throw new Error('生成跑步预览所需资料不完整');
  return {
    stuNumber: String(identity.stuNumber),
    schoolCode: String(identity.schoolCode),
    taskId: String(task.taskId),
    routeId: String(route?.pointId || ''),
    taskFingerprint: fingerprint({
      taskId: task.taskId,
      mileage: task.mileage,
      minTime: task.minTime,
      maxTime: task.maxTime,
    }),
    routeFingerprint: fingerprint(route ? {
      pointId: route.pointId,
      pointName: route.pointName,
      pointList: route.pointList,
    } : null),
  };
}

export function createRunPreview(input, options = {}) {
  const now = options.now || new Date();
  const plan = createRunPlan(input.task);
  const expiresAt = new Date(now.getTime() + PREVIEW_LIFETIME_MS);
  const previewToken = randomUUID();
  pruneExpiredPreviews(now.getTime());
  previewStore().set(previewToken, {
    expiresAt: expiresAt.getTime(),
    bindings: bindings(input),
    plan,
  });

  return {
    previewToken,
    expiresAt: expiresAt.toISOString(),
    track: summarizeRunPlan({ task: input.task, route: input.route, plan }),
  };
}

export function verifyRunPreview(previewToken, input, options = {}) {
  const key = String(previewToken || '');
  const stored = previewStore().get(key);
  if (!stored) throw new Error('跑步预览凭证无效，请重新生成');
  const now = options.now || new Date();
  if (stored.expiresAt <= now.getTime()) {
    previewStore().delete(key);
    throw new Error('跑步预览已过期，请重新生成');
  }
  pruneExpiredPreviews(now.getTime());

  const expectedBindings = bindings(input);
  if (Object.entries(expectedBindings).some(([name, value]) => stored.bindings[name] !== value)) {
    throw new Error('跑步预览与当前账号、任务或路线不匹配');
  }

  summarizeRunPlan({ task: input.task, route: input.route, plan: stored.plan });
  return stored.plan;
}
