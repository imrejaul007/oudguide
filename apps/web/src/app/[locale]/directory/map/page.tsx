import Link from 'next/link';
import { Map as MapIcon, ArrowLeft, Compass } from 'lucide-react';
import { domain } from '@/lib/data';
import centroids from '@/data/region_centroids.json';
import { ProducerMapLoader } from '@/components/map/producer-map-loader';
import type { MapRegion } from '@/components/map/producer-map';

export default async function ProducerMapPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  const businesses = domain.listBusinesses();
  const facilities = domain.listDocumentedFacilities();

  // A producer is plotted only where a documented facility says material is
  // actually handled. Matching on the business's own country, or on the
  // origins it says it works with, would place a Dubai reseller of
  // Cambodian agarwood in Cambodia — a claim about where the material was
  // made that no record supports.
  const regions: MapRegion[] = (centroids as any).regions.map((r: any) => {
    const producers = facilities
      .filter((f) => f.facility.country_id?.toUpperCase() === r.iso2)
      .map((f) => {
        const b = businesses.find((x) => x.id === f.business_id);
        return {
          id: f.business_id,
          slug: f.slug,
          name: f.name,
          city: f.facility.city ?? b?.city ?? null,
          country_name: f.facility.country_name ?? b?.country_name ?? null,
          category: b?.category ?? null,
        };
      });

    return {
      key: r.key,
      iso2: r.iso2,
      name: r.name,
      name_ar: r.name_ar,
      lat: r.lat,
      lng: r.lng,
      role: r.role,
      producers: producers.map((b: any) => ({
        id: b.id,
        slug: b.slug,
        name: b.name,
        city: b.city,
        country_name: b.country_name,
        category: b.category,
      })),
    } as MapRegion;
  });

  const producerRegions = regions.filter((r) => r.role === 'producer');
  const marketRegions = regions.filter((r) => r.role === 'market');
  const linkedProducers = regions.filter((r) => r.producers && r.producers.length > 0);
  const documentedFacilityCount = facilities.length;

  return (
    <div className="section">
      <div className="container">
        {/* HERO */}
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <MapIcon size={13} />
              <span>{isAr ? 'خريطة جغرافية' : 'Geographic Distribution'}</span>
            </div>
            <h1>
              {isAr ? 'خريطة منتجي العود حول العالم' : 'The Global Map of Oud Producers'}
              <span className="accent">
                {isAr ? `${producerRegions.length} إقليماً منتجاً · ${marketRegions.length} مركزاً تجارياً` : `${producerRegions.length} producing terroirs · ${marketRegions.length} trading hubs`}
              </span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'تعرض الخريطة الأقاليم المنتجة ومراكز التجارة الموثقة عبر 249 دولة. الإحداثيات على مستوى الإقليم عمداً، حفاظاً على خصوصية مواقع المنشآت.'
                : 'The map plots documented producing terroirs and trading hubs across 249 countries. Coordinates are deliberately region-level to preserve the privacy of individual facilities.'}
            </p>
            <div style={{ marginTop: 20 }}>
              <Link href={`/${locale}/directory`} className="btn btn-outline">
                <ArrowLeft size={15} />
                {isAr ? '← رجوع إلى الدليل' : '← Back to Directory'}
              </Link>
            </div>
          </div>
        </section>

        {/* MAP */}
        <div style={{ marginTop: 40 }}>
          <ProducerMapLoader regions={regions} locale={locale} isAr={isAr} />

          <div className="map-legend">
            <span className="map-legend-item">
              <span className="map-legend-dot map-legend-producer" />
              {isAr ? 'إقليم منتج (خشب / زيت)' : 'Producing terroir (Wood / Oil)'}
            </span>
            <span className="map-legend-item">
              <span className="map-legend-dot map-legend-market" />
              {isAr ? 'مركز تجاري واستهلاك' : 'Trading & consumption hub'}
            </span>
            <span className="map-legend-item" style={{ marginInlineStart: 'auto', color: 'var(--color-text-muted)' }}>
              {isAr
                ? `${linkedProducers.length} منطقة مرتبطة بمنتجين مسجلين`
                : `${linkedProducers.length} regions linked to registered producers`}
            </span>
          </div>
        </div>

        {/* PRODUCER REGIONS */}
        <section style={{ marginTop: 56 }}>
          <div className="row-between" style={{ marginBottom: 24 }}>
            <div>
              <div className="hero-eyebrow-line" style={{ justifyContent: 'flex-start' }}>
                <span><Compass size={14} style={{ display: 'inline', verticalAlign: 'middle', marginInlineEnd: 6 }} />{isAr ? 'الأقاليم المنتجة' : 'Producing Terroirs'}</span>
              </div>
              <h2 className="h2">
                {isAr ? 'مناطق إنتاج العود الموثقة' : 'Documented Agarwood-Producing Regions'}
              </h2>
            </div>
            <Link href={`/${locale}/world`} className="btn btn-outline btn-sm">
              {isAr ? 'صفحات الأقاليم ←' : 'Terroir profiles →'}
            </Link>
          </div>

          <div className="grid-3">
            {producerRegions.map((r) => (
              <article key={r.key} className="card" style={{ padding: 24 }}>
                <div className="cluster" style={{ justifyContent: 'space-between', marginBottom: 12 }}>
                  <span className="badge badge-crimson">{r.iso2}</span>
                  <span className="badge badge-locked">
                    {r.producers && r.producers.length > 0
                      ? `${r.producers.length} ${isAr ? 'منتج' : 'producers'}`
                      : (isAr ? 'قيد التوثيق' : 'In research')}
                  </span>
                </div>
                <h3 className="discipline-title" style={{ fontSize: '1.1rem', marginBottom: 6 }}>
                  {isAr ? r.name_ar : r.name}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--ink-muted)', margin: '0 0 14px', lineHeight: 1.55 }}>
                  {isAr ? 'إقليم موثق ضمن سجل OudGuide' : 'A documented terroir in the OudGuide register'}
                </p>
                {r.producers && r.producers.length > 0 ? (
                  <div className="stack-2">
                    {r.producers.map((p) => (
                      <Link
                        key={p.id}
                        href={`/${locale}/directory/${p.slug}`}
                        className="chip"
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link href={`/${locale}/world/${r.iso2}`} className="btn-link" style={{ fontSize: '0.85rem' }}>
                    {isAr ? 'استعرض الإقليم' : 'Explore terroir'}
                  </Link>
                )}
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
