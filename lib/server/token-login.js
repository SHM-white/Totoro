import { MINIPROGRAM_BASE_URL } from './config.js';

export class TokenLoginError extends Error {
  constructor(message, status = 401) {
    super(message);
    this.status = status;
  }
}

export async function loginWithToken(value, { fetchImpl = fetch } = {}) {
  const token = typeof value === 'string' ? value.trim().replace(/^Bearer(?:\s+|$)/i, '') : '';
  if (!token || token.length > 16384 || /\s/.test(token)) {
    throw new TokenLoginError('请输入有效的小程序 Token', 400);
  }
  let base;
  try {
    base = new URL(MINIPROGRAM_BASE_URL);
  } catch {
    throw new TokenLoginError('小程序业务域名配置有误', 500);
  }
  if (base.protocol !== 'https:' || base.username || base.password || base.search || base.hash || base.pathname !== '/') {
    throw new TokenLoginError('小程序业务域名配置有误', 500);
  }
  let response;
  try {
    response = await fetchImpl(new URL('/wxxcx/platform/serverlist/GetStudentInfoByToken', base).href, {
      method: 'GET', cache: 'no-store', redirect: 'error', signal: AbortSignal.timeout(10000),
      headers: { 'Content-Type': 'application/json;charset=UTF-8', Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error('[token-login] upstream connection failed', {
      name: error?.name || 'Error',
      message: error?.message || 'unknown error',
      causeCode: error?.cause?.code || null,
      region: process.env.VERCEL_REGION || 'local',
    });
    const timedOut = error?.name === 'TimeoutError' || error?.name === 'AbortError';
    throw new TokenLoginError(
      timedOut ? '服务器连接学生信息接口超时，请稍后重试' : '服务器无法连接学生信息接口，请联系管理员检查部署网络',
      timedOut ? 504 : 502,
    );
  }
  if (response.status === 401 || response.status === 403) throw new TokenLoginError('Token 无效或已过期，请重新输入');
  if (!response.ok) throw new TokenLoginError('学生信息接口暂时不可用，请稍后重试', 502);
  const result = await response.json().catch(() => null);
  if (!result) throw new TokenLoginError('学生信息接口响应异常，请稍后重试', 502);
  if (result.code !== 0 && result.code !== '0') throw new TokenLoginError('Token 验证失败，请确认 Token 和小程序业务域名匹配');
  const profile = result.obj;
  const field = value => typeof value === 'string' || typeof value === 'number' ? String(value).trim() : '';
  if (!profile || !field(profile.snCode) || !field(profile.schoolCode) || !field(profile.schoolCampusCode)) {
    throw new TokenLoginError('学生资料缺少学号、学校或校区代码，无法登录', 422);
  }
  return {
    token, snCode: field(profile.snCode), stuNumber: field(profile.snCode),
    schoolCode: field(profile.schoolCode), schoolId: field(profile.schoolCode),
    schoolCampusCode: field(profile.schoolCampusCode), campusId: field(profile.schoolCampusCode),
    stuName: field(profile.studentName || profile.name), schoolName: field(profile.schoolName),
    campusName: field(profile.schoolCampusName || profile.campusName),
  };
}
