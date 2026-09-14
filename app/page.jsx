"use client";

import { useEffect, useRef, useState } from 'react';
import { Eye, EyeOff, KeyRound } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { loginWithToken } from '../lib/api';
import useStore from '../lib/store';

export default function LoginPage() {
  const router = useRouter();
  const { hasHydrated, isLoggedIn, login } = useStore();
  const [token, setToken] = useState('');
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const pending = useRef(false);

  useEffect(() => {
    if (hasHydrated && isLoggedIn) router.replace('/dashboard');
  }, [hasHydrated, isLoggedIn, router]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (pending.current || !token.trim()) return;
    pending.current = true;
    setLoading(true);
    setError('');
    try {
      const result = await loginWithToken(token);
      if (!result.success) throw new Error(result.message || '登录失败');
      login(result.data);
      setToken('');
      router.replace('/dashboard');
    } catch (error) {
      setError(error.message);
    } finally {
      pending.current = false;
      setLoading(false);
    }
  }

  return (
    <main className="screen login-screen">
      <section className="login-shell" aria-label="Token 登录">
        <div className="brand-mark"><KeyRound size={28} strokeWidth={2.4} /></div>
        <p className="eyebrow">Totoro Sunrun</p>
        <h1 className="mega-title">阳光跑</h1>
        <form className="token-form" onSubmit={handleSubmit} aria-busy={loading}>
          <label htmlFor="login-token">小程序 Token</label>
          <p id="token-hint" className="token-hint">粘贴 Token，验证后自动获取你的学生信息。</p>
          <div className="token-input-row">
            <input id="login-token" type={visible ? 'text' : 'password'} value={token}
              onChange={event => setToken(event.target.value)} placeholder="输入或粘贴 Token"
              autoComplete="off" autoCapitalize="none" spellCheck={false} maxLength={16384}
              aria-describedby="token-hint" required disabled={loading} />
            <button type="button" className="token-visibility" aria-label={visible ? '隐藏 Token' : '显示 Token'}
              aria-pressed={visible} onClick={() => setVisible(!visible)}>
              {visible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {error && <p className="status-line error" role="alert">{error}</p>}
          <button className="action-button" type="submit" disabled={!hasHydrated || loading || !token.trim()}>
            {loading ? '正在验证…' : '登录'}
          </button>
        </form>
      </section>
    </main>
  );
}
