import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

/**
 * The production, trade and sourcing articles.
 *
 * These answer the process questions: how wood becomes oil, what a
 * document establishes, how to match a sample to a bulk delivery, and
 * how a seller’s location differs from the origin of its material and
 * the destinations it serves.
 */

export const productionTradeArticles: Article[] = [
  simpleGuide({
    slug: 'production/oud-extraction-methods',
    parent: 'production',
    title: 'Distillation and extraction comparisons',
    titleAr: 'مقارنات التقطير والاستخلاص',
    summary:
      'Copper deg, steam and hydro-distillation: what each method does to the oil that comes out.',
    summaryAr: 'القدّ النحاسي والبخار والتقطير المائي: ما الذي يفعله كل أسلوب بالزيت الناتج.',
    directAnswer:
      'The vessel and the heat change the oil, and the change is chemical rather than merely cosmetic. A copper cauldron over a wood fire and a stainless steel vessel under steam are not two ways of doing the same thing: the metal contributes trace elements to the distillate, and the heat profile determines how much of the heavier, smokier fraction carries over. This is why a copper-distilled Assam oil and a steam-distilled Thai oil are described as different in character, and why "the method" is one of the most useful questions a buyer can ask.',
    directAnswerAr:
      'الإناء والحرارة يغيّران الزيت، والتغيير كيميائي لا تجميلي فحسب. فالقدّ النحاسي فوق نار الحطب والإناء الفولاذي تحت البخار ليسا طريقتين للشيء نفسه: فالنحاس يضيف عناصر أثرية إلى الناتج، وملف الحرارة يحدد مقدار الجزء الأثقل والأدخاني المنتقل. ولهذا يوصف زيت أسام المقطّر بالنحاس وزيت تايلاند المقطّر بالبخار بأن طابعهما مختلف، ولهذا «الطريقة» من أنفع الأسئلة التي يسألها المشتري.',
    sections: [
      {
        heading: 'What the vessel contributes',
        headingAr: 'ما الذي يضيفه الإناء',
        body: [
          'Copper is not an inert container. Over a long distillation, trace copper compounds pass into the oil, and the characteristic profile associated with traditional copper-deg oud is partly a function of that contact. A stainless vessel does not contribute those compounds.',
          'The heat profile is the other half. A wood fire gives an irregular, rising heat with a slow ramp and long contact time, which carries more of the heavy, resinous, smoky fraction. Pressurised steam is faster, cooler at the surface and more selective, which keeps the top notes clean and leaves the heavy fraction behind.',
          'Neither method is better. They produce different oils, they cost different amounts to run, and the convention in this trade is that the traditional method is worth more because it is the older one, not because it is the more accurate one.',
        ],
        bodyAr: [
          'النحاس ليس وعاءً خاملاً. فخلال تقطير طويل تنتقل إليه مركبات نحاس أثرية، والطابع المميز الذي يُنسب إلى عود القدّ النحاسي التقليدي هو في جزء منه نتيجة هذا التماس. أما الإناء الفولاذي فلا يضيف تلك المركبات.',
          'وملف الحرارة هو النصف الآخر. فنار الحطب يعطي حرارة غير منتظمة متصاعدة ببطء وتلامساً طويلاً، فينتقل معه قدر أكبر من الجزء الثقيل الراتنجي المدخاني. أما البخار المضغوط فأسرع وأبرد عند السطح وأكثر انتقائية، فيحافظ على النوتات العليا النقية ويترك الجزء الثقيل وراءه.',
          'ولا طريقة أفضل من الأخرى. فكل منهما ينتج زيتاً مختلفاً، وتختلف كلفة تشغيله، والعرف في هذه التجارة أن الطريقة التقليدية تساوي أكثر لأنها الأقدم لا لأنها الأدق.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022'],
    limitations:
      'This page describes what each method does to the resulting oil. It does not state a yield figure for any species or method, and it does not establish that one method produces a better oil.',
    limitationsAr:
      'تصف هذه الصفحة ما الذي تفعله كل طريقة بالزيت الناتج. ولا تذكر مردوداً لأي نوع أو طريقة، ولا تثبت أن طريقة تنتج زيتاً أفضل.',
    nextSteps: ['Read how wood becomes oil', 'Read why processing location is separate', 'Read the Assam page'],
    nextStepsAr: ['اقرأ كيف يصير الخشب زيتاً', 'اقرأ لماذا موقع المعالجة منفصل', 'اقرأ صفحة أسام'],
    related: [
      { slug: 'production/from-wood-to-oil', label: 'From material to oud oil' },
      { slug: 'production/processing-location', label: 'Why processing location is a separate fact' },
      { slug: 'origins/india/assam', label: 'Assam: oud material and trade context' },
    ],
  }),

  simpleGuide({
    slug: 'production/from-wood-to-oil',
    parent: 'production',
    title: 'From material to oud oil',
    titleAr: 'من المادة إلى دهن العود',
    summary: 'The steps between a resinous log and a bottle, and what happens at each of them.',
    summaryAr: 'الخطوات بين جذع راتنجي وقارورة، وماذا يحدث في كل خطوة.',
    directAnswer:
      'Between resinous wood and a bottle of oil there are four steps that matter: the wood is prepared, it is distilled, the distillate is separated, and the oil is stabilised and stored. Each step changes the product and each can go wrong in ways that are not visible in the bottle. Chips that are too fine produce emulsions; a distillation run that is rushed produces a thin, pale oil with the heavy fraction left in the wood; and oil stored warm develops differently from oil stored cool. The buyer\'s interest is in knowing which of these steps were actually done.',
    directAnswerAr:
      'بين الخشب الراتنجي وقارورة زيت أربع خطوات مؤثرة: تجهيز الخشب، ثم تقطيره، ثم فصل الناتج، ثم تثبيت الزيت وتخزينه. كل خطوة تغيّر المنتج، وكل واحدة يمكن أن تخطئ بطرق لا تُرى في القارورة. فالرقائق الدقيقة جداً تنتج مستحلبات، والجولة المستعجلة تنتج زيتاً رقيقاً باهتاً يبقى فيه الجزء الثقيل في الخشب، والزيت المحفوظ في فء يتطور بشكل مختلف عن المحفوظ في برودة. واهتمام المشتري معرفة أي هذه الخطوات أُجريت فعلاً.',
    sections: [
      {
        heading: 'Preparation',
        headingAr: 'التجهيز',
        body: [
          'The wood is broken down to a size the still can work with, and the size is a compromise: bigger pieces give slower, gentler extraction; smaller pieces give more surface area and risk of a scorched, emulsified mess. A buyer does not need to specify the size, but a supplier who cannot describe it is describing a process they have not looked at closely.',
          'Drying matters too. Wood that is not properly dried yields a distillate with more water in it and a shorter shelf life.',
        ],
        bodyAr: [
          'يُكسر الخشب إلى حجم يعمل معه المِقطَّر، والحجم حل الوسط: القطع الأكبر تستخلاص أبطأ وألطف، والأصغر تعطي مساحة أكبر ومخاطر حرق والمستحلبات. ولا يحتاج المشتري إلى تحديد الحجم، لكن المورد الذي لا يصفه يصف عملية لم ينظر إليها عن قرب.',
          'والتجفيف مهم أيضاً. فالخشب غير المجفف جيداً يعطي ناتجاً فيه ماء أكثر وعمراً تخزين أقصر.',
        ],
      },
      {
        heading: 'Distillation and separation',
        headingAr: 'التقطير والفصل',
        body: [
          'The distillation itself may run for many hours, and the length of the run determines how much of the heavy fraction is carried across. A short run gives a lighter oil and leaves material behind.',
          'The distillate that comes off is a mixture: oil, water and soluble compounds. It has to be separated, and the separation has to be done properly, or the oil carries water and the storage problem begins there. The hydrosol — the water layer — is a real product with its own use, and its existence is a useful confirmation that the run was a genuine hydro-distillation.',
        ],
        bodyAr: [
          'قد يستمر التقطير ساعات، وطول الجولة يحدد مقدار الجزء الثقيل المنتقل. فالجولة القصيرة تعطي زيتاً أخف وتترك مادة وراءها.',
          'والناتج رقائق مائية: زيت وماء ومركبات ذائبة. ويجب فصله، ويُفصل فصلاً صحيحاً وإلا حمل الزيت ماءً وبدأت مشكلة التخزين من هناك. والماء العطري — الطبقة المائية — منتج حقيقي له استعماله، ووجوده تأكيد مفيد على أن الجولة كانت تقطيراً مائياً حقيقياً.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022'],
    limitations:
      'This page describes the steps between wood and oil. It does not set a yield, a run length or a quality standard, and it does not assess any particular producer\'s process.',
    limitationsAr:
      'تصف هذه الصفحة الخطوات بين الخشب والزيت. ولا تضع مردوداً ولا مدة جولة ولا معيار جودة، ولا تقيّم عملية أي منتج بعينه.',
    nextSteps: ['Compare the extraction methods', 'Read about processing location', 'Read what a batch record contains'],
    nextStepsAr: ['قارن بين طرق الاستخلاص', 'اقرأ عن موقع المعالجة', 'اقرأ ما الذي تحتويه سجل الدفعة'],
    related: [
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'production/processing-location', label: 'Why processing location is a separate fact' },
      { slug: 'quality/batch-records', label: 'What belongs in a batch record' },
    ],
  }),

  simpleGuide({
    slug: 'production/processing-location',
    parent: 'production',
    title: 'Why processing location is a separate fact',
    titleAr: 'لماذا موقع المعالجة واقعة منفصلة',
    summary:
      'Where a tree grew, where the oil was distilled and where the bottle was filled are three different places.',
    summaryAr: 'حيث نمت الشجرة، وحيث قُطّر الزيت، وحيث عُبِّئت القارورة: ثلاثة أماكن مختلفة.',
    directAnswer:
      'Three locations are routinely conflated: where the tree grew, where the material was distilled, and where the product was filled and packed. A distillation in Thailand of Assam wood is an Assam-origin product processed in Thailand. The origin decides which conservation and documentation rules apply; the processing location decides what the importer’s own authorities see on the paperwork and what the customs treatment is. Both have to be stated, and a listing that gives only one of them is leaving a question open that a buyer will have to ask.',
    directAnswerAr:
      'يُخلط ثلاثة مواقع عادةً: حيث نمت الشرة، وحيث قُطّرت المادة، وحيث عُبِّئ المنتج وحُزِّر. وتقطير خشب أسام في تايلاند ينتج منتجاً من منأ أسام معالَجاً في تايلاند. والمنشأ يحدد قواعد الحماية والتوثيق المنطبقة، وموقع المعالجة يحدد ما تراه سلطات المستورد في الأوراق وما المعالجة الجمركية. وكلاهما لا بد من ذكره، والإعلان الذي يذكر واحداً فقط يترك سؤالاً مفتوحاً سيضطر المشتري أن يسأل عنه.',
    sections: [
      {
        heading: 'Three locations, three different consequences',
        headingAr: 'ثلاثة مواقع، وثلاثة نتائج مختلفة',
        body: [
          'The growing location determines the species, the regulatory listing and the documentation that must accompany the material when it leaves the country of origin.',
          'The processing location determines the treatment the material receives, the analysis the importer receives, and the customs and food or cosmetic rules the importer has to satisfy in their own market.',
          'The filling location determines the labelling, the batch record and the responsible party for the product in the market where it is sold.',
          'Because they are independent, a product can be grown in one country, processed in a second and sold in a third, and each of those three facts has to travel with it. This is also why a directory entry that lists one country for a business and a different country for its material is not making a mistake — it is describing two things.',
        ],
        bodyAr: [
          'موقع النمو يحدد النوع والإدراج التنظيمي والوثائق التي يجب أن ترافق المادة عند مغادرتها بلد المنشأ.',
          'وموقع المعالجة يحدد المعالجة التي تتلقاها المادة، والتحليل الذي يستلمه المستورد، وقواعد الجمارك وقواعد الغذاء أو مستحضرات التجميل التي على المستورد الوفاء بها في سوقه.',
          'وموقع التعبئة يحدد الملصق وسجل الدفعة والمسؤول عن المنتج في السوق التي يُباع فيها.',
          'ولأنها مستقلة، يمكن أن ينتج المنتج في بلد ويُعالَج في ثانٍ ويُباع في ثالث، ولكل من هذه الوقائع الثلاثة أن يسافر معه. ولهذا فإن قيد الدليل الذي يذكر بلداً للمنشأة وبلداً آخر للمادة ليس واقعاً خاطئاً، بل هو يصف أمرين.',
        ],
        callout: {
          title: 'A business address is not a production facility',
          body:
            'A company that resells Cambodian agarwood from Dubai has a location in Dubai and a Cambodian material origin. It has no Cambodian production facility unless a facility record says so, and a map that plots its address in Cambodia would be making a claim it cannot support.',
          bodyAr:
            'الشركة التي تعيد بيع عود كمبودي من دبي لها موقع في دبي ومنشأ كمبودي للمادة، وليس لها منشأ إنتاج في كمبوديا ما لم يرد سجل منشأة. والخريطة التي تضع عنوانها في كمبوديا تدّعي ما لا تستطيع إسناده.',
        },
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022'],
    limitations:
      'This page separates the three locations and explains what each determines. It does not establish the processing location of any particular product or supplier.',
    limitationsAr:
      'تفصل هذه الصفحة المواقع الثلاثة وتشرح ما يحدده كل منها. ولا تثبت موقع المعالجة لأي منتج أو مورد بعينه.',
    nextSteps: ['Read how location, origin and destination differ', 'Read what a document can establish', 'Read the trade documentation page'],
    nextStepsAr: ['اقرأ كيف يختلف الموقع والمنشأ والوجهة', 'اقرأ ما الذي يمكن لوثيقة إثباته', 'اقرأ صفحة وثائق التجارة'],
    related: [
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'trade/document-review-limits', label: 'What reviewing a document can establish' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
    ],
  }),

  simpleGuide({
    slug: 'trade/agarwood-documentation',
    parent: 'trade',
    title: 'Conservation and trade documentation',
    titleAr: 'وثائق الحماية والتجارة',
    summary:
      'What the CITES listing requires, what a document establishes, and what a buyer can actually check.',
    summaryAr: 'ما يتطلبه الإدراج في سايتس، وما الذي تثبته الوثيقة، وما الذي يستطيع المشتري فحصه.',
    directAnswer:
      'The species in the genus Aquilaria and Gyrinops are listed under CITES Appendix II, which governs international trade in specimens of those species and their parts and products. What that listing requires in practice depends on the exporting and importing countries: the instruments available are export permits, import permits, and — for wild-collected material — the non-detriment finding that a collecting programme is not damaging the population. A buyer should be able to see which of these applies to the material in front of them, and a supplier who cannot name the instrument is telling you something.',
    directAnswerAr:
      'الأنواع من جنس Aquilaria وGyrinops مشمولة في الملحق الثاني لاتفاقية سايتس، الذي ينظم التجارة الدولية في عينات تلك الأنواع وأجزائها ومنتجاتها. وما يتطلبه هذا الإدراج عملياً يعتمد على بلدَي التصدير والاستيراد: والأدوات المتاحة هي تصاريح التصدير وتصاريح الاستيراد،； المادة المجمّعة بريّاً، نتيجة عدم الإضرار بالمجموعة السكانية. وعلى المشتري أن يرى أيّها ينطبق على المادة أمامه، ومن لا يستطيع تسمية الأداة فهو يخبرك بشيء.',
    sections: [
      {
        heading: 'The instruments',
        headingAr: 'الأدوات',
        body: [
          'An export permit, issued by the authority of the country of origin, authorising a specific consignment.',
          'An import permit, where the importing country requires one, authorising the import.',
          'And, where the material is wild-collected, a non-detriment finding: an assessment that the collection programme is not damaging the population, and that it is being conducted with the consent of the management authority. This is the document that matters most in practice, because it is the one that has to be produced before a plant is cut, not after the oil is bottled.',
          'The listing applies to parts and products as well as to live specimens, so oil distilled from listed wood and items made from it are within scope.',
        ],
        bodyAr: [
          'تصريح تصدير، يصدره سلطة بلد المنشأ، ويجيز شحنة بعينها.',
          'وتصريح استيراد، حيث تطلبه الدولة المستوردة، يجيز الاستيراد.',
          'وعند جمع المادة بريّاً، نتيجة عدم الإضرار: تقييم بأن برنامج الجمع لا يضر بالمجموعة السكانية وأنه يجري بموافقة سلطة الإدارة. وهذا هو الأوثق أثراً عملياً، لأنه يُنتَج قبل قطع الشجرة لا بعد تعبئة الزيت.',
          'ويشمل الإدراج الأجزاء والمنتجات إضافةً إلى العينات الحية، فالزيت المقطَّر من خشب مشمول والأصناف المصنوعة منه داخل النطاق.',
        ],
      },
      {
        heading: 'What a buyer can check',
        headingAr: 'ما يستطيع المشتري فحصه',
        body: [
          'Whether the permit matches the consignment: the species, the quantity, the origin and the date should all correspond. A permit for a different shipment is not a permit.',
          'Whether the permits are present for the specific form in front of you — wood, oil, or a finished product — because the documentation required can differ.',
          'And whether the species on the paperwork matches the species you believe you are buying. A mismatch here is serious, and it is the kind of thing that a careful reading catches.',
        ],
        bodyAr: [
          'هل يطابق التصريح الشحنة: النوع والكمية والمنشأ والتاريخ يجب أن تتوافق جميعها. تصريح لشحنة أخرى ليس تصريحاً.',
          'هل التصاريح موجودة للشكل المعروض أمامك بالذات — خشباً أم زيتاً أم منتجاً منتهياً — لأن الوثائق المطلوبة قد تختلف.',
          'وهل النوع في الأوراق يطابق النوع الذي تعتقد أنك تشتريه. أي اختلاف هنا خطير، وهو من نوع تلتقطه القراءة المتأنية.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'FAOLEX'],
    limitations:
      'This page describes the trade instruments and what a buyer can check. It is not legal advice, and whether a specific shipment is lawful depends on the exporting country, the importing country and the species.',
    limitationsAr:
      'تصف هذه الصفحة أدوات التجارة وما يستطيع المشتري فحصه. وهي ليست استشارة قانونية، ومشروعية شحنة بعينها تعتمد على بلد التصدير وبلد الاستيراد والنوع.',
    nextSteps: ['Read what a document can establish', 'Read how shipping checks differ by product', 'Read the botanical identities'],
    nextStepsAr: ['اقرأ ما الذي يمكن لوثيقة إثباته', 'اقرأ كيف تختلف فحوص الشحن بحسب المنتج', 'اقرأ الهويات النباتية'],
    related: [
      { slug: 'trade/document-review-limits', label: 'What reviewing a document can establish' },
      { slug: 'trade/shipping-wood-oil-perfume', label: 'Why wood, oil and perfume need separate shipping checks' },
      { slug: 'oud-basics/agarwood-botanical-identity', label: 'Botanical identity and genus comparison' },
    ],
  }),

  simpleGuide({
    slug: 'trade/document-review-limits',
    parent: 'trade',
    title: 'What reviewing a document can establish',
    titleAr: 'ما الذي يمكن لمراجعة وثيقة إثباته',
    summary:
      'A valid document is not the same as a verified material. What a permit, a report and an invoice each prove.',
    summaryAr: 'الوثيقة الصحيحة ليست المادة الموثّقة. ما الذي يثبته كل تصريح وتقرير وفاتورة.',
    directAnswer:
      'A document establishes that a document exists, that it was issued by the body named on it, that it covers the consignment described, and that it was valid on the date shown. It does not establish the contents of the parcel. A permit does not describe the oil in the bottle; a certificate of origin describes the origin of a consignment, not its quality; an invoice describes a commercial transaction. Treating any of them as a quality certificate is the most common error in this trade, and it is the error that lets an unverified lot carry a verified-looking file.',
    directAnswerAr:
      'تثبت الوثيقة أن وثيقة موجودة، وأنها صادرة عن الجهة المذكورة فيها، وأنها تغطي الشحنة الموصوفة، وأنها كانت سارية في التاريخ المدوّن. ولا تثبت محتوى الطرد. فالتصريح لا يصف الزيت في القارورة، وشهادة المنشأ تصف منشأ شحنة لا جودتها، والفاتورة تصف معاملة تجارية. ومعاملة أيٍّ منها كشهادة جودة هو أشيع خطأ في هذه التجارة، وهو الخطأ الذي يسمح للوط غير الموثّق أن يحمل ملفاً يبدو موثّقاً.',
    sections: [
      {
        heading: 'What each document proves',
        headingAr: 'ما الذي يثبته كل نوع من الوثائق',
        body: [
          'A CITES permit proves that the authority named issued an authorisation for a specified consignment. It is silent on quality, on resin content and on age.',
          'A laboratory report proves what a sample was found to contain, on the date, by the method. It is silent on where the rest of the batch came from.',
          'A certificate of origin proves what the issuing authority certified about origin. It is silent on composition.',
          'An invoice proves a commercial agreement between two parties. It is silent on both.',
          'Each is useful. None substitutes for another, and the composite file of a well-supplied lot should be internally consistent: the species, the quantities, the dates and the parties should agree with each other.',
        ],
        bodyAr: [
          'تصريح سايتس يثبت أن الجهة المذكورة أصدرت تفويضاً لشحنة محددة. وهو صامت عن الجودة ونسبة الراتنج والعمر.',
          'وتقرير مخبري يثبت ما وُجد في عيّنة، في التاريخ المحدد، بالطريقة المحددة. وهو صامت عن مصدر بقية الدفعة.',
          'وشهادة المنشأ تثبت ما وثّقته به الجهة المُصدِرة عن المنشأ. وهي صامتة عن التركيب.',
          'والفاتورة تثبت اتفاقاً تجارياً بين طرفين. وهي صامتة عن كليهما.',
          'كل منها نافع. وا يحل أيٌّ منها محل آخر، وينبغي أن يكون مل اللوط الجيد متسقاً داخلياً: النوع والكميات والتواريخ والأطراف متوافق فيما بينها.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'FAOLEX'],
    limitations:
      'This page describes what each kind of document establishes and does not. It does not review any specific document, and it does not establish the authenticity of any material.',
    limitationsAr:
      'تصف هذه الصفحة ما يثبته كل نوع من الوثائق وما لا يثبته. ولا تراجع أي وثيقة بعينها، ولا تثبت أصالة أي مادة.',
    nextSteps: ['Read the trade documentation page', 'Read how a laboratory report is scoped', 'Read how to evaluate an offer'],
    nextStepsAr: ['اقرأ صفحة وثائق التجارة', 'اقرأ كيف يُحدَّد نطاق التقرير المخبري', 'اقرأ كيف تقيّم عرضاً'],
    related: [
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'quality/lab-report-reading', label: 'How to read the scope of a laboratory report' },
      { slug: 'buying/evaluating-an-offer', label: 'Evaluating a questionable offer' },
    ],
  }),

  simpleGuide({
    slug: 'trade/shipping-wood-oil-perfume',
    parent: 'trade',
    title: 'Why wood, oil and perfume need separate shipping checks',
    titleAr: 'لماذا يحتاج الخشب والزيت والعطر فحوص شحن منفصلة',
    summary:
      'Three products from one tree, three sets of considerations, and three different documents.',
    summaryAr: 'ثلاثة منتجات من شجرة واحدة، وثلاث مجموعات اعتبارات، وثلاثة أنواع من الوثائق.',
    directAnswer:
      'Wood, oil and perfume made from the same tree are three products with different legal and practical profiles. Wood is a solid agricultural product and its export turns on the species and the harvesting documentation. Oil is a liquid preparation, and a carrier or a concentrate changes both its regulatory treatment and the way it has to be declared and packed. A finished perfume is a formulated cosmetic or fragrance product, subject to its own rules entirely. A supplier who treats "we can ship oud" as a single answer has not thought about which of the three they mean.',
    directAnswerAr:
      'الخشب والزيت والعطر المصنوعة من الشجرة نفسها ثلاثة منتجات ذات وضع قانوني وعملي مختلف. الخشب منتج زراعي صلب، وتصديره يدور حول النوع ووثائق الجمع. والزيت مستحضر سائل، والحامل أو التركيز يغيّران معاملته التنظيمية وطريقة الإفصاح عنه وتغليفه. أما العطر المنتهي فهو منتج تجميلي مصنّع يخضع لقواعد خاصة به. ومن يعتبر «نستطيع شحن العود» جواباً واحداً فقد لم يفكر في أي الثلاثة تقصد.',
    sections: [
      {
        heading: 'Three checks, three documents',
        headingAr: 'ثلاثة فحوص، وثلاثة أنواع من الوثائق',
        body: [
          'Wood: the species, the harvest documentation, and the phytosanitary requirements that apply to plant material crossing a border. A bulk consignment of chips is inspected differently from a finished article, and an invoice that says "oud wood" does not do the work of a botanical description.',
          'Oil: the species documentation for the source material, plus the declarations that apply to the liquid itself — its composition, its concentration, and any labelling requirements for the carrier. Oil in a glass bottle crosses more regulatory lines than wood in a sack.',
          'Perfume: a finished formulation has its own requirements, and it is not a product in CITES scope merely because its accord was inspired by oud. A fragrance made with an oud accord carries no agarwood at all, and saying so plainly is both simpler and more accurate.',
        ],
        bodyAr: [
          'الخشب: النوع ووثائق الجمع، ومتطلبات الفحص الصحي النباتي التي تنطبق على المادة النباتية عند عبور الحدود. وشحنة كبيرة من الرقائق تُفحص على نحو مختلف عن قطعة منتهية، والفاتورة التي تقول «خشب عود» لا تحل محل وصف نباتي.',
          'الزيت: وثائق النوع للمادة المصدرية، إضافة إلى الإفصاحات المنطبقة على السائل نفسه — تركيبه وتركيزه ومتطلبات وضع بطاقات البيان للحامل. والزيت في قارورة زجاجية يعبر خطوطاً تنظيمية أكثر من الخشب في كيس.',
          'العطر: التركيب النهائي له متطلباته الخاصة، وهو ليس داخل نطاق سايتس لمجرد أن أوزه مستوحى من العود. فعطر مصنوع بـ أوز عود لا يحمل خشب عود إطلاقاً، والقول بذلك بوضوح أبسط وأدق.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'FAOLEX'],
    limitations:
      'This page explains why the three product forms are handled differently. It does not give the requirements of any specific jurisdiction, and it is not legal or customs advice.',
    limitationsAr:
      'تشرح هذه الصفحة لماذا تُعامل الأشكال الثلاثة من المنتج بشكل مختلف. ولا تذكر متطلبات أي اختصاص قضائي بعينه، وليست استشارة قانونية أو جمركية.',
    nextSteps: ['Read the trade documentation page', 'Read what an oud accord is', 'Read how concentration labels work'],
    nextStepsAr: ['اقرأ صفحة وثائق التجارة', 'اقرأ ما هو أوز العود', 'اقرأ كيف تعمل ملصقات التركيز'],
    related: [
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'fragrance/oud-accords', label: 'Oud accords in fragrance composition' },
      { slug: 'fragrance/concentration-labels', label: 'Understanding perfume concentration labels' },
    ],
  }),

  simpleGuide({
    slug: 'sourcing/sample-to-bulk-matching',
    parent: 'sourcing',
    title: 'Match samples to bulk batches',
    titleAr: 'مطابقة العينات بدفعات الجملة',
    summary:
      'The traceability link that makes a sample meaningful, and the wording that creates it.',
    summaryAr: 'صلة التتبّع التي تجعل العينة ذات معنى، والصياغة التي تنشئها.',
    directAnswer:
      'A sample only means something if the bulk it justifies comes from the same material. That link has to be created deliberately, in writing, at the time of sampling, because it cannot be reconstructed later: a batch reference that the supplier does not record, a seal that is broken in transit, and a delivery that arrives without paperwork all destroy the link, and once it is gone no amount of comparison will restore it. The practical requirement is small and specific — the batch identity of the sample and of the bulk, stated on the same record, signed by the same party.',
    directAnswerAr:
      'لا تني العينة شيئاً إلا إذا جاء الجملة الذي تبرره من المادة نفسها. وهذه الصلة يجب أن تُنشأ عمداً وكتابةً وقت أخذ العينة، لأنها لا يمكن إعادة بنائها لاحقاً: فمرجع الدفعة الذي لا يسجله المورد، والختم الذي يُفتح في الطريق، والتسليم الذي يصل بلا أوراق — تهدم الصلة كلها، ومتى ضاعت لا يعيدها أي قدر من المقارنة. والمتطلب العملي صغير ومحدد: هوية الدفعة للعينة وللبنلة، مذكورة في السجل نفسه، وموقّعة من الطرف نفسه.',
    sections: [
      {
        heading: 'What breaks the link',
        headingAr: 'ما الذي يكسر الصلة',
        body: [
          'A sample without a batch reference. The material is real and the sample is genuine, but there is nothing to compare the delivery against except a photograph and a memory.',
          'A sample that is repacked after sampling. The seal is the only thing that establishes that the material assessed is the material that was assessed.',
          'A delivery that arrives with no accompanying record, or with a record that describes a different consignment.',
          'Each of these is individually survivable and collectively fatal. And each is preventable at the moment of sampling by a small amount of care and a few words on paper.',
        ],
        bodyAr: [
          'عيّنة بلا مرجع دفعة. والمادة حقيقية والعينة أصلية، لكن لا شيء تقارن به التسليم سوى صورة وذاكرة.',
          'وعيّنة تُعاد تعبئتها بعد أخذها. والختم هو الشيء الوحيد الذي يثبت أن المادة المُقيَّمة هي المادة التي قُيّمت.',
          'وتسليم يصل بلا سجل مرافق، أو بسجل يصف شحنة أخرى.',
          'كل واحد منها يمكن تحمله منفرداً، وجماعياً فتّاك. وكلها يمكن تفاديها وقت أخذ العينة بعناية بسيطة وكلمات قليلة على الورق.',
        ],
        callout: {
          title: '"We will send the same" is not a link',
          body:
            'A verbal assurance that the bulk will be the same material does not connect a delivery to a sample. Ask for the batch identity on both sides, on the same record.',
          bodyAr:
            'الوعد الشفهي بأن الجملة ستكون المادة نفسها لا يصل التسليم بعينة. اطلب وية الدفعة على الطرفين، في السجل نفسه.',
        },
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022'],
    limitations:
      'This page describes what makes a sample traceable to a delivery. It does not establish that any particular supplier maintains this link, and it does not verify a claim that one does.',
    limitationsAr:
      'تصف هذه الصفحة ما يجعل العينة قابلة للتتبع إلى التسليم. ولا تثبت أن مورداً بعينه يحافظ على هذه الصلة، ولا تتحقق من ادعاء بعينه.',
    nextSteps: ['Read the sample plan', 'Read what a batch record contains', 'Read about minimum order quantities'],
    nextStepsAr: ['اقرأ خطة العيّنات', 'اقرأ ما الذي تحتويه سجل الدفعة', 'اقرأ عن الحد الأدنى للطلب'],
    related: [
      { slug: 'sourcing/wholesale-sample-plan', label: 'Build a wholesale oud sample plan' },
      { slug: 'quality/batch-records', label: 'What belongs in a batch record' },
      { slug: 'sourcing/minimum-order-quantities', label: 'Understanding supplier minimum quantities' },
    ],
  }),

  simpleGuide({
    slug: 'sourcing/comparing-supplier-quotes',
    parent: 'sourcing',
    title: 'Compare supplier quotations without assuming equivalence',
    titleAr: 'قارن عروض الأسعار دون افتراض التكافؤ',
    summary:
      'Two quotations can use the same words and describe different products. How to tell.',
    summaryAr: 'عرضان قد يستعملان الكلمات نفسها لوصف منتجين مختلفين. كيف تعرف ذلك.',
    directAnswer:
      'The most common failure in comparing quotations is assuming that two offers describing "oud oil" are offers for the same thing. They are not, and the terms that carry the difference — Super, aged, Assam, pure, 100% — each have several established meanings in this trade, and sellers use them at different levels of precision. The comparison is only meaningful after each quotation has been expanded into the same set of factual fields, and the fields that cannot be filled in are the finding.',
    directAnswerAr:
      'أشيع فشل في مقارنة عروض الأسعار هو افتراض أن عرضين يصفان «دهن عود» عرضان للشيء نفسه. وهما ليس كذلك، والمصطلحات التي تحمل الفرق — «سوبر» و«معتّق» و«أسام» و«خالص» و«100%» — لكل منها معانٍ راسخة متعددة في هذه التجارة، ويستخدمها البائعون على مستويات دقة مختلف. والمقارنة لا تصح إلا بعد توسيع كل عرض إلى المجموع نفسها من الحقائق، والحقول التي لا يمكن ملؤها هي النتيجة نفسها.',
    sections: [
      {
        heading: 'The fields that settle it',
        headingAr: 'الحقول التي تحسم الأمر',
        body: [
          'Species; whether the oil is pure distillate, diluted, or an accord; the carrier and the proportion of actual oil; the distillation method; the distillation date; the storage since; the batch reference; the quantity basis; the documentation; and the price on that basis.',
          'Two quotations that agree on all ten are comparable, and the difference between them is a difference in price. Two that differ on any of them are not comparable on price, and the cheaper one is not necessarily cheaper — the price difference may simply be measuring a different thing.',
          'Where a field cannot be filled in, write "not stated" rather than assuming a value. An unstated field is a finding about the supplier\'s documentation, and it should carry into the final decision rather than being quietly filled with the most likely value.',
        ],
        bodyAr: [
          'النوع؛ وهل الزيت ناتج تقطير خالص أم مخفف أم أوز؛ والحامل ونسبة الزيت الفعلي؛ وطريقة التقطير؛ وتاريخ التقطير؛ والتخزين منذ ذلك الحين؛ ومرجع الدفعة؛ وأساس الكمية؛ والوثائق؛ والسعر على ذلك الأساس.',
          'عرضان يتطابقان في العشرة قابلان للمقارنة، والفرق بينهما فرق في السعر. وأي عرضان يختلفان في واحد منها ليسا قابلين للمقارنة بالسعر، والأخصم ليس بالضرورة الأرخص — فقد يكون فرق السعر يقيس شيئاً مختلفاً.',
          'وحيث لا يمكن ملء حقل، اكتب «غير مذكور» بدل افتراض قيمة. والحقل غير المذكور نتيجة عن توثيق المورد، وينبغي أن تدخل في القرار النهائي بدل أن تُملأ بصمت بأرجح قيمة.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022'],
    limitations:
      'This page describes how to compare quotations. It does not compare any particular offers, and it does not publish prices.',
    limitationsAr:
      'تصف هذه الصفحة كيف تقارن عروض الأسعار. ولا تقارن أي عروض بعينها، ولا تنشر أسعاراً.',
    nextSteps: ['Read how to read a quotation', 'Read how to compare two oil offers', 'Read what to ask a supplier'],
    nextStepsAr: ['اقرأ كيف تقرأ عرض السعر', 'اقرأ كيف تقارن عرضَي زيت', 'اعرف ما الذي تسأل مورداً'],
    related: [
      { slug: 'sourcing/reading-a-quotation', label: 'Read a wholesale fragrance quotation' },
      { slug: 'buying/comparing-oud-oil-offers', label: 'Comparing oud oil offers' },
      { slug: 'buying/supplier-questions', label: 'What to ask a supplier' },
    ],
  }),

  simpleGuide({
    slug: 'sourcing/reading-a-quotation',
    parent: 'sourcing',
    title: 'Read a wholesale fragrance quotation',
    titleAr: 'اقرأ عرض سعر تجاري للعطور',
    summary:
      'The parts of a quotation, and the ones that determine what will actually be delivered.',
    summaryAr: 'أجزاء عرض السعر، وأيها يحدد ما سيُسلَّم فعلاً.',
    directAnswer:
      'A quotation has to answer five questions to be usable: what exactly is being sold, how much of it, on what basis, at what price, and when and how it will be delivered. Most disputes in this trade come from a quotation that answered four of them. The one usually left implicit is the specification, and the specification is the one that determines what arrives. Read a quotation for the specification first and the price second.',
    directAnswerAr:
      'يجب أن يجيب عرض السعر عن خمسة أسئلة ليكون قابلاً للاستخدام: ما الذي يُباع بالضبط، وكم منه، وعلى أي أساس، وبأي سعر، ومتى وكيف سيُسلَّم. وأكثر الخلافات في هذه التجارة تأتي من عرض أجاب عن أربعة منها. والجزء الضمن هو المواصفة، وهي التي تحدد ما يصل. فاقرأ عرض السعر للمواصفة أولاً وللسعر ثانياً.',
    sections: [
      {
        heading: 'The five answers',
        headingAr: 'الإجابات الخمسة',
        body: [
          'What is being sold: species, format, treatment, concentration, and the carrier if there is one. If the description is a list of adjectives, it is not a specification.',
          'How much, on what basis: net mass, gross mass, volume, or pack count, and the unit in each case. A price with no unit is not a price.',
          'At what price, and against what: the currency, the unit price, the minimum order, and whether the price is held for a period or indicative.',
          'When and how: the lead time, the incoterm or equivalent, the payment terms, and what happens to the price if the market moves between quotation and order.',
          'And what travels with it: the documentation, the batch identity, and the tolerance the supplier will accept against the sample.',
        ],
        bodyAr: [
          'ما الذي يُباع: النوع والشكل والمعالجة والتركيز والحامل إن وُجد. فإن كان الوصف قائمة صفات فليس مواصفة.',
          'وكم منه، وعلى أي أساس: الكتلة الصافية أو الإجمالية أو الحجم أو عدد العبوات، والوحدة في كل حالة. والسعر بلا وحدة ليس سعراً.',
          'وبأي سعر، وعلى أي أساس: العملة وسعر الوحدة والحد الأدنى للطلب، وهل السعر محفوظ لفترة أم إرشادي.',
          'ومتى وكيف: مدة التوريد وشروط الشحن وشروط الدفع، وماذا يحدث للسعر إذا تحرك السوق بين عرض السعر والطلب.',
          'وما يرافقه: الوثائق وهوية الدفعة، والتفاوت الذي يقبله المورد مقارنةً بالعيّنة.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022'],
    limitations:
      'This page explains the structure of a usable quotation. It does not interpret any particular quotation, and the legal effect of the terms is a matter for the parties and their jurisdiction.',
    limitationsAr:
      'تشرح هذه الصفحة بنية عرض السعر القابل للاستخدام. ولا تفسّر أي عرض بعينه، والأثر القانوني للشروط مسألة تخص الطرفين واختصاصهما.',
    nextSteps: ['Compare two quotations properly', 'Read about minimum order quantities', 'Read how a sample ties to a batch'],
    nextStepsAr: ['قارن عرضَي سعر على الوجه الصحيح', 'اقرأ عن الحد الأدنى للطلب', 'اقرأ كيف ترتبط العينة بالدفعة'],
    related: [
      { slug: 'sourcing/comparing-supplier-quotes', label: 'Compare supplier quotations without assuming equivalence' },
      { slug: 'sourcing/minimum-order-quantities', label: 'Understanding supplier minimum quantities' },
      { slug: 'sourcing/sample-to-bulk-matching', label: 'Match samples to bulk batches' },
    ],
  }),

  simpleGuide({
    slug: 'sourcing/minimum-order-quantities',
    parent: 'sourcing',
    title: 'Understanding supplier minimum quantities',
    titleAr: 'الحد الأدنى للطلب لدى الموردين',
    summary:
      'What a minimum order is actually for, and the questions that reveal whether it is a real constraint.',
    summaryAr: 'ما الغرض الحقيقي من الحد الأدنى للطلب، والأسئلة التي تكشف إن كان قيداً حقيقياً.',
    directAnswer:
      'A minimum order quantity is a real operational constraint more often than a sales tactic: a distillation produces oil in batches, packaging has a unit, and shipping has a cost that a very small order does not cover. A stated minimum is meaningful. The problems start when the minimum is quoted for one format and applies to another, when it excludes the freight that makes a small order impractical anyway, or when it is presented as a flexible starting point and turns out not to be.',
    directAnswerAr:
      'الحد الأدنى للطلب قيد تشغيلي حقيقي أكثر منه حيلة بيعية: فالتقطير ينتج زيتاً بدفعات، وللتغليف وحدة، وللشحن كلفة لا يغطيها طلب صغير. والحد المذكور ذو معنى. وتبدأ المشاكل حين يُقتبس الحد لشكل واحد وينطبق على غيره، أو حين يستثني أجرة الشح التي تجعل الطلب الصغير غير عملي أصلاً، أو حين يُعرض كنقطة بداية مرنة ثم يتضح أنه ليس كذلك.',
    sections: [
      {
        heading: 'Asking about the constraint',
        headingAr: 'السؤال عن القيد',
        body: [
          'Ask what the minimum is per format. A minimum expressed in tolas of oil and a minimum for chips are different constraints, and a supplier quoting one is not quoting the other.',
          'Ask what it is a minimum of: a production batch, a packaging run, or simply the smallest order worth the shipping. The answer tells you whether the constraint could move for a repeat customer, and whether the material in a smaller lot would come from the same source.',
          'And ask what happens at the boundary — whether a trial order is possible at all, and at what cost. A supplier with a genuinely high minimum is usually candid about it, because it is an operational fact rather than a negotiating position.',
        ],
        bodyAr: [
          'اسأل ما هو الحد لكل شكل. فالحد المقول بالتولا للزيت وحد للرقائق قيدان مختلفان، والمورد الذي يقتبس أحدهما لا يقتبس الآخر.',
          'اسأل ما ه الحد: دفعة إنتاج، أم جولة تغليف، أم ببساطة أصغر طلب تستحق أجرة الشحنه. والجواب يخبرك إن كان القيد يمكن أن يتحرك لعميل متكرر، وإن كانت المادة في لوط أصغر تأتي من المصدر نفسه.',
          'واسأل ماذا يحدث عند الحد: هل طلب تجريبي ممكن أصلاً، وبكم تكلفته. والمورد ذو حدّ مرتفع فعلاً يكون صريحاً فيه عادةً، لأنه واقعة تشغيلية لا موقف تفاوضي.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022'],
    limitations:
      'This page describes what a minimum order quantity is and how to ask about it. It does not state any minimum, and it does not assess whether a particular supplier\'s minimum is reasonable.',
    limitationsAr:
      'تصف هذه الصفحة ما هو الحد الأدنى للطلب وكيف تسأل عنه. ولا تذكر أي حد، ولا تقيّم مقولية حد مورد بعينه.',
    nextSteps: ['Read the sample plan', 'Read how to read a quotation', 'Read what to ask a supplier'],
    nextStepsAr: ['اقرأ خطة العيّنات', 'اقرأ كيف تقرأ عرض السعر', 'اعرف ما الذي تسأل مورداً'],
    related: [
      { slug: 'sourcing/wholesale-sample-plan', label: 'Build a wholesale oud sample plan' },
      { slug: 'sourcing/reading-a-quotation', label: 'Read a wholesale fragrance quotation' },
      { slug: 'buying/supplier-questions', label: 'What to ask a supplier' },
    ],
  }),

  simpleGuide({
    slug: 'sourcing/supplier-origin-destination',
    parent: 'sourcing',
    title: 'Seller location, material origin and buyer destination',
    titleAr: 'موقع البائع ومنشأ المادة ووجهة المشتري',
    summary:
      'The three independent facts a directory has to keep apart, and why conflating them misleads.',
    summaryAr: 'الوقائع المستقلة الثلاث التي يجب أن يبقي الدليل بينها، وخلط هذا الخلط بينها يضلّل.',
    directAnswer:
      'Three separate facts are constantly collapsed into one: where a business is located, where its material comes from, and where it ships. They are independent. A company in Dubai may handle Cambodian material and may or may not have a Cambodian production facility; a company in Assam may handle Assam material and may not be able to ship outside India at all. A directory that filters on the wrong one of these will show a buyer either suppliers who do not handle the origin they wanted, or facilities that do not exist.',
    directAnswerAr:
      'تُطوى ثلاث وقائع مستقلة باستمرار في واحدة: أين يقع مقر المنشأة، ومن أين تأتي مادتها، وإلى أين تشحن. وهي مستقلة. فشركة في دبي قد تتعامل مع مادة كمبودية، وقد يكون أو لا يكون لها منشأ إنتاج في كمبوديا؛ وشركة في أسام قد تتعامل مع مادة أسام وقد لا تستطيع الشحن خارج الهند أصلاً. والدليل الذي يفلتر على غير الوقائع هذه سيعرض على المشتري إما موردين لا يتعاملون مع المنشأ المطلوب، أو منشآت غير موجودة.',
    sections: [
      {
        heading: 'The three questions a directory should let you ask',
        headingAr: 'الأسئلة الثلاثة التي ينبغي أن يسمح لك الدليل بطرحها',
        body: [
          'Located in: where the business physically is. This is the fact that matters for a buyer who wants to visit, to meet a supplier, or to arrange a local pickup.',
          'Handles origin: the origins of the material the seller says it works with. This is a declaration by the seller, and it is the fact that matters for a buyer who wants a particular origin.',
          'And serves destination: the countries the seller is documented to ship to, for a specific product and as at a specific date. This is the fact that matters for a buyer who wants delivery somewhere, and it is the hardest of the three to establish, because a seller working internationally does not necessarily ship everywhere.',
          'A fourth fact, the documented production facility, is a subset of the first and is what makes a producer a producer. A business that resells Cambodian oud from Dubai has no Cambodian facility unless a record says so.',
        ],
        bodyAr: [
          'الموقع: أين تقع المنشأة فعلياً. وهذه الحقيقة المهمة لمشترٍ يريد الزيارة أو اللقاء أو الاستلام محلياً.',
          'المنشأ الذي تتعامل معه: أصول المادة التي يقول البائع إنه يعمل بها. وهذا إعلان من البائع، وهو المهم لمشترٍ يريد منشأً بعينه.',
          'والوجهة التي تخدمها: الدول الموثّق للمورد أن يشحن إليها، لمنتج بعينه وفي تاريخ بعينه. وهذه الحقيقة المهمة لمشترٍ يريد التوصيل، وهي أصعب الثلاث إثباتاً، لأن البائع الذي يعمل دولياً لا يشحن بالضرورة إلى كل مكان.',
          'أما الحقيقة الرابعة، وهي منشأ الإنتاج الموثّق، فهي مجموعة فرعية من الأولى وهي ما يجعل المنتجين منتجين. والشركة التي تعيد بيع عود كمبودي من دبي ليس لها منشأ كمبودي ما لم يرد سجل.',
        ],
        callout: {
          title: 'The map plots facilities, not addresses',
          body:
            'A producer map should plot documented production and processing facilities. Plotting a profile\'s business address on a producing-country map is a false claim about where material is made, and it is a claim a reader has no way to check.',
          bodyAr:
            'خريطة المنتجين ينبغي أن ترسم منشآت الإنتاج والمعالجة الموثّقة. ورسم عنوان المنشأة على خريطة بلد منتِج دعوى كاذبة عن مكان صنع المادة، وهي دعوى لا يستطيع القارئ التحقق منها.',
        },
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022'],
    limitations:
      'This page explains the distinction between the three facts. It does not establish the facts for any particular business, and a directory entry is a starting point for a question rather than an answer to one.',
    limitationsAr:
      'تشرح هذه الصفحة الفرق بين الوقائع الثلاث. ولا تثبت الوقائع لأي منشأة بعينها، وإدخال الدليل نقطة بداية لسؤال لا إجابة عليه.',
    nextSteps: ['Read why processing location is separate', 'Read the trade documentation page', 'Read about the verification scope'],
    nextStepsAr: ['اقرأ لماذا موقع المعالجة منفصل', 'اقرأ صفحة وثائق التجارة', 'اقرأ عن نطاق التوثيق'],
    related: [
      { slug: 'production/processing-location', label: 'Why processing location is a separate fact' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/business-evidence-checklist', label: 'Business evidence and verification scope' },
    ],
  }),

  simpleGuide({
    slug: 'sourcing/business-evidence-checklist',
    parent: 'sourcing',
    title: 'Business evidence and verification scope',
    titleAr: 'أدلة المنشأة ونطاق التوثيق',
    summary:
      'What a verification check can establish, and the honest vocabulary for the states a record can be in.',
    summaryAr: 'ما يمكن لفحص توثيق إثباته، والمفردات الصادقة لأحوال السجل.',
    directAnswer:
      'A check of a business can establish, at most, a small number of specific things: that the organisation exists, that a named person controls the email address supplied, and that the particulars the organisation supplied about itself are internally consistent. It cannot establish that a company is large, that its product is good, that its claims about origin are true, or that a buyer will be treated fairly. The honest vocabulary is therefore a set of distinct states rather than a single badge, and the state a record is in should be visible wherever the record appears.',
    directAnswerAr:
      'فحص منشأة لا يثبت أكثر من عدد قليل من الأمور المحددة: أن المنشأة موجودة، وأن شخصاً مسمّى يتحكم في البريد المقدم، وأن بيانات المنشأة عن نفسها متسقة داخلياً. ولا يثبت أن الشركة كبيرة، ولا أن منتجها جيد، ولا أن ادعاءاتها عن المنشأ صحيحة، ولا أن المشتري سيُعامل بإنصاف. ولذلك يكون المفردان الصادقان مجموعة أحوال متمايزة لا شارة واحدة، وينبغي أن يظهر حال السجل أينما ظهر السجل.',
    sections: [
      {
        heading: 'The states, and what each is worth',
        headingAr: 'الأحوال، وقيمة كل منها',
        body: [
          'Owner verified: the owner of the organisation has confirmed control of the contact address used on the record. This establishes who is speaking, not what they are saying.',
          'Seller declared: the organisation supplied the particulars itself, and OudGuide has not independently verified them. Most of what appears on a profile is in this state, and saying so is more useful to a buyer than an unqualified statement.',
          'Documentation reviewed: a named document was examined and the record states what it establishes and what it does not. This is the strongest state available here, and it is still narrow.',
          'The trap is the unqualified badge. "Verified" on its own tells a reader nothing about which of these happened, and a badge that does not distinguish them is decoration.',
        ],
        bodyAr: [
          'ملكية موثقة: مالك المنشأة أكد أنه يتحكم في عنوان الاتصال المستخدَم في السجل. وهذا يثبت من يتكلم، لا ما يقوله.',
          'معلن من البائع: قدّمت المنشأة بياناتها بنفسها، ولم يوثقها دليل العود بشكل مستقل. ومعظم ما يظهر على الملف في هذه الحالة، والقول بذلك أنفع للمشتري من بيان غير مقيد.',
          'مراجعة مستندات: فُحص مستند مسمّى، ويسجّل السجل ما يثبته وما لا يثبته. هذه أقوى حالة متاحة هنا، وهي ضيقة مع ذلك.',
          'والمزلق هو الشارة غير المقيدة. فـ«موثّق» وحدها لا تقول للقارئ أيّ هذه وقع، والشارة التي لا تميّز بينها زينة.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022'],
    limitations:
      'This page describes what a business check can establish. It does not verify any particular organisation, and the states it defines are narrow by design.',
    limitationsAr:
      'تصف هذه الصفحة ما يمكن لفحص منشأة إثباته. ولا توثّق أي منظمة بعينها، والأحوال التي تعرّفها ضيقة بقصد.',
    nextSteps: ['Read what to ask a supplier', 'Read about location, origin and destination', 'Read the trade documentation page'],
    nextStepsAr: ['اعرف ما الذي تسأل مورداً', 'اقرأ عن الموقع والمنشأ والوجهة', 'اقرأ صفحة وثائق التجارة'],
    related: [
      { slug: 'buying/supplier-questions', label: 'What to ask a supplier' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
    ],
  }),
];
