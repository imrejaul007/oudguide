import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

/**
 * Editorial guides: the quality block.
 *
 * Quality pages are where misdescription lives, so each one states what
 * a claim does and does not establish. The record the register carries —
 * the market study, the compound record, the CITES listing — is a record
 * of the material and the market, not a grading standard, and every page
 * keeps that boundary visible.
 */

export const editorialGuideQuality: Article[] = [
  /* ---------------------------------------------------------------
     quality/oud-misdescription-warning-signs
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'quality/oud-misdescription-warning-signs',
    parent: 'quality',
    title: 'Oud misdescription warning signs',
    titleAr: 'علامات التحذير من الوصف الخاطئ للعود',
    summary:
      'The warning signs that an oud offer is being misdescribed: the forms that get mixed up, the grade labels that carry no published standard, and the claims that only a seller would make.',
    summaryAr:
      'علامات أن عرض العود الوارد موصوف وصفاً خاطئاً: الأشكال التي تختلط، ووسم الدرجات الذي لا قياسية منشورة له، والادعاءات التي لا يصدر إلا من بائع.',
    directAnswer:
      'A misdescription is not a fake, it is a claim that does not fit the material, and the warning signs are the places where the two come apart. The first sign is a form mismatch: the offer describes wood, oil or a finished fragrance and prices or promises one as if it were another. The second sign is a grade label that carries no published standard, so the label is a relative claim, not a fact the buyer can verify. The third sign is a claim about resin, age or sinking that no source in the register would back: the material record establishes the chemistry of the resin, not the content in any lot, and the listing record places the genera under regulation, not under a grade scale. A buyer who names the form, presses the label against the lot, and treats the resin and age claims as seller statements is comparing the offer to what is documented rather than to what is said.',
    directAnswerAr:
      'الوصف الخاطئ ليس غشاً، بل ادعاء لا يلائم المادة، وعلامات التحذير هي المواضع التي تنفصل فيها المسألتان. والعلامة الأولى خلط في الشكل: العرض يصف خشبا أو زيتا أو عطرًا منتهيا ثم يسعر أحدها أو يعده كآخر. والعلامة الثانية وسم درجة بلا قياسية منشورة، فالمسمى ادعاء نسبي وليس حقيقة يتحقق منها المشتري. والعلامة الثالثة ادعاء عن الراتنج أو العمر أو الغرق لا مصدر في السجل يدعمه: فسجل المادة يثبت كيمياء الراتنج لا محتواه في أي لوط، وسجل التسمية يضع الأجناس تحت الضبط لا تحت مقياس درجات. والمشتري الذي يسمي الشكل، ويمحص المسمى ضدا على اللوط، ويعامل ادعاءات الراتنج والعمر عبارات بائع، هو يقارن العرض بما هو موثق لا بما قيل.',
    sections: [
      {
        heading: 'The forms that get mixed up',
        headingAr: 'الأشكال التي تختلط',
        body: [
          'The first and most common misdescription is a form mismatch. Resinous wood, chips, the distilled oil, a traditional formulation and a finished fragrance are five different products, and the recorded market carries all of them. An offer that describes wood and prices it against oil, or that describes a finished fragrance and promises the substance of the oil, is mismatching the form, and the recorded market study describes a market where these forms sit side by side with their own recorded prices, which is why the mismatch is a working misdescription rather than a mistake of memory. The buyer’s first move is to name the form the offer is actually describing, because a figure stated for one form is not a figure for any other.',
        ],
        bodyAr: [
          'أول الخلط وأكثره شيوعاً هو تعثر الشكل. فالخشب الراتنجي والرقائق والزيت المقطر والصياغة التقليدية والعطر المنتهى خمسة منتجات مختلفة، والسوق المسجل يحويها جميعاً. وعرض يصف خشبا ثم يسعره قياساً إلى الزيت، أو يصف عطرًا منتهياً ثم يعد بمادة الزيت، عرض يعثر الشكلين، ودراسة السوق المسجلة تصف سوقا تجلس فيها هذه الأشكال جنبا إلى جنب بأسعار مسجلة خاصة بها، ولهذا كان التعثر وصفا عمليا لا زلة ذاكرة. وأول عمل للمشتري أن يسمي الشكل الذي يصفه العرض فعلاً، لأن رقما قيل عن شكل واحد ليس رقما عن أي شكل آخر.',
        ],
      },
      {
        heading: 'Labels that carry no standard',
        headingAr: 'وسوم بلا قياسية',
        body: [
          'The second sign is a grade label. The grade names that move through the market are set by the trade, not by a published standard, and the recorded grading vocabulary is a relative set: the same name can carry different meaning from one market to another, and the CITES record that places the genera under regulation does not define a grading vocabulary at all. So a label on an offer is a claim to press against the lot, not a fact to accept. The buyer does not ask “is this grade real”, the buyer asks “what does this label mean in this market, and what would I see if I checked it”, and the related pages on seller-defined grades and on the market’s own vocabulary carry the recorded answer.',
        ],
        bodyAr: [
          'والعلامة الثانية وسم الدرجة. فالمسميات التي تسري في السوق تضعها التجارة لا قياسية منشورة، والمفردات المسجلة للتصنيفات مجموعة نسبية: المسمى نفسه يمكن أن يحمل معنى مختلفا من سوق إلى أخرى، وسجل التسمية الذي يضع الأجناس تحت الضبط لا يعرف مفردات تصنيف على الإطلاق. إذن وسم على عرض هو ادعاء يمحص ضده اللوط، ليس حقيقة يقبلها. فالمشتري لا يسأل “هل هذه الدرجة حقيقية”، بل يسأل “ماذا يعني هذا المسمى في هذا السوق، وماذا أرى إن فحصته”، وصفحات الدرجات التي يضعها البائعون ومفردات السوق نفسها تحمل الجواب الموثق.',
        ],
      },
      {
        heading: 'Claims only a seller would make',
        headingAr: 'ادعاءات لا يصدر إلا من بائع',
        body: [
          'The third sign is the claim that moves past the record into the seller’s lane. A resin-content claim, an age claim, a sinking claim, a “pure natural” claim without a statement of what it is: each of these is a statement the register does not carry. The compound record establishes that the resin carries a recorded set of compounds, which is a chemistry statement about the material in general, not a measurement of any lot. The review that the record rests on reports the association of fungal genera with formation, which is a literature statement, not a certificate. So when an offer leans on resin, age or sinking to move the price, the warning sign is that the lean is on a claim, not on a recorded fact, and the buyer’s move is to treat the claim as the seller’s statement and check it against the lot and the documents, which the related pages on claims and on documentation carry.',
        ],
        bodyAr: [
          'والعلامة الثالثة الادعاء الذي يترك حومة السجل إلى حومة البائع. فادعاء محتوى الراتنج، وادعاء العمر، وادعاء الغرق، وادعاء “طبيعي خالص” بلا بيان لما هو عليه: كل ذلك عبارة لا يحملها السجل. فسجل المركبات يثبت أن الراتنج يحمل مجموعة مركبات مسجلة، وهي عبارة كيميائية عن المادة عموما، ليست قياسا لوط بعينه. والمراجعة التي يقوم عليها السجل تنقل علاقة أجناس الفطريات بالتكوين، وهي عبارة أدبية لا شهادة. فإذا استند العرض إلى الراتنج أو العمر أو الغرق لتحريك السعر، فالعلامة أن الاستناد إلى ادعاء لا إلى حقيقة مسجلة، وحركة المشتري أن يعامل الادعاء عبارة بائع ويمحصه ضدا على اللوط والمستندات، وهو ما تحمله صفحات الادعاءات والتوثيق المرتبطة.',
        ],
      },
      {
        heading: 'What to check when you see one',
        headingAr: 'ماذا تفحص حين ترى واحدة',
        body: [
          'When a warning sign appears, the check is ordered. The sign names the place to look, and the check closes the gap the sign opened rather than guessing across it.',
        ],
        bodyAr: [
          'حين تظهر علامة تحذير يكون الفحص مرتّبا. فالعلامة تسمي موضع النظر، والفحص يُغلق الفجوة التي فتحته بدل التخمين عبرها.',
        ],
        list: [
          'Name the form first: wood, chips, oil, formulation or finished fragrance. A figure stated for one does not move to the others.',
          'Press the grade label against the lot: what does the name mean in this market, and what would I see if I checked?',
          'Treat resin, age and sinking claims as the seller’s statements, and check them against the lot and the documents.',
          'Ask for the records the claim needs: the permit and handling record for the material, the batch record for the product.',
        ],
        listAr: [
          'سمِّ الشكل أول: خشبا، رقائق، زيتا، صياغة، أو عطرًا منتهيا. فرقم قيل عن واحد لا ينتقل إلى الباقين.',
          'امحص وسم الدرجة ضدا على اللوط: ماذا يعني الاسم في هذا السوق، وماذا أرى إن فحصته؟',
          'عامل ادعاءات الراتنج والعمر والغرَق عبارات البائع، وامحصها ضدا على اللوط والمستندات.',
          'اطلب السجل الذي يحتاجه الادعاء: تصريح التعامل مع المادة، وسجل الدفعات للمنتج.',
        ],
      },
    ],
    sourceIds: ['TRAFFIC_UAE_AGARWOOD_TRADE', 'AGARWOOD_CITES_2022'],
    workedExample: {
      situation:
        'A hypothetical buyer is offered “super-king resinous wood” with a sinking claim and a price set against distilled oil; the signs are visible before any payment.',
      situationAr:
        'قُدم إلى مشتري افتراضي عرض “خشب راتنجي ملكي فائق” بادعاء غرق وسعر مبني على الزيت المقطر؛ والعلامات ظاهرة قبل أي دفع.',
      steps: [
        'Check the form: the offer describes wood, and a price stated against oil is a form mismatch, so the price line is not a wood line.',
        'Check the label: “super” and “king” are seller-defined names, no published standard carries them, so the names are claims to press, not facts to accept.',
        'Check the sinking claim: the claim says nothing the register carries, so it is the seller’s statement, not a recorded fact.',
        'Report: three signs in one offer, and each check names what the offer needs to close the gap.',
      ],
      stepsAr: [
        'افحص الشكل: العرض يصف خشبا وسعره مبني على الزيت، وهذا تعثر في الشكل، فخط السعر ليس خط الخشب.',
        'وافحص المسمى: “فائق” و“ملكي” اسمان يضعهما البائع ولا تحمله قياسية منشورة، فهما ادعاءان يمحصان لا حقائق تقبل.',
        'وافحص ادعاء الغرق: الادعاء لا يقول ما يحمله السجل، فهو عبارة البائع لا حقيقة مسجلة.',
        'وقيل: ثلاث علامات في عرض واحد، وكل فحص يسمي ما يحتاجه العرض لجسر الفجوة.',
      ],
      takeaway:
        'The example shows the signs in order: form, label, claim. Each sign is checked against the record, and each check says what the offer must show to close the gap it opened. That order is the whole method: name the form, press the label, treat the claim as a statement.',
        takeawayAr:
        'يبيّن المثال العلامات بترتيبها: الشكل، ثم المسمى، ثم الادعاء. وكل علامة تمحص ضدا على السجل، وكل فحص يقول ما يجب أن يبرهه العرض لجسر الفجوة التي فتحها. وهذا الترتيب هو الطريقة كلها: سمي الشكل، امحص المسمى، عامل الادعاء عبارة.',
    },
    limitations:
      'This page states the warning signs of a misdescription and the checks each sign opens. It does not establish that any specific offer is misdescribed, it does not grade any lot, and it does not measure resin in any material. The claims it treats as the seller’s are seller’s statements until the lot and the documents show otherwise.',
      limitationsAr:
      'تقرر هذه الصفحة علامات الوصف الخاطئ والفحوصات التي تفتحها كل علامة. ولا تثبت أن عرضا محددا موصوف وصفاً خاطئاً، ولا تصنف لوطا، ولا تقس الراتنج في مادة. والادعاءات التي تعاملها الصفحة عبارات بائع تبقى عبارات بائع حتى يبره اللوط والمستندات غير ذلك.',
    nextSteps: [
      'Read how seller-defined grades work in the market',
      'Read the page on identifying fraud in the material',
      'Read what a lot document can and cannot establish',
    ],
    nextStepsAr: [
      'اقرأ كيف تعمل الدرجات التي يضعها البائعون في السوق',
      'اقرأ صفحة كشف الغش في المادة',
      'اقرأ ما يستطيع مستند اللوط إثباته وما لا يستطيعه',
    ],
    related: [
      { slug: 'quality/seller-defined-super-grades', label: 'Seller-defined grade names' },
      { slug: 'quality/fraud-identification', label: 'Identifying fraud in the material' },
      { slug: 'quality/gulf-market-grade-labels', label: 'The market’s own grading vocabulary' },
      { slug: 'quality/assessment-and-testing-limits', label: 'What testing can and cannot establish' },
    ],
  }),

  /* ---------------------------------------------------------------
     quality/natural-oil-blends-and-accords
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'quality/natural-oil-blends-and-accords',
    parent: 'quality',
    title: 'Natural oil, blends and oud accords',
    titleAr: 'الزيت الطبيعي والمزيجات وأوز العود',
    summary:
      'What separates a distilled oud oil, a blend and an oud accord: three different products, and the label rules that say what a finished product must state about which one it is.',
    summaryAr:
      'ما الذي يفرق بين زيت عود مقطر ومزيج وأوز العود: ثلاثة منتجات مختلفة، وقواعد التسمية التي تقول ما يجب أن يصرح به المنتج المنتهى عن أيها هو.',
    directAnswer:
      'The three are different products, not three names for one. A distilled oud oil is the substance obtained from the resinous wood; a blend is the oil cut with other materials, natural or not; and an oud accord is a composition made to carry the oud character, which may contain no oud at all. The distinction matters because a figure or a claim stated for one does not transfer to another, and the recorded standards govern the label side: a finished fragrance product must state what it is and what it contains within the recorded limits, and the product type and the conditions are what the label carries. The market study records that the fragrance market carries these forms, and the buyer’s move is to ask which of the three they are holding, and to read the label for the statement, not to assume it.',
    directAnswerAr:
      'الثلاثة منتجات مختلفة، ليست ثلاثة أسماء لشيء واحد. فالزيت المقطر هو المادة المستحصلة من الخشب الراتنجي، والمزيج هو الزيت المضاف إليه مواد أخرى طبيعية كانت أو غير طبيعية، وأوز العود تركيبة مصنوعة لتحمل شخصية العود، وقد لا تحوي عودا على الإطلاق. والفرق مهم لأن رقما أو ادعاء قيل عن واحد لا ينتقل إلى الآخر، والأطر المسجلة تحكم جانب التسمية: فالمنتج المنتهى يجب أن يصرح بما هو وما يحوي ضمن الحدود المسجلة، ونوع المنتج والشروط هما ما يحمله الملصق. ودراسة السوق تسجل أن سوق العطور يحمل هذه الأشكال، وحركة المشتري أن يسأل أي الثلاثة بيده، وأن يقرأ الملصق عن البيان، لا أن يفترضه.',
    sections: [
      {
        heading: 'What each of the three is',
        headingAr: 'ما هو كل من الثلاثة',
        body: [
          'The first move is to define the three, because the confusion is between products, not within one. The distilled oud oil is the substance obtained from the resinous wood by distillation, and it is a material with its own handling and its own uses. The blend is that oil cut with other materials, and the cut changes what the product is: a blend is stated by its ingredients, and the blend the seller offers is what the seller’s statement says it is. The oud accord is a composition built to carry the oud character, and the related page on accords carries the recorded position: an accord is a perfumery product that simulates a material, and the word “oud” on an accord does not establish that the accord contains oud. The three definitions are the whole of what the buyer needs before a figure or a claim can be read against them.',
        ],
        bodyAr: [
          'الحركة الأولى أن تعرّف الثلاثة، لأن اللبس بين منتجات لا داخل منتج واحد. فزيت العود المقطر هو المادة المستحصلة من الخشب الراتنجي بالتقطير، وهي مادة بقواعد تعاملها واستخداماتها الخاصة. والمزيج هو ذلك الزيت المقطوع بمواد أخرى، والقطف يغيّر ما هو المنتج: فمزيج يصرح بمكوناته، والمزيج الذي يعرضه البائع هو ما تقوله عبارته. وأوز العود تركيبة مبنية لتحمل شخصية العود، وصفحة الأوز المرتبطة تحمل الموقف الموثق: الأوز منتج عطاري يحاكي مادة، وكلمة “عود” على أوز لا تثبت أن الأوز يحوي عودا. وهذه التعاريف الثلاثة هي كل ما يحتاجه المشتري قبل قراءة رقم أو ادعاء ضدهما.',
        ],
      },
      {
        heading: 'What the label must say',
        headingAr: 'ما يجب أن يقوله الملصق',
        body: [
          'The label is where the distinction gets enforced. The recorded standards set how a finished fragrance product states what it is: the product type, the conditions on materials, and the limits, expressed as upper concentrations in the finished product rather than in the mixture. The point for the buyer is that the label is a statement the maker owes the buyer, and a statement that names the product type is what separates “oud oil” from “an oud accord” on a shelf. The market study records the forms in the market, and the standards record what a finished product must say about itself, and the two meet at the label. A bottle that states which of the three it is is a bottle the buyer can price and handle correctly, and a bottle that does not is a bottle the buyer reads as the maker’s statement rather than as the product’s fact.',
        ],
        bodyAr: [
          'الملصق هو موضع تنفيذ التمييز. فالأطر المسجلة تقدر كيف يصرح منتج العطر المنتهى بما هو: نوع المنتج، والشروط على المواد، والحدود معبرة عن تركيزها القصوى في المنتج المنتهى لا في المخالطة. وما يهم المشتري أن الملصق عبارة يدين بها الصانع للمشتري، وأن عبارة تسمي نوع المنتج هي ما تفصل “زيت العود” عن “أوز العود” على الرف. ودراسة السوق تسجل الأشكال في السوق، والأطر تسجل ما يجب أن يقوله منتج منتهٍ عن نفسه، وبينهما يلتقيان عند الملصق. فزجاجة تسمي أي الثلاثة هي هي زجاجة يستطيع المشتري أن يسعرها ويتعامل معها صحيحاً، وزجاجة لا تسميه زجاجة يقرؤها المشتري عبارة صانعها لا حقيقة منتجها.',
        ],
      },
      {
        heading: 'Reading a figure against the product',
        headingAr: 'قراءة رقم ضدا على المنتج',
        body: [
          'The practical consequence is that a figure stated for one of the three is not a figure for the other two. The market study records a price for the distilled oil, and that price is a price for the oil, which is not a price for a blend and not a price for an accord. The buyer who quotes an accord against the oil is quoting a perfumery composition against a material, and the comparison only looks clean because both are in a bottle. The move is to state the product first and then read the figure: is this a material price, a blend price or a finished fragrance price, because the three move in three markets and the recorded ranges are recorded within the forms, not across them. And the check that keeps the reading honest is the label: does the bottle say which of the three it is, and does that statement match the figure the seller gave.',
        ],
        bodyAr: [
          'النتيجة العملية أن رقما قيل عن واحد من الثلاثة ليس رقما عن الآخرين. فدراسة السوق تسجل سعرا للزيت المقطر، وسعر ذلك سعر الزيت، ليس سعر مزيج وليس سعر أوز. والمشتري الذي يضع أوز مقابل الزيت يضع تركيبا عطاريا مقابل مادة، والمقارنة تبدو نضرة فقط لأن الاثنين في زجاجة. والحركة أن تقرر المنتج أول ثم تقر الرقم: أهذا سعر مادة أم مزيج أم عطر منتهى، لأن الثلاثة تسير في ثلاثة أسواق والنطاقات المسجلة تسجل داخل الأشكال لا عبرها. والفحص الذي يحافظ على صحة القراءة هو الملصق: هل الزجاجة تقول أي الثلاثة هي، وهل هذه العبارة تطابق الرقم الذي أعطاه البائع.',
        ],
        list: [
          'State the product before the figure: material, blend or finished fragrance.',
          'Read the label for the product’s own statement, not the seller’s description of it.',
          'A price for an accord is a price for a composition, not for the material it imitates.',
        ],
        listAr: [
          'قّر المنتج قبل الرقم: مادة، مزيج، أو عطر منتهى.',
          'اقرأ الملصق عن بيان المنتج نفسه، لا عن وصف البائع له.',
          'سعر الأوز سعر تركيب لا سعر المادة التي يحاكيها.',
        ],
      },
    ],
    sourceIds: ['TRAFFIC_UAE_AGARWOOD_TRADE', 'IFRA_STANDARDS'],
    workedExample: {
      situation:
        'A hypothetical buyer holds a bottle labelled “oud oil”, but the price stated is in the recorded range for a finished fragrance; the question is which of the three they are holding.',
        situationAr:
        'مشتري افتراضي بين يديه زجاجة ملصقها “زيت العود” لكن السعر المسمّى في النطاق المسجل للأعطار المنتهية؛ والسؤال أي الثلاثة بيده.',
      steps: [
        'Read the label: does the bottle state which of the three it is, and what does that statement say.',
        'Read the figure: the stated price is in the range the record gives for the finished fragrance, not for the oil.',
        'Press the mismatch: a label that says oil and a price that is a fragrance price are two statements that do not agree.',
        'Ask the maker for the product’s own statement, and hold the purchase open until the two agree.',
      ],
      stepsAr: [
        'اقرأ الملصق: هل الزجاجة تقول أي الثلاثة هي، وماذا تقول عبراها.',
        'اقرأ الرقم: السعر المسمّى في النطاق الذي يعطيه السجل للعطر المنتهى لا للزيت.',
        'ادفع على التعثر: ملصق يقول زيتا وسعر يقول عطورا عبارةان لا تتفقان.',
        'واطلب من الصانع بيان المنتج نفسه، وأبقِ الشراء معلقاً حتى يتفق الأمران.',
      ],
      takeaway:
        'The example shows the reading that separates the product from the figure: the label states one thing, the price states another, and the mismatch is the sign that the buyer should hold the purchase open. A bottle that does not agree with its own price is a bottle the buyer reads twice.',
        takeawayAr:
        'يبيّن المثال القراءة التي تفصل المنتج عن الرقم: الملصق يقول شيئا والسعر يقول آخر، والتعثر هو العلامة على أن المشتري يعلق الشراء. وزجاجة لا تتفق مع سعرها نفسها زجاجة يقرؤها المشتري مرتين.',
    },
    limitations:
      'This page defines the three product types and states what the recorded standards require of a finished product’s label. It does not state the composition of any specific bottle, it does not fix a price for any of the three, and it does not establish which product a specific bottle is: that is the label’s statement to make and the buyer’s question to ask.',
      limitationsAr:
      'تعرف هذه الصفحة على أنواع المنتجات الثلاثة وتقرر ما تتطلب الأطر المسجلة من ملصق منتج منتهى. ولا تعلم تركيب زجاجة بعينها، ولا تثبت سعرا لأي من الثلاثة، ولا تثبت أي منتج زجاجة معينة: فذلك بيان الملصق وسؤال المشتري.',
    nextSteps: [
      'Read the page on what an accord is',
      'Read the page on what the distilled oil is',
      'Read the page on testing attar quality',
    ],
    nextStepsAr: [
      'اقرأ صفحة ما هو الأوز',
      'اقرأ صفحة ما هو الزيت المقطر',
      'اقرأ صفحة اختبار جودة الإتر',
    ],
    related: [
      { slug: 'fragrance/oud-accords', label: 'What an oud accord is' },
      { slug: 'products/oud-oil', label: 'What the distilled oil is' },
      { slug: 'quality/attar-quality-testing', label: 'Testing attar quality' },
      { slug: 'fragrance/notes-versus-ingredients', label: 'Notes and what they are not' },
    ],
  }),

  /* ---------------------------------------------------------------
     quality/resin-measurement
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'quality/resin-measurement',
    parent: 'quality',
    title: 'Resin measurement and uncertainty',
    titleAr: 'قياس الراتنج والشك الذي يحمله',
    summary:
      'What a resin-content claim would have to establish, what the record actually carries, and why “how much resin” is a question the record does not answer for any lot.',
    summaryAr:
      'ماذا يجب أن يثبت ادعاء محتوى الراتنج، وماذا يحمل السجل فعلا، ولماذا “كم من الراتنج” سؤال لا يجيب عليه السجل لوطا معينا.',
    directAnswer:
      '“How much resin” is a question with no published measurement, and the page states that plainly rather than pretending one. What the record carries is a chemistry statement: the review records a set of compounds identified in the material, with the terpenoids recorded at the recorded share, which is a profile of the resin in general, not a quantity in any lot. What the market study adds is a price statement: the recorded retail ranges across origins and forms are wide, and the width is the recorded fact that grade labels and resin claims do not carry a fixed number behind them. So a resin claim on an offer is a seller’s statement with no measurement standing behind it, and the buyer’s move is to read the claim as such: it names a property, it does not measure it, and the only check is the lot itself and the documents that go with it.',
    directAnswerAr:
      '“كم من الراتنج” سؤال بلا قياس منشور، والصفحة تقول ذلك صراحة بدل أن تتظاهر بوجوده. وما يحمله السجل عبارة كيميائية: المراجعة تسجل مجموعة مركبات حددت في المادة، والتربينات منسوبة إلى النسبة المسجلة، وهذا رسم عام للراتنج لا كمية في لوط. وما تضيفه دراسة السوق عبارة سعرية: النطاقات المسجلة للتجزئة عبر المناسخ والأشكال واسعة، والعرض هو حقيقة مسجلة أن وسوم الدرجات وادعاءات الراتنج لا تحمل رقما ثابتا خلفها. فادعاء راتنج على عرض عبارة بائع لا قياس خلفها، وحركة المشتري أن يقرأ الادعاء كذلك: يسمي صفة، لا يقيسها، والفحص الوحيد هو اللوط نفسه والمستندات التي تليقه.',
    sections: [
      {
        heading: 'What a resin-content claim would have to establish',
        headingAr: 'ما يجب أن يثبت ادعاء محتوى الراتنج',
        body: [
          'Before the page can say what the record carries, it states what the claim would need to establish. A resin-content claim, if it were a measurement, would have to give a number against a standard: a quantity of resin per unit of material, measured by a stated method, against a stated scale, on a stated lot. None of those is a published fact. There is no published scale for resin content in the material, no standard method the buyer can ask for by name, and no registry of lot-level measurements in the record. So the claim is a statement with the form of a measurement, and the page’s first job is to say that form plainly: the claim names a property that the material has, and it does not measure it.',
        ],
        bodyAr: [
          'قبل أن تقول الصفحة ما يحمله السجل، تقول ما يحتاجه الادعاء ليثبت. فادعاء محتوى الراتنج، لو كان قياسا، لكان عليه أن يعطي رقما مقابل قياسية: كمية راتنج لكل وحدة من المادة،قياسا بطريقة معلنة، على مقياس معلَن، على لوط معلَن. ولا شيء من ذلك حقيقة منشورة. فلا مقياس منشور لمحتوى الراتنج في المادة، ولا طريقة قياسية يطلبها المشتري باسمها، ولا سجل لقياسات على مستوى اللوط في السجل. فالادعاء عبارة على هيئة قياس، وأول واجب الصفحة أن تقول تلك الهيئة بوضوح: الادعاء يسمي صفة في المادة، ولا يقيسها.',
        ],
      },
      {
        heading: 'What the record actually carries',
        headingAr: 'ما يحمله السجل فعلا',
        body: [
          'The record carries two statements that are often misread as the measurement. The first is the chemistry statement: the review records a set of compounds identified in the resinous material, with the terpenoids recorded at the recorded share of that set. That is a profile of the resin in general, which tells the buyer what the material is recorded to carry, and it does not tell the buyer how much a lot carries of it, because a profile is a set of properties, not a quantity. The second statement is the price statement: the market study records the retail ranges across origins and forms, and the ranges are wide, and the width is the recorded fact that a grade label on a lot does not carry a fixed number behind it. Both statements are recorded, and both are misread when they are treated as a measurement of any lot’s resin.',
        ],
        bodyAr: [
          'السجل يحمل عبارتين تُساء قراءة عادةً كأنهما القياس. الأولى عبارة الكيمياء: المراجعة تسجل مجموعة مركبات حددت في المادة الراتنجية، والتربينات نسبة منسوبة داخل تلك المجموعة. وهذا رسم عام للراتنج، يقول للمشتري ما تسجل المادة أنها تحمله، ولا يقول له كم يحمله اللوط، لأن الرسم مجموعة صفات لا كمية. والعبارة الثانية عبارة السعر: دراسة السوق تسجل نطاقات التجزئة عبر المناسخ والأشكال، والنطاقات واسعة، والعرض هو حقيقة مسجلة أن وسم درجة على لوط لا يحمل رقما ثابتا خلفه. والعبارتان مسجلتان، وتُساء قراءة كلتاهما إذا عوملا كأنهما قياس راتنج لوط.',
        ],
      },
      {
        heading: 'Where the uncertainty sits',
        headingAr: 'أين يسكن الشك',
        body: [
          'The uncertainty is not that the material lacks resin; the record establishes the chemistry of the resin and the association the review reports. The uncertainty is that a number stated for a lot is not established by anything in the record. Two lots can be the same grade, the same form and the same origin, and a claim of resin content on one is a seller’s statement about that lot, not a fact the lot carries. The buyer’s position is therefore to read the claim as a seller’s statement, to check the lot against the statement, and to keep the statement and the lot separate, which is what the related pages on lot documentation and on claim limits carry. The page does not give the buyer a number, because no record gives one, and that is the honest shape of the answer.',
        ],
        bodyAr: [
          'الشك ليس أن المادة بلا راتنج؛ السجل يثبت كيمياء الراتنج والعلاقة التي تنقلها المراجعة. والشك أن رقما قيل عن لوط لا تثبته أي حقيقة في السجل. فلولتان يمكن أن تكونا الدرجة نفسها والشكل نفسه والمنشأ نفسه، وادعاء محتوى الراتنج على إحداهما عبارة بائع عن ذلك اللوط، ليست حقيقة يحمله اللوط. فموضع المشتري أن يقرأ الادعاء عبارة بائع، ويمحص اللوط ضدها، ويبقي العبارة واللوط منفصلين، وهو ما تحمله صفحات توثيق اللوط وحدود الادعاءات المرتبطة. والصفحة لا تعطي المشتري رقما، لأن أي سجل لا يعطي رقما، وهذه هي هيئة الجواب الصادقة.',
        ],
        list: [
          'A resin claim names a property; it does not measure it.',
          'A compound profile is a statement about the resin in general, not a quantity in a lot.',
          'A wide recorded price range is the recorded fact that labels carry no fixed number.',
          'The only checks on a claim are the lot itself and the documents that go with it.',
        ],
        listAr: [
          'ادعاء الراتنج يسمي صفة؛ لا يقيسها.',
          'رسم المركبات عبارة عن الراتنج عموما، ليست كمية في لوط.',
          'النطاق المسجل الواسع سعر هو حقيقة مسجلة أن الوسمات لا تحمل رقما ثابتا.',
          'الفحص الوحيد لادعاء هو اللوط نفسه والمستندات التي تليقه.',
        ],
      },
    ],
    sourceIds: ['TRAFFIC_UAE_AGARWOOD_TRADE', 'AGARWOOD_CITES_2022'],
    workedExample: {
      situation:
        'A hypothetical seller states a lot at “high resin content” with no number, no method and no standard; the question is what that statement is worth on the record.',
      situationAr:
        'ادّعى بائع افتراضي لوطا “محتوى راتنج مرتفع” بلا رقم ولا طريقة ولا قياسية؛ والسؤال ما وزن هذه العبارة على السجل.',
      steps: [
        'Check for the standard: no published scale for resin content, so the claim has no measurement standing behind it.',
        'Check for the method: no stated method, so the claim is not a result the buyer can ask for by name.',
        'Check the record: the compound profile and the price ranges say nothing about the lot’s quantity, so the claim stays the seller’s.',
        'Report: the statement is a property claim, and the only checks are the lot and the documents.',
      ],
      stepsAr: [
        'افحص القياسية: لا مقياس منشور لمحتوى الراتنج، فالادعاء بلا قياس خلفه.',
        'وافحص الطريقة: لا طريقة معلنة، فالادعاء ليس نتيجة يسميها المشتري بالاسم.',
        'وافحص السجل: رسم المركبات ونطاقات السعر لا يقولان شيئا عن كمية اللوط، فيبقى الادعاء البائع.',
        'وقيل: العبارة ادعاء صفة، والفحص الوحيد هو اللوط والمستندات.',
      ],
      takeaway:
        'The example shows the claim read on the record: it is a property statement with no measurement, no method and no standard, so its weight is the seller’s statement only. A buyer who prices the lot on that statement is paying for the statement, not for a measured fact.',
        takeawayAr:
        'يبيّن المثال الادعاء مقروئا على السجل: إنه عبارة صفة بلا قياس ولا طريقة ولا قياسية، فزنة عبارة البائع فقط. والمشتري الذي يسعر اللوط على تلك العبارة يدفع ثمن العبارة لا حقيقة مقاسة.',
    },
    limitations:
      'This page states what a resin-content claim would have to establish and what the record carries instead: a compound profile and a recorded price range, both of which are statements about the material and the market in general. It does not measure the resin in any lot, and it does not give a number for any lot’s content, because no source in the register does.',
      limitationsAr:
      'تقرر هذه الصفحة ما يجب أن يثبت ادعاء محتوى الراتنج وما يحمله السجل مكانه: رسم مركبات ونطاق أسعار مسجل، وكلاهما عبارة عن المادة والسوق عموما. ولا تقس الراتنج في لوط، ولا تعطي رقما لمحتوى لوط، لأنه لا مصدر في السجل يفعل ذلك.',
    nextSteps: [
      'Read how to read a lot lab report for what it does establish',
      'Read the page on sinking claims and what they do and do not show',
      'Read the page on batch records and what they carry',
    ],
    nextStepsAr: [
      'اقرأ كيف تقرأ تقرير فحص لوط وماذا يثبت',
      'اقرأ صفحة ادعاءات الغرق وما يبينه وما لا يبين',
      'اقرأ صفحة سجل الدفعات وما تحمله',
    ],
    related: [
      { slug: 'quality/lab-report-reading', label: 'What a lab report establishes, and what it does not' },
      { slug: 'quality/sinking-claims', label: 'What a sinking claim shows' },
      { slug: 'quality/batch-records', label: 'What batch records carry' },
      { slug: 'oud-basics/resin-formation', label: 'What the resin record says about formation' },
    ],
  }),

  /* ---------------------------------------------------------------
     quality/vietnamese-trade-classifications
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'quality/vietnamese-trade-classifications',
    parent: 'quality',
    title: 'Vietnamese trade classifications',
    titleAr: 'التصنيفات التجارية الفيتنامية',
    summary:
      'What the record does and does not say about Vietnamese classifications of the material: the documented producing region, the regulation that places it under, and the grading vocabulary the trade sets for itself.',
    summaryAr:
      'ما يقوله السجل وما لا يقوله عن تصنيفات المادة في فيتنام: منطقة الإنتاج الموثقة، والضبط الذي تحتها، ومفردات التصحيح التي تضعها التجارة لذاتها.',
    directAnswer:
      'Vietnam is a documented producing region for the resinous wood, and the material from there moves under a classification the trade sets for itself, which is the whole of what the record carries on the classification question. The producing record names the country among the regions where the material forms, and the regulation places the genera under the listing that covers all of them, which is the regulatory side. The classification side is the trade’s own: the names move through the market as relative claims, the same name can carry a different meaning from one seller to the next, and no source in the register defines a fixed scale for the Vietnamese names. So the page states the producing and regulatory record on its two sources, and states the classification record as the trade’s vocabulary, keeping the boundary between the documented region and the undocumented scale visible.',
    directAnswerAr:
      'فيتنام منطقة إنتاج موثقة للخشب الراتنجي، ومادتها تسير تحت تصحيح تضعه التجارة لذاتها، وهذا هو كل ما يحمله السجل في سؤال التصحيح. فسجل الإنتاج يسمي البلاد من المناطق التي تتكون فيها المادة، والضبط يضع الأجناس تحت التسمية التي تحيط بها كلها، وهذا هو جانب الضبط. وجانب التصحيح هو الخاص بالتجارة: المسميات تسير في السوق ادعاءات نسبية، والمسمى نفسه يمكن أن يحمل معنى مختلفا من بائع إلى آخر، ولا مصدر في السجل يعرف مقياسا ثابتا للأسماء الفيتنامية. فالصفحة تقول سجل الإنتاج والضبط على مصدرين، وتقول سجل التصحيح مفردات التجارة، وتبقي الحد بين المنطقة الموثقة والمقياس غير الموثق ظاهرا.',
    sections: [
      {
        heading: 'What the record does say',
        headingAr: 'ما يقوله السجل',
        body: [
          'The two recorded statements are the producing record and the regulatory record. The producing record names Vietnam among the countries where the resinous wood forms, and the review that carries that record documents the country’s position in the producing geography. The regulatory record places the genera under the listing that covers all of them, and that listing is a fact about the material’s status that a classification question can rely on, because it is the status the trade must move within. The two together give the page its documented base: a producing region and a regulatory position, both stated on their sources. Everything the page says about the classification itself is said relative to that base, and nothing crosses it.',
        ],
        bodyAr: [
          'العبارتان المسجلتان هما سجل الإنتاج وسجل الضبط. فسجل الإنتاج يسمي فيتنام من بين الدول التي يتكون فيها الخشب الراتنجي، والمراجعة التي تحمل ذلك السجل توثق موضع البلاد في جغرافيا الإنتاج. وسجل الضبط يضع الأجناس تحت التسمية التي تطوقها كلها، وهذه التسمية حقيقة عن حال المادة يمكن أن يعتمد عليها سؤال التصحيح، لأن هذه هي الحال التي تجب على التجارة أن تسير فيها. ويعطيان معاً الصفحة أساسها الموثق: منطقة إنتاج وموقع ضبط، كلاهما قيل على مصدره. وكل ما تقوله الصفحة عن التصحيح نفسه يقال بمقابل ذلك الأساس، ولا شيء يعبره.',
        ],
      },
      {
        heading: 'How the trade classifies',
        headingAr: 'كيف تصحح التجارة',
        body: [
          'The classification the material moves under is the trade’s own vocabulary, and the page states that without pretending the vocabulary is a standard. The names move through the market as relative claims: a name on a lot names a position the seller is stating, not a place on a published scale, and the same name can mean different things from one seller to the next, because the market has no published scale for the names to be read against. That is not a claim the register carries and the page will not make one: it does not record a fixed meaning for the Vietnamese names, and it does not order the names against one another. The page states the names as the trade’s vocabulary and the relative claim that each one is, and it leaves the scale question open, because the record is silent on it.',
        ],
        bodyAr: [
          'التصحيح الذي تسير تحته المادة مفردات التجارة الخاصة، والصفحة تقول ذلك دون أن تتظاهر أن المفردات قياسية. فالمسميات تسير في السوق ادعاءات نسبية: مسمى على لوط يسمي موضعا يصرح به البائع، ليس موضعا على مقياس منشور، والمسمى نفسه يمكن أن يعني أشياء مختلفة من بائع إلى آخر، لأن السوق بلا مقياس منشور تقرأ المسميات ضده. وهذا ليس ادعاء يحمله السجل ولن تصنعه الصفحة: فلا تسجل معنى ثابتا للمسميات الفيتنامية ولا ترتبها فيما بينها. والصفحة تقول المسميات مفردات التجارة والادعاء النسبي الذي هو كل مسمى، وتترك سؤال المقياس مفتوحا لأن السجل صامت عليه.',
        ],
      },
      {
        heading: 'Reading a Vietnamese classification',
        headingAr: 'قراءة تصحيح فيتنامي',
        body: [
          'The workable reading is to press the classification against the lot the same way the grading pages press any grade label: the name is a claim, and the claim is checked against what the lot shows and what the documents carry. A Vietnamese classification on an offer is read as the seller’s stated position, not as a fact the lot carries, and the check is the same check the record supports: the lot, the documents and the statement, and nothing beyond. The page links the reader to the grading pages that carry the recorded vocabulary and to the documentation page that carries the lot’s record, and it keeps the Vietnamese classification on its own footing, as the trade’s vocabulary for a documented region.',
        ],
        bodyAr: [
          'القراءة العملية أن تضغط التصحيح على اللوط كما تضغط صفحات التصحيح أي وسم درجة: المسمى ادعاء، والادعاء يمحص ضدا على ما يبينه اللوط وما تحمله المستندات. فتصحيح فيتنامي على عرض يقرأ موضع البائع المصرح به، لا حقيقة يحمله اللوط، والفحص هو الفحص الذي يدعمه السجل: اللوط والمستندات والعبارة، ولا شيء وراءها. والصفحة تربط القارئ بصفحات التصحيح التي تحمل المفردات المسجلة وبصفحة التوثيق التي تحمل سجل اللوط، وتبقي التصحيح الفيتنامي على قدمه الخاصة، مفردات التجارة لمنطقة موثقة.',
        ],
        list: [
          'Read a Vietnamese name as the seller’s stated position, not as a fact on a published scale.',
          'Check the position against the lot, the documents and the statement, and nothing beyond.',
          'Read the same name across two sellers as two claims, not as one fact.',
        ],
        listAr: [
          'اقرأ مسمى فيتناميا بوصفه الموضع المصرح به من البائع، لا حقيقة على مقياس منشور.',
          'امحص الموضع ضدا على اللوط والمستندات والعبارة، ولا شيء وراءها.',
          'اقرأ مسمى واحدا عند بائعين اثنين ادعاءين، لا حقيقة واحدة.',
        ],
      },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'AGARWOOD_CITES_2022'],
    workedExample: {
      situation:
        'A hypothetical buyer is offered Vietnamese material classified by two names the record does not define, and wants to know what the classification is worth.',
      situationAr:
        'قُدم إلى مشتري افتراضي مادة فيتنامية مصنفة باسمين لا يعرفهما السجل، ويريد أن يعرف وزن التصحيح.',
      steps: [
        'Check the region: Vietnam is a documented producing region, so the origin side of the offer is on the record.',
        'Check the names: no published scale defines the two names, so they are the seller’s stated positions, not facts.',
        'Check the agreement: do the two names on one lot agree with each other and with the lot, or do they pull against each other.',
        'Report: the classification is the trade’s vocabulary for a documented region, and its weight is a claim until the lot and the documents show otherwise.',
      ],
      stepsAr: [
        'افحص المنطقة: فيتنام منطقة إنتاج موثقة، فنواحي المنشأ في العرض على السجل.',
        'وافحص الاسمين: لا مقياس منشور يعرف الاسمين، فهما مواضع البائع المصرح بها لا حقائق.',
        'وافحص التقارب: هل الاسمان على لوط واحد يتفقان مع بعض ومع اللوط، أم يجثمان أحدهما على الآخر.',
        'وقيل: التصحيح مفردات التجارة لمنطقة موثقة، وزنته ادعاء حتى يبره اللوط والمستندات غير ذلك.',
      ],
      takeaway:
        'The example shows the classification read on the record: the region is documented, the names are not, and the names are treated as claims to check against the lot. A buyer who holds that boundary is comparing the offer to what is recorded rather than to what is said.',
        takeawayAr:
        'يبيّن المثال التصحيح مقروئا على السجل: المنطقة موثقة، والاسمان موثقان لا، والمسمات معمولة معها ادعاءات تمحص ضدا على اللوط. والمشتري الذي يحفظ هذا الحد يقارن العرض بما هو موثق لا بما قيل.',
    },
    limitations:
      'This page documents Vietnam as a producing region and states the regulatory position of the material. It does not define the Vietnamese classification names, and it does not order them against one another, because no source in the register carries a fixed scale for them. The classification is stated as the trade’s vocabulary, and that is the whole of the record the page carries on it.',
      limitationsAr:
      'توثق هذه الصفحة فيتنام بوصفها منطقة إنتاج وتقرر الوضع الضبطي للمادة. ولا تعرف المسميات الفيتنامية ولا ترتبها فيما بينها، لأنه لا مصدر في السجل يحمل مقياسا ثابتا لها. والتصحيح قيل بمفردات التجارة، وهذا هو كل سجل الصفحة فيه.',
    nextSteps: [
      'Read the Vietnamese origin page for the producing region',
      'Read the page on how grades are set in the market',
      'Read the page on what a lot document can establish',
    ],
    nextStepsAr: [
      'اقرأ صفحة المنشأ الفيتنامي لمنطقة الإنتاج',
      'اقرأ صفحة كيف توضع الدرجات في السوق',
      'اقرأ صفحة ماذا يستطيع مستند اللوط إثباته',
    ],
    related: [
      { slug: 'origins/vietnam', label: 'Vietnam as a producing region' },
      { slug: 'quality/gulf-market-grade-labels', label: 'The market’s own grading vocabulary' },
      { slug: 'comparisons/vietnam-and-cambodia-oud', label: 'A recorded contrast from the same geography' },
      { slug: 'quality/oud-grading-explained', label: 'How the trade sets grades' },
    ],
  }),

  /* ---------------------------------------------------------------
     quality/treatment-disclosures
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'quality/treatment-disclosures',
    parent: 'quality',
    title: 'Reading treatment and preparation disclosures',
    titleAr: 'قراءة بيانات المعالجة والتحضير',
    summary:
      'What a treatment disclosure is and is not: a statement the seller makes about what was done to the material, and the checks that statement opens rather than the assurance it does not carry.',
      summaryAr:
      'ما هي عبارة المعالجة وما ليست: عبارة يصدرها البائع عن ما فعل في المادة، والفحوصات التي تفتحها لا ضمانات لا تحملها.',
    directAnswer:
      'A treatment disclosure is a statement, not a fact, and the page’s whole job is to say that plainly. The disclosure names something done to the material: the induction that produced the resin, the storage the seller reports, the preparation the seller reports, and each is a seller’s statement about the material’s history. What the register carries is the record that the material forms under the wound and the reported association with the genera, and the regulation that places the genera under the listing, which is the record of the material’s status, not of any lot’s treatment. So a disclosure is read as a statement to check, not as a fact to accept: the buyer checks the statement against the lot, against the documents, and against the record the statement names, and the buyer keeps the three separate, because a disclosure that is not checked is a statement, and a statement is not a fact the lot carries.',
    directAnswerAr:
      'عبارة المعالجة عبارة، ليست حقيقة، وكل مهمة الصفحة أن تقول ذلك بوضوح. فالعبارة تسمي شيئا فُعل بالمادة: التحريض الذي أنتج الراتنج، والتخزين الذي يصرح به البائع، والتحضير الذي يصرح به البائع، وكلها عبارات البائع عن تاريخ المادة. وما يحمله السجل هو سجل أن المادة تتكون تحت الجرح والعلاقة المنسوبة للأجناس، والضبط الذي يضع الأجناس تحت التسمية، وهذا هو سجل حال المادة لا سجل معالجة أي لوط. فتقرأ العبارة عبارة تمحص، لا حقيقة تقبل: فالمشتري يمحص العبارة ضدا على اللوط، وضدا على المستندات، وضدا على السجل الذي تسميه العبارة، ويظل المشتري يفصل بين الثلاثة، لأن عبارة لم تمحصها عبارة، والعبارة ليست حقيقة يحمله اللوط.',
    sections: [
      {
        heading: 'What a disclosure names',
        headingAr: 'ما تسميه عبارة المعالجة',
        body: [
          'The disclosure names something done to the material, and the naming is the whole of its content. The induction that produced the resin, if it is named, is a statement about how the seller says the material was made resinous, and the record the register carries reports the wound and the reported association with the genera, which is the literature side of the formation, not a certificate of any lot’s induction. The storage the seller reports is a statement about the material’s time and handling, and the preparation the seller reports is a statement about what was done to the form. Each naming is the seller’s word, and each one opens a check: the buyer checks the word against the lot and the documents, because a word that is not checked is a word, not a fact.',
        ],
        bodyAr: [
          'العبارة تسمي شيئا فُعل بالمادة، والتسمية هي كل محتواها. فالتحريض الذي أنتج الراتنج، إن سُمي، عبارة عن كيف يقول البائع أن المادة صارت راتنجية، والسجل الذي يحمله الدفتر ينقل الجرح والعلاقة المنسوبة للأجناس، وهذا هو الجانب الأدبي من التكوين لا شهادة على تحريض لوط. والتخزين الذي يصرح به البائع عبارة عن وقت المادة وتعاملها، والتحضير الذي يصرح به البائع عبارة عما فُعل بالشكل. وكل تسمية كلمة البائع، وكل واحدة تفتح فحصا: فالمشتري يمحص الكلمة ضدا على اللوط والمستندات، لأن كلمة لم تمحصها كلمة، ليست حقيقة.',
        ],
      },
      {
        heading: 'What the disclosure does not establish',
        headingAr: 'ما لا تثبته العبارة',
        body: [
          'The limit is that the disclosure is a statement, and a statement does not establish what it names. The disclosure that names an induction does not establish the induction, it states it, and the establishment is the lot and the documents that go with it. The disclosure that names a storage does not establish the storage, it states it, and the establishment is the record the seller can show. The regulatory record places the genera under the listing, and that listing is a fact about the material’s status that the disclosure can rely on, because the status is the ground the trade must move within, and it is not a fact about any lot’s treatment. So the disclosure is read as the seller’s word on the history, and the word is checked against the lot and the documents, and the check is what the page carries, not the word itself.',
        ],
        bodyAr: [
          'الحد أن العبارة عبارة، والعبارة لا تثبت ما تسميه. فالعبارة التي تسمي تحريضا لا تثبت التحريض، بل تصرح به، والإثبات هو اللوط والمستندات التي تليقه. والعبارة التي تسمي تخزينا لا تثبت التخزين، بل تصرح به، والإثبات هو السجل الذي يستطيع البائع إبرازه. وسجل الضبط يضع الأجناس تحت التسمية، وهذه التسمية حقيقة عن حال المادة يمكن للعبارة أن تعتمد عليها، لأن الحال هو الأرض التي تجب على التجارة أن تسير فيها، وليست حقيقة عن معالجة لوط. فتقرأ العبارة كلمة البائع على التاريخ، والكلمة تمحص ضدا على اللوط والمستندات، والفحص هو ما تحمل الصفحة لا الكلمة نفسها.',
        ],
      },
      {
        heading: 'How to read a disclosure',
        headingAr: 'كيف تقرأ عبارة المعالجة',
        body: [
          'The reading is ordered, and the order is the check. The disclosure names something, and the check is whether the naming holds against the lot, the documents and the record the naming points to. A disclosure that holds on all three is a disclosure the buyer can rely on as the seller’s statement, and a disclosure that does not hold is a disclosure the buyer reads as the seller’s word only, with no establishment behind it. The page carries this order as a checklist, and the related pages carry the specific checks: the lot documentation for what the lot shows, the documentation limits for what the lot does not show, and the authenticity protocol for the order of the checks themselves.',
        ],
        bodyAr: [
          'القراءة مرتبة والترتيب هو الفحص. فالعبارة تسمي شيئا، والفحص هل تصمد التسمية ضدا على اللوط والمستندات والسجل الذي تشير إليه. فعبارة تصمد على الثلاثة كلها عبارة يعتمد عليها المشتري عبارة البائع، وعبارة لا تصمد عبارة يقرؤها المشتري كلمة البائع فقط، بلا إثبات خلفها. والصفحة تحمل هذا الترتيب قائمة فحص، وصفحات الارتباط تحمل الفحوص الخاصة: توثيق اللوط لما يبينه اللوط، وحدود التوثيق لما لا يبينه، وبروتوكول الأصالة لترتيب الفحوص نفسها.',
        ],
        list: [
          'Read the disclosure as a statement, and check the statement against the lot.',
          'Check the statement against the documents, and keep the documents and the lot separate.',
          'Check the statement against the record it names, and keep the record’s silence visible.',
        ],
        listAr: [
          'اقرأ العبارة عبارة، وامحصها ضدا على اللوط.',
          'امحصها ضدا على المستندات، وأبقِ المستندات واللوط منفصلين.',
          'وامحصها ضدا على السجل الذي تسميه، وأبقِ صمت السجل ظاهرا.',
        ],
      },
    ],
    sourceIds: ['TRAFFIC_UAE_AGARWOOD_TRADE', 'AGARWOOD_CITES_2022'],
    workedExample: {
      situation:
        'A hypothetical seller discloses a lot as “aged and cured” with no documents and no record the buyer can check against; the question is what the disclosure is worth.',
      situationAr:
        'أعلن بائع افتراضي لوطا “معتق ومُعالج” بلا مستندات ولا سجل يمكن للمشتري فحصه؛ والسؤال ما وزن العبارة.',
      steps: [
        'Read the disclosure as a statement: it names an age and a cure, and each naming is the seller’s word.',
        'Check the statement against the lot: does the lot show what the naming says, or does the naming outrun the lot.',
        'Check the statement against the documents: the lot has none, so the statement has no documents to hold against.',
        'Report: the disclosure is the seller’s word, and its weight is a statement, not an established fact about the lot.',
      ],
      stepsAr: [
        'اقرأ العبارة عبارة: تسمي عمارا ومعالجة، وكل تسمية كلمة البائع.',
        'امحصها ضدا على اللوط: هل يبين اللوط ما تقوله التسمية، أم تتقدم التسمية على اللوط.',
        'وامحصها ضدا على المستندات: اللوط بلا مستندات، فالعبارة بلا مستند تصمد عليه.',
        'وقيل: العبارة كلمة البائع، وزنتها عبارة، ليست حقيقة مثبتة عن اللوط.',
      ],
      takeaway:
        'The example shows the disclosure read on its own terms: it is a statement, and a statement with no lot check and no documents is a statement only. A buyer who reads the disclosure as the seller’s word, and checks the word against the lot and the documents, is not refusing the disclosure, they are reading it for what it is.',
        takeawayAr:
        'يبيّن المثال العبارة مقروءة على بنودها: إنها عبارة، وعبارة بلا فحص لوط وبلا مستندات تبقى عبارة فقط. والمشتري الذي يقرأ العبارة كلمة البائع، ويمحص الكلمة ضدا على اللوط والمستندات، لا يرفض العبارة، بل يقرؤها على ما هي عليه.',
    },
    limitations:
      'This page states what a treatment disclosure is and the checks it opens. It does not establish the induction, storage or preparation of any lot, and it does not verify any seller’s statement: the record the register carries is the record of the material and its status, not the record of any lot’s history.',
      limitationsAr:
      'تقرر هذه الصفحة ما هي عبارة المعالجة والفحوصات التي تفتحها. ولا تثبت تحريضا ولا تخزيناً ولا تحضيراً لوط، ولا تعزز عبارة أي بائع: فالسجل الذي يحمله الدفتر هو سجل المادة وحالها، ليس سجل تاريخ أي لوط.',
    nextSteps: [
      'Read the page on what lot documentation can and cannot establish',
      'Read the authenticity protocol for the order of the checks',
      'Read the page on wild and cultivated material for the record of the induction',
    ],
    nextStepsAr: [
      'اقرأ صفحة ماذا يستطيع توثيق اللوط إثباته وما لا يستطيع',
      'اقرأ بروتوكول الأصالة لترتيب الفحوص',
      'اقرأ صفحة المادة البرية والمزروعة لسجل التحريض',
    ],
    related: [
      { slug: 'quality/oud-authenticity-protocol', label: 'The order of the checks' },
      { slug: 'sourcing/wild-and-cultivated-oud', label: 'The record of the induction' },
      { slug: 'quality/assessment-and-testing-limits', label: 'What a lot check establishes' },
      { slug: 'quality/fraud-identification', label: 'Where a statement stops being a fact' },
    ],
  }),
];
