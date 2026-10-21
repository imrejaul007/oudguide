import type { Article } from './types.ts';

/**
 * Factories for the geography lane.
 *
 * The manifest carries 225 editorial routes across four geography
 * families:
 *
 *   - Origin country           15   /en/guides/origins/{country}/
 *   - Origin region            41   /en/guides/origins/{country}/{region}/
 *   - Destination buying guide 36   /en/guides/buying/in/{country}/
 *   - Origin comparison         6   /en/guides/comparisons/{pair}/
 *
 * The manifest sets a different required-section list for each family,
 * and this module has one factory per family so that each page carries
 * the sections its own manifest record asks for. A page that answers
 * the wrong question in the right shape is still the wrong page.
 *
 * Why factories rather than ninety-four hand-written objects
 * -----------------------------------------------------------
 * Because the sections are structural, but the facts are not. Every
 * page in this lane is built from facts that were read out of a
 * specific document for that specific place: the species recorded
 * there, the export position, the conservation and trade-control
 * position, the vocabulary, the businesses. Those facts live in the
 * data tables in `origin-countries.ts`, `origin-regions.ts`,
 * `destination-guides.ts` and `origin-comparisons.ts`, and the
 * factories here turn them into pages.
 *
 * The thing this approach has to guarantee is that no two pages come
 * out the same. The corpus test enforces that directly: it compares
 * direct answers and fails if two articles share one. Since the
 * direct answer is composed from the place's own facts, two pages
 * about two different places cannot collide, and the test proves it.
 *
 * A second thing it has to guarantee: a page must not claim more than
 * its sources support. Three rules run through every factory here.
 *
 *   1. A species recorded in a range state is not evidence that
 *      material was harvested there. Range is a botanical fact;
 *      harvest is a commercial one, and the documents that give the
 *      first rarely give the second.
 *   2. An export figure is not a quality claim, and a figure with a
 *      year on it is not a current figure.
 *   3. A region that is a producing region is not a place where a
 *      supplier is documented, and neither of those is a place where
 *      a buyer can be assured of delivery.
 *
 * Every page therefore ends by saying what it does not establish, and
 * the `limitations` field is not a formality.
 */

export const REVIEWED_ON = '2026-10-21';
export const REVIEWER = 'OudGuide editorial review';
export const REVIEWER_AR = 'مراجعة تحريرية من دليل العود';

export const REVIEW_METHOD =
  'Reviewed against the cited sources for what is and is not established about the place. The species recorded, the range states, the export position, the conservation and trade-control position and the market structure were read out of the cited documents for this place, and the fact that a place is a producing region, a trading centre or a documented destination was checked against the record rather than assumed. Where the sources record a year, that year is stated on the page. Each page states what it does not establish, and no assurance is made that a business operates in a place, that a shipment will be fulfilled, or that a material has a quality the documents do not measure.';
export const REVIEW_METHOD_AR =
  'رُوجعت مقابل المصادر المذكورة لمعرفة ما هو مثبت في المكان وما غير مثبت. فقُرئت الأنواع المسجَّلة ودول الانتشار وموقع التصدير وموقف الحفظ وضوابط التجارة وبنية السوق من المستندات المخصّصة لهذا المكان، ودُقِّق واقع المكان بوصفه منطقة إنتاج أو مركزاً تجارياً أو وجهة موثّقة من السجل لا بالافتراض. وحيث تذكر المصادر سنة، ذُكرت تلك السنة في الصفحة. وتذكر كل صفحة ما لا تثبته، ولا يُقدَّم أي ضمان بأن شركة تعمل في مكان أو أن شحنة ستُلبّى أو أن لمادة جودةً لا تقيسها المستندات.';

/* ==========================================================================
   Origin country
   ========================================================================== */

