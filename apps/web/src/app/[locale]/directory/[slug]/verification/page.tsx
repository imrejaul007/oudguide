import Link from 'next/link';
import { notFound } from 'next/navigation';
import { businessRecordBySlug, domain } from '@/lib/data';
import { resolvePublishedPath } from '@/lib/route-resolver';
import { buildMetadata } from '@/lib/metadata';
import { ShieldCheck, MapPin, Globe, Lock, ArrowLeft, FileCheck2 } from 'lucide-react';
import type { Metadata } from 'next';

/**
 * The verification record for a business profile.
 *
 * The audit found profiles presenting "Verified Terroirs", "Samples
 * Available" and a founding year with no record of where any of it came
 * from. This page is that record: it states what was checked, by what
 * evidence, on what date, and — just as importantly — what was not checked.
 *
 * It renders only for a profile that has a verification record. A record
 * with no verification gets no page, because a page titled "verification"
 * with nothing behind it is exactly the badge-without-evidence problem
 * this route exists to solve. A development fixture has no public
 * verification page at all.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const isAr = locale === 'ar';
  const raw = businessRecordBySlug(slug);
  const name = raw?.name ?? 'Business';

  /**
   * The sibling-locale rule is the profile's: the registry has no
   * per-locale records, so a slug that answers here answers there too.
   * A record without a verifiable page would 404 in both trees anyway,
   * and a 404's metadata is not served.
   */
  return buildMetadata({
    path: `/${locale}/directory/${slug}/verification`,
    title: isAr ? `سجل توثيق ${name} · دليل العود` : `${name} — Verification Record · OudGuide`,
    description: isAr
      ? `ما تحقّق منه دليل العود فعلاً لـ ${name}: الدليل، التاريخ، والحقول التي تبقى معلنة من البائع.`
      : `What OudGuide has checked for ${name}: the evidence, the date, and which fields remain supplier-declared. The verification record for this profile.`,
    locale,
    type: 'article',
    alternateLocalePath: `/${isAr ? 'en' : 'ar'}/directory/${slug}/verification`,
  });
}

