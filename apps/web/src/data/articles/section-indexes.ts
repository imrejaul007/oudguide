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
    sourceIds: ['AGARWOOD_CITES_2022'],
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
      { slug: 'glossary/hindi-muri', label: 'Hindi Muri', labelAr: 'هندي موري', blurb: 'A wood-type term for agarwood associated in Gulf usage with the Indian subcontinent.', blurbAr: 'مصطلح لنوع الخشب يُقرن في الاستعمال الخليجي بشبه القارة الهندية.' },
      { slug: 'glossary/gaharu', label: 'Gaharu', labelAr: 'غاهارو', blurb: 'The Malay and Indonesian word for agarwood.', blurbAr: 'الكلمة الملايوية والإندونيسية للعود.' },
      { slug: 'glossary/jinko', label: 'Jinko', labelAr: 'جينكو', blurb: 'A term in the wood-type vocabulary, used with varying attribution.', blurbAr: 'مصطلح في مفردات أنواع الخشب، يُستعمل بإسناد متفاوت.' },
      { slug: 'glossary/dehn-al-oud', label: 'Dehn Al Oud', labelAr: 'دهن العود', blurb: 'The oil itself, as distinct from the wood and from an accord.', blurbAr: 'الزيت نفسه، المختلف عن الخشب ومن الأوز.' },
      { slug: 'glossary/tola', label: 'Tola', labelAr: 'تولا', blurb: 'The weight unit in the oud trade.', blurbAr: 'وحدة الوزن في تجارة العود.' },
      { slug: 'glossary/bakhoor', label: 'Bakhoor', labelAr: 'بخور', blurb: 'Chips infused with oil rather than distilled.', blurbAr: 'رقائق مُشبَّعة بالزيت لا مقطَّرة.' },
      { slug: 'glossary/oud-accord', label: 'Oud Accord', labelAr: 'أوز العود', blurb: 'A manufactured fragrance material, and why it is not oud.', blurbAr: 'مادة عطرية مصنّعة، ولماذا ليست عوداً.' },
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
    sourceIds: ['IFRA_STANDARDS'],
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
