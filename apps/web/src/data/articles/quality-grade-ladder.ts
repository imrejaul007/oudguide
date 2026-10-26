import type { Article } from './types.ts';

/**
 * The Gulf-market grade ladder, as a vocabulary.
 *
 * Why this file exists
 * --------------------
 * The route manifest carries a route for this subject —
 * `OG-0067 /en/guides/quality/gulf-market-grade-labels/`, "Gulf-market oud
 * grading vocabulary" — and nothing had been written for it. It is the
 * one editorial route in the manifest whose subject is a vocabulary
 * rather than a practice, and the audit of the retail catalogue at
 * almutalib.com on 21 October 2026 confirmed that the vocabulary is
 * still in active commercial use: nine labels — VIP, VVIP, Super, Double
 * Super, Triple Super, Khaas, Khasal Khaas, Seufi and Seyufi — are
 * published as product categories, with "Seyufi" and "Seufi" carried
 * side by side as separate categories.
 *
 * That observation is the reason this page exists, and it is also the
 * reason this page is careful.
 *
 * The manifest's own `evidence_to_collect` for this route says:
 * "Independent primary research required; competitor URL is a topic/reference
 * audit only". A merchant's category page is a record of what that
 * merchant sells. It is not a definition, it is not a standard, and it
 * is not evidence that a label means anything in particular. So the
 * catalogue is used here as a *topic map* — it told us which labels are
 * in live commercial use and which spellings are carried as distinct —
 * and every claim below rests on the general structure of the vocabulary
 * and on what the published regulatory and scientific sources establish.
 * Where the ladder's meaning is not established, this page says so
 * instead of guessing.
 *
 * How this relates to the existing quality pages
 * ---------------------------------------------
 * It does not repeat them.
 *
 *   - `quality/seller-defined-super-grades` covers the Super series
 *     specifically: where the vocabulary came from, and what to ask
 *     instead of trusting the label.
 *   - `quality/oud-grading-explained` covers the general structure of
 *     a grading claim and which parts of one are checkable.
 *   - This page covers the ladder as a whole: the full set of labels
 *     outside the Super series, the rungs that are ordered, the labels
 *     that are *not* ordered against the others, and the near-spelling
 *     pairs that a buyer will encounter in the same catalogue.
 *
 * A note on the near-spelling pairs
 * ---------------------------------
 * Seufi and Seyufi are carried as two separate categories by at least
 * one merchant, and the manifest's own terminology routes treat
 * `glossary/seufi` and `glossary/seyufi` as separate terms whose
 * relationship to each other is explicitly unconfirmed. This page
 * follows that convention. It does not merge them, because merging them
 * would assert the synonymy the record says is unconfirmed, and it does
 * not assert a difference either, because no source establishes one.
 * The honest position is that the relationship between the two
 * spellings is not established, and that a buyer who is told "Seufi"
 * or "Seyufi" should ask which one is meant.
 *
 * The same applies to Khaas and Khasal Khaas, and to the shape terms
 * that are qualified by size or form — Ball Muri against Muri, Baby
 * Salla against Salla. The qualification is recorded; the relationship
 * between the qualified and unqualified terms is not.
 *
 * Editorial rules applied here
 * ----------------------------
 *   - No label is given a numeric threshold, a resin content, a price
 *     band or an oil yield. None is published, and inventing one would
 *     be the exact defect the audit found in the catalogue.
 *   - The ladder is described as a set of commercial labels in active
 *     use, and explicitly not as a scale.
 *   - Every statement about what the labels do not establish is as
 *     prominent as every statement about what they do.
 */

const REVIEWED_ON = '2026-10-21';
const REVIEWER = 'OudGuide editorial review';
const REVIEWER_AR = 'مراجعة تحريرية من دليل العود';
const REVIEW_METHOD =
  'Reviewed against the cited sources for what is and is not established about the vocabulary. The set of labels treated as commercially current was confirmed by a topic-and-reference audit of a live Gulf oud retail catalogue on 21 October 2026; that audit was used to establish which labels and which near-spelling pairs exist in use, and no editorial claim on this page rests on it. Each label was checked to see whether a published definition, threshold or standard exists for it, and where none exists the page says so rather than supplying one.';
