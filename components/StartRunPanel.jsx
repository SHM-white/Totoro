'use client';

import { useRef, useState } from 'react';
import { startRun } from '../lib/api';
import useStore from '../lib/store';

export default function StartRunPanel({ task, route }) {
  const getAuthData = useStore(state => state.getAuthData);
  const pending = useRef(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  async function execute() {
    if (pending.current || !task) return;
    pending.current = true;
    setBusy(true);
    setError('');
    setResult(null);
    try {
      const data = await startRun(getAuthData(), task, route);
      setResult(data.result);
    } catch (caught) {
      setError(caught.message);
    } finally {
      pending.current = false;
      setBusy(false);
    }
  }

  return <section className="start-run" aria-label="开始跑步" aria-busy={busy}>
    <h2>开始跑步</h2>
    <p>确认任务与路线后开始，完成后会显示本次跑步结果。</p>
    {!task && <p className="limit-note">当前没有可用跑步任务。</p>}
    {task && !route && <p className="limit-note" role="status">
      当前任务未配置固定路线；开始后仍会创建真实跑步场次，并按空路线任务提交成绩。
    </p>}
    <button className="action-button" type="button" disabled={busy || !task} onClick={execute}>
      {busy ? '正在跑步…' : route ? '开始跑步' : '开始无固定路线跑步'}
    </button>
    {error && <p className="result-block error" role="alert">{error}</p>}
    {result && <article className="run-result result-block success" role="status">
      <div>
        <strong>跑步流程已完成</strong>
        <span>{result.track.routeName} · {result.track.km} km · {result.track.usedTime}</span>
      </div>
      <div className="inline-stats">
        <span>配速 {result.track.avgSpeed}</span>
        <span>{result.track.steps} 步</span>
      </div>
      <p>场次 {result.scantronId}</p>
    </article>}
  </section>;
}
