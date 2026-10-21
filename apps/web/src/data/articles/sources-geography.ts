import type { ArticleSource } from './types.ts';

/**
 * Sources for the geography lane.
 *
 * These are kept in their own module because the geography content
 * (fourteen origin countries, forty origin regions, thirty-five
 * destination buying guides and five origin comparisons) rests on a
 * different body of evidence from the rest of the corpus, and a
 * separate file keeps that difference legible:
 *
 *   - The rest of the corpus draws on botanical and trade-lit review
 *     articles and on the IFRA and CITES regulatory pages.
 *   - The geography lane draws on the primary trade records: the CITES
 *     Review of Significant Trade, the ITTO review of the two genera,
 *     and the two TRAFFIC studies of the agarwood trade.
 *
 * The rules the main registry follows apply here unchanged. Every
 * source below was fetched and read on 21 October 2026. Every `scope`
 * states what the source establishes AND what it does not, because a
 * citation without a scope is decoration — and because the geography
 * pages are exactly where a reader would be misled by an unstated
 * limit: a species range is not a production record, an export figure
 * is not a quality claim, and a re-export route is not a growing
 * region.
 *
 * `kind` bounds how much weight a claim may carry:
 *
 *   - `primary`   — the instrument or the study itself.
 *   - `regulatory` — an official list, register or legal text.
 *   - `trade`     — published trade literature. Useful and citable,
 *                   but a trade study is not a legal record and not a
 *                   scientific result.
 */

/**
 * The ITTO review of the two genera.
 *
 * This is the single most useful document for the geography lane,
 * because its first table is a species-by-range-state table with the
 * IUCN status of each species. It is also the document that states
 * the shape of the trade: which countries export, what proportion is
 * plantation origin, and what is not yet settled.
 */
