const EARTH_RADIUS_METERS = 6371000;
const ROUTE_SPACING_METERS = Object.freeze({ min: 8, max: 12 });
const TRACK_JITTER_STD_METERS = 2;
const STRIDE_METERS = Object.freeze({ min: 0.7, max: 0.86 });
const METERS_PER_LATITUDE_DEGREE = 111320;
const ROUTE_ONE_FALLBACK_POINTS = Object.freeze([
  { longitude: 118.789377, latitude: 31.939196 },
  { longitude: 118.789678, latitude: 31.93925 },
  { longitude: 118.790021, latitude: 31.939232 },
  { longitude: 118.790257, latitude: 31.939123 },
  { longitude: 118.790922, latitude: 31.938559 },
  { longitude: 118.791201, latitude: 31.937703 },
  { longitude: 118.791716, latitude: 31.935809 },
  { longitude: 118.792038, latitude: 31.93468 },
  { longitude: 118.789785, latitude: 31.934225 },
  { longitude: 118.78897, latitude: 31.935791 },
  { longitude: 118.788262, latitude: 31.937065 },
  { longitude: 118.788176, latitude: 31.93814 },
  { longitude: 118.788648, latitude: 31.938832 },
  { longitude: 118.789442, latitude: 31.939214 },
].map(point => Object.freeze(point)));

const pad = value => String(value).padStart(2, '0');
const number = (value, fallback) => Number.isFinite(Number(value)) ? Number(value) : fallback;
const randomBetween = (min, max) => min + (max - min) * Math.random();

export function haversineDistance(pointA, pointB) {
  const lat1 = Number(pointA.latitude) * Math.PI / 180;
  const lat2 = Number(pointB.latitude) * Math.PI / 180;
  const deltaLat = lat2 - lat1;
  const deltaLng = (Number(pointB.longitude) - Number(pointA.longitude)) * Math.PI / 180;
  const value = Math.sin(deltaLat / 2) ** 2
    + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) ** 2;
  return 2 * EARTH_RADIUS_METERS * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}

export function distanceOfTrack(points) {
  return points.slice(1).reduce((total, point, index) => total + haversineDistance(points[index], point), 0);
}

function normalizedRoute(route) {
  const raw = Array.isArray(route?.pointList) && route.pointList.length > 1
    ? route.pointList
    : [{ longitude: route?.longitude, latitude: route?.latitude }];
  const points = raw.map(point => ({
    longitude: number(point.longitude, NaN), latitude: number(point.latitude, NaN),
  }));
  if (points.length < 2 || points.some(point => !Number.isFinite(point.longitude) || !Number.isFinite(point.latitude))) {
    throw new Error('所选路线缺少可用的经纬度轨迹');
  }

  const closingDistance = haversineDistance(points.at(-1), points[0]);
  if (closingDistance <= 150) return [...points, points[0]];
  return [...points, ...points.slice(1, -1).reverse(), points[0]];
}

function interpolate(pointA, pointB, ratio) {
  return {
    longitude: pointA.longitude + (pointB.longitude - pointA.longitude) * ratio,
    latitude: pointA.latitude + (pointB.latitude - pointA.latitude) * ratio,
  };
}

function normalRandom(random) {
  let value;
  do {
    const x = random() * 2 - 1;
    const y = random() * 2 - 1;
    const radius = x * x + y * y;
    value = radius > 0 && radius < 1 ? x * Math.sqrt(-2 * Math.log(radius) / radius) : NaN;
  } while (!Number.isFinite(value) || Math.abs(value) > 3);
  return value;
}

function randomizedLap(lap, random) {
  const route = lap.slice(0, -1);
  const segmentLengths = route.map((point, index) => (
    haversineDistance(point, route[(index + 1) % route.length])
  ));
  const totalMeters = segmentLengths.reduce((total, distance) => total + distance, 0);
  if (totalMeters < 1) throw new Error('所选路线轨迹长度不足');

  let offsetMeters = random() * totalMeters;
  let segmentIndex = 0;
  while (segmentIndex < segmentLengths.length - 1 && offsetMeters > segmentLengths[segmentIndex]) {
    offsetMeters -= segmentLengths[segmentIndex];
    segmentIndex += 1;
  }
  const nextIndex = (segmentIndex + 1) % route.length;
  const start = interpolate(
    route[segmentIndex],
    route[nextIndex],
    segmentLengths[segmentIndex] ? offsetMeters / segmentLengths[segmentIndex] : 0,
  );
  return [
    start,
    ...route.slice(segmentIndex + 1),
    ...route.slice(0, segmentIndex + 1),
    start,
  ];
}

