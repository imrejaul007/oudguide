import { seed, domain } from '@/lib/data';
import Link from 'next/link';





export default async function AdminInquiriesPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ action?: string; result?: string }>;
}) {
  const { locale } = await params;
  const { action, result } = await searchParams;
  const isAr = locale === 'ar';

  const outbox = domain.getOutbox();
  const businesses = domain.listBusinesses();
  const marketPoints = domain.getMarketDataPoints();
  const priceBands = domain.getMarketPriceAggregate(5);

  return (
    <div>
      <section className="masthead">
        <div className="masthead-inner">
          <span className="hero-tag">{isAr ? 'مساحة المشغّل' : 'Operator Workspace'}</span>
          <h1>{isAr ? 'لوحة تحكم إدارة التوريد والربط التجاري' : 'Admin Sourcing & Introduction Dispatch Dashboard'}</h1>
          <p className="hero-lead">
            {isAr
              ? 'لوحة إدارة مشغلي دليل العود لمراجعة الطلبات، التحقق من القنوات، واعتماد إصدار مقدمات التعريف للموردين وفق سياسة الإفراج الفاشلة-الإغلاق.'
              : 'Operator workspace for qualifying inquiries, auditing consent, and executing introduction releases via the pure fail-closed lead policy.'}
          </p>
        </div>
      </section>

      {action && (
        <div className="banner-success">
          <strong>Action completed:</strong> {action} {result ? `(Result: ${result})` : ''}
        </div>
      )}

      <div className="grid-2">
        <div className="card">
          <h3>Active Verified Inquiries</h3>
          <p style={{ fontSize: '14px', color: 'var(--color-muted)' }}>
            Inquiries with verified contact channels ready for matching brief evaluation.
          </p>

          {/*
            There are no live inquiries in this environment. The domain
            holds inquiries in memory, so a record only exists for the
            lifetime of one serverless invocation. The entry below is a
            worked example so the dispatch simulator has something to
            evaluate against — it is labelled as one, and it is not a
            buyer, not a live requirement and not an authorisation.
          */}
          <div
            style={{
              border: '1px dashed var(--color-border)',
              borderRadius: '4px',
              padding: '10px',
              marginTop: '10px',
              opacity: 0.92,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ opacity: 0.75 }}>inq_assamm_wood_01</strong>
              <span className="badge badge-locked">DEMONSTRATION RECORD</span>
            </div>
            <p style={{ margin: '4px 0', fontSize: '13px', opacity: 0.75 }}>
              <strong>Buyer:</strong> Fatima Al Mansoori · <strong>Destination:</strong> UAE
            </p>
            <p style={{ margin: '4px 0', fontSize: '13px', opacity: 0.75 }}>
              <strong>Item:</strong> 50 tolas Oud oil (Target: 350 AED/tola)
            </p>
            <p style={{ margin: '6px 0 0', fontSize: '12px', color: 'var(--color-muted)' }}>
              {isAr
                ? 'سجل توضيحي لأغراض اختبار سياسة الإصدار. لا يوجد طلب حقيقي مرتبط به، ولا يوجد مشترٍ فعلي خلف هذه البيانات.'
                : 'A worked example for exercising the release policy. No live inquiry is attached to it, and the buyer, destination and requirement above are illustrative rather than real.'}
            </p>
            <div style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
              <Link href={`/${locale}/inquiries/inq_assamm_wood_01`} className="btn-secondary" style={{ padding: '4px 10px', fontSize: '12px' }}>
                View Demonstration Record
              </Link>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Lead Policy Dispatch Simulator</h3>
          <p style={{ fontSize: '14px', color: 'var(--color-muted)' }}>
            Evaluate a release against <code>canRelease(ctx)</code>. The check runs
            the real policy and reports its real verdict — it does not grant anything.
          </p>
          <form method="POST" action="/api/v1/internal/releases/dispatch-form">
            <input type="hidden" name="locale" value={locale} />
            <div>
              <label htmlFor="inquiry_id">Inquiry ID</label>
              <input type="text" id="inquiry_id" name="inquiry_id" defaultValue="inq_assamm_wood_01" required />
            </div>
            <div style={{ marginTop: '8px' }}>
              <label htmlFor="target_business_id">Target Supplier</label>
              <select id="target_business_id" name="target_business_id">
                {businesses.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name} ({b.city})
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn-primary" style={{ marginTop: '14px', width: '100%', padding: '8px' }}>
              Execute Release Check (canRelease)
            </button>
          </form>
        </div>
      </div>

      <div className="section-box" style={{ marginTop: '28px' }}>
        <h3>Outbox Event Stream (og_private.outbox)</h3>
        <p style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
          Durable queue events for external notification dispatch (Email, WhatsApp, Webhooks).
        </p>

        {outbox.length > 0 ? (
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', marginTop: '12px' }}>
            <thead>
              <tr style={{ background: 'var(--bg-hero)', textAlign: 'left' }}>
                <th style={{ padding: '8px' }}>Event ID</th>
                <th style={{ padding: '8px' }}>Event Type</th>
                <th style={{ padding: '8px' }}>Target / Scope</th>
                <th style={{ padding: '8px' }}>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {outbox.map((evt) => (
                <tr key={evt.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '8px' }}><code>{evt.id}</code></td>
                  <td style={{ padding: '8px' }}><span className="badge badge-unlocked">{evt.event}</span></td>
                  <td style={{ padding: '8px' }}>
                    {evt.payload.destination || evt.payload.supplier_name || evt.payload.inquiry_id}
                  </td>
                  <td style={{ padding: '8px', color: 'var(--color-muted)' }}>
                    {new Date(evt.created_at).toLocaleTimeString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
            No outbox events queued currently. Submit an RFQ to see verification events.
          </p>
        )}
      </div>

      <div className="section-box" style={{ marginTop: '28px' }}>
        <h3>Captured Market Data (og_private.market_data)</h3>
        <p style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
          PII-free market signals captured at RFQ submission: stated target prices,
          quantity and density positions. Public surfaces may only show the
          k-anonymized aggregate (k=5); the raw list is operator-only.
        </p>

        <div style={{ marginTop: '12px', border: '1px solid var(--color-border)', borderRadius: '4px', padding: '10px' }}>
          <h4 style={{ margin: '0 0 6px', fontSize: '13px', color: 'var(--color-muted)' }}>
            Price bands per product family (k=5, public-safe)
          </h4>
          {priceBands.length > 0 ? (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: 'var(--bg-hero)', textAlign: 'left' }}>
                  <th style={{ padding: '6px' }}>Product family</th>
                  <th style={{ padding: '6px' }}>n</th>
                  <th style={{ padding: '6px' }}>Min</th>
                  <th style={{ padding: '6px' }}>Mean</th>
                  <th style={{ padding: '6px' }}>Max</th>
                  <th style={{ padding: '6px' }}>Unit</th>
                </tr>
              </thead>
              <tbody>
                {priceBands.map((b) => (
                  <tr key={b.product_family} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '6px' }}>{b.product_family}</td>
                    <td style={{ padding: '6px' }}>{b.n}</td>
                    <td style={{ padding: '6px' }}>{b.min_price}</td>
                    <td style={{ padding: '6px' }}>{b.mean_price}</td>
                    <td style={{ padding: '6px' }}>{b.max_price}</td>
                    <td style={{ padding: '6px' }}>{b.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
              No family yet has 5 or more captured target prices, so no band is shown.
              This is the correct answer, not an error.
            </p>
          )}
        </div>

        <div style={{ marginTop: '12px' }}>
          <h4 style={{ margin: '0 0 6px', fontSize: '13px', color: 'var(--color-muted)' }}>
            Raw points ({marketPoints.length})
          </h4>
          {marketPoints.length > 0 ? (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: 'var(--bg-hero)', textAlign: 'left' }}>
                  <th style={{ padding: '8px' }}>Point ID</th>
                  <th style={{ padding: '8px' }}>Product family</th>
                  <th style={{ padding: '8px' }}>Target price</th>
                  <th style={{ padding: '8px' }}>Quantity</th>
                  <th style={{ padding: '8px' }}>Density</th>
                  <th style={{ padding: '8px' }}>Samples</th>
                  <th style={{ padding: '8px' }}>Recorded</th>
                </tr>
              </thead>
              <tbody>
                {marketPoints.map((p) => (
                  <tr key={p.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '8px' }}><code>{p.id}</code></td>
                    <td style={{ padding: '8px' }}>{p.product_family}</td>
                    <td style={{ padding: '8px' }}>
                      {p.target_price !== undefined
                        ? `${p.target_price} ${p.price_unit ?? p.quantity_unit ?? ''}`.trim()
                        : '—'}
                    </td>
                    <td style={{ padding: '8px' }}>{p.quantity !== undefined ? `${p.quantity} ${p.quantity_unit ?? ''}`.trim() : '—'}</td>
                    <td style={{ padding: '8px' }}>{p.resin_density ?? '—'}</td>
                    <td style={{ padding: '8px' }}>{p.samples_requested ? 'Yes' : 'No'}</td>
                    <td style={{ padding: '8px', color: 'var(--color-muted)' }}>
                      {new Date(p.recorded_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
              No market data points captured this session. Submit an RFQ with a target
              price or density position to see one appear here.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
