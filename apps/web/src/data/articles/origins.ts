import type { Article } from './types.ts';
import { originRegionChildren } from './origin-regions.ts';

/**
 * Origin-region and destination articles.
 *
 * The audit found the origin and buying pages were served by the same
 * fallback body as everything else, so a question about Assam received the
 * same paragraphs as a question about buying in the Gulf. These articles
 * answer their own question.
 *
 * An origin article answers: what grows here, how it is described and
 * traded locally, and what a buyer should check when the origin is stated
 * as this place.
 *
 * A destination article answers: what a buyer arriving with material in
 * this country needs to check, and what is not established.
 *
 * The `taxonomyKey` links the article to a country record so that the
 * directory and territory pages can reference it.
 */

const REVIEWED_ON = '2026-10-20';
const REVIEWER = 'OudGuide editorial review';
const REVIEWER_AR = 'مراجعة تحريرية من دليل العود';
const REVIEW_METHOD =
  'Reviewed against the cited sources, checked for a question-specific answer, and checked that every assurance is either sourced or explicitly marked as a limitation.';
const REVIEW_METHOD_AR =
  'رُوجعت مقابل المصادر المذكورة، ودُقِّق أن لكل صفحة إجابة خاصة بسؤالها، وأن كل ادعاء إمّا مسنود بمصدر أو موسوم صراحةً كقيد.';