export interface OriginCountrySpec {
  slug: string;
  /** The country name as the page title uses it. */
  name: string;
  nameAr: string;
  /** ISO 3166-1 alpha-2. */
  iso2: string;
  /** One line: what the page is for. */
  summary: string;
  summaryAr: string;
  /**
   * The page's own answer, in two or three sentences, built from this
   * country's own facts.
   */
  directAnswer: string;
  directAnswerAr: string;
  /** The scope paragraph: what this page covers and what it does not. */
  scope: string;
  scopeAr: string;
  /** The species recorded for this country, with status where known. */
  species: string[];
  speciesAr: string[];
  /** The trade position, with the year the figure belongs to. */
  trade: string;
  tradeAr: string;
  /** The conservation and trade-control position. */
  control: string;
  controlAr: string;
  /** The vocabulary used for this country's material. */
  terminology: string;
  terminologyAr: string;
  /** What to ask when a seller states this origin. */
  questions: string[];
  questionsAr: string[];
  /** Region slugs under this country, for the page's own table of contents. */
  regions?: { slug: string; label: string; labelAr: string; blurb: string; blurbAr: string }[];
  /** Other slugs this page links to. */
  related: { slug: string; label: string; labelAr?: string }[];
  /** The source ids that carry this page's claims. */
  sourceIds: string[];
}

export function originCountry(spec: OriginCountrySpec): Article {
  return {
    slug: spec.slug,
    kind: 'origin',
    state: 'reviewed',
    title: `${spec.name} origin guide`,
    titleAr: `دليل منشأ ${spec.nameAr}`,
    h1: `${spec.name} origin guide`,
    h1Ar: `دليل منشأ ${spec.nameAr}`,
    summary: spec.summary,
    summaryAr: spec.summaryAr,
    directAnswer: spec.directAnswer,
    directAnswerAr: spec.directAnswerAr,
    sections: [
      {
        heading: 'What this page covers',
        headingAr: 'ما الذي تغطيه هذه الصفحة',
        body: [spec.scope],
        bodyAr: [spec.scopeAr],
      },
      {
        heading: 'The species recorded for this country',
        headingAr: 'الأنواع المسجَّلة لهذه الدولة',
        body: [
          'The species below are the ones the cited sources record for this country. A species range is a botanical fact: it establishes that a tree of that species grows in the country, and it does not establish that agarwood was taken from it, that any was taken recently, or that material sold under the name of the country came from there. Several of the species are recorded as threatened on the IUCN Red List, and the Appendix II listing of the Convention applies to every species in the two genera whether or not it is recorded in this country.',
        ],
        bodyAr: [
          'الأنواع أدناه هي التي تسجّلها المصادر المشار إليها لهذه الدولة. ونطاق النوع حقيقة نباتية: تثبت أن شجرة من ذلك النوع تنمو في البلد، ولا تثبت أن عوداً أُخذ منها، ولا أن أياً منه أُخذ حديثاً، ولا أن مادة تُباع باسم البلد جاءت منها. وقد سُجّل عدد من هذه الأنواع متهدداً في القائمة الحمراء.',
        ],
        list: spec.species,
        listAr: spec.speciesAr,
      },
      {
        heading: 'The trade position',
        headingAr: 'موقع التجارة',
        body: [spec.trade],
        bodyAr: [spec.tradeAr],
      },
      {
        heading: 'Conservation and trade control',
        headingAr: 'الحفظ وضوابط التجارة',
        body: [spec.control],
        bodyAr: [spec.controlAr],
      },
      {
        heading: 'The vocabulary used for this country',
        headingAr: 'المفردات المستعملة لهذه الدولة',
        body: [spec.terminology],
        bodyAr: [spec.terminologyAr],
      },
      {
        heading: 'What to ask when this origin is claimed',
        headingAr: 'ما الذي يُسأل عنه حين يُدَّعى هذا المنشأ',
        body: [
          'Every one of these questions is answerable by a seller who has the record, and unanswerable by a seller who does not. A question that cannot be answered is more useful than a compliment about the aroma, because it separates a documented lot from a described one.',
        ],
        bodyAr: [
          'كل سؤال من هذه قابل للإجابة عند من يملك السجل، وغير قابل للإجابة عند من لا يملكه. والسؤال الذي لا يمكن الإجابة عنه أنفع من مجاملة عن الرائحة، لأنه يفصل اللوط الموثَّق عن اللوط الموصوف.',
        ],
        list: spec.questions,
        listAr: spec.questionsAr,
      },
    ],
    sourceIds: spec.sourceIds,
    limitations:
      'This page describes a country in the agarwood register: the species recorded for it, its trade position, its conservation and trade-control position, and the vocabulary used for its material. It does not establish that any supplier operates in the country, that any material currently offered as from the country came from it, that any business is documented or verified, or that a shipment into any market will be fulfilled. The figures it gives carry the year the source recorded them in.',
    limitationsAr:
      'تصف هذه الصفحة دولةً في سجل العود: الأنواع المسجَّلة لها، وموقعها التجاري، وموقفها من الحفظ وضوابط التجارة، والمفردات المستعملة لمادتها. ولا تثبت أن أي مورد يعمل في هذا البلد، ولا أن أي مادة تُعرض حالياً من هذا البلد جاءت منه، ولا أن أي شركة موثّقة أو مُتحقَّق منها، ولا أن شحنة إلى أي سوق ستُلبّى. والأرقام الواردة فيها تحمل سنة تسجيل المصدر لها.',
    reviewer: REVIEWER,
    reviewerAr: REVIEWER_AR,
    reviewMethod: REVIEW_METHOD,
    reviewMethodAr: REVIEW_METHOD_AR,
    reviewedOn: REVIEWED_ON,
    nextSteps: [
      'Read the comparison pages for this country and its neighbours',
      'See what a laboratory report can and cannot establish',
      'Learn how a grading claim is structured and which parts are checkable',
    ],
    nextStepsAr: [
      'اقرأ صفحات المقارنة لهذه الدولة وجاراتها',
      'اعرف ما يمكن لتقرير مخبري إثباته وما لا يمكن',
      'تعلّم كيف يُبنى ادعاء التقييم وأي أجزائه قابلة للفحص',
    ],
    related: spec.related,
    parent: 'origins',
    taxonomyKey: spec.iso2,
    children: spec.regions,
  };
}

