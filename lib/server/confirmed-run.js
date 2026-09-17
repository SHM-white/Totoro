import { prepareRun } from './start-run.js';
import { enqueueDelayedRun, getRunQueue } from './run-queue.js';
import { summarizeRunPlan } from './run-data.js';

export async function executeConfirmedRun(input, options = {}) {
  const env = options.env || process.env;
  const queue = options.queue || getRunQueue(env);
  await queue.waitUntilReady?.();
  const prepareRunImpl = options.prepareRunImpl || prepareRun;
  const session = await prepareRunImpl(input, {
    plan: options.plan,
    now: options.now,
    fetchImpl: options.fetchImpl,
    baseUrl: options.baseUrl,
  });
  return enqueueDelayedRun({
    input,
    plan: options.plan,
    session: {
      scantronId: session.scantronId,
      runStartedAt: session.runStartedAt,
      preferredBaseUrl: session.preferredBaseUrl,
    },
    track: summarizeRunPlan({ task: input.task, route: input.route, plan: options.plan }),
  }, {
    env,
    queue,
    now: options.now,
    jobId: options.jobId,
  });
}
