import { buildMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import { seed } from '@/lib/data';
import { Crown, ShieldCheck, Award, Eye, ExternalLink, CheckCircle2 } from 'lucide-react';

export default async function MembershipCheckoutPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ success?: string }>;
}) {
  const { locale } = await params;
  const { success } = await searchParams;
  const isAr = locale === 'ar';

  const businesses = seed.businesses;

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 1080 }}>
        {/* HERO */}
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <Crown size={13} />
              <span>{isAr ? 'تفعيل العضوية التجارية السنوية' : 'Annual Commercial Membership'}</span>
            </div>
            <h1>
              {isAr ? 'ترقية الملف التجاري' : 'Unlock Direct Commercial Contact Display'}
              <span className="accent">{isAr ? '1,200 درهم/سنة.' : 'AED 1,200 per year.'}</span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'تتيح العضوية السنوية عرض البريد الإلكتروني الرسمي، أرقام الهواتف، والواتساب التجاري مباشرة على ملف شركتك لجميع المشترين الدوليين.'
                : 'Subscribed membership activates direct telephone, WhatsApp, official email, and physical facility coordinates on your directory profile.'}
            </p>
          </div>
        </section>

        {success && (
          <div className="privacy-shield" style={{ marginTop: 32, borderLeftColor: 'var(--color-emerald)', background: 'linear-gradient(135deg, #f0faf5, #e3f2ea)' }}>
            <CheckCircle2 size={28} className="privacy-shield-icon" style={{ color: 'var(--color-emerald)' }} />
            <div className="privacy-shield-body">
              <h4 style={{ color: 'var(--color-emerald)' }}>
                {isAr ? 'تم تفعيل العضوية السنوية بنجاح!' : 'Annual Membership Activated!'}
              </h4>
              <p>
                {isAr
                  ? `تم ترقية ملف المنشأة (${success}) إلى حالة "عضو سنوي معتمد".`
                  : `Your business profile (${success}) has been upgraded to Subscribed Member status.`}
              </p>
              <Link href={`/${locale}/directory`} className="btn btn-outline btn-sm" style={{ marginTop: 8 }}>
                {isAr ? 'مشاهدة الملف في الدليل ←' : 'View Profile in Directory →'}
              </Link>
            </div>
          </div>
        )}

        <div className="grid-2" style={{ marginTop: 56, gap: 32 }}>
          {/* INVOICE */}
          <div className="card-frame" style={{ padding: 36 }}>
            <span className="eyebrow eyebrow-crimson" style={{ display: 'block', marginBottom: 12 }}>{isAr ? 'فاتورة' : 'Order Summary'}</span>
            <h2 className="h3" style={{ marginBottom: 24 }}>{isAr ? 'ملخص الفاتورة السنوية' : 'Annual Commercial Order'}</h2>

            <div className="stack-4" style={{ borderTop: '1px solid var(--color-border)', paddingTop: 18 }}>
              <div className="row-between">
                <span>{isAr ? 'العضوية التجارية السنوية' : 'Annual Business Visibility'}</span>
                <strong>1,200 AED</strong>
              </div>
              <div className="row-between">
                <span>{isAr ? 'المدة الزمنية' : 'Billing Term'}</span>
                <span>{isAr ? '12 شهراً' : '12 months'}</span>
              </div>
              <div className="row-between">
                <span>{isAr ? 'ضريبة القيمة المضافة (0%)' : 'VAT (0%)'}</span>
                <span>0.00 AED</span>
              </div>
              <div className="row-between" style={{ borderTop: '1px solid var(--color-gold)', paddingTop: 16, marginTop: 8 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-crimson)' }}>
                  {isAr ? 'المجموع الإجمالي' : 'Total Payable'}
                </span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-crimson)' }}>
                  1,200 AED
                </span>
              </div>
            </div>

            <div className="privacy-shield" style={{ marginTop: 24 }}>
              <ShieldCheck size={24} className="privacy-shield-icon" />
              <div className="privacy-shield-body">
                <h4>{isAr ? 'تجديد تلقائي وإلغاء في أي وقت' : 'Auto-Renewal & Cancel Anytime'}</h4>
                <p>{isAr ? 'يمكنك إلغاء العضوية في أي وقت دون رسوم إضافية.' : 'Cancel anytime without penalty.'}</p>
              </div>
            </div>

            <button type="button" className="btn btn-gold btn-lg" style={{ width: '100%', marginTop: 20 }}>
              <Award size={16} />
              {isAr ? 'تفعيل العضوية الآن ←' : 'Activate Membership Now →'}
            </button>
          </div>

          {/* BENEFITS */}
          <div>
            <h2 className="h3 text-crimson" style={{ marginBottom: 24 }}>
              {isAr ? 'المزايا المتضمنة' : 'Included Benefits'}
            </h2>
            <div className="stack-4">
              {[
                { icon: Eye, title: isAr ? 'عرض بيانات الاتصال المباشر' : 'Direct Contact Display', desc: isAr ? 'البريد، الهاتف، الواتساب، والعنوان الفعلي مكشوفة لجميع المشترين.' : 'Email, phone, WhatsApp, and physical address visible to all buyers.' },
                { icon: ShieldCheck, title: isAr ? 'حماية كاملة من البريد المزعج' : 'Spam-Protected Inquiries', desc: isAr ? 'كل طلب يخضع لبوابة OTP قبل مشاركة بياناتك.' : 'Every inquiry gated by OTP verification before sharing your details.' },
                { icon: Award, title: isAr ? 'شارة "عضو سنوي معتمد"' : 'Verified Member Badge', desc: isAr ? 'شارة مميزة تعزز الثقة وتميز ملفك في الدليل.' : 'Distinctive badge builds trust and elevates your profile.' },
                { icon: ExternalLink, title: isAr ? 'إمكانية إضافة روابط مباشرة' : 'Direct Link Integration', desc: isAr ? 'روابط موقعك الرسمي وحساباتك على منصات التواصل.' : 'Official website and social media channel links.' },
              ].map((b, i) => (
                <div key={i} className="card" style={{ padding: 24 }}>
                  <div className="cluster" style={{ alignItems: 'flex-start', gap: 14 }}>
                    <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 10, background: 'linear-gradient(135deg, var(--color-gold-light), var(--color-gold-dark))', color: 'var(--bg-majlis)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <b.icon size={20} />
                    </div>
                    <div>
                      <h3 className="step-tile-title" style={{ marginBottom: 4 }}>{b.title}</h3>
                      <p className="step-tile-desc" style={{ margin: 0 }}>{b.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return buildMetadata({
    path: `/${locale}/membership`,
    title: isAr ? "العضوية السنوية — انشر ملف شركتك" : "Annual Membership — Publish Your Business Profile",
    description: isAr ? "افتح إظهار بيانات الاتصال على ملفك في دليل OudGuide، واوصل بالمشترين المؤسسيين، وكن ضمن طلبات التوريد المؤهلة." : "Unlock direct contact display on your OudGuide producer profile, reach institutional buyers, and be matched to verified wholesale inquiries across 249 territories.",
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/membership`,
  });
}