/* ==========================================================================
   Origin region
   ========================================================================== */

export interface OriginRegionSpec {
  slug: string;
  /** The region's name, as the page title uses it. */
  name: string;
  nameAr: string;
  /** The country it sits in, for the "country relationship" section. */
  country: string;
  countryAr: string;
  countrySlug: string;
  /** What kind of place this is: a state, a province, a district. */
  placeKind: string;
  placeKindAr: string;
  /** The documented oud role: producing, processing, trading, or a record of one. */
  role: string;
  roleAr: string;
  /** The species recorded here. */
  species: string[];
  speciesAr: string[];
  /** The evidence: what the record actually says, with the year. */
  evidence: string;
  evidenceAr: string;
  /** The vocabulary used for this region's material. */
  terminology: string;
  terminologyAr: string;
  /** The businesses recorded in or around this region. */
  businesses: string;
  businessesAr: string;
  /** Three questions specific to this region. */
  questions: string[];
  questionsAr: string[];
  /** Other region or country slugs this page links to. */
  related: { slug: string; label: string; labelAr?: string }[];
  sourceIds: string[];
}

export function originRegion(spec: OriginRegionSpec): Article {
  return {
    slug: spec.slug,
    kind: 'origin',
    state: 'reviewed',
    title: `${spec.name}: oud material and trade context`,
    titleAr: `${spec.nameAr}: مادة العود وسياق التجارة`,
    h1: `${spec.name}: oud material and trade context`,
    h1Ar: `${spec.nameAr}: مادة العود وسياق التجارة`,
    summary: `The documented oud position of ${spec.name}, in ${spec.country}: the place itself, the species recorded there, the trade and control position, and what a buyer should ask.`,
    summaryAr: `الموضع الموثَّق للعود في ${spec.nameAr}، في ${spec.countryAr}: المكان نفسه، والأنواع المسجَّلة فيه، وموقع التجارة والضوابط، وما ينبغي أن يسأله المشتري.`,
    directAnswer: `${spec.name} is a ${spec.placeKind} in ${spec.country}. ${spec.role} ${spec.evidence} The claim that a material is from ${spec.name} is therefore a claim about origin and treatment that has to be supported by the growing area, the species, and the record attached to the batch — not by the name on the listing.`,
    directAnswerAr: `${spec.nameAr} ${spec.placeKindAr} في ${spec.countryAr}. ${spec.roleAr} ${spec.evidenceAr} فادعاء أن مادة من ${spec.nameAr} ادعاءٌ بالمنشأ والمعالجة لا بد من أن تسنده المنطقة النامية والنوع والسجل المرفق بالدفعة، لا أن يَسنده اسم في الإعلان.`,
    sections: [
      {
        heading: 'The place and its place in the country',
        headingAr: 'المكان وموضعه في البلد',
        body: [
          `${spec.name} is a ${spec.placeKind} in ${spec.country}. That is the whole of the administrative identity, and it matters more than it sounds: a place name on a listing may be a province, a district, a trading centre, a growing area, or a historic name for a region that does not correspond to any present-day administrative unit. Where a historic or natural region overlaps an administrative place, the two are used here as the sources use them, and the page does not assert a boundary that the sources do not give.`,
        ],
        bodyAr: [
          `${spec.nameAr} ${spec.placeKindAr} في ${spec.countryAr}. وهذه هي الهوية الإدارية كلها، وهي أهم مما يبدو: فاسم المكان في الإعلان قد يكون ولاية أو مقاطعة أو مركزاً تجارياً أو منطقة نامية أو اسماً تاريخياً لإقليم لا يطابق أي وحدة إدارية حالية. وح حيث يتداخل الإقليم التاريخي أو الطبيعي مع مكان إداري، تُستعمل هنا كما تستعملها المصادر، ولا تفرض الصفحة حداً لا تعطيه المصادر.`,
        ],
      },
      {
        heading: 'The documented oud role',
        headingAr: 'الدور الموثَّق للعود',
        body: [spec.role],
        bodyAr: [spec.roleAr],
        list: spec.species,
        listAr: spec.speciesAr,
      },
      {
        heading: 'What the evidence actually says',
        headingAr: 'ما تقوله الأدلة فعلاً',
        body: [spec.evidence],
        bodyAr: [spec.evidenceAr],
      },
      {
        heading: 'The vocabulary used for material from here',
        headingAr: 'المفردات المستعملة لمادة من هنا',
        body: [spec.terminology],
        bodyAr: [spec.terminologyAr],
      },
      {
        heading: 'Businesses recorded in and around this region',
        headingAr: 'الشركات المسجَّلة في هذا الإقليم وحوله',
        body: [spec.businesses],
        bodyAr: [spec.businessesAr],
      },
      {
        heading: 'Questions specific to this region',
        headingAr: 'أسئلة خاصة بهذا الإقليم',
        body: [
          'These are the questions that are particular to this place, because this place has a particular record. Each one is answerable from documentation, and the answers are what separate a lot with a provenance from a lot with a label.',
        ],
        bodyAr: [
          'هذه الأسئلة خاصة بهذا المكان، لأن لهذا المكان سجلاً خاصاً به. وكل واحد منها قابل للإجابة من الوثائق، وهي الإجابات التي تفصل اللوط ذا المنشأ عن اللوط ذا التسمية.',
        ],
        list: spec.questions,
        listAr: spec.questionsAr,
      },
    ],
    sourceIds: spec.sourceIds,
    limitations:
      'This page describes the place, the species recorded there, its trade and control position, and the vocabulary used for its material. It does not establish that any particular business operates in this region, that any supplier is documented or verified, that a lot offered as from here came from here, or that the region produces agarwood at any given volume. The place a name refers to may be larger, smaller or different from the administrative unit named.',
    limitationsAr:
      'تصف هذه الصفحة المكان، والأنواع المسجَّلة فيه، وموقعه التجاري والضوابط، والمفردات المستعملة لمادته. ولا تثبت أن أي شركة بعينها تعمل في هذا الإقليم، ولا أن أي مورد موثَّق أو مُتحقَّق منه، ولا أن لوطاً يُعرض على أنه من هنا جاء من هنا، ولا أن الإقليم ينتج العود بأي حجم معيَّن. وقد يكون المكان الذي يشير إليه الاسم أكبر من الوحدة الإدارية المذكورة أو أصغر منها أو مختلفاً عنها.',
    reviewer: REVIEWER,
    reviewerAr: REVIEWER_AR,
    reviewMethod: REVIEW_METHOD,
    reviewMethodAr: REVIEW_METHOD_AR,
    reviewedOn: REVIEWED_ON,
    nextSteps: [
      `Read the ${spec.country} origin guide`,
      'See what a laboratory report can and cannot establish',
      'Learn how a grading claim is structured and which parts are checkable',
    ],
    nextStepsAr: [
      `اقرأ دليل منشأ ${spec.countryAr}`,
      'اعرف ما يمكن لتقرير مخبري إثباته وما لا يمكن',
      'تعلّم كيف يُبنى ادعاء التقييم وأي أجزائه قابلة للفحص',
    ],
    related: spec.related,
    parent: 'origins',
  };
}

