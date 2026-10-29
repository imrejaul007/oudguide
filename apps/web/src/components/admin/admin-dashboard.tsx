'use client';

import Link from 'next/link';
import {
  Building2,
  Users,
  Flag,
  Award,
  FileText,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Clock,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';

/** Icon name -> component. Resolved inside the client component. */
const STAT_ICONS: Record<AdminStat['icon'], LucideIcon> = {
  building: Building2,
  users: Users,
  flag: Flag,
  award: Award,
  file: FileText,
  shield: ShieldCheck,
};

/**
 * Operator dashboard.
 *
 * Pattern ported from IndexOrbit's `src/app/admin/page.tsx`: a stats grid of
 * linked cards, a "pending actions" call-out that only appears when there is
 * something to do, and quick-entry AI suggestions.
 *
 * OudGuide's version is read-only over the projected domain state and never
 * exposes buyer PII.
 */

export interface AdminStat {
  key: string;
  label: string;
  labelAr: string;
  value: number;
  /**
   * Icon NAME, not a component.
   * A server component cannot pass a React component across the
   * server→client boundary — it is not serialisable and the page 500s.
   */
  icon: 'building' | 'users' | 'flag' | 'award' | 'file' | 'shield';
  href: string;
  tone: 'green' | 'brass' | 'neutral';
}

export interface PendingAction {
  label: string;
  labelAr: string;
  count: number;
  href: string;
}

export function AdminDashboard({
  locale,
  stats,
  pendingActions,
  recentProducers,
  isAr,
}: {
  locale: string;
  stats: AdminStat[];
  pendingActions: PendingAction[];
  recentProducers: {
    id: string;
    name: string;
    slug: string;
    country_name: string | null;
    is_claimed: boolean;
    contact_unlocked: boolean;
  }[];
  isAr: boolean;
}) {
  const toneClass: Record<AdminStat['tone'], { bg: string; fg: string }> = {
    green: { bg: 'var(--green-50)', fg: 'var(--green-700)' },
    brass: { bg: 'var(--brass-tint)', fg: 'var(--brass)' },
    neutral: { bg: 'var(--bg-eggshell)', fg: 'var(--ink-muted)' },
  };

  return (
    <div className="stack-12">
      {/* STATS GRID */}
      <div className="grid-4">
        {stats.map((stat) => {
          const tone = toneClass[stat.tone];
          return (
            <Link key={stat.key} href={stat.href} className="card" style={{ padding: 22 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                <div style={{ minWidth: 0 }}>
                  <div className="meta" style={{ marginBottom: 8, textTransform: 'none', letterSpacing: '0.02em' }}>
                    {isAr ? stat.labelAr : stat.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2.1rem',
                      fontWeight: 300,
                      lineHeight: 1,
                      color: 'var(--green-800)',
                    }}
                  >
                    {stat.value}
                  </div>
                </div>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: tone.bg,
                    color: tone.fg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {(() => {
                    const Icon = STAT_ICONS[stat.icon] ?? Building2;
                    return <Icon size={18} />;
                  })()}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* PENDING ACTIONS — only when there is something to do */}
      {pendingActions.length > 0 && (
        <section
          className="card-frame"
          style={{ borderColor: 'var(--brass)', background: 'var(--brass-tint)' }}
        >
          <div className="cluster" style={{ gap: 10, marginBottom: 16 }}>
            <Clock size={17} style={{ color: 'var(--brass)' }} />
            <h2 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--brass)' }}>
              {isAr ? 'إجراءات معلّقة' : 'Pending Actions'}
            </h2>
          </div>
          <div className="stack-2">
            {pendingActions.map((action) => (
              <Link
                key={action.href + action.label}
                href={action.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 12,
                  padding: '13px 16px',
                  background: 'var(--bg)',
                  border: '1px solid var(--line)',
                  borderRadius: 6,
                }}
              >
                <span style={{ fontSize: '0.88rem', color: 'var(--ink)' }}>
                  {action.count} {isAr ? action.labelAr : action.label}
                </span>
                <ArrowUpRight size={15} style={{ color: 'var(--ink-soft)' }} />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* SOURCING ASSISTANT QUICK ENTRY */}
      <section className="card-frame" style={{ background: 'var(--green-50)', borderColor: 'var(--green-100)' }}>
        <div className="cluster" style={{ gap: 10, marginBottom: 14 }}>
          <Sparkles size={17} style={{ color: 'var(--green-700)' }} />
          <h2 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--green-800)' }}>
            {isAr ? 'مساعد التوريد' : 'Sourcing Assistant'}
          </h2>
        </div>
        <p className="text-body" style={{ fontSize: '0.86rem', marginBottom: 16 }}>
          {isAr
            ? 'اسأل السجل الموثق مباشرة دون كشف أي بيانات اتصال.'
            : 'Query the documented register directly — the assistant never surfaces a contact detail.'}
        </p>
        <div className="grid-4" style={{ gap: 8 }}>
          {[
            { q: isAr ? 'أي مقطر يوفّر دهن عود معتقاً؟' : 'Which distillers ship aged oud oil?', href: `/${locale}/sourcing` },
            { q: isAr ? 'كيف أتحقق من دهن العود؟' : 'How do I verify oud oil authenticity?', href: `/${locale}/sourcing` },
            { q: isAr ? 'ما أقاليم الخشب الغطاس؟' : 'Which terroirs produce sinking-grade wood?', href: `/${locale}/sourcing` },
            { q: isAr ? 'ما متطلبات تصدير سايتس؟' : 'What are the CITES export requirements?', href: `/${locale}/sourcing` },
          ].map((s) => (
            <Link
              key={s.q}
              href={s.href}
              className="chip"
              style={{ background: 'var(--bg)', borderColor: 'var(--line)', whiteSpace: 'normal', lineHeight: 1.4 }}
            >
              “{s.q}”
            </Link>
          ))}
        </div>
      </section>

      {/* RECENT PRODUCERS */}
      <div className="grid-2">
        <section className="card-frame">
          <div className="cluster" style={{ gap: 10, marginBottom: 16 }}>
            <Building2 size={17} style={{ color: 'var(--green-600)' }} />
            <h2 style={{ fontSize: '1.1rem', margin: 0 }}>
              {isAr ? 'أحدث المنتجين' : 'Recent Producers'}
            </h2>
          </div>

          {recentProducers.length === 0 ? (
            <p className="text-body" style={{ fontSize: '0.85rem', textAlign: 'center', padding: '24px 0', margin: 0 }}>
              {isAr ? 'لا يوجد منتجون مسجلون بعد' : 'No producers registered yet'}
            </p>
          ) : (
            <div className="stack-3">
              {recentProducers.map((p) => (
                <Link
                  key={p.id}
                  href={`/${locale}/directory/${p.slug}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 12,
                    padding: '9px 0',
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--ink)' }}>{p.name}</div>
                    <div className="meta" style={{ textTransform: 'none', letterSpacing: '0.02em' }}>
                      {p.country_name}
                    </div>
                  </div>
                  <div className="cluster" style={{ gap: 6, flexShrink: 0 }}>
                    {p.contact_unlocked && (
                      <span className="badge badge-emerald" style={{ fontSize: '0.6rem' }}>
                        <CheckCircle2 size={10} />
                        {isAr ? 'مفتوح' : 'Open'}
                      </span>
                    )}
                    <Award size={13} style={{ color: p.is_claimed ? 'var(--green-600)' : 'var(--line-strong)' }} />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        <section className="card-frame">
          <div className="cluster" style={{ gap: 10, marginBottom: 16 }}>
            <ShieldCheck size={17} style={{ color: 'var(--green-600)' }} />
            <h2 style={{ fontSize: '1.1rem', margin: 0 }}>
              {isAr ? 'مبدآن أساسيان' : 'Two Invariants'}
            </h2>
          </div>
          <div className="stack-4">
            <div>
              <h3 style={{ fontSize: '0.95rem', marginBottom: 4 }}>
                {isAr ? 'حجب الاتصال التلقائي' : 'Automatic contact redaction'}
              </h3>
              <p className="text-body" style={{ fontSize: '0.84rem', margin: 0 }}>
                {isAr
                  ? 'لا يظهر أي هاتف أو بريد أو عنوان فعلي في الملفات الأساسية — حتى في مساعد التوريد.'
                  : 'No phone, email, or street address appears on basic profiles — including in the sourcing assistant.'}
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '0.95rem', marginBottom: 4 }}>
                {isAr ? 'سياسة الفشل المغلق' : 'Fail-closed lead policy'}
              </h3>
              <p className="text-body" style={{ fontSize: '0.84rem', margin: 0 }}>
                {isAr
                  ? 'لا يُفرج عن بيانات الاتصال إلا بعد 18 فحصاً ناجحاً وموافقة صريحة من المشتري.'
                  : 'Contact details release only after 18 passing invariants and an explicit buyer approval.'}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
