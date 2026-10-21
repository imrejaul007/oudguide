import type { Article } from './types.ts';

/**
 * The remaining trade-terminology pages.
 *
 * The manifest declares 32 terminology routes. Seven were already
 * written in `glossary.ts`; the rest returned 404. These are those
 * remaining entries, each with its own page.
 *
 * The rule that shapes all of them: each is a spelling that may or may
 * not be the same thing as a neighbouring spelling. Mori and mini-muri
 * and ball-muri; salla and baby-salla and salda; girmi and girmit; zura
 * and zora; bisa and mini-bisa; seufi and seyufi; digga and dugga;
 * silani and seylani; kynam and kinam.
 *
 * None of those relationships is established here, and none of them is
 * denied. Each page says so, names the other spelling, and states what
 * would settle it. Merging them would assert a synonymy the sources do
 * not support; keeping them apart is the honest treatment.
 *
 * What no entry does: assign a physical shape, a country of origin, or
 * a universal grade mapping to a term.
 */

const REVIEWED_ON = '2026-10-20';
const REVIEWER = 'OudGuide editorial review';
const REVIEWER_AR = 'مراجعة تحريرية من دليل العود';
const REVIEW_METHOD =
  'Reviewed against the cited sources for the general referent of the term, and checked for a question-specific answer. The precise attribution was checked against general trade usage rather than against a single market, and each entry states which parts are local rather than general.';
const REVIEW_METHOD_AR =
  'رُوجعت مقابل المصادر المذكورة لأجل المرجع العام للمصطلح، ودُقِّق أن لكل صفحة إجابة خاصة بسؤالها. وقورنت الإسنادات الدقيقة بالممارسة التجارية العامة لا بسوق واحد، وذكرت كل مدخلة أي أجزائها محلية لا عامة.';

/**
 * Build one terminology entry.
 *
 * The structure follows the house glossary pattern and extends it, so
 * that a reader is given the spelling and its market, the attested
 * usage, the named neighbouring spellings, the alternative readings the
 * word invites, and what the word does not establish.
 */
function termEntry(spec: {
  slug: string;
  title: string;
  titleAr: string;
  summary: string;
  summaryAr: string;
  directAnswer: string;
  directAnswerAr: string;
  spelling: string;
  spellingAr: string;
  usage: string;
  usageAr: string;
  examples: string;
  examplesAr: string;
  alternatives: string;
  alternativesAr: string;
  doesNotProve: string;
  doesNotProveAr: string;
  limitations: string;
  limitationsAr: string;
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
        heading: 'Spelling, language and market',
        headingAr: 'الإملاء واللغة والسوق',
        body: [spec.spelling],
        bodyAr: [spec.spellingAr],
      },
      {
        heading: 'Attested usage',
        headingAr: 'الاستعمال المشهود',
        body: [spec.usage],
        bodyAr: [spec.usageAr],
      },
      {
        heading: 'Named examples and neighbouring spellings',
        headingAr: 'أمثلة مسمّاة وإملاءات مجاورة',
        body: [spec.examples],
        bodyAr: [spec.examplesAr],
      },
      {
        heading: 'Alternative meanings',
        headingAr: 'معانٍ أخرى محتملة',
        body: [spec.alternatives],
        bodyAr: [spec.alternativesAr],
      },
      {
        heading: 'What it does not prove',
        headingAr: 'ما لا يثبته',
        body: [spec.doesNotProve],
        bodyAr: [spec.doesNotProveAr],
      },
    ],
    sourceIds: spec.sourceIds,
    limitations: spec.limitations,
    limitationsAr: spec.limitationsAr,
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

