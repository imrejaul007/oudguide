import type { Article } from './types.ts';

/**
 * The two section indexes that sit outside the encyclopedia.
 *
 * The manifest declares a glossary index and a product index, and both
 * returned 404. The glossary's 32 terminology routes and the product
 * family's 24 routes are sections of their own: they are not guides, they
 * are not answerable by a single paragraph, and they were being served
 * through the guides catch-all, which gave every one of them two URLs
 * and two canonicals.
 *
 * These are the section hubs. The `children` list is their real content:
 * the table of contents, drawn only from articles that exist. A child
 * whose target has not been written is dropped rather than rendered, so
 * the list below contains only finished work.
 */

const REVIEWED_ON = '2026-10-21';
const REVIEWER = 'OudGuide editorial review';
const REVIEWER_AR = 'مراجعة تحريرية من دليل العود';
const REVIEW_METHOD =
  'Checked that every listed page exists as a reviewed article, that each section carries its own answer and its own stated limitations, and that no assertion on these pages is made without a source or an explicit statement of what is not established.';
const REVIEW_METHOD_AR =
  'دُقِّق أن كل صفحة مذكورة موجودة كمقال مُراجَع، وأن كل قسم يحمل إجابته وحدوده المعلنة، وأن كل ادعاء في هذه الصفحات إما مسنود بمصدر أو مقرور صراحةً بأنه غير مثبوت.';

