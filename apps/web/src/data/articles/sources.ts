import type { ArticleSource } from './types.ts';

/**
 * The verified source registry.
 *
 * OG-A18 asked for claim-specific sources; OG-A03 asked that no assurance
 * appear without a review record. Both are satisfied by keeping every
 * source in one place with an explicit statement of what it does and does
 * not establish.
 *
 * Rules for this registry:
 *
 *   - Every entry was fetched and read. A URL that could not be retrieved
 *     is not in the registry.
 *   - `scope` says what the source supports AND what it does not. A
 *     citation without a scope is decoration.
 *   - `kind` bounds how much weight a claim may carry. A trade article is
 *     not a regulatory instrument; a regulatory list is not a laboratory
 *     result.
 */
export const SOURCE_REGISTRY: Record<string, ArticleSource> = {
  IFRA_CERT: {
    id: 'IFRA_CERT',
    label: 'Certification of IFRA Standards',
    labelAr: 'شهادة المطابقة لمعايير IFRA',
    url: 'https://ifrafragrance.org/initiatives-positions/safe-use-fragrance-science/ifra-standards/certification-of-ifra-standards',
    publisher: 'International Fragrance Association',
    publisherAr: 'الجمعية الدولية للعطور',
    retrievedOn: '2026-10-20',
    scope:
      'Establishes that IFRA does not itself issue certificates of conformity with the IFRA Standards, does not create the certificates, and does not authorise any organisation to certify on its behalf. Independent third-party companies may provide certification. It does not establish that any particular product or supplier is compliant.',
    scopeAr:
      'يثبت أن IFRA لا تصدر هي بنفسها شهادات مطابقة لمعايير IFRA، ولا تنشئ الشهادات، ولا تفوّض أي جهة بالتصديق نيابةً عنها. ويمكن لشركات مستقلة أن تقدم الشهادة. ولا يثبت أن منتجاً أو مورداً بعينه مطابق.',
    kind: 'regulatory',
  },

  GOOGLE_SPAM: {
    id: 'GOOGLE_SPAM',
    label: 'Google Search Central — Spam policies',
    labelAr: 'سياسات جوجل للمحتوى المزعج',
    url: 'https://developers.google.com/search/docs/essentials/spam-policies',
    publisher: 'Google',
    publisherAr: 'جوجل',
    retrievedOn: '2026-10-20',
    scope:
      'Describes what Google means by scaled content abuse and other spam policies, including producing many pages intended to manipulate rankings rather than to help readers. It does not establish any status for this particular site.',
    scopeAr:
      'يوضّح ما يقصده جوجل بإساءة استخدام المحتوى المكبّر وباقي سياسات المزعج، بما فيها إنتاج صفحات كثيرة بقصد التأثير على الترتيب لا لمساعدة القارئ. ولا يثبت أي حالة لهذا الموقع تحديداً.',
    kind: 'regulatory',
  },

  GOOGLE_LINKS: {
    id: 'GOOGLE_LINKS',
    label: 'Google Search Central — Links and crawlable anchors',
    labelAr: 'روابط جوجل والنصوص المرجعية القابلة للزحف',
    url: 'https://developers.google.com/search/docs/crawling-indexing/links-crawlable',
    publisher: 'Google',
    publisherAr: 'جوجل',
    retrievedOn: '2026-10-20',
    scope:
      'Sets out that link text should describe the destination so that readers and crawlers can understand it. It does not establish the content quality of any page.',
    scopeAr:
      'يوضّح أن نص الرابط ينبغي أن يصف الوجهة ليصل إليه القارئ والزاحف. ولا يثبت جودة محتوى أي صفحة.',
    kind: 'regulatory',
  },

  GOOGLE_TITLE: {
    id: 'GOOGLE_TITLE',
    label: 'Google Search Central — Title links and your site',
    labelAr: 'روابط العناوين وموقعك لدى جوجل',
    url: 'https://developers.google.com/search/docs/appearance/title-link',
    publisher: 'Google',
    publisherAr: 'جوجل',
    retrievedOn: '2026-10-20',
    scope:
      'Explains how the title link is assembled from the page title, the site name and any breadcrumb, and that titles should be distinctive and descriptive. It does not guarantee a ranking outcome.',
    scopeAr:
      'يشرح كيف يُركَّب رابط العنوان من عنوان الصفحة واسم الموقع ومسار التنقّل، وأن العناوين يجب أن تكون مميّزة ووصفية. ولا يضمن نتيجة في الترتيب.',
    kind: 'regulatory',
  },

  AGARWOOD_CITES_2022: {
    id: 'AGARWOOD_CITES_2022',
    label: 'Biodiversity and application prospects of fungal endophytes in the agarwood-producing genera Aquilaria and Gyrinops (Thymelaeaceae): a review',
    labelAr: 'تنوّع الأحياء وفضائل الفطريات الداخلية في جنسَي العود Aquilaria وGyrinops: مراجعة',
    url: 'https://arabjchem.org/biodiversity-and-application-prospects-of-fungal-endophytes-in-the-agarwood-producing-genera-aquilaria-and-gyrinops-thymelaeaceae-a-review/',
    publisher: 'Arabian Journal of Chemistry (Elsevier)',
    publisherAr: 'المجلة العربية للكيمياء',
    retrievedOn: '2026-10-20',
    scope:
      'States that all members of the agarwood-producing genera Aquilaria and Gyrinops are placed in CITES Appendix II. Records 92 compounds identified in agarwood, of which terpenoids are 40.22%, and names eighteen fungal genera reported to promote agarwood formation. It does not establish the quality, yield or age of any material, and it is a review rather than a regulatory instrument.',
    scopeAr:
      'يفيد أن جميع أعضاء جنسَي العود Aquilaria وGyrinops مشمولون في ملحق سايتس الثاني. ويسجّل 92 مركباً عُرفت في العود، منها التيربينات 40.22%، ويسمّي ثمانية عشر جنساً فطرياً قيل إنه يعزّز تكوّن العود. ولا يثبت جودة أي مادة ولا مردودها ولا عمرها، وهو مراجعة لا أداة تنظيمية.',
    kind: 'primary',
  },

  AGARWOOD_REVIEW_2014: {
    id: 'AGARWOOD_REVIEW_2014',
    label: 'Agarwood: A review',
    labelAr: 'العود: مراجعة',
    url: 'https://repository.naturalis.nl/document/571032',
    publisher: 'International Journal of Forestry Research (Hindawi)',
    publisherAr: 'المجلة الدولية لأبحاث الغابات',
    retrievedOn: '2026-10-20',
    scope:
      'States that CITES Appendix II covers all species of Aquilaria and Gyrinops, and reports fifteen Aquilaria species distributed across the tropical and subtropical regions of Asia, from Pakistan and India through southern China into Southeast Asia. It does not establish the legal status of any individual shipment in any particular jurisdiction.',
    scopeAr:
      'يفيد أن ملحق سايتس الثاني يشمل جميع أنواع Aquilaria وGyrinops، ويذكر خمسة عشر نوعاً من Aquilaria موزعة في المناطق المدارية وشبه المدارية في آسيا، من باكستان والهند عبر جنوب الصين إلى جنوب شرق آسيا. ولا يثبت الوضع القانوني لشحنة بعينها في أي اختصاص قضائي.',
    kind: 'primary',
  },

  FAOLEX: {
    id: 'FAOLEX',
    label: 'FAOLEX — the FAO legal and policy database',
    labelAr: 'قاعدة FAOLEX القانونية والسياسية',
    url: 'https://faolex.fao.org',
    publisher: 'Food and Agriculture Organization of the United Nations',
    publisherAr: 'منظمة الأغذية والزراعة التابعة للأمم المتحدة',
    retrievedOn: '2026-10-20',
    scope:
      'Full-text legislative and policy documents relating to food, agriculture, forestry and trade from FAO member states. It establishes the published text of a national instrument. It does not establish how an instrument is enforced in practice.',
    scopeAr:
      'نصوص تشريعية وسياسية كاملة تتعلق بالأغذية والزراعة والغابات والتجارة من الدول الأعضاء في الفاو. وتثبت النص المنشور لأداة وطنية. ولا تثبت كيفية تطبيقها عملياً.',
    kind: 'regulatory',
  },
};

/**
 * Every source id used across the content layer.
 */
export function sourceIds(): string[] {
  return Object.keys(SOURCE_REGISTRY);
}

/**
 * Resolve a list of source ids to full source records.
 *
 * Throws when an id is unknown: an article that cites a source that does
 * not not exist is a defect, not a rendering edge case.
 */
export function resolveSources(ids: string[]): ArticleSource[] {
  return ids.map((id) => {
    const source = SOURCE_REGISTRY[id];
    if (!source) {
      throw new Error(`Unknown source id "${id}". Add it to SOURCE_REGISTRY before citing it.`);
    }
    return source;
  });
}
