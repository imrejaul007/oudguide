import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

/**
 * Editorial guides: the sourcing block.
 *
 * A sourcing page is where the buyer meets the trade side of a purchase:
 * the specification, the brief and the supplier. The record the register
 * carries documents the market and the standards, not a supplier’s
 * capability or a fixed price, and each page states the documented record
 * it rests on and keeps the supplier’s claims as statements to check.
 */

export const editorialGuideSourcing: Article[] = [
  /* ---------------------------------------------------------------
     sourcing/packaging-and-repeat-orders
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'sourcing/packaging-and-repeat-orders',
    parent: 'sourcing',
    title: 'Packaging and repeat-order specifications',
    titleAr: 'مواصفات التغليف والطلبات المتكررة',
    summary:
      'What a specification for packaging and repeat orders has to state, and why the standard that keeps a repeat order consistent is the buyer’s own record rather than a figure the market carries.',
    summaryAr:
      'ما يجب أن تقرر له مواصفة التغليف والطلبات المتكررة، ولماذا المعيار الذي يحافظ على اتساق الطلب المتكرر هو سجل المشتري الخاص، ليس رقما يحمله السوق.',
    directAnswer:
      'A repeat order is a purchase against a record, and the record that keeps it consistent is the buyer’s own specification, not a figure the market carries. The market study documents the forms the market carries and the conditions under which the recorded prices are stated, which is the record that says a repeat order is a purchase against the same form under the same stated conditions, and the standards record states what a finished product must say on its label, which is the record that says a repeat order is a purchase against the label’s statement. What neither record carries is a fixed price a repeat order can close with: the recorded ranges are wide and the recorded price is stated under recorded conditions, so a repeat order’s price is the supplier’s figure under the specification, not a figure the record settles. The buyer’s move is to write the specification, and to check each repeat order against it.',
    directAnswerAr:
      'الطلب المتكرر هو شراء ضد سجل، والسجل الذي يحافظ على اتساقه هو مواصفة المشتري الخاصة، ليس رقما يحمله السوق. فدراسة السوق توثق الأشكال التي يحملها السوق والظروف التي قيلت فيها الأسعار المسجلة، وهذا هو السجل الذي يقول إن الطلب المتكرر شراء ضد نفس الشكل تحت نفس الظروف المعلنة، وسجل المعايير يقرر ما يجب أن يقوله منتج منتهٍ على ملصقه، وهذا هو السجل الذي يقول إن الطلب المتكرر شراء ضد بيان الملصق. وما لا يحمله أي من السجلين هو سعر ثابت يغلق عليه الطلب المتكرر: النطاقات المسجلة واسعة والسعر المسجل قيل تحت ظروف مسجلة، فسعر الطلب المتكرر هو رقم المورّد تحت المواصفة، ليس رقما يحسمه السجل. وحركة المشتري أن يكتب المواصفة، وأن يمحص كل طلب متكرر ضدها.',
    sections: [
      {
        heading: 'What a specification has to state',
        headingAr: 'ما يجب أن تقرره المواصفة',
        body: [
          'The specification is the buyer’s own record, and the record it has to state is the record that keeps a repeat order consistent. The form statement: the form the order is for, the wood, the oil, the formulation or the finished fragrance, because a figure stated for one form is not a figure for another, and the recorded market carries the forms side by side. The conditions statement: the conditions under which the figure is stated, because the recorded price is stated under recorded conditions and a repeat order under different conditions is a repeat order under a different figure. The label statement: what the finished product states on its label, because the standards record says the label is the statement the maker owes the buyer, and a repeat order against a label that has changed is a repeat order against a different product. The three statements together are the specification, and the specification is what the repeat order is checked against.',
        ],
        bodyAr: [
          'المواصفة هي سجل المشتري الخاص، والسجل الذي يجب أن يقرره هو السجل الذي يحافظ على اتساق الطلب المتكرر. فعبارة الشكل: الشكل الذي الطلب له، الخشب أو الزيت أو الصياغة أو العطر المنتهي، لأن رقما قيل عن شكل واحد ليس رقما عن آخر، والسوق المسجل يحمل الأشكال جنبا إلى جنب. وعبارة الظروف: الظروف التي قيل فيها الرقم، لأن السعر المسجل قيل تحت ظروف مسجلة، وطلب متكرر تحت ظروف مختلفة طلب متكرر تحت رقم مختلف. وعبارة الملصق: ما يصرح به المنتج المنتهى على ملصقه، لأن سجل المعايير يقول إن الملصق هو البيان الذي يدين به الصانع للمشتري، وطلب متكرر ضد ملصق تغير هو طلب متكرر ضد منتج مختلف. والعببارات الثلاث معا هي المواصفة، والمواصفة هي ما يمحص ضدها الطلب المتكرر.',
        ],
      },
      {
        heading: 'What the market record says about repeats',
        headingAr: 'ما يقوله سجل السوق عن التكرار',
        body: [
          'The market record is the side of the question the record carries on the repeat, and it carries the conditions, not the price. The market study records the forms the market carries and the conditions under which the recorded prices are stated, and the conditions are the record’s own: the recorded market carries the forms under recorded conditions, and a repeat order is a purchase against the form under the conditions. The point for the buyer is that the record states the conditions under which a figure was recorded, and a repeat order is a purchase under those conditions or under different ones, and the difference is a difference in the figure, not in the form. The record does not carry a price a repeat order closes with, because the recorded ranges are wide and the recorded price is stated under recorded conditions, so the repeat’s price is the supplier’s figure under the specification, and the specification is the buyer’s own.',
        ],
        bodyAr: [
          'سجل السوق هو جانب السؤال الذي يحمله السجل عن التكرار، ويحمل الظروف، لا السعر. فدراسة السوق تسجل الأشكال التي يحملها السوق والظروف التي قيلت فيها الأسعار المسجلة، والظروف هي الخاصة بالسجل: السوق المسجل يحمل الأشكال تحت ظروف مسجلة، وطلب متكرر شراء ضد الشكل تحت الظروف. وما يهم المشتري أن السجل يقرر الظروف التي قيل فيها رقم مسجل، وطلب متكرر شراء تحت تلك الظروف أو تحت ظروف مختلفة، والفرق فرق في الرقم، ليس في الشكل. والسجل لا يحمل سعر يغلق عليه الطلب المتكرر، لأن النطاقات المسجلة واسعة والسعر المسجل قيل تحت ظروف مسجلة، فسعر التكرار هو رقم المورّد تحت المواصفة، والمواصفة هي الخاصة بالمشتري.',
        ],
      },
      {
        heading: 'How a buyer keeps a repeat consistent',
        headingAr: 'كيف يحافظ المشتري على اتساق التكرار',
        body: [
          'The keeping is the checking of the repeat against the specification, and the check is the three statements’ own. The form check: does the repeat order is for the same form the specification states, or has the form moved from wood to oil or from oil to a finished fragrance. The conditions check: are the conditions under which the figure is stated the same as the conditions the specification states, or have the conditions moved, and if they have, the figure has moved with them. The label check: does the label state what the specification says it should state, and has the label moved, and if it has, the product has moved. The three checks together are the check of the repeat against the specification, and the check is what keeps the repeat consistent, not a price the record does not carry.',
        ],
        bodyAr: [
          'الحفاظ هو محاصلة التكرار ضدا على المواصفة، والشك هو الخاص بالعببارات الثلاث. فشك الشكل: هل الطلب المتكرر لنفس الشكل الذي تقررته المواصفة، أم تحرك الشكل من الخشب إلى الزيت أو من الزيت إلى عطر منتهى. وشك الظروف: هل الظروف التي قيل فيها الرقم هي نفس الظروف التي قررت المواصفة، أم تحركت الظروف، وإن تحركت فقد تحرك الرقم معها. وشك الملصق: هل يصرح الملصق بما تقول المواصفة إنه يجب أن يصرح به، وهل تحرك الملصق، وإن تحرك فقد تحرك المنتج. وشكان الثلاثة معا هي محاصلة التكرار ضدا على المواصفة، والشك هو ما يحافظ على اتساق التكرار، ليس سعر لا يحمله السجل.',
        ],
        list: [
          'Write the specification: the form, the conditions and the label statement, and check each repeat against the three.',
          'A figure stated under different conditions is a different figure, even for the same form.',
          'The repeat’s price is the supplier’s figure under the specification, not a figure the record settles.',
        ],
        listAr: [
          'اكتب المواصفة: الشكل والظروف وعبارة الملصق، وامحص كل تكرار ضدها.',
          'رقم قيل تحت ظروف مختلفة رقم مختلف، حتى لنفس الشكل.',
          'وسعر التكرار هو رقم المورّد تحت المواصفة، ليس رقما يحسمه السجل.',
        ],
      },
    ],
    sourceIds: ['TRAFFIC_UAE_AGARWOOD_TRADE', 'AGARWOOD_CITES_2022'],
    workedExample: {
      situation:
        'A hypothetical buyer places a second order for the same oil and the supplier’s figure has moved; the question is whether the repeat is against the specification.',
      situationAr:
        'أطلق مشتري افتراضي طلبا ثانيا لنفس الزيت وتحرك رقم المورّد؛ والسؤال هل التكرار ضد المواصفة.',
      steps: [
        'Check the form: is the second order for the same form the first was, or has the form moved from one to another.',
        'Check the conditions: are the conditions under which the figure is stated the same as the first, or have the conditions moved.',
        'Check the label: does the label state what the first order’s label stated, or has the label moved.',
        'Report: if the three hold, the repeat is against the specification and the figure’s move is the supplier’s; if one has moved, the repeat is a different order.',
      ],
      stepsAr: [
        'افحص الشكل: هل الطلب الثاني لنفس الشكل الذي كان الأول، أم تحرك الشكل من واحد إلى آخر.',
        'وافحص الظروف: هل الظروف التي قيل فيها الرقم هي نفس الأول، أم تحركت الظروف.',
        'وافحص الملصق: هل يصرح الملصق بما كان يصرح به ملصق الطلب الأول، أم تحرك الملصق.',
        'وقيل: إن صمدت الثلاثة، فالتكرار ضد المواصة وتحرك الرقم خاص بالمورّد؛ وإن تحرك واحد، فالتكرار طلب مختلف.',
      ],
      takeaway:
        'The example shows the repeat checked against the specification: the form, the conditions and the label are the three, and the figure’s move is the supplier’s under the three, not the record’s. A buyer who checks the three on each repeat is keeping the repeat consistent rather than assuming the repeat carries a figure the record does not settle.',
        takeawayAr:
      'يبيّن المثال محاصلة التكرار ضدا على المواصفة: الشكل والظروف والملصق هي الثلاثة، وتحرك الرقم خاص بالمورّد تحت الثلاثة، ليس الخاص بالسجل. ومشتري يفحص الثلاثة على كل تكرار يحافظ على اتساق التكرار بدل أن يفترض أن التكرار يحمل رقما لا يحسمه السجل.',
    },
    limitations:
      'This page states what a specification for packaging and repeat orders has to do and the checks it opens. It does not settle a repeat order’s price, because no source in the register carries a fixed price under a specification, and it does not verify a supplier’s figure: the figure is the supplier’s statement, not the record’s.',
      limitationsAr:
      'تقرر هذه الصفحة ما يجب أن تفعله مواصفة التغليف والطلبات المتكررة والفحوصات التي تفتحها. ولا تحسم سعر طلب متكرر، لأنه لا مصدر في السجل يحمل سعرا ثابتا تحت مواصفة، ولا تعزز رقم المورّد: فالرقم هو عبارة المورّد، ليس السجل.',
    nextSteps: [
      'Read the page on reading a quotation',
      'Read the page on minimum order quantities',
      'Read the page on batch records',
    ],
    nextStepsAr: [
      'اقرأ صفحة قراءة عرض السعر',
      'اقرأ صفحة الحد الأدنى لكمية الطلب',
      'اقرأ صفحة سجل الدفعات',
    ],
    related: [
      { slug: 'sourcing/reading-a-quotation', label: 'Reading a quotation' },
      { slug: 'sourcing/minimum-order-quantities', label: 'Minimum order quantities' },
      { slug: 'quality/batch-records', label: 'Batch records and what they carry' },
      { slug: 'products/perfume-packaging', label: 'The recorded packaging forms' },
    ],
  }),

  /* ---------------------------------------------------------------
     sourcing/private-label-requirements
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'sourcing/private-label-requirements',
    parent: 'sourcing',
    title: 'Prepare a private-label perfume brief',
    titleAr: 'تجهيز موجز عطر خاص بالعلامة',
    summary:
      'What a private-label perfume brief has to state and why: the product, the label and the records the standards require, and the boundary between the brief and the maker’s statement.',
    summaryAr:
      'ما يجب أن يقرر موجز عطر خاص بالعلامة ولماذا: المنتج والملصق والسجلات التي تطلبها المعايير، والحد بين الموجز وعبارة الصانع.',
    directAnswer:
      'A private-label brief is a specification the buyer writes, and the record the register carries is the record of what the specification has to state. The standards record states what a finished fragrance product must say on its label: the product type, the conditions on the materials, and the limits expressed as upper concentrations in the finished product, which is the label side of the brief. The standards guidance record states what the product type is set out to say and the conditions it carries, which is the product side of the brief. The certification record states the certification the finished product carries, which is the record side of the brief. What the record does not carry is a statement that a specific maker will meet a specific brief: no source in the register verifies a maker against a brief, and the maker’s capability is the maker’s statement, not the record’s. The brief is therefore the buyer’s specification, and the checking of the brief against the maker’s statement is the buyer’s check, not the record’s.',
    directAnswerAr:
      'موجز عطر خاص بالعلامة هو مواصفة يكتبها المشتري، والسجل الذي يحمله الدفتر هو سجل ما يجب أن تقتره المواصفة. فسجل المعايير يقرر ما يجب أن يقوله منتج العطر المنتهى على ملصقه: نوع المنتج والشروط على المواد والحدود معبرة عن تركيزها القصوى في المنتج المنتهى، وهذا هو جانب الموجز من الملصق. وسجل دليل المعايير يقرر ما تقتره نوع المنتج والشروط التي يحملها، وهذا هو جانب الموجز من المنتج. وسجل الاعتماد يقرر الاعتماد الذي يحمله المنتج المنتهى، وهذا هو جانب الموجز من السجل. وما لا يحمله السجل هو عبارة أن صانعا معينا سيحقق موجزا معينا: لا مصدر في السجل يعزز صانعا ضد موجز، وقابلية الصانع هي عبارة الصانع، ليست السجل. فالموجز إذن مواصفة المشتري، ومحاصلة الموجز ضدا على عبارة الصانع هي فحص المشتري، ليست السجل.',
    sections: [
      {
        heading: 'What the brief has to state',
        headingAr: 'ما يجب أن يقرره الموجز',
        body: [
          'The brief is the buyer’s specification, and the specification has to state the three sides the record carries. The product side: what the product is, the product type the standards set out, and the conditions the product type carries, which is the record the guidance side states. The label side: what the label must state, the product type on the label, the conditions on the materials, and the limits as upper concentrations in the finished product, which is the record the standards side states. The record side: the certification the finished product carries, and the record that carries it, which is the record the certification side states. The three sides together are the brief, and the brief is the specification the maker’s statement is checked against, which is the whole of what the record supports on the brief’s content.',
        ],
        bodyAr: [
          'الموجز هو مواصفة المشتري، والمواصفة يجب أن تقرّر الجوانب الثلاثة التي يحملها السجل. فجانب المنتج: ما هو المنتج، نوع المنتج الذي يقرره الدليل، والشروط التي يحملها نوع المنتج، وهذا هو السجل الذي يقرره جانب الدليل. وجانب الملصق: ما يجب أن يقوله الملصق، نوع المنتج على الملصق، والشروط على المواد، والحدود تركيزا قصوى في المنتج المنتهى، وهذا هو السجل الذي يقرره جانب المعايير. وجانب السجل: الاعتماد الذي يحمله المنتج المنتهى، والسجل الذي يحمله، وهذا هو السجل الذي يقرره جانب الاعتماد. والجوانب الثلاثة معا هي الموجز، والموجز هو المواصفة التي تمحص ضدها عبارة الصانع، وهذا هو كل ما يدعمه السجل على محتوى الموجز.',
        ],
      },
      {
        heading: 'The maker’s statement, not the record’s',
        headingAr: 'عبارة الصانع، ليست السجل',
        body: [
          'The brief is the buyer’s specification, and the maker’s capability to meet it is the maker’s statement, not the record’s. No source in the register verifies a maker against a brief, and the maker’s statement is a statement to check, not a fact to accept. The check on the statement is the check the brief opens: does the maker’s statement fit the product side, the label side and the record side the brief states, and does the maker’s statement hold against the lot the maker will deliver and the documents the maker will carry. The statement that does not hold on the three is a statement the buyer reads as the maker’s word only, and the buyer’s move is to check the word against the lot and the documents, not to assume the maker’s word carries the brief.',
        ],
        bodyAr: [
          'الموجز هو مواصفة المشتري، وقابلية الصانع تحقيقه عبارة الصانع، ليست السجل. فلا مصدر في السجل يعزز صانعا ضد موجز، وعبارة الصانع عبارة تمحص، ليست حقيقة تقبل. والشك على العبارة هو الشك الذي يفتحه الموجز: هل عبارة الصانع تلاءم جانب المنتج وجانب الملصق وجانب السجل الذي يقررهم الموجز، وهل تصمد عبارة الصانع أمام اللوط الذي سيعرضه الصانع والمستندات التي سيحملها الصانع. فعبارة لا تصمد على الثلاثة عبارة يقرؤها المشتري كلمة الصانع فقط، وحركة المشتري أن يمحص الكلمة ضدا على اللوط والمستندات، لا أن يفترض أن كلمة الصانع تحمل الموجز.',
        ],
      },
      {
        heading: 'How a buyer writes the brief',
        headingAr: 'كيف يكتب المشتري الموجز',
        body: [
          'The writing is ordered, and the order is the three sides’ own: the product, the label and the record. The first move is the product move: state what the product is, the product type and the conditions it carries, and the state is the guidance record’s own. The second move is the label move: state what the label must say, the product type on the label, the conditions on the materials, and the limits as upper concentrations in the finished product, and the state is the standards record’s own. The third move is the record move: state the certification the finished product carries, and the state is the certification record’s own. The three moves together are the brief, and the brief is the specification the maker’s statement is checked against, which is the whole of what the record supports on the brief’s content, and the checking of the brief against the maker’s statement is the buyer’s check, not the record’s.',
        ],
        bodyAr: [
          'الكتابة مرتبة والترتيب هو الخاص بالجوانب الثلاثة: المنتج والملصق والسجل. فالحركة الأولى هي حركة المنتج: قرر ما هو المنتج، نوع المنتج والشروط التي يحملها، والقرار هو الخاص بسجل الدليل. والحركة الثانية هي حركة الملصق: قرر ما يجب أن يقوله الملصق، نوع المنتج على الملصق والشروط على المواد والحدود تركيزا قصوى في المنتج المنتهى، والقرار هو الخاص بسجل المعايير. والحركة الثالثة هي حركة السجل: قرر الاعتماد الذي يحمله المنتج المنتهى، والقرار هو الخاص بسجل الاعتماد. وحركات الثلاثة معا هي الموجز، والموجز هو المواصفة التي تمحص ضدها عبارة الصانع، وهذا هو كل ما يدعمه السجل على محتوى الموجز، ومحاصلة الموجز ضدا على عبارة الصانع هي فحص المشتري، ليست السجل.',
        ],
        list: [
          'State the product side: the product type and the conditions it carries, on the guidance record.',
          'State the label side: what the label must say, on the standards record.',
          'State the record side: the certification the finished product carries, on the certification record.',
        ],
        listAr: [
          'قّر جانب المنتج: نوع المنتج والشروط التي يحملها، على سجل الدليل.',
          'وقّر جانب الملصق: ما يجب أن يقوله الملصق، على سجل المعايير.',
          'وقّر جانب السجل: الاعتماد الذي يحمله المنتج المنتهى، على سجل الاعتماد.',
        ],
      },
    ],
    sourceIds: ['IFRA_STANDARDS', 'IFRA_APPLYING', 'IFRA_CERT'],
    workedExample: {
      situation:
        'A hypothetical buyer writes a private-label brief for a finished fragrance and a maker’s statement does not hold on the label side; the question is what the brief shows.',
      situationAr:
        'كتب مشتري افتراضي موجزا لعطر خاص بالعلامة لمنتج عطر منتهى، وعبارة صانع لا تصمد على جانب الملصق؛ والسؤال ما يبيّنه الموجز.',
      steps: [
        'Check the product side: does the maker’s statement fit the product type and the conditions the brief states.',
        'Check the label side: does the maker’s statement fit the label the brief requires, and if it does not, the label has moved.',
        'Check the record side: does the maker’s statement fit the certification the brief requires, and if it does not, the record has moved.',
        'Report: the side that does not hold is the side the brief opens, and the buyer’s move is to check the maker’s statement against the lot and the documents, not to assume the statement carries the brief.',
      ],
      stepsAr: [
        'افحص جانب المنتج: هل عبارة الصانع تلاءم نوع المنتج والشروط التي يقررهم الموجز.',
        'وافحص جانب الملصق: هل عبارة الصانع تلاءم الملصق الذي يطلبه الموجز، وإن لم تلاءمه، فالمصق تحرك.',
        'وافحص جانب السجل: هل عبارة الصانع تلاءم الاعتماد الذي يطلبه الموجز، وإن لم تلاءمه، فالسجل تحرك.',
        'وقيل: الجانب الذي لا يصمد هو الجانب الذي يفتحه الموجز، وحركة المشتري أن يمحص عبارة الصانع ضدا على اللوط والمستندات، لا أن يفترض أن العبارة تحمل الموجز.',
      ],
      takeaway:
        'The example shows the brief read on the record: the three sides are the brief, and the side that does not hold is the side the brief opens. A buyer who checks the maker’s statement against the lot and the documents is checking the brief correctly, not assuming the maker’s statement carries it.',
      takeawayAr:
      'يبيّن المثال قراءة الموجز على السجل: الجوانب الثلاثة هي الموجز، والجانب الذي لا يصمد هو الجانب الذي يفتحه الموجز. ومشتري يمحص عبارة الصانع ضدا على اللوط والمستندات يمحص الموجز صحيحا، لا يفترض أن عبارة الصانع تحمل الموجز.',
    },
    limitations:
      'This page states what a private-label perfume brief has to do and the records that carry the brief’s three sides. It does not verify a maker’s capability against a brief, because no source in the register does; the maker’s capability is the maker’s statement, and the check is the buyer’s.',
      limitationsAr:
      'تقرر هذه الصفحة ما يجب أن يقرره موجز عطر خاص بالعلامة والسجلات التي تحمل الجوانب الثلاثة للموجز. ولا تعزز قابلية صانع ضد موجز، لأنه لا مصدر في السجل يفعل ذلك؛ وقابلية الصانع عبارة الصانع، والفحص للمشتري.',
    nextSteps: [
      'Read the page on choosing a distiller for the supplier side',
      'Read the page on the standards for the product side',
      'Read the page on the certification record for the record side',
    ],
    nextStepsAr: [
      'اقرأ صفحة اختيار المقطر لجانب المورّد',
      'اقرأ صفحة المعايير لجانب المنتج',
      'اقرأ صفحة سجل الاعتماد لجانب السجل',
    ],
    related: [
      { slug: 'products/private-label-perfumes', label: 'The recorded private-label form' },
      { slug: 'products/perfume-packaging', label: 'The recorded packaging forms' },
      { slug: 'sourcing/choosing-a-distiller', label: 'The supplier side of the brief' },
      { slug: 'fragrance/brand-and-manufacturing-origin', label: 'What the record states on origin' },
    ],
  }),

  /* ---------------------------------------------------------------
     sourcing/choosing-a-distiller
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'sourcing/choosing-a-distiller',
    parent: 'sourcing',
    title: 'Questions for a distillation supplier',
    titleAr: 'أسئلة لمورّد التقطير',
    summary:
      'The questions a buyer asks a distillation supplier, and why each question is a check on the supplier’s statement rather than a fact the record settles.',
    summaryAr:
      'الأسئلة التي يسألها المشتري لمورّد التقطير، ولماذا كل سؤال هو محاصلة على عبارة المورّد لا حقيقة يحسمها السجل.',
    directAnswer:
      'The questions are checks on the supplier’s statements, not facts the record settles. The production record the register carries states what the extraction process is and what the oil is that comes from it, which is the process side of the question, and the standards record states what a finished product must say on its label, which is the label side. What the record does not carry is a statement that a specific distiller meets a specific question: no source in the register verifies a distiller against a question, and each question opens a check on the supplier’s statement rather than a fact the record gives. The questions are therefore the buyer’s checks: the question on the process, the question on the oil, the question on the label, and each check is the question’s own, and the supplier’s answer is the statement the question is checked against. The page states the questions and the checks they open, and it keeps each answer as the supplier’s statement, not as a fact the record settles.',
    directAnswerAr:
      'الأسئلة فحوص على أفعال المورّد، ليست حقائق يحسمها السجل. فسجل الإنتاج الذي يحمله الدفتر يقرر ما هي عملية الاستخراج وما هو الزيت الذي يخرج منها، وهذا هو جانب السؤال من العملية، وسجل المعايير يقرر ما يجب أن يقوله منتج منتهى على ملصقه، وهذا هو جانب السؤال من الملصق. وما لا يحمله السجل هو عبارة أن مقرطا معينا يحقق سؤالا معينا: لا مصدر في السجل يعزز موقتا ضد سؤال، وكل سؤال يفتح شك على عبارة المورّد، ليس حقيقة يعطيها السجل. فالأسئلة إذن فحوصات المشتري: السؤال عن العملية، والسؤال عن الزيت، والسؤال عن الملصق، وكل فحص هو الخاص بالسؤال، وجواب المورّد هو العبارة التي يمحص ضدها السؤال. والصفحة تقرّر الأسئلة والفحوصات التي تفتحها، وتبقي كل جواب عبارة المورّد، لا حقيقة يحسمها السجل.',
    sections: [
      {
        heading: 'The questions and the checks they open',
        headingAr: 'الأسئلة والفحوصات التي تفتحها',
        body: [
          'The questions are the buyer’s checks, and each question opens a check on the supplier’s statement. The process question: what is the process, the method the distiller states and the side the production record carries, and the check is whether the statement fits the process the record names for the oil. The oil question: what is the oil, the substance the process carries and the side the production record names, and the check is whether the statement fits the oil the record names. The label question: what does the label state, the product type and the conditions and the limits the standards record requires, and the check is whether the label fits the standards the record states. Each question is a check, and the check is the record’s own on its side, and the supplier’s answer is the statement the check is against, not a fact the record settles.',
        ],
        bodyAr: [
          'الأسئلة هي فحوصات المشتري، وكل سؤال يفتح شك على عبارة المورّد. فسؤال العملية: ما هي العملية، الطريقة التي يصرح بها المورّد وجانبها يحمل سجل الإنتاج، والشك هو هل العبارة تلاءم العملية التي يسميها السجل للزيت. وسؤال الزيت: ما هو الزيت، المادة التي تحملها العملية وجانبها يسميه سجل الإنتاج، والشك هو هل العبارة تلاءم الزيت الذي يسميه السجل. وسؤال الملصق: ما الذي يصرح به الملصق، نوع المنتج والشروط والحدود التي يطلبها سجل المعايير، والشك هو هل الملصق يلاءم المعايير التي يقررها السجل. وكل سؤال شك، والشك هو الخاص بالسجل على جانبه، وجواب المورّد هو العبارة التي يمحص ضدها الشك، ليست حقيقة يحسمها السجل.',
        ],
      },
      {
        heading: 'What the record settles on each side',
        headingAr: 'ما يحسمه السجل على كل جانب',
        body: [
          'The record settles each side on its own, and the side is the record’s, not the supplier’s. The process side: the production record states what the extraction process is and what the oil is that comes from it, and the statement is the record’s, so the supplier’s statement on the process is checked against the record’s statement, and the check is whether the supplier’s statement fits the record’s. The label side: the standards record states what a finished product must say on its label, and the statement is the record’s, so the supplier’s label is checked against the record’s statement, and the check is whether the label fits the record. The record settles the sides, and the supplier’s statement is the check, not the settled fact, which is the whole of what the record supports on the questions it carries.',
        ],
        bodyAr: [
          'السجل يحسم كل جانب على نفسه، والجانب للسجل، ليس للمورّد. فجانب العملية: سجل الإنتاج يقرر ما هي عملية الاستخراج وما هو الزيت الذي يخرج منها، والقرار هو الخاص بالسجل، فعبارة المورّد على العملية تمحص ضدا على عبارة السجل، والشك هل عبارة المورّد تلاءم عبارة السجل. وجانب الملصق: سجل المعايير يقرر ما يجب أن يقوله منتج منتهٍ على ملصقه، والقرار هو الخاص بالسجل، فملصق المورّد يمحص ضدا على عبارة السجل، والشك هل الملصق يلاءم السجل. والسجل يحسم الجوانب، وعبارة المورّد هي الشك، ليست الحقيقة المحسومة، وهذا هو كل ما يدعمه السجل على الأسئلة التي يحملها.',
        ],
      },
      {
        heading: 'How a buyer reads the answers',
        headingAr: 'كيف يقرأ المشتري الأجوبة',
        body: [
          'The reading is the checking of the answers against the record’s sides, and the check is the record’s own: does the supplier’s answer fit the side the record settles. The process answer is checked against the process the production record states, and the check is whether the answer fits the record’s statement, or whether the answer moves past it. The label answer is checked against the label the standards record requires, and the check is whether the answer fits the record’s requirement, or whether the answer moves past it. The two checks together are the check of the answers against the record, and the check is what the record supports, not a guarantee the supplier’s answer does not carry. A buyer who checks the answers against the record is checking them correctly, and a buyer who accepts the answers as the record is accepting what the record does not settle.',
        ],
        bodyAr: [
          'القراءة هي محاصلة الأجوبة ضدا على جوانب السجل، والشك هو الخاص بالسجل: هل جواب المورّد يلاءم الجانب الذي يحسمه السجل. وجواب العملية تمحص ضدا على العملية التي يقرر فيها سجل الإنتاج، والشك هل الجواب يلاءم عبارة السجل، أم يتقدم الجواب عليها. وجواب الملصق يمحص ضدا على الملصق الذي تطلبه سجل المعايير، والشك هل الجواب يلاءم تطلب السجل، أم يتقدم الجواب عليها. وشكان معا هما محاصلة الأجوبة ضدا على السجل، والشك هو ما يدعمه السجل، ليس ضمانة لا يحملها جواب المورّد. ومشتري يمحص الأجوبة ضدا على السجل يمحصها صحيحا، ومشتري يقبل الأجوبة كأنها السجل يقبل ما لا يحسمه السجل.',
        ],
        list: [
          'Ask the process question, and check the answer against the process the production record states.',
          'Ask the label question, and check the answer against the label the standards record requires.',
          'Keep each answer as the supplier’s statement, and check the statement against the record’s side.',
        ],
        listAr: [
          'اسأل سؤال العملية، وامحص الجواب ضدا على العملية التي يقرر فيها سجل الإنتاج.',
          'واسأل سؤال الملصق، وامحص الجواب ضدا على الملصق الذي تطلبه سجل المعايير.',
          'وأبقِ كل جواب عبارة المورّد، وامحص العبارة ضدا على جانب السجل.',
        ],
      },
    ],
    sourceIds: ['TRAFFIC_UAE_AGARWOOD_TRADE', 'ITTO_AGARWOOD_REVIEW'],
    workedExample: {
      situation:
        'A hypothetical buyer asks a distiller three questions and one answer does not fit the process the record states; the question is what the mismatch shows.',
      situationAr:
        'سأل مشتري افتراضي موقتا ثلاثة أسئلة وجواب واحد لا يلاءم العملية التي يقرر فيها السجل؛ والسؤال ما يبيّن التعثر.',
      steps: [
        'Ask the process question, and read the answer against the process the production record states.',
        'Ask the oil question, and read the answer against the oil the record names.',
        'Ask the label question, and read the answer against the label the standards record requires.',
        'Report: the mismatch on the process is the supplier’s statement, and the buyer’s move is to check the statement against the record’s side, not to accept it as the record’s.',
      ],
      stepsAr: [
        'اسأل سؤال العملية، واقرا الجواب ضدا على العملية التي يقرر فيها سجل الإنتاج.',
        'واسأل سؤال الزيت، واقرا الجواب ضدا على الزيت الذي يسميه السجل.',
        'واسأل سؤال الملصق، واقرا الجواب ضدا على الملصق الذي تطلبه سجل المعايير.',
        'وقيل: التعثر على العملية هو عبارة المورّد، وحركة المشتري أن يمحص العبارة ضدا على جانب السجل، لا أن يقبلها كأنها السجل.',
      ],
      takeaway:
        'The example shows the questions read on the record: each question is a check on the supplier’s statement, and the mismatch is the supplier’s statement, not the record’s. A buyer who checks the answers against the record’s sides is checking them correctly, not accepting the supplier’s statement as the record settles it.',
      takeawayAr:
      'يبيّن المثال قراءة الأسئلة على السجل: كل سؤال هو شك على عبارة المورّد، والتعثر هو عبارة المورّد، ليس السجل. ومشتري يمحص الأجوبة ضدا على جوانب السجل يمحصها صحيحا، لا يقبل عبارة المورّد على ما يحسمه السجل.',
    },
    limitations:
      'This page states the questions a buyer asks a distillation supplier and the checks each one opens. It does not verify a distiller’s capability against any question, because no source in the register does; each answer is the supplier’s statement, and the check is the buyer’s.',
      limitationsAr:
      'تقرر هذه الصفحة الأسئلة التي يسألها المشتري لمورّد التقطير والفحوصات التي يفتحها كل منها. ولا تعزز قابلية موقّت ضد أي سؤال، لأنه لا مصدر في السجل يفعل ذلك؛ وكل جواب عبارة المورّد، والفحص للمشتري.',
    nextSteps: [
      'Read the page on what the extraction process is',
      'Read the page on the standards for the label side',
      'Read the page on reading a quotation for the supplier’s figure',
    ],
    nextStepsAr: [
      'اقرأ صفحة ما هي عملية الاستخراج',
      'اقرأ صفحة المعايير لجانب الملصق',
      'اقرأ صفحة قراءة عرض السعر لرقم المورّد',
    ],
    related: [
      { slug: 'production/oud-extraction-methods', label: 'What the extraction process is' },
      { slug: 'production/from-wood-to-oil', label: 'The side the process record carries' },
      { slug: 'sourcing/reading-a-quotation', label: 'The supplier’s figure, read' },
      { slug: 'sourcing/comparing-supplier-quotes', label: 'Comparing the supplier’s statements' },
    ],
  }),
];
