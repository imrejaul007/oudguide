import Link from 'next/link';
import { Building2, MapPin, ShieldCheck, FileText, ArrowRight, Package, Truck, Stamp, FlaskConical, Globe } from 'lucide-react';
import { domain } from '@/lib/data';
import countries from '@/data/country_registry.json';
import { directoryRoleLabel } from '../../../../../packages/contracts/src/directory-roles.ts';
import { tradesFamily } from '../../../../../packages/contracts/src/directory-filters.ts';

/**
 * "Suppliers registered for this material" — the seller layer on a
 * product-family page.
 *
 * Everything on this panel comes from the register: a supplier's own
 * record, projected so that a contact field reaches the page only when
 * the owner is entitled to publish it. The panel states the recorded
 * facts and nothing else:
 *
 *   - roles: the controlled role slugs the record declares (wholesale,
 *     retail, grower, distiller ...), labelled in the reader's language.
 *   - pricing: no supplier price is published on this platform. The
 *     register carries none, and the panel says so instead of
 *     inventing one; a quote comes through the RFQ.
 *   - delivery: the markets the record is documented to ship to, and
 *     that terms are set per RFQ. An empty list is shown as empty.
 *
 * A family that no record declares is not hidden: the panel shows the
 * empty state and routes to the RFQ, which is how a buyer reaches a
 * supplier who is not yet in the register.
 */

/**
 * The record vocabulary for the families the register actually uses.
 *
 * A product-family page is the 24-route editorial set; the register
 * carries the shorter family display strings the suppliers themselves
 * declare. Only the pairs that name the same material are mapped, so a
 * record never shows on a page its fields do not cover. A family with
 * no entry here is shown with its empty state.
 */
const FAMILY_RECORD_VOCAB: Record<string, string> = {
  'oud-wood': 'Oud wood',
  'oud-oil': 'Oud oil',
  'perfume-oils': 'Perfume oil',
  'finished-perfumes': 'Finished perfume',
  bakhoor: 'Bakhoor/incense',
  incense: 'Bakhoor/incense',
};

const COUNTRY_NAMES: Record<string, { en: string; ar: string }> = Object.fromEntries(
  (countries as Array<{ iso2: string; english_seed: string; arabic_seed: string }>).map(
    (c) => [c.iso2, { en: c.english_seed, ar: c.arabic_seed }]
  )
);

function marketLabel(iso2: string, locale: string): string {
  const name = COUNTRY_NAMES[iso2];
  if (!name) return iso2;
  return locale === 'ar' ? name.ar : name.en;
}