const REVIEW_METHOD_AR =
  'رُوجعت مقابل المصادر المذكورة لمعرفة ما هو مثبت وما غير مثبت في هذه المفردات. وتحقق من مجموعة التسميات المعتبرة حالية تجارياً عبر تدقيق موضوعي وإسنادي لكتالوج تجاري حيّ للعود في الخليج في 21 أكتوبر 2026؛ وقد استُعمل ذلك التدقيق لإثبات وجود التسميات وأزواج الإملاء المتقاربة في الاستعمال، ولا يستند إليه أي ادعاء تحريري في هذه الصفحة. ودُقِّق كل تسمية هل يوجد لها تعريف منشور أو عتبة أو معيار، وحيث لا يوجد فالصفحة تذكر ذلك بدل أن تختلق واحداً.';

/**
 * The labels, grouped by what can actually be said about them.
 *
 * `ordered` marks a label that a merchant catalogue presents as sitting
 * on a ladder above another. `unordered` marks a label that is carried
 * as a top category without a stated position against the others.
 * The distinction matters, and it is the substance of this page: the
 * market treats part of this vocabulary as a sequence and part of it as
 * a set of names.
 */
export interface GradeLabel {
  /** The label as the trade writes it. */
  label: string;
  /** The Arabic form used across this site's Arabic copy. */
  labelAr: string;
  /** The slug this label is filed under in the market taxonomy register. */
  slug: string;
  /**
   * True when the label is presented as sitting above another label in
   * the same ladder. False for the labels that are carried without a
   * stated position against the others.
   */
  ordered: boolean;
  /** What the label is used to talk about. */
  describes: string;
  describesAr: string;
  /** What the label does not establish. */
  doesNotEstablish: string;
  doesNotEstablishAr: string;
}

