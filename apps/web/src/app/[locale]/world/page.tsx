import { seed, domain } from '@/lib/data';
import Link from 'next/link';




export default async function WorldExplorerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  const countries = seed.countries;

  // Major documented producing and consuming hubs
  const majorHubs = ['AE', 'IN', 'TH', 'KH', 'ID', 'VN', 'MY', 'SA', 'OM', 'KW', 'QA', 'BH', 'GB', 'US', 'FR', 'JP'];
  const featured = countries.filter((c: any) => majorHubs.includes(c.iso2));
  const others = countries.filter((c: any) => !majorHubs.includes(c.iso2));

  return (
    <div>
      <div className="hero">
        <h2>{isAr ? 'خريطة دول ومناطق العود العالمية' : 'Worldwide Fragrance & Oud Geography'}</h2>
        <p>
          {isAr
            ? 'دليل استكشافي شامل يغطي 249 دولة وإقليماً، ويميز بين مناطق الغابات الطبيعية المنتجة ومراكز الاستهلاك والتجارة الدولية.'
            : 'Comprehensive geographic register of 249 countries and territories, distinguishing indigenous habitat ranges from international trade hubs.'}
        </p>
      </div>

      <div className="section-box">
        <h3>{isAr ? 'الأسواق ومراكز الإنتاج الرئيسية' : 'Key Producing Origins & Trading Hubs'}</h3>
        <div className="grid-3" style={{ marginTop: '14px' }}>
          {featured.map((c: any) => (
            <div key={c.iso2} className="card" style={{ margin: '4px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="badge badge-unlocked">{c.iso2}</span>
                <span style={{ fontSize: '11px', color: 'var(--color-muted)' }}>{c.iso3}</span>
              </div>
              <h4 style={{ margin: '8px 0 4px', fontSize: '16px' }}>
                <Link href={`/${locale}/world/${c.iso2}`}>
                  {isAr ? c.arabic_seed : c.english_seed}
                </Link>
              </h4>
              <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-muted)' }}>
                {c.role_status || 'Documented Market'}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginTop: '28px' }}>
        <h3>{isAr ? 'جميع الدول والأقاليم المسجلة (249)' : 'All 249 Documented Countries & Territories'}</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
          {others.map((c: any) => (
            <Link
              key={c.iso2}
              href={`/${locale}/world/${c.iso2}`}
              className="badge badge-locked"
              style={{ textDecoration: 'none' }}
            >
              {isAr ? c.arabic_seed : c.english_seed} ({c.iso2})
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
