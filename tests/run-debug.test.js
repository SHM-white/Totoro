import test from 'node:test';
import assert from 'node:assert/strict';
import { runDebugStep } from '../lib/server/run-debug.js';
import { explainRunResponse, RUN_DEBUG_STEPS } from '../lib/run-debug.js';

test('each manual step makes exactly one whitelisted request with mini-program fields', async () => {
  for (const step of RUN_DEBUG_STEPS) {
    let calls = 0;
    const result = await runDebugStep({ step: step.id, token: 'fixture-token', stu_number: 'student', campus_id: 'campus', line_id: 'line' }, {
      fetchImpl: async (url, init) => {
        calls++;
        assert.equal(url.pathname, step.path);
        assert.equal(init.headers.Authorization, 'Bearer fixture-token');
        assert.equal(init.redirect, 'error');
        const body = JSON.parse(init.body);
        if (step.id === 'config') assert.equal(body.snCode, 'student');
        if (step.id === 'camera' || step.id === 'random') assert.equal(body.lineId, 'line');
        return Response.json({ body: { sunrunStartFace: '0', token: 'fixture-token' }, message: 'echo fixture-token' });
      },
    });
    assert.equal(calls, 1);
    assert.equal(result.request.token, '[已隐藏]');
    assert.ok(!JSON.stringify(result).includes('fixture-token'));
  }
});

test('HTTP and business errors stay visible rather than becoming disabled flags', async () => {
  const input = { step: 'config', token: 'fixture', stu_number: 'student' };
  const result = await runDebugStep(input, { fetchImpl: async () => Response.json({ status: '01', msg: 'denied' }, { status: 403 }) });
  assert.equal(result.httpStatus, 403);
  assert.equal(result.response.msg, 'denied');
  assert.match(result.notes[0], /不能/);
  const missing = explainRunResponse('config', { body: {} });
  assert.match(missing[0], /未知/);
  assert.match(explainRunResponse('config', { body: { sunrunStartFace: 1 } })[0], /未命中/);
  assert.match(explainRunResponse('config', { body: { sunrunStartFace: '1' } })[0], /；开启/);
  const html = await runDebugStep(input, { fetchImpl: async () => new Response('fixture html') });
  assert.equal(html.isJson, false);
  assert.equal(html.response, '[已隐藏] html');
});

test('unknown and mutation endpoints cannot be selected by a debug request', async () => {
  for (const step of ['getRunBegin', '/wxxcx/sunrun/sunRunExercises', '__proto__']) {
    await assert.rejects(runDebugStep({ step, token: 'fixture' }, { fetchImpl: () => assert.fail('unexpected upstream request') }), /未知/);
  }
  await assert.rejects(runDebugStep({ step: 'camera', token: 'fixture' }, { fetchImpl: () => assert.fail() }), /路线/);
});
