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
    kind: 'internal',
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
    kind: 'internal',
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
    kind: 'internal',
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

  CITES_APPENDICES: {
    id: 'CITES_APPENDICES',
    label: 'CITES Appendices — what each listing requires for trade',
    labelAr: 'ملاحق سايتس — ما الذي يستلزمه كل إدراج في التجارة',
    url: 'https://www.fws.gov/international-affairs/cites/cites-appendices',
    publisher: 'U.S. Fish and Wildlife Service, International Affairs',
    publisherAr: 'إدارة الأسماك والحياة البرية الأمريكية والشؤون الدولية',
    retrievedOn: '2026-10-21',
    scope:
      'Establishes what each of the three CITES Appendices requires for trade. Appendix I: international trade is permitted only in exceptional circumstances and cannot be primarily for commercial use, and both an import and an export permit or re-export certificate are required. Appendix II: an export permit or re-export certificate from the country of export is required, and no import permit is needed unless a country\'s national law requires one. Appendix III: an export permit is required from the country that listed the species, and a certificate of origin is required for exports of a listed species from elsewhere. It does not name any particular species, it does not establish that a shipment complies, and it is not itself a permit.',
    scopeAr:
      'يثبت ما يستلزمه كل ملحق من ملاحق سايتس الثلاثة للتجارة. الملحق الأول:التجارة الدولية مسموح به في حالات استثنائية فقط ولا يجوز أن يكون في المقام الأول تجارياً، ويلزم تصريحا استيراد وتصدير أو شهادة إعادة تصدير. والملحق الثاني: يلزم تصريح تصدير أو شهادة إعادة تصدير من بلد التصدير، ولا يلزم تصريح استيراد إلا إذا اشترطته قوانين الدولة الوطنية. والملحق الثالث: يلزم تصريح تصدير من البلد الذي أدرج النوع، وتلزم شهادة منشأ لتصدير النوع المدرج من بلد آخر. ولا يسمّي أي نوع بعينه، ولا يثبت مطابقة شحنة، وليس تصريحاً بذاته.',
    kind: 'regulatory',
  },

  CITES_AGARWOOD_2004: {
    id: 'CITES_AGARWOOD_2004',
    label: 'ITTO — CITES COP examines agarwood',
    labelAr: 'المنظمة الدولية للأخشاب الاستوائية — مؤتمر سايتس يناقش العود',
    url: 'https://www.itto.int/news/2022/11/22/cites_cop_examines_agarwood_after_release_of_itto_cites_report/',
    publisher: 'International Tropical Timber Organization',
    publisherAr: 'المنظمة الدولية للأخشاب الاستوائية',
    retrievedOn: '2026-10-21',
    scope:
      'Establishes that all species of Aquilaria and Gyrinops have been listed in CITES Appendix II since 2004, and that the listing followed unsustainable extraction. Establishes that the report reviews wild and planted agarwood resources, processing technologies, products and regulatory practices, and that cultivation and inoculation of agarwood species are described as relieving pressure on wild populations in natural forests. It does not state what an Appendix II listing requires for trade, and it does not establish the origin, age or quality of any material.',
    scopeAr:
      'يثبت أن جميع أنواع جنسَي Aquilaria وGyrinops مدرجة في ملحق سايتس الثاني منذ عام 2004، وأن الإدراج جاء بعد استنزاف غير مستدام. ويثبت أن التقرير يراجع موارد العود البري والمزروع وتقنيات المعالجة والمنتجات والممارسات التنظيمية، وأن الزراعة والتلقيح في أنواع العود يوصفان بأنهما يخففان الضغط عن العود البري في الغابات الطبيعية. ولا يذكر ما يستلزمه الإدراج في الملحق الثاني من تصميم للتجارة، ولا يثبت منشأ أي مادة ولا عمرها ولا جودتها.',
    kind: 'trade',
  },

  IFRA_STANDARDS: {
    id: 'IFRA_STANDARDS',
    label: 'IFRA — Understanding the IFRA Standards',
    labelAr: 'IFRA — شرح معايير IFRA',
    url: 'https://ifrafragrance.org/understanding-standards',
    publisher: 'International Fragrance Association',
    publisherAr: 'الجمعية الدولية للعطور',
    retrievedOn: '2026-10-21',
    scope:
      'Establishes that the IFRA Standards operate through three kinds of control — prohibition of a material, restriction of the maximum quantity used, and specification of conditions on a material — and that quantitative limits are expressed as an upper concentration in the finished consumer product rather than in the fragrance mixture. Establishes that product types are set out in the guidance documents and that the applicable category is determined from the product\'s intended use. Establishes that IFRA itself does not issue certificates, does not authorise any third party to certify on its behalf, does not certify products, and that a Certificate of Conformity does not replace a safety assessment. It does not establish the safety of any particular product, the concentration of any material in any product, or compliance by any named supplier.',
    scopeAr:
      'يثبت أن معايير IFRA تعمل بثلاثة أنواع من التحكم — منع مادة، وتقييد أقصى كمية تستعمل، ومواصفات شروط على مادة — وأن الحدود الكمية تُحدَّد كحدّ أعلى لتركيز المادة العطرية في المنتج النهائي لا في الخصلة العطرية. ويثبت أن أنواع المنتجات مثبتة في أدلة المعايير وأن الفئة المنطبقة تُحدَّد من الاستخدام المقصود للمنتج. ويثبت أن IFRA لا تصدر هي شهادات ولا تفوّض أي طرف ثالث بالتصديق نيابةً عنها ولا تصدّق المنتجات، وأن شهادة المطابقة لا تُغني عن تقييم السلامة. ولا يثبت سلامة أي منتج بعينه ولا تركيز أي مادة في أي منتج ولا مطابقة أي مورد بعينه.',
    kind: 'regulatory',
  },

  IFRA_LIBRARY: {
    id: 'IFRA_LIBRARY',
    label: 'IFRA — Standards library',
    labelAr: 'IFRA — مكتبة المعايير',
    url: 'https://ifrafragrance.org/standards-library',
    publisher: 'International Fragrance Association',
    publisherAr: 'الجمعية الدولية للعطور',
    retrievedOn: '2026-10-21',
    scope:
      'Establishes that the IFRA Standards are held in a searchable database and that each record can be filtered by control type — restriction, specification or prohibition — as well as by amendment, CAS number and status. It is the place a specific limit is looked up. It does not establish which category a product belongs to, and it does not establish that any finished product conforms to any standard.',
    scopeAr:
      'يثبت أن معايير IFRA محفوظة في قاعدة بيانات قابلة للبحث، وأن كل سجل يمكن ترشيحه بنوع التحكم — تقييد أو مواصفة أو منع — وبالتعديل وبالرقم الكيميائي وبالحالة. وهو المكان الذي يُبحث فيه عن حدّ بعينه. ولا يثبت أي فئة ينتمي إليها منتج، ولا يثبت مطابقة أي منتج منتهٍ لأي معيار.',
    kind: 'regulatory',
  },

  IFRA_APPLYING: {
    id: 'IFRA_APPLYING',
    label: 'IFRA — Using the IFRA Standards',
    labelAr: 'IFRA — استعمال معايير IFRA',
    url: 'https://ifrafragrance.org/using-the-standards',
    publisher: 'International Fragrance Association',
    publisherAr: 'الجمعية الدولية للعطور',
    retrievedOn: '2026-10-21',
    scope:
      'Establishes that conformity for a fragrance mixture\'s intended use is established by the fragrance-mixture formulator or supplier, that a Certificate of Conformity applies exclusively to fragrance mixtures intended for incorporation into finished consumer products, and that IFRA Certificates are generally not issued for raw materials. Establishes that the final decision and responsibility for the finished product lies with the end consumer product manufacturer, and that conformity with the Standards does not exempt a company from applicable national or local regulation. It does not establish that any named supplier holds a certificate, nor what any certificate says about a finished product.',
    scopeAr:
      'يثبت أن مطابقة الخصلة العطرية لاستخدامها المقصود يثبتها مُركِّب الخصلة العطرية أو مورّدها، وأن شهادة المطابقة تنطبق حصراً على الخصلات العطرية المزمع إدخالها في منتجات استهلاكية منتهية، وأن شهادات IFRA لا تُصدر عادةً للمواد الخام. ويثبت أن القرار النهائي والمسؤولية عن المنتج المنتهي تقعان على الشركة المصنّعة للمنتج الاستهلاكي النهائي، وأن المطابقة مع المعايير لا تعفي الشركة من الأنظمة الوطنية أو المحلية المنطبقة. ولا يثبت أن أي مورد بعينه يحمل شهادة، ولا ما تقوله شهادة عن منتج منتهٍ.',
    kind: 'regulatory',
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