export default async function BusinessVerificationPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const isAr = locale === 'ar';

  const raw = domain.getRawBusinessBySlug(slug);

  if (!raw || raw.demo) {
    notFound();
  }

  const verification = raw.verification;
  if (!verification || verification.state === 'unverified') {
    notFound();
  }

  const profileHref = resolvePublishedPath(`/${locale}/directory/${slug}`, locale);
  const verifiedFields = verification.fields ?? [];
  const isVerified = (field: string) => verifiedFields.includes(field);

  const facts: {
    key: string;
    label: string;
    labelAr: string;
    value: string | null;
  }[] = [
    {
      key: 'established_year',
      label: 'Year established',
      labelAr: 'سنة التأسيس',
      value: raw.established_year ? String(raw.established_year) : null,
    },
    {
      key: 'minimum_order_quantity',
      label: 'Minimum order',
      labelAr: 'الحد الأدنى للطلب',
      value: raw.minimum_order_quantity ?? null,
    },
    {
      key: 'sample_availability',
      label: 'Samples available',
      labelAr: 'العينات متاحة',
      value: raw.sample_availability ? 'Yes' : 'No',
    },
    {
      key: 'handles_origins',
      label: 'Origins handled',
      labelAr: 'الأقاليم التي يتعامل معها',
      value: (raw.handles_origins ?? []).join(', ') || null,
    },
    {
      key: 'serves_destinations',
      label: 'Documented destinations',
      labelAr: 'الوجهات الموثقة',
      value: (raw.serves_destinations ?? []).join(', ') || null,
    },
    {
      key: 'product_families',
      label: 'Product families',
      labelAr: 'أصناف المنتجات',
      value: (raw.product_families ?? []).join(', ') || null,
    },
  ];

  return (
    <div className="section">
      <div className="container container-narrow">
        {/* BREADCRUMB */}
        <nav className="meta" style={{ marginBottom: 28, textTransform: 'none', letterSpacing: '0.02em' }}>
          <Link href={`/${locale}/directory`}>{isAr ? 'الدليل' : 'Directory'}</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href={profileHref ?? `/${locale}/directory/${slug}`}>{raw.name}</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: 'var(--color-text-main)', fontWeight: 600 }}>
            {isAr ? 'سجل التوثيق' : 'Verification record'}
          </span>
        </nav>

        <header style={{ marginBottom: 32 }}>
          <span className="eyebrow eyebrow-crimson" style={{ display: 'block', marginBottom: 12 }}>
            {isAr ? 'سجل التحقق' : 'Verification record'}
          </span>
          <h1 className="h2" style={{ marginBottom: 12 }}>
            {raw.name}
          </h1>
          <p className="lede">
            {isAr
              ? 'يسجّل هذا الصفحة ما تحقّق منه دليل العود فعلاً، وما لم يتحقق منه بعد. الحقول غير الموثقة تظل معلومات يقدّمها المورد.'
              : 'This page records what OudGuide has actually checked for this business, and what it has not. A field without a verification entry below is supplier-declared.'}
          </p>
        </header>

        {/* VERIFICATION STATE */}
        <div className="card" style={{ padding: 28, marginBottom: 28 }}>
          <div className="cluster" style={{ gap: 10, marginBottom: 16 }}>
            <ShieldCheck size={20} style={{ color: 'var(--green-700)' }} />
            <h2 className="h3" style={{ margin: 0 }}>
              {verification.state === 'owner_verified'
                ? isAr
                  ? 'ملكية موثقة'
                  : 'Owner verified'
                : isAr
                  ? 'معلن من البائع'
                  : 'Seller declared'}
            </h2>
          </div>
          {verification.evidence && (
            <p className="text-body" style={{ marginBottom: 8 }}>
              <strong>{isAr ? 'الدليل:' : 'Evidence:'}</strong> {verification.evidence}
            </p>
          )}
          {verification.checked_on && (
            <p className="text-body" style={{ margin: 0 }}>
              <strong>{isAr ? 'تاريخ الفحص:' : 'Checked on:'}</strong>{' '}
              <time dateTime={verification.checked_on}>{verification.checked_on}</time>
            </p>
          )}
        </div>

        {/* FIELD BY FIELD */}
        <div className="card" style={{ padding: 28, marginBottom: 28 }}>
          <h2 className="h3" style={{ marginBottom: 6 }}>
            {isAr ? 'حالة كل معلومة' : 'The state of each published fact'}
          </h2>
          <p className="text-body" style={{ marginBottom: 20, color: 'var(--color-text-muted)' }}>
            {isAr
              ? 'كل معلومة إمّا موثقة بدليل مسجَّل، أو معلنة من البائع.'
              : 'Each fact is either backed by a recorded document, or it is the seller’s own statement and is labelled as such.'}
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <th style={{ textAlign: 'start', padding: '8px 0' }}>{isAr ? 'المعلومة' : 'Fact'}</th>
                <th style={{ textAlign: 'start', padding: '8px 0' }}>{isAr ? 'القيمة' : 'Value'}</th>
                <th style={{ textAlign: 'start', padding: '8px 0' }}>{isAr ? 'الحالة' : 'State'}</th>
              </tr>
            </thead>
            <tbody>
              {facts.map((fact) => (
                <tr key={fact.key} style={{ borderBottom: '1px solid var(--line)' }}>
                  <td style={{ padding: '10px 0' }}>{isAr ? fact.labelAr : fact.label}</td>
                  <td style={{ padding: '10px 0' }}>
                    {fact.value ?? (
                      <span style={{ color: 'var(--color-text-muted)' }}>—</span>
                    )}
                  </td>
                  <td style={{ padding: '10px 0' }}>
                    {isVerified(fact.key) ? (
                      <span className="badge badge-emerald">
                        <FileCheck2 size={11} />
                        {isAr ? 'موثق' : 'Documented'}
                      </span>
                    ) : (
                      <span className="badge badge-locked">
                        <Lock size={11} />
                        {isAr ? 'معلن من البائع' : 'Seller declared'}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* THE THREE FACTS */}
        <div className="card" style={{ padding: 28, marginBottom: 28 }}>
          <h2 className="h3" style={{ marginBottom: 6 }}>
            {isAr ? 'ثلاثة أمور منفصلة' : 'Three separate things'}
          </h2>
          <p className="text-body" style={{ marginBottom: 18, color: 'var(--color-text-muted)' }}>
            {isAr
              ? 'موقع المنشأة، ومنشأ المادة التي يتعامل معها، والوجهات التي يوثّق الشحن إليها — كل منها معلومة مستقلة.'
              : 'Where the business is located, the origin of the material it handles, and the destinations it ships to are three independent facts. Conflating them is how a Dubai reseller comes to be described as a Cambodian producer.'}
          </p>
          <ul style={{ paddingInlineStart: '20px', margin: 0, fontSize: '0.92rem', lineHeight: 1.75 }}>
            <li>
              <strong>{isAr ? 'الموقع' : 'Location'}:</strong>{' '}
              <MapPin size={12} style={{ display: 'inline', verticalAlign: 'middle' }} />{' '}
              {[raw.city, raw.region, raw.country_name ?? raw.country_id]
                .filter(Boolean)
                .join(', ')}
            </li>
            <li>
              <strong>{isAr ? 'الأقاليم التي يتعامل معها' : 'Origins handled'}:</strong>{' '}
              {(raw.handles_origins ?? []).join(', ') || (isAr ? 'غير مذكورة' : 'not stated')}
            </li>
            <li>
              <strong>{isAr ? 'الوجهات الموثقة' : 'Documented destinations'}:</strong>{' '}
              <Globe size={12} style={{ display: 'inline', verticalAlign: 'middle' }} />{' '}
              {(raw.serves_destinations ?? []).join(', ') || (isAr ? 'غير مذكورة' : 'not stated')}
            </li>
            {(raw.facilities ?? []).length > 0 && (
              <li>
                <strong>{isAr ? 'المنشآت' : 'Facilities'}:</strong>{' '}
                {raw.facilities!.map((f) => (
                  <span key={`${f.country_id}-${f.type}`} style={{ marginInlineEnd: 12 }}>
                    {f.city ? `${f.city}, ` : ''}
                    {f.country_id} — {f.type}
                    {f.documented
                      ? ` (${isAr ? 'موثق' : 'documented'})`
                      : ` (${isAr ? 'معلن من البائع' : 'seller declared'})`}
                  </span>
                ))}
              </li>
            )}
          </ul>
        </div>

        <Link
          href={profileHref ?? `/${locale}/directory/${slug}`}
          className="btn btn-outline"
        >
          <ArrowLeft size={14} />
          {isAr ? '← العودة إلى الملف' : '← Back to the profile'}
        </Link>
      </div>
    </div>
  );
}
