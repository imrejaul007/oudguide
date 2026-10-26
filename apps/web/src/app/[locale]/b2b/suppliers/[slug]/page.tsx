import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Building2,
  ArrowRight,
  ShieldCheck,
  PackageOpen,
  Quote,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import { domain, businessSummaryBySlug } from '@/lib/data';
import { portalCopy, pick } from '@/lib/copy/b2b-portal';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const isAr = locale === 'ar';
  const summary = businessSummaryBySlug[slug];
  return buildMetadata({
    path: `/${locale}/b2b/suppliers/${slug}`,
    title: summary
      ? isAr
        ? `${summary.displayTitle} — متجر جملة`
        : `${summary.displayTitle} — Wholesale Storefront`
      : isAr
        ? 'متجر جملة'
        : 'Wholesale Storefront',
    description: isAr
      ? 'متجر جملة لمورد معتمد في دليل العود.'
      : 'Wholesale storefront for a verified supplier in the OudGuide directory.',
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/b2b/suppliers/${slug}`,
    noindex: !summary?.publishable,
  });
}

export default async function B2bSupplierStorefrontPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const isAr = locale === 'ar';

  // A quarantined fixture must 404 rather than render: the directory
  // resolver's rule, applied to the storefront.
  const summary = businessSummaryBySlug[slug];
  if (!summary || !summary.publishable) {
    notFound();
  }

  // The raw record is what carries the storefront's facts.
  const raw = domain.getRawBusinessBySlug(slug);
  if (!raw) {
    notFound();
  }

  const listings = await domain.listPublishedListings({ business_id: raw.id });
  // The "Request a quote" CTA is offered only to a supplier that holds an
  // active membership — the same entitlement that lets the operator assign
  // them a lead. Read from the raw record, which is the authority; the
  // summary projection is a display label and does not carry it.
  const contactUnlocked = Boolean(raw.has_active_membership);

  const location = [raw.city, raw.country_name].filter(Boolean).join(', ');

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 980 }}>
        <Link
          href={`/${locale}/b2b/suppliers`}
          className="supplier-back-link"
          style={{ display: 'inline-flex', gap: 6, alignItems: 'center', color: 'var(--ink-muted)', marginBottom: 16, fontSize: '0.9rem' }}
        >
          <ArrowRight size={12} style={{ transform: 'scaleX(-1)' }} />
          {isAr ? 'كل الموردين' : 'All suppliers'}
        </Link>

        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <Building2 size={12} />
              <span>{isAr ? 'متجر جملة' : 'Wholesale storefront'}</span>
            </div>
            <h1>
              {summary.displayTitle}
              {summary.verificationState === 'owner_verified' ? (
                <span className="badge badge-emerald" style={{ marginLeft: 12, verticalAlign: 'middle' }}>
                  <ShieldCheck size={12} />
                  {isAr ? 'مورّد موثّق من المالك' : 'owner-verified supplier'}
                </span>
              ) : null}
            </h1>
            <p className="hero-lead">
              {raw.description ||
                (isAr
                  ? 'مورد في دليل العود.'
                  : 'A supplier in the OudGuide directory.')}
            </p>

            <div className="masthead-actions">
              {location ? (
                <span className="badge">
                  <MapPin size={12} />
                  {location}
                </span>
              ) : null}
              {raw.established_year ? (
                <span className="badge">{isAr ? `تأسس ${raw.established_year}` : `Est. ${raw.established_year}`}</span>
              ) : null}
              {raw.minimum_order_quantity ? (
                <span className="badge">{isAr ? 'حد أدنى' : 'MOQ'}: {raw.minimum_order_quantity}</span>
              ) : null}
              {raw.sample_availability ? (
                <span className="badge badge-emerald">
                  <PackageOpen size={12} />
                  {isAr ? 'عينات متوفرة' : 'samples available'}
                </span>
              ) : null}
            </div>
          </div>
        </section>

        {/* Facts, gated on the verification record the way the directory does. */}
        <div className="card-frame supplier-facts" style={{ padding: 20, marginTop: 24 }}>
          <h4 style={{ margin: '0 0 12px' }}>{isAr ? 'المواد والأسواق' : 'Materials & markets'}</h4>
          <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            <div>
              <p className="discipline-note">{isAr ? 'المواد' : 'Families'}</p>
              {(raw.product_families ?? []).map((f) => (
                <span key={f} className="filter-chip" style={{ cursor: 'default', display: 'inline-block', marginRight: 6 }}>
                  {f}
                </span>
              ))}
            </div>
            {(raw.serves_destinations?.length ?? 0) > 0 ? (
              <div>
                <p className="discipline-note">{isAr ? 'يشحن إلى' : 'Ships to'}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {raw.serves_destinations!.map((code) => (
                    <Link
                      key={code}
                      href={`/${locale}/world/${code.toUpperCase()}`}
                      className="filter-chip"
                    >
                      {code.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Contact. Only what the entitlement has released. */}
        <div className="card-frame supplier-contact" style={{ padding: 20, marginTop: 16 }}>
          <h4 style={{ margin: '0 0 12px' }}>
            {isAr ? 'الاتصال' : 'Contact'}
          </h4>
          {contactUnlocked ? (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 6 }}>
              {raw.website_url ? (
                <li>
                  <a href={raw.website_url} target="_blank" rel="noopener noreferrer">
                    {raw.website_url.replace(/^https?:\/\//, '')}
                  </a>
                </li>
              ) : null}
              {raw.email ? <li style={{ direction: 'ltr', textAlign: isAr ? 'right' : 'left' }}>{raw.email}</li> : null}
              {raw.phone ? <li style={{ direction: 'ltr', textAlign: isAr ? 'right' : 'left' }}>{raw.phone}</li> : null}
            </ul>
          ) : (
            <p className="discipline-body">
              <CheckCircle2 size={14} style={{ verticalAlign: '-2px', color: 'var(--green-700)' }} />{' '}
              {isAr
                ? 'تبقى تفاصيل الاتصال حصرية للأعضاء المسجّلين. اطلب عرض سعر وسيصلك المورد نفسه.'
                : 'Contact details are reserved for enrolled members. Request a quote and this supplier will reach you directly.'}
            </p>
          )}
        </div>

        {/* The supplier's own published listings. */}
        <section style={{ marginTop: 28 }}>
          <h2 style={{ fontSize: '1.3rem', margin: '0 0 14px' }}>
            {isAr ? 'الإدراجات المنشورة' : 'Published listings'}{' '}
            <span className="accent">{listings.length}</span>
          </h2>

          {listings.length === 0 ? (
            <div className="card-frame" style={{ padding: 24, textAlign: 'center' }}>
              <p className="discipline-body" style={{ margin: 0 }}>
                {isAr
                  ? 'لا إدراجات منشورة بعد. اطلب عرض سعر وسيورد المورد قائمة منتجاته وأسعارها.'
                  : 'No published listings yet. Request a quote and the supplier will provide their catalogue and pricing.'}
              </p>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: 14, gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
              {listings.map((listing) => (
                <div key={listing.id} className="card-frame" style={{ padding: 18 }}>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--ink-500)' }}>{listing.product_family}</p>
                  <h3 style={{ margin: '4px 0 8px', fontSize: '1.05rem' }}>{listing.name}</h3>
                  {listing.description ? (
                    <p className="discipline-body" style={{ margin: '0 0 10px' }}>{listing.description}</p>
                  ) : null}
                  <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', fontSize: '0.85rem', color: 'var(--ink-muted)' }}>
                    {listing.moq ? (
                      <span>
                        {isAr ? 'حد أدنى' : 'MOQ'}: {listing.moq}
                        {listing.unit ? ` ${listing.unit}` : ''}
                      </span>
                    ) : null}
                    {listing.sample_available ? (
                      <span>{isAr ? 'عينات متوفرة' : 'samples available'}</span>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* The CTA: request this supplier's quote through the quick form,
            pre-filled with the supplier and its first family. */}
        <div className="card-frame" style={{ padding: 24, marginTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <h4 style={{ margin: 0 }}>
              <Quote size={15} style={{ verticalAlign: '-2px' }} /> {isAr ? 'اطلب عرض سعر لهذا المورد' : 'Request this supplier quote'}
            </h4>
            <p className="discipline-note" style={{ margin: '6px 0 0' }}>
              {isAr
                ? 'أقل من دقيقة. يبقى تواصل المشتري محجوباً حتى عتماده.'
                : 'Under a minute. The buyer contact stays withheld until the supplier is approved.'}
            </p>
          </div>
          <Link
            className="btn btn-primary"
            href={`/${locale}/b2b/quote?supplier=${encodeURIComponent(slug)}${raw.product_families?.[0] ? `&family=${encodeURIComponent(raw.product_families[0])}` : ''}`}
          >
            {pick(locale, portalCopy.requestQuoteFor)}
            <ArrowRight size={14} className="icon-dir-flip" />
          </Link>
        </div>
      </div>
    </div>
  );
}
