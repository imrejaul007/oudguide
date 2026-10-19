import Link from 'next/link';
import { domain } from '@/lib/data';
import { BusinessCard } from '@/components/business/business-card';
import { Compass, Filter, MapPin, ShieldCheck } from 'lucide-react';

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

  const businesses = domain.listBusinesses({
    country_id: country,
    role: role,
    search: search,
  });

  return (
    <div className="section">
      {/* MASTHEAD */}
      <div className="container">
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
            <div className="privacy-shield">
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
      </div>

      {/* RESULTS GRID */}
      <div className="container" style={{ marginTop: 56 }}>
        <div className="row-between" style={{ marginBottom: 28 }}>
          <div className="cluster">
            <span className="badge badge-gold">
              <Filter size={11} />
              {businesses.length} {isAr ? 'مورد' : 'Producers'}
            </span>
            {search && (
              <span className="badge badge-locked">{isAr ? `بحث: ${search}` : `Search: ${search}`}</span>
            )}
            {country && (
              <span className="badge badge-locked">
                <MapPin size={11} />
                {country}
              </span>
            )}
          </div>
          <Link href={`/${locale}/world`} className="btn btn-outline btn-sm">
            {isAr ? '← خريطة الأقاليم' : '← Origins Map'}
          </Link>
        </div>

        {businesses.length === 0 ? (
          <div className="card-frame text-center" style={{ padding: 56 }}>
            <h3 className="h3">{isAr ? 'لا توجد نتائج' : 'No matching producers'}</h3>
            <p className="lede" style={{ marginBottom: 24 }}>
              {isAr
                ? 'جرب توسيع معايير البحث أو استكشف الدليل الكامل.'
                : 'Try widening your search criteria or browse the full directory.'}
            </p>
            <Link href={`/${locale}/directory`} className="btn btn-gold">
              {isAr ? 'إعادة تعيين البحث' : 'Reset Search'}
            </Link>
          </div>
        ) : (
          <div className="grid-3">
            {businesses.map((biz) => (
              <BusinessCard key={biz.id} business={biz} locale={locale} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}