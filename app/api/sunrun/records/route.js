import { json, readJson, serverError } from '../../../../lib/server/http.js';
import { serviceFromBody } from '../../../../lib/server/sunrun-service.js';

export const runtime = 'nodejs';

export async function POST(request) {
  try {
    const body = await readJson(request);
    const service = serviceFromBody(body);
    const tasks = await service.getSunrunTasks();
    const task = body.task_id ? tasks.find(item => item.taskId === body.task_id) : tasks[0];
    if (body.task_id && !task) throw new Error('所选任务不存在或已失效');
    const result = await service.getSunrunSport({
      runType: body.run_type, monthId: body.month_id, termId: body.term_id,
      taskId: task?.taskId, pageNumber: body.page_number, rowNumber: body.row_number,
    });
    return json({
      ...result, message: '获取成功', tasks, task_info: task || null,
    });
  } catch (error) {
    return serverError('获取记录失败', error);
  }
}
