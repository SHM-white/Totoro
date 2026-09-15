"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, RefreshCcw } from 'lucide-react';
import { getRunTasks } from '../../lib/api';
import StartRunPanel from '../../components/StartRunPanel';
import DiscussionComments from '../../components/DiscussionComments';
import useStore from '../../lib/store';

export default function DashboardPage() {
  const router = useRouter();
  const { hasHydrated, isLoggedIn, userInfo, getAuthData, logout } = useStore();
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState('');
  const [pointId, setPointId] = useState('');
  const [taskError, setTaskError] = useState('');
  const [tasksLoading, setTasksLoading] = useState(true);
  const [revision, setRevision] = useState(0);
  const task = tasks.find(item => item.taskId === taskId) || tasks[0];
  const route = task?.runPointList.find(point => point.pointId === pointId) || task?.runPointList[0];

  useEffect(() => {
    if (!hasHydrated || !isLoggedIn) return;
    let active = true;
    getRunTasks(getAuthData()).then(result => {
      if (!result.success) throw new Error(result.message || '获取任务失败');
      if (active) {
        setTasks(result.tasks);
        setTaskError('');
      }
    }).catch(error => {
      if (active) {
        setTasks([]);
        setTaskError(error.message);
      }
    }).finally(() => { if (active) setTasksLoading(false); });
    return () => { active = false; };
  }, [hasHydrated, isLoggedIn, getAuthData, revision]);

  useEffect(() => {
    if (hasHydrated && !isLoggedIn) router.replace('/');
  }, [hasHydrated, isLoggedIn, router]);

  if (!hasHydrated || !isLoggedIn) return <main className="screen">加载中</main>;

  return (
    <main className="screen app-screen">
      <header className="top-strip">
        <div><p className="eyebrow">Sunrun</p><h1 className="page-heading">跑步任务</h1></div>
        <button className="icon-text-button" onClick={() => { logout(); router.replace('/'); }} type="button">
          <LogOut size={18} />退出
        </button>
      </header>
      <section className="identity-block">
        <div><p className="block-label">当前账号</p><h2>{userInfo?.stuName || '用户'}</h2></div>
        <p>{userInfo?.stuNumber || '-'} / {userInfo?.schoolName || '-'}</p>
      </section>
      <section className="command-panel">
        <div className="top-strip">
          <div className="panel-copy"><p className="block-label">Task & Route</p><h2>任务与路线</h2></div>
          <button className="icon-button" type="button" aria-label="刷新任务" disabled={tasksLoading}
            onClick={() => { setTasksLoading(true); setRevision(value => value + 1); }}><RefreshCcw size={20} /></button>
        </div>
        {tasksLoading && <p role="status">正在加载跑步任务…</p>}
        {taskError && <p className="result-block error" role="alert">{taskError}</p>}
        {!tasksLoading && !taskError && !task && <p>当前没有可用跑步任务</p>}
        {task && (
          <div className="form-grid">
            <label><span>跑步任务</span>
              <select value={task.taskId} onChange={event => { setTaskId(event.target.value); setPointId(''); }}>
                {tasks.map(item => <option key={item.taskId} value={item.taskId}>{item.name}</option>)}
              </select>
            </label>
            <label><span>跑步路线</span>
              <select value={task.runPointList.some(point => point.pointId === pointId) ? pointId : task.runPointList[0]?.pointId || ''}
                disabled={!task.runPointList.length} onChange={event => setPointId(event.target.value)}>
                {!task.runPointList.length && <option value="">暂无路线</option>}
                {task.runPointList.map(point => <option key={point.pointId} value={point.pointId}>{point.pointName}</option>)}
              </select>
            </label>
            <p className="limit-note">{task.mileage} 公里 · {task.minTime}–{task.maxTime} 分钟<br />
              {task.startDate} 至 {task.endDate}<br />
              {task.runTimeRuleList.map(rule => `${rule.startTime}–${rule.endTime}`).join(' / ')}
            </p>
          </div>
        )}
        {!tasksLoading && <StartRunPanel key={`${task?.taskId || ''}:${route?.pointId || ''}`} task={task} route={route} />}
      </section>
      <DiscussionComments />
    </main>
  );
}
