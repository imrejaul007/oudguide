import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, SITE_URL } from '@/lib/metadata';
import { jsonLdScript } from '@/lib/jsonld';
import { notFound } from 'next/navigation';
import { domain } from '@/lib/data';
import { MapPin, ShieldCheck, Lock, Award, ExternalLink, ArrowRight, CheckCircle2, Globe, Clock, Truck, FileCheck2 } from 'lucide-react';
import { BookmarkButton, ShareButton, ViewTracker } from '@/components/business/interactive-tools';
import { ReportButton } from '@/components/business/report-button';
import { ProfileFaq } from '@/components/business/profile-faq';

const producerCovers: Record<string, string> = {
  'al-mutalib-perfumes': '/images/hero-attar-still.svg',
  'assam-artisan-distillers': '/images/hero-oud-chip.svg',
  'siam-trat-agarwood-co': '/images/hero-dehn-al-oud.svg',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const isAr = locale === 'ar';

  const biz = domain.getBusinessBySlug(slug);
  if (!biz) {
    return { title: 'Producer not found · OudGuide' };
  }

  const locationLabel = (biz.city ? `${biz.city}, ` : '') + (biz.country_name || biz.country_id);
  const title = isAr
    ? `${biz.name} — ${locationLabel} | دليل العود`
    : `${biz.name} — ${biz.category || 'Oud Distiller & Wholesaler'} in ${locationLabel} | OudGuide`;
  const description =
    biz.description ||
    (isAr
      ? `الملف التجاري لـ ${biz.name}، المورد المعتمد للعود ودهن العود والمواد الطبيعية في ${locationLabel}.`
      : `Commercial profile and verified firmographics for ${biz.name}, listed supplier in ${locationLabel}.`);

  return buildMetadata({
    path: `/${locale}/directory/${slug}`,
    title,
    description,
    locale,
    type: 'article',
    alternateLocalePath: `/${isAr ? 'en' : 'ar'}/directory/${slug}`,
  });
}

