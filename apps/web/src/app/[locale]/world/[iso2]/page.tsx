import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { seed } from '@/lib/data';
import { buildMetadata } from '@/lib/metadata';
import { editorialCopy, pick } from '@/lib/copy/policy';
import { resolvePublishedPath, publishedLabel } from '@/lib/route-resolver';
import { getArticle } from '@/lib/articles';
import { countrySlugForCode } from '@/lib/country-registry';
import { MapPin, Info, BookOpen, Award, Lock, FileText, ArrowRight, Globe } from 'lucide-react';

/**
 * Per-territory metadata.
 *
 * The territory page was reachable but said nothing: it inherited the
 * site-wide title and description, so 249 pages looked identical to a
 * search engine. The title comes from the registry's own country name and
 * the description states what the page actually covers.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; iso2: string }>;
}): Promise<Metadata> {
  const { locale, iso2 } = await params;
  const country = (seed.countries as any[]).find(
    (c: any) => c.iso2.toUpperCase() === iso2.toUpperCase()
  );

  if (!country) {
    return { title: 'Territory not found · OudGuide' };
  }

  const name = locale === 'ar' ? country.arabic_seed : country.english_seed;
  const title = `${name} — Oud and Fragrance Territory · OudGuide`;
  const description =
    locale === 'ar'
      ? `صفحة الإقليم لـ ${country.arabic_seed}: تغطية العود والعطور، ومنشأ المنتجين، وخيارات التوريد للمشترين الذين يشحنون إلى ${country.arabic_seed}.`
      : `Territory reference for ${country.english_seed}: agarwood and fragrance coverage, producer origin, and wholesale sourcing options for buyers shipping to ${country.english_seed}.`;

  return buildMetadata({
    path: `/${locale}/world/${country.iso2.toUpperCase()}`,
    title,
    description,
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/world/${country.iso2.toUpperCase()}`,
  });
}

const producerCovers: Record<string, string> = {
  'al-mutalib-perfumes': '/images/hero-attar-still.svg',
  'assam-artisan-distillers': '/images/hero-oud-chip.svg',
  'siam-trat-agarwood-co': '/images/hero-dehn-al-oud.svg',
};

export default async function CountryDetailPage({
  params,
}: {
  params: Promise<{ locale: string; iso2: string }>;
}) {
  const { locale, iso2 } = await params;
  const isAr = locale === 'ar';
  const code = iso2.toUpperCase();

  const country = seed.countries.find((c: any) => c.iso2.toUpperCase() === code);
  if (!country) {
    notFound();
  }

  // The businesses physically located in this country. Development
  // fixtures are excluded: a fixture is not a producer in a country.
  const businesses = (seed.businesses as any[]).filter(
    (b: any) => !b.demo && b.country_id.toUpperCase() === code
  );

  // Routes associated with this country. Only links that resolve to a
  // published page are rendered — a related-brief list that points at
  // 404s is worse than none.
  const relatedRoutes = (seed.routes as any[])
    .filter(
      (r: any) =>
        r.path.includes(`/${country.proposed_slug}/`) ||
        r.title_brief.toLowerCase().includes(country.english_seed.toLowerCase())
    )
    .slice(0, 12)
    .map((r: any) => {
      const target = resolvePublishedPath(r.path, locale);
      if (!target) return null;
      return { href: target, label: publishedLabel(r.path, locale) };
    })
    .filter((r: any): r is { href: string; label: string } => Boolean(r && r.label));

  /**
   * The "On this territory" block.
   *
   * The related-brief list above is built from the manifest, which is
   * a planning register: it describes routes that may not be published
   * editorial articles. This block is the deterministic counterpart —
   * it names the pages that actually exist for THIS territory, so a
   * reader who lands on a territory page has somewhere to go next.
   *
   * Three kinds of target, in the order a buyer would want them:
   *
   *   1. The country buying guide (`buying/in/<country>`) — what to
   *      check when buying in this market.
   *   2. The origin-country article (`origins/<country>`) — when the
   *      territory is also a producing country.
   *   3. The two directory filters — the wholesalers that handle
   *      material from this country, and the wholesalers that serve
   *      it as a destination.
   *
   * Every candidate goes through `resolvePublishedPath`, and a null
   * result drops the link. The resolver is the site's no-broken-links
   * rule: the block can only ever emit hrefs the site can serve.
   *
   * The block is capped at four links so that it stays a strip rather
   * than becoming a second index on the page.
   */
  const countrySlug = countrySlugForCode(country.iso2) ?? country.proposed_slug;

  const territoryLinks: { href: string; label: string; labelAr?: string }[] = [];

  // 1. The country buying guide.
  const buyingArticle = getArticle(`buying/in/${countrySlug}`);
  if (buyingArticle) {
    const href = resolvePublishedPath(`/${locale}/guides/buying/in/${countrySlug}`, locale);
    if (href) {
      territoryLinks.push({
        href,
        label: buyingArticle.title,
        labelAr: buyingArticle.titleAr,
      });
    }
  }

  // 2. The origin-country article, when this territory produces oud.
  const originArticle = getArticle(`origins/${countrySlug}`);
  if (originArticle) {
    const href = resolvePublishedPath(`/${locale}/guides/origins/${countrySlug}`, locale);
    if (href) {
      territoryLinks.push({
        href,
        label: originArticle.title,
        labelAr: originArticle.titleAr,
      });
    }
  }

  // 3. The two directory filters. The country NAME slug is what the
  // published filter paths carry — the filter list on the directory
  // page derives its slugs from the registry the same way.
  const directoryTargets: { path: string; en: string; ar: string }[] = [
    {
      path: `/${locale}/directory/wholesalers/by-origin/${countrySlug}`,
      en: `Wholesalers handling ${country.english_seed} material`,
      ar: `موردو الجملة الذين يتعاملون بمادة ${country.arabic_seed}`,
    },
    {
      path: `/${locale}/directory/wholesalers/serving/${countrySlug}`,
      en: `Wholesalers serving ${country.english_seed}`,
      ar: `موردو الجملة الذين يخدمون ${country.arabic_seed}`,
    },
  ];

  for (const target of directoryTargets) {
    const href = resolvePublishedPath(target.path, locale);
    if (href) {
      territoryLinks.push({ href, label: target.en, labelAr: target.ar });
    }
  }

  const territoryBlock = territoryLinks.slice(0, 4);

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 960 }}>
        {/* BREADCRUMB */}
        <nav className="meta" style={{ margin: '20px 0 16px', color: 'var(--ink-soft)', textTransform: 'none', letterSpacing: '0.02em', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Link href={`/${locale}`}>{isAr ? 'الرئيسية' : 'Home'}</Link>
          <span>›</span>
          <Link href={`/${locale}/world`}>{isAr ? 'سجل الأقاليم' : 'Territory Register'}</Link>
          <span>›</span>
          <span style={{ color: 'var(--ink)' }}>{isAr ? country.arabic_seed : country.english_seed}</span>
        </nav>

        {/* MASTHEAD */}
        <section className="masthead" style={{ borderBottom: 'none', padding: '24px 0 28px' }}>
          <div className="masthead-inner">
            <div className="row-between" style={{ marginBottom: 14, gap: 10 }}>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <span className="badge badge-forest">ISO {country.iso2} · {country.iso3}</span>
                <span className="badge badge-crimson">{country.role_status}</span>
                <span className="badge badge-locked">{country.public_readiness}</span>
              </div>
            </div>

            <h1>
              {isAr ? country.arabic_seed : country.english_seed}
              <span className="accent">
                {isAr
                  ? `إقليم مسجّل من أصل ${(seed.countries as any[]).length} في السجل الجغرافي.`
                  : `One of ${(seed.countries as any[]).length} territories in the geographic register.`}
              </span>
            </h1>

            <p className="hero-lead">
              {isAr
                ? 'حالة التقييم المعروضة أدناه هي ما يحمله السجل لهذا الإقليم فعلياً. وجود بلد في قاعدة البيانات لا يثبت أن العود ينمو فيه، ولا أن هناك مورداً، ولا أن الشحن إليه قانوني.'
                : 'The assessment status below is what the register actually records for this territory. A country being in the database does not establish that oud grows there, that a supplier operates there, or that shipping to it is lawful.'}
            </p>

            <div className="masthead-actions">
              <Link href={`/${locale}/rfq?country=${encodeURIComponent(country.english_seed)}`} className="btn btn-primary btn-sm">
                <FileText size={13} />
                {isAr ? `طلب توريد إلى ${country.arabic_seed}` : `Submit RFQ for ${country.english_seed}`}
              </Link>
            </div>
          </div>
        </section>

        {/* METADATA PROFILE */}
        <div className="card-frame" style={{ padding: 28, marginBottom: 28 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 500, margin: '0 0 14px', borderBottom: '1px solid var(--line)', paddingBottom: 10 }}>
            {isAr ? 'المواصفات القياسية' : 'Standard Specifications'}
          </h3>
          <div className="grid-3" style={{ gap: 16 }}>
            <div>
              <span className="data-card-fact-label">ISO 3166-1 Alpha-2</span>
              <span className="data-card-fact-value">{country.iso2}</span>
            </div>
            <div>
              <span className="data-card-fact-label">ISO 3166-1 Alpha-3</span>
              <span className="data-card-fact-value">{country.iso3}</span>
            </div>
            <div>
              <span className="data-card-fact-label">{isAr ? 'المصدر القياسي' : 'Standard source'}</span>
              <span className="data-card-fact-value" style={{ fontSize: '0.78rem' }}>{country.source_version}</span>
            </div>
          </div>
        </div>

        {/* DOCUMENTED PRODUCERS */}
        <div className="card-frame" style={{ padding: 28, marginBottom: 28, borderColor: 'var(--line-strong)' }}>
          <div className="row-between" style={{ marginBottom: 18, gap: 10 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 500, margin: 0 }}>
              {isAr
                ? `المنتجون والمقطرون المسجلون في ${country.arabic_seed}`
                : `Documented producers & distillers in ${country.english_seed}`}
            </h3>
          </div>

          {businesses.length > 0 ? (
            <div className="grid-2" style={{ gap: 16 }}>
              {businesses.map((b: any) => (
                <div key={b.id} className="data-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div className="data-card-cover" style={{ height: 95 }}>
                      <img
                        src={producerCovers[b.slug] || '/images/hero-oud-chip.svg'}
                        alt={b.name}
                      />
                      <div className="data-card-cover-overlay" />
                    </div>
                    <div className="row-between" style={{ marginBottom: 8, gap: 8 }}>
                      <h4 className="data-card-name" style={{ margin: 0, fontSize: '0.98rem' }}>
                        <Link href={`/${locale}/directory/${b.slug}`}>{b.name}</Link>
                      </h4>
                      {b.contact_unlocked ? (
                        <span className="badge badge-emerald"><Award size={10} /> {isAr ? 'عضو' : 'Member'}</span>
                      ) : (
                        <span className="badge badge-locked"><Lock size={10} /> {isAr ? 'محمي' : 'Protected'}</span>
                      )}
                    </div>
                    <div className="biz-location" style={{ marginBottom: 8 }}>
                      <MapPin size={11} />
                      {b.city} · {b.category}
                    </div>
                  </div>
                  <div className="row-between" style={{ gap: 10, marginTop: 12, paddingTop: 10, borderTop: '1px solid var(--line)' }}>
                    <span style={{ fontSize: '0.76rem', color: 'var(--ink-muted)' }}>
                      {isAr ? 'الحد الأدنى' : 'MOQ'}: {b.minimum_order_quantity || (isAr ? 'مرونة' : 'Flexible')}
                    </span>
                    <Link href={`/${locale}/directory/${b.slug}`} className="btn btn-outline btn-sm" style={{ padding: '4px 10px', gap: 5 }}>
                      {isAr ? 'الملف' : 'Profile'}
                      <ArrowRight size={11} className="icon-dir-flip" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="privacy-shield" style={{ margin: 0 }}>
              <Info size={20} className="privacy-shield-icon" />
              <div>
                <p className="privacy-shield-text" style={{ margin: 0 }}>
                  {isAr
                    ? `لا توجد شركات مدرجة بشكل مستقل في ${country.arabic_seed} حالياً. يمكنك تقديم طلب توريد وسيتم ربطك بمورد وافق على العمل مع هذه الوجهة — لا يُعرّف مورد وجهة إلا بعد توثيقها له.`
                    : `${pick(editorialCopy.coverageGap, locale)} You can submit an RFQ requirement and OudGuide will introduce you to suppliers that have documented this destination — a supplier is introduced to a destination only where it has documented one.`}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* RELATED GUIDES — only links that resolve to a published page */}
        {relatedRoutes.length > 0 && (
          <div className="card-frame" style={{ padding: 28, marginBottom: 32 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 500, margin: '0 0 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <BookOpen size={15} style={{ color: 'var(--green-600)' }} />
              {isAr ? 'الأدلة والتقارير المرتبطة بهذا السوق' : 'Related Market Briefs & Research Guides'}
            </h3>
            <ul style={{ paddingInlineStart: '20px', margin: 0, fontSize: '0.9rem', lineHeight: 1.7 }}>
              {relatedRoutes.map((r) => (
                <li key={r.href}>
                  <Link href={r.href}>{r.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ON THIS TERRITORY — the deterministic outbound block */}
        {territoryBlock.length > 0 && (
          <div className="card-frame" style={{ padding: 28, marginBottom: 32 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 500, margin: '0 0 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Globe size={15} style={{ color: 'var(--green-600)' }} />
              {isAr ? 'في هذا الإقليم' : 'On this territory'}
            </h3>
            <ul style={{ paddingInlineStart: '20px', margin: 0, fontSize: '0.9rem', lineHeight: 1.7 }}>
              {territoryBlock.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{isAr && link.labelAr ? link.labelAr : link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <div className="card-frame card-frame-accent" style={{ background: 'var(--green-900)', color: 'var(--ink-on-green)', padding: 40, textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 400, color: '#ffffff', margin: '0 0 10px' }}>
            {isAr
              ? `طلب توريد إلى ${country.arabic_seed}`
              : `Request a supplier introduction for ${country.english_seed}`}
          </h3>
          <p style={{ color: 'rgba(232,239,233,0.72)', fontSize: '0.9rem', maxWidth: '640px', margin: '0 auto 18px', lineHeight: 1.65 }}>
            {isAr
              ? 'حدد متطلباتك. يتولى دليل العود مطابقتك مع موردين، ولا يقدّم طلبك إلا لمن تعتمدهم بالاسم. وتُراجع متطلبات التوثيق لكل منتج ومسار ووجهة على حدة.'
              : 'Specify your requirement. OudGuide matches you with suppliers, and nothing is sent to one unless you approve them by name. Documentation requirements are assessed per product, route and destination.'}
          </p>
          <Link
            href={`/${locale}/rfq?country=${encodeURIComponent(country.english_seed)}`}
            className="btn btn-primary btn-lg"
            style={{ background: '#ffffff', color: 'var(--green-900)', borderColor: '#ffffff' }}
          >
            {isAr ? `تقديم طلب توريد إلى ${country.arabic_seed}` : `Submit RFQ for ${country.english_seed}`}
            <ArrowRight size={14} className="icon-dir-flip" />
          </Link>
        </div>
      </div>
    </div>
  );
}
