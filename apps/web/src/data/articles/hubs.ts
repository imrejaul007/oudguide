import type { Article, ArticleRelated } from './types.ts';

/**
 * The editorial hubs.
 *
 * The manifest carries twelve "Editorial hub" routes. Previously they were
 * served by the same fallback article as every other guide, which meant the
 * hub pages — the navigational spine of the encyclopedia — carried no
 * information of their own.
 *
 * A hub is a different kind of page from a guide. It does not answer a
 * question; it tells a reader what the section covers, what order the
 * material is best read in, and which parts of it are finished. The
 * `children` list is therefore the hub’s real content: it is the section’s
 * table of contents, drawn only from articles that exist.
 */

const REVIEWED_ON = '2026-10-20';
const REVIEWER = 'OudGuide editorial review';
const REVIEWER_AR = 'مراجعة تحريرية من دليل العود';
const REVIEW_METHOD =
  'Reviewed against the cited sources, checked that every listed child page exists as a reviewed article, and checked that every assurance is either sourced or explicitly marked as a limitation.';
const REVIEW_METHOD_AR =
  'رُوجعت مقابل المصادر المذكورة، ودُقِّق أن كل صفحة فرعية مذكورة موجودة كمقال مُراجَع، وأن كل ادعاء إمّا مسنود بمصدر أو موسوم صراحةً كقيد.';

/** The shared "how this section is organised" note. */
const SCOPE_EN =
  'This page is a section index. It does not repeat the articles beneath it: each of those carries its own answer, its own evidence and its own stated limitations. Where a page in this section is still being written, it is marked as a research brief and is deliberately left out of the index, so that the list below contains only finished work.';
const SCOPE_AR =
  'هذه الصفحة فهرس قسم. وهي لا تكرّر المقالات تحتها: فلكل منها إجابتها وأدلتها وحدودها المعلنة. وحيث تُكتب إحدى صفحات هذا القسم، فتُوسم بأنها موجز بحثي وتُستبعد عمداً من الفهرس، حتى تكون القائمة أدناه عملاً مكتملاً فقط.';

interface HubSpec {
  slug: string;
  title: string;
  titleAr: string;
  summary: string;
  summaryAr: string;
  directAnswer: string;
  directAnswerAr: string;
  /** Section-specific framing. */
  scope: string;
  scopeAr: string;
  children: { slug: string; label: string; labelAr: string; blurb: string; blurbAr: string }[];
  nextSteps: string[];
  nextStepsAr: string[];
  sourceIds: string[];
  /**
   * Sibling-hub links. The renderer shows these as a "related reading"
   * block on the hub page, so a reader of one silo has a first-order
   * path into a neighbouring silo. Without them the 14 hubs are 14
   * separate topics to a crawler rather than one coherent entity.
   * All targets are reviewed hubs, so the content-integrity gate passes.
   */
  related?: ArticleRelated[];
}

