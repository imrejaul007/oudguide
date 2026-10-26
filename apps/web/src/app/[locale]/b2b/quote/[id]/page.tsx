import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CircleCheck,
  Circle,
  Hourglass,
  Quote,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import { domain } from '@/lib/data';
import { quickLeadCopy, portalCopy, pick } from '@/lib/copy/b2b-portal';
import { businessSummaryBySlug } from '@/lib/data';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    path: `/${locale}/b2b/quote`,
    title: pick(locale, quickLeadCopy.receipt),
    description: pick(locale, quickLeadCopy.receiptBody),
    locale,
    noindex: true,
  });
}

export default async function B2bQuoteReceiptPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const isAr = locale === 'ar';

  // The receipt re-reads the lead on the server. The summary accessor is
  // the one the buyer sees: no buyer contact is echoed back at them.
  const lead = await domain.getLeadSummary(id);

  if (!lead) {
    return (
      <div className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="card-frame" style={{ padding: 24, textAlign: 'center' }}>
            <h2>{isAr ? 'لم نعثر على هذا الطلب' : 'We could not find this request'}</h2>
            <p className="discipline-body">
              {isAr
                ? 'ربما انتهت صلاحية الرابط أو كان غير صحيح.'
                : 'The link may be expired or incorrect.'}
            </p>
            <Link
              className="btn btn-primary"
              href={`/${locale}/b2b/quote`}
              style={{ marginTop: 16 }}
            >
              {pick(locale, portalCopy.quoteRequestCta)}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const [assignments, quotes] = await Promise.all([
    domain.listAssignmentsForLead(id),
    domain.listQuotesForLead(id),
  ]);

  // One status marker per state, in the order the journey moves through.
  const STATUS_STEPS = [
    {
      key: 'review',
      icon: Hourglass,
      label: isAr ? 'مراجعة' : 'Under review',
      active: lead.status === 'new',
      done: lead.status !== 'new',
    },
    {
      key: 'assigned',
      icon: Circle,
      label: isAr ? 'مُسند' : 'Supplier matched',
      active: lead.status === 'assigned',
      done: ['in_progress', 'closed'].includes(lead.status),
    },
    {
      key: 'quotes',
      icon: Quote,
      label: isAr ? 'عروض' : 'Quotes in',
      active: lead.status === 'in_progress',
      done: lead.status === 'closed' && quotes.length > 0,
    },
  ];

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <CircleCheck size={12} />
              <span>{isAr ? 'إيصال الطلب' : 'Request receipt'}</span>
            </div>
            <h1>
              {pick(locale, quickLeadCopy.receipt)}
              <span className="accent">#{id.slice(-6).toUpperCase()}</span>
            </h1>
            <p className="hero-lead">{pick(locale, quickLeadCopy.receiptBody)}</p>
          </div>
        </section>

        {/* The status rail. */}
        <div className="card-frame status-rail" style={{ padding: 20 }}>
          {STATUS_STEPS.map((step) => (
            <div key={step.key} className="status-step" style={{ opacity: step.active || step.done ? 1 : 0.45 }}>
              <step.icon
                size={15}
                style={{ color: step.active ? 'var(--green-700)' : 'var(--ink-300)' }}
              />
              <span>{step.label}</span>
            </div>
          ))}
        </div>

        {/* The requirement, as the buyer filed it. */}
        <div className="card-frame" style={{ padding: 20, marginTop: 16 }}>
          <h4>{isAr ? 'متطلبك كما قدمته' : 'Your requirement, as submitted'}</h4>
          <dl className="receipt-requirement">
            <div>
              <dt>{isAr ? 'المادة' : 'Material'}</dt>
              <dd>{lead.requirement.product_family}</dd>
            </div>
            {lead.requirement.quantity ? (
              <div>
                <dt>{isAr ? 'الكمية' : 'Quantity'}</dt>
                <dd>{lead.requirement.quantity}</dd>
              </div>
            ) : null}
            {lead.requirement.destination_country ? (
              <div>
                <dt>{isAr ? 'الوجهة' : 'Destination'}</dt>
                <dd>{lead.requirement.destination_country}</dd>
              </div>
            ) : null}
            {lead.requirement.timeline ? (
              <div>
                <dt>{isAr ? 'الوقت' : 'Timeline'}</dt>
                <dd>{lead.requirement.timeline}</dd>
              </div>
            ) : null}
          </dl>
          {assignments.length > 0 && (
            <p className="discipline-note">
              {isAr
                ? `عُهد هذا الطلب إلى ${assignments.length} من الموردين المعتمدين للمراجعة.`
                : `This request has been placed with ${assignments.length} ${assignments.length === 1 ? 'verified supplier' : 'verified suppliers'}.`}
            </p>
          )}
        </div>

        {/* Quotes posted for this lead — price only, no supplier contact. */}
        {quotes.length > 0 && (
          <div style={{ marginTop: 16 }}>
            <h4 style={{ marginBottom: 10 }}>{isAr ? 'العروض المستلمة' : 'Quotes received'}</h4>
            {quotes.map((q) => {
              const supplier = q.business_id
                ? Object.values(businessSummaryBySlug).find((b) => b.slug === q.business_id)
                : undefined;
              return (
                <div key={q.id} className="card-frame quote-card" style={{ padding: 16, marginBottom: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                    <div>
                      <strong>
                        {supplier ? supplier.displayTitle : isAr ? 'مورد معتمد' : 'Verified supplier'}
                      </strong>
                      <div className="discipline-note">
                        {q.price !== undefined
                          ? `${new Intl.NumberFormat(locale === 'ar' ? 'ar-AE' : 'en-US').format(q.price)} ${q.currency ?? ''} / ${q.unit ?? 'unit'}`
                          : isAr
                            ? 'سعر عند الطلب'
                            : 'Price on request'}
                      </div>
                    </div>
                    {q.validity_days ? (
                      <span className="badge badge-emerald">
                        {isAr ? `صالح لمدة ${q.validity_days} يوماً` : `valid ${q.validity_days} days`}
                      </span>
                    ) : null}
                  </div>
                  {q.note ? <p className="discipline-body" style={{ margin: '8px 0 0' }}>{q.note}</p> : null}
                </div>
              );
            })}
          </div>
        )}

        <div className="masthead-actions" style={{ marginTop: 24 }}>
          <span className="badge badge-emerald">
            <ShieldCheck size={12} />
            {isAr
              ? 'لا ترى هذه الصفحة أي عنوان بريد أو هاتف.'
              : 'This page shows no email or phone of yours.'}
          </span>
          <Link className="btn btn-ghost" href={`/${locale}/b2b`} style={{ marginBottom: 4 }}>
            {isAr ? 'العودة إلى البوابة' : 'Back to the portal'}
            <ArrowRight size={13} className="icon-dir-flip" />
          </Link>
        </div>
      </div>
    </div>
  );
}
