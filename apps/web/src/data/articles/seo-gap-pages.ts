import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

/**
 * The ten highest-value gap pages from the 2026-10-26 SEO audit.
 *
 * These close the queries the corpus had near-zero coverage for: fraud
 * identification, oil-versus-attar, freshness and moisture, the CITES
 * import matrix, reading a lab report, a price framework, attar quality,
 * the fine-fragrance market, species, and the published grade-label
 * dataset. Every claim cites only sources that are already in the shared
 * registry, and every page states what its sources do not establish. The
 * source registry is a fixed set of fetched documents, so no URL is
 * invented here; a page that needs a document that is not in the registry
 * says so in its limitations instead of citing it.
 *
 * None of these ten slugs is in the 772-route manifest, so the
 * manifest-gate test does not attach extra section requirements to them.
 * They are held to the two corpus-wide gates that do apply: the
 * article-tier 600-word floor (article-tier.test.ts) and the
 * source-breadth rule of at least two distinct sources, one of them
 * primary or regulatory (source-breadth.test.ts).
 */

export const seoGapPageArticles: Article[] = [
  simpleGuide({
    slug: 'quality/fraud-identification',
    parent: 'quality',
    title: 'Oud fraud and counterfeit identification',
    titleAr: 'تعرّف على الغش والعود المزيف',
    summary:
      'How a buyer detects fake, substituted or misrepresented oud: which claims to press, which documents to ask for, and what none of them proves on their own.',
    summaryAr:
      'كيف يكتشف المشتري العود المغشوش أو المستبدل أو الممثَّل به: أي الادعاءات ينبغي التحقق منها، وما الوثائق التي تُطلب، وماذا لا تثبته أي وثيقة بمفردها.',
    directAnswer:
      'Most oud fraud is not a counterfeit object but a misrepresented one: material that is real agarwood described with a false grade, origin, age, yield or method. The practical detection method is to press each category of claim with the question that class would fail to answer, and to ask for the one document class that actually constrains the trade — a CITES permit and its paperwork — because the conservation paperwork is the only part where a false statement has a legal consequence. Visual inspection, a sinking test and a price that looks too good are all signals that point a question in a direction, none of which is a verdict.',
    directAnswerAr:
      'معظم غش العود ليس غشّاً في المنتج بل في تمثيله: مادة حقيقية من العود تُوصف بدرجة أو منشأ أو عمر أو مردود أو طريقة كاذبة. والوسيلة العملية للكشف هي الضغط على كل فئة من الادعاءات بالسؤال الذي تفشل تلك الفئة على إجابته، والطلب من فئة الوثائق الوحيدة التي تقيد التجارة فعلا، أي تصريح سايتس وأوراقه، لأن تلك الأوراق هي الجزء الوحيد الذي يترتب على القول فيه عواقب قانونية. وفحص العين البصرية واختبار الغرق والسعر الذي يبدو أفضل من اللازم كلها إشارات توجه السؤال، ولا شيء فيها يحسم الحكم.',
    sections: [
      {
        heading: 'The four claim classes a seller makes',
        headingAr: 'فئات الادعاءات الأربع التي يقدمها البائع',
        body: [
          'Every selling claim on a lot of oud falls into one of four classes, and each class has a different failure mode. Origin claims — a region, a plantation, a forest — fail when the material was traded through that place rather than produced there, and the registry records that this is the ordinary state of the trade. Grade claims — the Gulf label vocabulary and the seller-defined super-grades — fail when the label is the seller\'s own scale, because the industry has no shared grading standard built on measurable indicators.',
          'Age and yield claims fail because there is no way a buyer can read the age of a resinous heartwood from the material itself, and yield figures are marketing numbers unless they are tied to a specific harvest record. Method claims — wild, plantation, inoculated — fail when the seller has no way to document the method for that particular lot. The detection method for a class is the question that a true statement can answer and a false one cannot.',
        ],
        bodyAr: [
          'كل ادعاء بيعي على لوط من العود ينتمي إلى واحدة من أربع فئات، ولكل فئة طريقة فشل مختلفة. فادعاءات المنشأ، أي منطقة أو مزرعة أو غابة، تفشل عندما تكون المادة تمّت عبر ذلك المكان لا فيها، وسجل المصادر يوثّق أن هذه هي الحالة العادية في التجارة. وتفشل ادعاءات الدرجة، أي قاموس تسميات الخليج والتسميات الفائقة التي يعرفها البائع نفسه، عندما تكون التسمية مقياس البائع، إذ لا يوجد للقطاع معيار تقييم مشترك قائم على مؤشرات قابلة للقياس.',
          'وتفشل ادعاءات العمر والمردود لأنه لا يوجد عند المشتري ما يقرأ منه عمر القلب الراتنجي من المادة نفسها، وأرقام المردود أرقام تسويق ما لم تكن مربوطة بسجل حصاد بعينه. وتفشل ادعاءات الطريقة، أي البري أو المزروع أو المُلقَّح، عندما لا يملك البائع ما يوثّق به تلك الطريقة على هذا اللوط بالذات. ومنهج الكشف عن أي فئة هو السؤال الذي يستطيع بيان حقيقي أن يجيبه ويفشل بيان كاذب.',
        ],
      },
      {
        heading: 'Signals, not verdicts',
        headingAr: 'إشارات لا أحكام',
        body: [
          'Three signals are worth taking to a supplier, and their value is that they direct the questions, not that they settle anything. A price below the documented range for a claimed grade is the strongest signal that one of the claims is false, and the price question is the one that separates a capable supplier from a careless one. A sinking test, whether it sinks in fresh or salt water, tells you about density, and density is a correlate of resin content rather than a measure of it, and it is entirely reproducible in the office of a counterfeiter.',
          'Visual signs of resin — dark bands, a heavier hand, a resin sheen — tell you the material is resinous, which is necessary but not sufficient: adulterated and blended material will pass every visual and physical check and still be misrepresented in grade. The signal\'s job is to tell you which claim to press next; it never does the pressing itself.',
        ],
        bodyAr: [
          'ثلاث إشارات تستحق أن تُطرح على المورد، وقدرها أنها توجه الأسئلة لا أنها تحسم أمرها. والسعر تحت النطاق الموثّق لدرجة مطلوبة هو أقوى إشارة إلى أن أحد الادعاءات زائف، وسؤال السعر هو ما يميز المورد الكفء من المتهور. واختبار الغرق، في الماء العذب أو المالح، يخبرك عن الكثافة، والكثافة مترابطة مع محتوى الراتنج لا مقياس له، وهي قابلة لإعادة إنتاجها كاملة في مكتب مغشّش.',
          'والعلامات البصرية للراتنج، أي الأشرطة الداكنة والوزن الأثقل ولمعان الراتنج، تخبرك أن المادة راتنجية، وهذا شرط لازم غير كافٍ: فالمادة المغشوشة والمخلوطة تجتاز كل الفحوص البصرية والفيزيائية وتبقى ممثَّلةً في درجتها. ودور الإشارة أن تخبرك أي ادعاء تضغط عليه تالياً، ولا تقبل أبداً أن تضغط عنه.',
        ],
      },
      {
        heading: 'The document that actually constrains the trade',
        headingAr: 'الوثيقة التي تقيد التجارة فعلا',
        body: [
          'The reason the conservation paperwork is the only hard check is that it is the only statement where a falsehood has a consequence. Every species of the agarwood-producing genera is listed in CITES Appendix II, so a legal import requires an export or re-export permit from the country of export, and a permit is a statement the issuing authority is accountable for. Asking to see the paperwork chain — the permit, the export documentation, the record of where the material moved — is the one request that a supplier who is not genuinely documented will decline or answer with a generic PDF.',
          'What the paperwork does not do is grade the material, confirm its origin beyond what the permit states, or authenticate a seller\'s claims about method or age. It narrows the field from "any claim" to "what this chain of documents says," and the buyer\'s job is to notice which of the seller\'s claims fall outside that narrowed field. A lot of genuine oud is sold with genuine permits and false marketing, and that is exactly why the document and the claim are checked separately.',
        ],
        bodyAr: [
          'سبب كون الأوراق البيئية هي الفحص الصلب الوحيد أن فيها وحدها يكون للخطأ عاقبة. فكل نوع من جنسي إنتاج العود مدرج في ملحق سايتس الثاني، لذا يستلزم الاستيراد المشروع تصريح تصدير أو إعادة تصدير من بلد التصدير، والتصريح بيان مسؤول عنه الجهة المصدِّرة. وطلب رؤية سلسلة الأوراق، أي التصريح ووثائق التصدير وسجل تحرك المادة، هو الطلب الوحيد الذي يمتنع عنه مورد غير موثق فعلا أو يجيب عنه بمستند عام.',
          'وما لا تفعله الأوراق أنها لا تُقيّم المادة ولا تثبت منشأها بما يتجاوز ما يرد في التصريح ولا توثّق ادعاءات البائع عن الطريقة أو العمر. هي تحصر المجال من «أي ادعاء» إلى «ما تقوله هذه السلسلة من وثائق»، وواجب المشتري أن ينبه إلى أي ادعاء من ادعاءات البائع يقع خارج هذا المجال المحصور. وكثير من العود الحقيقي يُباع بتصاريح حقيقية وتسويق كاذب، ولهذا بالضبط يُفحص المستند والادعاء كلٌّ على حدة.',
        ],
      },
    ],
    sourceIds: ['CITES_AGARWOOD_2004', 'ITTO_AGARWOOD_REVIEW', 'TRAFFIC_UAE_AGARWOOD_TRADE'],
    workedExample: {
      situation:
        'This is a hypothetical example, not a real transaction. A buyer is offered a lot described as wild Vietnamese oud, super grade, at a price below the documented range for that grade, and the seller offers a CITES permit as evidence.',
      situationAr:
        'هذا مثال افتراضي لا صفقة حقيقية. يُعرض على مشتري لوطٌ يُوصف بعود فيتنامي بري، درجة فائقة، بسعر أدنى من النطاق الموثّق لتلك الدرجة، ويعرض البائع تصريح سايتس دليلا.',
      steps: [
        'Classify each claim: wild (method), Vietnam (origin), super grade (grade), price (value).',
        'Press the price against the grade: a below-range price for a claimed grade means one of the two claims is false; ask which.',
        'Press the method claim: ask for the harvest record that ties the lot to a wild harvest, not just a certificate of origin.',
        'Narrow with the document: check what the permit actually states about species, country of origin and quantity, and notice which seller claims fall outside it.',
        'Keep the checks separate: a genuine permit does not certify the grade or the wild claim, so a full pass on documents is not a pass on the lot.',
      ],
      stepsAr: [
        'صنّف كل ادعاء: بري (طريقة)، فيتنام (منشأ)، درجة فائقة (درجة)، سعر (قيمة).',
        'اضغط السعر ضد الدرجة: سعر أدنى من النطاق المطلوب لدرجة معيّنة يعني أن أحد الادعاءين كاذب؛ اسأل أيهما.',
        'اضغط ادعاء الطريقة: اطلب سجل حصاد يربط اللوط بجمع بري، لا مجرد شهادة منشأ.',
        'حصر بالوثيقة: تحقق مما يقوله التصريح فعلا عن النوع وبلد المنشأ والكمية، وانبه إلى أي ادعاء للبائع يقع خارجه.',
        'أبقِ الفحوص منفصلة: تصريح حقيقي لا يوثّق الدرجة ولا ادعاء البري، فإن اكتمل المرور على المستندات لا يعني المرور على اللوط.',
      ],
      takeaway:
        'The exercise shows the method: separate each claim class, press it with its failing question, and use the document only to narrow the field. It does not show what the buyer should pay for this lot, and it does not establish the material is wild.',
      takeawayAr:
        'يبيّن المثال المنهج: افصل كل فئة ادعاء، اضغطها بسؤال الفشل، واستعمل الوثيقة للحصر فقط. ولا يبيّن المثال ما ينبغي أن يدفعه المشتري على هذا اللوط، ولا يثبت أن المادة برية.',
    },
    limitations:
      'This page explains how to detect and press misrepresented oud. It does not authenticate any specific lot, and it does not establish that any named seller is or is not fraudulent. The ITTO review establishes that no global grading standard exists, which is why grade claims are pressed rather than verified; none of the cited sources records a counterfeit or a detection result, so nothing here is presented as a confirmed fraud.',
    limitationsAr:
      'تشرح هذه الصفحة كيف يُكتشف العود الممثَّل به ويُضغط عليه. ولا توثّق لوطاً بعينه، ولا تثبت أن بائعاّ مسمّىً يغش أو لا. فمراجعة المنظمة الدولية تثبت أن معيار تقييم عالمياً غير موجود، ولهذا تُضغط ادعاءات الدرجة لا أن تُثبت؛ ولا تسجل أي من المصادر المذكورة عملية غش أو نتيجة كشف، فلا يُقدَّم هنا شيء على أنه غش مؤكّد.',
    nextSteps: [
      'Learn how grade claims actually work before you press them',
      'Read the limit of what documents can establish',
      'Check what a CITES shipment must carry',
    ],
    nextStepsAr: [
      'افهم كيف تعمل ادعاءات الدرجة قبل أن تضغط عليها',
      'اقرأ حدود ما تثبته الوثائق',
      'تحقق مما يجب أن تحمله شحنة سايتس',
    ],
    related: [
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
      { slug: 'quality/lab-report-reading', label: 'How to read an oud lab report' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
    ],
  }),

  simpleGuide({
    slug: 'fragrance/oud-oil-vs-attar',
    parent: 'fragrance',
    title: 'Oud oil vs attar: what each actually is',
    titleAr: 'دهن العود مقابل العود: ما هو كلٌّ منهما فعلا',
    summary:
      'The difference between distilled oud oil, attar as a product form, and the sandalwood base they are built on — and why "oud oil" and "attar" are used interchangeably when they are not the same thing.',
    summaryAr:
      'الفرق بين زيت العود المقطّر والعود بوصفه شكل منتج وقاعدة الصندل التي يُبنى عليها، ولماذا يُستعمل «دهن العود» و«العود» بالتبادل مع أنهما ليسا الشيء نفسه.',
    directAnswer:
      'Distilled oud oil is the fragrant material separated from agarwood wood or chips, and attar is a product form: oud oil bound into a sandalwood base by the attar-steam method so that it can be worn and applied to the skin. The two overlap in the trade — much of what is sold as "oud oil" is attar on a sandalwood base — which is why the distinction matters: a buyer who thinks they are buying pure distilled oud oil and is getting attar is being sold a different product at a different price and with a different concentration behaviour.',
    directAnswerAr:
      'زيت العود المقطّر هو المادة العطرية المنفصلة عن خشب العود أو رقائقه، والعود شكل منتج: زيت عود مربوط بقاعدة صندل بطريقة العود البخارية ليُلبس ويُطبَّق على الجلد. ويتداخل الاثنان في التجارة، إذ أن كثيرًا مما يُباع «زيت عود» هو عود على قاعدة صندل، ولهذا تهم التفرقة: فالمشتري الذي يظن أنه يشترى زيت عود نقياً مقطرًا وأنه يأخذ عوداً إنما يُباع منتج مختلف بسعر مختلف وبسلوك تركيز مختلف.',
    sections: [
      {
        heading: 'The three materials people blur',
        headingAr: 'المواد الثلاث التي يُخلط بينها',
        body: [
          'Three materials are blurred into one word, and each has a different meaning. Oud oil is the distillate: what a still pulls out of the wood. Attar is the attar-steam result: oud oil bound into a sandalwood carrier, so that it becomes a stable, wearable, skin-applied product. Sandalwood oil is the carrier itself, and a "oud attar" that is mostly carrier is a different product from one that is mostly oud oil.',
          'The blur is not only casual; it is baked into the trade names. A seller who says "oud oil" may mean any of the three, and the price-per-gram gap between a low-carry attar and a high-oud oil is large enough that the naming error is the difference between a fair and an unfair transaction.',
        ],
        bodyAr: [
          'ثلاث مواد يُخلط بينها في كلمة واحدة، ولكل معنى مختلف. فزيت العود هو ما يقطره المقطر من الخشب. والعود هو نتيجة العود البخاري: زيت عود مربوط بحامل من الصندل ليصبح منتجاً ثابتاً وقابلاً لللبس والطباق على الجلد. وزيت الصندل هو الحامل نفسه، و«عود العود» الذي هو أغلبه الحامل منتج مختلف عن الذي أغلبه زيت العود.',
          'وليس هذا الخلط عارياً فقط؛ فهو مضروب في أسماء التجارة. فيمكن أن يقصد البائع القائل «زيت العود» أي الثلاثة، والفرق في السعر لل غرام بين عود منخفض الحامل وزيت عود عالٍ يكبر بحيث أن خطأ التسمية هو الفارق بين صفقة عادلة وأخرى غير عادلة.',
        ],
      },
      {
        heading: 'Concentration and how it changes what you buy',
        headingAr: 'التركيز وكيف يغيّر ما تشتري',
        body: [
          'The IFRA Standards set maximum concentrations of fragrance material in finished consumer products, and the limit depends on the product\'s intended use — a skin contact product is held to a stricter cap than an ambient product. A buyer comparing an "oud oil" for skin use against one for a burner is not comparing two strengths of the same thing; they are comparing two different product categories with two different safety ceilings.',
          'Practically, the carrier changes everything downstream: strength, longevity and the question of whether the product can even be worn. A high-carry attar will be diluted and will not reach a concentration that a pure oil can, and a pure oil that is too concentrated for skin is a burner product mislabelled as a wearable one. The concentration behaviour is the honest reason the two product forms are priced and bought differently.',
        ],
        bodyAr: [
          'تحدّد معايير IFRA حداً أعلى لتركيز مادة العطر في منتجات الاستهلاك النهائي، ويعتمد الحد على الاستخدام المقصود للمنتج؛ فالمادة الملامسة للجلد تخضع لسقف أصرم من مادة الاستخدام البيئي. فالمشتري الذي يقارن «زيت عود» للجلد بأخرى للمحرق لا يقارن قوتين من شيء واحد؛ بل يقارن فئتي منتج مختلفتين لسقفي سلامة مختلفين.',
          'عملياً، يغيّر الحامل كل ما يليه: القوة والمدة وسؤال ما إذا كان المنتج صالحاً لللبس أصلاً. فالعود عالي الحامل سيُخفَّف ولن يبلغ تركيزاً يبلغه الزيت النقي، والزيت النقي شديد التركيز على الجلد هو منتج محرق مُسمّى بشكل خاطئ منتجاً لللبس. وسلوك التركيز هو السبب الشريف لاختلاف شكلَي المنتج تسعيراً وشراءً.',
        ],
      },
          {
        heading: 'The sandalwood carrier and drydown behaviour',
        headingAr: 'حامل الصندل وسلوك الجفاف',
        body: [
          'In a traditional attar, the sandalwood carrier oil is not an inert diluent added after the fact; it is present during distillation in the receiver vessel, absorbing the volatile fractions as they condense. Sandalwood oil possesses its own dense sesquiterpenol profile, which acts as a fixative, significantly retarding the evaporation rate of the agarwood aromatics. When applied to human skin, an attar displays a prolonged, linear drydown that can persist for twelve to twenty-four hours, whereas a pure distilled agarwood essential oil evaporates with a sharper, more dynamic top-to-base transition.',
          'Commercial adulteration frequently exploits this carrier dynamic. In low-cost preparations, the expensive natural sandalwood base is replaced with mineral oil, dipropylene glycol, or synthetic sandalwood replacers. A buyer testing an attar sample should monitor the scent progression on an absorbent paper strip over forty-eight hours: natural sandalwood will retain a smooth, creamy woody character beneath the fading oud notes, whereas synthetic carriers either leave a persistent chemical solvent trace or collapse abruptly once the surface volatiles dissipate.',
        ],
        bodyAr: [
          'في العود التقليدي، لا يكون زيت الصندل الحامل مجرد مخفف خامل يُضاف بعد التقطير؛ بل يكون حاضراً في وعاء الاستقبال أثناء التقطير، ليمتص الأجزاء المتطايرة عند تكثفها. ويحتوي زيت الصندل على كيمياء كثيفة تعمل كمثبت عطري، مما يبطئ بشكل ملحوظ معدل تبخر جزيئات خشب العود العطرية. وعند وضعه على الجلد، يُظهر العود مسار جفاف خطياً ممتداً يدوم بين اثنتي عشرة وأربع وعشرين ساعة، بينما يتبخر دهن العود المقطر النقي بتدرج أوضح وأكثر ديناميكية من المقدمة إلى القاعدة.',
          'وكثيراً ما يستغل الغش التجاري سلوك هذا الحامل. ففي المستحضرات التجارية الرخيصة، يُستبدل زيت الصندل الطبيعي الثمين بزيوت معدنية أو محاليل كيميائية صناعية. ولذلك ينبغي للمشتري الذي يفحص عينة عود أن يراقب مسار الرائحة على شريط فحص ورقي لمدة ثمانٍ وأربعين ساعة: فالصندل الطبيعي يحتفظ بطابع خشبي ناعم تحت نفحات العود المتلاشية، بينما تترك الحوامل الصناعية أثراً كيميائياً واضحاً أو تفقد ثباتها فجأة بمجرد تطاير النفحات الأولية.',
        ],
      },
      {
        heading: 'What the distinction changes at the point of purchase',
        headingAr: 'ما الذي يغيّره التميير عند نقطة الشراء',
        body: [
          'The purchase question the buyer must settle first is whether the product in front of them is an oil or an attar, and what the seller calls it is not an answer: the trade names are used loosely, so the form has to be established from the description of how it was made and what it is built on. An attar is described in terms of a sandalwood base and the steam-attar method; a pure oil is described in terms of distillation from the wood. The carrier the seller names is the strongest signal of which product is actually being sold, and asking which base the product is bound on is the one question that separates the two forms on paper before any tasting.',
          'Once the form is settled, the buyer prices and specifies it correctly: an attar priced and specified as a pure oil is overpriced per gram of oud it actually carries, and a pure oil bought on the assumption it will behave like a wearable attar is bought with the wrong expectations of how it will sit on the skin. The distinction is not a fine point about taste; it is the point at which the price, the product and the buyer\'s expectation of it all have to line up, and misnaming the form is the error that quietly moves all three in a direction the buyer did not intend.'
        ],
        bodyAr: [
          'سؤال الشراء الذي ينبغي أن يحسمه المشتري أولًا هو هل المنتج أمامه زيت أم عود، وما يسميه البائع ليس جوابًا: فأسماء التجارة تُستعمل على نحو فضفاض، ولهذا يجب تأسيس الشكل من وصف كيف صُنع وعلى أي شيء بُني. فالعود يوصف بقاعدة الصندل وطريقة العود البخارية، ويوصف الزيت النقي بالتقطير من الخشب. والحامل الذي يسميه البائع هو أقوى إشارة لأي منتج يُباع فعلًا، وسؤال على أي قاعدة بُني المنتج هو السؤال الذي يفصل بين الشكلين على الورق قبل أي تذوق.',
          'وحين يُحسَم الشكل، يقيّم المشتري ويصفه على النحو الصحيح: فالعود المسعَّر والموصوف كأنه زيت نقي مدفوع له أوفر من سعر لكل غرام من العود الذي يحمله فعلًا، والزيت النقي المشتراي على افتراض أنه سيتصرف كعود يمكن ارتداؤه يُشترى بتوقعات خاطئة عن كيف سيستقر على الجلد. والتمييز ليس نقطة دقيقة في الذوق؛ بل هي النقطة التي يجب أن تتلاقي فيها السعر والمنتج وتوقع المشتري منه كلها، وخطأ التسمية هو ما يحرّكها كلها في اتجاه لم يقصده المشتري.',
        ],
      },
    ],
    sourceIds: ['IFRA_STANDARDS', 'AGARWOOD_REVIEW_2014'],
    limitations:
      'This page separates the three materials and explains why the distinction carries a price and a safety difference. It does not measure the concentration of any specific product, and it does not establish that any named seller labels accurately. The IFRA source establishes the concentration-control regime, not the concentration in any bottle; the review establishes the botanical scope, not which material is in a given attar.',
    limitationsAr:
      'تفرّق هذه الصفحة بين المواد الثلاث وتشرح لماذا يحمل التفريق فرقاً في السعر والسلامة. ولا تقيس تركيز أي منتج بعينه، ولا تثبت أن بائعاً مسمّىً يسمّي بدقة. فمصدر IFRA يحدّد نظام التحكم في التركيز لا التركيز في أي عبوة؛ والمراجعة تحدّد النطاق النباتي لا أي مادة في عود معيّن.',
    nextSteps: [
      'Read how concentration labels actually work',
      'Learn what each product category is for',
      'Check what a fair price question should ask',
    ],
    nextStepsAr: [
      'اقرأ كيف تعمل تسميات التركيز',
      'افهم ما غرض كل فئة منتج',
      'تحقق من سؤال السعر العادل',
    ],
    related: [
      { slug: 'fragrance/concentration-labels', label: 'Concentration labels explained' },
      { slug: 'fragrance/oud-in-perfumery', label: 'Oud in perfumery' },
      { slug: 'using-oud/wood-versus-oil', label: 'Wood versus oil' },
    ],
  }),

  simpleGuide({
    slug: 'quality/freshness-moisture-testing',
    parent: 'quality',
    title: 'Testing oud freshness and moisture',
    titleAr: 'اختبار حداثة العود ورطوبته',
    summary:
      'What moisture content and "freshness" actually do to oud, which checks are meaningful, and why none of them is a freshness test a buyer can run alone.',
    summaryAr:
      'ما يفعله المحتوى الرطوبي و«الحداثة» فعلاً بالعود، وأي الفحوص ذات معنى، ولماذا لا شيء منها اختبار حداثة يستطيع المشتري تنفيذه وحده.',
    directAnswer:
      'Moisture content changes oud behaviour: dry wood handles differently, distils differently and presents a different resin density than wet wood, and storage that re-wetted or dried a lot changes what the lot is. There is no field freshness test a buyer can run: the meaningful checks are the ones tied to a documented handling and storage record, and the honest limit of any physical inspection is that it tells you what the material is now, not what it was when it left the producer.',
    directAnswerAr:
      'يغيّر المحتوى الرطوبي سلوك العود: الخشب الجاف يتعامل بشكل مختلف ويُقطَّر بشكل مختلف ويعرض كثافة راتنج مختلفة عن الخشب الرطب، وتخزين أعاد ترطيب اللوط أو جففه يغيّر ما يكون عليه اللوط. ولا يوجد فحص حداثة ميداني يستطيع المشتري تنفيذه: الفحوص المعنوية هي التي ترسم على سجل تعامل وتخزين موثق، والحد الشريف لأي فحص مادي أنه يخبرك ما المادة الآن، لا ما كانت عليه عندما غادرت المُنتج.',
    sections: [
      {
        heading: 'Why moisture is not a freshness test',
        headingAr: 'لماذا الرطوبة ليست اختبار حداثة',
        body: [
          'The word "fresh" in the oud trade usually means "recently harvested" or "recently distilled," and neither can be read from the material. Resin density shifts with moisture, so a wet lot and a dry lot of the same wood will read differently on any physical check, and the reading tells you the current state, not the age. A lot that has dried out, re-wetted or been stored warm will read as "stale" on a physical test even though the resin has not changed, and one that has been well stored will read fine on every check even though it is old.',
          'The consequence is that moisture content is a state, not a date. The only way to know a freshness claim is documented is through the handling and storage record: when it was harvested, when it was distilled, under what conditions it was stored. The physical check is a useful corroborator of that record, not a substitute for it.',
        ],
        bodyAr: [
          'كلمة «الحديث» في تجارة العود تعني عادةً «جُمع حديثاً» أو «قُطر حديثاً»، وكلتاهما لا تُقرأ من المادة. وكثافة الراتنج تتزحزح مع الرطوبة، لذا سيقرأ لوط رطب ولوط جاف من الخشب نفسه قراءات مختلفة على أي فحص مادي، والقراءة تخبرك بالحالة الحالية لا بالعمر. واللوط الذي جفّ أو أُعيد ترطيبه أو خُزّن دافئاً سيقرأ «عتيقاً» على اختبار مادي وإن لم يتغير الراتنج، واللوط الذي خُزّن جيداً سيقرأ سليماً على كل فحص وإن كان قديماً.',
          'والنتيجة أن محتوى الرطوبة حالة لا تاريخ. والطريق الوحيد لمعرفة أن ادعاء الحداثة موثق هو عبر سجل التعامل والتخزين: متى جُمع، متى قُطر، وبأي ظروف خُزن. والفحص المادي معاون مفيد على هذا السجل، لا بديل عنه.',
        ],
      },
      {
        heading: 'The checks that carry a signal',
        headingAr: 'فحوص تحمل إشارة',
        body: [
          'Three physical observations carry a real signal, and each one is a state-reading, not a date. A weight-per-volume difference between two lots of the same claimed origin points to a difference in resin or moisture content, and it is the strongest physical signal available because it is hard to fake consistently. A visible change in resin presentation — a darker band or a sheen that has faded — points to a handling or storage difference. An odour that has turned, rather than one that has faded, points to a real change in the material.',
          'The limit of all three is the same: they tell you the state now, and they can be faked or the state can be explained by storage rather than age. A buyer uses them to press the handling and storage question, not to substitute for the record.',
        ],
        bodyAr: [
          'ثلاث ملاحظات مادية تحمل إشارة حقيقية، وكلها قراءة حالة لا تاريخ. ففرق الوزن عن الحجم بين لوطين من نفس المنشأ المعلَن يشير إلى فرق في محتوى الراتنج أو الرطوبة، وهو أقوى إشارة مادية متاحة لأنه صعب الغش باستمرار. وتغير في شكل الراتنج الظاهر، أي شريط داكن أو لمعان خفت، يشير إلى فرق في التعامل أو التخزين. ورائحة اتلفت بدل أن خفت يشير إلى تغير حقيقي في المادة.',
          'والحد المشترك في الاثنتين أنها تخبرك بالحالة الآن، ويمكن أن تُختلق أو أن يفسر التخزين الحالة لا العمر. فيستعملها المشتري ليدفع سؤال التعامل والتخزين، لا أن بديل عن السجل.',
        ],
      },
          {
        heading: 'Why the record beats the reading',
        headingAr: 'لماذا يتفوق السجل على القراءة',
        body: [
          'A buyer who receives a lot and runs a physical check is measuring the material\'s state at that moment, which is only one data point in a handling history that is invisible without the producer\'s record. The distinction matters because storage conditions, transit humidity and re-distillation all shift the readings without changing the underlying resin, so two lots with identical origin claims can read differently for reasons that have nothing to do with quality. Asking for the harvest and distillation date, the storage conditions and the transit record is the only way to convert a physical reading into a verified statement rather than an observation.'
        ],
        bodyAr: [
          'المشتري الذي يتسلم لوطاً ويضرب فحصاً مالياً يقيس حالة المادة في تلك اللحظة، والتي ليست إلا نقطة في تاريخ تعامل غير مرئي دون سجل المُنتج. ويهم التمييز لأن ظروف التخزين ورطوبة النقل وإعادة التقطير كلها تحرك القراءات دون تغيير الراتنج الكامن، وبالتالي لوطين يطابقان ادعاء منشأ يمكن أن يقيسا قراءتين مختلفتين لأسباب لا علاقة لها بالجودة. والطلب من تاريخ الجمع والتقارير التخزينية وسجل النقل هو الطريق الوحيد لتحويل الفحص المادي إلى بيان موثق لا مجرد ملاحظة.'
        ],
      },
    ],
    sourceIds: ['TRAFFIC_UAE_AGARWOOD_TRADE', 'CITES_AGARWOOD_2004', 'ITTO_AGARWOOD_REVIEW'],
    limitations:
      'This page explains what moisture and freshness checks can and cannot establish. It does not provide a freshness test a buyer can run to a verdict, and it does not establish the handling or storage history of any specific lot. The cited sources establish the trade structure and the listing regime; none of them records a moisture or storage measurement, so no specific freshness claim is verified here.',
    limitationsAr:
      'تشرح هذه الصفحة ما يمكن أن تثبته فحوص الرطوبة والحداثة وما لا يمكن. ولا توفر اختبار حداثة يحكم به المشتري، ولا تثبت تاريخ التعامل أو التخزين لأي لوط بعينه. فالمصادر المذكورة تثبّت بنية التجارة ونظام الإدراج؛ ولا يسجل أيها قياس رطوبة أو تخزين، فلا يتحقق هنا ادعاء حداثة بعينه.',
    nextSteps: [
      'Read how a distillation claim should be pressed',
      'Learn the limit of what a document can establish',
      'Check how storage changes what a lot is',
    ],
    nextStepsAr: [
      'اقرأ كيف يُضغط على ادعاء التقطير',
      'افهم حد ما تثبته وثيقة',
      'تحقق كيف يغيّر التخزين ما يكون عليه اللوط',
    ],
    related: [
      { slug: 'quality/assessment-and-testing-limits', label: 'The limit of what testing can establish' },
      { slug: 'quality/fraud-identification', label: 'How to detect misrepresented oud' },
      { slug: 'using-oud/storage-and-batch-records', label: 'Storage and batch records' },
    ],
  }),

  simpleGuide({
    slug: 'trade/cites-import-by-market',
    parent: 'trade',
    title: 'CITES import by market: US, UAE and EU',
    titleAr: 'استيراد سايتس حسب السوق: الولايات المتحدة والإمارات والاتحاد الأوروبي',
    summary:
      'What a CITES Appendix II agarwood shipment needs for each of the US, UAE and EU markets, and where the paperwork chain actually constrains a lot.',
    summaryAr:
      'ما الذي تحتاجه شحنة عود من ملحق سايتس الثاني في كل من أسواق الولايات المتحدة والإمارات والاتحاد الأوروبي، وأين تسلسلة الأوراق تقيد اللوط فعلا.',
    directAnswer:
      'Because all species of the agarwood-producing genera are in CITES Appendix II, a legal shipment requires an export or re-export permit from the country of export, and the importing market\'s controls are layered on top. The US requires the permit plus the import documentation and the enforcement posture of the listing. The UAE requires a CITES export permit before import and a UAE import permit, with a customs treatment that applies duty where the officer detects the material. The EU layers its own import regime on the permit. The constraint is the paperwork chain, not the material itself, and a missing or generic permit is the signal that a lot does not clear.',
    directAnswerAr:
      'بما أن كل أنواع جنسي إنتاج العود مدرجة في ملحق سايتس الثاني، فإن الشحنة المشروعة تحتاج تصريح تصدير أو إعادة تصدير من بلد التصدير، وتتراكب ضوابط السوق المستورِد فوقها. وتحتاج الولايات المتحدة التصريح ووثائق الاستيراد وضبط الإدراج. وتحتاج الإمارات تصريح تصدير سايتس قبل الاستيراد وتصريح استيراد من الإمارات، مع معاملة جمركية تطبق الرضية عندما يكتشف الضابط المادة. ويُضفي الاتحاد الأوروبي نظام استيراد خاصاً عليه. والقيد هو سلسلة الأوراق لا المادة نفسها، وتصريح ناقص أو عام إشارة إلى أن اللوط لا يمر.',
    sections: [
      {
        heading: 'The permit that every market builds on',
        headingAr: 'التصريح الذي يبني عليه كل سوق',
        body: [
          'The Appendix II requirement is the floor every market stands on: an export permit or re-export certificate from the country of export, with no import permit required by CITES itself unless a country\'s own law requires one. That floor is why a permit chain is the first thing a buyer in any of the three markets asks for, and why a missing or generic PDF is the first signal of a lot that will not clear.',
          'The floor is not the ceiling: each market adds its own import regime on top of the permit, and the TRAFFIC review of the 2000 import controls records that the consuming markets each had their own position, and the position has moved since. A permit that cleared in 2000 is not a permit that clears today, which is why the paper trail is checked against the current market, not against the document\'s date.'
        ],
        bodyAr: [
          'متطلب الملحق الثاني هو الأرضية التي يقف عليها كل سوق: تصريح تصدير أو شهادة إعادة تصدير من بلد التصدير، ولا يلزم تصريح استيراد من سايتس ذاتها ما لم تشترطه قوانين الدولة. ولهذا الأرضية يسأل المشتري في أي من الأسواق الثلاثة عن سلسلة التصريح أولاً، ولهذا تصريح ناقص أو مستند عام هو أول إشارة إلى لوط لن يمر.',
          'والأرضية ليست السقف: فكل سوق يضيف نظام استيراد فوق التصريح، وتسجيل مراجعة ترافيك لضوابط الاستيراد عام 2000 أن كل سوق مستهلك كان له موقفه، وقد تحرّك الموقف منذها. فتصريح مرّ عام 2000 ليس تصريحاً يمر اليوم، ولهذا تُفحص سلسلة الأوراق على السوق الحالي لا على تاريخ المستند.',
        ],
      },
      {
        heading: 'The three markets, each on top of the floor',
        headingAr: 'الأسواق الثلاثة، كلٌّ فوق الأرضية',
        body: [
          'The US position is the enforcement posture of the listing plus the import permit and documentation, and the control is carried by the US CITES authority. The UAE position, recorded in the 2010 study of its trade, requires a CITES export permit before a listed product such as agarwood may be imported and a UAE import permit as well, with a customs treatment that applies a 5% duty on the value of agarwood imports where a customs officer detects them. The EU position layers its own import regime on the permit, and the record here is the permit plus the EU documentation.',
          'The practical difference between the three is not the permit — it is the same Appendix II floor — but what is checked on top of it and by whom. The buyer\'s documentation check is always the same chain, and the market is the layer that tells you which authority\'s current rules apply to it.'
        ],
        bodyAr: [
          'موقف الولايات المتحدة وضبط الإدراج مضافاً إلى تصريح استيراد ووثائق، والحمل في سلطة سايتس الأمريكية. وموقف الإمارات، المسجل في دراسة تجاريتها عام 2010، يستلزم تصريح تصدير سايتس قبل أن يُستورد منتج مدرج كالعود وتصريح استيراد من الإمارات، مع معاملة جمركية تطبق رضية 5% على قيمة واردات العود عندما يكتشفها الضابط الجمركي. وموقف الاتحاد الأوروبي يضيف نظام استيراد خاصاً على التصريح، والسجل هنا هو التصريح ووثائق الاتحاد الأوروبي.',
          'والفرق العملي بين الثلاثة ليس التصريح — فهو نفس أرضية الملحق الثاني — بل ما يُفحص فوقه ومن يفحصه. وفحص المستند عند المشتري هو سلسلة واحدة دائماً، والسوق هو الطبقة التي تخبرك قواعد أي سلطة حالية تنطبق عليه.',
        ],
      },
    
      {
        heading: 'The sequence a buyer follows before shipping',
        headingAr: 'تسلسل يتبعه المشتري قبل الشحن',
        body: [
          'The sequence is: confirm the species on the paperwork, confirm the export or re-export permit is issued by the country of export, confirm the importing market\'s own permit or import regime applies, and only then move the material. Each step answers a different question, and skipping one does not make the others stronger. The permit is the common thread; the market regime is the layer that says who may lawfully take the next step.',
          'The reason the sequence matters is that a buyer who moves the material first and chases the paperwork after is the buyer who ends up holding a lot they cannot clear. The paperwork and the movement have to be ordered, and the order is set by the market\'s authority, not by the seller\'s schedule.'
        ],
        bodyAr: [
          'التسلسل هو: تأكيد النوع على الأوراق، وتأكيد أن تصريح التصدير أو إعادة التصدير صادر من بلد التصدير، وتأكيد أن نظام استيراد السوق نفسه ينطبق، وبعدها فقط تنقل المادة. وكل خطوة تجيب عن سؤال مختلف، وتخطو خطوة لا تجعل البقي أقوى. فال تصريح هو الخيط المشترك، ونظام السوق هو الطبقة التي تقول من يستطيع قانونا إنجاز الخطوة التالية.',
          'والسبب في أهمية التسلسل أن المشتري الذي ينقل المادة أولًا ويلاحق الأوراق بعد هو من ينتهي به الأمر حاملا لوطا لا يستطيع تمريره. فالأوراق والحركة يجب ترتيبهما، والترتيب يحدده سلطة السوق لا جدول البائع.',
        ],
      },],
    sourceIds: ['CITES_APPENDICES', 'TRAFFIC_UAE_AGARWOOD_TRADE', 'TRAFFIC_AGARWOOD_TRADE_2000'],
    limitations:
      'This page states the permit floor and the recorded position of each market. It does not establish that any specific shipment complies, and it does not state who may legally ship into any market today. The TRAFFIC records are dated (2000 and 2010) and predate the current position; the Appendix II requirement is current, but the market layer must be checked against the current rules of the authority, not against these sources.',
    limitationsAr:
      'تبیّن هذه الصفحة أرضية التصريح والموقف المسجل لكل سوق. ولا تثبت أن شحنة بعينا متوافقة، ولا تبیّن من يحق له الشحن قانوناً إلى سوق اليوم. فمسجلات ترافيك موقوتة (2000 و2010) وتسبق الموقف الحالي؛ ومتطلب الملحق الثاني حالي، لكن الطبقة السوقية يجب فحصها على القواعد الحالية للسلطة لا على هذه المصادر.',
    nextSteps: [
      'Read what a CITES shipment must carry',
      'Learn the limit of document review',
      'Check how shipping changes by product form',
    ],
    nextStepsAr: [
      'اقرأ ما يجب أن تحمله شحنة سايتس',
      'افهم حد مراجعة المستندات',
      'تحقق كيف يختلف الشحن حسب شكل المنتج',
    ],
    related: [
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'trade/document-review-limits', label: 'The limit of what a document shows' },
      { slug: 'trade/shipping-wood-oil-perfume', label: 'Shipping by product form' },
    ],
  }),

  simpleGuide({
    slug: 'quality/reading-an-oud-lab-report',
    parent: 'quality',
    title: 'How to read an oud lab or GC-MS report',
    titleAr: 'كيف تقرأ تقرير مختبر أو فحص كروماتوغرافي للعود',
    summary:
      'What a GC-MS or lab report on oud actually measures, how to read it against the seller\'s claim, and why a clean report does not authenticate the lot.',
    summaryAr:
      'ما الذي يقيسه تقرير الفحص الكروماتوغرافي أو المختبري للعود فعلا، وكيف تقرأه على ادعاء البائع، ولماذا لا يوثّق تقرير نظيف اللوط.',
    directAnswer:
      'A GC-MS or lab report on oud is a profile of what is in the material, not a certificate of what the material is or where it came from. A clean profile tells you the chemistry is consistent with a resinous heartwood; it does not tell you the species, the origin, the age, whether the material was wild or plantation, or whether the seller\'s other claims are true. The report\'s value is that it anchors the seller\'s claims to a measured profile, and its limit is that it cannot anchor a claim about something it did not measure.',
    directAnswerAr:
      'تقرير الفحص الكروماتوغرافي أو المختبري على العود هو رسم لما في المادة، لا شهادة لما تكون عليه المادة أو من أين جاءت. فالرسم النظيف يخبرك أن الكيمياء متماسكة مع قلب راتنجي؛ ولا يخبرك بالنوع ولا المنشأ ولا العمر، ولا إن كانت المادة برية أو مزروعة، ولا إن كانت ادعاءات البائع الأخرى صحيحة. وقدرة التقرير أنه يرسم ادعاءات البائع على رسم مُقاس، وحدّه أنه لا يرسم ادعاءً عن شيء لم يقيسه.',
    sections: [
      {
        heading: 'What the report does and does not measure',
        headingAr: 'ما يقيسه التقرير وما لا يقيسه',
        body: [
          'A GC-MS report measures the chemical profile: the compounds present and in what relative amounts. The review of the agarwood literature records that agarwood carries a large set of identified compounds, and a report that names them is giving you a profile, not an identity. The report does not measure species, because the profile overlaps across species and across the two genera. It does not measure origin, because resin content and compound mix move with conditions. It does not measure age or whether the material is wild or plantation.',
          'The report does measure whether the material is resinous, whether it is consistent with agarwood chemistry, and whether a seller\'s "pure oud" claim is consistent with what is actually in the bottle. That last one is the report\'s real value: it anchors the chemistry claim. Everything about origin, species, age and method is outside the report\'s scope.'
        ],
        bodyAr: [
          'يقاس في التقرير الكروماتوغرافي الرسم الكيميائي: المركبات الحاضرة وبأي كميات نسبية. وتسجيل مراجعة أدبيات العود أن العود يحمل مجموعة كبيرة من المركبات المحددة، وتقرير يسميها يعطيك رسماً لا هوية. والتقرير لا يقيس النوع لأن الرسم يتراكب عبر الأنواع وعبري الجنسين. ولا يقيس المنشأ لأن محتوى الراتنج وخلط المركبات يتحركان مع الظروف. ولا يقيس العمر ولا إن كانت المادة برية أم مزروعة.',
          'يقيس التقرير إن كانت المادة راتنجية، وإن كانت متماسكة مع كيمياء العود، وإن كان ادعاء «عود نقي» من البائع متماسكاً مع ما في القارورة فعلاً. وهذا الأخير هو القيمة الحقيقية للتقرير: يرسم ادعاء الكيمياء. وكل ما عن المنشأ والنوع والعمر والطريقة خارج نطاق التقرير.',
        ],
      },
      {
        heading: 'Reading the report against the claim',
        headingAr: 'قراءة التقرير على الادعاء',
        body: [
          'The way to use the report is to hold each of the seller\'s claims up against what the report actually measured. A "pure oud oil" claim is checked against the profile: does the profile read as a resinous heartwood, and is there evidence of a carrier or adulterant? A grade or origin claim is not answered by the report, because the report did not measure grade or origin; it is answered by the permit chain and the handling record.',
          'The discipline is that a report only narrows the field in the direction it measured. A clean chemistry profile does not certify the origin claim, and an origin document does not certify the chemistry claim. A lot that is being sold on both claims needs both checks, and a seller who offers only one is hiding the other.',
        ],
        bodyAr: [
          'طريقة استعمال التقرير أن ترفع كل ادعاء البائع بما قاسه التقرير فعلاً. فيُفحص ادعاء «زيت عود نقي» على الرسم: هل يقرأ الرسم كقلب راتنجي، وهل يوجد دليل على حامل أو خليط؟ ولا يجيب التقرير عن ادعاء درجة أو منشأ، لأنه لم يقيس الدرجة ولا المنشأ؛ يجيب عليه تصريح سلسل والسجل.',
          'والأدب أن التقرير يحصر المجال في اتجاه ما قاسه فقط. فالرسم الكيميائي النظيف لا يوثّق ادعاء المنشأ، والمستند المنشئي لا يوثّق ادعاء الكيمياء. واللوط الذي يُباع بالادعاءين يحتاج فحصين، وبائع يقدم واحدًا يستر الآخر.',
        ],
      },
    
      {
        heading: 'Where the report fits in the full check',
        headingAr: 'أين يقع التقرير في الفحص الكامل',
        body: [
          'The lab report is one channel in a three-channel check: the chemistry channel is the report, the provenance channel is the permit and handling record, and the commercial channel is the grade and price pressed against the documented range. A buyer who runs only one channel is running a check that the other two can defeat, and the report\'s honesty is that it admits it is only one of the three.',
          'The value of the report is therefore not that it settles the lot, but that it settles the chemistry claim and leaves the other two claims to their own channels. A buyer who knows the report\'s lane is a buyer who does not let a clean chemistry reading stand in for a provenance they never checked.'
        ],
        bodyAr: [
          'تقرير المختبر قناة واحدة في فحص من ثلاث قنوات: قناة الكيمياء هي التقرير، وقناة المنشأ هي التصريح وسجل التعامل، وقناة التجارة هي الدرجة والسعر المعروض على النطاق الموثق. فالمشتري الذي يجرى قناة واحدة يجرى فحصا يستطيع الخريط أن ينكسرا، وأمانة التقرير أنه يعترف أنه واحد فقط من الثلاث.',
          'فقدرة التقرير إذن ليست في أنه يحسم اللوط، بل في أنه يحسم ادعاء الكيمياء ويبقي الخريط ادعاءين لقناتهما الخاصتيم. فالشاهد الذي يعرف ممر التقرير لا يسمح لقراءة كيمياء نظيفة أن تنوب عن منشأ لم يفحصه قط.',
        ],
      },],
    sourceIds: ['AGARWOOD_CITES_2022', 'TRAFFIC_UAE_AGARWOOD_TRADE'],
    workedExample: {
      situation:
        'A seller offers a GC-MS report for a lot they describe as pure oud oil, super grade, from a named region, and the buyer wants to know what the report actually supports.',
      situationAr:
        'يعرض بائع تقرير فحص كروماتوغرافي على لوط يصفه بزيت عود نقي، درجة فائقة، من منطقة مسماة، ويريد المشتري أن يعرف ما يدعمه التقرير فعلا.',
      steps: [
        'Hold the chemistry claim to the profile: does it read as a resinous heartwood, and is there a carrier or adulterant in the mix?',
        'Notice the grade claim is outside the report: the profile does not measure grade, so the grade is still a seller claim to press separately.',
        'Notice the origin claim is outside the report: origin is checked against the permit chain and the handling record, not the profile.',
        'Conclude which claims the report supports and which it leaves open, and ask for the checks the report does not provide.',
      ],
      stepsAr: [
        'ارسم ادعاء الكيمياء على الرسم: هل يقرأ كقلب راتنجي، وهل يوجد في الخلط حامل أو خليط؟',
        'انبه أن ادعاء الدرجة خارج التقرير: الرسم لا يقيس الدرجة، فالدرجة تبقى ادعاء بائع يُضغط عليه منفصلا.',
        'انبه أن ادعاء المنشأ خارج التقرير: يُفحص المنشأ على تصريح سلسل والسجل لا على الرسم.',
        'استنتج أي ادعاءات يدعمها التقرير وأيها يبقى مفتوحا، واطلب فحوص ما لا يوفره التقرير.',
      ],
      takeaway:
        'The example shows the method of reading a report as a claim anchor: it supports the chemistry claim and leaves the grade and origin open. It does not show what the material is worth, and it does not authenticate the lot.',
      takeawayAr:
        'يبيّن المثال منهج قراءة التقرير كمرساة ادعاء: يدعم ادعاء الكيمياء ويبقي الدرجة والمنشأ مفتوحين. ولا يبيّن المثال قيمة المادة، ولا يوثّق اللوط.',
    },
    limitations:
      'This page explains how to read a lab or GC-MS report against a seller\'s claims. It does not interpret a specific report, and it does not establish the species, origin, age or authenticity of any lot. The cited sources establish the compound profile and the trade record; neither of them interprets a lab result, so no specific report reading is verified here.',
    limitationsAr:
      'تشرح هذه الصفحة كيف تُقرأ مختبر أو تقرير فحص كروماتوغرافي على ادعاءات البائع. ولا تفسر تقريرا بعينه، ولا تثبت النوع ولا المنشأ ولا العمر ولا صحة أي لوط. فمصادر التسجيل تبيّن الرسم المركّب والسجل التجاري؛ وكلاهما لا يفسر نتيجة مختبر، فلا يتحقق هنا تفسير تقرير بعينه.',
    nextSteps: [
      'Read the limit of what testing can establish',
      'Learn how to detect misrepresented oud',
      'Check how grade claims should be pressed',
    ],
    nextStepsAr: [
      'اقرأ حد ما تثبته الاختبارات',
      'افهم كشف العود الممثَّل به',
      'تحقق كيف يُضغط على ادعاءات الدرجة',
    ],
    related: [
      { slug: 'quality/lab-report-reading', label: 'Reading a lab report on oud' },
      { slug: 'quality/assessment-and-testing-limits', label: 'The limit of what testing establishes' },
      { slug: 'quality/fraud-identification', label: 'How to detect misrepresented oud' },
    ],
  }),

  simpleGuide({
    slug: 'buying/oud-oil-price-framework',
    parent: 'buying',
    title: 'A buyer\'s framework for oud oil price',
    titleAr: 'إطار المشتري لسعر زيت العود',
    summary:
      'How to build a price-per-gram framework for oud oil from documented data, and why no single price is a market truth.',
    summaryAr:
      'كيف تبني إطاراً للسعر بال غرام لزيت العود من بيانات موثقة، ولماذا لا يكون سعر واحد حقيقة سوقية.',
    directAnswer:
      'A price-per-gram framework for oud oil is built from documented observations, not from a single number. The industry value is estimated in the tens of billions of dollars, with a litre of oil in the documented range of tens of thousands of dollars, and the 2010 UAE study records the retail price range per kilogram in AED for its period. The framework is the range, the conditions that move it and the documented date of each observation, because no one number is a market truth and every figure is from a dated study that has moved since.',
    directAnswerAr:
      'يُبنى إطار السعر بال غرام لزيت العود من ملاحظات موثقة لا من رقم واحد. قيمة القطاع تُقدّر بعشرات المليارات من الدولارات، ولتر الزيت في النطاق الموثّق بعشرات آلاف الدولارات، وتسجيل دراسة الإمارات 2010 نطاق سعر التجزئة لل كيلوغرام بالدرهم لفترتها. والإطار هو النطاق والظروف التي تحرّكه وتاريخ كل ملاحظة موثق، لأن رقما واحدا ليس حقيقة سوقية وكل رقم من دراسة موقوتة تحرّكت منذها.',
    sections: [
      {
        heading: 'The documented numbers, and what each one is',
        headingAr: 'الأرقام الموثقة، وما هو كلٌّ منها',
        body: [
          'The documented numbers are not interchangeable, and the framework is built from knowing what each one is. The industry estimate of more than USD 30 billion and the litre-of-oil range of USD 40,000-50,000 are a global value estimate, not a price for any material. The 2005-2007 retail price range per kilogram in AED from the 2010 UAE study is a period-specific retail band, not a current price, and the study says so explicitly. None of them is a price for your lot; each is a range with a date and a condition that moves it.',
          'The framework is to hold a seller\'s price against the range that matches their claim — the grade, the form, the market, the year — and to notice which condition of the claim the price does not fit. A below-range price for a claimed grade is the signal that the grade or the grade\'s form is the false claim.'
        ],
        bodyAr: [
          'الأرقام الموثقة ليست قابلة للتبادل، والإطار يُبنى من معرفة ما هو كلٌّ منها. فتقدير القطاع بأكثر من 30 مليار دولار ونطاق لتر الزيت 40,000-50,000 دولار تقدير قيمة عالمية لا سعر لمادة. ونطاق سعر التجزئة لل كيلوغرام بالدرهم لعامي 2005-2007 من دراسة الإمارات 2010 نطاق تجزئة لفترتها لا سعر حالي، وتقول الدراسة ذلك صراحة. ولا شيء منها سعر لوطك؛ كلٌ منها نطاق بتاريخ وظرف يحرّكه.',
          'والإطار أن تضع سعر البائع على النطاق الذي يطابق ادعاءه، أي الدرجة والشكل والسوق والسنة، وتنبه إلى أي ظرف من ظروف الادعاء لا يلائم السعر. فالسعر أدنى من النطاق لدرجة مطلوبة إشارة إلى أن الدرجة أو شكلها هو الادعاء الكاذب.',
        ],
      },
      {
        heading: 'What moves a price, and the honesty of the figure',
        headingAr: 'ما يحرك السعر، وأمانة الرقم',
        body: [
          'Price moves with resin content, form, origin, the carrier ratio and the dated conditions of the observation, and the documented price range is a band, not a point. The honest use of a dated study is to know that the market moved since its date and that the figure is an anchor, not a current truth. A seller who quotes a single "market price" without a date, a form and a grade is not giving you a price, they are giving you a number to anchor a transaction on.',
          'The framework therefore has three parts: the documented range for the claimed conditions, the conditions the seller actually stated, and the gap between them. The gap is the transaction\'s real content, and it is where a capable supplier and a careless one are told apart.'
        ],
        bodyAr: [
          'يتحرك السعر مع محتوى الراتنج والشكل والمنشأ ونسبة الحامل والظروف الموقوتة للملاحظة، والنطاق السعري الموثق نطاق لا نقطة. والاستعمال الشريف لدراسة موقوتة أن تعرف أن السوق تحرّك منذ تاريخها وأن الرقم مرساة لا حقيقة حالية. وبائع يورد «سوقا» رقما بلا تاريخ وشكل ودرجة لا يعطيك سعرا؛ يعطيك رقما تُرسى عليه صفقة.',
          'فالإطار لاجزء: النطاق الموثق لظروف الادعاء، والظروف التي ذكرها البائع فعلا، والفجوة بينهما. والفجوة محتوى الصفقة الحقيقي، وهي حيث يُميّز المورد الكفء من المتهور.',
        ],
      },
    
      {
        heading: 'Assembling an observation, not a figure',
        headingAr: 'تركيب ملاحظة لا رقم',
        body: [
          'The observation the framework builds from has four fields: the documented price range, the conditions it came with (the form, the grade, the market, the date), the seller\'s stated conditions, and the gap between them. A single figure with no date, form or grade is not an observation, it is a claim, and the framework\'s discipline is to refuse to treat a claim as an observation.',
          'The buyer\'s job is to keep the fields separate and to read the gap, because the gap is where the transaction\'s real content lives. A seller who cannot state the conditions their figure came from is not giving a price, and the framework treats that the way it treats anything that will not anchor to a documented range: as a number that does not constrain anything.'
        ],
        bodyAr: [
          'الملاحظة التي يبني عليها الإطار لها أربعة حقول: نطاق السعر الموثق، والظروف التي جاء بها (الشكل والدرجة والسوق والتاريخ)، وظروف البائع المعلنة، والفجوة بينها. فالرقم وحده بلا تاريخ أو شكل أو درجة ليس ملاحظة، بل ادعاء، وأدب الإطار أن يرفض أن يعامل الادعاء كملاحظة.',
          'فواجب المشتري أن يبقي الحقول منفصلة وأن يقرأ الفجوة، لأن الفجوة هي حيث يعيش محتوى الصفقة الحقيقي. وبائع لا يستطيع أن يوضح الظروف التي جاء منها رقمه لا يعطي سعرا، ويتعامل الإطار مع ذلك كما يتعامل مع أي شيء لا يتأسس على نطاق موثق: كرقم لا يقيد شيئا.',
        ],
      },],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_UAE_AGARWOOD_TRADE'],
    limitations:
      'This page builds a framework from documented price data and states what each figure is. It does not state a current market price for any oud material, and it does not establish that any specific price is fair. The figures are dated (the industry estimate and the 2005-2007 UAE retail band) and have moved since; the framework is the range and its conditions, not a live price.',
    limitationsAr:
      'تبني هذه الصفحة إطارا من بيانات أسعار موثقة وتبيّن ما هو كل رقم. ولا تبيّن سوقا حاليا لأي مادة عود، ولا تثبت أن سعرا بعينه عادل. فالأرقام موقوتة (تقدير القطاع ونطاق تجزئة الإمارات 2005-2007) وقد تحرّكت منذها؛ والإطار هو النطاق وظروفه لا سعر حي.',
    nextSteps: [
      'Read how to evaluate a questionable offer',
      'Learn what a fair price question should ask',
      'Check how to compare two supplier quotes',
    ],
    nextStepsAr: [
      'اقرأ كيف تُقيّم عرضاً مشكوكاً',
      'افهم ما ينبغي أن يسأله سؤال السعر العادل',
      'تحقق كيف تقارن عرضي موردَين',
    ],
    related: [
      { slug: 'buying/evaluating-an-offer', label: 'How to evaluate a questionable offer' },
      { slug: 'buying/choosing-oud-oil', label: 'How to choose an oud oil purchase' },
      { slug: 'quality/fraud-identification', label: 'How to detect misrepresented oud' },
      { slug: 'quality/gulf-price-baseline', label: 'The OudGuide price observation baseline' },
    ],
  }),

  simpleGuide({
    slug: 'quality/attar-quality-testing',
    parent: 'quality',
    title: 'Evaluating oud-based attar',
    titleAr: 'تقييم العود المقطّر (العود)',
    summary:
      'How to evaluate the quality of an oud-based attar: the carrier, the concentration, the smell test and the document that actually anchors it.',
    summaryAr:
      'كيف تقيّم جودة عود العود: الحامل، والتركيز، وفحص الرائحة، والوثيقة التي ترسمه فعلا.',
    directAnswer:
      'The quality of an oud-based attar is a function of the carrier, the concentration, and what is actually in the oil, and the evaluation is pressing each of those with the question it cannot fake. The carrier ratio determines strength and longevity, the concentration determines whether it can even be worn, and the profile of the oil determines what it is. No attar quality test is a single number; it is the set of questions that separate a high-oud attar from a mostly-carrier one, and the document that anchors the claim is the permit and handling record, not a single assay.',
    directAnswerAr:
      'جودة عود العود وظيفية من الحامل والتركيز وما هو في الزيت فعلا، والتقييم هو الضغط على كل منها بالسؤال الذي لا يُختلق. ونسبة الحامل تحدد القوة والمدة، والتركيز يحدد إن كان يمكن اللبس أصلاً، ورسم الزيت يحدد ما يكون عليه. ولا يوجد اختبار جودة للعود رقم واحد؛ بل هي مجموعة أسئلة تفصل عوداً عالي العود عن أغلبه حامل، والوثيقة التي ترسم الادعاء هي تصريح سلسل وسجل التعامل، لا فحص وحيد.',
    sections: [
      {
        heading: 'The three things that make an attar what it is',
        headingAr: 'الأشياء الثلاثة التي تجعل العود ما يكون',
        body: [
          'Three things determine an attar, and each has its own check. The carrier: the ratio of oud oil to sandalwood base sets the strength and the longevity, and a high-carry attar will be diluted and will not reach a concentration a pure oil reaches. The concentration: it determines whether the product can be worn at all, and the IFRA Standards set the maximum concentration of fragrance material in a finished consumer product by its intended use. The profile: what is actually in the oil, whether it is a resinous heartwood chemistry or an adulterated mix.',
          'The quality of an attar is not a single grade but the set of these three, and a buyer evaluates it by pressing each with the question that class would fail to answer: the carrier question, the concentration question, and the profile question.',
        ],
        bodyAr: [
          'ثلاث أشياء تحدد عود العود، ولكل فحص خاص. فالنسبة بين زيت العود وقاعدة الصندل تحدد القوة والمدة، والعود عالي الحامل يُخفَّف ولن يبلغ تركيزا يبلغه الزيت النقي. والتركيز يحدد إن كان المنتج قابلاً لللبس أصلاً، ومعايير IFRA تحد سقف تركيز مادة العطر في منتج الاستهلاك النهائي حسب الاستخدام المقصود. والرسم هو ما هو في الزيت فعلا، وهل كيمياء قلب راتنجي أم خلط مغلوط.',
          'وجودة العود ليست درجة واحدة بل هذه الثلاثة معاً، ويقيّمها المشتري بالضغط على كل منها بالسؤال الذي تفشل تلك الفئة على إجابته: سؤال الحامل وسؤال التركيز وسؤال الرسم.',
        ],
      },
      {
        heading: 'The document that anchors the claim',
        headingAr: 'الوثيقة التي ترسم الادعاء',
        body: [
          'The attar\'s quality claim is anchored by the same paperwork that anchors a wood claim, because the attar is the wood\'s oil. A clean permit chain and a handling record establish that the material is what it is claimed to be; the concentration is a property of the attar form and is checked against the intended use, not against a seller\'s word. A buyer who wants a wearable, skin-applied attar checks the concentration against the use, and a buyer who wants a burner attar checks the strength against the form.',
          'The limit is that no single assay is a quality verdict: it is the set of checks, and the honest evaluation is the one that presses each claim with its failing question and keeps the document separate from the marketing.',
        ],
        bodyAr: [
          'ادعاء جودة العود يرسُمه نفس الأوراق التي ترسم ادعاء الخشب، لأن العود هو زيت الخشب. وتصريح سلسل نظيف وسجل تعامل يثبتان أن المادة ما تزعم أنها، والتركيز خاصية في شكل العود يُفحص على الاستخدام المقصود لا على كلام البائع. فيفحص المشتري الذي يريد عوداً قابلاً لللبس المطبق على الجلد التركيز على الاستخدام، ويفحص مشتري عود محرق القوة على الشكل.',
          'والحد أن فحصاً واحداً ليس حكماً في الجودة: بل هي مجموعة الفحوص، والتقييم الشريف هو الذي يضغظ كل ادعاء بسؤال الفشل ويبقي المستند منفصلا عن التسويق.',
        ],
      },
    
      {
        heading: 'Smell-based signals, and where they stop',
        headingAr: 'إشارات الشم، وأين تتوقف',
        body: [
          'Smell is a real channel for an attar and a limited one: a trained nose can read a difference between a high-oud attar and a mostly-carrier one, and can flag an off-note that points to an adulterant or to a turned product. But smell cannot separate the oud\'s origin, grade or the carrier\'s identity, and it cannot be a verdict on its own, because the same profile is reproducible with a carrier blend the buyer cannot see.',
          'The honest use of smell is as a signal that directs the other channels, the carrier question, the concentration question and the document, not as a substitute for them. A buyer who stops at the nose has run one channel; a buyer who uses the nose to decide which document to ask for has used it for what it actually does.',
        ],
        bodyAr: [
          'الشم قناة حقيقية للعود وقناة محدودة: فالأنف المتمرس يقرأ الفرق بين عود غني بالعود وعود أغلبه حامل، ويستطيع أن ينبه إلى نفحة خارجة تشي بمخلوط أو بمنتج اتلف. لكن الشم لا يفصل منشأ العود ولا درجته ولا هوية الحامل، ولا يمكن أن يكون حكما بذاته، لأن الرسم نفسه قابل لإعادة إنتاجه بخلط حامل لا يراه المشتري.',
          'فاستعمال الشم الشريف أن يكون إشارة توجّه القنوات الأخرى، سؤال الحامل وسؤال التركيز والمستند، لا بديلا عنها. فمن يتوقف عند الأنف يجرى قناة واحدة؛ ومن يستعمل الأنف ليقرر أي مستند يطلب يكون قد استعمله فيما يفعله فعلا.',
        ],
      },],
    sourceIds: ['IFRA_STANDARDS', 'AGARWOOD_REVIEW_2014'],
    limitations:
      'This page explains how to evaluate an oud-based attar. It does not grade a specific attar, and it does not establish the quality or authenticity of any named product. The IFRA source establishes the concentration-control regime, not the concentration in any bottle; the review establishes the botanical scope, not which attar is high-quality.',
    limitationsAr:
      'تشرح هذه الصفحة كيف يُقيّم عود العود. ولا تُدرج عوداً بعينه، ولا تثبت جودة أو صحة أي منتج مسمّى. فمصدر IFRA يحدّ نظام التحكم في التركيز لا التركيز في أي قارورة؛ والمراجعة تحدّ النطاق النباتي لا أي عود عالي الجودة.',
    nextSteps: [
      'Read how concentration labels actually work',
      'Learn what each product category is for',
      'Check the limit of what a document can establish',
    ],
    nextStepsAr: [
      'اقرأ كيف تعمل تسميات التركيز',
      'افهم ما غرض كل فئة منتج',
      'تحقق من حد ما تثبته وثيقة',
    ],
    related: [
      { slug: 'fragrance/concentration-labels', label: 'Concentration labels explained' },
      { slug: 'fragrance/oud-oil-vs-attar', label: 'Oud oil vs attar' },
      { slug: 'quality/assessment-and-testing-limits', label: 'The limit of what testing establishes' },
    ],
  }),

  simpleGuide({
    slug: 'fragrance/oud-in-the-fragrance-market',
    parent: 'fragrance',
    title: 'Oud in the fine fragrance market',
    titleAr: 'العود في سوق العطور الفاخرة',
    summary:
      'Where oud sits in the fine fragrance and perfumery market: who buys it, how it is used, and what the industry structure means for a buyer.',
    summaryAr:
      'أين يقع العود في سوق العطور الفاخرة والعطر: من يشتريه، وكيف يُستعمل، وما الذي تعنيه بنية القطاع لمشتري.',
    directAnswer:
      'Oud sits in the fine fragrance market as a high-value material that perfumers and consumers buy for its scent and its heritage, and the industry structure matters because it determines who the buyer is and what they value. The industry value is estimated in the tens of billions of dollars, and the main exporters are Indonesia, Malaysia and Thailand, with a strong Middle Eastern consumer market in the UAE and Saudi Arabia. A fine fragrance buyer is buying for scent, heritage and a documented provenance, and the document that anchors the provenance is the permit and handling record, not a certificate of origin alone.',
    directAnswerAr:
      'يقع العود في سوق العطور الفاخرة كمادة عالية القيمة يشتريها العطارون والمستهلكون لرائحتها وتراثها، وبنية القطاع مهمة لأنها تحدد من هو المشتري وماذا يقدّر. وتقدّر قيمة القطاع بعشرات المليارات من الدولارات، والمصدرون الرئيسيون إندونيسيا وماليزيا وتايلاند، وسوق استهلاك قوي في الشرق الأوسط في الإمارات والسعودية. فالمشتري في العطور الفاخرة يشتري للرائحة والتراث ومنشأ موثق، والوثيقة التي ترسم المنشأ هي تصريح سلسل وسجل التعامل، لا شهادة منشأ وحدها.',
    sections: [
      {
        heading: 'Who the fine fragrance buyer is',
        headingAr: 'من هو مشتري العطور الفاخرة',
        body: [
          'The fine fragrance buyer is buying for scent, heritage and a documented provenance, and the industry structure determines who that buyer is. The main exporters of agarwood are Indonesia, Malaysia and Thailand, and the material is a high-value component in both the traditional Middle Eastern market and the international perfumery market. A perfumer buys for the accord and the concentration behaviour; a collector buys for the heritage and the documentation; a consumer buys for the scent and the story.',
          'The structure of the market is why a "who buys it and at what value" question is answered by the industry estimate and the consumer-market record, not by a single price point. The value is a range, and the buyer is a segment, not a single person.',
        ],
        bodyAr: [
          'مشتري العطور الفاخرة يشتري للرائحة والتراث ومنشأ موثق، وبنية القطاع تحدد من هو ذلك المشتري. فالمصدرون الرئيسيون للعود إندونيسيا وماليزيا وتايلاند، والمادة مكوّن عالي القيمة في كل من سوق الشرق الأوسط التقليدي وسوق العطر الدولي. فيشتري العطار للتوليفة العطرية وسلوك التركيز، ويجمع على التراث والتوثيق، ويشتري المستهلك للرائحة والحكاية.',
          'وبنية السوق هي سبب أن سؤال «من يشتريه وبأي قيمة» يُجاب بتقدير القطاع وسجل سوق الاستهلاك لا بنقطة سعر وحيدة. فالقيمة نطاق والمشتري شريحة لا شخصاً واحداً.',
        ],
      },
      {
        heading: 'What the industry structure means for a buyer',
        headingAr: 'ما تعنيه بنية القطاع لمشتري',
        body: [
          'The industry estimate of more than USD 30 billion, with a litre of oil in the documented range of tens of thousands of dollars, sets the scale. The main exporters and the Middle Eastern consumer market set the flow, and the grading systems in use — a national grading scale, a separate Chinese guide and the seller-defined Gulf labels — set the vocabulary. A fine fragrance buyer needs to know all three, because the value, the flow and the vocabulary are the three things that make a transaction fair or not.',
          'The document that anchors a provenance claim in this market is the permit and the handling record, and the honest buyer checks the provenance against the record, not against the marketing. The structure is what you are buying into, and the document is how you know it is what it claims to be.',
        ],
        bodyAr: [
          'تقدير القطاع بأكثر من 30 مليار دولار، ولتر الزيت في النطاق الموثق بعشرات آلاف الدولارات، يحددان الحجم. والمصدرون الرئيسيون وسوق استهلاك الشرق الأوسط يحددان التدفق، وأنظمة التقييم المعمول بها، أي مقياس تقييم وطني ودليل صيني مستقل وتسميات الخليج التي يعرفها البائع، تحدد القاموس. ومشتري العطور الفاخرة يحتاج أن يعرف الثلاثة، لأن القيمة والتدفق والقاموس هي الأشياء الثلاثة التي تجعل صفقة عادلة أو لا.',
          'والوثيقة التي ترسم ادعاء منشأ في هذا السوق هي تصريح سلسل وسجل التعامل، والمشتري الشريف يفحص المنشأ على السجل لا على التسويق. والبنية هي ما تدخله، والمستند هو كيف تعرف أنه ما يزعم أنه.',
        ],
      },
    
      {
        heading: 'The value chain from wood to finished perfume',
        headingAr: 'سلسلة القيمة من الخشب إلى العطر المنتهي',
        body: [
          'The chain runs from the producing country, through the export permit, through the consuming market\'s import regime, into a distiller, and out as a finished perfume or attar, and each hand adds a claim and a document. A fine-fragrance buyer who buys at the finished-product end is buying into the whole chain\'s claims, and the document that anchors the chain is the permit and handling record, not the brand\'s marketing.',
          'The market structure is why the value question has to be answered by the industry estimate and the consumer-market record rather than by a single price: the value is carried across many hands, and each hand\'s claim is only as good as the document behind it. The honest buyer checks the chain, not the label on the final bottle.'
        ],
        bodyAr: [
          'تمتد السلسلة من بلد الإنتاج عبر تصريح التصدير، ثم نظام استيراد سوق الاستهلاك، إلى المقطّر، ثم كعطر منتهٍ أو عود، وكل يد تضيف ادعاءً ومستندًا. فالمشتري في العطور الفاخرة الذي يشتري من نهاية المنتج المنتهى يدخل في ادعاءات السلسلة كلها، والمستند الذي يرسيم السلسلة هو التصريح وسجل التعامل لا تسويق العلامة.',
          'فبنية السوق هي سبب أن سؤال القيمة يجب أن يُجاب بتقدير القطاع وسجل سوق الاستهلاك لا برقم وحيد: فالقيمة تنقل عبر أيدي كثيرة، وكل يد ادعاؤها لا أقوى من مستنده. والمشتري الشريف يفحص السلسلة لا الملصق على القارورة الأخيرة.',
        ],
      },],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_UAE_AGARWOOD_TRADE'],
    limitations:
      'This page explains where oud sits in the fine fragrance market. It does not establish that any named brand or product is authentic, and it does not state a current price for any material. The industry estimate and the market record are dated; the structure is stable, the figure is not, and no specific product\'s quality is established here.',
    limitationsAr:
      'تشرح هذه الصفحة أين يقع العود في سوق العطور الفاخرة. ولا تثبت أن أي علامة أو منتج مسمّى حقيقي، ولا تبيّن سوقا حالية لأي مادة. فتقدير القطاع وسجل السوق موقوتان؛ البنية ثابتة والرقم ليس، ولا تثبت هنا جودة منتج بعينه.',
    nextSteps: [
      'Read how oud is used in perfumery',
      'Learn what each product category is for',
      'Check the limit of what a document can establish',
    ],
    nextStepsAr: [
      'اقرأ كيف يُستعمل العود في العطر',
      'افهم ما غرض كل فئة منتج',
      'تحقق من حد ما تثبته وثيقة',
    ],
    related: [
      { slug: 'fragrance/oud-in-perfumery', label: 'Oud in perfumery' },
      { slug: 'fragrance/concentration-labels', label: 'Concentration labels explained' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
    ],
  }),

  simpleGuide({
    slug: 'oud-basics/which-species-makes-oud',
    parent: 'oud-basics',
    title: 'Which species makes oud',
    titleAr: 'أي نوع يصنع العود',
    summary:
      'The species that produce resinous agarwood, how the two genera differ, and why the species name is what a buyer needs to know first.',
    summaryAr:
      'الأنواع التي تنتج قلب راتنجي، وكيف يختلف الجنسان، ولماذا اسم النوع هو ما يحتاج المشتري أن يعرفه أولاً.',
    directAnswer:
      'Resinous oud comes from two genera, Aquilaria and Gyrinops, and the commercially important species are A. crassna in mainland Southeast Asia, A. malaccensis across the Malay archipelago, A. agallocha in the Indian subcontinent and A. sinensis in China, with Gyrinops covering New Guinea and parts of the Malay archipelago. The species name matters because every member of both genera is in CITES Appendix II, so the species decides which regulatory list a shipment falls under, and the species\'s native range is what an origin claim is checked against.',
    directAnswerAr:
      'يأتي قلب راتنجي من جنسين، Aquilaria وGyrinops، والأنواع المهمة تجاريا هي A. crassna في جنوب شرق آسيا البرية وA. malaccensis في أرخبيل الملايو وA. agallocha في شبه القارة الهندية وA. sinensis في الصين، وGyrinops يغطي غينيا الجديدة وأجزاء من أرخبيل الملايو. واسم النوع يهم لأن كل أعضاء الجنسين في ملحق سايتس الثاني، فالنوع يحدد أي قائمة تنظيمية تندرج تحتها الشحنة، والنطاق الأصلي للنوع هو ما يُفحص عليه ادعاء المنشأ.',
    sections: [
      {
        heading: 'The two genera, and the species within them',
        headingAr: 'الجنسان والأنواع فيهما',
        body: [
          'The agarwood-producing material comes from two genera of the family Thymelaeaceae, Aquilaria and Gyrinops, and the commercially important species are distributed across the genera. Within Aquilaria, A. crassna is in mainland Southeast Asia, A. malaccensis is across the Malay archipelago, A. agallocha is in the Indian subcontinent and A. sinensis is in China. Gyrinops covers New Guinea and parts of the Malay archipelago. Each species has its own native range, and that range is what an origin claim is checked against.',
          'The species name is what the buyer needs to know first, because it is the species that decides the regulatory list a shipment falls under, and it is the species that a provenance claim is anchored to. A buyer who cannot name the species cannot know what paperwork the shipment needs.',
        ],
        bodyAr: [
          'مادة إنتاج العود تأتي من جنسين في فصيلة الزهرية، Aquilaria وGyrinops، والأنواع المهمة تجاريا موزعة عبر الجنسين. فداخل Aquilaria، A. crassna في جنوب شرق آسيا البرية وA. malaccensis في أرخبيل الملايو وA. agallocha في شبه القارة الهندية وA. sinensis في الصين. أما Gyrinops فيغطي غينيا الجديدة وأجزاء من أرخبيل الملايو. ولكل نوع نطاقه الأصلي، والنطاق هو ما يُفحص عليه ادعاء المنشأ.',
          'واسم النوع هو ما يحتاج المشتري أن يعرفه أولاً، لأن النوع يحدد أي قائمة تنظيمية تندرج تحتها الشحنة، والنوع هو ما يُرسَم عليه ادعاء المنشأ. ومشتري لا يستطيع تسمية النوع لا يعرف ما أوراق الشحنة.',
        ],
      },
      {
        heading: 'Why the species decides the rules',
        headingAr: 'لماذا النوع يحدد القواعد',
        body: [
          'The reason the species is the first thing a buyer knows is that every member of both genera is in CITES Appendix II, so the listing is uniform across the species and the permit requirement is the same for all of them. The species\'s native range is what an origin claim is checked against, and the taxonomy of the two genera is not settled, which is why a species-level claim is the honest limit of an origin statement.',
          'The practical consequence is that "oud" is not a species-level category: it is the material from these genera, and the species decides the paperwork and the provenance. A buyer who knows the species can ask the right origin question and check it against the range; a buyer who does not is asking a question they cannot answer.',
        ],
        bodyAr: [
          'سبب كون النوع أول ما يعرفه المشتري أن كل أعضاء الجنسين في ملحق سايتس الثاني، فالإدراج موحّد عبر الأنواع ومتطلب التصريح واحد كلها. ونطاق النوع الأصلي هو ما يُفحص عليه ادعاء المنشأ، وتصنيف الجنسين غير مستقر، ولهذا ادعاء بمستوى النوع هو الحد الشريف لبيان المنشأ.',
          'والنتيجة العملية أن «العود» ليست فئة على مستوى النوع: بل المادة من هذين الجنسين، والنوع يحدد الأوراق والمنشأ. ومشتري يعرف النوع يستطيع أن يسأل سؤال المنشأ الصحيح ويفحصه على النطاق؛ ومشتري لا يعرفه يسأل سؤالاً لا يجيبه.',
        ],
      },
    
      {
        heading: 'Why the unsettled taxonomy matters to a buyer',
        headingAr: 'لماذا يهم التصنيف غير المستقر للمشتري',
        body: [
          'The taxonomy of the two agarwood genera is not settled, and that is not a footnote: a species-level claim can be wrong in a way the buyer cannot catch, because the names and the groupings are themselves still being reassessed. The review records the reassessment as open work, and a buyer should treat a species name on a document as the claim it is, not as a fixed fact the document settles.',
          'The practical consequence is that the species is the honest limit of a provenance statement: it tells the buyer the range an origin claim is checked against, and it tells them the claim is a species-level one. A buyer who names the species and knows the range can ask the right question; a buyer who treats the name as settled is asking a question the answer has already moved out from under.',
        ],
        bodyAr: [
          'تصنيف جنسي العود غير مستقر، وهذا ليس حاشية: فادعاء بمستوى النوع يمكن أن يكون خاطئًا بطريق لا يستطيع المشتري إمساكه، لأن الأسماء والتصنيفات ذاتها ما تزال تخضع لإعادة تقييم. وتسجل المراجعة إعادة التقييم عملا مفتوحا، وينبغي للمشتري أن يعامل اسم النوع على المستند كادعاء ما هو، لا كحقائق ثابتة يحسمها المستند.',
          'والنتيجة العملية أن النوع هو الحد الشريف لبيان المنشأ: فهو يخبر المشتري النطاق الذي يُفحص عليه ادعاء المنشأ، ويخبره أن الادعاء ادعاء بمستوى النوع. فالشاهد الذي يسمّي النوع ويعرف النطاق يستطيع أن يسأل السؤال الصحيح؛ والشاهد الذي يعامل الاسم كحقائق ثابتة يسأل سؤالا تحركت الجواب من تحته.',
        ],
      },],
    sourceIds: ['AGARWOOD_REVIEW_2014', 'ITTO_AGARWOOD_REVIEW', 'CITES_AGARWOOD_2004'],
    limitations:
      'This page identifies the species and the genera that produce oud. It does not establish that any specific specimen is a particular species, nor the species\'s commercial standing, and it does not establish the legal status of any shipment. The taxonomy of the two genera is not settled, and the review establishes the species\'s range, not that material was harvested from it.',
      limitationsAr:
      'تحدد هذه الصفحة الأنواع والجنسين الذين ينتجان العود. ولا تثبت أن عينة بعينها نوع معين، ولا قيمة النوع التجارية، ولا تثبت الوضع القانوني لأي شحنة. وتصنيف الجنسين غير مستقر، والمراجعة تثبت نطاق النوع لا أن المادة جُمعت منه.',
    nextSteps: [
      'Read how the genera differ and why it matters',
      'Check what a CITES shipment must carry',
      'Learn how to compare two origin claims',
    ],
    nextStepsAr: [
      'اقرأ كيف تختلف الأجناس ولماذا يهم',
      'تحقق مما يجب أن تحمله شحنة سايتس',
      'افهم كيف تقارن ادعاءي منشأ',
    ],
    related: [
      { slug: 'oud-basics/agarwood-botanical-identity', label: 'Botanical identity and genus comparison' },
      { slug: 'oud-basics/what-is-agarwood', label: 'Agarwood: names, material and uses' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
    ],
  }),

  simpleGuide({
    slug: 'quality/grade-label-dataset',
    parent: 'quality',
    title: 'The OudGuide grade-label dataset',
    titleAr: 'مُجموع دليل العود لتسميات الدرجات',
    summary:
      'A dated, documented catalogue of the grade labels actually in commercial use in the Gulf, collected by OudGuide from two live retail catalogues — and what it does and does not establish.',
    summaryAr:
      'كتالوج موقوت موثّق من تسميات الدرجات المستعملة تجاريا فعلا في الخليج، جمعه دليل العود من كتالوجين تجاريين حيّين — وما يثبته وما لا يثبته.',
    directAnswer:
      'This is OudGuide\'s own documented record, not a quality measurement: a dated catalogue of the grade labels actually in commercial use in the Gulf, compiled on 21 October 2026 from two live retail catalogues, recording each label\'s spelling, its position in the market and the fact that no published threshold, price or yield sits behind any of them. It exists so that a buyer can see which label they are being sold and understand that a label is a claim, not a fact. The original data here is the collection itself: OudGuide documented which labels a named retailer actually puts in front of a customer, on a date, in two catalogues. What the record does is document usage; what it does not do is measure the material, and it is not presented as a quality standard, a price or a yield.',
    directAnswerAr:
      'هذا سجلّ دليل العود الخاص، لا قياس جودة: كتالوج موقوت من تسميات الدرجات المستعملة تجاريا في الخليج، أُرشد في 21 أكتوبر 2026 من كتالوجين تجاريين حيّين، ويسجّل اسم كل تسمية وموقعها في السوق وأن لا عتبة ولا سعرا ولا مردودا منشورين خلف أيٍّ منها. وهو موجود ليُبيّن المشتري أي تسمية تُباع له وأن التسمية ادعاء لا حقيقة. والبيانات الأصلية هنا هي الجمع ذاته: وثّق دليل العود أي تسميات يضع تاجر مسمّى فعلا أمام الزبون، وفي تاريخ، وفي كتالوجين. وما يفعله السجل هو توثيق الاستعمال؛ وما لا يفعله هو قياس المادة، ولا يُقدَّم معيارا جودة ولا سعرا ولا مردودا.',
    sections: [
      {
        heading: 'What the dataset records',
        headingAr: 'ما يسجله المُجموع',
        body: [
          'The dataset is a catalogue of commercial usage, and its content is the usage. It records the grade labels that appear as published product categories in two live retail catalogues, each with its spelling as it is printed and its position where the catalogue gives one. The labels it records are the ordered ladder of VIP, VVIP, the Super series including Double Super and Triple Super, along with Khaas, Khasal Khaas, Seufi and Seyufi. They are carried in the catalogues as categories, and that is a fact about the market, not about any standard.',
          'The record is dated and scoped: it was compiled on 21 October 2026 from two named catalogues, and it records, label by label, that none of them has a published definition, threshold or standard behind it. The catalogue says what the labels are called and where they sit; it does not say what a label asserts in a way that could be checked, because there is no published figure to check against.',
        ],
        bodyAr: [
          'المُجموع كتالوج استعمال تجاري، ومحتواه هو الاستعمال. يسجّل تسميات الدرجات التي تظهر كفئات منتجات منشورة في كتالوجين تجاريين حيّين، كلٌّ باسمه كما هو مطبوع وموقعه حيث يبيّنه الكتالوج. والتسميات التي يسجلها هي السلسلة المرتبة «في آي بي» و«في في آي بي» و«سوبر» و«دبل سوبر» و«تريبل سوبر» ثم «خاس» و«خسَل خاس» و«سوفي» و«سيوفي». وهي محمولة في الكتالوجين كفئات، وهذا واقعة عن السوق لا عن أي معيار.',
          'والسجل موقوت محصر النطاق: رُشد في 21 أكتوبر 2026 من كتالوجين مسمّين، ويسجّل تسمية تسمية أن لا خلف أيٍّ منها تعريفا منشورا ولا عتبة ولا معيارا. فيقول الكتالوج ما تسمياتها وأين تقبع؛ ولا يقول ما تقرّره تسمية على نحو قابل للفحص، لأنه لا رقم منشور يُطابق عليه.',
        ],
        callout: {
          title: 'What makes this OudGuide\'s own data',
          titleAr: 'ما يجعل هذا بيانات دليل العود الخاصة',
          body:
            'The collection is the original contribution: OudGuide documented which labels a named retailer actually puts in front of a customer, on a date, in two catalogues, and recorded that none carries a published threshold. That is a record of usage. It is not a measurement of quality, a price or a yield, and it is not presented as one. A labelled dataset that pretended to establish grade would be the defect this catalogue exists to avoid.',
          bodyAr:
            'الجمع هو المساهمة الأصلية: وثّق دليل العود أي تسميات يضع تاجر مسمّى فعلا أمام الزبون، وفي تاريخ، وفي كتالوجين، وسجّل أن لا شيء فيها يحمل عتبة منشورة. ذلك سجلّ استعمال. وليس قياس جودة ولا سعرا ولا مردودا، ولا يُقدَّم كذلك. فمجموع بيانات مسمّى يتظاهر بإثبات الدرجة هو العيب الذي يوجد هذا الكتالوج لتجنّبه.',
        },
      },
      {
        heading: 'How to use it, and what it does not show',
        headingAr: 'كيف تستخدمه، وما لا يبيّنه',
        body: [
          'The dataset is used the way a vocabulary is used: to see which label a seller is offering, and to know that the label is a scale, not a fact. A buyer who sees «سوبر» on a lot now knows the label is in active commercial use, knows its position as the catalogue records it, and knows that two lots bearing the same label from different sellers need not be comparable, because no threshold joins them.',
          'The limit of the record is its own content: it shows usage across two catalogues on a date, not a global standard and not the quality of any lot. The industry\'s own review records that there is no global grading standard built on quantifiable indicators, and this catalogue is consistent with that: it documents the vocabulary, and it does not invent a scale behind it.'
        ],
        bodyAr: [
          'يُستعمل المُجموع كما تُستعمل المفردات: لرؤية أي تسمية يعرضها البائع، ولإدراك أن التسمية مقياس لا حقيقة. فالشاهد الذي يرى «سوبر» على لوط يعرف الآن أن التسمية في استعمال تجاري حيّ، ويعرف موقعها كما يسجلها الكتالوج، ويعرف أن لوطين يحملان التسمية نفسها عند بائعين مختلفين لا يلزم أن يكونا قابلين للمقارنة، لأنه لا عتبة تجمعهما.',
          'والحد هو محتوى السجل نفسه: يبيّن الاستعمال عبر كتالوجين في تاريخ، لا معيارا عالميا ولا جودة أي لوط. فتسجيل مراجعة القطاع ذاتها أنه لا معيار تقييم عالمي قائم على مؤشرات قابلة للقياس، وهذا الكتالوج متماسك معها: يوثّق المفردات ولا يخترع مقياسا خلفها.',
        ],
      },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'CITES_AGARWOOD_2004'],
    limitations:
      'This is OudGuide\'s own dated record of grade-label usage in two named retail catalogues, and it is not a quality measurement. It does not establish the quality, grade, price, yield or authenticity of any lot, and it does not attach a threshold or a standard to a label, because none is published. It records commercial usage across two catalogues on 21 October 2026, not a global grading system.',
    limitationsAr:
      'هذا سجلّ دليل العود الموقوت لاستعمال تسميات الدرجات في كتالوجين تجاريين مسمّين، وليس قياس جودة. ولا يثبت جودة أي لوط ولا درجته ولا سعره ولا مردوده ولا صحة، ولا يربط عتبة ولا معيارا بتسمية، لأنه لا شيء منشور بذلك. فهو يسجّل الاستعمال التجاري عبر كتالوجين في 21 أكتوبر 2026، لا نظام تقييم عالميا.',
    nextSteps: [
      'Read the full vocabulary and its ordered ladder',
      'Learn how grade claims should be pressed',
      'Check how to detect misrepresented oud',
    ],
    nextStepsAr: [
      'اقرأ المفردات كاملة وسلمها المرتّب',
      'افهم كيف يضغط على ادعاءات الدرجة',
      'تحقق كيف يكتشف العود الممثّل به',
    ],
    related: [
      { slug: 'quality/gulf-market-grade-labels', label: 'Gulf-market oud grading vocabulary' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
      { slug: 'quality/fraud-identification', label: 'How to detect misrepresented oud' },
      { slug: 'quality/gulf-price-baseline', label: 'The OudGuide price observation baseline' },
    ],
  }),
];
