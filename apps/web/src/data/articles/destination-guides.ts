import { destinationGuide } from './geography-kit.ts';
import type { Article } from './types.ts';

/**
 * The destination buying guides.
 *
 * The manifest carries 36 "Destination buying guide" routes. The United
 * Arab Emirates one already existed, so this file holds the other
 * thirty-five.
 *
 * What the pages have in common, and what they do not
 * ---------------------------------------------------
 * The manifest's gate for this family is: "Original local buying
 * information + named businesses/capabilities + dated authority review
 * where needed." The last part of that is where these pages differ
 * from a template.
 *
 * A destination is defined by its IMPORT REGIME, not by its size. The
 * thirty-five markets fall into eight regulatory groups, and the
 * group decides the documents a buyer must assemble before a shipment
 * can land. Within a group the pages are close to each other, and they
 * say so; the difference between two markets in the same group is
 * stated in the local section, where there is one to state.
 *
 * The eight groups:
 *
 *   GCC       the six Gulf states, which share the entrepôt structure
 *             the TRAFFIC study of the UAE trade documents
 *   EU        the nine European markets that apply the EU Wildlife
 *             Trade Regulations, which are stricter than CITES
 *   UK        Great Britain, which requires a CITES import permit
 *   US        the United States, where the permit is a plant permit
 *             and the entry point is a designated port
 *   AU        Australia, where both ends of the shipment need a permit
 *   SG        Singapore, which is a transhipment point with its own
 *             licensing and a rule that a re-export cannot exceed what
 *             was imported
 *   IN        India, which applies the Forest Act and requires proof of
 *             legal origin from its own importers
 *   DEFAULT   the fourteen markets where the Convention's own rule
 *             applies: an export permit, and an import permit only if
 *             national law asks for one
 *
 * What these pages do not do
 * --------------------------
 * They do not name a supplier as verified, they do not state a
 * current price, and they do not promise that a shipment will be
 * fulfilled into any market. The directory's destination filter
 * separates the businesses that are located in a market from the
 * businesses that have documented delivery to it, and a supplier is
 * introduced to a destination only where it has documented one.
 */

/**
 * The eight import regimes, in English and in Arabic.
 *
 * The Arabic is composed from the vocabulary the corpus already uses,
 * so that a reader of the Arabic pages reads the same words the
 * country pages use for the same regulatory facts.
 */
interface Regime {
  control: string;
  controlAr: string;
  channels: string;
  channelsAr: string;
  local: string;
  localAr: string;
}

const REGIMES: Record<string, Regime> = {
  gcc: {
    control:
      'A CITES export permit from the country of export is required before the shipment moves, and a CITES import permit is also required for an Appendix-II product such as agarwood. The permit is examined by the management authority before the consignment is released, and a consignment without a valid permit is refused entry and either confiscated or returned to the exporting country.',
    controlAr:
      'يلزم تصريح تصدير من بلد المنشأ قبل أن تتحرك الشحنة، وتلزم أيضاً تصريح استيراد من سايتس لمنتج مدرج مثل العود. وتُفحص التصاريح قبل الإفراج عن الشحنة، ومن لا يحمل تصريحاً سارياً تُرفض شحنة وتُصادر أو تُعاد إلى بلد التصدير.',
    channels:
      'The Gulf markets are trading and consuming centres rather than growing regions, and the material that reaches them has already been distilled or cured somewhere else. The region runs on an entrepôt: a buyer in one Gulf state is often supplied from a warehouse in another, and the documentation has to survive the leg. The UAE market has no registered association of importers or traders, so there is little formal information exchange between companies and the record of who did what is thin.',
    channelsAr:
      'أسواق الخليج مراكز تجارة واستهلاك لا مناطق نمو، والمادة التي تصل إليها مقطَّرة أو معالجة في مكان آخر. والمنطقة تعمل بنظام الوسيط: فالمشتري في إحدى دول الخليج يورَّد كثيراً من مستودع في أخرى، ويجب أن تصمد الوثائق في تلك الرحلة. ولا يجتمع لسوق الإمارات جمعية مسجَّلة للموردين أو المتجرين، فلا يكون بين الشركات تبادل معلوميات منظّم، ويكون سجل ما قام به منضبط قليلاً.',
    local:
      'The UAE reported chip imports rising from over 56 tonnes in 2004 to more than 162 tonnes in 2007, a roughly 300% increase in four years, and the retail market in that range is active across a wide spread of product forms. The UAE also plays the intermediary role for the rest of the Gulf: Saudi Arabia is the largest recipient of agarwood re-exported from the UAE, followed by Kuwait and Qatar. Deira in Dubai is the concentration point for the retail trade, and a customs officer who detects an agarwood import applies a duty of 5% of the product\'s total value.',
    localAr:
      'أبلغت الإمارات عن واردات الرقائق وحدها وهي ترتفع من أكثر من 56 طناً في 2004 إلى أكثر من 162 طناً في 2007، أي نحو 300٪ في أربع سنوات، وسوق التجزئة في تلك المجموعة نشط عبر أشكال منتجات واسعة. وتلعب الإمارات أيضاً دور الوسيط لبقية الخليج: فالسعودية أكبر متلقٍّ للعود المُعاد تصديره من الإمارات، تليها الكويت وقطر. وديبرة في دبي مركز التجزئة، والضابط الجمركي الذي يكشف وارداً من العود يطبّق رسماً بنسبة 5٪ من القيمة الإجمالية للمنتج.',
  },

  eu: {
    control:
      'Appendix II requires a CITES export permit or re-export certificate from the country of export, and no import permit is needed unless the importing country\'s own law asks for one. The EU Wildlife Trade Regulations apply stricter conditions than the Convention does: an import permit is required for a species listed in Annex B, which is where the agarwood species sit. So a shipment into the EU has to satisfy two systems at once, and the permit has to be an EU import permit and not only a CITES one.',
    controlAr:
      'يشترط الملحق الثاني تصريح تصدير أو شهادة إعادة تصدير من بلد التصدير، ولا يلزم تصريح استيراد إلا إذا اشترطته قوانين بلد الاستيراد نفسه. وتطبق لوائح التجارة في الاتحاد الأوروبي شروطاً أشد من الاتفاقية: فتصريح استيراد مطلوب للنوع المدرج في الملحق ب، وهناك تقع أنواع العود. فالشحنة إلى الاتحاد الأوروبي تستوفي نظامين معاً، وينبغي أن يكون التصريح تصريح استيراد أوروبياً لا تصريح سايتس وحده.',
    channels:
      'The European market is a consuming market rather than a growing one, and the material that arrives has already been distilled or cured somewhere else. Buyers therefore buy from an importer who has done the permitting rather than from a producer, and the importer\'s documentation is part of what the buyer is buying.',
    channelsAr:
      'السوق الأوروبية سوق استهلاك لا سوق نمو، والمادة التي تصل إليها مقطَّرة أو معالجة في مكان آخر. فيشتري المشتري من مستورد أتمّ التصاريح لا من منتج، وتكون وثائق المستورد جزءاً مما يشتريه المشتري.',
    local:
      'The part that goes wrong is rarely the permit itself. It is the match between the permit and the box: the species on the permit, the product form on the invoice, and the volume in the consignment have to agree with each other, and a material sold in several forms is a different record in each. A buyer should ask the importer for the import permit and the commercial invoice together and compare them, rather than accepting either alone.',
    localAr:
      'نادراً ما يكون الخلل في التصريح نفسه، بل في مطابقة التصريح للصندوق: فالنوع على التصريح، وشكل المنتج على الفاتورة، والكمية في الشحنة ينبغي أن تتفق فيما بينها، والمادة التي تُباع بأشكال متعددة سجل مختلف في كل شكل. وعلى المشتري أن يطلب من المستورد تصريح الاستيراد والفاتورة التجارية معاً ويقارن بينهما، لا أن يقبل أحدهما وحده.',
  },

  uk: {
    control:
      'A CITES import permit is required for a listed specimen, and the export permit from the country of export must be presented with it. A consignment without a valid permit is refused entry.',
    controlAr:
      'يلزم تصريح استيراد من سايتس لعينة مدرجة، ويجب أن يُقدَّم معه تصريح التصدير من بلد التصدير. ومن لا يحمل تصريحاً سارياً تُرفض شحنة.',
    channels:
      'The United Kingdom is a consuming market. The material arrives from a growing region and is bought from an importer rather than from a producer.',
    channelsAr:
      'المملكة المتحدة سوق استهلاك. تأتي المادة من منطقة نمو وتُشترى من مستورد لا من منتج.',
    local:
      'The permit has to name the species, and for a material sold in several forms the form on the permit has to be the form on the invoice. A chip shipment and an oil shipment are different records, and a permit written for one is not a permit for the other.',
    localAr:
      'يجب أن يسمّي التصريح النوع، والمادة التي تُباع بأشكال متعددة يكون شكلها على التصريح هو شكلها على الفاتورة. وشحنة الرقائق وشحنة الزيت سجلان مختلفان، والتصريح المكتوب لأحدهما ليس تصريحاً للآخر.',
  },

  us: {
    control:
      'The United States does not require a Fish and Wildlife Service import permit for an Appendix-II plant product, but the importer must present a valid CITES export permit or re-export certificate issued by the exporting country. A commercial importer of Aquilaria also needs a USDA Protected Plant Permit, and the shipment has to enter through a designated port staffed to handle CITES plants.',
    controlAr:
      'لا تشترط الولايات المتحدة تصريح استيراد من إدارة الأسماك والحياة البرية لمنتج نباتي من الملحق الثاني، لكن على المستورد أن يقدّم تصريح تصدير أو شهادة إعادة تصدير من سايتس صادرة عن إدارة بلد التصدير. وعلى المستورد التجاري لـ Aquilaria ترخيص نبات محمي من وزارة الزراعة، وتُدخَل الشحنة من منفذ محدد مؤهَّل للتعامل مع النباتات المدرجة.',
    channels:
      'The United States is a consuming market with its own fragrance and incense trade, and the material is bought from importers. There are also buyers in the retail trade, where the rules for personal carriage are different again.',
    channelsAr:
      'الولايات المتحدة سوق استهلاك له تجارته الخاصة في العطور والبخور، وتُشترى المادة من مستوردين. وهناك أيضاً مشترون في تجارة التجزئة، وحكم الحمل الشخصي فيها على قواعد أخرى.',
    local:
      'The designated-port requirement is what a first-time importer misses, and the plant permit is a separate application from the CITES paperwork. Personal carriage is exempt in small defined quantities, which is a different thing from commercial import and is not a route into it.',
    localAr:
      'شرط المنفذ المحدد هو ما يفوت المشتري أول مرة، وترخيص النبات طلب منفصل عن معاملات سايتس. والحمل الشخصي معفى بكميات صغيرة محددة، وذلك شيء غير الاستيراد التجاري وليس طريقاً إليه.',
  },

  au: {
    control:
      'CITES permits are required for both the import and the export of a listed specimen, and the export permit must be presented before the shipment arrives.',
    controlAr:
      'تطلب سايتس تصاريح للاستيراد والتصدير معاً للعينة المدرجة، ويُقدَّم تصريح التصدير قبل وصول الشحنة.',
    channels:
      'The Australian market is a consuming market with a long-standing incense and fragrance trade, and the material is bought from importers.',
    channelsAr:
      'السوق الأسترالية سوق استهلاك له تجارة عطور وبخور راسخة، وتُشترى المادة من مستوردين.',
    local:
      'Both ends of the shipment need a permit, so a consignment that is lawful at origin still needs an Australian document before it lands, and a permit held by a supplier is not a permit held by the importer.',
    localAr:
      'كل طرف في الشحنة يحتاج تصريحاً، فالشحنة القانونية في بلد المنشأ تحتاج بعد ذلك ويقة أسترالية قبل أن تصل، والتصريح الذي يحمله المورد ليس تصريحاً يحمله المستورد.',
  },

  sg: {
    control:
      'CITES is implemented in Singapore under the Endangered Species (Import and Export) Act, with the Primary Production Department as both the management authority and the scientific authority. Every trader importing or re-exporting A. malaccensis must be licensed by the Singapore Trade Development Board, and an import permit requires a prior export or re-export permit from the country of export. Imports of the other Aquilaria species also need a plant import permit and a phytosanitary certificate. A re-export needs a re-export permit, and the quantities re-exported must not exceed the quantities imported.',
    controlAr:
      'تُنفَّذ سايتس في سنغافورة بموجب قانون الأنواع المهددة بالاتجار، وتتولى إدارة الإنتاج هذه المهام. ويجب على كل متاجر تستورد أو تعيد تصدير A. malaccensis أن تكون مرخّصة من مجلس تطوير التجارة، ويلزم تصريح استيراد تصريحَ تصدير أو إعادة تصدير سابق من بلد التصدير. وتحتاج الأنواع الأخرى من Aquilaria تصريح استيراد نباتي وشهادة صحة نباتية. وتحتاج إعادة التصدير تصريح إعادة تصدير، ولا تتجاوز الكميات المعادة تصديرها الكميات المستوردة.',
    channels:
      'Singapore is a transhipment point as much as a market: the material is re-exported onward, and the permit chain has to survive the second leg, which is why the quantity rule below matters more here than in a market that only imports.',
    channelsAr:
      'سنغافورة نقطة عبور بقدر ما هي سوق: تعبر المادة منها إلى غيرها، ويجب أن تصمد سلسلة التصاريح في الرحلة الثانية، ولهذا لقاعدة الكمية أدناه أثر أكبر هنا مما في سوق يستورد فقط.',
    local:
      'The quantity rule is what catches people out, because a re-export that exceeds what was imported cannot be permitted, whatever the market needs. The permit chain is the constraint on this route, not the availability of material.',
    localAr:
      'قاعدة الكمية هي ما يقع فيه الناس، فالإعادة التي تتجاوز ما استورد لا يمكن تصريحها مهما احتاج السوق. وسلسلة التصاريح هي القيد على هذا الطريق، لا توافر المادة.',
  },

  in: {
    control:
      'India applies the Indian Forest Act to agarwood, and Indian-based importers have to present a proof of legal origin, a Legal Procurement Certificate, because of cases where material of doubtful origin was offered for purchase. The Forest Resource Tax applies to the harvest documents.',
    controlAr:
      'يطبّق الهند قانون الغابات على العود، وعلى المستوردين في الهند تقديم إثبات للمصدر القانوني، شهادة مشتريات قانونية، بسبب حالات عُرض فيها مادة مجهولة المصدر للشراء. وضريبة الموارد الحرجية تسري على مستندات الجمع.',
    channels:
      'The Indian market is both a consuming market and a growing one, so a buyer is choosing between an imported and a domestic material, and the documentation for the domestic material is the more onerous of the two.',
    channelsAr:
      'السوق الهندية سوق استهلاك وسوق نمو معاً، فيختار المشتري بين مادة مستوردة وأخرى محلية، ووثائق المادة المحلية هي الأثقل من الاثنتين.',
    local:
      'The proof of legal origin is the document that Indian importers are required to hold, and a seller who cannot produce one has not shown where the material came from. It is also the document a foreign buyer should ask to see, because the same standard applies to a shipment leaving India.',
    localAr:
      'إثبات المصدر القانوني هو الوثيقة التي يُلزم المستوردون في الهند بحملها، ومن لا يستطيع تقديمه لم يثبت من أين جاءت المادة. وهي أيضاً الوثيقة التي ينبغي للمشتري الأجنبي أن يطلب رؤيتها، لأن المعيار نفسه ينطبق على شحنة تخرج من الهند.',
  },

  default: {
    control:
      'Appendix II requires a CITES export permit or re-export certificate from the country of export. No import permit is needed unless the importing country\'s own national law requires one, and the buyer should establish which case applies here before the shipment is booked.',
    controlAr:
      'يشترط الملحق الثاني تصريح تصدير أو شهادة إعادة تصدير من بلد التصدير. ولا يلزم تصريح استيراد إلا إذا اشترطته قوانين بلد الاستيراد الوطنية، وينبغي للمشتري أن يبيّن أيّ الحالة تنطبق هنا قبل حجز الشحنة.',
    channels:
      'The market is a consuming market unless the country is also a range state, in which case the buyer is choosing between a domestic and an imported material and the two carry different paperwork.',
    channelsAr:
      'السوق سوق استهلاك ما لم تكن الدولة أيضاً دولة انتشار، وعندئذٍ يختار المشتري بين مادة محلية وأخرى مستوردة، وتحمل الوثائق في الحالتين اختلافاً.',
    local:
      'The first question is whether the importing country applies stricter domestic measures than the Convention does, because the export permit does not cover that. A buyer who has not established this has not established that the shipment will be admitted.',
    localAr:
      'السؤال الأول هو هل يطبّق بلد الاستيراد تدابير محلية أشدّ من الاتفاقية، لأن تصريح التصدير لا يغطي ذلك. ومن لم يبيّن ذلك لم يبيّن أن الشحنة ستُقبل.'
  },
};