const SPECS: HubSpec[] = [
  {
    slug: 'oud-basics',
    related: [
      { slug: 'production', label: 'Production', labelAr: 'الإنتاج' },
      { slug: 'fragrance', label: 'Fragrance', labelAr: 'العطور' },
    ],
    title: 'Oud Basics',
    titleAr: 'أساسيات العود',
    summary: 'What agarwood is, which trees produce it, and how the material is named and used.',
    summaryAr: 'ما هو العود، وأي الأشجار تنتجه، وكيف يُسمّى ويُستخدم.',
    directAnswer:
      'Oud basics is the section that establishes the material itself: what the word covers, which plants produce the resinous wood, how the resin forms, and what each form of the material is used for. Read it once before reading anything about grading or buying, because most disputes in those sections are really disputes about which form is being discussed.',
    directAnswerAr:
      'أساسيات العود هو القسم الذي يثبّت المادة نفسها: ما الذي يغطيه الاسم، وأي النباتات تُنتج الخشب الراتنجي، وكيف يتكون الراتنج، وما استخدام كل شكل من المادة. اقرأه مرة قبل قراءة أي شيء عن التقييم أو الشراء، لأن أكثر الخلافات في تلك الأقسام هي في الحقيقة خلافات حول أي شكلٍ من الأشكال مطروح للبحث.',
    scope:
      'The section covers the material, not the market. For supplier research, pricing frameworks or shipping questions, follow the links from the Buying and Sourcing sections rather than from here.',
    scopeAr:
      'يغطي القسم المادة لا السوق. أما بحث الموردين أو أطر التسعير أو أسئلة الشحن، فاتبع روابط قسمي الشراء والتوريد لا من هنا.',
    children: [
      {
        slug: 'oud-basics/getting-started',
        label: 'Where to begin with oud: the four decisions, in order',
        labelAr: 'من أين أبدأ مع العود: القرارات الأربعة بالترتيب',
        blurb: 'The four decisions a first-timer makes, in the order that costs the least, and where on this site each one is answered.',
        blurbAr: 'القرارات الأربعة التي يتخذها المبتدئ، بالترتيب الذي يكلف أقل، وأين في هذا الموقع يجيب كل واحد منها.',
      },
      {
        slug: 'oud-basics/what-is-agarwood',
        label: 'Agarwood: names, material and uses',
        labelAr: 'العود: الأسماء والمادة والاستخدامات',
        blurb: 'What the word covers, which species are involved, and how the resin forms.',
        blurbAr: 'ما الذي يغطيه الاسم، وما الأنواع النباتية المعنية، وكيف يتكون الراتنج.',
      },
      {
        slug: 'oud-basics/agarwood-botanical-identity',
        label: 'Botanical identity and genus comparison',
        labelAr: 'الهوية النباتية ومقارنة الأجناس',
        blurb: 'The difference between Aquilaria, Gyrinops and sandalwood, and why it decides which rules apply.',
        blurbAr: 'الفرق بين Aquilaria وGyrinops والصندل، ولماذا يحدد أي اللوائح تنطبق.',
      },
      {
        slug: 'using-oud/wood-versus-oil',
        label: 'Wood versus oil: choose a format',
        labelAr: 'الخشب مقابل الزيت: اختر الشكل',
        blurb: 'Which format suits which use, and why the two are not interchangeable.',
        blurbAr: 'أي شكل يناسب أي استخدام، ولماذا ليس الاثنان قابلين للتبادل.',
      },
      {
        slug: 'oud-basics/which-species-makes-oud',
        label: 'Which species makes oud',
        labelAr: 'أي نوع يصنع العود',
        blurb: 'The species that produce resinous agarwood, how the two genera differ, and why the species name is what a buyer needs to know first.',
        blurbAr: 'الأنواع التي تنتج قلب راتنجي، وكيف يختلف الجنسان، ولماذا اسم النوع هو ما يحتاج المشتري أن يعرفه أولاً.',
      },
      {
        slug: 'oud-basics/why-oud-is-expensive',
        label: 'Why oud prices differ',
        labelAr: 'لماذا تختلف أسعار العود',
        blurb: 'The four recorded conditions under a price figure, and why a wide range is the market’s ordinary state.',
        blurbAr: 'أربعة الظروف المسجلة تحت رقم سعر، ولماذا النطاق الواسع هو الحالة العادية للسوق.',
      },
      {
        slug: 'oud-basics/resin-formation',
        label: 'How resin develops in agarwood',
        labelAr: 'كيف يتكوّن الراتنج في الخشب الراتنجي',
        blurb: 'The recorded picture of formation: the wound, the reported fungal role and the recorded chemistry, and what the record does not carry.',
        blurbAr: 'الصورة المسجلة للتكوّن: الجرح، والدور الفطري المنقول، والكيمياء المسجلة، وما لا يحمله السجل.',
      },
    ],
    nextSteps: ['Start with what agarwood actually is', 'Compare the wood and oil formats', 'Check the botanical identities before you buy'],
    nextStepsAr: ['ابدأ مما هو العود فعلاً', 'قارن بين شكلَي الخشب والزيت', 'تحقق من الهوية النباتية قبل الشراء'],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014', 'CITES_AGARWOOD_2004', 'CITES_APPENDICES'],
  },
  {
    slug: 'quality',
    related: [
      { slug: 'production', label: 'Production', labelAr: 'الإنتاج' },
      { slug: 'trade', label: 'Trade', labelAr: 'التجارة' },
    ],
    title: 'Quality',
    titleAr: 'الجودة',
    summary: 'How grading claims work, what testing can establish, and where the vocabulary is trade convention.',
    summaryAr: 'كيف تعمل ادعاءات التقييم، وما الذي يمكن للفحص إثباته، وأين تكون المفردات عرفاً تجارياً.',
    directAnswer:
      'The Quality section explains how oud claims are made and what each kind of claim is worth. Some of the vocabulary in this trade — Super grades, sinking grades, age statements — is a market convention with no published standard behind it. Other claims are checkable: treatment disclosure, batch records and laboratory reports all have a defined scope. This section tells you which is which, so that a claim is not mistaken for a fact.',
    directAnswerAr:
      'يشرح قسم الجودة كيف تُقدَّم ادعاءات العود وقيمة كل نوع منها. وبعض مفردات هذه التجارة — درجات «سوبر» ودرجات الغطاس وادعاءات العمر — عرفٌ سوقي لا تقوم خلفه معايير منشورة. وبعض الادعاءات قابل للتحقق: إفصاح المعالجة، وسجلات الدفعات، وتقارير المختبرات، لكل منها نطاق محدد. ويبيّن لك هذا القسم أيّهما هو أيّهما، حتى لا تُحسب دعوى واقعةً.',
    scope:
      'This section does not set a price, endorse a supplier, or declare any lot good. It explains what each term and each document can and cannot establish.',
    scopeAr:
      'لا يحدد هذا القسم سعراً ولا يرشّح مورداً ولا يعلن أي لوط جيداً. وإنما يشرح ما يمكن لكل مصطلح ولكل وثيقة إثباته وما لا يمكن.',
    children: [
      {
        slug: 'quality/seller-defined-super-grades',
        label: 'Super, Double Super and Triple Super labels',
        labelAr: 'شارات «سوبر» و«دبل سوبر» و«تريبل سوبر»',
        blurb: 'What the Gulf trade labels assert, and what to ask instead.',
        blurbAr: 'ما تقرّره تسميات سوق الخليج، وما الذي تسأل عنه بدلها.',
      },
      {
        slug: 'quality/oud-grading-explained',
        label: 'How oud grading claims work',
        labelAr: 'كيف تعمل ادعاءات تقييم العود',
        blurb: 'The general structure of a grading claim, and which parts are checkable.',
        blurbAr: 'البنية العامة لادعاء التقييم، وأي أجزائه قابلة للتحقق.',
      },
      {
        slug: 'quality/grading-systems-reconciliation',
        label: 'How the oud grading systems line up',
        labelAr: 'كيف تتطابق أنظمة تقييم العود',
        blurb: 'Six systems are six kinds of claim: a page that says which is which, and where two of them are never comparable.',
        blurbAr: 'ستة أنظمة ستة أنواع من الادعاء: صفحة تبيّن أيّ نوع كلٌّ منها، وأين لا تكون نسختان منها قابلتين للمقارنة قط.',
      },
      {
        slug: 'quality/lab-report-reading',
        label: 'How to read the scope of a laboratory report',
        labelAr: 'كيف تقرأ نطاق تقرير مخبري',
        blurb: 'What a report covers, what it excludes, and what it cannot tell you about a batch.',
        blurbAr: 'ما يشمله التقرير، وما يستثنيه، وما لا يخبرك به عن دفعة.',
      },
      {
        slug: 'quality/assessment-and-testing-limits',
        label: 'Assessment and testing limits',
        labelAr: 'حدود الفحص والتقييم',
        blurb: 'Where laboratory analysis stops and commercial judgement begins.',
        blurbAr: ' حيث ينتهي التحليل المخبري ويبدأ الحكم التجاري.',
      },
      {
        slug: 'quality/gulf-market-grade-labels',
        label: 'Gulf-market oud grading vocabulary',
        labelAr: 'مفردات تقييم العود في سوق الخليج',
        blurb: 'The nine labels, which sit on a ladder and which do not.',
        blurbAr: 'التسميات التسع، وأيها على سلم وأيها لا.',
      },
      {
        slug: 'quality/fraud-identification',
        label: 'Oud fraud and counterfeit identification',
        labelAr: 'تعرّف على الغش والعود المزيف',
        blurb: 'How a buyer detects fake, substituted or misrepresented oud: which claims to press, which documents to ask for, and what none of them proves on their own.',
        blurbAr: 'كيف يكتشف المشتري العود المغشوش أو المستبدل أو الممثَّل به: أي الادعاءات ينبغي التحقق منها، وما الوثائق التي تُطلب، وماذا لا تثبته أي وثيقة بمفردها.',
      },
      {
        slug: 'quality/oud-authenticity-protocol',
        label: 'The OudGuide oud authenticity protocol',
        labelAr: 'بروتوكول دليل العود للتحقق من أصالة العود',
        blurb: 'The five checks a buyer can run alone — resin, density, burn, scent persistence and price — in a fixed order, and the one laboratory test and one document that actually carry evidence on their own.',
        blurbAr: 'التحققات الخمس التي يجريها المشتري وحده — راتنج وكثافة وحرق وديمومة رائحة وسعر — بترتيب ثابت، مع الفحص المخبري الوحيد والوثيقة الوحيدة اللذين يحملان دليلًا فعلًا.',
      },
      {
        slug: 'quality/freshness-moisture-testing',
        label: 'Testing oud freshness and moisture',
        labelAr: 'اختبار حداثة العود ورطوبته',
        blurb: 'What moisture content and "freshness" actually do to oud, which checks are meaningful, and why none of them is a freshness test a buyer can run alone.',
        blurbAr: 'ما يفعله المحتوى الرطوبي و«الحداثة» فعلاً بالعود، وأي الفحوص ذات معنى، ولماذا لا شيء منها اختبار حداثة يستطيع المشتري تنفيذه وحده.',
      },
      {
        slug: 'quality/attar-quality-testing',
        label: 'Evaluating oud-based attar',
        labelAr: 'تقييم العود المقطّر (العود)',
        blurb: 'How to evaluate the quality of an oud-based attar: the carrier, the concentration, the smell test and the document that actually anchors it.',
        blurbAr: 'كيف تقيّم جودة عود العود: الحامل، والتركيز، وفحص الرائحة، والوثيقة التي ترسمه فعلا.',
      },
      {
        slug: 'quality/grade-label-dataset',
        label: 'The OudGuide grade-label dataset',
        labelAr: 'مُجموع دليل العود لتسميات الدرجات',
        blurb: 'A dated, documented catalogue of the grade labels actually in commercial use in the Gulf, collected by OudGuide from two live retail catalogues — and what it does and does not establish.',
        blurbAr: 'كتالوج موقوت موثّق من تسميات الدرجات المستعملة تجاريا فعلا في الخليج، جمعه دليل العود من كتالوجين تجاريين حيّين — وما يثبته وما لا يثبته.',
      },
      {
        slug: 'quality/gulf-price-baseline',
        label: 'The OudGuide price observation baseline',
        labelAr: 'خطّ الأساس لملاحظات الأسعار من دليل العود',
        blurb: 'A dated catalogue of the price bands observed in named public price lists, by documented origin and form, recorded 26 October 2026 — and what each observation does and does not establish.',
        blurbAr: 'سجلّ مؤرَّخ يضمّ نطاقات الأسعار المرصودة في قوائم أسعار علنية مسمّاة، بحسب المصدر والشكل الموثَّقَين، سُجِّل في 26 أكتوبر 2026 — وما تثبته كل ملاحظة وما لا تثبته.',
      },
      {
        slug: 'quality/oud-misdescription-warning-signs',
        label: 'Oud misdescription warning signs',
        labelAr: 'علامات التحذير من الوصف الخاطئ للعود',
        blurb: 'The signs where a claim does not fit the material: form, label and claim, and the check each one opens.',
        blurbAr: 'العلامات التي لا يلاءم فيها ادعاء المادة: الشكل والمسمى والادعاء، والفحص الذي تفتحها كل علامة.',
      },
      {
        slug: 'quality/natural-oil-blends-and-accords',
        label: 'Natural oil, blends and oud accords',
        labelAr: 'الزيت الطبيعي والمزيجات وأوز العود',
        blurb: 'What separates the three product types, and the label rules that say what a finished product must state.',
        blurbAr: 'ما يفرق بين أنواع المنتجات الثلاثة، وقواعد التسمية التي تقول ما يجب أن يصرح به المنتج المنتهى.',
      },
      {
        slug: 'quality/resin-measurement',
        label: 'Resin measurement and uncertainty',
        labelAr: 'قياس الراتنج والشك الذي يحمله',
        blurb: 'Why a resin-content claim is a property statement, not a measurement, and the record it stands beside.',
        blurbAr: 'لماذا ادعاء محتوى الراتنج عبارة صفة لا قياس، والسجل الذي يقف بجنبها.',
      },
      {
        slug: 'quality/vietnamese-trade-classifications',
        label: 'Vietnamese trade classifications',
        labelAr: 'تصنيفات التجارة الفيتنامية',
        blurb: 'The recorded Vietnamese market forms and grade vocabulary, and what a grading system the record does not name does not carry.',
        blurbAr: 'أشكال السوق الفيتنامي المسجلة ومفردات الدرجة، وما لا يحمله نظام تصنيف لم يسمه السجل.',
      },
      {
        slug: 'quality/treatment-disclosures',
        label: 'Reading treatment and preparation disclosures',
        labelAr: 'قراءة إفصاقات المعالجة والتحضير',
        blurb: 'What a disclosure is, what the record can check on it, and the claims the absence of a disclosure does not establish.',
        blurbAr: 'ما هو الإفصاح، وما يستطيع السجل فحصه عليه، والادعاءات التي لا يثبتها غياب الإفصاح.',
      },
      {
        slug: 'quality/boya-and-fat-oud-grades',
        label: 'Boya Oud, White Wood Wax, and Fat Oud Classifications',
        labelAr: 'عود البويا وشمع الخشب الأبيض وتصنيفات العود المشحم',
        blurb: 'What Boya wood, Boya oil, and Fat Oud (Oud Mushaham) represent in commercial trade: extraction methods, natural fatty acid fractions versus tallow adulteration, and analytical verification.',
        blurbAr: 'ما يمثّله خشب البويا وزيت البويا والعود المشحم في التجارة: الأصول النباتية، وطرق الاستخلاص، والأحماض الدهنية الطبيعية مقابل الغش بالشحوم، والتحقق المخبري.',
      },
      {
        slug: 'quality/aged-vintage-dehn-al-oud',
        label: 'Aged Dehn Al Oud (Moattaq & Qadeem)',
        labelAr: 'دهن العود المعتق والقديم',
        blurb: 'The science, chemistry and market valuation of naturally matured vintage oud oil.',
        blurbAr: 'علم وكيمياء والتقييم السوقي لدهن العود المعتق طبيعياً عبر السنين.',
      },
    ],
    nextSteps: ['Learn what a laboratory report actually covers', 'Learn the limits of assessment', 'See how to evaluate a questionable offer'],
    nextStepsAr: ['اعرف ما الذي يغطيه التقرير المخبري فعلاً', 'اعرف حدود التقييم', 'تعلّم كيف تقيّم عرضاً مشكوكاً فيه'],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014', 'CITES_AGARWOOD_2004', 'ITTO_AGARWOOD_REVIEW'],
  },
  {
    slug: 'sourcing',
    related: [
      { slug: 'buying', label: 'Buying', labelAr: 'الشراء' },
      { slug: 'trade', label: 'Trade', labelAr: 'التجارة' },
    ],
    title: 'Sourcing',
    titleAr: 'التوريد',
    summary: 'Wholesale process, sampling, quotations and how supplier introductions work.',
    summaryAr: 'عملية التوريد بالجملة، والعيّنات، وعروض الأسعار، وكيف تعمل تعريفات الموردين.',
    directAnswer:
      'The Sourcing section covers the wholesale half of OudGuide: how to structure a sample set, how to read a quotation, what a supplier\'s minimum quantity means in practice, and how an introduction to a named supplier is granted and withdrawn. It is written for buyers who need a documented basis for their decisions rather than a list of suppliers to browse.',
    directAnswerAr:
      'يغطي قسم التوريد جانب الجملة في دليل العود: كيف تُبنى مجموعة عينات، وكيف يُقرأ عرض السعر، وما الذي يعنيه الحد الأدنى للطلب عملياً، وكيف يُمنح تعريف المورد بعينه وكيف يُسحب. وهو مكتوب لمن يشتري ويحتاج أساساً موثقاً لقراراته لا لقائمة موردين يتصفحها.',
    scope:
      'This section explains process and paperwork. It does not name preferred suppliers, publish prices, or promise that any particular lot is available.',
    scopeAr:
      'يشرح هذا القسم العملية والأوراق. ولا يرشّح موردين، ولا ينشر أسعاراً، ولا يَعِد بتوفر أي لوط بعينه.',
    children: [
      {
        slug: 'sourcing/wholesale-sample-plan',
        label: 'Build a wholesale oud sample plan',
        labelAr: 'بناء خطة عيّنات للشراء بالجملة',
        blurb: 'Define, label, compare, record, and tie a bulk order to the batch you sampled.',
        blurbAr: 'حدّد العيّنات وسمّها وقارنها ووثّقها، واربط طلب الجملة بالدفعة التي عيّنتها.',
      },
      {
        slug: 'sourcing/how-supplier-introductions-work',
        label: 'Understand supplier introductions and lead fees',
        labelAr: 'كيف تعمل تعريفات المزودين ورسوم الفرص',
        blurb: 'Who sees what, when your details are released, and what a fee does not buy.',
        blurbAr: 'من يرى ماذا، ومتى تُسلَّم بياناتك، وما الذي لا تشتريه الرسوم.',
      },
      {
        slug: 'sourcing/comparing-supplier-quotes',
        label: 'Compare supplier quotations without assuming equivalence',
        labelAr: 'قارن عروض الأسعار دون افتراض التكافؤ',
        blurb: 'Why two quotations for the same words are rarely for the same material.',
        blurbAr: 'لماذا لا يكون عرضان بالسعر نفسه غالباً لنفس المادة.',
      },
      {
        slug: 'sourcing/supplier-origin-destination',
        label: 'Seller location, material origin and buyer destination',
        labelAr: 'موقع البائع ومنشأ المادة ووجهة المشتري',
        blurb: 'Why a business address is not a production facility and not a shipping capability.',
        blurbAr: 'لماذا عنوان المنشأة ليس منشأة إنتاج ولا قدرة على الشحن.',
      },
      {
        slug: 'sourcing/packaging-and-repeat-orders',
        label: 'Packaging and repeat-order specifications',
        labelAr: 'مواصفات التغليف والطلبات المتكررة',
        blurb: 'What a repeat-order specification states, and why the consistency comes from the buyer’s own record, not a settled price.',
        blurbAr: 'ما تقرر مواصفة الطلب المتكرر، ولماذا الاتساق من سجل المشتري الخاص، ليس سعرا محسوما.',
      },
      {
        slug: 'sourcing/private-label-requirements',
        label: 'Prepare a private-label perfume brief',
        labelAr: 'تجهيز موجز عطر خاص بالعلامة',
        blurb: 'The brief’s three sides on the record, and the boundary between the brief and the maker’s statement.',
        blurbAr: 'الجوانب الثلاثة للموجز على السجل، والحد بين الموجز وعبارة الصانع.',
      },
      {
        slug: 'sourcing/choosing-a-distiller',
        label: 'Questions for a distillation supplier',
        labelAr: 'أسئلة لمورّد التقطير',
        blurb: 'The questions a distillation buyer asks and the checks each one opens, rather than a settled fact each answer carries.',
        blurbAr: 'الأسئلة التي يسألها مشتري التقطير والفحوصات التي تفتحها كل واحدة، لا حقيقة محسومة تحملها كل إجابة.',
      },
      {
        slug: 'sourcing/wholesale-vs-retail-buying-guide',
        label: 'Wholesale versus retail oud buying: the B2B playbook',
        labelAr: 'دليل الشراء بالجملة مقابل التجزئة: منهج الأعمال',
        blurb: 'How retail tolas and wholesale kilograms differ, and what CITES permits, baggage exemptions, and a GC-MS certificate of analysis obligate a bulk buyer to verify.',
        blurbAr: 'كيف تختلف التولّات التجزيرية عن الكيلوغرامات الجملة، وما الذي يلزم المشتري بالجملة التحقق منه من تراخيص الاتفاقيات والإعفاءات الجمركية وشهادة التحليل المخبري.',
      },
    ],
    nextSteps: ['Build a sample plan', 'Understand how introductions are granted', 'Compare quotations properly'],
    nextStepsAr: ['ابنِ خطة عيّنات', 'اعرف كيف تُمنح التعريفات', 'قارن عروض الأسعار على الوجه الصحيح'],
    sourceIds: ['AGARWOOD_CITES_2022', 'CITES_APPENDICES', 'POWO_AQUILARIA_CRASSNA'],
  },
  {
    slug: 'buying',
    related: [
      { slug: 'sourcing', label: 'Sourcing', labelAr: 'التوريد' },
      { slug: 'quality', label: 'Quality', labelAr: 'الجودة' },
    ],
    title: 'Buying',
    titleAr: 'الشراء',
    summary: 'Framesworks for choosing and evaluating oud, wood, oil and fragrance.',
    summaryAr: 'أطر لاختيار العود والخشب والزيت والعطر وتقييمها.',
    directAnswer:
      'The Buying section is written as a set of decision frameworks rather than a set of recommendations. It covers how to choose between formats, how to evaluate a supplier\'s information, how to compare offers, and what to ask before you pay. Each page is written to be used at a specific point in a purchase, so read the one that matches where you are rather than the whole section in order.',
    directAnswerAr:
      'كُتب قسم الشراء في صورة أطر قرار لا توصيات. ويغطي الاختيار بين الأشكال، وتقييم معلومات المورد، ومقارنة العروض، وما الذي تسأل عنه قبل الدفع. وكل صفحة مكتوبة لتُستخدم عند نقطة محددة في عملية الشراء، فاقرأ ما يطابق موقعك منها لا القسم كله بالترتيب.',
    scope:
      'Nothing in this section is a recommendation of a particular seller, price or origin. The frameworks are deliberately general so they can be applied to any offer.',
    scopeAr:
      'لا شيء في هذا القسم توصية ببائع أو سعر أو منشأ بعينه. والأطر عامة عمداً لتُطبَّق على أي عرض.',
    children: [
      {
        slug: 'buying/how-to-buy-oud',
        label: 'How to buy oud: first, which oud you mean',
        labelAr: 'كيف تشترِي العود: أوّلًا، أيّ عود تقصد',
        blurb: 'The word names two products — the fragrant resinous wood and the stringed instrument. This page tells you which one you are buying, and, if the fragrance, how to buy it well.',
        blurbAr: 'تسمّي الكلمة منتجين: الخشب الراتنجي العطري والأداة الوترية. وتبيّن هذه الصفحة أيّهما تشتري، فإن كان العطر، كيف تشتريه على الوجه الصحيح.',
      },
      {
        slug: 'buying/choosing-oud-wood',
        label: 'Choosing an oud wood purchase',
        labelAr: 'اختيار شراء خشب عود',
        blurb: 'What matters when buying wood, and which claims to press on.',
        blurbAr: 'ما يهم عند شراء الخشب، وأي الادعاءات ينبغي الضغط عليها.',
      },
      {
        slug: 'buying/choosing-oud-oil',
        label: 'Choosing an oud oil purchase',
        labelAr: 'اختيار شراء دهن عود',
        blurb: 'Concentration, carrier, ageing and the questions that separate two oils.',
        blurbAr: 'التركيز والحامل والتعتيق والأسئلة التي تفصل بين زيتين.',
      },
      {
        slug: 'buying/evaluating-an-offer',
        label: 'Evaluating a questionable offer',
        labelAr: 'تقييم عرض مشكوك فيه',
        blurb: 'A structured way to test an offer that looks too good.',
        blurbAr: 'طريقة منظمة لاختبار عرض يبدو أفضل من اللازم.',
      },
      {
        slug: 'buying/supplier-questions',
        label: 'What to ask a supplier',
        labelAr: 'ما الذي تسأل المورد',
        blurb: 'The questions that get answered by a capable supplier and avoided by others.',
        blurbAr: 'الأسئلة التي يجيب عنها مورد كفء ويتفاداها غيره.',
      },
      // The country buying guides, then the two purchase-shape pages.
      //
      // The 36 country guides were sitemap-only until now: no hub
      // children list referenced buying/in/, so every one of them had
      // zero inbound links (audit §3.1). The children list is the
      // section's table of contents, and the encyclopedia index
      // renders it, so listing them here is what makes them reachable
      // without a sitemap.
      //
      // hubChildren() drops any child whose article is not reviewed,
      // so a slug that is added here before its article is finished
      // stays out of the rendered list without a per-entry gate here.
      {
        slug: 'buying/in/saudi-arabia',
        label: 'Buying oud and fragrance in Saudi Arabia',
        labelAr: 'شراء العود والعطور في المملكة العربية السعودية',
        blurb: 'Buying oud and natural fragrance in Saudi Arabia: the retail souks, wholesale procurement, and import permit requirements.',
        blurbAr: 'شراء العود والعطور الطبيعية في المملكة العربية السعودية: أسواق التجزئة، والتوريد بالجملة، واشتراطات تصاريح الاستيراد.',
      },
      {
        slug: 'buying/in/qatar',
        label: 'Buying oud and fragrance in Qatar',
        labelAr: 'شراء العود والعطور في قطر',
        blurb: 'Procuring agarwood and artisan oils in Qatar: import controls, retail souk standards, and commercial documentation.',
        blurbAr: 'توريد خشب العود والزيوت الحرفية في قطر: ضوابط الاستيراد، ومعايير أسواق التجزئة، والوثائق التجارية.',
      },
      {
        slug: 'buying/in/kuwait',
        label: 'Buying oud and fragrance in Kuwait',
        labelAr: 'شراء العود والعطور في الكويت',
        blurb: 'Commercial and connoisseur oud buying in Kuwait: trade routes, import licensing, and batch verification.',
        blurbAr: 'شراء العود التجاري والفاخر في الكويت: مسارات التجارة، وتراخيص الاستيراد، والتحقق من الدفعات.',
      },
      {
        slug: 'buying/in/bahrain',
        label: 'Buying oud and fragrance in Bahrain',
        labelAr: 'شراء العود والعطور في البحرين',
        blurb: 'Navigating agarwood sourcing in Bahrain: import protocols, artisan perfumery, and wholesale verification.',
        blurbAr: 'دليل توريد العود في البحرين: بروتوكولات الاستيراد، وصناعة العطور الحرفية، والتحقق من الجملة.',
      },
      {
        slug: 'buying/in/oman',
        label: 'Buying oud and fragrance in Oman',
        labelAr: 'شراء العود والعطور في عُمان',
        blurb: 'Sourcing natural oud and botanical resins in Oman: import regulations, heritage perfumery, and supplier vetting.',
        blurbAr: 'توريد العود الطبيعي والراتنجات النباتية في عُمان: لوائح الاستيراد، والعطور التراثية، والتحقق من الموردين.',
      },
      {
        slug: 'buying/in/united-kingdom',
        label: 'Buying oud and fragrance in United Kingdom',
        labelAr: 'شراء العود والعطور في المملكة المتحدة',
        blurb: 'Buying oud and exotic fragrance in the UK: import licensing, port inspections, and commercial compliance.',
        blurbAr: 'شراء العود والعطور النادرة في المملكة المتحدة: تراخيص الاستيراد، والفحص الجمركي، والامتثال التجاري.',
      },
      {
        slug: 'buying/in/united-states',
        label: 'Buying oud and fragrance in United States',
        labelAr: 'شراء العود والعطور في الولايات المتحدة',
        blurb: 'Procuring agarwood in the United States: USDA permits, designated port entry, and CITES enforcement.',
        blurbAr: 'توريد خشب العود في الولايات المتحدة: تراخيص وزارة الزراعة الأمريكية، والمنافذ المحددة، وتنفيذ سايتس.',
      },
      {
        slug: 'buying/in/canada',
        label: 'Buying oud and fragrance in Canada',
        labelAr: 'شراء العود والعطور في كندا',
        blurb: 'Purchasing agarwood and perfume materials in Canada: Environment Canada permits and wholesale verification.',
        blurbAr: 'شراء خشب العود ومواد العطور في كندا: تراخيص وزارة البيئة الكندية والتحقق من الجملة.',
      },
      {
        slug: 'buying/in/australia',
        label: 'Buying oud and fragrance in Australia',
        labelAr: 'شراء العود والعطور في أستراليا',
        blurb: 'Importing agarwood into Australia: dual-permit requirements, biosecurity clearance, and trade standards.',
        blurbAr: 'استيراد خشب العود إلى أستراليا: اشتراطات الترخيص المزدوج، والتخليص الحيوي، ومعايير التجارة.',
      },
      {
        slug: 'buying/in/germany',
        label: 'Buying oud and fragrance in Germany',
        labelAr: 'شراء العود والعطور في ألمانيا',
        blurb: 'Commercial agarwood sourcing in Germany: Federal Agency for Nature Conservation permits and EU Annex B regulations.',
        blurbAr: 'التوريد التجاري لخشب العود في ألمانيا: تراخيص الوكالة الاتحادية لحماية الطبيعة ولوائح الملحق ب الأوروبي.',
      },
      {
        slug: 'buying/in/france',
        label: 'Buying oud and fragrance in France',
        labelAr: 'شراء العود والعطور في فرنسا',
        blurb: 'Sourcing agarwood and precious extracts in France: Grasse compounding standards, EU CITES permits, and artisan quality.',
        blurbAr: 'توريد خشب العود والمستخلصات الثمينة في فرنسا: معايير غراس العطرية، وتراخيص سايتس الأوروبية، والجودة الحرفية.',
      },
      {
        slug: 'buying/in/italy',
        label: 'Buying oud and fragrance in Italy',
        labelAr: 'شراء العود والعطور في إيطاليا',
        blurb: 'Procuring oud materials in Italy: Carabinieri forestry inspection, EU border controls, and niche fragrance trade.',
        blurbAr: 'توريد مواد العود في إيطاليا: تفتيش الحرس البيئي، والضوابط الحدودية الأوروبية، وتجارة العطور المتخصصة.',
      },
      {
        slug: 'buying/in/spain',
        label: 'Buying oud and fragrance in Spain',
        labelAr: 'شراء العود والعطور في إسبانيا',
        blurb: 'Buying oud in Spain: Ministry of Ecological Transition permitting, European trade channels, and perfume manufacturing.',
        blurbAr: 'شراء خشب العود في إسبانيا: تصاريح وزارة التحول البيئي، وقنوات التجارة الأوروبية، وتصنيع العطور.',
      },
      {
        slug: 'buying/in/netherlands',
        label: 'Buying oud and fragrance in Netherlands',
        labelAr: 'شراء العود والعطور في هولندا',
        blurb: 'Importing agarwood through the Netherlands: Rotterdam port logistics, EU customs clearance, and botanical compliance.',
        blurbAr: 'استيراد خشب العود عبر هولندا: لوجستيات ميناء روتردام، والتخليص الجمركي الأوروبي، والامتثال النباتي.',
      },
      {
        slug: 'buying/in/sweden',
        label: 'Buying oud and fragrance in Sweden',
        labelAr: 'شراء العود والعطور في السويد',
        blurb: 'Purchasing agarwood and artisan fragrance in Sweden: Swedish Board of Agriculture permits and Nordic distribution.',
        blurbAr: 'شراء خشب العود والعطور الحرفية في السويد: تراخيص مجلس الزراعة السويدي والتوزيع في بلدان الشمال.',
      },
      {
        slug: 'buying/in/switzerland',
        label: 'Buying oud and fragrance in Switzerland',
        labelAr: 'شراء العود والعطور في سويسرا',
        blurb: 'Sourcing agarwood in Switzerland: Federal Food Safety and Veterinary Office permits and fine perfumery sourcing.',
        blurbAr: 'توريد خشب العود في سويسرا: تصاريح المكتب الفيدرالي لسلامة الأغذية والبيطرة وتوريد العطور الراقية.',
      },
      {
        slug: 'buying/in/austria',
        label: 'Buying oud and fragrance in Austria',
        labelAr: 'شراء العود والعطور في النمسا',
        blurb: 'Oud procurement in Austria: Federal Ministry for Climate Action permits and Central European fragrance trade.',
        blurbAr: 'توريد خشب العود في النمسا: تصاريح الوزارة الفيدرالية للعمل المناخي وتجارة العطور في وسط أوروبا.',
      },
      {
        slug: 'buying/in/belgium',
        label: 'Buying oud and fragrance in Belgium',
        labelAr: 'شراء العود والعطور في بلجيكا',
        blurb: 'Importing agarwood into Belgium: Federal Public Service Health permits and Antwerp logistics channels.',
        blurbAr: 'استيراد خشب العود إلى بلجيكا: تصاريح الخدمة العامة الاتحادية للصحة وقنوات ميناء أنتويرب اللوجستية.',
      },
      {
        slug: 'buying/in/ireland',
        label: 'Buying oud and fragrance in Ireland',
        labelAr: 'شراء العود والعطور في أيرلندا',
        blurb: 'Buying natural oud in Ireland: National Parks and Wildlife Service permits and boutique perfumery sourcing.',
        blurbAr: 'شراء العود الطبيعي في أيرلندا: تصاريح هيئة المتنزهات الوطنية والحياة الفطرية وتوريد العطور المستقلة.',
      },
      {
        slug: 'buying/in/turkiye',
        label: 'Buying oud and fragrance in Türkiye',
        labelAr: 'شراء العود والعطور في تركيا',
        blurb: 'Navigating agarwood sourcing in Türkiye: Istanbul spice bazaar traditions, transit trade, and Ministry permits.',
        blurbAr: 'دليل توريد خشب العود في تركيا: تقاليد بازار إسطنبول، وتجارة الترانزيت، وتصاريح الوزارة.',
      },
      {
        slug: 'buying/in/india',
        label: 'Buying oud and fragrance in India',
        labelAr: 'شراء العود والعطور في الهند',
        blurb: 'Commercial buying of oud in India: Assam distillation hubs, Legal Procurement Certificates, and domestic trade rules.',
        blurbAr: 'الشراء التجاري للعود في الهند: مراكز التقطير في أسام، وشهادات الشراء القانوني، وقواعد التجارة المحلية.',
      },
      {
        slug: 'buying/in/bangladesh',
        label: 'Buying oud and fragrance in Bangladesh',
        labelAr: 'شراء العود والعطور في بنغلاديش',
        blurb: 'Buying agarwood in Bangladesh: Sylhet plantation cottage industry, export licensing, and authentic oil sourcing.',
        blurbAr: 'شراء العود في بنغلاديش: صناعة مزارع سيلهيت العائلية، وتراخيص التصدير، وتوريد الزيت الأصيل.',
      },
      {
        slug: 'buying/in/pakistan',
        label: 'Buying oud and fragrance in Pakistan',
        labelAr: 'شراء العود والعطور في باكستان',
        blurb: 'Procuring oud and oriental fragrance in Pakistan: Karachi wholesale souks, attar houses, and import protocols.',
        blurbAr: 'توريد خشب العود والعطور الشرقية في باكستان: أسواق الجملة في كراتشي، ودور العطور، وبروتوكولات الاستيراد.',
      },
      {
        slug: 'buying/in/malaysia',
        label: 'Buying oud and fragrance in Malaysia',
        labelAr: 'شراء العود والعطور في ماليزيا',
        blurb: 'Buying Malaysian gaharu: forestry licensing, wild harvest quotas, plantation stock, and export clearance.',
        blurbAr: 'شراء عود الغاهارو الماليزي: ترخيص الغابات، وحصص الجمع البري، وأشجار المزارع، والتخليص التصديري.',
      },
      {
        slug: 'buying/in/singapore',
        label: 'Buying oud and fragrance in Singapore',
        labelAr: 'شراء العود والعطور في سنغافورة',
        blurb: 'Procuring agarwood through Singapore: NParks transit licensing, trading houses, and re-export compliance.',
        blurbAr: 'توريد خشب العود عبر سنغافورة: تراخيص الترانزيت، ودور التجارة، والامتثال لإعادة التصدير.',
      },
      {
        slug: 'buying/in/indonesia',
        label: 'Buying oud and fragrance in Indonesia',
        labelAr: 'شراء العود والعطور في إندونيسيا',
        blurb: 'Purchasing Indonesian gaharu: provincial quotas, Gyrinops and Aquilaria varieties, and export paperwork.',
        blurbAr: 'شراء العود الإندونيسي: الحصص الإقليمية، وتنوعات جيرينوبس وأكيلاريا، ووثائق التصدير الرسمية.',
      },
      {
        slug: 'buying/in/vietnam',
        label: 'Buying oud and fragrance in Vietnam',
        labelAr: 'شراء العود والعطور في فيتنام',
        blurb: 'Sourcing Vietnamese agarwood: Aquilaria crassna plantations, artisan distillation, and CITES export clearance.',
        blurbAr: 'توريد خشب العود الفيتنامي: مزارع أكيلاريا كراسنا، والتقطير الحرفي، وتخليص تصاريح التصدير.',
      },
      {
        slug: 'buying/in/thailand',
        label: 'Buying oud and fragrance in Thailand',
        labelAr: 'شراء العود والعطور في تايلاند',
        blurb: 'Buying Thai agarwood: Trat and Prachin Buri plantations, sustainable oil production, and Department of Agriculture permits.',
        blurbAr: 'شراء العود التايلاندي: مزارع ترات وبراشين بوري، وإنتاج الزيوت المستدام، وتراخيص وزارة الزراعة.',
      },
      {
        slug: 'buying/in/japan',
        label: 'Buying oud and fragrance in Japan',
        labelAr: 'شراء العود والعطور في اليابان',
        blurb: 'Procuring aromatic wood in Japan: Koh-do incense traditions, Kyoto historic houses, and import licensing.',
        blurbAr: 'توريد الأخشاب العطرية في اليابان: تقاليد بخور الكوه-دو، ودور كيوتو التاريخية، وتراخيص وزارة الاقتصاد والتجارة والصناعة.',
      },
      {
        slug: 'buying/in/china',
        label: 'Buying oud and fragrance in China',
        labelAr: 'شراء العود والعطور في الصين',
        blurb: 'Buying chenxiang in China: Hainan and Guangdong plantations, carving and medicinal markets, and National Forestry permits.',
        blurbAr: 'شراء عود التشن شيانغ في الصين: مزارع هاينان وغوانغدونغ، وأسواق النحت والطب الشعبي، وتراخيص هيئة الغابات.',
      },
      {
        slug: 'buying/in/south-korea',
        label: 'Buying oud and fragrance in South Korea',
        labelAr: 'شراء العود والعطور في كوريا الجنوبية',
        blurb: 'Purchasing agarwood in South Korea: Ministry of Environment CITES protocols, herbal medicine, and modern fragrance.',
        blurbAr: 'شراء خشب العود في كوريا الجنوبية: بروتوكولات وزارة البيئة، والطب العشبي، وصناعة العطور الحديثة.',
      },
      {
        slug: 'buying/in/south-africa',
        label: 'Buying oud and fragrance in South Africa',
        labelAr: 'شراء العود والعطور في جنوب أفريقيا',
        blurb: 'Importing agarwood into South Africa: Department of Forestry and Environment permits, and luxury perfumery channels.',
        blurbAr: 'استيراد خشب العود إلى جنوب أفريقيا: تصاريح وزارة الغابات والبيئة، وقنوات العطور الفاخرة.',
      },
      {
        slug: 'buying/in/egypt',
        label: 'Buying oud and fragrance in Egypt',
        labelAr: 'شراء العود والعطور في مصر',
        blurb: 'Commercial oud procurement in Egypt: Khan el-Khalili perfumery traditions, Cairo wholesale, and Ministry clearances.',
        blurbAr: 'التوريد التجاري للعود في مصر: تقاليد خان الخليلي العطرية، وتجارة الجملة بالقاهرة، وتصاريح الوزارة.',
      },
      {
        slug: 'buying/in/morocco',
        label: 'Buying oud and fragrance in Morocco',
        labelAr: 'شراء العود والعطور في المغرب',
        blurb: 'Purchasing agarwood and incense in Morocco: Medina souk culture, ceremonial usage, and import documentation.',
        blurbAr: 'شراء خشب العود والبخور في المغرب: ثقافة أسواق المدن العتيقة، والاستخدامات الاحتفالية، ووثائق الاستيراد.',
      },
      {
        slug: 'buying/in/brazil',
        label: 'Buying oud and fragrance in Brazil',
        labelAr: 'شراء العود والعطور في البرازيل',
        blurb: 'Importing agarwood into Brazil: IBAMA regulatory oversight, Latin American perfumery, and CITES compliance.',
        blurbAr: 'استيراد خشب العود إلى البرازيل: الرقابة التنظيمية لمعهد إيباما، وصناعة العطور في أمريكا اللاتينية، والامتثال لسايتس.',
      },
      {
        slug: 'buying/in/united-arab-emirates',
        label: 'Buying oud and fragrance in United Arab Emirates',
        labelAr: 'شراء العود والعطور في الإمارات العربية المتحدة',
        blurb: 'What a buyer in the UAE needs to check, where the trade is concentrated, and what the documentation situation is for material arriving.',
        blurbAr: 'ما يحتاج المشتري في الإمارات إلى التحقق منه، وأين يتركز السوق، وحالة الوثائق للمادة الواردة.',
      },
      {
        slug: 'buying/wholesale-versus-retail',
        label: 'Wholesale versus retail purchasing',
        labelAr: 'الشراء بالجملة مقابل التجزئة',
        blurb: 'When retail is the cheaper route, when it is not, and what each is actually buying.',
        blurbAr: 'متى يكون التجزئة أرخص، ومتى لا يكون، وما الذي تشتريه كل واحدة في الواقع.',
      },
      {
        slug: 'buying/oud-oil-price-framework',
        label: 'A buyer\'s framework for oud oil price',
        labelAr: 'إطار المشتري لسعر زيت العود',
        blurb: 'How to build a price-per-gram framework for oud oil from documented data, and why no single price is a market truth.',
        blurbAr: 'كيف تبني إطاراً للسعر بال غرام لزيت العود من بيانات موثقة، ولماذا لا يكون سعر واحد حقيقة سوقية.',
      },
      {
        slug: 'buying/oud-price-comparison',
        label: 'A framework for comparing oud prices',
        labelAr: 'إطار للمقارنة بين أسعار العود',
        blurb: 'What a price comparison can honestly do: the four conditions under two figures, and why it does not close in a number.',
        blurbAr: 'ما تستطيع مقارنة السعر فعله بصدق: الظروف الأربعة تحت رقما، ولماذا لا تقفل برقم.',
      },
      {
        slug: 'buying/assessing-suppliers',
        label: 'Assessing supplier information',
        labelAr: 'تقييم معلومات الموردين',
        blurb: 'What the record supports as a check on a supplier’s claims, and why each claim is a word to check, not a fact to accept.',
        blurbAr: 'ما يدعمه السجل كشك على ادعاءات المورّد، ولماذا كل ادعاء عبارة تمحص، ليست حقيقة تقبل.',
      },
      {
        slug: 'buying/online-and-in-person',
        label: 'Online versus in-person buying',
        labelAr: 'الشراء عبر الإنترنت مقابل الشراء حضوريا',
        blurb: 'The two lanes the record carries, and the check the buyer does in each rather than assuming a lane guarantees the other.',
        blurbAr: 'الحومتان اللتان يحملهما السجل، والفحص الذي يفعله المشتري في كل بدل افتراض أن حومة ضمانة لآخرى.',
      },
      {
        slug: 'buying/beads-and-carvings',
        label: 'Buying beads and carvings',
        labelAr: 'شراء المسبحة والمنحوتات',
        blurb: 'What the record supports on beads and carvings, and the checks a buyer does on the lot rather than on the form’s promise.',
        blurbAr: 'ما يدعمه السجل على المسبحة والمنحوتات، والفحوصات التي يفعلها المشتري على اللوط لا على وعد الشكل.',
      },
      {
        slug: 'buying/travel-and-oud-purchases',
        label: 'Buying during international travel',
        labelAr: 'الشراء أثناء السفر الدولي',
        blurb: 'The personal-carriage record and the two movements a buyer makes on it, and the checks the record does not settle.',
        blurbAr: 'سجل الحمل الشخصي والحركتان اللتان يفعلهما المشتري عليه، والفحوصات التي لا يحسمها السجل.',
      },
      {
        slug: 'buying/buying-perfume-oils',
        label: 'Buying perfume oils for the intended use',
        labelAr: 'شراء زيوت العطر للاستخدام المقصود',
        blurb: 'What the record supports on buying an oil for an intended use, and the label and record checks a purchase opens.',
        blurbAr: 'ما يدعمه السجل على شراء الزيت للاستخدام المقصود، وفحوصات الملصق والسجل التي تفتحها عملية الشراء.',
      },
      {
        slug: 'buying/choosing-a-gift',
        label: 'Choosing fragrance gifts without assumptions',
        labelAr: 'اختيار هدايا العطر دون افتراضات',
        blurb: 'What the record supports on choosing a fragrance gift, and the checks that keep a choice honest rather than decorative.',
        blurbAr: 'ما يدعمه السجل على اختيار هدية العطر، والفحوصات التي تبقي الاختيار صادقا لا زخرفيا.',
      },
    ],
    nextSteps: ['Choose a format', 'Learn what to ask', 'Learn how to evaluate an offer'],
    nextStepsAr: ['اختر الشكل', 'اعرف ما الذي تسأل', 'اعرف كيف تقيّم العرض'],
    sourceIds: ['AGARWOOD_CITES_2022', 'CITES_APPENDICES'],
  },
  {
    slug: 'production',
    related: [
      { slug: 'quality', label: 'Quality', labelAr: 'الجودة' },
      { slug: 'trade', label: 'Trade', labelAr: 'التجارة' },
    ],
    title: 'Production',
    titleAr: 'الإنتاج',
    summary: 'Distillation, extraction, yields and processing location.',
    summaryAr: 'التقطير والاستخلاص والمردود وموقع المعالجة.',
    directAnswer:
      'This section explains how wood becomes oil, and why the method, the plant and the location are three separate facts. Distillation equipment changes the character of the resulting oil; processing location changes what can be claimed about it; and neither is established by the appearance of the bottle.',
    directAnswerAr:
      'يشرح هذا القسم كيف يصير الخشب زيتاً، ولماذا الطريقة والنبات والموقع ثلاثة وقائع منفصلة. فتغيير جهاز التقطير يغيّر طابع الزيت الناتج، وتغيير موقع المعالجة يغيّر ما يمكن أن يُدَّعى عنه، ولا يثبت أيٌّ منهما مظهر القارورة.',
    scope:
      'This section describes processes. It does not state a yield figure for any species, region or method, because yield varies with the material, the equipment and the operator.',
    scopeAr:
      'يصف هذا القسم العمليات. ولا يذكر مردوداً لأي نوع أو منطقة أو طريقة، لأن المردود يختلف بحسب المادة والجهاز والمشغّل.',
    children: [
      {
        slug: 'production/oud-extraction-methods',
        label: 'Distillation and extraction comparisons',
        labelAr: 'مقارنات التقطير والاستخلاص',
        blurb: 'Copper deg, steam and hydro-distillation, and what each does to the result.',
        blurbAr: 'القدّ النحاسي والبخار والتقطير المائي، وما يفعله كل منها بالنتيجة.',
      },
      {
        slug: 'production/from-wood-to-oil',
        label: 'From material to oud oil',
        labelAr: 'من المادة إلى دهن العود',
        blurb: 'The steps between a resinous log and a bottle.',
        blurbAr: 'الخطوات بين جذع راتنجي وقارورة.',
      },
      {
        slug: 'production/processing-location',
        label: 'Why processing location is a separate fact',
        labelAr: 'لماذا موقع المعالجة واقعة منفصلة',
        blurb: 'Where a material was distilled is not the same as where it grew.',
        blurbAr: 'حيث قُطّر خشب يختلف عن حيث نما.',
      },
      {
        slug: 'production/oil-and-hydrosol',
        label: 'Oil and hydrosol are different products',
        labelAr: 'الزيت والحيدروسول منتجان مختلفان',
        blurb: 'What separates the two products on the record, and the side the record does not carry.',
        blurbAr: 'ما يفرق المنتجين على السجل، والجانب الذي لا يحمله السجل.',
      },
      {
        slug: 'production/distilled-oil-versus-extract',
        label: 'Distilled oil and other extracts',
        labelAr: 'الزيت المقطر والمستخلصات الأخرى',
        blurb: 'What separates the two forms on the record, and the extract’s own process record the register does not carry.',
        blurbAr: 'ما يفرق الشكلين على السجل، وسجل عمية المستخلص الخاص الذي لا يحمله الدفتر.',
      },
    ],
    nextSteps: ['Compare extraction methods', 'See how wood becomes oil', 'Understand processing location'],
    nextStepsAr: ['قارن بين طرق الاستخلاص', 'تابع كيف يصير الخشب زيتاً', 'افهم موقع المعالجة'],
    sourceIds: ['AGARWOOD_CITES_2022', 'CITES_APPENDICES', 'AGARWOOD_REVIEW_2014', 'CITES_AGARWOOD_2004'],
  },
  {
    slug: 'trade',
    related: [
      { slug: 'sourcing', label: 'Sourcing', labelAr: 'التوريد' },
      { slug: 'quality', label: 'Quality', labelAr: 'الجودة' },
    ],
    title: 'Trade',
    titleAr: 'التجارة',
    summary: 'Conservation status, documentation and shipping.',
    summaryAr: 'حالة الحماية والوثائق والشحن.',
    directAnswer:
      'This section covers the paperwork side of buying agarwood: which species are listed under CITES, what documentation a legitimate shipment carries, and what separating wood, oil and perfume means for the way each is shipped. It is written for buyers who need to know what a document does before they rely on it.',
    directAnswerAr:
      'يغطي هذا القسم جانب الأوراق في شراء العود: ما الأنواع المشمولة باتفاقية سايتس، وأي وثائق تحملها الشحنة المشروعة، وما معنى فصل الخشب والزيت والعطر في طريقة شحن كل منها. وهو مكتوب لمن يحتاج إلى معرفة ما تفعله الوثيقة قبل الاعتماد عليها.',
    scope:
      'This section describes instruments and documents, and it is not legal advice. Whether a particular shipment is lawful depends on the exporting country, the importing country and the species in question.',
    scopeAr:
      'يصف هذا القسم الأدوات والوثائق، وهو ليس استشارة قانونية. فمشروعية شحنة بعينها تعتمد على بلد التصدير وبلد الاستيراد والنوع المعني.',
    children: [
      {
        slug: 'trade/agarwood-documentation',
        label: 'Conservation and trade documentation',
        labelAr: 'وثائق الحماية والتجارة',
        blurb: 'CITES Appendix II, permits and what they establish.',
        blurbAr: 'ملحق سايتس الثاني، والتصاريح، وما تثبته.',
      },
      {
        slug: 'trade/document-review-limits',
        label: 'What reviewing a document can establish',
        labelAr: 'ما الذي يمكن لمراجعة وثيقة إثباته',
        blurb: 'Why a valid document is not the same as a verified material.',
        blurbAr: 'لماذا الوثيقة الصحيحة ليست هي المادة الموثّقة.',
      },
      {
        slug: 'trade/shipping-wood-oil-perfume',
        label: 'Why wood, oil and perfume need separate shipping checks',
        labelAr: 'لماذا يحتاج الخشب والزيت والعطر فحوص شحن منفصلة',
        blurb: 'Three products, three sets of considerations.',
        blurbAr: 'ثلاثة منتجات وثلاث مجموعات اعتبارات.',
      },
      {
        slug: 'trade/cites-import-by-market',
        label: 'CITES import by market: US, UAE and EU',
        labelAr: 'استيراد سايتس حسب السوق: الولايات المتحدة والإمارات والاتحاد الأوروبي',
        blurb: 'What a CITES Appendix II agarwood shipment needs for each of the US, UAE and EU markets, and where the paperwork chain actually constrains a lot.',
        blurbAr: 'ما الذي تحتاجه شحنة عود من ملحق سايتس الثاني في كل من أسواق الولايات المتحدة والإمارات والاتحاد الأوروبي، وأين تسلسلة الأوراق تقيد اللوط فعلا.',
      },
      {
        slug: 'trade/personal-travel-versus-commercial',
        label: 'Personal travel and commercial shipments',
        labelAr: 'السفر الشخصي والشحن التجاري',
        blurb: 'The two lanes the record carries and the check each one opens, and why a lane does not settle a movement.',
        blurbAr: 'الحومتان اللتان يحملهما السجل والفحص الذي تفتحه كل، ولماذا الحومة لا تحسم نقل.',
      },
    ],
    nextSteps: ['Read about the conservation framework', 'Learn what a document can establish', 'Separate the shipping checks by product'],
    nextStepsAr: ['اقرأ عن إطار الحماية', 'اعرف ما الذي تثبته الوثيقة', 'افصل فحوص الشحن بحسب المنتج'],
    sourceIds: ['AGARWOOD_CITES_2022', 'FAOLEX'],
  },
  {
    slug: 'using-oud',
    related: [
      { slug: 'products', label: 'Fragrance Product Families', labelAr: 'أصناف المنتجات العطرية' },
      { slug: 'fragrance', label: 'Fragrance', labelAr: 'العطور' },
    ],
    title: 'Using Oud',
    titleAr: 'استخدام العود',
    summary: 'Practical use: formats, equipment, application and storage.',
    summaryAr: 'الاستخدام العملي: الأشكال، والمعدات، والاستعمال، والتخزين.',
    directAnswer:
      'This section covers what to do with oud once you have it: how to burn chips, how to apply oil, which equipment suits which format, how to label and store samples, and what intended-use instructions actually obligate you to do.',
    directAnswerAr:
      'يغطي هذا القسم ما تفعله بالعود بعد أن يصير عندك: كيف تحرق الرقائق، وكيف تطبّق الزيت، وأي معدات تناسب أي شكل، وكيف تسمّي وتحفظ العينات، وما الذي تلتزم به فعلاً تعليمات الاستخدام المقصود.',
    scope:
      'Practical guidance only. It does not establish a safety standard, and it does not replace the supplier\'s own instructions for a specific product.',
    scopeAr:
      'إرشاد عملي فقط. ولا يضع معيار سلامة، ولا يحل محل تعليمات المورد الخاصة بمنتج بعينه.',
    children: [
      {
        slug: 'using-oud/using-oud-wood',
        label: 'Using oud wood with suitable equipment',
        labelAr: 'استخدام خشب العود بمعدات مناسبة',
        blurb: 'Heating methods, and why the equipment changes the result.',
        blurbAr: 'طرق التسخين، ولماذا تغيّر المعدات النتيجة.',
      },
      {
        slug: 'using-oud/skin-intended-fragrance-oils',
        label: 'Choosing and using skin-intended oils',
        labelAr: 'اختيار الزيوت المخصصة للبشرة واستخدامها',
        blurb: 'What an intended-use statement changes about how you may use a product.',
        blurbAr: 'ما الذي يغيّره بيان الاستخدام المقصود في طريقة استعمال المنتج.',
      },
      {
        slug: 'using-oud/label-and-store-samples',
        label: 'Label and organize samples',
        labelAr: 'تسمية العينات وتنظيمها',
        blurb: 'The labelling that makes a sample set usable later.',
        blurbAr: 'التسمية التي تجعل مجموعة العينات صالحة للاستخدام لاحقاً.',
      },
      {
        slug: 'using-oud/heater-and-charcoal-comparison',
        label: 'Heater and charcoal comparison',
        labelAr: 'مقارنة الحارق والفحم',
        blurb: 'The two recorded device forms and their running needs, and the performance claims the record does not carry.',
        blurbAr: 'شكلا الجهاز المسجلان واحتياجات تشغيلهما، وادعاءات الأداء التي لا يحسمها السجل.',
      },
      {
        slug: 'using-oud/agarwood-beads-and-objects',
        label: 'Beads and devotional objects',
        labelAr: 'المسبحة والأجسام التعبدية',
        blurb: 'The documented product forms and the devotional use stated as a recorded association, not a doctrinal fact.',
        blurbAr: 'أشكال المنتجات الموثقة، والاستخدام التعبدّي علاقا مسجّلة لا حقيقة عقدية.',
      },
      {
        slug: 'using-oud/how-to-burn-oud-and-bakhoor',
        label: 'How to burn oud and bakhoor',
        labelAr: 'كيف تحرق العود والبخور',
        blurb: 'The thermodynamics that separates resin vaporization from wood combustion, charcoal ash-bed technique, and precision electric heaters.',
        blurbAr: 'الفيزياء الكامنة التي تفصل تطاّر الراتنجات عن احتراق الخشب، وتقنية سرّة الرماد، وأجهزة التسخين الكهربائي الدقيقة.',
      },
    ],
    nextSteps: ['Choose the right equipment', 'Label your samples properly', 'Read intended-use instructions'],
    nextStepsAr: ['اختر المعدات المناسبة', 'سمِّ عيناتك بشكل صحيح', 'اقرأ تعليمات الاستخدام المقصود'],
    sourceIds: ['IFRA_CERT', 'CITES_APPENDICES', 'IFRA_APPLYING'],
  },
  {
    slug: 'fragrance',
    related: [
      { slug: 'culture', label: 'Culture', labelAr: 'الثقافة' },
      { slug: 'using-oud', label: 'Using Oud', labelAr: 'استخدام العود' },
    ],
    title: 'Fragrance',
    titleAr: 'العطور',
    summary: 'Oud in perfumery: notes, concentrations, accords and credits.',
    summaryAr: 'العود في العطور: النوتات، والتركيزات، والأوزات، والإسناد.',
    directAnswer:
      'This section is about oud as a perfumery material rather than as a botanical one. It covers how oud is described in a fragrance brief, what the concentration labels on a bottle mean, what an oud accord is and how it differs from the natural material, and how perfumer credits are documented.',
    directAnswerAr:
      'هذا القسم عن العود بوصفه مادة عطرية لا مادة نباتية. ويغطي كيفية وصف العود في موجز عطر، ومعنى ملصقات التركيز على القارورة، وما هو أوذ العود وكيف يختلف عن المادة الطبيعية، وكيف توثَّق أسماء العطارين.',
    scope:
      'This section concerns how fragrance is described and composed. It makes no claim that any particular material or accord meets any standard, and it does not certify any product.',
    scopeAr:
      'يتعلق هذا القسم بكيفية وصف العطور وتركيبها. ولا يدّعي أن مادة أو أوزاً بعينها يستوفي معياراً، ولا يوثّق أي منتج.',
    children: [
      {
        slug: 'fragrance/oud-in-perfumery',
        label: 'How oud is described in perfumery',
        labelAr: 'كيف يوصف العود في العطور',
        blurb: 'The vocabulary a fragrance brief uses, and where it is imprecise.',
        blurbAr: 'مفردات موجز العطر، وأين يكون غير دقيق.',
      },
      {
        slug: 'fragrance/concentration-labels',
        label: 'Understanding perfume concentration labels',
        labelAr: 'فهم ملصقات تركيز العطر',
        blurb: 'What parfum, EDP and EDT describe, and what they do not.',
        blurbAr: 'ما الذي تصفه عبارتا بارفان وEDP وEDT، وما لا تصفانه.',
      },
      {
        slug: 'fragrance/oud-accords',
        label: 'Oud accords in fragrance composition',
        labelAr: 'أوزات العود في تركيب العطور',
        blurb: 'What an accord is, and why it is not the natural material.',
        blurbAr: 'ما هو الأوز ولماذا ليس المادة الطبيعية.',
      },
      {
        slug: 'fragrance/oud-oil-vs-attar',
        label: 'Oud oil vs attar: what each actually is',
        labelAr: 'دهن العود مقابل العود: ما هو كلٌّ منهما فعلا',
        blurb: 'The difference between distilled oud oil, attar as a product form, and the sandalwood base they are built on — and why "oud oil" and "attar" are used interchangeably when they are not the same thing.',
        blurbAr: 'الفرق بين زيت العود المقطّر والعود بوصفه شكل منتج وقاعدة الصندل التي يُبنى عليها، ولماذا يُستعمل «دهن العود» و«العود» بالتبادل مع أنهما ليسا الشيء نفسه.',
      },
      {
        slug: 'fragrance/oud-in-the-fragrance-market',
        label: 'Oud in the fine fragrance market',
        labelAr: 'العود في سوق العطور الفاخرة',
        blurb: 'Where oud sits in the fine fragrance and perfumery market: who buys it, how it is used, and what the industry structure means for a buyer.',
        blurbAr: 'أين يقع العود في سوق العطور الفاخرة والعطر: من يشتريه، وكيف يُستعمل، وما الذي تعنيه بنية القطاع لمشتري.',
      },
      {
        slug: 'fragrance/bottle-variants-and-batches',
        label: 'Bottle variants, reformulations and batches',
        labelAr: 'أنواع الزجاجة وإعادة الصياغة والدفعات',
        blurb: 'What the record settles on the label and form sides of a bottle, and why a batch is the maker’s log, not a fact.',
        blurbAr: 'ما يحسمه السجل على جانبَي الملصق والشكل من زجاجة، ولماذا الدفعة سجل الصانع لا حقيقة.',
      },
      {
        slug: 'fragrance/musk-terminology',
        label: 'Musk terminology in fragrance',
        labelAr: 'مصطلحات المِسك في العطور',
        blurb: 'The term’s position on the two recorded sides, and the substance behind it the record does not state.',
        blurbAr: 'موضع الكلمة على الجانبين المسجلين، والمادة خلفها التي لا يقررها السجل.',
      },
      {
        slug: 'fragrance/sandalwood-versus-agarwood',
        label: 'Sandalwood and agarwood: different materials',
        labelAr: 'السنط والعنبر: مواد مختلفة',
        blurb: 'The two materials on the producing and regulation records, and the value order the record does not carry.',
        blurbAr: 'المادتان على سجلَي الإنتاج والضبط، وترتيب القيمة الذي لا يحمله السجل.',
      },
      {
        slug: 'fragrance/oud-blending-ratios',
        label: 'Blending oud: the framework, and the ratios the trade does not publish',
        labelAr: 'خلط العود: الإطار، والنِسَب التي لا ينشرها السوق',
        blurb: 'The recipe library, scoped to the evidence: the variables a ratio is not, the method a working mix must keep, and the limit, printed in full.',
        blurbAr: 'مكتبة الوصفات، مقيّدة بالدليل: متغيرات ليست النسبة، والطريقة التي يجب أن يحفظها الخليط العامل، والحدّ مطبوعاً بالكامل.',
      },
    ],
    nextSteps: ['Learn the perfumery vocabulary', 'Understand concentration labels', 'Learn what an accord is'],
    nextStepsAr: ['تعلّم مفردات العطور', 'افهم ملصقات التركيز', 'اعرف ما هو الأوز'],
    sourceIds: ['IFRA_CERT', 'IFRA_STANDARDS', 'IFRA_APPLYING'],
  },
  {
    slug: 'culture',
    related: [
      { slug: 'origins', label: 'Origins', labelAr: 'الأقاليم' },
      { slug: 'fragrance', label: 'Fragrance', labelAr: 'العطور' },
    ],
    title: 'Culture',
    titleAr: 'الثقافة',
    summary: 'How oud is used and understood across cultures.',
    summaryAr: 'كيف يُستخدم العود ويُفهم في الثقافات المختلفة.',
    directAnswer:
      'This section covers the cultural settings in which oud has been used, from Gulf and Islamic practice to Chinese, Japanese and Indian traditions, and the trade history that connects them. It is descriptive: it records how the material has been used and understood, and it does not evaluate religious practice.',
    directAnswerAr:
      'يغطي هذا القسم السياقات الثقافية التي استُخدم فيها العود، من الممارسات الخليجية والإسلامية إلى التقاليد الصينية واليابانية والهندية، والتاريخ التجاري الذي يصل بينها. وهو وصفي: يسجّل كيف استُخدمت المادة وكيف فُهمت، ولا يحكم على ممارسة دينية.',
    scope:
      'Cultural and trade history, described from published sources. Claims about particular ceremonies or periods are limited to what those sources record.',
    scopeAr:
      'تاريخ ثقافي وتجاري موصوف من مصادر منشورة. وتقتصر ادعاءات حول الاحتفالات أو الحقب على ما تسجله تلك المصادر.',
    children: [
      {
        slug: 'culture/oud-in-islamic-traditions',
        label: 'Oud in Islamic traditions',
        labelAr: 'العود في التقاليد الإسلامية',
        blurb: 'How oud appears in the recorded practice of the Gulf and beyond.',
        blurbAr: 'كيف يظهر العود في الممارسة المسجَّلة بالخليج وما حوله.',
      },
      {
        slug: 'culture/agarwood-trade-history',
        label: 'Agarwood trade through time',
        labelAr: 'تجارة العود عبر الزمن',
        blurb: 'The trade routes and terms that shaped the market.',
        blurbAr: 'طرق التجارة والمفردات التي شكّلت السوق.',
      },
      {
        slug: 'culture/agarwood-in-buddhist-traditions',
        label: 'Agarwood in Buddhist traditions',
        labelAr: 'العود في التقاليد البوذية',
        blurb: 'The recorded overlap of the trade with Buddhist regions, and the meaning claims the register does not carry.',
        blurbAr: 'التداخل المسجل بين التجارة والمناطق البوذية، وادعاءات المعنى التي لا يحملها السجل.',
      },
      {
        slug: 'culture/aguru-and-indian-traditions',
        label: 'Aguru and Indian fragrance traditions',
        labelAr: 'العنبر الهندي وتقاليد العطر في الهند',
        blurb: 'The recorded producing region and the trade term, and the cultural question the register leaves open.',
        blurbAr: 'منطقة الإنتاج المسجلة والمصطلح التجاري، وسؤال الثقافة الذي يتركه السجل مفتوحا.',
      },
      {
        slug: 'culture/arabian-hospitality-and-fragrance',
        label: 'Fragrance and Arabian hospitality',
        labelAr: 'العطر وكرم الضيافة العربية',
        blurb: 'The recorded market and material, and the cultural-meaning side the register does not record.',
        blurbAr: 'السوق والمادة المسجلان، وجانب المعنى الثقافي الذي لا يسجله السجل.',
      },
    ],
    nextSteps: ['Read about the trade history', 'Read about a specific cultural tradition'],
    nextStepsAr: ['اقرأ عن تاريخ التجارة', 'اقرأ عن تقليد ثقافي بعينه'],
    sourceIds: ['FAOLEX', 'TRAFFIC_UAE_AGARWOOD_TRADE'],
  },
  {
    slug: 'origins',
    related: [
      { slug: 'comparisons', label: 'Comparisons', labelAr: 'المقارنات' },
      { slug: 'trade', label: 'Trade', labelAr: 'التجارة' },
    ],
    title: 'Origins',
    titleAr: 'الأقاليم',
    summary: 'Region-specific material, terminology and trade context.',
    summaryAr: 'المادة والمفردات وسياق التجارة بحسب الإقليم.',
    directAnswer:
      'The Origins section covers agarwood by region: which species occur where, how the material is traded and described locally, and what a buyer should check when the origin is stated as a specific place rather than a country.',
    directAnswerAr:
      'يغطي قسم الأقاليم العود بحسب الإقليم: ما الأنواع التي توجد أين، وكيف تُتداول المادة وتُوصف محلياً، وما ينبغي أن يتحقق منه المشتري حين يُذكر المنشأ مكاناً بعينه لا بلداً.',
    scope:
      'Origin sections state what is documented for the region and what is not. A region page is not evidence that a supplier operates there or can ship from there.',
    scopeAr:
      'أقسام الأقاليم تذكر ما هو موثّق للإقليم وما هو ليس كذلك. وصفحة الإقليم ليست دليلاً على أن مورداً يعمل هناك أو يستطيع الشحن منها.',
    children: [
      {
        slug: 'origins/india',
        label: 'India and northeast origin guide',
        labelAr: 'دليل الهند ومنطقة الشمال الشرقي',
        blurb: 'The species, the regions and the trade vocabulary of the Indian subcontinent.',
        blurbAr: 'الأنواع والأقاليم ومفردات التجارة في شبه القارة الهندية.',
      },
      {
        slug: 'origins/india/assam',
        label: 'Assam: oud material and trade context',
        labelAr: 'أسام: مادة العود وسياق التجارة',
        blurb: 'A. agallocha, the north-east growing regions, and the copper-deg tradition.',
        blurbAr: 'A. agallocha ومناطق الشمال الشرقي النامية وتقليد القدّ النحاسي.',
      },
      // The origin-country pages. The region pages are not listed
      // here — each one is reached from its own country page's
      // related list, and a hub carrying 40 region cards would be a
      // wall rather than a table of contents.
      {
        slug: 'origins/vietnam',
        label: 'Vietnam origin guide',
        labelAr: 'دليل منشأ فيتنام',
        blurb: 'Aquilaria crassna in Vietnam: the species recorded, the plantation scale, the distillation tradition, and what a Vietnam origin claim needs behind it.',
        blurbAr: 'الـ Aquilaria crassna في فيتنام: الأنواع المسجَّلة، وحجم المزارع، وتقاليد التقطير، وما يحتاج إليه ادعاء منشأ فيتنام من أدلة.',
      },
      {
        slug: 'origins/indonesia',
        label: 'Indonesia origin guide',
        labelAr: 'دليل منشأ إندونيسيا',
        blurb: 'Gaharu in Indonesia: the widest species range of any country, the largest exporter, the plantation split, and the quotas that govern what leaves.',
        blurbAr: 'الغاهارو في إندونيسيا: أوسع نطاق نوعي في العالم، وأكبر بلد مصدِّر، وتقسيم المزارع، والحصص التي تحكم ما يغادر.',
      },
      {
        slug: 'origins/cambodia',
        label: 'Cambodia origin guide',
        labelAr: 'دليل منشأ كمبوديا',
        blurb: 'Aquilaria crassna in Cambodia: the Cardamom Mountains range, the restoration programme, the export record, and the limits of what the wild population supports.',
        blurbAr: 'الـ Aquilaria crassna في كمبوديا: نطاق جبال كارداموم، وبرنامج الاستعادة، وسجل التصدير، وحدود ما يدعمه المورد البري.',
      },
      {
        slug: 'origins/thailand',
        label: 'Thailand origin guide',
        labelAr: 'دليل منشأ تايلاند',
        blurb: 'Mai kritsana in Thailand: the all-plantation export position, the eastern growing provinces, the distillation method, and the documentation the country requires.',
        blurbAr: '«ماي كريتسانا» في تايلاند: موقع التصدير المزروع كله، والولايات النامية الشرقية، وطريقة التقطير، والوثائق التي يشترطها البلد.',
      },
      {
        slug: 'origins/laos',
        label: 'Laos origin guide',
        labelAr: 'دليل منشأ لاوس',
        blurb: 'Aquilaria crassna in Laos: the Indo-China range, a country outside CITES, a small recorded export, and a trade that runs through its neighbours.',
        blurbAr: 'الـ Aquilaria crassna في لاوس: نطاق الهند الصينية، وبلد خارج سايتس، وتصدير مسجَّل صغير، وتجارة تمرّ عبر جاراته.',
      },
      {
        slug: 'origins/malaysia',
        label: 'Malaysia origin guide',
        labelAr: 'دليل منشأ ماليزيا',
        blurb: 'Karas in Malaysia: five species across three CITES authorities, the twelve-grade system, the Sarawak and Sabah permit position, and the Borneo species nobody else records.',
        blurbAr: '«كراس» في ماليزيا: خمسة أنواع تحت ثلاث سلطات سايتس، ونظام الاثنتي عشرة درجة، وموقف تصاريح سارواك وساباه، وأنواع بورنيو التي لا يسجّلها غيرها.',
      },
      {
        slug: 'origins/sri-lanka',
        label: 'Sri Lanka origin guide',
        labelAr: 'دليل منشأ سريلانكا',
        blurb: 'Gyrinops walla in Sri Lanka: the one country in the range for a Gyrinops species, the wet-zone distribution, and the export position the ITTO review records.',
        blurbAr: 'جيرينوبس والّا في سريلانكا: البلد الوحيد في نطاق نوع من جيرينوبس، وتوزيع المنطقة الرطبة، وموقع التصدير الذي تسجّله مراجعة المنظمة الدولية.',
      },
      {
        slug: 'origins/papua-new-guinea',
        label: 'Papua New Guinea origin guide',
        labelAr: 'دليل منشأ بابوا غينيا الجديدة',
        blurb: 'Gaharu in Papua New Guinea: the Gyrinops end of the trade, the species recorded, the Middle East market that took it, and the harvest pressure behind it.',
        blurbAr: 'الغاهارو في بابوا غينيا الجديدة: طرف Gyrinops في التجارة، والأنواع المسجَّلة، وسوق الشرق الأوسط الذي استقبلها، وضغط الجمع وراءها.',
      },
      {
        slug: 'origins/myanmar',
        label: 'Myanmar origin guide',
        labelAr: 'دليل منشأ ميانمار',
        blurb: 'Aquilaria malaccensis in Myanmar: a range state with no recorded CITES trade, a reputation for material, and a border that the trade moves across.',
        blurbAr: 'الـ أكيلاريا مالاكينسيس في ميانمار: دولة نطاق بلا تجارة مسجَّلة في سايتس، وسمعة لمادة، وحدود تعبرها التجارة.',
      },
      {
        slug: 'origins/bangladesh',
        label: 'Bangladesh origin guide',
        labelAr: 'دليل منشأ بنغلاديش',
        blurb: 'The agar tree in Bangladesh: the Moulvibazar and Sylhet production centre, four centuries of smallholder cultivation, and an export record of almost nothing.',
        blurbAr: 'شجرة العود في بنغلاديش: مركز الإنتاج في مولفيبازار وسيلهيت، وأربعة قرون من الزراعة الصغيرة، وسجل تصدير يكاد يكون معدوماً.',
      },
      {
        slug: 'origins/china',
        label: 'China origin guide',
        labelAr: 'دليل منشأ الصين',
        blurb: 'Aquilaria sinensis in China: Hainan and Guangdong plantations, the published grading guide, the scale of the planted population, and the border questions.',
        blurbAr: 'الـ Aquilaria sinensis في الصين: مزارع هاينان وقوانغدونغ، ودليل التقييم المنشور، وحجم المزروع، وأسئلة الحدود.',
      },
      {
        slug: 'origins/philippines',
        label: 'Philippines origin guide',
        labelAr: 'دليل منشأ الفلبين',
        blurb: 'The Philippine agarwood species: six Aquilaria and Gyrinops names recorded for the islands, a species that is data deficient rather than merely rare, and a small recorded export.',
        blurbAr: 'أنواع العود في الفلبين: ستة أسماء من Aquilaria وGyrinops مسجَّلة لجزائرها، ونوع ناقص البيانات لا نادر فحسب، وتصدير مسجَّل صغير.',
      },
      {
        slug: 'origins/brunei',
        label: 'Brunei origin guide',
        labelAr: 'دليل منشأ بروناي',
        blurb: 'Three Aquilaria species in Borneo, a quota recorded for the material from the adjacent Indonesian provinces, and a country with no export of its own in the record.',
        blurbAr: 'ثلاثة أنواع من Aquilaria في بورنيو، وحصة مسجَّلة للمادة من الولايات الإندونيسية المجاورة، وبلد لا يظهر له تصدير في السجل.',
      },
      {
        slug: 'origins/bhutan',
        label: 'Bhutan origin guide',
        labelAr: 'دليل منشأ بوتان',
        blurb: 'Bhutan: a range state for two species, a country outside CITES, an assessed area suitable for cultivation, and CITES-recorded imports of 20 kilograms in 1995.',
        blurbAr: 'بوتان: دولة نطاق لنوعين، وبلد خارج سايتس، ومساحة مقيسة صالحة للزراعة، وواردات مسجَّلة لها في سايتس بلغت 20 كيلوجراما في 1995.',
      },
    ],
    nextSteps: ['Read the India origin guide', 'Read the Assam region page', 'See how origin and location differ'],
    nextStepsAr: ['اقرأ دليل الهند', 'اقرأ صفحة أسام', 'اعرف الفرق بين المنشأ والموقع'],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014', 'CITES_AGARWOOD_2004'],
  },
  {
    slug: 'comparisons',
    related: [
      { slug: 'origins', label: 'Origins', labelAr: 'الأقاليم' },
      { slug: 'quality', label: 'Quality', labelAr: 'الجودة' },
    ],
    title: 'Comparisons',
    titleAr: 'المقارنات',
    summary: 'Side-by-side comparison of origins and their claims.',
    summaryAr: 'مقارنة جنباً إلى جنب بين الأقاليم وادعاءاتها.',
    directAnswer:
      'The Comparisons section puts two origins side by side and states exactly what can and cannot be said about the difference between them. It is the place to check a claim of the form "this origin is better" before treating it as a fact.',
    directAnswerAr:
      'يضع قسم المقارنات إقليمين جنباً إلى جنب، ويذكر بدقة ما يمكن وما لا يمكن قوله عن الفرق بينهما. وهو المكان للتحقق من ادعاء من نوع «هذا الأصل أفضل» قبل أخذه بوصفه واقعة.',
    scope:
      'Comparison pages compare documented characteristics and stated claims. They do not rank origins and they do not assert a quality difference that no cited source establishes.',
    scopeAr:
      'صفحات المقارنة تقارن الصفات الموثّقة والادعاءات المعلنة. وهي لا ترتّب الأقاليم ولا تثبت فرق جودة لا يثبته أي مصدر مذكور.',
    children: [

      {
        slug: 'comparisons/vietnam-and-cambodia-oud',
        label: 'Comparing Vietnam and Cambodia oud claims',
        labelAr: 'مقارنة ادعاءات عود فيتنام وكمبوديا',
        blurb: 'Two countries that share their species set, that both export only plantation and home-garden material, and that differ in the scale they report and in how much of it is wild.',
        blurbAr: 'بلدان يتشاركان مجموعة الأنواع نفسها، ويصدّران معاً مادة المزارع والحدائق المنزلية فقط، ويختلفان في الحجم الذي يبلّغان عنه وفي مقدار ما هو بري منه.',
      },
      {
        slug: 'comparisons/malaysia-and-indonesia-oud',
        label: 'Comparing Malaysia and Indonesia oud claims',
        labelAr: 'مقارنة ادعاءات عود ماليزيا وإندونيسيا',
        blurb: 'The two largest agarwood exporters, the two countries where wild harvesting is still permitted under controls, and the two whose species lists overlap almost completely.',
        blurbAr: 'أكبر بلدين مصدِّرَين للعود، والبلدين الوحيدان اللذين ما زال الجمع البري مسموحاً فيهما بضوابط، والبلدان اللذين تتداخل قوائماهما نوعياً إلى حد كبير.',
      },
      {
        slug: 'comparisons/laos-and-vietnam-oud',
        label: 'Comparing Laos and Vietnam oud claims',
        labelAr: 'مقارنة ادعاءات عود لاوس وفيتنام',
        blurb: 'Two adjacent countries sharing a species set, one of them outside the permit system and the other inside it, and a border that the material crosses.',
        blurbAr: 'بلدان متجاوران يتشاركان مجموعة أنواع، أحدهما خارج نظام التصاريح والآخر داخله، وحدود تعبرها المادة.',
      },
      {
        slug: 'comparisons/sri-lanka-and-india-oud',
        label: 'Comparing Sri Lanka and India oud claims',
        labelAr: 'مقارنة ادعاءات عود سريلانكا والهند',
        blurb: 'Two countries that do not share a genus: the one range state for Gyrinops walla, and the one that holds most of the planted Aquilaria malaccensis.',
        blurbAr: 'بلدان لا يتشاركان جنساً: الدولة الوحيدة في نطاق جيرينوبس والّا، والدولة التي تملك معظم أكيلاريا مالاكينسيس المزروع.',
      },
      {
        slug: 'comparisons/thailand-and-cambodia-oud',
        label: 'Comparing Thailand and Cambodia oud claims',
        labelAr: 'مقارنة ادعاءات عود تايلاند وكمبوديا',
        blurb: 'The country that proposed the listing and exports only plantation material, against the country that holds the last wild Cardamom population.',
        blurbAr: 'البلد الذي اقترح الإدراج ولا يصدّر إلا المزروع، في مقابل البلد الذي يحمل آخر سكان كارداموم البري.',
      },
      {
        slug: 'comparisons/india-and-cambodia-oud',
        label: 'Comparing India and Cambodia oud claims',
        labelAr: 'مقارنة ادعاءات عود الهند وكمبوديا',
        blurb: 'Two different species, two different trades, and one shared word.',
        blurbAr: 'نوعان مختلفان، وتجارتان مختلفتان، واسم واحد مشترك.',
      },
      {
        slug: 'comparisons/agarwood-origins',
        label: 'Compare documented origins',
        labelAr: 'مقارنة المناسخ الموثقة',
        blurb: 'How the recorded producing and destination geography sets up a comparison, and where a ranking the record does not give stops.',
        blurbAr: 'كيف تدرج جغرافيا الإنتاج والوجهة المسجلة مقارنة، وأين يتوقف الترتيب الذي لا يعطيه السجل.',
      },
      {
        slug: 'comparisons/attar-oud-oil-fragrance-oil',
        label: 'Attar, oud oil and fragrance oil',
        labelAr: 'الإتر وزيت العود وزيت العطر',
        blurb: 'Three different products, three lanes, and why a figure stated for one does not transfer to another.',
        blurbAr: 'ثلاثة منتجات مختلفة، ثلاثة حومات، ولماذا لا ينتقل رقم قيل عن واحد إلى آخر.',
      },
    ],
    nextSteps: ['Read the India and Cambodia comparison', 'Read the two origin pages it links to'],
    nextStepsAr: ['اقرأ مقارنة الهند وكمبوديا', 'اقرأ صفحتي المنشأ اللتين تشيران إليهما'],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014', 'CITES_AGARWOOD_2004'],
  },
  {
    slug: 'collecting',
    related: [
      { slug: 'quality', label: 'Quality', labelAr: 'الجودة' },
      { slug: 'using-oud', label: 'Using Oud', labelAr: 'استخدام العود' },
    ],
    title: 'Collecting',
    titleAr: 'التجميع',
    summary: 'Documenting and caring for an oud collection.',
    summaryAr: 'توثيق مجموعة العود والعناية بها.',
    directAnswer:
      'The Collecting section covers what to do with material you already own: how to document it so the record survives you, how to store it, and where the resale market and the risk of misdescription sit.',
    directAnswerAr:
      'يغطي قسم التجميع ما تفعله بالمادة التي تملكها بالفعل: كيف توثّقها ليستمر السجل بعدك، وكيف تخزّنها، وأين يقع سوق إعادة البيع ومخاطر الوصف الخاطئ.',
    scope:
      'This section is about your own material and your own records. It does not provide valuation, and it does not endorse a buyer.',
    scopeAr:
      'يتعلق هذا القسم بمادتك وسجلاتك أنت. ولا يقدّم تقييماً سعرياً ولا يرشّح مشترياً.',
    children: [
      {
        slug: 'collecting/documenting-a-collection',
        label: 'Documenting an oud collection',
        labelAr: 'توثيق مجموعة عود',
        blurb: 'What a durable record contains, and why provenance is harder than it looks.',
        blurbAr: 'ما يحتويه السجل الدائم، ولماذا تثبيت المصدر أصعب مما يبدو.',
      },
      {
        slug: 'collecting/resale-and-risk',
        label: 'Collecting and resale uncertainty',
        labelAr: 'التجميع وغياب اليقين في إعادة البيع',
        blurb: 'The conditions under which a collection is easier or harder to sell.',
        blurbAr: 'الظروف التي تجعل المجموعة أسهل أو أصعب في البيع.',
      },
      {
        slug: 'collecting/aging-and-storage-care',
        label: 'How to store oud: what it needs and what it will not forgive',
        labelAr: 'كيفية تخزين العود: ما يحتاجه وما لا يغفره',
        blurb: 'The one practice the physics supports: a sealed glass, a stable cool dry dark room, a single shelf. Everything beyond it is an undocumented claim.',
        blurbAr: 'الممارسة الوحيدة التي تدعمها الفيزياء: وعاء زجاجي محكم، غرفة ثابتة باردة جافة مظلمة، رف واحد. وكل ما زاد على ذلك ادعاء غير موثق.',
      },
      {
        slug: 'collecting/investment-value',
        label: 'Whether oud is an investment, honestly scoped',
        labelAr: 'هل العود استثمار، بنطاق صريح',
        blurb: 'One dated snapshot is not a price series: the page names the three records a piece must carry and says what it will not print.',
        blurbAr: 'لقطة تاريخية واحدة ليست سلسلة أسعار: الصفحة تسمي السجلات الثلاثة التي يجب أن تحملها القطعة وتقول ما لا ستطبعه.',
      },
    ],
    nextSteps: ['Document what you own', 'Learn about resale conditions'],
    nextStepsAr: ['وثّق ما تملك', 'اعرف ظروف إعادة البيع'],
    sourceIds: ['AGARWOOD_CITES_2022', 'CITES_APPENDICES'],
  },
];