/* ==========================================================================
   Destination buying guide
   ========================================================================== */

export interface DestinationSpec {
  slug: string;
  /** The country name. */
  name: string;
  nameAr: string;
  /** ISO 3166-1 alpha-2. */
  iso2: string;
  summary: string;
  summaryAr: string;
  directAnswer: string;
  directAnswerAr: string;
  /** The import-control regime: what a buyer needs before a shipment can land. */
  control: string;
  controlAr: string;
  /** How buying actually happens here. */
  channels: string;
  channelsAr: string;
  /** What is particular to buying in this market. */
  local: string;
  localAr: string;
  /** The destination directory route for this country. */
  directorySlug: string;
  sourceIds: string[];
}

export function destinationGuide(spec: DestinationSpec): Article {
  return {
    slug: spec.slug,
    kind: 'destination',
    state: 'reviewed',
    title: `Buying oud and fragrance in ${spec.name}`,
    titleAr: `شراء العود والعطور في ${spec.nameAr}`,
    h1: `Buying oud and fragrance in ${spec.name}`,
    h1Ar: `شراء العود والعطور في ${spec.nameAr}`,
    summary: spec.summary,
    summaryAr: spec.summaryAr,
    directAnswer: spec.directAnswer,
    directAnswerAr: spec.directAnswerAr,
    sections: [
      {
        heading: 'Choose a format before you choose a market',
        headingAr: 'اختر الشكل قبل أن تختار السوق',
        body: [
          'A destination decides where a shipment lands and who has to sign for it. It does not decide what is in the box. So the format question comes first, and the market question second: wood, oil, powder, bakhoor, attar and a finished perfume are different products with different paperwork, different shelf lives and different ways of being described, and a market that is strong for one of them may have no demand at all for another.',
          'The practical consequence is that a buyer who arrives in a market with a wood requirement and an oil requirement should not assume the same supplier, the same documentation or the same price serves both. State the format first, and the rest of the conversation becomes answerable.',
        ],
        bodyAr: [
          'السوق يحدد أين تصل الشحنة ومن يوقّع عليها، ولا يحدد ما في الصندوق. فسؤال الشكل يأتي أولاً، وسؤال السوق ثانياً: الخشب والزيت والمسحوق والبخور والعطر الشرقي والعطر المنتهي منتجات مختلفة، لكل منها ورقتها وعمرها المخزني وطريقة وصفها، وقد يكون السوق قوياً في واحد منها معدوم الطلب في غيره.',
          'والنتيجة العملية أن مشترياً يدخل السوق بطالب خشب وآخر بطالب زيت لا يجوز أن يفترض أن المورد نفسه أو الوثائق نفسها أو السعر نفسه يخدمان الطلبين. فاذكر الشكل أولاً، ثم تصير بقية المحادثة قابلة للإجابة.',
        ],
      },
      {
        heading: 'How buying actually happens here',
        headingAr: 'كيف يجري الشراء هنا فعلياً',
        body: [spec.channels],
        bodyAr: [spec.channelsAr],
      },
      {
        heading: 'A supplier inside the country versus a supplier that delivers to it',
        headingAr: 'مورد داخل البلد مقابل مورد يوصل إليه',
        body: [
          'These are different relationships and the directory separates them. A business located in a country is a business that can be met, sampled from, and asked for its records in person. A business that documents delivery to a country is a business that has said it can ship there, which is a different claim and a weaker one: it is a statement of capability, not of presence.',
          'The distinction matters when something goes wrong, because a buyer who bought from a supplier inside the country has a counterparty in the same jurisdiction; a buyer who bought from a supplier elsewhere has a counterparty in another country and a delivery into a third. A sourcing note, a purchase order and a shipping document are the minimum, and they are the record that makes the difference enforceable rather than a matter of argument.',
        ],
        bodyAr: [
          'هاتان علاقتان مختلفتان ويفصل بينهما الدليل. الشركة الموجودة في بلد هي شركة يمكن الالتقاء بها ومعاينة عينة منها ومطالبتها بسجلاتها حضورياً. والشركة التي توثّق التسليم إلى بلد هي شركة قالت إنها تستطيع الشحن إليه، وهي أطوى: تصريحٌ بالقدرة لا بالحضور.',
          'والمسألة تظهر عند الخلل حين يسوء شيء: فالمشتري الذي اشترى من مورد داخل البلد له طرف مقابل في الاختصاص نفسه؛ ومن اشترى من مورد في بلد آخر له طرف في بلد ثانٍ وتسليم في ثالث. ومذكرة الشراء وأمر الشراء ووثيقة الشحن هي الحد الأدنى.',
        ],
      },
      {
        heading: 'The sample process',
        headingAr: 'مسار العينة',
        body: [
          'The order of operations that works: agree the format and the quantity unit first, because a sample of chips and a sample of oil are not comparable; then ask for a sample that carries the same batch reference the quotation names; then assess the sample and record what was assessed, by whom and on what date; and only then buy against that record rather than against the sample.',
          'Two failure modes are worth naming. The first is the sample that arrives from a different batch than the one quoted, which is the ordinary way a purchase goes wrong and is prevented by asking for the batch reference before the sample, not after. The second is the sample assessed by one person and the delivery judged by another, which is why the assessment should be written down and repeated by the person who will receive the delivery.',
        ],
        bodyAr: [
          'الترتيب الذي ينجح: اتفق على الشكل ووحدة القياس أولاً، لأن عينة الرقائق وعينة الزيت لا تُقارَنان؛ ثم اطلب عينة تحمل نفس مرجع الدفعة الذي تذكره عرض السعر؛ ثم قيّم العينة وسجّل ما قِيِّم ومن قيّم وفي أي تاريخ؛ وعندئذٍ فقط اشترِ على أساس ذلك السجل لا على أساس العينة.',
          'وهناك خطآن يُستحقان التسمية: الأول عينة تأتي من دفعة غير التي عُرضت، وهو الطريق المعتاد لفساد شراء، ويُمنَع بمطلب مرجع الدفعة قبل العينة لا بعدها. والثاني أن يقيس شخص العينة ويقيّم آخر التسليم، ولهذا ينبغي كتابة التقييم وتكراره من يقبض التسليم.',
        ],
      },
      {
        heading: 'Comparing quantities and units',
        headingAr: 'مقارنة الكميات والوحدات',
        body: [
          'Two different units are in play at once and they are routinely confused. A tola is a weight, and the trade uses it for wood, for oil and for a number of things that are neither. A bottle, a vial and a carton are volumes, and a volume of oil and a volume of perfume concentrate are not the same quantity of anything that can be smuggled or concealed.',
          'The question that settles it is the one about the label: is the declared figure a net weight of the contents, a net weight including a carrier, a gross weight, or a volume? A label that does not say is not a lie, but it is not a specification either, and a buyer who has agreed a price against an unstated unit has not agreed a price.',
        ],
        bodyAr: [
          'وحدان مختلفان يعملان معاً ويلتبسان عادة. التولة وزن، وتستعملها التجارة للخشب وللزيت ولأشياء ليست واحداً منهما. والقارورة والقارورة الصغيرة والصندوق أحجام، وحجم من الزيت وحجم من زيت العطر المركَّز ليسا كمية واحدة من أي شيء يمكن تهريبه أو إخفاؤه.',
          'والسؤال الذي يحسمها هو سؤال اللوحة: هل الرقم المعلن وزناً صافياً للمحتوى، أم وزناً صافياً شاملاً حاملاً، أم وزناً إجمالياً، أم حجماً؟ واللوحة التي لا تذكر ليست كاذبة، لكنها ليست مواصفة أيضاً، ومن اتفق سعراً على وحدة غير مذكورة لم يتفق سعراً.',
        ],
      },
      {
        heading: 'Questions that are particular to this market',
        headingAr: 'أسئلة خاصة بهذا السوق',
        body: [spec.local],
        bodyAr: [spec.localAr],
      },
      {
        heading: 'Where to look locally',
        headingAr: 'أين تبحث محلياً',
        body: [
          `The directory's destination filter for this market is the starting point, and it lists businesses that have documented delivery to ${spec.name} separately from businesses located in ${spec.name}. A supplier is introduced to a destination only where it has documented one, which is why the two lists are kept apart.`,
          'The wholesale intake on this site is the other route, and it is the right one when the requirement is a volume of material rather than a named brand: the request states the format, the quantity and the destination, and a supplier is introduced only after a named approval, so no buyer details go to anyone who has not been approved to receive them.',
        ],
        bodyAr: [
          `مرشِّح الوجهات في الدليل هو نقطة البداية، وهو يسرد الشركات التي وثّقت التسليم إلى ${spec.nameAr} على حدة من الشركات الموجودة في ${spec.nameAr}. ولا يُعرَّف مورد على وجهة إلا حيث وثّق لها، ولهذا فُصلت القائمتان.`,
          'ومسار التوريد بالجملة في هذا الموقع هو المسار الآخر، وهو الصحيح حين يكون الطلب حجماً من المادة لا اسماً تجارياً بعينه: يذكر الطلب الشكل والكمية والوجهة، ولا يُعرَّف مورد إلا بعد موافقة مسمّاة، فلا تصل بيانات المشتري إلى من لم يُعتمد على استلامها.',
        ],
        list: [
          `The destination directory filter for ${spec.name}, which lists the businesses documented as delivering to that market`,
          'The wholesale intake, which is where a volume requirement is stated and a supplier is introduced only after a named approval',
        ],
        listAr: [
          `مرشِّح الوجهات في الدليل لـ ${spec.nameAr}، وهو يسرد الشركات الموثَّقة بأنها توصّل إلى ذلك السوق`,
          'ومسار التوريد بالجملة، حيث يُذكر الطلب ويُعرَّف المورد بعد موافقة مسمّاة فقط',
        ],
      },
    ],
    sourceIds: spec.sourceIds,
    limitations:
      'This page describes how buying oud and fragrance in this market works: the import-control regime, how the trade is structured, and what a buyer should establish before committing. It does not name a supplier as verified, does not state that any particular business delivers to this market, does not establish current prices, and does not establish that any shipment will be cleared, fulfilled or delivered. A shipment can be lawful at origin and still fail on arrival if the destination documents do not match the material.',
    limitationsAr:
      'تصف هذه الصفحة كيف يجري شراء العود والعطور في هذا السوق: نظام ضوابط الاستيراد، وبنية التجارة، وما ينبغي للمشتري إثباته قبل الالتزام. ولا تسمّي أي مورد مُتحقَّقاً منه، ولا تقرّر أن أي شركة بعينها توصّل إلى هذا السوق، ولا تقرّر أسعاراً حالية، ولا تثبت أن أي شحنة ستُخلَّص أو ستُلبّى أو ستُسلَّم. فالشحنة قد تكون قانونية في بلد المنشأ وتفشل عند الوصول إن لم تطابق وثائق الوجهة المادة.',
    reviewer: REVIEWER,
    reviewerAr: REVIEWER_AR,
    reviewMethod: REVIEW_METHOD,
    reviewMethodAr: REVIEW_METHOD_AR,
    reviewedOn: REVIEWED_ON,
    nextSteps: [
      'Learn how a grading claim is structured and which parts are checkable',
      'See what a laboratory report can and cannot establish',
      'Read how a wholesale quotation is read',
    ],
    nextStepsAr: [
      'تعلّم كيف يُبنى ادعاء التقييم وأي أجزائه قابلة للفحص',
      'اعرف ما يمكن لتقرير مخبري إثباته وما لا يمكن',
      'اقرأ كيف تُقرأ عرض السعر بالجملة',
    ],
    related: [
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'buying/supplier-questions', label: 'What to ask a supplier' },
      { slug: 'buying/choosing-oud-wood', label: 'Choosing an oud wood purchase' },
      { slug: 'buying/choosing-oud-oil', label: 'Choosing an oud oil purchase' },
      { slug: 'buying/net-weight-and-volume', label: 'Compare mass, volume and pack counts' },
    ],
    parent: 'buying',
    taxonomyKey: spec.iso2,
  };
}

