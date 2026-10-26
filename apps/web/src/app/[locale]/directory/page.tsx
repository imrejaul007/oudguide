import Link from 'next/link';
import { domain, directoryCounts } from '@/lib/data';
import { DirectoryBrowser, type DirectoryBusiness } from '@/components/business/directory-browser';
import { Compass, ShieldCheck, Map as MapIcon, Sparkles, Bookmark } from 'lucide-react';
import type { Metadata } from 'next';
import { buildMetadata, SITE_URL } from '@/lib/metadata';
import { jsonLdScript } from '@/lib/jsonld';
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
    title: isAr ? 'دليل المنتجين — مقطرون ومزارعون وموزعون' : 'Oud Producer Directory — Distillers & Wholesalers',
    description: isAr
      ? 'تصفح الموردين المسجلين حسب الصنف والدور والموقع والمنشأ والوجهة، مع حالة المراجعة لكل سجل وما ينشره المالك بإذنه.'
      : 'Browse listed suppliers by material family, role, location, origin and destination, with each record\'s review status and what its owner chose to publish.',
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

  // The public register excludes the development fixtures — the register
  // shows real, publishable records only.
  const businesses = domain.listBusinesses({ excludeDemo: true }) as unknown as DirectoryBusiness[];

  // Fixture records, shown in a labelled panel apart from the register so
  // a reader can see the depth of a fully documented profile without
  // mistaking them for live suppliers.
  const sampleRecords = (domain.listBusinesses() as unknown as DirectoryBusiness[]).filter(
    (b) => b.demo === true
  );

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

  /**
   * The directory's standing questions, answered in the language of the pages
   * that hold the full text. The block is visible on the page AND emitted as
   * a `FAQPage` schema, so the two agree: each answer restates a claim already
   * published on the ranking-policy, how-it-works or supplier-matching page
   * and links back to it. A question with no visible, policy-backed answer is
   * not added, because a schema claim must be something the page shows.
   */
  const faqItems: { question: string; answer: string; href: string }[] = [
    {
      question: isAr ? 'هل يستطيع مورد شراء موقع أفضل في الدليل؟' : 'Can a supplier buy a better position in the directory?',
      answer: isAr
        ? 'لا. الدليل لا يعمل ترتيباً مدفوعاً ولا توجد خانة مرعّاة ولا كتلة «مورد مميّز». داخل السجلات المطابقة للمرشِّحات، الترتيب هو ترتيب السجل نفسه. العضوية المدفوعة تنشر بيانات اتصال المورد على ملفه ولا ترفع السجل ولا تُقرأ عاملاً في الترتيب.'
        : 'No. The directory runs no paid ranking and has no sponsored slot or "featured supplier" block. Within the records that match your filters, the order is the order the register holds them in. A paid membership publishes the supplier\'s own contact details; it does not move the record up and is not read as a ranking factor.',
      href: `/${locale}/directory/ranking-policy`,
    },
    {
      question: isAr ? 'كيف تُفصَح عن العلاقة التجارية؟' : 'How is a commercial relationship disclosed?',
      answer: isAr
        ? 'يحمل الموقع علاقة تجارية واحدة مع عمل في سجله، وهي مُفصَحة في صفحة الملكية وفي سياسة الترتيب. أي إحالة إلى متجر ذلك العمل تُوَّسم بأنها إحالة تجارية أينما ظهرت، ولا تُستعمل في مسار استقبال الجملة، ولا تؤثر في ترتيب النتائج.'
        : 'The site holds one commercial relationship with a business in its register, disclosed on the ownership page and in the ranking policy. A referral to that business\'s retail site is labelled a commercial referral wherever it appears, is not used in the wholesale intake path, and does not affect the order of results.',
      href: `/${locale}/directory/ranking-policy`,
    },
    {
      question: isAr ? 'ما الفرق بين مرشِّحات الدليل الخمس؟' : 'What are the directory\'s five independent filters?',
      answer: isAr
        ? 'صنف المادة، ودور العمل، وموقعه، والمنشأ الذي يتعامل معه، والوجهات التي هو موثَّق بالشحن إليها، خمسة أسئلة مستقلة ولكلٍّ منها رابط خاص. دمجها في مرشِّح واحد هو ما جعل الدليل مضللاً سابقاً؛ فالشركة في دبي المتعاملة مع عود كمبودي لم تعد تظهر تحت إنتاج كمبوديا.'
        : 'Material family, business role, location, origin handled and destination served are five independent questions, and each has its own URL. Combining them into a single filter is what made the directory misleading before: a Dubai company handling Cambodian agarwood no longer appears under Cambodian production.',
      href: `/${locale}/directory/how-it-works`,
    },
    {
      question: isAr ? 'ماذا يُنشئ طلب الجملة وما لا يُنشئ؟' : 'What does a wholesale request create, and what does it not?',
      answer: isAr
        ? 'الطلب يذكر متطلّبا؛ ليس أمراً ولا عرضاً ولا ينشئ عقداً مع أي مورد. تُحدَّد بياناتك لمورد فقط بعد أن تعتمده بالاسم لهذا الطلب وللحقول والقناة التي وافقت عليها، ويمكنك سحب الموافقة، أما التقديم الذي أُرسل فلا يمكن سحبه.'
        : 'A request states a requirement. It is not an order, not an offer, and it does not create a contract with any supplier. Your details are released to a supplier only after you approve that supplier by name for that request and for the fields and channel you approved; you can withdraw the approval, but an introduction already sent cannot be recalled.',
      href: `/${locale}/how-supplier-matching-works`,
    },
  ];

  return (
    <div className="section">
      <div className="container">
        {/* STRUCTURED DATA — an ItemList of the suppliers the page renders
            plus a breadcrumb trail. Built from the same `businesses` array
            below, so the list can never name a record the page does not
            show. The directory index emitted no schema at all before. */}
        {(() => {
          const script = jsonLdScript(
            {
              path: `/${locale}/directory`,
              locale,
              title: isAr ? 'دليل المنتجين' : 'Producer Directory',
              description: isAr
                ? 'تصفح الموردين المسجلين حسب الصنف والدور والموقع والمنشأ والوجهة، مع حالة المراجعة لكل سجل وما ينشره المالك بإذنه.'
                : 'Browse listed suppliers by material family, role, location, origin and destination, with each record\'s review status and what its owner chose to publish.',
              breadcrumbs: [
                { label: isAr ? 'الرئيسية' : 'Home', href: `/${locale}` },
                { label: isAr ? 'دليل المنتجين' : 'Directory', href: `/${locale}/directory` },
              ],
              itemList: businesses.map((b) => ({
                label: b.name,
                href: `/${locale}/directory/${b.slug}`,
              })),
              // The FAQPage: one schema entry per visible question, each a
              // restatement of a claim the ranking-policy, how-it-works or
              // supplier-matching page already publishes. The visible block
              // below and this array are defined from the same `faqItems`,
              // so the schema can never carry a question the page does not
              // show — the module's own rule.
              faq: faqItems.map(({ question, answer }) => ({ question, answer })),
            },
            SITE_URL
          );
          return script ? (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: script }}
            />
          ) : null;
        })()}

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
              <Link href={`/${locale}/directory/map`} className="btn btn-primary btn-sm">
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
            businesses={businesses}
            samples={sampleRecords}
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

        {/* ABOUT THE DIRECTORY — standing questions, answered from the pages
            that hold the full text. Each answer restates a claim the
            ranking-policy, how-it-works or supplier-matching page already
            publishes and links back to it, so the visible block, the FAQPage
            schema (built from the same `faqItems`) and the policy copy stay
            in step. */}
        <section
          style={{ marginTop: 56, borderTop: '1px solid var(--line)', paddingTop: 40 }}
        >
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 500, margin: '0 0 6px' }}>
            {isAr ? 'سئلة يَطرحها المشترون' : 'Questions buyers ask'}
          </h3>
          <p style={{ color: 'var(--ink-soft)', fontSize: '0.92rem', margin: '0 0 22px' }}>
            {isAr
              ? 'إجابات موجزة، مع الربط إلى الصفحات التي تحمل النص الكامل. لا يطرح هنا سؤال بلا جواب موثَّق.'
              : 'Short answers, each linking to the page that holds the full text. No question is listed without a documented answer.'}
          </p>
          <div style={{ display: 'grid', gap: 26, gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))' }}>
            {faqItems.map((item) => (
              <div key={item.href}>
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    margin: '0 0 8px',
                  }}
                >
                  {item.question}
                </h4>
                <p style={{ color: 'var(--ink-soft)', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
                  {item.answer}{' '}
                  <Link
                    href={item.href}
                    style={{
                      color: 'var(--green-600)',
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {isAr ? 'اقرأ السياسة الكاملة' : 'Read the full policy'} →
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