export function MaterialSuppliers({
  locale,
  familySlug,
  familyName,
  familyNameAr,
}: {
  locale: string;
  /** The product-family page's own slug segment, e.g. 'oud-wood'. */
  familySlug: string;
  /** The family's display name, for the empty state. */
  familyName: string;
  familyNameAr: string;
}) {
  const isAr = locale === 'ar';
  const recordFamily = FAMILY_RECORD_VOCAB[familySlug];
  const published = domain.listBusinesses({ excludeDemo: true });
  const matchers = recordFamily ? [recordFamily] : [];
  const matching = matchers.flatMap((f) => published.filter((b) => tradesFamily(b, f)));
  // Two mapped names can cover one record (bakhoor and incense both map
  // to 'Bakhoor/incense'); de-duplicate by id.
  const suppliers = matching.filter((b, i) => matching.findIndex((x) => x.id === b.id) === i);
  const totalPublished = published.length;

  return (
    <section
      style={{
        marginTop: 40,
        border: '1px solid var(--line)',
        borderRadius: 6,
        background: 'var(--bg-pearl)',
        padding: '26px 28px',
      }}
      aria-label={isAr ? 'الموردون المسجَّلون لهذه المادة' : 'Suppliers registered for this material'}
    >
      <div className="row-between" style={{ gap: 12, marginBottom: 14, flexWrap: 'wrap' }}>
        <div>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 4 }}>
            {isAr ? 'سجل الموردين' : 'The supplier register'}
          </span>
          <h2 style={{ margin: 0, fontSize: '1.15rem', fontFamily: 'var(--font-display)' }}>
            {isAr
              ? `الموردون المسجَّلون لمادة ${familyNameAr}`
              : `Suppliers registered for ${familyName.toLowerCase()}`}
          </h2>
        </div>
        {suppliers.length > 0 ? (
          <span className="badge badge-locked">
            {suppliers.length} / {totalPublished} {isAr ? 'من المسجّلين' : 'of published records'}
          </span>
        ) : null}
      </div>

      <p className="text-body" style={{ margin: 0, fontSize: '0.88rem', color: 'var(--ink-muted)', lineHeight: 1.6 }}>
        {isAr
          ? 'ما يُعرض هنا هو سجلات الموردين أنفسهم في دليل العود: ما يصرّح به المورد وما تحقّقه مراجعة صاحبه. ولا تضع الصفحة أسعاراً ولا تعد بتوصيل، فالسجل لا يحمل رقم سعر، وشروط التوصيل تُحدَّد في كل طلب.'
          : 'The records below are the suppliers own register entries: what each supplier declares and which of those facts its owner has verified. The page states no price and promises no delivery, because the register carries no supplier price and shipping terms are set per requirement.'}
      </p>

      {suppliers.length === 0 ? (
        <div
          style={{
            marginTop: 16,
            border: '1px solid var(--line)',
            borderInlineStart: '2px solid var(--green-600)',
            borderRadius: 6,
            padding: '16px 20px',
            background: 'var(--bg-eggshell)',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.6 }}>
            {isAr ? (
              <>
                لا يصرّح مورد واحد في السجل بأن <strong>{familyNameAr}</strong> من أصنافه. ويمكن أن تصل إلى موردين لها عبر طلب التوريد المحايد: يصل الموجز المشفّر إلى الموردين المؤهلين دون هويتك، ولا تُسلَّم بياناتك إلا لمورد تعتمده بالاسم.
              </>
            ) : (
              <>
                No supplier in the register declares <strong>{familyName}</strong> as a family it trades. The neutral RFQ still reaches suppliers for it: a redacted brief goes to qualified suppliers without your identity, and your contact details are released only to a supplier you approve by name.
              </>
            )}
          </p>
          <div className="cluster" style={{ gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
            <Link
              href={`/${locale}/rfq`}
              className="btn btn-primary btn-sm"
              style={{ gap: 6 }}
            >
              <span>{isAr ? 'طلب عرض سعر لهذه المادة' : 'Request a quote for this material'}</span>
              <ArrowRight size={13} className="icon-dir-flip" />
            </Link>
            <Link
              href={`/${locale}/directory`}
              className="btn btn-outline btn-sm"
              style={{ gap: 6, background: '#ffffff' }}
            >
              <Globe size={13} />
              <span>{isAr ? 'تصفّح الدليل كاملاً' : 'Browse the full directory'}</span>
            </Link>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: 16, display: 'grid', gap: 14 }}>
          {suppliers.map((b) => {
            const roles = b.roles ?? [];
            const moqVerified = b.verified_fields?.includes('minimum_order_quantity') ?? false;
            const samplesVerified = b.verified_fields?.includes('sample_availability') ?? false;
            const deliveryVerified = b.verified_fields?.includes('serves_destinations') ?? false;
            const originsVerified = b.verified_fields?.includes('handles_origins') ?? false;
            const destinations = b.serves_destinations ?? [];

            return (
              <article
                key={b.id}
                style={{
                  border: '1px solid var(--line)',
                  borderRadius: 6,
                  background: '#ffffff',
                  padding: '18px 20px',
                }}
              >
                <div className="row-between" style={{ gap: 10, flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', minWidth: 0 }}>
                    <Building2 size={18} style={{ color: 'var(--green-700)', flexShrink: 0, marginTop: 3 }} />
                    <div style={{ minWidth: 0 }}>
                      <Link
                        href={`/${locale}/directory/${b.slug}`}
                        style={{ fontWeight: 600, color: 'var(--ink)', textDecoration: 'none' }}
                      >
                        {b.name}
                      </Link>
                      <div className="meta" style={{ display: 'flex', gap: 8, marginTop: 4, flexWrap: 'wrap', alignItems: 'center' }}>
                        {b.city || b.country_name ? (
                          <span style={{ display: 'inline-flex', gap: 4, alignItems: 'center' }}>
                            <MapPin size={11} />
                            {isAr
                              ? `${b.city ?? ''} ${b.city ? '، ' : ''}${b.country_name ?? marketLabel(b.country_id, locale)}`
                              : `${b.city ?? ''}${b.city ? ', ' : ''}${b.country_name ?? marketLabel(b.country_id, locale)}`}
                          </span>
                        ) : null}
                        {b.verification_state === 'owner_verified' ? (
                          <span
                            style={{
                              display: 'inline-flex', gap: 4, alignItems: 'center',
                              color: 'var(--green-700)', border: '1px solid var(--green-200, var(--line))',
                              borderRadius: 999, padding: '1px 8px', fontSize: '0.72rem',
                            }}
                          >
                            <ShieldCheck size={11} />
                            {isAr ? 'مؤكد من الصاحب' : 'Owner-verified'}
                          </span>
                        ) : (
                          <span
                            style={{
                              display: 'inline-flex', gap: 4, alignItems: 'center',
                              color: 'var(--ink-muted)', border: '1px solid var(--line)',
                              borderRadius: 999, padding: '1px 8px', fontSize: '0.72rem',
                            }}
                          >
                            <FileText size={11} />
                            {isAr ? 'سجل يصرّح به البائع' : 'Seller-declared record'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/${locale}/rfq?supplier=${encodeURIComponent(b.slug)}`}
                    className="btn btn-primary btn-sm"
                    style={{ gap: 6, whiteSpace: 'nowrap' }}
                  >
                    <span>{isAr ? 'عرض سعر' : 'Request a quote'}</span>
                    <ArrowRight size={12} className="icon-dir-flip" />
                  </Link>
                </div>

                {roles.length > 0 ? (
                  <div style={{ marginTop: 12, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {roles.map((r) => (
                      <span key={r} className="chip" style={{ fontSize: '0.75rem' }}>
                        {directoryRoleLabel(r, locale)}
                      </span>
                    ))}
                    <span
                      className="chip"
                      style={{ fontSize: '0.75rem', borderStyle: 'dashed', color: 'var(--ink-muted)' }}
                      title={isAr ? 'قناة منصة دليل العود المحايدة' : 'The OudGuide neutral matching channel'}
                    >
                      {isAr ? 'عبر مطابقة دليل العود' : 'via OudGuide matching'}
                    </span>
                  </div>
                ) : null}

                <dl
                  style={{
                    marginTop: 14,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: 10,
                    margin: '14px 0 0',
                  }}
                >
                  <div style={{ border: '1px solid var(--line)', borderRadius: 6, padding: '10px 12px', background: 'var(--bg-eggshell)' }}>
                    <dt style={{ display: 'flex', gap: 5, alignItems: 'center', fontSize: '0.7rem', color: 'var(--ink-muted)', marginBottom: 4 }}>
                      <Package size={11} />
                      {isAr ? 'حجم الحد الأدنى' : 'Minimum order'}
                    </dt>
                    <dd style={{ margin: 0, fontSize: '0.85rem' }}>
                      {moqVerified && b.minimum_order_quantity ? (
                        b.minimum_order_quantity
                      ) : (
                        <span style={{ color: 'var(--ink-muted)' }}>
                          {isAr ? 'غير موثَّق في السجل' : 'Not documented in the register'}
                        </span>
                      )}
                    </dd>
                  </div>

                  <div style={{ border: '1px solid var(--line)', borderRadius: 6, padding: '10px 12px', background: 'var(--bg-eggshell)' }}>
                    <dt style={{ display: 'flex', gap: 5, alignItems: 'center', fontSize: '0.7rem', color: 'var(--ink-muted)', marginBottom: 4 }}>
                      <FlaskConical size={11} />
                      {isAr ? 'العينات' : 'Samples'}
                    </dt>
                    <dd style={{ margin: 0, fontSize: '0.85rem' }}>
                      {samplesVerified ? (
                        b.sample_availability ? (
                          isAr ? 'متاحة' : 'Available'
                        ) : (
                          <span style={{ color: 'var(--ink-muted)' }}>{isAr ? 'غير متاحة' : 'Not available'}</span>
                        )
                      ) : (
                        <span style={{ color: 'var(--ink-muted)' }}>
                          {isAr ? 'غير موثَّقة في السجل' : 'Not documented in the register'}
                        </span>
                      )}
                    </dd>
                  </div>

                  <div style={{ border: '1px solid var(--line)', borderRadius: 6, padding: '10px 12px', background: 'var(--bg-eggshell)' }}>
                    <dt style={{ display: 'flex', gap: 5, alignItems: 'center', fontSize: '0.7rem', color: 'var(--ink-muted)', marginBottom: 4 }}>
                      <Truck size={11} />
                      {isAr ? 'التوصيل الموثَّق' : 'Documented delivery'}
                    </dt>
                    <dd style={{ margin: 0, fontSize: '0.85rem' }}>
                      {deliveryVerified && destinations.length > 0 ? (
                        <>
                          {destinations.map((d) => marketLabel(d, locale)).join('، ')}
                          <div style={{ fontSize: '0.72rem', color: 'var(--ink-muted)', marginTop: 3 }}>
                            {isAr
                              ? 'وجهات موثَّقة يبلّغ عنها السجل؛ وشروط الشحن تُحدَّد في الطلب'
                              : `${destinations.length} documented market${destinations.length === 1 ? '' : 's'}; shipping terms are set per RFQ`}
                          </div>
                        </>
                      ) : (
                        <span style={{ color: 'var(--ink-muted)' }}>
                          {isAr ? 'لا وجهات توصيل موثَّقة' : 'No documented delivery destinations'}
                        </span>
                      )}
                    </dd>
                  </div>

                  <div style={{ border: '1px solid var(--line)', borderRadius: 6, padding: '10px 12px', background: 'var(--bg-eggshell)' }}>
                    <dt style={{ display: 'flex', gap: 5, alignItems: 'center', fontSize: '0.7rem', color: 'var(--ink-muted)', marginBottom: 4 }}>
                      <Stamp size={11} />
                      {isAr ? 'السعر' : 'Pricing'}
                    </dt>
                    <dd style={{ margin: 0, fontSize: '0.85rem', color: 'var(--ink-muted)' }}>
                      {isAr
                        ? 'لا يُنشر سعرُ مورد على المنصة؛ يُقدَّم عرضُ السعر عبر الطلب'
                        : 'No supplier price is published on the platform; a quote comes through the RFQ'}
                    </dd>
                  </div>
                </dl>

                {b.website_url ? (
                  <div style={{ marginTop: 10 }}>
                    <a
                      href={b.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--green-700)' }}
                    >
                      {isAr ? 'موقع المورد المنشور' : 'The supplier published website'}: {b.website_url.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                ) : null}

                {originsVerified && (b.handles_origins ?? []).length > 0 ? (
                  <p style={{ margin: '10px 0 0', fontSize: '0.78rem', color: 'var(--ink-muted)' }}>
                    {isAr ? 'المنشآت المبلَّغة عنها:' : 'Documented origins handled:'}{' '}
                    {(b.handles_origins ?? []).join('، ')}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      )}

      <div className="cluster" style={{ gap: 8, marginTop: 18, flexWrap: 'wrap' }}>
        <Link
          href={`/${locale}/directory${recordFamily ? `?family=${encodeURIComponent(recordFamily)}` : ''}`}
          className="btn btn-outline btn-sm"
          style={{ gap: 6, background: '#ffffff' }}
        >
          <Package size={13} />
          <span>{isAr ? 'تصفّح الدليل لهذا الصنف' : 'Browse the directory for this material'}</span>
        </Link>
        <Link
          href={`/${locale}/rfq`}
          className="btn btn-primary btn-sm"
          style={{ gap: 6 }}
        >
          <span>{isAr ? 'طلب عرض سعر' : 'Start an RFQ'}</span>
          <ArrowRight size={13} className="icon-dir-flip" />
        </Link>
      </div>
    </section>
  );
}
