import { json, readJson } from '../../../../lib/server/http.js';
import { createRunPreview } from '../../../../lib/server/run-preview.js';

export const runtime = 'nodejs';
export const maxDuration = 30;

export async function POST(request) {
  const headers = { 'Cache-Control': 'no-store' };
  try {
    const body = await readJson(request);
    const preview = createRunPreview({
      task: body.task,
      route: body.route,
      identity: {
        stuNumber: body.stu_number,
        schoolCode: body.school_code || body.school_id,
      },
    });
    return json({ success: true, preview }, { headers });
  } catch (error) {
    return json({ success: false, message: `生成跑步预览失败: ${error.message}` }, { status: 400, headers });
  }
}

