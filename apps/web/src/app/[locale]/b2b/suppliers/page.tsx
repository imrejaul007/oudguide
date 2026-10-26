import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, ArrowRight, ShieldCheck, PackageOpen } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import { domain } from '@/lib/data';
import { portalCopy, pick } from '@/lib/copy/b2b-portal';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  return buildMetadata({
    path: `/${locale}/b2b/suppliers`,
    title: isAr ? 'مورّدون بالجملة معتمدون' : 'Verified Wholesale Suppliers',
    description: isAr
      ? 'موردون معتمدون للعود ومواد العطور. الأسعار تُشارك عبر طلب عرض السعر.'
      : 'Verified suppliers of oud and fragrance materials. Pricing is shared through the quote request.',
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/b2b/suppliers`,
  });
}

export default async function B2bSuppliersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  // The storefront lists the directory's published suppliers, one card
  // each. Demo fixtures are excluded the same way every public surface
  // does.
  const suppliers = domain.listBusinesses({ excludeDemo: true });

  const locationOf = (s: (typeof suppliers)[number]) =>
    [s.city, s.country_name].filter(Boolean).join(', ');

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 980 }}>
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <Building2 size={12} />
              <span>{isAr ? 'متاجر الموردين' : 'Supplier storefronts'}</span>
            </div>
            <h1>
              {pick(locale, portalCopy.supplierIndexTitle)}
              <span className="accent"> · {suppliers.length}</span>
            </h1>
            <p className="hero-lead">{pick(locale, portalCopy.supplierIndexSubtitle)}</p>
          </div>
        </section>

        <div className="supplier-grid" style={{ marginTop: 24, display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {suppliers.map((supplier) => (
            <Link
              key={supplier.id}
              href={`/${locale}/b2b/suppliers/${supplier.slug}`}
              className="card-frame supplier-card"
              style={{ textDecoration: 'none', display: 'block', padding: 20 }}
            >
              <div className="row-between">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Building2 size={18} style={{ color: 'var(--green-700)' }} />
                  <strong style={{ fontSize: '1.05rem' }}>{supplier.name}</strong>
                </div>
                {supplier.contact_unlocked ? (
                  <span className="badge badge-emerald">
                    <ShieldCheck size={11} />
                    {isAr ? 'اتصال متاح' : 'contact open'}
                  </span>
                ) : null}
              </div>

              <p className="discipline-body" style={{ margin: '10px 0' }}>
                {locationOf(supplier)}
                {supplier.established_year ? (
                  isAr ? ` · تأسس ${supplier.established_year}` : ` · est. ${supplier.established_year}`
                ) : null}
              </p>

              {(supplier.product_families?.length ?? 0) > 0 ? (
                <div style={{ marginBottom: 10 }}>
                  {(supplier.product_families ?? []).slice(0, 3).map((family) => (
                    <span key={family} className="filter-chip" style={{ cursor: 'default', marginRight: 6 }}>
                      {family}
                    </span>
                  ))}
                </div>
              ) : null}

              {supplier.sample_availability ? (
                <p className="discipline-note" style={{ margin: 0, color: 'var(--green-700)' }}>
                  <PackageOpen size={12} style={{ verticalAlign: '-2px' }} />{' '}
                  {isAr ? 'عينات متوفرة' : 'Samples available'}
                </p>
              ) : null}

              <span className="supplier-card-cta" style={{ display: 'inline-flex', gap: 6, alignItems: 'center', color: 'var(--green-700)', fontWeight: 600, marginTop: 12, fontSize: '0.9rem' }}>
                {isAr ? 'عرض المتجر' : 'View storefront'}
                <ArrowRight size={12} className="icon-dir-flip" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
