import { MINIPROGRAM_BASE_URL } from './config.js';
import { assertMiniResponse, makeMiniRecords, makeMiniTasks } from './sunrun-models.js';

export function serviceFromBody(body) {
  return new SunRunService({
    token: body.token, stuNumber: body.stu_number,
    campusId: body.campus_id,
  });
}

export class SunRunService {
  constructor({ token, stuNumber, campusId }, { fetchImpl = fetch } = {}) {
    if (typeof token !== 'string' || !token.trim()) throw new Error('缺少小程序接口 Token');
    if (!stuNumber) throw new Error('缺少学号');
    this.token = token;
    this.stuNumber = String(stuNumber);
    this.campusId = String(campusId || '');
    this.fetch = fetchImpl;
  }

  async post(endpoint, data = {}) {
    const base = new URL(MINIPROGRAM_BASE_URL);
    if (base.protocol !== 'https:' || base.username || base.password || base.search || base.hash || base.pathname !== '/') {
      throw new Error('SUNRUN_MINIPROGRAM_BASE_URL 必须是 HTTPS 业务域名');
    }
    const response = await this.fetch(new URL(endpoint, base).href, {
      method: 'POST', cache: 'no-store', signal: AbortSignal.timeout(30000),
      headers: { 'Content-Type': 'application/json;charset=UTF-8', Authorization: `Bearer ${this.token}` },
      body: JSON.stringify({ ...data, token: this.token }),
    });
    if (!response.ok) throw new Error(`小程序接口请求失败: ${response.status}`);
    const result = await response.json().catch(() => { throw new Error('小程序接口未返回有效 JSON'); });
    return assertMiniResponse(result);
  }

  async getSunrunTasks() {
    return makeMiniTasks(await this.post('/wxxcx/sunrun/getSunrunPaper', {
      stuNumber: this.stuNumber, campusId: this.campusId,
    }));
  }

  async getSunrunSport({ runType = '0', monthId = '', termId = '', taskId = '', pageNumber = 1, rowNumber = 100000 } = {}) {
    return makeMiniRecords(await this.post('/wxxcx/sunrun/getSunrunArch', {
      projectName: String(runType) === '1' ? '自由跑' : '阳光跑', monthId, termId, paperId: taskId,
      stuNumber: this.stuNumber, snCode: this.stuNumber, pageNumber: Number(pageNumber), rowNumber: Number(rowNumber),
    }));
  }

}
