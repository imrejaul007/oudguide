import Link from 'next/link';
import { domain, directoryCounts } from '@/lib/data';
import { DirectoryBrowser } from '@/components/business/directory-browser';
import { Compass, ShieldCheck, Map as MapIcon, Sparkles, Bookmark } from 'lucide-react';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { countryCodeForSlug, countryNamesFor, countrySlugForCode } from '@/lib/country-registry';
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
    city?: string;
    area?: string;
  }>;
}) {
  const { locale } = await params;
  const { country, role, search, family, origin, destination, city, area } =
    await searchParams;
  const isAr = locale === 'ar';

  // The public register excludes the development fixtures.
  const businesses = domain.listBusinesses({ excludeDemo: true });

  /**
   * The country filters arrive as slugs and the records carry codes.
   *
   * `/en/directory/wholesalers/in/united-arab-emirates` carries a slug;
   * the record's `country_id` is "AE". Comparing them raw finds
   * nothing, so the slug is resolved here, on the server, and the code
   * is what reaches the browser. A slug that resolves to no country is
   * dropped rather than passed on, so a hand-edited URL cannot put the
   * listing into a state the directory cannot explain.
   */
  const countryCode = country ? countryCodeForSlug(country) : null;
  const destinationCode = destination ? countryCodeForSlug(destination) : null;

  /**
   * The name of the country the path names, in the reader's language.
   */
  const locationName = countryCode ? countryNamesFor(countryCode) : null;


  /**
   * The names of the countries the published records serve.
   *
   * The destination filter is an ISO2 code and the record is the only
   * thing that holds it, so the chip that offers it needs a name. The
   * registry resolves it on the server rather than shipping 249
   * territories into the browser bundle.
   */
  const destinationCountries = Array.from(
    new Set(businesses.flatMap((b) => b.serves_destinations ?? []))
  )
    .map((code) => countryNamesFor(code))
    .filter((c): c is { en: string; ar: string; iso2: string } => Boolean(c))
    .map((c) => ({ key: c.iso2, label: c.en, labelAr: c.ar }));

  /**
   * The countries the published records are located in.
   *
   * The location filter is an ISO2 code, because the record carries one.
   */
  const locationCountries = Array.from(
    new Set(businesses.map((b) => b.country_id).filter(Boolean))
  )
    .map((code) => countryNamesFor(code))
    .filter((c): c is { en: string; ar: string; iso2: string } => Boolean(c))
    .map((c) => ({ key: c.iso2, label: c.en, labelAr: c.ar }));

  /**
   * The countries the published records handle material from.
   *
   * The origin filter is a SLUG, because the published path carries one
   * — /en/directory/wholesalers/by-origin/cambodia — and the record
   * states its origins as display strings that carry the region too
   * ("Cambodia (Koh Kong)"). The country part of the string is the slug.
   */
  const originCountries = Array.from(
    new Set(
      businesses.flatMap((b) =>
        (b.handles_origins ?? []).map((o) => {
          const country = o.split('(')[0]?.trim() ?? o;
          return country.toLowerCase().replace(/\s+/g, '-');
        })
      )
    )
  )
    .map((slug) => countryNamesFor(slug))
    .filter((c): c is { en: string; ar: string; iso2: string } => Boolean(c))
    .map((c) => ({
      key: countrySlugForCode(c.iso2) ?? c.iso2.toLowerCase(),
      label: c.en,
      labelAr: c.ar,
    }));

  /**
   * The cities the published records are in.
   *
   * The registry is a country register and carries no city names, so a
   * city's name comes from the record that states it. The slug is
   * derived from the name, and it is the slug the published paths carry.
   */
  const cityOptions = Array.from(
    new Set(businesses.map((b) => (b.city ?? '').trim()).filter(Boolean))
  ).map((city) => ({
    key: city.toLowerCase().replace(/\s+/g, '-'),
    label: city,
    // The registry carries no Arabic city names, so the city is shown as
    // the record writes it rather than invented in Arabic.
    labelAr: city,
  }));

  /**
   * The display name for each location code, for the badge that states
   * the active filter.
   */
  const locationNames: Record<string, string> = {
    ...Object.fromEntries(locationCountries.map((c) => [c.key, c.label])),
    /**
     * The country the PATH names, even when no published record sits
     * there.
     *
     * `locationCountries` is built from the records, so it only holds
     * the countries a business is actually in. A path like
     * /en/directory/wholesalers/in/india names a country the register
     * has nobody in, and without this the chip fell back to the raw
     * code and read "Located in: IN" — a code, not a place, on a
     * published page a reader can arrive at from a search result.
     */
    ...(countryCode && locationName
      ? { [countryCode]: locationName.en }
      : {}),
  };

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
            initialCountry={countryCode ?? ''}
            initialFamily={family ?? 'all'}
            initialRole={role ?? ''}
            initialCity={city ?? ''}
            initialArea={area ?? ''}
            initialOrigin={origin ?? ''}
            initialDestination={destinationCode ?? ''}
            locationCountries={locationCountries}
            cityOptions={cityOptions}
            originCountries={originCountries}
            destinationCountries={destinationCountries}
            locationNames={locationNames}
          />
        </div>
      </div>
    </div>
  );
}