export const hubArticles: Article[] = SPECS.map((spec) => ({
  slug: spec.slug,
  kind: 'hub' as const,
  state: 'reviewed' as const,
  title: spec.title,
  titleAr: spec.titleAr,
  h1: spec.title,
  h1Ar: spec.titleAr,
  summary: spec.summary,
  summaryAr: spec.summaryAr,
  directAnswer: spec.directAnswer,
  directAnswerAr: spec.directAnswerAr,
  sections: [
    {
      heading: 'What this section covers',
      headingAr: 'ما الذي يغطيه هذا القسم',
      body: [spec.scope, SCOPE_EN],
      bodyAr: [spec.scopeAr, SCOPE_AR],
    },
  ],
  sourceIds: spec.sourceIds,
  limitations:
    'A section index describes the scope and organisation of the material beneath it. It does not make claims about any individual article, supplier or material; those claims live on the pages themselves, with their own evidence and limitations.',
  limitationsAr:
    'فهرس القسم يصف نطاق المادة تحته وتنظيمها. ولا يدّعي شيئاً عن أي مقال أو مورد أو مادة بعينها؛ فتلك الادعاءات في الصفحات نفسها، بأدلتها وحدودها.',
  reviewer: REVIEWER,
  reviewerAr: REVIEWER_AR,
  reviewMethod: REVIEW_METHOD,
  reviewMethodAr: REVIEW_METHOD_AR,
  reviewedOn: REVIEWED_ON,
  nextSteps: spec.nextSteps,
  nextStepsAr: spec.nextStepsAr,
  related: spec.related ?? [],
  children: spec.children,
  parent: spec.slug === 'oud-basics' ? undefined : 'guides-index',
}));