/* ==========================================================================
   Origin comparison
   ========================================================================== */

export interface ComparisonSpec {
  slug: string;
  /** The two places, as the page title uses them. */
  first: string;
  firstAr: string;
  firstSlug: string;
  second: string;
  secondAr: string;
  secondSlug: string;
  summary: string;
  summaryAr: string;
  directAnswer: string;
  directAnswerAr: string;
  scope: string;
  scopeAr: string;
  labels: string;
  labelsAr: string;
  contexts: string;
  contextsAr: string;
  overlap: string;
  overlapAr: string;
  samples: string;
  samplesAr: string;
  related: { slug: string; label: string; labelAr?: string }[];
  sourceIds: string[];
}

export function originComparison(spec: ComparisonSpec): Article {
  return {
    slug: spec.slug,
    kind: 'origin',
    state: 'reviewed',
    title: `Comparing ${spec.first} and ${spec.second} oud claims`,
    titleAr: `مقارنة ادعاءات عود ${spec.firstAr} و${spec.secondAr}`,
    h1: `Comparing ${spec.first} and ${spec.second} oud claims`,
    h1Ar: `مقارنة ادعاءات عود ${spec.firstAr} و${spec.secondAr}`,
    summary: spec.summary,
    summaryAr: spec.summaryAr,
    directAnswer: spec.directAnswer,
    directAnswerAr: spec.directAnswerAr,
    sections: [
      {
        heading: 'What this comparison covers',
        headingAr: 'ما الذي تغطيه هذه المقارنة',
        body: [spec.scope],
        bodyAr: [spec.scopeAr],
      },
      {
        heading: 'What the labels establish, and what they do not',
        headingAr: 'ما الذي تثبته التسميات وما لا تثبته',
        body: [spec.labels],
        bodyAr: [spec.labelsAr],
      },
      {
        heading: 'The documented production contexts',
        headingAr: 'سياقات الإنتاج الموثَّقة',
        body: [spec.contexts],
        bodyAr: [spec.contextsAr],
      },
      {
        heading: 'Where the two overlap',
        headingAr: 'أين يتداخل الاثنان',
        body: [spec.overlap],
        bodyAr: [spec.overlapAr],
      },
      {
        heading: 'Comparing actual samples',
        headingAr: 'مقارنة عينات فعلية',
        body: [spec.samples],
        bodyAr: [spec.samplesAr],
      },
    ],
    sourceIds: spec.sourceIds,
    limitations:
      'This page sets out what is documented about two places and what the origin labels for each of them do and do not establish. It does not rank the two by scent, quality or price, does not establish that material sold under either name came from the place named, and does not establish that any supplier operates in either place. A lot has to be assessed on its own evidence, and the origin is one piece of that evidence rather than the whole of it.',
    limitationsAr:
      'تضع هذه الصفحة ما هو موثَّق عن مكانين وما الذي تثبته تسميات المنشأ لكل منهما وما لا تثبته. ولا ترتّب بينهما بحسب الرائحة أو الجودة أو السعر، ولا تثبت أن مادة تُباع بأحد الاسمين جاءت من المكان المذكور، ولا تثبت أن أي مورد يعمل في أي منهما. فاللوط يحتاج إلى تقييم على أدلته الخاصة، والمنشأ إحدى قطع تلك الأدلة لا كلها.',
    reviewer: REVIEWER,
    reviewerAr: REVIEWER_AR,
    reviewMethod: REVIEW_METHOD,
    reviewMethodAr: REVIEW_METHOD_AR,
    reviewedOn: REVIEWED_ON,
    nextSteps: [
      'Learn how a grading claim is structured and which parts are checkable',
      'See what a laboratory report can and cannot establish',
      'Read the two origin pages this comparison links to',
    ],
    nextStepsAr: [
      'تعلّم كيف يُبنى ادعاء التقييم وأي أجزائه قابلة للفحص',
      'اعرف ما يمكن لتقرير مخبري إثباته وما لا يمكن',
      'اقرأ صفحتي المنشأ اللتين تشيران إليهما هذه المقارنة',
    ],
    related: spec.related,
    parent: 'comparisons',
  };
}
