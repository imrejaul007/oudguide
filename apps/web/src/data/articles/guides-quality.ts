import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

/**
 * The quality and buying articles.
 *
 * These are the pages a buyer reaches when they are about to commit
 * money. Each one answers a different question — what a claim means,
 * what a document establishes, what to ask, what to compare — so no two
 * of them can be interchanged without the reader noticing.
 */

export const qualityBuyingArticles: Article[] = [
  simpleGuide({
    slug: 'oud-basics/agarwood-botanical-identity',
    parent: 'oud-basics',
    title: 'Botanical identity and genus comparison',
    titleAr: 'الهوية النباتية ومقارنة الأجناس',
    summary:
      'Which plants produce resinous heartwood, how the genera differ, and why the species decides which rules apply.',
    summaryAr:
      'ما النباتات التي تنتج قلباً راتنجياً، وكيف تختلف الأجناس، ولماذا يحدد النوع اللوائح المنطبقة.',
    directAnswer:
      'Resinous heartwood occurs in three principal genera of the family Thymelaeaceae: Aquilaria, Gyrinops and, in a different sense, Santalum. Within Aquilaria the commercially important species are A. crassna in mainland Southeast Asia, A. malaccensis across the Malay archipelago, A. agallocha in the Indian subcontinent and A. sinensis in China. Gyrinops covers New Guinea and parts of the Malay archipelago. They are different plants with different chemistry, and the species name is what determines the regulatory list a shipment falls under.',
    directAnswerAr:
      'يوجد القلب الراتنجي في ثلاثة أجناس رئيسية من الفصيلة الزهرية Thymelaeaceae: Aquilaria وGyrinops، وفي معنى آخر Santalum. وداخل جنس Aquilaria، الأنواع المهمة تجارياً هي A. crassna في جنوب شرق آسيا البرية، وA. malaccensis في أرخبيل الملايو، وA. agallocha في شبه القارة الهندية، وA. sinensis في الصين. أما Gyrinops فيغطي غينيا الجديدة وأجزاء من أرخبيل الملايو. وهي نباتات مختلفة كيميائياً، واسم النوع هو ما يحدد القائمة التنظيمية التي تندرج تحتها الشحنة.',
    sections: [
      {
        heading: 'Why the genus matters before the species',
        headingAr: 'لماذا الجنس يسبق النوع في الأهمية',
        body: [
          'The families and genera are worth separating before the individual species, because the conservation treatment differs across them. Some members of the sandalwood family are listed; some are not. Within a listed genus, the treatment is usually uniform, but it is the listing that carries the permit requirement.',
          'The practical consequence is that "oud" is not a regulatory category. An oil, a wood chip or a finished perfume made from oud materials sits under different rules depending on the species and the form, which is why a buyer who cannot name the species cannot know what paperwork the shipment needs.',
        ],
        bodyAr: [
          'تجدر التمييز بين الفصيلات والأجناس قبل الأنواع، لأن المعالجة تختلف من فصيلة إلى أخرى. فبعض أفراد فصيلة الصندل مشمولون وبعضهم لا. وداخل جنس مشمول، تكون المعالجة عادةً متساوية، لكن الإدراج هو ما يحمل شرط التصريح.',
          'والنتيجة العملية أن «العود» ليست فئة تنظيمية. فزيت أو رقاق خشب أو عطر منتهٍ من مواد عود يخضع لقواعد مختلفة بحسب النوع والشكل، ولهذا لا يعرف المشتري الذي لا يستطيع تسمية النوع ما هي الأوراق التي تحتاجها الشحنة.',
        ],
      },
      {
        heading: 'Sandalwood is not agarwood',
        headingAr: 'الصندل ليس العود',
        body: [
          'Santalum album is a different genus, valued for its heartwood oil, and it is listed under CITES in its own right. It is a source of confusion in this trade because both are fragrant heartwoods sold as "wood", both are distilled into oils, and both appear in attar production, where a sandalwood base is the standard carrier.',
          'They are not interchangeable. The species determine the listing, the documentation and the oil chemistry, and a buyer comparing prices between an agarwood oil and a sandalwood oil is comparing two different materials.',
        ],
        bodyAr: [
          'Santalum album جنس مختلف، ثمين بزيت قلب خشبه، ومشمول في سايتس بذاته. وهو مصدر خلط في هذه التجارة لأن الخشبين معاً عطران يُباعان «خشباً»، ويُقطَّران زيوتاً، ويظهران معاً في صناعة العطر الشرقي حيث قاعدة الصندل هي الحامل المعتاد.',
          'وليسا قابلين للتبادل. فالنوعان يحددان الإدراج والأوراق وكيمياء الزيت، والمشتري الذي يقارن سعر زيت عود بزيت صندل يقارن مادتين مختلفتين.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014', 'CITES_AGARWOOD_2004'],
    limitations:
      'This page identifies which species are involved and how the genera differ. It does not establish the listing status of any specific specimen, nor the chemical composition, resin content or price of any material. A shipment\'s legal status is settled on the species and the documents, not on a description.',
    limitationsAr:
      'تحدد هذه الصفحة الأنواع المعنية وكيف تختلف الأجناس. ولا تثبت حالة الإدراج لأي عينة بعينها، ولا التركيب الكيميائي ولا نسبة الراتنج ولا سعر أي مادة. فالوضع القانوني للشحنة يُحسم بالنوع والوثائق، لا بالوصف.',
    nextSteps: [
      'Read what agarwood actually is',
      'Check what a shipment has to carry',
      'Learn how to compare two origin claims',
    ],
    nextStepsAr: [
      'اقرأ ما هو العود فعلاً',
      'تحقق مما يجب أن تحمله الشحنة',
      'تعلّم مقارنة ادعاءي منشأ',
    ],
    related: [
      { slug: 'oud-basics/what-is-agarwood', label: 'Agarwood: names, material and uses' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
    ],
  }),

  simpleGuide({
    slug: 'quality/oud-grading-explained',
    parent: 'quality',
    title: 'How oud grading claims work',
    titleAr: 'كيف تعمل ادعاءات تقييم العود',
    summary:
      'The structure of a grading claim, which parts of it can be checked, and which parts are convention.',
    summaryAr: 'بنية ادعاء التقييم، وأي أجزائه قابل للتحقق، وأيها عرف.',
    directAnswer:
      'A grading claim in this trade usually has four parts: the plant, the grade label, the preparation, and the paperwork. They carry very different weight. The plant can be established from a document. The grade label is a seller\'s description with no published standard behind it. The preparation — how the wood was treated before it was offered — is checkable by asking and occasionally by analysis. The paperwork is checkable by reading it. Only one of these four is a matter of opinion dressed as fact.',
    directAnswerAr:
      'يتكوّن ادعاء التقييم في هذه التجارة من أربعة أجزاء: النبات، ووسم الدرجة، والتجهيز، والأوراق. ولكل منها أوزاناً مختلفة تماماً. فالنبات يمكن إثباته بوثيقة. ووسم الدرجة وصف من البائع لا معيار منشور خلفه. والتجهيز — أي معالجة الخشب قبل عرضه — قابل للتحقق بالسؤال وأحياناً بالتحليل. والأوراق قابلة للتحقق بقراءتها. وجز واحد فقط من الأربعة هو رأي يُقدَّم على أنه واقعة.',
    sections: [
      {
        heading: 'The four parts, and how far each can be pushed',
        headingAr: 'الأجزاء الأربعة، وحدّ ما يمكن دفعه في كل منها',
        body: [
          'The plant: which species the material came from. This is established by the seller\'s own record and, where a CITES-listed species is involved, by the documentation that accompanies the consignment. It is the most consequential part of the claim, because the species drives the permit requirement.',
          'The grade: a label such as Super, Double Super, Triple Super, or a sinking grade, or a regional wood-type name. These are conventions without published definitions. They tell you the seller\'s characterisation, not a measured property.',
          'The preparation: fumigation, steam treatment, impregnation, the presence or absence of added scent. This one is worth pressing on, because it changes the weight and the smell of the material and because it is a matter of fact rather than judgement.',
          'The paperwork: permits, certificates, and the record of where the material has been. A document establishes that a document exists and what it says. It does not establish the contents of the parcel, which is a different question and the one that matters.',
        ],
        bodyAr: [
          'النبات: من أي نوع جاءت المادة. يثبته سجل البائع نفسه، وفي الأنواع المشمولة بسايتس تأتي به الوثائق المرافقة للشحنة. وهو أكثر أجزاء الادعاء أثراً، لأن النوع هو ما يحدد شرط التصريح.',
          'الدرجة: وسم مثل «سوبر» أو «دبل سوبر» أو «تريبل سوبر»، أو درجة غطاس، أو اسم نوع خشب إقليمي. وهو عرف بلا تعريفات منشورة. فهي تصف تقدير البائع لا خاصية مقيسة.',
          'التجهيز: التبخير، أو المعالجة بالبخار، أو النقع، أو وجود عطر مضاف. وهذا يستحق الضغط عليه، لأنه يغيّر وزن المادة ورائحتها، ولأنه مسألة واقعة لا رأي.',
          'الأوراق: التصاريح والشهادات وسجل مسار المادة. والوثيقة تثبت وجود وثيقة وما ورد فيها، ولا تثبت محتوى الطرد، وهذا سؤال آخر وهو المهم.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014', 'CITES_AGARWOOD_2004'],
    limitations:
      'This page describes the structure of a grading claim. It does not define a grade, set a threshold, or endorse any label, and it does not establish the contents of any shipment.',
    limitationsAr:
      'تصف هذه الصفحة بنية ادعاء التقييم. ولا تعرّف درجة، ولا تضع عتبة، ولا ترشّح أي وسم، ولا تثبت محتوى أي شحنة.',
    nextSteps: ['Read the Super-label page specifically', 'Learn what a laboratory report covers', 'See how to evaluate an offer'],
    nextStepsAr: ['اقرأ صفحة تسميات «سوبر» تحديداً', 'اعرف ما الذي يغطيه التقرير المخبري', 'اعرف كيف تقيّم عرضاً'],
    related: [
      { slug: 'quality/seller-defined-super-grades', label: 'Super, Double Super and Triple Super labels' },
      { slug: 'quality/sinking-claims', label: 'Understanding sinking claims' },
      { slug: 'quality/age-claims', label: 'Tree age, resin age, storage and marketing claims' },
      { slug: 'quality/assessment-and-testing-limits', label: 'Assessment and testing limits' },
    ],
  }),

  simpleGuide({
    slug: 'quality/sinking-claims',
    parent: 'quality',
    title: 'Understanding sinking claims',
    titleAr: 'فهم ادعاءات الغطاس',
    summary:
      'What "sinking grade" measures, the ways the test is gamed, and what a density figure does and does not establish.',
    summaryAr: 'ما الذي يقيسه «الغطاس»، وكيف يُخدع الاختبار، وما الذي يثبته رقم الكثافة وما لا يثبته.',
    directAnswer:
      'A sinking claim says that the wood sinks in water. The test is real and it is meaningful: resin-rich agarwood is dense enough to sink while ordinary wood of the same species floats. What the test does not establish is how much resin is present, whether the resin is natural, or how old it is. A block weighted with lead or wax sinks for the same reason a genuine block does, which is why a density result is a screening observation and not a verification.',
    directAnswerAr:
      'ادعاء الغطاس يقول إن الخشب يغرق في الماء. والاختبار حقيقي ودال: العود الغني بالراتنج ثقل من الماء فيغرق فيه، بينما يطفو الخشب العادي من النوع نفسه. وما لا يثبته الاختبار هو مقدار الراتنج ولا كونه طبيعياً ولا عمره. فالقطعة المثقوبة بالرصاص أو الشمع تغرق للسبب نفسه الذي تغرق به القطعة الأصلية، ولهذا نتيجة الكثافة ملاحظة فرز لا توثيق.',
    sections: [
      {
        heading: 'What the test does, and the ways it is defeated',
        headingAr: 'ما الذي يفعله الاختبار، وكيف يُهزم',
        image: {
          src: '/images/hydrostatic-sinking-test.svg',
          alt: 'Hydrostatic density chart showing buoyant agarwood, half-sinking grade, and true sinking grade wood',
          altAr: 'مخطط الكثافة الهيدروستاتيكية يوضح درجات العود: الطافي، نصف الغاطس، وخشب الغطاس الكامل',
          caption: 'Hydrostatic buoyancy tiers: density determined by resin saturation vs. water threshold of 1.00 g/cm³.',
          captionAr: 'مستويات الطفو الهيدروستاتيكي: تتحدد الكثافة بدرجة تشبع الراتنج مقارنة بعتبة كثافة الماء (1.00 جم/سم³).',
        },
        body: [
          'The test is simple: a piece of wood is put in water and observed. Natural agarwood sinks as the resin accumulates; the same tree\'s unresinated wood floats. That makes it a genuinely useful first screen when sorting a consignment.',
          'It is defeated in several well-known ways. Metal shot, wax or dense filler can be introduced to add weight. Surface resin can be painted on. A piece can be selected for the test and swapped afterwards, which is why a witnessed test on the actual delivery beats a photograph.',
          'None of this makes the claim worthless. It makes it a claim that has to be paired with other evidence — the species, the batch record, and the handling — rather than treated as a grade on its own.',
        ],
        bodyAr: [
          'الاختبار بسيط: تُوضع قطعة خشب في الماء وتُراقَب. فالغاطس الطبيعي يغرق مع تراكم الراتنج، بينما يطفو خشب الشجرة نفسها غير المحتوِ. وهذا يجعله فرزاً أولياً مفيداً حقاً عند فرز شحنة.',
          'ولهذه طرق هزم معروفة. ويمكن حقن الرصاص أو الشمع أو الحشو الكثيف لزيادة الوزن. ويمكن طلاء الراتنج على السطح. ويمكن اختيار قطعة للاختبار ثم تبديلها بعده، ولهذا يتفوق الاختبار المشهود على الشحنة الفعلية على صورة.',
          'وكل ذلك لا يجعل الادعاء بلا قيمة، بل يجعله ادعاءً يجب أن يقترن بأدلة أخرى — النوع وسجل الدفعة والتعامل — لا أن يُعامَل كدرجة بذاته.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
    limitations:
      'This page describes the density test and its known failure modes. It does not state a threshold, establish the resin content of any material, or assess any individual piece.',
    limitationsAr:
      'تصف هذه الصفحة اختبار الكثافة ومواضع فشله المعروفة. ولا تضع عتبة، ولا تثبت نسبة الراتنج لأي مادة، ولا تقيّم أي قطعة بعينها.',
    nextSteps: ['Read how grading claims work', 'Learn what photographs can establish', 'See how to evaluate an offer'],
    nextStepsAr: ['اقرأ كيف تعمل ادعاءات التقييم', 'اعرف ما الذي تثبته الصور', 'اعرف كيف تقيّم عرضاً'],
    faq: [
      {
        question: 'What does a sinking test actually show?',
        answer:
          'It shows the wood is dense enough to sink in water, which is a real correlate of resin content and a useful first screen when sorting a consignment. The same tree’s unresinated wood floats, so the test separates resinous pieces from ordinary ones.',
      },
      {
        question: 'Does sinking mean the oud is genuine?',
        answer:
          'No. A block weighted with lead, wax or dense filler sinks for the same reason a genuine block does, and surface resin can be painted on. A density result is a screening observation, not a verification of authenticity, resin content or age.',
      },
      {
        question: 'Can a seller defeat the test?',
        answer:
          'Yes, in well-known ways: adding weight with metal shot, wax or filler, painting resin on the surface, or selecting one piece for the test and swapping it afterwards. This is why a test witnessed on the actual delivery beats a photograph.',
      },
    ],
    faqAr: [
      {
        question: 'ماذا يثبت اختبار الغرق فعلا؟',
        answer:
          'يُثبت أن الخشب كثيف بما يكفي ليغرق في الماء، وهي إشارة مترابطة مع محتوى الراتنج وفرز أولي مفيد عند فرز شحنة. فالخشب غير المحتوِ من الشجرة نفسها يطفو، لذا يفصل الاختبار القطع الراتنجية عن العادية.',
      },
      {
        question: 'هل الغرق يعني أن العود أصيل؟',
        answer:
          'لا. فالقطعة المثقلة بالرصاص أو الشمع أو حشو كثيف تغرق للسبب نفسه الذي تغرق به القطعة الأصلية، ويمكن طلاء الراتنج على السطح. ونتيجة الكثافة ملاحظة فرز، لا توثيق للأصالة ولا لمحتوى الراتنج ولا للعمر.',
      },
      {
        question: 'هل يمكن للبائع هزيمة الاختبار؟',
        answer:
          'نعم، بطرق معروفة: إضافة وزن بالرصاص أو الشمع أو الحشو، أو طلاء الراتنج على السطح، أو اختيار قطعة للاختبار ثم تبديلها بعده. ولهذا يتفوق الاختبار المشهود على الشحنة الفعلية على صورة.',
      },
    ],
    related: [
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
      { slug: 'quality/photo-evidence-limits', label: 'What product photographs can establish' },
      { slug: 'quality/seller-defined-super-grades', label: 'Super, Double Super and Triple Super labels' },
    ],
  }),

  simpleGuide({
    slug: 'quality/age-claims',
    parent: 'quality',
    title: 'Tree age, resin age, storage and marketing claims',
    titleAr: 'عمر الشجرة وعمر الراتنج والتخزين وادعاءات التسويق',
    summary:
      'The four different things an age claim might refer to, and why they are usually not what the seller means.',
    summaryAr: 'الأشياء الأربعة التي قد يشير إليها ادعاء العمر، ولماذا لا تكون عادةً ما يقصده البائع.',
    directAnswer:
      'An age claim in oud can refer to at least four different things: the age of the tree, the time since the tree was wounded, the time the resin has been forming in the wood, and the time since the oil was distilled and bottled. These can differ from each other by decades, and none of them is established by a label. When a seller writes "30 years old", the first question is which of the four is meant, and the second is what record supports it.',
    directAnswerAr:
      'قد يشير ادعاء العمر في العود إلى أربعة أشياء على الأقل: عمر الشجرة، والمدة منذ جُرحت الشجرة، والمدة التي يكون فيها الراتنج قد تشكّل في الخشب، والمدة منذ قُطّر الزيت وحُزِّر. وقد يفترق هذه بعضها عن بعض بسنوات، ولا يثبت أيٌّ منها بوسم. فحين يكتب البائع «عمره 30 سنة»، فالسؤال الأول أي الأربعة يعني، والثاني ما السجل الذي يسنده.',
    sections: [
      {
        heading: 'Ask which age is meant',
        headingAr: 'اسأل أيّ عمرٍ يُقصد',
        body: [
          'Tree age is largely irrelevant to the quality of the resulting oil, and it is the least useful of the four. Resin age — how long the oleoresin has been forming in the heartwood — is the one that has a plausible connection to concentration, and it is also the hardest to establish, because the wound date is usually not recorded.',
          'Storage age is a separate matter again: oil that has been kept for years in a warm room is not the same product as oil bottled in the same year. Distillation date is a third, and it is the one a buyer can usually obtain, because the producer and the bottler both keep records of it.',
          'So the practical sequence is to establish which claim is being made, ask what record supports it, and if the answer is the tree, ask instead about the distillation date — which is both obtainable and more relevant.',
        ],
        bodyAr: [
          'عمر الشجرة لا صلة تذكر له بجودة الزيت الناتج، وهو أقل الأربعة نفعاً. أما عمر الراتنج — أي المدة التي تشكّل فيها الزيت العطري في قلب الخشب — فهو الذي له صلة معقولة بالتركيز، وهو أيضاً الأصعب إثباتاً، لأن تاريخ الجرح لا يسجَّل عادة.',
          'وعمر التخزين مسألة منفصلة: الزيت المحفوظ سنوات في غرفة دافئة ليس المنتج نفسه الذي حُزِّر في السنة نفسها. وتاريخ التقطير ثالث، وهو الذي يستطيع المشتري الحصول عليه عادة، لأن المُنتِج والقائِم على التعبئة كلاهما يحتفظ بسجلاته.',
          'فالتسلسل العملي هو: تحديد أي ادعاء يُطرح، ثم سؤال ما السجل الذي يسنده، وإن كان الجواب هو عمر الشجرة فاسأل بدل ذلك عن تاريخ التقطير — فهو متاح ومفهوم وذا صلة أكبر.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
    limitations:
      'This page separates the meanings of an age claim. It does not establish the age of any material, and it does not assert a relationship between age and quality, because the strength of that relationship is not established here.',
    limitationsAr:
      'تفصل هذه الصفحة معاني ادعاء العمر. ولا تثبت عمر أي مادة، ولا تثبت علاقة بين العمر والجودة، لأن قوة تلك العلاقة غير مثبتة هنا.',
    nextSteps: ['Read how grading claims work', 'Learn what a batch record contains', 'See what a laboratory report covers'],
    nextStepsAr: ['اقرأ كيف تعمل ادعاءات التقييم', 'اعرف ما الذي تحتويه سجل الدفعة', 'اعرف ما الذي يغطيه التقرير المخبري'],
    related: [
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
      { slug: 'quality/batch-records', label: 'What belongs in a batch record' },
      { slug: 'using-oud/storage-and-batch-records', label: 'Storage and batch records' },
    ],
  }),

  simpleGuide({
    slug: 'quality/lab-report-reading',
    parent: 'quality',
    title: 'How to read the scope of a laboratory report',
    titleAr: 'كيف تقرأ نطاق تقرير مخبري',
    summary:
      'What a chromatographic report covers, what it excludes, and the questions that reveal which of those you are holding.',
    summaryAr: 'ما الذي يغطيه التقرير الكروماتوغرافي، وما الذي يستثنيه، والأسئلة التي تكشف أيّهما في يدك.',
    directAnswer:
      'A laboratory report establishes what a sample was found to contain, on the day it was analysed, by the method named. That is a real and useful thing. It is not a statement about the origin of the material, the age of the tree, the distillation method, or the commercial quality of the lot. The most common mistake in reading these reports is treating a clean result for synthetic markers as a certificate of authenticity, when what it shows is narrower: that certain compounds were not detected by one method on one sample.',
    directAnswerAr:
      'يثبت التقرير المخبري ما وُجد في عيّنة، يوم تحليلها، بالطريقة المذكورة. وهذه واقعة مفيدة حقاً. لكنه ليس بياناً عن منشأ المادة ولا عن عمر الشجرة ولا عن طريقة التقطير ولا عن الجودة التجارية للّوط. وأشيع خطأ في قراءة هذه التقارير هو معاملة نتيجة خالية من المؤشرات الاصطناعية شهادةَ أصالة، بينما هو أضيق من ذلك: أن مركبات معينة لم تُرصد بطريقة واحدة على عيّنة واحدة.',
    sections: [
      {
        heading: 'The questions that reveal the scope',
        headingAr: 'الأسئلة التي تكشف النطاق',
        body: [
          'Which sample was analysed — a photograph of a batch, a sample drawn at the factory, or a sample a buyer supplied? A report on a client-supplied sample proves something about the sample, and only by the client\'s account about where it came from.',
          'Which method, and what does the method detect? A chromatographic profile is a fingerprint of what was found, and its ability to exclude adulterants depends entirely on whether the target compounds were in the method\'s scope.',
          'What was the sample treated as before analysis? A distillation or an extraction protocol, and what happened to the material on the way — is not a detail.',
          'And what was not tested? A report that lists twenty identified compounds and says nothing about plasticisers, solvents or synthetic aromatics has not cleared the sample of those things; it has simply not looked for them.',
        ],
        bodyAr: [
          'أي عيّنة حُلّلت — صورة للّوط، أم عيّنة سحبت من المصنع، أم عيّنة قدّمها المشتري؟ فالتقرير على عيّنة قدّمها العميل يثبت شيئاً عن العيّنة، وبحسب قول العميل وحده عن مصدرها.',
          'وما الطريقة، وما الذي تكشفه؟ البصمة الكروماتوغرافية توصيف لما وُجد، وقدرتها على استبعاد التلاعب تعتمد كلياً على ما إذا كانت المركبات المستهدفة ضمن نطاق الطريقة.',
          'وما الذي جرى للعيّنة قبل التحليل؟ بروتوكول تقطير أو استخلاص، وما لحق بالمادة في الطريق — ليست تفصيلاً.',
          'وما الذي لم يُختبر؟ فالتقرير الذي يذكر عشرين مركباً مُعرَّفاً ولا يقول شيئاً عن اللدائن أو المذيبات أو العطور الاصطناعية لم يبرّئ العيّنة منها، بل لم يبحث عنها.',
        ],
        callout: {
          title: 'A negative result is a statement about a method',
          body:
            '"Not detected" means the compound was not found by the stated method within its stated detection limit. It is not the same as "not present", and it is not a certificate of authenticity.',
          bodyAr:
            '"لم يُرصد" تعني أن المركب لم يُعثر عليه بالطريقة المذكورة ضمن حد الكشف فيها. وهي ليست مساوية لـ"غير موجود"، وليست شهادة أصالة.',
        },
      },
      {
        heading: 'Reading the report against the claim',
        headingAr: 'قراءة التقرير على الادعاء',
        image: {
          src: '/images/gc-ms-chromatogram-markers.svg',
          alt: 'Gas chromatography-mass spectrometry GC-MS peak profile showing pure agarwood sesquiterpene markers vs adulterant synthetic peaks',
          altAr: 'مخطط التحليل الكروماتوغرافي الغازي مع قياس الطيف الكتلي يوضح مؤشرات سيسكويتربين العود النقي مقابل قمم الغش الاصطناعي',
          caption: 'GC-MS retention profile: identifying authentic sesquiterpene markers (agarospirol, agarofuran) against synthetic diluents (DEP, phthalates).',
          captionAr: 'مخطط الاستبقاء الكروماتوغرافي: تمييز مؤشرات سيسكويتربين العود الأصيل (أغاروسبيرول، أغاروفوران) من المذيبات الاصطناعية ومركبات الفثالات المضافة.',
        },
        body: [
          "The way to use the report is to hold each of the seller's claims up against what the report actually measured. A \"pure oud oil\" claim is checked against the profile: does the profile read as a resinous heartwood, and is there evidence of a carrier or adulterant? A grade or origin claim is not answered by the report, because the report did not measure grade or origin; it is answered by the permit chain and the handling record.",
          'The discipline is that a report only narrows the field in the direction it measured. A clean chemistry profile does not certify the origin claim, and an origin document does not certify the chemistry claim. A lot that is being sold on both claims needs both checks, and a seller who offers only one is hiding the other.',
        ],
        bodyAr: [
          'طريقة استعمال التقرير أن تُرفَع كل ادعاء من ادعاءات البائع بما قاسه التقرير فعلا. فيُفحص ادعاء «زيت عود نقي» على الرسم: هل يقرأ الرسم كقلب خشبي راتنجي، وهل يوجد دليل على حامل أو مادة مضافة؟ ولا يجيب التقرير عن ادعاء درجة أو منشأ، لأنه لم يقيس الدرجة ولا المنشأ؛ بل يجيب على ذلك سلسل التصاريح وسجل التعامل.',
          'والأدب أن التقرير يضيّق المجال في الاتجاه الذي قاسه فقط. فالرسم الكيميائي النظيف لا يوثّق ادعاء المنشأ، والمستند المنشئي لا يوثّق ادعاء الكيمياء. واللوط الذي يُباع على الادعاءين معاً يحتاج فحصين، وبائع يقدم واحداً يَسْتَر الآخر.',
        ],
      },
      {
        heading: 'Where the report fits in the full check',
        headingAr: 'أين يقع التقرير في الفحص الكامل',
        body: [
          "The lab report is one channel in a three-channel check: the chemistry channel is the report, the provenance channel is the permit and handling record, and the commercial channel is the grade and price pressed against the documented range. A buyer who runs only one channel is running a check the other two can defeat, and the report's honesty is that it admits it is only one of the three.",
          "The value of the report is therefore not that it settles the lot, but that it settles the chemistry claim and leaves the other two claims to their own channels. A buyer who knows the report's lane is a buyer who does not let a clean chemistry reading stand in for a provenance they never checked.",
        ],
        bodyAr: [
          'تقرير المختبر قناة واحدة في فحص من ثلاث قنوات: قناة الكيمياء هي التقرير، وقناة المنشأ هي التصريح وسجل التعامل، وقناة التجارة هي الدرجة والسعر المعروضان على النطاق الموثق. فالمشتري الذي يجري قناة واحدة يجرى فحصاً يستطيع الطرفان الآخران نقضه، وأمانة التقرير أنه يعترف بأنه واحد فقط من الثلاث.',
          'فقدرة التقرير إذن ليست في أنه يحسم اللوط، بل في أنه يحسم ادعاء الكيمياء ويبقي الادعاءين الآخرين لقناتيهما الخاصتين. فالمشتري الذي يعرف نطاق التقرير لا يسمح لقراءة كيمياء نظيفة أن تنوب عن منشأ لم يفحصه قط.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'CITES_APPENDICES', 'AGARWOOD_REVIEW_2014'],
    limitations:
      'This page explains how to read the scope of a laboratory report. It does not interpret any particular report, does not endorse any laboratory, and does not establish that a material is authentic.',
    limitationsAr:
      'تشرح هذه الصفحة كيف يُقرأ نطاق تقرير مخبري. ولا تفسر أي تقرير بعينه، ولا ترشّح أي مختبر، ولا تثبت أن مادة أصلية.',
    nextSteps: ['Read the limits of assessment', 'Read what a document can establish', 'See how to evaluate an offer'],
    nextStepsAr: ['اقرأ حدود التقييم', 'اقرأ ما الذي يمكن لوثيقة إثباته', 'اعرف كيف تقيّم عرضاً'],
    faq: [
      {
        question: 'What does a laboratory (chromatographic) report actually establish?',
        answer:
          'It establishes what a sample was found to contain, on the day it was analysed, by the method named. It is not a statement about the origin of the material, the age of the tree, the distillation method, or the commercial quality of the lot. What it shows is narrower than a certificate: that certain compounds were or were not found by one method on one sample.',
      },
      {
        question: 'Is a clean report that found no synthetic markers a certificate of authenticity?',
        answer:
          'No — that is the most common mistake in reading these reports. “Not detected” means the compound was not found by the stated method within its detection limit. It is not the same as “not present”, and it is not a certificate of authenticity. A report that lists twenty identified compounds and says nothing about plasticisers, solvents or synthetic aromatics has not cleared the sample of those things; it simply has not looked for them.',
      },
      {
        question: 'Which questions reveal the real scope of a report?',
        answer:
          'Which sample was analysed — a photograph of a batch, a sample drawn at the factory, or a sample a buyer supplied; which method and what it detects; what the sample was treated as before analysis; and what was not tested. A report only narrows the field in the direction it measured, so the chemistry it settles is left to its own channel while the provenance claim is checked against the permit and handling record.',
      },
    ],
    faqAr: [
      {
        question: 'ماذا يثبت التقرير المخبري الكروماتوغرافي فعلا؟',
        answer:
          'يثبت ما وُجد في عيّنة، يوم تحليلها، بالطريقة المذكورة. وليس بيانا عن منشأ المادة ولا عن عمر الشجرة ولا عن طريقة التقطير ولا عن الجودة التجارية للوط. وما يثبته أضيق من الشهادة: أن مركبات معينة وُجدت أو لم تُرصد بطريقة واحدة على عيّنة واحدة.',
      },
      {
        question: 'هل النتيجة النظيفة الخالية من المؤشرات الاصطناعية شهادة أصالة؟',
        answer:
          'لا؛ فذلك شائع كأخطاء القراءة. «لم يُرصد» تعني أن المركب لم يُعثر عليه بالطريقة المذكورة ضمن حدّ الكشف فيها، وهي ليست «غير موجود»، وليست شهادة أصالة. فالتقرير الذي يذكر عشرين مركبا معرَّفا ولا يقول شيئا عن اللدائن أو المذيبات أو العطور الاصطناعية لم يبرئ العيّنة منها؛ بل لم يبحث عنها.',
      },
      {
        question: 'أيّ الأسئلة تكشف النطاق الحقيقي للتقرير؟',
        answer:
          'أيّ عيّنة حُلِّلت: صورة للوط، أم عيّنة سحبت من المصنع، أم عيّنة قدّمها المشتري؟ وأيّ طريقة وما الذي تكشفه؟ وما الذي جَرى للعيّنة قبل التحليل؟ وما الذي لم يُختبَر؟ فالتقرير يضيّق المجال في الاتجاه الذي قاسه فقط، لذا يُترَك ادعاء الكيمياء لقناته ويُفحص ادعاء المنشأ على سلسلة التصاريح وسجل التعامل.',
      },
    ],
    related: [
      { slug: 'quality/assessment-and-testing-limits', label: 'Assessment and testing limits' },
      { slug: 'trade/document-review-limits', label: 'What reviewing a document can establish' },
      { slug: 'quality/photo-evidence-limits', label: 'What product photographs can establish' },
    ],
  }),

  simpleGuide({
    slug: 'quality/assessment-and-testing-limits',
    parent: 'quality',
    title: 'Assessment and testing limits',
    titleAr: 'حدود الفحص والتقييم',
    summary:
      'Where laboratory analysis stops and commercial judgement begins, and why the second is not a lesser version of the first.',
    summaryAr: 'حيث ينتهي التحليل المخبري ويبدأ الحكم التجاري، ولماذا الثاني ليس نسخة أضعف من الأول.',
    directAnswer:
      'Laboratory analysis can tell you what compounds are in a sample. It cannot tell you whether you will like the result, whether the seller is reliable, or whether the price is right — and those three questions are the ones that actually decide a purchase. A well-run buying process therefore uses analysis for what it is good at, narrowing the field, and makes the commercial judgement on evidence of a different kind: the supplier\'s record, the batch documentation, and your own comparison across samples.',
    directAnswerAr:
      'يستطيع التحليل المخبري أن يخبرك بما في العيّنة من مركبات. ولا يستطيع أن يخبرك إن كنت سترتاح في النتيجة، ولا إن كان البائع موثوقاً، ولا إن كان السعر مناسباً — وهذه هي الأسئلة الثلاثة التي تقرر الشراء فعلاً. ولذلك ترى عملية شراء محترمة تستخدم التحليل في ما هو صالح له، أي تضييق الميدان، وتجري الحكم التجاري على أدلة من نوع آخر: سجل المورد، ووثائق الدفعة، ومقارنتك الخاصة بين العينات.',
    sections: [
      {
        heading: 'Two different kinds of question',
        headingAr: 'نوعان مختلفان من السؤال',
        body: [
          'Analytical questions have answers in the world of compounds: what is present, in what proportion, and what is absent. These can be settled with a method and a sample.',
          'Commercial questions do not: will this lot perform in my formula, will this supplier deliver as promised, is this price fair for this material, is this origin claim true. None of these is settled by a chromatogram, and a business that presents a chromatogram as the answer to all of them is using the wrong instrument.',
          'The practical discipline is to ask which kind of question you are asking before deciding what evidence would answer it. A supplier who can answer a commercial question with a document has done something genuinely useful; a supplier who answers a commercial question with a laboratory result has not.',
        ],
        bodyAr: [
          'للأسئلة التحليلية إجابات في عالم المركبات: ما الموجود، وبأي نسبة، وما الغائب. ويمكن حسمها بطريقة وعيّنة.',
          'أما الأسئلة التجارية فلا: هل سيؤدي هذا اللوط في تركيبتي، وهل سيفي هذا المورد بوعده، هل هذا السعر عادل لهذه المادة، وهل ادعاء المنشأ صحيح. لا يحسم أيٌّ منها بمخطط كروماتوغرافي، ومنقدّم مخططاً جواباً عن جميعها فهو يستخدم الأداة الخطأ.',
          'والانضباط العملي أن تسأل: أي نوعٍ من السؤال تطرح قبل أن تقرر ما الدليل الذي يجيبه. فمن يجيب سؤالاً تجارياً بوثيقة قدّم شيئاً مفيداً حقاً؛ ومن يجيبه بنتيجة مخبرية فقد لم يجب.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
    limitations:
      'This page draws a boundary between analytical and commercial questions. It does not assess any particular material or supplier, and it does not set a quality threshold.',
    limitationsAr:
      'ترسم هذه الصفحة حداً بين الأسئلة التحليلية والتجارية. وهي لا تقيّم أي مادة أو مورد بعينه، ولا تضع عتبة جودة.',
    nextSteps: ['Read how to read a laboratory report', 'Learn what to ask a supplier', 'See how to compare two quotations'],
    nextStepsAr: ['اقرأ كيف تقرأ تقريراً مخبرياً', 'اعرف ما الذي تسأل مورداً', 'اعرف كيف تقارن عرضَي سعر'],
    related: [
      { slug: 'quality/lab-report-reading', label: 'How to read the scope of a laboratory report' },
      { slug: 'buying/supplier-questions', label: 'What to ask a supplier' },
      { slug: 'sourcing/comparing-supplier-quotes', label: 'Compare supplier quotations without assuming equivalence' },
    ],
  }),

  simpleGuide({
    slug: 'quality/batch-records',
    parent: 'quality',
    title: 'What belongs in a batch record',
    titleAr: 'ما الذي ينتمي إلى سجل الدفعة',
    summary:
      'The fields that let a delivery be traced to a material, and the ones whose absence makes a batch unverifiable.',
    summaryAr: 'الحقول التي تتيح تتبع التسليم إلى مادة، والحقول التي غيابها يجعل الدفعة غير قابلة للتحقق.',
    directAnswer:
      'A batch record exists to answer one question: is this delivery the same material as the one you assessed? To do that it needs an identifier, a date, a description of the material, and a link to the party that handled it. Without those four, a lot has no identity — and a lot with no identity cannot be matched to a sample, cannot be re-ordered against the same specification, and cannot be shown to have been the thing that was approved.',
    directAnswerAr:
      'يوجد سجل الدفعة للإجابة على سؤال واحد: هل هذا التسليم هو المادة نفسها التي قيّمتها؟ ولهذا يحتاج إلى معرّف، وتاريخ، ووصف للمادة، وصلة بالجهة التي تعاملت معها. وبدون هذه الأربعة يكون اللوط بلا هوية — واللوط بلا هوية لا يُطابَق بعيّنة، ولا يمكن إعادة طلبه على المواصفة نفسها، ولا يمكن إثبات أنه هو الذي اعتُمد.',
    sections: [
      {
        heading: 'The minimum record, and why each part is there',
        headingAr: 'أدنى سجل، ولماذا كل جزء موجود',
        body: [
          'An identifier: a reference unique to the lot, which appears on the delivery paperwork and, ideally, on the packaging itself. It does not have to be elaborate; it has to be consistent.',
          'A date: when the material was produced, distilled or packed. Dates are the cheapest thing to record and the most commonly missing.',
          'A description: species, format, and the treatment applied. This is what makes the record meaningful to a buyer who was not present.',
          'And a link to the party that handled it: the producer, the distiller, the packer, whichever applies. This is what lets a problem be traced to a step rather than to a name on a document.',
        ],
        bodyAr: [
          'معرّف: رمز يميّز اللوط وحده، ويظهر في أوراق التسليم، ويفضّل أن يظهر على العبوة نفسها. ليس لازماً أن يكون معقّداً، بل لازم أن يكون متسقاً.',
          'تاريخ: متى أُنتجت المادة أو قُطّرت أو عُبّئت. والتواريخ أرخص ما يُسجَّل وأكثر ما يُغفل.',
          'وصف: النوع والشكل والمعالجة المطبَّقة. وهو ما يجعل السجل مفيداً لمشترٍ لم يحضر.',
          'وصلة بالجهة التي تعاملت معه: المُنتِج أو المُقطِّر أو المُعبِّئ، بحسب الحالة. وهي ما يسمح بتتبّع المشكلة إلى خطوة بدل اسم على ورقة.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'CITES_APPENDICES'],
    limitations:
      'This page sets out what a batch record should contain. It does not establish that any particular batch has one, and it does not verify a record\'s contents.',
    limitationsAr:
      'تصف هذه الصفحة ما ينبغي أن يحتويه سجل الدفعة. ولا تثبت أن دفعة بعينها لها سجل، ولا تتحقق من محتوى سجل.',
    nextSteps: ['Read how to match samples to bulk', 'Read about storage and batch records', 'Learn what to ask a supplier'],
    nextStepsAr: ['اقرأ كيف تطابق العينات بالجملة', 'اقرأ عن التخزين وسجلات الدفعات', 'اعرف ما الذي تسأل مورداً'],
    related: [
      { slug: 'sourcing/sample-to-bulk-matching', label: 'Match samples to bulk batches' },
      { slug: 'using-oud/storage-and-batch-records', label: 'Storage and batch records' },
      { slug: 'buying/supplier-questions', label: 'What to ask a supplier' },
    ],
  }),

  simpleGuide({
    slug: 'quality/photo-evidence-limits',
    parent: 'quality',
    title: 'What product photographs can establish',
    titleAr: 'ما الذي تثبته صور المنتج',
    summary:
      'What a photograph is good evidence for, and why a photo of resin is not evidence of resin content.',
    summaryAr: 'ما تصلح الصورة دليلاً عليه، ولماذا صورة الراتنج ليست دليلاً على نسبة الراتنج.',
    directAnswer:
      'A photograph is good evidence of form, of colour, of surface condition and of the difference between two lots presented side by side. It is poor evidence of anything quantitative. A well-lit image of resin beads establishes that resin is visible on that piece; it does not establish how much, it does not establish that the resin is natural rather than applied, and it does not establish that the piece in the photograph is the piece in the parcel.',
    directAnswerAr:
      'الصورة دليل جيد على الشكل واللون وحالة السطح، وعلى الفرق بين لوطَين يُعرضان جنباً إلى جنب. وهي دليل ضعيف على أي شيء كمّي. فصورة جيدة الإضاءة لحبات الراتنج تثبت أن راتنجاً ظاهراً على تلك القطعة، لا مقدار الراتنج، ولا أنه طبيعي لا مُضاف، ولا أن القطعة في الصورة هي نفسها في الطرد.',
    sections: [
      {
        heading: 'What a photograph is good for',
        headingAr: 'ما تصلح الصورة له',
        body: [
          'Form: the cut, the chip size, the block shape, the dust. A photograph saves a great deal of argument about what was offered.',
          'Condition: cracks, oil saturation at the surface, mould, the difference between a cleaned and an uncleaned lot.',
          'Comparison: two lots side by side under the same light, which is often the most useful thing a photograph can do and is not possible from a written description.',
          'What it cannot do is substitute for a measurement, a record or a test. Treat a photograph as evidence of appearance, and as a prompt for the questions it raises.',
        ],
        bodyAr: [
          'الشكل: القطع، وحجم الرقائق، وشكل الكتلة، والنشارة. فالصورة توفّر جدالاً كثيراً حول ما عُرض.',
          'الحالة: الشقوق، وتشبّع السطح بالزيت، والعفن، والفرق بين لوط منظَّف وآخر غير منظَّف.',
          'المقارنة: لوطان جنباً إلى جنب تحت ضوء واحد، وهي أحياناً أنفع ما تفعله الصورة، وهي غير ممكنة من وصف مكتوب.',
          'ولا تستطيع أن تحل محل قياس ولا سجل ولا اختبار. فتعامل مع الصورة كدليل على المظهر، وكأسئلة تثيرها.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'CITES_APPENDICES'],
    limitations:
      'This page describes what a photograph can and cannot support. It does not assess any particular photograph, lot or listing.',
    limitationsAr:
      'تصف هذه الصفحة ما تدعمه الصورة وما لا تدعمه. ولا تقيّم أي صورة أو لوط أو إعلان بعينه.',
    nextSteps: ['Read the limits of assessment', 'Learn how to evaluate an offer', 'Read how grading claims work'],
    nextStepsAr: ['اقرأ حدود التقييم', 'اعرف كيف تقيّم عرضاً', 'اقرأ كيف تعمل ادعاءات التقييم'],
    related: [
      { slug: 'quality/assessment-and-testing-limits', label: 'Assessment and testing limits' },
      { slug: 'buying/evaluating-an-offer', label: 'Evaluating a questionable offer' },
      { slug: 'quality/lab-report-reading', label: 'How to read the scope of a laboratory report' },
    ],
  }),

  simpleGuide({
    slug: 'buying/choosing-oud-wood',
    parent: 'buying',
    title: 'Choosing an oud wood purchase',
    titleAr: 'اختيار شراء خشب عود',
    summary:
      'What to settle before you buy wood, which claims to press on, and how to think about the price.',
    summaryAr: 'ما الذي يُحسم قبل شراء الخشب، وأي الادعاءات ينبغي الضغط عليها، وكيف تفكر في السعر.',
    directAnswer:
      'When buying wood, the decision is usually between three uses — distilling it yourself, burning it, or buying it as an object — and the right specification is different for each. For distillation, what matters is resin content and species, and the buyer is often better served by buying oil than by distilling. For burning, resin distribution and the cut matter more than any label. For an object, the piece has to be attractive, which is a different question from all of the above.',
    directAnswerAr:
      'عند شراء الخشب، يكون القرار غالباً بين ثلاثة استعمالات — التقطير بنفسك، أو الحرق، أو الشراء كقطعة — والمواصفة الصحيحة تختلف لكل منها. وللتقطير، تهم نسبة الراتنج والنوع، والمشتري غالباً أخدم له أن يشتري زيتاً بدل أن يقطّر. وللحرق، يهم انتشار الراتنج وشكل القطع أكثر من أي وسم. وللقطعة، يجب أن تكون القطعة السائبة، وهذا سؤال مختلف عن كل ما سبق.',
    sections: [
      {
        heading: 'Settle the use first',
        headingAr: 'حدّد الغرض أولاً',
        body: [
          'This sounds obvious and is routinely skipped, because the offer tends to arrive before the use is defined. A buyer who has not decided is easy to sell to, and the wrong material for the job looks exactly like the right material in a photograph.',
          'A second question is whether to buy wood at all. Distilling yields a fraction of the wood weight as oil, so a buyer who needs a specific quantity of oil is generally better served buying oil, unless the point is the distillation itself or the buyer has their own still.',
        ],
        bodyAr: [
          'يبدو هذا بديهياً ويُتجاوز عادةً، لأن العرض يصل قبل أن يُحدَّد الغرض. ومن لم يحسم بعد يسهل بيعه له، والمادة الخاطئة للغرض تبدو في الصورة تماماً كالمادة الصحيحة.',
          'والسؤال الثاني هو: هل نشتري الخشب أصلاً؟ فالتقطير ينتج جزءاً من وزن الخشب زيتاً، فالمشتري الذي يحتاج كمية محددة من الزيت أخدم له أن يشتري الزيت، إلا إذا كان الغرض هو التقطير نفسه أو كان له مختبره.',
        ],
      },
      {
        heading: 'What to press on',
        headingAr: 'ما الذي ينبغي الضغط عليه',
        body: [
          'The species, and whether the material is wild or cultivated. A resin content figure, if one is offered, and what method produced it. Whether the wood has been treated — and if so with what. The batch reference. And whether the price is for a specific lot or a market level, because a quoted price for a specific lot should travel with that lot.',
          'On price: wood is priced by weight, and resin content is what moves the price. A price per kilo with no resin content stated is a market level, and a market level moves. Ask whether the quote is held for a period, and against what.',
        ],
        bodyAr: [
          'النوع، وهل المادة برية أم مستزرعة. ونسبة الراتنج إن ذُكرت، وبأي طريقة قِيست. وهل عولج الخشب، وإن كان ذلك فبماذا. ومرجع الدفعة. وهل كان السعر لوطاً بعينه أم مستوى السوق، لأن سعر لوط بعينه ينبغي أن يسير معه.',
          'وفي السعر: الخشب يُسعَّر بالوزن، ونسبة الراتنج هي ما يحرّك السعر. وسعر الكيلو بلا نسبة راتنج مذكورة هو مستوى سوق، ومستوى السوق يتحرك. اسأل إن كان عرض السعر محفوظاً لفترة، وعلى أي أساس.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'CITES_APPENDICES'],
    limitations:
      'This page sets out what to settle and what to ask when buying wood. It does not recommend a supplier, publish a price, or state a resin threshold.',
    limitationsAr:
      'تصف هذه الصفحة ما ينبغي حسمه وسؤاله عند شراء الخشب. ولا ترشّح مورداً، ولا تنشر سعراً، ولا تضع عتبة لنسبة الراتنج.',
    nextSteps: ['Decide between wood and oil', 'Learn what to ask a supplier', 'Read how to evaluate an offer'],
    nextStepsAr: ['احسم بين الخشب والزيت', 'اعرف ما الذي تسأل مورداً', 'اعرف كيف تقيّم عرضاً'],
    related: [
      { slug: 'using-oud/wood-versus-oil', label: 'Wood versus oil: choose a format' },
      { slug: 'buying/supplier-questions', label: 'What to ask a supplier' },
      { slug: 'buying/evaluating-an-offer', label: 'Evaluating a questionable offer' },
      { slug: 'buying/net-weight-and-volume', label: 'Compare mass, volume and pack counts' },
    ],
  }),

  simpleGuide({
    slug: 'buying/choosing-oud-oil',
    parent: 'buying',
    title: 'Choosing an oud oil purchase',
    titleAr: 'اختيار شراء دهن عود',
    summary:
      'Concentration, carrier, ageing and provenance — the four questions that separate two oils that cost the same.',
    summaryAr: 'التركيز والحامل والتعتيق والمنشأ — الأسئلة الأربعة التي تفصل بين زيتين بسعر واحد.',
    directAnswer:
      'Two oils quoted at the same price per tola can be entirely different products, and the differences fall into four groups. Concentration: how much is actual distilled oil and how much is carrier. Carrier: what it is thinned with, because a carrier affects the scent, the behaviour in a formula and the regulatory position. Ageing: when it was distilled and how it has been stored, since oud oil changes over years. And origin: which plant it came from and by what method, which is what gives the oil its character and much of its price.',
    directAnswerAr:
      'قد يكون زيتان معروضان بالسعر نفسه لكل تولا منتجين مختلفين تماماً، وتعود الفروق إلى أربعة مجموعات. التركيز: كم هو زيت مقطّر فعلي وكم هو حامل. الحامل: ما الذي خُفِّف به، لأن الحامل يؤثر في الرائحة وفي السلوك في التركيبة وفي الوضع التنظيمي. التعتيق: متى قُطّر وكيف حُفظ، فالزيت يتغير عبر السنين. والمنشأ: من أي نبات جاء وبأي طريقة، وهو ما يمنحه طابعه وجزئاً كبيراً من سعره.',
    sections: [
      {
        heading: 'Concentration and carrier',
        headingAr: 'التركيز والحامل',
        body: [
          'Ask for the proportion of actual distilled oil. Oud oil is expensive enough that it is frequently sold diluted, and a diluted oil at a good-looking price is the most common way an expensive oil turns out to be a poor one.',
          'Ask what it is diluted with. A carrier is not a neutral detail: it changes how the oil behaves when it is used, how it ages, and in some jurisdictions what must be declared about it. A seller who cannot name the carrier has not handled the oil carefully, whatever else is true.',
        ],
        bodyAr: [
          'اسأل عن نسبة الزيت المقطّر الفعلي. فالزيت غالٍ بحيث يُباع مخففاً كثيراً، والزيت المخفف بسعر يبدو جيداً هو أشيع طريقة يتحول بها زيت غالٍ إلى رديء.',
          'اسأل بما خُفِّف به. والحامل ليس تفصيلاً محايداً: فهو يغيّر سلوك الزيت في الاستخدام، وطريقة تعتيقه، وفي بعض الاختصاصات ما يجب الإفصاح عنه. ومن لا يستطيع تسمية الحامل لم يتعامل مع الزيت بعناية مهما صحّ غير ذلك.',
        ],
      },
      {
        heading: 'Ageing and origin',
        headingAr: 'التعتيق والمنشأ',
        body: [
          'Aged oil and newly distilled oil are different products, and the market prices them differently. Ask for the distillation date, and ask how it has been stored since — heat and light change a distillate.',
          'Then ask the origin question: which plant, which method, and what establishes it. The distillation method matters as much as the plant, because copper and steam produce materially different oils from the same wood.',
        ],
        bodyAr: [
          'الزيت المعتّق والزيت المستحدث منتجان مختلفان، والسوق يسعّرهما مختلفين. اسأل عن تاريخ التقطير، واسأل كيف حُفظ منذ ذلك الحين — فالحرارة والضوء يغيّران النواتج.',
          'ثم اسأل سؤال المنشأ: أي نبات، وأي طريقة، وما الذي يثبتها. وطريقة التقطير تهم بقدر ما يهم النبات، لأن النحاس والبخار ينتجان زيوتاً مختلفة جوهرياً من الخشب نفسه.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'CITES_APPENDICES'],
    limitations:
      'This page sets out the questions that distinguish one oil from another. It does not recommend a supplier, publish a price, or state a concentration that constitutes quality.',
    limitationsAr:
      'تصف هذه الصفحة الأسئلة التي تميز زيتاً عن آخر. ولا ترشّح مورداً، ولا تنشر سعراً، ولا تحدد تركيزاً يُعدّ جودة.',
    nextSteps: ['Read how to compare two oil offers', 'Learn what to ask a supplier', 'Read about distillation methods'],
    nextStepsAr: ['اقرأ كيف تقارن عرضَي زيت', 'اعرف ما الذي تسأل مورداً', 'اقرأ عن طرق التقطير'],
    related: [
      { slug: 'buying/comparing-oud-oil-offers', label: 'Comparing oud oil offers' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'fragrance/concentration-labels', label: 'Understanding perfume concentration labels' },
    ],
  }),

  simpleGuide({
    slug: 'buying/comparing-oud-oil-offers',
    parent: 'buying',
    title: 'Comparing oud oil offers',
    titleAr: 'مقارنة عروض دهن العود',
    summary:
      'A side-by-side method for comparing two quotations that use the same words and describe different oils.',
    summaryAr: 'طريقة جنباً إلى جنب لمقارنة عرضَي سعر يستعملان الكلمات نفسها لوصف زيتين مختلفين.',
    directAnswer:
      'Comparing two oil quotations is not a matter of finding the cheaper one. Two quotations can use identical wording and describe materially different products, because the words that matter — Super, aged, Assam, pure — each carry several meanings in this trade. The comparison therefore starts by expanding each quotation into the same set of fields, and only then looking at the price. If a field cannot be filled in from the quotation, that gap is itself a finding.',
    directAnswerAr:
      'مقارنة عرضَي سعر ليس مسألة إيجاد الأخصم. فعرضان قد يستعملان الصياغة نفسها لوصف منتجين مختلفين جوهرياً، لأن الكلمات المهمة — «سوبر» و«معتّق» و«أسام» و«خالص» — تحمل كل منها عدة معانٍ في هذه التجارة. تبدأ المقارنة إذن بتوسيع كل عرض إلى المجموعة نفسها من الحقول، ثم فقط بالنظر في السعر. وحقل لا يمكن ملؤه من العرض هو بذاته نتيجة.',
    sections: [
      {
        heading: 'Expand each quotation into the same fields',
        headingAr: 'وسّع كل عرض إلى الحقول نفسها',
        body: [
          'For each quotation, fill in: species; form (pure oil, diluted, or an accord); the carrier and the proportion of actual oil; the distillation method; the distillation date; the storage since; the batch reference; the volume basis and the container; and the price per unit on that basis.',
          'Two quotations that agree on all of these are comparable, and the cheaper is the better buy. Two that differ anywhere are not comparable on price at all — the price difference is measuring two different things, and the comparison has to be redone in terms of what each actually delivers.',
        ],
        bodyAr: [
          'لكل عرض، املأ: النوع؛ الشكل (زيت خالص، مخفف، أو أوز)؛ الحامل ونسبة الزيت الفعلي؛ طريقة التقطير؛ تاريخ التقطير؛ التخزين منذ ذلك الحين؛ مرجع الدفعة؛ أساس الحجم والوعاء؛ والسعر للوحدة على ذلك الأساس.',
          'عرضان يتطابقان في كل ذلك قابلان للمقارنة، والأخصم هو الأفضل. وأي عرضان يختلفان في أي موضع ليسا قابلين للمقارنة بالسعر أصلاً — ففرق السعر يقيس شيئين مختلفين، وتُعاد المقارنة بعبارة ما يقدّمه كل منهما فعلاً.',
        ],
        callout: {
          title: 'The cheapest is often the most expensive',
          body:
            'A price per tola on a diluted oil, compared against a price per tola on a pure oil, makes the diluted oil look cheap while it is often the dearer purchase in practice. Compare the delivered quantity of actual oil, not the bottle.',
          bodyAr:
            'السعر لكل تولا على زيت مخفف، مقابل السعر لكل تولا على زيت خالص، يجعل المخفف يبدو رخيصاً وهو غالباً الأغلى شراءً. فقارن الكمية المسلَّمة من الزيت الفعلي، لا القارورة.',
        },
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'CITES_APPENDICES', 'AGARWOOD_REVIEW_2014', 'IFRA_STANDARDS'],
    limitations:
      'This page gives a method for comparing quotations. It does not compare any particular offers, publish prices, or establish the quality of any oil.',
    limitationsAr:
      'تعطي هذه الصفحة طريقة لمقارنة عروض الأسعار. ولا تقارن أي عروض بعينها، ولا تنشر أسعاراً، ولا تثبت جودة أي زيت.',
    nextSteps: ['Read how to read a quotation', 'Read how to compare supplier quotations', 'Learn what to ask a supplier'],
    nextStepsAr: ['اقرأ كيف تقرأ عرض السعر', 'اقرأ كيف تقارن عروض الموردين', 'اعرف ما الذي تسأل مورداً'],
    related: [
      { slug: 'sourcing/reading-a-quotation', label: 'Read a wholesale fragrance quotation' },
      { slug: 'sourcing/comparing-supplier-quotes', label: 'Compare supplier quotations without assuming equivalence' },
      { slug: 'buying/choosing-oud-oil', label: 'Choosing an oud oil purchase' },
    ],
  }),

  simpleGuide({
    slug: 'buying/evaluating-an-offer',
    parent: 'buying',
    title: 'Evaluating a questionable offer',
    titleAr: 'تقييم عرض مشكوك فيه',
    summary:
      'A structured way to test an offer that looks better than it should, without assuming fraud.',
    summaryAr: 'طريقة منظمة لاختبار عرض يبدو أفضل من اللازم، دون افتراض الاحتيال.',
    directAnswer:
      'An offer that looks too good is not evidence of a fake, and a genuine material is often cheaper than the market suggests. What is worth doing is running the offer through a fixed sequence of checks — identity, specification, record, price, consistency — so that a problem, if there is one, appears as a specific gap rather than as a vague unease. The sequence also produces a record you can use when you compare the next offer.',
    directAnswerAr:
      'العرض الذي يبدو أفضل من اللازم ليس دليل تزوير، فالمادة الأصلية كثيراً ما تكون أرخص مما يوحي السوق. وما يستحق الفعل هو تمرير العرض على تسلسل ثابت من الفحوص — الهوية، والمواصفة، والسجل، والسعر، والاتساق — حتى تظهر المشكلة، إن وُجدت، كفجوة محددة لا كقلق غامض. ويُنتج هذا التسلسل أيضاً سجلاً تصلح للمقارنة بالعرض التالي.',
    sections: [
      {
        heading: 'The five checks',
        headingAr: 'الفحوص الخمسة',
        body: [
          'Identity: can the seller say which organisation this is, and does the contact route match the organisation? A name alone is not identity; a trading name, a registry reference and a consistent contact route together are.',
          'Specification: can every material claim be restated in a form that could be checked — species, form, treatment, concentration? If the description consists only of adjectives, there is nothing to check.',
          'Record: is there a batch reference, and is it the same one that would appear on the delivery?',
          'Price: does the price correspond to the specification on the same basis, and is it held or indicative?',
          'Consistency: do the answers to the earlier questions hold together? A detailed, confident description of a batch that has no reference, a price that is far below the specification, and a contact route that answers to a different organisation are three separate signals, and any one of them is worth stopping on.',
        ],
        bodyAr: [
          'الهوية: هل يستطيع البائع تسمية المنشأة، وهل قناة الاتصال تطابق المنشأة؟ فالاسم وحده ليس هوية؛ أما الاسم التجاري والمرجع السجلي وقناة اتصال متسقة مجتمعةً فهي هوية.',
          'المواصفة: هل يمكن إعادة صياغة كل ادعاء عن المادة بصيغة قابلة للتحقق — النوع والشكل والمعالجة والتركيز؟ فإن كان الوصف صفات فقط، فلا شيء فيه يُحقق.',
          'السجل: هل هناك مرجع دفعة، وهل هو المرجع نفسه الذي سيظهر على التسليم؟',
          'السعر: هل يطابق السعر المواصفة على الأساس نفسه، وهو محفوظ أم إرشادي؟',
          'الاتساق: هل تصمد الإجابات عن الأسئلة السابقة معاً؟ فوصف تفصيلي واثق لدفعة بلا مرجع، وسعر أدنى بكثير من المواصفة، وقناة اتصال تجيب باسم منشأة أخرى — ثلاث إشارات منفصلة، وأي واحدة منها تستوجب التوقف.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'CITES_APPENDICES'],
    limitations:
      'This page gives a checking sequence. It does not assess any particular offer, and it does not establish whether any supplier is genuine — that is a research task, not a checklist.',
    limitationsAr:
      'تعطي هذه الصفحة تسلسل فحص. ولا تقيّم أي عرض بعينه، ولا تثبت هل أي مورد أصيل — فذلك مهمة بحث لا قائمة تحقق.',
    nextSteps: ['Learn what to ask a supplier', 'Read how a document can be reviewed', 'See how to compare two quotations'],
    nextStepsAr: ['اعرف ما الذي تسأل مورداً', 'اقرأ كيف تُراجع وثيقة', 'اعرف كيف تقارن عرضَي سعر'],
    related: [
      { slug: 'buying/supplier-questions', label: 'What to ask a supplier' },
      { slug: 'trade/document-review-limits', label: 'What reviewing a document can establish' },
      { slug: 'sourcing/comparing-supplier-quotes', label: 'Compare supplier quotations without assuming equivalence' },
    ],
  }),

  simpleGuide({
    slug: 'buying/supplier-questions',
    parent: 'buying',
    title: 'What to ask a supplier',
    titleAr: 'ما الذي تسأل المورد',
    summary:
      'The questions a capable supplier answers directly and others avoid — and why the avoiding is the signal.',
    summaryAr: 'الأسئلة التي يجيب عنها المورد الكفء مباشرةً والتي يتفاداها غيره — ولماذا التجنب هو الإشارة.',
    directAnswer:
      'The useful questions are the ones a supplier should be able to answer without hesitating: which species and which origins, which product families, which destinations they ship to, their minimum order, how a batch is identified, what treatment the material received, and what documentation accompanies a shipment. A supplier who answers all of these plainly is telling you something real about how they operate. One who cannot answer the first two is not ready to take your order, whatever the price.',
    directAnswerAr:
      'الأسئلة النافعة هي التي ينبغي أن يجيب عنها المورد دون تردد: أي نوع وأي أصول، وأي أصناف منتجات، وإلى أي وجهات يشحن، وما حدّه الأدنى للطلب، وكيف تُعرَّف الدفعة، وما المعالجة التي حُصلت على المادة، وأي وثائق ترافق الشحنة. ومن يجيب عن هذه كلها بوضوح فقد أخبرك بشيء حقيقي عن طريقة عمله. ومن لا يستطيع إجابة أول سؤالين فهو غير جاهز لتقبل طلبك مهما كان السعر.',
    sections: [
      {
        heading: 'The questions, and what each is really testing',
        headingAr: 'الأسئلة، وما الذي تختبره كل واحد في الحقيقة',
        body: [
          'Which species do you work with, and from which origins? This tests whether the supplier knows their own supply chain, and it is the question that a good answer makes easy to verify later.',
          'Which product families do you supply? A supplier that answers "everything" has not answered.',
          'Which destinations do you ship to, and with what documentation? A supplier who cannot name the destinations they work with is not a supplier for a specific destination.',
          'What is your minimum order, and does it vary by format? A minimum that exists only in the headline is not a constraint.',
          'How is a batch identified, and can you show me the record? This is the question that separates a supplier with a system from one with a stockroom.',
          'What treatment does the material receive before it is offered? Fumigation, steam, impregnation — the answer changes both the weight and the price.',
          'What documentation travels with a shipment? For a CITES-listed species this is not optional.',
        ],
        bodyAr: [
          'أي نوع تتعاملون معه، ومن أي أصول؟ هذا يختبر هل يعرف المورد سلسلة توريده، وهو سؤال يجعل الإجابة الجيدة سهلة التحقق لاحقاً.',
          'ما أصناف المنتجات التي توردونها؟ ومن أجاب «كل شيء» فقد لم يجب.',
          'إلى أي وجهات تشحنون، وبأي وثائق؟ ومن لا يستطيع تسمية الوجهات التي يعمل بها ليس مورداً لوجهة بعينها.',
          'ما حدّكم الأدنى للطلب، وهل يختلف بحسب الشكل؟ والحدّ الموجود في العنوان وحده ليس قيداً.',
          'كيف تُعرَّف الدفعة، وهل يمكنني رؤية السجل؟ هذا هو السؤال الذي يفصل بين مورد له نظام وآخر له مستودع.',
          'ما المعالجة التي تتلقاها المادة قبل عرضها؟ التبخير، أو البخار، أو النقع — والجواب يغيّر الوزن والسعر معاً.',
          'ما الوثائق التي ترافق الشحنة؟ وبالنسبة لنوع مشمول بسايتس فالأمر ليس اختيارياً.',
        ],
        callout: {
          title: 'An evaded question is an answer',
          body:
            'Not every evasive supplier is dishonest, and a supplier new to the market may not have a record to show yet. But a question that is answered with a question, or with a return to the price, is a finding you should record.',
          bodyAr:
            'ليس كل مورد يتجنّب السؤال غير صادق، وقد يكون مورد جديد على السوق لا يملك سجلاً لعرضه بعد. لكن السؤال الذي يُجاب بسؤال، أو بالعودة إلى السعر، نتيجة ينبغي تسجيلها.',
        },
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'CITES_APPENDICES'],
    limitations:
      'This page lists questions and what each tests. It does not assess any supplier, and a good answer is not by itself proof of anything — it is a basis for further checking.',
    limitationsAr:
      'تصف هذه الصفحة الأسئلة وما الذي يختبره كل منها. وهي لا تقيّم أي مورد، والإجابة الجيدة ليست بذاتها دليل على شيء — بل أساس لمزيد من التحقق.',
    nextSteps: ['Read how to evaluate an offer', 'Read about the supplier\'s verification scope', 'Read how to compare quotations'],
    nextStepsAr: ['اقرأ كيف تقيّم عرضاً', 'اقرأ عن نطاق توثيق المورد', 'اقرأ كيف تقارن عروض الأسعار'],
    related: [
      { slug: 'buying/evaluating-an-offer', label: 'Evaluating a questionable offer' },
      { slug: 'sourcing/business-evidence-checklist', label: 'Business evidence and verification scope' },
      { slug: 'sourcing/comparing-supplier-quotes', label: 'Compare supplier quotations without assuming equivalence' },
    ],
  }),

  simpleGuide({
    slug: 'buying/net-weight-and-volume',
    parent: 'buying',
    title: 'Compare mass, volume and pack counts',
    titleAr: 'قارن بين الكتلة والحجم وعدد العبوات',
    summary:
      'Why three different quantity figures appear on the same product, and how to convert between them.',
    summaryAr: 'لماذا تظهر ثلاثة أرقام مختلفة للكمية على المنتج نفسه، وكيف تُحوَّل فيما بينها.',
    directAnswer:
      'Three numbers are in play on a packaging list and they are not interchangeable: net mass, gross mass including the container, and volume. Oud oil is sold by weight in a small unit, by volume in larger ones, and by pack count for finished goods. A buyer who compares a price per kilo against a price per bottle is not comparing prices at all. The conversion needs a density, and density varies with the oil, the carrier and the temperature — so a stated conversion is only as good as the figure behind it.',
    directAnswerAr:
      'ثلاثة أرقام تتداول في كشف التعبئة وليست قابلة للتبادل: الكتلة الصافية، والكتلة الإجمالية شاملةً الوعاء، والحجم. ويُباع دهن العود بالوزن بوحدة صغيرة، وبالحجم في العبوات الأكبر، وبعدد العبوات للمستلزمات المنتهية. ومن يقارن سعر الكيلو بسعر القارورة لا يقارن أسعاراً أصلاً. والتحويل يحتاج كثافة، والكثافة تختلف بحسب الزيت والحامل والحرارة — فالسعر المحوَّل ليس أفضل من الرقم الذي يستند إليه.',
    sections: [
      {
        heading: 'The three numbers, and the conversion',
        headingAr: 'الأرقام الثلاثة، والتحويل',
        body: [
          'Net mass is the product alone. Gross mass adds the container, and for a small bottle the container is not a trivial fraction. Volume is what fills the container, and a volume of oil and a mass of oil differ by the density.',
          'The unit in oud trade is the tola. Ask for the basis of any conversion the supplier offers: net or gross, at what temperature, and for which oil. A supplier that converts without stating the basis is guessing, and a buyer who accepts an unstated conversion is paying for the guess.',
        ],
        bodyAr: [
          'الكتلة الصافية هي المنتج وحده. والإجمالية تضيف الوعاء، وللزجاجة الصغيرة ليس الوعاء جزءاً تافهاً. والحجم هو ما يملأ الوعاء، وحجم الزيت يختلف عن كتلته بالكثافة.',
          'والوحدة في تجارة العود هي التولا. اسأل عن أساس أي تحويل يقدّمه المورد: صافي أم إجمالي، عند أي درجة حرارة، ولأي زيت. ومن يحوّل دون ذكر الأساس فهو يخمّن، ومن يقبل تحويلاً بلا أساس يدفع ثمن التخمين.',
        ],
      },
    ],
    sourceIds: ['FAOLEX', 'CITES_APPENDICES'],
    limitations:
      'This page explains the difference between quantity measures. It does not state a density for any oil, and any conversion a supplier offers remains that supplier\'s figure until it is checked.',
    limitationsAr:
      'تشرح هذه الصفحة الفرق بين مقاييس الكمية. ولا تذكر كثافة أي زيت، ويبقى أي تحويل يقدّمه المورد رقمه هو حتى يُفحص.',
    nextSteps: ['Read about the tola', 'Read how to compare two oil offers', 'Read how to read a quotation'],
    nextStepsAr: ['اقرأ عن التولا', 'اقرأ كيف تقارن عرضَي زيت', 'اقرأ كيف تقرأ عرض السعر'],
    related: [
      { slug: 'glossary/tola', label: 'Tola: the weight unit in the oud trade' },
      { slug: 'buying/comparing-oud-oil-offers', label: 'Comparing oud oil offers' },
      { slug: 'sourcing/reading-a-quotation', label: 'Read a wholesale fragrance quotation' },
    ],
  }),

  simpleGuide({
    slug: 'buying/buying-bakhoor',
    parent: 'buying',
    title: 'Buying bakhoor with clear composition information',
    titleAr: 'شراء البخور بمعلومات تركيب واضحة',
    summary:
      'Bakhoor varies enormously because the oil in it varies. How to find out what is actually in the jar.',
    summaryAr: 'البخور يختلف كثيراً لأن الزيت فيه يختلف. كيف تعرف ما في العبوة فعلاً.',
    directAnswer:
      'Bakhoor is wood infused with oil rather than distilled, so its quality depends on two things at once: the wood and the oil, and the ratio between them. Because the oil may be a genuine distillation, a blend, or an accord, and because the infusion ratio is not standardised, two products described identically can differ enormously. A buyer should therefore ask about the oil, ask about the wood, and ask how the two are combined — and accept a supplier who says the oil is an accord as a supplier who has answered honestly.',
    directAnswerAr:
      'البخور خشب مُشبَّع بالزيت لا مقطَّر، فجودته تعتمد على شيئين معاً: الخشب والزيت والنسبة بينهما. ولأن الزيت قد يكون تقطيراً حقيقياً أو مزيجاً أو أوزاً، ولأن نسبة النقع غير موحّدة، فإن منتجين موصوفين بالطريقة نفسها قد يختلفان اختلافاً كبيراً. فعلى المشتري أن يسأل عن الزيت، وعن الخشب، وعن طريقة جمعهما — ويقبل البائع الذي يقول إن الزيت أوز على أنه أجاب بصدق.',
    sections: [
      {
        heading: 'Three things to establish',
        headingAr: 'ثلاثة أمور ينبغي حسمها',
        body: [
          'The oil: is it a genuine distillation, a blend, or an accord? A supplier who states which is better than one who implies it, because "oud oil" in a bakhoor context may be any of the three.',
          'The wood: which species, and is it the same wood you would buy for distillation? Bakhoor made from good distillation chips and bakhoor made from low-grade chips saturated heavily with scent are different products that may look similar.',
          'The combination: how much oil per unit of wood, and by what method. A heavy infusion in a strong oil reads as powerful and burns differently from a lighter one.',
        ],
        bodyAr: [
          'الزيت: أهو تقطير حقيقي أم مزيج أم أوز؟ والبائع الذي يحدد أيها أفضل ممن يلمّح، لأن «دهن العود» في سياق البخور قد يكون أيًّا من الثلاثة.',
          'الخشب: أي نوع، وهل هو الخشب نفسه الذي تشتريه للتقطير؟ فالبخور المصنوع من رقائق تقطير جيدة وآخر من رقائق رديئة مشبَّعة بزيت ثقيل منتجان مختلفان قد يبانان متشابهين.',
          'الجمع: كم زيتاً لكل وحدة خشب، وبأي طريقة. فالنقع الغزير في زيت قوي يبدو قوياً ويحترق بطريقة مختلفة عن الخفيف.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'CITES_APPENDICES'],
    limitations:
      'This page explains what determines a bakhoor product. It does not assess any particular bakhoor, and it does not establish an infusion ratio that constitutes quality.',
    limitationsAr:
      'تصف هذه الصفحة ما يحدد منتج البخور. ولا تقيّم أي بخور بعينه، ولا تثبت نسبة نقع تُعدّ جودة.',
    nextSteps: ['Read bakhoor against raw wood', 'Read what an oud accord is', 'Read how to evaluate an offer'],
    nextStepsAr: ['اقرأ البخور مقابل الخشب الخام', 'اقرأ ما هو أوز العود', 'اقرأ كيف تقيّم عرضاً'],
    related: [
      { slug: 'fragrance/bakhoor-versus-raw-wood', label: 'Bakhoor and raw oud wood' },
      { slug: 'fragrance/oud-accords', label: 'Oud accords in fragrance composition' },
      { slug: 'buying/evaluating-an-offer', label: 'Evaluating a questionable offer' },
    ],
  }),

  simpleGuide({
    slug: 'buying/wholesale-versus-retail',
    parent: 'buying',
    title: 'Wholesale versus retail purchasing',
    titleAr: 'الشراء بالجملة مقابل التجزئة',
    summary:
      'When retail is the cheaper route, when it is not, and what each is actually buying.',
    summaryAr: 'متى يكون التجزئة أرخص، ومتى لا يكون، وما الذي تشتريه كل واحدة في الواقع.',
    directAnswer:
      'Retail is often the cheaper way to obtain a small quantity of a good oil, and it is almost always the more expensive way to obtain a large one. The crossover depends on the seller, not on the channel. What differs is not only price: retail purchases are governed by a retailer\'s terms with no batch record behind them, while wholesale purchases are built around a specification, a record and a comparison. For a buyer who needs to know what they have, the wholesale route is the one that produces documentation.',
    directAnswerAr:
      'التجزئة غالباً أرخص طريقة للحصول على كمية صغيرة من زيت جيد، وكلما كبرت الكمية كانت أغلى طريقة للحصول على كمية كبيرة. ونطة التقاطع تعتمد على البائع لا على القناة. والفرق ليس في السعر فقط: فمشتريات التجزئة يحكمها عقد البائع بلا سجل دفعة خلفها، بينما مشتريات الجملة مبنية على مواصفة وسجل ومقارنة. ولمن يحتاج أن يعرف ما لديه، فطريق الجملة هو الذي ينتج توثيقاً.',
    sections: [
      {
        heading: 'Choosing the route',
        headingAr: 'اختيار الطريق',
        body: [
          'Buy retail to learn: to smell a material before committing to a sample set, or to obtain a personal quantity. The transaction is a purchase of goods, and the documentation ends at the receipt.',
          'Buy wholesale to specify: when you need a defined quantity of a defined material, a record to match it against a later delivery, and a comparison across several suppliers. The documentation continues past the receipt.',
          'The practical warning is that a retail purchase can be mistaken for a wholesale one when the quantity is small, and the absence of a record is then discovered later, at the point of re-ordering.',
        ],
        bodyAr: [
          'اشترِ تجزئةً لتتعلّم: لتشمّ مادة قبل الالتزام بمجموعة عينات، أو للحصول على كمية شخصية. والمعاملة شراءُ بضائع، والتوثيق ينتهي عند الإيصال.',
          'اشترِ بالجملة لتحدد: حين تحتاج كمية محددة من مادة محددة، وسجلاً تطابقها به بتسليم لاحق، ومقارنة بين عدة موردين. والتوثيق يمتد بعد الإيصال.',
          'والتحذير العملي أن مشتريات التجزئة قد تُخلط بالجملة حين تكون الكمية صغيرة، فيُكتشف غياب السجل لاحقاً عند إعادة الطلب.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'CITES_APPENDICES', 'AGARWOOD_REVIEW_2014'],
    limitations:
      'This page compares two purchasing routes in general terms. It does not name a retailer or a wholesaler, and it does not set a price at which one route becomes cheaper.',
    limitationsAr:
      'تقارن هذه الصفحة طريقين للشراء بصورة عامة. ولا تسمّي متجراً ولا مورداً، ولا تضع سعراً يتحول عنده أحد الطريقين إلى الأرخص.',
    nextSteps: ['Read the sample plan', 'Read about a wholesale quotation', 'Read how to compare quotations'],
    nextStepsAr: ['اقرأ خطة العيّنات', 'اقرأ عن عرض سعر الجملة', 'اقرأ كيف تقارن عروض الأسعار'],
    related: [
      { slug: 'sourcing/wholesale-sample-plan', label: 'Build a wholesale oud sample plan' },
      { slug: 'sourcing/reading-a-quotation', label: 'Read a wholesale fragrance quotation' },
      { slug: 'sourcing/comparing-supplier-quotes', label: 'Compare supplier quotations without assuming equivalence' },
    ],
  }),
];
