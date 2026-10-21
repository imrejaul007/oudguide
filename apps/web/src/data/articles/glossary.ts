import type { Article } from './types.ts';

/**
 * Trade terminology.
 *
 * The manifest carries 32 "Trade terminology" routes. The audit found one
 * of them — /en/glossary/hindi-muri — returning 404 because the glossary
 * was never implemented at all.
 *
 * These entries are written to be defensible rather than colourful. A
 * trade term has a general referent that can be stated, and a fine
 * attribution that varies by market and by seller. The entry gives the
 * general referent and says plainly that the fine attribution is
 * something to confirm with the counterparty. Where an entry cannot even
 * state the general referent reliably, it is not published.
 */

const REVIEWED_ON = '2026-10-20';
const REVIEWER = 'OudGuide editorial review';
const REVIEWER_AR = 'مراجعة تحريرية من دليل العود';
const REVIEW_METHOD =
  'Reviewed against the cited sources and checked for a question-specific answer. Trade attributions were checked against the general trade usage rather than against a single market, and each entry states which parts are local rather than general.';
const REVIEW_METHOD_AR =
  'رُوجعت مقابل المصادر المذكورة ودُقِّق أن لكل صفحة إجابة خاصة بسؤالها. وقورنت الإسنادات بالممارسة التجارية العامة لا بسوق واحد، وذكرت كل مدخلة أي أجزائها محلية لا عامة.';

const VARIATION_NOTE =
  'The precise attribution of this term varies between markets, suppliers and periods, and a seller may use it more loosely than the strict usage. Where the distinction matters to a purchase, confirm the meaning with the counterparty rather than relying on the label.';
const VARIATION_NOTE_AR =
  'يختلف الإسناد الدقيق لهذا المصطلح بين الأسواق والموردين والفترات، وقد يستعمله البائع استعمالاً أفسخ من المعنى الدقيق. وحيث كان التمييز مهماً في الشراء، فأكّد المعنى مع الطرف الآخر لا أن تعتمد على التسمية.';

function glossaryEntry(spec: {
  slug: string;
  title: string;
  titleAr: string;
  summary: string;
  summaryAr: string;
  directAnswer: string;
  directAnswerAr: string;
  whatItRefersTo: string;
  whatItRefersToAr: string;
  whatItDoesNotProve: string;
  whatItDoesNotProveAr: string;
  related: { slug: string; label: string; labelAr?: string }[];
  sourceIds: string[];
}): Article {
  return {
    slug: spec.slug,
    kind: 'glossary',
    state: 'reviewed',
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
        heading: 'What it refers to',
        headingAr: 'ما الذي يشير إليه',
        body: [spec.whatItRefersTo, VARIATION_NOTE],
        bodyAr: [spec.whatItRefersToAr, VARIATION_NOTE_AR],
      },
      {
        heading: 'What it does not prove',
        headingAr: 'ما لا يثبته',
        body: [spec.whatItDoesNotProve],
        bodyAr: [spec.whatItDoesNotProveAr],
      },
    ],
    sourceIds: spec.sourceIds,
    limitations:
      'This entry gives the general trade referent of the term. It does not establish the specific grading, composition or origin of any material described with it, and it is not a standard.',
    limitationsAr:
      'تعطي هذه المدخلة المرجع التجاري العام للمصطلح. ولا تثبت التقييم أو التركيب أو المنشأ لأي مادة يوصف بها، وليست معياراً.',
    reviewer: REVIEWER,
    reviewerAr: REVIEWER_AR,
    reviewMethod: REVIEW_METHOD,
    reviewMethodAr: REVIEW_METHOD_AR,
    reviewedOn: REVIEWED_ON,
    nextSteps: [],
    nextStepsAr: [],
    related: spec.related,
    parent: 'glossary',
  };
}

