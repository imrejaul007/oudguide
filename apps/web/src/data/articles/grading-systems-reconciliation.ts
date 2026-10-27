import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

/**
 * How the oud grading systems line up — and where they don't.
 *
 * Gap §10 in the 2026-10-26 landscape audit: the reconciled set of grade
 * systems. The field documents one system at a time (a vendor's own
 * labels, a single national scale, a single lab report) and no one in the
 * oud-fragrance field has written the page that maps them against each
 * other. This is that page.
 *
 * The moat is not the list of systems; it is the reconciliation: each
 * system is a *different kind of claim* — a seller's ordering, a physical
 * screen, a measured quantity, a national label, a local ritual
 * convention, a chemical profile — and the page tells a buyer which kind
 * they are being handed so that they do not mix two kinds and call it a
 * comparison. A density figure, a "Super" label and a Japanese auction
 * category are not three measurements of one thing; they are three
 * different claims, and only one of the three is a measurement at all.
 *
 * Grounding rule: every system is described by what it does and does not
 * establish, the way the source records it. Nothing here invents a
 * threshold a source did not publish; the whole point is that most of
 * these systems have no published threshold, and saying so is the
 * contribution.
 */
export const gradingSystemsReconciliationArticles: Article[] = [
  simpleGuide({
    slug: 'quality/grading-systems-reconciliation',
    parent: 'quality',
    title: 'How the oud grading systems line up — and where they do not',
    titleAr: 'كيف تتطابق أنظمة تقييم العود — وأين لا تتطابق',
    summary:
      'The grade systems a buyer meets are not one scale in different clothes: a seller\'s ordering, a density screen, a measured resin figure, a national label, a Japanese or Chinese auction category and a lab profile are six different kinds of claim. This page maps each one and says what it does and does not establish, so two different kinds are never mistaken for a comparison.',
    summaryAr:
      'أنظمة الدرجات التي يواجهها المشتري ليست ميزانًا واحدًا بأقنعة مختلفة: ترتيب البائع، وفحص الكثافة، ورقم الراتنج المقياس، ووسمٌ وطني، وفئة مزاد يابانية أو صينية، وملفٌّ مخبري — ستة أنواع مختلفة من الادعاء. وتربط هذه الصفحة كل نظام بما يثبته وما لا يثبته، فلا يُخلط بين نوعين مختلفين على أنهما مقارنة.',
    directAnswer:
      'The systems do not line up because they are not measuring the same thing, and that is the point the page exists to make. A Gulf "Super" label is a seller\'s ordering of the material; a sinking grade is a physical screen that tells you the wood is dense and says nothing about the resin behind it; a resin-recovery figure is the one of the six that is actually a measurement; a national gaharu grade is a domestic label on its own scale; a Japanese or Chinese auction category is a local ritual convention; and a lab profile is a chemical description of what is present, not of where it came from or how old it is. A buyer who reads each one as the kind of claim it is, and refuses to average across kinds, can read every one of them correctly — and the moment two of them are treated as comparable, the reading is wrong.',
    directAnswerAr:
      'الأنظمة لا تتطابق لأنها لا تقيس الشيء نفسه، وهذا هو ما جاءت الصفحة لتقوله. فوسم «سوبر» الخليجي ترتيب بائع للمادة؛ ودرجة الغرق فحص مادي يقول لك إن الخشب كثيف ولا يقول شيئًا عن الراتنج وراءه؛ ورقم استخراج الراتنج هو وحده من بين الستة قياسٌ فعلي؛ والدرجة الوطنية الغارو وسمٌ محلي على مقياسه هو؛ وفئة المزاد اليابانية أو الصينية عرفٌ طقسي محلي؛ والملف المخبري وصفٌ كيميائي لما يوجد، لا من أين جاء ولا كم عمره. ومشتري يقرأ كل نظام على نوعه، ويرفض تَمسيط الأنواع بعضها ببعض، يستطيع قراءة كل شيء قراءةً صحيحة — وتلك اللحظة التي تُعامل فيها نسختان كأنهما قابلتان للمقارنة هي حيث تخطئ القراءة.',
    sections: [
      {
        heading: 'Six systems, six kinds of claim',
        headingAr: 'ستة أنظمة، ستة أنواع من الادعاء',
        body: [
          'The first move is to stop treating the grade word as a single thing. The buyer meets six systems, and each is a different kind of claim: a seller\'s ordering of lots, a physical density screen, a measured resin figure, a national label, a local auction convention, and a chemical profile. They share a vocabulary but not a meaning. The Gulf "Super" series and the VIP and VVIP rungs order material the way a seller does, on aroma alone, with no published step between one rung and the next. Sinking tells you the wood is dense, and nothing more. Resin recovery is the one number that is a measurement, with the uncertainty the review records attached to it. The national scales run on their own numbering. The Japanese and Chinese categories are the way a particular market grades material for its own use. And the lab reports what is in the material. Hold that list, and the whole reconciliation is just reading each one as its kind.',
        ],
        bodyAr: [
          'أول خطوة أن تتوقف عن التعامل مع كلمة الدرجة كشيء واحد. فالمشتري يواجه ستة أنظمة، وكلٌّ منها نوع مختلف من الادعاء: ترتيب البائع للوطات، وفحص الكثافة المادي، ورقم الراتنج المقياس، ووسم وطني، وعرف مزاد محلي، وملفٌ كيميائي. تشترك هذه في مفردات ولا تشترك في معنى. فسلسلة «سوبر» الخليجية وحلقتا «في آي بي» و«في في آي بي» يرتبان المادة على نحو البائع، على الرائحة وحدها، بلا درجة منشورة بين حلقة وأخرى. والغرق يقول لك إن الخشب كثيف ولا يقول غير ذلك. واستخراج الراتنج هو الرقم القياس الوحيد، مع عدم الدقة التي تسجلها المراجعة. والمقاييس الوطنية تسير على ترقيمها هو. وأصناف اليابان والصين هي طريقة سوق معينة لتقييم المادة على استخدام خاص. أما المختبر فيبوح بما هو موجود في المادة. احفظ هذه القائمة، فالترضية كلُّها مجرد قراءة كل نظام على نوعه.',
        ],
      },
      {
        heading: 'The systems and what each one does not establish',
        headingAr: 'الأنظمة وما لا يثبته كلٌّ منها',
        body: [
          'Each system is named and its boundary stated, so a buyer knows where the claim ends:',
        ],
        bodyAr: [
          'يُسمَّى كل نظام ويُصَرَّح بحدوده، ليُدرك المشتري أين ينتهي الادعاء:',
        ],
        list: [
          'The Gulf Super series and the VIP–VVIP rungs: a seller\'s ordering on aroma. They set no resin content, no yield and no age, and two lots so labelled by different sellers need not be comparable.',
          'Sinking / density grades: a physical screen. The wood is dense; that is all it says. It does not establish the resin content, its naturalness or its age, and a weighted block passes the test for the same reason a genuine one does.',
          'Resin-recovery figures: the one measured quantity of the six, read with the uncertainty the review records. A figure is a measurement, not a grade; the review attaches no threshold to it.',
          'National scales (the Indonesian gaharu grades against the Malaysian count): domestic labels, on their own numbering, not on a shared scale — a label from one market is not a position on another market\'s ladder.',
          'Japanese and Chinese auction categories (the rikkoku classification around the trade word for agarwood): a local convention, not a specification; a buyer outside that market reads the category as a local label, not as a measurable grade.',
          'The laboratory profile: a chemical description of what is present. It does not establish species, origin, age or wild-versus-plantation; a clean profile is a profile, not an authentication of the lot.',
        ],
        listAr: [
          'سلسلة «سوبر» الخليجية وحلقتا «في آي بي» و«في في آي بي»: ترتيب بائع على الرائحة. لا تحدد نسبة راتنج ولا مردودًا ولا عمرًا، ولا يلزم أن يكون لوطان موسومان منها عند بائعين مختلفين قابلين للمقارنة.',
          'درجات الغرق / الكثافة: فحص مادي. الخشب كثيف، وهذا كل ما يقوله. ولا يثبت نسبة الراتنج ولا طبيعيةً ولا العمر، بل كتلة مزوَّنة تجتاز الاختبار لسبب الغاية نفسها.',
          'أرقام استخراج الراتنج: القياس الوحيد من بين الستة، يقرأ بعدم الدقة المسجلة في المراجعة. الرقم قياسٌ لا درجة، والمراجعة لا تعلق عليه عتبة.',
          'المقاييس الوطنية (درجات الغارو الإندونيسية مقابل العدد الماليزي): وسمٌ محلي على ترقيمة خاصة، لا على مقياس مشترك — فوسم من سوق ليس موقعًا على سلّم سوق أخرى.',
          'أصناف المزادات اليابانية والصينية (تصنيف «ريكوكو» حول الكلمة التجارية للعود): عرفٌ محلي لا مواصفة؛ ومشتري خارج ذلك السوق يقرأ الفئة وسمًا محليًا، لا درجة قابلة للقياس.',
          'الملف المخبري: وصفٌ كيميائي لما يوجد. ولا يثبت النوع ولا المنشأ ولا العمر ولا البرّي مقابل المزرعي؛ فالمصفّى نظيف هو ملف، لا توثيق للوط.',
        ],
      },
      {
        heading: 'Where the systems do not compare',
        headingAr: 'أين لا تقارن الأنظمة',
        body: [
          'The failure the page exists to stop is the false comparison: reading a density figure, a "Super" label and a national gaharu grade as if they were three measurements of one quality, and averaging them. They are not three measurements of one thing, and only one of the three is a measurement at all. A lot that is "sinking", labelled "Super", and quoted from the Japanese auction is carrying three different kinds of claim in one sentence, and no combination of the three establishes a measured grade — because no two of the three are on the same scale. The move is to name the kind of each one before the kinds are set against one another. A label the seller put there is a claim, not a fact. A screen is a screen. A measured number is a number, with the uncertainty it carries. A national or a Japanese category is a label on its own market\'s own scale. And the whole point is that a buyer who holds those apart reads every one of them correctly, and a buyer who averages them has drawn a conclusion the systems never license.',
        ],
        bodyAr: [
          'العيب الذي جاءت الصفحة لتمنعه هو المقارنة الزائفة: قراءة رقم كثافة ووسم «سوبر» ودرجة غارو وطنية كأنها ثلاثة قياسات لجودة واحدة، وتمسيطها. وليست ثلاثة قياسات لشيء واحد، ولا قياسٌ منها كلها إلا واحد. ولوطة هي «غارقة»، موسومة بـ«سوبر»، ومُسعَّرة من المزاد الياباني، تحمل ثلاثة أنواع مختلفة من الادعاء في جملة واحدة، ولا تقيم أيّ تركيبة منها درجة مقيسة — لأنّ اثنتين من الثلاثة على غير مقياس مشترك. والحركة تسمية نوع كل واحد منها قبل أن توضع الأنواع بعضها على بعض. فوسمٌ وضعه البائع ادعاء لا حقيقة. والفحص فحص. ورقم مقياس هو رقم، بعدم دقة يحمله. والدرجة الوطنية أو اليابانية وسم على مقياس سوقه هو. والجوهر أن المشتري الذي يفصل بينها يقرأها كلَّها قراءةً صحيحة، وأن مَن يتمسّطها قد استنتج ما لم تسمح به الأنظمة قط.',
        ],
      },
    ],
    sourceIds: [
      'ITTO_AGARWOOD_REVIEW',
      'AGARWOOD_REVIEW_2014',
      'TRAFFIC_UAE_AGARWOOD_TRADE',
    ],
    limitations:
      "This page reconciles the systems a buyer meets and states what each does and does not establish. It is not a grading standard and it does not publish a threshold, recovery rate or yield for any label, because the record is that none is published behind them. The national-scale counts it names are the industry's own review's record, not a cross-market measurement. No combination of these systems is presented as establishing a grade: the reconciliation is that they are different kinds of claim, and the page does not measure a lot, authenticate a lot, or compare a figure across systems it says are not on the same scale.",
    limitationsAr:
      'تربط هذه الصفحة الأنظمة التي يواجهها المشتري وتصدر ما يثبته كلٌّ منها وما لا يثبته. وليست معيار تقييم ولا تنشر عتبةً ولا نسبة استخراج ولا مردودًا لأيّ وسم، لأن السجل يقول إن شيئًا من هذا لم يُنشر وراه. وأعداد المقاييس الوطنية التي تسميها هي سجلّ مراجعة القطاع نفسها، لا قياسًا بين الأسواق. ولا تُقدَّم أيّ تركيبة من هذه الأنظمة إثبات درجة: فالترضية أنها أنواع مختلفة من الادعاء، والصفحة لا تقيس لوطًا ولا توثّقه، ولا تقارن رقمًا عبر أنظمة تقول إنها على غير مقياس واحد.',
    nextSteps: [
      'Read one system: how a grading claim is built',
      'Read the density screen on its own: what it does and does not do',
      'Read the one measured quantity: resin and its uncertainty',
      'Read the Gulf label vocabulary and its dataset',
    ],
    nextStepsAr: [
      'اقرأ نظامًا واحدًا: كيف يُبنى ادعاء تقييم',
      'اقرأ فحص الكثافة في حد ذاته: ما يفعله وما لا يفعله',
      'اقرأ القياس الوحيد: الراتنج وعدم دقة',
      'اقرأ مفردات الوسوم الخليجية ومجموعها',
    ],
    related: [
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
      { slug: 'quality/sinking-claims', label: 'What a sinking grade does and does not establish' },
      { slug: 'quality/resin-measurement', label: 'The one measured quantity: resin and its uncertainty' },
      { slug: 'quality/gulf-market-grade-labels', label: 'The Gulf market\'s own grading vocabulary' },
      { slug: 'quality/grade-label-dataset', label: 'The OudGuide grade-label catalogue' },
      { slug: 'glossary/jinko', label: 'The Japanese and Chinese trade word and its grade systems' },
    ],
  }),
];