export const originArticles: Article[] = [
  {
    slug: 'origins/india',
    kind: 'origin',
    state: 'reviewed',
    title: 'India and northeast origin guide',
    titleAr: 'دليل الهند ومنطقة الشمال الشرقي',
    h1: 'India and northeast origin guide',
    h1Ar: 'دليل الهند ومنطقة الشمال الشرقي',
    summary:
      'Aquilaria agallocha in the Indian subcontinent: the growing regions, the trade vocabulary, and what an "Indian oud" claim needs behind it.',
    summaryAr:
      'A. agallocha في شبه القارة الهندية: مناطق النمو، ومفردات التجارة، وما يحتاج إليه ادعاء «عود هندي» من أدلة.',
    directAnswer:
      'Indian oud is the resinous heartwood of Aquilaria agallocha, a species whose range covers the north-east of the subcontinent and parts of Bangladesh. The material is traditionally described by the region it came from — Assam above all, but also Nagaland, Manipur, Tripura, Meghalaya and Mizoram — and the region carries a commercial meaning that the species name alone does not. When a seller states an Indian origin, the useful question is not "is it Indian" but "from where in India, and what establishes that".',
    directAnswerAr:
      'العود الهندي هو القلب الراتنجي من نوع Aquilaria agallocha، وهو نوع يمتد انتشاره في شمال شرق شبه القارة وأجزاء من بنغلاديش. وتُصف المادة تقليدياً بالإقليم الذي جاءت منه — أسام أولاً، ثم ناغالاند ومانيبور وتريبرا وميغالايا وميزورام — والإقليم يحمل معنى تجارياً لا يحمله اسم النوع وحده. فحين يذكر البائع منشأً هندياً، فالسؤال المفيد ليس «هل هندي؟» بل «من أي جزء من الهند، وما الذي يثبته».',
    sections: [
      {
        heading: 'The species and where it grows',
        headingAr: 'النوع وأين ينمو',
        body: [
          'Aquilaria agallocha is the Indian member of the genus, and it is the species behind what the trade calls Indian oud or, in some usage, Assam oud. It is a different plant from Aquilaria crassna of Southeast Asia and from Aquilaria malaccensis of the Malay archipelago, and the three produce materially different oils.',
          'Within India the growing regions are concentrated in the north-east — Assam, and the adjoining hill states of Nagaland, Manipur, Tripura, Meghalaya and Mizoram — with a smaller presence in the north-west. The trees grow in forested hill country rather than in plantations, which is why the wild and cultivated distinction matters more here than in Southeast Asia.',
        ],
        bodyAr: [
          'Aquilaria agallocha هو النوع الهندي من الجنس، وهو النوع الذي يقف خلف ما تسمّيه التجارة عوداً هندياً، أو في بعض الاستعمالات عود أسام. وهو نبات مختلف عن Aquilaria crassna في جنوب شرق آسيا وعن Aquilaria malaccensis في أرخبيل الملايو، والثلاثة تنتج زيوتاً مختلفة جوهرياً.',
          'وداخل الهند تتركز مناطق النمو في الشمال الشرقي — أسام وولايات التلال المجاورة ناغالاند ومانيبور وتريبرا وميغالايا وميزورام — بحضور أصغر في الشمال الغربي. وتنمو الأشجار في مناطق تلال غابات لا في المزارع، ولهذا يبقى التمييز بين البري والمستزرع أهم هنا منه في جنوب شرق آسيا.',
        ],
      },
      {
        heading: 'How the material is described and traded',
        headingAr: 'كيف تُصف المادة وتُتداول',
        body: [
          'Indian oud is described by region rather than by a single quality ladder, and the vocabulary in circulation — for the growing areas, the wood types and the well-known trading centres — is extensive. A buyer should know that these terms describe where material came from and how it is conventionally treated, not a graded standard.',
          'The trading history is old and the material has moved through long-established channels, with a well-developed terminology for both the wood and the distilled oil. That is a reason to ask for the term used and the batch it refers to, rather than a reason to assume a term means anything specific about quality.',
          'Distillation is traditionally associated with the copper deg in this region, and the character of Indian oud oil is widely described as leather-forward and animalic. That is a general description of the style, not a property of any bottle; the method used and the material used both change the result.',
        ],
        bodyAr: [
          'يوصف العود الهندي بالإقليم لا بسلّم جودة موحّد، والمفردات المتداولة — لمناطق النمو وأنواع الخشب والمراكز التجارية المعروفة — واسعة. وينبغي للمشتري أن يعرف أن هذه المصطلحات تصف مصدر المادة وطريقة معالجتها التقليدية، لا معياراً مُقيَّماً.',
          'وتاريخ التجارة قديم، ومرّت المادة عبر قنوات راسخة، بمصطلحات متطورة للخشب ودهن العود معاً. وهذا سببٌ لأن تسأل عن المصطلح المستعمل وعن الدفعة التي يشير إليها، لا سببٌ لأن تفترض أن مصطلحاً ما يعني شيئاً محدداً عن الجودة.',
          'ويرتبط التقطير تقليدياً بالقدّ النحاسي في هذه المنطقة، ويُوصف طابع دهن العود الهندي عادةً بأنه جلدي حيواني. وهذا وصف عام للأسلوب لا صفة لقارورة بعينها؛ فالطريقة المستعملة والمادة المستعملة تغيّران النتيجة.',
        ],
        callout: {
          title: 'An origin statement is a claim, not a certificate',
          body:
            'A seller naming Assam, Nagaland or any other region is stating where the material came from. Whether that is established, and how well the batch matches the region, is a separate question that a documentation trail answers — not the wording of the listing.',
          bodyAr:
            'ذكر البائع أسام أو ناغالاند أو أيّ إقليم آخر هو بيان بمصدر المادة. أما ثبوت ذلك، ومدى مطابقة الدفعة للإقليم، فسؤال آخر تجيبه سلسلة الوثائق — لا صياغة الإعلان.',
        },
      },
      {
        heading: 'What to check on an Indian origin claim',
        headingAr: 'ما الذي ينبغي التحقق منه في ادعاء منشأ هندي',
        body: [
          'Ask which of the north-east regions the material actually came from, and whether it was wild or plantation. Then ask what establishes the region: a document, a supplier record, or the seller’s own assertion.',
          'For oil, ask which plant it was distilled from and by what method. The species matters here more than in most origin claims, because A. agallocha and A. malaccensis are frequently both described as "Asian oud" in trade usage without distinction.',
          'For wood, ask for the batch reference and the treatment applied before it was offered, since impregnation and fumigation are the two methods most often used to alter the weight and scent of resinous wood.',
        ],
        bodyAr: [
          'اسأل من أي مناطق الشمال الشرقي جاءت المادة بالضبط، وهل كانت برية أم مزروعة. ثم اسأل ما الذي يثبت الإقليم: وثيقة، أم سجل لدى المورد، أم تأكيد البائع نفسه.',
          'وبالنسبة للزيت، اسأل من أي نبات قُطّر وبأي طريقة. فالنوع هنا أهم مما في معظم ادعاءات المنشأ، لأن A. agallocha وA. malaccensis يوصفان في الاستعمال التجاري معاً بـ«عود آسيوي» دون تمييز.',
          'وبالنسبة للخشب، اسأل عن مرجع الدفعة والمعالجة التي طُبّقت قبل عرضه، فالنقع والتبخير هما الأسلوبان الأكثر استخداماً في تغيير وزن الخشب الراتنجي ورائحته.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'FAOLEX', 'AGARWOOD_REVIEW_2014', 'CITES_AGARWOOD_2004'],
    limitations:
      'This page states which species is involved and which regions are associated with it. It does not establish the resin content, oil yield or quality of any Indian material, and it does not establish that any particular supplier operates in India. Those require the batch documents and the supplier record.',
    limitationsAr:
      'تصف هذه الصفحة النوع النباتي المعني والأقاليم المرتبطة به. ولا تثبت نسبة الراتنج ولا مردود الزيت ولا جودة أي مادة هندية، ولا تثبت أن مورداً بعينه يعمل في الهند. ذلك يحتاج إلى وثائق الدفعة وسجل المورد.',
    reviewer: REVIEWER,
    reviewerAr: REVIEWER_AR,
    reviewMethod: REVIEW_METHOD,
    reviewMethodAr: REVIEW_METHOD_AR,
    reviewedOn: REVIEWED_ON,
    nextSteps: [
      'Read the Assam region page',
      'Learn how origin and location differ',
      'Learn how to compare origin claims',
    ],
    nextStepsAr: [
      'اقرأ صفحة أسام',
      'اعرف الفرق بين المنشأ والموقع',
      'اعرف كيف تقارن ادعاءات المنشأ',
    ],
    related: [
      { slug: 'origins/india/assam', label: 'Assam: oud material and trade context' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'comparisons/india-and-cambodia-oud', label: 'Comparing India and Cambodia oud claims' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
    ],
    parent: 'origins',
    taxonomyKey: 'IN',
  },

  {
    slug: 'origins/india/assam',
    kind: 'origin',
    state: 'reviewed',
    title: 'Assam: oud material and trade context',
    titleAr: 'أسام: مادة العود وسياق التجارة',
    h1: 'Assam: oud material and trade context',
    h1Ar: 'أسام: مادة العود وسياق التجارة',
    summary:
      'A. agallocha in Assam: the growing districts, the copper-deg distillation tradition, and what an Assam origin claim needs behind it.',
    summaryAr:
      'A. agallocha في أسام: المناطق النامية، وتقاليد التقطير بالقدّ النحاسي، وما يحتاج إليه ادعاء منشأ أسام من أدلة.',
    directAnswer:
      'Assam is the best-known growing region for Aquilaria agallocha, and the name carries commercial weight in the trade because it is associated with the copper-deg distillation tradition. That association is a style, not a guarantee: a lot sold as Assam oud is a claim about where the wood grew and, often, how it was distilled. A buyer should ask for the growing district, whether the material was wild or cultivated, and the distillation method, because each of those is separately determinable and none is established by the word "Assam" on a listing.',
    directAnswerAr:
      'أسام أشهر مناطق زراعة Aquilaria agallocha، واسمها يحمل وزناً تجارياً في السوق لارتباطه بتقليد التقطير بالقدّ النحاسي. غير أن هذه القرابة أسلوبٌ لا ضمان: فاللوط المبيع على أنه عود أسام ادعاء بمكان نمو الخشب، وكثيراً بما استُخرج. وينبغي للمشتري أن يسأل عن المنطقة النامية، وهل كانت المادة برية أم مستزرعة، وطريقة التقطير، لأن كل واحد منها قابل للتحديد على حدة ولا يثبته لفظ «أسام» في الإعلان.',
    sections: [
      {
        heading: 'The growing area',
        headingAr: 'المنطقة النامية',
        body: [
          'Agarwood in Assam is found in forested hill country in the state, in the same general band as the adjoining north-eastern states. Trees are Aquilaria agallocha, and the resin forms after wounding and fungal colonisation in the same way as elsewhere — which means the quantity available in any year depends on what happened to the trees, not on a production schedule.',
          'The practical consequence for a buyer is that Assam wood is a wild-harvest material with a variable supply, and a "consistent supply of Assam" claim deserves the same scrutiny as any other supply claim.',
        ],
        bodyAr: [
          'يُوجد العود في أسام في مناطق تلال غابات داخل الولاية، في الحزام العام نفسه الذي تتاخم فيه ولايات الشمال الشرقي المجاورة. والأشجار من نوع Aquilaria agallocha، ويتكون الراتنج بعد الجرح وإصابة الفطريات بالطريقة نفسها في بقية المناطق — أي إن المتاح في أي سنة يعتمد على ما طرأ على الأشجار لا على جدول إنتاج.',
          'والنتيجة العملية للمشتري أن خشب أسام مادة حصاد بري بتوريد متذبذب، وأن ادعاء «توريد ثابت من أسام» يستحق الفحص نفسه الذي يُفحص به أي ادعاء توريد آخر.',
        ],
      },
      {
        heading: 'The copper-deg association',
        headingAr: 'ارتباط القدّ النحاسي',
        body: [
          'Distillation of Assam oud in hammered copper vessels over a wood fire is a long-established practice in the region, and the resulting oil is described in the trade as leather-dominant, animalic and deep. The method is genuinely part of the regional identity of the oil.',
          'It is also a description of a method, not a property of a bottle. Copper and heat are precisely the variables that change the chemical profile of a distillation, and a lot described as Assam oil could have been distilled anywhere, from anywhere. Ask the method, and ask it of the specific batch.',
        ],
        bodyAr: [
          'يُعدّ تقطير عود أسام في قدور نحاسية مطروقة فوق نار الحطب ممارسة راسخة في الإقليم، ويُوصف الزيت الناتج في التجارة بأنه جلدي الطابع، حيواني، وعميق. والطريقة جزء أصيل من هوية الزيت الإقليمية.',
          'لكنها وصفٌ لطريقة لا صفة لقارورة. فالنحاس والحرارة متغيران يغيّران فعلياً الملف الكيميائي للتقطير، واللوط الموصوف بأنه زيت أسام قد يكون مقطّراً في أي مكان ومن أي مادة. اسأل عن الطريقة، واسأل عنها للدفعة بعينها.',
        ],
      },
      {
        heading: 'Terminology used for Assam material',
        headingAr: 'المفردات المستعملة لمادة أسام',
        body: [
          'The trade vocabulary for the districts, the wood types and the trading centres of the region is extensive and locally precise. Words in that vocabulary describe source and customary treatment.',
          'Because the vocabulary is local and long-established, it is worth learning the term your supplier is using and asking what it denotes to them. It is a way of establishing that you are discussing the same thing — which is the precondition for every other comparison on this site.',
        ],
        bodyAr: [
          'مفردات التجارة للمناطق وأنواع الخشب والمراكز التجارية في الإقليم واسعة ودقيقة محلياً. والكلمات في تلك المفردات تصف المصدر والمعالجة الاعتيادية.',
          'ولأن المفردات محلية وراسخة، فإن تعلّم المصطلح الذي يستعمله موردك وسؤاله عن دلالته عنده. فذلك طريقة للتأكد أن الطرفين يتحدثان عن الشيء نفسه — وهي الشرط المسبق لكل مقارنة أخرى في هذا الموقع.',
        ],
      },
      {
        heading: 'What to check before buying',
        headingAr: 'ما الذي ينبغي التحقق منه قبل الشراء',
        body: [
          'The growing district and whether the material was wild or cultivated. The plant species, if it is not being sold as wood from an identified tree. The distillation method and, for oil, the carrier and concentration. The batch reference, so a later delivery can be matched against the sample. And for any consignment leaving the country, the documentation that applies to the species.',
        ],
        bodyAr: [
          'المنطقة النامية وهل كانت المادة برية أم مستزرعة. ونوع النبات إن كانت تُباع خشباً من شجرة معرَّفة. وطريقة التقطير، وللزيت الحامل والتركيز. ومرجع الدفعة، حتى يمكن مطابقة التسليم اللاحق بالعينة. وأي شحنة تخرج من البلد تحتاج إلى الوثائق المنطبقة على النوع.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'FAOLEX', 'AGARWOOD_REVIEW_2014', 'CITES_AGARWOOD_2004', 'CITES_APPENDICES', 'POWO_AQUILARIA_CRASSNA'],
    limitations:
      'This page describes the region, the species and the distillation tradition associated with it. It does not establish the quality, resin content or yield of any Assam lot, does not certify any distillery, and does not confirm that a supplier named as operating in Assam does so.',
    limitationsAr:
      'تصف هذه الصفحة الإقليم والنوع وتقاليد التقطير المرتبطة به. ولا تثبت جودة أي لوط من أسام ولا نسبة راتنجه ولا مردوده، ولا توثّق أي معمل، ولا تؤكد أن مورداً مذكوراً بأنه يعمل في أسام يعمل فيها فعلاً.',
    reviewer: REVIEWER,
    reviewerAr: REVIEWER_AR,
    reviewMethod: REVIEW_METHOD,
    reviewMethodAr: REVIEW_METHOD_AR,
    reviewedOn: REVIEWED_ON,
    nextSteps: [
      'Read the India origin guide',
      'Read how documentation is checked',
      'Learn to compare origin claims',
    ],
    nextStepsAr: [
      'اقرأ دليل الهند',
      'اقرأ كيف تُفحص الوثائق',
      'تعلّم مقارنة ادعاءات المنشأ',
    ],
    related: [
      { slug: 'origins/india', label: 'India and northeast origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
    ],
    parent: 'origins',
    taxonomyKey: 'IN',
  },

  {
    slug: 'buying/in/united-arab-emirates',
    kind: 'destination',
    state: 'reviewed',
    title: 'Buying oud and fragrance in United Arab Emirates',
    titleAr: 'شراء العود والعطور في الإمارات العربية المتحدة',
    h1: 'Buying oud and fragrance in United Arab Emirates',
    h1Ar: 'شراء العود والعطور في الإمارات العربية المتحدة',
    summary:
      'What a buyer in the UAE needs to check, where the trade is concentrated, and what the documentation situation is for material arriving.',
    summaryAr:
      'ما يحتاج المشتري في الإمارات إلى التحقق منه، وأين يتركز السوق، وحالة الوثائق للمادة الواردة.',
    directAnswer:
      'The United Arab Emirates is primarily a trading and consuming centre rather than a growing region: the oud sold here is mostly imported, and much of it is imported already distilled. A buyer in the UAE is therefore usually buying from a seller rather than from a producer, which changes what can be checked. The questions that matter locally are about the seller\'s own status and records — what they can document about a lot, and whether they are the party that handled it — rather than about local growing conditions. On documentation, material imported into the UAE must already have cleared its export controls in the country of origin, and re-export moves it into a second set of rules.',
    directAnswerAr:
      'الإمارات العربية المتحدة مركز تجارة واستهلاك أساساً لا منطقة نمو: فمعظم العود المباع فيها مستورد، وكثير منه مستورد وقد قُطّر قبل سفره. والمشتري في الإمارات يشتري من بائع لا من منتج غالباً، وهذا يغيّر ما يمكن التحقق منه. فالأسئلة المهمة محلياً تتعلق بسجلات البائع نفسه — ماذا يستطيع توثيقه عن اللوط، وهل هو الجهة التي تعاملت معه — لا بظروف النمو المحلية. أما بالنسبة للوثائق، فالمادة المستوردة إلى الإمارات يجب أن تكون قد استوفت ضوابط التصدير في بلد المنشأ أصلاً، وإعادة التصدير تنقلها إلى مجموعة قواعد ثانية.',
    sections: [
      {
        heading: 'What the UAE market actually is',
        headingAr: 'ما هو سوق الإمارات فعلاً',
        body: [
          'The UAE is a hub for the trade in oud: material is imported, aged, blended, bottled and re-exported, and the merchant houses of Dubai in particular handle a large share of the region\'s trade. This makes it a good place to buy and a difficult place to trace origin, because most of the material passing through has already passed through at least one other jurisdiction.',
          'The practical consequence is that when you buy in the UAE, the origin question is usually one or two steps away from you. Ask the seller what they know about the lot, and ask for the record they hold — a batch reference, a supplier relationship, an incoming document. A seller who cannot produce any of those is relying on the reputation of their own source, which is a different and weaker basis than a document.',
        ],
        bodyAr: [
          'الإمارات مركز لتجارة العود: تُستورد المادة وتُعتَّق وتُمزج وتُعبَّأ وتُعاد تصديرها، وتتولى بيوت تجارة دبي بالذات حصة كبيرة من تجارة الإقليم. وهذا يجعلها مكاناً جيداً للشراء ومكاناً صعباً لتتبّع المنشأ، لأن معظم المادة المارّة فيها قد مرّت سلفاً بولاية قضائية أخرى واحدة على الأقل.',
          'والنتيجة العملية أن الشراء في الإمارات يطرح سؤال المنشأ عادة على بُعد خطوة أو خطوتين منك. اسأل البائع ماذا يعرف عن اللوط، واطلب السجل الذي يحتفظ به — مرجع دفعة، أو علاقة مورد، أو وثيقة واردة. ومن لا يستطيع تقديم أيٍّ منها، فإنما يعتمد على سمعة مصدره، وهي أساس أضعف من الوثيقة.',
        ],
      },
      {
        heading: 'What to check when buying here',
        headingAr: 'ما الذي ينبغي التحقق منه عند الشراء هنا',
        body: [
          'Whether the material is wood or oil, and if oil, from what plant and by what method. Whether the seller can name the batch and produce a record for it. Whether the price reflects a specific lot or a market level. And whether the seller is trading as the principal or as an agent — because that determines who bears responsibility for the material.',
          'For a buyer who intends to resell or to use the material in a product that will be exported, the documentation chain matters more than the local terms, and it is worth asking directly whether the seller can supply it.',
        ],
        bodyAr: [
          'هل المادة خشب أم زيت، وإن كانت زيتاً فمن أي نبات وبأي طريقة. وهل يستطيع البائع تسمية الدفعة وتقديم سجل لها. وهل يعكس السعر لوطاً بعينه أم مستوى السوق. وهل يتعامل البائع بصفته أصيلاً أم وكيلاً — فذلك يحدد من يتحمل مسؤولية المادة.',
          'ولمن ينوي إعادة البيع أو استعمال المادة في منتج سيُصدَّر، تكون سلسلة الوثائق أهم من الشروط المحلية، ويستحق أن تسأل مباشرةً إن كان البائع قادراً على توفيرها.',
        ],
      },
      {
        heading: 'Where the retail side sits',
        headingAr: 'أين يقف جانب التجزئة',
        body: [
          'Retail availability in the UAE is broad, and the retail market for oud sits alongside the wholesale one without being the same thing: retail purchases are typically of a bottle, an attar or a small quantity of chips, and they are governed by the retailer’s own terms rather than by a batch record.',
          'Retail buying is a reasonable way to learn what a material smells like before committing to a sample set, and it is not a substitute for one. The two are best used together: retail to explore, wholesale samples to document.',
        ],
        bodyAr: [
          'التوفر في التجزئة بالإمارات واسع، وسوق العود للتجزئة يجاور سوق الجملة دون أن يكون شيئاً واحداً: فمشتريات التجزئة عادةً قارورة أو عطر شرقي أو كمية صغيرة من الرقائق، وتحكمها شروط البائع التجزئي لا سجل دفعة.',
          'والشراء بالتجزئة طريقة معقولة لتعرف رائحة المادة قبل الالتزام بمجموعة عينات، وليس بديلاً عنها. والأفضل استعمالهما معاً: التجزئة للاستكشاف، وعيّنات الجملة للتوثيق.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'FAOLEX', 'AGARWOOD_REVIEW_2014'],
    limitations:
      'This page describes how the UAE market functions and what a buyer can check locally. It does not list suppliers, does not publish prices, and does not establish that any particular seller is authorised or that any shipment has cleared any authority.',
    limitationsAr:
      'تصف هذه الصفحة كيفية عمل سوق الإمارات وما يستطيع المشتري التحقق منه محلياً. ولا تسرد موردين، ولا تنشر أسعاراً، ولا تثبت أن بائعاً بعينه مخوَّل أو أن شحنة ما قد استوفت جهةً ما.',
    reviewer: REVIEWER,
    reviewerAr: REVIEWER_AR,
    reviewMethod: REVIEW_METHOD,
    reviewMethodAr: REVIEW_METHOD_AR,
    reviewedOn: REVIEWED_ON,
    nextSteps: [
      'Learn what a document can establish',
      'Read how to compare quotations',
      'See which sellers handle which origins',
    ],
    nextStepsAr: [
      'اعرف ما الذي يمكن لوثيقة إثباته',
      'اقرأ كيف تقارن عروض الأسعار',
      'اعرف أي موردين يتعاملون مع أي أصول',
    ],
    related: [
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'trade/document-review-limits', label: 'What reviewing a document can establish' },
      { slug: 'sourcing/comparing-supplier-quotes', label: 'Compare supplier quotations without assuming equivalence' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
    ],
    parent: 'buying',
    taxonomyKey: 'AE',
  },
];

/**
 * The India page lists every region the register documents for the
 * country: the hand-written Assam page and the five north-east regions
 * in the shared facts table. The labels and blurbs come from each
 * region page's own title and summary.
 */
for (const article of originArticles) {
  if (article.slug !== 'origins/india') continue;
  const assam = originArticles.find((a) => a.slug === 'origins/india/assam');
  const others = originRegionChildren['india'] ?? [];
  article.children = [
    ...(assam
      ? [
          {
            slug: assam.slug,
            label: assam.title,
            labelAr: assam.titleAr,
            blurb: assam.summary,
            blurbAr: assam.summaryAr,
          },
        ]
      : []),
    ...others.map((child) => ({
      slug: child.slug,
      label: child.title,
      labelAr: child.titleAr,
      blurb: child.summary,
      blurbAr: child.summaryAr,
    })),
  ];
}
