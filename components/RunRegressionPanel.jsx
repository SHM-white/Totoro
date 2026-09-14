'use client';

import { useEffect, useRef, useState } from 'react';
import { getRegressionSetup, runLocalRegression } from '../lib/api';
import useStore from '../lib/store';

export default function RunRegressionPanel({ task, route }) {
  const getAuthData = useStore(state => state.getAuthData);
  const pending = useRef(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);
  const [setup, setSetup] = useState(null);
  const effectiveTask = task || setup?.sampleTask;
  const effectiveRoute = route || effectiveTask?.runPointList?.[0];

  useEffect(() => {
    let active = true;
    getRegressionSetup().then(data => { if (active) setSetup(data); })
      .catch(caught => { if (active) setError(caught.message); });
    return () => { active = false; };
  }, []);

  async function execute() {
    if (pending.current || !effectiveRoute) return;
    pending.current = true;
    setBusy(true);
    setError('');
    setResult(null);
    try {
      const data = await runLocalRegression(getAuthData(), effectiveTask, effectiveRoute);
      setResult(data.result);
    } catch (caught) {
      setError(caught.message);
    } finally {
      pending.current = false;
      setBusy(false);
    }
  }

  return <section className="run-regression" aria-label="跑步流程本地回归">
    <h2>完整流程回归</h2>
    <p>{setup ? `当前目标：${setup.target}。` : '正在读取回归配置…'}依次校验准备、创建场次、点位查询、基础成绩和轨迹明细。</p>
    {!task && setup?.mode === 'mock' && <p className="limit-note">上游任务不可用，改用内置的本地回归任务与路线。</p>}
    {!task && setup?.mode === 'test' && <p className="result-block error">测试模式必须先从测试环境取得任务与路线。</p>}
    <button className="action-button" type="button" disabled={busy || !effectiveRoute} onClick={execute}>
      {busy ? '正在运行…' : '运行完整回归流程'}
    </button>
    {error && <p className="result-block error" role="alert">{error}</p>}
    {result && <article className="regression-report result-block success" role="status">
      <div>
        <strong>{result.target}</strong>
        <span>{result.track.routeName} · {result.track.km} km · {result.track.usedTime}</span>
      </div>
      <div className="inline-stats">
        <span>{result.track.pointCount} 个轨迹点</span>
        <span>配速 {result.track.avgSpeed}</span>
        <span>{result.track.steps} 步</span>
      </div>
      <p>场次 {result.scantronId}</p>
      <ol>{result.steps.map(step => <li key={step.endpoint}>
        <code>{step.endpoint}</code> · {step.ok ? '通过' : '失败'} · {step.elapsedMs} ms
      </li>)}</ol>
      <details><summary>首末轨迹点</summary><pre>{JSON.stringify(result.sample, null, 2)}</pre></details>
    </article>}
  </section>;
}
