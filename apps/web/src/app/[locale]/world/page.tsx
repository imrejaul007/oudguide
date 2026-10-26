import Link from 'next/link';
import { seed } from '@/lib/data';
import { Globe, TreePine, Factory, Palmtree, Landmark } from 'lucide-react';
import { TerritoryBrowser } from '@/components/world/territory-browser';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { editorialCopy, pick } from '@/lib/copy/policy';

/**
 * The territory index.
 *
 * The 249 country records stay in the data layer — the audit was explicit
 * that the geography should be kept. What changed is the claim: the old
 * page promised "249 documented countries and territories" and
 * "Comprehensive territorial directory precisely categorizing indigenous
 * producing terroirs", which overstated what an ISO code says about
 * agarwood.
 *
 * An ISO code establishes that a place exists and is a valid destination
 * for a customs form. It does not establish that oud grows there, that a
 * supplier operates there, or that material can be shipped there.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  const count = (seed.countries as any[]).length;

  return buildMetadata({
    path: `/${locale}/world`,
    title: isAr ? `خريطة الأقاليم — ${count} دولة وإقليماً` : `Territory Register — ${count} countries and territories`,
    description: isAr
      ? 'سجل جغرافي لـ 249 دولة وإقليماً يوثّق هوياتها ISO وعلاقتها بالعود. كل صفحة إقليم تبيّن ما هو موثّق وما هو غير موثّق فيها.'
      : `A register of ${count} countries and territories, each with its ISO identity and its relationship to oud, stating what is documented and what is not.`,
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/world`,
  });
}

export default async function WorldExplorerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  const countries = seed.countries as any[];

  const regionalHubs: Record<string, { title: string; desc: string; icon: React.ComponentType<{ size?: number }>; codes: string[] }> = {
    indochina: {
      title: isAr ? 'فيتنام ولاوس وكمبوديا وتايلاند' : 'Cambodia, Thailand, Vietnam & Laos',
      desc: isAr
        ? 'منطقة Aquilaria crassna في جنوب شرق آسيا. كل صفحة الإقليم تبيّن ما هو موثّق عن الأنواع والتجارة.'
        : 'The Aquilaria crassna range in mainland Southeast Asia. Each territory page states what is documented about the species, the trade and the sellers there.',
      icon: TreePine,
      codes: ['KH', 'TH', 'VN', 'LA', 'MM'],
    },
    subcontinent: {
      title: isAr ? 'الهند وبنغلاديش ونيبال وبوتان' : 'India, Bangladesh, Nepal & Bhutan',
      desc: isAr
        ? 'موطن Aquilaria agallocha وتقاليد التقطير بالقدّ النحاسي.'
        : 'The range of Aquilaria agallocha and the copper-deg distillation tradition.',
      icon: Factory,
      codes: ['IN', 'BD', 'BT', 'NP'],
    },
    malayArchipelago: {
      title: isAr ? 'ماليزيا وإندونيسيا وبروناي وغينيا الجديدة' : 'Malaysia, Indonesia, Brunei & Papua New Guinea',
      desc: isAr
        ? 'نطاق Aquilaria malaccensis وGyrinops في بورنيو وسومطرة وبابوا.'
        : 'The range of Aquilaria malaccensis and Gyrinops across Borneo, Sumatra and Papua.',
      icon: Palmtree,
      codes: ['ID', 'MY', 'BN', 'PG', 'PH'],
    },
    gccMarkets: {
      title: isAr ? 'أسواق الخليج العربية' : 'The Arabian Gulf trading hubs',
      desc: isAr
        ? 'مراكز تجارة العود واستهلاكه. هذه مدن تجارة لا مناطق نمو، والمادة المباعة فيها مستوردة.'
        : 'The trading and consuming centres for oud. These are trading cities rather than growing regions, and the material sold there is imported.',
      icon: Landmark,
      codes: ['AE', 'SA', 'OM', 'KW', 'QA', 'BH'],
    },
  };

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 1180 }}>
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <Globe size={13} />
              <span>{isAr ? 'السجل الجغرافي' : 'The Geographic Register'}</span>
            </div>
            <h1>
              {isAr ? 'جغرافيا العود والعطور' : 'The Geography of Agarwood & Fragrance'}
              <span className="accent">
                {isAr ? `${countries.length} دولة وإقليماً في السجل.` : `${countries.length} countries and territories in the register.`}
              </span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'يحتفظ السجل بكل الدول والأقاليم، لأن التاجر والشحن يحتاجان تغطية جغرافية كاملة. لكن وجود البلد في قاعدة البيانات لا يثبت أن العود ينمو فيه، ولا أن هناك مورداً هناك، ولا أن الشحن إليه ممكن قانونياً. كل صفحة إقليم تذكر ما هو موثّق فيها وما هو غير موثّق.'
                : 'The register keeps every country and territory, because trade and shipping need complete geographic coverage. But a country being in the database does not establish that oud grows there, that a supplier operates there, or that shipping to it is lawful. Each territory page states what is documented there and what is not.'}
            </p>
          </div>
        </section>

        {/* REGIONAL HUBS */}
        <div style={{ marginTop: 48 }}>
          {Object.entries(regionalHubs).map(([key, hub]) => {
            const hubCountries = countries.filter((c: any) => hub.codes.includes(c.iso2));
            if (hubCountries.length === 0) return null;

            return (
              <section key={key} style={{ marginBottom: 48 }}>
                <div className="row-between" style={{ marginBottom: 8 }}>
                  <div className="cluster" style={{ gap: 14 }}>
                    <div className="portal-tile-icon" style={{ flexShrink: 0 }}>
                      <hub.icon size={20} />
                    </div>
                    <h2 className="h2" style={{ margin: 0 }}>{hub.title}</h2>
                  </div>
                </div>
                <p className="lede" style={{ marginBottom: 20, maxWidth: 820 }}>{hub.desc}</p>

                <div className="grid-3">
                  {hubCountries.map((c: any) => (
                    <Link
                      key={c.iso2}
                      href={`/${locale}/world/${c.iso2}`}
                      className="card"
                      style={{ textDecoration: 'none' }}
                    >
                      <div style={{ padding: 24 }}>
                        <div className="cluster" style={{ justifyContent: 'space-between', marginBottom: 12 }}>
                          <span className="badge badge-emerald">ISO {c.iso2} · {c.iso3}</span>
                        </div>
                        <h3 style={{ fontSize: '1.15rem', marginBottom: 6 }}>
                          {isAr ? c.arabic_seed : c.english_seed}
                        </h3>
                        <p
                          style={{
                            fontSize: '0.85rem',
                            color: 'var(--ink-muted)',
                            margin: '0 0 14px',
                            lineHeight: 1.55,
                          }}
                        >
                          {(c.role_status || (isAr ? 'موثّقة في السجل الجغرافي' : 'Documented in the geographic register')) +
                            ' · ' +
                            (c.public_readiness || (isAr ? 'بحث فقط' : 'Research only'))}
                        </p>
                        <span className="btn-link" style={{ fontSize: '0.85rem' }}>
                          {isAr ? 'استعراض الإقليم' : 'View the territory'}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* COMPLETE REGISTER */}
        <section style={{ marginTop: 32 }}>
          <div className="section-head">
            <span className="eyebrow">{isAr ? 'السجل الكامل' : 'The complete register'}</span>
            <h2 className="h2" style={{ marginBottom: 10 }}>
              {isAr
                ? `كل الدول والأقاليم المسجلة (${countries.length})`
                : `Every country and territory in the register (${countries.length})`}
            </h2>
            <p className="lede">
              {pick(editorialCopy.coverageGap, locale)}
            </p>
          </div>

          <TerritoryBrowser
            locale={locale}
            isAr={isAr}
            territories={countries.map((c: any) => ({
              iso2: c.iso2,
              iso3: c.iso3,
              name: c.english_seed,
              nameAr: c.arabic_seed,
              role_status: c.role_status ?? 'Documented',
              public_readiness: c.public_readiness ?? 'Research only',
            }))}
          />
        </section>
      </div>
    </div>
  );
}
