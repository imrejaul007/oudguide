import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { resolvePublishedPath } from '@/lib/route-resolver';

/**
 * The brand reference index (manifest route OG-0007).
 *
 * The manifest row is explicit about this page: P1, "candidate;
 * unpublished until approved", and its meta brief says the page must not
 * claim verified suppliers, prices or delivery without records. The app
 * carries no brand data — the seed and the domain layer have no brand
 * register, and no owner-authorized brand evidence has been collected.
 *
 * Publishing a fabricated brand list would be exactly the defect class
 * the audit records: a page that asserts things the site does not have
 * records for. The honest treatment is the same one the 249 territory
 * registry pages use: a reachable reference shell that states what the
 * index is, what it will carry when the evidence exists, and what it
 * does not claim today, with noindex so the shell does not dilute crawl
 * budget the way an empty index would.
 *
 * Nothing on this page is a brand claim. Every external reference is a
 * named asset the site already carries (the directory, the product
 * family pages, the grade-label and price-baseline datasets, the market
 * surface), and each link is checked against the published-route
 * resolver so a dead href cannot render.
 */

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return (async () => {
    const { locale } = await params;
    const title =
      locale === 'ar'
        ? 'فهرس العلامات المرجعي — نطاق الفهرس وحدوده'
        : 'Brand Reference Index — the index scope and its limits';
    const description =
      locale === 'ar'
        ? 'صفحة مرجعية تنسب معلومات العلامات التجارية إلى أصحابها فقط. لا تحمل هذه الصفحة أي ادعاء علامة قبل توفر دليل معتمد، وهذا ما توضحه الصراحة أعلاه.'
        : 'A reference page that will attribute oud and fragrance brand claims to their owners only. It carries no brand claim until owner-authorized evidence exists, and it says so plainly rather than listing brands it cannot source.';
    return buildMetadata({
      path: `/${locale}/brands`,
      title,
      description,
      locale,
      // A shell with no records behind it must not ask a search engine
      // to index it: an empty index is the territory-page defect, and
      // noindex keeps the sitemap and the page's own metadata in step.
      noindex: true,
      alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/brands`,
    });
  })();
}

export default async function BrandsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === 'ar';

  // Every candidate link goes through the resolver; a null result drops
  // the link. The resolver is the site's no-broken-links rule.
  const candidates: { path: string; en: string; ar: string }[] = [
    {
      path: `/${locale}/directory`,
      en: 'The producer directory',
      ar: 'مؤشر الموردين',
    },
    {
      path: `/${locale}/products`,
      en: 'The product family index',
      ar: 'فهرس عائلات المنتجات',
    },
    {
      path: `/${locale}/market`,
      en: 'The market data surface',
      ar: 'سطح بيانات السوق',
    },
    {
      path: `/${locale}/guides/quality/grade-label-dataset`,
      en: 'The grade-label dataset',
      ar: 'مجموعة بيانات وسوم الدرجات',
    },
    {
      path: `/${locale}/guides/quality/gulf-price-baseline`,
      en: 'The price observation baseline',
      ar: 'خط أساس ملاحظات الأسعار',
    },
    {
      path: `/${locale}/for-businesses`,
      en: 'Join the directory as a business',
      ar: 'انضم إلى المؤشر كشركة',
    },
  ];

  const links = candidates
    .map((c) => {
      const href = resolvePublishedPath(c.path, locale);
      return href ? { href, label: isAr ? c.ar : c.en } : null;
    })
    .filter((l): l is { href: string; label: string } => Boolean(l));

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 960 }}>
        {/* BREADCRUMB */}
        <nav
          className="meta"
          style={{
            margin: '20px 0 16px',
            color: 'var(--ink-soft)',
            textTransform: 'none',
            letterSpacing: '0.02em',
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
          }}
        >
          <Link href={`/${locale}`}>{isAr ? 'الرئيسية' : 'Home'}</Link>
          <span>›</span>
          <span style={{ color: 'var(--ink)' }}>
            {isAr ? 'فهرس العلامات' : 'Brand Index'}
          </span>
        </nav>

        {/* MASTHEAD */}
        <section className="masthead" style={{ borderBottom: 'none', padding: '24px 0 28px' }}>
          <div className="masthead-inner">
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
              <span className="badge badge-forest">
                {isAr ? 'مرجع؛ غير مؤرشف بعد' : 'Reference; not yet indexed'}
              </span>
            </div>

            <h1>
              {isAr ? 'فهرس العلامات المرجعي' : 'Brand Reference Index'}
              <span className="accent">
                {isAr
                  ? 'صفحة نطاق، حتى يُبنى الفهرس على دليل أصحاب العلامات.'
                  : 'A scope page, until the index is built on owner-authorized evidence.'}
              </span>
            </h1>

            <p className="hero-lead">
              {isAr
                ? 'هذا الفهرس سيخصص ادعاءات علامات العود والعطور لأصحابها فقط. اليوم لا يحمل الموقع سجل علامات، ولا دليل معتمد من أصحابها، ولذلك لا يدرج هذه الصفحة أي علامة، ولا يدّعي أي مورد، أو سعر، أو تسليم. إدراج علامات بلا دليل هو نفس عيب التدوين الذي سجله التدقيق، ولهذا تبقى الصفحة صفحة نطاق تنسب كل شيء لأصله.'
                : 'This index will attribute oud and fragrance brand claims to their owners only. Today the site carries no brand register and no owner-authorized evidence, so this page lists no brand and claims no supplier, price or delivery. Listing brands without records is the defect the audit recorded, which is why the page is a scope statement that attributes everything to its source rather than a list it cannot back.'}
            </p>
          </div>
        </section>

        {/* WHAT THE INDEX WILL CARRY */}
        <div className="card-frame" style={{ padding: 28, marginBottom: 28 }}>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.05rem',
              fontWeight: 500,
              margin: '0 0 14px',
              borderBottom: '1px solid var(--line)',
              paddingBottom: 10,
            }}
          >
            {isAr ? 'ما سيحمله الفهرس' : 'What the index will carry'}
          </h3>
          <div className="grid-2" style={{ gap: 16 }}>
            {(
              [
                {
                  en: 'A brand entry with a named owner and the records that support it',
                  ar: 'مدخلة علامة بصاحبها المسمى والوثائق التي تدعمها',
                },
                {
                  en: 'The claims the owner authorizes: origin, form, treatment and process',
                  ar: 'الادعاءات التي يُصرّح بها المالك: المنشأ والشكل والمعالجة والعمية',
                },
                {
                  en: 'What each entry does not establish, stated the way the grade-label dataset states it',
                  ar: 'ما لا تثبته كل مدخلة، مقرّرة كما تقرره مجموعة بيانات وسوم الدرجات',
                },
                {
                  en: 'The link from the brand to the documented producer or the verified listing',
                  ar: 'الرابط من العلامة إلى المورّد الموثق أو التوثيق المعزّز',
                },
              ] as { en: string; ar: string }[]
            ).map((row) => (
              <div key={row.en}>
                <span className="data-card-fact-value" style={{ fontSize: '0.9rem' }}>
                  {isAr ? row.ar : row.en}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* WHAT IT DOES NOT CLAIM TODAY */}
        <div className="card-frame" style={{ padding: 28, marginBottom: 28, borderColor: 'var(--line-strong)' }}>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.05rem',
              fontWeight: 500,
              margin: '0 0 14px',
              borderBottom: '1px solid var(--line)',
              paddingBottom: 10,
            }}
          >
            {isAr ? 'ما لا يدّعيه اليوم' : 'What it does not claim today'}
          </h3>
          <div className="grid-3" style={{ gap: 16 }}>
            {(
              [
                {
                  en: 'No brand is listed without an owner-authorized record',
                  ar: 'لا تُدرج أي علامة دون سجل مُصرَّح من المالك',
                },
                {
                  en: 'No supplier, price or delivery claim is made on a brand entry',
                  ar: 'لا يُصنع ادعاء مورد أو سعر أو تسليم على مدخلة علامة',
                },
                {
                  en: 'A brand name on the market is not a record; the page says so, not around it',
                  ar: 'اسم علامة في السوق ليس سجلا؛ وتقول الصفحة ذلك لا تلمّح إليه',
                },
              ] as { en: string; ar: string }[]
            ).map((row) => (
              <div key={row.en}>
                <span className="data-card-fact-label">
                  {isAr ? 'لا' : 'No'}
                </span>
                <span className="data-card-fact-value" style={{ fontSize: '0.85rem' }}>
                  {isAr ? row.ar : row.en}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* DOCUMENTED REFERENCE ASSETS */}
        <div className="card-frame" style={{ padding: 28, marginBottom: 28 }}>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.05rem',
              fontWeight: 500,
              margin: '0 0 14px',
              borderBottom: '1px solid var(--line)',
              paddingBottom: 10,
            }}
          >
            {isAr ? 'أصول مرجعية موثقة' : 'Documented reference assets'}
          </h3>
          <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem', margin: '0 0 16px' }}>
            {isAr
              ? 'أصول تحملها الصفحة اليوم. كل رابط يمر بفاحص المسارات النشرة، فيُستبعد أي رابط ميت.'
              : 'The assets the page carries today. Every link passes the published-route resolver, so a dead href never renders.'}
          </p>
          <div className="grid-2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="card">
                <h3 style={{ fontSize: '0.95rem', margin: 0, color: 'var(--ink)' }}>
                  {l.label}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* NEXT STEP */}
        <div style={{ marginBottom: 44 }}>
          <span className="eyebrow">
            {isAr ? 'الخطوة العملية التالية' : 'Practical next step'}
          </span>
          <p style={{ maxWidth: 640, color: 'var(--ink-soft)' }}>
            {isAr
              ? 'إن كنت صاحب علامة في هذا المجال، فالمسار الموثق هو انضمام المؤشر كشركة؛ فالمالك يصرح بعلامة برهن يملكه، والادعاءات تُحفظ على أدلته. الفهرس يُبني على ذلك، لا قبله.'
              : 'If you own a brand in this field, the documented path is to join the directory as a business: the owner authorizes the claim with evidence they hold, and the claims are kept to their records. The index is built on that, not before it.'}
          </p>
        </div>
      </div>
    </div>
  );
}