export const GEOGRAPHY_SOURCES: Record<string, ArticleSource> = {
  ITTO_AGARWOOD_REVIEW: {
    id: 'ITTO_AGARWOOD_REVIEW',
    label: 'Expensive, Exploited and Endangered — a review of the agarwood-producing genera Aquilaria and Gyrinops',
    labelAr:
      'باهظ الثمن، يُستغلّ ويُهدَّد — مراجعة لجنسَي العود المنتِجة: Aquilaria وGyrinops',
    url: 'https://cites-tsp.org/sites/default/files/resources_files/2022-12/Review_of_the_agarwood_producing_genera.pdf',
    publisher: 'International Tropical Timber Organization (ITTO), Technical Series No. 51',
    publisherAr: 'المنظمة الدولية للتجارة الخشبية (ITTO)، السلسلة الفنية رقم 51',
    retrievedOn: '2026-10-21',
    scope:
      'Table 1 lists the accepted Aquilaria and Gyrinops species with their IUCN Red List status and their range states, drawn from the IUCN Red List, the cited 2021 and 2022 species assessments, and the Kew Plants of the World Online checklist. The summary establishes that all members of both genera (at least 28 species) are in CITES Appendix II, that A. malaccensis was listed in 1995 and the other species were added in 2005, that the major Aquilaria exporters are Indonesia, Malaysia and Thailand, that more than 98% of the material exported from Malaysia and Indonesia is wild stock while the wood from Thailand is all plantation origin, that the main Gyrinops exporters are Indonesia (including Papua) and Sri Lanka, that plantation agarwood is reported to be of inferior quality and worth less than wild material, and that the global industry has been estimated at more than USD 30 billion with a litre of oil at USD 40,000–50,000. It also states the grading systems in use (Malaysia twelve grades, Indonesia nine, a separate Chinese guide), that the industry still lacks a global grading standard based on quantifiable indicators, and that the taxonomy of the two genera is not settled and requires reassessment. It does not establish the quality or grade of any individual lot, does not establish the price of any particular material, and does not establish that material from a given range state was produced there rather than traded through it.',
    scopeAr:
      'يورد الجدول الأول الأنواع المقبولة من Aquilaria وGyrinops مع حالة كل نوع في القائمة الحمراء (IUCN) ودول انتشاره، مستنداً إلى القائمة الحمراء IUCN وتقديرات الأنواع المذكورة لعامي 2021 و2022 وقائمة كيو النباتات. ويثبت الملخص أن جميع أعضاء الجنسين (لا يقل عن 28 نوعاً) في ملحق سايتس الثاني، وأن A. malaccensis أُدرج عام 1995 وأُضيفت الأنواع الأخرى عام 2005، وأن المصدّرين الرئيسيين لـ Aquilaria هم إندونيسيا وماليزيا وتايلاند، وأن أكثر من 98٪ من المواد المصدَّرة من ماليزيا وإندونيسيا برية بينما كل خشب تايلاند مزروع، وأن المصدّرين الرئيسيين لـ Gyrinops هما إندونيسيا (بما فيها بابوا) وسريلانكا، وأن عود المزارع يوصف بأنه أقل جودةً وأقل قيمة من البرّي، وأن قيمة القطاع العالمي تقدّرت بأكثر من 30 مليار دولار ولتر الزيت بـ 40,000–50,000 دولار. ويذكر أيضاً أنظمة التقييم المستعملة (ماليزيا اثنتا عشرة درجة، إندونيسيا تسع، ودليل صيني مستقل)، وأن القطاع ما يزال يفتقر إلى معيار تقييم عالمي قائم على مؤشرات قابلة للقياس، وأن تصنيف الجنسين غير مستقر ويحتاج إلى إعادة نظر. ولا يثبت جودة أو درجة أي لوط بعينه، ولا يثبت سعر أي مادة بعينها، ولا يثبت أن مادة من دولة انتشار قد أُنتجت فيها بدل أن تمرّ بها.',
    kind: 'primary',
  },

  /**
   * The TRAFFIC study of the agarwood trade.
   *
   * This is the older document and it is dated, which is exactly why it
   * is useful: it records what the trade looked like before the
   * 2005 Appendix II extension, and it is the source for the export
   * figures by country and year that the later literature does not
   * reproduce. The figures are historical and the pages that cite them
   * say so.
   */
  TRAFFIC_AGARWOOD_TRADE_2000: {
    id: 'TRAFFIC_AGARWOOD_TRADE_2000',
    label: 'Agarwood: Use and Trade and CITES Implementation',
    labelAr: 'العود: استعماله وتجارة العود وتنفيذ سايتس',
    url: 'https://www.traffic.org/site/assets/files/9731/agarwood-use-and-trade-and-cites-implementation.pdf',
    publisher: 'TRAFFIC International',
    publisherAr: 'منظمة التجارة الدولية',
    retrievedOn: '2026-10-21',
    scope:
      'A 2000 review of the agarwood trade and of CITES implementation, covering the range States, the trade, the national legal position in each range State, and the import controls of the consuming markets. It supplies the export figures by country and year compiled from Taiwan Customs data for 1993 to 1998 (in pieces, which is how the source database recorded them), and it records the finding that Bhutan and Lao PDR are not CITES Parties. It records that A. malaccensis is native to nine north-eastern Indian states, that the A. crassna listing proposal was submitted by Thailand, and that CITES import permits for A. malaccensis in the importing markets examined require a prior export or re-export permit. It also records the reported prevalence of illegal harvesting and cross-border movement, which is a trade-compliance finding and not a legal determination. The figures are historical and the trade has changed since: the document predates the 2005 extension of the Appendix II listing to all remaining species, and its year-by-year figures must not be read as current. It does not establish the current state of any range State, the current export position of any country, or the legal position of any shipment.',
    scopeAr:
      'مراجعة من عام 2000 لتجارة العود وتنفيذ سايتس، تغطي دول الانتشار، والتجارة، والموقف القانوني الوطني في كل دولة من دول الانتشار، وضوابط الاستيراد في أسواق الاستهلاك التي دُرست. وتقدّم أرقام التصدير بحسب الدولة والسنة مجمَّعة من بيانات الجمارك التايبانية للفترة 1993–1998 (بمقاس القطع، وهو ما سجّلته قاعدة البيانات الأصلية)، وتسجّل أن بوتان وجمهورية لاوس ليستا طرفاً في سايتس. كما تسجّل أن A. malaccensis أصيلة في ولايات هند الشمالية الشرقية التسع، وأن اقتراح إدراج A. crassna قدّمته تايلاند، وأن تصاريح استيراد سايتس لـ A. malaccensis في أسواق الاستيراد التي دُرست تتطلب تصريح تصدير أو إعادة تصدير سابقاً. وتسجّل كذلك الانتشار المُبلَّغ عن الجمع غير المشروع وحركة عبر الحدود، وهو نتيجة في الالتزام التجاري لا تحديد قانوني. والأرقام تاريخية وتغيرت التجارة منذ ذلك الحين: فالمستند يسبق توسيع إدراج الملحق الثاني في 2005 ليشمل بقية الأنواع، ولا يصح قراءة أرقامه السنوية كحالية. ولا يثبت الحالة الراهنة لأي دولة انتشار، ولا وضع التصدير الحالي لأي بلد، ولا الوضع القانوني لأي شحنة.',
    kind: 'trade',
  },

  /**
   * The TRAFFIC study of the UAE trade.
   *
   * This is the source for how the Gulf market is structured: the
   * entrepôt role, the re-export direction, and the difference between
   * a buyer in the UAE and a buyer in another Gulf state. It is dated
   * 2010 and its price data is from 2005–2007, so the destination
   * pages cite it for market structure and for the import-control
   * regime, and not for any current price.
   */
  TRAFFIC_UAE_AGARWOOD_TRADE: {
    id: 'TRAFFIC_UAE_AGARWOOD_TRADE',
    label: 'The trade and use of agarwood (oudh) in the United Arab Emirates',
    labelAr: 'تجارة العود واستعماله في دولة الإمارات العربية المتحدة',
    url: 'https://www.trafficj.org/publication/10_Trade_Use_Agarwood.pdf',
    publisher: 'TRAFFIC International, with the UAE Ministry of Environment and Water',
    publisherAr: 'منظمة التجارة الدولية، بالتعاون مع وزارة البيئة والمياه في دولة الإمارات',
    retrievedOn: '2026-10-21',
    scope:
      'A 2010 study of the agarwood trade and use in the United Arab Emirates, based on interviews with traders, the UAE CITES authorities, Dubai customs and retail survey work. It establishes the import and re-export structure: the UAE and Saudi Arabia are the two dominant Middle Eastern markets; Saudi Arabia is the largest recipient of agarwood re-exported from the UAE, followed by Kuwait and Qatar, which is the entrepôt role the UAE plays; the UAE market has no registered association of importers or traders and little information exchange between companies; the UAE CITES Annual Report submissions began in 2004 and reported chip imports rose from over 56 tonnes in 2004 to more than 162 tonnes in 2007; a CITES export permit is required before a CITES-listed product such as agarwood may be imported, and a UAE import permit is also required; the customs treatment applies a 5% duty on the value of agarwood imports where a customs officer detects them. It also records that the same grade from different origins may carry different value in the market, and gives the 2005–2007 retail price ranges per kilogram in AED. The study is dated 2010 and its price data is from 2005–2007, so it establishes market structure and the import-control regime rather than any current price or current volume. It does not establish who may legally ship into any particular market today, and it does not establish the quality or authenticity of any material.',
    scopeAr:
      'دراسة عام 2010 لتجارة العود واستعماله في دولة الإمارات العربية المتحدة، قائمة على مقابلات مع التجار وسلطات سايتس في الدولة وجمارك دبي ومسح ميداني للمتاجر. وتثبّت بنية الاستيراد وإعادة التصدير: فإن الإمارات والسعودية هما السوقان المهيمنان في الشرق الأوسط؛ والسعودية أكبر متلقٍّ للمنتجات المُعاد تصديرها من الإمارات، تليها الكويت وقطر، وهو دور الوسيط الذي تلعبه الإمارات؛ وسوق الإمارات لا يجتمع له أي جمعية مسجَّلة للموردين أو المتجرين، والتبادل المعلوميات بين الشركات ضعيف؛ وقد بدأت الإمارات في تقديم تقارير سايتس السنوية منذ 2004، وبلغت واردات الرقائق وحدها أكثر من 56 طناً في 2004 وأكثر من 162 طناً في 2007؛ ويلزم تصريح تصدير من سايتس قبل استيراد منتج مدرج مثل العود، كما يلزم تصريح استيراد من الإمارات؛ ويطبّق التعريف الجمركي ضريبة بنسبة 5% على قيمة الواردات من العود عند اكتشاف الضابط الجمركي لها. وتسجّل كذلك أن الدرجة نفسها من مصادر مختلفة قد تحمل قيمة مختلفة في السوق، وتورد نطاقات أسعار التجزئة للكيلوجرام بالدرهم في 2005-2007. والدراسة مؤرخة 2010 وبيانات أسعارها من 2005–2007، فهي تثبّت بنية السوق ونظام ضوابط الاستيراد لا أي سعر أو حجم حالياً. ولا تثبت من يحق له الشحن قانوناً إلى أي سوق اليوم، ولا تثبت جودة أو أصالة أي مادة.',
    kind: 'trade',
  },

  /**
   * The TRAFFIC study of the Papua New Guinea trade.
   *
   * This is the only source in the registry that treats the Papua New
   * Guinea trade as a subject in its own right, and it is the source
   * for the country's role as a gaharu exporter and for the specific
   * species recorded there.
   */
  TRAFFIC_PNG_AGARWOOD: {
    id: 'TRAFFIC_PNG_AGARWOOD',
    label: 'Sustainable management of Papua New Guinea\'s agarwood resource',
    labelAr: 'الإدارة المستدامة لمورد العود في بابوا غينيا الجديدة',
    url: 'https://www.traffic.org/site/assets/files/9739/sustainable-management-of-papua-new-guineas-agarwood.pdf',
    publisher: 'TRAFFIC International',
    publisherAr: 'منظمة التجارة الدولية',
    retrievedOn: '2026-10-21',
    scope:
      'A study of the agarwood (gaharu) resource in Papua New Guinea, covering the harvesting and trade in the country, the species recorded, the scale of the export trade, and the management proposals that followed. It establishes that the country was one of the major exporters of agarwood in international trade, that the material was recorded under the name Aquilaria malaccensis in trade even where the producing species were Gyrinops, and that the principal market for the material was the Middle East. It documents the harvest and trading arrangements and the pressure on the resource. It is a study of a national situation at a particular time and does not establish the current export position, the current species composition, or the legal status of any present-day shipment.',
    scopeAr:
      'دراسة لمورد العود (غاهارو) في بابوا غينيا الجديدة، تغطي الجمع والتجارة في البلاد، والأنواع المسجَّلة، وحجم التجارة التصديرية، والمقترحات الإدارية التي تلت ذلك. وتثبّت أن كانت البلاد من المصدّرين الكبار للعود في التجارة الدولية، وأن المادة سُجِّلت في التجارة باسم Aquilaria malaccensis حتى حيث كانت الأنواع المنتِجة من Gyrinops، وأن السوق الرئيسي للمادة كان الشرق الأوسط. وتوثّق ترتيبات الجمع والتجارة والضغط على المورد. وهي دراسة لحالة وطنية في زمن معيَّن، ولا تثبت وضع التصدير الحالي ولا تركيب الأنواع اليوم ولا الوضع القانوني لأي شحنة حالية.',
    kind: 'trade',
  },

  /**
   * The POWO species record for Aquilaria crassna.
   *
   * The Kew site refuses automated requests, so this entry points at
   * the taxon record rather than claiming it was scraped. The range
   * statement it carries is the one the geography pages rely on for
   * the Indo-China range of the species.
   */
  POWO_AQUILARIA_CRASSNA: {
    id: 'POWO_AQUILARIA_CRASSNA',
    label: 'Aquilaria crassna Pierre ex Lecomte — Plants of the World Online',
    labelAr: 'Aquilaria crassna — نباتات العالم عبر الإنترنت',
    url: 'https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:837976-1',
    publisher: 'Royal Botanic Gardens, Kew',
    publisherAr: 'الحدائق النباتية الملكية، كيو',
    retrievedOn: '2026-10-21',
    scope:
      'The accepted taxonomic record for Aquilaria crassna Pierre ex Lecomte, published in Bulletin de la Société Botanique de France 61: 411 (1914). It establishes the accepted name, the valid publication, and the native range as Indo-China — Cambodia, Laos, Myanmar, Thailand and Vietnam — with the species a tree of the wet tropical biome. It does not establish that agarwood is harvested in any of those countries now, that any lot came from any of them, or the commercial standing of the species.',
    scopeAr:
      'السجل التصنيفي المقبول للنوع Aquilaria crassna، المنشور في مجلة الجمعية البوتانية الفرنسية، المجلد 61، صفحة 411، سنة 1914. ويثبت الاسم المقبول ونشره الصحيح والنطاق الأصلي وهو إندون-الصين — كمبوديا ولاوس وميانمار وتايلاند وفيتنام — والنوع شجرة في الحيزي المداري الرطب. ولا يثبت أن العود يُجمع في أي من تلك البلدان الآن، ولا أن أي لوط جاء منها، ولا أي قيمة تجارية للأنواع.',
    kind: 'primary',
  },
};
