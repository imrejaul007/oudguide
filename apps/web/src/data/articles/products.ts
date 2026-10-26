import type { Article, ArticleRelated } from './types.ts';

/**
 * The product family pages.
 *
 * The route manifest declares twenty-four "Product family" routes and every
 * one of them returned 404, because the content layer had no product-family
 * kind at all. These are those twenty-four pages.
 *
 * A product family page explains a FORMAT, not a product. "Oud Wood" is the
 * family of agarwood heartwood sold as chips, chips-and-dust, blocks and
 * offcuts; it is not a lot, it has no price, and it carries no composition.
 * The page therefore names the forms the family covers, names the things a
 * buyer will confuse it with, and lists the fields a buyer should fill in.
 *
 * The editorial rules applied here:
 *
 *   - No composition, concentration, percentage, ingredient list, yield,
 *     longevity figure, burn time, price, market level or grade is stated
 *     anywhere. Where a page would naturally want to state one, it states
 *     the question a buyer should put to the supplier instead.
 *   - IFRA is treated as a scope, not a badge. Where a fragrance-mixture
 *     standard genuinely applies, the page says what that standard does and
 *     does not establish. Where it does not apply at all — wood, powder,
 *     beads, carvings, burners — the page says so and names the fields that
 *     have no published standard instead of citing IFRA loosely.
 *   - No supplier is named and nothing is priced. The "related suppliers"
 *     section describes what a buyer looks for and points at the directory.
 *   - Every family has its own body. A shared paragraph with the family
 *     name substituted is the defect this corpus was audited for.
 */

const REVIEWED_ON = '2026-10-21';
const REVIEWER = 'OudGuide editorial review';
const REVIEWER_AR = 'مراجعة تحريرية من دليل العود';

/**
 * The review method for a family whose own product is a fragrance mixture.
 */
const REVIEW_METHOD_IFRA =
  'Reviewed against the cited sources. The family boundary was checked against the format descriptions elsewhere in the encyclopedia, every statement about the fragrance-mixture standards was checked against the scope of the source cited for it, and no composition, concentration, price or grade is stated anywhere on the page.';
const REVIEW_METHOD_IFRA_AR =
  'رُوجعت مقابل المصادر المذكورة. ودُقِّق حدّ العائلة مقابل أوصاف الأشكال في الموسوعة، وأن كل قول عن معايير الخصلة العطرية دُقِّق مقابل نطاق المصدر المذكور له، وأنه لا يذكر في الصفحة أي تركيب أو تركيز أو سعر أو درجة.';

/**
 * The review method for a family where a fragrance mixture sits inside the
 * family but the family item itself is not one.
 */
const REVIEW_METHOD_PARTIAL =
  'Reviewed against the cited sources. The family boundary was checked against the format descriptions elsewhere in the encyclopedia, the distinction between the part of the family that carries a fragrance mixture and the part that does not was checked rather than assumed, and no composition, concentration, price or grade is stated anywhere on the page.';
const REVIEW_METHOD_PARTIAL_AR =
  'رُوجعت مقابل المصادر المذكورة. ودُقِّق حدّ العائلة مقابل أوصاف الأشكال في الموسوعة، وأن التمييز بين الجزء الذي يحمل خصلة عطرية والجزء الذي لا يحملها دُقِّق ولم يُفترض، وأنه لا يذكر في الصفحة أي تركيب أو تركيز أو سعر أو درجة.';

/**
 * The review method for a family that carries no fragrance-mixture
 * standard. Here the absence of a published standard is the finding, and
 * saying so is part of the answer.
 */
const REVIEW_METHOD_NO_IFRA =
  'Reviewed against the cited sources. The family boundary was checked against the format descriptions elsewhere in the encyclopedia, the absence of a published standard for each field was checked rather than asserted, and no composition, concentration, price or grade is stated anywhere on the page.';
const REVIEW_METHOD_NO_IFRA_AR =
  'رُوجعت مقابل المصادر المذكورة. ودُقِّق حدّ العائلة مقابل أوصاف الأشكال في الموسوعة، وأن غياب المعيار المنشور لكل حقل دُقِّق ولم يُدّعَ، وأنه لا يذكر في الصفحة أي تركيب أو تركيز أو سعر أو درجة.';

/** The seven sections every family page carries, in the manifest's order. */
const HEADINGS = {
  includes: { heading: 'What this family includes', headingAr: 'ما الذي تشمله هذه الفئة' },
  notTheSame: { heading: 'Not the same as', headingAr: 'ليس هو نفسه' },
  fields: { heading: 'Material and format fields', headingAr: 'حقول المادة والشكل' },
  comparisons: { heading: 'Comparisons', headingAr: 'المقارنات' },
  requirements: { heading: 'Buyer requirements', headingAr: 'متطلبات المشتري' },
  suppliers: { heading: 'Related suppliers', headingAr: 'الموردون ذوو الصلة' },
  guides: { heading: 'Relevant guides', headingAr: 'الأدلة ذات الصلة' },
} as const;

interface FamilySection {
  heading: string;
  headingAr: string;
  body: string[];
  bodyAr: string[];
}

interface FamilySpec {
  slug: string;
  title: string;
  titleAr: string;
  summary: string;
  summaryAr: string;
  directAnswer: string;
  directAnswerAr: string;
  sections: FamilySection[];
  sourceIds: string[];
  /** Which review method applies to this family. */
  method: 'ifra' | 'partial' | 'no-ifra';
  limitations: string;
  limitationsAr: string;
  nextSteps: string[];
  nextStepsAr: string[];
  related: ArticleRelated[];
}

function productFamily(spec: FamilySpec): Article {
  const reviewMethod =
    spec.method === 'ifra'
      ? REVIEW_METHOD_IFRA
      : spec.method === 'partial'
        ? REVIEW_METHOD_PARTIAL
        : REVIEW_METHOD_NO_IFRA;
  const reviewMethodAr =
    spec.method === 'ifra'
      ? REVIEW_METHOD_IFRA_AR
      : spec.method === 'partial'
        ? REVIEW_METHOD_PARTIAL_AR
        : REVIEW_METHOD_NO_IFRA_AR;

  return {
    slug: spec.slug,
    kind: 'product',
    state: 'reviewed',
    title: spec.title,
    titleAr: spec.titleAr,
    h1: spec.title,
    h1Ar: spec.titleAr,
    summary: spec.summary,
    summaryAr: spec.summaryAr,
    directAnswer: spec.directAnswer,
    directAnswerAr: spec.directAnswerAr,
    sections: spec.sections,
    sourceIds: spec.sourceIds,
    limitations: spec.limitations,
    limitationsAr: spec.limitationsAr,
    reviewer: REVIEWER,
    reviewerAr: REVIEWER_AR,
    reviewMethod,
    reviewMethodAr,
    reviewedOn: REVIEWED_ON,
    nextSteps: spec.nextSteps,
    nextStepsAr: spec.nextStepsAr,
    related: spec.related,
    parent: 'products',
  };
}

