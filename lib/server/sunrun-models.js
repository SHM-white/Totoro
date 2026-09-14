const asText = value => value == null ? '' : String(value);

export function assertMiniResponse(result) {
  if (!result || typeof result !== 'object' || Array.isArray(result)) throw new Error('小程序接口响应格式无效');
  const failedStatus = result.status != null && String(result.status) !== '00';
  const failedCode = result.code != null && result.code !== 0 && result.code !== '0';
  if (failedStatus || failedCode) throw new Error(result.msg || result.message || '小程序接口返回失败');
  return result;
}

export function makeMiniTasks(result) {
  assertMiniResponse(result);
  if (!Array.isArray(result.getSunrunPaperResponseList)) throw new Error('任务响应缺少 getSunrunPaperResponseList');
  return result.getSunrunPaperResponseList.map((paper, index) => {
    const taskId = asText(paper.taskId || paper.paperId || paper.runPointList?.[0]?.taskId);
    return {
      taskId,
      name: asText(paper.name || paper.taskName || paper.paperName || `任务 ${index + 1}`),
      startDate: asText(paper.startDate), endDate: asText(paper.endDate),
      mileage: asText(paper.mileage), minTime: asText(paper.minTime), maxTime: asText(paper.maxTime),
      fitDegree: asText(paper.fitDegree), offsetRange: asText(paper.offsetRange),
      runTimeRuleList: Array.isArray(paper.runTimeRuleList) ? paper.runTimeRuleList.map(rule => ({
        startTime: asText(rule.startTime), endTime: asText(rule.endTime),
      })) : [],
      runPointList: (Array.isArray(paper.runPointList) ? paper.runPointList : []).map(point => ({
        taskId: asText(point.taskId || taskId), pointId: asText(point.pointId), pointName: asText(point.pointName),
        longitude: asText(point.longitude), latitude: asText(point.latitude),
        pointList: (Array.isArray(point.pointList) ? point.pointList : []).map(coordinate => ({
          longitude: asText(coordinate.longitude), latitude: asText(coordinate.latitude),
        })),
      })),
    };
  });
}

function countOrNull(value) {
  if (value == null || value === '') return null;
  const count = Number(value);
  return Number.isFinite(count) && count >= 0 ? count : null;
}

export function makeMiniRecords(result) {
  assertMiniResponse(result);
  if (!Array.isArray(result.data)) throw new Error('成绩响应缺少 data 列表');
  const statusNames = { 0: '无效', 1: '有效', 2: '申诉有效', 3: '补录有效' };
  const records = result.data.map(record => {
    const status = asText(record.scorePassType);
    return {
      scoreId: asText(record.scoreId), taskId: asText(record.paperId || record.taskId),
      day: asText(record.runTime).slice(0, 10),
      runTime: asText(record.startTmie || record.startTime),
      endTime: asText(record.endTmie || record.endTime), usedTime: asText(record.usedTime),
      mileage: asText(record.mileage ?? record.km), status,
      statusText: statusNames[status] || '待审核', isValid: ['1', '2', '3'].includes(status),
      remark: asText(record.scorePassRemark),
    };
  });
  return {
    success: true, records,
    total: countOrNull(result.total) ?? records.length,
    summary: {
      requireNumber: countOrNull(result.requireNumber), completedTimes: countOrNull(result.completedTimes),
      incompleteTimes: countOrNull(result.incompleteTimes), totalMileage: countOrNull(result.totalMileage),
    },
  };
}
