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

  ITTO_AGARWOOD_REVIEW: {
    id: 'ITTO_AGARWOOD_REVIEW',
    label: 'Expensive, Exploited and Endangered — a review of the agarwood-producing genera Aquilaria and Gyrinops',
    labelAr: 'باهظ الثمن، يُستغلّ ويُهدَّد — مراجعة لجنسَي العود المنتِجة: Aquilaria وGyrinops',
    url: 'https://cites-tsp.org/sites/default/files/resources_files/2022-12/Review_of_the_agarwood_producing_genera.pdf',
    publisher: 'International Tropical Timber Organization (ITTO), Technical Series No. 51',
    publisherAr: 'المنظمة الدولية للتجارة الخشبية (ITTO)، السلسلة الفنية رقم 51',
    retrievedOn: '2026-10-21',
    scope:
      'Table 1 lists the accepted Aquilaria and Gyrinops species with their IUCN Red List status and their range states, drawn from the IUCN Red List, the cited 2021 and 2022 species assessments, and the Kew Plants of the World Online checklist. The summary establishes that all members of both genera (at least 28 species) are in CITES Appendix II, that A. malaccensis was listed in 1995 and the other species were added in 2005, that the major Aquilaria exporters are Indonesia, Malaysia and Thailand, that more than 98% of the material exported from Malaysia and Indonesia is wild stock while the wood from Thailand is all plantation origin, that the main Gyrinops exporters are Indonesia (including Papua) and Sri Lanka, that plantation agarwood is reported to be of inferior quality and worth less than wild material, and that the global industry has been estimated at more than USD 30 billion with a litre of oil at USD 40,000-50,000. It also states the grading systems in use (Malaysia twelve grades, Indonesia nine, a separate Chinese guide), that the industry still lacks a global grading standard based on quantifiable indicators, and that the taxonomy of the two genera is not settled and requires reassessment. It does not establish the quality or grade of any individual lot, does not establish the price of any particular material, and does not establish that material from a given range state was produced there rather than traded through it.',
    scopeAr:
      'يورد الجدول الأول الأنواع المقبولة من Aquilaria وGyrinops مع حالة كل نوع في القائمة الحمراء (IUCN) ودول انتشاره، مستنداً إلى القائمة الحمراء IUCN وتقديرات الأنواع المذكورة لعامي 2021 و2022 وقائمة كيو النباتات. ويثبت الملخص أن جميع أعضاء الجنسين (لا يقل عن 28 نوعاً) في ملحق سايتس الثاني، وأن A. malaccensis أُدرج عام 1995 وأُضيفت الأنواع الأخرى عام 2005، وأن المصدّرين الرئيسيين لـ Aquilaria هم إندونيسيا وماليزيا وتايلاند، وأن أكثر من 98٪ من المواد المصدَّرة من ماليزيا وإندونيسيا برية بينما كل خشب تايلاند مزروع، وأن المصدّرين الرئيسيين لـ Gyrinops هما إندونيسيا (بما فيها بابوا) وسريلانكا، وأن عود المزارع يوصف بأنه أقل جودةً وأقل قيمة من البرّي، وأن قيمة القطاع العالمي تقدّرت بأكثر من 30 مليار دولار ولتر الزيت بـ 40,000-50,000 دولار. ويذكر أيضاً أنظمة التقييم المستعملة (ماليزيا اثنتا عشرة درجة، إندونيسيا تسع، ودليل صيني مستقل)، وأن القطاع ما يزال يفتقر إلى معيار تقييم عالمي قائم على مؤشرات قابلة للقياس، وأن تصنيف الجنسين غير مستقر ويحتاج إلى إعادة نظر. ولا يثبت جودة أو درجة أي لوط بعينه، ولا يثبت سعر أي مادة بعينها، ولا يثبت أن مادة من دولة انتشار قد أُنتجت فيها بدل أن تمرّ بها.',
    kind: 'primary',
  },

  TRAFFIC_AGARWOOD_TRADE_2000: {
    id: 'TRAFFIC_AGARWOOD_TRADE_2000',
    label: 'Heart of the matter: agarwood use and trade and CITES implementation for Aquilaria malaccensis',
    labelAr: 'قلب المسألة: استعمال العود وتجارة العود وتنفيذ سايتس لـ Aquilaria malaccensis',
    url: 'https://www.traffic.org/site/assets/files/9731/agarwood-use-and-trade-and-cites-implementation.pdf',
    publisher: 'TRAFFIC International',
    publisherAr: 'منظمة ترافيك الدولية',
    retrievedOn: '2026-10-21',
    scope:
      'A 2000 review of the agarwood trade and of CITES implementation, covering the range States, the trade, the national legal position in each range State, and the import controls of the consuming markets. It supplies the export figures by country and year compiled from Taiwan Customs data for 1993 to 1998 (in pieces, which is how the source database recorded them), and it records the finding that Bhutan and Lao PDR are not CITES Parties. It records that A. malaccensis is native to nine north-eastern Indian states, that the A. crassna listing proposal was submitted by Thailand, and that CITES import permits for A. malaccensis in the importing markets examined require a prior export or re-export permit. It also records the reported prevalence of illegal harvesting and cross-border movement, which is a trade-compliance finding and not a legal determination. The figures are historical and the trade has changed since: the document predates the 2005 extension of the Appendix II listing to all remaining species, and its year-by-year figures must not be read as current. It does not establish the current state of any range State, the current export position of any country, or the legal position of any shipment.',
    scopeAr:
      'مراجعة من عام 2000 لتجارة العود وتنفيذ سايتس، تغطي دول الانتشار، والتجارة، والموقف القانوني الوطني في كل دولة من دول الانتشار، وضوابط الاستيراد في أسواق الاستهلاك التي دُرست. وتقدّم أرقام التصدير بحسب الدولة والسنة مجمَّعة من بيانات الجمارك التايبانية للفترة 1993-1998 (بمقاس القطع، وهو ما سجّلته قاعدة البيانات الأصلية)، وتسجّل أن بوتان وجمهورية لاوس ليستا طرفاً في سايتس. كما تسجّل أن A. malaccensis أصيلة في ولايات هند الشمالية الشرقية التسع، وأن اقتراح إدراج A. crassna قدّمته تايلاند، وأن تصاريح استيراد سايتس لـ A. malaccensis في أسواق الاستيراد التي دُرست تتطلب تصريح تصدير أو إعادة تصدير سابقاً. وتسجّل كذلك الانتشار المُبلَّغ عن الجمع غير المشروع وحركة عبر الحدود، وهو نتيجة في الالتزام التجاري لا تحديد قانوني. والأرقام تاريخية وتغيرت التجارة منذ ذلك الحين: فالمستند يسبق توسيع إدراج الملحق الثاني في 2005 ليشمل بقية الأنواع، ولا يصح قراءة أرقامه السنوية كحالية. ولا يثبت الحالة الراهنة لأي دولة انتشار، ولا وضع التصدير الحالي لأي بلد، ولا الوضع القانوني لأي شحنة.',
    kind: 'trade',
  },

  TRAFFIC_UAE_AGARWOOD_TRADE: {
    id: 'TRAFFIC_UAE_AGARWOOD_TRADE',
    label: 'The trade and use of agarwood (oudh) in the United Arab Emirates',
    labelAr: 'تجارة العود واستعماله في دولة الإمارات العربية المتحدة',
    url: 'https://www.trafficj.org/publication/10_Trade_Use_Agarwood.pdf',
    publisher: 'TRAFFIC International, with the UAE Ministry of Environment and Water',
    publisherAr: 'منظمة ترافيك الدولية، بالتعاون مع وزارة البيئة والمياه في دولة الإمارات',
    retrievedOn: '2026-10-21',
    scope:
      'A 2010 study of the agarwood trade and use in the United Arab Emirates, based on interviews with traders, the UAE CITES authorities, Dubai customs and retail survey work. It establishes the import and re-export structure: the UAE and Saudi Arabia are the two dominant Middle Eastern markets; Saudi Arabia is the largest recipient of agarwood re-exported from the UAE, followed by Kuwait and Qatar, which is the entrepôt role the UAE plays; the UAE market has no registered association of importers or traders and little information exchange between companies; the UAE CITES Annual Report submissions began in 2004 and reported chip imports rose from over 56 tonnes in 2004 to more than 162 tonnes in 2007; a CITES export permit is required before a CITES-listed product such as agarwood may be imported, and a UAE import permit is also required; the customs treatment applies a 5% duty on the value of agarwood imports where a customs officer detects them. It also records that the same grade from different origins may carry different value in the market, and gives the 2005-2007 retail price ranges per kilogram in AED. The study is dated 2010 and its price data is from 2005-2007, so it establishes market structure and the import-control regime rather than any current price or current volume. It does not establish who may legally ship into any particular market today, and it does not establish the quality or authenticity of any material.',
    scopeAr:
      'دراسة عام 2010 لتجارة العود واستعماله في دولة الإمارات العربية المتحدة، قائمة على مقابلات مع التجار وسلطات سايتس في الدولة وجمارك دبي ومسح ميداني للمتاجر. وتثبّت بنية الاستيراد وإعادة التصدير: فإن الإمارات والسعودية هما السوقان المهيمنان في الشرق الأوسط؛ والسعودية أكبر متلقٍّ للمنتجات المُعاد تصديرها من الإمارات، تليها الكويت وقطر، وهو دور الوسيط الذي تلعبه الإمارات؛ وسوق الإمارات لا يجتمع له أي جمعية مسجَّلة للموردين أو المتجرين، والتبادل المعلوميات بين الشركات ضعيف؛ وقد بدأت الإمارات في تقديم تقارير سايتس السنوية منذ 2004، وبلغت واردات الرقائق وحدها أكثر من 56 طناً في 2004 وأكثر من 162 طناً في 2007؛ ويلزم تصريح تصدير من سايتس قبل استيراد منتج مدرج مثل العود، كما يلزم تصريح استيراد من الإمارات؛ ويطبّق التعريف الجمركي ضريبة بنسبة 5% على قيمة الواردات من العود عند اكتشاف الضابط الجمركي لها. وتسجّل كذلك أن الدرجة نفسها من مصادر مختلفة قد تحمل قيمة مختلفة في السوق، وتورد نطاقات أسعار التجزئة للكيلوجرام بالدرهم في 2005-2007. والدراسة مؤرخة 2010 وبيانات أسعارها من 2005-2007، فهي تثبّت بنية السوق ونظام ضوابط الاستيراد لا أي سعر أو حجم حالياً. ولا تثبت من يحق له الشحن قانوناً إلى أي سوق اليوم، ولا تثبت جودة أو أصالة أي مادة.',
    kind: 'trade',
  },

  TRAFFIC_PNG_AGARWOOD: {
    id: 'TRAFFIC_PNG_AGARWOOD',
    label: 'Sustainable management of Papua New Guinea\'s agarwood resource',
    labelAr: 'الإدارة المستدامة لمورد العود في بابوا غينيا الجديدة',
    url: 'https://www.traffic.org/site/assets/files/9739/sustainable-management-of-papua-new-guineas-agarwood.pdf',
    publisher: 'TRAFFIC International',
    publisherAr: 'منظمة ترافيك الدولية',
    retrievedOn: '2026-10-21',
    scope:
      'A study of the agarwood (gaharu) resource in Papua New Guinea, covering the harvesting and trade in the country, the species recorded, the scale of the export trade, and the management proposals that followed. It establishes that the country was one of the major exporters of agarwood in international trade, that the material was recorded under the name Aquilaria malaccensis in trade even where the producing species were Gyrinops, and that the principal market for the material was the Middle East. It documents the harvest and trading arrangements and the pressure on the resource. It is a study of a national situation at a particular time and does not establish the current export position, the current species composition, or the legal status of any present-day shipment.',
    scopeAr:
      'دراسة لمورد العود (غاهارو) في بابوا غينيا الجديدة، تغطي الجمع والتجارة في البلاد، والأنواع المسجَّلة، وحجم التجارة التصديرية، والمقترحات الإدارية التي تلت ذلك. وتثبّت أن كانت البلاد من المصدّرين الكبار للعود في التجارة الدولية، وأن المادة سُجِّلت في التجارة باسم Aquilaria malaccensis حتى حيث كانت الأنواع المنتِجة من Gyrinops، وأن السوق الرئيسي للمادة كان الشرق الأوسط. وتوثّق ترتيبات الجمع والتجارة والضغط على المورد. وهي دراسة لحالة وطنية في زمن معيَّن، ولا تثبت وضع التصدير الحالي ولا تركيب الأنواع اليوم ولا الوضع القانوني لأي شحنة حالية.',
    kind: 'trade',
  },

  POWO_AQUILARIA_CRASSNA: {
    id: 'POWO_AQUILARIA_CRASSNA',
    label: 'Aquilaria crassna Pierre ex Lecomte — Plants of the World Online',
    labelAr: 'Aquilaria crassna — نباتات العالم عبر الإنترنت',
    url: 'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:837976-1',
    publisher: 'Royal Botanic Gardens, Kew',
    publisherAr: 'الحدائق النباتية الملكية، كيو',
    retrievedOn: '2026-10-21',
    scope:
      'The accepted taxonomic record for Aquilaria crassna Pierre ex Lecomte, published in Bulletin de la Société Botanique de France 61: 411 (1914). It establishes the accepted name, the valid publication, and the native range as Indo-China — Cambodia, Laos, Myanmar, Thailand and Vietnam — with the species a tree of the wet tropical biome. It does not establish that agarwood is harvested in any of those countries now, that any lot came from any of them, or the commercial standing of the species. PROVENANCE: this record was read through a research tool on 21 October 2026. A direct request to the URL returns 403, so unlike the other entries here it was not retrieved by a plain fetch. The species range it carries is also given by ITTO_AGARWOOD_REVIEW, whose first table gives every accepted species with its range states, and no claim rests on this entry alone.',
    scopeAr:
      'السجل التصنيفي المقبول للنوع Aquilaria crassna، المنشور في مجلة الجمعية البوتانية الفرنسية، المجلد 61، صفحة 411، سنة 1914. ويثبت الاسم المقبول ونشره الصحيح والنطاق الأصلي وهو إندون-الصين — كمبوديا ولاوس وميانمار وتايلاند وفيتنام — والنوع شجرة في الحيزي المداري الرطب. ولا يثبت أن العود يُجمع في أي من تلك البلدان الآن، ولا أن أي لوط جاء منها، ولا أي قيمة تجارية للأنواع. وقد قُرئ هذا السجل عبر أداة بحث في 21 أكتوبر 2026، فالطلب المباشر إلى الرابط يعيد خطأ 403، فلم يُسترجع هذا السجل بطلب عادي على نحو بقية المدخلات. والنطاق الجغرافي الذي يحمله يورده أيضاً مرجع مراجعة الأنواع في جدوله الأول، فلا يستند ادعاء إلى هذا المدخل وحده.',
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
