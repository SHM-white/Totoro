import { json } from '../../../../lib/server/http.js';
import { WEB_RUN_LIMITATION } from '../../../../lib/run-capability.js';

export const runtime = 'nodejs';

// Old clients must not create a session or submit generated data.
export async function POST() {
  return json({ success: false, code: 'WEB_RUN_UNSUPPORTED', message: WEB_RUN_LIMITATION },
    { status: 410, headers: { 'Cache-Control': 'no-store' } });
}
