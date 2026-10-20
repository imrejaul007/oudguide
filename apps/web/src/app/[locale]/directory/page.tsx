import Link from 'next/link';
import { domain, directoryCounts } from '@/lib/data';
import { DirectoryBrowser } from '@/components/business/directory-browser';
import { Compass, ShieldCheck, Map as MapIcon, Sparkles, Bookmark } from 'lucide-react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { pick } from '@/lib/copy/policy';
import { contactPolicyCopy } from '@/lib/copy/policy';

/**
 * The directory index.
 *
 * Two audit findings are addressed here.
 *
 * OG-A09 asked for independent geography and role discovery. The filters
 * are independent: a product family, a business role, a country the
 * business is located in, an origin the business handles, and a
 * destination the business serves are five separate questions.
 *
 * OG-A15 asked that product families not collapse into one role query.
 * The `family` selector is read from the URL here and passed to the
 * browser, so a link that carries a family arrives at a filtered result.
 *
 * The coverage count is stated rather than smoothed over: a directory
 * that shows one record must say one, not three.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';

  return buildMetadata({
    path: `/${locale}/directory`,
    title: isAr ? 'دليل المنتجين — مقطرون ومزارعون وموزعون' : 'Producer Directory — Distillers, Plantations and Wholesalers',
    description: isAr
      ? 'تصفح الموردين المسجلين حسب الصنف والدور والموقع والمنشأ والوجهة، مع حالة المراجعة لكل سجل وما ينشره المالك بإذنه.'
      : 'Browse listed suppliers by material family, business role, location, material origin and destination served, with each record\'s review status and what its owner has chosen to publish.',
    locale,
    alternateLocalePath: `/${locale === 'ar' ? 'en' : 'ar'}/directory`,
  });
}

export default async function DirectoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{
    country?: string;
    role?: string;
    search?: string;
    family?: string;
    origin?: string;
    destination?: string;
  }>;
}) {
  const { locale } = await params;
  const { country, role, search, family, origin, destination } = await searchParams;
  const isAr = locale === 'ar';

  // The public register excludes the development fixtures.
  const businesses = domain.listBusinesses({ excludeDemo: true });

  return (
    <div className="section">
      <div className="container">
        <section className="masthead">
          <div className="masthead-inner">
            <div className="hero-tag">
              <Compass size={13} />
              <span>{isAr ? 'دليل المنتجين' : 'The producer directory'}</span>
            </div>
            <h1>
              {isAr ? 'دليل موردي العود' : 'The directory of oud suppliers'}
              <span className="accent">
                {isAr
                  ? `${directoryCounts.published} سجلاً منشوراً · ${directoryCounts.inResearchReview} قيد المراجعة`
                  : `${directoryCounts.published} published record${directoryCounts.published === 1 ? '' : 's'} · ${directoryCounts.inResearchReview} in research review`}
              </span>
            </h1>
            <p className="hero-lead">
              {isAr
                ? 'ينما الدليل سجلاً حقيقياً في كل مرة يُوثَّق فيه مورد. يُستبعد من العرض أي سجل لم يجتز المراجعة، ويذكر العدد ما هو منشور وما هو قيد المراجعة.'
                : 'The directory grows by one record each time a supplier is documented. A record that has not been through review is not shown, and the count states what is published against what is still in review.'}
            </p>

            <div className="cluster" style={{ marginTop: 24, gap: 10 }}>
              <Link href={`/${locale}/directory/map`} className="btn btn-gold btn-sm">
                <MapIcon size={14} />
                {isAr ? 'خريطة المنتجين' : 'Producer map'}
              </Link>
              <Link href={`/${locale}/sourcing`} className="btn btn-outline btn-sm">
                <Sparkles size={14} />
                {isAr ? 'مساعد التوريد' : 'Sourcing assistant'}
              </Link>
              <Link href={`/${locale}/shortlist`} className="btn btn-outline btn-sm">
                <Bookmark size={14} />
                {isAr ? 'قائمة الحفظ' : 'Shortlist'}
              </Link>
            </div>

            <div className="privacy-shield" style={{ marginTop: 28 }}>
              <ShieldCheck size={24} className="privacy-shield-icon" />
              <div className="privacy-shield-body">
                <h4>{isAr ? 'ما يظهر في الملفات الأساسية' : 'What a basic profile shows'}</h4>
                <p>{pick(contactPolicyCopy.basicProfile, locale)}</p>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <div style={{ marginTop: 48 }}>
          <DirectoryBrowser
            businesses={businesses as any}
            locale={locale}
            isAr={isAr}
            initialSearch={search ?? ''}
            initialCountry={country ?? ''}
            initialFamily={family ?? 'all'}
          />
        </div>
      </div>
    </div>
  );
}
