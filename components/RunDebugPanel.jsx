'use client';

import { useRef, useState } from 'react';
import { debugRunStep } from '../lib/api';
import { RUN_DEBUG_STEPS } from '../lib/run-debug';
import useStore from '../lib/store';

export default function RunDebugPanel({ lineId }) {
  const getAuthData = useStore(state => state.getAuthData);
  const [results, setResults] = useState([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const pending = useRef(false);
  const step = RUN_DEBUG_STEPS[results.length];

  async function execute() {
    if (pending.current || !step) return;
    pending.current = true;
    setBusy(true);
    setError('');
    try {
      const data = await debugRunStep(getAuthData(), step.id, lineId);
      setResults(current => [...current, data.result]);
    } catch (error) { setError(error.message); }
    finally { pending.current = false; setBusy(false); }
  }

  return <section className="run-debug" aria-label="跑步接口逐步调试">
    <h2>逐步调试跑步接口</h2>
    <p>每次点击只请求一步，查看上游实际返回值。当前检查任务、时间、学校配置和开跑资格；不自动创建场次或提交运动记录。</p>
    <button className="action-button" type="button" disabled={busy || !step} onClick={execute}>
      {busy ? '请求中…' : results.length === 0 ? '开始跑步 · 逐步调试' : step ? `下一步：${step.name}` : '准备接口检查完成'}
    </button>
    {error && <p role="alert" className="result-block error">{error}</p>}
    <p role="status">已查看 {results.length} / {RUN_DEBUG_STEPS.length} 步{step ? ` · 待调用 ${step.name}` : ' · 根据返回结果确认下一步所需的校验'}</p>
    {results.map((result, index) => <article className="debug-result" key={result.step}>
      <h3>{index + 1}. {RUN_DEBUG_STEPS[index].name}</h3>
      <code>{result.endpoint}</code>
      <p>HTTP {result.httpStatus} · {result.elapsedMs} ms · {result.receivedAt}</p>
      <ul>{result.notes.map((note, i) => <li key={i}>{note}</li>)}</ul>
      <details open><summary>响应 JSON（敏感字段已隐藏）</summary><pre>{JSON.stringify(result.response, null, 2)}</pre></details>
      <details><summary>请求信息（敏感字段已隐藏）</summary><pre>{JSON.stringify({ host: result.host, method: result.method, body: result.request }, null, 2)}</pre></details>
    </article>)}
    {results.length > 0 && <button type="button" className="action-button secondary" disabled={busy}
      onClick={() => { setResults([]); setError(''); }}>清空结果，重新逐步检查</button>}
  </section>;
}
