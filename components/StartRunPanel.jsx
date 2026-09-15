'use client';

import { useEffect, useRef, useState } from 'react';
import { getRunJobStatus, previewRun, startRun } from '../lib/api';
import useStore from '../lib/store';

export default function StartRunPanel({ task, route }) {
  const getAuthData = useStore(state => state.getAuthData);
  const pending = useRef(false);
  const [operation, setOperation] = useState('');
  const [error, setError] = useState('');
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (result?.mode !== 'queued' || !result.jobId) return undefined;
    let cancelled = false;
    let timer;

    async function poll() {
      try {
        const data = await getRunJobStatus(getAuthData(), result.jobId);
        if (cancelled) return;
        setError('');
        if (data.job.state === 'completed') {
          setResult(data.job.result);
          return;
        }
        if (data.job.state === 'failed') {
          setError(data.job.failedReason || '延迟任务处理失败');
          setResult(null);
          return;
        }
        timer = window.setTimeout(poll, 2000);
      } catch (caught) {
        if (!cancelled) {
          setError(`${caught.message}，正在重试`);
          timer = window.setTimeout(poll, 2000);
        }
      }
    }

    timer = window.setTimeout(poll, 1000);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [getAuthData, result?.jobId, result?.mode]);

  async function generatePreview() {
    if (pending.current || !task) return;
    pending.current = true;
    setOperation('preview');
    setError('');
    setResult(null);
    try {
      const data = await previewRun(getAuthData(), task, route);
      setPreview(data.preview);
    } catch (caught) {
      setError(caught.message);
    } finally {
      pending.current = false;
      setOperation('');
    }
  }

  async function execute() {
    if (pending.current || !preview) return;
    pending.current = true;
    setOperation('start');
    setError('');
    try {
      const data = await startRun(getAuthData(), task, route, preview.previewToken);
      setResult(data.result);
      setPreview(null);
    } catch (caught) {
      setError(caught.message);
    } finally {
      pending.current = false;
      setOperation('');
    }
  }

  const busy = Boolean(operation);

  return <section className="start-run" aria-label="开始跑步" aria-busy={busy}>
    <h2>开始跑步</h2>
    <p>先生成并核对本次跑步数据，确认无误后再开始。</p>
    {!task && <p className="limit-note">当前没有可用跑步任务。</p>}
    {task && !route && <p className="limit-note" role="status">
      当前任务未配置固定路线；开始后仍会创建真实跑步场次，并按空路线任务提交成绩。
    </p>}
    {!preview && !result && <button className="action-button" type="button" disabled={busy || !task} onClick={generatePreview}>
      {operation === 'preview' ? '正在生成数据…' : '查看跑步数据'}
    </button>}
    {error && <p className="result-block error" role="alert">{error}</p>}
    {preview && <article className="run-preview result-block" aria-labelledby="run-preview-title">
      <div>
        <div>
          <p className="block-label">跑步数据预览</p>
          <strong id="run-preview-title">确认后才会开始跑步</strong>
        </div>
        <span className="preview-state">10 分钟内有效</span>
      </div>
      <dl className="run-metrics">
        <div><dt>路线</dt><dd>{preview.track.routeName}</dd></div>
        <div><dt>里程</dt><dd className="metric-value">{preview.track.km} km</dd></div>
        <div><dt>用时</dt><dd className="metric-value">{preview.track.usedTime}</dd></div>
        <div><dt>平均配速</dt><dd className="metric-value">{preview.track.avgSpeed}</dd></div>
        <div><dt>步数</dt><dd className="metric-value">{preview.track.steps}</dd></div>
      </dl>
      <div className="run-preview-actions">
        <button className="action-button secondary" type="button" disabled={busy} onClick={generatePreview}>
          {operation === 'preview' ? '正在重新生成…' : '重新生成'}
        </button>
        <button className="action-button" type="button" disabled={busy} onClick={execute}>
          {operation === 'start' ? '正在跑步…' : route ? '确认并开始跑步' : '确认并开始无固定路线跑步'}
        </button>
      </div>
    </article>}
    {result?.mode === 'queued' && <article className="run-result result-block" role="status">
      <div>
        <strong>跑步已加入延迟队列</strong>
        <span>{result.track.routeName} · {result.track.km} km · {result.track.usedTime}</span>
      </div>
      <div className="inline-stats">
        <span>正在等待独立 Worker</span>
        <span>计划处理：{new Date(result.scheduledAt).toLocaleTimeString('zh-CN')}</span>
      </div>
      <p>任务 {result.jobId}</p>
    </article>}
    {result && result.mode !== 'queued' && <article className="run-result result-block success" role="status">
      <div>
        <strong>跑步流程已完成</strong>
        <span>{result.track.routeName} · {result.track.km} km · {result.track.usedTime}</span>
      </div>
      <div className="inline-stats">
        <span>配速 {result.track.avgSpeed}</span>
        <span>{result.track.steps} 步</span>
      </div>
      <p>场次 {result.scantronId}</p>
      <button className="action-button secondary" type="button" disabled={busy} onClick={generatePreview}>
        查看下一次跑步数据
      </button>
    </article>}
  </section>;
}
