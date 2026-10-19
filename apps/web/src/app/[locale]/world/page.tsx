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

  // Major documented producing and consuming hubs
  const regionalHubs: Record<string, { title: string; desc: string; icon: string; codes: string[] }> = {
    'indochina': {
      title: isAr ? 'أقاليم الهند الصينية (Indochina)' : 'Indochina & Continental Southeast Asia',
      desc: isAr ? 'موطن أشجار الأكولاريا كراسنا (Aquilaria Crassna) في كمبوديا، تايلاند، فيتنام، ولاوس، المعروفة بنوتات الفواكه المجففة والزهور العسلية.' : 'Habitat of Aquilaria crassna across Cambodia, Thailand, Vietnam, and Laos, renowned for sweet red fruits, dried figs, and nectar-rich florals.',
      icon: '🌿',
      codes: ['KH', 'TH', 'VN', 'LA', 'MM'],
    },
    'subcontinent': {
      title: isAr ? 'شبه القارة الهندية (Assam & Bengal)' : 'Indian Subcontinent (Assam & Meghalaya)',
      desc: isAr ? 'المهد التاريخي للعود الهندي وفصيلة الأكولاريا أغالوتشا (Aquilaria Agallocha) وتقطير قدور النحاس التقليدي (Deg).' : 'The historic heart of Aquilaria agallocha and wood-fired copper alembic distillations, famous for deep leather, barnyard, and balsamic smoke.',
      icon: '🪵',
      codes: ['IN', 'BD', 'BT', 'NP'],
    },
    'malay-archipelago': {
      title: isAr ? 'أرخبيل الملايو وإندونيسيا' : 'Malay Archipelago & Papua Island',
      desc: isAr ? 'أكبر نطاق جغرافي لأشجار الأكولاريا مالاكينسيس وجيرينوبس في كاليمانتان، سومطرة، بابوا، وماليزيا، برائحة الأعشاب الرطبة والبخور المنعش.' : 'Expansive habitats of Aquilaria malaccensis, microcarpa, and Gyrinops versteegii in Borneo, Sumatra, and Papua, marked by green jungle, medicinal herbs, and vanillic smoke.',
      icon: '🌴',
      codes: ['ID', 'MY', 'BN', 'PG', 'PH'],
    },
    'gcc-markets': {
      title: isAr ? 'أسواق الخليج العربي والمراكز التجارية' : 'Arabian Gulf Trading Hubs & Consumer Markets',
      desc: isAr ? 'المراكز العالمية الكبرى لتجارة واستهلاك العود ودهن العود، بقيادة أسواق ديرة والرياض ومسقط والدوحة والكويت.' : 'The primary international consumer capitals and commercial souks, centered in Dubai (Deira Perfume Souk), Riyadh, Muscat, Doha, and Kuwait.',
      icon: '🏛️',
      codes: ['AE', 'SA', 'OM', 'KW', 'QA', 'BH'],
    },
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '10px 0 60px' }}>
      {/* WORLD HERO */}
      <div className="luxury-hero" style={{ padding: '56px 40px', marginBottom: '36px' }}>
        <div className="hero-tag">
          <span>🌍</span>
          <span>{isAr ? 'السجل الجغرافي العالمي الشامل (249 دولة)' : 'Global Geographic & Botanical Registry'}</span>
        </div>
        <h1 className="hero-headline font-display" style={{ fontSize: '38px', margin: '0 0 12px' }}>
          {isAr ? 'خريطة دول ومناطق العود العالمية' : 'The Global Geography of Natural Agarwood & Fragrance'}
        </h1>
        <p className="hero-lead" style={{ fontSize: '16.5px', margin: 0, maxWidth: '820px' }}>
          {isAr
            ? 'دليل استكشافي شامل يغطي 249 دولة وإقليماً، ويفصل بين بيئات الغابات الطبيعية المنتجة (Producing Terroirs) والمراكز التجارية وأسواق الاستهلاك الدولية.'
            : 'Comprehensive territorial directory spanning 249 countries and territories, precisely categorizing indigenous wild and cultivated producing terroirs from international trading and consumer souks.'}
        </p>
      </div>

      {/* REGIONAL HUBS SECTIONS */}
      {Object.entries(regionalHubs).map(([key, hub]) => {
        const hubCountries = countries.filter((c: any) => hub.codes.includes(c.iso2));
        return (
          <section key={key} style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ fontSize: '24px' }}>{hub.icon}</span>
              <h2 className="font-display" style={{ fontSize: '24px', margin: 0, color: 'var(--color-crimson)' }}>
                {hub.title}
              </h2>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '14.5px', margin: '0 0 20px', maxWidth: '820px' }}>
              {hub.desc}
            </p>

            <div className="grid-3">
              {hubCountries.map((c: any) => (
                <div key={c.iso2} className="luxury-card" style={{ padding: '22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span className="badge-forest">ISO: {c.iso2} / {c.iso3}</span>
                    <span style={{ fontSize: '11px', color: 'var(--color-gold-dark)', fontWeight: 700 }}>
                      {c.role_status}
                    </span>
                  </div>
                  <h3 className="card-title font-display" style={{ fontSize: '18px', margin: '0 0 6px' }}>
                    <Link href={`/${locale}/world/${c.iso2}`}>
                      {isAr ? c.arabic_seed : c.english_seed}
                    </Link>
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', margin: '0 0 14px' }}>
                    {c.public_readiness} · {c.source_version?.split(';')[0]}
                  </p>
                  <Link href={`/${locale}/world/${c.iso2}`} className="btn-outline" style={{ padding: '4px 12px', fontSize: '12px' }}>
                    {isAr ? 'استعراض الإقليم ���' : 'View Terroir Profile →'}
                  </Link>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {/* ALL 249 COUNTRIES REGISTER */}
      <section className="form-card" style={{ marginTop: '48px', padding: '32px' }}>
        <h3 className="card-title font-display" style={{ fontSize: '22px', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '16px' }}>
          {isAr ? 'جميع الدول والأقاليم المسجلة في النظام (249)' : 'Complete World Register of 249 Nations & Territories'}
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', margin: '0 0 20px' }}>
          {isAr
            ? 'سجل مرجعي مشتق من المواصفة الدولية ISO 3166-1 لضمان دقة الشحن والتخليص الجمركي وتوثيق أذونات سايتس.'
            : 'Standardized territorial reference snapshot derived from ISO 3166-1 for export compliance, customs freight clearance, and CITES non-detriment verification.'}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {countries.map((c: any) => (
            <Link
              key={c.iso2}
              href={`/${locale}/world/${c.iso2}`}
              className="badge-locked"
              style={{ padding: '6px 12px', fontSize: '12px', borderRadius: '6px', background: '#fdfcf9' }}
            >
              {isAr ? c.arabic_seed : c.english_seed} ({c.iso2})
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
