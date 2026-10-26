import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

/**
 * The OudGuide oud authenticity protocol.
 *
 * The second unowned moat from the 2026-10-26 landscape audit. The
 * community threads put "is this real oud?" as the buyer's first
 * question, and it is answered today by scattered vendor folklore —
 * a burn test here, a float test there, a "trust the smell" there —
 * each standing on its own, none of them in sequence, none of them
 * saying what a step establishes and what it does not.
 *
 * This page is the ordered synthesis: the five checks a buyer can
 * run alone, in the order that keeps the physical evidence leading
 * the price question, and the two instruments that actually carry
 * evidence on their own. It is OudGuide's own contribution and it
 * carries no field visit, no laboratory result and no certification
 * claim; it states its own limit the way the corpus states limits.
 *
 * It is a `guide`, so it is judged on the 600-word floor and it must
 * clear source-breadth; it declares a `dataset` so the page also
 * emits a Dataset schema, the way the two original-data records do.
 */
export const oudAuthenticityProtocolArticles: Article[] = [
  simpleGuide({
    slug: 'quality/oud-authenticity-protocol',
    parent: 'quality',
    title: 'The OudGuide oud authenticity protocol',
    titleAr: 'بروتوكول دليل العود للتحقق من أصالة العود',
    summary:
      'The five checks a buyer can run on a lot of oud, in a fixed order — resin, density, burn, scent persistence and price — and, read separately, the one laboratory test and the one document that actually carry evidence. What each step establishes, what it does not, and how to read the results together.',
    summaryAr:
      'التحققات الخمس التي يستطيع المشتري إجراؤها على لوط من العود بترتيب ثابت — راتنج وكثافة وحرق وديمومة الرائحة وسعر — وتُقرأ على حياد، الأداة المخبرية الوحيدة والوثيقة الوحيدة اللتان تحملان دليلًا فعلًا. ما تثبته كل خطوة وما لا تثبته، وكيف تُقرأ النتائج معًا.',
    directAnswer:
      'The practical way to check a lot of oud is to run five physical checks in a fixed order — look at the resin, test the density, burn a sample, judge the scent persistence, and set the price against the documented range for the claimed grade — and then, read on their own, the two instruments that actually carry evidence: the laboratory test and the conservation paperwork. The five checks are signals, not a verdict: each establishes a narrow thing, and a capable counterfeiter can pass all five. The laboratory test is the only check that can say what the material is. The paperwork is the only statement where a false claim has a legal consequence. No single step authenticates the lot; the protocol is the ordered set of questions a capable supplier can answer and a careless one cannot.',
    directAnswerAr:
      'الوسيلة العملية للتحقق من لوط العود هي إجراء خمس فحوصات مادية بترتيب ثابت — النظر إلى الراتنج، واختبار الكثافة، وحرق عينة، وحكم ديمومة الرائحة، ومقارنة السعر بالنطاق الموثّق للدرجة المعلنة — ثم، على حياد، الأداتان اللتان تحملان دليلًا فعلًا: الفحص المخبري والأوراق البيئية. والفحوصات الخمس إشارات لا حكم؛ إذ تثبت كلٌّ منها أمرًا ضيّقًا، وقد يجتاز مغشِّش كفء الجميع. والفحص المخبري هو الفحص الوحيد القادر على قول ما عليه المادة. والأوراق هي البيان الوحيد الذي يترتب على كذبه عاقبة قانونية. ولا تثبت خطوة واحدة اللوط؛ فالبروتوكول هو الأسئلة المرتّبة التي يستطيع مورد كفء أن يجيبها ويفشل عليها متهوّر.',
    sections: [
      {
        heading: 'Run the checks in a fixed order',
        headingAr: 'أجِ الفحوصات بترتيب ثابت',
        body: [
          'The order matters because each later check tells you how to read the earlier ones. Start with the resin, because a non-resinous piece is not in the running at all, and because the resin is what every other check is measuring a proxy for. Then density, then the burn, then scent persistence, then price. A buyer who runs the price check first has already decided what the lot is and will bend the physical evidence to fit it; the fixed order keeps the physical evidence leading the price question rather than the reverse. It is also the order in which a competent supplier expects to be asked, which is itself a test: a supplier who will not be answered in the order is telling you something before the first check has run.',
        ],
        bodyAr: [
          'يهمّ الترتيب لأن كل فحص لاحق يخبرك كيف تقرأ الفحوص السابقة. ابدأ بالراتنج لأن قطعة غير راتنجية خارج الحسبان أصلًا، ولأن الراتنج هو ما تقيس سائر الفحوصات بديلًا عنه. ثم الكثافة، ثم الحرق، ثم ديمومة الرائحة، ثم السعر. ومشتري يبدأ بفحص السعر قد حكم سلفًا على اللوط وسينحّي الدليل المادي ليلائمه؛ والترتيب الثابت يجعل الدليل المادي يقود سؤال السعر لا العكس. وهو أيضًا الترتيب الذي يتوقع مورد كفء أن يُسأل به، وهو في ذاته اختبار؛ فالمورد الذي يمتنع عن الإجابة بالترتيب يقول لك شيئًا قبل أن يُجرى الفحص الأول.',
        ],
      },
      {
        heading: 'Step one: the resin, visually',
        headingAr: 'الخطوة الأولى: الراتنج، بصريًا',
        body: [
          'Resin content is the property the whole trade prices, and the visual is the only check a buyer can do without burning anything. Look for the dark bands, the heavier hand, and the way the resin sits in the grain. A piece with visible resin is resinous, which is necessary: it tells you the material is in the class you are buying. It is not sufficient: an adulterated or blended piece will show resin and still be misrepresented in grade or origin. The visual cannot measure the resin, name the species, or say whether the piece is genuine agarwood or a resin-stained imitation. It sets the floor of the question, not its answer.',
        ],
        bodyAr: [
          'محتوى الراتنج هو الصفة التي تسعّر بها التجارة كلها، والفحص البصري هو الفحص الوحيد الذي يستطيع المشتري إجراؤه دون حرق أي شيء. انظر إلى الأشرطة الداكنة والوزن الأثقل وإلى كيف يستقر الراتنج في الليف. والقطعة ذات الراتنج الظاهر راتنجية، وهذا شرط لازم؛ فإنه يخبرك أن المادة في الفئة التي تشتريها. وهو ليس كافيًا؛ فالمادة المُخدَّصة أو المخلوطة ستُظهر راتنجًا وتبقى ممثَّلةً في درجتها أو منشئها. ويعجز الفحص البصري عن قياس الراتنج، أو تسمية النوع، أو قول ما إذا كانت القطعة عودًا حقًّا أم تقليدًا مُلوَّنًا بالراتنج. إنه يحدد أرضية السؤال لا جوابه.',
        ],
      },
      {
        heading: 'Step two: the density, and what it does not prove',
        headingAr: 'الخطوة الثانية: الكثافة، وما لا تثبته',
        body: [
          'A sinking test measures density, which is a correlate of resin content, not a measure of it. Dense material holds more resin, so the sink tells you the material is resinous in degree; it does not tell you it is agarwood rather than a dense imitation, and it does not name the species or the origin. A counterfeiter can add a dense resin or a dense filler and pass the test, which is why the density check must never be the last word. Take the result the test gives — the material is heavier or lighter than the class it is sold in — and carry it forward as one of several signals, not as the verdict.',
        ],
        bodyAr: [
          'اختبار الغرق يقيس الكثافة، وهي مترابطة مع محتوى الراتنج لا مقياس له. فالمادة الكثيفة تحمل راتنجًا أكثر، فيخبرك الغرق أن المادة راتنجية في مقدار؛ ولا يخبرك أنها عود لا مقلَّد كثيف، ولا يسمّي النوع ولا المنشأ. ويمكن لمغشّش أن يضيف راتنجًا كثيفًا أو حشوًا كثيفًا ويجتاز الفحص، ولهذا لا يكون فحص الكثافة الكلمة الأخيرة أبدًا. خذ ما يعطيه الفحص — المادة أثقل أم أخف من الفئة التي تُباع فيها — وانقله كإحدى الإشارات لا كحكم.',
        ],
      },
      {
        heading: 'Step three: the burn',
        headingAr: 'الخطوة الثالثة: الحرق',
        body: [
          'The burn is the field test buyers actually run, because a lot is not going to be sent to a laboratory for every purchase. A sample is burned and the buyer judges the smoke, the residue, and the scent it throws off as it burns and after it cools. The burn separates the material that burns cleanly and scatters a persistent resin scent from the material that burns like wood, leaves a greasy or ashy residue, or gives a flat, short scent. It is a strong signal, but it is still the buyer\'s own judgement: it tells you about the behaviour of the material in front of you, not its identity. A well-made imitation will burn like oud; the burn does not name the material, and a seller cannot re-run it identically after you have broken off the sample.',
        ],
        bodyAr: [
          'الحرق هو الفحص الميداني الذي يجريه المشترون فعلًا، لأن اللوط لن يُرسَل إلى مختبر لكل عملية. تحرق عينة ويحكم المشتري على الدخان والراسب وعلى الرائحة التي تنبعث أثناء الحرق وبعده. ويفصل الحرق المادة التي تحترق بوضوح وتبعث رائحة راتنج باقية عن المادة التي تحترق كخشب وتترك راسبًا دهنيًا أو رمادًا، أو تعطي رائحة مسطحة قصيرة. وهو إشارة قوية، لكنه حكم المشتري هو؛ فيخبرك بسلوك المادة أمامك لا بهويتها. ومقلَّد صالح يحترق كعود؛ والحرق لا يسمّي المادة، ولا يمكن للبائع أن يكرّره على نحو مماثل بعد أن كسرتَ العينة.',
        ],
      },
      {
        heading: 'Step four: scent persistence',
        headingAr: 'الخطوة الرابعة: ديمومة الرائحة',
        body: [
          'Once the sample has cooled, the persistence of the scent is the check a fragrance buyer leans on, and the one most often used to cut corners. A resinous piece scatters a scent that lingers on the skin and in the room; a thin, resinated-but-weak piece fades quickly, and an oil-injected or blended piece can smell flat or greasy. Persistence tells you about concentration and about the character of the material; it does not authenticate it. A blend of a cheap oil into a resinated filler can pass a persistence check that a buyer reads as "it keeps going," and the only check that separates the two is the laboratory, which is why persistence is step four and not the answer.',
        ],
        bodyAr: [
          'بعد أن تبرد العينة، ديمومة الرائحة هي الفحص الذي يعتمد عليه مشتري العطر، وهو أكثر فحوصات يُقصّر فيها الناس. والقطعة الراتنجية تبعث رائحة تدوم على الجلد وفي الغرفة؛ والقطعة الراتنجية الرقيقة تخفت سريعًا، ويمكن للقطعة المحقونة بزيت أو المخلوطة أن تعطي رائحة مسطحة أو دهنية. والديمومة تخبرك عن التركيز وطابع المادة؛ ولا توثّقها. ومزيج من زيت رخيص في حشو راتنجي يجتاز فحص ديمومة يقرأه المشتري «أنها تستمر»، والتمييز بينهما إنما يفعله المختبر وحده، ولهذا هي الخطوة الرابعة لا الجواب.',
        ],
      },
      {
        heading: 'Step five: the price, read against the documented range',
        headingAr: 'الخطوة الخامسة: السعر، يُقرأ على النطاق الموثّق',
        body: [
          'The price is the check that ties the whole set of claims together, and the strongest single signal that one of them is false. The trade has a documented range — the observation baseline in this guide records it — for a claimed grade in a given market and form, and a price below that range means one of the two claims is false: the grade is lower than stated, or the material is not what it is called. A capable supplier answers which, and names the basis; a careless one does not. The price does not by itself say the lot is real; it says that a claim is being pressed. Read it with the four physical results, and use the document and the laboratory to close whatever the price has opened.',
        ],
        bodyAr: [
          'السعر هو الفحص الذي يجمع سائر الادعاءات، وهو أقوى إشارة بمفردها إلى أن أحدها زائف. وللدرجة المعلنة سوقًا وشكلًا نطاق موثّق — يسجّله خطّ الأساس المرصود في هذا الدليل — وسعر أدنى من ذلك النطاق يعني أن أحد الادعاءين زائف: إما أن الدرجة أدنى مما ذُكر، أو أن المادة ليست ما تُسمّى. ويردّ مورد كفء أيهما ويبيّن الأساس؛ ولا يردّ متهوّر. ولا يقول السعر وحده إن اللوط حقيقي؛ بل يقول إن ادعاءً يُضغط. اقرأه مع النتائج الأربع المادية، واستعن بالوثيقة والمختبر لتغلق ما فتحه السعر.',
        ],
      },
      {
        heading: 'The two instruments that carry evidence on their own',
        headingAr: 'الأداتان اللتان تحملان دليلًا بذاتهما',
        body: [
          'Two instruments sit outside the five signals and must be read separately. The laboratory test — chromatography and mass spectrometry, in the trade\'s usage — is the only check that can say what the material is, in the sense that no physical signal can; it names the compounds present. It does not name the species, the age or the origin of the lot, and a clean report does not authenticate the lot, because a sample can be substituted for what was purchased. The conservation paperwork is the only statement where a false claim has a consequence: every agarwood-producing species is in the trade\'s Appendix II listing, so a legal import carries an export or re-export permit, and the permit is a statement the issuing authority is accountable for. The two are checked separately from the physical signals, and a lot can pass the five checks and still fail one of these two, or pass both and still be misrepresented in marketing.',
        ],
        bodyAr: [
          'أداتان خارجا الإشارتين الخمس وتُقرأان على حياد. الفحص المخبري — الكروماتوغرافيا وتحليل الطيف الكتلي على تعبير التجارة — هو الفحص الوحيد القادر على قول ما عليه المادة بالمعنى الذي لا تبلغه إشارة مادية؛ فإنه يسمّي المركبات الموجودة. ولا يسمّي النوع ولا العمر ولا منشأ اللوط، ولا يوثّق تقرير نظيف اللوط، لأن العينة قد تُبْدَل بما أُشترى. والأوراق البيئية هي البيان الوحيد الذي يترتب على كذبه عاقبة؛ فكل نوع منتج للعود مدرج في الملحق الثاني للتجارة، فيحمل الاستيراد المشروع تصريح تصدير أو إعادة تصدير، والتصريح بيان مسؤول عنه الجهة المصدِّرة. ويُفحص الأمران عن الإشارات المادية، ويمكن للوط أن يجتاز الفحوص الخمس ويفشل في واحد منهما، أو يجتازهما ويبقى ممثَّلًا في التسويق.',
        ],
      },
    ],
    sourceIds: [
      'ITTO_AGARWOOD_REVIEW',
      'AGARWOOD_REVIEW_2014',
      'TRAFFIC_UAE_AGARWOOD_TRADE',
      'CITES_AGARWOOD_2004',
    ],
    dataset: {
      variableMeasured: [
        'check',
        'what it establishes',
        'what it does not establish',
        'order in which it is run',
        'result a capable counterfeiter can produce',
        'result a careful supplier produces',
      ],
    },
    workedExample: {
      situation:
        'This is a hypothetical example, not a real transaction. A buyer is offered a lot described as "wild, super grade" at a price near the bottom of the documented range for that grade. The supplier will run a burn and a sinking test on request.',
      situationAr:
        'هذا مثال افتراضي لا صفقة حقيقية. يُعرض على مشتري لوط يوصف بـ«بري، درجة سوبر» بسعر قرب أسفل النطاق الموثّق لتلك الدرجة، ويستطيع المورد إجراء حرق وغرق عند الطلب.',
      steps: [
        'Run the five in order: resin visual, density, burn, persistence, price — not price first.',
        'Read the price against the range: near the bottom of the range for a claimed "super grade" means the grade claim or the material claim is false; ask which, and the basis.',
        'Ask the supplier to run the burn on the sample the buyer holds, not on a substitute the supplier keeps.',
        'Check the two evidence instruments separately: what the laboratory test would say about the material, and what the paperwork says about the lot that actually moved.',
        'Hold the verdict: five passed signals plus a failed evidence instrument is a "do not buy," because the signals can be passed by a counterfeiter and the evidence cannot be bent.',
      ],
      stepsAr: [
        'أجِ الخمس بالترتيب: راتنج بصري، كثافة، حرق، ديمومة، سعر — لا السعر أولًا.',
        'اقرأ السعر على النطاق: قرب أسفل النطاق لدرجة معلنة «سوبر» يعني أن ادعاء الدرجة أو ادعاء المادة زائف؛ اسأل أيهما وعن الأساس.',
        'اطلب من المورد إجراء الحرق على العينة التي يمسكها المشتري، لا على بديل يحتفظ به المورد.',
        'افحص أداتي الدليل على حياد: ما سيقوله الفحص المخبري عن المادة، وما تقوله الأوراق عن اللوط الذي تحرك فعلًا.',
        'أمسك الحكم: خمس إشارات ناجحة وأداة دليل فشلت هي «لا تشترِ»، لأن الإشارات قد يجتازها مغشِّش أما الدليل فلا يُنحى.',
      ],
      takeaway:
        'The example shows the method, not a verdict: the ordered signals, the price read against the range, and the two evidence instruments checked separately. It does not say what this lot is worth and it does not say the lot is real or not real.',
      takeawayAr:
        'يبيّن المثال المنهج لا الحكم: الإشارات المرتّبة، وسعرًا يُقرأ على النطاق، وأداتي الدليل المُفحصتان على حياد. ولا يقول ما قيمة هذا اللوط، ولا إن اللوط حقيقي أم لا.',
    },
    limitations:
      'This protocol is OudGuide\'s ordered synthesis of the checks a buyer can run alone; it is not a published standard, and no authority certifies it as such. The five physical checks are heuristic signals that a capable counterfeiter can pass, and only the laboratory test and the conservation paperwork carry evidence on their own. It does not authenticate any specific lot, does not name the species, age or origin of any lot, and does not establish that any named seller is or is not fraudulent. The price range it refers to is the observation baseline\'s documented range on a stated date and market, not a market average and not a price guide.',
    limitationsAr:
      'هذا البروتوكول تركيب مرتّب من دليل العود للفحوص التي يجريها المشتري وحده؛ وهو ليس معيارًا منشورًا ولا يصدره أي سلطة على أنه كذلك. والفحوص الخمس المادية إشارات تقريبية قد يجتازها مغشِّش كفء، وما يحمل الدليل وحده هو الفحص المخبري والأوراق البيئية. ولا يوثّق البروتوكول لوطًا بعينه، ولا يسمّي النوع ولا العمر ولا منشأ لوط، ولا يثبت أن موردًا مسمّىً يغشّ أو لا يغشّ. والنطاق الذي يشير إليه هو النطاق الموثّق من خطّ الأساس المرصود في تاريخ وسوق محدَّدين، لا متوسط سوق ولا دليل أسعار.',
    nextSteps: [
      'Press the grade claims first: learn how grading claims work',
      'Understand what the one document that actually constrains the trade states',
      'See why a clean laboratory report still does not authenticate a lot',
    ],
    nextStepsAr: [
      'اضغط على ادعاءات الدرجة أولًا: اعرف كيف تعمل ادعاءات التقييم',
      'افهم ما تثبته فعلاً الوثيقة الوحيدة التي تقيد التجارة',
      'انظر لماذا لا يوثّق تقرير مخبري نظيف اللوط',
    ],
    related: [
      { slug: 'quality/fraud-identification', label: 'How to detect misrepresented oud' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'quality/reading-an-oud-lab-report', label: 'How to read an oud lab or GC-MS report' },
    ],
  }),
];
