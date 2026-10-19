import Link from 'next/link';
import { notFound } from 'next/navigation';
import { domain } from '@/lib/data';
import { MapPin, ShieldCheck, Lock, Award, ExternalLink, ArrowRight, CheckCircle2, Globe } from 'lucide-react';
import { BookmarkButton, ShareButton } from '@/components/business/interactive-tools';

const producerCovers: Record<string, string> = {
  'al-mutalib-perfumes': '/images/hero-attar-still.svg',
  'assam-artisan-distillers': '/images/hero-oud-chip.svg',
  'siam-trat-agarwood-co': '/images/hero-dehn-al-oud.svg',
};

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
  const allBusinesses = domain.listBusinesses();
  const similar = allBusinesses.filter((b) => b.slug !== slug).slice(0, 4);

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 1080 }}>
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
          <div style={{ height: 320, position: 'relative', background: 'var(--bg-majlis)' }}>
            <img src={coverImage} alt={biz.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(13,10,8,0.85) 100%)' }} />

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

            <div style={{ position: 'absolute', bottom: 24, left: 28, right: 28, color: '#f5ede0' }}>
              <span className="badge badge-gold" style={{ marginBottom: 12 }}>
                {biz.business_type || biz.category || 'Producer'}
              </span>
              <h1 className="hero-title" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: '4px 0 6px', color: '#f5e1a4' }}>
                {biz.name}
              </h1>
              <p className="display-serif" style={{ fontSize: '1.05rem', color: '#d4c8b0', margin: 0, fontStyle: 'italic' }}>
                {biz.city ? `${biz.city}, ` : ''}{biz.country_name || biz.country_id}
                {biz.established_year && <> · {isAr ? 'تأسست' : 'Est.'} {biz.established_year}</>}
              </p>
            </div>
          </div>

          {/* Quick actions bar */}
          <div style={{ padding: '20px 28px', borderTop: '1px solid var(--color-border-warm)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div className="cluster" style={{ gap: 8 }}>
              {biz.is_claimed && (
                <span className="badge badge-emerald">
                  <CheckCircle2 size={12} />
                  {isAr ? 'ملكية موثقة' : 'Verified Claim'}
                </span>
              )}
              {biz.sample_availability && (
                <span className="badge badge-crimson">{isAr ? 'عينات متاحة' : 'Samples Available'}</span>
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
              <Link href={`/${locale}/rfq?supplier=${slug}`} className="btn btn-gold btn-sm">
                {isAr ? 'طلب تسعير ←' : 'Request Quote →'}
              </Link>
            </div>
          </div>
        </div>

        {/* EDITORIAL SPLIT — Description + Verification */}
        <div className="grid-2" style={{ gap: 32, marginBottom: 48, gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)' }}>
          <article className="card-frame" style={{ padding: 36 }}>
            <span className="eyebrow eyebrow-crimson" style={{ marginBottom: 12, display: 'block' }}>
              {isAr ? 'نبذة عن الشركة' : 'About the Producer'}
            </span>
            <h2 className="h3" style={{ marginBottom: 16 }}>
              {biz.description || (isAr ? 'ملف قيد التوثيق من فريق OudGuide.' : 'Profile is currently being verified by OudGuide.')}
            </h2>
            <p className="lede" style={{ marginBottom: 16 }}>
              {isAr
                ? 'يتم توثيق كل مورد عبر زيارات ميدانية ومقابلات ومراجعة وثائق المنشأ من الإدارات الحرجية الوطنية في بلد المنشأ.'
                : 'Every producer is documented through field visits, distiller interviews, and origin document cross-checks against national forestry registries.'}
            </p>
            {biz.product_families && biz.product_families.length > 0 && (
              <div style={{ marginTop: 16 }}>
                <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>
                  {isAr ? 'الخطوط المنتجة' : 'Production Lines'}
                </span>
                <div className="cluster">
                  {biz.product_families.map((pf) => (
                    <span key={pf} className="chip chip-gold">{pf}</span>
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
                  <p>{isAr ? 'بيانات الاتصال الكاملة متاحة بعد موافقتك الصريحة عبر OTP.' : 'Full contact details are available after your explicit OTP approval.'}</p>
                ) : (
                  <p>{isAr ? 'يخضع هذا الملف لسياسة الحجب التلقائي. لا يتم عرض أي بيانات اتصال.' : 'This profile is auto-redacted. No contact data is exposed.'}</p>
                )}
              </div>
            </div>

            {biz.verified_origins && biz.verified_origins.length > 0 && (
              <div className="card" style={{ padding: 24, marginTop: 20 }}>
                <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>
                  {isAr ? 'الأقاليم الموثقة' : 'Verified Terroirs'}
                </span>
                <div className="cluster">
                  {biz.verified_origins.map((o) => (
                    <span key={o} className="chip">{o}</span>
                  ))}
                </div>
              </div>
            )}

            {biz.minimum_order_quantity && (
              <div className="card" style={{ padding: 24, marginTop: 20 }}>
                <span className="eyebrow" style={{ display: 'block', marginBottom: 8 }}>
                  {isAr ? 'الحد الأدنى للطلب' : 'Minimum Order'}
                </span>
                <span className="display-serif" style={{ fontSize: '1.3rem', color: 'var(--color-crimson)', fontStyle: 'italic', fontWeight: 600 }}>
                  {biz.minimum_order_quantity}
                </span>
              </div>
            )}
          </aside>
        </div>

        {/* SIMILAR VERIFIED DISTILLERS */}
        {similar.length > 0 && (
          <section style={{ marginTop: 48 }}>
            <div className="row-between" style={{ marginBottom: 24 }}>
              <div>
                <span className="eyebrow" style={{ display: 'block', marginBottom: 8 }}>{isAr ? 'موردون آخرون' : 'Other Producers'}</span>
                <h2 className="h2 text-crimson">
                  {isAr ? 'موردون ومصانع أخرى في الدليل' : 'Other Verified Distillers in Registry'}
                </h2>
              </div>
              <Link href={`/${locale}/directory`} className="btn btn-outline btn-sm">
                {isAr ? 'كل الدليل ←' : 'Full Directory →'}
              </Link>
            </div>
            <div className="grid-2">
              {similar.map((s) => (
                <Link key={s.id} href={`/${locale}/directory/${s.slug}`} className="biz-card" style={{ textDecoration: 'none' }}>
                  <div className="biz-cover" style={{ height: 140 }}>
                    <img src={producerCovers[s.slug] || '/images/hero-oud-chip.svg'} alt={s.name} />
                  </div>
                  <div className="biz-body" style={{ padding: 20 }}>
                    <h4 className="biz-name">{s.name}</h4>
                    <p className="biz-location">
                      <MapPin size={11} />
                      {s.city ? `${s.city}, ` : ''}{s.country_name || s.country_id}
                    </p>
                    <p className="biz-desc" style={{ marginBottom: 0 }}>
                      {s.description?.slice(0, 100)}…
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}