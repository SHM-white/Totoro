import { json, readJson, serverError } from '../../../../lib/server/http.js';
import { serviceFromBody } from '../../../../lib/server/sunrun-service.js';

export const runtime = 'nodejs';

export async function POST(request) {
  try {
    const service = serviceFromBody(await readJson(request));
    return json({ success: true, tasks: await service.getSunrunTasks() });
  } catch (error) {
    return serverError('获取任务失败', error);
  }
}