export default async function BusinessProfilePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const isAr = locale === 'ar';

  const biz = domain.getBusinessBySlug(slug);
  if (!biz) {
    notFound();
  }

  const coverImage = producerCovers[slug] || '/images/hero-oud-chip.svg';
  const allBusinesses = domain.listBusinesses({ excludeDemo: true });
  const similar = allBusinesses.filter((b) => b.slug !== slug).slice(0, 4);

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 1080 }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              jsonLdScript(
                {
                  path: `/${locale}/directory/${slug}`,
                  title: biz.name,
                  description: biz.description ?? '',
                  business: {
                    name: biz.name,
                    description: biz.description,
                    url: biz.website_url,
                  },
                  breadcrumbs: [
                    { label: isAr ? 'الرئيسية' : 'Home', href: `/${locale}` },
                    { label: isAr ? 'الدليل' : 'Directory', href: `/${locale}/directory` },
                    { label: biz.name, href: `/${locale}/directory/${slug}` },
                  ],
                },
                SITE_URL
              ) ?? '',
          }}
        />
        <ViewTracker slug={slug} />
        {/* BREADCRUMB */}
        <nav className="cluster" style={{ justifyContent: 'space-between', marginBottom: 28 }}>
          <div style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
            <Link href={`/${locale}`}>{isAr ? 'الرئيسية' : 'Home'}</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <Link href={`/${locale}/directory`}>{isAr ? 'الدليل' : 'Directory'}</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: 'var(--color-text-main)', fontWeight: 600 }}>{biz.name}</span>
          </div>
          <div className="cluster">
            <BookmarkButton slug={slug} locale={locale} />
            <ShareButton title={`${biz.name} — OudGuide`} locale={locale} />
          </div>
        </nav>

        {/* MAJLIS HERO COVER */}
        <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: 32 }}>
          <div style={{ height: 320, position: 'relative', background: 'var(--green-900)' }}>
            <img src={coverImage} alt={biz.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(14,42,32,0.20) 0%, rgba(14,42,32,0.88) 100%)' }} />

            <div className="cluster" style={{ position: 'absolute', top: 18, left: 18, right: 18, justifyContent: 'space-between' }}>
              <span className="badge badge-glass-light">
                <MapPin size={12} />
                {biz.city ? `${biz.city}, ` : ''}{biz.country_name || biz.country_id}
              </span>
              {biz.contact_unlocked ? (
                <span className="badge badge-gold">
                  <Award size={12} />
                  {isAr ? 'عضو معتمد' : 'Verified Member'}
                </span>
              ) : (
                <span className="badge badge-glass">
                  <Lock size={12} />
                  {isAr ? 'ملف محمي' : 'Basic Record'}
                </span>
              )}
            </div>

            <div style={{ position: 'absolute', bottom: 24, left: 28, right: 28, color: 'var(--ink-on-green)' }}>
              <span className="badge badge-gold" style={{ marginBottom: 12 }}>
                {biz.business_type || biz.category || 'Producer'}
              </span>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: '-0.022em',
                margin: '4px 0 6px',
                color: '#ffffff',
              }}>
                {biz.name}
              </h1>
              <p style={{ fontSize: '0.95rem', color: 'rgba(232,239,233,0.72)', margin: 0, fontFamily: 'var(--font-sans)' }}>
                {biz.city ? `${biz.city}, ` : ''}{biz.country_name || biz.country_id}
                {biz.established_year &&
                  (biz.verified_fields ?? []).includes('established_year') && (
                    <> · {isAr ? 'تأسست' : 'Est.'} {biz.established_year}</>
                  )}
              </p>
            </div>
          </div>

          {/* Quick actions bar */}
          <div style={{ padding: '20px 28px', borderTop: '1px solid var(--line-strong)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div className="cluster" style={{ gap: 8 }}>
              {biz.is_claimed && (
                <span className="badge badge-emerald">
                  <CheckCircle2 size={12} />
                  {isAr ? 'ملكية موثقة' : 'Verified Claim'}
                </span>
              )}
              {biz.sample_availability &&
                (biz.verified_fields ?? []).includes('sample_availability') && (
                  <span className="badge badge-accent">
                    {isAr ? 'عينات متاحة' : 'Samples Available'}
                  </span>
                )}
              {biz.has_active_membership && (
                <span className="badge badge-charcoal">{isAr ? 'عضوية نشطة' : 'Active Membership'}</span>
              )}
            </div>
            <div className="cluster" style={{ gap: 8 }}>
              {biz.website_url && (
                <a href={biz.website_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                  <Globe size={14} />
                  {isAr ? 'الموقع الرسمي' : 'Official Website'}
                  <ExternalLink size={11} />
                </a>
              )}
              <Link href={`/${locale}/rfq?supplier=${slug}`} className="btn btn-primary btn-sm" style={{ gap: 6 }}>
                <span>{isAr ? 'طلب تسعير' : 'Request Quote'}</span>
                <ArrowRight size={13} className="icon-dir-flip" />
              </Link>
            </div>
          </div>
        </div>

        {/* EDITORIAL SPLIT — Description + Verification */}
        <div className="grid-2" style={{ gap: 32, marginBottom: 48, gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)' }}>
          <article className="card-frame" style={{ padding: 36 }}>
            <span className="eyebrow" style={{ marginBottom: 12, display: 'block' }}>
              {isAr ? 'نبذة عن الشركة' : 'About the Producer'}
            </span>
            <h2 className="h3" style={{ marginBottom: 16 }}>
              {biz.description || (isAr ? 'ملف قيد التوثيق من فريق OudGuide.' : 'Profile is currently being verified by OudGuide.')}
            </h2>
            <p className="lede" style={{ marginBottom: 16 }}>
              {isAr
                ? 'يملك بعض الموردين ملفاً موثقاً من المالك، وتُعرض الحقول التي لم تُتحقق بعد بوصفها معلومات يقدّمها المورد نفسه.'
                : 'Some producers have an owner-verified record. Any field without a verification record is shown as supplier-declared, not as a checked fact.'}
            </p>
            {biz.product_families && biz.product_families.length > 0 && (
              <div style={{ marginTop: 16 }}>
                <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>
                  {isAr ? 'الخطوط المنتجة' : 'Production Lines'}
                </span>
                <div className="cluster">
                  {biz.product_families.map((pf) => (
                    <span key={pf} className="chip">{pf}</span>
                  ))}
                </div>
              </div>
            )}
          </article>

          <aside>
            <div className="privacy-shield" style={{ flexDirection: 'column' }}>
              <ShieldCheck size={24} className="privacy-shield-icon" />
              <div className="privacy-shield-body">
                <h4>{isAr ? 'حماية بيانات الاتصال' : 'Contact Data Protection'}</h4>
                {biz.contact_unlocked ? (
                  <p>{isAr ? 'بيانات الاتصال الكاملة متاحة بعد موافقتك الصريحة برمز التحقق.' : 'Full contact details are available after your explicit OTP approval.'}</p>
                ) : (
                  <p>{isAr ? 'يخضع هذا الملف لسياسة الحجب التلقائي. لا يتم عرض أي بيانات اتصال.' : 'This profile is auto-redacted. No contact data is exposed.'}</p>
                )}
              </div>
            </div>

            {biz.handles_origins && biz.handles_origins.length > 0 && (
              <div className="card" style={{ padding: 24, marginTop: 20 }}>
                <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>
                  {isAr ? 'الأقاليم التي يتعامل معها' : 'Origins Handled'}
                </span>
                <p
                  className="meta"
                  style={{
                    margin: '0 0 10px',
                    textTransform: 'none',
                    letterSpacing: '0.02em',
                  }}
                >
                  {(biz.verified_fields ?? []).includes('handles_origins')
                    ? isAr
                      ? 'مصدرها سجل موثق.'
                      : 'Sourced from a verified record.'
                    : isAr
                      ? 'أقاليم يصرّح بها المورد ولا تعني منشأ إنتاج.'
                      : 'Declared by the supplier. This is not a statement of where the material was produced.'}
                </p>
                <div className="cluster">
                  {biz.handles_origins.map((o) => (
                    <span key={o} className="chip">{o}</span>
                  ))}
                </div>
              </div>
            )}

            {biz.serves_destinations && biz.serves_destinations.length > 0 && (
              <div className="card" style={{ padding: 24, marginTop: 20 }}>
                <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>
                  {isAr ? 'وجهات الشحن الموثقة' : 'Documented Destinations'}
                </span>
                <div className="cluster" style={{ gap: 8, alignItems: 'center', marginBottom: 10 }}>
                  <Truck size={14} style={{ color: 'var(--green-600)' }} />
                  <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--ink)' }}>
                    {biz.serves_destinations.length} {isAr ? 'وجهات تجارية' : 'destinations served'}
                  </span>
                </div>
                <div className="cluster">
                  {biz.serves_destinations.map((d) => (
                    <span key={d} className="chip" style={{ fontSize: '0.75rem' }}>{d}</span>
                  ))}
                </div>
              </div>
            )}

            {biz.verification_state && biz.verification_state !== 'unverified' && (
              <div className="card" style={{ padding: 20, marginTop: 20, background: 'var(--bg-sage)', borderColor: 'var(--green-200)' }}>
                <div className="cluster" style={{ gap: 8, marginBottom: 8 }}>
                  <FileCheck2 size={16} style={{ color: 'var(--green-700)' }} />
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--green-950)' }}>
                    {isAr ? 'سجل التحقق والتوثيق' : 'Verification Record'}
                  </span>
                </div>
                <p style={{ margin: '0 0 12px', fontSize: '0.82rem', color: 'var(--ink-muted)', lineHeight: 1.55 }}>
                  {isAr
                    ? 'اطلع على الأدلة وتواريخ الفحص والحقول المؤكدة مقابل المعلنة.'
                    : 'Inspect audit evidence, review dates, and verified vs declared attributes.'}
                </p>
                <Link
                  href={`/${locale}/directory/${slug}/verification`}
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%', justifyContent: 'center', background: '#ffffff', gap: 6 }}
                >
                  <span>{isAr ? 'عرض سجل التوثيق' : 'View Audit Record'}</span>
                  <ArrowRight size={13} className="icon-dir-flip" />
                </Link>
              </div>
            )}

            {biz.minimum_order_quantity &&
              (biz.verified_fields ?? []).includes('minimum_order_quantity') && (
                <div className="card" style={{ padding: 24, marginTop: 20 }}>
                  <span className="eyebrow" style={{ display: 'block', marginBottom: 8 }}>
                    {isAr ? 'الحد الأدنى للطلب' : 'Minimum Order'}
                  </span>
                  <span style={{ fontSize: '1.25rem', fontFamily: 'var(--font-display)', color: 'var(--green-700)', fontWeight: 500 }}>
                    {biz.minimum_order_quantity}
                  </span>
                </div>
              )}

            {/* Report a profile (editorial correction channel) */}
            <div
              style={{
                marginTop: 20,
                paddingTop: 16,
                borderTop: '1px solid var(--line)',
                textAlign: 'center',
              }}
            >
              <ReportButton slug={slug} producerName={biz.name} locale={locale} />
            </div>
          </aside>
        </div>

        {/* SOURCING FAQ */}
        <ProfileFaq
          locale={locale}
          items={[
            {
              question: isAr ? 'كيف أتحقق من مصداقية هذا المورد؟' : 'How do I verify this producer’s provenance?',
              answer: isAr
                ? 'تظهر مدخلات «الأقاليم التي يتعامل معها» بوصفها معلومات يقدّمها المورد ما لم يكن هناك سجل تحقق. الأصل الذي يقدّمه المورد يخبرك بما يقول المورد إنه يعمل معه، وهو ليس دليلاً على مكان نمو المادة أو تقطيرها.'
                : 'Entries under Origins Handled are supplier-declared unless the record carries a verification entry. A supplier-declared origin tells you what the business says it works with; it is not evidence of where the material was grown or distilled.',
            },
            {
              question: isAr ? 'لماذا لا تظهر بيانات الاتصال مباشرة؟' : 'Why are contact details not shown directly?',
              answer: isAr
                ? 'سياسة حماية البيانات في OudGuide تحجب أرقام الهواتف والبريد الإلكتروني وعناوين الشوارع في جميع الملفات الأساسية. تظهر البيانات الكاملة فقط لمورد عضو سنوي معتمد، وبعد موافقتك الصريحة عليه بالاسم والتحقق برمز التحقق.'
                : 'OudGuide’s contact-projection policy strips phone, email, and street address from every basic profile. Full contact details appear only for an annual member, and only after you explicitly approve them by name following verification by code.',
            },
            {
              question: isAr ? 'كيف أطلب عينة؟' : 'How do I request a sample?',
              answer: isAr
                ? 'أرسل طلب توريد عبر النموذج المحايد مع تفعيل خيار العينات. سيصل المورد الموثّق موجزاً فنياً مشفراً دون أي بيانات تعريفية عنك، وتتم الموافقة على الاتصال في ثلاث خطوات منفصلة.'
                : 'Submit a wholesale RFQ with the samples option enabled. The matched producer receives a redacted technical brief containing no buyer identifying data, and contact introduction requires three separate approvals.',
            },
            {
              question: isAr ? 'ما الحد الأدنى للطلب؟' : 'What is the minimum order quantity?',
              answer: biz.minimum_order_quantity
                ? isAr
                  ? `الحد الأدنى المعلن لهذا المورد هو ${biz.minimum_order_quantity}. يمكن تجاوزه في الطلبات الأولى التي تتضمن عينات فحوص مخبرية.`
                  : `The stated minimum for this producer is ${biz.minimum_order_quantity}. It can be waived on first orders that include laboratory sample testing.`
                : (isAr
                  ? 'يتم تحديد الحد الأدنى لكل مورد. يُنصح بطلب تسعير عبر نموذج طلب التوريد للحصول على المتطلبات الدقيقة.'
                  : 'Minimum order quantities are set per producer. Request a quote through the RFQ form for exact requirements.'),
            },
          ]}
        />

        {/* SIMILAR VERIFIED DISTILLERS */}
        {similar.length > 0 && (
          <section style={{ marginTop: 48 }}>
            <div className="row-between" style={{ marginBottom: 24 }}>
              <div>
                <span className="eyebrow" style={{ display: 'block', marginBottom: 8 }}>{isAr ? 'موردون آخرون' : 'Other Producers'}</span>
                <h2 className="h2">
                  {isAr ? 'موردون ومصانع أخرى في الدليل' : 'Other Verified Distillers in Registry'}
                </h2>
              </div>
              <Link href={`/${locale}/directory`} className="btn btn-outline btn-sm">
                <span>{isAr ? 'كل الدليل' : 'Full Directory'}</span>
                <ArrowRight size={13} className="icon-dir-flip" />
              </Link>
            </div>
            <div className="grid-2" style={{ gap: 18 }}>
              {similar.map((s) => (
                <Link
                  key={s.id}
                  href={`/${locale}/directory/${s.slug}`}
                  className="card"
                  style={{ textDecoration: 'none', padding: 22, display: 'block' }}
                >
                  <div className="row-between" style={{ gap: 10, marginBottom: 4 }}>
                    <h4 className="biz-name" style={{ margin: 0 }}>{s.name}</h4>
                    <ArrowRight size={14} style={{ color: 'var(--green-600)', flexShrink: 0, marginTop: 4 }} />
                  </div>
                  <div className="biz-location" style={{ marginBottom: 8 }}>
                    <MapPin size={11} />
                    {s.city ? `${s.city}, ` : ''}{s.country_name || s.country_id}
                  </div>
                  <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: 1.55, color: 'var(--ink-muted)' }}>
                    {s.description?.slice(0, 110)}
                    {s.description && s.description.length > 110 ? '…' : ''}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}