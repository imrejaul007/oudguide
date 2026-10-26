import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

/**
 * The bakhoor forms page.
 *
 * The reference-tier consumer answer to the #1 unresolved naming gap in the
 * Arabic market: the six forms bakhoor is sold in (masqi, moushik, momshak,
 * tibar, daqa, mamul) and the one distinction that separates them — the
 * infused from the compounded. Each form entry states what the form is, how
 * it is used, and what the form does not establish, because a form name is
 * not a composition, a quality or a guarantee.
 */

export const bakhoorFormsArticles: Article[] = [
  simpleGuide({
    slug: 'products/bakhoor-forms',
    kind: 'product',
    title: 'The forms of bakhoor: what each one is and what it does not prove',
    titleAr: 'أشكال البخور: ما هو كل شكل وما لا يثبته',
    summary:
      'The six forms bakhoor is sold in — masqi, moushik, momshak, tibar, daqa, mamul — what each one is, how it is used, and the one split that separates the infused from the compounded. Each entry states what the form is and what the form does not establish, because a form name is not a composition, a quality or a guarantee.',
    summaryAr:
      'الأشكال الستة التي يُباع فيها البخور — المسقي والموشق والممشق وتبر العود والدقة والمعمول — ما هو كل شكل وكيف يُستعمل، والقسم الذي يفرق بين المُمشَّع والمركَّب. كل مدخلة تذكر ما يكونه الشكل وما لا يثبته، لأن اسم الشكل ليس تركيبا ولا جودة ولا ضمانا.',
    directAnswer:
      'Bakhoor is not one product; it is a family of infused or compounded burning materials, and the family is sold in six recurring forms: masqi, moushik, momshak, tibar, daqa, and mamul. The one split that organises them is between what is infused and what is compounded: masqi, moushik, momshak and tibar are wood, dust or offcut material that has been soaked or bound with an oil or a resin blend, and daqa and mamul are the same material in a broken or moulded shape. The form is not the composition. A label of any one of the six does not state what the oil is, what the resin is, what proportion of the jar is wood and how much is blend, and what the burn will do. It states a shape and a process category, and a buyer who wants the substance presses the form against the fields on the bakhoor page.',
    directAnswerAr:
      'البخور ليس منتجا واحدا، بل هو عائلة من مواد الاحتراق المُمشَّعة أو المركَّبة، وتُباع العائلة في أشكال متكررة ستة: المسقي والموشق والممشق وتبر العود والدقة والمعمول. والقسم الذي يجمعها فردين: ما مُشَّع وما رُكِّب. فالمسقي والموشق والممشق وتبر العود خشب أو نشارة أو قصاصات شُبع بزيت أو بخلطة راتنجات، والدقة والمعمول نفس المادة في شكل مكسور أو مسكوب. والشكل ليس التركيب؛ لا يبيّن أي وسم من الستة ما هو الزيت، وما الراتنج، وما نسبة الخشب إلى الخلطة في الصندوق، وماذا سيفعل الاحتراق. فهي تنصبّ على شكل وعلى فئة معالجة، والمشتري الذي يريد المادة يضغط على الشكل مقابل الحقول في صفحة البخور.',
    sections: [
      {
        heading: 'The forms, one by one',
        headingAr: 'الأشكال، واحداً تلو الآخر',
        body: [
          'Each form is a shape and a process, not a specification.',
        ],
        bodyAr: [
          'كل شكل هو شكل ومعالجة، ليست مواصفة.',
        ],
        list: [
          'Masqi (المسقّي): wood chips, offcuts or dust that has been infused with a scent blend and sold in the damp, still-soft state. It is the form most consumers burn first: the oil has not dried out, so the scent opens fast, the burn is rich, and the material is heavier for its volume because of the moisture. The form says soaked; it does not say with what, how much, or for how long the scent will last.',
          'Moushik (الموشق): material that has been soaked in an oil and a resin blend and then dried or formed into small pieces, usually sold dry. Moushik is essentially masqi that has been left to dry, so it is the same family of preparation at a later stage; a buyer comparing a wet masqi against a dry moushik is comparing the same process at different moisture levels, not two products. The form says soaked-then-dried; it does not say the blend behind the soak.',
          'Momshak / mumshak (الممشق): the prepared, dried form sold as ready-to-burn, usually shaped pieces. It is the form most often sold to a home burner, and it is the form consumers most often buy. It is the same soaked-then-dried material, sold as a finished shape. The form says ready to burn; it does not say what the burn will be like, because the blend behind it has not been read.',
          'Tibar (تبر العود): the dust and fine offcut grade, the ground material that is sold as a powder, usually mixed into the other forms. Tibar is not its own scent; it is the raw dust that goes into a masqi or a tibar-tinted blend, and a listing that sells tibar on its own is selling a component, not a finished bakhoor. The form says dust; it does not say the origin of the dust, its resin content or what it will be mixed with.',
          'Daqa (دقة العود): the broken or chipped form, the shape the material takes when it is deliberately chipped or shaved rather than soaked and reformed. It is the form that is sold to a person who wants to see the wood in the hand: the chips are visible, the resin vein can be checked, and the form is what it looks like, not what it smells like. The form says broken wood; it does not say the resin density or the grade of the wood.',
          'Mamoul (المعمول): the moulded or tablet form, material that has been shaped, pressed and dried into a piece ready to burn on a charcoal. It is the most finished shape in the family, the one a consumer reaches for when they want a clean, shaped piece that burns evenly. The form says moulded; it does not say the resin content, the proportion of wood to oil in the tablet, or the blend.',
        ],
        listAr: [
          'المسقّي: شرائح خشب أو قصاصات أو نشارة مشبعة بخلطة رائحة وتُباع في حالتها الرطبة اللطيفة. هو الشكل الذي يشعل أغلب المستهلكين لأول مرة؛ الزيت لم يجفّ، فالرائحة تُفتح سريعاً، والاحتراق غني، والمادة أثقل من حجمها بسبب الرطوبة. الشكل يقول مشبع؛ ولا يقول بأيّ شيء، وبكم، ولمدة كم ستبقى الرائحة.',
          'الموشق: مادة شُبع بزيت وراتنج ثم جُفت أو صيغت في قطع صغيرة، وتُباع عادة جافة. الموشق في جوهره مسقي أُترك ليُجفّ، فهو نفس عائلة التحضير في مرحلة لاحقة؛ ومن يقارن مسقياً رطباً بموشق جافّ يقارن نفس المعالجة عند مستويات رطوبة مختلفة، لا منتجين. الشكل يقول شُبع ثم جُفّ؛ ولا يقول الخلطة خلف الشبع.',
          'الممشق: الشكل المجهّز المجفف المُباع جاهزاً للاحتراق، عادةً قطع مصاغة. هو الشكل الذي يُباع غالباً لمشعل منزلي، وهو الشكل الذي يشتريه المستهلكون أكثر. هو نفس المادة المشبعة المجففة، مُباعة في شكل منتهٍ. الشكل يقول جاهز للاشتعال؛ ولا يقول كيف سيكون الاحتراق، لأن الخلطة خلفه لم تُقرأ.',
          'تبر العود: صنف النشارة والقصاصة الدقائق، المادة المسحوقة التي تُباع مسحوقاً وتخلط غالباً في الأشكال الأخرى. التبر ليس رائحة قائمة؛ إنه الغبار الخام الذي يدخل في المسقي أو في خلطة التبر، والقائمة التي تبيع التبر وحدها تبيع مكوّناً، لا بخوراً منتهياً. الشكل يقول غبار؛ ولا يقول أصل الغبار، ولا كثافة الراتنج، ولا ما سيُخلط به.',
          'دقة العود: الشكل المكسور أو المنخوط، ما تأخذه المادة إذا كُسرت أو حُذفت عمداً بدل أن تُشبع وتُعاد. هو الشكل المُباع لمن يريد أن يرى الخشب في اليد؛ الشرائح ظاهرة، والراتنج يُمكّن من فحصه، والشكل هو ما يبدو عليه، لا ما يريح عليه. الشكل يقول خشب مكسور؛ ولا يقول كثافة الراتنج ولا مرتبة الخشب.',
          'المعمول: الشكل المسكوب أو القالب، مادة صيغت وضُغطت وجُفت في قطعة جاهزة للاشتعال على الفحم. هو الشكل الأكثر نهاءً في العائلة، الذي يوصله المستهلك عندما يريد قطعة نظيفة منصفة تشتعل بالتساوي. الشكل يقول مسكوب؛ ولا يقول محتوى الراتنج ولا نسبة الخشب إلى الزيت في الحبة ولا الخلطة.',
        ],
      },
      {
        heading: 'What the form is not',
        headingAr: 'ما لا يكونه الشكل',
        body: [
          'None of the six forms is a quality claim, a composition, a scent promise or an authenticity mark. A masqi that is also called premium, a tibar that is called laotian, and a mamoul that is called vintage are all carrying claims that the form name does not carry; the form is the shape and the process, and any of those extra words is a claim that needs the document, the blend disclosure and the paper trail.',
          'The form is also not the burn. A soaked masqi burns through the oil first and the wood second; a dry moushik opens slower and burns longer. The same blend in two of the six forms will give two different first impressions, and the one who compares them is comparing the process as much as the material.',
        ],
        bodyAr: [
          'لا أحد الأشكال الستة هو ادعاء جودة ولا تركيب ولا وعد رائحة ولا علامة أصالة. مسقّى يُسمى فاخراً، وتبرٌ يُسمى لاوسياً، ومعمولٌ يُسمى تاريخياً، كلها تحمل ادعاءات لا يحملها اسم الشكل؛ فالشكل هو الصيغة والمعالجة، وكل كلمة إضافية من هذه هي ادعاء يحتاج الوثيقة وكشف الخلطة والأوراق.',
          'الشكل ليس الاحتراق أيضاً. مسقّى شُبع يشتعل بالزيت أولاً ثم الخشب؛ موشق جافّ يُفتح ببطء ويشتعل أطول. نفس الخلطة في شكلين من الأشكال الستة ستعطي انطباعين أوّلين مختلفين، ومقارنهما يقارن المعالجة بقدر ما يقارن المادة.',
        ],
      },
      {
        heading: 'Which form for which use',
        headingAr: 'أي شكل لأيّ استعمال',
        body: [
          'The form follows the use, not the brand. A home burner wants the momshak or the mamoul, because the shape is ready to sit on a charcoal and to burn evenly; a person who is learning to read material wants the masqi or the daqa, because the wood or the dust is visible and can be checked in the hand; a perfumer or a blenders wants the tibar, because the dust is the raw material that goes into the next blend. The form is the answer to what will you do with this, not to what is in this.',
          'When the use is clear, the form choice narrows, and the buyer can press the fields on the bakhoor page against whichever form they are choosing: the oil question, the wood question, the blend question, and the burn question. The form picks the shape; the fields establish the substance.',
        ],
        bodyAr: [
          'الشكل يتبع الاستعمال، لا العلامة. مشعل منزلي يريد الممشق أو المعمول، لأن الصيغة جاهزة لتجلس على فحم وتشتعل بالتساوي؛ من يتعلم قراءة المادة يريد المسقي أو الدقة، لأن الخشب أو الغبار ظاهر ويمكن فحصه في اليد؛ والعطر أو صانع الخلطة يريد التبر، لأن الغبار المادة الخام التي تدخل في الخلطة التالية. الشكل جواب عن ماذا ستفعل بهذا، ليس جواباً عمّا فيه.',
          'وحين يتضح الاستعمال، يضيق اختيار الشكل، ويمكن للمشتري أن يضغط حقول صفحة البخور على أي شكل يختاره: سؤال الزيت، سؤال الخشب، سؤال الخلطة، وسؤال الاحتراق. الشكل يختار الصيغة؛ الحقول تثبّت المادة.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
    limitations:
      'This page defines the six forms and the split between the infused and the compounded. It does not state the blend behind any form, does not state what any form is worth, does not establish that any named masqi, tibar or mamoul is genuine, and does not state the proportion of wood to oil in any jar. A form name is not a composition, and the fields a buyer must fill in are the ones on the bakhoor page.',
    limitationsAr:
      'تعرّف هذه الصفحة الأشكال الستة والقسم بين الممشوع والمركب. ولا تذكر الخلطة خلف أي شكل، ولا تذكر قيمة أي شكل، ولا تثبت أن مسقّى أو تبر أو معمولاً مسمّياً أصلٌ، ولا تذكر نسبة الخشب إلى الزيت في أي صندوق. اسم الشكل ليس تركيباً، والحقول التي يجب أن يملأها المشتري هي التي في صفحة البخور.',
    nextSteps: [
      'Read the bakhoor family and its fields',
      'Buy a bakhoor form with a clear composition disclosure',
      'See what oud and the raw material actually do not share',
      'See where a form name does not carry the claim behind it',
    ],
    nextStepsAr: [
      'اقرأ عائلة البخور وحقولها',
      'اشترِ شكل بخور بكشف تركيب واضح',
      'انظر ما لا يشترك فيه العود والمادة الخام',
      'انظر أين لا يحمل اسم الشكل الادعاء خلفه',
    ],
    related: [
      { slug: 'products/bakhoor', label: 'Bakhoor: the family these forms are sold in' },
      { slug: 'fragrance/bakhoor-versus-raw-wood', label: 'Bakhoor and raw oud wood' },
      { slug: 'buying/buying-bakhoor', label: 'Buying bakhoor with clear composition information' },
      { slug: 'quality/gulf-market-grade-labels', label: 'Gulf-market oud grading vocabulary' },
    ],
    parent: 'products',
  }),
];
