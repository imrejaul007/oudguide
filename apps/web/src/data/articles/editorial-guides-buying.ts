import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

/**
 * Editorial guides: the buying block.
 *
 * A buying page is where the buyer meets the material, and the register
 * documents the market and the material, not a fixed price or a verified
 * supplier. Each page states the documented record it rests on, and
 * keeps every claim it does not carry marked as a limitation, so a buyer
 * is not handed a figure the record does not support.
 */

export const editorialGuideBuying: Article[] = [
  /* ---------------------------------------------------------------
     buying/oud-price-comparison
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'buying/oud-price-comparison',
    parent: 'buying',
    title: 'A framework for comparing oud prices',
    titleAr: 'إطار للمقارنة بين أسعار العود',
    summary:
      'What a price comparison can honestly do: put the form, the grade, the origin and the age under two figures and show where the difference actually is, and what it cannot do: state a market price.',
    summaryAr:
      'ما تستطيع مقارنة السعر أن تفعله بصدق: أن تضع الشكل والدرجة والمنشأ والعمر تحت رقميْن وتبيّن أين تقع الفروق فعلا، وما لا تستطيعه: أن تثبّت سعرا للسوق.',
    directAnswer:
      'A price comparison is a comparison of conditions, not of a number, because the record does not carry a market price a buyer pays on a date. The record the register carries is a trade record: it states the recorded price of a litre of oil at a recorded figure and the recorded retail ranges across origins and forms, which are wide within one origin and wider between them, and the review of the producing genera states the recorded industry size. What a comparison can do is put the four conditions the record does carry under two figures: the form, the grade, the origin and the age, and show where the difference between two offers actually sits. What it cannot do is close the comparison with a figure, because no source in the register prices the material on a date, and a comparison that ends in a number ends in a claim the record does not carry.',
    directAnswerAr:
      'مقارنة السعر مقارنة ظروف، لا مقارنة رقم، لأن السجل لا يحمل سعرا للسوق يدفعه المشتري في تاريخ. والسجل الذي يحمله الدفتر سجل تجاري: يقرر الرقم المسجل لتر الزيت على سعر مسجل، والنطاقات المسجلة للتجزئة عبر المناسخ والأشكال، وهي واسعة داخل منشأ واحد وأوسع بينهما، ومراجعة الأجناس المنتجة تقرّر حجم الصناعة المسجل. وما تستطيع المقارنة فعله هو وضع الظروف الأربعة التي يحملها السجل تحت رقماً: الشكل والدرجة والمنشأ والعمر، وتبيّن أين تقع الفروق بين عرضين فعلا. وما لا تستطيع فعله هو إنهاء المقارنة برقم، لأنه لا مصدر في السجل يسعر المادة بتاريخ، والمقارنة التي تنتهي برقم تنتهي بادعاء لا يحمله السجل.',
    sections: [
      {
        heading: 'What the record carries',
        headingAr: 'ما يحمله السجل',
        body: [
          'The record the comparison rests on is a trade record, and it carries two statements the comparison can use. The first is the price statement: the market study records a price for the oil and the recorded retail ranges across the origins and forms, and the ranges are wide within an origin and wider between origins, which is the recorded fact that there is no single market figure the comparison can close with. The second is the scale statement: the review of the producing genera records the size of the industry, which is a recorded size, not a recorded price, and the two together say the market is large and the figures move wide. That is the ground the comparison stands on, and every figure the comparison shows is shown against that ground, not as a price a buyer pays.',
        ],
        bodyAr: [
          'السجل الذي تقوم عليه المقارنة سجل تجاري، ويحمل عبارتين تستطيع المقارنة استعماهما. الأولى عبارة السعر: دراسة السوق تسجل سعر الزيت والنطاقات المسجلة للتجزئة عبر المناسخ والأشكال، والنطاقات واسعة داخل المنشأ وأوسع عبر المناسخ، وهذا هو الواقع المسجل أنه لا رقم سوق واحد تُغلق به المقارنة. والثانية عبارة الحجم: مراجعة الأجناس المنتجة تسجل حجم الصناعة، وهو حجم مسجل لا سعر مسجل، وكلاهما معاً يقول إن السوق ضخم والأرقام تتحرك واسعة. وهذا هو الأساس الذي تقف عليه المقارنة، وكل رقم تعرضه المقارنة يُبلى على ذلك الأساس، لا كسعر يدفعه المشتري.',
        ],
      },
      {
        heading: 'The four conditions under a figure',
        headingAr: 'الظروف الأربعة تحت رقم',
        body: [
          'The comparison works by putting four conditions under the figure, and the conditions are the record’s, not the seller’s. The form condition: the record carries wood, chips, oil, a formulation and a finished fragrance, each a different product, so two figures are only comparable when they are figures for the same form. The grade condition: the record carries grade labels set by the trade rather than by a published standard, so two figures are comparable when the grade is the same and the origin is the same. The origin condition: the record carries a set of producing origins and a set of destination markets, and a material that moves through a trade centre is not a material that is produced there. The age condition: the record distinguishes a younger material from an aged one, and the recorded statement is that older material is stated as such, which is a statement, not a measurement. Four conditions, and the comparison shows where two figures sit against the four, and that showing is the whole of what the comparison does.',
        ],
        bodyAr: [
          'تسوق المقارنة بوضع أربعة ظروف تحت الرقم، والظروف للسجل لا للبائع. ظرف الشكل: السجل يحمل خشبا وراقائق وزيتا وصياغة وعطرا منتهيا، كل منتج مختلف، ورقما قابلان للمقارنة فقط حين يكونان رقمين لنفس الشكل. ظرف الدرجة: السجل يحمل وسوما لدرجات تضعها التجارة لا قياسية منشورة، ورقما قابلان للمقارنة حين تكون الدرجة نفسها والمنشأ نفسه. ظرف المنشأ: السجل يحمل مجموعة مناسخ إنتاج ومجموعة أسواق استقبال، والمادة التي تمر من مركز تجاري ليست مادة تُنتج هناك. ظرف العمر: السجل يفرق مادة شابة من معتقة، والعبارة المسجلة أن المادة المعتقة تُسمَّى كذلك، وهي عبارة لا قياس. أربع ظروف، والمقارنة تبيّن أين يرقم رقمان ضدا على الأربعة، وهذا التبيّن هو كل ما تفعله المقارنة.',
        ],
      },
      {
        heading: 'Where the comparison stops',
        headingAr: 'أين تتوقف المقارنة',
        body: [
          'The comparison stops where the record stops, and the record stops at a figure a buyer pays on a date. The record gives a recorded price for the oil and a wide range for the retail, and the two are the record’s statements, not the price the buyer pays today. A comparison that ends in a number is a comparison that ends in a claim the record does not carry, and the page will not end in a number, because ending in a number is the move the record does not support. The buyer’s position is to compare the two figures against the four conditions, to see where the difference actually is, and to be told plainly that a figure on a date is the seller’s figure, not the record’s, and the comparison is the showing of the four conditions under the two figures, not the closing of the two figures into one. That showing is the framework, and the framework is what the page carries.',
        ],
        bodyAr: [
          'تتوقف المقارنة حيث يتوقف السجل، والسجل يتوقف عند رقم يدفعه المشتري في تاريخ. والسجل يعطي رقما مسجلا للزيت ونطاقا واسعا للتجزئة، وكلاهما عبارتا السجل، ليس السعر الذي يدفعه المشتري اليوم. ومقارنة تنتهي برقم مقارنة تنتهي بادعاء لا يحمله السجل، ولن تكون الصفحة تنتهي برقم، لأن النهاية برقم هي الحركة التي لا يدعمها السجل. وموضع المشتري أن يقارن الرقمين على الظروف الأربعة، ويرى أين تقع الفروق فعلا، وأن يُقال له بوضوح أن رقبا بتاريخ هو رقم البائع، ليس رقم السجل، والمقارنة هي تبيّن الظروف الأربعة تحت الرقمين، ليس إقفال الرقمين في واحد. وهذا التبيّن هو الإطار، والإطار هو ما تحمله الصفحة.',
        ],
        list: [
          'Compare two figures only when they are figures for the same form, the same grade, the same origin and the same age.',
          'Read the wide range as the recorded fact that there is no single market figure to close a comparison with.',
          'Treat a figure on a date as the seller’s figure, not the record’s.',
        ],
        listAr: [
          'قارن رقماً فقط حين يكونان رقمين لنفس الشكل ونفس الدرجة ونفس المنشأ ونفس العمر.',
          'وتقرأ النطاق الواسع واقعا مسجلا أنه لا رقم سوق واحد يُغلق به مقارنة.',
          'واعمل رقبا بتاريخ رقم البائع، لا رقم السجل.',
        ],
      },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_UAE_AGARWOOD_TRADE'],
    workedExample: {
      situation:
        'A hypothetical buyer holds two figures for two lots of resinous wood and wants to know whether the two are comparable.',
      situationAr:
        'قَيَّم المشتري الافتراضي رقماً عن لوطين من الخشب الراتنجي، ويريد أن يعرف إن كان الرقمان قابلين للمقارنة.',
      steps: [
        'Check the form: are the two figures for the same form, or is one for wood and one for oil.',
        'Check the grade: is the grade the same on both lots, or does one carry a name the other does not.',
        'Check the origin: is the origin the same on both, or does one come from a producing region and one from a trade centre.',
        'Check the age: is the age stated the same on both, and if one is stated older, the two are not comparable on the age condition.',
      ],
      stepsAr: [
        'افحص الشكل: هل الرقمان لنفس الشكل، أم واحد للخشب وآخر للزيت.',
        'وافحص الدرجة: هل الدرجة نفسها على اللوطَين، أم أحدهما يحمل اسم الآخر لا يحمل.',
        'وافحص المنشأ: هل المنشأ نفسه على الاثنين، أم واحد من منطقة إنتاج وآخر من مركز تجاري.',
        'وافحص العمر: هل العمر المعلن نفسه على الاثنين، وإن كان أحدهما معتقّا، فالثنيان غير قابلين للمقارنة على ظرف العمر.',
      ],
      takeaway:
        'The example shows the comparison put the four conditions under the two figures: the two are comparable only on the conditions they share, and on the conditions they do not share the comparison does not close. That is the framework working: a showing of the four conditions, not a figure the record does not carry.',
      takeawayAr:
      'يبيّن المثال أن المقارنة وضعت الظروف الأربعة تحت الرقمين: الاثنان قابلان للمقارنة على الظروف المشتركة فقط، وعلى الظروف غير المشتركة المقارنة لا تقفل. وهذا هو الإطار يعمل: تبيّن لظروف أربعة، لا رقم لا يحمله السجل.',
    },
    limitations:
      'This page compares two figures against the four conditions the record carries: the form, the grade, the origin and the age. It does not state a market price a buyer pays on a date, and it does not close a comparison in a figure, because no source in the register does.',
      limitationsAr:
      'تقوم هذه الصفحة بمقارنة رقمين على الظروف الأربعة التي يحملها السجل: الشكل والدرجة والمنشأ والعمر. ولا تقرّر سعرا سوقيا يدفعه المشتري بتاريخ، ولا تقفل مقارنة برقم، لأنه لا مصدر في السجل يفعل ذلك.',
    nextSteps: [
      'Read the page on why oud prices differ',
      'Read the price observation baseline for the recorded ranges',
      'Read the page on how the market sets grade labels',
    ],
    nextStepsAr: [
      'اقرأ صفحة لماذا تختلف أسعار العود',
      'اقرأ خط الأساس لملاحظات السعر عن النطاقات المسجلة',
      'اقرأ صفحة كيف تضع السوق وسوما لدرجاتها',
    ],
    related: [
      { slug: 'oud-basics/why-oud-is-expensive', label: 'Why prices differ' },
      { slug: 'quality/gulf-price-baseline', label: 'The recorded price baseline' },
      { slug: 'quality/gulf-market-grade-labels', label: 'How the market sets grade labels' },
      { slug: 'buying/oud-oil-price-framework', label: 'A buyer’s framework for the oil price' },
    ],
  }),

  /* ---------------------------------------------------------------
     buying/assessing-suppliers
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'buying/assessing-suppliers',
    parent: 'buying',
    title: 'Assessing supplier information',
    titleAr: 'تقييم معلومات الموردين',
    summary:
      'What a buyer can honestly assess about a supplier’s information: what the record supports as a check, and what it does not, and why a supplier’s claim is a claim until it is checked against the record.',
    summaryAr:
      'ما يستطيع المشتري تقييمه بصدق عن معلومات المورّد: ما يدعمه السجل كشك، وما لا يدعمه، ولماذا ادعاء المورّد ادعاء حتى يمحص ضده السجل.',
    directAnswer:
      'A supplier’s information is a statement the supplier makes, and the page’s whole job is to say what the record supports as a check on that statement and what it does not. The record the register carries is a market record: the market study documents the import and re-export structure, the recorded major exporting countries and the recorded destination markets, which is the trade side of the supplier’s lane. The review of the producing genera documents the producing record, which is the producing side. What the record does not carry is a supplier’s own claim: a claim of quality, a claim of origin, a claim of a price, and each is a seller’s statement until the lot and the documents show otherwise. The buyer’s move is to check the supplier’s information against the record: does the claim fit the market the record describes, does it fit the producing region the record names, and does the lot and the documents close the gap the claim opens.',
    directAnswerAr:
      'معلومات المورّد عبارة يصدرها المورّد، وكل مهمة الصفحة أن تقول ما يدعمه السجل كشك على تلك العبارة وما لا يدعمه. والسجل الذي يحمله الدفتر سجل سوق: دراسة السوق توثّق هيكل الاستيراد وإعادة التصدير، وبلد التصدير الرئيسي المسجل وأسواق الوجهة المسجلة، وهذا هو الجانب التجاري من حومة المورّد. ومراجعة الأجناس المنتجة توثّق سجل الإنتاج، وهذا هو جانب الإنتاج. وما لا يحمله السجل هو ادعاء المورّد نفسه: ادعاء جودة، ادعاء منشأ، ادعاء سعر، وكلها عبارة بائع حتى يبره اللوط والمستندات غير ذلك. وحركة المشتري أن يمحص معلومات المورّد ضدا على السجل: هل الادعاء يلائم السوق الذي يوصفه السجل، وهل يلائم منطقة الإنتاج التي يسميها السجل، وهل يغلق اللوط والمستندات الفجوة التي فتحها الادعاء.',
    sections: [
      {
        heading: 'What the record supports as a check',
        headingAr: 'ما يدعمه السجل كشك',
        body: [
          'The record supports a check on the supplier’s information, and the check is the record’s own: does the claim fit the market the record describes and the producing region the record names. The market study documents the import and re-export structure, and the check on a supplier’s claim is whether the claim fits that structure: a supplier who claims a re-export through the recorded trade centre is stating a claim that fits the record, and a supplier who claims a producing region the record does not name is stating a claim the record does not carry. The review of the producing genera documents the producing record, and the check on a supplier’s producing claim is whether the producing region the supplier names is a region the record names. The check is the record’s, and it is what the record supports, not the supplier’s word.',
        ],
        bodyAr: [
          'السجل يدعم شك على معلومات المورّد، والشك هو الخاص بالسجل: هل الادعاء يلائم السوق الذي يوصفه السجل ومنطقة الإنتاج التي يسميها السجل. فدراسة السوق توثق هيكل الاستيراد وإعادة التصدير، وشك ادعاء المورّد هو هل الادعاء يلائم ذلك الهيكل: فمورّد يدّعي إعادة تصدير عبر مركز تجاري مسجل يصرح بادعاء يلائم السجل، ومورّد يدّعي منطقة إنتاج لا يسميها السجل يصرح بادعاء لا يحمله السجل. ومراجعة الأجناس المنتجة توثق سجل الإنتاج، وشك ادعاء الإنتاج عند المورّد هو هل منطقة الإنتاج التي يسميها المورّد هي منطقة يسميها السجل. والشك الخاص بالسجل، وهو ما يدعمه، لا كلمة المورّد.',
        ],
      },
      {
        heading: 'What the record does not carry',
        headingAr: 'ما لا يحمله السجل',
        body: [
          'The record does not carry the supplier’s own claim, and the page states that plainly. The supplier’s claim of quality is not a fact the lot carries, the supplier’s claim of origin is not a fact the lot carries, and the supplier’s claim of a price is not a fact the market carries on a date. Each is a statement, and each opens a check: the quality claim opens the check on the lot and the documents, the origin claim opens the check on the producing region the record names and the lot that comes from it, and the price claim opens the check on the recorded ranges and the conditions under which the figure was stated. The buyer’s move is to treat each claim as the supplier’s word and to check the word against the lot, the documents and the record, and the check is what the page carries, not the claim itself.',
        ],
        bodyAr: [
          'السجل لا يحمل ادعاء المورّد نفسه، والصفحة تقول ذلك بوضوح. فادعاء المورّد في الجودة ليس حقيقة يحمله اللوط، وادعاؤه في المنشأ ليس حقيقة يحمله اللوط، وادعاؤه في السعر ليس حقيقة يحمله السوق بتاريخ. وكلها عبارة، وكلها تفتح شكاً: ادعاء الجودة يفتح شك اللوط والمستندات، وادعاء المنشأ يفتح شك منطقة الإنتاج التي يسميها السجل واللوط الآتي منها، وادعاء السعر يفتح شك النطاقات المسجلة والظروف التي قيل فيها الرقم. وحركة المشتري أن يعامل كل ادعاء كلمة المورّد ويمحص الكلمة ضدا على اللوط والمستندات والسجل، والشك هو ما تحمله الصفحة، لا الادعاء نفسه.',
        ],
      },
      {
        heading: 'How a buyer assesses a supplier’s information',
        headingAr: 'كيف يقيّم المشتري معلومات المورّد',
        body: [
          'The assessment is ordered, and the order is the check. The supplier’s information is read as a set of claims, and each claim is checked against the lot, the documents and the record the claim names. A claim that holds on all three is a claim the buyer can rely on as the supplier’s statement, and a claim that does not hold is a claim the buyer reads as the supplier’s word only, with no establishment behind it. The page carries this order as a checklist, and the related pages carry the specific checks: the documentation page for what the lot’s documents can and cannot establish, the market page for the recorded ranges and the conditions, and the claim page for the order of the checks themselves. The assessment is the checking of the supplier’s words against the record, and the record is the page’s own, not the supplier’s.',
        ],
        bodyAr: [
          'التقييم مرتب والترتيب هو الشك. فمعلومات المورّد تقرأ مجموعة ادعاءات، وكل ادعاء يمحص ضدا على اللوط والمستندات والسجل الذي يسميه الادعاء. فادعاء يصمد على الثلاثة كلهم ادعاء يعتمد عليه المشتري عبارة المورّد، وادعاء لا يصمد ادعاء يقرؤه المشتري كلمة المورّد فقط، بلا إثبات خلفه. والصفحة تحمل هذا الترتيب قائمة فحص، وصفحات الارتباط تحمل الفحوص الخاصة: صفحة التوثيق لما تستطيع مستندات اللوط إثباته وما لا تستطيعه، وصفحة السوق للنطاقات المسجلة والظروف، وصفحة الادعاء لترتيب الفحوص نفسها. والتقييم هو محاصلة أفعال المورّد ضد السجل، والسجل هو الخاص بالصفحة، ليس الخاص بالمورّد.',
        ],
        list: [
          'Read the supplier’s information as a set of claims, and check each claim against the lot, the documents and the record.',
          'A claim that holds on all three is the supplier’s statement, and a claim that does not hold is the supplier’s word only.',
          'Keep the supplier’s words and the record separate: the words are the supplier’s, the record is the page’s.',
        ],
        listAr: [
          'اقرأ معلومات المورّد مجموعة ادعاءات، وامحص كل ادعاء ضدا على اللوط والمستندات والسجل.',
          'ادعاء يصمد على الثلاثة كلهم عبارة المورّد، وادعاء لا يصمد كلمة المورّد فقط.',
          'وأبقِ أفعال المورّد والسجل منفصلين: الأفعال للمورّد والسجل للصفحة.',
        ],
      },
    ],
    sourceIds: ['TRAFFIC_UAE_AGARWOOD_TRADE', 'AGARWOOD_REVIEW_2014'],
    workedExample: {
      situation:
        'A hypothetical supplier claims a lot is from a producing region and carries a grade label, and the buyer wants to know what the claim is worth on the record.',
      situationAr:
        'ادّعى مورّد افتراضي أن لوطا من منطقة إنتاج ويحمل وسم درجة، ويريد المشتري أن يعرف وزن الادعاء على السجل.',
      steps: [
        'Check the producing claim: is the producing region the supplier names a region the record names, or is it a region the record does not name.',
        'Check the grade claim: is the grade label a label the market record carries, or is it a label no record carries.',
        'Check the lot: does the lot and the documents hold against the two claims, or do the two claims outrun the lot.',
        'Report: the producing and the grade are the supplier’s words until the lot and the documents close the gap they open.',
      ],
      stepsAr: [
        'افحص ادعاء الإنتاج: هل منطقة الإنتاج التي يسميها المورّد هي منطقة يسميها السجل، أم منطقة لا يسميها السجل.',
        'وافحص ادعاء الدرجة: هل وسم الدرجة هو وسم يحمله سجل السوق، أم وسم لا يحمله سجل.',
        'وافحص اللوط: هل يصمد اللوط والمستندات أمام الادعاءين، أم يتقدم الادعاءان على اللوط.',
        'وقيل: الإنتاج والدرجة كلمة المورّد حتى يغلق اللوط والمستندات الفجوة التي يفتحانها.',
      ],
      takeaway:
        'The example shows the assessment read on the record: the producing and the grade are the supplier’s words, and the check is the lot and the documents, not the supplier’s statement. A buyer who checks the words against the record is not refusing the supplier, they are reading the supplier’s words for what they are.',
      takeawayAr:
      'يبيّن المثال التقييم مقروئا على السجل: الإنتاج والدرجة كلمة المورّد، والشك هو اللوط والمستندات، ليس عبارة المورّد. والمشتري الذي يمحص الكلمة ضد السجل لا يرفض المورّد، بل يقرأ كلمة المورّد على ما هي عليه.',
    },
    limitations:
      'This page states what a supplier’s information is and the checks the record supports on it. It does not establish the quality, the origin or the price of any lot, and it does not verify any supplier’s claim: the record the register carries is the record of the market and the producing geography, not the record of any supplier’s lot.',
      limitationsAr:
      'تقرر هذه الصفحة ما هي معلومات المورّد والفحوصات التي يدعمها السجل عليها. ولا تثبت الجودة أو المنشأ أو السعر لوط، ولا تعزز ادعاء أي مورّد: فالسجل الذي يحمله الدفتر هو سجل السوق والجغرافيا الإنتاجية، ليس سجل لوط أي مورّد.',
    nextSteps: [
      'Read the page on what lot documentation can and cannot establish',
      'Read the page on evaluating a questionable offer',
      'Read the page on the market’s recorded structure',
    ],
    nextStepsAr: [
      'اقرأ صفحة ماذا يستطيع توثيق اللوط إثباته وما لا يستطيع',
      'اقرأ صفحة تقييم عرض مشكوك فيه',
      'اقرأ صفحة هيكل السوق المسجل',
    ],
    related: [
      { slug: 'buying/evaluating-an-offer', label: 'Evaluating a questionable offer' },
      { slug: 'sourcing/business-evidence-checklist', label: 'The evidence check' },
      { slug: 'sourcing/reading-a-quotation', label: 'Reading a quotation' },
      { slug: 'quality/assessment-and-testing-limits', label: 'What testing can and cannot establish' },
    ],
  }),

  /* ---------------------------------------------------------------
     buying/online-and-in-person
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'buying/online-and-in-person',
    parent: 'buying',
    title: 'Online versus in-person buying',
    titleAr: 'الشراء عبر الإنترنت مقابل الشراء حضوريا',
    summary:
      'What the record says about buying online against in person: the forms the market carries in each lane, and the check the buyer must do in either lane rather than assuming the lane carries a guarantee.',
    summaryAr:
      'ما يقوله السجل عن الشراء عبر الإنترنت مقابل الشراء الحضوري: الأشكال التي يحملها السوق في كل حومة، والشك الذي يجب على المشتري أن يفعله في الحومتين بدل أن يفترض أن الحومة تحمل ضمانة.',
    directAnswer:
      'The record does not rank one lane against the other, and the page does not pretend to. The market study documents the market’s recorded structure: the import and re-export side, the recorded major exporting countries, and the recorded destination markets, which is the market that carries the material in both lanes. The earlier trade study adds the recorded history of the market, which is the side of the record that says the material has moved through the market for a recorded span. What the record does not carry is a statement that one lane is safer, more reliable or more trustworthy than the other: no source in the register measures one lane against the other on safety or trust. The comparison is therefore a comparison of what each lane carries on the record: the forms the market carries in each lane, and the check the buyer must do in each lane, and the page states that check rather than assuming one lane carries a guarantee the record does not give.',
    directAnswerAr:
      'السجل لا يرتب حومة ضد الأخرى، والصفحة لا تتظاهر بذلك. فدراسة السوق توثّق الهيكل المسجل للسوق: جانب الاستيراد وإعادة التصدير، وبلد التصدير الرئيسي المسجل، وأسواق الوجهة المسجلة، وهذا هو السوق الذي يحمل المادة في الحومتين. ودراسة التجارة الأقدم تضيف التاريخ المسجل للسوق، وهذا هو جانب السجل الذي يقول إن المادة عبرت السوق منذ مدّة مسجلة. وما لا يحمله السجل هو عبارة أن حومة أأمن أو أوثق أو أصدق من الأخرى: لا مصدر في السجل يقيس حومة على الأخرى في السلامة أو الثقة. فالمقارنة إذن مقارنة ما تحمل كل حومة على السجل: الأشكال التي يحملها السوق في كل حومة، والشك الذي يجب على المشتري أن يفعله في كل حومة، والصفحة تقول ذلك الشك بدل أن تفترض أن حومة تحمل ضمانة لا يعطيها السجل.',
    sections: [
      {
        heading: 'What each lane carries on the record',
        headingAr: 'ما تحمل كل حومة على السجل',
        body: [
          'The two lanes are different in what they carry, and the record carries both. The in-person lane is the lane the market study documents: the recorded retail structure, the recorded importing and re-exporting positions, and the recorded forms the market carries in the in-person setting, which is the recorded form of the material as it meets the buyer in the market. The online lane is the lane the material moves in as a form of record, and the record carries the forms the material moves in: the same material, the same forms, the same recorded prices and ranges, moving in a lane that the record describes as a form of market rather than a form of guarantee. The two lanes are therefore the two forms the market carries, and the comparison of the two is the comparison of the two forms, which is the whole of what the record carries on the two against one another.',
        ],
        bodyAr: [
          'الحومتان مختلفتان في ما تحملان، والسجل يحمل كلتاهما. حومة الحضور هي الحومة التي توثقها دراسة السوق: هيكل التجزئة المسجل، ومراكز الاستيراد وإعادة التصدير المسجلة، والأشكال المسجلة التي يحملها السوق في بيئة الحضور، وهذا هو الشكل المسجل للمادة كما تلتقي المشتري في السوق. وحومة الإنترنت هي الحومة التي تسير فيها المادة شكلا للسجل، والسجل يحمل الأشكال التي تسير فيها المادة: نفس المادة، نفس الأشكال، نفس الأسعار والنطاقات المسجلة، تسير في حومة يصفها السجل شكلا للسوق، ليس شكلا للضمانة. فالالحومتان هما الشكلان اللذان يحملهما السوق، ومقارنة الاثنين هي مقارنة الشكلين، وهذا هو كل ما يحمله السجل في أحدهما ضد الآخر.',
        ],
      },
      {
        heading: 'The check in either lane',
        headingAr: 'الشك في أي حومة',
        body: [
          'The check is the same in either lane, and the check is the record’s own: does the claim fit the market the record describes and the producing region the record names. In the in-person lane, the check is the check on the lot and the documents in the market the record describes: the lot against the claim, the documents against the claim, and the claim against the record. In the online lane, the check is the check on the lot and the documents as they move in the lane the record describes: the lot against the claim, the documents against the claim, and the claim against the record. The two checks are the same check, and the check is what the record supports, not the lane’s guarantee. A buyer who does the check in either lane is doing the check the record supports, and a buyer who assumes the lane carries a guarantee is assuming what the record does not give.',
        ],
        bodyAr: [
          'الشك هو نفس الشك في أي حومة، والشك هو الخاص بالسجل: هل الادعاء يلائم السوق الذي يوصفه السجل ومنطقة الإنتاج التي يسميها السجل. وفي حومة الحضور الشك هو الشك على اللوط والمستندات في السوق الذي يصفه السجل: اللوط ضدا على الادعاء، والمستندات ضدا على الادعاء، والادعاء ضدا على السجل. وفي حومة الإنترنت الشك هو الشك على اللوط والمستندات كما تسير في الحومة التي يصفها السجل: اللوط ضدا على الادعاء، والمستندات ضدا على الادعاء، والادعاء ضدا على السجل. فشكان هما شك واحد، والشك هو ما يدعمه السجل، ليس ضمانة الحومة. ومشتري يفحص الشك في أي حومة يفعل الشك الذي يدعمه السجل، ومشتري يفترض أن الحومة تحمل ضمانة يفترض ما لا يعطيه السجل.',
        ],
      },
      {
        heading: 'Where the lane does not carry a guarantee',
        headingAr: 'ألا تحمل الحومة ضمانة',
        body: [
          'The lane does not carry a guarantee the record does not give, and the page states that plainly. The record describes the market and the forms the market carries, and the record does not describe one lane as safer, more reliable or more trustworthy than the other, because no source in the register measures one against the other on safety or trust. A buyer who is told one lane is safer is being told a claim the record does not carry, and the buyer’s move is to check the claim against the record: does the record say that, and if it does not, the claim is the seller’s word, not the record’s. The page’s job is to say the two lanes carry the two forms, the check is the same in either lane, and the guarantee is the record’s, not the lane’s, which is the whole of what the record supports on the two against one another.',
          'In practice the buyer gets the two forms and the check on each, and is told plainly that the guarantee is the record’s, not the lane’s, and that the check the buyer does in either lane is the check the record supports, not a guarantee the lane does not carry.',
        ],
        bodyAr: [
          'الحومة لا تحمل ضمانة لا يعطيها السجل، والصفحة تقول ذلك بوضوح. والسجل يصف السوق والأشكال التي يحملها السوق، ولا يصف حومة واحدة أأمن أو أوثق أو أصدق من الأخرى، لأنه لا مصدر في السجل يقيس حومة على الأخرى في السلامة أو الثقة. ومشتري يقال له إن حومة أأمن يُقال له ادعاء لا يحمله السجل، وحركة المشتري أن يمحص الادعاء ضدا على السجل: هل السجل يقول ذلك، وإن لم يقل، فالادعاء هو كلمة البائع، ليس السجل. ومهمة الصفحة أن تقول إن الحومتين تحملان الشكلين، والشك هو نفس الشك في أي حومة، والضمان للسجل لا للحومة، وهذا هو كل ما يدعمه السجل في أحدهما ضد الآخر.',
          'وفي الممارسة يملك المشتري الشكلين والشك على كل، ويُقال له بوضوح أن الضمان للسجل لا للحومة، وأن الشك الذي يفعله في أي حومة هو الشك الذي يدعمه السجل، ليس ضمانة لا تحملها الحومة.',
        ],
        list: [
          'Check the claim against the record in either lane: does the record say that, or does it not.',
          'A guarantee that the lane does not carry is a guarantee the record does not give.',
          'The check is the same in either lane, and the check is the record’s own.',
        ],
        listAr: [
          'امحص الادعاء ضدا على السجل في أي حومة: هل السجل يقول ذلك، أم لا.',
          'ضمانة لا تحملها الحومة ضمانة لا يعطيها السجل.',
          'والشك هو نفس الشك في أي حومة، والشك هو الخاص بالسجل.',
        ],
      },
    ],
    sourceIds: ['TRAFFIC_UAE_AGARWOOD_TRADE', 'TRAFFIC_AGARWOOD_TRADE_2000', 'ITTO_AGARWOOD_REVIEW'],
    workedExample: {
      situation:
        'A hypothetical buyer is told that buying in person is “safer” than buying online and wants to know what the record says about that.',
      situationAr:
        'قيل لمشتري افتراضي أن الشراء حضوريا «أأمن» من الشراء عبر الإنترنت، ويريد أن يعرف ماذا يقول السجل في ذلك.',
      steps: [
        'Check the forms: both lanes carry the recorded forms, so the material side is the same in either lane.',
        'Check the guarantee: no source in the register measures one lane against the other on safety or trust, so the guarantee is not the record’s.',
        'Check the claim’s source: it is the seller’s word, so it is a claim to check, not a fact to accept.',
        'Report: the two lanes carry the two forms, the guarantee is the record’s not the lane’s, and the check is the same in either lane.',
      ],
      stepsAr: [
        'افحص الأشكال: الحومتان تحملان الأشكال المسجلة، فجنب المادة هو نفسه في أي حومة.',
        'وافحص الضمانة: لا مصدر في السجل يقيس حومة على أخرى في السلامة أو الثقة، فالضمانة ليست للسجل.',
        'وافحص مصدر الادعاء: هي كلمة البائع، فهي ادعاء تمحص، ليست حقيقة تقبل.',
        'وقيل: الحومتان تحملان الشكلين، والضمان للسجل لا للحومة، والشك هو نفس الشك في أي حومة.',
      ],
      takeaway:
        'The example shows the comparison read on the record: the two lanes carry the two forms, the guarantee is not the record’s, and the seller’s word on the guarantee is checked against the record, not against the lane. A buyer who holds that line is comparing the two forms correctly and not buying a guarantee the record does not carry.',
      takeawayAr:
      'يبيّن المثال المقارنة مقروءة على السجل: الحومتان تحملان الشكلين، والضمان ليس للسجل، وكلمة البائع على الضمان تمحص ضدا على السجل لا ضدا على الحومة. ومشتري يحفظ تلك الخط يقارن الشكلين صحيحا ولا يشتري ضمانة لا يحملها السجل.',
    },
    limitations:
      'This page compares the two recorded lanes, in person and online, and states what each one carries on the record and the check the buyer must do in either lane. It does not rank one lane against the other on safety or trust, because no source in the register does, and it does not give a guarantee the lane does not carry.',
      limitationsAr:
      'تقوم هذه الصفحة بمقارنة الحومتين المسجلتين، الحضور عبر الإنترنت، وتقرر ما يحمل كل حومة على السجل والشك الذي يجب على المشتري أن يفعله في أي حومة. ولا ترتب حومة على أخرى في السلامة أو الثقة، لأنه لا مصدر في السجل يفعل ذلك، ولا تعطي ضمانة لا تحملها الحومة.',
    nextSteps: [
      'Read the page on evaluating a questionable offer',
      'Read the page on lot documentation',
      'Read the page on the market’s recorded structure',
    ],
    nextStepsAr: [
      'اقرأ صفحة تقييم عرض مشكوك فيه',
      'اقرأ صفحة توثيق اللوط',
      'اقرأ صفحة هيكل السوق المسجل',
    ],
    related: [
      { slug: 'buying/evaluating-an-offer', label: 'Evaluating a questionable offer' },
      { slug: 'trade/agarwood-documentation', label: 'What lot documentation can establish' },
      { slug: 'quality/fraud-identification', label: 'Where a statement stops being a fact' },
      { slug: 'sourcing/reading-a-quotation', label: 'Reading a quotation in either lane' },
    ],
  }),

  /* ---------------------------------------------------------------
     buying/beads-and-carvings
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'buying/beads-and-carvings',
    parent: 'buying',
    title: 'Buying beads and carvings',
    titleAr: 'شراء المسبحة والنقش',
    summary:
      'What the record says about buying beads and carvings: the documented forms, the regulatory position of the material, and the checks a buyer must do on the object rather than assume the object carries a guarantee.',
    summaryAr:
      'ما يقوله السجل عن شراء المسبحة والنقش: الأشكال الموثقة، والموقع الضبطي للمادة، والفحوصات التي يجب على المشتري أن يفعلها على الجسم بدل أن يفترض أن الجسم يحمل ضمانة.',
    directAnswer:
      'The record carries the two forms it does not carry a value scale for either. The product record names the two object forms the material moves in: the beads and the carvings, which is the form side of the question, and the regulation record places the genera under the listing that covers all of them, which is the regulatory side. What the record does not carry is a value scale for the two forms: no source in the register prices a bead or a carving against the other or against a raw material, and a figure on an object is a figure the maker states, not a figure the record carries. The buying question is therefore a buying question on the forms: what the two forms are, what the regulation says about moving them, and what the buyer must check on the object rather than assume the object carries a value the record does not state. The page states the forms on their record, states the regulation on its record, and keeps the value question open, because the value is the maker’s statement, not the record’s.',
    directAnswerAr:
      'السجل يحمل الشكلين ولا يحمل مقياس قيمة لأي منهما. فسجل المنتج يسمي شكلَي الجسمين اللذين تسير فيهما المادة: المسبحة والنقش، وهذا هو جانب السؤال من الشكل، وسجل الضبط يضع الأجناس تحت التسمية التي تطوقها كلها، وهذا هو جانب الضبط. وما لا يحمله السجل هو مقياس قيمة على الشكلين: لا مصدر في السجل يسعر مسبحة أو نقشا على آخر أو على مادة خام، ورقما على جسم رقم يصرح به الصانع، ليس رقما يحمله السجل. فسؤال الشراء إذن سؤال شراء على الأشكال: ما هي الشكلان، وماذا يقول الضبط عن النقل، وما الذي يجب على المشتري أن يفحصه على الجسم بدل أن يفترض أن الجسم يحمل قيمة لا يصرح بها السجل. والصفحة تقول الأشكال على سجلها، وتقول الضبط على سجله، وتبقي سؤال القيمة مفتوحا، لأن القيمة عبارة الصانع، ليست السجل.',
    sections: [
      {
        heading: 'The two recorded forms',
        headingAr: 'الشكلان المسجلان',
        body: [
          'The form side of the question is the side the record carries, and it carries it plainly. The product record names the beads as a form the material moves in, and it names the carvings in the same record, which is why the two can be discussed together: they are forms of the material, recorded as such, and the product page for each carries the recorded form. The comparison between the two is a comparison of forms: the bead is a form the material moves in for the hand, and the carving is a form the material moves in for the setting, and the difference is the recorded difference in what each one is, not a measured difference in value. The page can say the forms are recorded and can point each to its own record, and it says that, which is the whole of what the form side of the question carries.',
        ],
        bodyAr: [
          'جانب السؤال من الشكل هو الجانب الذي يحمله السجل، ويحمله بوضوح. فسجل المنتج يسمي المسبحة شكلا تسير فيه المادة، ويسمي النقوش في السجل نفسه، ولهذا يمكن الحديث عن الاثنين معا: إنها أشكال للمادة، مسجلة بوصفها كذلك، وصفحة المنتج لكل تحمل الشكل المسجل. والمقارنة بين الشكلين مقارنة أشكال: المسبحة شكل تسير فيه المادة لليد، والنقش شكل تسير فيه المادة للبيئة، والفرق فرق مسجل في ما هو كل، ليس فرقا مقاسا في القيمة. والصفحة تستطيع أن تقول إن الأشكال مسجلة وأن تشير كل إلى سجلها، وتقول ذلك، وهذا هو كل ما يحمله جانب السؤال من الشكل.',
        ],
      },
      {
        heading: 'What the regulation says about moving the forms',
        headingAr: 'ما يقوله الضبط عن نقل الأشكال',
        body: [
          'The regulatory side of the question is the side the record carries on the status of the material, and it carries it plainly. The regulation record places the genera under the listing that covers all of them, which is a fact about the material’s status that the buyer of the object must carry: the object is made from a material under the regulation, and the movement of the object is the movement of the material under the regulation. The record of the personal-carriage side states what the record says about carrying the material across a border, which is the recorded side of the question of moving the object. The buyer of the object therefore carries two records: the product record for what the object is, and the regulation record for what moving the object is under. The two together are the record the buyer carries into the purchase, and neither one is a value statement, which is why the page states the two on their records and keeps the value question open.',
        ],
        bodyAr: [
          'جانب السؤال الضبطي هو الجانب الذي يحمله السجل على حال المادة، ويحمله بوضوح. فسجل الضبط يضع الأجناس تحت التسمية التي تطوقها كلها، وهذه حقيقة عن حال المادة يجب أن يحملها مشتري الجسم: الجسم مصنوع من مادة تحت الضبط، ونقل الجسم هو نقل المادة تحت الضبط. وسجل جانب الحمل الشخصي يقرر ما يقوله السجل عن حمل المادة عبر حدود، وهذا هو الجانب المسجل من سؤال نقل الجسم. فمشتري الجسم يحمل سجلين: سجل المنتج لما هو الجسم، وسجل الضبط لما هو نقل الجسم تحت. وكلاهما معاً هو السجل الذي يدخله المشتري في الشراء، وكلاهما ليس عبارة قيمة، ولهذا تقول الصفحة الاثنين على سجلهما وتبقي سؤال القيمة مفتوحا.',
        ],
      },
      {
        heading: 'The check the buyer must do on the object',
        headingAr: 'الشك الذي يجب أن يفعله المشتري على الجسم',
        body: [
          'The buying question is a check on the object, and the check is the record’s own: does the object fit the two records it carries. The first check is the product check: does the object as it is, the bead or the carving, fit the form the product record names for it, and does the object show what the form says it should show. The second check is the regulation check: does the object come with the documents the regulation requires for moving the material, and do the documents hold against the object. The two checks together are the check the buyer must do on the object, and the check is what the record supports, not a guarantee the object does not carry. A buyer who does the two checks on the object is doing the check the record supports, and a buyer who assumes the object carries a value the record does not state is assuming what the record does not give.',
        ],
        bodyAr: [
          'سؤال الشراء هو شك على الجسم، والشك هو الخاص بالسجل: هل الجسم يلائم السجلين اللذين يحملهما. فالشك الأول هو شك المنتج: هل الجسم كما هو، المسبحة أو النقش، يلائم الشكل الذي يسميه سجل المنتج له، وهل يبين الجسم ما يقول الشكل إنه يجب أن يبينه. والشك الثاني هو شك الضبط: هل الجسم يأتي بالمستندات التي يطلبها الضبط لنقل المادة، وهل تصمد المستندات أمام الجسم. فشكان معاً هما الشك الذي يجب على المشتري أن يفعله على الجسم، والشك هو ما يدعمه السجل، ليس ضمانة لا يحملها الجسم. ومشتري يفعل الشكين على الجسم يفعل الشك الذي يدعمه السجل، ومشتري يفترض أن الجسم يحمل قيمة لا يصرح بها السجل يفترض ما لا يعطيه السجل.',
        ],
        list: [
          'Check the object against the form the product record names for it: does it fit the form, and does it show what the form says it should.',
          'Check the object against the documents the regulation requires for moving the material.',
          'Keep the value question open: the value is the maker’s statement, not the record’s.',
        ],
        listAr: [
          'افحص الجسم ضدا على الشكل الذي يسميه سجل المنتج له: هل يلائم الشكل، وهل يبين ما يقول الشكل إنه يجب أن يبينه.',
          'وامحص الجسم ضدا على المستندات التي يطلبها الضبط لنقل المادة.',
          'وأبقِ سؤال القيمة مفتوحا: القيمة عبارة الصانع، ليست السجل.',
        ],
      },
    ],
    sourceIds: ['CBIC_AGARWOOD_PERSONAL_CARRIAGE', 'CITES_APPENDICES'],
    workedExample: {
      situation:
        'A hypothetical buyer is offered a string of beads and a carving, both priced, and wants to know what the two prices are worth on the record.',
      situationAr:
        'عُرض على مشتري افتراضي مسبحة ونقش، كلاهما بسعر، ويريد أن يعرف وزن السعرين على السجل.',
      steps: [
        'Check the forms: the beads and the carvings are recorded product forms, so the object side is on the record.',
        'Check the regulation: the material is under the listing, so the movement of the object is under the regulation, and the documents are the check.',
        'Check the prices: no source in the register prices a bead or a carving, so the two prices are the maker’s statements, not the record’s.',
        'Report: the forms and the regulation are on the record, the prices are not, and the buyer’s check is on the object and the documents.',
      ],
      stepsAr: [
        'افحص الأشكال: المسبحة والنقوش أشكال منتجات مسجلة، فنواحي الجسم على السجل.',
        'وافحص الضبط: المادة تحت التسمية، فنقل الجسم تحت الضبط، والمستندات هي الشك.',
        'وافحص الأسعار: لا مصدر في السجل يسعر مسبحة أو نقشا، فالسعران عبارة الصانع، ليس السجل.',
        'وقيل: الأشكال والضبط على السجل والأسعار ليست، وفحص المشتري على الجسم والمستندات.',
      ],
      takeaway:
        'The example shows the buying check read on the record: the forms and the regulation are on the record, the prices are not, and the check is the object against the form and the documents. A buyer who prices the object on the maker’s statement is paying for the statement, not for a value the record does not carry.',
      takeawayAr:
      'يبيّن المثال فحص الشراء مقروئا على السجل: الأشكال والضبط على السجل والأسعار ليست، والفحص هو الجسم ضدا على الشكل والمستندات. ومشتري يسعر الجسم على عبارة الصانع يدفع ثمن العبارة، لا قيمة لا يحملها السجل.',
    },
    limitations:
      'This page documents the two object forms, the beads and the carvings, and states the regulatory position of the material and the personal-carriage record. It does not price either form, and it does not establish a value for any object, because no source in the register carries a value scale for the forms.',
      limitationsAr:
      'توثق هذه الصفحة شكلَي الجسمين، المسبحة والنقش، وتقرر الموقف الضبطي للمادة وسجل الحمل الشخصي. ولا تسعر أي شكل، ولا تثبت قيمة لأي جسم، لأنه لا مصدر في السجل يحمل مقياس قيمة للأشكال.',
    nextSteps: [
      'Read the product page on the beads for the recorded form',
      'Read the page on what the personal-carriage record says',
      'Read the page on what the listing requires for moving the material',
    ],
    nextStepsAr: [
      'اقرأ صفحة المنتج عن المسبحة للشكل المسجل',
      'اقرأ صفحة ماذا يقول سجل الحمل الشخصي',
      'اقرأ صفحة ماذا تطلب التسمية لنقل المادة',
    ],
    related: [
      { slug: 'products/agarwood-beads', label: 'The recorded bead form' },
      { slug: 'products/agarwood-carvings', label: 'The recorded carving form' },
      { slug: 'trade/cites-import-by-market', label: 'What the listing requires' },
      { slug: 'using-oud/agarwood-beads-and-objects', label: 'The devotional use of the forms' },
    ],
  }),

  /* ---------------------------------------------------------------
     buying/travel-and-oud-purchases
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'buying/travel-and-oud-purchases',
    parent: 'buying',
    title: 'Buying during international travel',
    titleAr: 'الشراء أثناء السفر الدولي',
    summary:
      'What the record says about buying the material during international travel: the personal-carriage record, the regulation that governs it, and the checks a traveler must do on the material rather than assume the material’s status carries the purchase.',
    summaryAr:
      'ما يقوله السجل عن شراء المادة أثناء السفر الدولي: سجل الحمل الشخصي، والضبط الذي يحكمه، والفحوصات التي يجب على المسافر أن يفحصها على المادة بدل أن يفترض أن حال المادة تحمل الشراء.',
    directAnswer:
      'The record carries the personal-carriage side of the question: it states what the record says about carrying the material across a border, and the regulation record states the regulation that governs the movement of the material. What the record does not carry is a statement that a purchase during travel is safe, legal or a good value: no source in the register prices the material on a date, and no source in the register verifies the material’s status on a lot by lot. The buying question during travel is therefore a buying question on the two records: what the personal-carriage record says about carrying the material, and what the regulation record says about moving the material under it, and the check the buyer must do on the material and the documents rather than assume the material’s status carries the purchase. The page states the two records, and states the check the buyer must do on the material, and keeps the value question open, because the value is the seller’s statement, not the record’s.',
    directAnswerAr:
      'السجل يحمل جانب سؤال الحمل الشخصي: يقرر ما يقوله السجل عن حمل المادة عبر حدود، وسجل الضبط يقرر الضبط الذي يحكم نقل المادة. وما لا يحمله السجل هو عبارة أن شراء أثناء السفر آمن أو قانوني أو قيمة جيدة: لا مصدر في السجل يسعر المادة بتاريخ، ولا مصدر في السجل يعزز حال المادة لوطا لوطا. فسؤال الشراء أثناء السفر إذن سؤال شراء على السجلين: ما يقوله سجل الحمل الشخصي عن حمل المادة، وما يقوله سجل الضبط عن نقل المادة تحته، والشك الذي يجب على المشتري أن يفعله على المادة والمستندات بدل أن يفترض أن حال المادة تحمل الشراء. والصفحة تقرّر السجلين، وتقرر الشك الذي يجب على المشتري أن يفعله على المادة، وتبقي سؤال القيمة مفتوحا، لأن القيمة عبارة البائع، ليست السجل.',
    sections: [
      {
        heading: 'What the personal-carriage record says',
        headingAr: 'ما يقوله سجل الحمل الشخصي',
        body: [
          'The personal-carriage record is the side of the question the record carries on the carrying of the material, and it carries it plainly. The record states what the record says about carrying the material across a border: the recorded conditions under which the carrying is recorded, and the recorded limits the record sets on the carrying. The point for the buyer is that the carrying is a recorded act under recorded conditions, and a purchase during travel is a purchase that lands in the record of the carrying, which means the buyer’s check is not only the check on the material, it is the check on the material as it is carried, and the check on the documents that go with the carrying. The record states the conditions and the limits, and the buyer’s move is to check the purchase against the conditions and the limits, not to assume the carrying carries the purchase.',
        ],
        bodyAr: [
          'سجل الحمل الشخصي هو جانب السؤال الذي يحمله السجل على حمل المادة، ويحمله بوضوح. فالسجل يقرر ما يقوله عن حمل المادة عبر حدود: الظروف المسجلة التي يُحمل تحتها الحمل، والحدود المسجلة التي يضعها السجل على الحمل. وما يهم المشتري أن الحمل فعل مسجل تحت ظروف مسجلة، وشراء أثناء سفر شراء يهبط في سجل الحمل، ومعنى ذلك أن فحص المشتري ليس فقط فحص المادة، بل فحص المادة كما تُحمل، وفحص المستندات التي تلي الحمل. والسجل يقرر الظروف والحدود، وحركة المشتري أن يمحص الشراء ضدا على الظروف والحدود، لا أن يفترض أن الحمل يحمل الشراء.',
        ],
      },
      {
        heading: 'What the regulation says about moving the material',
        headingAr: 'ما يقوله الضبط عن نقل المادة',
        body: [
          'The regulation side of the question is the side the record carries on the movement of the material, and it carries it plainly. The regulation record places the genera under the listing that covers all of them, which is a fact about the material’s status that the buyer of the material during travel must carry: the material is under the regulation, and the movement of the material is under the regulation. The record of the regulation side states what the regulation requires for the movement of the material, and the point for the buyer is that the movement is a recorded act under recorded requirements, and a purchase during travel is a purchase that lands in the record of the movement, which means the buyer’s check is the check on the documents that go with the movement, not the assumption that the movement carries the purchase. The regulation states the requirements, and the buyer’s move is to check the purchase against the requirements, not to assume the movement carries the purchase.',
        ],
        bodyAr: [
          'جانب السؤال الضبطي هو الجانب الذي يحمله السجل على نقل المادة، ويحمله بوضوح. فسجل الضبط يضع الأجناس تحت التسمية التي تطوقها كلها، وهذه حقيقة عن حال المادة يجب أن يحملها مشتري المادة أثناء السفر: المادة تحت الضبط، ونقل المادة تحت الضبط. وسجل الجانب الضبطي يقرر ما يطلبه الضبط لنقل المادة، وما يهم المشتري أن النقل فعل مسجل تحت متطلبات مسجلة، وشراء أثناء سفر شراء يهبط في سجل النقل، ومعنى ذلك أن فحص المشتري هو فحص المستندات التي تلي النقل، ليس الافتراض أن النقل يحمل الشراء. والضبط يقرر المتطلبات، وحركة المشتري أن يمحص الشراء ضدا على المتطلبات، لا أن يفترض أن النقل يحمل الشراء.',
        ],
      },
      {
        heading: 'The check the buyer must do on the material',
        headingAr: 'الشك الذي يجب أن يفعله المشتري على المادة',
        body: [
          'The buying question during travel is a check on the material, and the check is the two records’ own: does the material fit the two records it carries. The first check is the personal-carriage check: does the material as it is carried fit the conditions and the limits the personal-carriage record states. The second check is the regulation check: does the material come with the documents the regulation requires for moving the material under it. The two checks together are the check the buyer must do on the material, and the check is what the record supports, not a guarantee the material’s status does not carry. A buyer who does the two checks on the material is doing the check the record supports, and a buyer who assumes the material’s status carries the purchase is assuming what the record does not give.',
        ],
        bodyAr: [
          'سؤال الشراء أثناء السفر هو شك على المادة، والشك هو الخاص بالسجلين: هل المادة تلاءم السجلين اللذين تحملها. فالشك الأول هو شك الحمل الشخصي: هل المادة كما تُحمل تلاءم الظروف والحدود التي يقررها سجل الحمل الشخصي. والشك الثاني هو شك الضبط: هل المادة تأتي بالمستندات التي يطلبها الضبط لنقل المادة تحته. فشكان معاً هما الشك الذي يجب على المشتري أن يفعله على المادة، والشك هو ما يدعمه السجل، ليس ضمانة لا يحملها حال المادة. ومشتري يفعل الشكين على المادة يفعل الشك الذي يدعمه السجل، ومشتري يفترض أن حال المادة تحمل الشراء يفترض ما لا يعطيه السجل.',
        ],
        list: [
          'Check the material against the conditions and the limits the personal-carriage record states.',
          'Check the material against the documents the regulation requires for moving it.',
          'Keep the value question open: the value is the seller’s statement, not the record’s.',
        ],
        listAr: [
          'افحص المادة ضدا على الظروف والحدود التي يقررها سجل الحمل الشخصي.',
          'وافحص المادة ضدا على المستندات التي يطلبها الضبط لنقلها.',
          'وأبقِ سؤال القيمة مفتوحا: القيمة عبارة البائع، ليست السجل.',
        ],
      },
    ],
    sourceIds: ['CBIC_AGARWOOD_PERSONAL_CARRIAGE', 'CITES_APPENDICES', 'TRAFFIC_UAE_AGARWOOD_TRADE'],
    workedExample: {
      situation:
        'A hypothetical traveler is offered a piece of the material at a recorded market and wants to know what the purchase requires on the record.',
      situationAr:
        'عُرض على مسافر افتراضي قطعة من المادة في سوق مسجل، ويريد أن يعرف ما يتطلبه الشراء على السجل.',
      steps: [
        'Check the carrying: does the piece as it is carried fit the conditions and the limits the personal-carriage record states.',
        'Check the regulation: does the piece come with the documents the regulation requires for moving the material under it.',
        'Check the value: no source in the register prices the material on a date, so the price is the seller’s statement, not the record’s.',
        'Report: the carrying and the regulation are on the record, the value is not, and the buyer’s check is on the piece and the documents.',
      ],
      stepsAr: [
        'افحص الحمل: هل القطعة كما تُحمل تلاءم الظروف والحدود التي يقررها سجل الحمل الشخصي.',
        'وافحص الضبط: هل القطعة تأتي بالمستندات التي يطلبها الضبط لنقل المادة تحته.',
        'وافحص القيمة: لا مصدر في السجل يسعر المادة بتاريخ، فالسعر عبارة البائع، ليست السجل.',
        'وقيل: الحمل والضبط على السجل والقيمة ليست، وفحص المشتري على القطعة والمستندات.',
      ],
      takeaway:
        'The example shows the buying check during travel read on the record: the carrying and the regulation are on the record, the value is not, and the check is the piece against the conditions, the limits and the documents. A buyer who prices the piece on the seller’s statement is paying for the statement, not for a value the record does not carry.',
      takeawayAr:
      'يبيّن المثال فحص الشراء أثناء السفر مقروئا على السجل: الحمل والضبط على السجل والقيمة ليست، والفحص هو القطعة ضدا على الظروف والحدود والمستندات. ومشتري يسعر القطعة على عبارة البائع يدفع ثمن العبارة، لا قيمة لا يحملها السجل.',
    },
    limitations:
      'This page states the personal-carriage record and the regulation record for the material, and states the checks a buyer must do on the material during travel. It does not price the material on a date, and it does not verify the material’s status on a lot by lot, because no source in the register does.',
      limitationsAr:
      'تقرر هذه الصفحة سجل الحمل الشخصي وسجل الضبط للمادة، وتقرر الفحوصات التي يجب على المشتري أن يفحصها على المادة أثناء السفر. ولا تسعر المادة بتاريخ، ولا تعزز حال المادة لوطا لوطا، لأنه لا مصدر في السجل يفعل ذلك.',
    nextSteps: [
      'Read the page on what the personal-carriage record says',
      'Read the page on what the listing requires for moving the material',
      'Read the page on what lot documentation can and cannot establish',
    ],
    nextStepsAr: [
      'اقرأ صفحة ماذا يقول سجل الحمل الشخصي',
      'اقرأ صفحة ماذا تطلب التسمية لنقل المادة',
      'اقرأ صفحة ماذا يستطيع توثيق اللوط إثباته وما لا يستطيع',
    ],
    related: [
      { slug: 'trade/cites-import-by-market', label: 'What the listing requires' },
      { slug: 'trade/agarwood-documentation', label: 'What lot documentation can establish' },
      { slug: 'buying/evaluating-an-offer', label: 'Evaluating a questionable offer' },
      { slug: 'trade/shipping-wood-oil-perfume', label: 'What moving the material under' },
    ],
  }),

  /* ---------------------------------------------------------------
     buying/buying-perfume-oils
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'buying/buying-perfume-oils',
    parent: 'buying',
    title: 'Buying perfume oils for the intended use',
    titleAr: 'شراء زيوت العطر للاستخدام المقصود',
    summary:
      'What the record says about buying perfume oils for a use: the recorded standards that govern what a finished product must state, and the intended use that is a buyer’s question rather than a fact the record settles.',
    summaryAr:
      'ما يقوله السجل عن شراء زيوت العطر لاستخدام: الأطر المسجلة التي تحكم ما يجب أن يصرح به منتج منتهٍ، والاستخدام المقصود الذي هو سؤال المشتري، لا حقيقة يحسمها السجل.',
    directAnswer:
      'The intended use is a buyer’s question, not a fact the record settles, and the page’s whole job is to say that plainly. The record the register carries on the standards side states what a finished fragrance product must state on its label: the product type, the conditions on the materials, and the limits expressed as upper concentrations in the finished product rather than in the mixture. The market study records the forms the fragrance market carries, which is the market side of the question. What the record does not carry is a statement that a specific oil is fit for a specific use: no source in the register verifies a use, and a use that is stated on a label is a statement the maker owes the buyer, not a fact the use carries. The buying question is therefore a buying question on the standards and the market: what the standards require a finished product to state, and what the market carries of the forms, and the check the buyer must do on the label and the use rather than assume the label carries the use.',
    directAnswerAr:
      'الاستخدام المقصود هو سؤال المشتري، ليس حقيقة يحسمها السجل، وكل مهمة الصفحة أن تقول ذلك بوضوح. والسجل الذي يحمله الدفتر على جانب المعايير يقرر ما يجب أن يصرح به منتج العطر المنتهى على ملصقه: نوع المنتج، والشروط على المواد، والحدود معبرة عن تركيزها القصوى في المنتج المنتهى لا في المخالطة. ودراسة السوق تسجل الأشكال التي يحملها سوق العطور، وهذا هو جانب السؤال من السوق. وما لا يحمله السجل هو عبارة أن زيتا معينا صالح لاستخدام معين: لا مصدر في السجل يعزز استخداما، واستخدام يصرح به ملصق عبارة يدين بها الصانع للمشتري، ليست حقيقة يحمله الاستخدام. فسؤال الشراء إذن سؤال شراء على المعايير والسوق: ما تطلبه المعايير من منتج منتهٍ أن يصرح به، وما يحمله السوق من الأشكال، والشك الذي يجب على المشتري أن يفعله على الملصق والاستخدام بدل أن يفترض أن الملصق يحمل الاستخدام.',
    sections: [
      {
        heading: 'What the standards require a finished product to state',
        headingAr: 'ما تطلبه المعايير من منتج منتهى أن يصرح به',
        body: [
          'The standards side of the question is the side the record carries on what a finished product must state, and it carries it plainly. The recorded standards set how a finished fragrance product states what it is: the product type, the conditions on the materials, and the limits expressed as upper concentrations in the finished product rather than in the mixture. The point for the buyer is that the label is a statement the maker owes the buyer, and a label that states the product type and the conditions is what separates one product from another on a shelf. The standards record what the label must state, and the buyer’s move is to read the label for the statement, not to assume the label carries a use it does not state. The label is the record’s own on the standards side, and the use is the buyer’s question on the use side.',
        ],
        bodyAr: [
          'جانب السؤال من المعايير هو الجانب الذي يحمله السجل على ما يجب أن يصرح به منتج منتهٍ، ويحمله بوضوح. فالأطر المسجلة تقدر كيف يصرح منتج العطر المنتهى بما هو: نوع المنتج، والشروط على المواد، والحدود معبرة عن تركيزها القصوى في المنتج المنتهى لا في المخالطة. وما يهم المشتري أن الملصق عبارة يدين بها الصانع للمشتري، وملصق يصرح بنوع المنتج والشروط هو ما يفصل منتجا عن آخر على الرف. والمعايير تسجل ما يجب أن يقوله الملصق، وحركة المشتري أن يقرأ الملصق عن البيان، لا أن يفترض أن الملصق يحمل استخداما لا يصرح به. والملصق هو الخاص بالسجل على جانب المعايير، والاستخدام هو سؤال المشتري على جانب الاستخدام.',
        ],
      },
      {
        heading: 'What the market carries of the forms',
        headingAr: 'ما يحمله السوق من الأشكال',
        body: [
          'The market side of the question is the side the record carries on the forms the fragrance market carries, and it carries it plainly. The market study records the forms the fragrance market carries, which is the market side of the question: the forms are in the market, and the market is where the buyer meets them. The point for the buyer is that the forms the market carries are the forms the buyer chooses among, and the choice is a choice among forms, not a choice among uses, because the record does not carry a use as a fact. The market states the forms, and the buyer’s move is to choose among the forms, and to check the label for the statement the form carries, and to keep the use as the buyer’s question, not as a fact the form or the market carries.',
        ],
        bodyAr: [
          'جانب السؤال من السوق هو الجانب الذي يحمله السجل على الأشكال التي يحملها سوق العطور، ويحمله بوضوح. فدراسة السوق تسجل الأشكال التي يحملها سوق العطور، وهذا هو جانب السؤال من السوق: الأشكال في السوق، والسوق هو حيث يلتقيها المشتري. وما يهم المشتري أن الأشكال التي يحملها السوق هي الأشكال التي يختار بينها المشتري، والاختيار اختيار بين أشكال، ليس اختيار بين استخدامات، لأن السجل لا يحمل استخداما حقيقة. والسجل يقرر الأشكال، وحركة المشتري أن يختار بين الأشكال، وأن يفحص الملصق عن البيان الذي يحمله الشكل، وأن يبقي الاستخدام سؤال المشتري، ليس حقيقة يحمله الشكل أو السوق.',
        ],
      },
      {
        heading: 'The check the buyer must do on the label and the use',
        headingAr: 'الشك الذي يجب أن يفعله المشتري على الملصق والاستخدام',
        body: [
          'The buying question is a check on the label and the use, and the check is the two records’ own: does the label state what the standards require, and does the use fit the form the label states. The first check is the standards check: does the label state the product type and the conditions the standards require, and does it state the limits as upper concentrations in the finished product. The second check is the use check: does the use the buyer intends fit the form the label states, and if the form the label states does not carry the use the buyer intends, the buyer’s move is to choose a form that does. The two checks together are the check the buyer must do, and the check is what the record supports, not a guarantee the use does not carry. A buyer who does the two checks is doing the check the record supports, and a buyer who assumes the use carries the form is assuming what the record does not give.',
        ],
        bodyAr: [
          'سؤال الشراء هو شك على الملصق والاستخدام، والشك هو الخاص بالسجلين: هل يصرح الملصق بما تطلبه المعايير، وهل يلاءم الاستخدام الذي يقصده المشتري الشكل الذي يصرح به الملصق. فالشك الأول هو شك المعايير: هل يصرح الملصق بنوع المنتج والشروط التي تطلبها المعايير، وهل يصرح بالحدود تركيزا قصوى في المنتج المنتهى. والشك الثاني هو شك الاستخدام: هل الاستخدام الذي يقصده المشتري يلاءم الشكل الذي يصرح به الملصق، وإن كان الشكل الذي يصرح به الملصق لا يحمل الاستخدام الذي يقصده المشتري، فحركة المشتري أن يختار شكلا يحمل. فشكان معاً هما الشك الذي يجب على المشتري أن يفعله، والشك هو ما يدعمه السجل، ليس ضمانة لا يحملها الاستخدام. ومشتري يفعل الشكين يفعل الشك الذي يدعمه السجل، ومشتري يفترض أن الاستخدام يحمل الشكل يفترض ما لا يعطيه السجل.',
        ],
        list: [
          'Check the label for the standards: the product type, the conditions and the limits as upper concentrations in the finished product.',
          'Check the use against the form: does the form the label states carry the use the buyer intends.',
          'Choose a form that carries the use, and keep the use as the buyer’s question, not the form’s fact.',
        ],
        listAr: [
          'افحص الملصق على المعايير: نوع المنتج، والشروط، والحدود تركيزا قصوى في المنتج المنتهى.',
          'وامحص الاستخدام ضدا على الشكل: هل الشكل الذي يصرح به الملصق يحمل الاستخدام الذي يقصده المشتري.',
          'واختر شكلا يحمل الاستخدام، وأبقِ الاستخدام سؤال المشتري، ليس حقيقة الشكل.',
        ],
      },
    ],
    sourceIds: ['IFRA_STANDARDS', 'TRAFFIC_UAE_AGARWOOD_TRADE'],
    workedExample: {
      situation:
        'A hypothetical buyer wants an oil for skin and is offered a bottle whose label states a product type that is not for skin; the question is what the record says about that.',
      situationAr:
        'يريد مشتري افتراضي زيتا للجلد وعُرضت عليه زجاجة ملصقها يصرح بنوع منتج ليس للجلد؛ والسؤال ما الذي يقوله السجل في ذلك.',
      steps: [
        'Check the label: does the label state the product type and the conditions the standards require, and does it state the limits as upper concentrations.',
        'Check the use: does the form the label states carry the use the buyer intends, and if it does not, the buyer’s move is to choose a form that does.',
        'Check the gap: the record does not carry the use as a fact, so the use is the buyer’s question, not the label’s fact.',
        'Report: the label is the record’s on the standards side, the use is the buyer’s question, and the two do not meet until the buyer chooses a form that carries the use.',
      ],
      stepsAr: [
        'افحص الملصق: هل يصرح الملصق بنوع المنتج والشروط التي تطلبها المعايير، وهل يصرح بالحدود تركيزا قصوى.',
        'وافحص الاستخدام: هل الشكل الذي يصرح به الملصق يحمل الاستخدام الذي يقصده المشتري، وإن لم يحمل، فحركة المشتري أن يختار شكلا يحمل.',
        'وافحص الفجوة: السجل لا يحمل الاستخدام حقيقة، فالاستخدام سؤال المشتري، ليس حقيقة الملصق.',
        'وقيل: الملصق هو الخاص بالسجل على جانب المعايير، والاستخدام سؤال المشتري، والاثنان لا يلتقيان حتى يختار المشتري شكلا يحمل الاستخدام.',
      ],
      takeaway:
        'The example shows the check the record supports: the label is checked against the standards, the use is checked against the form, and the gap between the two is the buyer’s question, not the record’s fact. A buyer who keeps the use as their own question and chooses a form that carries it is doing the check the record supports, not assuming the record settles a use it does not carry.',
        takeawayAr:
      'يبيّن المثال الشك الذي يدعمه السجل: الملصق تمحص ضدا على المعايير، والاستخدام تمحص ضدا على الشكل، والفجوة بينهما هي سؤال المشتري، ليست حقيقة السجل. ومشتري يبقي الاستخدام سؤاله ويختار شكلا يحمله يفعل الشك الذي يدعمه السجل، لا يفترض أن السجل يحسم استخداما لا يحمله.',
    },
    limitations:
      'This page states what the recorded standards require of a finished product’s label and what the market carries of the forms. It does not verify a use for any specific oil, and it does not settle the intended use as a fact, because no source in the register does.',
      limitationsAr:
      'تقرر هذه الصفحة ما تطلبه الأطر المسجلة من ملصق منتج منتهى وما يحمله السوق من الأشكال. ولا تعزز استخداما لأي زيت بعينه، ولا تحسم الاستخدام المقصود حقيقة، لأنه لا مصدر في السجل يفعل ذلك.',
    nextSteps: [
      'Read the page on concentration labels for what the standards state',
      'Read the page on notes versus ingredients for what the label does not say',
      'Read the page on the fragrance market for the recorded forms',
    ],
    nextStepsAr: [
      'اقرأ صفحة ملصقات التركيز لما تقرره المعايير',
      'اقرأ صفحة الذبذبات مقابل المكونات لما لا يقوله الملصق',
      'اقرأ صفحة سوق العطور للأشكال المسجلة',
    ],
    related: [
      { slug: 'fragrance/concentration-labels', label: 'What the standards state on the label' },
      { slug: 'fragrance/notes-versus-ingredients', label: 'What the label does not say' },
      { slug: 'fragrance/oud-in-the-fragrance-market', label: 'The recorded forms in the market' },
      { slug: 'using-oud/skin-intended-fragrance-oils', label: 'The use the record does not settle' },
    ],
  }),

  /* ---------------------------------------------------------------
     buying/choosing-a-gift
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'buying/choosing-a-gift',
    parent: 'buying',
    title: 'Choosing fragrance gifts without assumptions',
    titleAr: 'اختيار هدايا العطر دون افتراضات',
    summary:
      'What a buyer can do when choosing a fragrance gift: what the record supports as a guide, and what the record does not, and why a gift is a choice about the recipient rather than a fact the record settles.',
    summaryAr:
      'ما يستطيع المشتري أن يفعله عند اختيار هدية عطر: ما يدعمه السجل كدليل، وما لا يدعمه، ولماذا هدية اختيار عن المهدى إليه، لا حقيقة يحسمها السجل.',
    directAnswer:
      'A gift is a choice about the recipient, not a fact the record settles, and the page’s whole job is to say that plainly. The record the register carries supports a guide on two sides: the market study records the forms the fragrance market carries, which is the form side of the choice, and the standards record states what a finished product must state on its label, which is the label side of the choice. What the record does not carry is a statement that a specific form is right for a specific recipient: no source in the register records a preference, and a preference is the recipient’s own, not the record’s. The gift question is therefore a gift question on the two records: what the market carries of the forms, and what the standards require of the label, and the choice is the choice among the forms and the label, not the choice the record settles about the recipient. The page states the two records and the two sides of the choice, and keeps the preference question open, because the preference is the recipient’s, not the record’s.',
    directAnswerAr:
      'هدية اختيار عن المهدى إليه، ليست حقيقة يحسمها السجل، وكل مهمة الصفحة أن تقول ذلك بوضوح. والسجل الذي يحمله الدفتر يدعم دليلا على جانبين: دراسة السوق تسجل الأشكال التي يحملها سوق العطور، وهذا هو جانب الاختيار من الشكل، وسجل المعايير يقرر ما يجب أن يصرح به منتج منتهٍ على ملصقه، وهذا هو جانب الاختيار من الملصق. وما لا يحمله السجل هو عبارة أن شكلا معينا صائب لمهدٍ معيّن: لا مصدر في السجل يسجل تفضلا، والتفضل خاص بالمهدى إليه، ليس الخاص بالسجل. فسؤال الهدية إذن سؤال هدية على السجلين: ما يحمله السوق من الأشكال، وما تطلبه المعايير من الملصق، والاختيار هو الاختيار بين الأشكال والملصق، ليس الاختيار الذي يحسمه السجل عن المهدى إليه. والصفحة تقرّر السجلين والجانبين من الاختيار، وتبقي سؤال التفضل مفتوحا، لأن التفضل خاص بالمهدى إليه، ليس الخاص بالسجل.',
    sections: [
      {
        heading: 'What the record supports as a guide',
        headingAr: 'ما يدعمه السجل كدليل',
        body: [
          'The record supports a guide on two sides, and the two sides are the form side and the label side. The market study records the forms the fragrance market carries, which is the form side of the choice: the forms are in the market, and the gift is a choice among the forms, and the choice is a choice among recorded forms, which is the recorded side of the gift question. The standards record states what a finished product must state on its label, which is the label side of the choice: the label is a statement the maker owes the recipient, and a label that states the product type and the conditions is what separates one form from another. The two sides together are the guide the record supports: the forms to choose among, and the label to read for the statement, and the guide is the record’s own, not the record’s fact about the recipient.',
        ],
        bodyAr: [
          'السجل يدعم دليلا على جانبين، والجانبان هما جانب الشكل وجانب الملصق. فدراسة السوق تسجل الأشكال التي يحملها سوق العطور، وهذا هو جانب الاختيار من الشكل: الأشكال في السوق، والهدية اختيار بين الأشكال، والاختيار اختيار بين أشكال مسجلة، وهذا هو الجانب المسجل من سؤال الهدية. وسجل المعايير يقرر ما يجب أن يصرح به منتج منتهٍ على ملصقه، وهذا هو جانب الاختيار من الملصق: الملصق عبارة يدين بها الصانع للمهدى إليه، وملصق يصرح بنوع المنتج والشروط هو ما يفصل شكلا عن آخر. والجانبان معا هما الدليل الذي يدعمه السجل: الأشكال التي يختار بينها، والملصق الذي يقرأ عن البيان، والدليل هو الخاص بالسجل، ليس حقيقة السجل عن المهدى إليه.',
        ],
      },
      {
        heading: 'What the record does not settle',
        headingAr: 'ما لا يحسمه السجل',
        body: [
          'The record does not settle the preference question, and the page states that plainly. No source in the register records a preference: it does not record what a recipient likes, does not record what a recipient has tried, and does not record what a recipient will enjoy. The preference is the recipient’s own, and the gift is a choice about the recipient rather than a fact the record settles about the recipient. The page will not cross that line into a claim about the recipient, because the claim is not in the record, and the recipient’s preference is the recipient’s own, not the record’s. So the gift question is a gift question on the two records, and the preference question is a question the buyer must ask of the recipient rather than assume the record answers.',
        ],
        bodyAr: [
          'السجل لا يحسم سؤال التفضل، والصفحة تقول ذلك بوضوح. فلا مصدر في السجل يسجل تفضلا: لا يسجل ما يحب المهدى إليه، ولا يسجل ما جرب المهدى إليه، ولا يسجل ما سيستمتع به المهدى إليه. والتفضل خاص بالمهدى إليه، والهدية اختيار عن المهدى إليه، ليست حقيقة يحسمها السجل عن المهدى إليه. ولن تعبر الصفحة تلك الخط إلى ادعاء عن المهدى إليه، لأن الادعاء ليس في السجل، وتفضل المهدى إليه خاص به، ليس الخاص بالسجل. فسؤال الهدية إذن سؤال هدية على السجلين، وسؤال التفضل سؤال يجب على المشتري أن يسأله للمهدى إليه، لا أن يفترض أن السجل يجيبه.',
        ],
      },
      {
        heading: 'How a buyer chooses without assumptions',
        headingAr: 'كيف يختار المشتري دون افتراضات',
        body: [
          'The choosing is ordered, and the order is the two records’ own: the forms and the label. The first move is the form move: choose among the recorded forms the market carries, and the choice is a choice among recorded forms, not a choice the record settles about the recipient. The second move is the label move: read the label for the statement the form carries, and the statement is the maker’s word on the form, not the maker’s word on the recipient. The two moves together are the choosing the record supports, and the choosing is what the record carries, not a guarantee the recipient’s preference does not carry. A buyer who does the two moves is choosing among the forms and the label the record supports, and a buyer who assumes the record settles the recipient’s preference is assuming what the record does not give.',
        ],
        bodyAr: [
          'الاختيار مرتب والترتيب هو الخاص بالسجلين: الأشكال والملصق. فالحركة الأولى هي حركة الشكل: اختر بين الأشكال المسجلة التي يحملها السوق، والاختيار اختيار بين أشكال مسجلة، ليس اختيار يحسمه السجل عن المهدى إليه. والحركة الثانية هي حركة الملصق: اقرأ الملصق عن البيان الذي يحمله الشكل، والبيان هو كلمة الصانع على الشكل، ليست كلمة الصانع على المهدى إليه. وحركتان معا هما الاختيار الذي يدعمه السجل، والاختيار هو ما يحمله السجل، ليس ضمانة لا يحملها تفضل المهدى إليه. ومشتري يفعل الحركتين يختار بين الأشكال والملصق الذي يدعمه السجل، ومشتري يفترض أن السجل يحسم تفضل المهدى إليه يفترض ما لا يعطيه السجل.',
        ],
        list: [
          'Choose among the recorded forms the market carries, not among forms the record does not name.',
          'Read the label for the maker’s statement on the form, not the maker’s statement on the recipient.',
          'Keep the preference question open: it is the recipient’s question, not the record’s fact.',
        ],
        listAr: [
          'اختر بين الأشكال المسجلة التي يحملها السوق، لا بين أشكال لا يسميها السجل.',
          'واقرا الملصق عن بيان الصانع على الشكل، ليس بيان الصانع على المهدى إليه.',
          'وأبقِ سؤال التفضل مفتوحا: إنه سؤال المهدى إليه، ليست حقيقة السجل.',
        ],
      },
    ],
    sourceIds: ['TRAFFIC_UAE_AGARWOOD_TRADE', 'AGARWOOD_REVIEW_2014'],
    workedExample: {
      situation:
        'A hypothetical buyer is choosing a fragrance gift for a recipient and wants to know what the record can and cannot do in the choice.',
      situationAr:
        'مشتري افتراضي يختار هدية عطر لمهدى إليه، ويريد أن يعرف ماذا يستطيع السجل وماذا لا يستطيع في الاختيار.',
      steps: [
        'Do the form move: choose among the recorded forms the market carries, and the choice is a choice among recorded forms.',
        'Do the label move: read the label for the maker’s statement on the form, and the statement is the maker’s word on the form.',
        'Check the gap: no source in the register records the recipient’s preference, so the preference is the recipient’s own, not the record’s.',
        'Report: the forms and the label are on the record, the preference is not, and the choice is among the forms and the label, not about the recipient’s preference.',
      ],
      stepsAr: [
        'افعل حركة الشكل: اختر بين الأشكال المسجلة التي يحملها السوق، والاختيار اختيار بين أشكال مسجلة.',
        'وافعل حركة الملصق: اقرأ الملصق عن بيان الصانع على الشكل، والبيان هو كلمة الصانع على الشكل.',
        'وفحص الفجوة: لا مصدر في السجل يسجل تفضل المهدى إليه، فالسؤال تفضل المهدى إليه، ليس السجل.',
        'وقيل: الأشكال والملصق على السجل والتفضل ليس، والاختيار بين الأشكال والملصق، ليس عن تفضل المهدى إليه.',
      ],
      takeaway:
        'The example shows the choosing read on the record: the forms and the label are on the record, the preference is not, and the choice is among the two, not about the recipient. A buyer who chooses among the forms and the label and keeps the preference question open is choosing correctly, not buying a fact the record does not carry.',
        takeawayAr:
      'يبيّن المثال الاختيار مقروئا على السجل: الأشكال والملصق على السجل والتفضل ليس، والاختيار بينهما، ليس عن المهدى إليه. ومشتري يختار بين الأشكال والملصق ويبقي سؤال التفضل مفتوحا يختار صحيحا، لا يشتري حقيقة لا يحملها السجل.',
    },
    limitations:
      'This page states what the record supports as a guide on the form and the label sides of the choice, and what it does not settle: the recipient’s preference. It does not record a preference and it does not state which form is right for a specific recipient, because no source in the register does.',
      limitationsAr:
      'تقرر هذه الصفحة ما يدعمه السجل كدليل على جانبَي الشكل والملصق من الاختيار، وما لا يحسمه: تفضل المهدى إليه. ولا تسجل تفضلا ولا تقرر أي شكل صائب لمهدٍ معيّن، لأنه لا مصدر في السجل يفعل ذلك.',
    nextSteps: [
      'Read the page on concentration labels for what the standards state',
      'Read the page on the fragrance market for the recorded forms',
      'Read the page on what a gift set is, for the recorded form',
    ],
    nextStepsAr: [
      'اقرأ صفحة ملصقات التركيز لما تقررته المعايير',
      'اقرأ صفحة سوق العطور للأشكال المسجلة',
      'اقرأ صفحة ما هو طقم هدايا، للشكل المسجل',
    ],
    related: [
      { slug: 'products/gift-sets', label: 'The recorded gift form' },
      { slug: 'fragrance/concentration-labels', label: 'What the standards state on the label' },
      { slug: 'products/oud-oil', label: 'The recorded form the market carries' },
      { slug: 'fragrance/oud-in-the-fragrance-market', label: 'The market’s recorded forms' },
    ],
  }),
];
