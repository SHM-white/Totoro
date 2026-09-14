import { json, readJson } from '../../../../lib/server/http.js';
import { runRegression } from '../../../../lib/server/run-regression.js';
import { LOCAL_REGRESSION_TASK } from '../../../../lib/server/run-regression-data.js';

export const runtime = 'nodejs';
export const maxDuration = 30;

export async function GET() {
  const mode = process.env.SUNRUN_REGRESSION_MODE || 'mock';
  return json({
    success: true,
    mode,
    target: mode === 'mock' ? '内存 Mock（无网络）' : '配置的回归接口',
    sampleTask: mode === 'mock' ? LOCAL_REGRESSION_TASK : null,
  }, { headers: { 'Cache-Control': 'no-store' } });
}

export async function POST(request) {
  const headers = { 'Cache-Control': 'no-store' };
  try {
    const body = await readJson(request);
    const result = await runRegression({
      token: body.token,
      stuNumber: body.stu_number,
      schoolCode: body.school_code || body.school_id,
      task: body.task,
      route: body.route,
    });
    return json({ success: true, result }, { headers });
  } catch (error) {
    return json({ success: false, message: `回归流程失败: ${error.message}` }, { status: 400, headers });
  }
}
