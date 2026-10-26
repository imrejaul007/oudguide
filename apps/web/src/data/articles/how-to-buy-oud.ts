import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

/**
 * "How to buy oud" — the disambiguation page.
 *
 * The 2026-10-26 landscape audit found that the "how to buy oud"
 * search result is owned by musical-instrument shops: the query is
 * shared between two very different products, and no one in the
 * oud-fragrance field has claimed the fragrance intent. This page is
 * that claim. It tells a buyer who means the fragrant material —
 * agarwood, oud oil, attar, bakhoor — how to buy it, and it tells
 * the reader who meant the stringed instrument that this site is not
 * for them, plainly and without pretending otherwise.
 *
 * A genuinely useful disambiguation, not a keyword stub: the
 * fragrance branch routes into the real buying guides and the
 * authenticity protocol, and the instrument branch is a short,
 * honest redirect out.
 */
export const howToBuyOudArticles: Article[] = [
  simpleGuide({
    slug: 'buying/how-to-buy-oud',
    parent: 'buying',
    title: 'How to buy oud: first, which oud you mean',
    titleAr: 'كيف تشترِي العود: أوّلًا، أيّ عود تقصد',
    summary:
      'The word "oud" names two very different products: a fragrant resinous wood (and the oils and incense made from it) and a stringed musical instrument. This page tells you which one you are actually shopping for, and, if it is the fragrance, how to buy it well.',
    summaryAr:
      'كلمة «عود» تسمّي منتجين مختلفين تمامًا: خشب راتنجي عطري (والزيوت والبخور المصنوعة منه) وأداة موسيقية وترية. وتبيّن هذه الصفحة أيّهما تشتري فعلًا، فإن كان العطر، كيف تشتريه على الوجه الصحيح.',
    directAnswer:
      'Before you buy "oud," decide which of two products the name points to, because the two share a word and nothing else. If you want a fragrant material to burn, smell or wear — agarwood chips, oud oil, attar or bakhoor — this is the right place: the material is the resinous heartwood of the agarwood-producing trees, and buying it well means choosing a form, setting a budget against a documented price range, sourcing it, and checking the grade and provenance claims before you pay. If you want the stringed instrument called the oud (the Arabic lute), this site does not sell or grade it, and you are better served by instrument retailers.',
    directAnswerAr:
      'قبل أن تشترِي «عودًا»، قرّر أيّ منتج من منتجين تسميه الكلمة، إذ يشترك الاثنان في الاسم وفي شيء آخر غير ذلك. فإن أردت مادة عطرية تحرقها أو تشمّها أو تلبسها — رقائق العود أو زيت العود أو العود المقطّر أو البخور — فهذه هي الجهة الصحيحة: فالمادة هي خشب القلب الراتنجي لأشجار إنتاج العود، والشراء الجيد هو اختيار شكل المادة، وتحديد ميزانية مقابل نطاق أسعار موثّق، ثم التوفير، ثم فحص ادعاءات الدرجة والمنشأ قبل الدفع. وأما إن أردت الأداة الوترية المسماة عودًا (القانون الشرقي)، فهذا الموقع لا يبيعها ولا يقيّمها، والمزوّدون المتخصّصون في الآلات أنسب لك.',
    sections: [
      {
        heading: 'The two things "oud" names',
        headingAr: 'شيئان تسمّيهما كلمة «عود»',
        body: [
          'The confusion is not a buyer error; it is in the word. In the fragrance world, oud is the resinous heartwood of the agarwood-producing trees, and the things sold from it: chips for burning, the distilled oil, the attar and the bakhoor. In the musical world, the oud is a short-necked, fretless, stringed instrument. The two have no common product, no shared supply chain and no shared test; they only share a name that, in Arabic, is spelled the same way, which makes the mix-up more likely, not less. The first question of any purchase is therefore not "which seller" but "which of these two am I buying." Everything on this site assumes the first, and says so.',
        ],
        bodyAr: [
          'اللّبس ليس خطأ المشتري؛ فهو في الكلمة نفسها. فعالم العطر يسمّي العود الخشب الراتنجي للقلب من أشجار إنتاج العود والمنتجات المصنوعة منه: رقائق الحرق والزيت المقطّر والعود المقطّر والبخور. وعالم الموسيقى يسمّي العود أداة وترية قصيرة الرقبة بلا عصي. ولا شيء مشترك بين المنتجين ولا سلسلة توريد مشتركة ولا اختبار مشترك؛ ما يجمعهما اسم واحد يُكتب في العربية كتابةً واحدة، مما يزيد الإحتمال لا يقلّله. ولهذا يكون السؤال الأوّل في أي شراء ليس «أيّ بائع» بل «أيّ هذين المنتجين أشتري». وكل ما في هذا الموقع يفترض الأوّل ويصّرّح به.',
        ],
      },
      {
        heading: 'If you want the fragrance: the four forms',
        headingAr: 'إن كنت تريد العطر: الأشكال الأربعة',
        body: [
          'The fragrant material comes in four forms, and the buying process differs by form. Chips are the raw or graded resinous wood, bought to burn for incense, to keep, or to distill; choosing them turns on resin, density and the grade and origin claims, which is the subject of the choosing-oud-wood guide. Oud oil is the distilled essential; attar is that oil bound into a sandalwood base for wearing; and bakhoor is a scented resinous blend. Choosing the right form is the decision that saves the most money, because a buyer who wanted a chip to burn and bought an oil, or wanted a personal attar and bought a large bottle of pure distillate, has bought the wrong product at the wrong price. The two choosing guides in this section exist for that decision.',
        ],
        bodyAr: [
          'المادة العطرية تأتي بأشكال أربعة، ويختلف مسار الشراء من شكل إلى شكل. والرقائق هي الخشب الراتنجي الخام أو المدرَّج، تُشترى للحرق أو للاحتفاظ أو للتقطير؛ واختيارها يرتكز على الراتنج والكثافة وادعاءات الدرجة والمنشأ، وهو موضوع دليل اختيار خشب العود. وزيت العود هو الزيت العطري المقطَّر، والعود المقطَّر هو ذلك الزيت مربوطًا بقاعدة الصندل ليُلبس، والبخور خليط عطري راتنجي. واختيار الشكل الصحيح هو القرار الذي يوفّر أكثر في المال؛ فالمشتري الذي أراد رقائقً ليجلِّبَ منها دخانًا فاشترى زيتًا، أو أراد عودًا شخصيًّا فاشترى قارورة كبيرة من المقطَّر النقيّ، قد اشترى المنتج الخاطئ بالسعر الخاطئ. وقد أُنشئ دليلَا الاختيار في هذا القسم لتلك القرارات بالضبط.',
        ],
      },
      {
        heading: 'The honest sequence for buying fragrance oud',
        headingAr: 'الترتيب الصريح لشراء العود العطري',
        body: [
          'Buy in this order and each step costs less. First name the form: chip, oil, attar or bakhoor, and what you will do with it. Second set a budget against a documented range, not against a memory: the OudGuide price observation baseline records what named public lists put a claimed grade and form on a stated date and market, and a budget set against that range is a number rather than a hope. Third source: the directory lists producers and distillers by family, role and origin, and the sourcing guides cover how to build a sample plan, how supplier introductions work, and how to compare quotations that are not equivalent. Fourth check the claims: press the grade and provenance, run the authenticity protocol on a sample, and ask for the one document that actually constrains the trade. A buyer who does the fourth step has a lot that is defensible; a buyer who skips it has a hope.',
        ],
        bodyAr: [
          'اشترِ بهذا الترتيب فيتكلّف كل خطوة أقل. أوّلًا سمِّ الشكل: رقائق أو زيتًا أو عودًا مقطّرًا أو بخورًا، وما ستفعل به. ثانيًا حدّد ميزانية مقابل نطاق موثّق لا مقابل ذاكرة؛ فخطّ الأساس المرصود لأسعار دليل العود يسجّل ما تضعه قوائم معلنة مسمّاة لدرجة وشكل معيّنين في تاريخ وسوق محدَّدين، وميزانية تُحدَّد على ذلك النطاق رقم لا رجاء. ثالثًا وفّر: يسجّل الدليل منتجين ومقطّرين حسب الصنف والدور والمنشأ، وأدلة التوريد تشرح كيف تبني خطة عيّنات وكيف تعمل التعريفات وكيف تقارن عروض أسعار غير متكافئة. رابعًا افحص الادعاءات: اضغط على الدرجة والمنشأ وأجرِ بروتوكول الأصالة على عينة واطلب الوثيقة الوحيدة التي تقيد التجارة فعلًا. ومشتري أنجز الخطوة الرابعة يملك لوطًا مدافعًا عنه، ومَن عفاها يملك رجاءً.',
        ],
      },
      {
        heading: 'If you meant the instrument',
        headingAr: 'إن كنت تقصد الآلة',
        body: [
          'If the word "oud" reached you because you want to buy or learn the stringed instrument, stop here: this site is a reference for the fragrant material, and it does not sell instruments, does not grade them, and has no content on luthier work. The instrument market has its own terms, builders and retailers, and a music retailer or an instrument maker is the correct source. This page keeps the two meanings apart for the reason the disambiguation exists: so that a fragrance buyer is not sent to an instrument shop and an instrument buyer is not handed a resin test.',
        ],
        bodyAr: [
          'إن أدّتك كلمة «عود» إلى الرغبة في شراء الآلة الوترية أو تعلّمها، فتوقّف هنا: هذا موقع مرجع للمادة العطرية، ولا يبيع آلات ولا يقيّمها ولا له في صناعة الآلات محتوى. وسوق الآلات له مصطلحاته وصنّاعه ومتاجرُه، ومتجر الموسيقى أو صانع الآلات هو المصدر الصحيح. وهذا الفصل بين المعنيين هو السبب في وجود صفحة التمييز أصلًا: حتى لا يُرسَل مشتري العطر إلى متجر آلات، ولا يُسلَّم مشتري الآلة اختبار راتنج.',
        ],
      },
    ],
    sourceIds: [
      'ITTO_AGARWOOD_REVIEW',
      'TRAFFIC_UAE_AGARWOOD_TRADE',
      'AGARWOOD_REVIEW_2014',
    ],
    limitations:
      'This page disambiguates the two products the word "oud" names and routes the fragrance buyer into the site\'s own buying guides. It does not set a price, does not recommend a named supplier, and does not authenticate any lot; the price range it refers to is the OudGuide observation baseline\'s documented range on a stated date and market, not a current average. For the stringed instrument it defers to instrument retailers and says plainly that this site is not their source. Nothing here is a purchase instruction for a specific transaction.',
    limitationsAr:
      'تميّز هذه الصفحة بين المنتجين اللذين تسمّيهما كلمة «عود» وترسل مشتري العطر إلى أدلة الشراء في الموقع نفسه. ولا تحدد سعرًا ولا ترشّح موردًا مسمّىً ولا توثّق لوطًا؛ والنطاق الذي تشير إليه هو النطاق الموثّق من خطّ الأساس المرصود من دليل العود في تاريخ وسوق محدَّدين، لا متوسطًا حاليًا. ولأجل الآلة الوترية تحيل على متاجر الآلات وتصرّح بأن هذا الموقع ليس مصدرها. ولا شيء هنا إرشاد شراء لصفقة بعينها.',
    nextSteps: [
      'Choose the form you actually need: oud wood',
      'Choose the form you actually need: oud oil and attar',
      'Run the authenticity protocol before you pay',
    ],
    nextStepsAr: [
      'اختر الشكل الذي تحتاجه فعلًا: خشب العود',
      'اختر الشكل الذي تحتاجه فعلًا: زيت العود والعود المقطّر',
      'أجِر بروتوكول الأصالة قبل أن تدفع',
    ],
    related: [
      { slug: 'oud-basics/what-is-agarwood', label: 'What agarwood is' },
      { slug: 'buying/choosing-oud-wood', label: 'Choosing an oud wood purchase' },
      { slug: 'buying/choosing-oud-oil', label: 'Choosing an oud oil purchase' },
      { slug: 'quality/oud-authenticity-protocol', label: 'The OudGuide authenticity protocol' },
    ],
  }),
];