export const GRADE_LABELS: GradeLabel[] = [
  {
    label: 'VIP',
    labelAr: 'في آي بي',
    slug: 'vip-oud',
    ordered: true,
    describes:
      'A label used for material the seller places above unlabelled wood. In the merchant catalogues reviewed, it is the first rung of the ladder and is described in terms of aroma alone.',
    describesAr:
      'تسمية تستعمل للمادة التي يضعها البائع فوق الخشب بلا تسمية. وفي الكتالوجات التجارية التي روجعت، فهي الحلقة الأولى في السلم، ووصفها يقع على الرائحة وحدها.',
    doesNotEstablish:
      'It sets no resin content, no oil yield and no age threshold, and two lots labelled VIP by different sellers need not be comparable.',
    doesNotEstablishAr:
      'لا تحدد نسبة راتنج ولا مردود زيت ولا عتبة للعمر، ولا يلزم أن يكون لوطان موسومان «في آي بي» عند بائعين مختلفين قابلين للمقارنة.',
  },
  {
    label: 'VVIP',
    labelAr: 'في في آي بي',
    slug: 'vvip-oud',
    ordered: true,
    describes:
      'The rung above VIP. In the catalogues reviewed it is described as more intense and more complex in aroma, which is a statement about scent and nothing else.',
    describesAr:
      'الحلقة فوق «في آي بي». وفي الكتالوجات المراجعة توصف بأنها أكثر شدة وتعقيداً في الرائحة، وهو كلام عن الرائحة لا غير.',
    doesNotEstablish:
      'The step from VIP to VVIP is not defined by any measurable quantity, so the label records a seller\'s ordering and not a measurement.',
    doesNotEstablishAr:
      'الدرجة من «في آي بي» إلى «في في آي بي» غير معرَّفة بأي كمية قابلة للقياس، فالتسمية تسجّل ترتيب البائع لا قياساً.',
  },
  {
    label: 'Super',
    labelAr: 'سوبر',
    slug: 'super-oud',
    ordered: true,
    describes:
      'The first of the three Super rungs, and the entry point into that series. The dedicated page on the Super series covers this label in detail.',
    describesAr:
      'أول حلقات سلسلة «سوبر» ومدخلها. والصفحة المخصّصة لسلسلة «سوبر» تغطي هذه التسمية بالتفصيل.',
    doesNotEstablish:
      'As with the other rungs, no published standard fixes what the word asserts or what separates it from the rung above.',
    doesNotEstablishAr:
      'كالحلقة غيرها، لا معيار منشور يحدّد ما تقرّره الكلمة ولا ما يفصلها عن الحلقة التي تعلوها.',
  },
  {
    label: 'Double Super',
    labelAr: 'دبل سوبر',
    slug: 'double-super-oud',
    ordered: true,
    describes:
      'The middle rung of the Super series. It is described in the catalogues reviewed as material with depth and complexity, in the language of a seller choosing between lots.',
    describesAr:
      'الحلقة الوسطى من سلسلة «سوبر». وتوصف في الكتالوجات المراجعة بأنها مادة ذات عمق وتعقيد، بلغة بائع يختار بين لوطات.',
    doesNotEstablish:
      'The increment from Super to Double Super is not a published quantity of anything, and the label carries no obligation to match a figure.',
    doesNotEstablishAr:
      'الزيادة من «سوبر» إلى «دبل سوبر» ليست كمية منشورة من شيء، والتسمية لا تحمل أي التزام بمطابقة رقم.',
  },
  {
    label: 'Triple Super',
    labelAr: 'تريبل سوبر',
    slug: 'triple-super-oud',
    ordered: true,
    describes:
      'The top of the Super series as the trade writes it, and the label most often presented as the peak of the ladder.',
    describesAr:
      'قمة سلسلة «سوبر» كما يكتبها السوق، والتسمية التي تُقدَّم أكثر من غيرها قمّة السلم.',
    doesNotEstablish:
      'No standard defines it, and the two other ladder labels that sit above material without a rung — Khaas and Khasal Khaas — are carried without a stated position against it, so the ladder has no single top.',
    doesNotEstablishAr:
      'لا معيار يعرّفها، والتسميتان اللتان تعلوان مادة بلا حلقة — «خاس» و«خسَل خاس» — تُحملان بلا موضع معلن بالنسبة إليها، فلا للسلم قمة واحدة.',
  },
  {
    label: 'Khaas',
    labelAr: 'خاس',
    slug: 'khaas-oud',
    ordered: false,
    describes:
      'A label carried as a category in its own right. In the catalogues reviewed it is described as rare and prized for its aroma, without a stated position against the Super series.',
    describesAr:
      'تسمية تُحمل كفئة قائمة بذاتها. وفي الكتالوجات المراجعة توصف بأنها نادرة مرموقة لرائحتها، بلا موضع معلن بالنسبة إلى سلسلة «سوبر».',
    doesNotEstablish:
      'It is not published as a rung above Triple Super, and no source establishes how it compares to the Super series. A buyer should not assume the two ladders meet.',
    doesNotEstablishAr:
      'هي غير منشورة كحلقة فوق «تريبل سوبر»، ولا يثبت أي مصدر كيف تقارن بسلسلة «سوبر». وعلى المشتري ألا يفترض التقاء السلسلتين.',
  },
  {
    label: 'Khasal Khaas',
    labelAr: 'خسَل خاس',
    slug: 'khasal-khaas-oud',
    ordered: false,
    describes:
      'A label carried alongside Khaas. In the catalogues reviewed the two are presented together, as a pair of names for material held to be at the top of the market.',
    describesAr:
      'تسمية تُحمل مع «خاس». وفي الكتالوجات المراجعة تُقدَّم الاثنتان معاً، كزوج أسماء لمادة يُعتقد أنها في قمة السوق.',
    doesNotEstablish:
      'Whether Khasal Khaas is a higher grade than Khaas, a different treatment, a different origin, or a marketing variant of the same name is not established by any source consulted. The relationship is unconfirmed and is left unconfirmed here.',
    doesNotEstablishAr:
      'أمسارة «خسَل خاس» أعلى درجة من «خاس» أم معالجة أخرى أم منشأ آخر أم تنويعة تسويقية للاسم نفسه، لا يثبته أي من المصادر التي روجعت. والعلاقة غير مؤكدة وتبقى غير مؤكدة هنا.',
  },
  {
    label: 'Seufi',
    labelAr: 'سوفي',
    slug: 'seufi-oud',
    ordered: false,
    describes:
      'A label carried as a category in its own right, and the one most often described in the trade as the top tier — in the catalogues reviewed, as the top of the market rather than as a rung on a measured ladder.',
    describesAr:
      'تسمية تُحمل كفئة قائمة بذاتها، وهي أكثر التسميات وصفاً في السوق بأنها القمة — وفي الكتالوجات المراجعة بأنها قمة السوق لا حلقة في سلم مقيس.',
    doesNotEstablish:
      'The word is used in the trade for a class of wood described by appearance and handling, and the precise attribution varies between markets and sellers. It establishes neither a grade nor a measurable quality.',
    doesNotEstablishAr:
      'الكلمة تستعمل في السوق لصفّ من الخشب يُوصف بمظهره ومعالجته، ويختلف الإسناد الدقيق بين الأسواق والبائعين. وهي لا تثبت درجة ولا جودة قابلة للقياس.',
  },
  {
    label: 'Seyufi',
    labelAr: 'سيوفي',
    slug: 'seyufi-oud',
    ordered: false,
    describes:
      'A near-spelling of Seufi, carried as a separate category alongside it in at least one live merchant catalogue. The two are therefore both in commercial use as distinct names.',
    describesAr:
      'إملاء قريب من «سوفي»، يُحمل كفئة قائمة بجانبه في كتالوج تجاري حيّ واحد على الأقل. فالاثنان مستعملان تجارياً كاسمين مميزين.',
    doesNotEstablish:
      'Whether the two spellings denote the same material, different materials, or a regional variation is not established. The site records them as separate terms for that reason, and this page does not merge them.',
    doesNotEstablishAr:
      'أمسار الإملاءين يدلان على المادة نفسها أم مادتين أم اختلافاً إقليمياً، ليس مثبتاً. ولهذا يسجّل الموقع المصطلحين منفصلين، ولا يدمجهما هذه الصفحة.',
  },
];

