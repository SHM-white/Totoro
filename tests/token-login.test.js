import test from 'node:test';
import assert from 'node:assert/strict';
import { loginWithToken } from '../lib/server/token-login.js';
import { POST } from '../app/api/login/token/route.js';

const profile = { snCode: '00123', schoolCode: 'school', schoolCampusCode: 'campus', studentName: '测试用户' };
test('Token login uses the mini-program GET protocol and maps required profile fields', async () => {
  const data = await loginWithToken('  Bearer test-token  ', { fetchImpl: async (url, init) => {
    assert.equal(new URL(url).pathname, '/wxxcx/platform/serverlist/GetStudentInfoByToken');
    assert.equal(new URL(url).search, '');
    assert.equal(init.method, 'GET');
    assert.equal(init.body, undefined);
    assert.equal(init.headers.Authorization, 'Bearer test-token');
    assert.equal(init.redirect, 'error');
    return Response.json({ code: '0', obj: profile });
  } });
  assert.equal(data.token, 'test-token');
  assert.equal(data.stuNumber, '00123');
  assert.equal(data.schoolId, 'school');
  assert.equal(data.campusId, 'campus');
  assert.equal(data.stuName, '测试用户');
});

test('empty and malformed tokens fail before any upstream request', async () => {
  for (const value of [null, '', 'Bearer ', 'a\nb', 'x'.repeat(16385)]) {
    await assert.rejects(loginWithToken(value, { fetchImpl: () => assert.fail('must not fetch') }), { status: 400 });
  }
});

test('invalid credentials, malformed responses and incomplete profiles never produce a session', async () => {
  for (const [response, status] of [
    [new Response('', { status: 401 }), 401],
    [new Response('', { status: 503 }), 502],
    [new Response('not json'), 502],
    [Response.json({ code: 1, message: 'sensitive-token' }), 401],
    [Response.json({ code: 0, obj: { snCode: 'student' } }), 422],
    [Response.json({ obj: profile }), 401],
  ]) {
    await assert.rejects(loginWithToken('test-token', { fetchImpl: async () => response }), error => {
      assert.equal(error.status, status);
      assert.ok(!error.message.includes('sensitive-token'));
      return true;
    });
  }
});

test('login route returns uncached verified data and masks unexpected upstream errors', async () => {
  const original = globalThis.fetch;
  try {
    globalThis.fetch = async () => Response.json({ code: 0, obj: profile });
    const makeRequest = body => new Request('http://localhost/api/login/token', { method: 'POST', body });
    const response = await POST(makeRequest(JSON.stringify({ token: 'test-token' })));
    assert.equal(response.status, 200);
    assert.equal(response.headers.get('cache-control'), 'no-store');
    assert.equal((await response.json()).data.snCode, '00123');
    for (const body of ['null', '{', '{}']) {
      assert.equal((await POST(makeRequest(body))).status, 400);
    }
    globalThis.fetch = async () => { throw new Error('sensitive-token'); };
    const failed = await POST(makeRequest(JSON.stringify({ token: 'test-token' })));
    assert.equal(failed.status, 502);
    const data = await failed.json();
    assert.equal(data.data, null);
    assert.ok(!data.message.includes('sensitive-token'));
  } finally {
    globalThis.fetch = original;
  }
});
