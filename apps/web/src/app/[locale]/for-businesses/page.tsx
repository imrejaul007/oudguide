import Link from 'next/link';
import { Building2, Crown, Check, ArrowRight } from 'lucide-react';

export default async function ForBusinessesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  const freeFeatures = [
    isAr ? 'شارة جهة موثقة (Claimed Badge)' : 'Verified Claim Badge on Profile',
    isAr ? 'تحديث البيانات الفنية والأصناف' : 'Update catalog & origin specs',
    isAr ? 'المشاركة في فرص التوريد المحايدة' : 'Participate in neutral RFQ matching',
    isAr ? 'حماية بيانات الاتصال من الاستخراج الآلي' : 'Contacts protected from scrapers',
  ];

  const memberFeatures = [
    isAr ? 'إتاحة بيانات الاتصال المباشرة للمشترين' : 'Direct Contact Display Unlocked (Email, Phone, WhatsApp)',
    isAr ? 'شارة عضوية سنوية ذهبية موثقة' : 'Gold Subscribed Member Badge',
    isAr ? 'أولوية الظهور في نتائج الدليل والبحث' : 'Featured directory placement in regional hubs',
    isAr ? 'ترشيح ذو أولوية في طلبات التوريد' : 'Priority matching in RFQ candidate pools',
  ];

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 1100 }}>
        {/* HERO */}
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <Building2 size={13} />
              <span>{isAr ? 'منظومة المنتجين والمقطرين' : 'Distiller & Producer Commercial System'}</span>
            </div>
            <h1>
              {isAr
                ? 'خدمات دليل العود لشركات التقطير'
                : 'Grow Your Wholesale Reach with Institutional Perfumers'}
              <span className="accent">
                {isAr
                  ? 'توثيق مجاني أو عضوية ذهبية سنوية.'
                  : 'Free ownership claim or annual gold membership.'}
              </span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'احصل على ظهور تجاري دولي وتواصل مع المشترين ومصممي العطور في الخليج وأوروبا. اختر بين توثيق ملفك الأساسي مجاناً أو تفعيل العضوية السنوية لإتاحة بيانات الاتصال.'
                : 'Establish international provenance, receive qualified buyer match briefs, and publish verified laboratory testing.'}
            </p>
          </div>
        </section>

        <div className="grid-2" style={{ marginTop: 56, gap: 28 }}>
          {/* FREE TIER */}
          <article className="card-frame" style={{ padding: 36, background: 'var(--bg-pearl)' }}>
            <div className="cluster" style={{ justifyContent: 'space-between', marginBottom: 14 }}>
              <span className="badge badge-locked">{isAr ? 'مجاني مدى الحياة' : 'Standard Tier'}</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>0 AED</span>
            </div>
            <h2 className="h2 text-crimson" style={{ marginBottom: 12, fontSize: '1.7rem' }}>
              {isAr ? 'توثيق الملكية' : 'Verified Ownership Claim'}
            </h2>
            <p className="lede" style={{ marginBottom: 24 }}>
              {isAr
                ? 'وثق ملكيتك لملف معملك أو شركتك في دليل العود. حدث بيانات الوصف والمنتجات ومناطق الاستخراج المعتمدة.'
                : 'Claim your existing directory profile, verify business credentials, and update your catalog specifications and verified origin declarations.'}
            </p>

            <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>
              {isAr ? 'المزايا المشمولة' : 'Included Features'}
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="stack-3">
              {freeFeatures.map((f, i) => (
                <li key={i} className="cluster" style={{ alignItems: 'flex-start', gap: 10 }}>
                  <Check size={16} style={{ color: 'var(--color-emerald)', flexShrink: 0, marginTop: 4 }} />
                  <span style={{ fontSize: '0.95rem', color: 'var(--color-text-main)' }}>{f}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 32 }}>
              <Link href={`/${locale}/directory`} className="btn btn-outline" style={{ width: '100%' }}>
                {isAr ? 'البحث عن ملف شركتك لتوثيقه ←' : 'Find Your Profile to Claim →'}
              </Link>
            </div>
          </article>

          {/* MEMBERSHIP TIER */}
          <article className="card-frame" style={{ padding: 36, background: 'linear-gradient(135deg, #fffaf0 0%, #fcf3df 100%)', borderColor: 'var(--color-gold)' }}>
            <div className="cluster" style={{ justifyContent: 'space-between', marginBottom: 14 }}>
              <span className="badge badge-gold">
                <Crown size={11} />
                {isAr ? 'العضوية الذهبية' : 'Commercial Priority'}
              </span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', color: 'var(--color-gold-dark)' }}>
                ANNUAL PLAN
              </span>
            </div>
            <h2 className="h2 text-crimson" style={{ marginBottom: 6, fontSize: '1.7rem' }}>
              {isAr ? 'العضوية التجارية السنوية' : 'Annual Business Visibility'}
            </h2>
            <div className="cluster" style={{ marginBottom: 18, gap: 8 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 800, color: 'var(--color-crimson)', lineHeight: 1 }}>
                1,200
              </span>
              <span style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
                AED
                <span style={{ display: 'block', fontSize: '0.78rem' }}>
                  {isAr ? 'سنوياً' : '/ year (≈ 100 AED/mo)'}
                </span>
              </span>
            </div>

            <p className="lede" style={{ marginBottom: 24 }}>
              {isAr
                ? 'أتح للمشترين التواصل معك مباشرة عبر البريد والهاتف والواتساب والموقع الرسمي مع أولوية الظهور.'
                : 'Unlock full direct contact display and receive priority placement in international wholesale buyer matching pools.'}
            </p>

            <span className="eyebrow" style={{ display: 'block', marginBottom: 12 }}>
              {isAr ? 'كل مزايا التوثيق بالإضافة إلى' : 'All Standard Features Plus'}
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="stack-3">
              {memberFeatures.map((f, i) => (
                <li key={i} className="cluster" style={{ alignItems: 'flex-start', gap: 10 }}>
                  <Crown size={14} style={{ color: 'var(--color-gold-dark)', flexShrink: 0, marginTop: 4 }} />
                  <span style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', fontWeight: i === 0 ? 700 : 400 }}>{f}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 32 }}>
              <Link href={`/${locale}/membership`} className="btn btn-gold btn-lg" style={{ width: '100%' }}>
                {isAr ? 'الاشتراك وتفعيل العضوية السنوية' : 'Subscribe & Unlock Contacts'}
                <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}