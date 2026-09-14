import assert from 'node:assert/strict';
import { test } from 'node:test';
import { SunRunService } from '../lib/server/sunrun-service.js';
import { makeMiniRecords } from '../lib/server/sunrun-models.js';
import { POST as recordsPOST } from '../app/api/sunrun/records/route.js';

const taskPaper = {
  taskId: 'paper-1', name: '秋季任务', startDate: '2026-01-01', endDate: '2026-12-31',
  mileage: '3', minTime: '15', maxTime: '25',
  runTimeRuleList: [{ startTime: '06:30:00', endTime: '08:00:00' }, { startTime: '16:00:00', endTime: '20:00:00' }],
  runPointList: [{ taskId: 'paper-1', pointId: 'line-1', pointName: '东校区', longitude: '119.48', latitude: '31.37',
    pointList: [{ longitude: '119.48', latitude: '31.37' }, { longitude: '119.483', latitude: '31.37' }, { longitude: '119.483', latitude: '31.373' }] }],
};

function setup(overrides = {}) {
  const calls = [];
  const replies = {
    '/wxxcx/sunrun/getSunrunPaper': { getSunrunPaperResponseList: [taskPaper] },
    '/wxxcx/sunrun/getSunrunArch': { requireNumber: '40', completedTimes: '7', incompleteTimes: '33', totalMileage: '21', data: [
      { scoreId: 'a', paperId: 'paper-1', runTime: '2026-08-20', startTmie: '07:00:00', endTmie: '07:20:00', scorePassType: 0, mileage: '3', scorePassRemark: '轨迹不符' },
      { scoreId: 'b', paperId: 'paper-1', runTime: '2026-08-20', startTmie: '17:00:00', scorePassType: '2', mileage: '3' },
    ] },
    ...overrides,
  };
  const fetchImpl = async (url, options) => {
    const path = new URL(url).pathname;
    calls.push({ path, url, options, body: JSON.parse(options.body) });
    assert.ok(path in replies, `Unexpected production endpoint: ${path}`);
    const reply = replies[path];
    if (reply instanceof Error) throw reply;
    return new Response(JSON.stringify(reply), { status: 200 });
  };
  const service = new SunRunService({ token: 'fixture-token', stuNumber: 'student-1', campusId: 'campus-1' }, { fetchImpl });
  return { service, calls, fetchImpl };
}

test('task list uses mini JSON/Bearer protocol and preserves windows', async () => {
  const { service, calls } = setup();
  const tasks = await service.getSunrunTasks();
  assert.equal(tasks.length, 1);
  assert.equal(tasks[0].runTimeRuleList.length, 2);
  assert.equal(calls[0].options.headers.Authorization, 'Bearer fixture-token');
  assert.equal(calls[0].body.campusId, 'campus-1');
  assert.equal(calls[0].body.token, 'fixture-token');
  assert.equal(new URL(calls[0].url).hostname, 'wxxcx.xtotoro.com');
});

test('missing server counts remain unknown, rather than counting raw entries', () => {
  const result = makeMiniRecords({ data: [{ scoreId: 'pending', scorePassType: '0' }] });
  assert.equal(result.summary.completedTimes, null);
  assert.equal(result.summary.requireNumber, null);
});

test('records keep same-day entries, mini statuses and authoritative summary', async () => {
  const { service, calls } = setup();
  const result = await service.getSunrunSport({ taskId: 'paper-1', termId: 'term-2', monthId: '09' });
  assert.equal(result.records.length, 2);
  assert.equal(result.records[0].day, '2026-08-20');
  assert.equal(result.records[0].statusText, '无效');
  assert.equal(result.records[1].statusText, '申诉有效');
  assert.equal(result.records[1].isValid, true);
  assert.equal(result.summary.requireNumber, 40);
  assert.equal(result.summary.completedTimes, 7);
  assert.equal(result.summary.incompleteTimes, 33);
  assert.equal(calls[0].body.paperId, 'paper-1');
  assert.equal(calls[0].body.termId, 'term-2');
  assert.equal(calls[0].body.projectName, '阳光跑');
});

test('history query errors remain errors', async () => {
  const { service } = setup({ '/wxxcx/sunrun/getSunrunArch': { code: '9', message: '查询失败' } });
  await assert.rejects(service.getSunrunSport(), /查询失败/);
});

test('records route stays read-only and does not offer historical submission dates', async t => {
  const { fetchImpl, calls } = setup();
  t.mock.method(globalThis, 'fetch', fetchImpl);
  const response = await recordsPOST(new Request('http://localhost/api/sunrun/records', {
    method: 'POST', body: JSON.stringify({ token: 'fixture-token', stu_number: 'student-1', task_id: 'paper-1' }),
  }));
  const result = await response.json();
  assert.equal(result.success, true);
  assert.equal(result.summary.completedTimes, 7);
  assert.equal(result.records.length, 2);
  assert.ok(!('available_dates' in result));
  assert.deepEqual(calls.map(call => call.path), ['/wxxcx/sunrun/getSunrunPaper', '/wxxcx/sunrun/getSunrunArch']);
});