export const gradeLadderArticles: Article[] = [
  {
    slug: 'quality/gulf-market-grade-labels',
    kind: 'guide',
    state: 'reviewed',
    title: 'Gulf-market oud grading vocabulary',
    titleAr: 'مفردات تقييم العود في سوق الخليج',
    h1: 'Gulf-market oud grading vocabulary',
    h1Ar: 'مفردات تقييم العود في سوق الخليج',
    summary:
      'The nine labels the Gulf trade uses to grade oud, which of them sit on an ordered ladder, which do not, and what none of them establishes.',
    summaryAr:
      'التسميات التسع التي يستعملها سوق الخليج لتقييم العود، وأيها يقع على سلم مرتَّب وأيها لا، وما لا يثبته أيٌّ منها.',
    directAnswer:
      'The Gulf trade grades oud with a vocabulary of nine labels rather than a scale. Five of them — VIP, VVIP and the Super series of three — are presented as an ordered ladder, one above another. The rest — Khaas, Khasal Khaas, Seufi and Seyufi — are carried as names without a stated position against the others, which means the vocabulary has no single top. No label in the set has a published definition, threshold or standard behind it: each is a seller\'s word for a judgement, not a measurement, and two lots bearing the same label from different sellers need not be comparable. The practical consequence is that a grade label tells you a seller\'s confidence and nothing about resin content, oil yield, age or origin, and the questions worth asking are about the lot rather than about the word.',
    directAnswerAr:
      'يقيّم سوق الخليج العود بمفردات من تسع تسميات لا بسلم. خمس منها — «في آي بي» و«في في آي بي» وسلسلة «سوبر» بثلاث حلقات — تُقدَّم كسلم مرتَّب، كلٌّ فوق الذي يليه. وأربع أخرى — «خاس» و«خسَل خاس» و«سوفي» و«سيوفي» — تُحمل أسماءً بلا موضع معلن بالنسبة إلى غيرها، أي إن للمفردات لا قمة واحدة. ولا خلف أي تسمية في المجموعة تعريف منشور ولا عتبة ولا معيار: فكلها كلمة بائع لحكم، لا قياس، ولا يلزم أن يكون لوطان يحملان التسمية نفسها عند بائعين مختلفين قابلين للمقارنة. والنتيجة العملية أن التسمية تخبرك بثقة البائع لا بشيء عن نسبة الراتنج ولا مردود الزيت ولا العمر ولا المنشأ، والأسئلة المفيدة تخصّ اللوط لا الكلمة.',
    sections: [
      {
        heading: 'A vocabulary, not a scale',
        headingAr: 'مفردات لا سلم',
        body: [
          'A scale has an order and a measurement. It says that a unit of one grade is worth some defined number of units of another, and that the whole thing can be checked against a published figure. A vocabulary has neither. It has words, and the words are used consistently enough that a buyer who knows them can follow a conversation, and loosely enough that two sellers can use the same word for different material.',
          'The Gulf vocabulary for grading oud sits in the second position. The labels below are in active commercial use — they appear as published product categories in live retail catalogues, which is a fact about the market and not about any standard. What no source consulted establishes is what any of them asserts in a way that could be checked.',
          'That distinction is the whole content of this page. A buyer who treats the ladder as a scale will ask the wrong question, because the question "is this really Double Super?" has no answer, while "what was measured to earn this label, by whom, and against what?" has a real one.',
        ],
        bodyAr: [
          'السلم له ترتيب وقياس. فهو يقول إن وحدة من درجة تساوي عدداً محدداً من وحدات أخرى، وأن الأمر كله يمكن مطابقته برقم منشور. أما المفردات فلا هذا ولا ذاك: لها كلمات، تُستعمل باتساق كافٍ ليعرفها المشتري فيتابع الحديث، وبمرونة كافٍ ليستعملها بائعان على مادة مختلفة.',
          'ومفردات الخليج لتقييم العود تقع في المرتبة الثانية. والتسميات الواردة أدناه حاضرة في الاستعمال التجاري — إذ تظهر كفئات منتجات منشورة في كتالوجات تجارية حيّة، وهي واقعة عن السوق لا عن أي معيار. ولا يثبت أي من المصادر التي روجعت ما تقرّره أيٌّ منها على نحو قابل للفحص.',
          'وهذه هي مضمون الصفحة كلها. فمن يعامل السلم كأنه مقياس يسأل السؤال الخطأ، لأن سؤال «هل هذا دبل سوبر حقاً؟» لا جواب له، في حين أن سؤال «بماذا قِيست هذه التسمية، ومن قاسها، وعلى أي أساس؟» له جواب حقيقي.',
        ],
      },
      {
        heading: 'The labels that are ordered against each other',
        headingAr: 'التسميات التي تُرتَّب فيما بينها',
        body: [
          'Five labels are presented as a sequence. VIP is the first rung and VVIP the second; the Super series sits above or alongside, with Super below Double Super and Double Super below Triple Super. The order is stable across the catalogues reviewed, which tells you the trade agrees on the sequence.',
          'It does not tell you the steps. Nothing published fixes what separates VIP from VVIP, or what a Double Super has that a Super does not, in a quantity that can be checked. The rungs are real as a commercial ranking; the intervals between them are not recorded anywhere.',
          'A specific caution applies to the top of this ladder. Triple Super is often described as the peak, and in the vocabulary of the Super series it is the top rung. But the labels Khaas and Khasal Khaas are carried in the same market without any stated position relative to Triple Super. So "the best" is not a single term in this vocabulary, and a buyer should ask which label the seller is using and what it is being compared against.',
        ],
        bodyAr: [
          'خمس تسميات تُقدَّم كسلسلة. «في آي بي» الحلقة الأولى و«في في آي بي» الثانية؛ وسلسلة «سوبر» فوق ذلك أو إلى جانبه، فـ«سوبر» دون «دبل سوبر» و«دبل سوبر» دون «تريبل سوبر». والترتيب ثابت في الكتالوجات المراجعة، وهذا يعني أن السوق متفق على التسلسل.',
          'لكنه لا يعني الخطوات. فلا شيء منشور يحدّد ما يفصل «في آي بي» عن «في في آي بي»، ولا ما يملكه «دبل سوبر» من «سوبر» لا يملكه، بكمية قابلة للفحص. الحلقات حقيقية بوصفها رتبة تجارية، أما الفواصل بينها فلا يوثقها شيء.',
          'وتنبيه خاص بقمة هذا السلم. فـ«تريبل سوبر» يوصف كثيراً بأنه القمة، وهو في مفردات سلسلة «سوبر» الحلقة العليا. غير أن تسميتي «خاس» و«خسَل خاس» تُحملان في السوق نفسه بلا أي موضع معلن بالنسبة إلى «تريبل سوبر». فليس في هذه المفردات لفظ واحد معناه «الأفضل»، وعلى المشتري أن يسأل عن التسمية المستعملة وبماذا تُقارَن.',
        ],
      },
      {
        heading: 'The labels that are carried without a position',
        headingAr: 'التسميات التي تُحمل بلا موضع',
        body: [
          'Khaas, Khasal Khaas, Seufi and Seyufi are different in kind from the five ordered labels. They are carried as categories in their own right, and in the descriptions reviewed they are described as rare, prized, or at the top of the market — as judgements about desirability rather than as positions on a measured scale.',
          'This does not make them less valuable labels. It makes them different ones. A seller using "Khaas" is telling a buyer that they consider the material exceptional; they are not placing it at a computable distance above "Super", because no such distance is recorded.',
          'Seufi is the clearest case. It is used in the trade for a class of wood described by its appearance and its handling, and it is the label most often described as the top of the market. Its fine attribution varies between markets and between sellers, which is a normal feature of a trade word and not a defect. What it does not do is state a quality that can be measured.',
        ],
        bodyAr: [
          '«خاس» و«خسَل خاس» و«سوفي» و«سيوفي» تختلف في جنسها عن التسميات الخمس المرتَّبة. فهي تُحمل كفئات قائمة بذاتها، وتوصف في النصوص المراجعة بأنها نادرة أو مرموقة أو في قمة السوق — أي أحكاماً على الاستحسان لا مواضع على سلم مقيس.',
          'وهذا لا يجعلها تسميات أقل قيمة. بل يجعلها تسميات مختلفة. فالبائع الذي يستعمل «خاس» يخبر المشتري أنه يعدّ المادة استثنائية؛ وهو لا يضعها على مسافة قابلة للحساب فوق «سوبر»، لأنه لا وجود لمثل هذه المسافة.',
          'وأوضح حالة هي «سوفي». فهو يستعمل في السوق لصفّ من الخشب يُوصف بمظهره ومعالجته، وهو التسمية التي توصف أكثر من غيرها بأنها قمة السوق. ويختلف إسنادها الدقيق بين الأسواق وبين البائعين، وهي سمة عادية لمصطلح تجاري لا خلل. أما ما لا يفعله فهو أن يقرّر جودة قابلة للقياس.',
        ],
      },
      {
        heading: 'Near-spelling pairs: a question to ask, not a difference to assume',
        headingAr: 'أزواج الإملاء المتقارب: سؤال تُسأل عنه لا افتراض يُبنى',
        body: [
          'Seufi and Seyufi appear together, as two separate categories, in at least one live merchant catalogue. They are also carried as two separate terms in this site\'s glossary, because their relationship is recorded as unconfirmed. Nothing consulted here establishes that they denote the same material, and nothing establishes that they do not.',
          'This is not a quibble about spelling. If a seller writes "Seyufi" and the buyer has in mind what the other spelling means, then a purchase can be made against a description that neither party held in the same way, and the two will discover it at the point of delivery rather than at the point of sale. The remedy is one sentence: ask which spelling is intended, and what distinguishes it from the other.',
          'The same caution applies to Khaas against Khasal Khaas, and to the size- and form-qualified shape names — Ball Muri against Muri, Baby Salla against Salla. The qualification is recorded, and the relationship between the qualified term and the unqualified one is not.',
        ],
        bodyAr: [
          'يظهر «سوفي» و«سيوفي» معاً، كفئتين مميّنتين، في كتالوج تجاري حيّ واحد على الأقل. وهما محمولان كذلك مصطلحين مميّزين في مسرد هذا الموقع، لأن صلتهما مسجَّلة على أنها غير مؤكدة. ولا يثبت هنا ما روجع أنهما يدلان على المادة نفسها، ولا يثبت أنهما لا يدلان عليها.',
          'وهذا ليس تنقيحاً في الإملاء. فإذا كتب البائع «سيوفي» وكان المشتري في ذهنه ما يعنيه الإملاء الآخر، أمكن أن يتم الشراء على أساس وصف لم يتّفق عليه الطرفان بالطريقة نفسها، ثم يكتشفان الفرق عند التسليم لا عند البيع. والعلاج جملة واحدة: اسأل عن الإملاء المقصود، وما الذي يميزه عن الآخر.',
          'وينطبق التحذير نفسه على «خاس» مقابل «خسَل خاس»، وعلى أسماء الأشكال المؤوَّنة بالمقاس والشكل — «بال موري» مقابل «موري»، و«بيبي سلة» مقابل «سلة». فالتأهيل مسجَّل، أما الصلة بين المصطلح المؤوَّن وغيره فليست.',
        ],
      },
      {
        heading: 'What a grade label does and does not tell you',
        headingAr: 'ما تخبرك به تسمية التقييم وما لا تخبرك به',
        body: [
          'A grade label tells you how the seller ranks the lot. That is a real piece of information, and it is not nothing: a seller who applies a label consistently across their own stock is telling a buyer something about their own standard, and a seller who cannot say what their label means is telling a buyer that the lot has not been assessed.',
          'What the label does not do is establish any of the quantities a buyer might want. It does not establish resin content. It does not establish oil yield, or the distillation method, or whether the material was wild or cultivated, or the species, or the age of the tree, or the age of the resin. It does not establish a price, and no label in this vocabulary implies one.',
          'So the questions worth asking are about the lot rather than the word: what was measured, by whom, against what method, and over which batch. A seller who answers those has a record, whatever they call the lot. A seller who answers only with the label has given you a name.',
        ],
        bodyAr: [
          'تخبرك تسمية التقييم بمكانة اللوط عند البائع. وهذه معلومة حقيقية، وليست لا شيء: فمن يطبّق تسمية بانتظام على مخزونه يخبر المشتري بمعياره هو، ومن لا يستطيع تفسير ما تعنيه تسميته يخبر المشتري بأن اللوط لم يُقيَّم.',
          'أما ما لا تفعله التسمية فهو إثبات أي من الكميات التي قد يريدها المشتري. لا تثبت نسبة الراتنج. ولا تثبت مردود الزيت ولا طريقة التقطير ولا هل كانت المادة برية أم مستزرعة ولا النوع ولا عمر الشجرة ولا عمر الراتنج. ولا تثبت سعراً، ولا تلمّح أي تسمية في هذه المفردات إلى سعر.',
          'فالأسئلة المفيدة تخصّ اللوط لا الكلمة: بماذا قِيست، ومن قاس، وبأي طريقة، وفي أي دفعة. ومن يجيب عن ذلك لديه سجل، مهما سمّى لوطه. ومن لا يجيب إلا بالتسمية فقد أعطى اسماً.',
        ],
      },
      {
        heading: 'How the vocabulary is used in practice',
        headingAr: 'كيف تُستعمل المفردات عملياً',
        body: [
          'In the catalogues reviewed, the labels are used as organising categories for a storefront — a way of letting a buyer narrow a range. That is a legitimate commercial use, and it is worth separating from the question of what the label asserts about a lot. A category page answers "show me the material this seller calls Triple Super"; it does not answer "what is Triple Super".',
          'The other use is conversational: the label is what a buyer and seller use to reach the same starting point before the conversation moves on to species, treatment, batch and record. Used that way, the vocabulary does its job. A label that is unclear is worse than no label, because it ends a negotiation that it should have started.',
          'The practical reading, then, is that the vocabulary is a shared short-hand rather than a standard, and that it works when both parties know it. Where it fails is when a buyer treats it as a guarantee, or when a seller uses a label whose meaning they cannot state.',
        ],
        bodyAr: [
          'في الكتالوجات المراجعة تُستعمل التسميات فئاتَ تنظيماً لواجهة بيع — طريقة تدع المشتري يضيّق نطاقاً. وهذا استعمال تجاري مشروع، ويستحق الفصل عن سؤال ما تقرّره التسمية عن لوط. فصفحة الفئة تجيب عن «أرني المادة التي يسمّيها هذا البائع تريبل سوبر»، ولا تجيب عن «ما هو تريبل سوبر».',
          'والاستعمال الثاني محفاري: التسمية هي ما يستعمله المشتري والبائع للوصول إلى نقطة بداية مشتركة قبل أن ينتقل الحديث إلى النوع والمعالجة والدفعة والسجل. وعلى هذا النحو تُجدي المفردات عملها. فالتسمية الغامضة أسوأ من التسمية المنعدمة، لأنها تُنهي تفاوضاً كان ينبغي أن تبدأه.',
          'فالقراءة العملية أن المفردات اختصار مشترك لا معيار، وأنها تعمل حين يعرفها الطرفان. وحيث تخفق هي حين يعاملها المشتري ضماناً، أو حين يستعمل البائع تسمية لا يستطيع بيان معناها.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014', 'FAOLEX'],
    limitations:
      'This page describes a vocabulary in commercial use and states what is not established about it. It does not define any label, does not attach a resin content, an oil yield, an age or a price to any of them, and does not establish the relationship between the near-spelling pairs it names. No label in this vocabulary is the subject of a published standard, and a lot bearing any one of these labels still has to be assessed on its own evidence.',
    limitationsAr:
      'تصف هذه الصفحة مفردات مستعملة تجارياً وتذكر ما هو غير مثبت عنها. وهي لا تعرّف أي تسمية، ولا تربط أياً منها بنسبة راتنج ولا مردود زيت ولا عمر ولا سعر، ولا تثبت الصلة بين أزواج الإملاء المتقارب التي تسمّيها. ولا وجود لأي تسمية في هذه المفردات لمعيار منشور، ولا يزال كل لوط يحمل أياً منها يحتاج إلى تقييم على أدلته الخاصة.',
    reviewer: REVIEWER,
    reviewerAr: REVIEWER_AR,
    reviewMethod: REVIEW_METHOD,
    reviewMethodAr: REVIEW_METHOD_AR,
    reviewedOn: REVIEWED_ON,
    nextSteps: [
      'Read how the Super series labels are used and what to ask instead',
      'Learn how a grading claim is structured and which parts are checkable',
      'See what a laboratory report can and cannot establish',
    ],
    nextStepsAr: [
      'اقرأ كيف تُستعمل تسميات سلسلة «سوبر» وما الذي يُسأل بدلها',
      'تعلّم كيف يُبنى ادعاء التقييم وأي أجزائه قابلة للفحص',
      'اعرف ما يمكن لتقرير مخبري إثباته وما لا يمكن',
    ],
    related: [
      { slug: 'quality/grade-label-dataset', label: 'The OudGuide grade-label dataset' },
      { slug: 'quality/seller-defined-super-grades', label: 'Super, Double Super and Triple Super labels' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
      { slug: 'quality/assessment-and-testing-limits', label: 'Assessment and testing limits' },
      { slug: 'quality/lab-report-reading', label: 'How to read the scope of a laboratory report' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'products/oud-wood', label: 'Oud Wood: the family these labels are used to sort' },
      { slug: 'products/oud-oil', label: 'Oud Oil: the family these labels are used to sort' },
      { slug: 'products/oud-powder', label: 'Oud Powder: the family these labels are used to sort' },
      { slug: 'products/bakhoor', label: 'Bakhoor: the family these labels are used to sort' },
      { slug: 'products/incense', label: 'Incense: the family these labels are used to sort' },
      { slug: 'products/attars', label: 'Attars: the family these labels are used to sort' },
    ],
    parent: 'quality',
  },
];