export const destinationGuideArticles: Article[] = [
  destinationGuide({
    slug: 'buying/in/saudi-arabia',
    name: "Saudi Arabia",
    nameAr: "المملكة العربية السعودية",
    iso2: "SA",
    summary: "Buying oud and natural fragrance in Saudi Arabia: the retail souks, wholesale procurement, and import permit requirements.",
    summaryAr: "شراء العود والعطور الطبيعية في المملكة العربية السعودية: أسواق التجزئة، والتوريد بالجملة، واشتراطات تصاريح الاستيراد.",
    directAnswer: "Saudi Arabia is the world's largest consumer and re-import destination for high-grade natural agarwood and aged Dehn Al Oud. Because the Kingdom is an importing consumer market rather than a cultivation range state, authentic sourcing depends on verifying the exporter's original CITES documentation and the Saudi Ministry of Environment, Water and Agriculture import clearance. Buyers should distinguish between retail merchant grade claims and verifiable batch certificates of origin.",
    directAnswerAr: "المملكة العربية السعودية هي أكبر وجهة استهلاك وإعادة استيراد في العالم لخشب العود الطبيعي الفاخر ودهن العود المعتق. ونظراً لأن المملكة سوق استهلاكي مستورد وليست دولة انتشار زراعي، فإن التوريد الموثوق يعتمد على التحقق من وثائق سايتس الأصلية للمصدّر وفسح الاستيراد الصادر عن وزارة البيئة والمياه والزراعة السعودية. وينبغي للمشتري التمييز بين مسميات الدرجات التجارية وشهادات المنشأ القابلة للتحقق.",
    control: REGIMES["gcc"].control,
    controlAr: REGIMES["gcc"].controlAr,
    channels: REGIMES["gcc"].channels,
    channelsAr: REGIMES["gcc"].channelsAr,
    local: "In major trading centres like Riyadh, Jeddah, and Makkah, traditional perfumers operate extensive retail networks alongside wholesale auctions. Importers must hold commercial registration for perfumes and oud, and all commercial shipments require prior import permits matching the CITES export certification from exporting countries.",
    localAr: "في مراكز التجارة الكبرى مثل الرياض وجدة ومكة المكرمة، يدير العطارون التقليديون شبكات تجزئة واسعة إلى جانب مزادات الجملة. ويجب على المستوردين الحصول على سجل تجاري للعطور والعود، وتتطلب جميع الشحنات التجارية تصاريح استيراد مسبقة تطابق شهادة تصدير سايتس من بلدان التصدير.",
    directorySlug: 'serving/saudi-arabia',
    sourceIds: ["CITES_APPENDICES", "TRAFFIC_UAE_AGARWOOD_TRADE"],
  }),
  destinationGuide({
    slug: 'buying/in/qatar',
    name: "Qatar",
    nameAr: "قطر",
    iso2: "QA",
    summary: "Procuring agarwood and artisan oils in Qatar: import controls, retail souk standards, and commercial documentation.",
    summaryAr: "توريد خشب العود والزيوت الحرفية في قطر: ضوابط الاستيراد، ومعايير أسواق التجزئة، والوثائق التجارية.",
    directAnswer: "Qatar represents a concentrated high-value market for artisanal agarwood chips and vintage attars. Sourcing material in Doha requires understanding that retail shops primarily rely on wholesale distribution channels routed through regional hubs. Institutional buyers must ensure that consignments imported directly from Southeast Asian producers carry both host-nation CITES export paperwork and Ministry of Municipality and Environment approvals.",
    directAnswerAr: "تمثل قطر سوقاً مركزاً ذا قيمة عالية لرقائق العود الحرفية والعطور الشرقية المعتقة. ويتطلب توريد المواد في الدوحة إدراك أن متاجر التجزئة تعتمد أساساً على قنوات التوزيع بالجملة المارة عبر المراكز الإقليمية. ويجب على المشترين التجاريين ضمان أن الشحنات المستوردة مباشرة من منتجي جنوب شرق آسيا تحمل وثائق تصدير سايتس وتصاريح وزارة البلدية والبيئة.",
    control: REGIMES["gcc"].control,
    controlAr: REGIMES["gcc"].controlAr,
    channels: REGIMES["gcc"].channels,
    channelsAr: REGIMES["gcc"].channelsAr,
    local: "The Souq Waqif fragrance market features specialised heritage merchants trading Hindi and Cambodian grades. Direct business consignments require pre-clearance with customs and environmental authorities to prevent border delays on Appendix II materials.",
    localAr: "يضم سوق واقف للعطور تجار تراثيين متخصصين في أصناف العود الهندي والكمبودي. وتتطلب الشحنات التجارية المباشرة تخليصاً مسبقاً مع الجمارك والسلطات البيئية لمنع تأخير الشحنات الخاضعة للملحق الثاني على الحدود.",
    directorySlug: 'serving/qatar',
    sourceIds: ["CITES_APPENDICES", "TRAFFIC_UAE_AGARWOOD_TRADE"],
  }),
  destinationGuide({
    slug: 'buying/in/kuwait',
    name: "Kuwait",
    nameAr: "الكويت",
    iso2: "KW",
    summary: "Commercial and connoisseur oud buying in Kuwait: trade routes, import licensing, and batch verification.",
    summaryAr: "شراء العود التجاري والفاخر في الكويت: مسارات التجارة، وتراخيص الاستيراد، والتحقق من الدفعات.",
    directAnswer: "Kuwait possesses one of the deepest traditions of connoisseur agarwood appreciation in the Gulf, with high domestic demand for rare wild wood and pure distillates. Buying wholesale in Kuwait requires verifying whether stock originates from direct Southeast Asian farm partnerships or secondary re-exports. Local import compliance mandates strict alignment with the Public Authority for Agricultural Affairs and Fish Resources guidelines.",
    directAnswerAr: "تمتلك الكويت أحد أعمق التقاليد في تقدير العود الفاخر في منطقة الخليج، مع طلب محلي مرتفع على الأخشاب البرية النادرة والتقطير النقي. ويتطلب الشراء بالجملة في الكويت التحقق مما إذا كان المخزون ناتجاً عن شراكات مباشرة مع مزارع جنوب شرق آسيا أو عبر إعادة التصدير. وتفرض ضوابط الاستيراد المحلية الامتثال لإرشادات الهيئة العامة لشؤون الزراعة والثروة السمكية.",
    control: REGIMES["gcc"].control,
    controlAr: REGIMES["gcc"].controlAr,
    channels: REGIMES["gcc"].channels,
    channelsAr: REGIMES["gcc"].channelsAr,
    local: "Kuwait City markets demand rigorous verification of burning character and resin purity. Importers must secure environmental approval prior to shipment release, particularly for large wholesale lots entering Shuwaikh port or air cargo terminals.",
    localAr: "تتطلب أسواق مدينة الكويت فحصاً دقيقاً لخصائص الاحتراق ونقاء الراتنج. ويجب على المستوردين الحصول على موافقة بيئية مسبقة قبل الإفراج عن الشحنة، لا سيما لدفعات الجملة الكبيرة الواردة عبر ميناء الشويخ أو الشحن الجوي.",
    directorySlug: 'serving/kuwait',
    sourceIds: ["CITES_APPENDICES", "TRAFFIC_UAE_AGARWOOD_TRADE"],
  }),
  destinationGuide({
    slug: 'buying/in/bahrain',
    name: "Bahrain",
    nameAr: "البحرين",
    iso2: "BH",
    summary: "Navigating agarwood sourcing in Bahrain: import protocols, artisan perfumery, and wholesale verification.",
    summaryAr: "دليل توريد العود في البحرين: بروتوكولات الاستيراد، وصناعة العطور الحرفية، والتحقق من الجملة.",
    directAnswer: "Bahrain functions as an established consumer and boutique perfumery market with longstanding merchant houses in Manama. Buyers procuring agarwood in Bahrain must recognize that most wood and oil consignments enter via neighboring distribution centres. Direct international shipments require valid Supreme Council for Environment CITES clearances and commercial inspection documentation.",
    directAnswerAr: "تعمل البحرين كسوق استهلاكي وعطري عريق يضم دور تجارة قديمة في المنامة. ويجب على مشتري خشب العود في البحرين إدراك أن معظم شحنات الخشب والدهن تدخل عبر مراكز التوزيع المجاورة. وتتطلب الشحنات الدولية المباشرة تراخيص سايتس سارية من المجلس الأعلى للبيئة ووثائق فحص تجارية.",
    control: REGIMES["gcc"].control,
    controlAr: REGIMES["gcc"].controlAr,
    channels: REGIMES["gcc"].channels,
    channelsAr: REGIMES["gcc"].channelsAr,
    local: "Traditional souks in Manama and Muharraq cater to both heritage collectors and fragrance compounding businesses. Batch references must be checked against invoices, especially when purchasing multi-tola lots of aged Hindi oil.",
    localAr: "تلبي الأسواق التقليدية في المنامة والمحرق احتياجات جامعي التراث ومصنعي العطور الشرقية. ويجب تدقيق مراجع الدفعات مقابل الفواتير، لا سيما عند شراء كميات تجارية متعددة التولات من الدهن الهندي المعتق.",
    directorySlug: 'serving/bahrain',
    sourceIds: ["CITES_APPENDICES", "TRAFFIC_UAE_AGARWOOD_TRADE"],
  }),
  destinationGuide({
    slug: 'buying/in/oman',
    name: "Oman",
    nameAr: "عُمان",
    iso2: "OM",
    summary: "Sourcing natural oud and botanical resins in Oman: import regulations, heritage perfumery, and supplier vetting.",
    summaryAr: "توريد العود الطبيعي والراتنجات النباتية في عُمان: لوائح الاستيراد، والعطور التراثية، والتحقق من الموردين.",
    directAnswer: "Oman combines a rich indigenous culture of frankincense and aromatic resins with high demand for premium imported agarwood chips and attars. Sourcing in Muscat requires careful distinction between local incense compounding materials and genuine Aquilaria imports. Commercial buyers must ensure compliance with Environment Authority import permits before importing CITES-listed wood.",
    directAnswerAr: "تجمع سلطنة عُمان بين ثقافة أصيلة في اللبان والراتنجات العطرية والطلب المرتفع على رقائق العود المستوردة والعطور الشرقية الفاخرة. ويتطلب التوريد في مسقط تمييزاً دقيقاً بين مواد البخور المجهزة محلياً وواردات العود الطبيعي الأصيل. ويجب على المشترين التجاريين ضمان الامتثال لتصاريح هيئة البيئة قبل شحن الأخشاب المدرجة في سايتس.",
    control: REGIMES["gcc"].control,
    controlAr: REGIMES["gcc"].controlAr,
    channels: REGIMES["gcc"].channels,
    channelsAr: REGIMES["gcc"].channelsAr,
    local: "Muscat and Salalah fragrance traders maintain specialized clienteles for incense rituals. Customs verification at ports checks botanical species declarations against commercial manifests to ensure Appendix II species compliance.",
    localAr: "يحافظ تجار العطور في مسقط وصلالة على زبائن متخصصين في البخور التراثي. ويشمل التحقق الجمركي في الموانئ مطابقة إقرارات الأصناف النباتية مع القوائم التجارية لضمان الامتثال لأنواع الملحق الثاني.",
    directorySlug: 'serving/oman',
    sourceIds: ["CITES_APPENDICES", "TRAFFIC_UAE_AGARWOOD_TRADE"],
  }),
  destinationGuide({
    slug: 'buying/in/united-kingdom',
    name: "United Kingdom",
    nameAr: "المملكة المتحدة",
    iso2: "GB",
    summary: "Buying oud and exotic fragrance in the UK: import licensing, port inspections, and commercial compliance.",
    summaryAr: "شراء العود والعطور النادرة في المملكة المتحدة: تراخيص الاستيراد، والفحص الجمركي، والامتثال التجاري.",
    directAnswer: "The United Kingdom is a major European destination for niche perfumery and private fragrance collectors. Because all Aquilaria and Gyrinops species are listed on CITES Appendix II, importing agarwood into Great Britain requires an Animal and Plant Health Agency  import permit in addition to the exporter's permit. Wholesale buyers must never arrange international shipping before both permits are in hand.",
    directAnswerAr: "المملكة المتحدة وجهة رئيسية في أوروبا للعطور المتخصصة ومقتني العطور الخاصة. ونظراً لإدراج جميع أنواع العود في الملحق الثاني لسايتس، يتطلب استيراد خشب العود تصريح استيراد صادر عن وكالة صحة الحيوان والنبات  بالإضافة إلى تصريح المصدّر. ويجب على مشتري الجملة عدم إتمام الشحن الدولي قبل الحصول على كلا التصريحين.",
    control: REGIMES["uk"].control,
    controlAr: REGIMES["uk"].controlAr,
    channels: REGIMES["uk"].channels,
    channelsAr: REGIMES["uk"].channelsAr,
    local: "London retail fragrance houses and artisan compounders face strict border checks at Heathrow and container ports. Consignments without matching scientific binomials on both import and export licenses risk seizure under UK border controls.",
    localAr: "تواجه دور العطور في لندن والمصنّعون الحرفيون فحوصاً حدودية مشددة في مطار هيثرو والموانئ البحرية. وتتعرض الشحنات التي تخلو من أسماء علمية نباتية متطابقة في كلا الترخيصين لخطر المصادرة بموجب الضوابط الحدودية البريطانية.",
    directorySlug: 'serving/united-kingdom',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
  destinationGuide({
    slug: 'buying/in/united-states',
    name: "United States",
    nameAr: "الولايات المتحدة",
    iso2: "US",
    summary: "Procuring agarwood in the United States: USDA permits, designated port entry, and CITES enforcement.",
    summaryAr: "توريد خشب العود في الولايات المتحدة: تراخيص وزارة الزراعة الأمريكية، والمنافذ المحددة، وتنفيذ سايتس.",
    directAnswer: "Importing agarwood into the United States requires navigating dual regulatory oversight from the USDA Animal and Plant Health Inspection Service (APHIS) and the U.S. Fish and Wildlife Service (USFWS). Buyers must secure a USDA Protected Plant Permit and ensure consignments enter exclusively through designated CITES ports of entry. Unpermitted commercial shipments face mandatory forfeiture.",
    directAnswerAr: "يتطلب استيراد خشب العود إلى الولايات المتحدة التعامل مع رقابة مزدوجة من وزارة الزراعة الأمريكية وهيئة الأسماك والحياة البرية. ويجب على المشترين الحصول على ترخيص نباتات محمية وضمان دخول الشحنات حصرياً عبر منافذ مخصصة لدخول نباتات سايتس. وتخضع الشحنات التجارية غير المرخصة للمصادرة الإلزامية.",
    control: REGIMES["us"].control,
    controlAr: REGIMES["us"].controlAr,
    channels: REGIMES["us"].channels,
    channelsAr: REGIMES["us"].channelsAr,
    local: "Artisan perfumers in American metropolitan areas must verify that their overseas distillers provide authentic re-export certificates. Small personal exemptions do not apply to commercial wholesale volumes intended for blending or resale.",
    localAr: "يجب على صانعي العطور الحرفيين في المدن الأمريكية الكبرى التأكد من تقديم المقطّرين في الخاج شهادات إعادة تصدير موثوقة. ولا تنطبق الإعفاءات الشخصية المحدودة على الكميات التجارية المخصصة للمزج أو إعادة البيع.",
    directorySlug: 'serving/united-states',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
  destinationGuide({
    slug: 'buying/in/canada',
    name: "Canada",
    nameAr: "كندا",
    iso2: "CA",
    summary: "Purchasing agarwood and perfume materials in Canada: Environment Canada permits and wholesale verification.",
    summaryAr: "شراء خشب العود ومواد العطور في كندا: تراخيص وزارة البيئة الكندية والتحقق من الجملة.",
    directAnswer: "Canada regulates commercial trade in agarwood products under the Wild Animal and Plant Protection and Regulation of International and Interprovincial Trade Act (WAPPRITA). Wholesale buyers in Canada must secure CITES import authorization from Environment and Climate Change Canada prior to receiving international consignments. Retail purchases from established domestic stock avoid direct border permitting complexities.",
    directAnswerAr: "تنظم كندا التجارة في منتجات العود بموجب قانون حماية النباتات والحيوانات البرية وتنظيم التجارة الدولية. ويجب على مشتري الجملة في كندا الحصول على تصريح استيراد سايتس من وزارة البيئة وتغير المناخ قبل تسلم الشحنات الدولية. ويتفادى الشراء بالتجزئة من المخزون المحلي تعقيدات التصاريح الحدودية المباشرة.",
    control: REGIMES["default"].control,
    controlAr: REGIMES["default"].controlAr,
    channels: REGIMES["default"].channels,
    channelsAr: REGIMES["default"].channelsAr,
    local: "Canadian fragrance compounding laboratories require comprehensive Safety Data Sheets and Certificate of Analysis alongside botanical documentation to ensure formulation conformity with Health Canada cosmetic guidelines.",
    localAr: "تتطلب مختبرات تركيب العطور الكندية أوراق بيانات سلامة المواد وشهادات تحليل كاملة إلى جانب الوثائق النباتية لضمان مطابقة التركيبات لإرشادات مستحضرات التجميل الكندية.",
    directorySlug: 'serving/canada',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
  destinationGuide({
    slug: 'buying/in/australia',
    name: "Australia",
    nameAr: "أستراليا",
    iso2: "AU",
    summary: "Importing agarwood into Australia: dual-permit requirements, biosecurity clearance, and trade standards.",
    summaryAr: "استيراد خشب العود إلى أستراليا: اشتراطات الترخيص المزدوج، والتخليص الحيوي، ومعايير التجارة.",
    directAnswer: "Australia enforces some of the world's most rigorous biosecurity and wildlife trade controls under the Environment Protection and Biodiversity Conservation Act (EPBC). Both a valid CITES export permit from the supplier and a pre-issued Australian CITES import permit from the Department of Climate Change, Energy, the Environment and Water are strictly mandatory. Shipments without prior Australian authorization cannot be cleared retrospectively.",
    directAnswerAr: "تطبق أستراليا أشد تدابير الأمن الحيوي وحماية الحياة الفطرية بموجب قانون حماية البيئة وتنوع الأحياء. وتلزم شحنات العود بتصريح تصدير سايتس ساري وتصريح استيراد أسترالي مسبق من وزارة البيئة والمياه. ولا يمكن تخليص الشحنات التي تفتقر إلى الترخيص المسبق بأثر رجعي.",
    control: REGIMES["au"].control,
    controlAr: REGIMES["au"].controlAr,
    channels: REGIMES["au"].channels,
    channelsAr: REGIMES["au"].channelsAr,
    local: "Biosecurity import conditions (BICON) also evaluate untreated wood chips for fungal contamination and pest risk. Steam-distilled pure oud oils face simpler quarantine pathways than raw wood chips or uninoculated logs.",
    localAr: "تفحص شروط الأمن الحيوي الأسترالية أيضاً رقائق الخشب الخام للتأكد من خلوها من التلوث الفطري والآفات. وتواجه زيوت العود النقية المقطرة بالبخار مسار حجر أسهل مقارنة بالرقائق أو الأخشاب غير المعالجة.",
    directorySlug: 'serving/australia',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
  destinationGuide({
    slug: 'buying/in/germany',
    name: "Germany",
    nameAr: "ألمانيا",
    iso2: "DE",
    summary: "Commercial agarwood sourcing in Germany: Federal Agency for Nature Conservation permits and EU Annex B regulations.",
    summaryAr: "التوريد التجاري لخشب العود في ألمانيا: تراخيص الوكالة الاتحادية لحماية الطبيعة ولوائح الملحق ب الأوروبي.",
    directAnswer: "Germany applies EU Wildlife Trade Regulation controls for agarwood species listed on Annex B. Importers must apply for an import permit through the Federal Agency for Nature Conservation (BfN) before any international shipment leaves the exporting nation. Commercial perfumers and brand owners in Germany must keep complete documentation trails for product audit compliance.",
    directAnswerAr: "تطبق ألمانيا لوائح التجارة في الحياة الفطرية للاتحاد الأوروبي على أنواع العود المدرجة في الملحق ب. ويجب على المستوردين تقديم طلب للحصول على ترخيص استيراد من الوكالة الاتحادية لحماية الطبيعة قبل مغادرة أي شحنة لبلد التصدير. ويجب على صانعي العطور في ألمانيا الاحتفاظ بسجلات توثيق كاملة للامتثال التنظيمي.",
    control: REGIMES["eu"].control,
    controlAr: REGIMES["eu"].controlAr,
    channels: REGIMES["eu"].channels,
    channelsAr: REGIMES["eu"].channelsAr,
    local: "German chemical and cosmetic compliance requires IFRA conformity statements and allergen breakdowns from suppliers, alongside the CITES documentation, before pure oils can be formulated into EU-compliant fine fragrance.",
    localAr: "يتطلب الامتثال الكيميائي والتجميلي الألماني إفادات مطابقة لمعايير الجمعية الدولية للعطور وقوائم مسببات الحساسية من الموردين، إلى جانب وثائق سايتس، قبل إدخال الزيوت النقية في تركيبات العطور الأوروبية.",
    directorySlug: 'serving/germany',
    sourceIds: ["CITES_APPENDICES", "IFRA_STANDARDS"],
  }),
  destinationGuide({
    slug: 'buying/in/france',
    name: "France",
    nameAr: "فرنسا",
    iso2: "FR",
    summary: "Sourcing agarwood and precious extracts in France: Grasse compounding standards, EU CITES permits, and artisan quality.",
    summaryAr: "توريد خشب العود والمستخلصات الثمينة في فرنسا: معايير غراس العطرية، وتراخيص سايتس الأوروبية، والجودة الحرفية.",
    directAnswer: "France is the global capital of high perfumery, with high demand for pure oud extracts and artisan attars among Grasse compounding houses and Parisian niche brands. Commercial buyers importing directly from origin countries must obtain an EU import permit via French environmental authorities prior to shipment arrival. Working with accredited French import intermediaries simplifies administrative compliance.",
    directAnswerAr: "فرنسا هي العاصمة العالمية للعطور الراقية، مع طلب واسع على مستخلصات العود النقية والعطور الشرقية الحرفية لدى دور العطور في غراس وباريس. ويجب على المشترين التجاريين المستوردين مباشرة من بلدان المنشأ استخراج ترخيص استيراد أوروبي عبر السلطات البيئية الفرنسية قبل وصول الشحنة.",
    control: REGIMES["eu"].control,
    controlAr: REGIMES["eu"].controlAr,
    channels: REGIMES["eu"].channels,
    channelsAr: REGIMES["eu"].channelsAr,
    local: "French fine perfumers demand gas chromatography mass spectrometry (GCMS) profiles alongside botanical certificates to confirm the absence of synthetic extenders or undisclosed carrier oils in bulk purchases.",
    localAr: "يطلب العطارون في فرنسا تحليلات كروماتوغرافيا الغاز ومطياف الكتلة إلى جانب الشهادات النباتية للتأكد من خلو الشحنات بالجملة من المركبات الصناعية أو زيوت التخفيف غير المعلنة.",
    directorySlug: 'serving/france',
    sourceIds: ["CITES_APPENDICES", "IFRA_STANDARDS"],
  }),
  destinationGuide({
    slug: 'buying/in/italy',
    name: "Italy",
    nameAr: "إيطاليا",
    iso2: "IT",
    summary: "Procuring oud materials in Italy: Carabinieri forestry inspection, EU border controls, and niche fragrance trade.",
    summaryAr: "توريد مواد العود في إيطاليا: تفتيش الحرس البيئي، والضوابط الحدودية الأوروبية، وتجارة العطور المتخصصة.",
    directAnswer: "Italy features a vibrant artistic perfumery sector with strong interest in authentic Oriental woody materials. Importing agarwood requires pre-authorization under EU Wildlife Trade legislation administered by the Ministry of Environment and Carabinieri forestry units. Independent perfumers in Florence and Milan typically procure through specialized EU importers to ensure pre-cleared provenance.",
    directAnswerAr: "تتميز إيطاليا بقطاع عطور فنية نشط وطلب متزايد على الأخشاب العطرية الشرقية الأصيلة. ويتطلب استيراد العود تصريحاً مسبقاً بموجب تشريعات الاتحاد الأوروبي التي تديرها وزارة البيئة والحرس البيئي. ويشتري العطارون المستقلون في فلورنسا وميلانو غالباً عبر مستوردين أوروبيين متخصصين لضمان تخليص الأوراق مسبقاً.",
    control: REGIMES["eu"].control,
    controlAr: REGIMES["eu"].controlAr,
    channels: REGIMES["eu"].channels,
    channelsAr: REGIMES["eu"].channelsAr,
    local: "Customs points at Rome Fiumicino and Milan Malpensa inspect botanical lot numbers against the export certificate details. Importers must reconcile commercial invoices with exact species scientific names.",
    localAr: "تطابق المنافذ الجمركية في روما وميلانو أرقام الدفعات النباتية مع تفاصيل شهادة التصدير. ويجب على المستوردين مطابقة الفواتير التجارية مع الأسماء العلمية الدقيقة للأنواع.",
    directorySlug: 'serving/italy',
    sourceIds: ["CITES_APPENDICES", "IFRA_STANDARDS"],
  }),
  destinationGuide({
    slug: 'buying/in/spain',
    name: "Spain",
    nameAr: "إسبانيا",
    iso2: "ES",
    summary: "Buying oud in Spain: Ministry of Ecological Transition permitting, European trade channels, and perfume manufacturing.",
    summaryAr: "شراء خشب العود في إسبانيا: تصاريح وزارة التحول البيئي، وقنوات التجارة الأوروبية، وتصنيع العطور.",
    directAnswer: "Spain has grown into a major European manufacturing hub for luxury fragrances and home aromatic products. Commercial importation of agarwood requires import documentation issued by the Ministry for the Ecological Transition. Wholesale manufacturers in Barcelona and Madrid must verify that raw resinous materials carry valid CITES origin credentials before processing.",
    directAnswerAr: "تطورت إسبانيا لتصبح مركزاً أوروبياً كبيراً لتصنيع العطور الفاخرة والمنتجات العطرية المنزلية. ويتطلب الاستيراد التجاري للعود وثائق استيراد تصدرها وزارة التحول البيئي الإسبانية. ويجب على مصنعي الجملة في برشلونة ومدريد التحقق من حمل المواد الخام لشهادات سايتس سارية قبل بدء التصنيع.",
    control: REGIMES["eu"].control,
    controlAr: REGIMES["eu"].controlAr,
    channels: REGIMES["eu"].channels,
    channelsAr: REGIMES["eu"].channelsAr,
    local: "Spanish industrial compounders require standardized physical specifications, density metrics, and flash point documentation for oud oils to meet international transportation and factory storage safety standards.",
    localAr: "يطلب المصنعون في إسبانيا مواصفات قياسية لكثافة المواد ونقاط الوميض لزيوت العود لتلبية معايير النقل الدولي والسلامة الصناعية في المستودعات.",
    directorySlug: 'serving/spain',
    sourceIds: ["CITES_APPENDICES", "IFRA_STANDARDS"],
  }),
  destinationGuide({
    slug: 'buying/in/netherlands',
    name: "Netherlands",
    nameAr: "هولندا",
    iso2: "NL",
    summary: "Importing agarwood through the Netherlands: Rotterdam port logistics, EU customs clearance, and botanical compliance.",
    summaryAr: "استيراد خشب العود عبر هولندا: لوجستيات ميناء روتردام، والتخليص الجمركي الأوروبي، والامتثال النباتي.",
    directAnswer: "The Netherlands acts as a primary logistical entry point for international trade into continental Europe. Bringing agarwood through Dutch sea or air freight hubs requires securing an EU import permit via the Netherlands Enterprise Agency  in advance. Transhipment through Dutch ports to other European destinations demands meticulous document integrity to prevent administrative seizures.",
    directAnswerAr: "تعمل هولندا كبوابة لوجستية رئيسية للتجارة الدولية إلى أوروبا. ويتطلب إدخال العود عبر موانئ الشحن البحرية أو الجوية الهولندية استخراج ترخيص استيراد أوروبي مسبق عبر وكالة المشاريع الهولندية . وتتطلب عمليات إعادة الشحن عبر الموانئ الهولندية تكاملاً وثائقياً صارماً لمنع المصادرات الإدارية.",
    control: REGIMES["eu"].control,
    controlAr: REGIMES["eu"].controlAr,
    channels: REGIMES["eu"].channels,
    channelsAr: REGIMES["eu"].channelsAr,
    local: "Amsterdam Schiphol and Rotterdam customs inspect cargo manifests with specialized veterinary and plant inspection services. Re-exporting materials onward to non-EU nations requires issuing fresh Dutch CITES re-export certificates.",
    localAr: "تخضع الشحنات في مطار أمستردام وميناء روتردام لتفتيش متخصص من هيئات فحص النباتات والجمارك. وتتطلب إعادة تصدير المواد لاحقاً إلى دول خارج الاتحاد الأوروبي استخراج شهادات إعادة تصدير هولندية جديدة.",
    directorySlug: 'serving/netherlands',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
  destinationGuide({
    slug: 'buying/in/sweden',
    name: "Sweden",
    nameAr: "السويد",
    iso2: "SE",
    summary: "Purchasing agarwood and artisan fragrance in Sweden: Swedish Board of Agriculture permits and Nordic distribution.",
    summaryAr: "شراء خشب العود والعطور الحرفية في السويد: تراخيص مجلس الزراعة السويدي والتوزيع في بلدان الشمال.",
    directAnswer: "Sweden represents a discerning Nordic niche fragrance market with boutique distributors seeking certified, legally logged agarwood. Direct importation requires a prior import license from the Swedish Board of Agriculture (Jordbruksverket) in compliance with EU regulations. Sourcing finished oils from established European compounders offers the most straightforward procurement path for boutique brands.",
    directAnswerAr: "تمثل السويد سوقاً مميزاً للعطور المتخصصة في شمال أوروبا مع اهتمام المستوردين بالعود القانوني الموثق بيئياً. ويتطلب الاستيراد المباشر ترخيص استيراد مسبقاً من مجلس الزراعة السويدي وفقاً للوائح الأوروبية. ويمثل شراء الزيوت المنتهية من مصنعين أوروبيين معتمدين المسار الأسهل للعلامات التجارية المستقلة.",
    control: REGIMES["eu"].control,
    controlAr: REGIMES["eu"].controlAr,
    channels: REGIMES["eu"].channels,
    channelsAr: REGIMES["eu"].channelsAr,
    local: "Swedish retailers prioritize sustainability disclosures and ethical plantation sourcing. Sourcing partners should furnish verifiable plantation certification or legal concession quotas to satisfy local consumer scrutiny.",
    localAr: "يركز تجار التجزئة في السويد على إفصاحات الاستدامة والتوريد الأخلاقي من المزارع. ويجب على شركاء التوريد تقديم شهادات مزارع قابلة للتحقق لتلبية متطلبات السوق المحلية.",
    directorySlug: 'serving/sweden',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
  destinationGuide({
    slug: 'buying/in/switzerland',
    name: "Switzerland",
    nameAr: "سويسرا",
    iso2: "CH",
    summary: "Sourcing agarwood in Switzerland: Federal Food Safety and Veterinary Office permits and fine perfumery sourcing.",
    summaryAr: "توريد خشب العود في سويسرا: تصاريح المكتب الفيدرالي لسلامة الأغذية والبيطرة وتوريد العطور الراقية.",
    directAnswer: "Switzerland operates outside the European Union but adheres strictly to the CITES convention via national legislation enforced by the Federal Food Safety and Veterinary Office (FSVO). Swiss buyers must obtain a Swiss CITES import permit prior to shipping agarwood products from abroad. Geneva and Zurich luxury fragrance developers demand pristine provenance documentation.",
    directAnswerAr: "تعمل سويسرا خارج الاتحاد الأوروبي لكنها تطبق اتفاقية سايتس بصرامة بموجب تشريعاتها الوطنية التي ينفذها المكتب الفيدرالي لسلامة الأغذية والشؤون البيطرية. ويجب على المشترين السويسريين الحصول على ترخيص استيراد سويسري مسبق قبل شحن منتجات العود من الخارج. وتتطلب دور العطور في جنيف وزيورخ وثائق منشأ دقيقة.",
    control: REGIMES["default"].control,
    controlAr: REGIMES["default"].controlAr,
    channels: REGIMES["default"].channels,
    channelsAr: REGIMES["default"].channelsAr,
    local: "Swiss private banks and high-net-worth collectors often store rare vintage batches under controlled vault conditions. Authentication requires verifying distillation dates, vessel metallurgy, and botanical species authenticity.",
    localAr: "يحتفظ مقتنو العطور في سويسرا بدفعات قديمة نادرة في بيئات حفظ خاضعة للرقابة. ويتطلب التوثيق التحقق من تواريخ التقطير ونوع المعادن المستخدمة في القدور ومطابقة الأصناف النباتية.",
    directorySlug: 'serving/switzerland',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
  destinationGuide({
    slug: 'buying/in/austria',
    name: "Austria",
    nameAr: "النمسا",
    iso2: "AT",
    summary: "Oud procurement in Austria: Federal Ministry for Climate Action permits and Central European fragrance trade.",
    summaryAr: "توريد خشب العود في النمسا: تصاريح الوزارة الفيدرالية للعمل المناخي وتجارة العطور في وسط أوروبا.",
    directAnswer: "Austria's luxury perfume market centres around historic retail pharmacies, Vienna niche boutiques, and bespoke compounding studios. Under EU wildlife regulations, importing raw agarwood chips or pure oils requires authorization from the Federal Ministry for Climate Action, Environment, Energy, Mobility, Innovation and Technology. Buyers should verify documentation prior to ordering test consignments.",
    directAnswerAr: "يتركز سوق العطور الفاخرة في النمسا حول المتاجر التراثية ومحلات العطور المتخصصة في فيينا. وبموجب لوائح الحياة الفطرية الأوروبية، يتطلب استيراد رقائق العود الخام أو الزيوت ترخيصاً من الوزارة الفيدرالية للعمل المناخي والبيئة. وينبغي للمشترين التحقق من الوثائق قبل طلب الشحنات التجريبية.",
    control: REGIMES["eu"].control,
    controlAr: REGIMES["eu"].controlAr,
    channels: REGIMES["eu"].channels,
    channelsAr: REGIMES["eu"].channelsAr,
    local: "Austrian perfume specialists adhere to comprehensive EU cosmetics safety testing. Raw botanical material imports must clearly designate target industrial use categories on all customs declarations.",
    localAr: "يلتزم خبراء العطور في النمسا باختبارات سلامة مستحضرات التجميل الأوروبية. ويجب أن تحدد إقرارات الجمارك للواردات النباتية فئات الاستخدام الصناعي بوضوح على جميع المستندات.",
    directorySlug: 'serving/austria',
    sourceIds: ["CITES_APPENDICES", "IFRA_STANDARDS"],
  }),
  destinationGuide({
    slug: 'buying/in/belgium',
    name: "Belgium",
    nameAr: "بلجيكا",
    iso2: "BE",
    summary: "Importing agarwood into Belgium: Federal Public Service Health permits and Antwerp logistics channels.",
    summaryAr: "استيراد خشب العود إلى بلجيكا: تصاريح الخدمة العامة الاتحادية للصحة وقنوات ميناء أنتويرب اللوجستية.",
    directAnswer: "Belgium serves as a key diplomatic and trading hub in Europe, with significant international logistics passing through Antwerp and Brussels. Importers of CITES Appendix II agarwood must obtain an EU import permit through the Federal Public Service (FPS) Health, Food Chain Safety and Environment. Purchasing through pre-cleared European wholesale importers avoids shipping confiscations.",
    directAnswerAr: "تعد بلجيكا مركزاً دبلوماسياً وتجارياً رئيسياً في أوروبا، حيث تمر شحنات لوجستية عبر أنتويرب وبروكسل. ويجب على مستوردي خشب العود الخاضع للملحق الثاني لسايتس استخراج ترخيص استيراد أوروبي عبر الخدمة العامة الاتحادية للصحة والبيئة. ويجنب الشراء عبر مستوردين معتمدين داخل أوروبا مخاطر حجز الشحنات.",
    control: REGIMES["eu"].control,
    controlAr: REGIMES["eu"].controlAr,
    channels: REGIMES["eu"].channels,
    channelsAr: REGIMES["eu"].channelsAr,
    local: "Logistics operators handling transit shipments through Brussels Airport must ensure transit declarations clearly match the original export permit numbers issued by Southeast Asian forestry departments.",
    localAr: "يجب على المشغلين الوجستيين للشحنات العابرة عبر مطار بروكسل التأكد من مطابقة إقرارات الترانزيت لأرقام تصاريح التصدير الأصلية الصادرة عن إدارات الغابات في جنوب شرق آسيا.",
    directorySlug: 'serving/belgium',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
  destinationGuide({
    slug: 'buying/in/ireland',
    name: "Ireland",
    nameAr: "أيرلندا",
    iso2: "IE",
    summary: "Buying natural oud in Ireland: National Parks and Wildlife Service permits and boutique perfumery sourcing.",
    summaryAr: "شراء العود الطبيعي في أيرلندا: تصاريح هيئة المتنزهات الوطنية والحياة الفطرية وتوريد العطور المستقلة.",
    directAnswer: "Ireland's growing artisan perfumery sector engages with rare natural aromatics including authentic agarwood and sandalwood. Direct imports require an EU CITES permit issued by the National Parks and Wildlife Service (NPWS). Because local commercial volume is modest, many Irish compounding artists partner with established UK or European specialty importers.",
    directAnswerAr: "يتعامل قطاع صناعة العطور الحرفية المتنامي في أيرلندا مع المواد الطبيعية النادرة بما فيها العود الأصيل وخشب الصندل. وتتطلب الواردات المباشرة ترخيص سايتس أوروبي تصدره هيئة المتنزهات الوطنية والحياة الفطرية. ونظراً لأن حجم الاستهلاك المحلي محدود، يعتمد العديد من المصممين في أيرلندا على موردين معتمدين في أوروبا.",
    control: REGIMES["eu"].control,
    controlAr: REGIMES["eu"].controlAr,
    channels: REGIMES["eu"].channels,
    channelsAr: REGIMES["eu"].channelsAr,
    local: "Boutique Irish perfumers emphasize organic certification and traceable farm partnerships. Inoculation methods and plantation backgrounds should be documented by distillers when supplying Irish niche brands.",
    localAr: "يركز صانعو العطور في أيرلندا على شهادات الزراعة العضوية والمزارع التي يمكن تتبعها. ويجب توثيق طرق التلقيح وخلفية المزارع من قِبل المقطّرين عند التوريد للعلامات المتخصصة الأيرلندية.",
    directorySlug: 'serving/ireland',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
  destinationGuide({
    slug: 'buying/in/turkiye',
    name: "T\u00fcrkiye",
    nameAr: "تركيا",
    iso2: "TR",
    summary: "Navigating agarwood sourcing in T\u00fcrkiye: Istanbul spice bazaar traditions, transit trade, and Ministry permits.",
    summaryAr: "دليل توريد خشب العود في تركيا: تقاليد بازار إسطنبول، وتجارة الترانزيت، وتصاريح الوزارة.",
    directAnswer: "T\u00fcrkiye occupies a historic bridge between Eastern fragrance traditions and Western commercial markets, with Istanbul serving as a major hub for oriental attars and resins. Importing agarwood commercially into T\u00fcrkiye requires compliance with Ministry of Agriculture and Forestry CITES regulations. Buyers should distinguish between traditional synthetic amber-oud blends and certified natural distillates.",
    directAnswerAr: "تحتل تركيا موقعاً تاريخياً يربط بين تقاليد العطور الشرقية والأسواق الغربية، حيث تعد إسطنبول مركزاً رئيسياً للزيوت والراتنجات الشرقية. ويتطلب استيراد العود تجارياً الامتثال لضوابط سايتس التابعة لوزارة الزراعة والغابات. وينبغي للمشتري التمييز بين الخلات الصناعية التجارية والمستخلصات الطبيعية الموثقة.",
    control: REGIMES["default"].control,
    controlAr: REGIMES["default"].controlAr,
    channels: REGIMES["default"].channels,
    channelsAr: REGIMES["default"].channelsAr,
    local: "Istanbul's Grand Bazaar and Spice Bazaar house numerous traditional oil merchants. Commercial buyers must verify botanical certificates and CITES documents before purchasing bulk wood chips offered as antique stock.",
    localAr: "يضم البازار الكبير وسوق التوابل في إسطنبول عدداً كبيراً من تجار الزيوت التراثيين. ويجب على المشترين التجاريين التحقق من الشهادات النباتية ووثائق سايتس قبل شراء كميات الجملة المعروضة كأخشاب قديمة.",
    directorySlug: 'serving/turkiye',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
  destinationGuide({
    slug: 'buying/in/india',
    name: "India",
    nameAr: "الهند",
    iso2: "IN",
    summary: "Commercial buying of oud in India: Assam distillation hubs, Legal Procurement Certificates, and domestic trade rules.",
    summaryAr: "الشراء التجاري للعود في الهند: مراكز التقطير في أسام، وشهادات الشراء القانوني، وقواعد التجارة المحلية.",
    directAnswer: "India is both a historic producer of Aquilaria agallocha (malaccensis) and a massive domestic market for attars and chips. Purchasing material in India requires understanding local forestry clearance rules: buyers must obtain Legal Procurement Certificates and ensure compliance with the Indian Forest Act. Sourcing directly from licensed Hojai or Upper Assam distillers ensures authentic provenance.",
    directAnswerAr: "الهند منتج تاريخي لخشب العود من نوع Aquilaria agallocha وسوق محلي ضخم للدهن والرقائق. ويتطلب الشراء في الهند استيعاب لوائح الغابات المحلية: حيث يجب على المشترين الحصول على شهادات الشراء القانوني وضمان الامتثال لقانون الغابات الهندي. والتوريد مباشرة من المقطّرين المرخصين في هوجاي أو أسام العليا يضمن أصالة المنشأ.",
    control: REGIMES["in"].control,
    controlAr: REGIMES["in"].controlAr,
    channels: REGIMES["in"].channels,
    channelsAr: REGIMES["in"].channelsAr,
    local: "In trade centres like Hojai, Mumbai, and Kannauj, buyers encounter deep variations in traditional copper-deg distillation styles. Legal paperwork must accompany transport across state borders, and export requires explicit DGFT permits.",
    localAr: "في مراكز التجارة مثل هوجاي ومومباي وقنوج، يواجه المشترون تنوعاً كبيراً في أساليب التقطير التقليدي بالقدور النحاسية. ويجب أن ترافق الأوراق القانونية عمليات النقل بين الولايات الهندية، بينما يتطلب التصدير تصاريح رسمية من هيئة التجارة الخارجية.",
    directorySlug: 'serving/india',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
  destinationGuide({
    slug: 'buying/in/bangladesh',
    name: "Bangladesh",
    nameAr: "بنغلاديش",
    iso2: "BD",
    summary: "Buying agarwood in Bangladesh: Sylhet plantation cottage industry, export licensing, and authentic oil sourcing.",
    summaryAr: "شراء العود في بنغلاديش: صناعة مزارع سيلهيت العائلية، وتراخيص التصدير، وتوريد الزيت الأصيل.",
    directAnswer: "Bangladesh possesses an ancient artisanal agarwood sector centred in the Moulvibazar and Sylhet districts, home to hundreds of cottage distilleries. Commercial procurement for export requires navigating Forest Department transit passes and CITES export documentation. Buyers should visit distillation facilities directly to inspect batch consistency and wood charging practices.",
    directAnswerAr: "تمتلك بنغلاديش قطاعاً حرفياً عريقاً للعود يتركز في منطقتي مولفيبازار وسيلهيت، حيث تنشط مئات المعامل التقليدية. ويتطلب الشراء التجاري للتصدير استخراج تصاريح المرور من إدارة الغابات وشهادات تصدير سايتس. ويُستحسن للمشترين زيارة معامل التقطير مباشرة لمعاينة جودة الدفعات وطرق ملء القدور بالخشب.",
    control: REGIMES["default"].control,
    controlAr: REGIMES["default"].controlAr,
    channels: REGIMES["default"].channels,
    channelsAr: REGIMES["default"].channelsAr,
    local: "Baralekha and Sujanagar serve as the epicenter for rural agarwood trading. Commercial buyers must ensure that distillers provide authentic government transit permits before moving unrefined oil to Dhaka for international air transit.",
    localAr: "تعد باراليخا وسوجاناغار مركزين رئيسيين لتجارة العود في المناطق الريفية. ويجب على المشترين التأكد من تقديم المقطّرين تصاريح نقل حكومية سارية قبل نقل الزيوت الخام إلى دكا للشحن الجوي الدولي.",
    directorySlug: 'serving/bangladesh',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
  destinationGuide({
    slug: 'buying/in/pakistan',
    name: "Pakistan",
    nameAr: "باكستان",
    iso2: "PK",
    summary: "Procuring oud and oriental fragrance in Pakistan: Karachi wholesale souks, attar houses, and import protocols.",
    summaryAr: "توريد خشب العود والعطور الشرقية في باكستان: أسواق الجملة في كراتشي، ودور العطور، وبروتوكولات الاستيراد.",
    directAnswer: "Pakistan is a major consumer market for oriental fragrances, pure attars, and traditional bakhoor. Sourcing in Karachi and Lahore involves engaging with multi-generational perfumers who import raw agarwood chips and unblended oils from South and Southeast Asia. Importers must comply with Ministry of Climate Change CITES import management rules.",
    directAnswerAr: "تعد باكستان سوقاً استهلاكياً كبيراً للعطور الشرقية والأدهان النقية والبخور التقليدي. ويشمل التوريد في كراتشي ولاهور التعامل مع عائلات عريقة في صناعة العطور تستورد رقائق العود والزيوت غير المخلوطة من جنوب وجنوب شرق آسيا. ويجب على المستوردين الامتثال لضوابط استيراد سايتس الصادرة عن وزارة التغير المناخي.",
    control: REGIMES["default"].control,
    controlAr: REGIMES["default"].controlAr,
    channels: REGIMES["default"].channels,
    channelsAr: REGIMES["default"].channelsAr,
    local: "Wholesale markets in Bolton Market Karachi and Shah Alam Lahore trade extensive volumes of commercial oud blends. Discerning buyers must request batch testing to separate pure distillates from synthetic formulations.",
    localAr: "تتداول أسواق الجملة في كراتشي ولاهور كميات كبيرة من خلطات العود التجارية. ويجب على المشترين المتخصصين طلب اختبار الدفعات لفصل الزيوت النقية المقطرة عن التركيبات العطرية الصناعية.",
    directorySlug: 'serving/pakistan',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
  destinationGuide({
    slug: 'buying/in/malaysia',
    name: "Malaysia",
    nameAr: "ماليزيا",
    iso2: "MY",
    summary: "Buying Malaysian gaharu: forestry licensing, wild harvest quotas, plantation stock, and export clearance.",
    summaryAr: "شراء عود الغاهارو الماليزي: ترخيص الغابات، وحصص الجمع البري، وأشجار المزارع، والتخليص التصديري.",
    directAnswer: "Malaysia is one of the world's primary origin countries for wild and plantation Aquilaria, operating under regulated export quotas. Procurement in Peninsular Malaysia, Sabah, and Sarawak requires verifying state forestry logging licenses and (Malaysian Timber Industry Board) CITES export permits. Sourcing directly from registered distillers provides traceability back to specific harvesting concessions.",
    directAnswerAr: "ماليزيا هي أحد أهم بلدان المنشأ لأخشاب العود البري والمزروع، وتعمل بموجب حصص تصديرية منظمة. ويتطلب التوريد في شبه الجزيرة الماليزية وصباح وسارواك التحقق من تراخيص قطع الغابات الحكومية وتصاريح تصدير سايتس الصادرة عن مجلس صناعة الأخشاب الماليزي . والتوريد مباشرة من المقطّرين المسجلين يتيح تتبع الخشب إلى مناطق الامتياز المحددة.",
    control: REGIMES["default"].control,
    controlAr: REGIMES["default"].controlAr,
    channels: REGIMES["default"].channels,
    channelsAr: REGIMES["default"].channelsAr,
    local: "Kuala Lumpur and Penang trading houses handle both wild mountain gaharu and modern plantation chips. Consignments must carry official inspection grades before export packaging is finalized.",
    localAr: "تتعامل دور التجارة في كوالالمبور وبينانغ مع العود البري الجبلي ورقائق المزارع الحديثة. ويجب أن تحمل الشحنات تقييمات الفحص الرسمية الصادرة عن مجلس الأخشاب قبل إتمام التغليف للتصدير.",
    directorySlug: 'serving/malaysia',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
  destinationGuide({
    slug: 'buying/in/singapore',
    name: "Singapore",
    nameAr: "سنغافورة",
    iso2: "SG",
    summary: "Procuring agarwood through Singapore: NParks transit licensing, trading houses, and re-export compliance.",
    summaryAr: "توريد خشب العود عبر سنغافورة: تراخيص الترانزيت، ودور التجارة، والامتثال لإعادة التصدير.",
    directAnswer: "Singapore serves as a premier international trading hub and financial clearing centre for natural agarwood and high-grade essential oils. Sourcing in Singapore requires understanding the re-export regime managed by the National Parks Board (NParks): re-exported volumes cannot exceed recorded import quantities, and full permit chains are strictly enforced. Buyers benefit from sophisticated logistics and trusted banking frameworks.",
    directAnswerAr: "تعمل سنغافورة كمركز تجاري ومالي دولي رائد لخشب العود الطبيعي والزيوت العطرية النقية. ويتطلب التوريد في سنغافورة استيعاب نظام إعادة التصدير الذي تديره هيئة المتنزهات الوطنية: حيث لا يجوز للكميات المعاد تصديرها تجاوز الكميات المستوردة المسجلة، ويتم تطبيق سلاسل التصاريح بصرامة. ويستفيد المشترون من بنية لوجستية ومصرفية متقدمة.",
    control: REGIMES["sg"].control,
    controlAr: REGIMES["sg"].controlAr,
    channels: REGIMES["sg"].channels,
    channelsAr: REGIMES["sg"].channelsAr,
    local: "Heritage trading houses on Arab Street maintain historic inventories of aged vintage oils. Wholesale buyers must ensure Singapore re-export permits cross-reference the original Indonesian or Malaysian export declarations.",
    localAr: "تحتفظ المتاجر التراثية في شارع العرب بمخزونات قديمة من الزيوت المعتقة. ويجب على مشتري الجملة التأكد من أن تصاريح إعادة التصدير السنغافورية تشير بدقة إلى إقرارات التصدير الأصلية من إندونيسيا أو ماليزيا.",
    directorySlug: 'serving/singapore',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
  destinationGuide({
    slug: 'buying/in/indonesia',
    name: "Indonesia",
    nameAr: "إندونيسيا",
    iso2: "ID",
    summary: "Purchasing Indonesian gaharu: provincial quotas, Gyrinops and Aquilaria varieties, and export paperwork.",
    summaryAr: "شراء العود الإندونيسي: الحصص الإقليمية، وتنوعات جيرينوبس وأكيلاريا، ووثائق التصدير الرسمية.",
    directAnswer: "Indonesia is the largest global source of diverse agarwood-producing species, spanning Aquilaria malaccensis, A. microcarpa, and eastern Gyrinops walla and versteegii varieties. Buying in Jakarta, Pontianak, or Papua requires coordinating with (Natural Resources Conservation Agency) registered quota holders. Direct international exports demand valid Ministry of Environment and Forestry CITES permits.",
    directAnswerAr: "إندونيسيا هي أكبر مصدر عالمي للأنواع المنتجة للعود، حيث تمتد أصنافها من أكيلاريا في الغرب إلى جيرينوبس في جزر الملوك وبابوا. ويتطلب الشراء في جاكرتا أو بونتياناك أو بابوا التنسيق مع حاملي الحصص المسجلين لدى وكالة حماية الموارد الطبيعية . وتتطلب الصادرات الدولية المباشرة تصاريح سايتس رسمية من وزارة البيئة والغابات.",
    control: REGIMES["default"].control,
    controlAr: REGIMES["default"].controlAr,
    channels: REGIMES["default"].channels,
    channelsAr: REGIMES["default"].channelsAr,
    local: "Traders in Kalimantan and Sumatra operate extensive local grading systems from Super King down to medang wood. Buyers must verify provincial harvest origin tags to ensure consignments match assigned regional quotas.",
    localAr: "يطبق التجار في كاليمانتان وسومطرة أنظمة فرز وتدريج محلية من درجات السوبر وحتى الخشب العادي. ويجب على المشترين التحقق من بطاقات المنشأ الإقليمية لضمان مطابقة الشحنات للحصص المخصصة لكل ولاية.",
    directorySlug: 'serving/indonesia',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
  destinationGuide({
    slug: 'buying/in/vietnam',
    name: "Vietnam",
    nameAr: "فيتنام",
    iso2: "VN",
    summary: "Sourcing Vietnamese agarwood: Aquilaria crassna plantations, artisan distillation, and CITES export clearance.",
    summaryAr: "توريد خشب العود الفيتنامي: مزارع أكيلاريا كراسنا، والتقطير الحرفي، وتخليص تصاريح التصدير.",
    directAnswer: "Vietnam is celebrated for Aquilaria crassna, historically famous for sweet, airy, and floral aromatic profiles. Because wild harvesting is strictly prohibited, contemporary procurement focuses entirely on managed plantations in Khanh Hoa, Quang Nam, and southern provinces. Wholesale exports require authorization from the Vietnam CITES Management Authority under the Ministry of Agriculture and Rural Development.",
    directAnswerAr: "تشتهر فيتنام بخشب أكيلاريا كراسنا، المعروف تاريخياً بنفحاته العطرية الحلوة والزهرية الفواحة. ونظراً لأن الجمع البري محظور تماماً، يتركز التوريد المعاصر بالكامل على المزارع الخاضعة للرقابة في خانه هوا وكوانغ نام والولايات الجنوبية. وتتطلب صادرات الجملة موافقة إدارة سايتس الفيتنامية التابعة لوزارة الزراعة والتنمية الريفية.",
    control: REGIMES["default"].control,
    controlAr: REGIMES["default"].controlAr,
    channels: REGIMES["default"].channels,
    channelsAr: REGIMES["default"].channelsAr,
    local: "Artisan oil distillers in Ho Chi Minh City and Nha Trang produce both co-distilled hydro-distillates and pure plantation oils. Sourcing teams must audit farm inoculation history and avoid unverified claims of antique wild kinam.",
    localAr: "ينتج مقطّرو الزيوت الحرفيون في هو تشي منه ونها ترانج زيوتاً نقية مقطرة بالماء من أخشاب المزارع. ويجب على فرق التوريد مراجعة سجلات تلقيح المزارع وتجنب الادعاءات غير الموثقة عن خشب الكينام البري القديم.",
    directorySlug: 'serving/vietnam',
    sourceIds: ["CITES_APPENDICES", "POWO_AQUILARIA_CRASSNA"],
  }),
  destinationGuide({
    slug: 'buying/in/thailand',
    name: "Thailand",
    nameAr: "تايلاند",
    iso2: "TH",
    summary: "Buying Thai agarwood: Trat and Prachin Buri plantations, sustainable oil production, and Department of Agriculture permits.",
    summaryAr: "شراء العود التايلاندي: مزارع ترات وبراشين بوري، وإنتاج الزيوت المستدام، وتراخيص وزارة الزراعة.",
    directAnswer: "Thailand is the world's leading exporter of cultivated plantation agarwood chips and commercial oud oils. Production is concentrated in Trat, Chanthaburi, and Prachin Buri, operating under registered agricultural programs. Exporters must obtain CITES certificates from the Department of Agriculture, ensuring that overseas buyers receive fully traceable plantation material.",
    directAnswerAr: "تايلاند هي أكبر مصدّر عالمي لرقائق العود المستزرع والزيوت التجارية النقية. ويتركز الإنتاج في مقاطعات ترات وتشانثابوري وبراشين بوري، وتعمل بموجب برامج زراعية مسجلة. ويجب على المصدّرين استخراج شهادات سايتس من وزارة الزراعة، مما يضمن حصول المشترين الدوليين على مادة مستدامة وقابلة للتتبع بالكامل.",
    control: REGIMES["default"].control,
    controlAr: REGIMES["default"].controlAr,
    channels: REGIMES["default"].channels,
    channelsAr: REGIMES["default"].channelsAr,
    local: "Bangkok's Nana district and modern agricultural cooperatives offer extensive testing access. Buyers should verify whether oil has been treated with chemical inoculants or accelerated enzymes before committing to commercial contracts.",
    localAr: "توفر المتاجر في بانكوك والجمعيات الزراعية المتخصصة إمكانية فحص العينات على نطاق واسع. ويجب على المشترين التحقق من نوع المحفزات المستخدمة في الأشجار قبل توقيع عقود التوريد الكبيرة.",
    directorySlug: 'serving/thailand',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
  destinationGuide({
    slug: 'buying/in/japan',
    name: "Japan",
    nameAr: "اليابان",
    iso2: "JP",
    summary: "Procuring aromatic wood in Japan: Koh-do incense traditions, Kyoto historic houses, and import licensing.",
    summaryAr: "توريد الأخشاب العطرية في اليابان: تقاليد بخور الكوه-دو، ودور كيوتو التاريخية، وتراخيص وزارة الاقتصاد والتجارة والصناعة.",
    directAnswer: "Japan maintains a sacred aesthetic tradition of incense appreciation (Koh-do) dating back over a millennium, with unmatched connoisseur appraisal of jinko and prized kyara. Importing raw agarwood into Japan requires authorization from the Ministry of Economy, Trade and Industry  in compliance with CITES. Sourcing from ancient Kyoto incense masters requires formal introductions and cultural understanding.",
    directAnswerAr: "تحتفظ اليابان بتقاليد تراثية عميقة في تقدير البخور (كوه-دو) تمتد لأكثر من ألف عام، مع تقدير رفيع لخشب الجينكو والكيارا النادر. ويتطلب استيراد خشب العود الخام إلى اليابان موافقة وزارة الاقتصاد والتجارة والصناعة  وفقاً لاتفاقية سايتس. ويتطلب الشراء من دور البخور العريقة في كيوتو علاقات تجارية موثوقة وفهماً للتقاليد المحلية.",
    control: REGIMES["default"].control,
    controlAr: REGIMES["default"].controlAr,
    channels: REGIMES["default"].channels,
    channelsAr: REGIMES["default"].channelsAr,
    local: "Incense makers in Kyoto and Osaka distinguish wood based on the ancient Rikkoku Gomi sensory classification. Pure wood pieces intended for burning rituals are appraised on subtle heating behavior rather than heavy oil yields.",
    localAr: "يصنف صناع البخور في كيوتو وأوساكا الخشب بناءً على تصنيف الحواس التقليدي القديم. وتُقيَّم قطع الخشب النقية المخصصة للطقوس الهادئة على أساس سلوك الاحتراق اللطيف لا على غزارة الدهن وحدها.",
    directorySlug: 'serving/japan',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
  destinationGuide({
    slug: 'buying/in/china',
    name: "China",
    nameAr: "الصين",
    iso2: "CN",
    summary: "Buying chenxiang in China: Hainan and Guangdong plantations, carving and medicinal markets, and National Forestry permits.",
    summaryAr: "شراء عود التشن شيانغ في الصين: مزارع هاينان وغوانغدونغ، وأسواق النحت والطب الشعبي، وتراخيص هيئة الغابات.",
    directAnswer: "China is an immense consumer, cultivator, and processing market for agarwood, known historically as chenxiang. With native Aquilaria sinensis cultivated across Hainan, Guangdong, and Guangxi, domestic trade supplies traditional Chinese medicine, art carving, and tea culture. International exports and imports are strictly monitored by the National Forestry and Grassland Administration under CITES guidelines.",
    directAnswerAr: "تعد الصين سوقاً استهلاكياً وزراعياً وصناعياً ضخماً لخشب العود، المعروف تاريخياً باسم «تشن شيانغ». ومع زراعة أشجار أكيلاريا سينينسيس في هاينان وغوانغدونغ وقوانغشي، يلبي الإنتاج المحلي متطلبات الطب الصيني التقليدي ونحت المجسمات وثقافة الشاي. وتخضع الصادرات والواردات الدولية لرقابة مشددة من الإدارة الوطنية للغابات والمراعي بموجب سايتس.",
    control: REGIMES["default"].control,
    controlAr: REGIMES["default"].controlAr,
    channels: REGIMES["default"].channels,
    channelsAr: REGIMES["default"].channelsAr,
    local: "Wholesale carving and bead markets in Guangzhou and Hainan feature significant investments in resin-rich wood. Buyers must distinguish between genuine resinous heartwood and pressure-injected cosmetic imitations.",
    localAr: "تضم أسواق الجملة للنحت والمسابح في غوانغتشو وهاينان استثمارات كبيرة في الأخشاب المشبعة بالراتنج. ويجب على المشترين التمييز بين الخشب الطبيعي المشبع والخشب المحقون صناعياً تحت الضغط.",
    directorySlug: 'serving/china',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
  destinationGuide({
    slug: 'buying/in/south-korea',
    name: "South Korea",
    nameAr: "كوريا الجنوبية",
    iso2: "KR",
    summary: "Purchasing agarwood in South Korea: Ministry of Environment CITES protocols, herbal medicine, and modern fragrance.",
    summaryAr: "شراء خشب العود في كوريا الجنوبية: بروتوكولات وزارة البيئة، والطب العشبي، وصناعة العطور الحديثة.",
    directAnswer: "South Korea utilizes agarwood both in traditional oriental herbal formulations and in an expanding luxury lifestyle and niche fragrance market. Commercial imports require authorization from the Ministry of Environment and inspection by the Korea Customs Service. Wholesale consignments must prove legal international forestry origin through authentic CITES documentation.",
    directAnswerAr: "تستخدم كوريا الجنوبية خشب العود في تركيبات الطب العشبي التقليدي وفي سوق العطور الفاخرة وأسلوب الحياة المتنامي. وتتطلب الواردات التجارية تصريحاً من وزارة البيئة وفحصاً من مصلحة الجمارك الكورية. ويجب أن تثبت شحنات الجملة منشأها القانوني من خلال وثائق سايتس الأصلية.",
    control: REGIMES["default"].control,
    controlAr: REGIMES["default"].controlAr,
    channels: REGIMES["default"].channels,
    channelsAr: REGIMES["default"].channelsAr,
    local: "Seoul herbal markets in Gyeongdong trade medicinal-grade agarwood pieces. Perfumers formulating for modern K-beauty brands require stringent microbial testing and full safety documentation from origin distillers.",
    localAr: "تتداول أسواق الأعشاب في سيول قطع العود من الدرجات الطبية. ويطلب مصممو العطور للعلامات الكورية الحديثة اختبارات ميكروبيولوجية دقيقة ووثائق سلامة كاملة من المقطّرين في بلدان المنشأ.",
    directorySlug: 'serving/south-korea',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
  destinationGuide({
    slug: 'buying/in/south-africa',
    name: "South Africa",
    nameAr: "جنوب أفريقيا",
    iso2: "ZA",
    summary: "Importing agarwood into South Africa: Department of Forestry and Environment permits, and luxury perfumery channels.",
    summaryAr: "استيراد خشب العود إلى جنوب أفريقيا: تصاريح وزارة الغابات والبيئة، وقنوات العطور الفاخرة.",
    directAnswer: "South Africa serves as a growing southern hemisphere destination for bespoke fine fragrance creation and luxury retail. Importing agarwood chips and pure oils requires an import permit issued by the Department of Forestry, Fisheries and the Environment  alongside the exporter's CITES documentation. Procuring pre-cleared materials through established international houses simplifies logistics.",
    directAnswerAr: "تمثل جنوب أفريقيا وجهة متنامية في نصف الكرة الجنوبي لتصميم العطور الفاخرة ومتاجر التجزئة الراقية. ويتطلب استيراد رقائق العود والزيوت النقية تصريح استيراد صادر عن وزارة الغابات ومصايد الأسماك والبيئة  إلى جانب وثائق سايتس الخاصة بالمصدّر. ويسهل التوريد عبر شركات تجارية دولية معتمدة المسار اللوجستي.",
    control: REGIMES["default"].control,
    controlAr: REGIMES["default"].controlAr,
    channels: REGIMES["default"].channels,
    channelsAr: REGIMES["default"].channelsAr,
    local: "Cape Town and Johannesburg boutique perfume houses require certified IFRA compliance statements. Border inspection at O.R. Tambo International Airport strictly enforces valid original documents matching the physical goods.",
    localAr: "تطلب دور العطور المستقلة في كيب تاون وجوهانسبرغ شهادات مطابقة لمعايير الجمعية الدولية للعطور. وتفرض أجهزة التفتيش في مطار جوهانسبرغ مطابقة صارمة بين الوثائق الأصلية والشحنات الفعلية.",
    directorySlug: 'serving/south-africa',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
  destinationGuide({
    slug: 'buying/in/egypt',
    name: "Egypt",
    nameAr: "مصر",
    iso2: "EG",
    summary: "Commercial oud procurement in Egypt: Khan el-Khalili perfumery traditions, Cairo wholesale, and Ministry clearances.",
    summaryAr: "التوريد التجاري للعود في مصر: تقاليد خان الخليلي العطرية، وتجارة الجملة بالقاهرة، وتصاريح الوزارة.",
    directAnswer: "Egypt possesses an illustrious history of botanical extraction and natural perfumery, with Cairo serving as an active North African commercial trading centre. Buying oud in Egypt requires distinguishing between imported natural wood and blended oil preparations common in historical souks. Direct commercial importation of raw agarwood requires pre-clearance from the Egyptian Environmental Affairs Agency under CITES guidelines.",
    directAnswerAr: "تمتلك مصر تاريخاً عريقاً في استخلاص الزيوت النباتية وصناعة العطور، وتعتبر القاهرة مركزاً تجارياً رئيسياً في شمال أفريقيا. ويتطلب شراء العود في مصر التمييز بين الأخشاب الطبيعية المستوردة والزيوت المخلوطة الشائعة في الأسواق التاريخية. وتتطلب الواردات التجارية المباشرة موافقة مسبقة من جهاز شؤون البيئة المصري وفقاً لإرشادات سايتس.",
    control: REGIMES["default"].control,
    controlAr: REGIMES["default"].controlAr,
    channels: REGIMES["default"].channels,
    channelsAr: REGIMES["default"].channelsAr,
    local: "Historic fragrance quarters in Khan el-Khalili and Al-Mosky feature extensive traditional attar retail. Commercial perfumers buying bulk oils must request laboratory purity testing to ensure freedom from undisclosed synthetic additives.",
    localAr: "تضم أسواق العطور التاريخية في خان الخليلي والموسكي شبكات تجزئة واسعة للزيوت الشرقية. ويجب على مصنعي العطور الذين يشترون كميات كبيرة طلب اختبارات نقاء مخبرية لضمان خلو الزيوت من الإضافات الصناعية غير المعلنة.",
    directorySlug: 'serving/egypt',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
  destinationGuide({
    slug: 'buying/in/morocco',
    name: "Morocco",
    nameAr: "المغرب",
    iso2: "MA",
    summary: "Purchasing agarwood and incense in Morocco: Medina souk culture, ceremonial usage, and import documentation.",
    summaryAr: "شراء خشب العود والبخور في المغرب: ثقافة أسواق المدن العتيقة، والاستخدامات الاحتفالية، ووثائق الاستيراد.",
    directAnswer: "Morocco maintains deep cultural traditions of aromatic burning for festive ceremonies, hospitality, and spiritual gatherings. Sourcing oud in Casablanca, Fes, and Marrakech requires navigating traditional herbalist markets where agarwood chips are traded alongside local mastic and sandalwood. Importers must comply with national CITES regulations administered by the Department of Waters and Forests.",
    directAnswerAr: "يحافظ المغرب على تقاليد ثقافية عميقة في استخدام البخور العطري في المناسبات والضيافة والطقوس الاجتماعية. ويتطلب توريد العود في الدار البيضاء وفاس ومراكش التعامل مع أسواق العشابين التقليديين حيث يُتداول العود إلى جانب المستكة والصندل. ويجب على المستوردين الامتثال لضوابط سايتس التابعة لقطاع المياه والغابات.",
    control: REGIMES["default"].control,
    controlAr: REGIMES["default"].controlAr,
    channels: REGIMES["default"].channels,
    channelsAr: REGIMES["default"].channelsAr,
    local: "Medina merchants in Marrakech and Fes cater to discerning ceremonial buyers. Wholesale clients should insist on verifying batch origin certificates to ensure wood is authentic Aquilaria rather than dyed substitute timber.",
    localAr: "يلبي تجار المدن القديمة في مراكش وفاس متطلبات المشترين في المناسبات الراقية. ويجب على عملاء الجملة الإصرار على فحص شهادات منشأ الدفعات للتأكد من أن الخشب هو عود طبيعي أصيل وليس أخشاباً بديلة مصبوغة.",
    directorySlug: 'serving/morocco',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
  destinationGuide({
    slug: 'buying/in/brazil',
    name: "Brazil",
    nameAr: "البرازيل",
    iso2: "BR",
    summary: "Importing agarwood into Brazil: IBAMA regulatory oversight, Latin American perfumery, and CITES compliance.",
    summaryAr: "استيراد خشب العود إلى البرازيل: الرقابة التنظيمية لمعهد إيباما، وصناعة العطور في أمريكا اللاتينية، والامتثال لسايتس.",
    directAnswer: "Brazil is the largest cosmetics and fragrance market in South America, with burgeoning interest in exotic orientals and artisan oud notes among S\u00e3o Paulo perfumers. Importing agarwood into Brazil requires strict regulatory oversight from the Brazilian Institute of Environment and Renewable Natural Resources (IBAMA). Pre-authorization is essential to avoid lengthy customs impoundments.",
    directAnswerAr: "تعد البرازيل أكبر سوق لمستحضرات التجميل والعطور في أمريكا الجنوبية، مع اهتمام متزايد بالعطور الشرقية ونفحات العود الحرفية لدى صانعي العطور في ساو باولو. ويتطلب استيراد العود إلى البرازيل رقابة تنظيمية مشددة من المعهد البرازيلي للبيئة والموارد الطبيعية المتجددة (إيباما). والترخيص المسبق ضروري لتجنب الحجز الجمركي.",
    control: REGIMES["default"].control,
    controlAr: REGIMES["default"].controlAr,
    channels: REGIMES["default"].channels,
    channelsAr: REGIMES["default"].channelsAr,
    local: "Brazilian customs enforcement at Santos seaport and Guarulhos International Airport cross-checks botanical taxons against Ministry declarations. Formulators must secure full toxicological dossiers to meet ANVISA sanitary registration requirements.",
    localAr: "تدقق سلطات الجمارك البرازيلية في ميناء سانتوس ومطار غواروليوس الدولي التصنيفات النباتية مقابل إقرارات الوزارة. ويجب على المصممين توفير ملفات سمية كاملة لتلبية اشتراطات التسجيل الصحي لدى وكالة أنفيزا.",
    directorySlug: 'serving/brazil',
    sourceIds: ["CITES_APPENDICES", "ITTO_AGARWOOD_REVIEW"],
  }),
];
