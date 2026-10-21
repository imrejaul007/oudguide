import type { Article } from './types.ts';

/**
 * Quality, buying and using articles.
 *
 * These are the pages the audit singled out as "not receiving a
 * grade-specific explanation" (OG-A01). Each one answers its own
 * question. Where a question cannot be answered from a document — for
 * example whether "Triple Super" is a regulated term — the article says
 * that the vocabulary is trade convention rather than a published
 * standard, which is the honest answer.
 */

const REVIEWED_ON = '2026-10-20';
const REVIEWER = 'OudGuide editorial review';
const REVIEWER_AR = 'مراجعة تحريرية من دليل العود';
const REVIEW_METHOD =
  'Reviewed against the cited sources, checked for a question-specific answer, and checked that every assurance is either sourced or explicitly marked as a limitation.';
const REVIEW_METHOD_AR =
  'رُوجعت مقابل المصادر المذكورة، ودُقِّق أن لكل صفحة إجابة خاصة بسؤالها، وأن كل ادعاء إمّا مسنود بمصدر أو موسوم صراحةً كقيد.';

export const qualityArticles: Article[] = [
  {
    slug: 'quality/seller-defined-super-grades',
    kind: 'guide',
    state: 'reviewed',
    title: 'Super, Double Super and Triple Super labels',
    titleAr: 'شارات «سوبر» و«دبل سوبر» و«تريبل سوبر»',
    h1: 'Super, Double Super and Triple Super labels',
    h1Ar: 'شارات «سوبر» و«دبل سوبر» و«تريبل سوبر»',
    summary:
      'What the Gulf trade labels Super, Double Super and Triple Super actually assert, and what a buyer should ask instead of trusting the label.',
    summaryAr: 'ما الذي تعنيه شارات السوبر في سوق الخليج فعلياً، وما الذي ينبغي أن يسأله المشتري بدل الوثوق بالشارة.',
    directAnswer:
      'Super, Double Super and Triple Super are seller-defined marketing labels, not grades with a published definition. No international standard, trade association document or certification scheme sets out what distinguishes one from another, and no register records who issued a given Super label. What the labels reliably indicate is the seller\'s own confidence in a lot; what they cannot establish is resin content, oil yield, age or provenance. A buyer should treat the label as a claim to be tested, and ask for the evidence behind it rather than the label itself.',
    directAnswerAr:
      '«سوبر» و«دبل سوبر» و«تريبل سوبر» تسميات تسويقية يعرّفها البائع، وليست درجات لها تعريف منشور. لا يوجد معيار دولي ولا وثيقة جمعية تجارية ولا نظام تدقيق يبيّن ما يفصل بينها، ولا يوجد سجل يتتبع من أصدر تسمية سوبر معيّنة. وما تدل عليه هذه التسميات دائماً هو ثقة البائع في اللوط؛ وما لا تستطيع إثباته هو نسبة الراتنج أو مردود الزيت أو العمر أو المنشأ. وعلى المشتري أنعامل التسمية كادعاء يُختبر، وأن يسأل عن الأدلة التي تستند إليها لا عن التسمية نفسها.',
    sections: [
      {
        heading: 'Where the vocabulary comes from',
        headingAr: 'من أين تأتي هذه المفردات',
        body: [
          'The vocabulary developed in the Gulf perfume trade, where oud has been bought and described for generations and where a shorthand emerged for handling and selling high-priced lots. Words like "Sak", "Mukhadram" and "Maloosi" travel with the same commercial context, and the Super series is part of that same register.',
          'The important consequence is that the labels were never written down. They were a spoken and commercial shorthand, passed between traders, which is why they are understood within the trade and widely used outside it — often with less precision than they were intended to carry.',
        ],
        bodyAr: [
          'تطوّرت هذه المفردات في سوق العطور الخليجي، حيث يُشترى العود ويُوصف منذ أجيال، وانشأت اختصاراً للتعامل وبيع اللوطات مرتفعة السعر. وكلمات مثل «سك» و«مُخضرم» و«ملوسي» تسير مع السياق التجاري نفسه، وسلسلة «سوبر» جزء من ذلك السجل نفسه.',
          'والنتيجة المهمة أن هذه التسميات لم تُدوَّن قط. كانت اختصاراً شفهياً وتجارياً يتناقل بين التجار، ولهذا يفهمها أهل السوق وتستعملها خارجها بكثرة — وغالباً بدقة أقل مما قُصد بها.',
        ],
      },
      {
        heading: 'What each label asserts',
        headingAr: 'ما الذي تقرّره كل تسمية',
        body: [
          'Read as a set, the labels form a ladder: Super sits above unlabelled material, Double Super above Super, Triple Super above Double Super. What the ladder claims to measure is the richness and intensity of the material — more resin, deeper scent, longer wear.',
          'That much is the shared assumption. What varies, and what a buyer cannot see, is the standard behind each rung. A Triple Super from one seller and a Triple Super from another need not be the same material, and neither is obliged to match a published figure, because no published figure exists.',
        ],
        bodyAr: [
          'مقروءة كسلسلة، تشكل هذه التسميات سلماً: «سوبر» فوق المادة بلا تسمية، و«دبل سوبر» فوق «سوبر»، و«تريبل سوبر» فوق «دبل سوبر». وما تقرّر قياسه هو غنى المادة وحيويتها — راتنج أكثر، عطر أعمق، ثبات أطول.',
          'هذا هو الافتراض المشترك. وما يختلف، ولا يراه المشتري، هو المعيار الذي يقوم عليه كل درجة. فـ«تريبل سوبر» من بائع و«تريبل سوبر» من آخر ليسا بالضرورة المادة نفسها، ولا يُلزَم أيٌّ منهما بمطابقة رقم منشور، لأنه لا يوجد رقم منشور.',
        ],
        callout: {
          title: 'The honest summary',
          body:
            'These labels are a market convention, not a standard. A well-briefed seller can explain what they mean by them; a seller who cannot is telling you the lot has not been assessed.',
          bodyAr:
            'هذه التسميات عرفٌ سوقي لا معيار. والبائع الجيد الإعداد يستطيع شرح ما يعنيه بها؛ ومن لا يستطيع، فهو يخبرك بأن اللوط لم يُقيَّم.',
        },
      },
      {
        heading: 'What to ask instead of the label',
        headingAr: 'ما الذي تسأل عنه بدل التسمية',
        body: [
          'A label says nothing that a specification cannot say better. Ask for the facts behind the claim: the plant species and the country the wood came from, whether the material is plantation or wild, and how it was treated before distillation — steam, fumigation or chemical impregnation, each of which changes the resulting oil.',
          'Then ask for the things that can be measured. What is the resin content of the wood? What did the distillation yield, and how was that yield determined? Is there a laboratory report, and if so what does it cover — and what does it not?',
          'Finally ask for the records: a batch reference, the date, and the party that carried out the work. A seller who cannot produce any of these is not withholding a trade secret; they are describing a lot they bought rather than one they made.',
        ],
        bodyAr: [
          'التسمية لا تقول شيئاً لاقوله المواصفة أفضل. اسأل عن الوقائع التي تقف خلف الادعاء: نوع النبات والبلد الذي جاء منه الخشب، وهل المادة مزروعة أم برية، وكيف عولجت قبل التقطير — بالبخار أو بالتبخير أو بنقع كيميائي، وكل منها يغيّر الزيت الناتج.',
          'ثم اسأل عن ما يمكن قياسه. ما نسبة الراتنج في الخشب؟ وما مردود التقطير وكيف ثُبّت هذا المردود؟ وهل يوجد تقرير مخبري، وإن وُجد فماذا يشمل — وماذا لا يشمل؟',
          'وأخيراً اسأل عن السجلات: مرجع الدفعة، والتاريخ، والجهة التي أجرت العمل. ومن لا يستطيع تقديم أيٍّ منها لا يحجب سراً تجارياً، بل يصف لوطاً اشتراه لا صنعه.',
        ],
      },
      {
        heading: 'Comparing lots across sellers',
        headingAr: 'مقارنة اللوطات بين البائعين',
        body: [
          'Because the vocabulary is shared but the standards are not, two lots should be compared on measurement rather than on label. A side-by-side sample, weighed and assessed by the same person on the same day, will tell you more than any number of labels.',
          'Record what you did that, so the comparison can be repeated. For a graded wood the useful records are the species, the origin claim and its basis, the resin content if stated, the treatment, the batch reference and the date. For an oil they are the plant, the distillation method, the yield, the concentration or carrier, and the storage history.',
        ],
        bodyAr: [
          'لأن المفردات مشتركة لكن المعايير ليست، ينبغي مقارنة اللوطين على القياس لا على التسمية. فعينة جنباً إلى جنب، تُوزن ويُقيَّمها الشخص نفسه في اليوم نفسه، تقول أكثر من أي عدد من التسميات.',
          'وسجّل ما فعلت ذلك، لتكون المقارنة قابلة للإعادة. وللخشب المُقيَّم تكون السجلات المفيدة: النوع، وادعاء المنشأ وأساسه، ونسبة الراتنج إن ذُكرت، والمعالجة، ومرجع الدفعة، والتاريخ. وللزيت: النبات، وطريقة التقطير، والمردود، والتركيز أو الحامل، وتاريخ التخزين.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'FAOLEX', 'ITTO_AGARWOOD_REVIEW'],
    limitations:
      'This page describes what the labels mean in the trade and what they leave unestablished. It does not state a resin threshold, a price, or an oil yield figure for any label, because no published standard defines one. A specific lot still has to be assessed on its own evidence.',
    limitationsAr:
      'تصف هذه الصفحة ما تعنيه التسميات في السوق وما لا تُثبته. ولا تذكر عتبة لنسبة الراتنج ولا سعراً ولا مردود زيت لأي تسمية، لأنه لا يوجد معيار منشور يعرّفها. ولا يزال كل لوط بعينه يحتاج إلى تقييم على أدلته الخاصة.',
    reviewer: REVIEWER,
    reviewerAr: REVIEWER_AR,
    reviewMethod: REVIEW_METHOD,
    reviewMethodAr: REVIEW_METHOD_AR,
    reviewedOn: REVIEWED_ON,
    nextSteps: [
      'Learn how oud grading claims work in general',
      'Read how to evaluate a questionable offer',
      'See what a laboratory report can and cannot establish',
    ],
    nextStepsAr: [
      'تعلّم كيف تعمل ادعاءات تقييم العود عموماً',
      'اقرأ كيف تقيّم عرضاً مشكوكاً فيه',
      'اعرف ما يمكن لتقرير مخبري إثباته وما لا يمكن',
    ],
    related: [
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
      { slug: 'quality/sinking-claims', label: 'Understanding sinking claims' },
      { slug: 'quality/age-claims', label: 'Tree age, resin age, storage and marketing claims' },
      { slug: 'quality/lab-report-reading', label: 'How to read the scope of a laboratory report' },
      { slug: 'quality/assessment-and-testing-limits', label: 'Assessment and testing limits' },
    ],
    parent: 'quality',
  },

  {
    slug: 'sourcing/wholesale-sample-plan',
    kind: 'guide',
    state: 'reviewed',
    title: 'Build a wholesale oud sample plan',
    titleAr: 'بناء خطة عيّنات للشراء بالجملة',
    h1: 'Build a wholesale oud sample plan',
    h1Ar: 'بناء خطة عيّنات للشراء بالجملة',
    summary:
      'How to define, label, compare and record a sample set, agree acceptable variation, and tie a bulk order to the batch you sampled.',
    summaryAr: 'كيف تُعرّف وتُسمّي وتقارن وتوثّق مجموعة عينات، وتتفق على النسبة المقبولة من الاختلاف، وتربط الطلب بالجملة بالدفعة التي عيّنتها.',
    directAnswer:
      'A sample plan is a written agreement about what you will test and what you will accept, made before any money moves. It has six parts: the sample set, the labels, the comparison method, the recorded results, the acceptable variation, and the link between the sample and the bulk order. The last part is where most disputes arise, because a sample that is not traceable to a batch is evidence of a category of material rather than of the material you will receive.',
    directAnswerAr:
      'خطة العيّنات هي اتفاق مكتوب على ما ستختبره وما ستقبله، يُجرى قبل تحويل أي مبلغ. ولها ستة أجزاء: مجموعة العينات، والملصقات، وطريقة المقارنة، والنتائج الموثّقة، والنسبة المقبولة من الاختلاف، والصلة بين العينة وطلب الجملة. وأخيرة هذه هي التي تنشأ فيها أغلب الخلافات، لأن العينة غير القابلة للتتبع إلى دفعة تثبت صنفاً من المواد لا المادة التي ستستلمها.',
    sections: [
      {
        heading: '1. Define the sample set before you solicit it',
        headingAr: '١. حدّد مجموعة العينات قبل أن تطلبها',
        body: [
          'Decide what the set must contain before asking anyone to supply it, because a set assembled on request tends to become a set of whatever the seller likes to show you.',
          'A workable set for a first purchase is one sample per supplier per material format, at a quantity large enough to be representative and small enough to be affordable across five or six suppliers. If you are testing wood, specify chips rather than blocks so every supplier can supply the same form. If you are testing oil, specify the same volume and the same carrier.',
          'Write the set down as a list with a row per sample and a column for each attribute you intend to compare. That table is the plan; everything after this is execution.',
        ],
        bodyAr: [
          'قرّر ما يجب أن تحتويه المجموعة قبل أن تطلبها من أحد، لأن المجموعة التي تُجمَع بناءً على الطلب تميل إلى التحول إلى مجموعة مما يفضّله البائع عرضه.',
          'المجموعة العملية للشراء الأول هي عينة واحدة لكل مورد لكل شكل مادة، بكمية تكفي للتمثيل وتبقى معقولة التكلفة عبر خمسة أو ستة موردين. وإن كنت تختبر الخشب، حدّد رقائق لا قطعاً كبيرة ليتمكن كل مورد من توفير الشكل نفسه. وإن كنت تختبر الزيت، حدّد الحجم نفسه والحامل نفسه.',
          'اكتب المجموعة كجدول بصف لكل عينة وعمود لكل صفة تنوي مقارنتها. ذلك الجدول هو الخطة، وكل ما يلي هو تنفيذه.',
        ],
      },
      {
        heading: '2. Label and seal before the samples leave the seller',
        headingAr: '٢. وسم وأغلق قبل أن تغادر العينات البائع',
        body: [
          'Each sample carries a label with an identifier that only your system uses, the supplier, the material description, the date and the lot or batch reference if one exists. Keep a copy of the label with the sample; do not rely on the seller\'s own marking, which may be reused across consignments.',
          'Where a batch reference exists, photograph the label before it is sealed, and ask the supplier to state in writing that the sample and the bulk are from the same batch. Where no batch reference exists, that fact is itself the finding: a material with no lot identity cannot be matched to a later delivery, and a later delivery cannot be compared against the sample.',
        ],
        bodyAr: [
          'تحمل كل عينة ملصقاً يحمل معرّفاً يستخدمه نظامك وحدك، واسم المورد، ووصف المادة، والتاريخ، ومرجع اللوط أو الدفعة إن وُجد. احتفظ بنسخة من الملصق مع العينة؛ ولا تعتمد على تعليم المورد نفسه، فقد يُعاد استخدامه بين شحنات مختلفة.',
          'وحيث يوجد مرجع دفعة، صوّر الملصق قبل ختمه، واطلب من المورد أن يذكر كتابةً أن العينة والجملة من الدفعة نفسها. وحيث لا يوجد مرجع دفعة، فهذه الحقيقة بذاتها هي النتيجة: مادة بلا هوية لوط لا يمكن مطابقتها بتسليم لاحق، ولا يمكن مقارنة التسليم اللاحق بالعينة.',
        ],
      },
      {
        heading: '3. Compare under one method',
        headingAr: '٣. قارن بطريقة واحدة',
        body: [
          'All samples are assessed by the same person, on the same day, in the same order, ideally blind if you can manage it. The method matters more than the instrument: what a buyer actually needs to decide is a purchase, and the assessment should therefore track the attributes that drive it.',
          'For wood: resin distribution and density by immersion, the size and shape of the chips, how the material breaks, and the scent on a controlled heat source. For oil: colour and clarity, viscosity, the scent on a blotter and then on skin at fixed intervals, and the way it develops over the first hour.',
          'Score each attribute on a fixed scale before you compare across suppliers, and write the score down as you go. Comparing after the fact, from memory, is where consistency is lost.',
        ],
        bodyAr: [
          'تُقيَّم كل العينات بواسطة الشخص نفسه، وفي اليوم نفسه، وبالترتيب نفسه، والأفضل أن يكون التقييم مُعمّى إن أمكن. وتهم الطريقة أكثر من الأداة: فالقرار الذي يحتاجه المشتري هو قرار شراء، ولذلك ينبغي أن يتتبع التقييم الصفات التي تحرّكه.',
          'للخشب: توزيع الراتنج والكثافة بالغمر في الماء، وحجم رقائق المادة وشكلها، وكيف تتكسر، والرائحة على مصدر حرارة متحكم به. وللزيت: اللون والصفاء، واللزوجة، والرائحة على ورقة ثم على الجلد بفترات ثابتة، وكيف يتطور خلال الساعة الأولى.',
          'قيّم كل صفة على مقياس ثابت قبل المقارنة بين الموردين، واكتب الدرجة وأنت تقيّم. فالمقارنة لاحقاً، من الذاكرة، هي الموضع الذي تضيع فيه الاتساقية.',
        ],
      },
      {
        heading: '4. Agree acceptable variation before you order',
        headingAr: '٤. اتفق على النسبة المقبولة من الاختلاف قبل الطلب',
        body: [
          'This is the step that turns a sample set into a purchase. Decide, in writing, what difference between the sample and the delivered goods is acceptable and what is not.',
          'Two workable formulations. One is per-attribute tolerance: the delivered oil may differ from the sample by no more than an agreed amount on the specific attribute that matters to you, assessed by the same method. The other is a named-reference approach: the sample becomes the standard, and the delivered lot is required to match it within an agreed tolerance.',
          'State what happens when it does not: replacement, credit, or refusal. And state the measurement method that will be used to decide. A tolerance without a method is not a tolerance.',
        ],
        bodyAr: [
          'هذه هي الخطوة التي تحوّل مجموعة عينات إلى عملية شراء. حدّد كتابةً ما الفرق المقبول بين العينة والبضاعة المسلَّمة وما غير المقبول.',
          'صياغتان عمليتان. الأولى تفاوت لكل صفة: قد يختلف الزيت المسلَّم عن العينة بما لا يتجاوز مقداراً متفقاً عليه في الصفة المهمة لك، ويُقيَّم بالطريقة نفسها. والثانية إحالة إلى مرجع مسمّى: تصبح العينة معياراً، ويُشترط أن تطابق الدفعة المسلَّمة العينة ضمن تفاوت متفق عليه.',
          'واحدّد ما يحدث عند عدم المطابقة: الاستبدال أو الرصيد المستحق أو الرفض. واحدد طريقة القياس التي ستُتخذ في القرار. فالتفاوت بلا طريقة ليس تفاوتاً.',
        ],
      },
      {
        heading: '5. Tie the bulk order to the sampled batch',
        headingAr: '٥. اربط طلب الجملة بالدفعة التي عيّنتها',
        body: [
          'The sample is only useful if the bulk it justifies comes from the same material. Ask the supplier to confirm in writing that the bulk will be drawn from the same batch, or from a batch that has been assessed against the sample and found to match it.',
          'Where a supplier cannot make that statement, either accept the risk explicitly and record that you did, or do not scale up on that sample. "We will send the same" is not a batch link and should not be accepted as one.',
          'If the supplier will not state a batch link at all, that tells you something about how the material is handled, and it is relevant information for a buyer who intends to reorder.',
        ],
        bodyAr: [
          'العينة لا نفع منها إلا إذا جاء الجملة الذي تبرره من المادة نفسها. اطلب من المورد تأكيده كتابةً بأن الجملة ستُسحب من الدفعة نفسها، أو من دفعة قيِّمت على العينة ووجدت مطابقة لها.',
          'وحيث لا يستطيع المورد تقديم ذلك التأكيد، فإما أن تقبل المخاطرة صراحةً وتوثّق أنك قبلتها، أو ألا ترقّي على أساس تلك العينة. أما عبارة «سنرسل نفس الشيء» فهي ليست صلة بالدفعة ولا ينبغي قبولها كصلة.',
          'وإن رفض المورد ذكر أي صلة بالدفعة، فهذا يخبرك بشيء عن طريقة التعامل مع المادة، وهو معلومة ذات صلة لمشتري ينوي إعادة الطلب.',
        ],
      },
      {
        heading: '6. Record it so the next purchase starts further along',
        headingAr: '٦. وثّق بحيث يبدأ الشراء التالي من نقطة أبعد',
        body: [
          'Keep the sample, its label, the scored results, the correspondence about the batch link and the tolerance agreement together. A retained sample is what lets you compare next year\'s offer against this year\'s result rather than against a vague memory.',
          'The record also settles disputes. When a delivery differs from what was agreed, the question is answered by the file, not by argument — which supplier is right about what was promised is a smaller question than what was promised.',
        ],
        bodyAr: [
          'احتفظ بالعينة وملصقها والنتائج المقيَّمة والمراسلات حول صلة الدفعة واتفاق التفاوت في مكان واحد. فالعينة المحتفظ بها هي ما يتيح مقارنة عرض العام الماضي بنتيجة هذا العام لا بذاكرة غامضة.',
          'والسجل هو ما يحسم الخلافات. فحين يختلف التسليم عن المتفق عليه، تجيب السجلات عن السؤال بدل الجدال — فالسؤال «أي الموردين محق في ما وعد به» أصغر من «ما الذي وُعد به».',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014', 'CITES_AGARWOOD_2004', 'CITES_APPENDICES'],
    limitations:
      'This is a process for comparing and recording samples. It does not set a quality threshold, a price or a preferred supplier, and it does not establish that any particular material is good. Whether a sample passes is a judgement made against your own specification.',
    limitationsAr:
      'هذه عملية لمقارنة العينات وتوثيقها. وهي لا تضع عتبة جودة ولا سعراً ولا مورداً مفضلاً، ولا تثبت أن أي مادة بعينها جيدة. فاجتياز العينة تقدير يُحكم به على مواصفتك أنت.',
    reviewer: REVIEWER,
    reviewerAr: REVIEWER_AR,
    reviewMethod: REVIEW_METHOD,
    reviewMethodAr: REVIEW_METHOD_AR,
    reviewedOn: REVIEWED_ON,
    nextSteps: [
      'Learn how to match a sample to a bulk batch',
      'Read how to read a wholesale quotation',
      'Understand supplier minimum order quantities',
    ],
    nextStepsAr: [
      'تعلّم كيف تطابق العينة مع دفعة الجملة',
      'اقرأ كيف تقرأ عرض سعر بالجملة',
      'افهم الحد الأدنى لكميات الطلب لدى الموردين',
    ],
    related: [
      { slug: 'sourcing/sample-to-bulk-matching', label: 'Match samples to bulk batches' },
      { slug: 'sourcing/comparing-supplier-quotes', label: 'Compare supplier quotations without assuming equivalence' },
      { slug: 'sourcing/minimum-order-quantities', label: 'Understanding supplier minimum quantities' },
      { slug: 'using-oud/label-and-store-samples', label: 'Label and organize samples' },
      { slug: 'quality/batch-records', label: 'What belongs in a batch record' },
    ],
    parent: 'sourcing',
  },

  {
    slug: 'sourcing/how-supplier-introductions-work',
    kind: 'guide',
    state: 'reviewed',
    title: 'Understand supplier introductions and lead fees',
    titleAr: 'كيف تعمل تعريفات المزودين ورسوم الفرص',
    h1: 'Understand supplier introductions and lead fees',
    h1Ar: 'كيف تعمل تعريفات المزودين ورسوم الفرص',
    summary:
      'How a wholesale request travels from a buyer to a named supplier, what each party may see, and when a fee is charged.',
    summaryAr: 'كيف ينتقل طلب الجملة من المشتري إلى مورد محدد بالاسم، وما يراه كل طرف، ومتى تُحتسب رسوم.',
    directAnswer:
      'A request you submit goes to OudGuide first, not to a supplier. It is reduced to a technical brief — material, quantity, destination, price band — that carries no buyer name or contact details. Suppliers may see a brief and express interest; they do not receive your details. Your details are released only if you verify your contact channel and then approve a named supplier for that specific request, and the approval covers one recipient and one request. If a supplier is paid a fee for an introduction, that fee is for the introduction and does not widen what the supplier may see.',
    directAnswerAr:
      'يذهب الطلب الذي تقدّمه إلى دليل العود أولاً، لا إلى مورد. ويُحوَّل إلى موجز فني — الصنف والكمية والوجهة ونطاق السعر — لا يحمل اسم المشتري ولا بيانات اتصاله. وقد يرى الموردون الموجز ويعبّرون عن اهتمامهم، ولا يتلقّون بياناتك. ولا تُسلَّم بياناتك إلا بعد أن تتحقق من قناة الاتصال ثم توافق على مورد محدد بالاسم لهذا الطلب تحديداً، والموافقة تخص مستلماً واحداً وطلباً واحداً. وإذا دُفع للمورد رسم على التعريف، فإن هذا الرسم مقابل التعريفيف لا يوسّع ما يراه المـرد.',
    sections: [
      {
        heading: 'The stages a request goes through',
        headingAr: 'المراحل التي يمر بها الطلب',
        body: [
          'Submission and verification. You submit a requirement and receive a verification code at the contact channel you chose. Until that code is entered, the request is not authorized and no brief is created.',
          'Brief creation. Once authorized, a redacted brief is created from what you wrote: product family, quantity and unit, destination country, any origin preference, whether you want samples, and your target date. The brief carries no name, email, phone or company.',
          'Supplier review. Eligible suppliers see briefs that match their capability. They may express interest. Expressing interest is not a grant: it does not give the supplier your details.',
          'Your approval. Where a supplier has been proposed to you, you approve them by name, or refuse. Refusing one supplier does not affect a supplier you already selected.',
          'Introduction. Only for an approved recipient does your contact detail become releasable, and only the fields and channel you approved.',
          'Withdrawal. You can withdraw an approval at any time. A pending introduction is cancelled; an introduction already sent cannot be recalled.',
        ],
        bodyAr: [
          'التقديم والتحقق. تقدّم متطلباً وتتلقى رمز تحقق على قناة الاتصال التي اخترتها. وقبل إدخال الرمز لا يكون الطلب مصرَّحاً به ولا يُنشأ أي موجز.',
          'إنشاء الموجز. بعد التصريح يُنشأ موجز منقّى مما كتبته: صنف المنتج والكمية ووحدتها وبلد الوجهة وأي تفضيل للأصل وهل تريد عينات وتاريخك المستهدف. ولا يحمل الموجز اسماً ولا بريداً ولا هاتفاً ولا شركة.',
          'مراجعة الموردين. يرى الموردون المؤهلون الموجزات المطابقة لقدرتهم، ويمكنهم التعبير عن اهتمامهم. والتعبير عن الاهتمام ليس موافقة: ولا يمنح المورد بياناتك.',
          'موافقتك. حيث يُقترح عليك مورد، توافق عليه باسمك أو ترفضه. ورفض مورد لا يؤثر على مورد اخترته.',
          'التعريف. لا تصبح بيانات اتصالك قابلة للإطلاق إلا للمستلم المعتمد، وبالحقول والقناة التي وافقت عليها فقط.',
          'السحب. يمكنك سحب الموافقة في أي وقت. ويُلغى أي تعريف معلق، أما ما أُرسل بالفعل فلا يمكن استرجاعه.',
        ],
      },
      {
        heading: 'What each party can see',
        headingAr: 'ما يراه كل طرف',
        body: [
          'The supplier, before your approval, sees the brief and nothing else. After your approval, the supplier receives the requirement you wrote and your contact details for the agreed channel. A supplier that has paid for an introduction sees exactly what any approved supplier sees, and no more.',
          'OudGuide sees the full request in order to route and, where needed, to moderate it. That is the reason the request comes to us first rather than being forwarded automatically to whoever might be interested.',
          'Other suppliers never receive your details as a consequence of one supplier receiving them. An approved introduction is a per-recipient, per-request grant, not a general release to the marketplace.',
        ],
        bodyAr: [
          'يرى المورد، قبل موافقتك، الموجزاً ولا شيء غيره. وبعد موافقتك يتلقى المتطلبات التي كتبتها وبيانات اتصالك على القناة المتفق عليها. والمورد الذي دفع مقابل تعريف لا يرى أكثر مما يراه أي مورد معتمد.',
          'ويرى دليل العود الطلب كاملاً ليوجّهه والحالات التي تتطلب ذلك ليراجعها. ولهذا يذهب الطلب إلينا أولاً بدل أن يُوجَّه تلقائياً إلى كل من قد يهمه.',
          'ولا يتلقى موردون آخرون بياناتك نتيجة تلقاء وصولها إلى مورد واحد. فالتعريف المعتمد موافقة لكل مستلم ولكل طلب، لا إطلاق عام لكل السوق.',
        ],
        callout: {
          title: 'A selected supplier is not interchangeable',
          body:
            'If you address a request to a named supplier, that request is for that supplier. It will not be passed to another business in place of them, and a paid or fee-bearing arrangement does not override that.',
          bodyAr:
            'إذا وجّهت طلباً إلى مورد محدد، فذلك الطلب له. ولن يُسلَّم إلى منشأة أخرى بدلاً منه، ولا يتجاوز أي ترتيب مدفوع أو مرتبط برسوم هذا الحد.',
        },
      },
      {
        heading: 'Fees, and what a fee does not buy',
        headingAr: 'الرسوم، وما لا تشتريه الرسوم',
        body: [
          'Some suppliers pay a fee when an introduction is made to them. A fee is for the introduction — for the effort of quoting and supplying. It is not a purchase of your details, and it does not create a verification, a priority over other suppliers, or an entitlement to a ranking credit.',
          'Neither OudGuide nor any supplier may sell on or reuse your details for unrelated marketing. The purpose recorded with an introduction is the quotation you asked for.',
          'Where a fee arrangement exists, the supplier should be able to state plainly what it covers. If a supplier describes a fee as buying access to buyer details, that is a different arrangement from an introduction, and it should be treated as one to be checked rather than assumed.',
        ],
        bodyAr: [
          'تدفع بعض الموردين رسماً عند إجراء تعريف. والرسم مقابل التعريف — أي مقابل خدمة التسعير والتوريد. وهو ليس شراءً لبياناتك، ولا يخلق توثيقاً ولا أفضلية على غيره من الموردين ولا استحقاقاً بدفع ترتيب.',
          'ولا يجوز لدليل العود ولا لأي مورد بيع بياناتك أو إعادة استخدامها في تسويق غير ذي صلة. والغرض المسجَّل مع التعريف هو عرض السعر الذي طلبته.',
          'وحيث يوجد ترتيب رسوم، ينبغي للمورد أن يوضح بصراحة ما الذي يغطيه. ومن وصف الرسم بأنه شراء لوصول إلى بيانات المشترين، فذلك ترتيب مختلف عن التعريف، ويُعامل على أنه يحتاج إلى تدقيق لا إلى افتراض.',
        ],
      },
      {
        heading: 'What a supplier should be able to answer',
        headingAr: 'ما ينبغي أن يكون للمورد القدرة على الإجابة عنه',
        body: [
          'A supplier that is genuinely eligible to receive an introduction should be able to say which products they supply, which origins they handle, which destinations they ship to, what their minimum order is, and what documentation accompanies a shipment. If those answers are unavailable, the supplier is not yet able to act on an introduction regardless of what it has paid for.',
        ],
        bodyAr: [
          'ينبغي للمورد المؤهل فعلاً لاستقبال تعريف أن يعرف أي الأصناف يورّد، وأي الأصول يتعامل، وإلى أي الوجهات يشحن، وما حدّه الأدنى للطلب، وأي وثائق ترافق الشحنة. فإن تعذّرت هذه الإجابات، فالمورد غير قادر بعد على التصرف بناءً على تعريف مهما دفع مقابله.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'CITES_APPENDICES', 'TRAFFIC_AGARWOOD_TRADE_2000'],
    limitations:
      'This page describes how the process is designed to work. It is not a report of a tested end-to-end dispatch, and the accompanying test suite exercises the release policy rather than a live delivery to a real supplier. The specific fee arrangements, if any, are a commercial matter between OudGuide and each supplier and are not published here.',
    limitationsAr:
      'تصف هذه الصفحة كيف صُممت العملية لتعمل. وهي ليست تقريراً عن إرسال مُختبر من طرف إلى طرف، فمجموعة الاختبارات المرافقة تختبر سياسة الإطلاق لا توصيلاً حقيقياً إلى مورد. أما ترتيبات الرسوم إن وُجدت فهي مسألة تجارية بين دليل العود وكل مورد، ولا تُنشر هنا.',
    reviewer: REVIEWER,
    reviewerAr: REVIEWER_AR,
    reviewMethod: REVIEW_METHOD,
    reviewMethodAr: REVIEW_METHOD_AR,
    reviewedOn: REVIEWED_ON,
    nextSteps: [
      'Submit a wholesale requirement',
      'Learn what a redacted brief contains',
      'Read how to compare supplier quotations',
    ],
    nextStepsAr: [
      'قدّم متطلب توريد بالجملة',
      'اعرف ما يحتويه الموجز المنقّى',
      'اقرأ كيف تقارن عروض أسعار الموردين',
    ],
    related: [
      { slug: 'sourcing/sample-to-bulk-matching', label: 'Match samples to bulk batches' },
      { slug: 'sourcing/reading-a-quotation', label: 'Read a wholesale fragrance quotation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'buying/supplier-questions', label: 'What to ask a supplier' },
    ],
    parent: 'sourcing',
  },
];
