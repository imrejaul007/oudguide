import type { Article } from './types.ts';

/**
 * The foundational articles.
 *
 * `oud-basics/what-is-agarwood` is the page the audit used as its
 * example of the shared fallback body, so it is the one written with the
 * most care: it answers the question the page exists to answer, and it
 * separates the three things the trade calls "agarwood".
 *
 * Each entry is a finished, question-specific body. They are NOT route
 * briefs: the route manifest’s 772 records are all still marked
 * "Research/planning; no finished article supplied", and they stay that
 * way. This file is where reviewed work lives.
 *
 * Editorial rules applied to every article here:
 *
 *   - The `directAnswer` paragraph answers the page’s own question. It is
 *     not a restatement of the title and it is not shared between pages.
 *   - `limitations` says what the article does not establish. An article
 *     that cannot state its limitations has not been reviewed.
 *   - `sources` are real documents that were retrieved, each with a scope.
 *   - Claims that rest on a source’s *absence* (for example, that CITES
 *     Appendix II does not define a grading vocabulary) say so as such.
 *   - Nothing here asserts a field visit, a laboratory result, a peer
 *     review by a named external expert, or an absolute security
 *     guarantee. Those were the unsupported assurances the audit found.
 */

const REVIEWED_ON = '2026-10-20';

/** The reviewer recorded on every article. */
const REVIEWER = 'OudGuide editorial review';
const REVIEWER_AR = 'مراجعة تحريرية من دليل العود';
const REVIEW_METHOD =
  'Reviewed against the cited sources, checked for a question-specific answer, and checked that every assurance is either sourced or explicitly marked as a limitation.';
const REVIEW_METHOD_AR =
  'رُوجعت مقابل المصادر المذكورة، ودُقِّق أن لكل صفحة إجابة خاصة بسؤالها، وأن كل ادعاء إمّا مسنود بمصدر أو موسوم صراحةً كقيد.';

