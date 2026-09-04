'use client';

import { createElement, useEffect, useRef } from 'react';
import { Clock3, ShieldAlert, TriangleAlert, X } from 'lucide-react';

const NOTICE_ITEMS = [
  {
    title: '技术反作弊',
    icon: ShieldAlert,
    tone: 'acid',
    content:
      '全面启用龙猫小程序，解决手机系统兼容性问题；在主干道及操场安装摄像头，通过定位与物理轨迹比对，严查代跑及数据造假。',
  },
  {
    title: '申诉时效限制',
    icon: Clock3,
    tone: 'paper',
    content: '申诉时间严格限定在 72 小时内，逾期不予受理，以杜绝学期末集中申诉的现象。',
  },
  {
    title: '违纪处理',
    icon: TriangleAlert,
    tone: 'signal',
    content:
      '严禁网上购买成绩或使用程序作弊，一经查实将严肃处理（如取消成绩、通报批评）。',
  },
];

export default function LoginNoticeDialog({ open, onClose }) {
  const dialogRef = useRef(null);
  const confirmRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    confirmRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll(
          'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!dialogRef.current.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [onClose, open]);

  if (!open) return null;

  return (
    <div className="modal-backdrop login-notice-backdrop" role="presentation">
      <section
        className="login-notice-dialog"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-notice-title"
        aria-describedby="login-notice-summary"
      >
        <button className="notice-close" onClick={onClose} type="button" aria-label="关闭公告">
          <X size={22} aria-hidden="true" />
        </button>

        <div className="login-notice-scroll" tabIndex="-1">
          <header className="login-notice-header">
            <p className="block-label">Important Notice</p>
            <h2 id="login-notice-title">龙猫打卡技术升级</h2>
            <p id="login-notice-summary">请在使用龙猫打卡前，仔细阅读以下规则。</p>
          </header>

          <div className="login-notice-list">
            {NOTICE_ITEMS.map(({ title, icon, tone, content }) => (
              <article className={`login-notice-item ${tone}`} key={title}>
                <div className="login-notice-icon" aria-hidden="true">
                  {createElement(icon, { size: 24, strokeWidth: 2.4 })}
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{content}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <footer className="login-notice-footer">
          <p>登录即表示你已阅读并知悉以上公告。</p>
          <button ref={confirmRef} className="action-button login-notice-confirm" onClick={onClose} type="button">
            我已知悉
          </button>
        </footer>
      </section>
    </div>
  );
}
