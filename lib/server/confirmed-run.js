import { enqueueDelayedRun } from './run-queue.js';
import { summarizeRunPlan } from './run-data.js';

export async function executeConfirmedRun(input, options = {}) {
  const env = options.env || process.env;
  return enqueueDelayedRun({
    input,
    plan: options.plan,
    track: summarizeRunPlan({ task: input.task, route: input.route, plan: options.plan }),
  }, {
    env,
    queue: options.queue,
    now: options.now,
    jobId: options.jobId,
  });
}
