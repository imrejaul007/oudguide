import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

export const sampleEvaluationArticles: Article[] = [
  simpleGuide({
    slug: 'buying/evaluating-agarwood-samples',
    parent: 'buying',
    title: 'How to Evaluate Agarwood and Dehn Al Oud Samples Before Wholesale Procurement',
    titleAr: 'كيفية تقييم عينات خشب ودهن العود قبل الشراء التجاري',
    summary:
      'The definitive protocol for evaluating agarwood chips and pure Dehn Al Oud samples: minimum sample volumes, controlled electric plate temperature thresholds, blind olfactory grading, GC-MS laboratory verification, and detecting sample bait-and-switch deception.',
    summaryAr:
      'البروتوكول الشامل لتقييم عينات خشب العود ودهن العود النقي: معايير أحجام العينات، ودرجات حرارة التبخير على المباخر الكهربائية، والتقييم الحسي الأعمى، والتحليل المخبري لكروماتوغرافيا الغاز والكتلة، وكشف حيل تبديل العينات.',
    directAnswer:
      'Evaluating agarwood and Dehn Al Oud samples before committing to commercial wholesale lots requires a disciplined, multi-stage protocol combining physical inspection, controlled thermodynamic testing, and analytical chemistry. When procuring raw wood, buyers should insist upon representative sample lots of at least fifteen to thirty grams comprising diverse cut morphologies (knuckles, slivers, and heartwood cores) rather than a single handpicked decorative chunk. Testing begins with specific gravity immersion in water, followed by macro-lens inspection at 10x to 40x magnification to confirm natural vascular resin canals and rule out surface polishing or lead filling. For aromatic evaluation, samples should be tested on thermostatic electric plate vaporizers at incremental temperature tiers (140°C, 180°C, and 220°C) rather than uncontrolled charcoal, documenting the progression from volatile floral top notes to heavy balsamic heart resins. For pure oils, testing requires a minimum sample volume of one to two grams, evaluating top-note volatility on paper smelling strips across twenty-four hours, skin drydown across twelve hours, and requesting third-party gas chromatography mass spectrometry (GC-MS) to confirm the presence of key sesquiterpene biomarkers and the complete absence of synthetic diluents like dioctyl phthalate or benzyl benzoate.',
    directAnswerAr:
      'يتطلب تقييم عينات خشب ودهن العود قبل إبرام الصفقات التجارية الكبرى اتباع بروتوكول منهجي متعدد المراحل يجمع بين الفحص الفيزيائي، والاختبار الحراري الدقيق، والتحليل الكيميائي المخبري. وعند شراء خشب العود الخام، يجب على المشتري طلب عينة ممثلة للشحنة لا تقل عن خمسة عشر إلى ثلاثين جراماً تضم مختلف أشكال القطع (العقد والرقائق وخشب القلب) بدلاً من الاكتفاء بقطعة واحدة منتقاة بعناية. ويبدأ الفحص باختبار الكثافة والوزن النوعي في الماء، يليه الفحص المجهري بعدسة مكبرة تتراوح بين عشر إلى أربعين ضعفاً للتأكد من اتصال القنوات الراتنجية الطبيعية وخلو القطع من الطلاء أو الحشو المعدني. وفي اختبار الرائحة، تُبخر العينات على مباخر كهربائية مضبوطة الحرارة بتدرج مدروس (140 و180 و220 درجة مئوية) بدلاً من الجمر المباشر لتسجيل تدرج النغمات من البداية العطرية إلى القاعدة البلسمية. وفي دهن العود، تتطلب العينة جراماً إلى جرامين على الأقل لاختبار الثبات على أشرطة الشم الورقية طوال أربع وعشرين ساعة وعلى الجلد لاثنتي عشرة ساعة، مع طلب فحص كروماتوغرافيا الغاز والكتلة للتأكد من المركبات الطبيعية وخلو الزيت من المذيبات الكيميائية والزيوت المضافة.',
    sections: [
      {
        heading: 'Physical sampling parameters: representative weights and lot diversity',
        headingAr: 'المعايير الفيزيائية للعينات: الأوزان الممثلة وتنوع أشكال القطع',
        body: [
          'The most common vulnerability for commercial buyers during the procurement cycle is accepting an unrepresentative sample. Dishonest brokers routinely handpick two or three museum-grade sinking pieces from an antique collection and present them as representative of a multi-kilogram commercial lot.',
          'To ensure authentic evaluation, buyers must mandate a randomized sample weighing between fifteen and thirty grams, extracted from the bottom, middle, and top of the bulk storage container. The sample must accurately reflect the proportional mix of the lot: thick Jura blocks, thin Salla slivers, and smaller Muri nuggets.',
          'Before any burning takes place, the buyer should weigh each piece on a calibrated digital scale (accurate to 0.01g), inspect the surface under high-intensity ultraviolet (UV) light to detect fluorescent synthetic adhesives, and cut open at least two small pieces with a heavy jeweler blade to verify internal resin continuity through the wood core.',
        ],
        bodyAr: [
          'يعد قبول عينة غير ممثلة للشحنة الثغرة الأكثر خطورة التي يقع فيها المشترون في الصفقات التجارية. ويعمد بعض الوسطاء إلى انتقاء قطعتين أو ثلاث من الأخشاب الفاخرة النادرة من مقتنياتهم الخاصة وتقديمها للمشتري على أنها نموذج لشحنة تجارية ضخمة.',
          'ولضمان التقييم الصادق، يتعين على المشتري إلزام المورد بتقديم عينة عشوائية تزن ما بين خمسة عشر وثلاثين جراماً، تؤخذ من أسفل ووسط وأعلى أكياس الشحنة. ويجب أن تعكس العينة التوزيع الفعلي للقطع: الكتل السميكة، والرقائق الخفيفة، والحبات العقدية الصغيرة.',
          'وقبل التبخير، يجب وزن القطع بميزان إلكتروني دقيق (بدقة جزء من مائة من الجرام)، وفحص السطح تحت أشعة فوق بنفسجية لكشف أي مواد لاصقة صناعية مضيئة، وشق قطعتين صغيرتين على الأقل بشفرة صلبة للتأكد من تغلغل الراتنج الداخلي في نسيج الخشب.',
        ],
      },
      {
        heading: 'Thermodynamic evaluation: thermostatic electric plates over charcoal',
        headingAr: 'التقييم الحراري المنضبط: أفضلية المباخر الكهربائية على الجمر المباشر',
        body: [
          'While traditional ceremonial burning utilizes glowing charcoal, professional sample evaluation should always be conducted on precision thermostatic electric plate burners equipped with clean mica sheets.',
          'Charcoal combustion introduces confounding variables: fluctuating ember temperatures (ranging from 150°C to over 300°C), trace sulfur odors, and smoke interference from burning wood cellulose. Electric vaporizers eliminate these variables, allowing the evaluator to isolate and observe the pure evaporation curve of oleoresin compounds.',
          'The protocol calls for testing across three standardized temperature stages: first at 140°C to 150°C to release volatile monoterpenes, floral esters, and light honeyed top notes without smoke; second at 180°C to 190°C to trigger active resin boiling (az-Zabad) and evaluate leathery, spicy, and woody heart notes; and finally at 220°C to 240°C to assess base balsamic longevity and confirm the absence of bitter plastic fumes.',
        ],
        bodyAr: [
          'مع أن التبخير التراثي يعتمد على جمر الفحم الطبيعي، إلا أن التقييم المهني للعينات يجب أن يتم دائماً على مباخر كهربائية دقيقة مزودة بصفائح الميكا النظيفة والقابلة للضبط الحراري.',
          'فالجمر الطبيعي يفرض متغيرات غير منضبطة: تفاوت درجات الحرارة بين مائة وخمسين وأكثر من ثلاثمائة مئوية، وآثار روائح الكبريت، وتداخل دخان احتراق الألياف الخشبية. أما التبخير الكهربائي فيلغي هذه المتغيرات، ويتيح للمقيم عزل ومراقبة منحنى تبخر الراتنج النقي بدقة متناهية.',
          'ويعتمد البروتوكول ثلاثة مستويات حرارية متدرجة: تبدأ بين 140 و150 درجة مئوية لإطلاق النوتات الزهرية والعسلية الخفيفة دون أي دخان؛ ثم بين 180 و190 درجة مئوية لبدء فوران الراتنج الحقيقي وتقييم قلب العطر الخشبي والجلدي؛ وتختتم بين 220 و240 درجة مئوية لتقييم ثبات الراتنج البلسمي والتأكد من خلوه من أي روائح بلاستيكية محترقة.',
        ],
      },
      {
        heading: 'Sensory staging for Dehn Al Oud: paper strips and skin longevity',
        headingAr: 'مراحل التقييم الحسي لدهن العود: أشرطة الشم الورقية وثبات الجلد',
        body: [
          'When evaluating liquid Dehn Al Oud samples, smelling straight from the glass vial or applicator dipstick leads to rapid olfactory fatigue and provides zero insight into base-note stability.',
          'The professional protocol uses sterile perfumer smelling strips (mouillettes). Apply exactly twenty microliters of oil to the tip of the strip, noting the time. Record sensory impressions across four distinct intervals: immediately at zero minutes (top volatile ester blast), at two hours (heart accord maturation), at eight hours (balsamic drydown), and at twenty-four hours (true residual tenacity).',
          'Concurrently, perform a controlled skin test on clean, unscented forearms. Pure hydro-distilled oud evolves through complex body chemistry over twelve to eighteen hours; if an oil disappears from skin within three hours or leaves a sticky, synthetic petroleum film, it has been heavily extended with mineral oil or chemical fixatives.',
        ],
        bodyAr: [
          'عند تقييم عينات دهن العود السائل، فإن استنشاق الرائحة مباشرة من القارورة أو مرواد الدهن يؤدي إلى إجهاد حاسة الشم سريعاً ولا يعطي فكرة حقيقية عن استقرار النغمات القاعدية.',
          'ويعتمد البروتوكول المهني على أشرطة الشم الورقية المخصصة لصناع العطور. وتوضع قطرة دقيقة من الزيت على طرف الشريط مع تسجيل الوقت بدقة. وتُسجل الانطباعات الحسية عبر أربع مراحل زمنية: فور وضع العينة (النوتات المتطايرة الأولى)، وبعد ساعتين (نضج قلب العطر)، وبعد ثماني ساعات (القاعدة البلسمية)، وبعد أربع وعشرين ساعة (الثبات الحقيقي المتبقي).',
          'وبالتوازي مع ذلك، يجرى اختبار على جلد نظيف خالٍ من أي عطور سابقة. فالدهن المقطر النقي يتفاعل حيوياً مع حرارة الجلد ليمتد عبيره من اثنتي عشرة إلى ثماني عشرة ساعة؛ وإذا تلاشت الرائحة في أقل من ثلاث ساعات أو تركت ملمساً لزجاً بترولياً، فالزيت مغشوش بزيوت معدنية أو مثبتات صناعية.',
        ],
      },
      {
        heading: 'Analytical confirmation: GC-MS testing and anti-switching safeguards',
        headingAr: 'التأكيد التحليلي: فحص كروماتوغرافيا الغاز والكتلة وضمانات عدم تبديل البضاعة',
        body: [
          'For high-value commercial transactions exceeding twenty thousand dollars, sensory evaluation alone is legally and financially insufficient. The final safeguard is gas chromatography mass spectrometry (GC-MS) screening conducted by an accredited independent laboratory.',
          'GC-MS testing verifies botanical authenticity by detecting diagnostic sesquiterpenoids unique to Aquilaria—such as agarospirol, jinkohol, valencene, and 2-(2-phenylethyl)chromone derivatives—while screening for adulterants such as diethyl phthalate (DEP), mineral oil, and synthetic fragrances.',
          'To prevent the notorious bait-and-switch deception—where a verified sample is swapped for inferior bulk stock during packing—buyers must implement strict chain-of-custody protocols: divide the verified sample into two sealed vials, sign across tamper-evident security tape, retain one reference vial, and stipulate in the purchase contract that the delivered bulk cargo must match the retained reference sample within a three percent variance under repeat GC-MS testing.',
        ],
        bodyAr: [
          'في الصفقات التجارية الكبرى التي تتجاوز قيمتها مبالغ كبيرة، لا يكفي التقييم الحسي وحده لضمان السلامة المالية والقانونية. وتبقى الضمانة الحاسمة هي فحص كروماتوغرافيا الغاز والكتلة في مختبر مستقل معتمد.',
          'ويثبت هذا التحليل المخبري الأصالة النباتية عبر كشف مركبات السيسكويتربين الفريدة لأشجار العود—مثل الأغاروسبيرول والجينكوهول والفالنسين ومشتقات الفينيل إيثيل كرومون—مع التأكد التام من خلو الزيت من الملدنات الكيميائية والزيوت المعدنية والعطور الصناعية.',
          'ولتفادي حيلة تبديل العينات الشهيرة—حيث يقدم البائع عينة ممتازة ثم يشحن بضاعة رديئة—يجب تطبيق نظام حراسة صارم للعينات: تُقسم العينة المعتمدة إلى قارورتين مغلقتين بشريط أمني غير قابل للتلاعب مع توقيع الطرفين، ويحتفظ المشتري بإحداهما كمرجع رسمي، ويُنص في عقد التوريد على مطابقة الشحنة المسلمة للعينة المرجعية في الفحص المخبري بنسبة تطابق لا تقل عن سبعة وتسعين بالمائة.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the minimum sample size required to evaluate raw agarwood chips?',
        answer:
          'A representative sample should weigh at least fifteen to thirty grams, containing a proportional mix of thick heartwood blocks, thin slivers, and small nuggets taken randomly from different sections of the storage container.',
      },
      {
        question: 'Why should agarwood samples be tested on electric burners rather than charcoal?',
        answer:
          'Electric plate burners provide precise, controlled temperature tiers (140°C to 240°C) without sulfur fumes or charcoal smoke interference, allowing the evaluator to observe the true evaporation curve of the resin.',
      },
      {
        question: 'How do commercial buyers prevent sample bait-and-switch fraud?',
        answer:
          'Buyers divide the verified sample into sealed, signed reference containers, stipulating in the commercial contract that delivered cargo will undergo repeat GC-MS testing against the retained sample prior to final payment release.',
      },
    ],
    faqAr: [
      {
        question: 'ما هو الحد الأدنى لوزن عينة خشب العود للتقييم التجاري؟',
        answer:
          'يجب ألا يقل وزن العينة الممثلة عن خمسة عشر إلى ثلاثين جراماً، وأن تشتمل على خليط متوازن من الكتل السميكة والرقائق والحبات الصغيرة تؤخذ عشوائياً من مختلف أجزاء الشحنة.',
      },
      {
        question: 'لماذا يفضل تقييم عينات العود على المبخرة الكهربائية بدلاً من الجمر؟',
        answer:
          'لأن المباخر الكهربائية تتيح التحكم الدقيق بدرجات الحرارة (بين 140 و240 مئوية) دون أي روائح كبريتية أو دخان فحم، مما يسمح بمراقبة التبخر الطبيعي للراتنج بنقاء تام.',
      },
      {
        question: 'كيف يتجنب المستوردون حيلة تبديل العينات عند استلام الشحنة؟',
        answer:
          'يحتفظ المشتري بعينة مرجعية مختومة وموقعة من الطرفين، مع اشتراط مطابقة الشحنة الواردة للعينة في فحص كروماتوغرافيا الغاز والكتلة المخبري قبل الإفراج عن الدفعة المالية النهائية.',
      },
    ],
    sourceIds: ['AGARWOOD_REVIEW_2014', 'TRAFFIC_UAE_AGARWOOD_TRADE', 'CITES_APPENDICES'],
    limitations:
      'This guide establishes standard protocols for physical sampling, thermal evaluation, and analytical verification of agarwood and Dehn Al Oud. Sensory evaluation remains inherently subjective; laboratory GC-MS testing is mandatory for binding legal commercial disputes.',
    limitationsAr:
      'يوضح هذا الدليل البروتوكولات القياسية لأخذ العينات الفيزيائية والتقييم الحراري والتحليل المخبري لخشب ودهن العود. ويبقى التقييم الحسي خاضعاً للذائقة الفردية؛ ويعد فحص الغاز والكتلة المرجع القانوني الملزم في المعاملات التجارية.',
    nextSteps: [
      'Demand randomized fifteen to thirty gram wood samples reflecting bulk lot heterogeneity.',
      'Test samples on thermostatic electric plates at 140°C, 180°C, and 220°C across clean mica sheets.',
      'Retain sealed, signed reference samples and require laboratory GC-MS testing in high-value purchase contracts.',
    ],
    nextStepsAr: [
      'اطلب عينات عشوائية تزن خمسة عشر إلى ثلاثين جراماً تعكس التنوع الحقيقي لقطع الشحنة.',
      'اختبر العينات على مباخر كهربائية حرارية عند 140 و180 و220 درجة مئوية فوق صفائح الميكا النظيفة.',
      'احتفظ بعينات مرجعية مختومة وموقعة واشترط فحص الغاز والكتلة المخبري في عقود التوريد الكبرى.',
    ],
    related: [
      { slug: 'buying/in/gcc-perfume-souks-and-commercial-hubs', label: 'GCC perfume souks and commercial sourcing hubs' },
      { slug: 'quality/jura-zura-agarwood-cuts', label: 'Jura and Zura heavy heartwood cuts' },
      { slug: 'quality/oud-grading-explained', label: 'Understanding commercial agarwood grading criteria' },
      { slug: 'using-oud/cellaring-and-long-term-storage', label: 'Cellaring agarwood and vintage oil storage' },
      { slug: 'fragrance/the-art-of-the-mukhallat', label: 'The art of the royal mukhallat formulation' },
      { slug: 'quality/oud-misdescription-warning-signs', label: 'Warning signs of adulterated and fake agarwood' },
    ],
  }),
];
