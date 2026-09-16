import assert from 'node:assert/strict';
import { test } from 'node:test';
import { executeConfirmedRun } from '../lib/server/confirmed-run.js';
import {
  buildDelayedRunJob,
  getDelayedRunJobStatus,
  processDelayedRunJob,
  validateRedisUrl,
} from '../lib/server/run-queue.js';

const env = {
  REDIS_URL: 'redis://127.0.0.1:6379',
};
const identity = {
  token: 'dedicated-test-token',
  stuNumber: 'student-1',
  schoolCode: 'school-1',
};
const track = {
  routeName: '测试路线',
  km: '3.20',
  usedTime: '00:20:00',
  avgSpeed: `6'15"`,
  steps: '4000',
};
const task = { taskId: 'paper-1', mileage: '3.20', minTime: 20, maxTime: 20 };
const route = {
  pointId: 'line-1',
  pointName: '测试路线',
  pointList: [
    { longitude: 118.1, latitude: 31.1 },
    { longitude: 118.2, latitude: 31.2 },
  ],
};
const plan = { targetMeters: 3200, durationSeconds: 1200, strideMeters: 0.8 };
const session = {
  scantronId: 'test-session-1',
  runStartedAt: '2026-09-15T10:00:00.000Z',
  preferredBaseUrl: 'https://app.xtotoro.com/',
};

test('queue configuration validates Redis', () => {
  assert.equal(validateRedisUrl(env.REDIS_URL).protocol, 'redis:');
  assert.equal(validateRedisUrl('rediss://example.test:6380').protocol, 'rediss:');
  assert.throws(() => validateRedisUrl('https://example.test'), /Redis/);
});

test('delayed jobs store the real execution input and retain the confirmation time', () => {
  const now = new Date('2026-09-15T10:00:00.000Z');
  const job = buildDelayedRunJob({ input: { task, route, ...identity }, plan, session, track }, {
    now,
    jobId: 'job-1',
    env,
  });

  assert.equal(job.delayMs, 1_200_000);
  assert.equal(job.scheduledAt, '2026-09-15T10:20:00.000Z');
  assert.equal(job.data.schemaVersion, 4);
  assert.equal(job.data.jobId, 'job-1');
  assert.deepEqual(job.data.payload.input, { task, route, ...identity });
  assert.deepEqual(job.data.payload.plan, plan);
  assert.deepEqual(job.data.payload.session, session);
});

test('confirmed runs enqueue one non-retrying real execution job', async () => {
  const added = [];
  const queue = { add: async (...args) => { added.push(args); } };
  const result = await executeConfirmedRun({ task, route, ...identity }, {
    plan,
    queue,
    jobId: 'job-2',
    now: new Date('2026-09-15T10:00:00.000Z'),
    env,
    prepareRunImpl: async () => session,
  });

  assert.equal(result.mode, 'queued');
  assert.equal(result.jobId, 'job-2');
  assert.equal(added.length, 1);
  assert.equal(added[0][0], 'execute-live-run');
  assert.equal(added[0][2].delay, 1_200_000);
  assert.equal(added[0][2].attempts, 1);
  assert.equal(added[0][1].payload.session.scantronId, 'test-session-1');
});

test('job status is bound to the same student and school', async () => {
  const built = buildDelayedRunJob({ input: { task, route, ...identity }, plan, session, track }, {
    jobId: 'job-3', env,
  });
  const queue = {
    getJob: async jobId => jobId === 'job-3' ? {
      data: built.data,
      failedReason: undefined,
      returnvalue: undefined,
      getState: async () => 'delayed',
    } : undefined,
  };

  const status = await getDelayedRunJobStatus('job-3', identity, { queue });
  assert.equal(status.state, 'delayed');
  await assert.rejects(
    getDelayedRunJobStatus('job-3', { ...identity, stuNumber: 'student-9' }, { queue }),
    /无权/,
  );
});

test('worker reads the payload and calls the real runner with the confirmation time', async () => {
  const built = buildDelayedRunJob({ input: { task, route, ...identity }, plan, session, track }, {
    jobId: 'job-4',
    now: new Date('2026-09-15T10:00:00.000Z'),
    env,
  });
  const calls = [];
  const expected = { mode: 'completed', scantronId: 'test-session-1', track, steps: [] };
  const result = await processDelayedRunJob({
    id: 'job-4', name: 'execute-live-run', data: built.data,
  }, {
    env,
    completeRunImpl: async (...args) => {
      calls.push(args);
      return expected;
    },
  });

  assert.deepEqual(result, expected);
  assert.equal(calls.length, 1);
  assert.deepEqual(calls[0][0], { task, route, ...identity });
  assert.deepEqual(calls[0][1], session);
  assert.deepEqual(calls[0][2].plan, plan);
  assert.equal(calls[0][2].preferredBaseUrl, session.preferredBaseUrl);
});
