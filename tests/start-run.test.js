import assert from 'node:assert/strict';
import { test } from 'node:test';
import { buildRunFixture, distanceOfTrack } from '../lib/server/run-data.js';
import { startRun } from '../lib/server/start-run.js';

const task = {
  taskId: 'paper-1', name: '跑步任务', mileage: '3.20', minTime: '10', maxTime: '25', fitDegree: '0.60',
  runPointList: [],
};
const route = {
  taskId: 'paper-1', pointId: 'line-1', pointName: '测试路线', longitude: '118.820000', latitude: '31.940000',
  pointList: [
    { longitude: '118.820000', latitude: '31.940000' },
    { longitude: '118.824000', latitude: '31.940000' },
    { longitude: '118.824000', latitude: '31.943000' },
    { longitude: '118.820000', latitude: '31.943000' },
  ],
};
const identity = { token: 'fixture-token', stuNumber: 'student-1', schoolCode: 'school-1' };

test('fixture follows the selected route with realistic mini-program fields', () => {
  const fixture = buildRunFixture({ task, route, identity, now: new Date('2026-09-14T06:30:00+08:00') });
  const points = fixture.detail.pointList;
  assert.ok(points.length > 250);
  assert.ok(Math.abs(distanceOfTrack(points) / 1000 - 3.2) < 0.02);
  assert.match(fixture.exercise.avgSpeed, /^\d+'\d{2}"$/);
  assert.match(fixture.exercise.usedTime, /^00:\d{2}:\d{2}$/);
  assert.equal(fixture.begin.paperId, 'paper-1');
  assert.equal(fixture.begin.lineId, 'line-1');
  assert.equal(fixture.exercise.scantronId, '');
  assert.deepEqual(fixture.exercise.sunrunPathPointList, route.pointList);
  assert.equal(fixture.detail.cheatCode, '正常跑步');
  assert.ok(points.every((point, index) => Number.isFinite(point.timestamp)
    && /^\d{2}:\d{2}:\d{2}$/.test(point.time)
    && (!index || point.timestamp > points[index - 1].timestamp)));
});

test('start run sends the complete mini-program contract', async () => {
  const calls = [];
  const fetchImpl = async (url, options) => {
    const endpoint = new URL(url).pathname;
    const body = JSON.parse(options.body);
    calls.push({ endpoint, body, authorization: options.headers.Authorization });
    const replies = {
      '/wxxcx/platform/camera/currentTimeMillis': { status: '00', code: '0', body: 1 },
      '/wxxcx/platform/sunrunFace/selectSunRunStartConfiguration': { status: '00', code: '0', body: { sunrunStartFace: '0', sunrunPointRandom: '0' } },
      '/wxxcx/platform/camera/getCameraConfig': { status: '00', code: '0', body: { flag: 0 }, data: [] },
      '/wxxcx/platform/sunrunFace/selectSunRunRandomConfiguration': { status: '00', code: '0', body: {} },
      '/wxxcx/platform/sunrunFace/startUpNote': { status: '00', code: '0' },
      '/wxxcx/sunrun/getRunBegin': { status: '00', code: '0', scantronId: 'test-session-1' },
      '/wxxcx/sunrun/getRunPointList': { status: '00', code: '0', data: [] },
      '/wxxcx/sunrun/getRunPointListAbnormal': { status: '00', code: '0', data: [] },
      '/wxxcx/sunrun/sunRunExercises': { status: '00', code: '0' },
      '/wxxcx/platform/recrecord/sunRunExercisesDetail': { status: '00', code: '0' },
    };
    return new Response(JSON.stringify(replies[endpoint]), { status: 200 });
  };
  const result = await startRun({ task, route, ...identity }, {
    baseUrl: 'https://sunrun-test.example.com', fetchImpl,
    now: new Date('2026-09-14T06:30:00+08:00'),
  });
  assert.equal(result.scantronId, 'test-session-1');
  assert.equal(calls.length, 10);
  assert.ok(calls.every(call => call.authorization === 'Bearer fixture-token' && call.body.token === 'fixture-token'));
  assert.equal(calls[5].body.paperId, 'paper-1');
  assert.equal(calls[8].body.scantronId, 'test-session-1');
  assert.equal(calls[9].body.pointList.length, result.track.pointCount);
  assert.equal(calls[9].body.scantronId, 'test-session-1');
  assert.deepEqual(result.steps.map(step => step.endpoint), calls.map(call => call.endpoint));
});

test('start run rejects invalid origins and incomplete identity before fetching', async () => {
  const fetchImpl = () => assert.fail('invalid input must not access the network');
  await assert.rejects(startRun({ task, route, ...identity }, {
    baseUrl: 'http://sunrun-test.example.com', fetchImpl,
  }), /HTTPS origin/);
  await assert.rejects(startRun({ task, route, ...identity }, {
    baseUrl: 'https://sunrun-test.example.com/path', fetchImpl,
  }), /HTTPS origin/);
  await assert.rejects(startRun({ task, route, token: '', stuNumber: 'student-1', schoolCode: 'school-1' }, {
    baseUrl: 'https://sunrun-test.example.com', fetchImpl,
  }), /缺少账号资料/);
});

test('start run stops before creating a session when face verification is required', async () => {
  const calls = [];
  const fetchImpl = async url => {
    const endpoint = new URL(url).pathname;
    calls.push(endpoint);
    const result = endpoint.endsWith('selectSunRunStartConfiguration')
      ? { status: '00', code: '0', body: { sunrunStartFace: '1' } }
      : endpoint.endsWith('getCameraConfig')
        ? { status: '00', code: '0', body: { flag: 0 } }
        : { status: '00', code: '0', body: {} };
    return new Response(JSON.stringify(result), { status: 200 });
  };
  await assert.rejects(startRun({ task, route, ...identity }, {
    baseUrl: 'https://sunrun-test.example.com', fetchImpl,
  }), /人脸校验/);
  assert.equal(calls.length, 5);
  assert.ok(!calls.includes('/wxxcx/sunrun/getRunBegin'));
});
