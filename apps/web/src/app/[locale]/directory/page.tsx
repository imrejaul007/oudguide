import Link from 'next/link';
import { domain } from '@/lib/data';
import { DirectoryBrowser } from '@/components/business/directory-browser';
import { Compass, ShieldCheck, Map as MapIcon, Sparkles } from 'lucide-react';

export default async function DirectoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ country?: string; role?: string; search?: string }>;
}) {
  const { locale } = await params;
  const { country, role, search } = await searchParams;
  const isAr = locale === 'ar';

  const businesses = domain.listBusinesses();

  return (
    <div className="section">
      <div className="container">
        {/* MASTHEAD */}
        <section className="hero" style={{ padding: 'clamp(48px, 6vw, 80px) clamp(24px, 4vw, 56px)' }}>
          <div className="hero-content" style={{ textAlign: 'left', maxWidth: 920, margin: 0 }}>
            <div className="hero-tag">
              <Compass size={13} />
              <span>{isAr ? 'دليل المصانع والمزارع المعتمدة دولياً' : 'Verified Distillers, Plantations & Wholesalers'}</span>
            </div>
            <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
              {isAr ? 'دليل الموردين والمقطرين العالميين' : 'The Global Directory of Natural Oud Producers'}
              <span className="accent">
                {isAr
                  ? 'اكتشف الحرفيين المعتمدين في 4 أقاليم رئيسية.'
                  : 'Independent discovery across four major producing regions.'}
              </span>
            </h1>
            <p className="hero-lead" style={{ marginLeft: 0, textAlign: 'left' }}>
              {isAr
                ? 'اكتشف المقطرين الحرفيين والمزارع المستدامة في أسام، تايلاند، كمبوديا، وإندونيسيا. تطبق المنصة سياسة حجب الاتصال الصارمة للملفات الأساسية لمنع الرسائل غير المرغوبة والجمع الآلي للبيانات.'
                : 'Independent discovery of traditional distillers and certified plantations. Direct phone, email, and address records remain hidden on basic profiles to protect producers from automated scraping and spam.'}
            </p>

            <div className="cluster" style={{ marginTop: 24, gap: 10 }}>
              <Link href={`/${locale}/directory/map`} className="btn btn-gold btn-sm">
                <MapIcon size={14} />
                {isAr ? 'خريطة المنتجين' : 'Producer Map'}
              </Link>
              <Link href={`/${locale}/sourcing`} className="btn btn-outline btn-sm">
                <Sparkles size={14} />
                {isAr ? 'مساعد التوريد' : 'Sourcing Assistant'}
              </Link>
            </div>

            <div className="privacy-shield" style={{ marginTop: 28 }}>
              <ShieldCheck size={24} className="privacy-shield-icon" />
              <div className="privacy-shield-body">
                <h4>{isAr ? 'سياسة حجب الاتصال التلقائية' : 'Automatic Contact Redaction Policy'}</h4>
                <p>
                  {isAr
                    ? 'لا يظهر أي رقم هاتف أو بريد إلكتروني أو عنوان فعلي في الملفات الأساسية. فقط الأعضاء السنويون المعتمدون (1,200 درهم/سنة) يفتحون بيانات الاتصال الكاملة بعد التحقق بـ OTP.'
                    : 'No phone, email, or street address is exposed on basic profiles. Only verified annual members (AED 1,200/yr) unlock full contact details after OTP verification and explicit buyer approval.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <div style={{ marginTop: 56 }}>
          <DirectoryBrowser
            businesses={businesses as any}
            locale={locale}
            isAr={isAr}
            initialSearch={search ?? ''}
            initialCountry={country ?? ''}
          />
        </div>
      </div>
    </div>
  );
}