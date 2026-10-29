import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

/**
 * The Boya Oud and Fat Oud (Oud Mushaham) reference guide.
 *
 * This guide directly addresses the major trade and consumer queries around:
 * 1. Boya Oud (Boya oil, white sapwood, agarwood wax, and attar base chemistry)
 * 2. Fat Oud (Oud Mushaham / Oud Shahm in Gulf incense tradition)
 * 3. Natural plant fatty acids vs artificial tallow/paraffin adulteration
 * 4. Detection protocols (blotter test, hot charcoal smoke analysis, GC-MS saponification)
 *
 * Sourced strictly from the shared source registry:
 * - AGARWOOD_REVIEW_2014 (primary)
 * - ITTO_AGARWOOD_REVIEW (primary)
 * - TRAFFIC_UAE_AGARWOOD_TRADE (trade)
 */

export const boyaAndFatOudArticles: Article[] = [
  simpleGuide({
    slug: 'quality/boya-and-fat-oud-grades',
    parent: 'quality',
    title: 'Boya Oud, White Wood Wax, and Fat Oud Classifications',
    titleAr: 'عود البويا وشمع الخشب الأبيض وتصنيفات العود المشحم',
    summary:
      'What Boya wood, Boya oil, and Fat Oud (Oud Mushaham) represent in commercial trade: botanical origins, extraction methods, natural fatty acid fractions versus tallow adulteration, and analytical verification.',
    summaryAr:
      'ما يمثّله خشب البويا وزيت البويا والعود المشحم في التجارة: الأصول النباتية، وطرق الاستخلاص، والأحماض الدهنية الطبيعية مقابل الغش بالشحوم، والتحقق المخبري.',
    directAnswer:
      'Boya oud and fat oud refer to two distinct commercial classifications in South Asian and Arabian Gulf perfumery markets. In the Assamese and Indian distillation sector, Boya refers to the pale, viscous oleoresin or soft waxy fraction extracted from uninfected or lightly infected Aquilaria sapwood (known locally as dhum or white wood), which yields an essential oil with significantly lower sesquiterpene density that commands roughly a tenth to a fiftieth of the price of true heartwood Dehn Al Oud. In the Arabian Gulf incense tradition, Fat Oud (Oud Mushaham or Oud Shahm) describes agarwood chips deliberately saturated and simmered in aromatic resins, amber, and musk syrup until the wood develops a characteristic white, waxy crystalline coating that bubbles thickly over burning charcoal. Neither term represents a botanical species or an official CITES export grade; both are functional trade categories with specific analytical markers, pricing bands, and distinct adulteration risks.',
    directAnswerAr:
      'يشير عود البويا والعود المشحم إلى تصنيفين تجاريين مميزين في أسواق العطور في جنوب آسيا والخليج العربي. ففي قطاع التقطير الهندي في أسام، تشير «البويا» إلى المادة الراتنجية الزيتية الفاتحة أو الجزء الشمعي المستخلص من خشب الحطب الأبيض غير المصاب أو قليل الإصابة لشجرة أكيلاريا (المعروف محلياً باسم خشب دهوم)، والذي ينتج زيتيّاً بكثافة سيسكويتربينية أقل بكثير ويباع بعُشر أو بجزء من خمسين من سعر دهن العود المستخرج من خشب القلب المصاب. وفي تقاليد البخور الخليجية، يصف «العود المشحم» أو «عود الشحم» رقائق خشب العود المنقوعة والمطبوخة في مزيج عطري مركز من المسك والعنبر والزيوت حتى يكتسب الخشب طبقة بيضاء شمعية بلورية تفور بكثافة فوق جمر الفحم. ولا يمثل أي من المصطلحين نوعاً نباتياً مستقلاً أو رتبة تصديرية رسمية في معاهدة سايتس، بل هما فئتان تجاريتان وظيفيتان لهما مؤشرات تحليلية ونطاقات سعرية محددة ومخاطر تزييف متباينة.',
    sections: [
      {
        heading: 'What Boya oud is: sapwood, extraction yields, and chemistry',
        headingAr: 'ما هو عود البويا: خشب الحطب الأبيض والمردود والكيمياء',
        body: [
          'In natural agarwood forestry, only a small portion of an Aquilaria tree develops dark, resin-dense heartwood in response to fungal infection. When commercial distillers in Hojai and Assam process whole harvested trunks, the black and brown resinous heartwood is carefully carved away by hand (known as cleaning or scraping) to be sold as raw incense chips or distilled into premier Grade A and Double Super Dehn Al Oud. The remaining wood—the pale, non-resinous or sparsely veined sapwood—is termed Boya or Dhum wood.',
          'Distilling this white sapwood requires prolonged hydro-distillation, often lasting ten to fourteen days in large copper degs. Because the resin concentration in sapwood is negligible compared to dark heartwood, the extraction yield is low (frequently between 0.02% and 0.08%), and the resulting oil carries a completely different chemical profile. Boya oil is characterized by a pale yellow to light amber appearance, a thick paste-like or semi-solid waxy consistency at room temperature (often sold industrially as agarwood wax), and a scent dominated by dry, airy wood notes and mild fatty undertones, lacking the complex animalic, balsamic, and dark woody facets of heartwood distillates.',
          'In legitimate perfumery, Boya oil serves an established purpose: it is an affordable natural fixative used as a base for traditional Indian attars (such as Shamama-tul-Amber and Majmua) and commercial oriental accords. However, a major consumer protection risk occurs when disreputable merchants dye Boya oil, blend it with chemical aroma-compounds, or use it to dilute pure artisanal Dehn Al Oud while selling it under premium single-origin labels.',
        ],
        bodyAr: [
          'في زراعة وغابات العود الطبيعي، يتحول جزء محدود فقط من شجرة الأكيلاريا إلى خشب قلب داكن مشبع بالراتنج نتيجة الدفاع ضد الفطريات. وعندما يتعامل المقطرون التجاريون في مقاطعة أسام مع الجذوع المحصودة، يُنحت الخشب الراتنجي الأسود والبني بدقة يدوياً لبيعه كرقائق بخور أو تقطيره إلى دهن عود خالص من الدرجة الأولى. ويُطلق على الخشب المتبقي، وهو خشب الحطب الأبيض الفاتح الخالي من الراتنج أو قليل العروق، اسم خشب البويا أو خشب الدهوم.',
          'ويتطلب تقطير هذا الخشب الأبيض تقطيراً مائياً طويلاً يستمر غالباً من عشرة إلى أربعة عشر يوماً في قدور نحاسية كبيرة. ولأن تركيز الراتنج في الخشب الأبيض ضئيل مقارنة بخشب القلب الداكن، فإن مردود الاستخلاص يكون منخفضاً جداً (بين جزءين من مائة وثمانية أجزاء من مائة بالمائة)، ويحمل الزيت الناتج بصمة كيميائية مختلفة كلياً. ويتميز زيت البويا بلونه الأصفر الفاتح وقوامه الشمعي الكثيف الذي قد يتصلب في حرارة الغرفة (ويسمى صناعياً شمع العود)، وبرائحته الخشبية الجافة الخفيفة الخالية من التعقيد البلسمي والحيواني الداكن المعتاد في دهن العود الأصيل.',
          'وفي صناعة العطور المشروعة، يؤدي زيت البويا دوراً معترفاً به: فهو مثبت طبيعي اقتصادي يستخدم كقاعدة للخلطات العطرية ومقطرات الشمامة الشرقية. غير أن الخطر التجاري يقع عندما يلجأ بعض التجار إلى صبغ زيت البويا وتكثيفه أو خلطه بمواد كيميائية اصطناعية لبيعه للمستهلكين باسم دهن عود هندي خالص بأسعار مضاعفة.',
        ],
      },
      {
        heading: 'Gaharu Buaya: the Southeast Asian distinction',
        headingAr: 'غارو بوايا: التمييز في أسواق جنوب شرق آسيا',
        body: [
          'Buyers sourcing in Indonesia, Malaysia, and Singapore frequently encounter the term Gaharu Buaya (literally "Crocodile Agarwood"), which sounds phonetically identical to Indian Boya but originates from an entirely separate botanical source. While Indian Boya comes from the sapwood of Aquilaria trees, Gaharu Buaya is harvested from Aetoxylon sympetalum, a tree species belonging to the same Thymelaeaceae botanical family that thrives in peat-swamp forests across Borneo and Sarawak.',
          'Aetoxylon sympetalum produces a dense, dark-grained aromatic wood that visually mimics authentic Aquilaria agarwood chips. When burned, it emits an aromatic scent that is pleasant but significantly harsher, with sharp herbal and leather tones rather than the sweet, vanillic, and resinous balsamic smoke of genuine Aquilaria. In international trade, Gaharu Buaya is legally traded as a lower-tier incense wood and is priced at a fraction of true gaharu. Buyers inspecting bulk consignments must verify whether certificates of origin specify Aquilaria malaccensis / Aquilaria microcarpa or Aetoxylon sympetalum, as the two materials belong to distinct botanical classifications under CITES monitoring.',
        ],
        bodyAr: [
          'يصادف المشترون في أسواق إندونيسيا وماليزيا وسنغافورة مصطلح «غارو بوايا» (ويعني حرفياً عود التمساح)، وهو يشبه لفظياً كلمة البويا الهندية لكنه ينحدر من أصل نباتي مختلف تماماً. فبينما تأتي البويا الهندية من حطب شجرة الأكيلاريا، يُحصد غارو بوايا من شجرة إيتوكسيلون سيمبيتلوم، وهي شجرة تنتمي إلى فصيلة العود الزهرية نفسها وتنمو في مستنقعات جزيرة بورنيو وسراواك.',
          'وتنتج هذه الشجرة خشباً عطرياً داكناً يشبه في مظهره الخارجي رقائق عود الأكيلاريا الطبيعية. وعند إشعاله، يُصدر دخاناً  عطرياً مائلاً إلى الحدة الجلدية والأعشاب يفتقر إلى الحلاوة البلسمية الراتنجية المعهودة في العود الأصيل. وفي التجارة الدولية، يُباع هذا الخشب كبديل اقتصادي للبخور بنطاق سعري أقل بكثير من العود الحقيقي. ويجب على مشتري الجملة التأكد مما إذا كانت شهادات المنشأ تحدد صنف الأكيلاريا أو صنف الإيتوكسيلون، إذ يختلف الصنفان في التصنيف النباتي وضوابط التصدير.',
        ],
      },
      {
        heading: 'Fat Oud (Oud Mushaham): traditional Gulf incense formulations',
        headingAr: 'العود المشحم: تقاليد البخور المخلوط في الخليج العربي',
        body: [
          'In Gulf retail souks (including Riyadh, Jeddah, Dubai, and Muscat), the phrase "Fat Oud" is an English translation of the traditional Arabic trade terms Oud Shahm (عود شحم) or Oud Mushaham (عود مشحم). This preparation represents an ancient and celebrated style of traditional Arabian incense blending, particularly rooted in Omani, Emirati, and Najdi fragrance heritage, rather than a raw botanical harvest.',
          'To craft authentic Oud Mushaham, artisans take natural agarwood chips—typically light-to-medium density cultivated wood from Thailand or India—and gently simmer them in a viscous, concentrated infusion of aromatic essential oils, liquid amber resin, and melted deer-musk or vegetable musk crystals. As the wood absorbs the essential oils and dries, the musk crystals re-solidify over the surface of the chips, creating a distinctive lustrous, white, or fatty crystalline veneer (hence the descriptive name mushaham, meaning fatted or greased).',
          'When placed upon glowing charcoal, genuine Oud Mushaham does not smell like charred wood; instead, the surface resin and musk boil vigorously in a thick, frothy aromatic melt before the underlying wood fibers catch fire, filling the majlis with a sweet, long-lasting cloud of perfumed smoke. A commercial consumer must distinguish between master-blended artisanal Oud Mushaham (which uses high-grade essential oils and natural musk) and commercial knock-offs that soak scrap wood in synthetic fragrance mists and paraffin oil.',
        ],
        bodyAr: [
          'في أسواق التجزئة التراثية في الخليج العربي (في الرياض ودبي ومسقط وجدة)، يمثل مصطلح «العود المشحم» أو «عود الشحم» صنفاً تراثياً عريقاً من أصناف البخور المصنوع وليس خشب غابات خاماً. ويحظى هذا النوع بمكانة خاصة في التقاليد العطرية العمانية والنجدية والإماراتية.',
          'ولصناعة العود المشحم الأصيل، يأخذ الحرفيون رقائق خشب العود الطبيعي متوسط الكثافة، ثم تُطبخ وتُنقع في مزيج مركز من الزيوت العطرية النقية وراتنج العنبر ومسحوق المسك المذاب. وعندما يتشرب الخشب تلك الزيوت وتجف الرقائق، تتبلور جزيئات المسك على سطح الخشب مكونة طبقة بيضاء لامعة تشبه الشحم أو الندى الأبيض المتجمد (ومن هنا جاءت تسميته بالمشحم).',
          'وعند وضع كسرة العود المشحم على جمر الفحم، يفور الدهن والمسك المغلف للخشب في رغوة عطرية غنية تملأ المجلس برائحة زكية فواحة تدوم طويلاً قبل أن تشتعل ألياف الخشب الداخلية. ويجب على المشتري التمييز بين العود المشحم المصنوع بحرفية عالية باستخدام زيوت نقية ومسك أصيل، وبين الخلطات الرديئة التي تنقع نشارة الخشب في معطرات كيميائية وزيوت برافين رخيصة.',
        ],
      },
      {
        heading: 'Natural fatty acids vs artificial fat adulteration in Dehn Al Oud',
        headingAr: 'الأحماض الدهنية الطبيعية مقابل الغش بالدهون والشموع في دهن العود',
        body: [
          'In the chemistry of pure Dehn Al Oud, the presence of fatty compounds is a double-edged subject that requires careful laboratory interpretation. Natural agarwood oleoresin co-distills with small quantities of endogenous plant lipids and long-chain fatty acids (primarily palmitic acid, oleic acid, and stearic acid). In traditional long-run copper hydro-distillations, these natural fatty acids contribute to the heavy, buttery, and smooth animalic body of vintage oils. In industrial fine perfumery, however, distillers often subject the crude oil to fractional distillation or winterization to remove these heavy fatty acids, producing lighter, aquatic-leaning top notes.',
          'Conversely, deliberate fat adulteration remains one of the oldest deceptive practices in the essential oil trade. Fraudulent sellers add foreign non-drying fats—such as castor oil, mineral oil, liquid paraffin, or rendered animal tallow—to increase the viscosity and weight of thinned oud oil. The physical and laboratory checks that detect this adulteration include:',
        ],
        bodyAr: [
          'في كيمياء دهن العود الخالص، يعد وجود المركبات الدهنية موضوعاً يستلزم فهماً مخبرياً دقيقاً. فالراتنج الطبيعي للعود يحتوي أثناء التقطير المائي على كميات ضئيلة من دهون النبات الطبيعية وأحماض دهنية طويلة السلسلة (أهمها حمض البالمتيك وحمض الأوليك وحمض الستياريك). وفي التقطير التقليدي الطويل، تمنح هذه الأحماض الزيت قواماً غنياً وثباتاً بلسمياً دهنياً دافئاً. أما في صناعات العطور الغربية، فيلجأ المقطرون غالباً إلى تكرير الزيت لإزالة تلك الأحماض الدهنية الثقيلة والحصول على رائحة خفيفة ونقية.',
          'وعلى النقيض من ذلك، يمثل الغش المتعمد بالدهون والزيوت النباتية إحدى أقدم حيل التلاعب التجاري. إذ يلجأ بعض التجار غير الأمناء إلى إضافة زيوت ثقيلة مثل زيت الخروع أو البرافين السائل أو الشحوم المذابة لزيادة لزوجة ووزن الزيت المغشوش. وتشمل الفحوصات الفيزيائية والمخبرية للكشف عن هذا التلاعب ما يلي:',
        ],
        list: [
          'The blotter evaporation test: Pure Dehn Al Oud placed on pure cotton paper will diffuse its aroma over 48 to 72 hours, leaving only a faint resinous tint. Oil adulterated with vegetable fats or mineral oils leaves a greasy, translucent oil stain that never fully evaporates.',
          'The hot charcoal bubble test for wood: Genuine agarwood chips bubble with pure resin when placed on clean charcoal and emit sweet aromatic smoke. Wood artificially soaked in fat, tallow, or chemical wax produces thick, black, greasy smoke with the unmistakable rancid odor of burning cooking oil or candle wax.',
          'Laboratory GC-MS saponification: Gas chromatography coupled with mass spectrometry identifies foreign triglycerides, synthetic esters, and non-native fatty acid methyl esters that never occur naturally in Aquilaria or Gyrinops oleoresin.',
        ],
        listAr: [
          'فحص ورقة التنشيف: عند وضع قطرة من دهن العود الصافي على ورق قطني نظيف، يتبخر الزيت تدريجياً خلال ثمان وأربعين إلى اثنتين وسبعين ساعة مخلفاً ظلاً خفيفاً، بينما يترك الدهن المغشوش بالزيوت النباتية بقعة دهنية زيتية شفافة لا تجف أبداً.',
          'فحص احتراق الجمر للخشب: يفور خشب العود الطبيعي براتنجه الذاتي على الجمر برائحة خشبية زكية، بينما يُصدر الخشب المطبوخ في الشحوم أو الزيوت دخاناً أسود كثيفاً مصحوباً برائحة احتراق الزيت ورائحة الشحم المقلي.',
          'التحليل المخبري لكروماتوغرافيا الغاز: يكشف فحص كروماتوغرافيا الغاز وقياس الطيف الكتلي عن مركبات الدهون الثلاثية الدخيلة وإسترات الفثالات التي لا توجد إطلاقاً في راتنج العود الطبيعي الخالص.',
        ],
        callout: {
          title: 'Commercial distinction summary',
          titleAr: 'خلاصة التمييز التجاري',
          body:
            'Boya oil is legitimate low-cost Aquilaria sapwood oleoresin; Gaharu Buaya is legitimate Aetoxylon incense wood; Oud Mushaham is legitimate blended Arabian incense. Fraud occurs only when these lower-cost materials are deceptively marketed or blended into pure Grade A heartwood Dehn Al Oud.',
          bodyAr:
            'زيت البويا مستخلص مشروع من خشب الحطب الأبيض، وغارو بوايا خشب بخور مشروع من فصيلة الإيتوكسيلون، والعود المشحم بخور عربي تراثي مصنوع. ويقع الغش حصراً عندما تُباع هذه المواد الاقتصادية بالتدليس على أنها دهن عود خالص من خشب القلب عالي الدرجة.',
        },
      },
    ],
    sourceIds: ['AGARWOOD_REVIEW_2014', 'ITTO_AGARWOOD_REVIEW', 'TRAFFIC_UAE_AGARWOOD_TRADE'],
    limitations:
      'This guide documents commercial trade classifications, extraction processes, and laboratory detection methods for Boya and Fat Oud. It does not certify the composition or purity of any commercial brand, nor does it establish legal quality standards beyond published chemical and regulatory literature.',
    limitationsAr:
      'توثق هذه الصفحة التصنيفات التجارية وطرق الاستخلاص والتحقق المخبري لعود البويا والعود المشحم. ولا تصادق على نقاوة أي علامة تجارية في الأسواق، ولا تضع معايير قانونية تتجاوز المراجع العلمية والتنظيمية المعتمدة.',
    nextSteps: [
      'Read how laboratory reports identify adulterants',
      'Learn the hydrostatic sinking test parameters',
      'Compare distillation methods in copper degs versus modern steam',
      'Review the verified directory of distillers',
    ],
    nextStepsAr: [
      'اقرأ كيف تكشف التقارير المخبرية مواد الغش',
      'تعرف على معايير اختبار الغطاس الهيدروستاتيكي',
      'قارن بين طرق التقطير بالقدر النحاسي والبخار الحديث',
      'تصفح دليل المقطرين المعتمدين',
    ],
    faq: [
      {
        question: 'What is Boya oud oil and why is it so cheap?',
        answer:
          'Boya oud oil is distilled from the non-resinous white sapwood of the Aquilaria tree rather than the fungal-infected dark heartwood. Because sapwood contains minimal sesquiterpenes and chromones, Boya oil produces a simpler, flatter woody aroma with soft waxy consistency, commanding approximately 10 to 50 times less than pure heartwood Dehn Al Oud.',
      },
      {
        question: 'What is Fat Oud or Oud Mushaham in Arabic perfumery?',
        answer:
          'In traditional Gulf perfumery, Fat Oud (Oud Mushaham or Oud Shahm) refers to natural incense wood chips that have been simmered and coated in an aromatic reduction of musk, amber, and perfumed oils, developing a signature white, lustrous waxy coating that boils frothy when burned on hot charcoal.',
      },
      {
        question: 'How do you detect if oud oil has been adulterated with fat or vegetable oil?',
        answer:
          'Adulteration with foreign fats, castor oil, or paraffin can be identified via the paper blotter test (greasy ring that refuses to evaporate after 72 hours), the charcoal smoke test (pungent smell of burning fat or candle wax), and laboratory GC-MS chromatography screening for foreign triglycerides.',
      },
    ],
    related: [
      { slug: 'glossary/boya', label: 'Boya trade term definition' },
      { slug: 'quality/fraud-identification', label: 'Oud fraud and counterfeit identification' },
      { slug: 'quality/lab-report-reading', label: 'Reading chromatographic laboratory reports' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'products/bakhoor-forms', label: 'Commercial bakhoor and incense forms' },
      { slug: 'quality/sinking-claims', label: 'Hydrostatic density and sinking claims' },
    ],
  }),
];