export const sectionIndexArticles: Article[] = [
  {
    slug: 'glossary',
    kind: 'hub',
    state: 'reviewed',
    title: 'Oud and Fragrance Terminology',
    titleAr: 'مفردات العود والعطور',
    h1: 'Oud and Fragrance Terminology',
    h1Ar: 'مفردات العود والعطور',
    summary:
      'The trade terms used in oud and fragrance, what each one refers to, and what it does not establish.',
    summaryAr:
      'المصطلحات التجارية في العود والعطور، وما يشير إليه كل منها، وما لا يثبته.',
    directAnswer:
      'This is the terminology section. Each entry states what a term refers to, in which language and market it is used, and — the part that matters commercially — what the term does not establish about a material. A trade term describes a material the way a seller describes it; it is not a specification, and the more precisely a term sounds, the more a buyer needs to ask what sits behind it.',
    directAnswerAr:
      'هذا قسم المفردات. تذكر كل مدخلة ما يشير إليه المصطلح، وفي أي لغة وسوق يُستعمل، ثم — وهو الجزء المهم تجارياً — ما لا يثبته المصطلح عن المادة. فالمصطلح التجاري يصف المادة كما يصفها البائع، وهو ليس مواصفة؛ وكلما بدا المصطلح أدق، احتاج المشتري إلى سؤال عمّا وراءه.',
    sections: [
      {
        heading: 'How these entries are written',
        headingAr: 'كيف كُتبت هذه المدخلات',
        body: [
          'Every entry gives the general trade referent of the term, and says plainly which parts of its use are local rather than general. Where a term is used more loosely in one market than another, the entry says so rather than choosing one market and presenting its usage as universal.',
          'A term that is only a spelling of another term gets its own entry rather than being folded into it. The manifest records these as candidate variants whose relationship to one another is not established, and the honest treatment of an unconfirmed variant is a page that says so, names the other spelling, and says what would settle the question. Merging them would publish a synonymy claim that no source supports.',
          'No entry assigns a physical shape, a country of origin, or a universal grade to a term. Where those questions are open, the entry says which question to put to the counterparty instead.',
        ],
        bodyAr: [
          'تعطي كل مدخلة المرجع التجاري العام للمصطلح، وتذكر صراحةً أي أجزائه محلية لا عامة. وحيث يُستعمل مصطلح فضفاضةً في سوق أكثر من آخر، تذكر المدخلة ذلك بدل أن تختار سوقاً وتقدّم استعماله وكأنه عام.',
          'المصطلح الذي ليس سوى إملاء لمصطلح آخر يأخذ مدخلة مستقلة بدل أن يُدمج فيه. فالسجل يسجّلها مرشحين من صور إملائية لا صلة تثبتها، والمعاملة الصادقة للاسم غير المؤكد صفحة تقول ذلك، وتسمّي الإملاء الآخر، وتذكر ما يحسم المسألة. أما دمجهما فيُنشر ادعاء ترادف لا يسنده أي مصدر.',
          'ولا تربط أي مدخلة بين المصطلح وشكلاً مادياً ولا بلد منشأ ولا درجة عامة. وحيث تكون تلك الأسئلة مفتوحة، تذكر المدخلة السؤال الذي يُطرح على الطرف الآخر.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
    limitations:
      'These entries establish the general trade referent of the terms. They do not establish the grading, composition, origin or quality of any material described with them, and they are not a standard, a certification, or a substitute for asking the counterparty.',
    limitationsAr:
      'تثبت هذه المدخلات المرجع التجاري العام للمصطلحات. ولا تثبت التقييم أو التركيب أو المنشأ أو جودة أي مادة يوصف بها، وليست معياراً ولا شهادة ولا بديلاً عن سؤال الطرف الآخر.',
    reviewer: REVIEWER,
    reviewerAr: REVIEWER_AR,
    reviewMethod: REVIEW_METHOD,
    reviewMethodAr: REVIEW_METHOD_AR,
    reviewedOn: REVIEWED_ON,
    nextSteps: [
      'Read what a laboratory report can and cannot establish',
      'Read how a supplier is asked which origins it handles',
    ],
    nextStepsAr: [
      'اقرأ ما الذي يثبته تقرير مخبري وما لا يثبته',
      'اقرأ كيف يُسأل المورد عن الأصول التي يتعامل معها',
    ],
    related: [
      { slug: 'quality/seller-defined-super-grades', label: 'Super, Double Super and Triple Super labels' },
      { slug: 'oud-basics/what-is-agarwood', label: 'Agarwood: names, material and uses' },
      { slug: 'fragrance/notes-versus-ingredients', label: 'Fragrance notes versus ingredients' },
    ],
    children: [
      { slug: 'glossary/mori', label: 'Mori', labelAr: 'موري', blurb: 'A wood-type name in Gulf and South Asian trade vocabulary; the referent is general, the attribution is local.', blurbAr: 'اسم من مفردات أنواع الخشب في تجارة الخليج وجنوب آسيا؛ المرجع عام والإسناد محلي.' },
      { slug: 'glossary/mini-muri', label: 'Mini Muri', labelAr: 'ميني موري', blurb: 'A size-qualified form of the wood-type name Mori, and the question the qualifier leaves open.', blurbAr: 'صورة مزيَّنة بالمقاس من اسم نوع الخشب «موري»، والسؤال الذي يتركه المؤهل مفتوحاً.' },
      { slug: 'glossary/ball-muri', label: 'Ball Muri', labelAr: 'بال موري', blurb: 'A form-qualified form of the wood-type name Mori, and why no shape is assigned to it here.', blurbAr: 'صورة مزيَّنة بالشكل من اسم نوع الخشب «موري»، ولماذا لا تُنسب إليها هنا شكلٌ محدد.' },
      { slug: 'glossary/salla', label: 'Salla', labelAr: 'سلة', blurb: 'A wood-type name in Gulf trade usage, and the neighbouring spellings recorded with it.', blurbAr: 'اسم من مفردات أنواع الخشب في الاستعمال الخليجي، والإملاءات المجاورة المسجَّلة معه.' },
      { slug: 'glossary/baby-salla', label: 'Baby Salla', labelAr: 'بيبي سلة', blurb: 'A size-qualified form of the wood-type name Salla, and the scale it leaves unspecified.', blurbAr: 'صورة مزيَّنة بالمقاس من اسم نوع الخشب «سلة»، والمقياس الذي تتركه غير محدد.' },
      { slug: 'glossary/salda', label: 'Salda', labelAr: 'سلدة', blurb: 'A near-spelling recorded in the same usage as Salla, with the relationship left open.', blurbAr: 'إملاء قريب مسجَّل في الاستعمال نفسه كـ«سلة»، وتُترك الصلة مفتوحة.' },
      { slug: 'glossary/zawaya', label: 'Zawaya', labelAr: 'زوايا', blurb: 'A wood-type name in Gulf and South Asian trade vocabulary, used with varying attribution.', blurbAr: 'اسم من مفردات أنواع الخشب في تجارة الخليج وجنوب آسيا، يُستعمل بإسناد متفاوت.' },
      { slug: 'glossary/girmi', label: 'Girmi', labelAr: 'جيرمي', blurb: 'A wood-type name recorded in Gulf usage, with a near-spelling in the same records.', blurbAr: 'اسم لنوع من الخشب مسجَّل في الاستعمال الخليجي، وإملاء قريب في السجلات نفسها.' },
      { slug: 'glossary/girmit', label: 'Girmit', labelAr: 'جيرميت', blurb: 'The near-spelling recorded alongside Girmi, and what would settle the relationship between them.', blurbAr: 'الإملاء القريب المسجَّل مع «جيرمي»، وما يحسم الصلة بينهما.' },
      { slug: 'glossary/zura', label: 'Zura', labelAr: 'زورة', blurb: 'A wood-type name with a recorded near-spelling in the same Gulf usage.', blurbAr: 'اسم لنوع من الخشب له إملاء قريب مسجَّل في الاستعمال الخليجي نفسه.' },
      { slug: 'glossary/zora', label: 'Zora', labelAr: 'زورا', blurb: 'The near-spelling recorded alongside Zura, and the documents that would settle the relationship.', blurbAr: 'الإملاء القريب المسجَّل مع «زورة»، والوثائق التي تحسم الصلة بينهما.' },
      { slug: 'glossary/kudi', label: 'Kudi', labelAr: 'كودي', blurb: 'A term in the wood-type vocabulary, used with varying attribution between sellers.', blurbAr: 'مصطلح في مفردات أنواع الخشب، يُستعمل بإسناد متفاوت بين البائعين.' },
      { slug: 'glossary/bisa', label: 'Bisa', labelAr: 'بيسا', blurb: 'A material-type name in Gulf trade vocabulary, with a size-qualified form recorded alongside it.', blurbAr: 'اسم من مفردات المواد في تجارة العود الخليجية، وله صورة مزوّنة بالمقاس مسجَّلة معه.' },
      { slug: 'glossary/mini-bisa', label: 'Mini Bisa', labelAr: 'ميني بيسا', blurb: 'A size-qualified form recorded in the same usage as Bisa, and the question the qualifier leaves open.', blurbAr: 'صورة مزوّنة بالمقاس مسجَّلة في الاستعمال نفسه الذي فيه «بيسا»، والسؤال الذي يتركه المؤهل مفتوحاً.' },
      { slug: 'glossary/seufi', label: 'Seufi', labelAr: 'سويفي', blurb: 'A name in Gulf and South Asian trade vocabulary, with a near-spelling recorded in the same usage.', blurbAr: 'اسم في مفردات تجارة الخليج وجنوب آسيا، وإملاء قريب مسجَّل في الاستعمال نفسه.' },
      { slug: 'glossary/seyufi', label: 'Seyufi', labelAr: 'سيوفي', blurb: 'The near-spelling recorded alongside Seufi, and the documents that would settle the relationship.', blurbAr: 'الإملاء القريب المسجَّل مع «سويفي»، والوثائق التي تحسم الصلة بينهما.' },
      { slug: 'glossary/digga', label: 'Digga', labelAr: 'ديغا', blurb: 'A trade name in Gulf and South Asian agarwood usage, with a near-spelling recorded beside it.', blurbAr: 'اسم تجاري في استعمال العود الخليجي وجنوب الآسيوي، وإملاء قريب مسجَّل إلى جانبه.' },
      { slug: 'glossary/dugga', label: 'Dugga', labelAr: 'دغا', blurb: 'The near-spelling recorded alongside Digga, and the documents that would settle the relationship.', blurbAr: 'الإملاء القريب المسجَّل مع «ديغا»، والوثائق التي تحسم الصلة بينهما.' },
      { slug: 'glossary/char', label: 'Char', labelAr: 'شار', blurb: 'A short trade descriptor of English origin, and the limits of what such a word can be asked to mean.', blurbAr: 'مؤهل تجاري قصير من أصل إنجليزي، وحدود ما يُطلب من هذه الكلمة أن تعنيه.' },
      { slug: 'glossary/malino', label: 'Malino', labelAr: 'مالينو', blurb: 'A name recorded in Gulf and South Asian agarwood usage, where the letters suggest a place but the trade does not say so.', blurbAr: 'اسم مسجَّل في استعمال العود الخليجي وجنوب الآسيوي، وحروفه توحي بمكان والتجارة لا تقول ذلك.' },
      { slug: 'glossary/silani', label: 'Silani', labelAr: 'سيلاني', blurb: 'A name recorded in Gulf and South Asian agarwood usage, with two neighbouring spellings in the same lists.', blurbAr: 'اسم مسجَّل في استعمال العود الخليجي وجنوب الآسيوي، وإملاءات مجاورة ثلاثة في القوائم نفسها.' },
      { slug: 'glossary/seylani', label: 'Seylani', labelAr: 'سييلاني', blurb: 'A neighbouring spelling in Gulf and South Asian agarwood usage, and the records that would settle the relationship.', blurbAr: 'إملاء مجاور في استعمال العود الخليجي وجنوب الآسيوي، والسجلات التي تحسم الصلة.' },
      { slug: 'glossary/kynam', label: 'Kynam', labelAr: 'كينام', blurb: 'A spelling recorded in South Asian and Gulf agarwood usage, with a near-spelling in the same lists.', blurbAr: 'إملاء مسجَّل في استعمال العود في جنوب آسيا والخليج، وإملاء قريب في القوائم نفسها.' },
      { slug: 'glossary/kinam', label: 'Kinam', labelAr: 'كيمام', blurb: 'A near-spelling recorded alongside Kynam, and the documents that would settle the relationship.', blurbAr: 'إملاء قريب مسجَّل مع «كينام»، والوثائق التي تحسم الصلة بينهما.' },
      { slug: 'glossary/kyara', label: 'Kyara', labelAr: 'كيا را', blurb: 'A name in the trade vocabulary whose letters read differently in different languages.', blurbAr: 'اسم في مفردات التجارة، وحروفه تُقرأ على نحو مختلف في لغات مختلفة.' },
      { slug: 'glossary/chenxiang', label: 'Chenxiang', labelAr: 'تشن شيانغ', blurb: 'The Chinese name for agarwood resin, which is also a trade word for a category of agarwood.', blurbAr: 'الاسم الصيني لراتنج العود، وهو أيضاً كلمة تجارية لفئة من العود.' },
      { slug: 'glossary/hindi-muri', label: 'Hindi Muri', labelAr: 'هندي موري', blurb: 'A trade term for a category of agarwood wood; what it denotes and what it does not establish.', blurbAr: 'مصطلح تجاري لفئة من خشب العود؛ ما الذي يدل عليه وما الذي لا يثبته.' },
      { slug: 'glossary/tola', label: 'Tola', labelAr: 'تولا', blurb: 'The weight unit in the oud trade, and why the unit itself is worth confirming.', blurbAr: 'وحدة الوزن في تجارة العود، ولماذا يستحق إما الوحدة نفسها التأكيد.' },
      { slug: 'glossary/dehn-al-oud', label: 'Dehn Al Oud', labelAr: 'دهن العود', blurb: 'The oil itself, as distinct from the wood it comes from and the accords made to imitate it.', blurbAr: 'الزيت نفسه، المختلف عن الخشب الذي يأتي منه والأوزات المصنوعة لتقليده.' },
      { slug: 'glossary/attar', label: 'Attar', labelAr: 'عطر إيتار', blurb: 'The concentrated skin application that carries a scent on a base, most often sandalwood, distinct from the oil and from a sprayed perfume.', blurbAr: 'الإعداد المركّز الذي يحمّل العطر على أساس، غالباً الصندل، ويُطبَّق على البشرة، المختلف عن الزيت وعن العطر المُرشَّ.' },
      { slug: 'glossary/bakhoor', label: 'Bakhoor', labelAr: 'بخور', blurb: 'Chips infused with oil, and why its composition varies so widely.', blurbAr: 'رقائق مُشبَّعة بالزيت، ولماذا يختلف تركيبها اختلافاً واسعاً.' },
      { slug: 'glossary/gaharu', label: 'Gaharu', labelAr: 'gaharu', blurb: 'The Malay and Indonesian word for agarwood, and what the Indonesian trade uses it for.', blurbAr: 'الكلمة الملايوية والإندونيسية للعود، وما تستعملها التجارة الإندونيسية له.' },
      { slug: 'glossary/jura', label: 'Jura', labelAr: 'جورة', blurb: 'A shape-qualified trade name in the form-and-shape vocabulary, and what it does not establish.', blurbAr: 'اسم تجاري مؤهل بالشكل في مفردات الشكل والحجم، وما لا يثبته.' },
      { slug: 'glossary/muri', label: 'Muri', labelAr: 'موري', blurb: 'A trade name in the recorded wood-type vocabulary, and the near-spellings that sit with it.', blurbAr: 'اسم تجاري في مفردات أنواع الخشب المسجلة، والإملاءات القريبة التي تجاوره.' },
      { slug: 'glossary/kalakasi', label: 'Kalakasi', labelAr: 'كالاقسي', blurb: 'A producing-region name, stated as a recorded association rather than a settled claim.', blurbAr: 'اسم منطقة إنتاج، مصوغ علاقا مسجلا لا ادعاء محسوما.' },
      { slug: 'glossary/qadeem', label: 'Qadeem', labelAr: 'قديم', blurb: 'An ageing descriptor in the trade vocabulary, not a measurement of the material it names.', blurbAr: 'مؤلِّق عمر في المفردات التجارية، ليس قياسا للمادة التي يسميها.' },
      { slug: 'glossary/oud-accord', label: 'Oud Accord', labelAr: 'أوز العود', blurb: 'A manufactured fragrance material, and why it must not be described as oud.', blurbAr: 'مادة عطرية مصنّعة، ولماذا لا يجوز وصفها بأنها عود.' },
      { slug: 'glossary/jinko', label: 'Jinko', labelAr: 'جينكو', blurb: 'The Japanese and Chinese trade word for agarwood, and the grade systems built around it.', blurbAr: 'الكلمة اليابانية والصينية للعود، وأنظمة الدرجات المبنية حولها.' },
      { slug: 'glossary/murruxi', label: 'Murruxi (Murūki)', labelAr: 'مروكي', blurb: 'A Gulf market name for a quality tier, often confused with Morocco; what it refers to and what it does not establish.', blurbAr: 'لقب تسويقي خليجي لمرتبة جودة، يُخلط أحياناً بالمغرب؛ ما يشير إليه وما لا يثبته.' },
      { slug: 'glossary/kashmuri', label: 'Kashmuri (Kashmiri)', labelAr: 'كشميري', blurb: 'A perfumery tier and scent character, not a botanical species or grower region; what the label establishes.', blurbAr: 'مرتبة عطرية وطابع رائحة، وليس نوعاً نباتياً أو منطقة إنتاج؛ ما يثبته الوسم.' },
    ],
  },

  {
    slug: 'products',
    kind: 'hub',
    state: 'reviewed',
    title: 'Fragrance Product Families',
    titleAr: 'أصناف المنتجات العطرية',
    h1: 'Fragrance Product Families',
    h1Ar: 'أصناف المنتجات العطرية',
    summary:
      'The formats agarwood and fragrance are sold in, what each one is, and what it is not.',
    summaryAr:
      'الصيغ التي يُباع العود والعطر بها، وما هو كل منها، وما ليس هو.',
    directAnswer:
      'A product family is a format, not a product. "Oud wood" is the family of resinous wood sold as chips, dust, blocks and carvings; "oud oil" is the family of distillates and dilutions; an oud accord is a family of manufactured fragrance materials built to imitate the character of oud. Each family page states what the format includes, what it is most often confused with, and which fields about it have no published standard. None of them carries a price, a composition or a grade, because no format establishes those on its own.',
    directAnswerAr:
      'فئة المنتج صيغة لا منتج. فـ«خشب العود» هي فئة الخشب الراتنجي المباع رقائقاً ونشارةً وقطعاً ومنحوتات، و«دهن العود» فئة من نواتج التقطير والمزونات، و«أوز العود» فئة من المواد العطرية المصنّعة التي تُبنى لتقليد طابع العود. وتذكر كل صفحة من هذه العائلة ما تشمله الصيغة، وما يُخلط بها أكثر من غيرها، وأي الحقول عنها لا معيار منشور لها. ولا تحمل أي منها سعراً ولا تركيباً ولا درجة، لأن أي صيغة لا تثبت ذلك بذاتها.',
    sections: [
      {
        heading: 'How to read a family page',
        headingAr: 'كيف تُقرأ صفحة فئة',
        body: [
          'Every family page answers the same seven questions, in the same order: what the family includes, what it is not the same as, the material and format fields that apply to it, the comparisons a buyer makes, the questions a buyer should ask, where to find suppliers, and which guides answer the questions this format raises.',
          'The "not the same as" section is the one that earns the page. A buyer who knows only that an order is for "bakhoor" and an order for "raw oud wood" have asked two different questions, and a supplier who does not distinguish them is selling to an ambiguity.',
          'The pages carry no composition figures. That is a deliberate limit, not an omission: a family page explains a format, and a composition claim belongs to a specific product, a specific formulation and a specific intended use. Where a page names a fragrance standard, it names the scope of that standard, and the standards themselves are explicit that they do not certify a finished product and that conformity never replaces a safety assessment.',
        ],
        bodyAr: [
          'تجيب كل صفحة عن الأسئلة السبعة نفسها بالترتيب نفسه: ما تشمله الفئة، وما ليست مساوية لها، وحقول المادة والصيغة المنطبقة عليها، والمقارنات التي يجريها المشتري، والأسئلة التي ينبغي للمشتري طرحها، وأين يجد الموردين، وأي الأدلة تجيب عن الأسئلة التي تثيرها هذه الصيغة.',
          'وقسم «ما ليست مساوية لها» هو الذي يستحق الصفحة. فمن يعرف من طلبه أن «بخور» وطلب آخر أن «خشب عود خام» فقد سأل سؤالين مختلفين، والمورد الذي لا يميز بينهما يبيع إلى غموض.',
          'ولا تحمل هذه الصفحات أرقام تركيب. وهذا حدّ مقصود لا نقص: فصفحة الفئة تشرح صيغة، وادعاء التركيب يخص منتجاً بعينه وتركيباً بعينه واستخداماً مقصوداً بعينه. وحيث تذكر الصفحة معياراً عطرياً، فذكر نطاق ذلك المعيار، والمعايير نفسها صريحة في أنها لا تصدّق منتجاً منتهياً وأن المطابقة لا تُغني عن تقييم السلامة.',
        ],
      },
    ],
    sourceIds: ['IFRA_STANDARDS', 'AGARWOOD_REVIEW_2014', 'IFRA_LIBRARY', 'IFRA_APPLYING'],
    limitations:
      'These pages establish what each format is and how a buyer should tell the formats apart. They do not establish the composition, the concentration, the price or the quality of any product in a family, and a format name never replaces a supplier specification.',
    limitationsAr:
      'تثبت هذه الصفحات ما هي كل صيغة وكيف يميز المشتري بين الصيغ. ولا تثبت التركيب ولا التركيز ولا السعر ولا جودة أي منتج في فئة، واسم الصيغة لا يحل محل مواصفة المورد أبداً.',
    reviewer: REVIEWER,
    reviewerAr: REVIEWER_AR,
    reviewMethod: REVIEW_METHOD,
    reviewMethodAr: REVIEW_METHOD_AR,
    reviewedOn: REVIEWED_ON,
    nextSteps: [
      'Browse the producer directory',
      'Read how a supplier is asked which origins it handles',
    ],
    nextStepsAr: [
      'تصفح دليل المنتجين',
      'اقرأ كيف يُسأل المورد عن الأصول التي يتعامل معها',
    ],
    related: [
      { slug: 'fragrance/oud-accords', label: 'Oud accords in fragrance composition' },
      { slug: 'fragrance/bakhoor-versus-raw-wood', label: 'Bakhoor and raw oud wood' },
      { slug: 'using-oud/wood-versus-oil', label: 'Oud wood or oud oil' },
    ],
    children: [
      { slug: 'products/oud-wood', label: 'Oud Wood', labelAr: 'خشب العود', blurb: 'Chips, dust, blocks and carvings of resinous wood, and what the family excludes.', blurbAr: 'الرقائق والنشارة والقطع والمنحوتات من الخشب الراتنجي، وما تستثنيه الفئة.' },
      { slug: 'products/oud-oil', label: 'Oud Oil', labelAr: 'دهن العود', blurb: 'Distillates, dilutions and carriers, and how a buyer tells them apart.', blurbAr: 'نواتج التقطير والمزونات والحاملات، وكيف يميزها المشتري.' },
      { slug: 'products/perfume-oils', label: 'Perfume Oils', labelAr: 'الزيوت العطرية', blurb: 'Concentrated fragrance oils, and the difference between an oil and an accord.', blurbAr: 'الزيوت العطرية المركَّزة، والفرق بين الزيت والأوز.' },
      { slug: 'products/attars', label: 'Attars', labelAr: 'العطور الشرقية', blurb: 'Alcohol-free distilled oils, and what the word does and does not mean.', blurbAr: 'زيوت مقطَّرة بلا كحول، وما يعنيه اللفظ وما لا يعنيه.' },
      { slug: 'products/finished-perfumes', label: 'Finished Perfumes', labelAr: 'العطور المنتهية', blurb: 'Sprays and formulated fragrances, where the formulation is the product.', blurbAr: 'البخاخات والعطور المركَّبة، حيث يكون التركيب هو المنتج.' },
      { slug: 'products/bakhoor', label: 'Bakhoor', labelAr: 'البخور', blurb: 'Infused chips and dust, and the two things that make a bakhoor.', blurbAr: 'الرقائق والنشارة المشبَّعة، والأمران اللذان يصنعان البخور.' },
      { slug: 'products/bakhoor-forms', label: 'The forms of bakhoor', labelAr: 'أشكال البخور', blurb: 'The six forms bakhoor is sold in — masqi, moushik, tibar, daqa, mamul — and what each form does not prove.', blurbAr: 'الأشكال الستة التي يباع فيها البخور — المسقي والموشق والتبر والدقة والمعمول — وما لا يثبته كل شكل.' },
      { slug: 'products/incense', label: 'Incense', labelAr: 'البخور', blurb: 'Loose and stick incense, and what a buyer asks about the smoke.', blurbAr: 'البخور المفكَّك والعصي، وما يسأله المشتري عن الدخان.' },
      { slug: 'products/oud-powder', label: 'Oud Powder', labelAr: 'بودرة العود', blurb: 'Powdered wood, and why it is not a dust made by grinding.', blurbAr: 'الخشب المسحوق، ولماذا ليست نشارةً من الطحن.' },
      { slug: 'products/agarwood-beads', label: 'Agarwood Beads', labelAr: 'خرز العود', blurb: 'Beads and small turned pieces, and the question their size raises.', blurbAr: 'الخرز والقطع الصغيرة، والسؤال الذي يثيره حجمها.' },
      { slug: 'products/agarwood-carvings', label: 'Agarwood Carvings', labelAr: 'منحوتات العود', blurb: 'Carved and worked objects, where the making dominates the value.', blurbAr: 'المجسمات المنحوتة المصنوعة، حيث يغلب الصنع على القيمة.' },
      { slug: 'products/electric-burners', label: 'Electric Burners', labelAr: 'المباخر الكهربائية', blurb: 'Heat sources for incense and bakhoor, and the two ways they differ.', blurbAr: 'مصادر الحرارة للبخور والبخور المشبَّع، وطريقتا اختلافهما.' },
      { slug: 'products/charcoal-burners', label: 'Charcoal Burners', labelAr: 'مباخر الفحم', blurb: 'Charcoal heating, and why the material of the coal matters.', blurbAr: 'الحرارة بالفحم، ولماذا يهم مادة الفحم.' },
      { slug: 'products/incense-accessories', label: 'Incense Accessories', labelAr: 'ملحقات البخور', blurb: 'Dishes, holders and tools, and the question of what they touch.', blurbAr: 'الصواني والحاملات والأدوات، وسؤال ما تلمسه من المادة.' },
      { slug: 'products/home-fragrance', label: 'Home Fragrance', labelAr: 'معطرات المنزل', blurb: 'The home-fragrance family and what its products are made to do.', blurbAr: 'عائلة معطرات المنزل وما صُنعت منتجاته لتفعله.' },
      { slug: 'products/reed-diffusers', label: 'Reed Diffusers', labelAr: 'المبشرات بالقصب', blurb: 'Diffusers and their liquid, and why the two are bought separately.', blurbAr: 'المبشرات وسائلها، ولِيش يُشترى الاثنان منفصلين.' },
      { slug: 'products/candles', label: 'Candles', labelAr: 'الشموع', blurb: 'Scented candles, and the difference between the wax and the fragrance.', blurbAr: 'الشموع المعطرة، والفرق بين الشمع والعطر.' },
      { slug: 'products/room-sprays', label: 'Room Sprays', labelAr: 'مبيدات الجو', blurb: 'Room sprays, and why a room spray is not a perfume.', blurbAr: 'مبيدات الجو، ولماذا ليست عطراً.' },
      { slug: 'products/musk-fragrances', label: 'Musk Fragrances', labelAr: 'العطور المسكية', blurb: 'Musk as a fragrance family, and what the name does not settle.', blurbAr: 'المسك كعائلة عطرية، وما لا يحسمه الاسم.' },
      { slug: 'products/sandalwood-materials', label: 'Sandalwood Materials', labelAr: 'مواد الصندل', blurb: 'Sandalwood as a material family, and why it sits beside oud rather than with it.', blurbAr: 'الصندل كعائلة مواد، ولماذا يجاور العود ولا ينضم إليه.' },
      { slug: 'products/rose-materials', label: 'Rose Materials', labelAr: 'مواد الورد', blurb: 'Rose and rose-derived materials as a fragrance family.', blurbAr: 'الورد والمواد المشتقة منه كعائلة عطرية.' },
      { slug: 'products/private-label-perfumes', label: 'Private Label Perfumes', labelAr: 'عطور العلامة الخاصة', blurb: 'Made-to-order fragrance, and what the buyer has to specify.', blurbAr: 'العطر المصنَّع عند الطلب، وما الذي على المشتري أن يحدده.' },
      { slug: 'products/sample-sets', label: 'Sample Sets', labelAr: 'أطقم العينات', blurb: 'Sample sets as a format, and why a set is not a small order.', blurbAr: 'أطقم العينات كصيغة، ولماذا الطقم ليس طلباً صغيراً.' },
      { slug: 'products/gift-sets', label: 'Gift Sets', labelAr: 'أطقم الهدايا', blurb: 'Presentation formats, and why the packaging is not the product.', blurbAr: 'صيغ الإهداء، ولماذا التغليف ليس المنتج.' },
      { slug: 'products/perfume-packaging', label: 'Perfume Packaging', labelAr: 'تغليف العطور', blurb: 'Bottles, caps, boxes and atomisers, and the specification a buyer gives.', blurbAr: 'الزجاجات والأغطية والصناديق والبخاخات، والمواصفة التي يعطيها المشتري.' },
    ],
  },
];
