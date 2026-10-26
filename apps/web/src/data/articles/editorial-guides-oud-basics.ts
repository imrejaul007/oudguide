import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

/**
 * Editorial guides: the oud-basics block.
 *
 * Each guide is a finished, question-specific body. Where the question has a
 * documentary answer, the claims rest on a source whose scope carries them.
 * Where the question's core (here: the *mechanics* of how resin develops) is
 * not recorded by any source in the register, the page scopes the claim to
 * what the register does say and states the rest as an explicit limitation —
 * a citation never decorates a claim it does not carry.
 */

export const editorialGuideOudBasics: Article[] = [
  /* ----------------------------------------------------------------
     oud-basics/why-oud-is-expensive
     ---------------------------------------------------------------- */
  simpleGuide({
    slug: 'oud-basics/why-oud-is-expensive',
    parent: 'oud-basics',
    title: 'Why oud prices differ',
    titleAr: 'لماذا تختلف أسعار العود',
    summary:
      'What makes oud move from a low price to a very high one: the form, the grade, the origin, the age and the supply, and why two lots with the same label can be quoted far apart.',
    summaryAr:
      'ما الذي يجعل العود يتراوح من سعر منخفض إلى سعر مرتفع جداً: الشكل، والدرجة، والمنشأ، والعمر، والعرض، ولماذا يمكن أن يُقدَّم سعران مختلفان كثيراً للوطَين يحملان التسمية نفسها.',
    directAnswer:
      'Oud prices differ because the material comes in different forms that are not the same product, is graded by methods that are not standard, varies by origin and age, and is constrained in supply. A buyer who quotes one lot against another without checking that they are the same form, the same grade, the same origin and the same age is comparing things that are not comparable. The recorded industry is very large and the recorded price of a litre of oil is high, and the recorded retail ranges across origins are wide, which is a fact about the market rather than a price to pay today.',
    directAnswerAr:
      'تختلف أسعار العود لأن المادة تأتي بأشكال مختلفة ليست منتجاً واحداً، وتُصنَّف بطرق غير موحَّدة، وتتراوح بحسب المنشأ والعمر، ويقتصر فيها العرض. والمشتري الذي يقارن لوطاً بآخر دون أن يتحقق من كونهما بنفس الشكل ونفس الدرجة ونفس المنشأ ونفس العمر، يقارن شيئَين لا يمكن المقارنة بينهما. والسجل الصناعي ضخم، وسعر اللتر الموثق مرتفع، ونطاقات التجزئة الموثقة عبر المناسِئ واسعة، وهذا أمر متعلق بالسوق وليس سعراً يُدفع اليوم.',
    sections: [
      {
        heading: 'The form changes the price entirely',
        headingAr: 'الشكل يغيّر السعر من الأساس',
        body: [
          'The first divider is the form, and the forms are not one product. Resinous wood, the essential oil distilled from that wood, and a fragrance made to smell like oud are three different materials with different uses, different handling rules and different prices. A price stated for chips does not establish a price for oil, and a price for a finished perfume does not establish a price for the wood. Before anything else is compared, the buyer names which form is being quoted, because the recorded ranges the market has reported are wide within a single form and far wider between forms.',
          'The recorded trade is large. The review of the agarwood industry estimates it at more than thirty billion dollars and gives the recorded price of a litre of oil at forty to fifty thousand dollars, which the register carries as an industry figure, not as a price to pay on a date. The recorded retail ranges by origin, from a study of the United Arab Emirates market, run from a few hundred to tens of thousands of units per kilogram for chips, and the range inside one origin is as wide as the range between origins. The spread is the price signal: it tells the buyer that no single number is the market, so every figure must be read against the form and the conditions it was stated under.',
        ],
        bodyAr: [
          'الفاصل الأول هو الشكل، والأشكال ليست منتجاً واحداً. فالخشب الراتنجي، والزيت العطري المقطّر من ذلك الخشب، والعطر المصنوع ليشتبه العود، ثلاث مواد مختلفة في الاستخدامات والتعامل والأسعار. والسعر المذكور للرقائق لا يثبّت سعراً للزيت، والسعر لعطر جاهز لا يثبّت سعراً للخشب. وقبل أي مقارنة، يسمّي المشتري الشكل المقصود في العطاء، لأن النطاقات الموثقة في السوق واسعة داخل الشكل الواحد وأوسع بين الأشكال.',
          'التجارة الموثقة كبيرة. فمراجعة صناعة العود تقدّر بنحو أكثر من ثلاثين مليار دولار، وتضع سعراً موثقاً للتر الواحد من الزيت بأربعين إلى خمسين ألف دولار، ويحمله السجل كشأن صنعي لا كسعر يُدفع في تاريخ. ونطاقات التجزئة الموثقة بحسب المنشأ، من دراسة سوق الإمارات، تمتد من مئات الوحدات إلى عشرات الآلاف لكل كيلوغرام من الرقائق، والنطاق داخل منشأ واحد واسع بقدر النطاق بين المناسِئ. وهذه الفجوة هي إشارة السعر: إنها تخبر المشتري أن رقماً واحداً ليس هو السوق، إذ يُقرأ كل رقم على الشكل والظروف التي ذُكر فيها.',
        ],
        list: [
          'Name the form first: wood, oil or finished perfume. Each is a different product.',
          'Read any figure against the conditions it was stated under, not as a market price.',
          'A wide recorded range inside one origin is the ordinary state of the market, not an error.',
        ],
        listAr: [
          'سمِّ الشكل أولاً: خشباً أم زيتاً أم عطرًا جاهزاً. كلٌّ منها منتج مختلف.',
          'اقرأ أي رقم على الظروف التي ذُكر فيها، لا على أنه سعر السوق.',
          'النطاق الموثق الواسع داخل منشأ واحد هو الحالة العادية للسوق، ليس خطأً.',
        ],
      },
      {
        heading: 'Grade, origin and age, and why they move value',
        headingAr: 'الدرجة والمنشأ والعمر، ولماذا تحرّك القيمة',
        body: [
          'Within the same form, value moves on three recorded axes. The grade axis: the register and the studies record that grade labels are set by the trade rather than by a global standard, and that the same grade from different origins may carry different value in the market, so a label is a relative claim to press against the lot, not a fixed fact about it. The origin axis: the recorded major exporting countries are a different set from the countries that re-export, and a material passed through a trade centre is not a material produced there. The age axis: the recorded practice distinguishes younger material from aged material, and the recorded study describes older oil by analogy with a wine vintage, which is a trader statement, not an established measurement that age changes quality.',
          'These three are why two lots that carry the same label can be quoted far apart: one may be higher grade, one may come from a producing record rather than a re-export record, and one may be stated older. A buyer who wants to compare prices is therefore comparing not a number but the sum of form, grade, origin and age, and the honest thing a price comparison can do is put those four under the two figures and show where the difference actually is.',
        ],
        bodyAr: [
          'داخل الشكل نفسه، تتحرك القيمة على ثلاثة محاور موثقة. محور الدرجة: السجل والدراسات تسجّل أن تسميات الدرجة يضعها سوق التداول لا معيار عالمي، وأن الدرجة نفسها من مناسِئ مختلفة قد تحمل قيمة مختلفة في السوق، فالتسمية ادعاء نسبي يضغط على اللوط، لا حقيقة ثابتة فيه. محور المنشأ: الدول المصدّرة الكبرى الموثقة تختلف عن دول إعادة التصدير، والمادة المارة بمركز تجاري ليست مادة أُنتجت فيه. محور العمر: الممارسة الموثقة تفرّق بين مادة شابة ومادة معمّرة، والدراسة الموثقة تصف الزيت العتيق على مثال نبيذ موصوم بسنة، وهذا قول مورد لا قياس موثوق بأن العمر يغيّر الجودة.',
          'هذه الثلاثة هي سبب أن لوطين يحملان التسمية نفسها يمكن أن يُقدَّما بفارق كبير في السعر: أحدهما قد يكون أرفع درجة، والآخر قد يأتي من سجل إنتاج لا من سجل إعادة تصدير، وثالث قد يُوصف بأنه أقدم. والمشتري الذي يريد مقارنة أسعار يقارن إذن لا رقماً بل مجموع الشكل والدرجة والمنشأ والعمر، والفعل الأمانة في المقارنة أن تُوضع تلك الأربعة تحت الرقمَين فيُرى أين يقع الفارق فعلًا.',
        ],
      },
      {
        heading: 'What a price comparison can and cannot do',
        headingAr: 'ما تستطيع مقارنة الأسعار أن تفعله وما لا تستطيع',
        body: [
          'A price comparison the buyer can do is put two or more offers under the same four axes and see where they differ. It cannot do is attach a fair value to a lot, because no global grading standard exists and the register states that plainly: the industry lacks a quantified grading standard, so a figure is not a threshold a grade must clear. The comparison is therefore a tool for spotting an offer that is out of line with the recorded range for its conditions, not a scale that prices the lot. And because the recorded price data the register carries is dated, the comparison is run against what a named public list states on a date, not against a market that the page is not measuring.',
        ],
        bodyAr: [
          'مقارنة أسعار يستطيع المشتري أن يجريها هي وضع عرضين أو أكثر تحت المحاور الأربعة نفسها والوقوف على أين يختلفان. وما لا يستطيع فعله هو إلصاق قيمة عادلة باللوط، إذ لا معيار تدرّج عالمي موجود، والسجل يصرّح بذلك صراحةً: الصناعة تفتقر إلى معيار تدرّج كمّي، فالرقم ليس عتبة يجب أن يجتازها مرتبة. فالمقارنة إذن أداة لالتقاط عرض خارج نطاق الظرف الموثق، لا ميزان يسعّر اللوط. ولأن البيانات السعرية الموثقة المسجلة موثّقة بالتاريخ، تجري المقارنة على ما تذكره قائمة علنية مسمّاة في تاريخ، لا على سوق لا تقيسه الصفحة.',
        ],
      },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_UAE_AGARWOOD_TRADE'],
    workedExample: {
      situation:
        'A hypothetical buyer is offered the same grade of chip from two suppliers and wants a price comparison that is not comparing two different things.',
      situationAr:
        'مشتري افتراضي يقدَّم له من موريدين درجة واحدة من الرقائق، ويريد مقارنة أسعار لا تقارن بين شيئين مختلفين.',
      steps: [
        'Fix the form: both offers are chips of resinous heartwood, not oil and not a finished perfume, so the comparison is inside one form.',
        'Fix the grade the same way both suppliers state it, and note that the same word from two houses can mean two different things, because grading is trade-set rather than standardised.',
        'Check the origin against the producing record: one lot from a producing record and one passed through a trade centre are not the same condition, and the difference is a price difference.',
        'State the date and the currency of each figure, and read both against the recorded range for that condition rather than against a single market number.',
      ],
      stepsAr: [
        'ثبّت الشكل: العرضان رقائق من قلب راتنجي، ليس زيتاً ولا عطرًا جاهزاً، فمقارنة داخل شكل واحد.',
        'ثبّت الدرجة على النحو الذي يصفها به المورّدان، مع أن الكلمة الواحدة من دارَين قد تعني شيئين مختلفين، لأن التدرّج يقرّره التداول لا معيار.',
        'افحص المنشأ على سجل الإنتاج: لوط من سجل إنتاج ولوط مارة بمركز تجاري ليسا ظرفاً واحداً، والفرق بينهما فرق سعر.',
        'بيّن التاريخ والعملة لكل رقم، واقترنهما على النطاق الموثق لذلك الظرف لا على رقم سوق واحد.',
      ],
      takeaway:
        'The example shows the comparison run on the four axes, and it leaves fair value open: the comparison can say the second offer is out of line for its stated conditions, it cannot say what the lot is worth. That is the whole reach of the tool.',
      takeawayAr:
        'يبين المثال المقارنة على المحاور الأربعة، ويبقي القيمة العادلة مفتوحة: يمكنها أن تقول إن العرض الثاني خارج النطاق لظروفه المذكورة، ولا تستطيع أن تقول ما قيمة اللوط. وهذا هو مدى الأداة كاملًا.',
    },
    limitations:
      'This page explains why oud prices differ and how to compare an offer against the recorded conditions. It does not state a current price, it does not average a market and it does not attach a threshold to a grade, because the industry has no global grading standard the register does not record. The recorded price and industry figures are dated industry records, not measurements of any lot, and the two sources record market structure and range rather than a price to pay on a date.',
    limitationsAr:
      'تشرح هذه الصفحة لماذا تختلف أسعار العود وكيف يُقارَن عرض بالظروف الموثقة. ولا تضع سعرًا حالياً، ولا تمسّط سوقاً، ولا تلصق عتبةً بدرجة، إذ لا معيار تدرّج عالمي يسجله السجل. فالأرقام السعرية والصناعية الموثقة سجلات موثّقة بالتاريخ لا قياسات لوط، والمصدران يسجّلان بنية السوق ونطاقاته لا سعرًا يُدفع في تاريخ.',
    nextSteps: [
      'Read the OudGuide price observation baseline',
      'Apply the buyer’s framework for oud oil price',
      'Check how grade labels are set by the trade',
    ],
    nextStepsAr: [
      'اقرأ خطّ الأساس لملاحظات الأسعار من دليل العود',
      'طبّق إطار المشتري لسعر زيت العود',
      'تحقّق كيف تضع التسميات درجاتها بالتداول',
    ],
    related: [
      { slug: 'quality/gulf-price-baseline', label: 'The OudGuide price observation baseline' },
      { slug: 'buying/oud-oil-price-framework', label: 'A buyer’s framework for oud oil price' },
      { slug: 'quality/gulf-market-grade-labels', label: 'Gulf-market oud grading vocabulary' },
      { slug: 'buying/evaluating-an-offer', label: 'Evaluating a questionable offer' },
    ],
  }),

  /* ----------------------------------------------------------------
     oud-basics/resin-formation
     ---------------------------------------------------------------- */
  simpleGuide({
    slug: 'oud-basics/resin-formation',
    parent: 'oud-basics',
    title: 'How resin develops in agarwood',
    titleAr: 'كيف يتكوّن الراتنج في الخشب الراتنجي',
    summary:
      'What the review of the agarwood-producing genera records about resin formation: the wound, the reported role of fungi, the compounds the resin carries, and the boundary between what is recorded and what is not.',
    summaryAr:
      'ما تسجله مراجعة أجناس الخشب الراتنجي عن تكوّن الراتنج: الجرح، والدور المسجّل للفطريات، والمركبات التي يحملها الراتنج، والحدّ بين ما يُسجَّل وما لا يُسجَّل.',
    directAnswer:
      'Agarwood is the resin-impregnated heartwood of a tree of the agarwood-producing genera that has been wounded and, in the recorded account, colonised. The review of those genera records that a set of fungal genera are reported to promote formation, and that the resin carries a recorded set of compounds of which terpenoids make up the recorded share, so the recorded picture is a wound plus a reported microbial role plus a recorded chemistry. What the register does not record is the mechanism: no source in the register gives the step-by-step process by which resin deposits, so the mechanics are stated as the reviewed account and not as an established mechanism.',
    directAnswerAr:
      'العود هو قلب شجرة من أجناس الخشب الراتنجي معالج بالراتنج بعد جرحها وإصابتها، في السجل الموثق. وتسجّل مراجعة تلك الأجناس أن مجموعة من أجناس الفطريات يُنسب إليها تعزيز التكوّن، وأن الراتنج يحمل مجموعة موثقة من المركبات منها ما يشغل التربينات نسبةً موثقة، فالصورة الموثقة هي جرح زائد، ودور ميكروبي زائد، وكيمياء موثقة. وما لا تسجله هو الآلية: لا مصدر في السجل يبيّن خطوات ترسّب الراتنج، فتُعرض الآلية بوصفها سرداً موثقاً لا آلية حاسمة.',
    sections: [
      {
        heading: 'What the review records about formation',
        headingAr: 'ما تسجله المراجعة عن التكوّن',
        body: [
          'The review of the agarwood-producing genera is the source the page rests on for the recorded picture of formation. It records that the resinous heartwood is the product of a tree that has been wounded, and it records that a set of fungal genera are reported in the literature as promoting agarwood formation, which is the reported microbial side of the process. It also records the chemistry of the resin: a recorded number of compounds are identified, and within that recorded set the terpenoids are recorded as the recorded share. The three pieces together give the buyer a picture of what formation is recorded to involve, and each of the three is a recorded statement with a source, not a step in a controlled experiment.',
          'The careful reading is that the record is of a reported association, not of a controlled demonstration. That fungi are reported to promote formation is a statement about the literature the review collected, and the page keeps it that way. The chemistry is a recorded profile of what the resin carries, and the page keeps it as a recorded profile. The point the buyer carries away is that the register gives a sourced picture of formation, and the sourcing is part of the value of that picture.',
        ],
        bodyAr: [
          'مراجعة أجناس الخشب الراتنجي هي المصدر الذي تقوم عليه الصفحة بالصورة الموثقة للتكوّن. تسجّل أن القلب الراتنجي هو نتاج شجرة جُرحت، وتسجّل أن مجموعة من أجناس الفطريات تُنسب إليها تعزيز التكوّن في ما وقفت عليه من أدبيات، وهذا هو الجانب الميكروبي المسجّل للعملية. وتسجّل كيمياء الراتنج كذلك: مجموعة من المركبات تحدّد، ومن بين تلك المجموعة يُسجَّل أن التربينات تشغل النسبة المذكورة. والقطع الثلاث معاً تعطي المشتري صورة لما يتضمنه التكوّن موثقاً، وكلٌّ منها قولة موثقة بمصدر، لا خطوة في تجربة مُتحكم فيها.',
          'القراءة الدقيقة أن السجل يوثق علاقة مُنسوبة، لا إثباتاً مُتحكماً. أن فطريات يُنسب إليها تعزيز التكوّن قول عن أدبيات وقفت عليها المراجعة، والباقي على حاله. والكيمياء رسم موثق لما يحمله الراتنج، والباقي كذلك. وما يأخذه المشتري هو أن السجل يقدّم صورة موثقة للتكوّن، وأن التوثيق جزء من قيمة تلك الصورة.',
        ],
      },
      {
        heading: 'The boundary between recorded and not recorded',
        headingAr: 'حدّ المسجّل وغير المسجّل',
        body: [
          'The page draws the boundary plainly, because the question asked is a mechanism question and the register does not carry the mechanism. The review reports the association and records the chemistry, but it does not give the step-by-step process by which a wound becomes resinous heartwood, and no other source in the register does. So the page states what is recorded and marks the rest. This is the editorial rule: a claim is sourced or it is a limitation, and the two are not mixed. The buyer is given the sourced picture of formation and is told, at the same time, that the mechanism itself is not established by the register. The honest reading of the register is that it documents the recorded picture rather than a controlled process, and the page says exactly that.',
        ],
        bodyAr: [
          'ترسم الصفحة الحدّ بوضوح، لأن السؤال طُرح عن آلية والسجل لا يحملها. فالمراجعة تنقل العلاقة وتوثّق الكيمياء، لكنها لا تُعطي خطوات تحويل الجرح قلباً راتنجياً، ولا مصدر آخر في السجل يفعل. فتضع الصفحة ما هو موثق وتوسم الباقي. وهذا هو القانون التحريري: كل ادعاء إمّا موثّق وإمّا قيد، ولا يُمزج بين الأمرين. فيُعطى المشتري الصورة الموثقة للتكوّن ويُخبر في الوقت نفسه أن الآلية نفسها غير قائمة في السجل. والقراءة النزيهة للسجل أنه يوثق الصورة الموثقة لا عملية مُتحكماً، والباقي يقول ذلك بالضبط.',
        ],
      },
      {
        heading: 'What this means for the material you hold',
        headingAr: 'ما يعني ذلك للمادة بين يديك',
        body: [
          'The recorded picture of formation does not let a buyer date a lot, grade it or authenticate it, because the recorded chemistry is a profile and the recorded association is reported rather than demonstrated. The resin is recorded to carry a recorded set of compounds, and two lots can share that recorded profile and differ on everything the profile does not capture, such as age, origin and the quality of the wood itself. So the formation record sets the material context for what the buyer is looking at, and the grading and authentication questions are answered by their own channels, the documented grade and the permit and handling record, not by the formation account. The page keeps the recorded formation picture separate from the claims it does not establish, so a buyer who reaches the page looking for a mechanism is told clearly which part of the question the register does answer.',
        ],
        bodyAr: [
          'الصورة الموثقة للتكوّن لا تدع المشتري يوقّت اللوط ولا يدرجه ولا يوثّقه، لأن الكيمياء الموثقة رسم وعلاقة موثقة لا إثبات. فالراتنج مسجّل أنه يحمل مجموعة من المركبات، ولوطان يمكن أن يشتركا في ذلك الرسم الموثق وفيختلفا في كل ما لا يلتقطه الرسم، كالعمر والمنشأ وجودة الخشب نفسه. لذا فإن سجل التكوّن يقدّم السياق المادي لما ينظر إليه المشتري، وأسئلة التدرّج والوثاقة تُجاب في قنواتها: الدرجة الموثقة، وسجل التصريح والتعامل، لا بالحساب المسجّل عن التكوّن. فتهامش التكوين الموثقة منفصلة عن الادعاءات التي لا تثبّتها، ومن وصل للصفحة يطلب آلية يخبَر بوضوح أيّ جزء من سؤاله يجيب عليه السجل.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
    workedExample: {
      situation:
        'A hypothetical buyer is told that a lot has “a strong resin profile” and wants to know what the recorded account of formation actually says about that claim.',
      situationAr:
        'مشتري افتراضي يخبره بأن لوطاً «يحمل راتينجاً قوياً»، ويريد أن يعرف ما يقوله السجل الموثق عن التكوّن فعلاً عن هذا الادعاء.',
      steps: [
        'Read the recorded account: the review reports the fungal association and records the compound profile, and a strong profile is consistent with that record but is not the record’s proof of quality.',
        'Note the mechanism is not in the register: the page does not give the step-by-step process, so “how it formed” is a question the account does not answer.',
        'Note the profile does not date or grade the lot: two lots share the recorded chemistry and differ on age and origin, which the profile does not capture.',
        'Conclude that the resin-profile claim is a chemistry statement and that the lot’s age, origin and grade remain open to their own channels.',
      ],
      stepsAr: [
        'اقرأ السجل الموثق: المراجعة تنقل العلاقة الفطرية وتوثق الرسم الكيميائي، فالرسم القوي متوافق مع السجل لكنه ليس دليل جودة من السجل.',
        'لاحظ أن الآلية غير موجودة في السجل: الصفحة لا تُعطي خطوات، لذا “كيف تكوّن” سؤال لا يجيب عليه السجل.',
        'لاحظ أن الرسم لا يوقّت اللوط ولا يدرجه: لوطان يشتركان في الكيمياء الموثقة ويختلفان على العمر والمنشأ، وهو ما لا يلتقطه الرسم.',
        'استنتج أن ادعاء الراتنج قولة كيمياء، وأن عمر اللوط ومنشؤه ودرجته تبقى في قنواتها الخاصة.',
      ],
      takeaway:
        'The example shows the recorded formation account read as a chemistry profile with a reported association: it supports a chemistry claim and leaves mechanism, age, origin and grade open. It is a tool for reading the material, not a certificate of it.',
      takeawayAr:
        'يبين المثال قراءة سجل التكوّن الموثق بوصفه رسماً كيميائياً وعلاقة مسجلة: يدعم ادعاء كيمياء ويبقي الآلية والعمر والمنشأ والدرجة مفتوحة. فهو أداة لقراءة المادة، لا شهادة عليها.',
    },
    limitations:
      'This page reports what the review of the agarwood-producing genera records about resin formation and about the resin’s chemistry. It does not establish the mechanism by which resin deposits, it does not date, grade or authenticate any lot, and it does not measure the resin content of any material. The recorded association is a report from the literature the review collected, and the recorded compound profile is a profile, not a measurement. No source in the register closes the gap between the recorded picture and a controlled account of how a wound becomes resinous heartwood.',
    limitationsAr:
      'تعرض هذه الصفحة ما تسجله مراجعة أجناس الخشب الراتنجي عن تكوّن الراتنج وعن كيميائه. ولا تثبّت آلية ترسّب الراتنج، ولا توقّت لوطاً ولا تدرجه ولا توثّقه، ولا تقيس محتوى راتنج أي مادة. فالعلاقة المسجلة نقل من أدبيات وقفت عليها المراجعة، والرسم الكيميائي المسجل رسم لا قياس. ولا مصدر في السجل يغلق الفجوة بين الصورة الموثقة وحساب مُتحكماً عن كيف يصبح الجرح قلباً راتنجياً.',
    nextSteps: [
      'Learn what the word agarwood covers',
      'Read the limit of what testing and documentation establish',
      'Check how the material is graded before a figure is attached',
    ],
    nextStepsAr: [
      'اعرف ما يغطيه اسم العود',
      'اقرأ حدّ ما تثبته الاختبارات والمستندات',
      'تحقّق من تدرّج المادة قبل إلصاق رقم بها',
    ],
    related: [
      { slug: 'oud-basics/what-is-agarwood', label: 'Agarwood: names, material and uses' },
      { slug: 'quality/assessment-and-testing-limits', label: 'The limit of what testing and documentation establish' },
      { slug: 'quality/reading-an-oud-lab-report', label: 'How to read an oud lab or GC-MS report' },
      { slug: 'oud-basics/which-species-makes-oud', label: 'Which species makes oud' },
    ],
  }),
];