export const productFamilyArticles: Article[] = [
  productFamily({
    slug: 'products/oud-wood',
    title: 'Oud Wood',
    titleAr: 'خشب العود',
    summary:
      'The raw agarwood family sold as chips, dust, blocks and offcuts, and the fields a buyer fills in.',
    summaryAr:
      'عائلة خشب العود الخام المباعة رقائق ونشارة وكتلاً وقطعاً متبقية، والحقول التي يملأها المشتري.',
    directAnswer:
      'Oud wood is a raw-material family: the resinous heartwood of Aquilaria and Gyrinops, sold in physical forms — chips, chips-and-dust, blocks, shavings and offcuts — for distilling, for burning or as an object. It is not a particular lot, it carries no fragrance formulation, and none of its fields is governed by a published standard. What a buyer settles is the species, the physical form, the treatment and the batch.',
    directAnswerAr:
      'خشب العود عائلة مواد خام: قلب الشجرة الراتنجي من جنسَي Aquilaria وGyrinops، يُباع بأشكال فيزيائية — رقائق، ورقائق ونشارة، وكتل، وشظايا، وقطع متبقية — للتقطير أو للحرق أو كقطعة. وهو ليس لوطاً بعينه، ولا يحمل تركيبة عطرية، ولا يخضع أي من حقوله لمعيار منشور. وما يحسمه المشتري هو النوع والشكل الفيزيائي والمعالجة ومرجع الدفعة.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers agarwood sold as material rather than as a prepared product: chips of a stated size, the mixed chips-and-dust fraction that comes off a cutting line, blocks and half-blocks, and the shavings and offcuts a processor keeps. The form usually follows the use, because distillation wants a consistent chip size and a workshop wants pieces large enough to hold.',
          'Because a family is a category rather than a product, the useful question is where the material sits in the supply chain. Wood sold by a grower or a collector is a different transaction from wood sold by a processor who has cut and graded it, and the record that travels with it is different too.',
        ],
        bodyAr: [
          'تغطي العائلة العود المبيع مادةً لا منتجاً جاهزاً: رقائق بحجم مذكور، وخلاصة الرقائق والنشارة المتأتية من خط القطع، وكتل ونصف كتل، والشظايا والقطع المتبقية التي يحتفظ بها المشغّل. والشكل يتبع الغرض عادةً، لأن التقطير يريد رقاقات بحجم متسق، والورشة تريد قطعاً كبيرة بما يكفي للّمسك.',
          'ولأن العائلة فئة لا منتج، فالسؤال المفيد هو أين تقع المادة في سلسلة الإمداد. فالخشب الذي يبيعه مزارع أو جامع معاملة مختلفة عن الخشب الذي يبيعه مشغّل قطع وفرز، والسجل الذي يرافقه مختلف أيضاً.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'Oud wood is not oud oil. The oil is what comes out of the wood when it is distilled; the wood is what goes in. A buyer who needs a quantity of oil should buy oil, because distilling recovers a fraction of the wood weight and the still, the fuel and the time are all the buyer\'s.',
          'It is not bakhoor, which is wood that has already been infused with oil and is sold ready to burn. It is not an oud accord, which is a manufactured fragrance material. And it is not a sinking grade or a Super label, both of which are trade vocabulary with no published standard behind them.',
        ],
        bodyAr: [
          'خشب العود ليس دهن العود. فالدهن هو ما يخرج من الخشب عند تقطيره، والخشب هو ما يدخل. ومن يحتاج كمية دهن فليشترِ الدهن، لأن التقطير يستعيد جزءاً من وزن الخشب، والمِقطَّر والوقود والوقت كلها على حساب المشتري.',
          'وليس بخوراً، وهو خشب شُبِّع بالزيت مسبقاً ويُباع جاهزاً للحرق. وليس أوز عود، وهو مادة عطرية مصنّعة. وليس درجة غطاس ولا شارة سوبر، وكلاهما مفردات تجارية لا تقوم خلفها معايير منشورة.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields a buyer should fill in are the species, the physical form and cut size, whether the material is wild or cultivated, whether it has been treated and with what, the batch reference, and the weight basis of the quotation. Species is the one field with regulatory consequences: all members of Aquilaria and Gyrinops are listed in CITES Appendix II, and the species decides the documentation a shipment has to carry.',
          'None of the other fields has a published standard behind it. There is no published definition of a chip size, of a dust fraction, of a treated wood, or of a grade. What can be asked for instead is a description: what was cut, from what, and how it was handled.',
        ],
        bodyAr: [
          'الحقول التي ينبغي للمشتري أن يملأها هي النوع، والشكل الفيزيائي وحجم القطع، وهل المادة برية أم مستزرعة، وهل عولجت وبماذا، ومرجع الدفعة، وأساس الوزن في عرض السعر. والنوع هو الحقل الوحيد الذي له أثر تنظيمي: فجميع أعضاء جنسَي Aquilaria وGyrinops مشمولون في ملحق سايتس الثاني، والنوع هو الحقل الذي يحدد الوثائق التي يجب أن تحملها الشحنة.',
          'ولا يقوم خلف أي حقل آخر معيار منشور. فلا تعريف منشور لحجم الرقاقة، ولا لخلاصة النشارة، ولا للخشب المعالَج، ولا للدرجة. وبدل ذلك يمكن طلب وصف: ما الذي قُطع، ومن ماذا، وكيف عولج.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'Wood stands against oil, against bakhoor and against the wood of another tree. Within the family, chips serve distillation, blocks and larger pieces serve burning or objects, and the dust fraction serves neither well. Chips with visible resin are not interchangeable with clean whitewood, and a seller who treats them as one product is not describing the same material twice.',
        ],
        bodyAr: [
          'يقف الخشب مقابل الزيت، ومقابل البخور، ومقابل خشب شجرة أخرى. وداخل العائلة تخدم الرقائق التقطير، وتخدم الكتل والقطع الأكبر الحرق أو التقديم، ولا تخدم خلاصة النشارة أيّهما كما ينبغي. والرقائق ذات الراتنج الظاهر ليست قابلة للتبادل مع الخشب الأبيض النظيف، والبائع الذي يعاملهما كمنتج واحد لا يصف المادة نفسها مرتين.',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'Settle the use before the price, because a distillation buyer and a burning buyer want different cuts. Then ask for the species, the treatment, the batch reference and the weight basis, and ask whether the quoted price belongs to a specific lot or to a market level. A price per kilo with no resin figure attached is a market level, and a market level moves between quotations.',
        ],
        bodyAr: [
          'حدّد الغرض قبل السعر، لأن مشتري التقطير ومشتري الحرق يريدان قطعاً مختلفة. ثم اسأل عن النوع، وعن المعالجة، وعن مرجع الدفعة، وعن أساس الوزن، واسأل إن كان السعر المعروض لوطاً بعينه أم مستوى سوق. فسعر الكيلو بلا نسبة راتنج هو مستوى سوق، ومستوى السوق يتحرك بين عرض وآخر.',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The supplier directory separates the trades a wood buyer deals with: growers and collectors at the origin end, wood processors and exporters who cut and grade, and wholesalers who sell in trade quantities. A wood supplier worth approaching is one whose paperwork names the species and the harvest documentation, because a shipment cannot be documented from a photograph of resinous colour.',
        ],
        bodyAr: [
          'يفصل دليل الموردين الحرف التي يتعامل معها مشتري الخشب: المزارعون والجمع عند طرف المنشأ، ومشغّلو الخشب والمصدّرون الذين يقطعون ويفرّزون، وبائعو الجملة الذين يبيعون بكميات تجارية. والمورد الذي يقترب منه مشتري الخشب هو الذي تُسمّي أوراقه النوع ووثائق الجمع، إذ لا يمكن توثيق شحنة من صورة للون الراتنج.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Choosing an oud wood purchase sets out the questions to press on before a quotation arrives. Wood versus oil: choose a format explains when wood is the wrong purchase altogether. Conservation and trade documentation covers the papers a species-listed shipment has to carry.',
        ],
        bodyAr: [
          'صفحة اختيار شراء خشب عود تضع الأسئلة التي ينبغي الضغط عليها قبل وصول عرض السعر. وصفحة الخشب مقابل الزيت تشرح متى يكون الخشب شراءً خاطئاً أصلاً. وصفحة وثائق الحماية والتجارة تغطّي الأوراق التي يجب أن تحملها الشحنة المشمولة بنوع نباتي.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
    method: 'no-ifra',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not assess any lot, does not state a resin content or a yield, and does not establish the legal status of any specific shipment.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تقيّم أي لوط، ولا تذكر نسبة راتنج ولا مردوداً، ولا تثبت الوضع القانوني لشحنة بعينها.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read choosing an oud wood purchase'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة اختيار شراء خشب عود'],
    related: [
      { slug: 'buying/choosing-oud-wood', label: 'Choosing an oud wood purchase' },
      { slug: 'using-oud/wood-versus-oil', label: 'Wood versus oil: choose a format' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
    ],
  }),

  productFamily({
    slug: 'products/oud-oil',
    title: 'Oud Oil',
    titleAr: 'دهن العود',
    summary:
      'The distilled family, sold as a concentrate or a carrier dilution, and the fields that separate one oil from another.',
    summaryAr:
      'عائلة التقطير، المباعة مركّزة أو مخففة بحامل، والحقول التي تفصل زيتاً عن آخر.',
    directAnswer:
      'Oud oil is the family of distillates made from agarwood heartwood, sold either as a near-undiluted concentrate or diluted into a carrier for handling and price. It is not a particular distillation, and the word on the label establishes none of the things a buyer needs: the plant, the method, the date, the carrier or the proportion. Those are the fields, and they are what the price is actually attached to.',
    directAnswerAr:
      'دهن العود عائلة نواتج التقطير من قلب شجرة العود، تُباع أماً مركّزة قريبة من الخالص أو مخففة في حامل لتسهيل التعامل والسعر. وهو ليس تقطيراً بعينه، والكلمة المكتوبة على الملصق لا تثبت شيئاً مما يحتاجه المشتري: النبات ولا الطريقة ولا التاريخ ولا الحامل ولا النسبة. هذه هي الحقول، وهي ما يرتبط به السعر في الحقيقة.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers oils obtained from agarwood by hydro-distillation, by steam distillation and by solvent extraction, and it covers the ways such an oil reaches a buyer: as a concentrate in a small sealed vial, diluted in a carrier in a larger bottle, or combined with a fragrance base as a compounded oil.',
          'It also covers the question of scale. The same distillation can be a single copper pot in a workshop or a plant with several stills, and the difference shows up in consistency between batches rather than in the name on the bottle.',
        ],
        bodyAr: [
          'تغطي العائلة الزيوت المستخرجة من خشب العود بالتقطير المائي، وبالتقطير البخاري، وبالاستخلاص بالمذيبات، وتغطي الطرق التي يصل بها هذا الزيت إلى المشتري: مركّزاً في قارورة صغيرة محكمة، أو مخففاً في حامل داخل قارورة أكبر، أو ممزوجاً بقاعدة عطرية زيتاً مركّباً.',
          'وتغطي مسألة الحجم أيضاً. فالتقطير نفسه قد يكون دِقّاً نحاسياً واحداً في ورشة، أو مصنعاً بعدة مُقطَّرات، والفرق يظهر في اتساق الدفعات لا في الاسم على القارورة.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'Oud oil is not oud wood; the oil is what the wood yields, not the wood itself. It is not bakhoor, which is wood holding oil. And it is not an oud accord, which is a manufactured material built to imitate oud and contains none of it.',
          'It is also not a perfume. Oil is a concentrate without a finished formulation around it, and it is not a blend sold under a fragrance brand name. A label that says "oud oil" tells the buyer the source category and nothing about what is in the bottle.',
        ],
        bodyAr: [
          'دهن العود ليس خشب العود؛ فالدهن ما ينتجه الخشب لا الخشب نفسه. وليس بخوراً، وهو خشب حامل للزيت. وليس أوز عود، وهو مادة مصنّعة تحاكي العود ولا يحتوي منه شيئاً.',
          'وليس عطراً أيضاً. فالدهن مركّز بلا تركيبة منتهية حوله، وليس مزيجاً يُباع تحت اسم علامة عطرية. والملصق الذي يقول «دهن عود» يخبر المشتري بمصدر المادة فقط لا بما في القارورة.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields are: the plant and its species; the extraction method; the distillation date; the carrier and the proportion of actual distillate; the storage since; the batch reference; and the container, which matters because a volatile material changes in a partly filled bottle faster than in a full one.',
          'On the standards side, note what the scope actually is. IFRA states that it does not itself issue certificates, does not create them and does not authorise any organisation to certify on its behalf, and that IFRA certificates are generally not issued for raw materials. A distillation offered as a raw material therefore sits outside that certificate mechanism by construction. What the standards do reach is the finished consumer product into which a buyer may put the oil, and the limits there are expressed in that finished product rather than in the mixture.',
        ],
        bodyAr: [
          'الحقول هي: النبات ونوعه؛ وطريقة الاستخلاص؛ وتاريخ التقطير؛ والحامل ونسبة النواتج الفعلية؛ والتخزين منذ ذلك الحين؛ ومرجع الدفعة؛ والوعاء، وهو مهم لأن المادة المتطايرة تتغير في قارورة نصف ممتلئة أسرع منها في ممتلئة.',
          'وفي جانب المعايير، انظر ما هو نطاقها فعلاً. فتذكر IFRA أنها لا تصدر هي شهادات ولا تنشئها ولا تفوّض أي جهة بالتصديق نيابةً عنها، وأن شهادات IFRA لا تُصدر عادةً للمواد الخام. فالتقطير المعروض كمادة خام يقع خارج آلية الشهادة بحكم بنائه. وما تصل إليه المعايير هو المنتج الاستهلاكي المنتهي الذي يضع فيه المشتري الزيت، والحدود فيه تُحدَّد في ذلك المنتج المنتهي لا في الخصلة.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'Two oils quoted at the same price per tola can be different products, because the same unit can hold a concentrate or a dilution. The comparison that matters is therefore quantity of actual distillate against price, not price per bottle.',
          'Within the family, copper and steam produce materially different oils from the same wood, and a newly distilled oil and an aged one are different products as well. Neither distinction is visible on the label.',
        ],
        bodyAr: [
          'قد يكون زيتان معروضان بالسعر نفسه لكل تولا منتجين مختلفين، لأن الوحدة نفسها قد تحمل مركّزاً أو تخفيفاً. والمقارنة المهمة هي كمية النواتج الفعلية مقابل السعر، لا السعر لكل قارورة.',
          'وداخل العائلة، ينتج النحاس والبخار زيوتاً مختلفة جوهرياً من الخشب نفسه، والزيت المستحدث والزيت المعتّق منتجان مختلفان أيضاً. ولا شيء من هذا التمييز يظهر في الملصق.',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'Ask four things and the rest becomes easier to judge: what proportion is actual distillate, what it is diluted with, when it was distilled, and how it has been stored since. Heat and light change a distillate, and an oil that has been kept badly cannot be compared against a fresh delivery.',
          'Then ask whether the price is for a specific lot. A quotation tied to a lot should carry that lot with it; a price that is only a market level will be quoted differently by the next supplier.',
        ],
        bodyAr: [
          'اسأل أربعة أشياء فتصير البقية أسهل في الحكم: ما نسبة النواتج الفعلية، وبماذا خُفِّف، ومتى قُطّر، وكيف حُفظ منذ ذلك الحين. فالحرارة والضوء يغيّران النواتج، والزيت الذي حُفظ سيئاً لا يمكن مقارنته بتسليم طازج.',
          'ثم اسأل إن كان السعر لوطاً بعينه. فعرض السعر المرتبط لوطاً ينبغي أن يسير معه، والسعر الذي هو مستوى سوق فقط سيقوله المورد التالي بصيغة أخرى.',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The directory separates the trades involved: distillers who work from wood to oil, exporters and raw-material suppliers who move it, and perfume-oil suppliers who compound and supply fragrance oils for formulation. A distiller worth approaching is one who can state the plant, the method and the date of a specific batch.',
        ],
        bodyAr: [
          'يفصل الدليل الحرف المعنية: المقطّرون الذين يعملون من الخشب إلى الزيت، والمصدّرون وموردو المواد الخام الذين ينقلونه، وموردو الزيوت العطرية الذين يركّبون ويورّدون زيوتاً عطرية للصياغة. والمقطّر الذي يقترب منه المشتري هو الذي يستطيع أن يذكر النبات والطريقة وتاريخ دفعة بعينها.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Choosing an oud oil purchase sets out the four questions that separate two oils quoted alike. Comparing oud oil offers shows how to expand two quotations into the same fields before looking at price. Distillation and extraction comparisons explains why the method changes the oil.',
        ],
        bodyAr: [
          'صفحة اختيار شراء دهن عود تضع الأسئلة الأربعة التي تفصل زيتين معروضين بالطريقة نفسها. وصفحة مقارنة عروض دهن العود تبيّن كيف توسّع عرضَي سعر إلى الحقول نفسها قبل النظر في السعر. وصفحة مقارنات التقطير والاستخلاص تشرح لماذا تغيّر الطريقة الزيت.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'IFRA_STANDARDS', 'IFRA_APPLYING', 'CITES_APPENDICES'],
    method: 'partial',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not state a concentration, a proportion, a yield, a price or an age, and it does not establish that any named supplier holds a certificate.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تذكر تركيزاً ولا نسبة ولا مردوداً ولا سعراً ولا عمراً، ولا تثبت أن أي مورد مذكور يحمل شهادة.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read choosing an oud oil purchase'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة اختيار شراء دهن عود'],
    related: [
      { slug: 'buying/choosing-oud-oil', label: 'Choosing an oud oil purchase' },
      { slug: 'buying/comparing-oud-oil-offers', label: 'Comparing oud oil offers' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
    ],
  }),

  productFamily({
    slug: 'products/perfume-oils',
    title: 'Perfume Oils',
    titleAr: 'الزيوت العطرية',
    summary:
      'Concentrated fragrance oils supplied for formulation, and the fields that make one usable in a formula.',
    summaryAr:
      'زيوت عطرية مركّزة تُورَّد للصياغة، والحقول التي تجعل واحدة صالحة في التركيبة.',
    directAnswer:
      'Perfume oils are concentrated fragrance materials supplied to a formulator or a retailer: a fragrance compound in a carrier, offered at a strength suited to the use it is meant for. The family is defined by purpose rather than by material, so the fields that matter are the intended use, the carrier, the concentration and the conformity position of the mixture. It is not a finished perfume, and it is not a scented body oil.',
    directAnswerAr:
      'الزيوت العطرية مواد عطرية مركّزة تُورَّد لصاحب الصياغة أو لمتجزئ: خصلة عطرية في حامل، معروضة بقوة تناسب الاستعمال المقصود منها. والعائلة تُعرَّف بالغرض لا بالمادة، فالحقول المهمة هي الاستخدام المقصود والحامل والتركيز وموقف المطابقة للخلصة. وهي ليست عطراً منتهياً، وليست زيت جسد معطراً.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers fragrance compounds and their dilutions: a concentrate sold in millilitres to a perfumer or a formulator, a ready-to-use dilution for a scented product line, a hair oil or body oil built on a fragrance base, and a base with oud character supplied to a house that blends on it.',
          'It is a supplier-facing family. The buyer is usually another business, which is why the paperwork is more developed here than in most of this encyclopedia: the intended use has to be named, because the same oil is not the same product in a soap, a candle and a diffuser.',
        ],
        bodyAr: [
          'تغطي العائلة تركيبات العطر وتخفيفاتها: تركيزاً يُباع بالملليلتر لعطار أو لصاحب صياغة، وتخفيفاً جاهزاً لخط منتجات معطرة، وزيت شعر أو زيت جسد مبني على قاعدة عطرية، وقاعدة ذات طابع عود تُورَّد لدار تُركّب عليها.',
          'وهي عائلة موجَّهة إلى المورد. فالمشتري عادةً مشروع آخر، ولهذا تطوير المستندات فيها أكثر رسوخاً من سائر الموسوعة: فالاستخدام المقصود يجب أن يُسمّى، لأن الزيت نفسه ليس المنتج نفسه في الصابون والشمعة والناشر.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'A perfume oil is not a finished perfume. There is no complete formulation, no final concentration design and no packaging around it; the buyer adds the rest.',
          'It is not an attar, which is a tradition of alcohol-free application and a particular presentation. It is not a body or hair oil whose primary function is to moisturise and which carries scent as a marketing attribute. And it is not an oud oil: a drop of oud distillate in a compound does not make the compound an oud oil.',
        ],
        bodyAr: [
          'زيت العطر ليس عطراً منتهياً. فلا تركيبة مكتملة ولا تصميم تركيز نهائي ولا تغليف حوله؛ فالمشتري يضيف الباقي.',
          'وليس عطراً شرقياً، وهو تقليد في التطبيق الخالي من الكحول وفي طريقة عرض بعينها. وليس زيت جسد أو زيت شعر وظيفته الأساسية الترطيب ويحمل الرائحة صفة تسويقية. وليس دهن عود: فقطرة من نواتج العود في خصلة لا تجعل الخصلة دهن عود.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields are: the intended use and the surface it will meet; the carrier; the concentration and the basis on which it is stated; the conformity position of the fragrance mixture; the allergen declaration; the batch reference and the date; and the packaging, including fill level and closure.',
          'The intended-use field is the one the standards turn on. IFRA states that the applicable product category is determined from the intended use of the product, that quantitative limits are expressed as an upper concentration in the finished consumer product rather than in the mixture, and that conformity for a mixture is established by the formulator or supplier for that stated use. A Certificate of Conformity covers a fragrance mixture intended for incorporation into a finished consumer product, certificates are generally not issued for raw materials, and a certificate does not replace a safety assessment.',
        ],
        bodyAr: [
          'الحقول هي: الاستخدام المقصود والسطح الذي سيلمسه؛ والحامل؛ والتركيز وأساس ذكره؛ وموقف مطابقة الخصلة العطرية؛ وإقرار المواد الحساسة؛ ومرجع الدفعة والتاريخ؛ والتغليف، بما فيه مستوى الملء والإغلاق.',
          'وحقل الاستخدام المقصود هو ما تدور عليه المعايير. فتذكر IFRA أن فئة المنتج المنطبقة تُحدَّد من الاستخدام المقصود للمنتج، وأن الحدود الكمية تُحدَّد كحدّ أعلى لتركيز المادة في المنتج النهائي لا في الخصلة، وأن مطابقة الخصلة يثبتها مُركِّبها أو مورّدها لذلك الاستخدام المقصود. وشهادة المطابقة تغطي خصلة عطرية مزمع إدخالها في منتج استهلاكي منتهٍ، والشهادات لا تُصدر عادةً للمواد الخام، والشهادة لا تُغني عن تقييم السلامة.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'Against a finished perfume, a perfume oil is stronger and unfinished: the buyer supplies the balance and the packaging. Against an attar, it is a trade format rather than a tradition, and it may be offered with an alcohol content. Against a body oil, it is fragrance-led rather than emollient-led.',
          'And against a raw material, it is already formulated, which means its behaviour in a final product is fixed before the buyer sees it.',
        ],
        bodyAr: [
          'مقابل العطر المنتهي، زيت العطر أقوى وغير منتهٍ: فالمشتري يضيف التوازن والتغليف. ومقابل العطر الشرقي، هو شكل تجاري لا تقليد، وقد يُعرض بنسبة كحول. ومقابل زيت الجسد، هو قاده العطر لا الترطيب.',
          'ومقابل المادة الخام، هو مركّب مسبقاً، أي أن سلوكه في المنتج النهائي محسوم قبل أن يراه المشتري.',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'Ask what the oil is for before anything else, because the intended use determines which restrictions apply and how the material behaves. Then ask the carrier, the concentration basis, the conformity statement and its scope, and the allergen position for the market being shipped to.',
          'A supplier who answers the intended-use question precisely has understood the question. A supplier who answers with a general statement about the whole catalogue has not, and the buyer cannot tell from that whether the specific oil in the bottle is the one the statement covers.',
        ],
        bodyAr: [
          'اسأل عن غرض الزيت أولاً، لأن الاستخدام المقصود هو ما يحدد أي القيود تنطبق وكيف تتصرف المادة. ثم اسأل عن الحامل، وعن أساس ذكر التركيز، وعن بيان المطابقة ونطاقه، وعن موقف المواد الحساسة بالنسبة للسوق المشحون إليه.',
          'والمورد الذي يجيب عن سؤال الاستخدام المقصود بدقة هو الذي فهم السؤال. والمورد الذي يجيب ببيان عام عن الكتالوج كله لم يفهمه، ولا يستطيع المشتري أن يعلم من ذلك أن الزيت في القارورة هو الذي يغطيه البيان.',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The directory separates perfumers, perfume-oil suppliers and perfume manufacturers, and the distinction matters here: a perfumer composes, an oil supplier supplies material in the form the buyer needs, and a manufacturer produces a finished product. Look for a supplier that states its intended uses rather than one that lists only fragrance families.',
        ],
        bodyAr: [
          'يفصل الدليل العطارين وموردي الزيوت العطرية ومصنّعي العطور، والتمييز مهم هنا: فالعطار يرّكّب، ومورد الزيوت يورّد مادة بالشكل الذي يحتاجه المشتري، والمصنّع ينتج منتجاً منتهياً. فابحث عن مورد يذكر استخداماته المقصودة لا عن مورد يذكر عائلات عطرية فحسب.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Fragrance notes versus ingredients explains why the words on a label and the materials in a formula are not the same thing. Reading intended-use instructions shows where the conditions sit as against the guidance. How oud is described in perfumery covers the vocabulary a brief is written in.',
        ],
        bodyAr: [
          'صفحة النوتات مقابل المكونات تشرح لماذا ليست الكلمات على الملصق والمواد في التركيبة الشيء نفسه. وصفحة قراءة تعليمات الاستخدام المقصود تبيّن أين تقع الشروط وأين تقع الإرشادات. وصفحة كيف يوصف العود في العطور تغطي مفردات الموجز.',
        ],
      },
    ],
    sourceIds: ['IFRA_STANDARDS', 'IFRA_LIBRARY', 'IFRA_APPLYING', 'CITES_APPENDICES', 'AGARWOOD_REVIEW_2014'],
    method: 'ifra',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not state a concentration, a percentage, an ingredient list or a price, and it does not establish that any product conforms to any standard.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تذكر تركيزاً ولا نسبة ولا قائمة مكونات ولا سعراً، ولا تثبت مطابقة أي منتج لأي معيار.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read reading intended-use instructions'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة قراءة تعليمات الاستخدام المقصود'],
    related: [
      { slug: 'fragrance/notes-versus-ingredients', label: 'Fragrance notes versus ingredients' },
      { slug: 'using-oud/reading-product-instructions', label: 'Reading intended-use instructions' },
      { slug: 'fragrance/oud-in-perfumery', label: 'How oud is described in perfumery' },
    ],
  }),

  productFamily({
    slug: 'products/attars',
    title: 'Attars',
    titleAr: 'العطور الشرقية',
    summary:
      'Concentrated fragrance preparations in an oil-type base, applied by dabbing, and the fields behind the name.',
    summaryAr:
      'مستحضرات عطرية مركّزة في قاعدة زيتية، تُلطَّم على البشرة، والحقول التي يقوم عليها الاسم.',
    directAnswer:
      'Attar is a family of concentrated fragrance preparations sold in small quantities and applied by dabbing rather than spraying, traditionally in an oil-type base. The word describes a format and a tradition of use, not a formula: it does not establish what the base is, whether any alcohol is present, whether the material is natural or an accord, or how strong the preparation is. Those are the fields a buyer fills in from the label and from the supplier.',
    directAnswerAr:
      'العطر الشرقي عائلة مستحضرات عطرية مركّزة تُباع بكميات صغيرة وتُلطَّم على البشرة لا تُرش، وتقليدياً في قاعدة زيتية. والكلمة تصف شكلاً وتقليد استعمال لا تركيبة: فهي لا تثبت ما هي القاعدة، ولا وجود الكحول، ولا هل المادة طبيعية أم أوز، ولا مدى القوة. وهذه هي الحقول التي يملؤها المشتري من الملصق ومن المورد.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers the traditional oil-based and alcohol-free preparations, the scented body oils sold on the same pattern, and the small decantations and gift-sized bottles of the same things. It also covers the cases where the word is used loosely for any highly concentrated fragrance oil sold for dabbing.',
          'Because the format is defined by use rather than by material, the family spans both genuine distillates and manufactured accords. A buyer who assumes the word settles the question of what is inside has settled nothing.',
        ],
        bodyAr: [
          'تغطي العائلة المستحضرات التقليدية ذات القاعدة الزيتية والخالية من الكحول، وزيوت الجسد المعطرة المباعة على النمط نفسه، والعيّنات الصغيرة والقوارير المعنونة من الأشياء نفسها. كما تغطي الحالات التي يُستعمل فيها اللفظ فضفاضة لأي زيت عطر مركّز يُباع للّطم.',
          'ولأن الشكل يُعرَّف بالاستعمال لا بالمادة، فإن العائلة تمتد على التقطيرات الحقيقية والأوزات المصنّعة معاً. ومن ظن أن اللفظ يحسم مسألة المحتوى فقد لم يحسم شيئاً.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'An attar is not a spray perfume. The application method is different, the quantity used is different, and the buyer who wants to spray should not be sold a dabbing preparation.',
          'It is not a perfume oil sold for compounding, which is a trade supply. It is not a scented body oil whose purpose is moisturising. And it is not an oud oil: an attar may contain no agarwood at all, and one that does is still a compounded preparation rather than a distillation.',
        ],
        bodyAr: [
          'العطر الشرقي ليس عطراً يُرش. فطريقة التطبيق مختلفة، وكمية الاستعمال مختلفة، ومن يريد الرش لا ينبغي أن يُباع له مستحضر للّطم.',
          'وليس زيت عطر يُباع للصياغة، وهو توريد تجاري. وليس زيت جسد معطراً غرضه الترطيب. وليس دهن عود: فقد لا يحتوي العطر الشرقي على خشب عود أصلاً، ومن يحتوي على شيء منه يبقى مستحضراً مركّباً لا تقطيراً.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields are: the base or carrier; whether the fragrance is natural, a blend or an accord, and in what proportion each; the concentration as the seller states it and the basis for that statement; the intended use and whether the product is evaluated for skin contact; the batch reference and date; and the container, which for a small dabbing bottle is usually a dropper.',
          'On the standards, note the boundary carefully. A Certificate of Conformity applies to a fragrance mixture intended for incorporation into a finished consumer product and is generally not issued for raw materials, and conformity with the standards does not exempt a company from the national or local rules that govern the market it is sold into. A preparation sold for skin contact is governed by that market\'s rules on cosmetic products as well as by the fragrance-mixture limits.',
        ],
        bodyAr: [
          'الحقول هي: القاعدة أو الحامل؛ وهل العطر طبيعي أم مزيج أم أوز، وبأي نسبة لكل منها؛ والتركيز كما يذكره البائع وأساس هذا الذكر؛ والاستخدام المقصود وهل المنتج مقيَّم للاستخدام على البشرة؛ ومرجع الدفعة والتاريخ؛ والوعاء، وهو في القارورة الصغيرة عادةً قطارة.',
          'وفي المعايير، انتبه إلى الحدّ بعناية. فشهادة المطابقة تنطبق على خصلة عطرية مزمع إدخالها في منتج استهلاكي منتهٍ، ولا تُصدر عادةً للمواد الخام، والمطابقة مع المعايير لا تعفي الشركة من القواعد الوطنية أو المحلية التي تحكم السوق الذي يباع فيه المنتج. أما المستحضر المبيع للاستخدام على البشرة فيحكمه نظام مستحضرات التجميل في ذلك السوق إلى جانب حدود الخصلة العطرية.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'An attar and a perfume oil differ in use and in supply: one is a finished preparation for a person, the other a concentrate for a formulator. An attar and a finished perfume differ in application rather than in strength alone, and a scent that reads as powerful in one can read as thin in the other.',
          'And an attar made on an accord and one made on a distillation are different products that share a name, which is why the difference has to come out of the field list rather than out of the word.',
        ],
        bodyAr: [
          'العطر الشرقي وزيت العطر يختلفان في الاستعمال وفي التوريد: أحدهما مستحضر منتهٍ لشخص، والآخر مركّز لصاحب صياغة. والعطر الشرقي والعطر المنتهي يختلفان في طريقة التطبيق لا في القوة وحدها، فرائحة تبدو قوية في أحدهما قد تبدو خفيفة في الآخر.',
          'والعطر الشرقي المصنوع على أوز والمصنوع على تقطير منتجان مختلفان يتشاركان الاسم، ولهذا يجب أن يخرج التمييز من قائمة الحقول لا من الكلمة.',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'Ask what the base is and whether alcohol is present, because that decides how the preparation should be stored, how it behaves on skin, and which rules govern it in the destination market. Then ask what the fragrance is made from, and whether the supplier will say plainly that it is an accord.',
          'And buy a small quantity first. A concentrated preparation is easy to buy and hard to return, and the only way to know whether the scent suits the person is to open it.',
        ],
        bodyAr: [
          'اسأل ما هي القاعدة وهل الكحول موجود، لأن ذلك يحدد كيف يُحفظ المستحضر، وكيف يتصرف على البشرة، وأي القواعد تحكمه في سوق الوجهة. ثم اسأل عن المواد التي بُني منها العطر، وهل يقبل المورد أن يقول صراحةً إنه أوز.',
          'واشترِ كمية صغيرة أولاً. فالمستحضر المركّز سهل الشراء صعب الإرجاع، والطريقة الوحيدة لمعرفة أن الرائحة تناسب صاحبها هي فتح القارورة.',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The directory lists attar makers separately from perfume-oil suppliers and from perfume manufacturers, and the separation reflects the work: an attar maker blends and decants into small bottles, an oil supplier supplies material in bulk, and a manufacturer produces a finished line. Look for a maker who describes the base and the fragrance composition on request.',
        ],
        bodyAr: [
          'يفصل الدليل صانعي العطور الشرقية عن موردي الزيوت العطرية وعن مصنّعي العطور، ويعكس هذا الفصل طبيعة العمل: فصانع العطر الشرقي يركّب ويحطّل في قوارير صغيرة، ومورد الزيوت يورّد مادة بالجملة، والمصنّع ينتج خطاً منتهياً. فابحث عن صانع يصف القاعدة وتركيب العطر عند الطلب.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Choosing and using skin-intended oils explains what an intended-use statement changes about how a product may be used. Fragrance notes versus ingredients explains why a description of the scent does not tell you what is in the bottle. Understanding perfume concentration labels covers the labelling convention these preparations borrow from.',
        ],
        bodyAr: [
          'صفحة اختيار الزيوت المخصصة للبشرة واستخدامها تشرح ما الذي يغيّره بيان الاستخدام المقصود في طريقة استعمال المنتج. وصفحة النوتات مقابل المكونات تشرح لماذا لا يخبرك وصف الرائحة بما في القارورة. وصفحة ملصقات التركيز تغطي العرف التسميقي الذي تستعيره هذه المستحضرات.',
        ],
      },
    ],
    sourceIds: ['IFRA_STANDARDS', 'IFRA_APPLYING', 'AGARWOOD_CITES_2022'],
    method: 'ifra',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not state a base, a concentration, an ingredient list or a price, and it does not establish the regulatory position of any product in any market.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تذكر قاعدة ولا تركيزاً ولا قائمة مكونات ولا سعراً، ولا تثبت الوضع التنظيمي لأي منتج في أي سوق.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read choosing and using skin-intended oils'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة اختيار الزيوت المخصصة للبشرة'],
    related: [
      { slug: 'using-oud/skin-intended-fragrance-oils', label: 'Choosing and using skin-intended oils' },
      { slug: 'fragrance/notes-versus-ingredients', label: 'Fragrance notes versus ingredients' },
      { slug: 'fragrance/concentration-labels', label: 'Understanding perfume concentration labels' },
    ],
  }),

  productFamily({
    slug: 'products/finished-perfumes',
    title: 'Finished Perfumes',
    titleAr: 'العطور المنتهية',
    summary:
      'Complete fragrance products in a spray or spray-dab bottle, and the fields that describe one without describing the accord.',
    summaryAr:
      'منتجات عطرية كاملة في قارورة رش أو رش ولطم، والحقول التي تصف منتجاً دون وصف الأوز.',
    directAnswer:
      'Finished perfumes are complete fragrance products in a bottle: a formulation with a designed concentration, a base, a pack and a label, sold ready to apply. The family includes the spray format, the splash and dab formats, and the small decants sold as travel sizes. What the family does not do is establish the origin of the oud character in a fragrance: a finished perfume built on an oud accord is a finished perfume and should be described as such.',
    directAnswerAr:
      'العطور المنتهية منتجات عطرية كاملة في قارورة: تركيبة لها تركيز مصمَّم وقاعدة وتغليف وملصق، تُباع جاهزة للاستعمال. وتضم العائلة شكل الرش، وشكل الرش والّطم، والعيّنات الصغيرة المباعة بحجم السفر. وما لا تفعله العائلة هو إثبات مصدر الطابع العودي في العطر: فالعطر المنتهي المبني على أوز عود هو عطر منتهٍ وينبغي أن يوصف كذلك.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers the complete product: the bottle, the cap, the atomiser or the dabber, the formulation inside, the outer carton and the batch marking on the pack. It also covers the formats that differ only in how the fragrance reaches the skin, and the decant and travel sizes that are the same product in a smaller container.',
          'A finished perfume is also the point at which the supply chain ends. The oud character in it may come from a distillation, a blend, an accord, or a mixture of those, and that question is answered at the formulation stage rather than at the bottle.',
        ],
        bodyAr: [
          'تغطي العائلة المنتج الكامل: القارورة، والغطاء، والبخاخ أو قطارة اللطم، والتركيبة في الداخل، والعلبة الخارجية، ووسم الدفعة على التغليف. كما تغطي الأشكال التي تختلف في طريقة وصول العطر إلى البشرة فقط، والعيّنات والحجم الصغير التي هي المنتج نفسه في وعاء أصغر.',
          'والعطر المنتهي هو أيضاً النقطة التي ينتهي عندها سلسلة الإمداد. فالطابع العودي فيه قد يأتي من تقطير أو مزيج أو أوز أو مزيج من ذلك، وتُحسم هذه المسألة في مرحلة الصياغة لا عند القارورة.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'A finished perfume is not a perfume oil. One is a complete product and the other is a concentrate the buyer takes away and uses in something else.',
          'It is not an attar, which is a dabbing preparation in an oil-type base. It is not a home fragrance product that shares a name with it. And a "oud perfume" is not thereby an oud product: the fragrance may contain no agarwood, and where an accord is used the description should say so.',
        ],
        bodyAr: [
          'العطر المنتهي ليس زيت عطر. أحدهما منتج منتهٍ والآخر مركّز يأخذه المشتري ليستعمله في شيء آخر.',
          'وليس عطراً شرقياً، وهو مستحضر للّطم في قاعدة زيتية. وليس منتج عطر منزلي يشترك معه في الاسم. و«عطر عود» ليس منتج عود: فقد لا يحتوي العطر على خشب عود، وحيث يُستعمل أوز وجب أن يذكر الوصف ذلك.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields are: the concentration category and the basis on which it is claimed; the family the fragrance belongs to and the specific character notes; the intended use, which for a spray is skin application and for a home product is a room; the manufacturer and the manufacturing country; the batch or lot marking; the fill quantity and the pack material; the shelf life claimed and the storage conditions; and the allergen declaration for the destination market.',
          'The standards attach to the finished product here in the clearest way. IFRA states that the applicable product category is determined from the product\'s intended use, that the standards do not exempt a company from applicable national or local regulation, that the final decision and responsibility for the finished product lies with the consumer product manufacturer, and that IFRA does not itself certify products. A Certificate of Conformity for a fragrance mixture is evidence about the mixture, not about the bottle in the buyer\'s hand.',
        ],
        bodyAr: [
          'الحقول هي: فئة التركيز والأساس الذي يُدّعَى عليه؛ والعائلة التي ينتمي إليها العطر ونوتات طابعه المميزة؛ والاستخدام المقصود، وهو وضع الجلد لرشّة عطر ولغرفة لمنتج منزلي؛ والصانع وبلد التصنيع؛ ووسم الدفعة أو اللوط؛ وكمية الملء ومادة التغليف؛ والعمر المُدَّعى للتخزين وظروف الحفظ؛ وإقرار المواد الحساسة بالنسبة لسوق الوجهة.',
          'وتتعلق المعايير بالمنتج المنتهي هنا أوضح ما تكون. فتذكر IFRA أن فئة المنتج المنطبقة تُحدَّد من الاستخدام المقصود، وأن المعايير لا تعفي الشركة من الأنظمة الوطنية أو المحلية المنطبقة، وأن القرار النهائي والمسؤولية عن المنتج المنتهي تقعان على الشركة المصنّعة للمنتج الاستهلاكي، وأن IFRA لا تصدّق المنتجات. وشهادة المطابقة لخلصة عطرية دليل على الخصلة لا على القارورة التي في يد المشتري.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'The finished perfume and the perfume oil are the same scent at different stages and in different hands. The finished perfume and the attar are the same market position reached by a different route. And two finished perfumes with the same oud note may have nothing else in common, because that note may be a distillation in one and an accord in the other.',
          'The comparison that decides a purchase is therefore not between bottles but between supply positions: what the seller can tell you about the formulation, and what they will not.',
        ],
        bodyAr: [
          'العطر المنتهي وزيت العطر هما الرائحة نفسها في مرحلتين وبيدين. والعطر المنتهي والعطر الشرقي هما الموقع السوقي نفسه بل طريق مختلف. وعطران منتهيان بنوتة عودية واحدة قد لا يشتركان في شيء آخر، لأن تلك النوتة قد تكون تقطيراً في أحدهما وأوزاً في الآخر.',
          'والمقارنة التي تحسم الشراء ليست بين قوارير بل بين مواقف توريد: ما الذي يستطيع البائع أن يخبرك به عن التركيبة، وما الذي يرفض أن يخبرك به.',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'For a buyer buying to resell, the fields that matter are the manufacturer and the manufacturing country, the batch marking, the shelf life, the allergen declaration and the conformity position of the fragrance mixture. For a buyer buying to wear, the intended use and the concentration category matter more, and the scent itself is the deciding factor.',
          'Either way, buy the smallest quantity first when you are buying from a supplier rather than from a shop, and keep the outer pack, because the carton carries batch information that the bottle does not.',
        ],
        bodyAr: [
          'وللمشتري الذي يشتري لإعادة البيع، الحقول المهمة هي الصانع وبلد التصنيع، ووسم الدفعة، والعمر، وإقرار المواد الحساسة، وموقف مطابقة الخصلة العطرية. أما المشتري الذي يشتري للاستعمال فتصبح فيهما الاستخدام المقصود وفئة التركيز أهم، والرائحة نفسها هي العامل الحاسم.',
          'وفي الحالتين اشترِ أصغر كمية ممكنة حين تشتري من مورد لا من متجر، واحتفظ بالعلبة الخارجية، فهي تحمل معلومات الدفعة التي لا تحملها القارورة.',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The directory separates perfume brands, perfume manufacturers and private-label manufacturers, and the difference is the same one that separates a label from a factory. A brand is a name and a marketing position; a manufacturer is where the product is compounded and filled; a private-label manufacturer does both for someone else\'s brand.',
        ],
        bodyAr: [
          'يفصل الدليل علامات العطور ومصنّعي العطور ومصنّعي العطور بعلامة خاصة، والفرق هو نفسه الذي يفصل بين الملصق والمصنع. فالعلامة اسم وموقع تسويقي، والمصنع هو مكان تركيب المنتج وتعبئته، وصانع العطور بعلامة خاصة يقوم بالاثنين لعلامة غيره.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Brand identity versus manufacturing origin explains why the name on the bottle is not the place the product was made. Understanding perfume concentration labels covers the labelling convention on the front. Oud accords in fragrance composition covers the material behind the oud note.',
        ],
        bodyAr: [
          'صفحة هوية العلامة مقابل منشأ التصنيع تشرح لماذا ليس الاسم على القارورة هو المكان الذي صنع فيه المنتج. وصفحة ملصقات تركيز العطر تغطي العرف التسميقي على الواجهة. وصفحة أوزات العود في تركيب العطور تغطي المادة وراء النوتة العودية.',
        ],
      },
    ],
    sourceIds: ['IFRA_STANDARDS', 'IFRA_APPLYING', 'IFRA_LIBRARY'],
    method: 'ifra',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not state a concentration, an ingredient list, a price or a longevity figure, and it does not assess any fragrance.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تذكر تركيزاً ولا قائمة مكونات ولا سعراً ولا مدة ثبات، ولا تقيّم أي عطر.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read brand identity versus manufacturing origin'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة هوية العلامة مقابل منشأ التصنيع'],
    related: [
      { slug: 'fragrance/brand-and-manufacturing-origin', label: 'Brand identity versus manufacturing origin' },
      { slug: 'fragrance/concentration-labels', label: 'Understanding perfume concentration labels' },
      { slug: 'fragrance/oud-accords', label: 'Oud accords in fragrance composition' },
    ],
  }),

  productFamily({
    slug: 'products/bakhoor',
    title: 'Bakhoor',
    titleAr: 'البخور',
    summary:
      'Wood infused with oil rather than distilled, and the fields that establish what is actually in the jar.',
    summaryAr:
      'خشب مُشبَّع بالزيت لا مقطَّر، والحقول التي تثبت ما في العبوة فعلاً.',
    directAnswer:
      'Bakhoor is agarwood — usually chips, offcuts or sawdust — that has been infused with oil so that it carries scent without being distilled. The word establishes the process and nothing else. It does not establish the composition of the oil, how much oil there is per unit of wood, whether the oil is a genuine distillation or a manufactured accord, or what proportion of the material is wood. Those four are the fields, and a buyer who takes the word as an answer will buy a product twice without knowing it.',
    directAnswerAr:
      'البخور خشب عود — رقائق عادةً أو قطع متبقية أو نشارة — أُشبِع بالزيت ليحمل رائحة دون تقطير. والكلمة تثبت العملية ولا شيء غيرها. فهي لا تثبت تركيب الزيت، ولا مقدار الزيت لكل وحدة خشب، ولا أهو تقطير حقيقي أم أوز مصنّع، ولا نسبة الخشب في المادة. هذه أربعة هي الحقول، ومن أخذ الكلمة جواباً سيشتري المنتج مرتين دون أن يعرف.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers the infused material in the forms it is sold in: chips or offcuts saturated with oil and sold damp, the same material dried after infusion, the dust and fines from an infused cutting line, and the compounded bakhoor sold ready for burning. It also covers the products made from the same idea on other woods, which are widely sold under the same word.',
          'The distinction that matters inside the family is between material that has been infused with a distillate and material that has been infused with an accord. Both burn, both smell of oud, and they are different products with different costs and different behaviour in a bowl.',
        ],
        bodyAr: [
          'تغطي العائلة المادة المُشبَّعة بالأشكال التي تُباع بها: رقائق أو قطع متبقية مشبَّعة بالزيت وتُباع رطبة، والمادة نفسها بعد تجفيفها، والغبار والناعم من خط قطع مُشبَّع، والبخور المركَّب المباع جاهزاً للحرق. كما تغطي المنتجات المبنية على الفكرة نفسها من أخشاب أخرى، وهي تُباع على نطاق واسع بالكلمة نفسها.',
          'والتمييز المهم داخل العائلة هو بين مادة شُبِّعت بتقطير حقيقي ومادة شُبِّعت بأوز. فكلاهما يحترق وكلاهما يفوح برائحة العود، وهما منتجان مختلفان بتكاليف مختلفة وسلوك مختلف في المجمر.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'Bakhoor is not raw oud wood. The wood carries its own scent faintly and unevenly; bakhoor has had oil added so that the scent is strong and even. Weight for weight it is heavier, because it now carries oil as well as resin.',
          'It is not oud oil, which is the distillate itself. It is not an oud accord, which is a fragrance material that can be used to make bakhoor without any agarwood being present at all. And it is not incense: incense is a formed product on a stick or a coil, bakhoor is loose material.',
        ],
        bodyAr: [
          'البخور ليس خشب عود خاماً. فالخشب يحمل رائحته خفيفة وغير متساوية، والبخور أُضيف إليه الزيت فصارت الرائحة قوية ومتساوية. وهو أثقل وزناً للوزن نفسه، لأنه يحمل الزيت إضافة إلى الراتنج.',
          'وليس دهن العود، وهو الناتج المقطر نفسه. وليس أوز العود، وهو مادة عطرية يمكن بها صنع البخور دون وجود خشب عود أصلاً. وليس بخوراً معرّفاً: فالبخور الشرقي منتج مشكَّل على عود أو خيط، والبخور مادة سائبة.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields are: the oil — whether it is a genuine distillation, a blend or an accord, and whether the supplier will state it plainly; the proportion of oil to wood, and the method of combining them; the wood itself, including species and whether it is distillation-grade chip; the batch reference and date; the net weight and the moisture state, since infused material arrives damp and weight alone does not describe it; and the intended use, whether it is for burning, for applying to incense, or for both.',
          'On the standards, the position is worth stating plainly. A bakhoor is a wood-and-oil preparation, not a fragrance mixture in the sense the standards use. A Certificate of Conformity applies to a fragrance mixture intended for incorporation into a finished consumer product, and IFRA certificates are generally not issued for raw materials. Where a bakhoor is made with an accord, the buyer should ask for the accord\'s own conformity documentation rather than assume it.',
        ],
        bodyAr: [
          'الحقول هي: الزيت — أهو تقطير حقيقي أم مزيج أم أوز، وهل يقبل المورد أن يذكر ذلك صراحةً؛ ونسبة الزيت إلى الخشب وطريقة الجمع بينهما؛ والخشب نفسه، بما فيه النوع وهل هو رقائق بجودة التقطير؛ ومرجع الدفعة والتاريخ؛ والوزن الصافي وحالة الرطوبة، فالمادة المشبَّعة تصل رطبة والوزن وحده لا يصفها؛ والاستخدام المقصود، أهي للحرق أم للتقديم على البخور أم للاثنين.',
          'وفي المعايير، يجدر بالقول الصريح. فالبخور مستحضر من خشب وزيت، لا خصلة عطرية بالمعنى الذي تستعمله المعايير. وشهادة المطابقة تنطبق على خصلة عطرية مزمع إدخالها في منتج استهلاكي منتهٍ، وشهادات IFRA لا تُصدر عادةً للمواد الخام. وحيث صُنع البخور بأوز، ينبغي للمشتري أن يطلب وثائق مطابقة الأوز نفسه لا أن يفترضها.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'Against raw wood, bakhoor is stronger, more even and more expensive per kilo, and it is ready to burn where raw wood is ready to distil. Against oud oil, it is a carrier format: the scent is delivered by the wood, and the oil is already in the piece.',
          'And within bakhoor, the infused material and the compounded material are the practical comparison, because the difference between them is the difference between a distillation and an accord and it is not visible in the jar.',
        ],
        bodyAr: [
          'مقابل الخشب الخام، البخور أقوى وأمتنى وأغلى للكيلو، وهو جاهز للحرق حيث الخشب الخام جاهز للتقطير. ومقابل دهن العود، هو شكل حامل: فالرائحة تصل عبر الخشب، والزيت موجود في القطعة أصلاً.',
          'وداخل البخور، المقارنة العملية بين المادة المُشبَّعة والمادة المركَّبة، لأن الفرق بينهما هو الفرق بين التقطير والأوز وليس ظاهراً في العبوة.',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'Ask the oil question first, because a supplier who answers it directly has told you something decisive. Then ask the wood, then the combination, then the weight basis including moisture, and then whether the material is for burning or for application.',
          'A supplier who says the oil is an accord has answered honestly and should not be treated as having given a worse product. What the buyer must not accept is a supplier who answers every one of these questions with the word bakhoor.',
        ],
        bodyAr: [
          'اسأل سؤال الزيت أولاً، فالبائع الذي يجيب عنه مباشرة قد أخبرك بشيء حاسم. ثم اسأل عن الخشب، ثم عن طريقة الجمع، ثم عن أساس الوزن بما فيه الرطوبة، ثم هل المادة للحرق أم للتقديم.',
          'والبائع الذي يقول إن الزيت أوز قد أجاب بصدق ولا ينبغي أن يُعامل كأنه قدّم منتجاً أضعف. وما لا ينبغي للمشتري قبوله بائع يجيب عن كل هذه الأسئلة بالكلمة «بخور».',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The directory lists bakhoor makers separately from distillers and from raw-material suppliers, and the separation reflects the craft: infusing and blending a material for burning is a different trade from distilling wood for oil. A maker worth approaching states what the oil is before anything else.',
        ],
        bodyAr: [
          'يفصل الدليل صانعي البخور عن المقطّرين وعن موردي المواد الخام، ويعكس الفصل هذه الحرفة: فنقع مادة ودمجها للحرق حرفة تختلف عن التقطير من الخشب إلى الزيت. والصانع الذي يقترب منه المشتري هو الذي يذكر ما هو الزيت قبل أي شيء آخر.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Buying bakhoor with clear composition information sets out the three things to establish. Bakhoor and raw oud wood explains how to tell the two apart in the hand. Oud accords in fragrance composition explains the material that a bakhoor may be built on without containing agarwood.',
        ],
        bodyAr: [
          'صفحة شراء البخور بمعلومات تركيب واضحة تضع الأمور الثلاثة التي ينبغي حسمها. وصفحة البخور وخشب العود الخام تشرح كيف تفرّق بينهما باليد. وصفحة أوزات العود في تركيب العطور تشرح المادة التي قد يُبنى عليها البخور دون أن يحتوي خشب عود.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'IFRA_APPLYING'],
    method: 'partial',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not state an infusion ratio, a composition, a burn time or a price, and it does not assess any bakhoor.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تذكر نسبة نقع ولا تركيباً ولا مدة احتراق ولا سعراً، ولا تقيّم أي بخور بعينه.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read buying bakhoor with clear composition information'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة شراء البخور بمعلومات تركيب واضحة'],
    related: [
      { slug: 'buying/buying-bakhoor', label: 'Buying bakhoor with clear composition information' },
      { slug: 'fragrance/bakhoor-versus-raw-wood', label: 'Bakhoor and raw oud wood' },
      { slug: 'fragrance/oud-accords', label: 'Oud accords in fragrance composition' },
      { slug: 'products/bakhoor-forms', label: 'The forms of bakhoor: what each one is' },
    ],
  }),

  productFamily({
    slug: 'products/incense',
    title: 'Incense',
    titleAr: 'البخور المصلّب',
    summary:
      'Formed incense on a stick, a cone and a coil, and the fields that describe the material it is made from.',
    summaryAr:
      'بخور مشكَّل على عود أو مخروط أو ملفوف، والحقول التي تصف المادة التي صنع منها.',
    directAnswer:
      'Incense is the formed family: fragrance and a binder formed into sticks, cones, coils and blocks, usually with a bamboo core on a stick. It is a finished product rather than a raw material, and the material inside it may be agarwood, sandalwood, other woods, a resin, or a fragrance compound. The family therefore splits into two quite different things: incense with a natural base and incense built on an accord, and the label does not always tell the buyer which is which.',
    directAnswerAr:
      'البخور المصلّب هو العائلة المشكَّلة: خليط عطري ومادة رابطة يُشكَّل أعواد ومخاريق وملفات وكتل، ويكون عادةً بعصا من الخيزران. وهو منتج منتهٍ لا مادة خام، والمادة في داخله قد تكون خشب عود أو صندل أو خشباً آخر أو راتنجاً أو مركّباً عطرياً. ولهذا تنقسم العائلة إلى شيئين مختلفين تماماً: بخور بقاعدة طبيعية وبخور مبني على أوز، والملصق لا يخبر المشتري دائماً أيّهما هو.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers the formed formats: sticks on a bamboo core, cones, coils, and blocks or slabs for use in an electric heater. Within each format the material differs: agarwood chips, sandalwood powder, other woods, frankincense-type resins, and fragrance compounds with a binder.',
          'It also covers the practical distinctions that decide a purchase: whether the piece is for a charcoal bed or for an electric heater, whether it burns cleanly at low temperature, and how long it lasts in either.',
        ],
        bodyAr: [
          'تغطي العائلة الأشكال المشكَّلة: الأعواد على عصا من الخيزران، والمخاريق، والملفات، والكتل أو الألواح للاستعمال في سخّان كهربائي. وداخل كل شكل تختلف المادة: رقائق العود، ومسحوق الصندل، والأخشاب الأخرى، والراتنجات من نوع البخور، والمركّبات العطرية مع مادة رابطة.',
          'كما تغطي التمييزات العملية التي تحسم الشراء: أهي القطعة لسرير فحم أم لسخّان كهربائي، وهل تحترق نظيفة في حرارة منخفضة، وكم تدوم في كلٍّ منهما.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'Incense is not bakhoor. One is formed on a core or a mould, the other is loose infused material for a bowl. It is not a reed diffuser, which works by evaporation through reeds rather than by combustion. It is not a scented oil or a room spray.',
          'And "oud incense" is not thereby agarwood incense. A stick with an oud character may carry an accord, and the buyer should be told which. A piece that burns with a strong oud note is not evidence that it contains agarwood.',
        ],
        bodyAr: [
          'البخور المصلّب ليس البخور (بخور). فأحدهما مشكَّل على عصا أو في قالب، والآخر مادة سائبة مشبَّعة للّطم في مجمر. وليس ناشر أعواد، الذي يعمل بالتبخر عبر أعواد لا بالاحتراق. وليس زيتاً معطراً ولا رذاذ غرفة.',
          'و«بخور عود» ليس بخور عود حقيقي. فالعود الذي يحمل طابعاً عودياً قد يحمل أوزاً، وينبغي أن يُقال للمشتري أيّهما هو. وقطعة تشتعل برائحة عود قوية ليست دليلاً على أنها تحتوي خشب عود.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields are: the base material, named as specifically as the supplier can manage it; the binder and any additive; the core, if there is one; the weight and the count per package; the burn format and the heat source it is intended for; the origin and the manufacture location; the batch reference and date; and the intended use, in particular whether the piece is for burning on charcoal or for use in an electric heater.',
          'On the standards, a formed incense that carries a fragrance compound sits closer to the fragrance-mixture regime than a plain wood incense does. IFRA states that conformity for a fragrance mixture\'s intended use is established by the formulator or supplier, that a Certificate of Conformity applies exclusively to fragrance mixtures intended for incorporation into finished consumer products, that certificates are generally not issued for raw materials, and that the limits are expressed in the finished product rather than in the mixture. A wooden or resinous incense with no added fragrance compound is outside that mechanism entirely.',
        ],
        bodyAr: [
          'الحقول هي: المادة الأساسية، مذكورة بقدر ما يستطيع المورد تحديدها؛ والمادة الرابطة وأي إضافة؛ والعصا إن وُجدت؛ والوزن وعدد القطع في العبوة؛ وشكل الاحتراق ومصدر الحرارة المقصود؛ والمنشأ ومكان التصنيع؛ ومرجع الدفعة والتاريخ؛ والاستخدام المقصود، وبخاصة هل القطعة للحرق على الفحم أم للاستعمال في سخّان كهربائي.',
          'وفي المعايير، البخور المشكَّل الذي يحمل مركّباً عطرياً أقرب إلى نظام الخصلة العطرية مما هو البخور الخشبي الخالص. فتذكر IFRA أن مطابقة الخصلة لاستخدامها المقصود يثبتها مُركِّبها أو مورّدها، وأن شهادة المطابقة تنطبق حصراً على الخصلات المزمع إدخالها في منتجات استهلاكية منتهية، وأن الشهادات لا تُصدر عادةً للمواد الخام، وأن الحدود تُحدَّد في المنتج النهائي لا في الخصلة. أما البخور الخشبي أو الراتنجي الخالي من مركّب عطي فم خارج هذه الآلية تماماً.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'Incense and bakhoor differ in form and in use. Incense and a reed diffuser differ in mechanism entirely, since one combusts and the other evaporates. And within incense, a piece on a bamboo core and a block without a core behave differently, because the core changes how the heat reaches the material.',
          'The comparison that matters most is between a natural-base piece and an accord-based one, and it cannot be made from the photograph on the packet.',
        ],
        bodyAr: [
          'البخور المصلّب والبخور (بخور) يختلفان في الشكل وفي الاستعمال. والبخور المصلّب وناشر الأعواد يختلفان في الآلية تماماً،أحدهما يحترق والآخر يتبخر. وداخل البخور المصلّب، القطعة على عصا خيزران والقطعة بلا عصو يختلفان في السلوك، لأن العصا تغيّر كيف تصل الحرارة إلى المادة.',
          'وأهم مقارنة هي بين قطعة بقاعدة طبيعية وأخرى على أساس أوز، وهي لا تُجرى من صورة على العلبة.',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'Ask what the base material is, and accept a general answer only if the supplier will not go further. Ask whether any fragrance compound has been added, because that is the question that decides whether the piece is a natural-material product or a formulated one.',
          'Then settle the heat source and the pack count, and buy a small number to test. Incense is cheap enough to try, and a bad match with the burner is discovered only by burning it.',
        ],
        bodyAr: [
          'اسأل ما هي المادة الأساسية، ولا تقبل بجواب عام إلا إذا رفض المورد الذهاب أبعد من ذلك. واسأل هل أُضيف مركّب عطري، فذاك هو السؤال الذي يقرر إن كانت القطعة منتجاً من مادة طبيعية أم منتجاً مصوغاً.',
          'ثم حدّد مصدر الحرارة وعدد القطع في العبوة، واشترِ عدداً قليلاً لتجرّبه. فالبخور رخيص بما يكفي للتجربة، وسوء المطابقة مع المجمر لا يُكتشف إلا بالاحتراق.',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The directory lists incense makers separately from attar makers and from raw-material suppliers, and the separation reflects the work: forming, binding and curing sticks is a craft with its own failures, among them a piece that smokes or crumbles. A maker worth approaching will say what the base is and what the binder is.',
        ],
        bodyAr: [
          'يفصل الدليل صانعي البخور عن صانعي العطور الشرقية وعن موردي المواد الخام، ويعكس الفصل هذا العمل: فالتشكيل والربط والتجفيف حرفة لها إخفاقاتها، منها قطعة تُدخِّن أو تتفتت. والصانع الذي يقترب منه المشتري هو الذي يقول ما هي المادة الأساسية وما هي المادة الرابطة.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Using oud wood with suitable equipment covers the heat sources and why they change the result. Reading intended-use instructions shows where the conditions sit on a scented product. Oud accords in fragrance composition explains the material behind an oud note on a stick.',
        ],
        bodyAr: [
          'صفحة استخدام خشب العود بمعدات مناسبة تغطي مصادر الحرارة ولماذا تغيّر النتيجة. وصفحة قراءة تعليمات الاستخدام المقصود تبيّن أين تقع الشروط على منتج معطر. وصفحة أوزات العود تشرح المادة وراء نوتة عودية على عود بخور.',
        ],
      },
    ],
    sourceIds: ['IFRA_STANDARDS', 'IFRA_APPLYING', 'AGARWOOD_CITES_2022', 'CITES_APPENDICES', 'AGARWOOD_REVIEW_2014'],
    method: 'partial',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not state a composition, a binder, a burn time, a longevity figure or a price, and it does not assess any stick or cone.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تذكر تركيباً ولا مادة رابطة ولا مدة احتراق ولا مدة ثبات ولا سعراً، ولا تقيّم أي عود أو مخروط.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read using oud wood with suitable equipment'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة استخدام خشب العود بمعدات مناسبة'],
    related: [
      { slug: 'using-oud/using-oud-wood', label: 'Using oud wood with suitable equipment' },
      { slug: 'fragrance/oud-accords', label: 'Oud accords in fragrance composition' },
      { slug: 'using-oud/reading-product-instructions', label: 'Reading intended-use instructions' },
    ],
  }),

  productFamily({
    slug: 'products/oud-powder',
    title: 'Oud Powder',
    titleAr: 'مسحوق العود',
    summary:
      'Finely divided agarwood in dust and powder form, and the fields that separate a deliberate powder from a by-product.',
    summaryAr:
      'خشب عود مجروّ ناعماً في صورة مسحوق ونشارة، والحقول التي تفرّق بين مسحوق مقصود وناتج ثانوي.',
    directAnswer:
      'Oud powder is agarwood in fine divided form: the dust and powder made by grinding chips or offcuts, sold loose for burning or for blending into a paste. It is a physical form of the wood and not a different material, but it is also a by-product as often as it is a product, which is where the difficulty lies. A buyer has to establish what the powder was made from and whether the seller made it deliberately or it fell out of a cutting line.',
    directAnswerAr:
      'مسحوق العود هو خشب العود في صورة مجروّة ناعماً: غبار ومسحوق ينتج عن طحن الرقائق أو القطع المتبقية، يُباع سائباً للحرق أو للخلط في عجينة. وهو شكل فيزيائي من الخشب لا مادة مختلفة، لكنه ناتج ثانوي بقدر ما هو منتج مقصود، وهنا تكمن الصعوبة. فعلى المشتري أن يثبت ما صنع المسحوق منه، وأن يثبت إن كان البائع قد صنعه عمداً أم أنه نزل من خط قطع.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers the powder deliberately milled from chips, the finer dust that comes off a cutting or sanding line, and the coarser grind sold for burning in a bowl or mixed into a paste. It also covers powders made from woods other than agarwood, which are sold with the same word.',
          'The useful distinction is between a powder produced as the main output of a grinding operation and a dust fraction recovered as a by-product. They behave differently in a bowl, and they are priced differently.',
        ],
        bodyAr: [
          'تغطي العائلة المسحوق المطحون عمداً من الرقائق، والغبار الأدق النازل من خط قطع أو صنفرة، والطحن الخشن المباع للحرق في مجمر أو للخلط في عجينة. كما تغطي المساحيق المصنوعة من أخشاب غير العود، وتُباع بالكلمة نفسها.',
          'والتمييز المفيد هو بين مسحوق هو ناتج رئيس لعملية طحن، وخلاصة غبار مسترجعة كنتاج ثانوي. فسلوكهما في المجمر مختلف، وسعرهما مختلف أيضاً.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'Oud powder is not a dust produced by grinding something else and then selling it under the name. It is not oud oil, which is what the wood can yield when it is distilled, and a kilo of powder and a kilo of oil are not the same purchase by any measure.',
          'It is not bakhoor, which has had oil added to it, and it is not an incense powder bound into a stick. A bag of loose powder and a cone on a core are the same scent only in the loosest sense.',
        ],
        bodyAr: [
          'مسحوق العود ليس غباراً نتج عن طحن شيء آخر ثم بيع باسمه. وليس دهن العود، وهو ما يمكن أن يعطيه الخشب عند تقطيره، والكيلو من المسحوق والكيلو من الزيت ليسا الشراء نفسه بأي مقياس.',
          'وليس بخوراً مشبَّعاً بالزيت، وليس مسحوق بخور مربوطاً على عود. وكيس المسحوق السائب والمخروط على عصا هما الرائحة نفسها بالمعنى الأوسع فحسب.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields are: the material the powder was made from, including species and whether it was distillation-grade chip or processing offcut; the fineness, which is described by the seller rather than by any published scale; the proportion of dust against chips still in the bag; whether any oil has been added; the batch reference; the net weight, which is the only field on this family that a buyer can check with a scale; and the intended use, whether it is for burning, for mixing, or for further processing.',
          'No fragrance-mixture standard governs this family. A dry wood powder carries no fragrance mixture, and IFRA certificates are generally not issued for raw materials in any case. What applies instead is the botanical and conservation treatment: all members of Aquilaria and Gyrinops are listed in CITES Appendix II, so the species question decides the documentation a shipment carries.',
        ],
        bodyAr: [
          'الحقول هي: المادة التي صنع المسحوق منها، بما فيها النوع وهل كانت رقائق بجودة التقطير أم قطعاً متبقية من التشغيل؛ والنعومة، التي يصفها البائع لا أي مقياس منشور؛ ونسبة الغبار إلى الرقائق الباقية في الكيس؛ وهل أُضيف زيت؛ ومرجع الدفعة؛ والوزن الصافي، وهو الحقل الوحيد في هذه العائلة الذي يستطيع المشتري التحقق منه بميزان؛ والاستخدام المقصود، أهو للحرق أم للخلط أم لمزيد المعالجة.',
          'ولا يحكم هذه العائلة أي معيار للخلاصات العطرية. فالمسحوق الخشبي الجاف لا يحمل خصة عطرية، وشهادات IFRA لا تُصدر عادةً للمواد الخام على أي حال. وبدل ذلك تنطبق المعالجة النباتية والحفظية: فجميع أعضاء جنسَي Aquilaria وGyrinops مشمولون في ملحق سايتس الثاني، فسؤال النوع هو ما يحدد وثائق الشحنة.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'Powder stands against chips, and the difference is what happens to the resin when the wood is ground. It stands against oil, because the same weight of wood produces a fraction of a weight of oil. And it stands against a dust fraction, where the finer material has a different behaviour in a bowl than a coarse grind.',
          'The practical comparison for a buyer is between a powder sold as a deliberate product and a dust sold as a by-product, because the price difference is not proportional to the difference in use.',
        ],
        bodyAr: [
          'يقف المسحوق مقابل الرقائق، والفرق هو ما يحدث للراتنج عند طحن الخشب. ويقف مقابل الزيت، لأن الوزن نفسه من الخشب ينتج جزءاً يسيراً من وزنه زيتاً. ويقف مقابل خلاصة الغبار، فالمادة الأدق سلوكها في المجمر مختلف عن الطحن الخشن.',
          'والمقارنة العملية للمشتري بين مسحوق يُباع منتجاً مقصوداً وغباراً يُباع ناتجاً ثانوياً، لأن فرق السعر ليس متناسباً مع فرق الاستعمال.',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'Ask what the powder was milled from. That single question sorts most of the field, and a supplier who answers it precisely has described the product. Then ask the fineness, whether chips are mixed in, and whether any oil was added.',
          'Then weigh it. Powder is sold by weight and is the one format in this encyclopedia where a scale answers a question directly, so the net weight on the pack should be checked against what arrives.',
        ],
        bodyAr: [
          'اسأل عن المادة التي طُحن المسحوق منها. وهذا السؤال الواحد يرتّب أكثر الحقل، والبائع الذي يجيب عنه بدقة يكون قد وصف المنتج. ثم اسأل عن النعومة، وعن وجود رقائق مخلوطة، وعن أي زيت أُضيف.',
          'ثم وزنه. فالمسحوق يُباع بالوزن، وهو الشكل الوحيد في هذه الموسوعة الذي يجيب فيه الميزان عن سؤال مباشرة، فينبغي التحقق من الوزن الصافي على العبوة مقابل ما وصل.',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The directory separates wood processors, who cut and mill, from raw-material suppliers, who move material without processing it. A processor who will name the lot the powder came from is the useful contact, because the answer is in their records rather than in the bag.',
        ],
        bodyAr: [
          'يفصل الدليل مشغّلي الخشب الذين يقطعون ويطحنون عن موردي المواد الخام الذين ينقلون المادة دون معالجتها. والمشغّل الذي يسمّي اللوط الذي جاء منه المسحوق هو جهة الاتصال المفيدة، لأن الجواب في سجلاته لا في الكيس.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Choosing an oud wood purchase covers the questions that apply to any oud material bought by weight. Using oud wood with suitable equipment covers how the cut affects the burn. Label and organize samples covers keeping a powder sample usable for comparison.',
        ],
        bodyAr: [
          'صفحة اختيار شراء خشب عود تغطي الأسئلة التي تنطبق على أي مادة عود تُشترى بالوزن. وصفحة استخدام خشب العود بمعدات مناسبة تغطي أثر شكل القطع في الاحتراق. وصفحة تسمية العينات وتنظيمها تغطي إبقاء عيّنة المسحوق صالحة للمقارنة.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014', 'CITES_APPENDICES'],
    method: 'no-ifra',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not state a fineness grade, a resin content, a yield or a price, and it does not assess any powder.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تذكر درجة نعومة ولا نسبة راتنج ولا مردوداً ولا سعراً، ولا تقيّم أي مسحوق.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read choosing an oud wood purchase'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة اختيار شراء خشب عود'],
    related: [
      { slug: 'buying/choosing-oud-wood', label: 'Choosing an oud wood purchase' },
      { slug: 'using-oud/using-oud-wood', label: 'Using oud wood with suitable equipment' },
      { slug: 'using-oud/label-and-store-samples', label: 'Label and organize samples' },
    ],
  }),

  productFamily({
    slug: 'products/agarwood-beads',
    title: 'Agarwood Beads',
    titleAr: 'خرز العود',
    summary:
      'Turned beads and prayer-bead strands made from agarwood, and the fields that describe the piece rather than the lot.',
    summaryAr:
      'خرز منقار ومسبحة من خشب العود، والحقول التي تصف القطعة لا اللوط.',
    directAnswer:
      'Agarwood beads are a worked product: beads turned and strung from agarwood, sold as loose beads, as strands, or as prayer-bead sets. They are usually bought as objects, so the fields are about the piece rather than the material — the dimensions, the bore, the finish, the stringing and the fit to the wearer. The material question is still real, because a strand can be made from wood with resin in it and from wood with none, and the two are not the same object.',
    directAnswerAr:
      'خرز العود منتج مصنوع: خرز مخروط ومنقور من خشب العود، يُباع خرزاً منفردة، أو خرزاً منسوقاً، أو أطقم مسبحة. وهو يُشترى عادةً كقطعة، فالحقول تتعلق بالقطعة لا بالمادة — الأبعاد، والفتحة، والتشطيب، والتنسيق، وملاءمته لمن يحمله. وسؤال المادة قائم، لأن النظّام يمكن أن يُصنع من خشب فيه راتنج ومن خشب لا راتنج فيه، والاثنين ليسا قطعة واحدة.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers loose turned beads sold by the piece or by weight, finished strands assembled by a maker, prayer-bead sets in the traditional forms, and bracelet or necklace constructions built on the same bead. It also covers the practice of leaving a piece in the round for the wearer to shape over time, which changes what the buyer can sensibly ask about in advance.',
          'The product is finished, so the fields that matter are the ones a maker controls: the source of the material, the dimensions, the drilling, the polish, the cord, and the number of beads in a strand.',
        ],
        bodyAr: [
          'تغطي العائلة خرزاً منفردة منقارة تُباع بالقطعة أو بالوزن، وخرزاً منظوماً يجمعه صانع، وأطقم مسبحة بالأشكال التقليدية، وتشكيلات أساور أو عقود مبنية على الخرز نفسه. كما تغطي عادة ترك القطعة على حالها ليتشكل مع الاستعمال، وهو ما يغيّر ما يجوز للمشتري أن يسأل عنه مسبقاً.',
          'ولأن المنتج منتهٍ، فالحقول المهمة هي ما يتحكم فيه الصانع: مصدر المادة، والأبعاد، والحفر، والتلميع، والخيط، وعدد الخرزات في النظّام.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'Beads are not chips. The same material cut small loses the piece, and the buyer who wanted material for distillation or burning cannot use a strand.',
          'They are not carvings, which are shaped rather than turned, and they are not a scent product: a bead does not deliver scent by being held, it does so only if the material is warm enough and close enough, which is a property of the wood rather than of the bead.',
          'And a bead is not a certificate of species or of CITES status. A strand is only as traceable as the paperwork that came with it.',
        ],
        bodyAr: [
          'الخرز ليس رقائقاً. فالمادة نفسها المقطوعة صغيرة تفقد هيئة القطعة، ومن يريد مادة للتقطير أو الحرق لا ينفعه نظّام خرز.',
          'وليس منحوتات، فهي مشكَّلة لا منقارة، وليست منتجاً عطرياً: فالخرزة لا تطلق رائحة بمجرد حملها، بل فقط إن كانت المادة دافئة وقريبة بما يكفي، وهذه صفة الخشب لا صفة الخرز.',
          'وليس دليلاً على النوع أو على حالة سايتس. فالنظّام لا يتجاوز أثره الورقيه ما جاء معه.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields are: the species and where the wood came from; the bead dimensions and the tolerance between beads of the same strand; the bore size and whether the cord is knotted or elastic; the finish, oiled or waxed or left in the round; the strand length and bead count, which decides whether it is a bracelet, a necklace or a prayer-bead set; the maker and the manufacture location; and the batch or lot reference.',
          'No fragrance-mixture standard applies to a turned wooden bead. What does apply is the botanical and conservation treatment, and here the species matters more than anywhere else in this section: all members of Aquilaria and Gyrinops are listed in CITES Appendix II, and a strand assembled across several sources has to be documented from each of them. The internal uniformity of the strand is a workmanship question, and the source is a documentation question, and they are separate.',
        ],
        bodyAr: [
          'الحقول هي: النوع ومصدر الخشب؛ وأبعاد الخرزة ودرجة التسامح بين خرزات النظّام الواحد؛ وحجم الفتحة وهل الخيط عُقد أم مطاطي؛ والتشطيب، مزيوت أو مشمّع أو متروك على حاله؛ وطول النظّام وعدد الخرزات، وهو ما يقرر إن كان سواراً أم عقداً أم طقم مسبحة؛ والصانع ومكان التصنيع؛ ومرجع الدفعة أو اللوط.',
          'ولا ينطبق أي معيار للخلاصات العطرية على خرز خشبي منقار. وإنما تنطبق المعالجة النباتية والحفظية، وهنا يهم النوع أكثر من أي موضع آخر في هذا القسم: فجميع أعضاء جنسَي Aquilaria وGyrinops مشمولون في ملحق سايتس الثاني، ونظّام جُمِع من مصادر متعددة يجب توثيقه من كل منها. واتساق النظّام الداخلي مسألة إتقان عمل، والمصدر مسألة توثيق، وهما منفصلتان.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'Beads stand against carvings, and both stand against raw material: the buyer is choosing an object in all three cases, but with a different tolerance for what is wasted in the making.',
          'Within the family, a strand turned from one lot and a strand assembled from several lots look the same and behave differently, and only the second one raises the question of whether the documentation covers every bead in it.',
        ],
        bodyAr: [
          'يقف الخرز مقابل المنحوتات، ويقفان معاً مقابل المادة الخام: المشتري يختار قطعة في الحالات الثلاث، لكن بتسامح مختلف مع ما يُهدر في التصنيع.',
          'وداخل العائلة، نظّام منقور من لوط واحد ونظّام مجمّع من عدة لوطات يبدو واحداً وسلوكهما مختلف، والثانية وحدها تثير السؤال: هل تغطي الوثائق كل خرزة فيه؟',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'Ask for the material source first, because it decides the paperwork and it is the field a maker can most easily be vague about. Then the dimensions and the count, which decide what the strand is for, and then the finish, which decides how it behaves.',
          'If the piece is bought as an object rather than for scent, buy on the workmanship and be honest that the scent is a secondary property of it.',
        ],
        bodyAr: [
          'اسأل عن مصدر المادة أولاً، لأنها تحدد الورائق وهي الحقل الذي يسهل على الصانع أن يكون غامضاً فيه. ثم الأبعاد والعدد، وهما ما يقرر وظيفت النظّام، ثم التشطيب الذي يقرر سلوكه.',
          'وإن كانت القطعة تُشترى كقطعة لا للشم، فاشترِ على الإتقان، وقل بصراحة إن كان الرائحة صفة ثانوية فيها.',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The directory separates wood processors, who turn and finish, from exporters and raw-material suppliers, who move material. A workshop that turns beads is a different supplier from one that cuts chips, and the paperwork the two can produce is not the same.',
        ],
        bodyAr: [
          'يفصل الدليل مشغّلي الخشب الذين ينقّرون ويشطّبون عن المصدّرين وموردي المواد الخام الذين ينقلون المادة. فالورشة التي تنقّر خرزاً مورد مختلف عن التي تقطع رقائق، والورائق التي يستطيع كل منهما تقديمها ليست واحدة.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Botanical identity and genus comparison covers which plants produce the resinous heartwood and why the species decides the rules that apply. Conservation and trade documentation covers the papers a listed shipment has to carry. Label and organize samples covers keeping a sample comparable over time.',
        ],
        bodyAr: [
          'صفحة الهوية النباتية ومقارنة الأجناس تغطي النباتات التي تنتج القلب الراتنجي ولماذا يحدد النوع اللوائح المنطبقة. وصفحة وثائق الحماية والتجارة تغطّي الأوراق التي يجب أن تحملها شحنة مشمولة. وصفحة تسمية العينات وتنظيمها تغطي إبقاء العيّنة قابلة للمقارنة مع الزمن.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014', 'CITES_APPENDICES'],
    method: 'no-ifra',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not assess any bead or strand, does not state a scent performance, and does not establish the species or the legal status of any particular item.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تقيّم أي خرزة أو نظّام، ولا تذكر أداءً شمياً، ولا تثبت النوع ولا الوضع القانوني لأي قطعة بعينها.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read botanical identity and genus comparison'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة الهوية النباتية ومقارنة الأجناس'],
    related: [
      { slug: 'oud-basics/agarwood-botanical-identity', label: 'Botanical identity and genus comparison' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'using-oud/label-and-store-samples', label: 'Label and organize samples' },
    ],
  }),

  productFamily({
    slug: 'products/agarwood-carvings',
    title: 'Agarwood Carvings',
    titleAr: 'منحوتات العود',
    summary:
      'Shaped and finished objects cut from agarwood, and the fields that separate a carving from a turned piece.',
    summaryAr:
      'قطع مشكَّلة ومشطّبة من خشب العود، والحقول التي تفرّق بين المنحوت والمنقور.',
    directAnswer:
      'Agarwood carvings are objects cut and finished from agarwood: figures, bowls, boxes, stands, beads of a larger kind, and small plaques, made by a carver rather than turned on a lathe. They are bought as objects, so the useful fields are the ones a carver controls — the source material, the dimensions, the finish, the maker and the place of work. The scent follows from the material and from how warm it gets in the hand, not from anything in the finish.',
    directAnswerAr:
      'منحوتات العود قطع تُقطع وتُشطَّب من خشب العود: تماثيل، وأوانٍ، وصناديق، وقواعد، وخرزات أكبر، ولوحات صغيرة، يصنعها نحات لا منقار على خراطة. وتُشترى كقطع، فالحقول المفيدة هي ما يتحكم فيه النحات — مصدر المادة، والأبعاد، والتشطيب، والصانع، ومكان العمل. والرائحة تتبع من المادة ومن يدفئتها في اليد، لا من شيء في التشطيب.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers free-standing carvings, functional objects such as bowls and boxes, small decorative pieces, and the mounting of a piece of resinous wood in a base or a setting. It also covers the workshop practice of carving a block and selling the offcuts as beads, which means one tree can produce two families.',
          'A carving is a worked object with an author. That is the structural difference from the rest of this section, and it is why the maker is a field on this page in a way it is not on a page about chips.',
        ],
        bodyAr: [
          'تغطي العائلة المنحوتات القائمة، والأشياء الوظيفية كالأواني والصناديق، والقطع الزخرفية الصغيرة، وتثبيت قطعة من خشب راتنجي في قاعدة أو إطار. كما تغطي عادة الورشة التي تنحت كتلة وتبيع قطعها المتبقية كخرز، فينتج من شجرة واحدة عائلتان.',
          'والمنحوت قطعة مصنوعة لها صانع. وهذا الفرق البنيوي عن سائر هذا القسم، ولهذا الصانع حقل في هذه الصفحة على طريقة عدمه في صفحة عن الرقائق.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'A carving is not a bead or a turned object. The waste from a carving is often substantial, and a buyer who wanted material has bought something that cannot be distilled or burnt in quantity.',
          'It is not a display of resinous colour. A carving that shows obvious resin lines has been cut to show them, and that tells a buyer something about the block it came from and nothing about the maker\'s intent or the wood\'s grade.',
          'And it is not incense, nor a holder for incense. A mabkhara made of agarwood is an object that a buyer burns over, which is a different relationship to heat.',
        ],
        bodyAr: [
          'المنحوت ليس خرزاً ولا قطعة منقورة. فالهدر في النحت كثير عادةً، ومن يريد مادة قد اشترى شيئاً لا يمكن تقطيره أو حرقه بكمية.',
          'وليس عرضاً للون الراتنج. فالمنحوت الذي تُظهر خطوط الراتنج فيه قد قُطع ليُظهرها، وهذا يخبر المشتري بشيء عن الكتلة التي جاء منها ولا يخبره بشيء عن قصد الصانع ولا عن درجة الخشب.',
          'وليس بخوراً، ولا حاملاً للبخور. فالمبخرة المصنوعة من العود قطعة يُحرق فوقها، وهي علاقة مختلفة مع الحرارة.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields are: the species and the block the carving was cut from; the dimensions and the weight; the finish, which is the most visible part of the work and the most subjective; the maker and the location of the workshop; the date, which matters because a workshop\'s output changes with its supplier; and the batch or lot reference, where one exists.',
          'No fragrance-mixture standard applies to a carved wooden object. The botanical and conservation treatment does: all members of Aquilaria and Gyrinops are listed in CITES Appendix II, so the species of the block decides the documentation. A single carving from a single block is straightforward to document; a workshop buying from several sources carries the paperwork for each.',
        ],
        bodyAr: [
          'الحقول هي: النوع والكتلة التي قُطع منها المنحوت؛ والأبعاد والوزن؛ والتشطيب، وهو أكثر ما يكشفه الصانع وأكثرها ذاتية؛ والصانع ومكان الورشة؛ والتاريخ، وهو مهم لأن مخرجات الورشة تتغير بتغيّر مورديها؛ ومرجع الدفعة أو اللوط حيث وُجد.',
          'ولا ينطبق أي معيار للخلاصات العطرية على منحوت خشبي. أما المعالجة النباتية والحفظية فتنطبق: فجميع أعضاء جنسَي Aquilaria وGyrinops مشمولون في ملحق سايتس الثاني، فنوع الكتلة يحدد الوثائق. والمنحوت الواحد من كتلة واحدة سهل التوثيق، أما الورشة التي تشتري من مصادر متعددة فتحمل أوراق كل مصدر.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'Carvings stand against beads, against blocks sold as objects, and against the raw material all three of them come from. The comparison the buyer actually makes is between the visible work and the material, and they do not move together: a fine carving can be made from an ordinary block, and a block with dramatic resin can be left as it is.',
          'And a carving made for the hand, such as a mabkhara, behaves differently from one made for the shelf, because use polishes and warms in a way display does not.',
        ],
        bodyAr: [
          'تقف المنحوتات مقابل الخرز، ومقابل الكتل المباعة كقطع، ومقابل المادة الخام التي جاءت منها جميعاً. والمقارنة التي يجريها المشتري فعلياً بين العمل المرئي والمادة، وهما لا يتحركان معاً: فمنحوت متقن قد يصنع من كتلة عادية، وكتلة فيها راتنج لافت قد تُترك كما هي.',
          'ومنحوت صُنع للاستعمال — كالمبخرة — يختلف سلوكه عن منحوت صُنع للعرض، فالاستعمال يلميع ويُدفّئ على نحو لا يفعله العرض.',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'Ask for the material source and the block, because it is the field a buyer cannot inspect. Then look at the finish, the joinery and the underside, which is where a carver\'s work shows and where a buyer\'s hand finds the truth. Then ask the maker, since a named workshop is a repeatable source and an unnamed one is not.',
          'If the piece is to be used rather than displayed, say so when buying, because the maker will otherwise finish it for appearance.',
        ],
        bodyAr: [
          'اسأل عن مصدر المادة والكتلة، لأنه الحقل الذي لا يستطيع المشتري معاينته. ثم انظر إلى التشطيب والتِعشيق والوجه السفلي، حيث يظهر عمل النحات وحيث يجد المشتري الحقيقة بيده. ثم اسأل عن الصانع، فالورشة المسمّاة مصدر قابل للتكرار وغير المسمّاة ليست كذلك.',
          'وإن كانت القطعة للاستعمال لا للعرض، فقل ذلك عند الشراء، وإلا شُطِّبها الصانع لتُشطَّب من أجل المظهر.',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The directory lists wood processors and carving workshops among the trades that work agarwood, and separates them from exporters and raw-material suppliers. A workshop worth approaching will show the block, describe how it chose it, and say what the offcuts became.',
        ],
        bodyAr: [
          'يفصل الدليل مشغّلي الخشب وورش النحت ضمن الحرف التي تعمل على العود، ويفصلها عن المصدّرين وموردي المواد الخام. فالورشة التي يقترب منها المشتري تعرض الكتلة، وتصف كيف اختارتها، وتقول مصير القطع المتبقية.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Botanical identity and genus comparison covers the plants the block came from. Conservation and trade documentation covers the papers a listed shipment carries. Documenting an oud collection covers what a piece of provenance is worth when it is kept.',
        ],
        bodyAr: [
          'صفحة الهوية النباتية ومقارنة الأجناس تغطي النباتات التي جاءت منها الكتلة. وصفحة وثائق الحماية والتجارة تغطّي الأوراق التي تحملها الشحنة المشمولة. وصفحة توثيق مجموعة عود تغطي ما تساويه القطعة الموثّقة حين تُحفظ.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014', 'CITES_AGARWOOD_2004'],
    method: 'no-ifra',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not assess the workmanship, the aesthetic quality or the price of any carving, and it does not establish the species of any block.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تقيّم الإتقان ولا الجودة الجمالية ولا سعر أي منحوت، ولا تثبت نوع أي كتلة.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read conservation and trade documentation'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة وثائق الحماية والتجارة'],
    related: [
      { slug: 'oud-basics/agarwood-botanical-identity', label: 'Botanical identity and genus comparison' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'collecting/documenting-a-collection', label: 'Documenting an oud collection' },
    ],
  }),

  productFamily({
    slug: 'products/electric-burners',
    title: 'Electric Burners',
    titleAr: 'السخّانات الكهربائية',
    summary:
      'Heating devices for wood and resin, and the fields that describe how a burner treats what it heats.',
    summaryAr:
      'أجهزة تسخين للخشب والراتنج، والحقول التي تصف ما يفعله السخّان بما يُسخّنه.',
    directAnswer:
      'Electric burners are the heated-surface family: a unit that warms wood, powder or resin so that it releases scent without open flame. They are bought for their behaviour rather than for their material, so the fields are electrical and physical — the type of element, the surface material, the temperature control and its range, the bowl or plate design, the voltage, the power, and the size of what it is meant to hold. The material inside the burner is not part of the family.',
    directAnswerAr:
      'السخّانات الكهربائية هي عائلة السطح المسخَّن: جهاز يُسخّن الخشب أو المسحوق أو الراتنج ليطلق رائحته دون لهب مكشوف. وتُشترى لأدائها لا لمادتها، فالحقول كهربائية وفيزيائية — نوع عنصر التسخين، ومادة السطح، والتحكم في الحرارة ومدىها، وتصميم الكأس أو اللوح، والجهد، والاستهلاك، وحجم ما تُصمَّم لاحتوائه. والمادة داخل السخّان ليست جزءاً من العائلة.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers the flat plate that heats a piece directly, the bowl over a resistive element that behaves more like a charcoal bed, the small cup that holds a fragment, and the larger units sold for a whole session with a timer. It also covers the small heating elements sold separately to fit into a mabkhara or a censer, and the replacement plates and bowls that go with them.',
          'Across the family the mechanism differs more than the appearance does, and the mechanism is what determines how the material in front of it behaves.',
        ],
        bodyAr: [
          'تغطّي العائلة اللوح المستوي الذي يُسخّن قطعة مباشرة، والكأس فوق عنصر مقاوم الذي يسلك سلوك سرير الفحم تقريباً، والكوب الصغير الذي يحتوي جزءاً، والأجهزة الأكبر المباعة لحصة كاملة مع مؤقت. كما تغطي عناصر التسخين الصغيرة المباعة منفصلة لتركيبها في مبخرة أو منجارة، وألواح الكؤوس البديلة التي تذهب معها.',
          'وعبر العائلة، يختلف الآلية أكثر مما يختلف الشكل، والآلية هي ما يحدد سلوك المادة التي أمامها.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'An electric burner is not a charcoal burner. The heat is delivered differently, and the surface temperature is the variable that charcoal does not control. A material that suits one will not necessarily suit the other.',
          'It is not a scented product and it is not a diffuser, which evaporates a liquid rather than heating a solid. It is not a mabkhara, which is the vessel; the burner heats the mabkhara. And it is not an incense burner for formed sticks, which need an open flame or a holder of their own kind.',
        ],
        bodyAr: [
          'السخّان الكهربائي ليس مجمر فحم. فالحرارة تصل بطريق مختلف، وحرارة السطح هي المتغير الذي لا يضبطه الفحم. ومادة تناسب أحدهما لا تناسب الآخر بالضرورة.',
          'وليس منتجاً معطراً وليس ناشراً، والناشر يبخر سائلاً لا يُسخّن مادة صلبة. وليس مبخرة، فالمبخرة هي الوعاء والسخّان يُسخّن المبخرة. وليس محرق أعواد بخور، فالأعواد تحتاج لهباً مفتوحاً أو حاملاً من نوعها.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields are: the heating element type; the surface material and whether it is replaceable; the temperature control and the range it offers; whether it reaches and holds a temperature or only cycles; the bowl, cup or plate geometry and its capacity; the power and the voltage; the physical size and weight, which decides where it can be used; the safety certification for the market; and the warranty terms.',
          'No fragrance-mixture standard governs this family. A heater holds no fragrance mixture, and the standards would apply only to whatever scented material is later put on it, in a separate product with its own intended use. What applies to a burner is electrical and safety conformity for the destination market, and the seller\'s statement of it, not an assurance from this page.',
        ],
        bodyAr: [
          'الحقول هي: نوع عنصر التسخين؛ ومادة السطح وهل هي قابلة للاستبدال؛ والتحكم في الحرارة والمدى الذي يقدّمه؛ وهل يبلغ الحرارة ويحافظ عليها أم يدور في دورة؛ وهندسة الكأس أو الكوب أو اللوح وسعته؛ والاستهلاك والجهد؛ والحجم والوزن، وهما ما يحدد أين يمكن استعماله؛ وشهادة السلامة للسوق؛ وشروط الضمان.',
          'ولا يحكم هذه العائلة أي معيار للخلاصات العطرية. فالسخّان لا يحمل خصلة عطرية، والمعايير تنطبق فقط على المادة المعطرة التي تُوضع عليه لاحقاً، وهي منتج منفصل له استخدام مقصود خاص به. وما ينطبق على السخّان هو المطابقة الكهربائية والسلامة بالنسبة لسوق الوجهة، وبيانات البائع عن ذلك، لا أي ضمان من هذه الصفحة.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'An electric burner and a charcoal burner deliver heat differently, and the practical comparison is the surface behaviour: a unit that heats a surface will drive off scent and eventually char, while a bowl over an element smoulders the material as a charcoal bed would.',
          'Within the electric family, the small element and the large plate are not alternatives for the same material, and a unit with a wide control range and a unit with a fixed cycle suit different users and different materials.',
        ],
        bodyAr: [
          'السخّان الكهربائي ومجمر الفحم يوصلان الحرارة بطريقين، والمقارنة العملية هي سلوك السطح: فالوحدة التي تسخّن سطحاً تطلق الرائحة ثم تحرق، أما الكأس فوق العنصر في رمّر المادة كما يفعل سرير الفحم.',
          'وداخل العائلة الكهربائية، العنصر الصغير واللوح الكبير ليسا بديلين للمادة نفسها، والوحدة ذات مدى تحكم واسع والوحدة ذات دورة ثابتة تناسب مستخدمين ومواد مختلفة.',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'Ask what it is meant to hold, and what happens if the holder is larger than the heated area. Ask how the temperature is set and whether it can be reached quickly or only approached. Ask what the surface is made of and whether a replacement is sold.',
          'Then check the power and the voltage against the supply at the point of use, because a burner that has to run at a lower setting than it was designed for is a burner that behaves differently from the one its seller described.',
        ],
        bodyAr: [
          'اسأل ما الذي يُصمَّم لاحتوائه، وماذا يحدث إن كان الحامل أكبر من المساحة المسخَّنة. واسأل كيف تُضبط الحرارة، وهل تُبلغ بسرعة أم بالاقتراب. واسأل عن مادة السطح وهل يُباع بديل له.',
          'ثم تحقّق من الاستهلاك والجهد مقابل الكهرباء في مكان الاستخدام، فسخّان يعمل على إعداد أقل مما صُمِّم له سخّان يتصرف على نحو مختلف عمّا وصفه بائعه.',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The directory lists burner suppliers among the trades that serve this market, alongside the incense makers who use them. What a burner supplier worth approaching publishes is the power, the voltage, the temperature range and the surface material, because those four decide whether the device will do the job.',
        ],
        bodyAr: [
          'يفصل الدليل موردي السخّانات ضمن الحرف التي تخدم هذا السوق، إلى جانب صانعي البخور الذين يستعملونها. وما ينشره مورد السخّانات المفيد هو الاستهلاك والجهد ومدى الحرارة ومادة السطح، لأن هذه الأربعة هي التي تقرر إن كان الجهاز سيؤدي الغرض.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Using oud wood with suitable equipment covers the heat sources and why the equipment changes the result. Choosing an oud wood purchase covers what to ask before buying the material itself. Reading intended-use instructions applies to anything scented that will be put on the burner.',
        ],
        bodyAr: [
          'صفحة استخدام خشب العود بمعدات مناسبة تغطي مصادر الحرارة ولماذا تغيّر المعدات النتيجة. وصفحة اختيار شراء خشب عود تغطي ما ينبغي سؤاله قبل شراء المادة نفسها. وصفحة قراءة تعليمات الاستخدام المقصود تنطبق على كل مادة معطرة ستوضع على السخّان.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'CITES_APPENDICES', 'AGARWOOD_REVIEW_2014'],
    method: 'no-ifra',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not state a temperature, a power rating, a burn time or a price, and it does not certify any device for any market.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تذكر حرارة ولا استهلاكاً ولا مدة احتراق ولا سعراً، ولا توثّق أي جهاز لأي سوق.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read using oud wood with suitable equipment'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة استخدام خشب العود بمعدات مناسبة'],
    related: [
      { slug: 'using-oud/using-oud-wood', label: 'Using oud wood with suitable equipment' },
      { slug: 'buying/choosing-oud-wood', label: 'Choosing an oud wood purchase' },
      { slug: 'using-oud/reading-product-instructions', label: 'Reading intended-use instructions' },
    ],
  }),

  productFamily({
    slug: 'products/charcoal-burners',
    title: 'Charcoal Burners',
    titleAr: 'مجمّرات الفحم',
    summary:
      'Heat sources that hold a bed of charcoal for burning chips and powder, and the fields that describe one.',
    summaryAr:
      'مصادر حرارة تحمل سرير من الفحم لحرق الرقائق والمسحوق، والحقول التي تصف أحدها.',
    directAnswer:
      'Charcoal burners are the open-flame family: a heat source that holds a bed of charcoal for burning wood chips, powder or resin. The fields are practical rather than aromatic — the shape and the depth of the bed, whether it has a grate or a bowl, the material, the size, and the arrangement for setting the charcoal alight. What sits on top of the bed is a separate product, and the two are usually bought from different trades.',
    directAnswerAr:
      'مجمّرات الفحم هي عائلة اللهب المكشوف: مصدر حرارة يحمل سريراً من الفحم لحرق رقائق الخشب أو المسحوق أو الراتنج. والحقول عملية لا عطرية — شكل وعمق السرير، وهل فيه مشبك أو كأس، والمادة، والحجم، وترتيب إشعال الفحم. وما يوضع فوق السرير منتج منفصل، والاثنان يُشتريان عادةً من حرفتين مختلفتين.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers the small tabletop censer with a pierced lid, the flat grill set that sits over a flame, the larger stands for a floor, the brass and copper vessels with a charcoal basket inside, and the improvised sheets and boxes that are used when nothing else is available. It also covers the charcoal itself as a consumable that belongs to this family rather than to any of the material families.',
          'The distinction inside the family is between a burner that holds a bed above a flame and one that holds the charcoal in a basket with air underneath, because the two deliver heat at different rates and at different surface temperatures.',
        ],
        bodyAr: [
          'تغطي العائلة المنجارة الصغيرة على الطاولة بغطاء مثقّب، والشبكة المسطحة التي توضع فوق لهب، والحوامل الأكبر للأرض، والأوعية النحاسية ذات سلال الفحم، والألواح والصناديق المرتجلة المستعملة حين لا يتوفر شيء آخر. كما تغطي الفحم نفسه كمادة استهلاكية تنتمي إلى هذه العائلة لا إلى أي من عائلات المواد.',
          'والتمييز داخل العائلة بين مجمّر يحمل سريراً فوق لهب ومجمّر يحمل الفحم في سلة تحته هواء، لأن الاثنين يوصلان الحرارة بمعدل مختلف وعند حرارة سطح مختلفة.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'A charcoal burner is not a mabkhara. The mabkhara is the vessel that holds the wood and goes on top; the burner is the heat beneath it.',
          'It is not an electric burner, and the difference matters more than it appears: a charcoal bed smoulders and radiates, and a heated surface drives scent off and chars. It is not a censer for burning loose powder with a cone of light. And the charcoal is not the material: it is the fuel.',
        ],
        bodyAr: [
          'مجمّر الفحم ليس مبخرة. فالمبخرة هي الوعاء الذي يحفظ الخشب ويوضع فوق، والمجمّر هو الحرارة تحته.',
          'وليس سخّاناً كهربائياً، والفرق أهم مما يبدو: فسرير الفحم يُرمس ويشعّ، والسطح المسخَّن يطلق الرائحة ويحرق. وليس منجارة لحرق المسحوق السائب بمخروط من اللهب. والفحم ليس المادة: هو الوقود.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields are: the bed type, whether it is a grate, a bowl or a basket; the bed dimensions and depth; the material and the thickness; the total weight and how stable it is on a surface; the placement of the ash; whether a lid or a mesh cover is included and what it does to airflow; the charcoal size it is designed for; and the country of manufacture.',
          'No fragrance-mixture standard governs this family, and none of its fields has one either. The relevant conformity for a heat source is safety conformity for the destination market, and the material family it is used with — the wood, the powder or the bakhoor — carries its own documentation. A burner does not need a certificate of its own, and one that offers a fragrance conformity statement for a heating device is answering a question that was not asked.',
        ],
        bodyAr: [
          'الحقول هي: نوع السرير، أهو مشبك أم كأس أم سلة؛ وأبعاد السرير وعمقه؛ والمادة والسماكة؛ والوزن الإجمالي ومدى ثباته على سطح؛ وموضع الرماد؛ وهل يشمل غطاء أو شبكة وما تفعله بالهواء؛ وحجم الفحم الذي صُمّم له؛ وبلد التصنيع.',
          'ولا يحكم هذه العائلة أي معيار للخلاصات العطرية، ولا يقوم خلف أي حقل فيها معيار. فالمرجع المنطبق على مصدر حرارة هو مطابقة السلامة بالنسبة لسوق الوجهة، وعائلة المادة التي يُستعمل معها — الخشب أو المسحوق أو البخور — تحمل توثيقها هي. ولا يحتاج المجمر شهادة خاصة به، ومن يقدّم بيان مطابقة عطرية لجهاز تسخين يكون قد أجاب عن سؤال لم يُطرح.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'Charcoal and electric heat are the two comparisons that matter, and they are not interchangeable: the material is treated differently by a smouldering bed and by a hot plate, and the piece that works well on one often disappoints on the other.',
          'Within the family, a burner with a grate that lets air through from below and one with a solid bowl do not behave the same, and the difference is visible in how quickly the charcoal catches and how long the bed lasts.',
        ],
        bodyAr: [
          'حرارة الفحم والحرارة الكهربائية هما المقارنتان المهمتان، وليستا قابلتين للتبادل: فالمادة تُعالج على نحو مختلف بالسرير المُرمِس باللوح الساخن، والقطعة التي تنجح في أحدهما تخيب في الآخر غالباً.',
          'وداخل العائلة، مجمّر بمشبك يسمح بمرور الهواء من تحت ومجمّر بكأس مصمت لا يتصرفان بالطريقة نفسها، والفرق ظاهر في سرعة اشتعال الفحم وفي طول بقاء السرير.',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'Ask what it is for: a small censer for a fragment and a floor stand for a long session are not the same purchase. Ask about airflow and ash handling, because a burner that cannot be cleaned will not be used twice.',
          'And decide the material question before the burner question. A buyer who knows they will burn bakhoor needs a different bed and a different vessel from one who will burn raw chips, and buying the burner first tends to buy the wrong one.',
        ],
        bodyAr: [
          'اسأل ما هو له: منجارة صغيرة لجزء ورف أرضي لحصة طويلة ليسا الشراء نفسه. واسأل عن مرور الهواء وعن التعامل مع الرماد، فمجمّر لا يمكن تنظيفه لن يُستعمل مرتين.',
          'وحاسم مسألة المادة قبل مسألة المجمّر. فمن يعرف أنه سيحرق بخوراً يحتاج سريراً ووعاءً مختلفين ممن يحرق رقائق خام، وشراء المجمّر أولاً يميل إلى شراء الخاطئ.',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The directory lists burner suppliers and incense makers separately, and for this family the supplier that matters is often the metalworker rather than the fragrance supplier. Look for one who will state the metal, the bed depth and the intended material.',
        ],
        bodyAr: [
          'يفصل الدليل موردي السخّانات وصانعي البخور، وهنا يكون المورد المهم عادةً صاحب المعدن لا مورد العطور. فابحث عن من يذكر المعدن وعمق السرير والمادة المقصودة.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Using oud wood with suitable equipment covers why the heat source changes the result. Buying bakhoor with clear composition information covers the material that usually goes on the bed. Label and organize samples covers keeping a sample of the material comparable.',
        ],
        bodyAr: [
          'صفحة استخدام خشب العود بمعدات مناسبة تغطي لماذا يغيّر مصدر الحرارة النتيجة. وصفحة شراء البخور بمعلومات تركيب واضحة تغطي المادة التي توضع عادةً على السرير. وصفحة تسمية العينات وتنظيمها تغطّي إبقاء عيّنة المادة قابلة للمقارنة.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
    method: 'no-ifra',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not state a burn time, a temperature, a size or a price, and it does not assess any burner.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تذكر مدة احتراق ولا حرارة ولا حجماً ولا سعراً، ولا تقيّم أي مجمّر.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read using oud wood with suitable equipment'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة استخدام خشب العود بمعدات مناسبة'],
    related: [
      { slug: 'using-oud/using-oud-wood', label: 'Using oud wood with suitable equipment' },
      { slug: 'buying/buying-bakhoor', label: 'Buying bakhoor with clear composition information' },
      { slug: 'using-oud/label-and-store-samples', label: 'Label and organize samples' },
    ],
  }),

  productFamily({
    slug: 'products/incense-accessories',
    title: 'Incense Accessories',
    titleAr: 'مستلزمات البخور',
    summary:
      'The vessels, holders, trays and tools that go with incense, and the fields that describe how they are made.',
    summaryAr:
      'الأوعية والحامل والصواني والأدوات التي تصاحب البخور، والحقول التي تصف كيف صُنعت.',
    directAnswer:
      'Incense accessories are the non-consumable half of the trade: the mabkhara, the censer, the ember plate, the ash dish, the tongs, the snuffer, the tray, the stand and the storage boxes. Each is bought for a job rather than for a scent, and the fields are therefore about material, dimensions, joinery and fit. The material a vessel is made from also decides what can be put in it, which is the field buyers most often miss.',
    directAnswerAr:
      'مستلزمات البخور هي النصف غير القابل للاستهلاك من هذه التجارة: المبخرة، والمنجارة، ولوح الجمر، وصحن الرماد، والملقط، والغطاء، والصينية، والرف، وصناديق التخزين. وكل منها يُشترى لمهمة لا لرائحة، فالحقول إذن عن المادة والأبعاد والتجميع والملاءمة. ومادة الوعاء تقرر أيضاً ما الذي يمكن أن يوضع فيه، وهو الحقل الذي يغفله المشترون أكثر من غيره.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers the heat-resistant vessels a piece of wood or resin is held in, the holders that keep it above a bed, the trays and dishes that catch ash, the tools that handle it, and the storage that keeps it. It also covers the small implements that sit alongside a mabkhara in a majlis, including the incense box and the container for unused material.',
          'Some of this family is made from metal, some from clay, some from wood and some from glass, and the choice of material is not a style decision: it decides the heat the vessel tolerates and how it interacts with the scent.',
        ],
        bodyAr: [
          'تغطي العائلة أوعية تتحمل الحرارة ويوضع فيها خشب أو راتنج، والحوامل التي تبقيه فوق سرير، والصواني التي تلتقط الرماد، والأدوات التي تتعامل معه، والتخزين الذي يحفظه. كما تغطي الأدوات الصغيرة التي تجلس إلى جانب المبخرة في المجلس، ومنها صندوق البخور والوعاء الذي يوضع فيه الفائض.',
          'وبعض هذه العائلة مصنوع من المعدن وبعضها من الطين وبعضها من الخشب وبعضها من الزجاج، واختيار المادة ليس قرار ذوق: فهو يقرر الحرارة التي يتحملها الوعاء وكيف يتفاعل مع الرائحة.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'An accessory is not the material. A mabkhara holds oud; it is not oud, and it does not carry the scent of whatever has been burned in it for long, which is a fact a buyer should establish before buying a used vessel.',
          'It is not a burner: some accessories sit above a heat source and some contain one, and the distinction matters when choosing. And it is not a finished product with a fragrance mixture in it — an accessory has no scent of its own to declare.',
        ],
        bodyAr: [
          'المستلزم ليس المادة. فالمبخرة تحفظ العود، وهي ليست عوداً، ولا تحمل رائحة ما حُرق فيها مدةً طويلة، وهي واقعة ينبغي للمشتري أن يثبتها قبل شراء وعاء مستعمل.',
          'وليس محرقاً: فبعض المستلزمات توضع فوق مصدر حرارة وبعضها يحتوي واحداً، والتمييز مهم عند الاختيار. وليس منتجاً منتهياً فيه خصة عطرية — فالمستلزم لا رائحة له يعلن عنها.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields are: the material and, for metal, the gauge and whether it is lined; the dimensions, and for a vessel the internal diameter and depth; the capacity, in weight or in volume, which decides what it holds; the handle or stem, which decides whether it can be lifted while hot; the finish, and whether it is food-safe or lacquered; the intended heat source, whether charcoal, an electric heater or direct flame; the weight; the maker and the place of work; and the care instructions.',
          'No fragrance-mixture standard governs this family, because there is no fragrance mixture in an accessory. What applies is material safety and heat resistance for the destination market, and the maker\'s own statement of both. The material family the accessory is used with carries its own documentation, and the two do not substitute for each other.',
        ],
        bodyAr: [
          'الحقول هي: المادة، وللمعدن سماكته وهل هو مبطّن؛ والأبعاد، وللوعاء قطره الداخلي وعمقه؛ والسعة بالوزن أو بالحجم، وهي ما يقرر ما الذي يحتمله؛ والمقبض أو الساق، وهو ما يقرر إن كان الوعاء يُرفع وهو ساخن؛ والتشطيب، وهل هو آمن للطعام أم مطعّم؛ ومصدر الحرارة المقصود، فحم أم سخّان كهربائي أم لهب مباشر؛ والوزن؛ والصانع ومكان العمل؛ وتعليمات العناية.',
          'ولا يحكم هذه العائلة أي معيار للخلاصات العطرية، لأنه لا توجد فيها خصلة عطرية."وما ينطبق هو سلامة المادة ومقاومة الحرارة بالنسبة لسوق الوجهة، وبيانات الصانع عنهما. وعائلة المادة التي يُستعمل معها المستلزم تحمل توثيقها هي، والاثنان لا يقوم أحدهما مقام الآخر.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'Accessories are compared by job: a vessel for a fragment, a vessel for a bowl of chips, a holder for a coil, an ember plate for the coal, and a tray for the ash are five different purchases. And within the vessels, metal, clay and wood fail differently — metal conducts, clay insulates and is fragile, and wood is light and will scorch.',
          'The comparison that catches buyers is the used one. A vessel that has held resinous material carries the scent into the next session, which some buyers want and some cannot tolerate.',
        ],
        bodyAr: [
          'تُقارن المستلزمات بالمهمة: وعاء لجزء، ووعاء لكأس من الرقائق، وحامل لملفوف، ولوح جمر للفحم، وصينية للرماد — خمسة مشتريات مختلفة. وداخل الأوعية، المعدن والطين والخشب يفشلون بصور مختلفة: فالمعدن يوصل الحرارة، والطين يعزل وهو هش، والخشب خفيف ويحترق على سطحه.',
          'والمقارنة التيوقع فيها المشترون هي المستعملة. فالوعاء الذي حمل مادة راتنجية يحمل الرائحة إلى الجلسة التالية، وهو ما يريده بعضهم ولا يتحمله بعضهم.',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'Start from what will be burnt and how it will be heated, because that decides the material, the size and the clearance. Then ask the maker for the internal dimensions and the intended heat source, which are the two answers that prevent the commonest mistake of buying a vessel too small for the material it is meant to hold.',
          'If buying a used vessel, ask what it has held and smell it before buying. If buying new, ask about the lining, because an unlacquered metal vessel can alter what is burnt in it.',
        ],
        bodyAr: [
          'ابدأ بما سيُحرق وكيف سيُسخَّن، لأن ذلك يقرر المادة والحجم والمسافة. ثم اسأل الصانع عن الأبعاد الداخلية ومصدر الحرارة المقصود، وهما الجوابان اللذان يمنعان الخطأ الأشيع: شراء وعاء أصغر من المادة المفترض أن يحملها.',
          'وإن اشتريت وعاءً مستعملاً، فاسأل عمّا حمل وشمّه قبل الشراء. وإن اشتريت جديداً، فاسأل عن البطانة، فالوعاء المعدني غير المطعَّم قد يغيّر ما يُحرق فيه.',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The directory lists burner suppliers and incense makers, and the accessory trade sits beside them, with metalworkers and makers of household items closer to it than fragrance suppliers. What matters is a maker who states the material, the internal dimensions and the intended heat source, since those three are what a catalogue photograph does not show.',
        ],
        bodyAr: [
          'يفصل الدليل موردي السخّانات وصانعي البخور، وتقع تجارة المستلزمات إلى جانبهما، مع أصحاب المعدن وصنّاع الأدوات المنزلية أقرب إليها من موردي العطور. والمهم هنا من يذكر المادة والأبعاد الداخلية ومصدر الحرارة المقصود، لأن هذه الثلاثة هي ما لا تُظهره صورة الكتالوج.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Using oud wood with suitable equipment covers the relationship between the material and the heat source. Reading intended-use instructions applies to any scented material used with an accessory. Label and organize samples covers keeping the material itself traceable.',
        ],
        bodyAr: [
          'صفحة استخدام خشب العود بمعدات مناسبة تغطي العلاقة بين المادة ومصدر الحرارة. وصفحة قراءة تعليمات الاستخدام المقصود تنطبق على كل مادة معطرة تُستعمل مع مستلزم. وصفحة تسمية العينات وتنظيمها تغطّي إبقاء المادة نفسها قابلة للتتبع.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
    method: 'no-ifra',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not state a heat tolerance, a capacity, a price or a durability, and it does not assess any vessel or tool.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تذكر تحمّلاً حرارياً ولا سعة ولا سعراً ولا ديمومة، ولا تقيّم أي وعاء أو أداة.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read using oud wood with suitable equipment'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة استخدام خشب العود بمعدات مناسبة'],
    related: [
      { slug: 'using-oud/using-oud-wood', label: 'Using oud wood with suitable equipment' },
      { slug: 'using-oud/reading-product-instructions', label: 'Reading intended-use instructions' },
      { slug: 'using-oud/label-and-store-samples', label: 'Label and organize samples' },
    ],
  }),

  productFamily({
    slug: 'products/home-fragrance',
    title: 'Home Fragrance',
    titleAr: 'العطور المنزلية',
    summary:
      'The family of scented products for a room, and the fields that place one of them in a category.',
    summaryAr:
      'عائلة المنتجات المعطرة المخصصة للغرفة، والحقول التي تصنّف واحداً منها.',
    directAnswer:
      'Home fragrance is the umbrella family for products whose purpose is to scent a room rather than a person: diffusers, candles, room sprays, incense and the small objects that carry scent. It is a category defined by intended use, which matters because the intended use is what the fragrance-mixture standards turn on. Two products that smell identical can sit in different categories, and a buyer who treats "home fragrance" as a specification has specified nothing.',
    directAnswerAr:
      'العطور المنزلية هي العائلة التي تجمع المنتجات الغرض منها معطرة الغرفة لا معطرة الإنسان: الناشر، والشموع، ورذاذ الغرفة، والبخور، والأشياء الصغيرة المحمّلة للرائحة. وهي فئة تُعرَّف بالاستخدام المقصود، وهذا مهم لأن الاستخدام المقصود هو ما تدور عليه معايير الخصلة العطرية. ومنتجان متطابقان في الرائحة قد يقعان في فئتين مختلفتين، ومن عامل «عطر منزلي» كمواصفة لم يسمِّ شيئاً.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers every product in this section whose intended use is a room: reed diffusers, candles, room sprays, incense and incense accessories, and the scented sachets, beads and car pendants sold for wardrobes and cupboards. It covers the range from a single candle to a whole-house scent programme.',
          'The umbrella is useful for one reason in particular: the fields that apply to the family are the fields that decide whether a product may be sold in a given market, and those fields are set by where the product will be used and what it will touch.',
        ],
        bodyAr: [
          'تغطي العائلة كل منتج في هذا القسم غرضه معطرة الغرفة: ناشرات الأعواد، والشموع، ورذاذ الغرفة، والبخور ومستلزماته، والأكياس والخرزات وقطع السيارة المعطرة المباعة الخزائن والخزانات. ويغطي المدى من شمعة واحدة إلى برنامج عطر شامل للمنزل.',
          'والمظلة مفيدة بسبب واحد بعينه: الحقول المنطبقة على العائلة هي الحقول التي تقرر ما يجوز بيع منتج في سوق معيّن، وهذه الحقول تحددها مواضع استعمال المنتج وما سيلامسه.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'Home fragrance is not a person fragrance. A room product and a skin product are not interchangeable, and a product evaluated for one is not evaluated for the other.',
          'It is not a specific format either: a reed diffuser, a candle and a room spray are three different products that happen to share a purpose. And a "home fragrance oil" sold by the litre is a supply to a formulator, not a finished home product.',
        ],
        bodyAr: [
          'العطر المنزلي ليس عطر إنسان. فمنتج الغرفة ومنتج البشرة ليسا قابلين للتبادل، ومنتج قيِّم لأحدهما لم يُقيَّم للآخر.',
          'وليس شكلاً بعينه: فالناشر والشمعة ورذاذ الغرفة ثلاثة منتجات مختلفة تشترك في الغرض. وزيت «العطر المنزلي» المباع بالليتر توريد لصاحب صياغة لا منتج منزلي منتهٍ.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields that apply across the family are: the intended use, stated as the room and the surface; the product category under the fragrance-mixture standards, which follows from that intended use; the fragrance mixture and its conformity position; the allergen declaration; the carrier or the wax and the other materials in the product; the net content, and for a liquid the container and its closure; the burn time or the dispersal period as the seller states it; the batch reference and the date; and the safety and transport classification for the destination market.',
          'The standards are at their clearest on this family. IFRA states that the applicable category is determined from the product\'s intended use, that quantitative limits are expressed as an upper concentration in the finished consumer product rather than in the mixture, that conformity for a mixture is established by the formulator or supplier for that stated use, that a Certificate of Conformity applies exclusively to fragrance mixtures intended for incorporation into finished consumer products, that IFRA itself does not issue certificates or certify products, and that conformity does not exempt a company from applicable national or local regulation.',
        ],
        bodyAr: [
          'الحقول المنطبقة على العائلة هي: الاستخدام المقصود، مذكوراً بالغرفة والسطح؛ وفئة المنتج وفق معايير الخصلة العطرية، وهي تتبعية لذلك الاستخدام؛ والخصلة العطرية وموقف مطابقتها؛ وإقرار المواد الحساسة؛ والحامل أو الشمع وبقية المواد في المنتج؛ والمحتوى الصافي، وللسائل الوعاء وإغلاقه؛ ومدة الاحتراق أو مدة الانتشار كما يذكرها البائع؛ ومرجع الدفعة والتاريخ؛ وتصنيف السلامة والنقل بالنسبة لسوق الوجهة.',
          'وتتضح المعايير في هذه العائلة أكثر ما تكون. فتذكر IFRA أن الفئة المنطبقة تُحدَّد من الاستخدام المقصود، وأن الحدود الكمية تُحدَّد كحدّ أعلى لتركيز المادة في المنتج النهائي لا في الخصلة، وأن مطابقة الخصلة يثبتها مُركِّبها أو مورّدها لذلك الاستخدام، وأن شهادة المطابقة تنطبق حصراً على الخصلات المزمع إدخالها في منتجات استهلاكية منتهية، وأن IFRA لا تصدر هي شهادات ولا تصدّق المنتجات، وأن المطابقة لا تعفي الشركة من الأنظمة الوطنية أو المحلية المنطبقة.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'Within the family the comparison is between mechanisms, not between scents: evaporation through reeds, combustion of a wax, atomisation of a liquid and smouldering of a solid all deliver scent differently, and they differ in what they leave behind and in how the room is affected.',
          'And across the family, a product for a small enclosed room and a product for a large open space are not the same purchase, which is a decision about the intended use rather than about the fragrance.',
        ],
        bodyAr: [
          'وداخل العائلة، المقارنة بين الآليات لا بين الروائح: فالتبخر عبر الأعواد، واحتراق الشمع، ورش السائل، والرمّور المادة الصلبة توصل الرائحة على نحو مختلف، وتختلف فيما تتركه خلفها وفي كيف يتأثر المكان.',
          'وعبر العائلة، منتج لغرفة مغلقة صغيرة ومنتج لمساحة مفتوحة كبيرة ليسا الشراء نفسه، وهذا قرار عن الاستخدام المقصود لا عن العطر.',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'State the intended use before anything else, because it decides the category and the limits. Then ask which category the supplier is working to, and ask for the documentation that covers the fragrance mixture for that category and that use.',
          'Then ask the material questions that belong to the format: the wax and the wick for a candle, the carrier and the reeds for a diffuser, the base and the propellant for a spray. A buyer who has been told only that a product is "for home use" cannot check any of it.',
        ],
        bodyAr: [
          'اذكر الاستخدام المقصود قبل أي شيء، لأنه يحدد الفئة والحدود. ثم اسأل أي فئة يشتغل عليها المورد، واطلب الوثيقة التي تغطي الخصلة العطرية لتلك الفئة وذلك الاستخدام.',
          'ثم اسأل أسئلة المادة الخاصة بكل شكل: الشمع والفتيل للشمعة، والحامل والأعواد للناشر، والقاعدة والدافع للرذاذ. ومن أُخبر فقط بأن المنتج «للاستعمال المنزلي» لا يستطيع التحقق من شيء فيه.',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The directory splits this trade across several categories: incense makers, attar makers, perfume-oil suppliers and raw-material suppliers. A buyer assembling a home-fragrance range is usually buying from more than one of them, and the buyer who wants a coherent scent across a range needs the same fragrance mixture supplier throughout.',
        ],
        bodyAr: [
          'يقسم الدليل هذه التجارة بين عدة فئات: صانعي البخور، وصانعي العطور الشرقية، وموردي الزيوت العطرية، وموردي المواد الخام. والمشتري الذي يجمّع خط عطور منزلية يشتري عادةً من أكثر من واحد منهم، ومن يريد رائحة متسقة عبر الخط يحتاج إلى مورد الخصلة العطرية نفسه في كل مرة.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Reading intended-use instructions shows how the conditions on a home product differ from the guidance. Understanding perfume concentration labels covers the labelling convention used across scented products. Fragrance notes versus ingredients explains why a description of the scent does not tell the buyer what is in the product.',
        ],
        bodyAr: [
          'صفحة قراءة تعليمات الاستخدام المقصود تبيّن كيف تختلف شروط المنتج المنزلي عن إرشاداته. وصفحة ملصقات تركيز العطر تغطّي العرف التسميقي المستعمل في المنتجات المعطرة. وصفحة النوتات مقابل المكونات تشرح لماذا لا يخبرك وصف الرائحة بما في المنتج.',
        ],
      },
    ],
    sourceIds: ['IFRA_STANDARDS', 'IFRA_APPLYING', 'IFRA_LIBRARY'],
    method: 'ifra',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not state a concentration, a burn time, a dispersal period or a price, and it does not establish that any product conforms to any standard.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تذكر تركيزاً ولا مدة احتراق ولا مدة انتشار ولا سعراً، ولا تثبت مطابقة أي منتج لأي معيار.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read reading intended-use instructions'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة قراءة تعليمات الاستخدام المقصود'],
    related: [
      { slug: 'using-oud/reading-product-instructions', label: 'Reading intended-use instructions' },
      { slug: 'fragrance/concentration-labels', label: 'Understanding perfume concentration labels' },
      { slug: 'fragrance/notes-versus-ingredients', label: 'Fragrance notes versus ingredients' },
    ],
  }),

  productFamily({
    slug: 'products/reed-diffusers',
    title: 'Reed Diffusers',
    titleAr: 'ناشرات الأعواد',
    summary:
      'Scent carried by evaporation through reeds, and the fields that describe the liquid and the reeds together.',
    summaryAr:
      'رائحة تُنقل بالتبخر عبر الأعواد، والحقول التي تصف السائل والأعواد معاً.',
    directAnswer:
      'Reed diffusers are the evaporation family: a scented liquid in a vessel, drawn up through fibre reeds and released into the air as the liquid evaporates off them. The product is the system rather than the liquid alone, which is why the fields cover both. A diffuser with the same liquid and a different reed behaves differently, and a buyer who compares two diffusers only by their fragrance is comparing one variable out of several.',
    directAnswerAr:
      'ناشرات الأعواد هي عائلة التبخر: سائل معطر في وعاء يُسحب عبر أعواد من الألياف ثم يُطلق في الهواء مع تبخر السائل عنه. والمنتج هو المنظومة لا السائل وحده، ولهذا تغطي الحقول الأمرين. والناشر الذي له السائل نفسه وأعواد مختلفة يتصرف على نحو مختلف، ومن يقارن ناشرين بالعطر وحده يقارن متغيراً واحداً من عدة.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers the reed diffuser bottle with its reed set, the reed diffuser with a larger vessel sold for a room, the scented gel and the scented beads sold in a dish, and the replacement reeds sold on their own. It also covers the liquid sold by the litre to a formulator who fills the vessel themselves.',
          'The mechanism decides the behaviour. A diffuser works by evaporation, so the scent strength depends on the surface area of the reeds, the carrier, the temperature of the room and the rate at which the liquid is drawn up — which changes over the life of the fill.',
        ],
        bodyAr: [
          'تغطّي العائلة قارورة الناشر مع أعواده، والناشر بوعاء أكبر المباع لغرفة، والجل والخرزات المعطرة المباعة في طبق، والأعواد البديلة المباعة منفردة. كما تغطّي السائل المباع بالليتر لصاحب صياغة يملأ الوعاء بنفسه.',
          'والآلية تقرر السلوك. فالناشر يعمل بالتبخر، فقوة الرائحة تعتمد على مساحة أسطح الأعواد، وعلى الحامل، وعلى حرارة الغرفة، وعلى معدل السحب — وهو معدل يتغير مع عمر التعبئة.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'A reed diffuser is not a scented liquid sold by the litre. The litre is a supply to a formulator; the filled vessel with its reeds is a finished consumer product, and the two are governed differently.',
          'It is not a room spray, which delivers scent as droplets into the air, and it is not an incense burner or a candle, which deliver scent by combustion. It is also not a scented oil for skin: the liquid in a diffuser is not evaluated for body contact.',
        ],
        bodyAr: [
          'الناشر ليس سائلاً معطراً يُباع بالليتر. فالليتر توريد لصاحب صياغة، أما الوعاء المملوء بأعواده فهو منتج استهلاكي منتهٍ، والاثنان يخضعان لحكم مختلف.',
          'وليس رذاذ غرفة، الذي يوصل الرائحة قطرات في الهواء، وليس محرق بخور ولا شمعة، يوصلان الرائحة بالاحتراق. وليس أيضاً زيتاً معطراً للبشرة: فالسائل في الناشر غير مقيَّم للاستخدام على الجسم.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields are: the fragrance mixture and its intended use; the carrier; the category under the standards that the intended use places the product in; the reed type, count, length and fibre; the fill volume and the vessel; the closure; the batch reference and the date; the allergen declaration; the label statement of what the product may be used on and for; and the transport classification for the destination market.',
          'The standards apply here because the product is a finished consumer product into which a fragrance mixture is incorporated. IFRA states that the applicable category is determined from the intended use, that quantitative limits are expressed in the finished product rather than in the mixture, that conformity for a mixture is established by the formulator or supplier for that stated use, and that the final decision and responsibility for the finished product lies with the consumer product manufacturer.',
        ],
        bodyAr: [
          'الحقول هي: الخصلة العطرية واستخدامها المقصود؛ والحامل؛ والفئة التي يضع فيها الاستخدام المقصود المنتج وفق المعايير؛ ونوع الأعواد وعددها وطولها وأليافها؛ وحجم التعبئة والوعاء؛ والإغلاق؛ ومرجع الدفعة والتاريخ؛ وإقرار المواد الحساسة؛ وبيان الملصق فما يجوز استعمال المنتج عليه ولأي غرض؛ وتصنيف النقل بالنسبة لسوق الوجهة.',
          'وتنطبق المعايير هنا لأن المنتج منتج استهلاكي منتهٍ تُدخال فيه خصة عطرية. فتذكر IFRA أن الفئة المنطبقة تُحدَّد من الاستخدام المقصود، وأن الحدود الكمية تُحدَّد في المنتج النهائي لا في الخصلة، وأن مطابقة الخصلة يثبتها مُركِّبها أو مورّدها لذلك الاستخدام، وأن القرار النهائي والمسؤولية عن المنتج المنتهي تقعان على الشركة المصنّعة للمنتج الاستهلاكي.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'A diffuser and a room spray deliver the same fragrance by different means: one persistently and invisibly over weeks, the other in a burst for seconds. A diffuser and a candle differ in the same way and more sharply, because one adds nothing to the air but scent and the other adds combustion products as well.',
          'Within the family, the reeds are the variable that decides the result: more reeds and more exposed surface give a stronger scent, and the same liquid with a different reed set is a different product.',
        ],
        bodyAr: [
          'الناشر ورذاذ الغرفة يوصلان الرائحة نفسها بوسيلتين مختلفتين: أحدهما مستمر وغير مرئي أسابيع، والآخر دفعةً في ثوانٍ. والناشر والشمعة يفترقان على النحو نفسه وأشدّ، لأن أحدهما لا يضيف إلى الهواء إلا الرائحة والآخر يضيف نواتج احتراق أيضاً.',
          'وداخل العائلة، الأعواد هي المتغير الذي يقرر النتيجة: وكلما زاد عددها وسطحها المكشوف اشتدت الرائحة، والسائل نفسه بأعواد مختلفة منتج مختلف.',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'Ask for the fragrance mixture and the carrier, then ask what the reeds are made of and how many are in the pack, because the seller controls both and they work together. Ask how much liquid is in the vessel against the size of the vessel, since a nearly empty bottle with a large reed set behaves differently from a full one.',
          'And ask the room the product is for. The same diffuser is a different product for a car and for a hotel lobby, and the intended-use statement is what a buyer should insist on seeing.',
        ],
        bodyAr: [
          'اسأل عن الخصلة العطرية والحامل، ثم اسأل عن مادة الأعواد وعددها في العلبة، فالبائع يتحكم بالاثنين وهما يعملان معاً. واسأل عن كمية السائل في الوعاء مقابل حجمه، لأن قارورة شبه فارغة بمجموعة أعواد كبيرة تتصرف على نحو مختلف من ممتلئة.',
          'واسأل عن الغرفة التي سيُستعمل فيها المنتج. فالناشر نفسه منتج مختلف بين السيارة وبهو الفندق، وبيان الاستخدام المقصود هو ما ينبغي أن يطالب المشتري برؤيته.',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The directory lists perfume-oil suppliers and raw-material suppliers alongside perfume manufacturers, and for a diffuser the buyer may be dealing with a formulator who fills the vessel or with a brand that has had it filled. The distinction matters when something goes wrong with a batch.',
        ],
        bodyAr: [
          'يفصل الدليل موردي الزيوت العطرية وموردي المواد الخام إلى جانب مصنّعي العطور، وقد يكون المشتري هنا مع من يعبّئ الوعاء أو مع علامة جعلت آخر يعبّئه. والتمييز مهم حين يحدث خلل في دفعة.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Reading intended-use instructions shows where the conditions sit on a filled vessel. Why wood, oil and perfume need separate shipping checks explains why a liquid preparation crosses more regulatory lines than a solid. Fragrance notes versus ingredients covers how the scent is described.',
        ],
        bodyAr: [
          'صفحة قراءة تعليمات الاستخدام المقصود تبيّن أين تقع الشروط على وعاء ممتلئ. وصفحة لماذا يحتاج الخشب والزيت والعطر فحوص شحن منفصلة تشرح لماذا يعبر المستحضر السائل خطوطاً تنظيمية أكثر من المادة الصلبة. وصفحة النوتات مقابل المكونات تغطي كيفية وصف الرائحة.',
        ],
      },
    ],
    sourceIds: ['IFRA_STANDARDS', 'IFRA_APPLYING', 'IFRA_LIBRARY'],
    method: 'ifra',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not state a concentration, a dispersal period, a fragrance load or a price, and it does not establish that any product conforms to any standard.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تذكر تركيزاً ولا مدة انتشار ولا عبء عطري ولا سعراً، ولا تثبت مطابقة أي منتج لأي معيار.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read reading intended-use instructions'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة قراءة تعليمات الاستخدام المقصود'],
    related: [
      { slug: 'using-oud/reading-product-instructions', label: 'Reading intended-use instructions' },
      { slug: 'trade/shipping-wood-oil-perfume', label: 'Why wood, oil and perfume need separate shipping checks' },
      { slug: 'fragrance/notes-versus-ingredients', label: 'Fragrance notes versus ingredients' },
    ],
  }),

  productFamily({
    slug: 'products/candles',
    title: 'Candles',
    titleAr: 'الشموع',
    summary:
      'Combustible products in a container or a mould, and the fields that describe wax, wick and fragrance together.',
    summaryAr:
      'منتجات محترقة في وعاء أو قالب، والحقول التي تصف الشمع والفتيل والخصلة العطرية معاً.',
    directAnswer:
      'Candles are the combustion family: a wax and a wick in a container, a moulded pillar, or a filled tin, which burns to give light, heat or scent. The product is the assembly, so the fields cover each part: the wax and its blend, the wick and its material, the fragrance and how it is loaded, the vessel or mould, the fill weight, and the safety and labelling requirements of the market it is sold into.',
    directAnswerAr:
      'الشموع هي عائلة الاحتراق: شمع وفتيل في وعاء، أو عمود مصبوب في قالب، أو علبة ممتلئة، يُحرق لإعطاء ضوء أو حرارة أو رائحة. والمنتج هو التجميع، فالحقول تغطي كل جزء: الشمع وخلطه، والفتيل ومادته، والخصلة العطرية وكيف حُمّلت، والوعاء أو القالب، ووزن التعبئة، ومتطلبات السلامة والوسم في السوق الذي يباع فيه.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers container candles, filled tins, moulded pillars and tapers, and the scented variants of each. It covers the two-wick and multi-wick products, the tealight format, and the wax melts sold for use in a warming lamp.',
          'Inside a scented candle the fragrance is not a liquid sitting in the wax but material that has been introduced into it and released as the wax melts. How that was done, and with what carrier, is the field that decides how the candle will smell and how it will burn.',
        ],
        bodyAr: [
          'تغطي العائلة الشموع في العبوات، والعلب الممتلئة، والأعمدة المصبوبة والقوالب، وصورها المعطرة. وتغطّي المنتجات بفتيلين وبفتيلات متعددة، وشكل الشموع الصغيرة، ورقائق الشمع المباعة للاستعمال في مصباح التسخين.',
          'وداخل الشمعة المعطرة، الخصلة العطرية ليست سائلاً قاعداً في الشمع بل مادة أُدخلت فيه وأُطلقت مع انصهاره. وكيف أُدخلت، وبأي حامل، هو الحقل الذي يقرر كيف تشم الشمسة وكيف تحترق.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'A candle is not a diffuser, and the two are sold in the same shops with the same words on the box. One evaporates a liquid through reeds; the other melts a wax and burns a wick, adding combustion products to the room as well as scent.',
          'It is not an incense stick, which is a formed product on a core. It is not a room spray. And a scented wax melt for a warming lamp is a different product again: it never burns, and the fragrance is delivered only by the heat of the lamp.',
        ],
        bodyAr: [
          'الشمعة ليست ناشراً، والاثنان يُباعان في المحل نفسه بالكلمات نفسها على العلبة. فأحدهما يتبخر سائلاً عبر أعواد، والآخر يذيب شمعاً ويحرق فتيلاً، فيضيف نواتج احتراق إلى الغرفة مع الرائحة.',
          'وليس عود بخور، وهو منتج مشكَّل على عصا. وليس رذاذ غرفة. ورقائق الشمع المعطرة للمصباح شيء ثالث: فهي لا تحترق، والرائحة تصل إليها بحرارة المصباح وحدها.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields are: the wax or wax blend and the proportion in which it is used; the wick, its material and its size; the fragrance and the carrier it was introduced in; the fill weight and the net weight of the product; the vessel and the glass, where there is one; the number of wicks; the burn characteristics as the seller states them; the batch reference and the date; the safety labelling and the transport classification for the destination market; and the allergen declaration.',
          'The standards apply because a scented candle is a finished consumer product with a fragrance mixture in it. IFRA states that the applicable category is determined from the intended use, that quantitative limits are expressed in the finished consumer product, that conformity for a mixture is established by the formulator or supplier for that stated use, and that the standards do not exempt a company from applicable national or local regulation, which for a candle includes the fire-safety and labelling rules of the market it is sold into.',
        ],
        bodyAr: [
          'الحقول هي: الشمع أو مزيج الشمع والنسبة المستعملة؛ والفتيل ومادته وحجمه؛ والخصلة العطرية والحامل الذي أُدخلت فيه؛ ووزن التعبئة والوزن الصافي للمنتج؛ والوعاء والزجاج حيث يوجد؛ وعدد الفتيلات؛ وسلوك الاحتراق كما يذكره البائع؛ ومرجع الدفعة والتاريخ؛ ووسم السلامة وتصنيف النقل بالنسبة لسوق الوجهة؛ وإقرار المواد الحساسة.',
          'وتنطبق المعايير لأن الشمعة المعطرة منتج استهلاكي منتهٍ فيه خصة عطرية. فتذكر IFRA أن الفئة المنطبقة تُحدَّد من الاستخدام المقصود، وأن الحدود الكمية تُحدَّد في المنتج الاستهلاكي المنتهي، وأن مطابقة الخصلة يثبتها مُركِّبها أو مورّدها لذلك الاستخدام، وأن المعايير لا تعفي الشركة من الأنظمة الوطنية أو المحلية المنطبقة، وهي في حالة الشمعة تشمل قواعد السلامة من الحريق والوسم في السوق الذي تباع فيه.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'A scented candle and an unscented one are the same product with a fragrance mixture added, and the addition changes the burn as well as the smell. A container candle and a moulded pillar are different products with different uses, since one is meant to be moved and the other is not.',
          'And a candle against a diffuser or a room spray is a comparison of mechanism, which is the comparison that decides which of them the buyer should be buying at all.',
        ],
        bodyAr: [
          'الشمعة المعطرة وغير المعطرة منتج واحد أضيفت إليه خصة عطرية، والإضافة تغيّر الاحتراق كما تغيّر الرائحة. والشمعة في وعاء والعمود المصبوب منتجان مختلفان باستعمالات مختلفة، فأحدهما معد للنقل والآخر ليس كذلك.',
          'والشمعة مقابل الناشر أو رذاذ الغرفة مقارنة بين الآليتين، وهي المقارنة التي تقرر أيّها ينبغي للمشتري أن يشتري أصلاً.',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'Ask for the wax, the wick and the fragrance carrier together, because the three interact and a seller who answers only one of them has answered the easiest. Ask the fill weight against the vessel size, since a small vessel filled high is a different product from a large one filled to the same line.',
          'Then ask the burn statement as the seller puts it, and buy one before buying a case. A candle that burns unevenly or excessively hot is a defect of the assembly, and it is easier to find out about one than about twelve.',
        ],
        bodyAr: [
          'اسأل عن الشمع والفتيل وحامل الخصلة العطرية معاً، لأن الثلاثة يتفاعلون والبائع الذي يجيب عن واحد منها فقط يكون قد أجاب عن الأسهل. واسأل عن وزن التعبئة مقابل حجم الوعاء، فإن وعاءً صغيراً ممتلئاً حتى أعلى هو منتج غير وعاء كبير مملوء إلى الخط نفسه.',
          'ثم اسأل عن بيان الاحتراق كما يذكره البائع، واشترِ واحدة قبل شراء الكرتون. فالشمعة التي تحترق غير متساوية أو بوقاحة زائدة عيب في التجميع، والفحص أسهل في واحدة منه في اثنتي عشرة.',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The directory lists perfume manufacturers, raw-material suppliers and packaging suppliers, and a scented candle is usually bought from a combination of them: the fragrance from an oil supplier, the vessel from a packaging supplier, and the fill from whoever will do it. A buyer who wants a line rather than a batch needs to know who is actually making the finished candle.',
        ],
        bodyAr: [
          'يفصل الدليل مصنّعي العطور وموردي المواد الخام وموردي التغليف، والشمعة المعطرة تُشترى عادةً من أكثر من واحد منهم: الخصلة من مورد زيوت، والوعاء من مورد تغليف، والتعبئة ممن ينفذها. ومن يريد خطاً لا دفعة يحتاج أن يعرف من يصنع الشمعة المنتهية فعلاً.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Reading intended-use instructions shows where the conditions sit on a scented candle. Understanding perfume concentration labels covers the labelling convention used across scented products. Why processing location is a separate fact applies when the filling is done in a third country.',
        ],
        bodyAr: [
          'صفحة قراءة تعليمات الاستخدام المقصود تبيّن أين تقع الشروط على شمعة معطرة. وصفحة ملصقات تركيز العطر تغطّي العرف التسميقي في المنتجات المعطرة. وصفحة لماذا موقع المعالجة واقعة منفصلة تنطبق حين يتم التعبئة في بلد ثالث.',
        ],
      },
    ],
    sourceIds: ['IFRA_STANDARDS', 'IFRA_APPLYING', 'IFRA_LIBRARY'],
    method: 'ifra',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not state a wax composition, a fragrance load, a burn time, a price or a safety certification, and it does not establish that any product conforms to any standard.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تذكر تركيب الشمع ولا عبء الخصة العطرية ولا مدة الاحتراق ولا سعراً ولا شهادة سلامة، ولا تثبت مطابقة أي منتج لأي معيار.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read reading intended-use instructions'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة قراءة تعليمات الاستخدام المقصود'],
    related: [
      { slug: 'using-oud/reading-product-instructions', label: 'Reading intended-use instructions' },
      { slug: 'fragrance/concentration-labels', label: 'Understanding perfume concentration labels' },
      { slug: 'production/processing-location', label: 'Why processing location is a separate fact' },
    ],
  }),

  productFamily({
    slug: 'products/room-sprays',
    title: 'Room Sprays',
    titleAr: 'رذاذ الغرف',
    summary:
      'Scent sprayed into the air rather than applied to a surface, and the fields that describe the liquid.',
    summaryAr:
      'رائحة تُرش في الهواء لا على سطح، والحقول التي تصف السائل.',
    directAnswer:
      'Room sprays are the atomised family: a scented liquid in a trigger bottle or a aerosol can, sprayed into the air of a room. They are used on textiles and soft furnishings as much as in the air, and the intended use is the field that decides everything else, because it determines whether the product may be used on a surface, how it is classified, and what the label has to say.',
    directAnswerAr:
      'رذاذ الغرف هي عائلة الرذ: سائل معطر في زجاجة بضغط أو في علبة رش، يُرش في هواء الغرفة. ويُستعمل على المنسوجات والأقمشة الرملية بقدر ما يُستعمل في الهواء، والاستخدام المقصود هو الحقل الذي يقرر كل شيء آخر، لأنه يحدد ما يجوز استعمال المنتج على سطح، وكيف يُصنَّف، وما يجب أن يقوله الملصق.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers the trigger-spray room spray, the aerosol room spray, the linen and upholstery spray, the shoe and textile spray sold with the same fragrance, and the refill sold separately from the bottle.',
          'The refill is worth noting as a distinct case, because a buyer who owns a bottle and buys a refill is buying a liquid to put into a container whose condition and history they already know, while a buyer buying a complete spray is buying the container as well.',
        ],
        bodyAr: [
          'تغطي العائلة رذاذ الغرفة بزجاجة الضغط، ورذاذ الغرفة بالعلبة الدافعة، ورذاذ الأقمشة والمفروشات، ورذاذ الأحذية والمنسوجات المباع بالعطر نفسه، والعبوة البديلة المباعة منفصلة عن الزجاجة.',
          'وتستحق العبوة البديلة ملاحظة مستقلة، لأن المشتري الذي يملك زجاجة ويشتري عبوة بديلة يشتري سائلاً ليضعه في وعاء يعرف حالته وتاريخه، بينما من يشتري رذاذاً كاملاً يشتري الوعاء أيضاً.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'A room spray is not a body spray. The same fragrance in a body spray is evaluated for skin contact and the one in a room spray is not, and a buyer who sprays a room formulation on a person has used it outside its evaluation.',
          'It is not a reed diffuser, which releases scent slowly and continuously rather than in a burst. It is not a fabric cleaner, even when it is sold as one, because the fragrance is a different part of the product from the cleaning action.',
        ],
        bodyAr: [
          'رذاذ الغرفة ليس رذاذ الجسم. فالعطر نفسه في رذاذ الجسم مقيَّم للاستخدام على البشرة، وغير مقيَّم في رذاذ الغرفة، ومن يرش تركيبة غرفة على إنسان استعملها خارج تقييمها.',
          'وليس ناشر أعواد، الذي يطلق الرائحة ببطء واستمرار لا دفعةً واحدة. وليس منظفاً للأقمشة حتى إن بيع على هذا النحو، لأن الرائحة جزء مختلف من المنتج عن التنظيف.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields are: the fragrance mixture and the carrier; the intended use, stated as air, textile or both; the product category the intended use places it in under the standards; the propellant, or the absence of one in a trigger bottle; the allergen declaration; the net content and the container; the batch reference and the date; the label statement of the surfaces it may be used on; and the transport classification, which differs between a trigger bottle and an aerosol can.',
          'On the standards, the scope is worth stating carefully. IFRA states that the applicable category is determined from the intended use, that quantitative limits are expressed as an upper concentration in the finished consumer product rather than in the mixture, that conformity for a fragrance mixture is established by the formulator or supplier for that stated use, that a Certificate of Conformity applies exclusively to fragrance mixtures intended for incorporation into finished consumer products, and that IFRA itself does not issue certificates or certify products.',
        ],
        bodyAr: [
          'الحقول هي: الخصلة العطرية والحامل؛ والاستخدام المقصود، مذكوراً بالهواء أو بالمنسوجات أو بالاثنين؛ وفئة المنتج التي يضع فيها الاستخدام المقصود المنتج وفق المعايير؛ والدافع، أو غيابه في زجاجة الضغط؛ وإقرار المواد الحساسة؛ والمحتوى الصافي والوعاء؛ ومرجع الدفعة والتاريخ؛ وبيان الملصق للأسطح التي يجوز استعمال المنتج عليها؛ وتصنيف النقل، وهو مختلف بين زجاجة الضغط وعلبة الرش.',
          'وفي المعايير، يجدر ويُحدَّق في النطاق. فتذكر IFRA أن الفئة المنطبقة تُحدَّد من الاستخدام المقصود، وأن الحدود الكمية تُحدَّد كحدّ أعلى لتركيز المادة في المنتج الاستهلاكي المنتهي لا في الخصلة، وأن مطابقة الخصلة العطرية يثبتها مُركِّبها أو مورّدها لذلك الاستخدام، وأن شهادة المطابقة تنطبق حصراً على الخصلات المزمع إدخالها في منتجات استهلاكية منتهية، وأن IFRA لا تصدر هي شهادات ولا تصدّق المنتجات.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'A room spray and a diffuser deliver the same fragrance on completely different schedules: one at the moment the trigger is pulled, the other continuously for weeks. A room spray and a body spray are the same liquid in different bottles, with different evaluations attached.',
          'And within the family, a trigger bottle and an aerosol can differ in the transport class, the dispersal character and the refill arrangement, so they are not interchangeable for a buyer filling a line.',
        ],
        bodyAr: [
          'رذاذ الغرفة والناشر يوصلان الرائحة نفسها على جدولين مختلفين تماماً: أحدهما لحظة ضغط الزناد، والآخر باستمرار أسابيع. ورذاذ الغرفة ورذاذ الجسم سائل واحد في زجاجتين مختلفتين، بتقييمين مختلفين ملحقين بهما.',
          'وداخل العائلة، تختلف زجاجة الضغط وعلبة الرش في تصنيف النقل وفي طابع الانتشار وفي ترتيب العبوة البديلة، فليسا قابلين للتبادل لمشتري يبني خطاً.',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'Ask the intended use first, because "for the room" and "for the sofa" are different products with different limits. Then ask the carrier and the fragrance mixture, the allergen position for the destination market, and the surfaces the label permits.',
          'Then buy a single unit and use it on the surface it will actually meet, because a spray that marks a fabric or leaves a film is not a fault of the fragrance and is entirely a fault of the formulation.',
        ],
        bodyAr: [
          'اسأل عن الاستخدام المقصود أولاً، لأن «للغرفة» و«للسرير» منتجان مختلفان بحدود مختلفة. ثم اسأل عن الحامل والخلصة العطرية، وعن موقف المواد الحساسة بالنسبة لسوق الوجهة، وعن الأسطح التي يسمح الملصق بالاستعمال عليها.',
          'ثم اشترِ وحدة واحدة واستعملها على السطح الذي سيلمسه فعلاً، فالرذاذ الذي يترك أثراً على نسيج أو غشاءاً ليس عيباً في العطر بل عيباً كاملاً في الصياغة.',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The directory lists raw-material suppliers and packaging suppliers alongside perfume-oil suppliers, and a room spray is often assembled from all three: a fragrance from an oil supplier, a bottle and a pump from a packaging supplier, and filling somewhere else. The buyer who wants the same scent across sprays and diffusers needs the fragrance mixture from one supplier.',
        ],
        bodyAr: [
          'يفصل الدليل موردي المواد الخام وموردي التغليف إلى جانب موردي الزيوت العطرية، وغالباً يُجمَّع رذاذ الغرفة من الثلاثة: الخصلة من مورد زيوت، والزجاجة والمضخة من مورد تغليف، والتعبئة في مكان آخر. ومن يريد الرائحة نفسها في الرذاذ والناشر يحتاج الخصلة من مورد واحد.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Reading intended-use instructions shows where the conditions sit on a spray can. Why wood, oil and perfume need separate shipping checks covers how a liquid preparation is treated on the move. Understanding perfume concentration labels covers the labelling convention used across scented products.',
        ],
        bodyAr: [
          'صفحة قراءة تعليمات الاستخدام المقصود تبيّن أين تقع الشروط على علبة الرش. وصفحة لماذا يحتاج الخشب والزيت والعطر فحوص شحن منفصلة تغطي معاملة المستحضر السائل أثناء النقل. وصفحة ملصقات تركيز العطر تغطّي العرف التسميقي في المنتجات المعطرة.',
        ],
      },
    ],
    sourceIds: ['IFRA_STANDARDS', 'IFRA_APPLYING', 'IFRA_LIBRARY', 'CITES_APPENDICES'],
    method: 'ifra',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not state a concentration, a propellant, a dispersal period or a price, and it does not establish that any product conforms to any standard.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تذكر تركيزاً ولا دافعاً ولا مدة انتشار ولا سعراً، ولا تثبت مطابقة أي منتج لأي معيار.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read reading intended-use instructions'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة قراءة تعليمات الاستخدام المقصود'],
    related: [
      { slug: 'using-oud/reading-product-instructions', label: 'Reading intended-use instructions' },
      { slug: 'trade/shipping-wood-oil-perfume', label: 'Why wood, oil and perfume need separate shipping checks' },
      { slug: 'fragrance/concentration-labels', label: 'Understanding perfume concentration labels' },
    ],
  }),

  productFamily({
    slug: 'products/musk-fragrances',
    title: 'Musk Fragrances',
    titleAr: 'العطور المسكية',
    summary:
      'Fragrance materials and products in the musky family, and the fields that describe a material rather than a style.',
    summaryAr:
      'مواد ومنتجات عطرية في العائلة المسكية، والحقول التي تصف مادة لا ذوقاً.',
    directAnswer:
      'Musk fragrances cover the musky family: fragrance materials with a musky character, the accord built from them, and the finished products that use them. The word describes an olfactory character rather than a substance, which is the whole difficulty. Synthetic musks, white musks, musky ambers and chypre-leaning materials are all described by it, and a buyer who asks for "musk" has named a family of character rather than a material with a composition.',
    directAnswerAr:
      'العطور المسكية تغطي العائلة المسكية: مواد عطرية ذات طابع مسكي، والأوز المبني منها، والمنتجات المنتهية التي تستعملها. والكلمة تصف طابعاً شمياً لا مادة، وهذا هو مصدر كل الصعوبة. فالمسك الصناعي والمسك الأبيض والأمبر المسكي والمواد المنحدرة نحو الشبري توصف كلها بها، ومن طلب «مسك» يكون قد سمّى عائلة طابع لا مادة لها تركيب.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers the musky fragrance materials and accords used in compounding, the musky bases sold to houses that build on them, and the finished perfumes and home products whose character is described as musky. It also covers the individual materials sold under their own names, which are more specific than the family word.',
          'It does not cover one thing that the word suggests: a natural substance called musk. The material sold in this trade as a musky base is a manufactured chemical, not an animal secretion, and the naming history is the reason the two are confused.',
        ],
        bodyAr: [
          'تغطي العائلة مواد العطور المسكية والأوزات المستعملة في التركيب، والقواعد المسكية المباعة إلى دور العطور التي تبني عليها، والعطور المنتهية والمنتجات المنزلية التي توصف طابعها بالمسكي. كما تغطي المواد المفردة المباعة بأسمائها الخاصة، وهي أكثر تحديداً من كلمة العائلة.',
          'ولا تغطي شيئاً واحداً توحي به الكلمة: مادة طبيعية اسمها المسك. فالمادة المباعة في هذه التجارة كقاعدة مسكية مادة كيميائية مصنّعة لا إفراز حيواني، وتاريخ التسمية هو سبب الخلط بينهما.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'A musky fragrance is not a musk accord sold as a material, and neither is the same as a perfume that reads as musky. The accord is one specific material with a defined composition; a finished product is a formulation; the description is an impression.',
          'It is not an oud product, whatever the marketing says. And it is not a natural material: a buyer who has been told the musk in a product is natural has been told something that does not hold for the material sold under that name.',
        ],
        bodyAr: [
          'العطر المسكي ليس أوز مسك مباعاً كمادة، وليس واحد منهما هو نفسه عطر يقرأه المشتري مسكياً. فالأوز مادة واحدة محددة بتركيب، والمنتج المنتهٍ تركيبة، والوصف انطباع.',
          'وليس منتج عود مهما قال التسويق. وليس مادة طبيعية: ومن أُخبر بأن المسك في المنتج طبيعي أُخبر بشيء لا يصح على المادة المباعة بهذا الاسم.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields are: the specific material or accord and its composition as the supplier documents it; the concentration and the basis on which it is stated; the intended use and the category that use places it in; the carrier; the allergen declaration; the batch reference and the date; and the market-specific documentation.',
          'On the standards, a musky material used in a finished consumer product is subject to the fragrance-mixture regime in the ordinary way. IFRA states that the applicable category is determined from the intended use, that limits are expressed in the finished consumer product rather than in the mixture, that conformity for a mixture is established by the formulator or supplier for that stated use, and that certificates are generally not issued for raw materials. The materials themselves are found in the searchable standards library by control type, and that is where a specific limit is looked up.',
        ],
        bodyAr: [
          'الحقول هي: المادة أو الأوز المحدد وتركيبه كما يوثّقه المورد؛ والتركيز والأساس الذي يُذكر عليه؛ والاستخدام المقصود والفئة التي يضع فيها ذلك الاستخدام المنتج؛ والحامل؛ وإقرار المواد الحساسة؛ ومرجع الدفعة والتاريخ؛ والوثائق الخاصة بالسوق المعني.',
          'وفي المعايير، المادة المسكية المستعملة في منتج استهلاكي منتهٍ تخضع لنظام الخصلة العطرية كأي مادة أخرى. فتذكر IFRA أن الفئة المنطبقة تُحدَّد من الاستخدام المقصود، وأن الحدود تُحدَّد في المنتج الاستهلاكي المنتهي لا في الخصلة، وأن مطابقة الخصلة يثبتها مُركِّبها أو مورّدها لذلك الاستخدام، وأن الشهادات لا تُصدر عادةً للمواد الخام. والمواد نفسها موجودة في مكتبة المعايير القابلة للبحث بنوع التحكم، وهناك يُبحث عن حدّ بعينه.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'Musk sits against the other character families the trade uses — woody, amber, animalic, chypre — and the boundaries are perceptual, not chemical. A material can sit in more than one of them, and the trade names them by the impression they leave rather than by what is in them.',
          'And a musky accord is compared with a specific chemical by identity and by documentation, not by how musky it smells, because two materials can produce a similar impression and behave quite differently in a formula.',
        ],
        bodyAr: [
          'يقف المسك مقابل عائلات الطابع الأخرى المستعملة في التجارة — الخشبي والكهرماني والحيواني والشبري — والحدود بينها إدراكية لا كيميائية. فمادة قد تقع في أكثر من واحدة منها، والتسمية تتحسب بالأثر الذي تتركه لا بما فيها.',
          'ومقارنة أوز مسكي بمادة كيميائية بعينها تكون بالتطابق والتوثيق لا بمدى «مسكيته»، فمادتان قد تتركان انطباعاً متقارباً وتتصرفان في التركيبة على نحو مختلف تماماً.',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'Ask for the specific material rather than for the character, because "musk" is a word with many referents and the supplier knows which one they are selling. Then ask the intended use, the concentration basis and the conformity position, and ask for the documentation that covers this particular material in this particular use.',
          'If the point of the material is an oud accord, ask for that accord specifically. A musky base and an oud accord are different materials that are often used together, and buying one for the other is an easy mistake with an expensive result.',
        ],
        bodyAr: [
          'اسأل عن المادة بعينها لا عن الطابع، لأن «المسك» كلمة لها مراجع كثيرة والمورد يعرف أيّها يبيع. ثم اسأل عن الاستخدام المقصود، وعن أساس التركيز، وعن موقف المطابقة، واطلب الوثيقة التي تغطي هذه المادة في هذا الاستخدام.',
          'وإن كان المقصود مادة أوز عود، فاطلب ذلك الأوز بعينه. فالقاعدة المسكية والأوز العودي مادتان مختلفتان تُستعملان معاً، وشراء إحداهما مكان الأخرى خطأ سهل بنتيجة باهظة.',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The directory lists perfumers, perfume-oil suppliers and raw-material suppliers, and a musky material usually comes from one of the last two. The raw-material supplier is the one who can supply a single identified chemical; the oil supplier is the one who can supply a blend built on it.',
        ],
        bodyAr: [
          'يفصل الدليل العطارين وموردي الزيوت العطرية وموردي المواد الخام، والمادة المسكية تأتي عادةً من الأخيرين. فمورد المواد الخام هو الذي يستطيع توريد مادة كيميائية بعينها، ومورد الزيوت هو الذي يستطيع توريد مزيج مبني عليها.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Oud accords in fragrance composition explains what an accord is and why the distinction between an accord and oud matters. How oud is described in perfumery covers the character vocabulary a brief is written in. Reading intended-use instructions covers the conditions attached to a material in use.',
        ],
        bodyAr: [
          'صفحة أوزات العود في تركيب العطور تشرح ما هو الأوز ولماذا يهم التمييز بين الأوز والعود. وصفحة كيف يوصف العود في العطور تغطي مفردات الطابع التي يُكتب بها الموجز. وصفحة قراءة تعليمات الاستخدام المقصود تغطي الشروط الملحقة بمادة في الاستعمال.',
        ],
      },
    ],
    sourceIds: ['IFRA_STANDARDS', 'IFRA_LIBRARY', 'IFRA_APPLYING'],
    method: 'ifra',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not state a composition, a concentration, a price or a longevity figure, and it does not name a specific material as compliant with any standard.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تذكر تركيباً ولا تركيزاً ولا سعراً ولا مدة ثبات، ولا تسمّي مادة بعينها على أنها مطابقة لأي معيار.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read oud accords in fragrance composition'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة أوزات العود في تركيب العطور'],
    related: [
      { slug: 'fragrance/oud-accords', label: 'Oud accords in fragrance composition' },
      { slug: 'fragrance/oud-in-perfumery', label: 'How oud is described in perfumery' },
      { slug: 'using-oud/reading-product-instructions', label: 'Reading intended-use instructions' },
    ],
  }),

  productFamily({
    slug: 'products/sandalwood-materials',
    title: 'Sandalwood Materials',
    titleAr: 'مواد الصندل',
    summary:
      'The sandalwood family — heartwood, its oil, and the extracts and bases built on it.',
    summaryAr:
      'عائلة الصندل: قلب الخشب وزيتُه، والمواد المستخرجة، والقواعد المبنية عليها.',
    directAnswer:
      'Sandalwood materials cover the products made from the heartwood of Santalum: the wood itself in chips and powder, the oil distilled from it, the extracts made by other methods, and the bases and carriers built on sandalwood for attar work. The family is a whole branch of the trade that a buyer working only with agarwood will meet constantly and will sometimes confuse with the other. It is a different plant, it is documented separately, and it behaves differently.',
    directAnswerAr:
      'تغطي مواد الصندل المنتجات المصنوعة من قلب خشب جنس Santalum: الخشب نفسه رقائق ومسحوقاً، والزيت المقطر منه، والمستخلصات المصنعة بطرق أخرى، والقواعد والحاملات المبنية على الصندل لأعمال العطور الشرقية. وهي فرع كامل من التجارة يلتقي به المشتري الذي لا يتعامل إلا مع العود باستمرار، وقد يخلطه بالآخر أحياناً. فهي نبات مختلف، وموثَّق على حدة، وسلوكه مختلف.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers the heartwood sold as chips and as powder, the distilled oil, the solvent and CO₂ extracts sold under their own names, and the sandalwood bases used as carriers in attar production. It also covers the compounds built to imitate sandalwood character, which sit inside the family by function rather than by origin.',
          'The trade uses sandalwood as a carrier and a base rather than only as a scent. That is the fact a buyer from the oud side of the trade most often misses, because it means a large part of this family is used as a supporting material rather than as the thing being bought for its own sake.',
        ],
        bodyAr: [
          'تغطي العائلة قلب الخشب المباع رقائق ومسحوقاً، والزيت المقطر، والمستخلصات بالمذيبات وبثاني أكسيد الكربون المباعة بأسمائها الخاصة، وقواعد الصندل المستعملة كحاملات في صناعة العطور الشرقية. كما تغطّي المركّبات المبنية لتقليد طابع الصندل، وهي داخل العائلة بحسب وظيفتها لا بحسب منشئها.',
          'وتستعمل التجارة الصندل حاملاً وقاعدة لا رائحة فحسب. وهذه هي الوقعة التي يفوتها أكثر المشترين القادمين من جهة العود، لأن ذلك يعني أن جزءاً كبيراً من هذه العائلة يُستعمل مادةً مساندة لا شيئاً يُشترى لذاته.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'Sandalwood is not agarwood. Santalum is a different genus from Aquilaria and Gyrinops, the chemistry is different, the conservation treatment is separate, and the two oils are not substitutes for each other. A buyer comparing a price per tola of sandalwood oil with a price per tola of oud oil is comparing two different materials.',
          'Sandalwood oil is not a perfume oil for skin and not an attar. And a sandalwood accord is not sandalwood at all: it is a manufactured fragrance material, and describing it as sandalwood is the same misrepresentation as describing an oud accord as oud.',
        ],
        bodyAr: [
          'الصندل ليس العود. فجنس Santalum جنس غير Aquilaria وGyrinops، وكيمياؤه مختلفة، ومعاملته الحفظية منفصلة، والزيتان ليسا بديلين لبعضهما. ومن يقارن سعر التولا من زيت الصندل بسعر التولا من دهن العود يقارن مادتين مختلفتين.',
          'وزيت الصندل ليس زيت عطر للبشرة وليس عطراً شرقياً. وأوز الصندل ليس صندلاً أصلاً: فهو مادة عطرية مصنّعة، ووصفه بأنه صندل تحريف من وصف أوز العود بأنه عود.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields are: the species and the plant part used, since heartwood and leaves are different materials and yield different oils; the form, whether wood, oil, extract or base; the extraction method; the carrier the material is presented in, which for an extract is a decision about the whole product; the batch reference and the date; the net quantity and the container; and the intended use, which decides whether the material is a raw material, a fragrance mixture or a finished consumer product.',
          'On the standards, the position depends on which part of the family is in question. A distillation or an extract offered as a raw material sits outside the certificate mechanism, since IFRA certificates are generally not issued for raw materials. A sandalwood compound built for a finished consumer product is a fragrance mixture and is inside it, with conformity established by the formulator or supplier for the stated use and limits expressed in the finished product. The conservation position is separate again and follows the species.',
        ],
        bodyAr: [
          'الحقول هي: النوع وعضو النبات المستعمل، فالقلب والأوراق مادتان مختلفتان وتعطيان زيتين مختلفين؛ والشكل، أهو خشب أم زيت أم مستخلص أم قاعدة؛ وطريقة الاستخلاص؛ والحامل الذي تُقدَّم فيه المادة، وهو بالنسبة للمستخلص قرار يخص المنتج كله؛ ومرجع الدفعة والتاريخ؛ والكمية الصافية والوعاء؛ والاستخدام المقصود، وهو ما يقرر إن كانت المادة مادة خام أم خصلة عطرية أم منتجاً استهلاكياً منتهياً.',
          'وفي المعايير، يتوقف الموقف على أي جزء من العائلة هو المعني. فالتقطير أو المستخلص المعروض كمادة خام يقع خارج آلية الشهادات، لأن شهادات IFRA لا تُصدر عادةً للمواد الخام. أما مركّب الصندل المبني لمنتج استهلاكي منتهٍ فهو خصلة عطرية داخل الآلية، وتُثبَت المطابقة بمُركِّبها أو مورّدها للاستخدام المقصود وتُحدَّد الحدود في المنتج المنتهي. أما الموقف الحفظي منفصل ويعتمد النوع.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'Sandalwood stands against oud, against sandalwood compounds, and against the carrier role it plays in other materials. A buyer who understands that sandalwood is often the base into which oud is placed will ask a supplier about a blend differently from one who thinks of it only as a scent.',
          'And within the family, the wood, the distillation and the extract are three products with three sets of fields, sold from the same plant and often from the same seller without much distinction on the label.',
        ],
        bodyAr: [
          'يقف الصندل مقابل العود، ومقابل مركّبات الصندل، ومقابل الدور الحامل الذي يؤديه في المواد الأخرى. ومن يفهم أن الصندل كثيراً ما يكون القاعدة التي يوضع فيها العود، يسأل المورد عن المزيج بطريقة تختلف عمن ينظر إليه كرائحة فحسب.',
          'وداخل العائلة، الخشب والتقطير والمستخلص ثلاثة منتجات بثلاث مجموعات حقول، تُباع من النبات نفسه ومن البائع نفسه غالباً بلا تمييز كبير في الملصق.',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'Ask the species and the plant part first, because everything else follows from them. Then ask the extraction method, the carrier, the intended use and the batch reference. A composition figure offered without a method is not a composition, it is a number without a basis.',
          'And say what the material is for. Sandalwood bought as a carrier into which something else will be built is bought on the basis of its own stability and compatibility, not on the strength of its scent.',
        ],
        bodyAr: [
          'اسأل عن النوع وعضو النبات أولاً، فكل ما بعدهما يتبعهما. ثم اسأل عن طريقة الاستخلاص، والحامل، والاستخدام المقصود، ومرجع الدفعة. ورقم تركيب يُقدَّم بلا طريقة ليس تركيباً، بل رقم بلا أساس.',
          'وقل ما الذي تُشترى المادة من أجله. فالصندل المشترى حاملاً يُبنى فيه شيء آخر يُشترى على أساس ثباته وتوافقه، لا على قوة رائحته.',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The directory lists raw-material suppliers, distributors and exporters, and a buyer of sandalwood materials usually finds the answer with a raw-material supplier rather than with a wood processor, because the distillation and extraction steps sit between the tree and the buyer. A supplier worth approaching states the species, the plant part and the method.',
        ],
        bodyAr: [
          'يفصل الدليل موردي المواد الخام والموزّعين والمصدّرين، ومشتري مواد الصندل يجد جوابه عند مورد المواد الخام لا عند مشغّل الخشب، لأن خطي التقطير والاستخلاص يقفان بين الشجرة والمشتري. والمورد الذي يقترب منه يذكر النوع وعضو النبات والطريقة.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Botanical identity and genus comparison explains why sandalwood is a different genus and why that decides which rules apply. Distillation and extraction comparisons covers the methods that produce the oil and the extracts. From material to oud oil traces the path a raw material takes to a finished one.',
        ],
        bodyAr: [
          'صفحة الهوية النباتية ومقارنة الأجناس تشرح لماذا الصندل جنس مختلف ولماذا يحدد ذلك اللوائح المنطبقة. وصفحة مقارنات التقطير والاستخلاص تغطّي الطرق التي تنتج الزيت والمستخلصات. وصفحة من المادة إلى دهن العود تتبّع طريق المادة الخام حتى المنتج المنتهي.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
    method: 'partial',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not state a composition, a yield, a price or a market level, and the conservation treatment of individual Santalum species is set out in the botanical identity guide rather than here.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تذكر تركيباً ولا مردوداً ولا سعراً ولا مستوى سوق، والمعاملة الحفظية لأنواع Santalum المفردة مذكورة في صفحة الهوية النباتية لا هنا.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read botanical identity and genus comparison'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة الهوية النباتية ومقارنة الأجناس'],
    related: [
      { slug: 'oud-basics/agarwood-botanical-identity', label: 'Botanical identity and genus comparison' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'production/from-wood-to-oil', label: 'From material to oud oil' },
    ],
  }),

  productFamily({
    slug: 'products/rose-materials',
    title: 'Rose Materials',
    titleAr: 'مواد الورد',
    summary:
      'The rose family — distilled and extracted materials from rose flowers, and the fields behind the names.',
    summaryAr:
      'عائلة الورد: مواد مقطَّرة ومستخلصة من أزهار الورد، والحقول التي يقوم عليها الأسماء.',
    directAnswer:
      'Rose materials cover what is made from rose flowers: the steam-distilled oil, the solvent and CO₂ extracts, the flower water that comes with distillation, the dried petals, and the compounds built to reproduce rose character. The names in this family are old and precise, and a buyer who does not know them will read a word like "absolute" as a stronger version of "oil" rather than as a different product made by a different method.',
    directAnswerAr:
      'تغطي مواد الورد ما يُصنع من أزهار الورد: الزيت المقطر بالبخار، والمستخلصات بالمذيبات وبثاني أكسيد الكربون، وماء الورد الذي ينتج مع التقطير، والبتلات المجففة، والمركّبات المبنية لتقليد طابع الورد. والأسماء في هذه العائلة قديمة ودقيقة، ومن لا يعرفها سيقرأ كلمة «مستخلص» كنسخة أقوى من «زيت» لا كمنتج مختلف صُنع بطريقة مختلفة.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers the steam-distilled rose oil, the absolute made by solvent extraction, the CO₂ extract, the hydrosol or flower water, the dried petals sold for use and for blending, and the rose compounds and bases sold to houses that build on them. Within it, the products come from the same flowers and are separated by the method and by the carrier.',
          'It is a family that behaves differently from the wood families in this section. A rose material is extracted from a delicate material by a costly process, so the yield is low and the price of a kilogram of oil is set by a great deal of plant, which is one reason the field list matters more here than elsewhere.',
        ],
        bodyAr: [
          'تغطّي العائلة زيت الورد المقطر بالبخار، والمستخلص المصنوع بالاستخلاص بالمذيبات، والمستخلص بثاني أكسيد الكربون، والماء العطري أو ماء الورد، والبتلات المجففة المباعة للاستعمال وللخلط، ومركّبات الورد والقواعد المباعة لدور العطور التي تبني عليها. وداخلها تأتي المنتجات من الأزهار نفسها وتُفصل بالطريقة والحامل.',
          'وهي عائلة تتصرف على نحو مختلف عن عائلات الخشب في هذا القسم. فمادة الورد تُستخلص من مادة رقيقة بعملية باهظة، فالمردود قليل وسعر الكيلو من الزيت تحدده كمية كبيرة من النبات، ولهذا لقائمة الحقول هنا أهمية أكبر من غيرها.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'A rose oil and a rose absolute are not the same product at two strengths. One is a distillation and the other an extract made with a solvent, and they differ in the carrier, in the colour and in the way they behave in a formula.',
          'A rose material is not a rose compound, which is a manufactured fragrance material made to reproduce the same impression and which contains no rose flowers. It is not a rose-scented body oil, and it is not the culinary rose water sold for drinking or cooking, which is a food product governed by a different set of rules.',
        ],
        bodyAr: [
          'زيت الورد والمستخلص ليسا منتجاً واحداً درجتين. فأحدهما تقطير والآخر مستخلص بمذيب، ويفترقان في الحامل وفي اللون وفي السلوك في التركيبة.',
          'ومادة الورد ليست مركّب ورد، وهو مادة عطرية مصنّعة تحاكي الانطباع نفسه ولا تحتوي أزهاراً. وليست زيت جسد برائحة الورد، وليست ماء الورد الطعامي المباع للشرب أو الطبخ، وهو منتج غذائي يخضع لنظام قواعد مختلف.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields are: the species and the source of the flowers; the part used, which for a rose is the flower and for a supplier may be fresh or dried; the extraction method; the carrier or solvent used and the residual position of the extract; the batch reference and the date; the net quantity and the container, since an extract can thicken and settle in a way a distilled oil does not; and the intended use.',
          'On the standards, the position follows the same division as elsewhere in this section. A distilled or extracted natural material offered as a raw material sits outside the certificate mechanism, because IFRA certificates are generally not issued for raw materials. A rose compound built for a finished consumer product is a fragrance mixture and is inside it: conformity is established by the formulator or supplier for the stated use, and the limits are expressed in the finished product rather than in the mixture.',
        ],
        bodyAr: [
          'الحقول هي: النوع ومصدر الأزهار؛ والجزء المستعمل، وهو في الورد الزهرة، وقد يكون عند المورد طازجاً أو مجففاً؛ وطريقة الاستخلاص؛ والحامل أو المذيب المستعمل وموقف البقايا في المستخلص؛ ومرجع الدفعة والتاريخ؛ والكمية الصافية والوعاء، لأن المستخلص قد يثقل ويستقر بغير ما يفعل الزيت المقطر؛ والاستخدام المقصود.',
          'وفي المعايير، يتبع الموقف القسمة نفسها في سائر هذا القسم. فال مادة الطبيعية المقطرة أو المستخلصة المعروضة كمادة خام تقع خارج آلية الشهادات، لأن شهادات IFRA لا تُصدر عادةً للمواد الخام. أما مركّب الورد المبني لمنتج استهلاكي منتهٍ فهو خصلة عطرية داخلها: تُثبَت المطابقة بمُركِّبها أو مورّدها للاستخدام المقصود، وتُحدَّد الحدود في المنتج المنتهي لا في الخصة.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'The distillation and the extract are compared by method rather than by price, because a buyer who knows the two are made differently stops comparing them at all. The flower water is compared with the oil it comes from, and the dried petals are compared with the oil as a raw input rather than as a competitor.',
          'And the whole family is compared with the compounds, because a house that wants rose character has two routes: to buy the natural material, which is costly and limited by the harvest, or to buy an accord, which is neither better nor worse but a different thing entirely.',
        ],
        bodyAr: [
          'يُقارن التقطير بالمستخلص بالطريقة لا بالسعر، فمن يعرف أنهما مصنوعان بطريقتين يكف عن مقارنة أسعارهما. ويُقارن ماء الورد بالزيت الذي ينشأ عنه، وتُقارن البتلات المجففة بالزيت بوصفه مادة خام لا منافساً.',
          'وتُقارن العائلة كلها بالمركّبات، لأن الدار التي تريد طابع الورد أمامها طريقان: أن تشتري المادة الطبيعية، وهي باهظة ومحدودة بالحِصاد، أو تشتري أوزاً، وهو ليس أفضل ولا أسوأ بل شيء مختلف تماماً.',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'Ask the extraction method before anything else, because it decides the form, the carrier and the price. Then ask the batch and the date, since a natural extract changes as it settles and ages, and ask how it has been stored.',
          'Ask what the material is for, and whether it is to be used as a scent or as a base. A rose material bought as a base is judged on how it holds other materials and how stable it is, not on how it smells on its own.',
        ],
        bodyAr: [
          'اسأل عن طريقة الاستخلاص قبل أي شيء، لأنها تقرر الشكل والحامل والسعر. ثم اسأل عن الدفعة والتاريخ، لأن المستخلص الطبيعي يتغير مع الاستقرار والتعتيق، واسأل كيف حُفظ.',
          'اسأل عن غرض المادة، وهل تُستعمل رائحة أم قاعدة. فمادة الورد المشتراة قاعدة تُحكم على قدرتها على حمل مواد أخرى واستقرارها، لا على رائحتها وحدها.',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The directory lists raw-material suppliers and distributors, and a rose material usually reaches the buyer through a raw-material supplier rather than through a distiller, because the extraction and the conditioning happen upstream of the trade this directory covers. A supplier worth approaching will state the method and the source of the flowers.',
        ],
        bodyAr: [
          'يفصل الدليل موردي المواد الخام والموزّعين، ومادة الورد تصل إلى المشتري عادةً عبر مورد مواد خام لا عبر مقطّر، لأن الاستخلاص والتهيئة يجريان قبل التجارة التي يغطيها هذا الدليل. والمورد الذي يقترب منه يذكر الطريقة ومصدر الأزهار.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Fragrance notes versus ingredients explains why a rose note on a label does not tell a buyer whether the product contains rose flowers. Reading intended-use instructions covers the conditions attached to a material in use. Label and organize samples covers keeping a natural extract comparable over time.',
        ],
        bodyAr: [
          'صفحة النوتات مقابل المكونات تشرح لماذا لا تخبر نوتة الورد على الملصق المشتري إن كان المنتج يحتوي أزهار ورد. وصفحة قراءة تعليمات الاستخدام المقصود تغطّي الشروط الملحقة بمادة في الاستعمال. وصفحة تسمية العينات وتنظيمها تغطّي إبقاء المستخلص الطبيعي قابلاً للمقارنة مع الزمن.',
        ],
      },
    ],
    sourceIds: ['IFRA_STANDARDS', 'IFRA_APPLYING', 'IFRA_LIBRARY', 'AGARWOOD_REVIEW_2014', 'CITES_AGARWOOD_2004'],
    method: 'partial',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not state a composition, a yield, a price or a market level, and it does not establish the conservation status of any plant.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تذكر تركيباً ولا مردوداً ولا سعراً ولا مستوى سوق، ولا تثبت حالة الحفظ لأي نبات.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read fragrance notes versus ingredients'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة النوتات مقابل المكونات'],
    related: [
      { slug: 'fragrance/notes-versus-ingredients', label: 'Fragrance notes versus ingredients' },
      { slug: 'using-oud/reading-product-instructions', label: 'Reading intended-use instructions' },
      { slug: 'using-oud/label-and-store-samples', label: 'Label and organize samples' },
    ],
  }),

  productFamily({
    slug: 'products/private-label-perfumes',
    title: 'Private Label Perfumes',
    titleAr: 'العطور بعلامة خاصة',
    summary:
      'Fragrance manufactured for another brand, and the fields that define the arrangement rather than the scent.',
    summaryAr:
      'عطر يُصنَّع لعلامة أخرى، والحقول التي تعرّف الاتفاقية لا الرائحة.',
    directAnswer:
      'Private label perfumes are fragrances manufactured to another company\'s specification and sold under that company\'s name. The family is defined by the arrangement rather than by the product: the brand owns the specification and the market position, and a manufacturer compounds, fills and documents it. The fields therefore cover the formula, the ownership of the rights, the sample approval, the minimum quantity, the packaging and the documentation — and none of them can be read off the bottle.',
    directAnswerAr:
      'العطور بعلامة خاصة عطور تُصنَّع وفق مواصفة شركة أخرى وتُباع باسم تلك الشركة. والعائلة تُعرَّف بالاتفاقية لا بالمنتج: فالعلامة تملك المواصفة والموقع السوقي، والمصنّع يركّب ويملأ ويوثّق. فالحقول تغطّي التركيبة، وملكية الحقوق، واعتماد العيّنة، والحد الأدنى للكمية، والتغليف، والوثائق — ولا يقرأ أيٌّ منها من القارورة.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers the contract manufacturing of a fragrance for a brand that does not compound it, in every format the finished product takes: the spray, the dab bottle, the concentrated oil sold under the brand, the home product line, and the gift presentation built around them.',
          'It also covers the variants that are not really private label: the manufacturer that offers its own branded lines alongside the contract work, the buyer that rebrands stock, and the arrangement where a brand buys an existing composition and changes only the bottle and the carton.',
        ],
        bodyAr: [
          'تغطي العائلة التصنيع التعاقدي لعطر لعلامة لا تركّبه، في كل الأشكال التي يأخذها المنتج المنتهي: الرش، وقارورة اللطم، والزيت المركّز المباع تحت العلامة، وخط المنتجات المنزلية، وعلب الهدايا المبنية حولها.',
          'كما تغطي الحالات التي ليست علامة خاصة حقاً: المصنّع الذي يقدّر خطوطاً بعلامته الخاصة إلى جانب عمله التعاقدي، والمشتري الذي يعيد وضع العلامة على مخزون جاهز، والاتفاق الذي تشتري فيه علامة تركيباً قائماً وتغيّر فيه القارورة والعلبة وحدهما.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'Private label is not a special kind of fragrance. It is a supply arrangement, and the same arrangement can produce a simple composition or a complex one.',
          'It is not an oud product. A private-label "oud perfume" may be built entirely on an accord, and the brand has no obligation to be different from anyone else in the market. It is also not rebadging: buying stock and putting a new label on it is not private label, and the difference matters because the documentation travels with the product.',
        ],
        bodyAr: [
          'العطر بعلامة خاصة ليس نوعاً خاصاً من العطور. إنه ترتيب توريد، والترتيب نفسه قد ينتج تركيبة بسيطة أو معقدة.',
          'وليس منتج عود. فـ«عطر عود» بعلامة خاصة قد يُبنى كلياً على أوز، وليس على العلامة أي التزام بأن تختلف عن غيرها في السوق. وليس إعادة وضع علامة: شراء مخزون جاهز ووضع ملصق جديد عليه ليس علامة خاصة، والفرق مهم لأن الوثائق تسير مع المنتج.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields are: the brand and who owns the formula; the fragrance brief and the character notes it is built to; the perfumer or the house that composed it and whether that is credited; the sample approval process and how many rounds it takes; the minimum order quantity and the tiers; the concentration and the base; the bottle, the cap, the packaging and the print; the batch reference and the production date; the conformity position of the fragrance mixture for the market; and the terms on the formula, on the minimums and on the exclusivity.',
          'The standards fall to the people in the arrangement rather than to the brand. IFRA states that conformity for a fragrance mixture\'s intended use is established by the fragrance-mixture formulator or supplier, that a Certificate of Conformity applies exclusively to fragrance mixtures intended for incorporation into finished consumer products, and that the final decision and responsibility for the finished product lies with the consumer product manufacturer. The manufacturer therefore holds the mixture documentation, and the brand should ask to see it.',
        ],
        bodyAr: [
          'الحقول هي: العلامة ومن يملك التركيبة؛ وموجز العطر ونوتات الطابع التي يُبنى عليها؛ والعطار أو الدار التي ركّبته وهل يُنسب إليها العمل علناً؛ وعملية اعتماد العيّنة وكم جولة تحتاج؛ والحد الأدنى للطلب ودرجاته؛ والتركيز والقاعدة؛ والقارورة والغطاء والتغليف والطباعة؛ ومرجع الدفعة وتاريخ الإنتاج؛ وموقف مطابقة الخصلة العطرية بالنسبة للسوق؛ وشروط التركيبة والحدود الأدنى والحصرية.',
          'وتقع المعايير على أصحاب الاتفاق لا على العلامة. فتذكر IFRA أن مطابقة الخصلة العطرية لاستخدامها المقصود يثبتها مُركِّب الخصلة أو مورّدها، وأن شهادة المطابقة تنطبق حصراً على الخصلات المزمع إدخالها في منتجات استهلاكية منتهية، وأن القرار النهائي والمسؤولية عن المنتج المنتهي تقعان على الشركة المصنّعة للمنتج الاستهلاكي. فالمصنّع هو الذي يحمل وثائق الخصلة، والعلامة ينبغي أن تطلب الاطلاع عليها.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'A private-label arrangement is compared with buying a finished product in bulk and relabelling it, and the comparison is about documentation rather than about price. One route produces a batch record and a conformity position; the other produces a bottle with a label on it.',
          'It is also compared with working with a house that owns its own compositions and makes to order for a client. The second is more expensive and gives the client something no label can: a formula that belongs to them and a perfumer they can name.',
        ],
        bodyAr: [
          'يُقارن ترتيب العلامة الخاصة بشراء منتج منتهٍ بالجملة وإعادة وضع العلامة عليه، والمقارنة في التوثيق لا في السعر. فأحد الطريقين ينتج سجل دفعة وموقف مطابقة، والآخر ينتج قارورة عليها ملصق.',
          'ويُقارن أيضاً بالعمل مع دار تملك تركيباتها وتعمل للطلب. فالثاني أغلى، وهو يعطي العميل ما لا يعطيه أي ملصق: تركيبة تخصّه وعطاراً يستطيع تسميةَه.',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'Ask for the minimum order quantity and the tiers before asking about the price, because the tier structure is what makes the arrangement work at all and it is the thing most often left unstated. Then ask about the sample process, the ownership of the formula, the exclusivity, and the documentation the manufacturer holds.',
          'And check the name question: whether the perfumer is credited, and whether that credit can be used in the brand\'s own marketing. It is a small field, but it is the one a brand cares about most and the one most often settled late.',
        ],
        bodyAr: [
          'اسأل عن الحد الأدنى للطلب ودرجاته قبل أن تسأل عن السعر، لأن بنية الدرجات هي ما يجعل الاتفاق يعمل أصلاً، وهي التي تُترك غير مذكورة أكثر من غيرها. ثم اسأل عن مسار العينات، وعن ملكية التركيبة، وعن الحصرية، وعن الوثائق التي يحملها المصنّع.',
          'وتحقق من مسألة الاسم: هل يُنسب العمل إلى العطار، وهل يمكن أن يستعمل العلامة ذلك الإسناد في تسويقها؟ فالحقل صغير، لكنه ما تهتم به العلامة أكثر من غيره، وهو ما يُحسم متأخراً في الغالب.',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The directory separates perfume manufacturers from private-label manufacturers and from perfume brands, and the separation is the point: a private-label manufacturer is set up to make a product to somebody else\'s specification, and that is a different business from making its own range. A buyer should ask who compounds the formula and who fills the bottle, since these are often two different firms.',
        ],
        bodyAr: [
          'يفصل الدليل مصنّعي العطور عن مصنّعي العطور بعلامة خاصة وعن علامات العطور، وفي الفصل هو المقصود: فصانع العطور بعلامة خاصة معدّ لصنع منتج وفق مواصفة غيره، وهذا عمل مختلف عن صنع خط خاص به. وعلى المشتري أن يسأل من يركّب التركيبة ومن يملأ القارورة، فغالباً ما يكونان مختلفين.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Brand identity versus manufacturing origin covers the distinction this family turns on. How perfumer credits are documented explains what a credit on a private-label product does and does not tell a buyer. Understanding supplier minimum quantities covers the tier structure in more detail.',
        ],
        bodyAr: [
          'صفحة هوية العلامة مقابل منشأ التصنيع تغطي التمييز الذي تدور عليه هذه العائلة. وصفحة كيف توثَّق أسماء العطارين تشرح ما يخبر به الإسناد على منتج بعلامة خاصة وما لا يخبر. وصفحة فهم حد أدنى الطلبات لدى الموردين تغطي بنية الدرجات بتفصيل أكبر.',
        ],
      },
    ],
    sourceIds: ['IFRA_STANDARDS', 'IFRA_APPLYING', 'IFRA_CERT'],
    method: 'ifra',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not state a price, a minimum order quantity, a formula or a concentration, and it does not establish that any manufacturer holds a certificate.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تذكر سعراً ولا حداً أدنى للطلب ولا تركيبة ولا تركيزاً، ولا تثبت أن أي مصنّع يحمل شهادة.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read brand identity versus manufacturing origin'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة هوية العلامة مقابل منشأ التصنيع'],
    related: [
      { slug: 'fragrance/brand-and-manufacturing-origin', label: 'Brand identity versus manufacturing origin' },
      { slug: 'fragrance/perfumers-and-credits', label: 'How perfumer credits are documented' },
      { slug: 'sourcing/minimum-order-quantities', label: 'Understanding supplier minimum quantities' },
    ],
  }),

  productFamily({
    slug: 'products/sample-sets',
    title: 'Sample Sets',
    titleAr: 'مجموعات العينات',
    summary:
      'Supplied quantities of material for evaluation, and the fields that separate a sample from a small order.',
    summaryAr:
      'كميات موردة من المادة للتقييم، والحقول التي تفرّق بين العيّنة والطلب الصغير.',
    directAnswer:
      'Sample sets are quantities of material supplied for evaluation rather than for use: a set of small containers of wood, oil, base or finished product, sent so that a buyer can assess them. The family is defined by its purpose, and that is exactly why a sample set is not a small order of the same material. A sample exists to support a decision, and its size, its cost and its labelling are all consequences of that, whereas a small order exists to be used.',
    directAnswerAr:
      'مجموعات العينات كميات من المادة موردة للتقييم لا للاستعمال: طقم من العبوات الصغيرة من خشب أو زيت أو قاعدة أو منتج منتهٍ، يُرسل ليقيّمه المشتري. والعائلة تُعرَّف بغرضها، ولهذا تحديداً ليست مجموعة العينات طلباً صغيراً للمادة نفسها. فالعيّنة موجودة لدعم قرار، وحجمها وكلفتها وتسميتها كل ذلك نتائج لذلك، أما الطلب الصغير موجود ليُستعمل.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers the supplier sample kit sent to a prospective buyer, the sample of a specific lot, the mixed set offered as a general introduction, the application set sent to a formulator, and the small decants supplied for evaluation at trade events. It also covers the arrangement where samples are supplied free against a commitment, and the arrangement where they are paid for and deducted from the first order.',
          'The material inside a sample can be anything in this encyclopedia: wood chips, an oil, an accord, a base, a finished perfume. What makes the set a sample is the purpose and the labelling, not the contents.',
        ],
        bodyAr: [
          'تغطي العائلة طقم العيّنات الذي يرسله المورد إلى مشترٍ محتمل، وعيّنة لوط بعينه، والطقم المختلط المقدَّم تعريفاً عاماً، وطقم التطبيق المرسل إلى صاحب صياغة، والعيّنات الصغيرة المقدَّمة للتقييم في المعارض. كما تغطّي ترتيب تقديم العينات مجاناً مقابل التزام، والترتيب الذي تُدفع ثمنه وتُخصم من الطلب الأول.',
          'والمادة داخل العيّنة قد تكون أي شيء في هذه الموسوعة: رقائق خشب، أو زيتاً، أو أوزاً، أو قاعدة، أو عطراً منتهياً. وما يجعل المجموعة عيّنة هو الغرض والتسمية لا المحتوى.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'A sample set is not a small order. A small order is bought to be used, priced at the trade price and delivered as part of the supply. A sample is bought to be assessed, and its price is a different kind of price.',
          'It is not a gift set, which is a presentation format for a buyer who has already decided. It is not a scent card, which carries no material at all. And it is not a proof of quality, because the material in a sample and the material in a bulk delivery are not necessarily the same thing.',
        ],
        bodyAr: [
          'مجموعة العينات ليست طلباً صغيراً. فالطلب الصغير يُشترى ليُستعمل، ويُسعَّر بسعر التجارة، ويصل ضمن التوريد. والعيّنة تُشترى لتُقيَّم، وسعرها نوع آخر من السعر.',
          'وليس طقم هدية، وهو شكل عرض لمشترٍ حسم أمره. وليس بطاقة عطر، وهي لا تحمل مادة أصلاً. وليست دليلاً على الجودة، لأن المادة في العيّنة والمادة في التسليم بالجملة ليسا بالضرورة الشيء نفسه.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields are: what each sample is, described precisely enough to be re-ordered later; the quantity in each container and the container itself; the label, which must carry an identifier, the supplier\'s marking, the description, the date and the batch reference if there is one; the basis on which the sample price is set; the shipping arrangement and who bears it; the terms, including whether the sample cost is credited against an order and within what period; and whether the material may be used or only assessed.',
          'On the standards, the position depends on what is in the container. A sample of a raw material is a raw material, and IFRA certificates are generally not issued for raw materials. A sample of a finished consumer product is a finished consumer product, and the mixture documentation that covers the bulk should cover it.',
        ],
        bodyAr: [
          'الحقول هي: ما هي كل عيّنة، موصوفة بدقّة تكفي لإعادة الطلب لاحقاً؛ والكمية في كل عبوة والعبوة نفسها؛ والملصق، وهو يحمل معرّفاً وتعليم المورد والوصف والتاريخ ومرجع الدفعة إن وُجد؛ والأساس الذي يُحدَّد عليه سعر العيّنة؛ وترتيب الشحن ومن يتحمله؛ والشروط، ومنها إن كان ثمن العيّنة يُخصم من طلب ومتى؛ وهل يجوز استعمال المادة أم تقييمها فقط.',
          'وفي المعايير، يتوقف الموقف على ما في العبوة. فعيّنة المادة الخام مادة خام، وشهادات IFRA لا تُصدر عادةً للمواد الخام. وعيّنة المنتج الاستهلاكي المنتهي منتج استهلاكي منتهٍ، ووثائق الخصلة التي تغطي التسليم بالجملة تغطّيها هي.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'A sample and a small order are compared by purpose, and that comparison settles the price, the labelling and the freight. A sample set and a gift set are compared by who they are for: one is for a buyer who has not decided, the other for a buyer who has.',
          'And a sample is compared with the bulk delivery it is supposed to represent. This is the comparison that catches buyers out, because a sample drawn from a favourable part of a lot, or an oil decanted at a moment when it was at its best, will flatter the batch.',
        ],
        bodyAr: [
          'تُقارن العيّنة بالطلب الصغير بحسب الغرض، وتلك المقارنة تحسم السعر والتسمية والشحنة. وتُقارن مجموعة العينات بطقم الهدية بحسب مخاطَبها: أحدهما لمشترٍ لم يحسم، والآخر لمشترٍ حسم.',
          'وتُقارن العيّنة بتسليم الجملة الذي يفترض أنها تمثله. وهذه هي المقارنة التيوقع فيها المشترون، لأن عيّنة مسحوبة من الجزء الجيد من لوط، أو زيت قسِّم في لحظة كان فيها في أفضل حاله، ستُضخّم من شأن الدفعة.',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'Ask what each container is and how much is in it, and keep the labels, because a set that cannot be re-identified in three months cannot be used to order.',
          'Then settle the terms before the samples are sent: the price, whether it is credited, how long it is held, and what happens if the material is not approved. And ask for the sample to be drawn from the lot that will be supplied, not from a house sample, because that is the only version of the sample that answers the question the buyer is asking.',
        ],
        bodyAr: [
          'اسأل ما هي كل عبوة وكم فيها، واحتفظ بالملصقات، فطقم لا يمكن تمييزه بعد ثلاثة أشهر لا يصلح للطلب.',
          'ثم حسم الشروط قبل أن تُرسل العينات: السعر، وهل يُخصم، ولأي مدة يبقى سارياً، وماذا يحدث إن لم تُقبل المادة. واطلب أن تُسحب العيّنة من اللوط الذي سيُورَّد لا من عيّنة بيت، فتلك هي النسخة الوحيدة من العيّنة التي تجيب عن السؤال الذي يسأله المشتري.',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The directory lists the suppliers of every material family in this section, and any of them may run a sample programme. What a buyer should look for is a supplier whose samples are labelled, drawn from a named batch and sent with a quotation that refers to the same batch reference.',
        ],
        bodyAr: [
          'يفصل الدليل موردي كل عائلات المواد في هذا القسم، وأي منهم قد يدير برنامج عينات. وما ينبغي للمشتري أن يبحث عنه مورد عيناته مُسمّاة، ومسحوبة من دفعة مذكورة، ومرسلة مع عرض سعر يشير إلى المرجع نفسه.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Build a wholesale oud sample plan sets out how to sample systematically rather than reactively. Match samples to bulk batches covers the traceability link that makes a sample meaningful. Label and organize samples covers the labelling that makes a set usable a year later.',
        ],
        bodyAr: [
          'صفحة بناء خطة عيّنات للشراء بالجملة تضع كيف تُعاين منظماً لا ارتجالاً. وصفحة مطابقة العينات بدفعات الجملة تغطي رابط التتبع الذي يجعل العيّنة ذات معنى. وصفحة تسمية العينات وتنظيمها تغطّي التسمية التي تجعل الطقم صالحاً بعد سنة.',
        ],
      },
    ],
    sourceIds: ['IFRA_APPLYING', 'IFRA_STANDARDS', 'AGARWOOD_CITES_2022', 'CITES_APPENDICES', 'TRAFFIC_AGARWOOD_TRADE_2000'],
    method: 'partial',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not state a sample price, a sample size or a shipping cost, and it does not establish that any sample corresponds to any bulk batch.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تذكر سعر عيّنة ولا حجمها ولا تكلفة شحنها، ولا تثبت مطابقة أي عيّنة لأي دفعة جملة.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read build a wholesale oud sample plan'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة بناء خطة عيّنات للشراء بالجملة'],
    related: [
      { slug: 'sourcing/wholesale-sample-plan', label: 'Build a wholesale oud sample plan' },
      { slug: 'sourcing/sample-to-bulk-matching', label: 'Match samples to bulk batches' },
      { slug: 'using-oud/label-and-store-samples', label: 'Label and organize samples' },
    ],
  }),

  productFamily({
    slug: 'products/gift-sets',
    title: 'Gift Sets',
    titleAr: 'أطقم الهدايا',
    summary:
      'Presentation formats that bundle products for giving, and the fields that describe what is actually inside.',
    summaryAr:
      'أشكال عرض تجمع منتجات للإهداء، والحقول التي تصف ما بداخلها فعلاً.',
    directAnswer:
      'Gift sets are presentation formats: a box, a case or a bag holding one or more products, arranged to be given rather than used. The word describes packaging, not a material class, and everything that matters for a purchase sits inside it — which is the trap. A gift set named after a material does not tell the buyer what that material is, how much of it there is, or whether the set is a combination of formats that a buyer would not have chosen separately.',
    directAnswerAr:
      'أطقم الهدايا أشكال عرض: صندوق أو علبة أو كيس يحمل منتجاً أو أكثر، مرتّب للإهداء لا للاستعمال. والكلمة تصف التغليف لا فئة من المواد، وكل ما يهم في الشراء موجود في داخله — وفي هذا الفخ. فطقم الهدايا المسمّى باسم مادة لا يخبر المشتري ما هي تلك المادة، ولا مقدارها، ولا كان الطقم يجمع أشكالاً ما كان المشتري لاختارها منفصلة.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers the single-bottle presentation box, the multi-product discovery set, the travel case, the festive and seasonal arrangement, the presentation tin or wooden box, and the sampler with a small vial of oil or a short length of incense. It also covers the boxed set that a retailer assembles from products bought separately, which is the same format with a different supply chain.',
          'Within it, the arrangement is what varies: the same oil can be given in a vial, a decanted bottle or a scented material in a dish, and the three are the same fragrance presented three ways with three different prices.',
        ],
        bodyAr: [
          'تغطي العائلة علبة عرض بقارورة واحدة، وطقم استكشاف متعدد المنتجات، وعلبة سفر، والتنسيق الموسمي والعيدي، والعلبة المعدنية أو الخشبية، والطقم الذي يضم قارورة صغيرة من زيت أو قطعة قصيرة من بخور. كما تغطّي الطقم الصندوقي الذي يجمعه متجر من منتجات اشتراها منفردة، وهو الشكل نفسه بسلسلة إمداد مختلفة.',
          'وداخلها، المتغير هو التنظيم: ف الزيت نفسه يُهدى في قارورة صغيرة، أو في قارورة مفرّغة، أو في طبق من مادة معطرة، وهي الرائحة نفسها معروضة بثلاث طرق وبثلاثة أسعار.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'A gift set is not a material class and not a grade. A set presented as an oud set is not thereby an oud product, and a set presented with a grade name on the carton carries no more quality claim than the same name on a bottle would.',
          'It is not a sample set: one is for a buyer who has already decided and the other for one who has not. And it is not a kit, where the parts are meant to be used together in a sequence, because in a gift set the parts are chosen to sit together on a shelf.',
        ],
        bodyAr: [
          'طقم الهدايا ليس فئة من المواد ولا درجة. وطقم عُرض على أنه طقم عود ليس منتج عود، وطقم ورد على غلافه اسم درجة لا يحمل ادعاء جودة أكثر مما يحمله الاسم نفسه على قارورة.',
          'وليس مجموعة عينات: أحدهما لمشترٍ حسم والآخر لمشترٍ لم يحسم. وليست طقم استعمال يقرّر أن تُستعمل أجزاؤه معاً في تسلسل، ففي طقم الهدايا تُختار الأجزاء لتجلس معاً على الرف.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields are: the contents, itemised, with the size or quantity of each; the identity and form of each item, so that a vial of oil is not mistaken for a decanted perfume; the presentation material and its finish; the assembly and whether the set is supplied filled or as an empty pack for the buyer to fill; the batch references of the contents and of the pack; the country of manufacture for each element; and, where alcohol is present, the transport and labelling treatment of the set as a whole.',
          'On the standards, the interesting question is where the set sits. IFRA states that a Certificate of Conformity applies exclusively to fragrance mixtures intended for incorporation into finished consumer products and that certificates are generally not issued for raw materials, and that the applicable category is determined from the intended use. A gift set containing a finished consumer product is inside that regime; an empty presentation box is outside it entirely, and carries no fragrance documentation of its own.',
        ],
        bodyAr: [
          'الحقول هي: المحتويات مفصّلة، مع حجم كل عنصر أو كميته؛ وهوية كل عنصر وشكله، حتى لا يُخلط قارورة زيت صغيرة بزيت منتهٍ مفرّغ؛ ومادة العرض وشطيبها؛ والتجميع، وهل يقدَّم الطقم ممتلئاً أم علبة فارغة يملؤها المشتري؛ ومراجع الدفعات للمحتويات وللعلبة؛ وبلد التصنيع لكل عنصر؛ وحين يكون الكحول موجوداً، معاملة النقل والوسم للطقم كله.',
          'وفي المعايير، السؤال اللافت هو أين يقع الطقم. فتذكر IFRA أن شهادة المطابقة تنطبق حصراً على الخصلات العطرية المزمع إدخالها في منتجات استهلاكية منتهية، وأن الشهادات لا تُصدر عادةً للمواد الخام، وأن الفئة المنطبقة تُحدَّد من الاستخدام المقصود. فالطقم الذي يحوي منتجاً استهلاكياً منتهياً داخل ذلك النظام، أما علبة العرض الفارغة فخارجه تماماً ولا تحمل وثائق عطرية خاصة بها.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'A gift set is compared with buying the same items separately, and the difference is the packaging, the arrangement and the presentation rather than the contents. It is compared with a sample set, which serves the opposite purpose, and with a kit, whose parts work together.',
          'And within the family, the same fragrance in three presentations is compared by what the recipient will actually do with it, because a gift is judged by the person receiving it and not by the person who bought it.',
        ],
        bodyAr: [
          'يُقارن طقم الهدايا بشراء العناصر نفسها منفردة، والفرق في التغليف والترتيب والعرض لا في المحتويات. ويُقارن بمجموعة العينات التي تخدم الغرض المضاد، ويُقارن بالطقم-الاستعمال الذي تعمل أجزاؤه معاً.',
          'وداخل العائلة، الرائحة نفسها في ثلاثة عروض تُقارن بما سيفعله المستلم فعلاً، فحكم الهدية يصدر على من يتلقاها لا على من اشتراها.',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'Ask for the contents itemised with the quantity of each, because the itemisation is the only place the quantity of anything appears. Ask whether the set is sold filled or empty, because a buyer assembling their own set is buying a pack and a buyer buying a filled set is buying the contents.',
          'Then check the transport position of the whole set, since a set that contains an alcohol-based product can be treated differently from the same product sold alone. And if the set is a gift, ask what will happen if the recipient dislikes it, which is a returns question a buyer should settle before the season rather than after it.',
        ],
        bodyAr: [
          'اطلب تفصيل المحتويات مع كمية كل عنصر، لأن التفصيل هو المكان الوحيد الذي تظهر فيه كمية أي شيء. واسأل إن كان الطقم يُباع ممتلئاً أم فارغاً، فمن يجمّع طقمه يشتري علبة ومن يشتري طقماً ممتلئاً يشتري المحتويات.',
          'ثم تحقّق من وضع النقل للطقم كله، فطقم يحوي منتجاً كحولياً قد يُعامَل على نحو مختلف عن المنتج نفسه منفرداً. وإن كان الطقم هدية، فاسأل ماذا يحدث إن لم يعجب المستلم، وهذا سؤال مرتجعات ينبغي حسمه قبل الموسم لا بعده.',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The directory lists packaging suppliers and bottle suppliers alongside the material suppliers, and a gift set usually combines all three: a pack from a packaging supplier, contents from a material or fragrance supplier, and assembly somewhere else. A buyer who wants a set that can be reordered needs to know who assembles it and who is responsible for the contents.',
        ],
        bodyAr: [
          'يفصل الدليل موردي التغليف وموردي القوارير إلى جانب موردي المواد، وطقم الهدايا يجمع عادةً الثلاثة: علبة من مورد تغليف، ومحتويات من مورد مواد أو عطور، وتجميع في مكان آخر. ومن يريد طقماً يمكن إعادة طلبه يحتاج أن يعرف من يجمّعه ومن يتحمل مسؤولية المحتويات.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Compare mass, volume and pack counts covers the arithmetic behind a bundled set. Understanding perfume concentration labels covers the labelling convention used inside the pack. Why wood, oil and perfume need separate shipping checks covers how a mixed set is treated on the move.',
        ],
        bodyAr: [
          'صفحة مقارنة الكتلة والحجم وعدد العبوات تغطّي الحساب وراء الطقم المجمَّع. وصفحة ملصقات تركيز العطر تغطّي العرف التسميقي داخل العلبة. وصفحة لماذا يحتاج الخشب والزيت والعطر فحوص شحن منفصلة تغطي معاملة الطقم المختلط أثناء النقل.',
        ],
      },
    ],
    sourceIds: ['IFRA_STANDARDS', 'IFRA_APPLYING', 'AGARWOOD_CITES_2022', 'CITES_APPENDICES'],
    method: 'partial',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not state a price, a quantity of any content, a packaging specification or a market level, and it does not assess any set.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تذكر سعراً ولا كمية أي محتوى ولا مواصفة تغليف ولا مستوى سوق، ولا تقيّم أي طقم.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read compare mass, volume and pack counts'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة مقارنة الكتلة والحجم وعدد العبوات'],
    related: [
      { slug: 'buying/net-weight-and-volume', label: 'Compare mass, volume and pack counts' },
      { slug: 'fragrance/concentration-labels', label: 'Understanding perfume concentration labels' },
      { slug: 'trade/shipping-wood-oil-perfume', label: 'Why wood, oil and perfume need separate shipping checks' },
    ],
  }),

  productFamily({
    slug: 'products/perfume-packaging',
    title: 'Perfume Packaging',
    titleAr: 'تغليف العطور',
    summary:
      'Bottles, closures, pumps and packs for fragrance, and the fields that describe a container rather than a scent.',
    summaryAr:
      'قوارير وأغطية وبخاخات وعلب للعطور، والحقول التي تصف وعاءً لا رائحة.',
    directAnswer:
      'Perfume packaging is the container family: glass and plastic bottles, caps and closures, pumps and atomisers, droppers, cartons, inserts and the secondary packaging. It is a manufacturing family rather than a fragrance one, and the fields are mechanical and dimensional — the glass type and wall thickness, the closure thread and its tolerance, the pump output and whether it is compatible with the formula, the capacity and the tolerance on it, the decoration, and the drop test and transit standard the pack is built to.',
    directAnswerAr:
      'تغليف العطور هو عائلة الأوعية: قوارير زجاجية وبلاستيكية، وأغطية وإغلاقات، وبخاخات ورذّاذات، وقطرات، وعلب، وحشوات، وتغليف ثانوي. وهو عائلة تصنيع لا عطرية، والحقول ميكانيكية وأبعاد — نوع الزجاج وسماكته، وخيط الإغلاق وتباينه، ومخرَج البخاخة وهل هي متوافقة مع التركيبة، والسعة والتباين فيها، والتزيين، واختبار السقوط ومعيار النقل الذي بُنيت له العلبة.',
    sections: [
      {
        ...HEADINGS.includes,
        body: [
          'The family covers the flaconnage: the bottle, the cap and the closure, the pump or atomiser, the collar, the dropper for the oil formats, the carton, and the secondary packaging such as the rigid box and the shipper. It covers the decorative finishes and the custom moulds for a brand.',
          'It is a family with two customers. One buys bottles to fill with a formulation of their own; the other buys a complete pack that arrives filled and closed. The fields differ because the risks differ: the first is exposed to compatibility and tolerance, the second to transit and to what the filled pack does to the shelf.',
        ],
        bodyAr: [
          'تغطي العائلة العبوة: القارورة، والغطاء والإغلاق، والبخاخة أو الرذاذة، والطوق، والقطرة لأشكال الزيوت، والعلبة، والتغليف الثانوي كالعلبة الصلبة والصندوق. وتغطي التشطيبات والقوالب الخاصة بعلامة.',
          'وهي عائلة لها زبونان. أحدهما يشتري القوارير ليملأها بتركيبته، والآخر يشتري عبوة مكتملة تصل ممتلئة ومغلقة. والحقول تختلف لاختلاف المخاطر: الأول معرّض للتوافق والتباين، والثاني للنقل ولما تفعله العبوة الممتلئة بالرف.',
        ],
      },
      {
        ...HEADINGS.notTheSame,
        body: [
          'Packaging is not the fragrance and not the finished product. A bottle with a beautiful closure can hold anything, and a good closure says nothing about what is in it.',
          'It is not a mould, which is the tool the bottle is made from rather than the thing that is made. And a pump is not a sprayer: the pump delivers a fixed dose and the sprayer produces a mist, and the two are not interchangeable in a formula that behaves differently under each.',
        ],
        bodyAr: [
          'التغليف ليس العطر ولا المنتج المنتهي. فقارورة بإغلاق جميلة قد تحوي أي شيء، والإغلاق الجيد لا يقول شيئاً عمّا في داخلها.',
          'وليس قالباً، فالقالب الأداة التي تُصنع منها القارورة لا الشيء المصنوع. والبخاخة ليست رذاذة: فالبخاخة تعطي جرعة ثابتة والرذاذة تنتج رذاذاً، وليستا قابلتين للتبادل في تركيبة تتصرف على نحو مختلف مع كل منهما.',
        ],
      },
      {
        ...HEADINGS.fields,
        body: [
          'The fields are: the material and, for glass, the glass type and the wall thickness; the capacity and the tolerance on it; the closure and the thread standard and the torque needed to seal it; the pump output, the spray pattern and whether the elastomer is compatible with the formula; the collar and crimp dimensions; the decoration and the finish, and the alcohol and scratch resistance of any coating; the carton and the internal fitting; the drop and transit standard; and the country of manufacture.',
          'No fragrance-mixture standard governs this family, because a container holds no fragrance mixture. What applies to the finished pack is the conformity of the mixture inside it, which the formulator holds, and the transport classification of the filled product, which depends on the formulation and the quantity rather than on the glass. A buyer should keep the two apart: a compliant bottle is not a compliant product.',
        ],
        bodyAr: [
          'الحقول هي: المادة، وللزجاج نوعه وسماكته؛ والسعة والتباين فيها؛ والإغلاق ومعيار الخيط وعزم الإحكام اللازم؛ ومخرَج البخاخة ونمط الرذاذ وهل المطاط متوافق مع التركيبة؛ وأبعاد الطوق والتثبيت؛ والتزيين والتشطيب، ومقاومة الطلاء للكحول وللخدش؛ والعلبة وتجهيزها الداخلي؛ ومعيار السقوط والنقل؛ وبلد التصنيع.',
          'ولا يحكم هذه العائلة أي معيار للخلاصات العطرية، لأن الوعاء لا يحمل خصلة عطرية. فما ينطبق على العبوة المنتهية هو مطابقة الخصلة في داخلها، وهي يحملها مُركِّبها، وتصنيف النقل للمنتج المعبّأ، وهو يعتمد على التركيبة والكمية لا على الزجاج. وعلى المشتري أن يبقي الأمرين منفصلين: فالقارورة المطابقة ليست منتجاً مطابقاً.',
        ],
      },
      {
        ...HEADINGS.comparisons,
        body: [
          'A glass bottle and an aluminium one are compared by weight, by how they handle an alcohol-based formula and an oil, and by what they do to the shelf they stand on. A pump and a sprayer are compared by what they do to a light formula and a heavy one.',
          'And a standard stock bottle is compared with a custom mould, which is a comparison of cost and lead time as much as of appearance, and the point at which a custom mould is worth it depends on the volume the buyer expects to move.',
        ],
        bodyAr: [
          'تُقارن القارورة الزجاجية بالألومنيوم بالوزن، وبتعامُلها مع تركيبة كحولية وأخرى زيتية، وبما تفعله بالرف الذي تقف عليه. وتُقارن البخاخة بالرذاذة بما تفعلانه بتركيبة خفيفة وأخرى ثقيلة.',
          'وتُقارن القارورة الجاهزة بقالب مخصص، وهي مقارنة كلفة ومدة تسليم بقدر ما هي مقارنة مظهر، والنقطة التي يستحق عندها القالب المخصص تعتمد على الكمية التي يتوقع المشتري تحريكها.',
        ],
      },
      {
        ...HEADINGS.requirements,
        body: [
          'Ask for the technical sheet, and check the capacity, the thread, the closure torque and the pump output against the filling line that will use it. A pack that is right in itself and wrong for the equipment behind it is the most common avoidable problem in this family.',
          'Then ask the transit standard and the drop test, and ask for the pack to be filled with the actual formula rather than with water, because that is the only test that shows whether the pump and the closure hold.',
        ],
        bodyAr: [
          'اطلب البطاقة الفنية، وقابل السعة والخيط وعزم الإحكام ومخرَج البخاخة مع خط التعبئة الذي سيستعملها. فالعبوة الصحيحة في ذاتها والخاطئة للمعدات خلفها أشيع مشكلة يمكن تفاديها في هذه العائلة.',
          'ثم اسأل عن معيار النقل واختبار السقوط، واطلب تعبئة العبوة بالتركيبة الفعلية لا بالماء، فاختبارها هي وحده الذي يُظهر هل يصمد البخاخة والإغلاق.',
        ],
      },
      {
        ...HEADINGS.suppliers,
        body: [
          'The directory lists packaging suppliers, bottle suppliers and bottle-glass suppliers, and they are not interchangeable: one supplies the finished pack, another supplies the glass, and the third supplies the raw bottle for a converter to finish. A buyer who needs a decorated pack will often deal with all three in the same order.',
        ],
        bodyAr: [
          'يفصل الدليل موردي التغليف وموردي القوارير وموردي زجاج القوارير، وليسوا قابلين للتبادل: فواحد يورد العبوة المنتهية، وآخر يورد الزجاج، وثالث يورد القارورة الخام لمحوّل يتولى تشطيبها. ومن يريد عبوة مزخرفة يتعامل عادةً مع الثلاثة في الطلب نفسه.',
        ],
      },
      {
        ...HEADINGS.guides,
        body: [
          'Why processing location is a separate fact applies to the converter who finishes the glass in a third country. Why wood, oil and perfume need separate shipping checks covers the classification of the filled product on the move. Understanding perfume concentration labels covers what the pack is expected to contain.',
        ],
        bodyAr: [
          'صفحة لماذا موقع المعالجة واقعة منفصلة تنطبق على المحوّل الذي يشطب الزجاج في بلد ثالث. وصفحة لماذا يحتاج الخشب والزيت والعطر فحوص شحن منفصلة تغطي تصنيف المنتج المعبّأ أثناء النقل. وصفحة ملصقات تركيز العطر تغطّي ما يُنتظر أن تحتويه العبوة.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'IFRA_APPLYING', 'CITES_APPENDICES'],
    method: 'no-ifra',
    limitations:
      'This page defines the family and the fields a buyer should fill in. It does not state a price, a capacity, a tolerance or a transit standard, and it does not assess any pack or any filled product.',
    limitationsAr:
      'تحدد هذه الصفحة العائلة والحقول التي ينبغي للمشتري أن يملأها. ولا تذكر سعراً ولا سعة ولا تبايناً ولا معيار نقل، ولا تقيّم أي عبوة ولا أي منتج معبّأ.',
    nextSteps: ['Search the supplier directory', 'Start a request for quote', 'Read why processing location is a separate fact'],
    nextStepsAr: ['ابحث في دليل الموردين', 'ابدأ طلب عرض سعر', 'اقرأ صفحة لماذا موقع المعالجة واقعة منفصلة'],
    related: [
      { slug: 'production/processing-location', label: 'Why processing location is a separate fact' },
      { slug: 'trade/shipping-wood-oil-perfume', label: 'Why wood, oil and perfume need separate shipping checks' },
      { slug: 'fragrance/concentration-labels', label: 'Understanding perfume concentration labels' },
    ],
  }),
];