export const glossaryArticles: Article[] = [
  glossaryEntry({
    slug: 'glossary/hindi-muri',
    title: 'Hindi Muri',
    titleAr: 'هندي موري',
    summary: 'A trade term for a category of agarwood wood; what it denotes and what it does not establish.',
    summaryAr: 'مصطلح تجاري لفئة من خشب العود؛ ما الذي يدل عليه وما الذي لا يثبته.',
    directAnswer:
      'Hindi Muri is a trade term used for a category of agarwood wood associated in Gulf usage with the Indian subcontinent. As with the other wood-type terms in this vocabulary, it is a description of origin and customary treatment rather than a graded standard, and what it establishes depends entirely on what the seller means by it.',
    directAnswerAr:
      '«هندي موري» مصطلح تجاري يُستعمل لفئة من خشب العود يُقرن في الاستعمال الخليجي بشبه القارة الهندية. ومثل سائر مصطلحات أنواع الخشب في هذه المفردات، فهو وصف للمنشأ والمعالجة الاعتيادية لا معيار مُقيَّم، وما يثبته يعتمد كلياً على ما يقصده البائع به.',
    whatItRefersTo:
      'The term sits in a family of wood-type names used across the Gulf and South Asian trade to describe material by its customary provenance and handling. Terms in this family are used loosely and vary considerably between sellers. A buyer should treat the term as the start of a description and ask what follows it: the species, the region, whether the material was wild or cultivated, and what treatment it received.',
    whatItRefersToAr:
      'يقع هذا المصطلح في عائلة من أسماء أنواع الخشب المستعملة في تجارة الخليج وجنوب آسيا لوصف المادة بمصدرها الاعتيادي ومعاملتها. والمصطلحات في هذه العائلة تُستعمل فضفاضة وتختلف كثيراً بين البائعين. وعلى المشتري أن يتعامل مع المصطلح كبداية لوصف، ويسأل عما يليه: النوع، والإقليم، وهل كانت المادة برية أم مستزرعة، وما المعالجة التي حُصلت.',
    whatItDoesNotProve:
      'The term does not establish resin content, oil yield, age, or the actual place the wood grew. It is also not a protected designation: nothing prevents a seller from applying it to material from another origin.',
    whatItDoesNotProveAr:
      'لا يثبت المصطلح نسبة الراتنج ولا مردود الزيت ولا العمر ولا مكان نمو الخشب فعلياً. وليس اسماً محمياً: فلا شيء يمنع بائعاً من تطبيقه على مادة من منشأ آخر.',
    related: [
      { slug: 'glossary/tola', label: 'Tola: the weight unit in the oud trade' },
      { slug: 'quality/seller-defined-super-grades', label: 'Super, Double Super and Triple Super labels' },
      { slug: 'origins/india', label: 'India and northeast origin guide' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014', 'CITES_AGARWOOD_2004'],
  }),

  glossaryEntry({
    slug: 'glossary/tola',
    title: 'Tola',
    titleAr: 'تولا',
    summary: 'The weight unit in the oud trade, and why the unit itself is worth confirming.',
    summaryAr: 'وحدة الوزن في تجارة العود، ولماذا يستحق إما الوحدة نفسها التأكيد.',
    directAnswer:
      'A tola is a weight unit of approximately 11.66 grams, and it is the unit in which oud oil is commonly quoted in Gulf and South Asian trade. Because the quotation and the delivered weight can diverge — through evaporation, spillage, container tare and differing interpretation of the measure — the unit should be agreed explicitly at the point of quotation rather than assumed.',
    directAnswerAr:
      'التولا وحدة وزن تقارب 11.66 غراماً، وهي الوحدة التي يُسعَّر بها دهن العود عادةً في تجارة الخليج وجنوب آسيا. ولأن السعر والوزن المسلَّم قد يفترقان — بالتبخّر أو التسرّب أو وزن الوعاء أو اختلاف فهم وحدة القياس — فينبغي الاتفاق على الوحدة صراحةً عند التسعير لا الافتراض.',
    whatItRefersTo:
      'The tola is part of the South Asian weight system and was in use for several centuries before it appears in oud trade; in this trade it has become the unit for both a quantity of oil and, in some usage, a quantity of wood. It survives in commercial use because the older unit it replaces is no longer in general use, not because it is the most convenient measure.',
    whatItRefersToAr:
      'التولا جزء من نظام أوزان جنوب آسيوي استُعمل لقرون قبل ظهوره في تجارة العود؛ وفي هذه التجارة صارت الوحدة لكمية الزيت، وأحياناً لكمية الخشب. وقد بقيت في الاستعمال التجاري لأن الوحدة الأقدم التي حلّت محلها لم تعد مستعملة عموماً، لا لأنها أنسب مقياس.',
    whatItDoesNotProve:
      'A price expressed per tola says nothing about the quality or the age of the material, and it does not guarantee the delivered weight. Confirm the gross and net weight basis and the container tare on the order.',
    whatItDoesNotProveAr:
      'السعر المذكور لكل تولا لا يقول شيئاً عن جودة المادة ولا عن عمرها، ولا يضمن الوزن المسلَّم. وأكّد في الطلب أساس الوزن الإجمالي والصافي ووزن الوعاء.',
    related: [
      { slug: 'buying/net-weight-and-volume', label: 'Compare mass, volume and pack counts' },
      { slug: 'buying/comparing-oud-oil-offers', label: 'Comparing oud oil offers' },
      { slug: 'glossary/dehn-al-oud', label: 'Dehn Al Oud' },
    ],
    sourceIds: ['FAOLEX', 'CITES_APPENDICES', 'AGARWOOD_REVIEW_2014'],
  }),

  glossaryEntry({
    slug: 'glossary/dehn-al-oud',
    title: 'Dehn Al Oud',
    titleAr: 'دهن العود',
    summary: 'The oil itself, as distinct from the wood it comes from and the accords made to imitate it.',
    summaryAr: 'الزيت نفسه، المختلف عن الخشب الذي يأتي منه والأوزات المصنوعة لتقليده.',
    directAnswer:
      'Dehn Al Oud is the oil distilled from agarwood — the direct translation of the name means "the blood of oud", which is a description of concentration rather than a claim about composition. It is a distinct product from agarwood wood and equally distinct from an oud accord, which is a manufactured fragrance material.',
    directAnswerAr:
      'دهن العود هو الزيت المقطَّر من خشب العود؛ ومعناه الحرفي «دم العود»، وهو وصف بالتركيز لا ادعاء عن التركيب. وهو منتج متميز عن خشب العود، ومتميز تماماً عن أوز العود، وهو مادة عطرية مصنّعة.',
    whatItRefersTo:
      'The name refers to the distillation product, and the term is used specifically for oil obtained from agarwood as opposed to oil from sandalwood or other distillates. The distillation method materially changes the character of the resulting oil, so two oils sold under this name can be quite different.',
    whatItRefersToAr:
      'يشير الاسم إلى منتج التقطير، ويُستعمل المصطلح تحديداً للزيت المستخرج من العود لا للزيت المستخرج من الصندل أو من نواتج تقطير أخرى. وطريقة التقطير تغيّر طابع الزيت الناتج اختلافاً جوهرياً، فيمكن لزيـتين يُباعان بهذا الاسم أن يكونا مختلفين تماماً.',
    whatItDoesNotProve:
      'The name does not establish the species distilled, the method used, the yield, the age of the material, or the absence of an accord. A seller who writes "Dehn Al Oud" on a label has not thereby answered any of those questions.',
    whatItDoesNotProveAr:
      'لا يثبت الاسم النوع المقطَّر ولا الطريقة المستعملة ولا المردود ولا عمر المادة ولا غياب الأوز. فالبائع الذي يكتب «دهن العود» على الملصق لم يجب بذلك عن أيٍّ من تلك الأسئلة.',
    related: [
      { slug: 'oud-basics/what-is-agarwood', label: 'Agarwood: names, material and uses' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'fragrance/oud-accords', label: 'Oud accords in fragrance composition' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
  }),

  glossaryEntry({
    slug: 'glossary/bakhoor',
    title: 'Bakhoor',
    titleAr: 'بخور',
    summary: 'Chips infused with oil, and why its composition varies so widely.',
    summaryAr: 'رقائق مُشبَّعة بالزيت، ولماذا يختلف تركيبها اختلافاً واسعاً.',
    directAnswer:
      'Bakhoor is agarwood — usually chips or sawdust — that has been infused with oil so that it carries scent without being distilled. Its quality depends on both the wood and the oil used, and because the infusion ratio is not standardised, two products described the same way can differ enormously in both scent and burn.',
    directAnswerAr:
      'البخور خشب عود — رقائق عادةً أو نشارة — أُشبِع بالزيت ليحمل رائحة دون تقطير. يعتمد على الخشب والزيت المستعملين معاً، ولأن نسبة النقع غير موحّدة، يمكن لمنتجين موصوفين بالطريقة نفسها أن يختلفا اختلافاً كبيراً في الرائحة والدخان معاً.',
    whatItRefersTo:
      'The practice is old and widespread across the Gulf and South Asia, and the word covers both the finished material and the act of making it. Because the oil used may itself be a blend, an accord or a genuine distillation, a bakhoor product can vary far more than its name suggests.',
    whatItRefersToAr:
      'الممارسة قديمة ومنتشرة في الخليج وجنوب آسيا، والكلمة تغطي المادة المصنوعة والفعل الذي أنتجها معاً. ولأن الزيت المستعمل قد يكون مزيجاً أو أوزاً أو تقطيراً حقيقياً،فقد يختلف منتج البخور اختلافاً أكبر بكثير مما يوحي به اسمه.',
    whatItDoesNotProve:
      'The word does not establish that the wood is agarwood, that the oil is a true distillation, or the ratio of oil to wood. It is also used for products made from other woods and for entirely synthetic fragrance materials.',
    whatItDoesNotProveAr:
      'لا يثبت اللفظ أن الخشب عود، ولا أن الزيت تقطير حقيقي، ولا نسبة الزيت إلى الخشب. ويُستعمل أيضاً لمنتجات مصنوعة من أخشاب أخرى ومن مواد عطرية صناعية بالكامل.',
    related: [
      { slug: 'fragrance/bakhoor-versus-raw-wood', label: 'Bakhoor and raw oud wood' },
      { slug: 'buying/buying-bakhoor', label: 'Buying bakhoor with clear composition information' },
      { slug: 'fragrance/oud-accords', label: 'Oud accords in fragrance composition' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'CITES_APPENDICES', 'AGARWOOD_REVIEW_2014'],
  }),

  glossaryEntry({
    slug: 'glossary/gaharu',
    title: 'Gaharu',
    titleAr: 'gaharu',
    summary: 'The Malay and Indonesian word for agarwood, and what the Indonesian trade uses it for.',
    summaryAr: 'الكلمة الملايوية والإندونيسية للعود، وما تستعملها التجارة الإندونيسية له.',
    directAnswer:
      'Gaharu is the Malay and Indonesian word for agarwood, used across Indonesia and Malaysia for both the wood and the oil. In the Indonesian trade it frequently carries an additional sense of a particular type or quality of wood rather than the category as a whole, which is why the term needs the rest of the description to be understood.',
    directAnswerAr:
      '«غاهارو» الكلمة الملايوية والإندونيسية للعود، تستعمل في إندونيسيا وماليزيا للخشب والزيت معاً. وفي التجارة الإندونيسية تحمل غالباً معنى إضافياً لنوع أو رتبة من الخشب لا الفئة كلها، ولهذا يحتاج المصطلح إلى بقية الوصف ليُفهم.',
    whatItRefersTo:
      'The word is used for the resinous wood of Aquilaria species and for the oil distilled from it. Indonesian usage also distinguishes between types by name — the higher-priced West Kalimantan material is referred to by particular names that are widely discussed in the domestic trade.',
    whatItRefersToAr:
      'تستعمل الكلمة للخشب الراتنجي من أنواع Aquilaria وللزيت المقطَّر منه. وتميّز الإندونيسية بين الأنواع بالأسماء — فمادة كاليمانتان الغربية الأعلى سعراً يُشار إليها بأسماء خاصة تتداول كثيراً في التجارة المحلية.',
    whatItDoesNotProve:
      'The word does not establish the species, the region within Indonesia, the resin content or the quality of a particular lot. Regional names within the country are not interchangeable, and the domestic names are not an international standard.',
    whatItDoesNotProveAr:
      'لا تثبت الكلمة النوع ولا الإقليم داخل إندونيسيا ولا نسبة الراتنج ولا جودة لوط بعينه. والأسماء الإقليمية داخل البلاد ليست متقابلة، وأسماءها المحلية ليست معياراً دولياً.',
    related: [
      { slug: 'oud-basics/agarwood-botanical-identity', label: 'Botanical identity and genus comparison' },
      { slug: 'quality/seller-defined-super-grades', label: 'Super, Double Super and Triple Super labels' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014', 'CITES_AGARWOOD_2004', 'ITTO_AGARWOOD_REVIEW', 'TRAFFIC_PNG_AGARWOOD'],
  }),

  glossaryEntry({
    slug: 'glossary/oud-accord',
    title: 'Oud Accord',
    titleAr: 'أوز العود',
    summary: 'A manufactured fragrance material, and why it must not be described as oud.',
    summaryAr: 'مادة عطرية مصنّعة، ولماذا لا يجوز وصفها بأنها عود.',
    directAnswer:
      'An oud accord is a fragrance material composed to reproduce the character of oud, made from a defined set of chemical materials. It is a legitimate and widely used perfumery ingredient. It is not oud, and describing an accord as oud is a misrepresentation rather than a matter of taste.',
    directAnswerAr:
      'أوز العود مادة عطرية مركّبة لتقليد طابع العود، تُصنع من مجموعة محددة من المواد الكيميائية. وهو مكوّن عطري مشروع ومستعمل على نطاق واسع. وهو ليس عوداً، ووصف الأوز بأنه عود تحريف لا مسألة ذوق.',
    whatItRefersTo:
      'Accords are built by perfumers to give a fragrance the tonal character of a natural material without its cost, supply constraint or instability. An oud accord is used in fine fragrance, in attar bases and in bakhoor production, and it is a normal part of the industry rather than a substitute sold fraudulently.',
    whatItRefersToAr:
      'يبني العطارون الأوزات لتمنح العطر الطابع النغمي لمادة طبيعية بلا كلفتها ولا قيد توريدها ولا عدم استقرارها. ويُستعمل أوز العود في العطور الفاخرة وفي قواعد العطور الشرقية وفي صناعة البخور، وهو جزء طبيعي من الصناعة لا بديل يُباع احتيالاً.',
    whatItDoesNotProve:
      'The term does not indicate any natural agarwood content, and it does not indicate any grade of it. It is also not a certification: conformity with a fragrance standard is a separate question, settled for a specific product and intended use rather than for a category name.',
    whatItDoesNotProveAr:
      'لا يدل المصطلح على أي محتوى طبيعي من خشب العود، ولا على أي درجة منه. وهو ليس شهادة توافق: فالمطابقة مع معيار عطري سؤال منفصل يُحسم لمنتج بعينه واستخدام مقصود بعينه لا لاسم فئة.',
    related: [
      { slug: 'fragrance/oud-accords', label: 'Oud accords in fragrance composition' },
      { slug: 'fragrance/notes-versus-ingredients', label: 'Fragrance notes versus ingredients' },
      { slug: 'glossary/dehn-al-oud', label: 'Dehn Al Oud' },
    ],
    sourceIds: ['IFRA_CERT', 'IFRA_STANDARDS', 'IFRA_APPLYING'],
  }),

  glossaryEntry({
    slug: 'glossary/jinko',
    title: 'Jinko',
    titleAr: 'جينكو',
    summary: 'The Japanese and Chinese trade word for agarwood, and the grade systems built around it.',
    summaryAr: 'الكلمة اليابانية والصينية للعود، وأنظمة الدرجات المبنية حولها.',
    directAnswer:
      'Jinko is the word used in Japanese and Chinese trade for agarwood, and the surrounding systems of grading — the numbered categories that appear in Japanese auction terminology in particular — are long established in that market. Those categories are a domestic trade convention and do not correspond to the Gulf "Super" series or to any published international standard.',
    directAnswerAr:
      '«جينكو» الكلمة المستعملة في التجارة اليابانية والصينية للعود، وأنظمة التقييم المحيطة بها — ولا سيما الفئات المرقّمة الظاهرة في مصطلح المزادات اليابانية — راسخة في ذلك السوق. وتلك الفئات عرفٌ تجاري محلي ولا تقابل سلسلة «سوبر» الخليجية ولا أي معيار دولي منشور.',
    whatItRefersTo:
      'Japanese buyers of incense and wood have used graded categories for a long time, and the terminology is embedded in auction and trade documentation. The categories describe the material as the local market describes it. A buyer in that market reads them as such; a buyer outside it should treat them as local labels rather than as a specification.',
    whatItRefersToAr:
      'استعمل مشترو البخور والخشب في اليابان فئات مقيَّمة منذ زمن طويل، والمصطلح متشعّب في وثائق المزادات والتجارة. وتصف الفئات المادة كما يصفها السوق المحلي. والمشتري في ذلك السوق يقرأها على هذا النحو، أما المشتري من خارجه فيتعامل معها كتسميات محلية لا كمواصفة.',
    whatItDoesNotProve:
      'A category number does not establish resin content, oil yield, age, or the species of a given piece, and it carries no meaning outside the market that uses it.',
    whatItDoesNotProveAr:
      'رقم الفئة لا يثبت نسبة الراتنج ولا مردود الزيت ولا العمر ولا نوع قطعة بعينها، ولا يحمل معنى خارج السوق الذي يستعمله.',
    related: [
      { slug: 'culture/japanese-incense-appreciation', label: 'Japanese incense appreciation' },
      { slug: 'culture/agarwood-in-chinese-traditions', label: 'Agarwood in Chinese traditions' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
    ],
    sourceIds: ['FAOLEX', 'AGARWOOD_REVIEW_2014', 'CITES_AGARWOOD_2004'],
  }),
];
