import { json, readJson } from '../../../../lib/server/http.js';
import { startRun } from '../../../../lib/server/start-run.js';

export const runtime = 'nodejs';
export const maxDuration = 30;

export async function POST(request) {
  const headers = { 'Cache-Control': 'no-store' };
  try {
    const body = await readJson(request);
    const result = await startRun({
      token: body.token,
      stuNumber: body.stu_number,
      schoolCode: body.school_code || body.school_id,
      task: body.task,
      route: body.route,
    });
    return json({
      success: true,
      result: {
        scantronId: result.scantronId,
        track: {
          routeName: result.track.routeName,
          km: result.track.km,
          usedTime: result.track.usedTime,
          avgSpeed: result.track.avgSpeed,
          steps: result.track.steps,
        },
      },
    }, { headers });
  } catch (error) {
    return json({ success: false, message: `开始跑步失败: ${error.message}` }, { status: 400, headers });
  }
}
