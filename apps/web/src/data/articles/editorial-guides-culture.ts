import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

/**
 * Editorial guides: the culture block.
 *
 * Each page is a finished, question-specific body. The register documents
 * the material and its trade — not religious doctrine, and not ceremonial
 * detail. Where a page's question reaches past the register, the claims are
 * bounded to what a cited source's scope carries and the rest is stated as
 * an explicit limitation; a citation never dresses up a claim it does not
 * establish.
 */

export const editorialGuideCulture: Article[] = [
  /* ---------------------------------------------------------------
     culture/agarwood-in-buddhist-traditions
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'culture/agarwood-in-buddhist-traditions',
    parent: 'culture',
    title: 'Agarwood in Buddhist traditions',
    titleAr: 'العود في التقاليد البوذية',
    summary:
      'What the documented record says about agarwood in Buddhist settings: that the material is widely traded across Buddhist-majority regions and used in devotional contexts, and where that record stops.',
    summaryAr:
      'ما يقوله السجل الموثق عن العود في الأوساط البوذية: أن المادة متداولة على نطاق واسع في المناطق البوذية واستُخدمت في سياقات التعبد، وأين ينتهي السجل.',
    directAnswer:
      'The register does not record Buddhist doctrine, and this page does not try to. What it can say, within its scope, is the trade side of the question: the agarwood trade is a long-standing trade that has moved through Buddhist-majority countries, and the review of the agarwood-producing genera records a broad producing and consuming geography that overlaps those countries. Devotional use of the material in Buddhist practice is a documented association to state as such, not a doctrinal claim to defend. The page therefore separates the trade fact, which is sourced, from the religious-meaning claim, which the register does not carry, and it keeps that separation visible to the reader.',
    directAnswerAr:
      'لا يسجل السجل العقيدة البوذية، ولا تحاول هذه الصفحة أن تفعل. ما يمكنها قوله ضمن نطاقها هو جانب السؤال التجاري: فترقية العود تجارة قائمة منذ زمن طويل مرّت عبر دول أغلبيتها بوذية، وتسجّل مراجعة أجناس الخشب الراتنجي جغرافيا إنتاج واستهلاك واسعة تداخل تلك الدول. أما الاستخدام التعبدّي للمادة في الممارسة البوذية، فهو علاقة موثقة تُعرض بوصفها علاقة، لا ادعاء عقدي يُدافع عنه. لذا تُميّز الصفحة بين حقيقة التجارة الموثقة، وبين ادعاء المعنى الديني الذي لا يحمله السجل، وتُبقي هذا التمييز في وضوحٍ أمام القارئ.',
    sections: [
      {
        heading: 'What the trade record covers',
        headingAr: 'ما يغطيه سجل التجارة',
        body: [
          'The record the page can draw on is a trade record. The review of the agarwood-producing genera documents the producing geography of the material: a set of countries across mainland and island Southeast Asia where the resinous wood forms, and the trade that moves it. The earlier trade study adds the demand side, showing a market that has long carried the material across regions. Put together, the two establish that agarwood has moved through the same countries in which Buddhist devotional life is a major cultural practice. That is a fact about the overlap of the trade and the culture, and it is the whole of what the register says about the two meeting.',
          'The point to keep is that the register speaks in the language of trade, not of belief. A producing region and a consuming region in the same country do not, by themselves, document why the material is used in a particular religious setting. The page states the overlap as an overlap and does not cross it into a doctrinal claim, because that is the one thing the sources it cites do not say.',
        ],
        bodyAr: [
          'السجل الذي تتصرف عليه الصفحة هو سجل تجاري. فتوثّق مراجعة أجناس الخشب الراتنجي جغرافيا إنتاج المادة: مجموعة دول في جنوب شرق آسيا البرّية والجزيرية يتكوّن فيها الخشب الراتنجي، والتجارة التي تنقله. ويضيف دراسة التجارة المبكرة جهة الطلب، ويبيّن سوقا حمله المادة عبر المناطق منذ زمن. ومع ذلك يثبت المصدران أن العود تحرك عبر الدول نفسها التي تشكل فيها الممارسة التعبدية البوذية جزءا رئيسا من الحياة الثقافية. وهذه حقيقة عن تداخل التجارة والثقافة، وهي كل ما يقوله السجل عن لقاء الأمرين.',
          'المقصود أن نحفظه أن السجل يتكلم بلغة التجارة لا بلغة الاعتقاد. فالموطن الإنتاجي وموطن الاستهلاك في بلد واحد لا يوثقان بحدّ ذاتهما سبب استخدام المادة في سياق ديني بعينه. فتُعرض الصفحة التلاقي بوصفه تلاقياً ولا تعبره إلى ادعاء عقدي، لأن ذلك هو الشيء الوحيد الذي لا تقوله المصادر التي استشهدت بها.',
        ],
      },
      {
        heading: 'Where the record stops',
        headingAr: 'أين ينتهي السجل',
        body: [
          'The register does not record the internal, doctrinal meaning of the material in Buddhist practice. It does not record which ceremonies use it, which orders value it, or what it signifies to a devotee. Those are claims a page of this kind cannot make without sources that are not in the register, and making them would be exactly the fabrication the editorial rules forbid: attaching a religious authority to a material that the material’s own documentation does not claim. So the page names the boundary plainly. It can say the material is traded and devotionally used across Buddhist regions, on the record it carries. It cannot say what the material means in the tradition, because no source in the register records the meaning. That boundary is not a gap the page papers over; it is the limit the page reports.',
        ],
        bodyAr: [
          'لا يسجل السجل المعنى الداخلي العقدي للمادة في الممارسة البوذية. فلا يسجل أي احتفال يستخدمها، ولا أي مذهب قيمها، ولا ماذا تعني لمعتنقها. وتلك ادعاءات لا تستطيع صفحة من هذا النوع أن تقولها دون مصادر ليست في السجل، وقولها سيكون تحديداً هو التلفيق الذي يحرمه القانون التحريري: إلصاق سلطة دينية بمادة لا تدّعي توثيقها نفسها ذلك. لذا تسمّي الصفحة الحدّ بوضوح. يمكنها أن تقول إن المادة متداولة ومستخدمة في التعبد عبر المناطق البوذية، على السجل الذي تحمله. ولا يمكنها أن تقول ما تعنيه في المذهب، لأن لا مصدر في السجل يسجل المعنى. وهذا الحدّ ليس فراغاً تُخفيه الصفحة؛ إنه الحدّ الذي تقرّبه.',
        ],
      },
      {
        heading: 'How to read the association',
        headingAr: 'كيف تقرأ العلاقة',
        body: [
          'The workable reading is to hold two statements apart. The first is sourced: the agarwood trade has a broad regional footprint that overlaps Buddhist-majority countries, and the material is used in devotional settings across that footprint. The second is not sourced by the register: what the use means to the tradition. A reader who wants the first is served by the trade and geography pages that this page links to. A reader who wants the second has to go to a source on the religious tradition itself, which is outside the scope of this encyclopedia. Keeping the two apart is what makes the page useful rather than decorative: it tells the reader exactly which half of the question it has answered and which half it has honestly left open.',
          'In practice the association shows up where the trade and the material meet: the recorded use of resinous wood in the incense and fragrance forms that the devotional setting carries. The page can point to that meeting point on the record it has, and stop there.',
        ],
        bodyAr: [
          'القراءة العملية أن تعزل قوليْن عن بعضهما. الأول موثّق: فلتجارة العود أثر إقليمي واسع يتداخل مع دول أغلبيتها بوذية، وتُستخدم المادة في سياقات تعبدية عبر ذلك الأثر. والثاني غير موثّق بالسجل: ما الذي يعنيه الاستخدام للمذهب. والقارئ الذي يطلب الأول يُخدمه صفحات التجارة والجغرافيا التي تربط إليها هذه الصفحة. أما من يطلب الثاني فعليه اللجوء إلى مصدر على المذهب الديني نفسه، وهو خارج نطاق هذه الموسوعة. وعزل الأمرين عما ينجع هو ما يجعل الصفحة مفيدة لا زخرفية: فهي تبيّن للقارئ أي نصف من السؤال أجابته وأي نصف تركته مفتوحا بصدق.',
          'وفي الممارسة تظهر العلاقة حيث تلتقي التجارة والمادة: فالاستخدام المسجّل للخشب الراتنجي في أشكال البخور والعطر التي تحكيها السياقات التعبدية. ويمكن للصفحة أن تشير إلى نقطة الالتقاء تلك على السجل الذي عندها، وتتوقف عنده.',
        ],
        list: [
          'State the overlap as a trade fact, not a belief fact.',
          'Mark the ceremonial and doctrinal claims as outside the register.',
          'Point a reader who wants meaning to a source on the tradition itself.',
        ],
        listAr: [
          'قيل التلاقي بوصفه حقيقة تجارية لا حقيقة اعتقادية.',
          'وسوم ادعاءات الاحتفالات والعقائد خارج نطاق السجل.',
          'وتوجيه القارئ الذي يطلب المعنى إلى مصدر على المذهب نفسه.',
        ],
      },
    ],
    sourceIds: ['TRAFFIC_AGARWOOD_TRADE_2000', 'AGARWOOD_REVIEW_2014'],
    workedExample: {
      situation:
        'A hypothetical reader asks whether the encyclopedia “documents that agarwood is part of Buddhist practice” and wants a sourced yes or no.',
      situationAr:
        'قارئ افتراضي يسأل إن كانت الموسوعة «توثق أن العود جزء من الممارسة البوذية» ويريد نعم أو لا موثقة.',
      steps: [
        'Separate the two questions inside the one: the trade footprint (sourced) from the doctrinal meaning (not sourced by the register).',
        'Answer the trade footprint from the producing and demand records the register carries.',
        'Answer the meaning question with an honest open: no source in the register records what the use signifies to the tradition.',
        'Point the reader to the tradition’s own sources for the half the page does not answer.',
      ],
      stepsAr: [
        'افصل السؤالين اللذين في السؤال الواحد: أثر التجارة (موثّق) عن المعنى العقدي (غير موثّق بالسجل).',
        'أجب عن أثر التجارة من سجلات الإنتاج والطلب التي يحملها السجل.',
        'وأجب عن سؤال المعنى بفتح صادق: لا مصدر في السجل يسجل ماذا يعبّر الاستخدام للمذهب.',
        'وجوّه القارئ إلى مصادر المذهب نفسه للنصف الذي لا تجيبه الصفحة.',
      ],
      takeaway:
        'The example shows the page dividing a compound question into a sourced half and an open half, and reporting both without claiming the one it cannot. That division is the whole of what a page on a religious topic can honestly do on this register.',
      takeawayAr:
        'يُبيّن المثال أن الصفحة قسمت سؤالاً مركّبا إلى نصف موثّق ونصف مفتوح، وقرّرت الاثنين دون ادّعاء ما لا تستطيع. وهذه القسمة كل ما تستطيع صفحة في موضوع ديني أن تفعله بصدق على هذا السجل.',
    },
    limitations:
      'This page reports the documented trade overlap between agarwood and Buddhist-majority regions and records that the material is used in devotional settings. It does not establish the doctrinal or ceremonial meaning of that use, which no source in the register records. It is a statement about where the trade and the culture overlap, not about what the tradition says the material means.',
    limitationsAr:
      'تقرّر هذه الصفحة التلاقي التجاري الموثق بين العود والمناطق ذات الأغلبية البوذية، وتسجّل استخدام المادة في سياقات التعبد. ولا تثبّت المعنى العقدي أو الاحتفالي لتلك الاستخدامات، وهو ما لا يسجله أي مصدر في السجل. فالصفحة قرارة عن أين تلتقي التجارة والثقافة، لا عن ماذا يقول المذهب إن المادة تعني.',
    nextSteps: [
      'Read the recorded trade history of the material',
      'Read the Chinese and Islamic tradition pages beside this one',
      'Read what the word agarwood actually covers',
    ],
    nextStepsAr: [
      'اقرأ تاريخ التجارة الموثق للمادة',
      'اقرأ صفحتي التقاليد الصينية والإسلامية بجانب هذه',
      'اقرأ ما يغطيه اسم العود فعليا',
    ],
    related: [
      { slug: 'culture/agarwood-trade-history', label: 'Agarwood trade through time' },
      { slug: 'culture/oud-in-islamic-traditions', label: 'Oud in Islamic traditions' },
      { slug: 'culture/agarwood-in-chinese-traditions', label: 'Agarwood in Chinese traditions' },
      { slug: 'products/incense', label: 'Incense and how it is used' },
    ],
  }),

  /* ---------------------------------------------------------------
     culture/aguru-and-indian-traditions
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'culture/aguru-and-indian-traditions',
    parent: 'culture',
    title: 'Aguru and Indian fragrance traditions',
    titleAr: 'العنبر الهندي وتقاليد العطر في الهند',
    summary:
      'What the documented record says about Indian aguru (agarwood) and its place in the fragrance trade, and where the cultural-tradition claims are left honestly open.',
    summaryAr:
      'ما يقوله السجل الموثق عن العنبر الهندي (العود) ومكانه في تجارة العطر، وأين تُترَك ادعاءات التقاليد الثقافية مفتوحة بصدق.',
    directAnswer:
      'The register documents India as a producing region for the resinous wood and documents Indian material in the fragrance trade, which is the tradeable part of the question. The word aguru is the term under which that Indian material has moved in the trade, and the recorded trade shows it carried into the same markets the study of the United Arab Emirates market describes. What the register does not carry is the cultural-tradition claim: no source in the register records the ceremonial or devotional history of the material inside Indian tradition. The page therefore states the producing and trade facts on their sources, and states the tradition question as open, keeping the two visibly apart so the reader is not left to assume the page has answered a question the register has not recorded an answer to.',
    directAnswerAr:
      'يوثّق السجل الهند بوصفها منطقة إنتاج للخشب الراتنجي، ويوثّق المادة الهندية في تجارة العطر، وهو الجزء القابل للتداول في السؤال. و«العنبر» هو المصطلح الذي تحركت به تلك المادة الهندية في التجارة، وتبيّن التجارة المسجلة أنها حملت إلى الأسواق نفسها التي تصفها دراسة سوق الإمارات. وما لا يحمله السجل هو ادعاء التقاليد الثقافية: فلا مصدر في السجل يسجل تاريخ المادة الاحتفالي أو التعبدّي داخل المذهب الهندي. لذا تقرّر الصفحة حقائق الإنتاج والتجارة على مصادرها، وتقرّر سؤال التقاليد بوصفه مفتوحا، وتبقي الأمرين منفصلين في وضوح، حتى لا يتصور القارئ أن الصفحة أجابت سؤالاً لم يسجل السجل له جواباً.',
    sections: [
      {
        heading: 'India on the record: producing and trading',
        headingAr: 'الهند على السجل: إنتاجا وتجارا',
        body: [
          'The producing record is the firmer ground on this question. The review of the agarwood-producing genera records India among the countries where the resinous wood forms, and the trade record adds the movement of that material. The study of the United Arab Emirates market describes the fragrance market there and records that Indian-origin material is among the material it carries, which is the documented link between the Indian producing region and the destination market a buyer would actually meet the material in. The two together say: India produces, and Indian material trades into the region’s markets, under the term the trade uses for it.',
          'The careful reader holds to that. The register establishes the producing region and the trade route into the market. It does not establish a history of the material’s use in Indian ceremonial or devotional life. That is not a small distinction, because the question as asked mixes the two: the tradeable fact, and the cultural-tradition claim. A page that answered only the first half would be honest, and this page is built to do exactly that.',
        ],
        bodyAr: [
          'سجل الإنتاج هو الأرض الأكثر صلابة في هذا السؤال. وتسجّل مراجعة أجناس الخشب الراتنجي الهند من بين الدول التي يتكوّن فيها الخشب الراتنجي، ويضيف سجل التجارة تحرك تلك المادة. وتصِف دراسة سوق الإمارات سوق العطر هناك وتسجّل أن المادة الأصلية الهندية من بين المواد التي تحملها، وهو الربط الموثق بين منطقة الإنتاج الهندية وسوق الوجهة التي يلتقيها المشتري المادة فعلا. ويقيلا معاً: الهند تُنتج، ومادة هندية تتاجر في أسواق المنطقة، تحت المصطلح الذي تستخدمه التجارة لها.',
          'القارئ الدقيق يمسك بذلك. فالسجل يثبت منطقة الإنتاج ومسار التجارة إلى السوق. ولا يثبت تاريخ استخدام المادة في الحياة الاحتفالية أو التعبدية في الهند. وهذا ليس تفصيلا صغيرا، لأن السؤال كما طُرح يمزج الأمرين: حقيقة القابلة للتجارة، وادعاء التركة الثقافية. فالصفحة التي أجرت النصف الأول فقط كانت صادقة، وهذه الصفحة مبنية لتفعل بالضبط ذلك.',
        ],
      },
      {
        heading: 'The term the trade uses',
        headingAr: 'المصطلح الذي تستخدمه التجارة',
        body: [
          'The name aguru is the term under which Indian resinous wood has moved in the trade, and the trade glossary the encyclopedia carries treats it as a trade term with a known meaning. That is a fact about the vocabulary, and it is useful: it tells the buyer that when a market names Indian material by that word, the word is doing the trade’s job of identifying origin and form. The page can rely on that, because the vocabulary is documented. What it cannot rely on is a claim that the word’s use in markets reflects a continuous devotional history, because no source in the register records that continuity. The term is a trade fact; the history behind it is not a recorded one.',
        ],
        bodyAr: [
          '«العنبر» هو المصطلح الذي تحركت به المادة الهندية الراتنجية في التجارة، ومعجم التجارة الذي تحمله الموسوعة يعالجه بوصفه مصطلحا تجاريا له معنى معروف. وهذه حقيقة عن المصطلح، وهي نافعة: فهي تُخبر المشتري أنه حين تسمّي سوق ما مادة هندية بهذا الكلمة، فإن الكلمة تؤدي واجب التجارة في تحديد المنشأ والشكل. ويمكن للصفحة أن تعتمد على ذلك، لأن المصطلح موثّق. وما لا تعتمد عليه هو ادعاء أن استخدام الكلمة في الأسواق يعكس تاريخا تعبدّيا متصلا، لأنه لا مصدر في السجل يسجل تلك الاستمرارية. فالمصطلح حقيقة تجارية؛ أما التاريخ خلفه فليس مسجلا.',
        ],
      },
      {
        heading: 'Where the tradition question is left open',
        headingAr: 'أين يُترَك سؤال التقاليد مفتوحا',
        body: [
          'The honest shape of this page is to leave the cultural-tradition question open and say so. The register does not carry a source on the ceremonial history of the material in Indian tradition, and the page will not invent one. A reader who wants that history has to go to a source on the tradition itself, the way the related pages on other traditions do. What this page gives is the tradeable, documented side: where the material is produced, how it moves into the market, and under what term. Keeping that side on its own footing, and marking the other side open, is what keeps the page inside the rules: it answers the question it can source and does not pretend to answer the one it cannot.',
          'The buyer’s practical takeaway is that the term and the trade are dependable and the tradition is not, on this register. No claim the page makes about meaning is a claim the sources do not carry.',
        ],
        bodyAr: [
          'الشكل الصادق لهذه الصفحة أن تُترَك سؤال التقاليد مفتوحا وتُقال ذلك صراحة. فالسجل لا يحمل مصدرا عن التاريخ الاحتفالي للمادة في المذهب الهندي، والصفحة لن تعيّر واحدا. ومن يريد ذلك التاريخ فمطلوب أن يلجأ إلى مصدر على المذهب نفسه، كما تفعل الصفحات المرتبطة في تقاليد أخرى. وما تقدّمه هذه الصفحة هو الجانب القابل للتجارة والموثّق: أين تُنتج المادة، وكيف تحرك إلى السوق، وتحت أي مصطلح. وإبقاء ذلك الجانب على أساسه، ووسم الجانب الآخر مفتوحا، هو ما يبقي الصفحة داخل القواعد: إنها تجيب السؤال الذي تستطيع توثيقه ولا تتظاهر بإجابة ما لا تستطيع.',
          'والخلاصة العملية للمشتري أن المصطلح والتجارة موثوقان وأن التقاليد ليست كذلك، على هذا السجل. ولا ادعاء تصنعه الصفحة عن المعنى هو ادعاء لا تحمله المصادر.',
        ],
        list: [
          'Rest the producing and trade claims on the two recorded sources.',
          'Treat the term as a documented trade word, not a history.',
          'Mark the cultural-tradition claim as open and point to the tradition’s own sources.',
        ],
        listAr: [
          'أسّس ادعاءات الإنتاج والتجارة على المصدرين المسجلين.',
          'عالج المصطلح بوصفه كلمة تجارية موثقة، لا بوصفه تاريخا.',
          'وسم ادعاء التقاليد الثقافية مفتوحاً وجوّه إلى مصادر المذهب نفسه.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_REVIEW_2014', 'TRAFFIC_UAE_AGARWOOD_TRADE'],
    workedExample: {
      situation:
        'A hypothetical buyer is sold Indian aguru and is told it carries a long devotional heritage; the question is what the encyclopedia can and cannot support.',
      situationAr:
        'قُيّمَ المشتري مادة «عنبر هندية» وأُخبِر بأنها تحمل تراثا تعبدّيا طويلا؛ والسؤال ماذا تستطيع الموسوعة وماذا لا تستطيع أن تدعمه.',
      steps: [
        'Check the producing and trade claim against the record: India is recorded as a producing region and the material is recorded moving into the market.',
        'Check the term: aguru is a documented trade word for the material, so the market naming is dependable.',
        'Check the heritage claim: no source in the register records a devotional history, so that claim stays open, not sourced.',
        'Report the split: the material’s origin and trade are on the register; its ceremonial meaning are not.',
      ],
      stepsAr: [
        'فحص ادعاء الإنتاج والتجارة على السجل: الهند مسجلة بوصفها منطقة إنتاج والمادة مسجلة تتحرك إلى السوق.',
        'فحص المصطلح: «العنبر» كلمة تجارية موثقة للمادة، لذا تسمية السوق موثوقة.',
        'فحص ادعاء التراث: لا مصدر في السجل يسجل تاريخا تعبدّيا، لذا يبقى ذلك الادعاء مفتوحا لا موثقا.',
        'وقيل الانقسام: منشأ المادة وتجارها على السجل؛ أما معناه الاحتفالي فليس كذلك.',
      ],
      takeaway:
        'The example shows a claim divided into the part the register supports (origin, trade, term) and the part it does not (heritage), so a buyer is not handed a devotional history the encyclopedia has not documented. It is a method for not letting a marketing claim cross into the register.',
      takeawayAr:
        'يُبيّن المثال تقسيم ادعاء إلى الجزء الذي يدعمه السجل (المنشأ، التجارة، المصطلح) والجزء الذي لا يدعمه (التراث)، حتى لا يُمسك المشتري تاريخا تعبدّيا لم توثقه الموسوعة. إنها طريقة لعدم السماح لادعاء تسويقي أن يعبر إلى السجل.',
    },
    limitations:
      'This page documents India as a producing region, the movement of Indian material into the recorded market, and the trade term under which it moves. It does not document the ceremonial or devotional history of the material in Indian tradition, because no source in the register records that history. The cultural-tradition question is left open by design.',
    limitationsAr:
      'توثّق هذه الصفحة الهند بوصفها منطقة إنتاج، وحركة المادة الهندية إلى السوق المسجل، والمصطلح التجاري الذي تحرك به. ولا توثّق التاريخ الاحتفالي أو التعبدّي للمادة في المذهب الهندي، لأنه لا مصدر في السجل يسجل ذلك التاريخ. وسؤال التقاليد الثقافية يُترَك مفتوحا عمدا.',
    nextSteps: [
      'Read the Indian origin page for the producing region',
      'Read the trade history page for the recorded routes',
      'Read the term glossary entry for the word',
    ],
    nextStepsAr: [
      'اقرأ صفحة المنشأ الهندي لمنطقة الإنتاج',
      'اقرأ صفحة تاريخ التجارة للمسارات المسجلة',
      'اقرأ مدخل المفردات للكلمة',
    ],
    related: [
      { slug: 'origins/india', label: 'India: the producing region' },
      { slug: 'culture/agarwood-trade-history', label: 'Agarwood trade through time' },
      { slug: 'glossary/gaharu', label: 'The trade terms for the material' },
      { slug: 'fragrance/oud-in-perfumery', label: 'Where the material lands in perfumery' },
    ],
  }),

  /* ---------------------------------------------------------------
     culture/arabian-hospitality-and-fragrance
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'culture/arabian-hospitality-and-fragrance',
    parent: 'culture',
    title: 'Fragrance and Arabian hospitality',
    titleAr: 'العطر وكرم الضيافة العربية',
    summary:
      'What the recorded market says about fragrance in Arabian hospitality: the material and the recorded use, and the honest limit on the cultural-meaning side of the question.',
    summaryAr:
      'ما يقوله السوق المسجل عن العطر في ضيافة العرب: المادة والاستخدام المسجل، والحدّ الصادق في جانب المعنى الثقافي من السؤال.',
    directAnswer:
      'The market study the register carries describes a Gulf fragrance market in which the material is used, and records the material’s presence in the region’s recorded markets. That is the tradeable, documented side of “fragrance in Arabian hospitality”: the market, the material, and the recorded use. The cultural side — hospitality as a named value and what fragrance means inside it — is not recorded by the register, so the page states the recorded market facts on their source and leaves the meaning side open, rather than writing a cultural essay the sources do not support. The page is useful exactly because it separates the two: a buyer can be told where the material is documented and told, at the same time, that its ceremonial meaning is not a claim this register makes.',
    directAnswerAr:
      'تصِف دراسة السوق التي يحملها السجل سوق العطور في الخليج الذي تُستخدم فيه المادة، وتسجّل حضور المادة في الأسواق المسجلة في المنطقة. وهذا هو الجانب القابل للتجارة والموثّق من «العطر في ضيافة العرب»: السوق والمادة والاستخدام المسجّل. أما الجانب الثقافي — ضيافة بوصفها قيمة مسمّاة وما يعنيه العطر داخلها — فلا يسجله السجل، لذا تقرّر الصفحة حقائق السوق المسجلة على مصدرها وتُترَك جانب المعنى مفتوحا، بدل أن تكتب تعريفا ثقافيا لا تدعمه المصادر. والصفحة مفيدة بالضبط لأنها تفصل بين الأمرين: فالمشتري يُخبر أين وُثِّقت المادة، ويُخبر في الوقت نفسه أن معناه الاحتفالي ليس ادعاءً يصنعه هذا السجل.',
    sections: [
      {
        heading: 'What the recorded market carries',
        headingAr: 'ما يحمله السوق المسجل',
        body: [
          'The source that carries the recorded-market side is the study of the United Arab Emirates market. It describes the fragrance market in the region and records the material in the markets there, which is the concrete, checkable core of the question. The review of the producing genera adds the material’s own record: what the resinous wood is, where it forms, and the recorded picture of the compounds it carries. Taken together the two give the buyer the documented material and the documented market. A hospitality practice is a cultural setting, and the page can say the material is used in that region’s markets without describing the practice itself, because the practice is not in the register. The page keeps to what the two sources actually establish.',
        ],
        bodyAr: [
          'المصدر الذي يحمل جانب السوق المسجل هو دراسة سوق الإمارات. فتصِف سوق العطور في المنطقة وتسجّل المادة في أسواقها، وهو النواة الملموسة القابلة للتحقق من السؤال. وتضيف مراجعة الأجناس المنتجة سجل المادة نفسها: ما هو الخشب الراتنجي، وأين يتكوّن، والصورة المسجلة للمركّبات التي يحملها. ويقيلا معاً يمنحان المشتري المادة الموثقة والسوق الموثق. وضيف الضيافة سياق ثقافي، ويمكن للصفحة أن تقول إن المادة مستخدمة في أسواق تلك المنطقة دون أن تصف الممارسة نفسها، لأن الممارسة ليست في السجل. والصفحة تبقى ضمن ما يثبّته المصدران فعلا.',
        ],
      },
      {
        heading: 'The meaning side, left open',
        headingAr: 'جانب المعنى، مفتوحا',
        body: [
          'The question reaches, in its full form, past the tradeable facts: hospitality is a named cultural value, and fragrance inside it carries meaning the market study does not record. The register has no source on what that meaning is, and the page will not invent one. What it can say is that the material is present in the region’s recorded markets and is used there. What it cannot say is what the use signifies in the culture, because no source in the register records the significance. The honest move is to hold that line: state the recorded market and recorded use, and mark the cultural meaning as open. That is not a deficiency of the page; it is the page doing its job, which is to say what is documented and to say, plainly, what is not.',
        ],
        bodyAr: [
          'يصل السؤال، في كماله، إلى ما بعد الحقائق القابلة للتجارة: ضيف الضيافة قيمة ثقافية مسمّاة، والعطر داخلها يحمل معنى لا تسجله دراسة السوق. ولا مصدر في السجل عن ما هو ذلك المعنى، ولن توعي الصفحة واحدا. ما يمكنها قوله أن المادة حاضرة في الأسواق المسجلة في المنطقة وأن هناك يُستخدم. وما لا تستطيع قوله ماذا يعبّر الاستخدام في الثقافة، لأنه لا مصدر في السجل يسجل الدلالة. والخطوة الصادقة أن تصمد عند تلك الخط: قُرِّب السوق المسجل والاستخدام المسجل، ووسم المعنى الثقافي بوصفه مفتوحا. وهذا ليس نقصا في الصفحة؛ إنه الصفحة تؤدّي واجبها، وهو أن تقول ما هو موثّق وتقول صراحة ما ليس كذلك.',
        ],
      },
      {
        heading: 'What a buyer carries away',
        headingAr: 'ماذا يحكم المشتري',
        body: [
          'The buyer who reaches the page looking to understand the region’s market gets a documented market and a documented material, and a clear statement that the page does not make a cultural claim about the material’s meaning. The buyer who reaches it looking for an essay on hospitality will not find one, and the page says so rather than dressing a market note up as a cultural history. That is the discipline that keeps a culture page honest: every claim is sourced or it is marked as a limitation, and the two are not mixed. The related pages linked here carry the specific recorded facts, and this page carries the frame in which to read them without overclaiming.',
          'In practice the reader reads the market and material pages for the record, and reads this page for the honest boundary that says the recorded use is a market fact, not a documented statement about the culture’s meaning of it.',
        ],
        bodyAr: [
          'المشتري الذي يأتي إلى الصفحة ليعرف سوق المنطقة يملك سوقا موثقا ومادة موثقة، وقرارا واضحا بأن الصفحة لا تصنع ادعاءً ثقافيا عن معنى المادة. ومن يأتي إليها بحثا عن تعريف عن ضيف الضيافة لن يجد واحدا، والصفحة تقول ذلك بدل أن تزيّن ملاحظة سوقية كإحداً ثقافية. وهذا هو الانضباط الذي يبقي صفحة الثقافة صادقة: كل ادعاء موقّع بمصدر أو يوسم قيّداً، ولا يُمزج بين الأمرين. والصفحات المرتبطة هنا تحمل الحقائق المسجلة الخاصة، وتحمّل هذه الصفحة الإطار الذي تُقرأ فيه دون تجاوز.',
          'وفي الممارسة يقرأ القارئ صفحات السوق والمادة عن السجل، ويقرأ هذه الصفحة عن الحدّ الصادق الذي يقول إن الاستخدام المسجل حقيقة سوقية، لا قرارا موثقا عن معناه الثقافي.',
        ],
        list: [
          'Rest the market and material claims on the two recorded sources.',
          'Mark the cultural-meaning claim as outside the register.',
          'Point a reader who wants the meaning to a source on the culture itself.',
        ],
        listAr: [
          'أسّس ادعاءات السوق والمادة على المصدرين المسجلين.',
          'وسم ادعاء المعنى الثقافي خارج نطاق السجل.',
          'وجوّه من يريد المعنى إلى مصدر على الثقافة نفسها.',
        ],
      },
    ],
    sourceIds: ['TRAFFIC_UAE_AGARWOOD_TRADE', 'AGARWOOD_REVIEW_2014'],
    workedExample: {
      situation:
        'A hypothetical reader wants the encyclopedia to “document that fragrance is central to Arabian hospitality” and asks whether the register supports that.',
      situationAr:
        'قارئ افتراضي يريد من الموسوعة أن «توثق أن العطر محوري في ضيف الضيافة العربية» ويسأل إن كان السجل يدعم ذلك.',
      steps: [
        'Pull the recorded market fact: the market study documents the material in the region’s markets.',
        'Pull the recorded material fact: the review documents what the resinous wood is and the compounds it carries.',
        'Check the hospitality claim: no source in the register records hospitality as a value or the fragrance’s meaning inside it, so it stays open.',
        'Report both: the material and market are on the record; the cultural value is not a claim this register makes.',
      ],
      stepsAr: [
        'اسحب حقيقة السوق المسجلة: دراسة السوق توثّق المادة في أسواق المنطقة.',
        'واسحب حقيقة المادة المسجلة: المراجعة توثّق ما هو الخشب الراتنجي والمركّبات التي يحملها.',
        'وفحص ادعاء الضيافة: لا مصدر في السجل يسجل ضيف الضيافة قيمة أو معنى العطر داخلها، فيبقى مفتوحا.',
        'وقيل كلاهما: المادة والسوق على السجل؛ أما القيمة الثقافية فليست ادعاءً يصنعه هذا السجل.',
      ],
      takeaway:
        'The example shows the page splitting a cultural claim from a market claim: it can support the market, and it cannot support the culture, on this register. A buyer who is told that plainly is not being refused the question, they are being told which half of it is documented.',
      takeawayAr:
        'يُبيّن المثال أن الصفحة فصلت ادعاء ثقافيا عن ادعاء سوقية: تستطيع أن تدعم السوق ولا تستطيع أن تدعم الثقافة على هذا السجل. والمشتري الذي يُقال له ذلك بوضوح لا يُنكر السؤال، بل يُقال أي نصف منه هو الموثق.',
    },
    limitations:
      'This page documents the recorded market and the recorded material in the region. It does not document hospitality as a cultural value or what fragrance means inside it, because no source in the register records that meaning. The cultural claim is left open by design and is not dressed up as a recorded fact.',
    limitationsAr:
      'توثّق هذه الصفحة السوق المسجل والمادة المسجلة في المنطقة. ولا توثّق ضيف الضيافة قيمة ثقافية أو ما يعنيه العطر داخلها، لأنه لا مصدر في السجل يسجل ذلك المعنى. والادعاء الثقافي يُترَك مفتوحا عمداً ولا يُزيَّن بوصفه حقيقة مسجلة.',
    nextSteps: [
      'Read the region’s origin page for the recorded material',
      'Read the trade history page for the recorded market',
      'Read the fragrance section for where the material lands',
    ],
    nextStepsAr: [
      'اقرأ صفحة المنشأ في المنطقة عن المادة المسجلة',
      'اقرأ صفحة تاريخ التجارة عن السوق المسجل',
      'اقرأ قسم العطور عن أين تهبط المادة',
    ],
    related: [
      { slug: 'fragrance/oud-in-perfumery', label: 'Where the material lands in perfumery' },
      { slug: 'products/bakhoor', label: 'The recorded forms the market carries' },
      { slug: 'culture/oud-in-islamic-traditions', label: 'Oud in Islamic traditions' },
      { slug: 'culture/agarwood-trade-history', label: 'Agarwood trade through time' },
    ],
  }),
];
