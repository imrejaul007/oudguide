'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FileText, ArrowRight, X, ShieldCheck, Zap } from 'lucide-react';

interface FloatingRfqDockProps {
  locale: string;
  isAr: boolean;
}

export function FloatingRfqDock({ locale, isAr }: FloatingRfqDockProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Only show after user scrolls past 300px
    const handleScroll = () => {
      if (window.scrollY > 320) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible || dismissed) return null;

  return (
    <aside
      className="floating-rfq-dock"
      role="complementary"
      aria-label={isAr ? 'طلب توريد جملة سريع' : 'Quick Wholesale Sourcing RFQ'}
    >
      <div className="floating-rfq-dock-lead">
        <div className="floating-rfq-dock-icon">
          <Zap size={18} />
        </div>
        <div style={{ minWidth: 0 }}>
          <h4 className="floating-rfq-dock-title">
            {isAr
              ? 'هل تحتاج كميات تجارية أو عينات مخصصة؟'
              : 'Need volume contracts, custom distillation, or rare terroirs?'}
          </h4>
          <div className="floating-rfq-dock-guarantees">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <ShieldCheck size={12} style={{ color: 'var(--green-300)' }} />
              {isAr ? '0% عمولة وساطة' : '0% Brokerage Markup'}
            </span>
            <span>·</span>
            <span>{isAr ? 'موردون معتمدون فقط' : 'Verified Distillers Only'}</span>
            <span>·</span>
            <span>{isAr ? 'حماية بيانات المشتري' : 'Confidential Intake'}</span>
          </div>
        </div>
      </div>

      <div className="cluster" style={{ gap: 10, flexShrink: 0 }}>
        <Link
          href={`/${locale}/b2b/quote`}
          className="btn btn-primary btn-sm"
          style={{ gap: 6, padding: '9px 18px' }}
        >
          <FileText size={14} />
          <span>{isAr ? 'طلب تسعير خلال 60 ثانية' : 'Post 60s RFQ'}</span>
          <ArrowRight size={13} className="icon-dir-flip" />
        </Link>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="icon-button"
          style={{ color: 'rgba(255, 255, 255, 0.65)', width: 28, height: 28 }}
          aria-label={isAr ? 'إغلاق' : 'Dismiss'}
        >
          <X size={15} />
        </button>
      </div>
    </aside>
  );
}
