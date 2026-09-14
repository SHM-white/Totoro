'use client';

import { startRun as executeRun } from './server/start-run.js';
import { makeMiniTasks } from './server/sunrun-models.js';

const API_BASE = '/api';
const MINI_BASE = 'https://wxxcx.xtotoro.com';

async function siteRequest(endpoint, options = {}) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  if (options.body && typeof options.body === 'object') {
    config.body = JSON.stringify(options.body);
  }

  const response = await fetch(`${API_BASE}${endpoint}`, config);
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || data?.detail || `请求失败: ${response.status}`);
  }

  if (!data) throw new Error('接口未返回有效 JSON');

  return data;
}

function cleanToken(value) {
  const token = typeof value === 'string' ? value.trim().replace(/^Bearer(?:\s+|$)/i, '') : '';
  if (!token || token.length > 16384 || /\s/.test(token)) throw new Error('请输入有效的小程序 Token');
  return token;
}

async function miniRequest(endpoint, { token, method = 'POST', body } = {}) {
  const response = await fetch(new URL(endpoint, MINI_BASE), {
    method,
    mode: 'cors',
    cache: 'no-store',
    redirect: 'error',
    headers: { 'Content-Type': 'application/json;charset=UTF-8', Authorization: `Bearer ${token}` },
    body: body == null ? undefined : JSON.stringify({ ...body, token }),
  });
  if (!response.ok) throw new Error(`小程序接口请求失败: ${response.status}`);
  const result = await response.json().catch(() => null);
  if (!result) throw new Error('小程序接口未返回有效 JSON');
  return result;
}

async function directLogin(value) {
  const token = cleanToken(value);
  const result = await miniRequest('/wxxcx/platform/serverlist/GetStudentInfoByToken', { token, method: 'GET' });
  if (result.code !== 0 && result.code !== '0') throw new Error('Token 验证失败，请确认 Token 和小程序业务域名匹配');
  const profile = result.obj;
  const field = value => typeof value === 'string' || typeof value === 'number' ? String(value).trim() : '';
  if (!profile || !field(profile.snCode) || !field(profile.schoolCode) || !field(profile.schoolCampusCode)) {
    throw new Error('学生资料缺少学号、学校或校区代码，无法登录');
  }
  return {
    success: true,
    message: '登录成功',
    data: {
      token, snCode: field(profile.snCode), stuNumber: field(profile.snCode),
      schoolCode: field(profile.schoolCode), schoolId: field(profile.schoolCode),
      schoolCampusCode: field(profile.schoolCampusCode), campusId: field(profile.schoolCampusCode),
      stuName: field(profile.studentName || profile.name), schoolName: field(profile.schoolName),
      campusName: field(profile.schoolCampusName || profile.campusName),
    },
  };
}

export async function loginWithToken(token) {
  try {
    return await directLogin(token);
  } catch (error) {
    if (!(error instanceof TypeError)) throw error;
    return siteRequest('/login/token', { method: 'POST', body: { token } });
  }
}

export async function getRunTasks(authData) {
  try {
    const result = await miniRequest('/wxxcx/sunrun/getSunrunPaper', {
      token: authData.token,
      body: { stuNumber: authData.stuNumber, campusId: authData.campusId },
    });
    return { success: true, tasks: makeMiniTasks(result) };
  } catch (error) {
    if (!(error instanceof TypeError)) throw error;
    return siteRequest('/sunrun/tasks', {
      method: 'POST',
      body: { token: authData.token, stu_number: authData.stuNumber, campus_id: authData.campusId },
    });
  }
}

export async function startRun(authData, task, route) {
  const result = await executeRun({
    token: authData.token,
    stuNumber: authData.stuNumber,
    schoolCode: authData.schoolCode || authData.schoolId,
    task,
    route,
  });
  return {
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
  };
}
