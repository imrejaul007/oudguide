import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

/**
 * High-intent search guides for:
 * 1. Aged & Vintage Dehn Al Oud (Moattaq & Qadeem chemistry, maturation, and pricing)
 * 2. Burning Protocols for Oud Wood & Bakhoor (charcoal vs electric subitism heaters)
 * 3. Wholesale vs Retail Oud Sourcing Playbook (MOQ, CITES cargo permits, lab COA)
 */

export const vintageAndBurningArticles: Article[] = [
  simpleGuide({
    slug: 'quality/aged-vintage-dehn-al-oud',
    parent: 'quality',
    title: 'Aged Dehn Al Oud (Moattaq & Qadeem): The Science and Value of Vintage Oud Oil',
    titleAr: 'دهن العود المعتق والقديم: علم تقادم زيت العود وقيمته السوقية',
    summary:
      'What happens when pure Dehn Al Oud ages: the chemical maturation of sesquiterpenoids, softening of volatile top notes, storage protocols in dark glass, and distinguishing genuine vintage oils from artificial thermal baking.',
    summaryAr:
      'ما يحدث لدهن العود الصافي عند تعتيقه: النضج الكيميائي لمركبات السيسكويتربين، تلطيف النوتات العليا المتطايرة، بروتوكولات الحفظ في الزجاج الداكن، والتمييز بين المعتق الأصيل والتسخين الحراري الزائف.',
    directAnswer:
      'Aged Dehn Al Oud (known in the trade as Moattaq or Qadeem) refers to pure agarwood oil that has undergone controlled natural maturation over several years or decades. During aging, natural oxidation and polymerization reduce harsh, volatile monoterpenic top notes—including sharp barnyard, pungent fermented, or sour facets common in fresh distillations—while allowing heavy, complex sesquiterpene alcohols and chromones to coalesce into a smooth, buttery, deeply balsamic, and leathery profile with superior skin longevity. Genuine vintage oils from famous 1980s and 1990s distillations command between 500 and 2,500 USD per tola (11.66 grams). However, buyers must be vigilant against artificial aging scams, where dishonest sellers bake fresh oils under intense heat, expose them to ultraviolet radiation, or blend them with heavy cooking fats to simulate the darkness and viscosity of natural vintage maturity.',
    directAnswerAr:
      'يشير دهن العود المعتق (المعروف تجارياً بالمعتق أو القديم) إلى زيت اعود الخالص الذي خضع لعملية نضج طبيعية محكمة على مدى سنوات أو عقود. وخلال التعتيق، يؤدي التأكسد التدريجي وتبلمر المركبات إلى تضاؤل النوتات الحادة المتطايرة الناتجة عن التخمير والتقطير الحديث، مما يفسح المجال لكحوليات السيسكويتربين المعقدة لتندمج في قوام ناعم بلسمي دافئ يميل إلى الحلاوة والجلد المعتق مع ثبات عطري استثنائي على البشرة. وتباع الأدهان القديمة الأصيلة المستخلصة في ثمانينيات وتسعينيات القرن الماضي بنطاقات سعرية تتراوح بين خمسمائة وألفين وخمسمائة دولار أمريكي للتولة الواحدة (11.66 جراماً). ومع ذلك، يجب على المشتري الحذر من أساليب التعتيق الزائف، حيث يلجأ بعض التجار إلى تسخين الزيوت الحديثة حرارياً في أفران أو تعريضها للأشعة فوق البنفسجية أو خلطها بدهون ثقيلة لمحاكاة لزوجة الزيت المعتق طبيعياً ولونه الداكن.',
    sections: [
      {
        heading: 'The chemistry of maturation: why vintage oud smells rounded',
        headingAr: 'كيمياء النضج: لماذا تصبح رائحة العود المعتق ناعمة ومتوازنة',
        body: [
          'Freshly distilled agarwood oil—often termed Dehn Al Oud Jadeed—carries the direct chemical signature of its extraction conditions. In traditional Assamese hydro-distillation, chips are soaked in water for two to four weeks prior to boiling. This fermentation yields volatile organic acids, butyric compounds, and light monoterpenes that create a pungent, barnyard, or fecal opening. While prized by some traditional connoisseurs, these volatile compounds often overpower the delicate floral, woody, and honeyed undertones of the resin.',
          'When pure oud oil is allowed to age naturally, several chemical transformations take place. Light, volatile molecules with high vapor pressure slowly evaporate or esterify. Simultaneously, natural exposure to trace atmospheric oxygen promotes the slow oxidative polymerization of sesquiterpene hydrocarbons into oxygenated sesquiterpenoids (such as agarospirol, jinkohol, and valencene derivatives). This molecular restructuring rounds out sharp edges, softens pungency, and creates a dense, resinous base that adheres strongly to human skin lipids.',
          'True maturation cannot be rushed by industrial chemistry. Genuine ten-year or twenty-year aged oils exhibit a smooth transition from opening to drydown, retaining their character for twelve to twenty-four hours on skin and several days on cotton or wool fibers without turning sour or rancid.',
        ],
        bodyAr: [
          'يحمل دهن العود المقطر حديثاً (المعروف باسم دهن العود الجديد) البصمة الكيميائية المباشرة لظروف استخلاصه. ففي التقطير المائي التقليدي في أسام، يُنقع خشب العود في الماء لمدد تتراوح بين أسبوعين وأربعة أسابيع قبل الغليان. وينتج عن هذا التخمير أحماض عضوية متطايرة ومركبات بيوتيريكية تمنح الزيت الافتتاحية الحيوانية النفاذة المعروفة. ومع أن بعض الهواة يفضلون هذا الطابع، إلا أن تلك المركبات المتطايرة قد تطغى على النوتات البلسمية والخشبية الرقيقة للراتنج الأصيل.',
          'وعندما يُترك دهن العود الصافي لينضج طبيعياً، تحدث تحولات كيميائية دقيقة ومستمرة. فالمكونات الخفيفة سريعة التطاير تتبخر ببطء أو تتحول إلى إسترات عطرية ناعمة. وفي الوقت نفسه، يؤدي التماس الخفيف مع الأكسجين إلى أكسدة بطيئة للمركبات الهيدروكربونية لتتحول إلى كحوليات سيسكويتربينية أثقل وأكثر استقراراً (مثل مشتقات الأغاروسبيرول والجينكوهول). وهذا التحول الجزيئي يزيل الحدة واللدغة النفاذة، ويمنح الزيت قواماً كثيفاً يلتصق بثبات عالي بدهون الجلد.',
          'والتعتيق الطبيعي عملية حيوية لا يمكن اختصارها بالتسخين الصناعي السريع. فالأدهان المعتقة لعشر أو عشرين سنة تتميز بانتقال سلس بين طبقات الرائحة، وتدوم على البشرة من اثنتي عشرة إلى أربع وعشرين ساعة وعلى الأقمشة الصوفية والقطنية لعدة أيام دون أن تتحول رائحتها إلى حموضة أو زنخ.',
        ],
      },
      {
        heading: 'Proper storage protocols: glass, temperature, and aeration',
        headingAr: 'بروتوكولات التخزين السليم: الزجاج والحرارة والتهوية',
        body: [
          'Aging agarwood oil requires strict environmental controls to prevent spoilage, hydrolysis, or oxidation into acrid off-notes. The three cardinal rules of artisanal oud curation are:',
          'First, container integrity: Oud oil must always be stored in non-reactive, medical-grade borosilicate glass vials or traditional unglazed porcelain vessels. Plastic bottles, aluminum flasks, and rubber-stoppered droppers must be strictly avoided; the aggressive terpenes in oud oil slowly leach plasticizers and petroleum polymers into the oil, permanently contaminating its scent and analytical purity.',
          'Second, temperature and light stability: Vials should be kept in a dark, climate-controlled space maintained between 18°C and 22°C (64°F to 72°F). Direct sunlight and ultraviolet radiation break down delicate sesquiterpene structures, while excessive heat accelerates rancidity.',
          'Third, the aeration protocol: During the first six to twelve months following distillation, the bottle cap should be periodically opened for a few minutes in a clean, dust-free room. This controlled breathing allows residual microscopic water moisture from the distillation separator to evaporate and facilitates initial oxygen exchange. Once the oil has fully settled, the vial should be sealed airtight to preserve its precious mid and base notes.',
        ],
        bodyAr: [
          'يتطلب تعتيق زيت العود تحكماً بيئياً دقيقاً لحمايته من التحلل المائي أو التأكسد الجائر الذي يفسد الرائحة. وتشمل القواعد الأساسية لحفظ العود ما يلي:',
          'أولاً، وعاء الحفظ: يجب حفظ دهن العود دائماً في قوارير زجاجية محكمة من زجاج البوروسيليكات الخامل أو الأواني الخزفية غير المطلية. ويجب تجنب العبوات البلاستيكية وقطارات المطاط تماماً؛ لأن التربينات النشطة في زيت العود تذيب البلاستيك وتتحلل معه، مما يفسد نقاوة الزيت ورائحته إلى الأبد.',
          'ثانياً، ثبات الحرارة والضوء: تحفظ القوارير في مكان مظلم ومكيف بدرجة حرارة مستقرة تتراوح بين ثماني عشرة واثنتين وعشرين درجة مئوية. فالأشعة فوق البنفسجية وضوء الشمس المباشر يكسران الروابط الجزيئية للسيسكويتربينات، بينما تسبب الحرارة المفرطة زنخ الزيت.',
          'ثالثاً، بروتوكول التهوية: خلال الأشهر الأولى التي تلي التقطير، يحسن فتح غطاء القارورة لدقائق معدودة في غرفة نقية خالية من الغبار. وتسمح هذه التهوية المدروسة بتبخر بقايا الرطوبة المائية العالقة من جهاز الفصل، وتتيح تبادلاً هوائياً هادئاً يلطف الزيت. وبعد استقرار الزيت تماماً، يُحكم إغلاق القارورة لسنوات طويلة لحفظ نفحاته الثمينة.',
        ],
      },
      {
        heading: 'Detecting artificial vintage scams: baking, UV lamps, and fillers',
        headingAr: 'كشف حيل التعتيق المصطنع: التسخين والأشعة والمواد المكثفة',
        body: [
          'Because vintage oils command massive price premiums in Gulf markets, fraudulent aging techniques are widespread. Unscrupulous dealers deploy several methods to deceive consumers:',
          'Thermal baking: Fresh, watery, or low-grade oils are heated in ovens or double-boilers at 60°C to 90°C for days. The heat rapidly drives off water and light terpenes, turning the oil dark, viscous, and tar-like. However, this destroys delicate volatile floral top notes and imparts an unmistakable burnt, caramel, or scorched rubber undertone.',
          'Ultraviolet radiation: Sellers expose oil containers to high-intensity industrial UV lamps to accelerate photochemical reactions. While this alters the visual color, it frequently creates metallic, medicinal, and chemically harsh off-notes that never smooth out on skin.',
          'Laboratory gas chromatography mass spectrometry (GC-MS) readily identifies artificial aging: pure vintage oils show a balanced, rich spectrum of natural oxygenated sesquiterpenes, whereas baked oils reveal thermal degradation markers (such as furfurals and scorched pyrazine by-products) absent in naturally cured agarwood resin.',
        ],
        bodyAr: [
          'نظراً للفارق السعري الهائل الذي تحققه الأدهان المعتقة في أسواق الخليج، تنتشر أساليب متعددة للتعتيق الزائف. ومن أشهر هذه الحيل:',
          'التسخين والطبخ الحراري: يُوضع الزيت الحديث أو الخفيف في أفران تسخين أو حمامات مائية بحرارة تتراوح بين ستين وتسعين درجة مئوية لأيام متواصلة. وتؤدي الحرارة إلى تبخير الماء سريعاً وتكثيف قوام الزيت وجعله داكناً كالدبس، لكنها تدمر النوتات العطرية الرقيقة وتخلف رائحة احتراق وسكر محروق تشبه الكراميل المحروق والمطاط.',
          'التعريض للأشعة فوق البنفسجية: يعرض بعض التجار الزيوت لمصابيح أشعة صناعية لتسريع التفاعلات الكيميائية الضوئية، مما يغير اللون ظاهرياً لكنه يخلف روائح معدنية كيميائية لا تزول مع الوقت.',
          'ويكشف التحليل الكروماتوغرافي الغازي المخبري التعتيق المصطنع بوضوح: فالأدهان المعتقة طبيعياً تظهر طيفاً متوازناً وغنياً من كحوليات السيسكويتربين الطبيعية، بينما تظهر الزيوت المطبوخة حرارياً مركبات تفكك حراري دخيلة لا توجد في الراتنج الناضج بهدوء.',
        ],
      },
      {
        heading: 'Market valuation: vintage Assam vs modern plantation oils',
        headingAr: 'التقييم السوقي: أسام القديم مقابل زيوت المزارع الحديثة',
        body: [
          'Commercial valuation of vintage oud depends upon verified provenance, distillation year, and terroir. Authentic 1980s and 1990s wild Assam and Koh Kong distillations represent closed historical chapters, as the wild forests from which those old-growth trees were harvested are now strictly regulated under CITES Appendix II or exhausted.',
          'Modern plantation-distilled oils from Thailand (Trat), Vietnam, and Malaysia are clean, sustainable, and reliable, but they produce a different aesthetic: bright, sweet, fruity, and linear. When an Assam vintage oil is priced at 1,500 USD per tola while a fresh Trat oil is priced at 150 USD per tola, the price reflects historical scarcity, decades of evaporative volume loss (curators lose up to 10% of liquid volume over twenty years through micro-evaporation), and the patient capital required to hold inventory across generations.',
        ],
        bodyAr: [
          'يعتمد التقييم التجاري لدهن العود المعتق على إثبات المصدر وتاريخ التقطير وموطن الشجرة الأصلي. فالأدهان البرية القديمة المقطرة في الثمانينيات والتسعينيات من أسام وكوه كونغ تمثل مرحلة تاريخية استثنائية، إذ تخضع تلك الغابات القديمة اليوم لضوابط مشددة في ملحق سايتس الثاني أو توقف الحصاد البري فيها كلياً.',
          'أما زيوت المزارع الحديثة المستدامة في تايلاند وفيتنام وماليزيا فهي نقية ومستقرة وممتازة، ولكنها تقدم طابعاً عطرياً مختلفاً يتميز بالحلاوة والفاكهية والنقاء الشفاف. وعندما يُسعر دهن أسام قديم بألف وخمسمائة دولار للتولة بينما يسعر دهن ترات الحديث بمائة وخمسين دولاراً، فإن الفارق يعكس الندرة التاريخية، وفقدان جزء من حجم الزيت بالتبخر الطبيعي عبر عقود، والصبر الاستثماري اللازم لحفظ المخزون عبر أجيال.',
        ],
        callout: {
          title: 'Buyer verification summary',
          titleAr: 'خلاصة التحقق للمشتري',
          body:
            'A vintage label is a chronological claim, not an analytical certificate. Always demand documented batch lineage, inspect the drydown progression over 12 hours on skin, and ensure the oil carries no scorched caramel or burnt-rubber undertones.',
          bodyAr:
            'وسم المعتق ادعاء زمني وليس شهادة تحليلية بذاته. اطلب دائماً سجل الدفعة الموثق، واختبر تطور الرائحة على الجلد لمدة اثنتي عشرة ساعة، وتأكد من خلو الدهن من أي روائح احتراق أو كراميل محروق.',
        },
      },
    ],
    sourceIds: ['AGARWOOD_REVIEW_2014', 'ITTO_AGARWOOD_REVIEW', 'TRAFFIC_UAE_AGARWOOD_TRADE'],
    limitations:
      'This guide documents the chemical, historical, and market characteristics of aged agarwood oils. It does not certify the age, purity, or value of any commercial bottle, nor does it establish legal aging thresholds beyond trade conventions.',
    limitationsAr:
      'توثق هذه الصفحة الخصائص الكيميائية والتاريخية والسوقية لأدهان العود المعتقة. ولا تصادق على عمر أو نقاوة أو قيمة أي زجاجة تجارية بعينها، ولا تضع عتبات قانونية للتعتيق تتجاوز الأعراف التجارية.',
    nextSteps: [
      'Learn how laboratory reports verify purity',
      'Compare distillation methods in copper degs versus modern steam',
      'Read the price baseline dataset for observed retail bands',
      'Browse the verified directory of distillers',
    ],
    nextStepsAr: [
      'تعلم كيف تفحص التقارير المخبرية نقاوة الزيت',
      'قارن بين التقطير بالقدور النحاسية والبخار الحديث',
      'اطلع على خط الأساس لأسعار العود في الأسواق',
      'تصفح دليل المقطرين المعتمدين',
    ],
    faq: [
      {
        question: 'Does Dehn Al Oud improve with age like wine?',
        answer:
          'Yes, authentic pure oud oil naturally improves over 5 to 20 years if stored correctly in airtight dark glass. Natural oxidation breaks down harsh fermented top notes, while sesquiterpene alcohols polymerize into a deeper, smoother, more balsamic aroma with enhanced skin tenacity.',
      },
      {
        question: 'How can you tell if an aged oud oil has been artificially baked?',
        answer:
          'Artificially baked oils often exhibit an unnatural burnt caramel, scorched sugar, or rubbery smell beneath the surface, accompanied by a flat, linear drydown that lacks the nuanced floral and balsamic transitions of genuinely cured vintage oil.',
      },
      {
        question: 'Why are vintage 1980s and 1990s oud oils so expensive?',
        answer:
          'Vintage oils from that era were harvested from centuries-old wild Aquilaria agallocha and crassna trees that are now protected under CITES Appendix II, combined with decades of slow evaporative volume loss and patient capital maintenance.',
      },
    ],
    related: [
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'quality/lab-report-reading', label: 'Reading chromatographic laboratory reports' },
      { slug: 'quality/boya-and-fat-oud-grades', label: 'Boya Oud and Fat Oud classifications' },
      { slug: 'collecting/aging-and-storage-care', label: 'Proper storage and aging care for oud collections' },
      { slug: 'glossary/qadeem', label: 'Qadeem trade descriptor' },
      { slug: 'glossary/moattaq', label: 'Moattaq aging descriptor' },
    ],
  }),

  simpleGuide({
    slug: 'using-oud/how-to-burn-oud-and-bakhoor',
    parent: 'using-oud',
    title: 'How to Burn Oud Wood and Bakhoor: Charcoal vs Electric Burners and Temperature Guide',
    titleAr: 'طريقة تبخير خشب العود والبخور: الفحم مقابل المباخر الكهربائية ودليل درجات الحرارة',
    summary:
      'The thermodynamics of agarwood vaporization: charcoal ash-bed techniques, precision electric subitism heaters, temperature thresholds for sesquiterpenes versus scorching wood, and traditional Majlis fumigation protocols.',
    summaryAr:
      'الديناميكا الحرارية لتبخير العود: تقنيات طبقة الرماد فوق الفحم، المباخر الكهربائية الدقيقة، عتبات درجات الحرارة لتبخير الراتنج مقابل احتراق الخشب، وبروتوكولات التبخير في المجالس.',
    directAnswer:
      'Burning natural agarwood chips and blended bakhoor is a thermal vaporization process rather than open combustion. The goal is to heat the wood to between 110°C and 160°C, the temperature window where oleoresin, sesquiterpenes, and aromatic chromones gently boil and vaporize into fragrant, white, non-irritating smoke. If wood is placed directly on red-hot charcoal (which exceeds 500°C to 700°C), the raw cellulose wood fibers instantly catch fire and scorch, releasing acrid, acrid carbon smoke that destroys delicate floral and vanillic notes. To burn correctly on natural charcoal, the briquette must burn down until covered in a thick layer of grey ash, or the chip must sit atop a protective sheet of natural mica or folded aluminum foil. For connoisseur-grade sinking agarwood, electric ceramic heaters (such as subitism burners) calibrated between 120°C and 180°C provide the ultimate experience, delivering pure unadulterated resin vapor for up to an hour without a trace of burnt wood carbon.',
    directAnswerAr:
      'تبخير خشب العود الطبيعي والبخور المعطر عملية تسخين وتبخير حراري وليست حرقاً مباشراً. فالهدف الأساسي هو إيصال الخشب إلى درجة حرارة تتراوح بين مائة وعشر درجات ومائة وستين درجة مئوية، وهي العتبة الحرارية المثالية التي يفور عندها الراتنج وتتبخر مركبات السيسكويتربين البلسمية في صورة دخان أبيض نقي زكي الرائحة. أما إذا وُضعت كسرة العود مباشرة فوق جمر الفحم الملتهب (الذي تتجاوز حرارته خمسمائة إلى سبعمائة درجة مئوية)، فإن ألياف السيليلوز الخشبية تحترق فوراً وتتفحم، مطلقة دخاناً كربونياً لاذعاً يفسد النوتات العطرية الرقيقة. وللتبخير الصحيح على الفحم الطبيعي، يجب ترك الجمر حتى يتغطى بطبقة كثيفة من الرماد الرمادي لتخفيف وهج الحرارة، أو وضع صفيحة رقيقة من الميكا أو رقائق الألومنيوم كعازل حراري. أما لأخشاب الغطاس النادرة، فتعد المباخر الكهربائية الخزفية الدقيقة المضبوطة بين مائة وعشرين ومائة وثمانين درجة الخيار الأمثل للاستمتاع براتنج العود الصافي لساعات دون أي شوائب كربونية.',
    sections: [
      {
        heading: 'Thermal vaporization vs wood combustion: the resin temperature window',
        headingAr: 'التبخير الحراري مقابل احتراق الخشب: العتبة الحرارية للراتنج',
        body: [
          'Understanding the physical composition of an agarwood chip is essential to burning it properly. A chip consists of two intertwined components: natural cellulose wood fibers and concentrated aromatic oleoresin deposited within the xylem parenchyma. These two materials respond to heat at drastically different temperatures.',
          'Sesquiterpenoid resin and chromones begin to melt, bubble, and vaporize into aromatic compounds between 105°C and 140°C (221°F to 284°F). This is the golden zone where the true fragrance of the terroir—honeyed floral Cambodian, deep leathery Assam, or medicinal balsamic Kalimantan—is released into the room in pure, translucent vapor. At temperatures above 180°C (356°F), heavier resin fractions evaporate. However, once temperatures exceed 220°C (428°F), the dry wood fibers begin pyrolytic combustion, generating irritating carbon monoxide, acrolein, and charred carbon smoke that stings the eyes and overpowers the aroma.',
          'Therefore, the art of burning oud is heat moderation: delivering enough energy to sustain the resin bubble while preventing the wood substrate from combusting into black ash.',
        ],
        bodyAr: [
          'يعد فهم التركيب الفيزيائي لكسرة العود مفتاحاً للتبخير السليم. فالكسرة تتكون من عنصرين متداخلين: ألياف خشبية سيليلوزية، وراتنج زيتي عطري متراكم في أوعية الخشب. ويتفاعل هذان العنصران مع الحرارة بدرجات متفاوتة تماماً.',
          'ويبدأ راتنج السيسكويتربين بالذوبان والفوران والتبخر العطري بين مائة وخمس درجات ومائة وأربعين درجة مئوية. وهذه هي المنطقة الذهبية التي ينطلق فيها عبير الموطن الأصلي — سواء كان حلاوة كمبودية فاكهية، أو عمقاً جلدياً هندياً، أو بلسمية كاليمانتان النقية — في صورة دخان شفاف نقي لا يسبب كحة أو اختناقاً. وعندما تتجاوز الحرارة مائتين وعشرين درجة مئوية، تبدأ ألياف الخشب نفسها بالاشتعال والتفحم، مطلقة دخاناً كربونياً لاذعاً يؤذي العينين ويطغى على شذى الراتنج.',
          'وعليه، فإن فن التبخير هو موازنة الحرارة: توفير طاقة حرارية كافية لإدامة فوران الراتنج مع منع ألياف الخشب الحاملة له من الاحتراق المباشر.',
        ],
      },
      {
        heading: 'The Charcoal Method: natural briquettes, ash bed, and mica plates',
        headingAr: 'طريقة الفحم التقليدية: الفحم الطبيعي، وسادة الرماد، وصفائح الميكا',
        body: [
          'Natural charcoal remains the cultural standard in Arabian Majlis hospitality. However, using modern quick-light chemical briquettes is strongly discouraged; chemical accelerants, sulfur, and saltpeter emit foul petroleum odors that taint fine incense.',
          'To burn oud properly using natural coconut-shell or lemonwood charcoal, follow these steps:',
          '1. Ignition: Ignite the charcoal briquette completely on a stove or torch until it glows red throughout. Never place oud on charcoal that is still black or half-ignited.',
          '2. Ash-bed tempering: Allow the charcoal to sit in the mabkhara for five to ten minutes until a fine layer of grey-white ash blankets the surface. This ash acts as an organic thermal buffer, reducing the surface heat from 600°C down to the safe 150°C zone.',
          '3. The mica or foil barrier: For high-value sinking chips, place a small, paper-thin sheet of natural muscovite mica or double-folded clean aluminum foil directly over the glowing charcoal, then rest the wood chip on top. The chip will bubble gently for fifteen to thirty minutes, releasing pure fragrant resin without ever charring.',
          '4. Orientation: When placing raw wood on charcoal, always place the less-resinous side (the lighter wood base) facing down toward the heat source, allowing the dark resinous face to warm gradually from below and bubble upward.',
        ],
        bodyAr: [
          'يظل الفحم الطبيعي الخيار الأصيل في تقاليد الضيافة والمجالس العربية. ولكن يجب تجنب أقراص الفحم سريعة الاشتعال الكيميائية؛ لأن معجلات الاشتعال والكبريت تطلق روائح بترولية تفسد شذى العود الفاخر.',
          'وللتبخير الصحيح باستخدام فحم قشور جوز الهند الطبيعي أو فحم الليمون، اتبع الخطوات التالية:',
          'أولاً، الاشتعال الكامل: أشعل قرص الفحم جيداً حتى يتحول إلى جمر متقد بالكامل. وإياك ووضع العود فوق فحم لا يزال أسود أو مشتعلاً جزئياً.',
          'ثانياً، وسادة الرماد العازلة: اترك الجمر في المبخرة لمدة خمس إلى عشر دقائق حتى تتكون على سطحه طبقة ناعمة من الرماد الرمادي الفاتح. وتعمل هذه الطبقة كعازل حراري طبيعي يخفض حرارة السطح المباشرة من ستمائة درجة إلى نطاق المائة وخمسين درجة الآمن.',
          'ثالثاً، صفيحة الميكا أو رقائق الألومنيوم: للأخشاب الثمينة والغطاس، ضع صفيحة ميكا طبيعية رقيقة أو طبقة مزدوجة من رقائق الألومنيوم فوق الجمر، ثم ضع كسرة العود فوقها. وسيفور الراتنج بهدوء لمدة ربع إلى نصف ساعة مخرجاً أزكى الروائح دون أن تتفحم ألياف الخشب.',
          'رابعاً، توجيه الكسرة: ضع دائماً الوجه الأقل راتنجاً (الأفتح لوناً) ملامساً لسطح الجمر، مما يسمح للراتنج الكثيف على الوجه العلوي بالتسخين التدريجي والفوران إلى الأعلى.',
        ],
      },
      {
        heading: 'Electric heaters and subitism burners: precision temperature control',
        headingAr: 'المباخر الكهربائية الدقيقة: التحكم في درجات الحرارة للمقتنين',
        body: [
          'For connoisseurs evaluating rare vintage chips or delicate Japanese Kyara slivers, modern electric ceramic incense heaters (often called subitism burners) offer unmatched control. Unlike charcoal, which inevitably cools down over an hour, electric heaters provide constant, adjustable heat.',
          'Optimal temperature settings by material type:',
          '110°C to 130°C: Ideal for thin shaving slivers, high-grade Kyara, and delicate floral agarwood from Pursat or Trat. This temperature volatilizes monoterpenes and delicate top notes without burning.',
          '140°C to 160°C: The prime operating temperature for dense wild Assam chips, sinking grade wood, and vintage stock. The resin bubbles vigorously and releases rich balsamic base notes.',
          '170°C to 190°C: Suitable for blended bakhoor tablets, dense sugar-bound maamoul, and muattar wood chips saturated in perfume oils. The higher temperature is necessary to vaporize amber, frankincense, and musk bases.',
        ],
        bodyAr: [
          'للمقتنين والخبراء الذين يقيمون أخشاب الكيارا النادرة أو رقائق الغطاس الثمينة، توفر المباخر الكهربائية الخزفية دقة لا تضاهى. فعلى عكس الفحم الذي تنخفض حرارته تدريجياً، تحافظ المباخر الكهربائية على حرارة ثابتة قابلة للمعايرة.',
          'درجات الحرارة المثالية بحسب صنف المادة:',
          'من مائة وعشر إلى مائة وثلاثين درجة مئوية: مثالية للرقائق النحيفة جداً وخشب الكيارا الرفيع وعود كوه كونغ وترات الزهري. وتطلق هذه الدرجة النوتات العليا الصافية دون أي أثر للاحتراق.',
          'من مائة وأربعين إلى مائة وستين درجة مئوية: الدرجة الذهبية لأخشاب أسام البرية الكثيفة وكسر الغطاس الراتنجية، حيث يفور الراتنج بكثافة مطلقة النوتات البلسمية العميقة.',
          'من مائة وسبعين إلى مائة وتسعين درجة مئوية: تناسب البخور المعمول المحتوي على سكر وعنبر ورقائق المعطر المشبعة بالزيوت، إذ تلزم حرارة أعلى لتبخير صمغ اللبان والعنبر والمسك.',
        ],
      },
      {
        heading: 'Format comparison: raw chips, Bakhoor, Maamoul, and Muattar',
        headingAr: 'مقارنة الأصناف: الخشب الطبيعي، البخور المسقي، المعمول، والمعطر',
        body: [
          'Before igniting any burner, understand the differences among the commercial incense formats:',
          'Raw Agarwood Chips (Oud Wood): 100% natural resin-infiltrated heartwood. Free of added oils, sugars, or binders. Smoke is dry, noble, woody, and long-lasting.',
          'Bakhoor / Oud Masqi: Natural wood chips soaked and simmered in aromatic oils, floral absolutes, and liquid amber. Smoke is sweet, intense, and room-filling.',
          'Maamoul: Pressed balls or tablets made from finely pulverized low-grade agarwood powder, frankincense (luban), amber resin, and perfume oils held together with natural gum or sugar syrup. Burns evenly and economically.',
          'Muattar: Thin wood slivers or shavings scented with concentrated perfume oils. Best burned gently at low temperatures to avoid scorching the thin wood base.',
        ],
        bodyAr: [
          'قبل إشعال المبخرة، يجب إدراك الفروق الجوهرية بين أصناف البخور في الأسواق:',
          'خشب العود الطبيعي الصافي: خشب قلب طبيعي مشبع بالراتنج مائة بالمائة، خالٍ من أي عطور مضافة أو سكريات. دخانه نقي وأصيل وفاخر يمثل رائحة الشجرة بذاتها.',
          'البخور والعود المسقي: رقائق خشب طبيعي منقوعة ومطبوخة في خلاصات دهن الورد والمسك والعنبر. دخانه كثيف وحلو يعطر أرجاء البيت والمجالس الكبيرة.',
          'المعمول: كرات أو أقراص مضغوطة مصنوعة من مسحوق خشب العود الناعم الممزوج بصمغ اللبان والعنبر والزيوت العطرية ودبس التمر أو السكر الرابط. يتميز بانتظام احتراقه واقتصاديته.',
          'المعطر: رقائق خشب ناعمة خفيفة معطرة بزيوت فواحة. يفضل تبخيرها على حرارة هادئة لحماية الرقائق الرقيقة من التفحم السريع.',
        ],
        callout: {
          title: 'Safety and ventilation rule',
          titleAr: 'قواعد السلامة والتهوية',
          body:
            'Never leave burning charcoal unattended. Always ensure adequate room ventilation when burning incense indoors, especially in rooms with young children, elderly family members, or respiratory sensitivities.',
          bodyAr:
            'لا تترك جمر الفحم مشتعلاً أبداً دون مراقبة. واحرص دائماً على وجود تهوية كافية في الغرف والمجالس عند التبخير، خاصة في وجود الأطفال أو كبار السن أو من يعانون من حساسية الصدر.',
        },
      },
    ],
    sourceIds: ['AGARWOOD_REVIEW_2014', 'TRAFFIC_UAE_AGARWOOD_TRADE', 'IFRA_STANDARDS'],
    limitations:
      'This guide provides thermodynamic and cultural operating procedures for burning agarwood and incense. It does not certify the fire safety of any burner device or establish health tolerances for smoke inhalation.',
    limitationsAr:
      'يوفر هذا الدليل إرشادات حرارية وعملية لتبخير العود والبخور. ولا يصادق على السلامة الصناعية لأي مبخرة بعينها، ولا يضع حدوداً صحية لاستنشاق الدخان.',
    nextSteps: [
      'Read the guide on commercial bakhoor forms and naming',
      'Learn how to choose between raw wood and distilled oils',
      'Review proper storage and curation protocols',
      'Browse verified distillers and incense houses in the directory',
    ],
    nextStepsAr: [
      'اقرأ دليل أصناف البخور ومسمياتها التجارية',
      'تعلم كيف تختار بين الخشب الطبيعي والزيوت المقطرة',
      'تعرف على طرق التخزين والحفظ السليم لمجموعات العود',
      'تصفح دليل المنتجين وبيوت البخور المعتمدة',
    ],
    faq: [
      {
        question: 'Why does my oud wood smell like burning charcoal or burnt wood?',
        answer:
          'Your heat source is too hot. Direct contact with glowing charcoal exceeding 500°C scorches wood cellulose into acrid carbon smoke. Let the charcoal build a protective layer of grey ash first, or use a mica sheet to keep temperatures in the safe 120°C to 160°C resin vaporization zone.',
      },
      {
        question: 'What is the best temperature to vaporize high-grade agarwood on an electric heater?',
        answer:
          'The ideal vaporization temperature is between 120°C and 160°C (248°F to 320°F). High-grade resin bubbles steadily at this threshold without burning the underlying wood fibers, releasing pure aroma for up to an hour.',
      },
      {
        question: 'What is the difference between raw agarwood chips and Bakhoor?',
        answer:
          'Raw agarwood chips are 100% natural unadulterated heartwood that smells solely of natural resin. Bakhoor refers to wood chips, shavings, or powders that have been intentionally infused, simmered, or coated with perfume oils, musk, amber, and botanical essences.',
      },
    ],
    related: [
      { slug: 'products/bakhoor-forms', label: 'Commercial bakhoor and incense forms' },
      { slug: 'buying/choosing-oud-wood', label: 'Choosing an oud wood purchase' },
      { slug: 'quality/sinking-claims', label: 'Hydrostatic density and sinking claims' },
      { slug: 'quality/boya-and-fat-oud-grades', label: 'Boya Oud and Fat Oud classifications' },
      { slug: 'collecting/aging-and-storage-care', label: 'Proper storage and aging care for oud collections' },
    ],
  }),

  simpleGuide({
    slug: 'sourcing/wholesale-vs-retail-buying-guide',
    parent: 'sourcing',
    title: 'Buying Oud Wholesale vs Retail: Minimum Orders, CITES Permits, and Supplier Vetting',
    titleAr: 'شراء العود بالجملة والتجزئة: الحد الأدنى للطلب، تصاريح سايتس والتحقق من الموردين',
    summary:
      'The comprehensive commercial playbook for sourcing agarwood wood and oil: commercial volumes versus personal baggage limits, CITES Appendix II export permits, laboratory testing certificates (COA), and secure payment escrow.',
    summaryAr:
      'الدليل التجاري الشامل لتوريد خشب ودهن العود: الفروق بين الكميات التجارية وحدود الأمتعة الشخصية، تصاريح تصدير سايتس، شهادات الفحص المخبري، والتعامل المالي الآمن.',
    directAnswer:
      'Buying agarwood wholesale differs fundamentally from retail purchasing in unit scale, regulatory documentation, and legal exposure. Retail buyers purchase small quantities—measured in grams for wood chips and tolas (11.66 grams) or milliliters for oil—and benefit from CITES personal-effects exemptions (Resolution Conf. 13.7 Rev. CoP17) permitting up to 1 kilogram of wood chips, 24 milliliters of oil, and 2 bead sets in accompanied international passenger baggage without permits. Wholesale buyers, by contrast, transact in multi-kilogram chip consignments and liter drums of essential oil where international customs seizure is guaranteed without valid CITES Appendix II export permits, national phytosanitary certificates, and export quotas from the source government. Furthermore, wholesale transactions require binding batch-locking sampling agreements, laboratory Certificates of Analysis (COA) verifying GC-MS purity, and secure escrow or letter of credit (LC) terms to eliminate substitution fraud.',
    directAnswerAr:
      'يختلف شراء العود بالجملة عن الشراء بالتجزئة اختلافاً جذرياً في وحدات القياس، والوثائق التنظيمية، والمسؤولية القانونية. فمشتري التجزئة يقتني كميات محدودة تُقاس بالجرامات لكسر الخشب وبالتولة (11.66 جراماً) أو المليلتر للزيت، ويستفيد من إعفاءات الأمتعة الشخصية لمعاهدة سايتس (القرار 13.7 المنقح) التي تسمح بحمل ما يصل إلى كيلوجرام واحد من الخشب و24 مليلتراً من الدهن ومسبحتين في الأمتعة الشخصية المصحوبة للمسافر دون الحاجة لتصاريح. أما مشتري الجملة فيتعامل بأوزان الكيلوجرامات وبراميل الزيت باللترات، حيث تصادر الجمارك الشحنات حتماً ما لم تكن مصحوبة بتصاريح تصدير رسمية للملحق الثاني من سايتس وشهادات صحة نباتية وحصص تصديرية معتمدة من حكومة بلد المنشأ. كما تتطلب صفقات الجملة اتفاقيات عينات ملزمة برقم الدفعة، وشهادات تحليل مخبري تثبت نقاوة الزيت بكروماتوغرافيا الغاز، واعتمادات مستندية بنكية تضمن حقوق الطرفين.',
    sections: [
      {
        heading: 'Commercial scale: retail tolas vs wholesale kilograms and liters',
        headingAr: 'الحجم التجاري: تولات التجزئة مقابل كيلوجرامات ولترات الجملة',
        body: [
          'In retail transactions across the Arabian Gulf, Europe, and North America, oud oil is priced and sold primarily by the tola—a traditional South Asian weight unit standardizing at 11.66 grams (often packaged commercially in quarter-tola 2.9g or half-tola 5.8g glass dip-stick bottles). High-grade artisanal oils retail between 80 USD and 500 USD per tola, with rare vintages exceeding 1,500 USD. Retail agarwood wood is packaged in 25-gram, 50-gram, or 100-gram decorative boxes.',
          'In wholesale B2B trade, the pricing paradigm shifts entirely to metric kilograms (for wood) and liters or kilograms (for oil). True distillers in Assam, Trat, Koh Kong, and Kalimantan calculate pricing on crude extraction batches. Minimum order quantities (الحد الأدنى للطلب) typically start at 1 kilogram for mid-to-high grade wood chips and 500 grams to 1 kilogram for distilled oils. Commercial perfumery compounders and fragrance houses source oil in 5-liter, 10-liter, or 25-liter aluminum canisters. Pricing at wholesale drops by 40% to 75% compared to retail tola rates, reflecting the elimination of bottling, branding, and retail markup.',
        ],
        bodyAr: [
          'في مبيعات التجزئة بالخليج العربي وأوروبا وأمريكا، يُسعر دهن العود ويُباع تقليدياً بوحدة «التولة» — وهي وحدة وزن تراثية تعادل رسمياً 11.66 جراماً (وتعبأ تجارياً في قوارير ربع تولة تعادل 2.9 جرام أو نصف تولة تعادل 5.8 جرام). وتباع الأدهان الخالصة بالتجزئة بأسعار تتراوح بين ثمانين وخمسمائة دولار للتولة، بينما تتجاوز الأدهان النادرة ألف وخمسمائة دولار. أما خشب العود فيباع للمستهلك في علب تزن خمسة وعشرين أو خمسين أو مائة جرام.',
          'أما في تجارة الجملة، فتتحول الحسابات كلياً إلى الكيلوجرام للأخشاب واللتر أو الكيلوجرام للزيوت. ويحسب المقطرون في أسام وترات وكوه كونغ وكاليمانتان أسعارهم بناءً على تكاليف دورات التقطير الخام. ويبدأ الحد الأدنى للطلب (الحد الأدنى للطلب) عادة من كيلوجرام واحد للأخشاب المتوسطة والعالية، ونصف كيلوجرام إلى كيلوجرام للزيوت المقطرة. وتشتري دور العطور والمصانع العالمية كميات تتراوح بين خمسة لترات وخمسة وعشرين لتراً في أوعية ألومنيوم مخصصة. وتنخفض أسعار الجملة بنسبة تتراوح بين أربعين وخمسة وسبعين بالمائة مقارنة بأسعار التجزئة نتيجة إلغاء تكاليف التعبئة والتجزئة والتسويق.',
        ],
      },
      {
        heading: 'Regulatory compliance: CITES permits, export quotas, and baggage rules',
        headingAr: 'الامتثال القانوني: تصاريح سايتس، الحصص التصديرية، وقواعد الأمتعة',
        body: [
          'All species of Aquilaria and Gyrinops are listed under Appendix II of CITES (Convention on International Trade in Endangered Species of Wild Fauna and Flora). This classification strictly regulates cross-border movement:',
          'Personal baggage exemption: Under CITES Resolution Conf. 13.7 (Rev. CoP17) and national customs circulars (such as Indian CBIC Instruction 05/2025-Customs and UAE Ministry of Climate Change guidelines), individual travelers may transport up to 1 kilogram of wood chips, 24 milliliters of oil, and up to 2 bead sets or carvings in accompanied passenger baggage for personal use without CITES permits.',
          'Commercial cargo requirements: Any shipment sent via air freight, maritime container, or commercial courier (FedEx, DHL, freight forwarders) requires full formal documentation. The exporter must provide a valid CITES Export Permit issued by the source country’s Management Authority, a Phytosanitary Certificate certifying absence of agricultural pests, and proof that the consignment falls within the country’s legal national export quota. For imports into the European Union or the United States, an import permit or import declaration must be cleared before the goods arrive at the border.',
        ],
        bodyAr: [
          'تندرج جميع أصناف شجر العود (أكيلاريا وجيرينوبس) تحت الملحق الثاني من اتفاقية التجارة الدولية بالأنواع المهددة بالانقراض (سايتس). وتفرض هذه الاتفاقية ضوابط صارمة على الشحن الدولي:',
          'إعفاء الأمتعة الشخصية للمسافرين: وفقاً لقرار سايتس 13.7 المنقح والتعليمات الجمركية الوطنية (مثل تعليمات الجمارك الهندية 05/2025 وضوابط وزارة التغير المناخي والبيئة في الإمارات)، يُسمح للمسافر بنقل ما يصل إلى كيلوجرام واحد من خشب العود، و24 مليلتراً من دهن العود، ومسبحتين أو تحفتين، ضمن الأمتعة الشخصية المصحوبة للاستخدام الفردي دون الحاجة إلى استخراج تصاريح سايتس مسبقة.',
          'متطلبات الشحن التجاري بالجملة: تخضع أي شحنة تجارية تشحن عبر الشحن الجوي أو البحري أو الطرود التجارية لرقابة مشددة، وتتطلب حتماً: تصريح تصدير سايتس رسمياً صادراً من السلطة الإدارية لبلد المنشأ، وشهادة صحة نباتية معتمدة تثبت خلو الخشب من الآفات، وإثباتاً بأن الشحنة تقع ضمن الحصة التصديرية الرسمية للبلد. وعند الاستيراد إلى الاتحاد الأوروبي أو الولايات المتحدة، يجب تخليص إذن الاستيراد المسبق لتجنب المصادرة الجمركية الفورية.',
        ],
      },
      {
        heading: 'Technical testing & Certificate of Analysis (COA) for wholesale drums',
        headingAr: 'الفحص الفني وشهادة التحليل المخبري لبراميل الجملة',
        body: [
          'In professional wholesale sourcing, trusting a seller’s sensory description or video demonstration is insufficient. Industrial perfume manufacturers and wholesale distributors mandate a strict quality dossier:',
          'Certificate of Analysis (COA): Must state the botanical species, physical parameters (specific gravity, optical rotation, refractive index at 20°C), acid value, and ester value.',
          'Gas Chromatography-Mass Spectrometry (GC-MS): A full chromatographic trace must identify key authentic sesquiterpene markers (agarospirol, beta-agarofuran, jinkohol, valencene derivatives) while proving the complete absence of phthalates, benzyl benzoate, dipropylene glycol (DPG), and synthetic carrier oils.',
          'Batch-Locking Protocol: When purchasing bulk oil, the buyer must insist that a sealed pre-shipment sample (PSS) is drawn directly from the production drum, signed, and tested. The sales contract must stipulate that the delivered bulk cargo must match the chromatographic fingerprint of the pre-shipment sample within a defined analytical tolerance.',
        ],
        bodyAr: [
          'في التوريد التجاري المحترف، لا يكفي الاعتماد على وصف البائع أو مقاطع الفيديو. وتلزم مصانع العطور العالمية وموزعو الجملة بتوفير ملف فني متكامل لكل شحنة:',
          'شهادة التحليل المخبري: يجب أن تذكر صنف الشجرة النباتي بدقة، والمعايير الفيزيائية (الكثافة النوعية، زاوية الانحراف الضوئي، معامل الانكسار عند عشرين درجة مئوية)، وقيمة الحموضة ورقم التصبن.',
          'فحص كروماتوغرافيا الغاز وقياس الطيف الكتلي: يقدم تقريراً تحليلياً بالمركبات السيسكويتربينية الأصيلة (الأغاروسبيرول، الأغاروفوران، الجينكوهول)، ويثبت خلو الشحنة تماماً من المذيبات الاصطناعية ومركبات الفثالات والزيوت الحاملة البترولية.',
          'بروتوكول تثبيت الدفعة: عند التعاقد على كميات كبيرة، يجب سحب عينة ممثلة ومختومة من برميل الشحن ذاته وإرسالها للفحص المسبق. وينص العقد التجاري صراحة على أن الشحنة النهائية الموردة يجب أن تتطابق تحليلياً وبصمياً مع عينة الفحص المسبق المعتمدة.',
        ],
      },
      {
        heading: 'Commercial contracts: payments, escrow, and dispute mitigation',
        headingAr: 'العقود التجارية: الدفعات، الضمان المالي، وتفادي النزاعات',
        body: [
          'The international agarwood trade has historically suffered from high dispute rates due to the absence of unified objective grading standards. To protect working capital:',
          'Never wire 100% advance payment via direct bank transfer to unfamiliar suppliers. Legitimate international distillers accept irrevocable Letters of Credit (LC) payable upon presentation of clean bills of lading and valid CITES export permits, or third-party escrow services.',
          'Structure milestone payments: 20% deposit upon contract signing, 40% upon verified pre-shipment inspection and CITES permit issuance, and 40% balance upon arrival and independent customs clearance at the destination port.',
          'Specify return and arbitration clauses: Contracts must explicitly detail which arbitration chamber governs disputes and state that any batch failing independent GC-MS purity or weight density tests triggers immediate return at the seller\'s expense.',
        ],
        bodyAr: [
          'شهدت تجارة العود الدولية تاريخياً نزاعات متكررة نظراً لغياب تصنيف قياسي عالمي موحد ملزم. ولحماية رأس المال التشغيلي:',
          'تجنب التحويل المالي المسبق الكامل عبر التحويلات البنكية المباشرة لموردين غير معروفين. ويتعامل المقطرون الموثوقون عبر الاعتمادات المستندية البنكية غير القابلة للإلغاء التي تصرف مقابل بوالص الشحن وتصاريح سايتس المعتمدة، أو عبر خدمات الضمان المالي المحايدة.',
          'هيكلة الدفعات على مراحل: عشرون بالمائة عند توقيع العقد، وأربعون بالمائة عند فحص العينة الممثلة واستخراج تصريح سايتس، والأربعون بالمائة المتبقية بعد وصول الشحنة والفحص النهائي في ميناء الوصول.',
          'تحديد شروط التحكيم والرد: يجب أن يحدد العقد غرفة التحكيم التجاري المعتمدة، وينص بوضوح على أن فشل الشحنة في اجتياز فحص النقاوة المخبري أو مطابقة الكثافة يوجب استرجاع البضاعة وتغطية التعويض على حساب البائع.',
        ],
        callout: {
          title: 'Wholesale checklist rule',
          titleAr: 'قاعدة فحص الجملة الأساسية',
          body:
            'A wholesale deal without a CITES export permit, a verified pre-shipment sample, and an independent GC-MS purity test is an unhedged speculative risk. Always lock the batch to the test report before authorizing cargo release.',
          bodyAr:
            'أي صفقة جملة دولية تخلو من تصريح تصدير سايتس، وعينة ممثلة مختومة مسبقاً، وفحص كروماتوغرافي مستقل للنقاوة هي مغامرة تجارية غير محسوبة. اربط دائماً دفعة الشحن بتقرير الفحص قبل الإفراج عن الدفعات المالية.',
        },
      },
    ],
    sourceIds: ['CITES_APPENDICES', 'CBIC_AGARWOOD_PERSONAL_CARRIAGE', 'ITTO_AGARWOOD_REVIEW'],
    limitations:
      'This guide outlines international commercial practices, CITES regulatory requirements, and laboratory vetting procedures for wholesale sourcing. It does not constitute formal legal or customs counsel for specific jurisdictions.',
    limitationsAr:
      'يوضح هذا الدليل الممارسات التجارية الدولية وضوابط معاهدة سايتس وفحوصات التحقق المخبري لتوريد الجملة. ولا يمثل استشارة قانونية أو جمركية خاصة بكل دولة.',
    nextSteps: [
      'Submit an anonymous wholesale requirement via the RFQ intake',
      'Read the CITES documentation breakdown across global markets',
      'Learn how to read and interpret laboratory test scopes',
      'Browse the verified directory of distillers and exporters',
    ],
    nextStepsAr: [
      'قدم طلب توريد جملة محايد عبر استمارة التوريد',
      'اقرأ تفصيل وثائق سايتس عبر الأسواق العالمية',
      'تعلم كيف تقرأ وتفسر تقارير الفحص المخبري',
      'تصفح دليل المقطرين والمصدرين المعتمدين',
    ],
    faq: [
      {
        question: 'How much oud wood and oil can a traveler carry without a CITES permit?',
        answer:
          'Under CITES Resolution Conf. 13.7 (Rev. CoP17), travelers may carry up to 1 kilogram of agarwood chips, 24 milliliters of pure oil, and up to 2 bead sets or carvings in accompanied personal passenger baggage without CITES export permits.',
      },
      {
        question: 'What documentation is legally required to import wholesale agarwood cargo?',
        answer:
          'Commercial cargo requires an original CITES Export Permit from the source country’s Management Authority, a Phytosanitary Certificate, commercial invoice, airway bill, and in jurisdictions like the EU or US, an approved CITES Import Permit.',
      },
      {
        question: 'What is the typical Minimum Order Quantity (الحد الأدنى للطلب) for wholesale oud distillers?',
        answer:
          'Direct distillers typically enforce minimum order quantities starting at 1 kilogram for mid-to-high grade wood chips and 500 grams to 1 kilogram (or 1 liter) for pure distilled essential oils.',
      },
    ],
    related: [
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'trade/cites-import-by-market', label: 'CITES import regulations by market' },
      { slug: 'sourcing/wholesale-sample-plan', label: 'Build a wholesale oud sample plan' },
      { slug: 'sourcing/comparing-supplier-quotes', label: 'Compare supplier quotations without assuming equivalence' },
      { slug: 'quality/lab-report-reading', label: 'Reading chromatographic laboratory reports' },
    ],
  }),
];
