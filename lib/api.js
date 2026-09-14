'use client';

const API_BASE = '/api';

async function request(endpoint, options = {}) {
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

export async function loginWithToken(token) {
  return request('/login/token', { method: 'POST', body: { token } });
}

export async function debugRunStep(authData, step, lineId) {
  return request('/sunrun/debug', { method: 'POST', body: {
    token: authData.token, stu_number: authData.stuNumber, campus_id: authData.campusId,
    step, line_id: lineId,
  } });
}

export async function getRunRecords(authData, options = {}) {
  return request('/sunrun/records', {
    method: 'POST',
    body: {
      token: authData.token,
      stu_number: authData.stuNumber,
      school_id: authData.schoolId,
      school_code: authData.schoolCode,
      campus_id: authData.campusId,
      run_type: options.runType || '0',
      month_id: options.monthId || '',
      term_id: options.termId || '',
      task_id: options.taskId || '',
      page_number: options.pageNumber || '1',
      row_number: options.rowNumber || '100000',
    },
  });
}

export async function getRunTasks(authData) {
  return request('/sunrun/tasks', {
    method: 'POST',
    body: { token: authData.token, stu_number: authData.stuNumber, campus_id: authData.campusId },
  });
}

export async function runLocalRegression(authData, task, route) {
  return request('/sunrun/regression', {
    method: 'POST',
    body: {
      token: authData.token,
      stu_number: authData.stuNumber,
      school_id: authData.schoolId,
      school_code: authData.schoolCode,
      task,
      route,
    },
  });
}

export async function getRegressionSetup() {
  return request('/sunrun/regression');
}
