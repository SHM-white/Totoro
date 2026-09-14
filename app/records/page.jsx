'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, RefreshCcw } from 'lucide-react';
import { getRunRecords } from '../../lib/api';
import useStore from '../../lib/store';

export default function RecordsPage() {
  const router = useRouter();
  const {
    hasHydrated,
    isLoggedIn,
    getAuthData,
    records,
    recordsLoading,
    setRecords,
    setRecordsLoading,
  } = useStore();

  const [taskInfo, setTaskInfo] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState('');
  const [summary, setSummary] = useState(null);
  const [recordsError, setRecordsError] = useState('');
  const requestSequence = useRef(0);

  const fetchRecords = useCallback(async () => {
    const sequence = ++requestSequence.current;
    setRecordsLoading(true);
    try {
      const result = await getRunRecords(getAuthData(), { taskId });
      if (!result.success) throw new Error(result.message || '查询成绩失败');
      if (sequence !== requestSequence.current) return;
      setRecords(result.records);
      setTaskInfo(result.task_info);
      setTasks(result.tasks);
      setSummary(result.summary);
      setRecordsError('');
    } catch (error) {
      if (sequence !== requestSequence.current) return;
      setRecordsError(error.message);
      setRecords([]);
      setTaskInfo(null);
      setSummary(null);
    } finally {
      if (sequence === requestSequence.current) setRecordsLoading(false);
    }
  }, [getAuthData, setRecords, setRecordsLoading, taskId]);

  useEffect(() => {
    if (hasHydrated && !isLoggedIn) {
      router.replace('/');
    }
  }, [hasHydrated, isLoggedIn, router]);

  useEffect(() => {
    if (hasHydrated && isLoggedIn) {
      const timer = window.setTimeout(() => {
        fetchRecords();
      }, 0);

      return () => window.clearTimeout(timer);
    }
  }, [fetchRecords, hasHydrated, isLoggedIn]);

  if (!hasHydrated || !isLoggedIn) {
    return <main className="screen">Loading</main>;
  }

  return (
    <main className="screen app-screen">
      <header className="top-strip">
        <div>
          <Link href="/dashboard" className="back-action">
            <ArrowLeft size={18} />
            返回
          </Link>
          <h1 className="page-heading">记录</h1>
        </div>
        <button className="icon-button" onClick={fetchRecords} disabled={recordsLoading} type="button" aria-label="刷新记录">
          <RefreshCcw size={20} />
        </button>
      </header>

      {tasks.length > 0 && (
        <div className="form-grid">
          <label>
            <span>跑步任务</span>
            <select value={taskId || taskInfo?.taskId || ''} onChange={event => {
              setTaskId(event.target.value);
            }}>
              {tasks.map(task => <option key={task.taskId} value={task.taskId}>{task.name}</option>)}
            </select>
          </label>
        </div>
      )}
      {recordsError && <p className="result-block error" role="alert">{recordsError}</p>}

      {taskInfo && (
        <section className="progress-block">
          <p className="block-label">当前任务周期</p>
          <h2>
            {summary?.completedTimes ?? '—'}
            <span>/{summary?.requireNumber ?? '—'}</span>
          </h2>
          <p>
            {taskInfo.startDate} 至 {taskInfo.endDate}
          </p>
          <p>服务端完成次数 · 累计 {summary?.totalMileage ?? '—'} 公里</p>
        </section>
      )}

      {recordsLoading && <div className="empty-state" role="status">加载中</div>}

      {!recordsLoading && !recordsError && records.length === 0 && <div className="empty-state">暂无跑步记录</div>}

      <section className="records-list" aria-label="跑步记录列表">
        {records.map((record, index) => (
          <article key={record.scoreId || `${record.day}-${index}`} className="record-card">
            <div>
              <p className="record-date">{record.day}</p>
              <span className={`status-pill ${record.isValid ? 'success' : ''}`}>
                {record.statusText}
              </span>
              {record.remark && <p>{record.remark}</p>}
            </div>
            <dl>
              <div>
                <dt>开始</dt>
                <dd>{record.runTime || '-'}</dd>
              </div>
              <div>
                <dt>用时</dt>
                <dd>{record.usedTime || '-'}</dd>
              </div>
              <div>
                <dt>公里</dt>
                <dd>{record.mileage || '-'}</dd>
              </div>
            </dl>
          </article>
        ))}
      </section>

    </main>
  );
}
