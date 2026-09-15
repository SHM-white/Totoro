import { json, readJson } from '../../../../lib/server/http.js';
import { getDelayedRunJobStatus } from '../../../../lib/server/run-queue.js';

export const runtime = 'nodejs';
export const maxDuration = 10;

export async function POST(request) {
  const headers = { 'Cache-Control': 'no-store' };
  try {
    const body = await readJson(request);
    const job = await getDelayedRunJobStatus(body.job_id, {
      stuNumber: body.stu_number,
      schoolCode: body.school_code || body.school_id,
    });
    return json({ success: true, job }, { headers });
  } catch (error) {
    return json({ success: false, message: `查询延迟任务失败: ${error.message}` }, { status: 400, headers });
  }
}
