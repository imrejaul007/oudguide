import Link from 'next/link';
import { notFound } from 'next/navigation';
import { domain } from '@/lib/data';
import { MapPin, ShieldCheck, Lock, Award, ExternalLink, ArrowRight, CheckCircle2, Bookmark, Share2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookmarkButton, ShareButton } from '@/components/business/interactive-tools';

// Preset luxury cover photography for distillers and estates
const producerCovers: Record<string, string> = {
  'al-mutalib-perfumes': '/images/hero-dehn-al-oud.svg',
  'assam-artisan-distillers': '/images/hero-attar-still.svg',
  'siam-trat-agarwood-co': '/images/hero-oud-wood.svg',
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

  const coverImage = producerCovers[slug] || '/images/hero-oud-wood.svg';

  // Find similar producers in directory
  const allBusinesses = domain.listBusinesses();
  const similar = allBusinesses.filter((b) => b.slug !== slug);

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '10px 0 60px' }}>
      {/* BREADCRUMB */}
      <nav style={{ margin: '20px 0 16px', fontSize: '13.5px', color: 'var(--color-text-muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <Link href={`/${locale}`}>Home</Link>
          {' > '}
          <Link href={`/${locale}/directory`}>{isAr ? 'دليل الشركات' : 'Directory'}</Link>
          {' > '}
          <span>{biz.name}</span>
        </div>

        {/* Interactive Tools: Save & Share */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <BookmarkButton slug={slug} label={isAr ? 'حفظ في القائمة' : 'Save Supplier'} />
          <ShareButton title={`${biz.name} — OudGuide`} />
        </div>
      </nav>

      {/* LUXURY ENTITY HERO HEADER WITH COVER IMAGE */}
      <div className="relative rounded-2xl overflow-hidden border border-[#e6dfd1] mb-8 bg-[#120e0c] shadow-lg">
        {/* Cover Background */}
        <div className="h-64 sm:h-80 w-full relative">
          <img
            src={coverImage}
            alt={biz.name}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        {/* Floating Content Over Cover */}
        <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
          <div className="flex gap-2 mb-3 flex-wrap items-center">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#dfba55] text-xs font-bold border border-[#c59b27]/40">
              <MapPin className="h-3.5 w-3.5" />
              {biz.city ? `${biz.city}, ` : ''}{biz.country_name || biz.country_id}
            </span>
            {biz.is_claimed && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-950/80 text-rose-200 text-xs font-semibold border border-red-500/30">
                <CheckCircle2 className="h-3.5 w-3.5 text-rose-400" />
                {isAr ? 'ملكية موثقة' : 'Verified Claim'}
              </span>
            )}
            {biz.contact_unlocked ? (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold shadow-md">
                <Award className="h-3.5 w-3.5 fill-white" />
                {isAr ? 'عضوية تجارية سنوية' : 'Subscribed Member'}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#c9c5bc] text-xs font-semibold border border-white/20">
                <Lock className="h-3.5 w-3.5" />
                {isAr ? 'ملف أساسي محمي' : 'Basic Protected Record'}
              </span>
            )}
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-md">
            {biz.name}
          </h1>
          <p className="text-sm sm:text-base text-[#dedbd2] max-w-2xl mb-4 font-medium">
            {biz.category || biz.business_type}
            {biz.established_year ? ` · Est. ${biz.established_year}` : ''}
          </p>

          <div className="flex gap-3 flex-wrap">
            <Link href={`/${locale}/rfq?profile=${encodeURIComponent(slug)}`}>
              <Button variant="gold" size="default">
                <span>{isAr ? 'طلب تسعير بالجملة من هذه الشركة' : 'Request Wholesale Quotation'}</span>
                <span>{isAr ? '←' : '→'}</span>
              </Button>
            </Link>
            {!biz.is_claimed && (
              <Link href={`/${locale}/for-businesses`}>
                <Button variant="outline" size="default" className="bg-black/40 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:text-white">
                  {isAr ? 'هل أنت صاحب هذا العمل؟ وثق ملفك' : 'Claim This Business Profile'}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* STRICT CONTACT GATING SECTION */}
      {biz.contact_unlocked ? (
        <div className="form-card bg-[#f6fbf8] border-[#c8e6d5] mb-8 p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-3">
            <ShieldCheck className="h-6 w-6 text-[#1b4d3e]" />
            <h3 className="font-serif text-xl font-bold text-[#1b4d3e] m-0">
              {isAr ? 'بيانات الاتصال المباشرة المعتمدة' : 'Verified Commercial Contact Coordinates'}
            </h3>
          </div>
          <p className="text-sm text-[#385e49] mb-5">
            {isAr
              ? 'هذه المنشأة مشتركة في العضوية السنوية لدليل العود وبياناتها متاحة للاتصال المباشر لجميع المشترين.'
              : 'This organization holds an active Annual Business Visibility membership with public commercial contact display authorized.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p className="m-0">📧 <strong>Official Email:</strong> <a href={`mailto:${biz.email}`} className="underline text-[#1b4d3e]">{biz.email}</a></p>
              {biz.phone && <p className="m-0">📞 <strong>Direct Phone:</strong> {biz.phone}</p>}
              {biz.whatsapp && <p className="m-0">💬 <strong>WhatsApp:</strong> <a href={`https://wa.me/${biz.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener" className="underline">{biz.whatsapp} ↗</a></p>}
            </div>
            <div className="space-y-2">
              {biz.street_address && <p className="m-0">🏢 <strong>Physical Address:</strong> {biz.street_address}</p>}
              {biz.website_url && <p className="m-0">🌐 <strong>Website:</strong> <a href={biz.website_url} target="_blank" rel="noopener" className="underline text-[#1b4d3e]">{biz.website_url} ↗</a></p>}
            </div>
          </div>
        </div>
      ) : (
        <div className="privacy-shield mb-8">
          <div className="privacy-shield-icon">
            <Lock className="h-6 w-6 text-[#8c6a15]" />
          </div>
          <div className="privacy-shield-text">
            <h4 className="font-serif text-lg font-bold text-[#856404] m-0 mb-1.5">
              {isAr ? 'ملف بحثي أساسي — بيانات الاتصال محجوبة تلقائياً' : 'Basic Directory Record — Contacts Protected by Default'}
            </h4>
            <p className="text-sm m-0 mb-3.5 leading-relaxed">
              {isAr
                ? 'تم توثيق هذا الملف من السجلات العامة لقطاع العود. لمنع الرسائل غير المرغوبة وحماية نزاهة المعاملات، لا تظهر أرقام الهواتف أو البريد المباشر. استخدم خدمة الربط المحايدة لطلب التسعير.'
                : 'This profile is an objective industry reference entry. To prevent automated harvesting and protect producers, direct phone numbers, email addresses, and street locations remain hidden on basic profiles. You can obtain authentic pricing and samples via OudGuide neutral wholesale matching.'}
            </p>
            <div className="flex gap-2.5 flex-wrap">
              <Link href={`/${locale}/rfq?profile=${encodeURIComponent(slug)}`}>
                <Button variant="crimson" size="sm">
                  {isAr ? 'طلب تسعير عبر خدمة الربط المحايدة' : 'Request Quote via Neutral Matching'}
                </Button>
              </Link>
              {!biz.is_claimed && (
                <Link href={`/${locale}/for-businesses`}>
                  <Button variant="outline" size="sm">
                    {isAr ? 'هل أنت صاحب العمل؟ وثق ملفك الآن' : 'Are you the owner? Claim this profile →'}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* OVERVIEW & CATALOG */}
      <div className="luxury-card mb-8">
        <h3 className="card-title font-serif text-2xl border-b border-[#e6dfd1] pb-3 mb-4">
          {isAr ? 'عن المنشأة والقدرات الإنتاجية' : 'Distillery Profile & Commercial Scope'}
        </h3>
        <p className="text-base leading-relaxed text-[#3a3834] m-0">
          {biz.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="luxury-card">
          <h3 className="card-title font-serif text-xl mb-3 flex items-center gap-2">
            🪵 {isAr ? 'أصناف العود والمنتجات المعتمدة' : 'Verified Product Catalog'}
          </h3>
          <ul className="space-y-2 text-sm text-[#444] pl-5">
            {(biz.product_families || ['Oud wood', 'Oud oil', 'Perfume oil']).map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="luxury-card">
          <h3 className="card-title font-serif text-xl mb-3 flex items-center gap-2">
            🗺️ {isAr ? 'مناطق التوريد وغابات الاستخراج' : 'Documented Terroirs & Habitats'}
          </h3>
          <ul className="space-y-2 text-sm text-[#444] pl-5">
            {(biz.verified_origins || ['Natural forest & plantation']).map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="luxury-card mb-10">
        <h3 className="card-title font-serif text-xl mb-3 flex items-center gap-2">
          📦 {isAr ? 'سياسة العينات والحد الأدنى للطلب' : 'Sampling Protocol & Commercial Policy'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#333]">
          <div>
            <strong>{isAr ? 'إمكانية توفير عينات فحص:' : 'Sample Availability:'}</strong>{' '}
            {biz.sample_availability ? (isAr ? 'نعم، متاحة للطلبات المؤهلة' : 'Available for qualified commercial inquiries') : (isAr ? 'غير محدد' : 'Not specified')}
          </div>
          <div>
            <strong>{isAr ? 'الحد الأدنى للطلب (MOQ):' : 'Minimum Order Quantity (MOQ):'}</strong>{' '}
            {biz.minimum_order_quantity || (isAr ? 'يحدد بناءً على نوع الصنف' : 'Determined upon quotation')}
          </div>
        </div>
      </div>

      {/* SIMILAR VERIFIED PRODUCERS (INDEXORBIT FEATURE) */}
      {similar.length > 0 && (
        <div className="mb-12">
          <h3 className="font-serif text-2xl font-bold text-[#5c161d] mb-4">
            {isAr ? 'موردون ومصانع تقطير أخرى في الدليل' : 'Other Verified Distillers in Registry'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {similar.map((s) => (
              <div key={s.id} className="luxury-card p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-base m-0 text-[#14161d]">
                    <Link href={`/${locale}/directory/${s.slug}`} className="hover:text-[#5c161d]">
                      {s.name}
                    </Link>
                  </h4>
                  <p className="text-xs text-[#68645c] m-0 mt-0.5">
                    📍 {s.city}, {s.country_name} · <strong>{s.category}</strong>
                  </p>
                </div>
                <Link href={`/${locale}/directory/${s.slug}`}>
                  <Button variant="outline" size="sm" className="text-xs">
                    View
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-center py-6">
        <Link href={`/${locale}/rfq?profile=${encodeURIComponent(slug)}`}>
          <Button variant="gold" size="lg" className="px-10 text-base">
            <span>{isAr ? 'تقديم طلب توريد بالجملة من هذه الشركة' : 'Submit Wholesale Requirement for this Supplier'}</span>
            <span>{isAr ? '←' : '→'}</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