export const glossaryTermArticles: Article[] = [
  termEntry({
    slug: 'glossary/mori',
    title: 'Mori',
    titleAr: 'موري',
    summary:
      'A wood-type name in Gulf and South Asian trade vocabulary; the referent is general, the attribution is local.',
    summaryAr:
      'اسم من مفردات أنواع الخشب في تجارة الخليج وجنوب آسيا؛ المرجع عام والإسناد محلي.',
    directAnswer:
      'Mori is a wood-type name used in Gulf and South Asian trade for a category of agarwood. The general referent can be stated: it names material of the kind that sellers using this family of names sell and describe, listed alongside terms such as Hindi Muri and Salla. What the name attributes — a provenance, a treatment, a quality tier — is settled locally and varies between sellers, and it is not established here that any neighbouring spelling is a variant of it.',
    directAnswerAr:
      '«موري» اسم لنوع من الخشب تستعمله تجارة الخليج وجنوب آسيا لفئة من العود. ويمكن قول المرجع العام: يسمّي مادةً من ذلك الصنف الذي يبيعه ويصفه البائعون المستعملون لهذه العائلة من الأسماء، مقروءاً إلى جانب أمثال «هندي موري» و«سلة». أما ما ينسبه الاسم — منشأً أو معالجةً أو مرتبة جودة — فيُحسم محلياً ويختلف بين البائعين، وليس مثبتاً هنا أن أيّ إملاء مجاور صورة منه.',
    spelling:
      'The name is written in Latin script in invoices, listings and warehouse notes, as Mori, mori or MORI. No trade body fixes an orthography for it, and the same letters are rendered in Arabic script as موري in Gulf usage. Transliteration is not a fixed procedure, so a written form is evidence of the writer rather than of the material. The vocabulary it belongs to circulates between South Asian suppliers and Gulf buyers, and its terms travel with quotations rather than with specifications.',
    spellingAr:
      'يُكتب الاسم بحروف لاتينية في الفواتير وقوائم البيع وملاحظات المستودع، بأشكال إملائية مختلفة يتفاوت بينها كتاب البائع. ولا يثبّت أيّ جهاز تجاري إملاءً معيّناً له، وتُكتب حروفه بالحرف العربي «موري» في الاستعمال الخليجي. وليس الترحيم إجراءً ثابتاً، فالصيغة المكتوبة دليل على كاتبها لا على مادتها. وتدور المفردات التي ينتمي إليها بين موردي جنوب آسيا ومشتري الخليج، وتسير مصطلحاتها مع عروض الأسعار لا مع المواصفات.',
    usage:
      'In use, the name appears in lists of wood types and in short descriptions of chips, dust and blocks offered for sale. Sellers commonly qualify it — by collection point, by whether the material was wild or cultivated, or by what it is intended for — so the bare word rarely travels alone in a serious transaction. The general referent is clear enough to state: a category of agarwood wood as named by sellers who use this vocabulary. The fine attribution is not. Where the name is the only description on a quotation, ask the counterparty what it means in that lot rather than assume a shared understanding.',
    usageAr:
      'في الاستعمال يظهر الاسم في قوائم أنواع الخشب وفي أوصاف قصيرة لرقائق ونشارة وقطع معروضة للبيع. ويقيده البائعون عادةً — بمكان الجمع، أو بكون المادة برية أم مستزرعة، أو باستعمالها المرتقب — فلا يسير الاسم وحده في صفقة جادة. فالمرجع العام واضح بما يكفي لقوله: فئة من خشب العود كما يسمّيها البائعون المستعملون لهذه المفردات. أما الإسناد الدقيق فليس كذلك. وحين يكون الاسم هو الوصف الوحيد في عرض سعر، فاسأل الطرف الآخر عن معناه في تلك الدفعة بدل افتراض فهم مشترك.',
    examples:
      'The same usage records the qualified forms Mini Muri and Ball Muri, and the separately recorded name Hindi Muri. Whether the qualified forms are subdivisions of Mori, selling names for the same material, or labels borrowed from elsewhere in the trade is not established here. What would settle it is documentary and ordinary: the same supplier’s own wording on two invoices, or a written definition from the counterparty at the point of quotation. Until one of those exists, the relationship between the spellings stays open, and each lot is described on its own terms.',
    examplesAr:
      'يسجّل الاستعمال نفسه الصور المزوّنة «ميني موري» و«بال موري»، واسم «هندي موري» المسجَّل على حدة. وأمّا إن كانت هذه الصور تقسيمات لموري أم أسماء بيع للمادة نفسها أم تسميات مستعارة من مواضع أخرى في التجارة، فليس مثبتاً هنا. وما يحسم ذلك وثائقي عادي: صياغة المورد نفسه في فاتورتين، أو تعريف مكتوب من الطرف الآخر عند التسعير. وإل أن يواحد منهما تبقى الصلة بين الإملاءات مفتوحة، وتُوصف كل دفعة بشروطها هي.',
    alternatives:
      'Outside the trade the same letters are common as a surname and as a given name in South Asian usage, and unrelated words are written the same way in other languages. A listing that carries a name and a name alone can be read in several ways, and the buyer should not assume the trade sense is the one intended. There is also the risk of over-reading a short word: in commerce generally a one-word label may denote a form, a treatment or a part rather than a category, and nothing in the word itself rules that out.',
    alternativesAr:
      'خارج التجارة تُكتب الحروف نفسها اسم عائلة واسم شخص شائعاً في جنوب آسيا، وتُكتب بها في لغات أخرى كلمات لا علاقة لها بها. فالعرض الذي يحمل اسماً بمفرده يمكن أن يُقرأ على وجوه، ولا ينبغي للمشتري أن يفترض أن المعنى التجاري هو المراد. وهناك أيضاً خطر الزيادة في قراءة كلمة قصيرة: في التجارة العامة قد تدل التسمية القصيرة على شكل أو معالجة أو جزء لا على فئة، ولا يمنع شيء من ذلك في بنية الكلمة نفسها.',
    doesNotProve:
      'The name does not establish the species of the wood, its resin content, its oil yield, its age, its size or form, or the place it grew. It does not establish a grade, and it is not a protected designation: nothing prevents its use for material from another origin. And it does not establish that Mini Muri, Ball Muri or Hindi Muri are the same material or different materials. Where the distinction would change what is being bought, the question belongs to the counterparty.',
    doesNotProveAr:
      'لا يثبت الاسم نوع الخشب ولا نسبة الراتنج فيه ولا مردود الزيت ولا العمر ولا الحجم ولا الشكل ولا مكان النمو. ولا يثبت درجةً ما، وليس اسماً محمياً: فلا شيء يمنع استعماله لمادة من منشأ آخر. ولا يثبت أن «ميني موري» و«بال موري» و«هندي موري» مادة واحدة أو مواد مختلفة. وحيث كان التمييز يغيّر المشتريات، فالسؤال للطرف الآخر.',
    limitations:
      'This entry gives the general trade referent of the term and the spellings recorded in the same usage. It does not establish the species, grading, composition, origin or quality of any material described with it, and it does not establish that the neighbouring spellings are variants of it.',
    limitationsAr:
      'تعطي هذه المدخلة المرجع التجاري العام للمصطلح والإملاءات المسجَّلة في الاستعمال نفسه. ولا تثبت النوع ولا التقييم ولا التركيب ولا المنشأ ولا جودة أي مادة يوصف بها، ولا تثبت أن الإملاءات المجاورة صور منه.',
    related: [
      { slug: 'glossary/mini-muri', label: 'Mini Muri' },
      { slug: 'glossary/ball-muri', label: 'Ball Muri' },
      { slug: 'glossary/hindi-muri', label: 'Hindi Muri' },
      { slug: 'quality/seller-defined-super-grades', label: 'Super, Double Super and Triple Super labels' },
      { slug: 'origins/india', label: 'India and northeast origin guide' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
  }),

  termEntry({
    slug: 'glossary/mini-muri',
    title: 'Mini Muri',
    titleAr: 'ميني موري',
    summary:
      'A size-qualified form of the wood-type name Mori, and the question the qualifier leaves open.',
    summaryAr:
      'صورة مزيَّنة بالمقاس من اسم نوع الخشب «موري»، والسؤال الذي يتركه المؤهل مفتوحاً.',
    directAnswer:
      'Mini Muri is the size-qualified form of the wood-type name Mori, recorded in the same trade usage. The qualifier in such names is a comparative term of the trade: it places material below what the unqualified name denotes, on some scale the seller has in mind. What that scale measures is not fixed anywhere, and this entry does not assign one. The general referent is therefore a qualified category of agarwood wood, and the fine attribution remains a question for the counterparty.',
    directAnswerAr:
      '«ميني موري» هي الصورة المزوّنة بالمقاس من اسم نوع الخشب «موري»، وهي مسجَّلة في الاستعمال التجاري نفسه. والمؤهل في هذه الأسماء اسمٌ وصفيٌّ نسبي: يَضع المادة دون ما يدل عليه الاسم المجرَّد، على مقياس في ذهن البائع. ولا يثبَّت هذا المقياس في أي مكان، ولا تخصّص هذه المدخلة مقياساً بعينه. فالمرجع العام إذن فئة من خشب العود موصوفة بمؤهل، ويبقى الإسناد الدقيق سؤالاً للطرف الآخر.',
    spelling:
      'The name is written with an English qualifier in front of the wood-type term: Mini Muri, mini muri, Mini-Muri. This is worth noting because the qualifier is not transliterated into Arabic script, which is unusual for this vocabulary; the Arabic rendering in Gulf usage is ميني موري. The English word is doing a job in the term that no other part of the name does, and it is doing it by comparison rather than by measurement.',
    spellingAr:
      'يُكتب الاسم بمؤهل إنجليزي يسبق اسم نوع الخشب، وتُكتب صوره في الفواتير بأشكال إملائية مختلفة. وهذا يستحق التنبيه لأن المؤهل لا يُرحَّم إلى الحرف العربي، وهو شاذ في هذه المفردات؛ فالصيغة العربية في الاستعمال الخليجي «ميني موري». والكلمة الإنجليزية تؤدّي في الاسم عملاً لا يقوم به أي جزء آخر منه، تؤدّيه بالمقارنة لا بالقياس.',
    usage:
      'A qualified form of this kind appears in lists of wood offered for sale, alongside the unqualified name and alongside other qualified forms. The comparison it makes is normally understood within a single seller’s stock rather than across the trade, so two lots described as the same qualified form by two sellers need not be comparable. Ask what the smaller size is measured against, and against whose material, before treating the label as informative.',
    usageAr:
      'تظهر هذه الصورة المزوّنة في قوائم الخشب المعروض للبيع، إلى جانب الاسم المجرَّد وإلى جانب صور مزوّنة أخرى. والمقارنة التي تجريها يفهمها البائع عادةً في مخزونه وحده لا في التجارة كلها، فدفعة موصوفة بالصورة نفسها من بائعين اثنين قد لا تكونان قابلتين للمقارنة. واسأل عن صغر الحجم مقابل ماذا، ومقابل مادّة من، قبل أن تعدّ التسمية مفيدة.',
    examples:
      'The neighbouring records are Mori, the unqualified name, and Ball Muri, which qualifies the same base term by form rather than by size. The three are frequently listed together, which is a fact about the listings and not about the material. What would establish the relationship is a supplier’s own written hierarchy, a batch record showing how the same source labels two lots, or a quotation in which the bare term and a qualified form are used of the same material.',
    examplesAr:
      'الإملاءات المجاورة هي «موري» الاسم المجرَّد، و«بال موري» الذي يقيّد الاسم نفسه بالشكل لا بالمقاس. والثلاثة تُدرَج معاً في كثير من القوائم، وهذه واقعة عن القوائم لا عن المادة. وما يُثبت الصلة هو تسلسل مكتوب من المورد نفسه، أو سجل دفعة يبيّن كيف يسمّي المصدر نفسه دفعتين، أو عرض سعر يُستعمل فيه الاسم المجرَّد والصورة المزوّنة للمادة نفسها.',
    alternatives:
      'The word mini is ordinary English for small, and in Gulf trade the same qualifier is applied to unrelated goods, which gives the word no particular standing here. It is also a common form of address and nickname, so a description that carries only the qualified name may be read as a personal or brand name. And nothing in the qualifier states whether the comparison is about length, thickness, chip size or weight.',
    alternativesAr:
      'كلمة «ميني» إنجليزية عادية بمعنى الصغر، وتُستعمل في تجارة الخليج للسلع المتباينة، فلا تحمل هنا مكانة خاصة. وهي أيضاً صورة شائعة من المخاطبة واللقب، فالوصف الذي يحمل الاسم المزوَّن وحده قد يُقرأ اسماً شخصياً أو اسماً تجارياً. وفي المؤهل لا شيء يبيّن إن كانت المقارنة في الطول أم في السماكة أم في حجم الرقائق أم في الوزن.',
    doesNotProve:
      'The name does not establish a size in any unit, a shape, a grade, a species, a country of origin, or the resin content of the material. Nor does it establish that a Mini Muri lot is Mori at all, or that Mori and Mini Muri are graded points on a single scale. The word is a comparative label in a seller’s description, and a comparison the buyer cannot check is not a specification.',
    doesNotProveAr:
      'لا يثبت الاسم حجماً بوحدة ما ولا شكلاً ولا درجةً ولا نوعاً ولا منشأً ولا نسبة الراتنج في المادة. ولا يثبت أن دفعة «ميني موري» موري أصلاً، ولا أن «موري» و«ميني موري» نقطتان في مقياس واحد. والكلمة تسمية مقارنة في وصف البائع، والمقارنة التي لا يستطيع المشتري التحقق منها ليست مواصفة.',
    limitations:
      'This entry gives the general trade referent of the qualified form and the neighbouring spellings. It does not establish a size, shape, grade, composition or origin, and it does not establish a hierarchy between the qualified and the unqualified name.',
    limitationsAr:
      'تعطي هذه المدخلة المرجع التجاري العام للصورة المزوّنة والإملاءات المجاورة. ولا تثبت حجماً ولا شكلاً ولا درجةً ولا تركيباً ولا منشأً، ولا تثبت تدرّجاً بين الاسم المزوَّن والاسم المجرَّد.',
    related: [
      { slug: 'glossary/mori', label: 'Mori' },
      { slug: 'glossary/ball-muri', label: 'Ball Muri' },
      { slug: 'glossary/hindi-muri', label: 'Hindi Muri' },
      { slug: 'quality/seller-defined-super-grades', label: 'Super, Double Super and Triple Super labels' },
      { slug: 'using-oud/wood-versus-oil', label: 'Wood against oil in use' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
  }),

  termEntry({
    slug: 'glossary/ball-muri',
    title: 'Ball Muri',
    titleAr: 'بال موري',
    summary:
      'A form-qualified form of the wood-type name Mori, and why no shape is assigned to it here.',
    summaryAr:
      'صورة مزيَّنة بالشكل من اسم نوع الخشب «موري»، ولماذا لا تُنسب إليها هنا شكلٌ محدد.',
    directAnswer:
      'Ball Muri is the form-qualified form of the wood-type name Mori, recorded in the same trade usage. The qualifier in this vocabulary is commonly a shape word, and this entry does not assign a shape to it: whether it denotes a rounded prepared piece, a cut form, or a maker’s trade name for something else is not established here. The general referent is a qualified category of agarwood wood, and what the qualifier specifies is a question for the counterparty.',
    directAnswerAr:
      '«بال موري» هي الصورة المزوّنة بالشكل من اسم نوع الخشب «موري»، وهي مسجَّلة في الاستعمال التجاري نفسه. والمؤهل في هذه المفردات كلمة شكل عادةً، وهذه المدخلة لا تنسب شكلاً بعينه: فهل تدل على قطعة معالَجة مستديرة أم على شكل مقطوع أم على اسم صنعٍ لشيء آخر، فليس مثبتاً هنا. فالمرجع العام فئة من خشب العود موصوفة بمؤهل، وما يحدده المؤهل سؤال للطرف الآخر.',
    spelling:
      'The name is written as Ball Muri, ball muri or Ball-Muri, with the English qualifier untransliterated and the wood-type term in Latin script. The Arabic rendering in Gulf usage is بال موري. The two أجزاء of the name are of different origins and behave differently: the base term belongs to a shared trade vocabulary, while the qualifier belongs to the general commercial language of the buyers who write the list.',
    spellingAr:
      'يُكتب الاسم بمؤهل إنجليزي غير مُرحَّم واسم نوع الخشب بحروف لاتينية، وتختلف صوره الإملائية بين البائعين. والصيغة العربية في الاستعمال الخليجي «بال موري». وجزءا الاسم من أصلين وسلوكهما مختلف: فاسم الأساس من مفردات تجارية مشتركة، والمؤهل من اللغة التجارية العامة لمن يكتبون القائمة.',
    usage:
      'Qualified forms of this kind appear in descriptions of wood offered for sale, and their comparative sense is normally read against the unqualified name within one seller’s stock. The qualifier also tends to survive into later documents without explanation, so a piece of paperwork may carry the term long after anyone at the counter remembers why it was used. If the form matters to the buyer, ask for it in writing rather than in a description.',
    usageAr:
      'تظهر هذه الصور المزوّنة في أوصاف الخشب المعروض للبيع، وتُقرأ معناها النسبي في العادة في مخزون البائع الواحد مقابل الاسم المجرَّد. كما يميل المؤهل إلى البقاء في الأوراق اللاحقة بلا تفسير، فقد تحمل وثيقة ما هذه الكلمة بعد أن ينسى أحد عند المنضدة سبب استعمالها. وإن كان الشكل مهماً للمشتري، فليطلبه كتابةً لا في وصف شفهي.',
    examples:
      'The neighbouring records are Mori and Mini Muri, which qualify the same base term in different ways, and Hindi Muri, which is recorded separately. The four are commonly offered in a single list, and a list is a place where terms are assembled for a customer rather than a place where a taxonomy is fixed. A supplier’s own written definition, or a record showing the same source using the term and the unqualified name of one material, would settle the question.',
    examplesAr:
      'الإملاءات المجاورة هي «موري» و«ميني موري»، وكلاهما يقيّد اسم الأساس على وجه، و«هندي موري» المسجَّل على حدة. والأربعة تُعرض معاً في قائمة واحدة في الغالب، والقائمة مكان تُجمَع فيه المصطلحات لعميل لا مكان تُضبط فيه تصنيفات. وما يحسم السؤال هو تعريف مكتوب من المورد، أو سجل يُبيّن استعمال المصدر نفسه للكلمة واسم المادة المجرَّد على مادة واحدة.',
    alternatives:
      'The word ball has its ordinary English senses of a sphere and of a social gathering, and it appears in Gulf trade in other names entirely unrelated to wood. A description carrying only the qualified name can therefore be read as a shape, a brand, or a form of address. And nothing in the qualifier itself settles whether it describes the shape of the piece or a stage in its preparation.',
    alternativesAr:
      'لكلمة «بال» معانيها الإنجليزية المعتادة: الكرة، والعرس. وتظهر في تجارة الخليج في أسماء لا علاقة لها بالخشب إطلاقاً. فالوصف الذي يحمل الاسم المزوَّن وحده قد يُقرأ شكلاً أو اسماً تجارياً أو صورة من المخاطبة. ولا يَحسم المؤهل في نفسه إن كان يصف شكل القطعة أم مرحلة في إعدادها.',
    doesNotProve:
      'The name does not establish a shape, a size, a grade, a species, a country of origin, or the resin content of the material. Nor does it establish that Ball Muri is Mori, or that the term describes a form rather than a maker. Where a particular physical form is what the purchase turns on, the description has to come from the counterparty; a trade word cannot supply it.',
    doesNotProveAr:
      'لا يثبت الاسم شكلاً ولا حجماً ولا درجةً ولا نوعاً ولا منشأً ولا نسبة الراتنج في المادة. ولا يثبت أن «بال موري» هو «موري»، ولا أن المصطلح يصف شكلاً لا صانعاً. وحيث كان الشكل المعيّن هو محل الشراء، فلا بد أن يأتي الوصف من الطرف الآخر؛ فكلمة تجارية لا تقدر أن تأتي به.',
    limitations:
      'This entry gives the general trade referent of the qualified form and the neighbouring spellings. It does not assign a shape, size, grade, composition or origin, and it does not establish the relationship between the qualified and the unqualified name.',
    limitationsAr:
      'تعطي هذه المدخلة المرجع التجاري العام للصورة المزوّنة والإملاءات المجاورة. ولا تنسب لها شكلاً ولا حجماً ولا درجةً ولا تركيباً ولا منشأً، ولا تثبت الصلة بين الاسم المزوَّن والاسم المجرَّد.',
    related: [
      { slug: 'glossary/mori', label: 'Mori' },
      { slug: 'glossary/mini-muri', label: 'Mini Muri' },
      { slug: 'glossary/hindi-muri', label: 'Hindi Muri' },
      { slug: 'buying/choosing-oud-wood', label: 'Choosing oud wood' },
      { slug: 'using-oud/wood-versus-oil', label: 'Wood against oil in use' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
  }),

  termEntry({
    slug: 'glossary/salla',
    title: 'Salla',
    titleAr: 'سلة',
    summary:
      'A wood-type name in Gulf trade usage, and the neighbouring spellings recorded with it.',
    summaryAr:
      'اسم من مفردات أنواع الخشب في الاستعمال الخليجي، والإملاءات المجاورة المسجَّلة معه.',
    directAnswer:
      'Salla is a wood-type name used in Gulf trade for a category of agarwood. It appears in lists of wood types and in descriptions of material offered for sale, and it is used loosely enough that the general referent can be stated while the attribution cannot. A qualified form, Baby Salla, and a near-spelling, Salda, are recorded in the same usage. Whether they are the same word written three ways, subdivisions of one name, or separate names is not established here.',
    directAnswerAr:
      '«سلة» اسم لنوع من الخشب تستعمله التجارة الخليجية لفئة من العود. وهو يظهر في قوائم أنواع الخشب وفي أوصاف المواد المعروضة للبيع، ويُستعمل فضفاضةً بما يكفي لقول المرجع العام دون القدرة على قول الإسناد. وقد سُجِّلت في الاستعمال نفسه صورة مزوّنة بالمقاس هي «بيبي سلة»، وإملاء قريب هو «سلدة». وأمّا إن كانت هذه كلمة واحدة تُكتب على ثلاث صور أم تقسيمات لاسم واحد أم أسماء متباينة، فليس مثبتاً هنا.',
    spelling:
      'The name is written in Latin script in Gulf trade records and invoices, as Salla or salla, and in Arabic script as سلة. It is worth separating the script from the word: in ordinary Arabic سلة is a common noun meaning a basket, and a reader meeting the word in a trade list may carry that sense into it. That ordinary sense is not the trade referent, and the two should not be allowed to blur into one another.',
    spellingAr:
      'يُكتب الاسم بحروف لاتينية في سجلات التجارة الخليجية والفواتير، بأشكال إملائية تتفاوت، وبالحرف العربي «سلة». وفصل النص عن اللفظ يستحق عناية: فـ«سلة» في العربية العادية اسم شائع بمعنى قُفة، وقد يحمل قارئُ اللفظ ذلك المعنى إلى هنا. وذلك المعنى العادي ليس المرجع التجاري، ولا ينبغي أن يذوب أحدهما في الآخر.',
    usage:
      'The name is used in the way this whole vocabulary is used: to name a category of wood for a buyer who already knows the market, usually alongside a qualifier that says more. It carries a general sense of a type of agarwood wood and no more that can be relied on. A buyer who needs a specific attribute should ask what the term means in that seller’s stock and what distinguishes it from the other names in the same list.',
    usageAr:
      'يُستعمل الاسم بالطريقة التي تستعمل بها هذه المفردات كلها: تسمية فئة من الخشب لمشترٍ يعرف السوق، عادةً إلى جانب مؤهل يقول أكثر. وهو يحمل معنى عام عن نوع من خشب العود لا غيره ما يمكن الاعتماد عليه. ومن احتاج صفة بعينها فليسأله بما يعنيه المصطلح في مخزون البائع، وما الذي يميّزه عن سائر الأسماء في القائمة نفسها.',
    examples:
      'The usage records Baby Salla, a size-qualified form, and Salda, a near-spelling that is written with a different vowel. The three are often listed together, and a shopfront that lists them together is making a commercial arrangement rather than a classification. What would settle the relationship is a seller’s written definition, or a record in which the same material is called by two of these names, or a quotation that uses the bare name and the qualified form of one lot.',
    examplesAr:
      'يسجّل الاستعمال «بيبي سلة» صورةً مزوّنة بالمقاس، و«سلدة» إملاءً قريباً يختلف في حركة من الحركات. والثلاثة تُدرَج معاً في كثير من القوائم، واجهةُ محل تدرجها معاً ترتيبٌ تجاري لا تصنيف. وما يحسم الصلة هو تعريف مكتوب من البائع، أو سجل فيه مادة واحدة سُمّيت باسمين من هذه، أو عرض سعر يستعمل فيه الاسم المجرَّد والصورة المزوّنة لدفعة واحدة.',
    alternatives:
      'Two readings are worth keeping apart. In ordinary Arabic the word means a basket, and in several Gulf and South Asian languages the same string is also a place name, so a reader may take the term for an origin when it is a name. Separately, Salla is a common personal name, and a description in which the term stands alone may be naming a person rather than a material.',
    alternativesAr:
      'هناك قراءتان يُستحسن إبعادهما. في العربية العادية تعني الكلمة قُفة، وفي عدة لغات خليجية وجنوب آسيوية اللفظ نفسه اسم موضع أيضاً، فقد يأخذ القارئ المصطلح منشأً وهو اسم فحسب. ثم إنّ «سلة» اسم شخص شائع، فالوصف الذي يقف فيه المصطلح وحده قد يسمّي إنساناً لا مادة.',
    doesNotProve:
      'The name does not establish the species, the resin content, the oil yield, the age, the size or form of the wood, or the country it came from. It does not establish a grade, and it is not a protected designation. And it does not establish that Salda is the same word, nor that Baby Salla is a subdivision of it, nor that any of them denotes a particular place.',
    doesNotProveAr:
      'لا يثبت الاسم نوع الخشب ولا نسبة الراتنج ولا مردود الزيت ولا العمر ولا الحجم ولا الشكل ولا بلد المنشأ. ولا يثبت درجةً ما، وليس اسماً محمياً. ولا يثبت أن «سلدة» هي الكلمة نفسها، ولا أن «بيبي سلة» تقسيم لها، ولا أن أياً منها يدل على موضع بعينه.',
    limitations:
      'This entry gives the general trade referent of the term and the neighbouring spellings recorded with it. It does not establish the species, grading, composition, origin or quality of any material described with it, and it does not establish a synonymy between the spellings.',
    limitationsAr:
      'تعطي هذه المدخلة المرجع التجاري العام للمصطلح والإملاءات المجاورة المسجَّلة معه. ولا تثبت النوع ولا التقييم ولا التركيب ولا المنشأ ولا جودة أي مادة يوصف بها، ولا تثبت ترادفاً بين الإملاءات.',
    related: [
      { slug: 'glossary/baby-salla', label: 'Baby Salla' },
      { slug: 'glossary/salda', label: 'Salda' },
      { slug: 'glossary/hindi-muri', label: 'Hindi Muri' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
      { slug: 'origins/india', label: 'India and northeast origin guide' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
  }),

  termEntry({
    slug: 'glossary/baby-salla',
    title: 'Baby Salla',
    titleAr: 'بيبي سلة',
    summary:
      'A size-qualified form of the wood-type name Salla, and the scale it leaves unspecified.',
    summaryAr:
      'صورة مزيَّنة بالمقاس من اسم نوع الخشب «سلة»، والمقياس الذي تتركه غير محدد.',
    directAnswer:
      'Baby Salla is the size-qualified form of the wood-type name Salla, recorded in Gulf trade usage. As with the other qualified forms in this vocabulary, the qualifier is a comparative term of the trade rather than a measurement: it places material below what the unqualified name denotes, on a scale the seller has in mind and does not publish. The general referent is a qualified category of agarwood wood. The scale itself has to be asked for.',
    directAnswerAr:
      '«بيبي سلة» هي الصورة المزوّنة بالمقاس من اسم نوع الخشب «سلة»، وهي مسجَّلة في الاستعمال الخليجي. ومثل سائر الصور المزوّنة في هذه المفردات، المؤهل اسمٌ وصفيٌّ نسبي لا قياس: يَضع المادة دون ما يدل عليه الاسم المجرَّد، على مقياس في ذهن البائع لا ينشره. فالمرجع العام فئة من خشب العود موصوفة بمؤهل. أما المقياس نفسه فينبغي أن يُطلب.',
    spelling:
      'The name is written with the English qualifier in front of the wood-type term: Baby Salla, baby salla, Baby-Salla. The qualifier is not transliterated, which is the pattern in this vocabulary for words borrowed from commercial English, and the Arabic rendering in Gulf usage is بيبي سلة. Baby and mini are used interchangeably by some sellers and not by others; the choice between them is not recorded anywhere and is not treated here as meaningful.',
    spellingAr:
      'يُكتب الاسم بمؤهل إنجليزي يسبق اسم نوع الخشب، وتختلف صوره الإملائية بين البائعين. والمؤهل غير مُرحَّم، وهو النمط في هذه المفردات للكلمات المستعارة من الإنجليزية التجارية، والصيغة العربية في الاستعمال الخليجي «بيبي سلة». ويشيع استعمال «بيبي» و«ميني» كلمتين متبادلتين عند بعض البائعين دون غيرهم؛ ولا يُسجَّل هذا الاختيار في أي مكان، ولا يُعدّ هنا ذا معنى.',
    usage:
      'The form appears in descriptions of wood offered for sale, and its comparative sense is read against the unqualified name within a single seller’s stock rather than across the trade. The word does not tell the buyer what the comparison is measured on. Where size matters, ask what the seller compares the material against, and what a buyer would be expected to receive for the name.',
    usageAr:
      'تظهر هذه الصورة في أوصاف الخشب المعروض للبيع، وتُقرأ معناها النسبي في مخزون بائع واحد لا في التجارة كلها. والكلمة لا تقول للمشتري على أي أساس يجري القياس. وحيث كان الحجم مهماً، فاسأل على أي شيء يقارن البائع مادته، وما الذي يُتوقع من المشتري أن يتلقاه مقابل هذا الاسم.',
    examples:
      'The neighbouring records are Salla, the unqualified name, and Salda, a near-spelling recorded in the same usage. All three are commonly listed together. That is evidence of how the trade presents itself to a buyer, not of how the words are related to one another. A supplier’s written definition, or a quotation in which the bare and the qualified form describe one lot, would settle the matter.',
    examplesAr:
      'الإملاءات المجاورة هي «سلة» الاسم المجرَّد، و«سلدة» إملاءً قريباً مسجَّلاً في الاستعمال نفسه. والثلاثة تُدرَج معاً في الغالب. وهذه واقعة عن طريقة عرض التجارة نفسها للمشتري، لا عن صلة الكلمات ببعضها. وما يحسم المسألة هو تعريف مكتوب من المورد، أو عرض سعر يصف فيه الاسم المجرَّد والصورة المزوّنة دفعةً واحدة.',
    alternatives:
      'Baby is ordinary English for a small child and is used in Gulf trade as a general qualifier for many unrelated goods, so it carries no particular trade standing. It is also a form of endearment, and a short description that names a material this way may be read as a brand, a nickname or a personal name. Neither reading is excluded by the label itself.',
    alternativesAr:
      '«بيبي» إنجليزية عادية بمعنى الطفل الصغير، وتُستعمل في تجارة الخليج مؤهلاً عاماً لسلع لا علاقة لها بعضها ببعض، فلا تحمل لها مكانة تجارية خاصة. وهي أيضاً تحبُّب، فالوصف القصير الذي يسمّي مادةً بهذه الصورة قد يُقرأ اسماً تجارياً أو لقباً أو اسم شخص. وليس التسمية نفسها تستبعد هذين القراءةين.',
    doesNotProve:
      'The name does not establish a size, a shape, a grade, a species, a country of origin, or the resin content of the wood. It does not establish that Baby Salla is Salla, nor that the two are graded points on one scale, and it does not establish a relationship with Salda. The scale a seller has in mind is not recoverable from the word; only the seller can state it.',
    doesNotProveAr:
      'لا يثبت الاسم حجماً ولا شكلاً ولا درجةً ولا نوعاً ولا منشأً ولا نسبة الراتنج في الخشب. ولا يثبت أن «بيبي سلة» هي «سلة»، ولا أنهما نقطتان في مقياس واحد، ولا يثبت صلةً بـ«سلدة». والمقياس الذي في ذهن البائع لا يُستخرج من الكلمة، ولا يعلمه إلا البائع.',
    limitations:
      'This entry gives the general trade referent of the qualified form and the neighbouring spellings. It does not establish a size, shape, grade, composition or origin, and it does not establish a synonymy or a hierarchy between the spellings.',
    limitationsAr:
      'تعطي هذه المدخلة المرجع التجاري العام للصورة المزوّنة والإملاءات المجاورة. ولا تثبت حجماً ولا شكلاً ولا درجةً ولا تركيباً ولا منشأً، ولا تثبت ترادفاً ولا تدرّجاً بين الإملاءات.',
    related: [
      { slug: 'glossary/salla', label: 'Salla' },
      { slug: 'glossary/salda', label: 'Salda' },
      { slug: 'glossary/mini-bisa', label: 'Mini Bisa' },
      { slug: 'quality/seller-defined-super-grades', label: 'Super, Double Super and Triple Super labels' },
      { slug: 'using-oud/wood-versus-oil', label: 'Wood against oil in use' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
  }),

  termEntry({
    slug: 'glossary/salda',
    title: 'Salda',
    titleAr: 'سلدة',
    summary:
      'A near-spelling recorded in the same usage as Salla, with the relationship left open.',
    summaryAr:
      'إملاء قريب مسجَّل في الاستعمال نفسه كـ«سلة»، وتُترك الصلة مفتوحة.',
    directAnswer:
      'Salda is a spelling recorded in the same trade usage as Salla. It is a wood-type name, and it carries a general referent of the same order: a category of agarwood wood as named by sellers who use this vocabulary. Whether it is a transliteration variant of Salla, a separate name, or a spelling used by one market or one seller is not established here, and the entry does not assert any of the three.',
    directAnswerAr:
      '«سلدة» إملاء مسجَّل في الاستعمال التجاري نفسه كـ«سلة». وهو اسم لنوع من الخشب، ويحمل مرجعاً عاماً من المرتبة نفسها: فئة من خشب العود كما يسمّيها البائعون المستعملون لهذه المفردات. وأمّا إن كان صورةً وترحيماً لـ«سلة» أم اسماً مستقلاً أم إملاءً يستعمله سوق أو بائع بعينه، فليس مثبتاً هنا، ولا تدّعي هذه المدخلة أيّاً من الثلاثة.',
    spelling:
      'The name is written Salda or salda, with the vowel written as in the Latin letter and the word otherwise in the same Latin script as the rest of this vocabulary. It is rendered in Arabic script as سلدة. The difference from Salla is a single vowel, and single-vowel differences in this trade carry no known weight: they may be a transliteration habit, a different source language, or a separate word.',
    spellingAr:
      'يُكتب الاسم بحروف لاتينية، بحركة مكتوبة بحرفها اللاتيني وبالخط اللاتيني في بقيّة الاسم، كما سائر هذه المفردات. ويُكتب بالحرف العربي «سلدة». والفرق عن «سلة» حركة واحدة، واختلاف الحركة الواحدة في هذه التجارة لا يحمل وزناً معروفاً: فقد يكون عادة في الترحيم، أو لغة مصدر مختلفة، أو كلمةً مستقلة.',
    usage:
      'Salda appears in lists of wood types and in sale descriptions in the same way as the neighbouring names. Because the general referent is shared with Salla, the practical difficulty is not what kind of material is meant but which of the two words a particular seller means when they write it. Where a purchase turns on the difference, the difference has to come from the counterparty in writing.',
    usageAr:
      'يظهر «سلدة» في قوائم أنواع الخشب وفي أوصاف البيع بالطريقة نفسها التي يظهر بها الأسماء المجاورة. ولأن المرجع العام مشترك مع «سلة»، فليس العسر في معرفة نوع المادة المقصود بل في معرفة أيّ الكلمتين يعنيها بائع بعينه حين يكتبها. وحيث كان الشراء متوقفاً على الفرق، فلا بد أن يأتي الفرق من الطرف الآخر كتابةً.',
    examples:
      'The neighbouring records are Salla and its qualified form Baby Salla, and the wider wood-type family including Mori and Hindi Muri. These appear together in the same listings, which is a commercial arrangement rather than a taxonomy. The three things that would settle the question are ordinary: a seller’s own definition of the word, a record in which one material carries two of these names, and a quotation in which Salla and Salda are used of different lots with the difference explained.',
    examplesAr:
      'الإملاءات المجاورة هي «سلة» وصورتها المزوّنة «بيبي سلة»، وعائلة أنواع الخشب الأوسع التي فيها «موري» و«هندي موري». وهذه تظهر معاً في القوائم نفسها، وهو ترتيب تجاري لا تصنيف. والأشياء الثلاثة التي تحسم السؤال عادية: تعريف البائع للكلمة، وسجل يحمل فيه اسم واحد اسمين من هذه، وعرض سعر يستعمل فيه «سلة» و«سلدة» لدفعتين مختلفتين مع بيان الفرق.',
    alternatives:
      'The same string is in use as a place name in more than one country, so a reader may read the term as an origin; nothing in the trade usage supports that reading. It is also used as a personal name in South Asian usage, so a description that carries it alone may be naming a person. And in a short trade list a single word can be a house name, a brand or a grade the writer has not defined.',
    alternativesAr:
      'اللفظ نفسه مستعمل اسم موضع في أكثر من بلد، فقد يقرأه القارئ منشأً، ولا شيء في الاستعمال التجاري يؤيد تلك القراءة. وهو مستعمل كذلك اسماً شخصياً في جنوب آسيا، فالوصف الذي يحمله وحده قد يسمّي إنساناً. وفي قائمة تجارية قصيرة قد تكون الكلمة الواحدة اسم دكان أو اسماً تجارياً أو درجةً لم يعرّفها الكاتب.',
    doesNotProve:
      'The name does not establish the species, the resin content, the oil yield, the age, the size or form of the wood, a country of origin, or a grade. It does not establish that Salda and Salla are the same material, and it does not establish that they are different materials either. Both readings remain open, and the entry records the spellings rather than resolving them.',
    doesNotProveAr:
      'لا يثبت الاسم نوع الخشب ولا نسبة الراتنج ولا مردود الزيت ولا العمر ولا الحجم ولا الشكل ولا منشأً ولا درجةً. ولا يثبت أن «سلدة» و«سلة» مادة واحدة، ولا يثبت أنهما مادّتان مختلفتان. فكلا القراءتين مفتوح، وتسجّل هذه المدخلة الإملاءات دون أن تحسمها.',
    limitations:
      'This entry gives the general trade referent of the spelling and its neighbours. It does not establish a synonymy with Salla or with any other spelling, and it does not establish the species, grading, composition, origin or quality of any material described with it.',
    limitationsAr:
      'تعطي هذه المدخلة المرجع التجاري العام لهذا الإملاء وما يجاوره. ولا تثبت ترادفاً مع «سلة» أو مع أي إملاء آخر، ولا تثبت النوع ولا التقييم ولا التركيب ولا المنشأ ولا جودة أي مادة يوصف بها.',
    related: [
      { slug: 'glossary/salla', label: 'Salla' },
      { slug: 'glossary/baby-salla', label: 'Baby Salla' },
      { slug: 'glossary/mori', label: 'Mori' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
      { slug: 'sourcing/reading-a-quotation', label: 'Reading a quotation' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
  }),
  termEntry({
    slug: 'glossary/zawaya',
    title: 'Zawaya',
    titleAr: 'زوايا',
    summary:
      'A wood-type name in Gulf and South Asian trade vocabulary, used with varying attribution.',
    summaryAr:
      'اسم من مفردات أنواع الخشب في تجارة الخليج وجنوب آسيا، يُستعمل بإسناد متفاوت.',
    directAnswer:
      'Zawaya is a wood-type name in the vocabulary Gulf and South Asian sellers use to name categories of agarwood. The general referent can be stated: it names a type of wood as sellers using this vocabulary describe it. What it attributes is a separate question, and one that this entry does not الجواب — a place, a treatment, a price tier and a quality judgement are all things a word of this kind may be doing, and they are settled locally rather than by any published rule.',
    directAnswerAr:
      '«زوايا» اسم من مفردات أنواع الخشب التي يستعملها البائعون في الخليج وجنوب آسيا لتسمية فئات من العود. ويمكن قول المرجع العام: يسمّي نوعاً من الخشب كما يصفه البائعون المستعملون لهذه المفردات. أما ما ينسبه فسؤال آخر لا تجيب عنه هذه المدخلة: فمكان، ومعالجة، ومرتبة سعرية، وحكم على الجودة — كل هذه أشياء قد يكون يقومها هذا اللفظ، وهي تُحسم محلياً لا بأي قاعدة منشورة.',
    spelling:
      'The name is written in Latin script in invoices and listings, as Zawaya, and in Arabic script as زوايا. It is one of the names in this vocabulary whose sense is least evident from the letters themselves, and a reader meeting it without trade context has little to go on. That is a reason to treat the word as a label to be defined rather than as a description to be interpreted.',
    spellingAr:
      'يُكتب الاسم بحروف لاتينية في الفواتير وقوائم البيع، وبالحرف العربي «زوايا». وهو من الأسماء في هذه المفردات التي لا يكاد يظهر معنى اللفظ منها، فيبقى لقارئٍ يطالعه خارج سياق تجاري ما يعتمد عليه. وهذا سبب للتعامل مع الكلمة على أنها تسمية تُعرَّف لا وصفٌ يُفسَّر.',
    usage:
      'The name appears in lists of wood types and in short sale descriptions, and it is qualified more often than not — by collection area, by treatment, or by what the material is wanted for. The general sense is a category of agarwood wood, and that is the most that can be relied on. Where a purchase depends on what the term rules in or out, the الجواب has to come from the counterparty in writing.',
    usageAr:
      'يظهر الاسم في قوائم أنواع الخشب وفي أوصاف بيع قصيرة، ويقيده ما بعده في الغالب — بمكان الجمع، أو بالمعالجة، أو باستعمال المادة المرتقب. والمعنى العام فئة من خشب العود، وهو أبعد ما يمكن الاعتماد عليه. وحيث كان الشراء معتمداً على ما يدخله المصطلح وما يخرجه، فلا بد أن يأتي الجواب من الطرف الآخر كتابةً.',
    examples:
      'The name is listed alongside the other wood-type terms of this vocabulary, including Mori, Salla and Hindi Muri, and it has no qualified or near-spelling of its own recorded here. What a supplier means by it is documented by that supplier\'s own listings and quotations, and those documents are the record worth keeping.',
    examplesAr:
      'يُدرَج الاسم إلى جانب سائر مصطلحات أنواع الخشب في هذه المفردات، ومنها «موري» و«سلة» و«هندي موري»، ولا يُسجَّل له هنا صورة مزوّنة ولا إملاء قريب. وما يعنيه به المورد موثَّق في قوائمه وعروض أسعاره، وهذه هي الوثيقة التي تستحق الحفظ.',
    alternatives:
      'The same string is a common Arabic and South Asian place name, and in a trade list a reader may take it for an origin when the sense is a type name. It is also used as a personal name. Neither reading is excluded by the word, which is exactly why the term needs a definition attached to it rather than an inference drawn from the letters.',
    alternativesAr:
      'اللفظ نفسه اسم موضع شائع في العربية وجنوب آسيا، فقد يأخذه قارئُ قائمة تجارية منشأً والحسّ نوعاً. وهو أيضاً اسم شخص. ولا يستبعد اللفظ أيّاً من القراءتين، وهذا بعينه سبب في أن يحتاج المصطلح إلى تعريف مقترن به لا إلى استنتاج يُستنبط من الحروف.',
    doesNotProve:
      'The name does not establish the species, the resin content, the oil yield, the age, the size or form of the wood, or the country it came from. It does not establish a grade, and it is not a protected designation. Nor does it place the material in any particular country, which is the reading a place name invites and the reading the trade usage does not support.',
    doesNotProveAr:
      'لا يثبت الاسم نوع الخشب ولا نسبة الراتنج ولا مردود الزيت ولا العمر ولا الحجم ولا الشكل ولا بلد المنشأ. ولا يثبت درجةً ما، وليس اسماً محمياً. ولا يضع المادة في بلد بعينه، وهو ما يوحي به اسم الموضع، وما لا يدعمه الاستعمال التجاري.',
    limitations:
      'This entry gives the general trade referent of the term. It does not establish the species, grading, composition, origin or quality of any material described with it, and it does not establish a synonymy with any other name.',
    limitationsAr:
      'تعطي هذه المدخلة المرجع التجاري العام للمصطلح. ولا تثبت النوع ولا التقييم ولا التركيب ولا المنشأ ولا جودة أي مادة يوصف بها، ولا تثبت ترادفاً مع أي اسم آخر.',
    related: [
      { slug: 'glossary/mori', label: 'Mori' },
      { slug: 'glossary/salla', label: 'Salla' },
      { slug: 'glossary/hindi-muri', label: 'Hindi Muri' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
      { slug: 'sourcing/reading-a-quotation', label: 'Reading a quotation' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
  }),

  termEntry({
    slug: 'glossary/girmi',
    title: 'Girmi',
    titleAr: 'جيرمي',
    summary:
      'A wood-type name recorded in Gulf usage, with a near-spelling in the same records.',
    summaryAr:
      'اسم لنوع من الخشب مسجَّل في الاستعمال الخليجي، وإملاء قريب في السجلات نفسها.',
    directAnswer:
      'Girmi is a wood-type name recorded in Gulf trade usage for a category of agarwood. Its general referent can be stated. Its attribution cannot: the term is used by different sellers for different material, and a near-spelling, Girmit, is recorded alongside it. This entry does not assert that the two are the same word, that they are different products, or that one is a form of the other.',
    directAnswerAr:
      '«جيرمي» اسم لنوع من الخشب مسجَّل في الاستعمال التجاري الخليجي لفئة من العود. ويمكن قول مرجعه العام. ولا يمكن قول إسناده: فالمصطلح يستعمله بائعون مختلفون لمادة مختلفة، وإملاء قريب هو «جيرميت» مسجَّل إلى جانبه. وهذه المدخلة لا تقرّر أن الكلمة واحدة ولا أن المنتجين مختلفان ولا أن أحدهما صورة من الآخر.',
    spelling:
      'The name is written in Latin script in Gulf invoices and lists, as Girmi, and in Arabic script as جيرمي. The near-spelling differs in the ending consonant, and in a vocabulary transmitted largely through writing rather than speech, such a difference is worth as much attention as a difference in the middle of a word — and no more, since nothing in the trade records settles which is which.',
    spellingAr:
      'يُكتب الاسم بحروف لاتينية في فواتير الخليج وقوائمه، وبالحرف العربي «جيرمي». ويختلف الإملاء القريب في حرف النهاية، وفي مفردات تنتقل أكثر بالكتابة منها بالقول، يستحق اختلاف كهذا قدر اهتمام اختلاف في وسط الكلمة — ولا أكثر، إذ لا يحسم في سجلات التجارة أيّهما أرجح.',
    usage:
      'The name appears in lists of wood types and in sale descriptions of chips, dust and pieces. As with the other terms in this family it is used loosely, and its value to a buyer is as a pointer to a description rather than as a description itself. Ask what the seller means by it, and what would be included and what excluded under it.',
    usageAr:
      'يظهر الاسم في قوائم أنواع الخشب وفي أوصاف بيع للرقائق والنشارة والقطع. وهو كما سائر مصطلحات هذه العائلة يُستعمل فضفاضةً، وقيمته للمشتري أنها إشارة إلى وصف لا وصف بذاته. فاسأل البائع عمّا يعنيه به، وما الذي يدخل تحته وما الذي يخرج.',
    examples:
      'Girmit is the near-spelling recorded in the same usage, and the two are commonly written in the same lists. Whether they are two spellings of one name, two names, or a name and a variant of it is not established here. Three ordinary things would settle it: the same seller\'s own written definition, a batch record in which one material carries both forms, or a quotation that uses the two of different lots and explains the difference.',
    examplesAr:
      '«جيرميت» هو الإملاء القريب المسجَّل في الاستعمال نفسه، والكلمتان تُكتبان معاً في القوائم عينها في الغالب. وأمّا إن كانتا إملاءين لاسم واحد أم اسمين أم اسماً وصورة منه، فليس مثبتاً هنا. وثلاثة أمور عادية تحسمه: تعريف مكتوب من البائع نفسه، أو سجل دفعة واحدة تحمل فيها مادة واحدة الصورتين، أو عرض سعر يستعمل الكلمتين في دفعتين مختلفتين ويشرح الفرق.',
    alternatives:
      'Girmi is not a word of general English or Arabic, so the alternatives here are narrower than for some terms in this vocabulary. It may be read as a brand or house name, and a seller may attach it to a house rather than to a material. There is also the ordinary trade possibility that the word marks a supplier\'s line or lot series rather than a type of wood.',
    alternativesAr:
      '«جيرمي» ليست كلمة في الإنجليزية أو العربية العامة، فخيارات القراءة هنا أضيق من بعض مصطلحات هذه المفردات. فقد تُقرأ اسماً تجارياً أو اسم دار، فيلحق البائعُ بها داره لا مادّته. وهناك أيضاً الإمكان التجاري المعتاد أن تكون الكلمة علامة على خط البائع أو سلسلة دفعاته لا على نوع من الخشب.',
    doesNotProve:
      'The name does not establish the species, the resin content, the oil yield, the age, the size or form of the wood, or the country of origin. It establishes no grade, and it is not a protected designation. And it establishes no relationship to Girmit in either direction.',
    doesNotProveAr:
      'لا يثبت الاسم نوع الخشب ولا نسبة الراتنج ولا مردود الزيت ولا العمر ولا الحجم ولا الشكل ولا بلد المنشأ. ولا يثبت درجةً ما، وليس اسماً محمياً. ولا يثبت أيّ صلة بـ«جيرميت» في أي اتجاه.',
    limitations:
      'This entry gives the general trade referent of the term and the near-spelling recorded with it. It does not establish the species, grading, composition, origin or quality of any material described with it, and it does not establish a synonymy between the two spellings.',
    limitationsAr:
      'تعطي هذه المدخلة المرجع التجاري العام للمصطلح والإملاء القريب المسجَّل معه. ولا تثبت النوع ولا التقييم ولا التركيب ولا المنشأ ولا جودة أي مادة يوصف بها، ولا تثبت ترادفاً بين الإملاءين.',
    related: [
      { slug: 'glossary/girmit', label: 'Girmit' },
      { slug: 'glossary/mori', label: 'Mori' },
      { slug: 'quality/seller-defined-super-grades', label: 'Super, Double Super and Triple Super labels' },
      { slug: 'buying/choosing-oud-wood', label: 'Choosing oud wood' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
  }),

  termEntry({
    slug: 'glossary/girmit',
    title: 'Girmit',
    titleAr: 'جيرميت',
    summary:
      'The near-spelling recorded alongside Girmi, and what would settle the relationship between them.',
    summaryAr:
      'الإملاء القريب المسجَّل مع «جيرمي»، وما يحسم الصلة بينهما.',
    directAnswer:
      'Girmit is a near-spelling recorded in the same Gulf trade usage as Girmi, differing in the ending consonant. It is a wood-type name with the same general referent, and it is used with the same looseness. Whether it is a variant spelling of Girmi, a separate name, or a name one market uses where another uses Girmi is not established here, and the entry takes no position on any of the three.',
    directAnswerAr:
      '«جيرميت» إملاء قريب مسجَّل في الاستعمال التجاري الخليجي نفسه الذي فيه «جيرمي»، ويختلف في حرف النهاية. وهو اسم لنوع من الخشب له المرجع العام نفسه، ويُستعمل بالالفضاوة المفاوزة نفسها. وأمّا إن كان إملاءً آخر لجيرمي أم اسماً مستقلاً أم اسماً يستعمله سوقٌ حيث يستعمل آخر جيرمي، فليس مثبتاً هنا، ولا تاخذ هذه المدخلة موقفاً من أيّها.',
    spelling:
      'The name is written in Latin script as Girmit and in Arabic script as جيرميت. In a trade that passes much of its vocabulary in writing, a difference in the final letters is the kind of variation that arises routinely — through a scribe, through a transliteration habit, through a supplier\'s house usage. That is a reason to record the difference carefully, not a reason to assume the words differ in meaning.',
    spellingAr:
      'يُكتب الاسم بحروف لاتينية وبالحرف العربي «جيرميت». وفي تجارة تنقل جانباً كبيراً من مفرداتها كتابةً، اختلاف في الحروف الأخيرة هو نوع التنوع الذي ينشأ عادةً — من كاتب، أو من عادة في الترحيم، أو من استعمال دارٍ بعينها. وهذا سبب للتوثيق الدقيق للاختلاف، لا سبب للافتراض بأن المعنيين مختلفان.',
    usage:
      'The name appears in the same contexts as Girmi: lists of wood types and short sale descriptions. Sellers who use one tend to use the other, and a buyer reading a list on which both appear gains no information about which is meant unless the list says. Treat the two as needing a definition from the person who wrote the list.',
    usageAr:
      'يظهر الاسم في السياقات نفسها التي يظهر فيها «جيرمي»: قوائم أنواع الخشب وأوصاف البيع القصيرة. والبائعون الذين يستعملون أحدهما يستعملون الآخر، والمشتري الذي يقرأ قائمة عليها الاثنان لا يربح شيئاً عن أيّهما هو المقصود إلا إذا دلّت القائمة ذلك. فتعامل مع الأمرين على أنهما يحتاجان تعريفاً ممن كتب القائمة.',
    examples:
      'The neighbouring record is Girmi, and the two appear in the same lists. The three ordinary documents that would settle the relationship are the same as for any pair in this vocabulary: a seller\'s written definition, a batch record in which one material carries both forms, and a quotation in which the two are used of different lots and the difference is explained.',
    examplesAr:
      'السجل المجاور هو «جيرمي»، ويظهر الاثنان في القوائم نفسها. والوثائق الثلاث العادية التي تحسم الصلة هي ما هي لأي زوج في هذه المفردات: تعريف مكتوب من البائع، وسجل دفعة واحدة تحمل فيها مادة واحدة الصورتين، وعرض سعر تُستعمل فيه الكلمتان في دفعتين مختلفتين مع شرح الفرق.',
    alternatives:
      'As a word outside this trade Girmit carries no settled English or Arabic sense, so the readings available are narrow. It may be a house or brand name, a supplier\'s designation for a particular lot series, or a term the writer has coined to distinguish one parcel from another. A label of that kind says something real about how the seller works, and nothing about the material until it is defined.',
    alternativesAr:
      'خارج هذه التجارة لا يحمل «جيرميت» معنى إنجليزياً أو عربياً مستقراً، فالقراءات المتاحة ضيقة. فقد يكون اسم دار أو علامة تجارية، أو تسمية يطلقها المورد على سلسلة دفعات بعينها، أو مصطلحاً اخترعه الكاتب ليميّز بين الشحنات. ومن ثم فإن التسمية من هذا النوع تقول شيئاً حقيقياً عن طريقة عمل البائع، ولا تقول شيئاً عن المادة حتى تُعرَّف.',
    doesNotProve:
      'The name does not establish the species, the resin content, the oil yield, the age, the size or form of the wood, or the country of origin. It establishes no grade, and it is not a protected designation. It also establishes no relationship to Girmi, in either direction.',
    doesNotProveAr:
      'لا يثبت الاسم نوع الخشب ولا نسبة الراتنج ولا مردود الزيت ولا العمر ولا الحجم ولا الشكل ولا بلد المنشأ. ولا يثبت درجةً ما، وليس اسماً محمياً. ولا يثبت أيّ صلة بـ«جيرمي» في أي اتجاه.',
    limitations:
      'This entry gives the general trade referent of the term and the near-spelling recorded with it. It does not establish the species, grading, composition, origin or quality of any material described with it, and it does not establish a synonymy between the two spellings.',
    limitationsAr:
      'تعطي هذه المدخلة المرجع التجاري العام للمصطلح والإملاء القريب المسجَّل معه. ولا تثبت النوع ولا التقييم ولا التركيب ولا المنشأ ولا جودة أي مادة يوصف بها، ولا تثبت ترادفاً بين الإملاءين.',
    related: [
      { slug: 'glossary/girmi', label: 'Girmi' },
      { slug: 'quality/seller-defined-super-grades', label: 'Super, Double Super and Triple Super labels' },
      { slug: 'buying/evaluating-an-offer', label: 'Evaluating an offer' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
  }),

  termEntry({
    slug: 'glossary/zura',
    title: 'Zura',
    titleAr: 'زورة',
    summary:
      'A wood-type name with a recorded near-spelling in the same Gulf usage.',
    summaryAr:
      'اسم لنوع من الخشب له إملاء قريب مسجَّل في الاستعمال الخليجي نفسه.',
    directAnswer:
      'Zura is a wood-type name recorded in Gulf trade usage for a category of agarwood. The general referent can be stated; the attribution is local, and a near-spelling, Zora, is recorded alongside it. This entry does not assert that the two spellings are synonyms, does not assert that they are different products, and does not assign either a shape, a place or a grade.',
    directAnswerAr:
      '«زورة» اسم لنوع من الخشب مسجَّل في الاستعمال التجاري الخليجي لفئة من العود. ويمكن قول المرجع العام؛ أما الإسناد فمحلي، وإملاء قريب هو «زورا» مسجَّل إلى جانبه. وهذه المدخلة لا تقرّر أن الإملاءين مترادفان، ولا تقرّر أنهما منتجان مختلفان، ولا تنسب إلى أيّ منهما شكلاً ولا موضعاً ولا درجة.',
    spelling:
      'The name is written in Latin script in Gulf trade records, as Zura, and in Arabic script as زورة. The near-spelling differs in the second vowel. Whether the difference reflects two names, one name written two ways, or a market-level difference is a question the records do not الجواب.',
    spellingAr:
      'يُكتب الاسم بحروف لاتينية في سجلات التجارة الخليجية، وبالحرف العربي «زورة». ويختلف الإملاء القريب في حركة الحرف الثاني. وأمّا إن كان الاختلاف يعبّر عن اسمَين أو عن اسم واحد يُكتب على صورتين أو عن فرق بين سوقين، فهو سؤال لا تجيب عنه السجلات.',
    usage:
      'The name appears in lists of wood types and in descriptions of material for sale. The usage in Gulf trade is loose enough that the term is best read as the beginning of a description: the word names a category, and what distinguishes one seller\'s Zura from another\'s lies in what follows the name rather than in the name.',
    usageAr:
      'يظهر الاسم في قوائم أنواع الخشب وفي أوصاف المادة المعروضة للبيع. والاستعمال في التجارة الخليجية فضفاض بما يكفي لأن يُقرأ المصطلح بدايةَ وصف: الكلمة تسمّي فئة، وما يميّز زورةَ بائع عن زورةِ بائع آخر مما يلي الاسم لا الاسم نفسه.',
    examples:
      'Zora is the near-spelling recorded in the same usage, and the two are written in the same lists. The three ordinary documents that would settle the relationship are a seller\'s written definition, a batch record in which one material carries both forms, and a quotation in which the two are used of different lots and the difference is explained.',
    examplesAr:
      '«زورا» هو الإملاء القريب المسجَّل في الاستعمال نفسه، والكلمتان تُكتبان في القوائم نفسها. والوثائق الثلاث العادية التي تحسم الصلة هي: تعريف مكتوب من البائع، وسجل دفعة واحدة تحمل فيها مادة واحدة الصورتين، وعرض سعر تُستعمل فيه الكلمتان في دفعتين مختلفتين مع شرح الفرق.',
    alternatives:
      'The same string is a common Arabic word for a visit or a pilgrimage, and a reader meeting it in an Arabic trade record may take that sense into it. It is also a place name in أجزاء of the Gulf, which invites a reading as an origin. Neither reading is what the trade usage means, and neither is excluded by the letters.',
    alternativesAr:
      'اللفظ نفسه كلمة عربية شائعة بمعنى الزيارة أو الحج، فقد يحمل قارئُه في سجل تجاري عربي ذلك المعنى إليه. وهو أيضاً اسم موضع فيأجزاء من الخليج، وهو ما يدعو إلى قراءته منشأً. ولا من القراءتين هو المعنى التجاري، ولا يستبعده اللفظ.',
    doesNotProve:
      'The name does not establish the species, the resin content, the oil yield, the age, the size or form of the wood, or the country of origin. It establishes no grade, and it is not a protected designation. It establishes no relationship to Zora.',
    doesNotProveAr:
      'لا يثبت الاسم نوع الخشب ولا نسبة الراتنج ولا مردود الزيت ولا العمر ولا الحجم ولا الشكل ولا بلد المنشأ. ولا يثبت درجةً ما، وليس اسماً محمياً. ولا يثبت أيّ صلة بـ«زورا».',
    limitations:
      'This entry gives the general trade referent of the term and the near-spelling recorded with it. It does not establish the species, grading, composition, origin or quality of any material described with it, and it does not establish a synonymy between the two spellings.',
    limitationsAr:
      'تعطي هذه المدخلة المرجع التجاري العام للمصطلح والإملاء القريب المسجَّل معه. ولا تثبت النوع ولا التقييم ولا التركيب ولا المنشأ ولا جودة أي مادة يوصف بها، ولا تثبت ترادفاً بين الإملاءين.',
    related: [
      { slug: 'glossary/zora', label: 'Zora' },
      { slug: 'glossary/mori', label: 'Mori' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
      { slug: 'sourcing/reading-a-quotation', label: 'Reading a quotation' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
  }),

  termEntry({
    slug: 'glossary/zora',
    title: 'Zora',
    titleAr: 'زورا',
    summary:
      'The near-spelling recorded alongside Zura, and the documents that would settle the relationship.',
    summaryAr:
      'الإملاء القريب المسجَّل مع «زورة»، والوثائق التي تحسم الصلة بينهما.',
    directAnswer:
      'Zora is a near-spelling recorded in the same Gulf trade usage as Zura, differing in the second vowel. Its general referent is the same order of thing: a category of agarwood wood as sellers using this vocabulary describe it. Whether the two are variant spellings of one name or two names is not established here, and the entry leaves the question open rather than deciding it by assertion.',
    directAnswerAr:
      '«زورا» إملاء قريب مسجَّل في الاستعمال التجاري الخليجي نفسه الذي فيه «زورة»، ويختلف في حركة الحرف الثاني. ومرجعه العام من المرجع نفسه: فئة من خشب العود كما يصفها البائعون المستعملون لهذه المفردات. وأمّا إن كان الإملاءان صورتين لاسم واحد أم اسمين، فليس مثبتاً هنا، وتترك المدخلة السؤال مفتوحاً لا تُحسمه بالجزم.',
    spelling:
      'The name is written in Latin script as Zora and in Arabic script as زورا. The difference from Zura is one vowel, and a single-vowel difference in a transposed vocabulary can be a naming distinction or a spelling habit. The Gulf trade records carry both forms, and they carry them without a note explaining which is which.',
    spellingAr:
      'يُكتب الاسم بحروف لاتينية وبالحرف العربي «زورا». والفرق عن «زورة» حركة واحدة، وحركة واحدة في مفردات منقولَة قد تكون تمييزاً في التسمية أو عادة في الكتابة. وتسجل التجارة الخليجية الصورتين، وتسجلهما بلا حاشية تبيّن أيّهما أرجح.',
    usage:
      'The name appears where Zura appears: in lists of wood types and in short sale descriptions. A buyer looking at such a list cannot tell from the list which term the seller intends in any given line, and the practical الجواب is to ask for the description in writing rather than to choose between the spellings.',
    usageAr:
      'يظهر الاسم حيث يظهر «زورة»: في قوائم أنواع الخشب وفي أوصاف البيع القصيرة. والمشتري الذي يطالع قائمة كهذه لا يستطيع أن يعلم من القائمة أيّ المصطلحين يعني البائع في سطر بعينه، والالجواب العملي أن يطلب الوصف كتابةً لا أن يختار بين الإملاءين.',
    examples:
      'The neighbouring record is Zura, and the two are written in the same lists. A seller\'s own written definition, a batch record in which one material carries both forms, and a quotation in which the two are used of different lots with the difference explained are the three ordinary documents that would settle the question.',
    examplesAr:
      'السجل المجاور هو «زورة»، والكلمتان تُكتبان في القوائم نفسها. وتعريف مكتوب من البائع، وسجل دفعة واحدة تحمل فيها مادة واحدة الصورتين، وعرض سعر تُستعمل فيه الكلمتان في دفعتين مختلفتين مع شرح الفرق — هذه هي الوثائق الثلاث العادية التي تحسم السؤال.',
    alternatives:
      'Outside the trade the string has no settled general sense, so the readings available are narrow. It may be a house name, a brand, or a supplier\'s designation for one parcel or line. A label of that kind is real information about the seller and no information about the material, until somebody defines it.',
    alternativesAr:
      'خارج التجارة لا يملك اللفظ معنى عاماً مستقراً، فالقراءات المتاحة ضيقة. فقد يكون اسم دار أو علامة تجارية أو تسمية يطلقها المورد على شحنة أو خط بعينه. ومن ثم فإن التسمية من هذا النوع معلومات واقعة عن البائع لا عن المادة، حتى يعرّفها أحد.',
    doesNotProve:
      'The name does not establish the species, the resin content, the oil yield, the age, the size or form of the wood, or the country of origin. It establishes no grade, and it is not a protected designation. It establishes no relationship to Zura.',
    doesNotProveAr:
      'لا يثبت الاسم نوع الخشب ولا نسبة الراتنج ولا مردود الزيت ولا العمر ولا الحجم ولا الشكل ولا بلد المنشأ. ولا يثبت درجةً ما، وليس اسماً محمياً. ولا يثبت أيّ صلة بـ«زورة».',
    limitations:
      'This entry gives the general trade referent of the term and the near-spelling recorded with it. It does not establish the species, grading, composition, origin or quality of any material described with it, and it does not establish a synonymy between the two spellings.',
    limitationsAr:
      'تعطي هذه المدخلة المرجع التجاري العام للمصطلح والإملاء القريب المسجَّل معه. ولا تثبت النوع ولا التقييم ولا التركيب ولا المنشأ ولا جودة أي مادة يوصف بها، ولا تثبت ترادفاً بين الإملاءين.',
    related: [
      { slug: 'glossary/zura', label: 'Zura' },
      { slug: 'glossary/salla', label: 'Salla' },
      { slug: 'quality/seller-defined-super-grades', label: 'Super, Double Super and Triple Super labels' },
      { slug: 'buying/evaluating-an-offer', label: 'Evaluating an offer' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
  }),

  termEntry({
    slug: 'glossary/kudi',
    title: 'Kudi',
    titleAr: 'كودي',
    summary:
      'A term in the wood-type vocabulary, used with varying attribution between sellers.',
    summaryAr:
      'مصطلح في مفردات أنواع الخشب، يُستعمل بإسناد متفاوت بين البائعين.',
    directAnswer:
      'Kudi is a term in the wood-type vocabulary of Gulf and South Asian agarwood trade. The general referent can be stated: it is used to name a category of wood, alongside terms such as Mori and Salla. The attribution is not something this entry fixes, and there is no qualified form or near-spelling of the word recorded in the same usage. Where a purchase turns on what the term excludes as much as what it includes, the definition has to come from the counterparty.',
    directAnswerAr:
      '«كودي» مصطلح في مفردات أنواع الخشب في تجارة العود الخليجية وجنوب آسيوية. ويمكن قول المرجع العام: يُستعمل لتسمية فئة من الخشب، إلى جانب أمثال «موري» و«سلة». أما الإسناد فلا تُثبّته هذه المدخلة، ولا يُسجَّل للكلمة في الاستعمال نفسه صورة مزوّنة ولا إملاء قريب. وحيث كان الشراء معتمداً على ما يخرجه المصطلح كما على ما يدخله، فلا بد أن يأتي التعريف من الطرف الآخر.',
    spelling:
      'The term is written in Latin script in trade records and quotations, and in Arabic script as كودي. It is a short word with no other settled sense in the languages of the region, and a buyer who meets it for the first time in an invoice has little to go on beyond the fact that it is a name in a familiar family.',
    spellingAr:
      'تُكتب الكلمة بحروف لاتينية في سجلات التجارة وعروض الأسعار، وبالحرف العربي «كودي». وهي كلمة قصيرة لا معنى لها مستقراً آخر في لغات المنطقة، والمشتري الذي يلتقي بها لأول مرة في فاتورة لا يجد بين يديه إلا أنها اسم في عائلة مألوفة.',
    usage:
      'The term appears in lists of wood types and in descriptions of material for sale, and it is qualified in the same way the rest of the family is: by collection area, by treatment, by use. The usage is loose, and different sellers attach different meanings to it. Ask what the word means in the seller\'s stock and what a buyer would be getting under it.',
    usageAr:
      'تظهر الكلمة في قوائم أنواع الخشب وفي أوصاف المادة المعروضة للبيع، وتُقيَّد بالطريقة نفسها التي تُقيَّد بها سائر العائلة: بمكان الجمع، أو بالمعالجة، أو بالاستعمال. والاستعمال فضفاض، والبائعون المختلفون يدرون به معاني مختلفة. فاسأل بما تعنيه الكلمة في مخزون البائع وبما سيحصل عليه المشتري تحتها.',
    examples:
      'The neighbouring records are the rest of the wood-type family, including Mori, Salla and Hindi Muri, which are listed in the same contexts. What the term refers to in a particular lot is documented by that seller\'s own description, and the description is the part worth obtaining in writing before a lot is bought.',
    examplesAr:
      'السجلات المجاورة هي سائر أفراد عائلة أنواع الخشب، ومنها «موري» و«سلة» و«هندي موري»، وتُدرَج في السياقات نفسها. وما تشير إليه الكلمة في دفعة بعينه موثَّق في وصف البائع نفسه، والوصف هو الجزء الذي يستحق أن يُطلب كتابةً قبل شراء الدفعة.',
    alternatives:
      'Outside the trade the string can be read in more than one way, and a short trade word carries the general risk that it may denote a form, a treatment or a part rather than a category. A buyer should also watch for the possibility that a supplier\'s use of it is a house term for a particular line of stock rather than a shared trade name.',
    alternativesAr:
      'خارج التجارة يمكن أن يُقرأ اللفظ على أكثر من وجه، وتحمل الكلمة التجارية القصيرة خطراً عاماً: أن تدل على شكل أو معالجة أو جزء لا على فئة. وعلى المشتري أن ينتبه أيضاً إلى احتمال أن يكون استعمال المورد لها اسماً لدارٍ تطلقه على خط بعينه من المخزون لا اسماً تجارياً مشتركاً.',
    doesNotProve:
      'The name does not establish the species, the resin content, the oil yield, the age, the size or form of the wood, or the country of origin. It establishes no grade, and it is not a protected designation. It does not establish a universal mapping between this term and any other term in the vocabulary.',
    doesNotProveAr:
      'لا يثبت الاسم نوع الخشب ولا نسبة الراتنج ولا مردود الزيت ولا العمر ولا الحجم ولا الشكل ولا بلد المنشأ. ولا يثبت درجةً ما، وليس اسماً محمياً. ولا يثبت مقابلةً عامة بين هذا المصطلح وأي مصطلح آخر في المفردات.',
    limitations:
      'This entry gives the general trade referent of the term. It does not establish the species, grading, composition, origin or quality of any material described with it, and it does not establish a universal mapping between trade terms.',
    limitationsAr:
      'تعطي هذه المدخلة المرجع التجاري العام للمصطلح. ولا تثبت النوع ولا التقييم ولا التركيب ولا المنشأ ولا جودة أي مادة يوصف بها، ولا تثبت مقابلةً عامة بين مصطلحات التجارة.',
    related: [
      { slug: 'glossary/mori', label: 'Mori' },
      { slug: 'glossary/salla', label: 'Salla' },
      { slug: 'glossary/hindi-muri', label: 'Hindi Muri' },
      { slug: 'sourcing/reading-a-quotation', label: 'Reading a quotation' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
  }),

termEntry({
    slug: 'glossary/bisa',
    title: 'Bisa',
    titleAr: 'بيسا',
    summary:
      'A material-type name in Gulf trade vocabulary, with a size-qualified form recorded alongside it.',
    summaryAr:
      'اسم من مفردات المواد في تجارة العود الخليجية، وله صورة مزوّنة بالمقاس مسجَّلة معه.',
    directAnswer:
      'Bisa is a name used in Gulf and South Asian agarwood trade. The general referent can be stated: it is used to name a category of material, and it appears in the same lists as the wood-type names. The fine attribution is local and varies between sellers. A size-qualified form, Mini Bisa, is recorded in the same usage, and whether that is a subdivision of this name or a separate name is not established here.',
    directAnswerAr:
      '«بيسا» اسم تستعمله تجارة العود في الخليج وجنوب آسيا. ويمكن قول المرجع العام: يسمّي فئة من المواد، ويُدرَج في القوائم نفسها التي تُدرَج فيها أسماء أنواع الخشب. أما الإسناد الدقيق فمحلي ويختلف بين البائعين. وقد سُجِّلت في الاستعمال نفسه صورة مزوّنة بالمقاس هي «ميني بيسا»، وأمّا إن كانت تلك تقسيماً لاسم «بيسا» أم اسماً مستقلاً، فليس مثبتاً هنا.',
    spelling:
      'The name is written in Latin script in Gulf invoices and sale listings, as Bisa, and in Arabic script as بيسا. No trade body fixes an orthography for it, and the letters are written in more than one form by different sellers. A written form is evidence of the writer rather than of the material. The vocabulary circulates between South Asian suppliers and Gulf buyers, and its terms travel with quotations rather than with specifications.',
    spellingAr:
      'يُكتب الاسم بحروف لاتينية في فواتير الخليج وقوائم البيع، وتختلف صوره الإملائية بين البائعين. وتُكتب حروفه بالحرف العربي «بيسا» في الاستعمال الخليجي. ولا يثبّت أيّ جهاز تجاري إملاءً معيّناً له، فالصيغة المكتوبة دليل على كاتبها لا على مادّتها. وتدور هذه المفردات بين موردي جنوب آسيا ومشتري الخليج، وتسير مصطلحاتها مع عروض الأسعار لا مع المواصفات.',
    usage:
      'The name appears in lists of wood and material types, and in short descriptions of material offered for sale. Sellers usually qualify it — by collection area, by whether the material is wild or cultivated, or by the use it is wanted for — so the name alone does not travel through a serious transaction. The general referent is clear enough to state: a category of material as sellers using this vocabulary describe it. The precise attribution is not. Where the name is the only description in a quotation, ask the counterparty what it means in that lot rather than assuming a shared understanding.',
    usageAr:
      'يظهر الاسم في قوائم أنواع الخشب والمواد، وفي أوصاف قصيرة لما هو معروض للبيع. ويقيده البائعون عادةً — بمكان الجمع، أو بكون المادة برية أم مستزرعة، أو باستعمالها المرتقب — فلا يسير الاسم وحده في صفقة جادة. والمرجع العام واضح بما يكفي لقوله: فئة من المواد كما يصفها البائعون المستعملون لهذه المفردات. أما الإسناد الدقيق فليس كذلك. وحين يكون الاسم هو الوصف الوحيد في عرض سعر، فاسأل الطرف الآخر عن معناه في تلك الدفعة بدل افتراض فهم مشترك.',
    examples:
      'Mini Bisa is the size-qualified form recorded in the same usage, and the neighbouring names in the same lists are Mori, Salla and Hindi Muri. Whether these are subdivisions of one name or separate names is not established here. Two ordinary documents would settle it: the supplier\'s own written definition, and a quotation that uses both forms of the same material.',
    examplesAr:
      '«ميني بيسا» هي الصورة المزوّنة بالمقاس المسجَّلة في الاستعمال نفسه، وأسماء أخرى مجاورة في القوائم نفسها هي «موري» و«سلة» و«هندي موري». وأمّا إن كانت هذه تقسيمات لاسم واحد أم أسماء متباينة، فليس مثبتاً هنا. ووثيقتان عاديتان تحسمان ذلك: تعريف المورد المكتوب لنفسه، وعرض سعر يُستعمل فيه الاسمان للمادة نفسها.',
    alternatives:
      'Outside the trade the same letters are used as an Indian given name and as a surname, and in other languages the same letters spell words with no connection to wood at all. A description that carries the name on its own may therefore be read as a brand, a house name or a person. There is also the general risk of a short trade word: in ordinary commerce a short label can denote a form, a treatment or a part rather than a category, and nothing in the letters themselves prevents that reading.',
    alternativesAr:
      'خارج التجارة تُكتب الحروف نفسها اسم جنس واسم عَلَم في جنوب آسيا، وتُكتب بها في لغات أخرى كلمات لا علاقة لها بالخشب إطلاقاً. فالوصف الذي يحمل الاسم وحده قد يُقرأ اسماً تجارياً أو اسم دار أو اسم شخص. وهناك أيضاً خطر الزيادة في قراءة كلمة قصيرة: في التجارة العامة قد تدل التسمية القصيرة على شكل أو معالجة أو جزء لا على فئة، ولا يمنع شيء من ذلك في بنية الكلمة نفسها.',
    doesNotProve:
      'The name does not establish the species, the resin content, the oil yield, the age, the size or form of the material, or the country it came from. It establishes no grade, and it is not a protected designation: nothing prevents a seller from applying it to material from another origin. It establishes no relationship to Mini Bisa in either direction.',
    doesNotProveAr:
      'لا يثبت الاسم نوع الخشب ولا نسبة الراتنج فيه ولا مردود الزيت ولا العمر ولا الحجم ولا الشكل ولا بلد المنشأ. ولا يثبت درجةً ما، وليس اسماً محمياً: فلا شيء يمنع استعماله لمادة من منشأ آخر. ولا يثبت أيّ صلة بـ«ميني بيسا» في أي اتجاه.',
    limitations:
      'This entry gives the general trade referent of the term and the form recorded alongside it. It does not establish the species, grading, composition, origin or quality of any material described with it, and it does not establish a relationship between the two names.',
    limitationsAr:
      'تعطي هذه المدخلة المرجع التجاري العام للمصطلح والصورة المسجَّلة معه. ولا تثبت النوع ولا التقييم ولا التركيب ولا المنشأ ولا جودة أي مادة يوصف بها، ولا تثبت صلة بين الاسمين.',
    related: [
      { slug: 'glossary/mini-bisa', label: 'Mini Bisa' },
      { slug: 'glossary/mori', label: 'Mori' },
      { slug: 'glossary/hindi-muri', label: 'Hindi Muri' },
      { slug: 'sourcing/reading-a-quotation', label: 'Reading a quotation' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
  }),

  termEntry({
    slug: 'glossary/mini-bisa',
    title: 'Mini Bisa',
    titleAr: 'ميني بيسا',
    summary:
      'A size-qualified form recorded in the same usage as Bisa, and the question the qualifier leaves open.',
    summaryAr:
      'صورة مزوّنة بالمقاس مسجَّلة في الاستعمال نفسه الذي فيه «بيسا»، والسؤال الذي يتركه المؤهل مفتوحاً.',
    directAnswer:
      'Mini Bisa is the size-qualified form recorded in the same trade usage as Bisa. The qualifier in these names is a comparative and relative one: it places the material below the unqualified name on some scale the seller holds in mind, and that scale is fixed nowhere. This entry does not assign a size, a form or a weight to it. The general referent is a category of material described with a size qualifier, and the precise attribution is a question for the counterparty.',
    directAnswerAr:
      '«ميني بيسا» هي الصورة المزوّنة بالمقاس المسجَّلة في الاستعمال التجاري نفسه الذي فيه «بيسا». والمؤهل في هذه الأسماء اسمٌ وصفيٌّ نسبي: يَضع المادة دون الاسم المجرَّد على مقياس في ذهن البائع، وذلك المقياس غير مثبَّت في أي مكان. ولا تنسب هذه المدخلة حجماً ولا شكلاً ولا وزناً. فالمرجع العام فئة من مواد موصوفة بمؤهل مقاس، ويبقى الإسناد الدقيق سؤالاً للطرف الآخر.',
    spelling:
      'The name is written in Latin script with an English qualifier in front of the base name, and its spellings vary between sellers. The qualifier is not transliterated into Arabic script in the Gulf usage, which is unusual in this vocabulary, and the Arabic form in that usage is ميني بيسا. The English qualifier does a job no other part of the name does, and it does it by comparison rather than by measurement.',
    spellingAr:
      'يُكتب الاسم بمؤهل إنجليزي يسبق اسم الأساس، وتختلف صوره الإملائية بين البائعين. والمؤهل لا يُرحَّم إلى الحرف العربي في الاستعمال الخليجي، وهو شاذ في هذه المفردات، فالصيغة العربية فيه «ميني بيسا». والكلمة الإنجليزية تؤدّي في الاسم عملاً لا يقوم به أي جزء آخر منه، تؤدّيه بالمقارنة لا بالقياس.',
    usage:
      'The qualified form appears in sale lists alongside the base name and alongside other qualified forms. The comparison a seller makes is usually understood within that seller\'s own stock rather than across the trade, so two lots described with the same qualifier from two sellers may not be comparable at all. Ask what the smaller size is measured against, and what material it is measured from.',
    usageAr:
      'تظهر الصورة المزوّنة في قوائم البيع إلى جانب الاسم المجرَّد وإلى جانب صور مزوّنة أخرى. والمقارنة التي يجريها البائع يفهمها عادةً في مخزونه وحده لا في التجارة كلها، فدفعة موصوفة بالصورة نفسها من بائعين اثنين قد لا تكونان قابلتين للمقارنة. واسأل عمّا يقاس الصغر مقابل ماذا، ومن أي مادة.',
    examples:
      'The neighbouring names are Bisa, the unqualified base, and the other qualified forms in the same lists, including Mori and its own qualified forms. The list is the place where the terms are gathered for a customer, not the place where the categories are fixed. What settles the relationship is a written sequence from the supplier, a batch record showing how one source names two lots, or a quotation that uses the base name and the qualified form of the same material.',
    examplesAr:
      'الإملاءات المجاورة هي «بيسا» الاسم المجرَّد، والصور المزوّنة الأخرى في القوائم نفسها، ومنها «موري» وصورها المزوّنة. والقائمة مكان تُجمَع فيه المصطلحات لعميل لا مكان تُضبط فيه التصنيفات. وما يحسم الصلة هو تسلسل مكتوب من المورد، أو سجل دفعة يبيّن كيف يسمّي المصدر نفسه دفعتين، أو عرض سعر يُستعمل فيه الاسم المجرَّد والصورة المزوّنة للمادة نفسها.',
    alternatives:
      'The qualifier is an ordinary English word meaning small, and it is used across Gulf trade for goods of no particular relation to each other, so it carries no special standing here. It is also a familiar form of address and a nickname, so a description carrying the qualified name on its own may be read as a personal or house name. And nothing in the qualifier says whether the comparison is being made on length, on thickness, on the size of the chips, or on weight.',
    alternativesAr:
      'كلمة «ميني» إنجليزية عادية بمعنى الصغر، وتُستعمل في تجارة الخليج للسلع المتباينة، فلا تحمل هنا مكانة خاصة. وهي أيضاً صورة شائعة من المخاطبة واللقب، فالوصف الذي يحمل الاسم المزوَّن وحده قد يُقرأ اسماً شخصياً أو اسماً تجارياً. وفي المؤهل لا شيء يبيّن إن كانت المقارنة في الطول أم في السماكة أم في حجم الرقائق أم في الوزن.',
    doesNotProve:
      'The name does not establish a size, a weight, a shape, a grade, the species, the resin content, the oil yield, the age, or the country of origin. It does not establish that a lot described this way is Bisa at all, and it does not establish that the qualified name and the base name sit on one scale.',
    doesNotProveAr:
      'لا يثبت الاسم حجماً ولا وزناً ولا شكلاً ولا درجةً ولا نوعاً ولا نسبة راتنج ولا مردود زيت ولا عمراً ولا منشأً. ولا يثبت أن الدفعة الموصوفة بهذا الاسم «بيسا» أصلاً، ولا أن الاسم المزوَّن والاسم المجرَّد نقطتان في مقياس واحد.',
    limitations:
      'This entry gives the general trade referent of the qualified form and the neighbouring names recorded with it. It does not establish a size, a grade, a species, an origin or a composition, and it does not establish a relationship between the two names.',
    limitationsAr:
      'تعطي هذه المدخلة المرجع التجاري العام للصورة المزوّنة والأسماء المجاورة المسجَّلة معها. ولا تثبت حجماً ولا درجةً ولا نوعاً ولا منشأً ولا تركيباً، ولا تثبت صلة بين الاسمين.',
    related: [
      { slug: 'glossary/bisa', label: 'Bisa' },
      { slug: 'glossary/mini-muri', label: 'Mini Muri' },
      { slug: 'glossary/mori', label: 'Mori' },
      { slug: 'buying/evaluating-an-offer', label: 'Evaluating an offer' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
  }),

  termEntry({
    slug: 'glossary/seufi',
    title: 'Seufi',
    titleAr: 'سويفي',
    summary:
      'A name in Gulf and South Asian trade vocabulary, with a near-spelling recorded in the same usage.',
    summaryAr:
      'اسم في مفردات تجارة الخليج وجنوب آسيا، وإملاء قريب مسجَّل في الاستعمال نفسه.',
    directAnswer:
      'Seufi is a name in Gulf and South Asian trade vocabulary for a category of material. The general referent can be stated: it is used to name a material that sellers in this trade sell and describe, alongside the wood-type and resin-type names. The fine attribution is not fixed by this entry, and a near-spelling, Seyufi, is recorded in the same usage. This entry does not assert that the two are the same word, and does not assert that they are different products.',
    directAnswerAr:
      '«سويفي» اسم في مفردات تجارة الخليج وجنوب آسيا لفئة من المواد. ويمكن قول المرجع العام: يسمّي مادةً يبيعها البائعون في هذه التجارة ويصفونها، إلى جانب أسماء أنواع الخشب وأنواع الراتنج. أما الإسناد الدقيق فلا تُثبّته هذه المدخلة، وقد سُجِّل في الاستعمال نفسه إملاء قريب هو «سيوفي». وهذه المدخلة لا تقرّر أن الكلمة واحدة، ولا تقرّر أنهما منتجان مختلفان.',
    spelling:
      'The name is written in Latin script in trade documents, as Seufi, and the Arabic rendering used here is سويفي. The near-spelling differs in the vowel before the final consonant. Because a large part of this vocabulary travels in writing rather than in speech, a difference of that kind can arise from a scribe, from a transliteration habit, or from one house\'s usage, and the records do not say which it is here.',
    spellingAr:
      'يُكتب الاسم بحروف لاتينية في الوثائق التجارية، والصورة العربية المستعملة هنا «سويفي». ويختلف الإملاء القريب في الحركة التي تسبق حرف النهاية. ولأن جانباً كبيراً من هذه المفردات تنتقل كتابةً لا قولاً، من امتداد الخط، أو من عادة في الترحيم، أو من استعمال دار بعينها. والسجلات لا تبيّن أيّها هنا.',
    usage:
      'The name appears in lists of material types and in short descriptions of material offered for sale, and it is qualified in the usual way — by area, by treatment, by use. The usage is loose, and the same word is applied to material of different descriptions by different sellers. Where a purchase turns on what the word rules in or out, the definition has to come from the counterparty in writing.',
    usageAr:
      'يظهر الاسم في قوائم أنواع المواد وفي أوصاف قصيرة لما هو معروض للبيع، ويقيد بالطريقة المعتادة — بمكان الجمع، أو بالمعالجة، أو بالاستعمال. والاستعمال فضفاض، والكلمة نفسها تُستعمل لمادة أوصافها مختلفة عند بائعين مختلفين. وحيث كان الشراء معتمداً على ما يدخله المصطلح وما يخرجه، فلا بد أن يأتي التعريف من الطرف الآخر كتابةً.',
    examples:
      'Seyufi is the near-spelling recorded in the same usage, and the two are written in the same lists. The neighbouring names in those lists include Mori, Salla and Hindi Muri. Three ordinary documents would settle the relationship between the two spellings: the seller\'s own written definition, a batch record in which one material carries both forms, and a quotation in which the two are used of different lots with the difference explained.',
    examplesAr:
      '«سيوفي» هو الإملاء القريب المسجَّل في الاستعمال نفسه، والكلمتان تُكتبان في القوائم نفسها. والأسماء المجاورة في تلك القوائم منها «موري» و«سلة» و«هندي موري». وثلاثة وثائق عادية تحسم الصلة بين الإملاءين: تعريف مكتوب من البائع نفسه، وسجل دفعة واحدة تحمل فيها مادة واحدة الصورتين، وعرض سعر تُستعمل فيه الكلمتان في دفعتين مختلفتين مع شرح الفرق.',
    alternatives:
      'Outside the trade the string has no settled general sense, so the readings available are narrow. It may be a house or brand name, or a supplier\'s designation for a particular line of stock. A short trade word of this kind may also denote a form or a treatment rather than a category, and a seller may use it for a lot series that only makes sense inside that one business. None of these readings is excluded by the letters.',
    alternativesAr:
      'خارج التجارة لا يملك اللفظ معنى عاماً مستقراً، فالقراءات المتاحة ضيقة. فقد يكون اسم دار أو علامة تجارية، أو تسمية يطلقها المورد على خط بعينه من المخزون. ومن الممكن أيضاً أن تدل الكلمة التجارية القصيرة من هذا النوع على شكل أو معالجة لا على فئة، وأن يستعملها البائع لسلسلة دفعات لا معنى لها إلا داخل ذلك العمل. ولا يستبعد اللفظ أيّاً من هذه القراءات.',
    doesNotProve:
      'The name does not establish the species, the resin content, the oil yield, the age, the size or form of the material, or the country of origin. It establishes no grade, and it is not a protected designation. It establishes no relationship to Seyufi in either direction.',
    doesNotProveAr:
      'لا يثبت الاسم نوع الخشب ولا نسبة الراتنج ولا مردود الزيت ولا العمر ولا الحجم ولا الشكل ولا بلد المنشأ. ولا يثبت درجةً ما، وليس اسماً محمياً. ولا يثبت أيّ صلة بـ«سيوفي» في أي اتجاه.',
    limitations:
      'This entry gives the general trade referent of the term and the near-spelling recorded with it. It does not establish the species, grading, composition, origin or quality of any material described with it, and it does not establish a synonymy between the two spellings.',
    limitationsAr:
      'تعطي هذه المدخلة المرجع التجاري العام للمصطلح والإملاء القريب المسجَّل معه. ولا تثبت النوع ولا التقييم ولا التركيب ولا المنشأ ولا جودة أي مادة يوصف بها، ولا تثبت ترادفاً بين الإملاءين.',
    related: [
      { slug: 'glossary/seyufi', label: 'Seyufi' },
      { slug: 'glossary/mori', label: 'Mori' },
      { slug: 'quality/seller-defined-super-grades', label: 'Super, Double Super and Triple Super labels' },
      { slug: 'sourcing/reading-a-quotation', label: 'Reading a quotation' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
  }),

  termEntry({
    slug: 'glossary/seyufi',
    title: 'Seyufi',
    titleAr: 'سيوفي',
    summary:
      'The near-spelling recorded alongside Seufi, and the documents that would settle the relationship.',
    summaryAr:
      'الإملاء القريب المسجَّل مع «سويفي»، والوثائق التي تحسم الصلة بينهما.',
    directAnswer:
      'Seyufi is a near-spelling recorded in the same Gulf and South Asian trade usage as Seufi, differing in one vowel. Its general referent is of the same order: a category of material named by sellers in this trade. Whether the two spellings are variants of one name or two names is not established here, and this entry leaves the question open rather than deciding it by assertion.',
    directAnswerAr:
      '«سيوفي» إملاء قريب مسجَّل في الاستعمال التجاري الخليجي وجنوب آسيوي نفسه الذي فيه «سويفي»، ويختلف بحركة واحدة. ومرجعه العام من المرجع نفسه: فئة من المواد يسمّيها البائعون في هذه التجارة. وأمّا إن كان الإملاءان صورتين لاسم واحد أم اسمين، فليس مثبتاً هنا، وتترك المدخلة السؤال مفتوحاً لا تُحسمه بالجزم.',
    spelling:
      'The name is written in Latin script as Seyufi, and the Arabic rendering used here is سيوفي. The difference from Seufi is a single vowel, and in a transposed vocabulary a difference of that size can be a naming distinction or simply a spelling habit. The trade records carry both forms, and they carry them without a note explaining which is which.',
    spellingAr:
      'يُكتب الاسم بحروف لاتينية، والصورة العربية المستعملة هنا «سيوفي». والفرق عن «سويفي» حركة واحدة، وحركة واحدة في مفردات منقولة قد تكون تمييزاً في التسمية أو عادة في الكتابة. وتسجل سجلات التجارة الصورتين، وتسجلهما بلا حاشية تبيّن أيّهما أرجح.',
    usage:
      'The name appears where Seufi appears: in lists of material types and in short sale descriptions. A buyer reading a list on which both appear gains nothing about which is intended in any given line, and the practical answer is to ask for the description in writing rather than to choose between the spellings. The word is used loosely, and the meaning a seller attaches to it has to be established from that seller.',
    usageAr:
      'يظهر الاسم حيث يظهر «سويفي»: في قوائم أنواع المواد وفي أوصاف البيع القصيرة. والمشتري الذي يقرأ قائمة عليها الاثنان لا يربح شيئاً عن أيّهما هو المقصود في سطر بعينه، والجواب العملي أن يطلب الوصف كتابةً لا أن يختار بين الإملاءين. والكلمة تُستعمل فضفاضةً، والمعنى الذي يربطه البائع بها لا بد من استخراجه منه.',
    examples:
      'The neighbouring record is Seufi, and the two appear in the same lists. A seller\'s own written definition, a batch record in which one material carries both forms, and a quotation in which the two are used of different lots with the difference explained are the three ordinary documents that would settle the question.',
    examplesAr:
      'السجل المجاور هو «سويفي»، ويظهر الاثنان في القوائم نفسها. وتعريف مكتوب من البائع، وسجل دفعة واحدة تحمل فيها مادة واحدة الصورتين، وعرض سعر تُستعمل فيه الكلمتان في دفعتين مختلفتين مع شرح الفرق — هذه هي الوثائق الثلاث العادية التي تحسم السؤال.',
    alternatives:
      'As a word outside this trade the string carries no settled English or Arabic sense, so the available readings are narrow: a house name, a brand, or a supplier\'s label for a parcel or line. A label of that kind is real information about the seller and no information about the material, until somebody defines it. A short trade word also risks being read as a form or a treatment rather than a category.',
    alternativesAr:
      'خارج هذه التجارة لا يحمل اللفظ معنى إنجليزياً أو عربياً مستقراً، فالقراءات المتاحة ضيقة: اسم دار، أو علامة تجارية، أو تسمية يطلقها المورد على شحنة أو خط بعينه. ومن ثم فإن التسمية من هذا النوع معلومات واقعة عن البائع لا عن المادة، حتى يعرّفها أحد. كما تحمل الكلمة التجارية القصيرة خطر أن تُقرأ شكلاً أو معالجة لا فئة.',
    doesNotProve:
      'The name does not establish the species, the resin content, the oil yield, the age, the size or form of the material, or the country of origin. It establishes no grade, and it is not a protected designation. It establishes no relationship to Seufi.',
    doesNotProveAr:
      'لا يثبت الاسم نوع الخشب ولا نسبة الراتنج ولا مردود الزيت ولا العمر ولا الحجم ولا الشكل ولا بلد المنشأ. ولا يثبت درجةً ما، وليس اسماً محمياً. ولا يثبت أيّ صلة بـ«سويفي».',
    limitations:
      'This entry gives the general trade referent of the term and the near-spelling recorded with it. It does not establish the species, grading, composition, origin or quality of any material described with it, and it does not establish a synonymy between the two spellings.',
    limitationsAr:
      'تعطي هذه المدخلة المرجع التجاري العام للمصطلح والإملاء القريب المسجَّل معه. ولا تثبت النوع ولا التقييم ولا التركيب ولا المنشأ ولا جودة أي مادة يوصف بها، ولا تثبت ترادفاً بين الإملاءين.',
    related: [
      { slug: 'glossary/seufi', label: 'Seufi' },
      { slug: 'glossary/girmi', label: 'Girmi' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
      { slug: 'buying/evaluating-an-offer', label: 'Evaluating an offer' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
  }),

termEntry({
    slug: 'glossary/digga',
    title: 'Digga',
    titleAr: 'ديغا',
    summary:
      'A trade name in Gulf and South Asian agarwood usage, with a near-spelling recorded beside it.',
    summaryAr:
      'اسم تجاري في استعمال العود الخليجي وجنوب الآسيوي، وإملاء قريب مسجَّل إلى جانبه.',
    directAnswer:
      'Digga is a name used in Gulf and South Asian agarwood trade. The general referent can be stated: it is used to name a category of material, listed among the other material and wood-type names. The precise attribution is local, and a near-spelling, Dugga, is recorded in the same usage. This entry does not assert that the two names are the same and does not assert that they are different.',
    directAnswerAr:
      '«ديغا» اسم تستعمله تجارة العود في الخليج وجنوب آسيا. ويمكن قول المرجع العام: يسمّي فئة من المواد، ويُدرَج بين سائر أسماء المواد وأسماء أنواع الخشب. أما الإسناد الدقيق فمحلي، وقد سُجِّل في الاستعمال نفسه إملاء قريب هو «دغا». وهذه المدخلة لا تقرّر أن الاسمين واحد ولا تقرّر أنهما مختلفان.',
    spelling:
      'The name is written in Latin script in trade documents, as Digga, and in Arabic script as ديغا. A near-spelling, Dugga, is written with a different vowel in the second letter. The two forms appear in the same lists and the records carry them without a note saying which is meant where. No trade body fixes an orthography, so a written form is evidence of the writer rather than of the material.',
    spellingAr:
      'يُكتب الاسم بحروف لاتينية في الوثائق التجارية، وتُكتب حروفه بالحرف العربي «ديغا» في الاستعمال الخليجي. ويكتب الإملاء القريب «دغا» بحركة مختلفة في الحرف الثاني. والصورتان تظهران في القوائم نفسها، وتسجلهما السجلات بلا حاشية تبيّن أيّهما هو المقصود في كل موضع. ولا يثبّت أي جهاز تجاري إملاءً معيّناً، فالصيغة المكتوبة دليل على كاتبها لا على مادّتها.',
    usage:
      'The name appears in lists of material types and in short descriptions of material offered for sale, usually with a qualifier attached — an area, a treatment, or a use. Sellers do not use it consistently, and the same word covers material described differently from one seller to the next. Where a purchase turns on what the word includes, the definition has to be obtained in writing from the counterparty.',
    usageAr:
      'يظهر الاسم في قوائم أنواع المواد وفي أوصاف قصيرة لما هو معروض للبيع، ومقترناً عادةً بمؤهل — مكان، أو معالجة، أو استعمال. ولا يستعمله البائعون باتساق، والكلمة نفسها تصف مادةً أوصافها مختلفة من بائع إلى بائع. وحيث كان الشراء معتمداً على ما يدخله المصطلح، فلا بد من التعريف كتابةً من الطرف الآخر.',
    examples:
      'Dugga is the near-spelling recorded in the same usage, and the neighbouring names in the same lists include Mori, Salla and Hindi Muri. Whether these are subdivisions of one name, or separate names, or spellings that different houses happen to use, is not established here. Three ordinary documents would settle it: the supplier\'s own written definition, a batch record in which one material carries both forms, and a quotation in which the two are used of different lots with the difference explained.',
    examplesAr:
      '«دغا» هو الإملاء القريب المسجَّل في الاستعمال نفسه، والأسماء المجاورة في القوائم نفسها منها «موري» و«سلة» و«هندي موري». وأمّا إن كانت هذه تقسيمات لاسم واحد، أم أسماء متباينة، أم إملاءات تستعملها بيوت تجارية مختلفة، فليس مثبتاً هنا. وثلاثة وثائق عادية تحسم ذلك: تعريف المورد المكتوب لنفسه، وسجل دفعة واحدة تحمل فيها مادة واحدة الصورتين، وعرض سعر تُستعمل فيه الكلمتان في دفعتين مختلفتين مع شرح الفرق.',
    alternatives:
      'Outside the trade the same letters appear in South Asian personal names and in unrelated words in other languages, so a description carrying the name on its own may be read as a brand, a house name or a person. A short trade word of this kind may also denote a form, a treatment or a part rather than a category, and nothing in the letters rules that out.',
    alternativesAr:
      'خارج التجارة تظهر الحروف نفسها في أسماء أشخاص في جنوب آسيا، وفي كلمات لا علاقة لها بها في لغات أخرى، فالوصف الذي يحمل الاسم وحده قد يُقرأ اسماً تجارياً أو اسم دار أو اسم شخص. وقد تدل الكلمة التجارية القصيرة من هذا النوع على شكل أو معالجة أو جزء لا على فئة، ولا يستبعده اللفظ نفسه.',
    doesNotProve:
      'The name does not establish the species, the resin content, the oil yield, the age, the size or form of the material, or the country of origin. It establishes no grade, and it is not a protected designation: nothing prevents a seller from applying it to material from another origin. It establishes no relationship to Dugga in either direction.',
    doesNotProveAr:
      'لا يثبت الاسم نوع الخشب ولا نسبة الراتنج فيه ولا مردود الزيت ولا العمر ولا الحجم ولا الشكل ولا بلد المنشأ. ولا يثبت درجةً ما، وليس اسماً محمياً: فلا شيء يمنع استعماله لمادة من منشأ آخر. ولا يثبت أي صلة بـ«دغا» في أي اتجاه.',
    limitations:
      'This entry gives the general trade referent of the term and the near-spelling recorded with it. It does not establish the species, grading, composition, origin or quality of any material described with it, and it does not establish a synonymy between the two spellings.',
    limitationsAr:
      'تعطي هذه المدخلة المرجع التجاري العام للمصطلح والإملاء القريب المسجَّل معه. ولا تثبت النوع ولا التقييم ولا التركيب ولا المنشأ ولا جودة أي مادة يوصف بها، ولا تثبت ترادفاً بين الإملاءين.',
    related: [
      { slug: 'glossary/dugga', label: 'Dugga' },
      { slug: 'glossary/girmi', label: 'Girmi' },
      { slug: 'glossary/hindi-muri', label: 'Hindi Muri' },
      { slug: 'sourcing/reading-a-quotation', label: 'Reading a quotation' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
  }),

  termEntry({
    slug: 'glossary/dugga',
    title: 'Dugga',
    titleAr: 'دغا',
    summary:
      'The near-spelling recorded alongside Digga, and the documents that would settle the relationship.',
    summaryAr:
      'الإملاء القريب المسجَّل مع «ديغا»، والوثائق التي تحسم الصلة بينهما.',
    directAnswer:
      'Dugga is a near-spelling recorded in the same Gulf and South Asian trade usage as Digga, differing in the second letter. Its general referent is of the same order: a category of material named by sellers in this trade, listed among the other material names. Whether the two spellings are variants of one name or two names is not established here, and the entry leaves that open rather than deciding it by assertion.',
    directAnswerAr:
      '«دغا» إملاء قريب مسجَّل في الاستعمال التجاري الخليجي وجنوب الآسيوي نفسه الذي فيه «ديغا»، ويختلف في الحرف الثاني. ومرجعه العام من المرجع نفسه: فئة من المواد يسمّيها البائعون في هذه التجارة، مُدرجةً بين سائر أسماء المواد. وأمّا إن كان الإملاءان صورتين لاسم واحد أم اسمين، فليس مثبتاً هنا، وتترك المدخلة ذلك مفتوحاً لا تُحسمه بالجزم.',
    spelling:
      'The name is written in Latin script as Dugga, and the Arabic rendering used here is دغا. The difference from Digga is one letter, and in a vocabulary that travels largely in writing, a difference of that size can carry a distinction or simply record a scribe\'s habit. The trade documents carry both forms, and they carry them without a note explaining which is which.',
    spellingAr:
      'يُكتب الاسم بحروف لاتينية، والصورة العربية المستعملة هنا «دغا». والفرق عن «ديغا» حرف واحد، وحرف واحد في مفردات تنتقل في الغالب كتابةً قد يحمل تمييزاً في التسمية أو قد يسجّل عادة خطّاب. وتسجل الوثائق التجارية الصورتين، وتسجلهما بلا حاشية تبيّن أيّهما أرجح.',
    usage:
      'The name appears where Digga appears: in lists of material types and in short sale descriptions. A list on which both appear tells the reader nothing about which is intended in a given line, and the practical answer is to ask for the description in writing rather than to choose between the spellings. The usage is loose, and the meaning a seller attaches to it has to be established from that seller.',
    usageAr:
      'يظهر الاسم حيث يظهر «ديغا»: في قوائم أنواع المواد وفي أوصاف البيع القصيرة. والقائمة التي عليها الاثنان لا تقول للمشتري أيّهما هو المقصود في سطر بعينه، والجواب العملي أن يطلب الوصف كتابةً لا أن يختار بين الإملاءين. والاستعمال فضفاض، والمعنى الذي يربطه البائع بها لا بد من استخراجه منه.',
    examples:
      'The neighbouring record is Digga, and the two appear in the same lists. A seller\'s own written definition, a batch record in which one material carries both forms, and a quotation in which the two are used of different lots with the difference explained are the three ordinary documents that would settle the question.',
    examplesAr:
      'السجل المجاور هو «ديغا»، ويظهر الاثنان في القوائم نفسها. وتعريف مكتوب من البائع، وسجل دفعة واحدة تحمل فيها مادة واحدة الصورتين، وعرض سعر تُستعمل فيه الكلمتان في دفعتين مختلفتين مع شرح الفرق — هذه هي الوثائق الثلاث العادية التي تحسم السؤال.',
    alternatives:
      'As a word outside this trade the string carries no settled English or Arabic sense, so the available readings are narrow: a house name, a brand, or a supplier\'s label for a parcel or a line of stock. A label of that kind is real information about the seller and none about the material until somebody defines it. A short trade word also risks being read as a form or a treatment rather than a category.',
    alternativesAr:
      'خارج هذه التجارة لا يحمل اللفظ معنى إنجليزياً أو عربياً مستقراً، فالقراءات المتاحة ضيقة: اسم دار، أو علامة تجارية، أو تسمية يطلقها المورد على شحنة أو خط بعينه. والتسمية من هذا النوع معلومات واقعة عن البائع لا عن المادة حتى يعرّفها أحد. كما يحمل اللفظ التجاري القصير خطر أن يُقرأ شكلاً أو معالجة لا فئة.',
    doesNotProve:
      'The name does not establish the species, the resin content, the oil yield, the age, the size or form of the material, or the country of origin. It establishes no grade, and it is not a protected designation. It establishes no relationship to Digga.',
    doesNotProveAr:
      'لا يثبت الاسم نوع الخشب ولا نسبة الراتنج ولا مردود الزيت ولا العمر ولا الحجم ولا الشكل ولا بلد المنشأ. ولا يثبت درجةً ما، وليس اسماً محمياً. ولا يثبت أي صلة بـ«ديغا».',
    limitations:
      'This entry gives the general trade referent of the term and the near-spelling recorded with it. It does not establish the species, grading, composition, origin or quality of any material described with it, and it does not establish a synonymy between the two spellings.',
    limitationsAr:
      'تعطي هذه المدخلة المرجع التجاري العام للمصطلح والإملاء القريب المسجَّل معه. ولا تثبت النوع ولا التقييم ولا التركيب ولا المنشأ ولا جودة أي مادة يوصف بها، ولا تثبت ترادفاً بين الإملاءين.',
    related: [
      { slug: 'glossary/digga', label: 'Digga' },
      { slug: 'glossary/seyufi', label: 'Seyufi' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
      { slug: 'buying/evaluating-an-offer', label: 'Evaluating an offer' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
  }),

  termEntry({
    slug: 'glossary/char',
    title: 'Char',
    titleAr: 'شار',
    summary:
      'A short trade descriptor of English origin, and the limits of what such a word can be asked to mean.',
    summaryAr:
      'مؤهل تجاري قصير من أصل إنجليزي، وحدود ما يُطلب من هذه الكلمة أن تعنيه.',
    directAnswer:
      'Char is a short English word used as a descriptor in agarwood trade lists. The general referent can be stated at the level of the ordinary English sense: the word names a burnt or scorched state, and in a trade list it is applied to material described in those terms. What it selects out — which stage of handling is meant, whether the material itself is scorched or has been treated, whether the word is a description of a state or a trade name for a line of stock — is not established here and has to be confirmed with the counterparty.',
    directAnswerAr:
      '«شار» كلمة إنجليزية قصيرة تُستعمل مؤهلاً في قوائم العود. ويمكن قول المرجع العام على مستوى المعنى الإنجليزي العادي: تسمّي حالة محروقة أو محمّرة، وتُطبَّق في القائمة التجارية على مادة موصوفة بذلك. أما ما تختاره من ذلك — أيّ مرحلة من المعالجة هي المقصودة، وهل المادة نفسها محروقة أم معالَجة، وهل الكلمة وصف حالة أم اسم تجاري لخط بعينه من المخزون — فليس مثبتاً هنا، ويجب تأكيده مع الطرف الآخر.',
    spelling:
      'The word is written in Latin script, and it is short, so it is sometimes joined to another word without a separator in informal notes. In a trade list it is used in English while the rest of the description may be in English or in Arabic, which is normal in this trade and is not in itself a sign of anything. Because the word is one of the shortest in the vocabulary, its meaning depends far more on the surrounding description than the letters do.',
    spellingAr:
      'تُكتب الكلمة بحروف لاتينية، وهي قصيرة، فتُلحق أحياناً بكلمة أخرى بلا فاصل في الملاحظات غير الرسمية. وفي القائمة التجارية تُستعمل بالإنجليزية بينما قد يكون بقية الوصف بالإنجليزية أو بالعربية، وهو أمر معتاد في هذه التجارة وليس في نفسه دلالة على شيء. ولأن الكلمة أقصر ما في المفردات، فإن معناها يتوقف على الوصف المحيط بها أكثر من توقفه على حروفها.',
    usage:
      'The word appears in short descriptions and in lists, in front of or beside a material type. It is used more consistently than the names in this vocabulary, because it is a descriptor with a shared ordinary sense, and the disagreement between sellers is about its application rather than about what the word means in general. Even so, the surrounding words matter: a description that pairs the word with a type name is saying something different from one that pairs it with a treatment.',
    usageAr:
      'تظهر الكلمة في الأوصاف القصيرة وفي القوائم، مقدمةً لاسم نوع مادة أو مجاورةً له. وهي تُستعمل باتساق أكبر من أسماء هذه المفردات، لأنها مؤهل له معنى عادي مشترك، والخلاف بين البائعين في تطبيقها لا في معنى الكلمة العام. ومع ذلك فسياقها مهم: الوصف الذي يقترن فيها باسم نوع يقول شيئاً غير الذي يقترن فيها بمعالجة.',
    examples:
      'A South Asian vernacular word for agarwood is also written with a different initial vowel, and the relationship between that word and this spelling is not established here. The neighbouring entries in this glossary are the material and wood-type names that the word is placed beside in the same lists. Two ordinary documents would help: a lot description in which the word appears with the full handling history, and a seller\'s written definition of what the word selects.',
    examplesAr:
      'توجد في جنوب آسيا كلمة عامية للعود تُكتب بحركة مختلفة في حرفها الأول، وأمّا الصلة بين تلك الكلمة وهذا الإملاء فليست مثبتة هنا. وأما المدخلات المجاورة في هذا المعجم فهي أسماء المواد وأنواع الخشب التي يقترن بها هذا اللفظ في القوائم نفسها. ووثيقتان عاديتان تفيدان: وصف دفعة فيه اللفظ مع سرد كامل للمعالجة، وتعريف مكتوب من البائع لما يختاره اللفظ.',
    alternatives:
      'The same letters are an ordinary English word with two quite different senses: a burnt residue, and a unit of something in a computer system. A reader meeting the word in a trade list will take the first; the second is not a reading the trade supports, but it shows how short a word can carry two unrelated meanings without either being wrong. A reader may also read the word as a house name or a brand, and the trade usage does not exclude that reading.',
    alternativesAr:
      'الحروف نفسها كلمة إنجليزية عادية ذات معنيين مختلفين تماماً: بقايا محروقة، ووحدة في نظام حاسوبي. والقارئ الذي يلتقي بالكلمة في قائمة تجارية يأخذ المعنى الأول، والمعنى الثاني ليس قراءة يدعمها التجارة، لكنه يبيّن أن كلمة قصيرة قد تحمل معنيين مختلفين لا خطأ في أيّ منهما. وقد يقرأ القارئ اللفظ اسم دار أو علامة تجارية، والاستعمال التجاري لا يستبعد هذه القراءة.',
    doesNotProve:
      'The word does not establish the species, the resin content, the oil yield, the age, the size or form of the material, or the country of origin. It establishes no grade and no processing standard. It does not establish that the material is burnt, only that the word was applied to it.',
    doesNotProveAr:
      'لا يثبت اللفظ نوع الخشب ولا نسبة الراتنج ولا مردود الزيت ولا العمر ولا الحجم ولا الشكل ولا بلد المنشأ. ولا يثبت درجةً ما ولا معيار معالجة. ولا يثبت أن المادة محروقة، بل يثبت أن اللفظ طُبِّق عليها.',
    limitations:
      'This entry gives the ordinary English referent of the word as it is used in trade descriptions, and the range of readings a short word of this kind invites. It does not establish the species, grading, composition, origin, quality or processing history of any material described with it.',
    limitationsAr:
      'تعطي هذه المدخلة المرجع الإنجليزي العادي للكلمة في أوصاف التجارة، ومدى القراءات التي تثيرها كلمة قصيرة من هذا النوع. ولا تثبت النوع ولا التقييم ولا التركيب ولا المنشأ ولا الجودة ولا تاريخ المعالجة لأي مادة يوصف بها.',
    related: [
      { slug: 'glossary/bisa', label: 'Bisa' },
      { slug: 'quality/photo-evidence-limits', label: 'What a photograph can and cannot show' },
      { slug: 'buying/choosing-oud-wood', label: 'Choosing oud wood' },
      { slug: 'sourcing/reading-a-quotation', label: 'Reading a quotation' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
  }),

  termEntry({
    slug: 'glossary/malino',
    title: 'Malino',
    titleAr: 'مالينو',
    summary:
      'A name recorded in Gulf and South Asian agarwood usage, where the letters suggest a place but the trade does not say so.',
    summaryAr:
      'اسم مسجَّل في استعمال العود الخليجي وجنوب الآسيوي، وحروفه توحي بمكان والتجارة لا تقول ذلك.',
    directAnswer:
      'Malino is a name recorded in Gulf and South Asian agarwood trade. The general referent can be stated: it is used to name a category of material, listed among the other material and wood-type names. The letters of the word resemble a transliterated place name, and that resemblance is one of the readings it invites; this entry does not treat it as an origin, and the trade usage recorded here does not make the word a designation of country.',
    directAnswerAr:
      '«مالينو» اسم مسجَّل في تجارة العود في الخليج وجنوب آسيا. ويمكن قول المرجع العام: يسمّي فئة من مواد، مُدرجاً بين سائر أسماء المواد وأسماء أنواع الخشب. وتشبه حروفه اسم مكان مُرحَّماً، وذلك التشابه إحدى القراءات التي يثيرها الاسم. ولا تعامل هذه المدخلة هذه القراءة بوصفها منشأً، والاستعمال التجاري المسجَّل هنا لا يجعل اللفظ اسماً لبلد.',
    spelling:
      'The name is written in Latin script in trade documents, and in Arabic script as مالينو in Gulf usage. The letters are those of a European word, and the ending is a common one in South Asian transliteration practice, which makes the name easy to read as a place from a distance. Nothing in the trade record settles that reading, and a transliterated place name and a trade name can be spelled the same way.',
    spellingAr:
      'يُكتب الاسم بحروف لاتينية في الوثائق التجارية، وتُكتب حروفه بالحرف العربي «مالينو» في الاستعمال الخليجي. والحروف هي حروف كلمة أوروبية، والنهاية منها شائعة في ممارسة الترحيم في جنوب آسيا، وهو ما يجعل الاسم يُقرأ بسهولة بوصفه مكاناً من بعيد. ولا يحسم سجل التجارة هذه القراءة، والاسم المُرحَّم لبلد والاسم التجاري قد يُكتبان بالشكل نفسه.',
    usage:
      'The name appears in lists of material types and in short descriptions, usually alongside other names from the same vocabulary, and sellers qualify it in the usual way. The interesting question about the word is not what it describes but whether it carries an origin. Where the origin is what a buyer is paying for, the answer has to come in writing from the seller, because the word itself is not a protected geographical designation.',
    usageAr:
      'يظهر الاسم في قوائم أنواع المواد وفي الأوصاف القصيرة، مع سائر الأسماء من المفردات نفسها، ويقيده البائعون بالطريقة المعتادة. والسؤال المهم في هذه الكلمة ليس ما تصفه بل هل تحمل منشأ. وحيث كان المنشأ هو ما يُدفع ثمنه، فلا بد أن يأتي الجواب كتابةً من البائع، لأن اللفظ نفسه ليس اسماً جغرافياً محمياً.',
    examples:
      'The neighbouring names in the same lists include Mori, Salla and Hindi Muri. The records do not show the name attached to a stated country, and they do not show it detached from one either. Two ordinary documents would help: a lot description that names the place the material was collected, and a seller\'s written definition of whether the word carries that meaning.',
    examplesAr:
      'الأسماء المجاورة في القوائم نفسها منها «موري» و«سلة» و«هندي موري». ولا تُظهر السجلات الاسم مقترناً ببلد مذكور، ولا تُظهره منفصلاً عن بلد أيضاً. ووثيقتان عاديتان تفيدان: وصف دفعة يذكر المكان الذي جُمعت منه المادة، وتعريف مكتوب من البائع يحمل اللفظ ذلك المعنى أم لا.',
    alternatives:
      'The string is close to other names in the trade, and it is also close to European place names, so a reader may take it for an origin, a brand, a house name or a personal name. All of these readings are open on the letters alone. A trade name that happens to resemble a place is common in this vocabulary, and the resemblance carries no information about where the material came from.',
    alternativesAr:
      'يقرب اللفظ من أسماء أخرى في التجارة، ويقرب من أسماء أماكن أوروبية أيضاً، فقد يقرأه القارئ منشأً أو علامة تجارية أو اسم دار أو اسم شخص. وكل هذه القراءات مفتوحة على الحروف وحدها. والاسم التجاري الذي يشبه اسم مكان شائع في هذه المفردات، والتشابه لا يحمل معلومة عن مصدر المادة.',
    doesNotProve:
      'The name does not establish the country of origin, and it is not a protected designation. It does not establish the species, the resin content, the oil yield, the age, the size or form of the material. It establishes no grade, and the resemblance to a place name establishes nothing about the material at all.',
    doesNotProveAr:
      'لا يثبت الاسم بلد المنشأ، وليس اسماً محمياً. ولا يثبت نوع الخشب ولا نسبة الراتنج ولا مردود الزيت ولا العمر ولا الحجم ولا الشكل. ولا يثبت درجةً ما، والتشابه مع اسم مكان لا يثبت عن المادة شيئاً.',
    limitations:
      'This entry gives the general trade referent of the term. It does not establish a country of origin, a species, a grading, a composition or a quality for any material described with it, and the resemblance of the word to a place name is not treated as evidence of anything.',
    limitationsAr:
      'تعطي هذه المدخلة المرجع التجاري العام للمصطلح. ولا تثبت بلد منشأ، ولا نوعاً، ولا تقييماً، ولا تركيباً، ولا جودة لأي مادة يوصف بها. ولا يعامل تشابه اللفظ باسم مكان دليلاً على شيء.',
    related: [
      { slug: 'glossary/seylani', label: 'Seylani' },
      { slug: 'glossary/silani', label: 'Silani' },
      { slug: 'origins/india', label: 'India and northeast origin guide' },
      { slug: 'sourcing/wild-and-cultivated-oud', label: 'Wild and cultivated oud' },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
  }),
];
