import { json, readJson } from '../../../../lib/server/http.js';
import { runDebugStep } from '../../../../lib/server/run-debug.js';

export const runtime = 'nodejs';
export const maxDuration = 30;

export async function POST(request) {
  const headers = { 'Cache-Control': 'no-store' };
  try {
    return json({ success: true, result: await runDebugStep(await readJson(request)) }, { headers });
  } catch {
    return json({ success: false, message: '步骤请求失败，请检查登录资料、路线及网络后重试。' }, { status: 502, headers });
  }
}
