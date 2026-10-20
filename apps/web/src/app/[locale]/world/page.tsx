import Link from 'next/link';
import { seed } from '@/lib/data';

export default async function WorldExplorerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  const countries = seed.countries;

  const regionalHubs: Record<string, { title: string; desc: string; icon: string; codes: string[] }> = {
    'indochina': {
      title: isAr ? 'أقاليم الهند الصينية' : 'Indochina & Continental Southeast Asia',
      desc: isAr ? 'موطن أشجار الأكولاريا كراسنا في كمبوديا، تايلاند، فيتنام، ولاوس.' : 'Habitat of Aquilaria crassna across Cambodia, Thailand, Vietnam, and Laos, renowned for sweet red fruits, dried figs, and nectar-rich florals.',
      icon: '🌿',
      codes: ['KH', 'TH', 'VN', 'LA', 'MM'],
    },
    'subcontinent': {
      title: isAr ? 'شبه القارة الهندية' : 'Indian Subcontinent (Assam & Meghalaya)',
      desc: isAr ? 'المهد التاريخي للعود الهندي وفصيلة الأكولاريا أغالوتشا وتقطير قدور النحاس التقليدي.' : 'The historic heart of Aquilaria agallocha and wood-fired copper alembic distillations.',
      icon: '🪵',
      codes: ['IN', 'BD', 'BT', 'NP'],
    },
    'malay-archipelago': {
      title: isAr ? 'أرخبيل الملايو وإندونيسيا' : 'Malay Archipelago & Papua Island',
      desc: isAr ? 'أكبر نطاق جغرافي لأشجار الأكولاريا مالاكينسيس وجيرينوبس في كاليمانتان، سومطرة، وبابوا.' : 'Expansive habitats of Aquilaria malaccensis in Borneo, Sumatra, and Papua.',
      icon: '🌴',
      codes: ['ID', 'MY', 'BN', 'PG', 'PH'],
    },
    'gcc-markets': {
      title: isAr ? 'أسواق الخليج العربي والمراكز التجارية' : 'Arabian Gulf Trading Hubs',
      desc: isAr ? 'المراكز العالمية الكبرى لتجارة واستهلاك العود، بقيادة أسواق ديرة والرياض ومسقط والدوحة.' : 'The primary international consumer capitals centered in Dubai (Deira), Riyadh, Muscat, Doha, and Kuwait.',
      icon: '🏛',
      codes: ['AE', 'SA', 'OM', 'KW', 'QA', 'BH'],
    },
  };

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 1180 }}>
        {/* HERO */}
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <span>🌍</span>
              <span>{isAr ? 'السجل الجغرافي العالمي الشامل' : 'Global Geographic & Botanical Registry'}</span>
            </div>
            <h1>
              {isAr ? 'خريطة دول ومناطق العود العالمية' : 'The Global Geography of Natural Agarwood & Fragrance'}
              <span className="accent">{isAr ? '249 دولة وإقليم موثق.' : '249 documented countries and territories.'}</span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'دليل استكشافي شامل يغطي 249 دولة وإقليماً، يفصل بين بيئات الغابات المنتجة والمراكز التجارية وأسواق الاستهلاك الدولية.'
                : 'Comprehensive territorial directory precisely categorizing indigenous producing terroirs from international trading and consumer souks.'}
            </p>
          </div>
        </section>

        {/* REGIONAL HUBS */}
        <div style={{ marginTop: 48 }}>
          {Object.entries(regionalHubs).map(([key, hub]) => {
            const hubCountries = countries.filter((c: any) => hub.codes.includes(c.iso2));
            return (
              <section key={key} style={{ marginBottom: 56 }}>
                <div className="row-between" style={{ marginBottom: 8 }}>
                  <div className="cluster" style={{ gap: 12 }}>
                    <span style={{ fontSize: 28 }}>{hub.icon}</span>
                    <h2 className="h2 text-crimson" style={{ margin: 0 }}>{hub.title}</h2>
                  </div>
                </div>
                <p className="lede" style={{ marginBottom: 24, maxWidth: 820 }}>{hub.desc}</p>

                <div className="grid-3">
                  {hubCountries.map((c: any) => (
                    <Link key={c.iso2} href={`/${locale}/world/${c.iso2}`} className="card" style={{ textDecoration: 'none' }}>
                      <div style={{ padding: 24 }}>
                        <div className="cluster" style={{ justifyContent: 'space-between', marginBottom: 12 }}>
                          <span className="badge badge-emerald">ISO {c.iso2} · {c.iso3}</span>
                          <span className="badge badge-gold">{c.role_status}</span>
                        </div>
                        <h3 className="discipline-title" style={{ fontSize: '1.15rem', marginBottom: 6 }}>
                          {isAr ? c.arabic_seed : c.english_seed}
                        </h3>
                        <p className="display-serif" style={{ fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--color-text-muted)', margin: '0 0 14px', lineHeight: 1.5 }}>
                          {c.public_readiness} · {c.source_version?.split(';')[0]}
                        </p>
                        <span className="btn-link" style={{ fontSize: '0.85rem' }}>
                          {isAr ? 'استعراض الإقليم' : 'View Terroir'}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* ALL COUNTRIES REGISTER */}
        <section className="card-frame" style={{ marginTop: 48, padding: 36 }}>
          <span className="eyebrow eyebrow-crimson" style={{ display: 'block', marginBottom: 8 }}>{isAr ? 'سجل شامل' : 'Complete Register'}</span>
          <h2 className="h2 text-crimson" style={{ marginBottom: 12 }}>
            {isAr ? 'جميع الدول والأقاليم المسجلة (249)' : 'Complete World Register of 249 Nations'}
          </h2>
          <p className="lede" style={{ marginBottom: 24 }}>
            {isAr
              ? 'سجل مرجعي مشتق من المواصفة الدولية ISO 3166-1 لضمان دقة الشحن والتخليص الجمركي وتوثيق أذونات سايتس.'
              : 'Standardized territorial reference derived from ISO 3166-1 for export compliance, customs freight clearance, and CITES non-detriment verification.'}
          </p>
          <div className="cluster">
            {countries.map((c: any) => (
              <Link
                key={c.iso2}
                href={`/${locale}/world/${c.iso2}`}
                className="chip"
              >
                {isAr ? c.arabic_seed : c.english_seed} ({c.iso2})
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}