function jitterPoint(point, random) {
  const northMeters = normalRandom(random) * TRACK_JITTER_STD_METERS;
  const eastMeters = normalRandom(random) * TRACK_JITTER_STD_METERS;
  const longitudeScale = METERS_PER_LATITUDE_DEGREE * Math.max(0.01, Math.cos(point.latitude * Math.PI / 180));
  return {
    latitude: point.latitude + northMeters / METERS_PER_LATITUDE_DEGREE,
    longitude: point.longitude + eastMeters / longitudeScale,
  };
}

function trimNaturalTrack(baseCoordinates, targetMeters, random) {
  const jittered = baseCoordinates.map(point => jitterPoint(point, random));
  const result = [jittered[0]];
  let distance = 0;
  for (const candidate of jittered.slice(1)) {
    const previous = result.at(-1);
    const segmentDistance = haversineDistance(previous, candidate);
    if (segmentDistance < 0.01) continue;
    const remaining = targetMeters - distance;
    if (segmentDistance >= remaining) {
      result.push(interpolate(previous, candidate, remaining / segmentDistance));
      return result;
    }
    result.push(candidate);
    distance += segmentDistance;
  }
  throw new Error('生成路线未达到目标里程');
}

function generateCoordinates(route, targetMeters, { naturalize = false } = {}) {
  const random = Math.random;
  let lap = normalizedRoute(route);
  if (naturalize) lap = randomizedLap(lap, random);
  const result = [{ ...lap[0] }];
  let segmentIndex = 0;
  let current = { ...lap[0] };
  let remainingTarget = naturalize ? targetMeters * 1.25 + ROUTE_SPACING_METERS.max : targetMeters;

  while (remainingTarget > 0.01) {
    const segmentEnd = lap[segmentIndex + 1];
    const segmentDistance = haversineDistance(current, segmentEnd);
    if (segmentDistance < 0.01) {
      segmentIndex = (segmentIndex + 1) % (lap.length - 1);
      current = { ...lap[segmentIndex] };
      continue;
    }
    const movement = Math.min(
      randomBetween(ROUTE_SPACING_METERS.min, ROUTE_SPACING_METERS.max),
      segmentDistance,
      remainingTarget,
    );
    current = interpolate(current, segmentEnd, movement / segmentDistance);
    result.push(current);
    remainingTarget -= movement;
    if (movement >= segmentDistance - 0.01) {
      segmentIndex = (segmentIndex + 1) % (lap.length - 1);
      current = { ...lap[segmentIndex] };
    }
  }
  return naturalize ? trimNaturalTrack(result, targetMeters, random) : result;
}

function generateTimestamps(start, durationSeconds, pointCount) {
  const startTimestamp = start.getTime();
  const totalMilliseconds = durationSeconds * 1000;
  const intervalCount = pointCount - 1;
  const weights = Array.from({ length: intervalCount }, () => randomBetween(0.72, 1.28));
  const totalWeight = weights.reduce((total, weight) => total + weight, 0);
  let elapsedWeight = 0;

  return Array.from({ length: pointCount }, (_, index) => {
    if (index === 0) return startTimestamp;
    if (index === intervalCount) return startTimestamp + totalMilliseconds;
    elapsedWeight += weights[index - 1];
    return Math.round(startTimestamp + totalMilliseconds * elapsedWeight / totalWeight);
  });
}

function formatTime(date) {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function formatDate(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function formatDuration(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds % 3600 / 60);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds % 60)}`;
}

function formatPace(seconds, km) {
  const pace = Math.round(seconds / km);
  return `${Math.floor(pace / 60)}'${pad(pace % 60)}"`;
}

function normalizeRunPlan(task, plan) {
  const requestedKm = Math.max(0.2, number(task?.mileage, 3.2));
  const minSeconds = Math.max(60, Math.round(number(task?.minTime, 10) * 60));
  const maxSeconds = Math.max(minSeconds, Math.round(number(task?.maxTime, 25) * 60));
  const targetMeters = number(plan?.targetMeters, NaN);
  const durationSeconds = number(plan?.durationSeconds, NaN);
  const strideMeters = number(plan?.strideMeters, NaN);

  if (Math.abs(targetMeters - requestedKm * 1000) > 0.01
    || !Number.isSafeInteger(durationSeconds) || durationSeconds < minSeconds || durationSeconds > maxSeconds
    || strideMeters < STRIDE_METERS.min || strideMeters > STRIDE_METERS.max) {
    throw new Error('跑步预览数据无效');
  }
  return { targetMeters, durationSeconds, strideMeters };
}

