import Link from 'next/link';
import { domain } from '@/lib/data';
import { BusinessCard } from '@/components/business/business-card';
import { Search, MapPin, Filter, ShieldCheck, Lock, Compass } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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
    <div style={{ padding: '10px 0 60px' }}>
      {/* DIRECTORY HERO BANNER */}
      <div className="luxury-hero" style={{ padding: '52px 40px', marginBottom: '36px' }}>
        <div className="hero-tag">
          <Compass className="h-3.5 w-3.5 text-[#dfba55]" />
          <span>{isAr ? 'دليل المصانع والمزار�� المعتمدة دولياً' : 'Verified Distillers, Plantations & Wholesalers'}</span>
        </div>
        <h1 className="hero-headline font-display" style={{ fontSize: '38px', margin: '0 0 12px' }}>
          {isAr ? 'دليل الموردين والمقطرين العالميين' : 'The Global Directory of Natural Oud Producers'}
        </h1>
        <p className="hero-lead" style={{ fontSize: '16.5px', margin: 0, maxWidth: '820px' }}>
          {isAr
            ? 'اكتشف المقطرين الحرفيين والمزارع المستدامة في أسام، تايلاند، كمبوديا، وإندونيسيا. تطبق المنصة سياسة حجب الاتصال الصارمة للملفات الأساسية لمنع الرسائل غير المرغوبة والجمع الآلي للبيانات.'
            : 'Independent discovery of traditional distillers and certified plantations. Direct phone, email, and address records remain hidden on basic profiles to protect producers from automated scraping and spam.'}
        </p>
      </div>

      {/* SEARCH & MULTI-FACET FILTER BAR */}
      <div className="form-card" style={{ padding: '24px 28px', marginBottom: '32px' }}>
        <form method="GET" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <div style={{ flex: '2 1 260px' }}>
            <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Search className="h-4 w-4 text-[#8c6a15]" />
              <span>{isAr ? 'البحث بالاسم أو المدينة أو الصنف' : 'Search by name, city, or origin terroir'}</span>
            </label>
            <Input
              type="text"
              name="search"
              placeholder={isAr ? 'مثال: Al Mutalib, Assam, Trat, Koh Kong...' : 'e.g. Al Mutalib, Assam, Trat, Koh Kong...'}
              defaultValue={search || ''}
            />
          </div>

          <div style={{ flex: '1 1 180px' }}>
            <label className="form-label">{isAr ? 'الدور التجاري' : 'Commercial Role'}</label>
            <select name="role" className="form-select" defaultValue={role || ''}>
              <option value="">{isAr ? 'جميع الأدوار' : 'All Commercial Roles'}</option>
              <option value="distiller">{isAr ? 'مقطر / منتج' : 'Distiller / Producer'}</option>
              <option value="wholesaler">{isAr ? 'تاجر جملة' : 'Wholesaler'}</option>
              <option value="retailer">{isAr ? 'متجر تجزئة' : 'Retail Merchant'}</option>
            </select>
          </div>

          <div style={{ flex: '1 1 180px' }}>
            <label className="form-label">{isAr ? 'بلد التواجد' : 'Operating Territory'}</label>
            <select name="country" className="form-select" defaultValue={country || ''}>
              <option value="">{isAr ? 'جميع الدول' : 'All Territories'}</option>
              <option value="AE">United Arab Emirates (UAE)</option>
              <option value="IN">India (Assam & Bengal)</option>
              <option value="TH">Thailand (Trat & Prachin)</option>
              <option value="KH">Cambodia (Koh Kong & Pursat)</option>
              <option value="ID">Indonesia (Kalimantan & Papua)</option>
            </select>
          </div>

          <div style={{ flex: '0 0 auto' }}>
            <Button type="submit" variant="gold" className="h-10 px-6">
              <Filter className="h-4 w-4 mr-1.5" />
              <span>{isAr ? 'تصفية النتائج' : 'Filter'}</span>
            </Button>
          </div>
        </form>
      </div>

      {/* PRIVACY GATING EXPLANATION BANNER */}
      <div className="privacy-shield">
        <div className="privacy-shield-icon">
          <ShieldCheck className="h-6 w-6 text-[#c59b27]" />
        </div>
        <div className="privacy-shield-text">
          <strong>{isAr ? 'معيار حماية بيانات الاتصال (QA-007, QA-008):' : 'Public Contact Protection Protocol (QA-007, QA-008):'}</strong>{' '}
          {isAr
            ? 'تُعرض بيانات الاتصال المباشرة (البريد، الهاتف، الواتساب، العنوان الدقيق) حصراً للشركات التي وثقت ملكيتها واشتركت في العضوية التجارية السنوية. للملفات الأساسية، استخدم خدمة الربط المحايدة لطلب التسعير.'
            : 'Direct contact coordinates (phone numbers, email addresses, street locations) are published exclusively for businesses that have verified ownership and activated Annual Business Visibility. For basic research profiles, utilize our neutral wholesale matching engine to obtain quotations.'}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '28px 0 18px', flexWrap: 'wrap', gap: '10px' }}>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '15px', margin: 0 }}>
          {isAr
            ? `عرض ${businesses.length} شركة ومؤسسة موثقة في الدليل`
            : `Showing ${businesses.length} documented producer${businesses.length === 1 ? '' : 's'} in directory`}
        </p>
        <Link href={`/${locale}/for-businesses`}>
          <Button variant="outline" size="sm" className="text-xs">
            {isAr ? 'هل أنت صاحب معمل تقطير؟ وثق ملفك مجاناً' : 'Own a distillery? Claim your profile for free →'}
          </Button>
        </Link>
      </div>

      {/* SUPPLIER CARDS GRID WITH BUSINESS-CARD COMPONENT */}
      <div className="grid-3" style={{ gap: '24px' }}>
        {businesses.map((biz) => (
          <BusinessCard key={biz.id} business={biz} locale={locale} />
        ))}
      </div>
    </div>
  );
}
