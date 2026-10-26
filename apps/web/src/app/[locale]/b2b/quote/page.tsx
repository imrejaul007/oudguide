import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { businessSummaryBySlug } from '@/lib/data';
import { quickLeadCopy, portalCopy, pick } from '@/lib/copy/b2b-portal';
import { QuickLeadForm } from '@/components/b2b/quick-lead-form';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return buildMetadata({
    path: `/${locale}/b2b/quote`,
    title: isAr ? 'اطلب عرض سعر بالجملة' : 'Request a Wholesale Quote',
    description: isAr
      ? 'نموذج قصير: المادة، الكمية، الوجهة، وبيانات اتصالك. يستجيب موردون معتمدون بعروض الأسعار.'
      : 'A short form: material, quantity, destination and your contact details. Verified suppliers respond with pricing.',
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/b2b/quote`,
  });
}

export default async function B2bQuotePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    family?: string;
    supplier?: string;
    destination?: string;
    volume?: string;
    // Aliases the hero widget and storefront CTAs use.
    country?: string;
    profile?: string;
  }>;
}) {
  const { locale } = await params;
  const sp = await searchParams;
  const isAr = locale === 'ar';

  // Pre-fill from the query string so every CTA on the site lands here
  // with its context: a product page sends its family, the hero widget
  // sends family/destination/volume, a storefront sends the supplier.
  const initialFamily = sp.family || undefined;
  const initialDestination = sp.destination || sp.country || undefined;
  const supplierSlug = sp.supplier || sp.profile || undefined;
  const selectedSupplier = supplierSlug
    ? businessSummaryBySlug[supplierSlug]
    : undefined;

  void sp.volume; // The quick form has a free-text quantity field; the
  // hero widget's volume presets are not a 1:1 match and are dropped
  // here rather than forced into the quantity box.

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 720 }}>
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <span>{isAr ? 'طلب جملة سريع' : 'Quick wholesale request'}</span>
            </div>
            <h1>
              {pick(locale, quickLeadCopy.title)}
              <span className="accent">{isAr ? 'في دقيقة.' : 'in a minute.'}</span>
            </h1>
            <p className="hero-lead">{pick(locale, quickLeadCopy.subtitle)}</p>
          </div>
        </section>

        {selectedSupplier && (
          <div className="card-frame" style={{ marginBottom: 20, padding: 16 }}>
            <strong>{isAr ? 'هذا الطلب موجّه إلى' : 'This request is addressed to'}</strong>{' '}
            {selectedSupplier.displayTitle} · {selectedSupplier.locationLabel}
          </div>
        )}

        <div className="card-frame" style={{ padding: 24 }}>
          <QuickLeadForm
            locale={locale}
            isAr={isAr}
            initialFamily={initialFamily}
            initialDestination={initialDestination}
            initialSupplierSlug={selectedSupplier?.slug}
            source="quick-lead-form"
          />
        </div>

        <p className="discipline-note" style={{ marginTop: 20 }}>
          {isAr
            ? 'للنشرات والمواصفات الكاملة (تسعين سؤالاً شرطياً) استخدم '
            : 'For the full conditional specification (67 fields) use the '}
          <a href={`/${locale}/rfq`}>
            {isAr ? 'نموذج التوريد المفصّل' : 'detailed RFQ wizard'}
          </a>
          {isAr ? '.' : '.'}
        </p>
      </div>
    </div>
  );
}

void portalCopy;