export function createRunPlan(task) {
  const requestedKm = Math.max(0.2, number(task?.mileage, 3.2));
  const minSeconds = Math.max(60, Math.round(number(task?.minTime, 10) * 60));
  const maxSeconds = Math.max(minSeconds, Math.round(number(task?.maxTime, 25) * 60));
  const lowerDuration = minSeconds + (maxSeconds - minSeconds) * 0.15;
  const upperDuration = minSeconds + (maxSeconds - minSeconds) * 0.85;

  return {
    targetMeters: requestedKm * 1000,
    durationSeconds: Math.round(randomBetween(lowerDuration, upperDuration)),
    strideMeters: randomBetween(STRIDE_METERS.min, STRIDE_METERS.max),
  };
}

export function summarizeRunPlan({ task, route, plan }) {
  const normalized = normalizeRunPlan(task, plan);
  const km = normalized.targetMeters / 1000;
  return {
    routeName: route?.pointName || route?.pointId || '无固定路线',
    km: km.toFixed(2),
    usedTime: formatDuration(normalized.durationSeconds),
    avgSpeed: formatPace(normalized.durationSeconds, km),
    steps: String(Math.round(normalized.targetMeters / normalized.strideMeters)),
  };
}

export function buildRunFixture({ task, route, identity, now = new Date(), naturalize = true }, options = {}) {
  if (!task?.taskId) throw new Error('缺少跑步任务');
  if (!route?.pointId) throw new Error('当前任务未配置跑步路线');
  const plan = normalizeRunPlan(task, options.plan || createRunPlan(task));
  const { targetMeters, durationSeconds } = plan;
  const summary = summarizeRunPlan({ task, route, plan });
  const start = new Date(now);
  const end = new Date(start.getTime() + durationSeconds * 1000);
  const coordinates = generateCoordinates(route, targetMeters, { naturalize });
  const roundedCoordinates = [];
  for (const point of coordinates) {
    const rounded = {
      latitude: Number(point.latitude.toFixed(6)),
      longitude: Number(point.longitude.toFixed(6)),
    };
    if (!roundedCoordinates.length || haversineDistance(roundedCoordinates.at(-1), rounded) > 0.01) {
      roundedCoordinates.push(rounded);
    }
  }
  const timestamps = generateTimestamps(start, durationSeconds, roundedCoordinates.length);
  const pointList = roundedCoordinates.map((point, index) => {
    const timestamp = timestamps[index];
    return {
      ...point,
      time: formatTime(new Date(timestamp)),
      timestamp,
    };
  });
  const token = identity?.token || '';
  const version = identity?.version || 'web-run-1.0';
  const phoneInfo = identity?.phoneInfo || 'Web&GeneratedRoute&Node.js';

  return {
    begin: {
      runType: 0, version, phoneInfo, paperId: task.taskId, lineId: route.pointId, faceBase64: '',
    },
    exercise: {
      scantronId: '', stuNumber: String(identity?.stuNumber || ''), schoolCode: String(identity?.schoolCode || ''),
      runType: 0, km: summary.km, usedTime: summary.usedTime,
      fitDegree: '1.00', avgSpeed: summary.avgSpeed,
      steps: summary.steps, token, version, phoneInfo,
      evaluateDate: formatDate(start), endTime: formatTime(end), startTime: formatTime(start),
      taskId: task.taskId, sunrunPathPointList: route.pointList, flag: '1',
    },
    detail: {
      pointList, gyroscope: [], accelerometer: [], cheatCode: '正常跑步', scantronId: '', token,
    },
    summary: {
      taskName: task.name || task.taskId, ...summary,
      pointCount: pointList.length, startTime: formatTime(start), endTime: formatTime(end),
    },
  };
}

export function buildRouteFreeFixture({ task, identity, now = new Date() }, options = {}) {
  const generatedRoute = {
    pointId: 'route-free',
    pointName: '无固定路线',
    pointList: ROUTE_ONE_FALLBACK_POINTS,
  };
  const fixture = buildRunFixture({ task, route: generatedRoute, identity, now, naturalize: false }, options);

  return {
    ...fixture,
    begin: { ...fixture.begin, lineId: '' },
    exercise: { ...fixture.exercise, sunrunPathPointList: [] },
    summary: { ...fixture.summary, routeName: '无固定路线' },
  };
}