export const basicsArticles: Article[] = [
  /* ======================================================================
     oud-basics/what-is-agarwood
     The page the audit used as its example of the shared fallback body.
     ====================================================================== */
  {
    slug: 'oud-basics/what-is-agarwood',
    kind: 'guide',
    state: 'reviewed',
    title: 'Agarwood: names, material and uses',
    titleAr: 'العود: الأسماء والمادة والاستخدامات',
    h1: 'Agarwood: names, material and uses',
    h1Ar: 'العود: الأسماء والمادة والاستخدامات',
    summary:
      'What the word agarwood covers, which plants produce it, how it forms, and what each form is used for.',
    summaryAr: 'ما الذي يعنيه اسم العود، وما النباتات التي تُنتجه، وكيف يتكون، وما استخدام كل شكل منه.',
    directAnswer:
      'Agarwood is the resin-impregnated heartwood of a tree that has been wounded and colonised by fungi. The name is used loosely in trade for several unrelated things: the resinous wood itself, the essential oil distilled from that wood, and, outside the strict sense, any perfumery material made to smell like oud. Those are different products with different prices, different uses and different rules for handling, and a buyer who treats them as one thing will be quoted against the wrong product.',
    directAnswerAr:
      'العود هو قلب الشجرة المطعوم بالراتنج الذي تكوّن بعد جرحها وإصابتها بالفطريات. ويُستخدم الاسم في التجارة بمعنى فضفاض لشيء مختلف: الخشب الراتنجي نفسه، والزيت العطري المقطّر منه، وخارج المعنى الضيق أي مادة عطرية صُنعت لتُشبه العود. وهذه منتجات مختلفة في الأسعار والاستخدامات وقواعد التعامل، ومن يعاملها كشيء واحد سيُسعَّر مقابل منتج خطأ.',
    sections: [
      {
        heading: 'What the word actually covers',
        headingAr: 'ما الذي يغطيه هذا الاسم فعلاً',
        body: [
          'Three things in trade are called agarwood, and they are worth separating before anything else.',
          'First, the wood: the heartwood of a tree that has produced resin as a wound response. It is sold by weight in the form of chips, flakes, powder or larger blocks, and it is bought mostly for distillation or for burning.',
          'Second, the oil: what is distilled from that resinous wood, usually by hydro-distillation in a copper vessel (traditionally called a deg) or by steam. This is the most expensive form and the one most often counterfeited.',
          'Third, the fragrance material: compounds and compositions made to reproduce the smell of oud — modern oud accords used in fine fragrance and in bakhoor. These are manufactured products. They are not agarwood, and they are usually not sold as agarwood.',
        ],
        bodyAr: [
          'ثلاثة أشياء في التجارة تُسمى العود، ويجدر فصلها قبل أي شيء آخر.',
          'أولها الخشب: قلب شجرة أنتجت راتنجاً استجابةً لجرح. ويُباع بالوزن على شكل رقائق أو رقائق مسحوق أو قطع أكبر، ويُشترى غالباً للتقطير أو للحرق.',
          'وثانيها الزيت: ما يُقطَّر من ذلك الخشب الراتنجي، عادةً بالتقطير المائي في إناء نحاسي (يُسمّى تقليدياً دِقّاً) أو بالبخار. وهو أغلى الأشكال وأكثرها انتحالاً.',
          'وثالثها المادة العطرية: مركبات وتوليفات تُصنع لتقليد رائحة العود — أوذات عود حديثة في العطور الفاخرة وفي البخور. وهذه منتجات مصنّعة، وليست عوداً، ولا تُباع عادةً بوصفها عوداً.',
        ],
        list: [
          'Agarwood wood — resinous heartwood, sold by weight',
          'Oud oil (Dehn Al Oud) — the distilled oil, sold by the tola or the kilo',
          'Oud accords and bakhoor — manufactured fragrance materials, not agarwood',
        ],
        listAr: [
          'خشب العود — قلب شجرة راتنجي، يُباع بالوزن',
          'دهن العود — الزيت المقطّر، يُباع بالتولا أو الكيلو',
          'أوزات العود والبخور — مواد عطرية مصنّعة، وليست عوداً',
        ],
      },
      {
        heading: 'Which plants produce it',
        headingAr: 'ما النباتات التي تنتجه',
        body: [
          'Resin-bearing heartwood occurs in several genera of the family Thymelaeaceae. Aquilaria is the principal one in commerce, and the species that matter most are A. crassna in Southeast Asia, A. malaccensis in Malaysia and Indonesia, and A. agallocha in the Indian subcontinent. Gyrinops versteegii and Gyrinops decempartita cover New Guinea and parts of the Malay archipelago. Aquilaria sinensis is the Chinese species, and A. yunnanensis and A. sinoensis are further Chinese taxa.',
          'These are different trees with different chemistry, different resin yields and different market histories. "Assam oud" and "Koh Kong oud" are not interchangeable in a quotation, and the differences are botanical, not merely regional preference.',
        ],
        bodyAr: [
          'يوجد القلب الغني بالراتنج في عدة أجناس من الفصيلة الزهرية Thymelaeaceae. وAquilaria هو الجنس الرئيسي في التجارة، وأهم أنواعه A. crassna في جنوب شرق آسيا، وA. malaccensis في ماليزيا وإندونيسيا، وA. agallocha في شبه القارة الهندية. أما Gyrinops versteegii وGyrinops decempartita فتغطي غينيا الجديدة وأجزاء من أرخبيل الملايو. وAquilaria sinensis هو النوع الصيني، وA. yunnanensis وA. sinoensis نوعان صينيان آخران.',
          'هذه أشجار مختلفة كيميائها ومخاطرها من الراتنج وتاريخها في السوق مختلفة. و"عود أسام" و"عود كوه كونغ" ليسا قابلين للتبادل في عرض سعر، والفرق فباتي لا مجرد تفضيل إقليمي.',
        ],
        callout: {
          title: 'What the botanical names do and do not establish',
          body:
            'The species name establishes which plant a material came from and therefore which regulatory list it falls under. It does not establish the resin content, the age of the tree, the quality of the oil, or the legal status of a specific shipment.',
          bodyAr:
            'يحدّد اسم النوع النباتي أي نبات جاءت منه المادة، وبالتالي أي قائمة تنظيمية تندرج تحتها. لكنه لا يحدّد نسبة الراتنج ولا عمر الشجرة ولا جودة الزيت ولا الوضع القانوني لشحنة بعينها.',
        },
      },
      {
        heading: 'How the resin forms',
        headingAr: 'كيف يتكون الراتنج',
        image: {
          src: '/images/heartwood-resin-formation.svg',
          alt: 'Botanical diagram of Aquilaria heartwood resin formation showing xylem wound reaction and phytoalexin accumulation',
          altAr: 'رسم تشريحي نباتي لتكوّن راتنج العود في خشب قلب شجرة أكيلاريا استجابة للجرح ودفاعا ضد الفطريات',
          caption: 'Cross-section of Aquilaria trunk illustrating sesquiterpene resin infiltration into interxylary phloem following fungal inoculation.',
          captionAr: 'مقطع عرضي في جذع شجرة العود (أكيلاريا) يوضح ترسب الراتنج العطري في اللحاء الداخلي عقب تلقيح الفطريات.',
        },
        body: [
          'Healthy agarwood trees are not notably fragrant. The wood only becomes valuable after the tree is wounded and the wound is colonised by fungi, which trigger the tree to deposit oleoresin into the surrounding heartwood over a period of years. This is why plantation agarwood is inoculated deliberately, and why wild agarwood is found in trees that have been damaged by storms, insects or boring.',
          'Two consequences follow for a buyer. The first is that "wild" is not a synonym for "better" — it describes how the tree was wounded, not how good the resulting material is, and planted trees can produce resin of equal quality. The second is that a tree which has never been wounded produces no agarwood at all, so an "oud tree" in a photograph is usually an ordinary tree until something happens to it.',
        ],
        bodyAr: [
          'الأشجار السليمة من العود ليست ذات رائحة لافتة. ولا يصبح الخشب ذا قيمة إلا بعد جرح الشجرة وإصاب الجرح بفطريات، ما يدفع الشجرة إلى ترسيب زيت عطري راتنجي في قلب الخشب المحيط على مدى سنوات. ولهذا تُلقَّح مزارع العود عمداً، ولهذا يُوجد العود البري في أشجار تضررت بالعواصف أو الحشرات أو الثقب.',
          'ونتج عن ذلك نتيجتان للمشتري. الأولى أن "البري" ليست مرادفاً لـ"الأفضل" — فهي تصف كيف جُرحت الشجرة لا مدى جودة المادة الناتجة، وقد تنتج الأشعار المزروعة راتنجاً بجودة مماثلة. والثانية أن شجرة لم تُجرح قط لا تنتج عوداً إطلاقاً، فـ"شجرة عود" في صورة هي عادةً شجرة عادية حتى يقع لها شيء.',
        ],
      },
      {
        heading: 'What each form is used for',
        headingAr: 'ما استخدام كل شكل',
        body: [
          'Wood is used for distillation, for burning as incense, and — where the piece is well-formed and the scent is right — for jewellery and small objects. Oil is used as a concentrate in fine fragrance and in attar, and is also sold on its own for application on incense. Attar is a different category again: a co-distilled or sandalwood-based product that is not oud oil at all, even when it is described as an oud attar.',
          'Buying for a defined use is the practical version of understanding the material. A buyer who wants to make perfume needs oil and will care about concentration, solvent and ageing. A buyer who wants to burn the material needs chips and will care about resin distribution and the smoke. The two buyers should not be sent the same sample.',
        ],
        bodyAr: [
          'يُستخدم الخشب للتقطير، وللحرق كبخور، وفي بعض القطع الجيدة ذات الرائحة الملائمة للزينة والأغراض الصغيرة. ويُستخدم الزيت مركّزاً في العطور الفاخرة والعطور الشرقية، ويُباع منفرداً أيضاً， تطبيقه على البخور. أما العطر الشرقي فئة مختلفة: منتج مُقطَّر مشترك أو قاعدته الصندل، وهو ليس دهن عود إطلاقاً حتى لو وُصف بأنه عطر عود.',
          'والشراء وفق غرض محدد هو الصيغة العملية لفهم المادة. من يريد صناعة عطر يحتاج زيتاً وسيهتم بالتركيز والمذيب والتعتيق. ومن يريد حرق المادة يحتاج رقائق وسيهتم بانتشار الراتنج والدخان. ولا ينبغي إرسال العينة نفسها للمشترين اثنين.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'FAOLEX'],
    limitations:
      'This page describes what the terms cover and which species are involved. It does not establish the resin content of any batch, the age of any tree, the quality of any oil, or the legal status of any shipment — those depend on the material and the exporting country, and they are settled with documents rather than with a description.',
    limitationsAr:
      'تصف هذه الصفحة ما تغطيه المصطلحات وما الأنواع النباتية المعنية. ولا تثبت نسبة الراتنج في أي دفعة ولا عمر أي شجرة ولا جودة أي زيت ولا الوضع القانوني لأي شحنة — فهذه أمور تعتمد على المادة وبلد التصدير، وتُحسم بالوثائق لا بالوصف.',
    reviewer: REVIEWER,
    reviewerAr: REVIEWER_AR,
    reviewMethod: REVIEW_METHOD,
    reviewMethodAr: REVIEW_METHOD_AR,
    reviewedOn: REVIEWED_ON,
    nextSteps: [
      'Read how oud grading claims work before buying on a label',
      'Compare the wood-versus-oil choice for your intended use',
      'Check what documents a legitimate shipment carries',
    ],
    nextStepsAr: [
      'اقرأ كيف تعمل ادعاءات تقييم العود قبل الشراء اعتماداً على التسمية',
      'قارن بين الخشب والزيت وفق الغرض من الاستخدام',
      'اطلع على الوثائق التي تحملها الشحنة المشروعة',
    ],
    related: [
      { slug: 'oud-basics/agarwood-botanical-identity', label: 'Botanical identity and genus comparison' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'using-oud/wood-versus-oil', label: 'Wood versus oil: choose a format' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
    ],
    parent: 'oud-basics',
  },
];
