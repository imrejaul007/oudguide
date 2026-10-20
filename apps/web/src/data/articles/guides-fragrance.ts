import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

/**
 * The remaining fragrance and sourcing articles.
 *
 * These complete the sections whose hubs link to them. Every related
 * link and hub child in the corpus resolves to a published article, so
 * no public page points at something that does not exist.
 */

export const fragranceSourcingArticles: Article[] = [
  simpleGuide({
    slug: 'fragrance/brand-and-manufacturing-origin',
    parent: 'fragrance',
    title: 'Brand identity versus manufacturing origin',
    titleAr: 'هوية العلامة مقابل منشأ التصنيع',
    summary:
      'Who made a fragrance and who put their name on it are two different questions, and only one of them is on the bottle.',
    summaryAr: 'من صنع العطر ومن وضع اسمه عليه سؤالان مختلفان، وواحد منهما فقط هو الذي على القارورة.',
    directAnswer:
      'A fragrance carries a brand, and the brand is not necessarily the manufacturer. The name on the bottle is a trademark; the manufacturing origin is a fact about where the product was compounded and filled. They diverge constantly — a brand may manufacture in one country and sell widely elsewhere, may outsource compounding entirely, or may have a range produced in different places. For a buyer, the question that matters is the manufacturing origin, because that is what determines the documentation, the regulatory treatment and the responsible party.',
    directAnswerAr:
      'يحمل العطر علامة تجارية، والعلامة التجارية ليست الصانع بالضرورة. فالاسم على القارورة علامة مسجَّلة، ومنشأ التصنيع واقعة عن المكان الذي ركّب فيه المنتج وعُبِّئ. والانفصال بينهما دائم — فالعلامة قد تصنّع في بلد وتبيع في غيره، وقد تُسنِد التركيب كلياً إلى طرف ثالث، وقد يكون لها خط ينتج في أماكن مختلفة. وللمشتري السؤال المهم هو منشأ التصنيع، لأنه ما يحدد الوثائق والمعالجة التنظيمية والجهة المسؤولة.',
    sections: [
      {
        heading: 'Why the distinction is not pedantic',
        headingAr: 'لماذا هذا التمييز ليس تهويناً',
        body: [
          'A buyer who asks a supplier who made the product and receives the brand name has not learned where it was made. In a sector where a single brand family can be produced in several jurisdictions, this is the difference between a traceable product and one whose paperwork cannot be checked.',
          'It also matters for what a fragrance is made from. A brand that commissions its oud accord from one supplier and its base from another has composed a product, and the agreement it reaches with a buyer is about the finished product rather than about any single material in it.',
          'And it matters for the referral question. A site that lists a commercial partner has to be able to say what the relationship is: whether the partner is the manufacturer, the brand owner, the distributor, or a retailer. Those are four different relationships and they carry different implications.',
        ],
        bodyAr: [
          'من يسأل مورداً من صنع المنتج فيحصل على اسم العلامة لم يعرف أين صنع. وفي قطاع تتعدد فيه متعددة إنتاج عائلة علامة واحدة، هذا الفرق بين منتج قابل للتتبع ومنتج لا يمكن فحص أوراقه.',
          'وهو يهم أيضاً ممّا صُنع العطر. فالعلامة التي تشتري أوز العود من مورد والقاعدة من آخر قدركّبت منتجاً، والاتفاق الذي تتوصل إليه مع المشتري يتعلق بالمنتج النهائي لا بأي مادة منفردة فيه.',
          'وهو يهم أيضاً في مسألة الإحالة. فالموقع الذي يدرج شريكاً تجارياً لا بد أن يقول ما طبيعة العلاقة: هل الشريك الصانع أم مالك العلامة أم الموزّع أم متجر التجزئة. وهذه أربع علاقات مختلفة تحمل مضامين مختلفة.',
        ],
      },
    ],
    sourceIds: ['IFRA_CERT', 'AGARWOOD_CITES_2022'],
    limitations:
      'This page explains why brand identity and manufacturing origin are separate facts. It does not identify the manufacturer of any product, and it does not establish any brand\'s supply chain.',
    limitationsAr:
      'تشرح هذه الصفحة لماذا هوية العلامة ومنشأ التصنيع واقعتان منفصلتان. ولا تحدد الصانع لأي منتج، ولا تثبت سلسلة إمداد أي علامة.',
    nextSteps: ['Read about perfume credits', 'Read how oud is described in perfumery', 'Read the concentration labels page'],
    nextStepsAr: ['اقرأ عن أسماء العطارين', 'اقرأ كيف يوصف العود في العطور', 'اقرأ صفحة ملصقات التركيز'],
    related: [
      { slug: 'fragrance/perfumers-and-credits', label: 'How perfumer credits are documented' },
      { slug: 'fragrance/oud-in-perfumery', label: 'How oud is described in perfumery' },
      { slug: 'fragrance/concentration-labels', label: 'Understanding perfume concentration labels' },
    ],
  }),

  simpleGuide({
    slug: 'fragrance/perfumers-and-credits',
    parent: 'fragrance',
    title: 'How perfumer credits are documented',
    titleAr: 'كيف توثَّق أسماء العطارين',
    summary:
      'What a credit on a fragrance tells you, what it does not, and how to tell a credit from a marketing line.',
    summaryAr: 'ما يخبرك به الإسناد على عطر، وما لا يخبرك، وكيف تميّز الإسناد من عبارة تسويقية.',
    directAnswer:
      'A perfumer credit names a person who worked on a composition. It does not establish how much of the composition they made, who else worked on it, what materials they chose, or what the fragrance will do on skin. Credits are a way of acknowledging professional authorship within the industry\'s conventions, and they vary in what they imply. Some houses credit the house rather than the individual; some credit several people at different stages; and a credit on a line that is not in fact a person’s name is a marketing device rather than a record.',
    directAnswerAr:
      'يسمّي إسناد العطار شخصاً عمل على تركيب. وهو لا يثبت كم من التركيب صنع، ولا من عمل معه، ولا ما المواد التي اختارها، ولا ما سيفعله العطر على البشرة. والإسناد طريقة للاعتراف بالمؤلفية المهنية ضمن أعراف الصناعة، ويختلف في ما يدل عليه. فبعض الدور تسب العمل إلى الدار لا إلى الشخص، وبعضها ينسب العمل إلى عدة أشخاص في مراحل مختلفة، والإسناد الوارد على عبارة ليست اسم شخص بل عبارة تسويق لا سجل.',
    sections: [
      {
        heading: 'Reading a credit',
        headingAr: 'قراءة الإسناد',
        body: [
          'Ask what the credit covers. Does it name the person who composed the fragrance, the person who composed it in partnership with a house, or the house itself? A credit that names a house is an attribution of the composition to a business, which is a different kind of statement from a credit to an individual.',
          'Ask whether it applies to the whole range or to a specific product, and whether it changed with reformulation. A credit is a statement about a composition at a moment, and a reformulated version may no longer be the work that was credited.',
          'And treat the name itself as the claim it is: that a person whose work is publicly known was involved. It is an acknowledgement of authorship, not a verification of the material or of the process — and the same distinction the rest of this encyclopedia draws between a seller\'s claim and a checked fact.',
        ],
        bodyAr: [
          'اسأل ما الذي يغطيه الإسناد: هل يسمّي من ركّب العطر، أم من ركّبه بالتعاون مع دار، أم الدار نفسها؟ والإسناد الذي يسمّي داراً إسناد التركيب إلى مشروع، وهو نوع مختلف من القول عن الإسناد إلى شخص.',
          'واسأل هل ينطبق على الخط كله أم على منتج بعينه، وهل تغيّر عند إعادة الصياغة. فالإسناد قول عن تركيب في لحظة، وقد لا يعود العمل المُسنَد هو نفسه بعد إعادة الصياغة.',
          'وتعامل مع الاسم نفسه على أنه ما يدّعي: أن شخصاً عملاً معروفاً. له عمل عام قدشارك. هو اعتراف بالمؤلفية لا توثيق للمادة أو للعملية — وهو التمييز نفسه الذي تجده الموسوعة في كل مكان آخر بين ادعاء البائع والواقعة المفحوصة.',
        ],
      },
    ],
    sourceIds: ['IFRA_CERT'],
    limitations:
      'This page explains what a credit is and how to read one. It does not assess any fragrance, any perfumer\'s work, or any brand\'s claims.',
    limitationsAr:
      'تشرح هذه الصفحة ما هو الإسناد وكيف تقرأه. ولا تقيّم أي عطر ولا عمل أي عطار ولا ادعاءات أي علامة.',
    nextSteps: ['Read brand versus manufacturing origin', 'Read how oud is described in perfumery', 'Read notes against ingredients'],
    nextStepsAr: ['اقرأ هوية العلامة مقابل منشأ التصنيع', 'اقرأ كيف يوصف العود في العطور', 'اقرأ النوتات مقابل المكونات'],
    related: [
      { slug: 'fragrance/brand-and-manufacturing-origin', label: 'Brand identity versus manufacturing origin' },
      { slug: 'fragrance/oud-in-perfumery', label: 'How oud is described in perfumery' },
      { slug: 'fragrance/notes-versus-ingredients', label: 'Fragrance notes versus ingredients' },
    ],
  }),

  simpleGuide({
    slug: 'sourcing/wild-and-cultivated-oud',
    parent: 'sourcing',
    title: 'Wild and cultivated sourcing explained',
    titleAr: 'البرّي والمستزرع: من أين تأتي المادة',
    summary:
      'Where the material comes from, how it was produced, and why "wild" is not a quality claim.',
    summaryAr: 'من أين تأتي المادة، وكيف أُنتجت، ولماذا «البرّي» ليست ادعاء جودة.',
    directAnswer:
      'Wild and cultivated agarwood describe two ways of obtaining the resin, not two qualities of it. Wild material is taken from trees that were wounded by storms, insects or boring and left to respond naturally; cultivated material comes from trees that were deliberately inoculated or wounded. The terms answer "how did this tree get its resin", not "is this good oud". A cultivated tree can produce resin equal to a wild one, and the extra controls available on a plantation — a known species, a known tree, a known batch — are often what make the material easier to document.',
    directAnswerAr:
      'العود البري والمستزرع وصفان لطريقة الحصول على الراتنج لا صفتان لجودة المادة. فالبرّي يؤخذ من أشجار جرحتها العواصف أو الحشرات أو الثقب فتستجيب طبيعياً، والمستزرع يأتي من أشجار لُقّحت أو جُرحت عمداً. والمصطلحان يجيبان عن «كيف راتنج هذه الشجرة»، لا عن «هل هذا عود جيد». فشجرة مزروعة قد تنتج راتنجاً يعادل البري، والضوابط المتاحة في المزرعة — نوع معلوم، وشجرة معلومة، ودفعة معلومة — هي غالباً ما يجعل المادة أسهل في التوثيق.',
    sections: [
      {
        heading: 'How cultivated agarwood is made',
        headingAr: 'كيف يُنتج العود المستزرع',
        body: [
          'On a plantation the process is deliberate: the tree is wounded in a controlled way, and the wound is inoculated with the fungus that triggers resin formation, or the tree is treated so that it responds and produces oleoresin over a controlled period.',
          'The result is a supply that is planned rather than gathered, and — the point that matters commercially — one whose origin can be recorded. A plantation knows which species it planted, in which plot, and when it was inoculated. A wild stand does not, in the same way, record the individual tree.',
          'Neither route is a quality category. The resin that forms is the same oleoresin, and what the buyer is actually assessing — resin content, the character of the oil, the consistency of the batch — is a property of the material and its processing, not of how the tree was provoked to produce it.',
        ],
        bodyAr: [
          'في المزرعة تكون العملية مقصودة: تُجرح الشجرة جرحاً منضبطاً، ويُلقَّح الجرح بالفطر الذي يحفّز تكوّن الراتنج، أو تُعالَج الشجرة لتستجيب وتنتج زيتاً عطرياً راتنجياً على مدى مضبوط.',
          'والنتيجة توريد مخطط لا مجموعة، وهي — النقطة المهمة تجارياً — نتيجة يمكن تسجيل مصدرها. فالمزرعة تعرف أي نوع زرعت، وفي أي قطعة أرض، ومتى لقّحته. أما المش البري فلا يسجّل الشجرة الفردية بالطريقة نفسها.',
          'ولا مسار من المسارات هو فئة جودة. فالراتنج المتكون هو الزيت العطري نفسه، وما يقيّمه المشتري فعلاً — نسبة الراتنج، وطابع الزيت، واتساق الدفعة — صفة للمادة وتجهيزها، لا للطريق الذي استُفزّ به الشجرة.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022'],
    limitations:
      'This page explains how wild and cultivated material are obtained and what the terms do and do not establish. It does not assess the quality of any lot, and it does not describe a specific plantation or wild stand.',
    limitationsAr:
      'تصف هذه الصفحة كيف تُنال المادة البرية والمستزرعة، وما الذي تثبته المصطلحات وما لا تثبته. ولا تقيّم جودة أي لوط، ولا تصف مزرعة أو مشتلاً بعينه.',
    nextSteps: ['Read what agarwood actually is', 'Read the batch record page', 'Read about origin and destination'],
    nextStepsAr: ['اقرأ ما هو العود فعلاً', 'اقرأ صفحة سجل الدفعة', 'اقرأ عن المنشأ والوجهة'],
    related: [
      { slug: 'oud-basics/what-is-agarwood', label: 'Agarwood: names, material and uses' },
      { slug: 'quality/batch-records', label: 'What belongs in a batch record' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
    ],
  }),
];
