import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

/**
 * Editorial guides: the fragrance block.
 *
 * A fragrance page is where the material meets the finished product, and
 * the register documents the standards and the market, not a maker’s
 * batch log or a substance’s chemistry. Each page states the documented
 * record it rests on and keeps every claim it does not carry marked as a
 * limitation.
 */

export const editorialGuideFragrance: Article[] = [
  /* ---------------------------------------------------------------
     fragrance/bottle-variants-and-batches
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'fragrance/bottle-variants-and-batches',
    parent: 'fragrance',
    title: 'Bottle variants, reformulations and batches',
    titleAr: 'أنواع الزجاجة وإعادة الصياغة والدفعات',
    summary:
      'What a buyer can honestly do about bottle variants, reformulations and batches: what the record supports as a check on the product, and what it does not, and why a batch is a maker’s log rather than a fact the record settles.',
    summaryAr:
      'ما يستطيع المشتري أن يفعله بصدق في أنواع الزجاجة وإعادة الصياغة والدفعات: ما يدعمه السجل كشك على المنتج، وما لا يدعمه، ولماذا الدفعة سجل الصانع، ليست حقيقة يحسمها السجل.',
    directAnswer:
      'A bottle variant is a difference in the product, a reformulation is a change in the product’s composition, and a batch is the maker’s own log of a production run, and the record the register carries is the record of what a finished product must state on its label, not the maker’s batch log. The standards record states that the label carries the product type, the conditions on the materials and the limits as upper concentrations in the finished product, which is the record that says a bottle’s statement is the label’s, not the batch’s. The market study records the forms the market carries, which is the record that says the bottle is one of the recorded forms. What the record does not carry is the batch: no source in the register records a maker’s production run, and a batch is the maker’s log, not the record’s. The buyer’s move is to read the bottle against the label, and to keep the batch as the maker’s statement, because the batch is what the maker’s log says, not what the record settles.',
    directAnswerAr:
      'نوع الزجاجة هو فرق في المنتج، وإعادة الصياغة هي تغيير في تركيب المنتج، والدفعة هي سجل الصانع الخاص لجولة إنتاج، والسجل الذي يحمله الدفتر هو سجل ما يجب أن يصرح به منتج منتهى على ملصقه، ليس سجل دفعات الصانع. فسجل المعايير يقرر أن الملصق يحمل نوع المنتج والشروط على المواد والحدود تركيزا قصوى في المنتج المنتهى، وهذا هو السجل الذي يقول إن عبارة الزجاجة هي الخاصية بالمقصق، ليست الخاصية بالدفعة. ودراسة السوق تسجل الأشكال التي يحملها السوق، وهذا هو السجل الذي يقول إن الزجاجة هي من بين الأشكال المسجلة. وما لا يحمله السجل هو الدفعة: لا مصدر في السجل يسجل جولة إنتاج صانع، والدفعة هي سجل الصانع، ليست السجل. وحركة المشتري أن يقرأ الزجاجة ضدا على المقصق، وأن يبقي الدفعة عبارة الصانع، لأن الدفعة ما يقوله سجل الصانع، ليس ما يحسمه السجل.',
    sections: [
      {
        heading: 'What each of the three is',
        headingAr: 'ما هو كل من الثلاثة',
        body: [
          'The three are different, and the difference is the record’s, not the maker’s. A bottle variant is a difference in the product: the same product in a different form, a different size, a different label, and the difference is the product’s own, which is why the variant is a recorded difference in the recorded form. A reformulation is a change in the product’s composition: the product’s own statement has moved, and the move is the maker’s word on the product, not a fact the record settles, because the record settles what the label must state, not what the maker has changed. A batch is the maker’s log of a production run: the maker’s own record of a run, which is the maker’s statement on the run, not a fact the record carries, because no source in the register records a maker’s production run. The three are the product’s, the maker’s and the maker’s log, and the record settles only the first of the three.',
        ],
        bodyAr: [
          'الثلاثة مختلفون والفرق للسجل، ليس الخاص بالصانع. فنوع الزجاجة هو فرق في المنتج: نفس المنتج في شكل مختلف، حجم مختلف، ملصق مختلف، والفرق هو الخاص بالمنتج، ولهذا النوع هو فرق مسجل في الشكل المسجل. وإعادة الصياغة هي تغيير في تركيب المنتج: عبارة المنتج الخاصة قد تحركت، والتحرك هو كلمة الصانع على المنتج، ليست حقيقة يحسمها السجل، لأن السجل يحسم ما يجب أن يصرح به الملصق، ليس ما غيّره الصانع. والدفعة هي سجل الصانع لجولة إنتاج: سجل الصانع الخاص بجولة، وهذا عبارة الصانع على الجولة، ليست حقيقة يحملها السجل، لأنه لا مصدر في السجل يسجل جولة إنتاج صانع. والثلاثة هي الخاصية بالمنتج والخاصية بالصانع وسجل الصانع، والسجل يحسم الأول فقط من الثلاثة.',
        ],
      },
      {
        heading: 'What the record settles on the label',
        headingAr: 'ما يحسمه السجل على الملصق',
        body: [
          'The record settles the label side of the question, and the label is the record’s own. The standards record states what a finished product must state on its label: the product type, the conditions on the materials, and the limits as upper concentrations in the finished product, and the statement is the record’s, not the maker’s. The market study records the forms the market carries, and the bottle is one of the recorded forms, which is the record’s own on the form side. The two records together settle the label and the form, and the buyer’s move is to read the bottle against the two: does the label state what the standards require, and does the bottle carry one of the recorded forms, and the reading is the record’s own, not the maker’s. The maker’s statement is the batch, and the batch is the maker’s log, and the log is not the record’s, which is the whole of what the record supports on the three it carries.',
        ],
        bodyAr: [
          'السجل يحسم جانب السؤال من الملصق، والملصق هو الخاص بالسجل. فسجل المعايير يقرر ما يجب أن يصرح به منتج منتهٍ على ملصقه: نوع المنتج، والشروط على المواد، والحدود تركيزا قصوى في المنتج المنتهى، والقرار هو الخاص بالسجل، ليس الخاص بالصانع. ودراسة السوق تسجل الأشكال التي يحملها السوق، والزجاجة هي من بين الأشكال المسجلة، وهذا هو الخاص بالسجل على جانب الشكل. وسجلان معا يحسمان الملصق والشكل، وحركة المشتري أن يقرأ الزجاجة ضدا على الاثنتين: هل يصرح الملصق بما تطلبه المعايير، وهل تحمل الزجاجة شكلا من الأشكال المسجلة، والقراءة هي الخاصة بالسجل، ليست الخاصية بالصانع. وعبارة الصانع هي الدفعة، والدفعة هي سجل الصانع، والسجل ليس الخاص بالسجل، وهذا هو كل ما يدعمه السجل على الثلاثة التي يحملها.',
        ],
      },
      {
        heading: 'How a buyer reads a bottle',
        headingAr: 'كيف يقرأ المشتري الزجاجة',
        body: [
          'The reading is the check of the bottle against the record’s two sides: the label and the form. The label check: does the bottle’s label state the product type and the conditions and the limits the standards record requires, and does the label carry the product’s own statement, and the check is whether the label holds against the record. The form check: does the bottle carry one of the recorded forms the market study names, and the check is whether the form holds against the record. The two checks together are the reading of the bottle against the record, and the reading is what the record supports on the bottle, not a fact the batch settles. The buyer’s move is to read the bottle against the two, and to keep the batch as the maker’s statement, because the batch is the maker’s log, not the record’s, and the log does not settle the bottle the record settles.',
        ],
        bodyAr: [
          'القراءة هي محاصلة الزجاجة ضدا على جانبين من السجل: الملصق والشكل. فشك الملصق: هل يصرح ملصق الزجاجة بنوع المنتج والشروط والحدود التي تطلبها سجل المعايير، وهل يحمل الملصق عبارة المنتج الخاصة، والشك هل الملصق يصمد أمام السجل. وشك الشكل: هل تحمل الزجاجة شكلا من الأشكال المسجلة التي يسميها دراسة السوق، والشك هل الشكل يصمد أمام السجل. وشكان معا هما قراءة الزجاجة ضدا على السجل، والقراءة هي ما يدعمه السجل على الزجاجة، ليست حقيقة تحسمها الدفعة. وحركة المشتري أن يقرأ الزجاجة ضدا على الاثنين، وأن يبقي الدفعة عبارة الصانع، لأن الدفعة هي سجل الصانع، ليست السجل، والسجل لا يحسم الزجاجة التي يحسمها السجل.',
        ],
        list: [
          'Read the bottle’s label against the standards: the product type, the conditions and the limits.',
          'Read the bottle’s form against the recorded forms the market carries.',
          'Keep the batch as the maker’s statement, because the batch is the maker’s log, not the record’s.',
        ],
        listAr: [
          'اقرا ملصق الزجاجة ضدا على المعايير: نوع المنتج، والشروط، والحدود.',
          'واقرا شكل الزجاجة ضدا على الأشكال المسجلة التي يحملها السوق.',
          'وأبقِ الدفعة عبارة الصانع، لأن الدفعة هي سجل الصانع، ليست السجل.',
        ],
      },
    ],
    sourceIds: ['TRAFFIC_UAE_AGARWOOD_TRADE', 'IFRA_STANDARDS'],
    workedExample: {
      situation:
        'A hypothetical buyer holds two bottles of the same named product with different batch codes and wants to know whether the record settles the difference.',
      situationAr:
        'حيازة المشتري الافتراضي زجاجتين من منتج باسم واحد بأكواد دفعات مختلفة، ويريد أن يعرف إن كان السجل يحسم الفرق.',
      steps: [
        'Check the label: do the two bottles carry the same label, and does the label state what the standards require.',
        'Check the form: do the two bottles carry the same recorded form, and does the form hold against the market record.',
        'Check the batches: the two batch codes are the maker’s log, and the record does not record the batches, so the difference is the maker’s statement, not the record’s.',
        'Report: the label and the form are on the record, the batches are not, and the difference between the two bottles is the maker’s log, not a fact the record settles.',
      ],
      stepsAr: [
        'افحص الملصق: هل الزجاجتان تحملان نفس الملصق، وهل يصرح الملصق بما تطلبه المعايير.',
        'وافحص الشكل: هل الزجاجتان تحملان نفس الشكل المسجل، وهل الشكل يصمد أمام سجل السوق.',
        'وافحص الدفعات: كودا الدفعتين هما سجل الصانع، والسجل لا يسجل الدفعات، فالفرق هو عبارة الصانع، ليس السجل.',
        'وقيل: الملصق والشكل على السجل والدفعات ليست، والفرق بين الزجاجتين هو سجل الصانع، ليست حقيقة يحسمها السجل.',
      ],
      takeaway:
        'The example shows the reading split between the record’s two sides and the maker’s log: the label and the form are on the record, the batches are not, and the difference between the two bottles is the maker’s log, not a fact the record settles. A buyer who reads the two bottles against the record and keeps the batches as the maker’s statement is reading the bottles correctly, not assuming the record settles the difference it does not carry.',
        takeawayAr:
      'يبيّن المثال قسمة القراءة بين الجانبين الخاصين بالسجل وسجل الصانع: الملصق والشكل على السجل والدفعات ليست، والفرق بين الزجاجتين هو سجل الصانع، ليست حقيقة يحسمها السجل. ومشتري يقرأ الزجاجتين ضدا على السجل ويبقي الدفعات عبارة الصانع يقرأ الزجاجتين صحيحا، لا يفترض أن السجل يحسم الفرق الذي لا يحمله.',
    },
    limitations:
      'This page states what the record settles on the label and the form sides of a bottle, and what it does not: the batch. It does not record a maker’s production run, and it does not settle a difference between two bottles’ batches, because no source in the register does.',
      limitationsAr:
      'تقرر هذه الصفحة ما يحسمه السجل على جانبَي الملصق والشكل من زجاجة، وما لا يحسمه: الدفعة. ولا تسجل جولة إنتاج صانع، ولا تحسم فرقا بين دفعات زجاجتين، لأنه لا مصدر في السجل يفعل ذلك.',
    nextSteps: [
      'Read the page on concentration labels for the label side',
      'Read the page on notes versus ingredients for what the label does not state',
      'Read the page on batch records for what a record of a run carries',
    ],
    nextStepsAr: [
      'اقرأ صفحة ملصقات التركيز لجانب الملصق',
      'اقرأ صفحة الذبذبات مقابل المكونات لما لا يصرح به الملصق',
      'اقرأ صفحة سجل الدفعات لما يحمله سجل جولة',
    ],
    related: [
      { slug: 'fragrance/concentration-labels', label: 'The label side of a bottle' },
      { slug: 'quality/batch-records', label: 'What a record of a run carries' },
      { slug: 'fragrance/oud-accords', label: 'The product form the market carries' },
      { slug: 'products/oud-oil', label: 'The recorded form behind the bottle' },
    ],
  }),

  /* ---------------------------------------------------------------
     fragrance/musk-terminology
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'fragrance/musk-terminology',
    parent: 'fragrance',
    title: 'Musk terminology in fragrance',
    titleAr: 'مصطلحات المِسك في العطور',
    summary:
      'What the term musk does in a fragrance’s own statement: the recorded position of the term in the standards and the market, and the boundary where the record stops.',
    summaryAr:
      'ما الذي تفعله كلمة المِسك في عبارة العطر الخاصة: الموضع المسجل للكلمة في المعايير والسوق، والحد الذي ينتهي عنده السجل.',
    directAnswer:
      'The term musk in a fragrance’s statement is the term the record carries on two sides, and the two sides are the standards’ own and the market’s own. The standards record states the position of the term in the standards: the term is the standard’s word for a substance, and the standard’s word is what the label carries when it names the term, which is the recorded side of the term. The market record states the forms the market carries under the term, which is the recorded side of the term’s movement. What the record does not carry is the substance the term names: the record does not state what the substance is, does not state the chemistry of it, and does not state whether the substance in a specific bottle is the term’s, and each of those is a statement the record does not make. The term’s position is therefore the record’s on the two sides, and the substance behind the term is the term’s own, and the page states the two and keeps the boundary between them visible, because the boundary is where the record stops and the term’s own statement begins.',
    directAnswerAr:
      'كلمة المِسك في عبارة العطر هي الكلمة التي يحملها السجل على جانبين، والجانبان هما الخاصان بالمعايير والخاصان بالسوق. فسجل المعايير يقرر موضع الكلمة في المعايير: الكلمة هي كلمة القياس لمادة، وكلمة القياس هي ما يحملها المقصق حين يسمي الكلمة، وهذا هو الجانب المسجل للكلمة. وسجل السوق يقرر الأشكال التي يحملها السوق تحت الكلمة، وهذا هو الجانب المسجل من حركة الكلمة. وما لا يحمله السجل هو المادة التي تسميها الكلمة: السجل لا يقرر ما هي المادة، ولا يقرر كيمياءها، ولا يقرر إن كانت المادة في زجاجة معينة هي خاصية بالكلمة، وكل ذلك عبارة لا يصنعها السجل. فموضع الكلمة إذن هو الخاص بالسجل على الجانبين، والمادة خلف الكلمة هي الخاصية بالكلمة، والصفحة تقرّر الاثنين وتبقي الحد بينهما ظاهرا، لأن الحد هو حيث ينتهي السجل وتبدأ عبارة الكلمة الخاصة.',
    sections: [
      {
        heading: 'The term on the two recorded sides',
        headingAr: 'الكلمة على الجانبين المسجلين',
        body: [
          'The record carries the term on two sides, and the two sides are the standards’ own and the market’s own. The standards side is the side the standards record carries: the standards state the position of the term in the standards, and the term is the standard’s word for a substance, and the standard’s word is what the label carries when it names the term. The point for the buyer is that the label’s statement of the term is the standards’ own on the standards side, and the label carries the term as the standards’ word rather than as the maker’s word, which is the recorded side of the label. The market side is the side the market record carries: the market study states the forms the market carries under the term, and the forms are the recorded forms the market moves the term in, which is the recorded side of the term’s movement. The two sides together are the record’s own on the term, and the term’s position is the record’s, not the maker’s.',
        ],
        bodyAr: [
          'السجل يحمل الكلمة على جانبين، والجانبان هما الخاصان بالمعايير والخاصان بالسوق. فجانب المعايير هو الجانب الذي يحمله سجل المعايير: المعايير تقرّر موضع الكلمة في المعايير، والكلمة هي كلمة القياس لمادة، وكلمة القياس هي ما يحمله المقصق حين يسمي الكلمة. وما يهم المشتري أن عبارة المقصق عن الكلمة هي الخاصية بالمعايير على جانب المعايير، والمقصق يحمل الكلمة كلمة المعايير، ليست كلمة الصانع، وهذا هو الجانب المسجل من المقصق. وجانب السوق هو الجانب الذي يحمله سجل السوق: دراسة السوق تقرّر الأشكال التي يحملها السوق تحت الكلمة، والأشكال هي الأشكال المسجلة التي يحرّك بها السوق الكلمة، وهذا هو الجانب المسجل من حركة الكلمة. والجانبان معا هما الخاص بالسجل على الكلمة، وموضع الكلمة هو الخاص بالسجل، ليس الخاص بالصانع.',
        ],
      },
      {
        heading: 'The substance the record does not state',
        headingAr: 'المادة التي لا يقررها السجل',
        body: [
          'The record does not state the substance the term names, and the page states that plainly. The record does not state what the substance is: it does not state the chemistry of the substance, does not state the origin of the substance, and does not state whether the substance in a specific bottle is the term’s substance. Each of those is a statement the record does not make, and each is the term’s own rather than the record’s. The buyer’s position is to read the term on the two recorded sides, and to keep the substance behind the term as the term’s own statement, because the substance is the term’s, not the record’s. The term’s position is the record’s, and the substance is the term’s, and the line between the two is what the page keeps visible, which is the whole of what the record supports on the term it carries.',
        ],
        bodyAr: [
          'السجل لا يقرر المادة التي تسميها الكلمة، والصفحة تقول ذلك بوضوح. فالسجل لا يقرر ما هي المادة: لا يقرر كيمياء المادة، ولا يقرر منشأ المادة، ولا يقرر إن كانت المادة في زجاجة معينة هي مادة الكلمة. وكل ذلك عبارة لا يصنعها السجل، وكلها خاصية بالكلمة، ليست الخاصة بالسجل. وموضع المشتري أن يقرأ الكلمة على الجانبين المسجلين، وأن يبقي المادة خلف الكلمة عبارة الكلمة الخاصة، لأن المادة هي الخاصة بالكلمة، ليست الخاصة بالسجل. فموضع الكلمة هو الخاص بالسجل، والمادة هي الخاصة بالكلمة، والخط بينهما هو ما تَظْهره الصفحة، وهذا هو كل ما يدعمه السجل على الكلمة التي يحملها.',
        ],
      },
      {
        heading: 'How a buyer reads the term',
        headingAr: 'كيف يقرأ المشتري الكلمة',
        body: [
          'The reading is the check of the term against the record’s two sides: the standards side and the market side. The standards check: does the label carry the term as the standards’ word, and does the label’s statement of the term hold against the standards the record states, and the check is whether the label holds against the record. The market check: does the form the market carries under the term hold against the recorded forms the market study names, and the check is whether the form holds against the record. The two checks together are the reading of the term against the record, and the reading is what the record supports on the term, not a fact the substance settles. The buyer’s move is to read the term against the two, and to keep the substance as the term’s own statement, because the substance is the term’s, not the record’s, and the line between the term and the substance is what the page carries rather than a figure the record does not have.',
        ],
        bodyAr: [
          'القراءة هي محاصلة الكلمة ضدا على الجانبين من السجل: جانب المعايير وجانب السوق. فشك المعايير: هل يحمل المقصق الكلمة كلمة المعايير، وهل تصريح المقصق عن الكلمة يصمد أمام المعايير التي يقررها السجل، والشك هل المقصق يصمد أمام السجل. وشك السوق: هل الشكل الذي يحمله السوق تحت الكلمة يصمد أمام الأشكال المسجلة التي تسميها دراسة السوق، والشك هل الشكل يصمد أمام السجل. وشكان معا هما قراءة الكلمة ضدا على السجل، والقراءة هي ما يدعمه السجل على الكلمة، ليست حقيقة تحسمها المادة. وحركة المشتري أن يقرأ الكلمة ضدا على الاثنين، وأن يبقي المادة عبارة الكلمة الخاصة، لأن المادة هي الخاصة بالكلمة، ليست الخاصة بالسجل، والخط بين الكلمة والمادة هو ما تحمل الصفحة، ليس رقبا لا يملكه السجل.',
        ],
        list: [
          'Read the term on the standards side: does the label carry the term as the standards’ word.',
          'Read the term on the market side: does the form the market carries hold against the recorded forms.',
          'Keep the substance behind the term as the term’s own statement, because the record does not state it.',
        ],
        listAr: [
          'اقرا الكلمة على جانب المعايير: هل يحمل المقصق الكلمة كلمة المعايير.',
          'واقرا الكلمة على جانب السوق: هل الشكل الذي يحمله السوق يصمد أمام الأشكال المسجلة.',
          'وأبقِ المادة خلف الكلمة عبارة الكلمة الخاصة، لأن السجل لا يقررها.',
        ],
      },
    ],
    sourceIds: ['IFRA_STANDARDS', 'IFRA_LIBRARY'],
    workedExample: {
      situation:
        'A hypothetical buyer sees a bottle labelled with the term and wants to know what the term settles about the substance in the bottle.',
      situationAr:
        'رأى المشتري الافتراضي زجاجة ملصقها بالكلمة، ويريد أن يعرف ما تحسمه الكلمة عن المادة في الزجاجة.',
      steps: [
        'Check the standards side: does the label carry the term as the standards’ word, and does the label’s statement hold against the standards.',
        'Check the market side: does the form the market carries under the term hold against the recorded forms.',
        'Check the substance: the record does not state what the substance is, so the substance is the term’s own statement, not the record’s.',
        'Report: the term’s position is on the record, the substance is not, and the bottle’s statement of the substance is the maker’s word, not the record’s.',
      ],
      stepsAr: [
        'افحص جانب المعايير: هل يحمل المقصق الكلمة كلمة المعايير، وهل تصريح المقصق يصمد أمام المعايير.',
        'وافحص جانب السوق: هل الشكل الذي يحمله السوق تحت الكلمة يصمد أمام الأشكال المسجلة.',
        'وافحص المادة: السجل لا يقرر ما هي المادة، فالمادة عبارة الكلمة الخاصة، ليست السجل.',
        'وقيل: موضع الكلمة على السجل والمادة ليست، وعبارة الزجاجة عن المادة كلمة الصانع، ليست السجل.',
      ],
      takeaway:
        'The example shows the term read on the two recorded sides: the standards side and the market side are on the record, and the substance is not, so the bottle’s statement of the substance is the maker’s word. A buyer who reads the term against the record and keeps the substance as the term’s own statement is reading the term correctly, not buying a fact the record does not carry.',
        takeawayAr:
      'يبيّن المثال قراءة الكلمة على الجانبين المسجلين: جانب المعايير وجانب السوق على السجل والمادة ليست، فعبارة الزجاجة عن المادة كلمة الصانع. ومشتري يقرأ الكلمة ضدا على السجل ويبقي المادة عبارة الكلمة الخاصة يقرأ الكلمة صحيحا، لا يشتري حقيقة لا يحمله السجل.',
    },
    limitations:
      'This page states the term’s position on the two recorded sides, the standards and the market. It does not state the substance the term names, and it does not verify the substance in any specific bottle, because no source in the register does.',
      limitationsAr:
      'تقرر هذه الصفحة موضع الكلمة على الجانبين المسجلين، المعايير والسوق. ولا تقرر المادة التي تسميها الكلمة، ولا تعزز المادة في أي زجاجة بعينها، لأنه لا مصدر في السجل يفعل ذلك.',
    nextSteps: [
      'Read the page on notes versus ingredients for what the label does not state',
      'Read the page on the standards for the term’s position',
      'Read the page on the market for the forms the term moves in',
    ],
    nextStepsAr: [
      'اقرأ صفحة الذبذبات مقابل المكونات لما لا يصرح به المقصق',
      'اقرأ صفحة المعايير لموضع الكلمة',
      'اقرأ صفحة السوق للأشكال التي تتحرك فيها الكلمة',
    ],
    related: [
      { slug: 'fragrance/notes-versus-ingredients', label: 'What the label does not state' },
      { slug: 'fragrance/oud-accords', label: 'The product form the term moves in' },
      { slug: 'products/musk-fragrances', label: 'The recorded form under the term' },
      { slug: 'quality/batch-records', label: 'What a record of a run carries' },
    ],
  }),

  /* ---------------------------------------------------------------
     fragrance/sandalwood-versus-agarwood
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'fragrance/sandalwood-versus-agarwood',
    parent: 'fragrance',
    title: 'Sandalwood and agarwood: different materials',
    titleAr: 'السنط والعنبر: مواد مختلفة',
    summary:
      'What the record says about sandalwood and agarwood as two different materials: the documented difference on the two records, and the boundary where the record stops.',
    summaryAr:
      'ما يقوله السجل عن السنط والعنبر بوصفهما مادتين مختلفتين: الفرق الموثق على السجلين، والحد الذي ينتهي عنده السجل.',
    directAnswer:
      'Sandalwood and agarwood are two different materials, and the record the register carries is the record of the two on two sides: the producing side and the regulation side. The producing record states the producing geography of the resinous wood, which is the record of agarwood’s own side, and the market study states the forms the market carries, which is the record of the two materials’ movement through the market. The regulation record places the resinous-wood genera under the listing that covers all of them, which is the record of agarwood’s status, and the same listing does not place the sandalwood genus under it, which is the recorded difference on the regulation side. What the record does not carry is a quality comparison of the two: no source in the register ranks one material against the other on value, and the difference is the documented difference of two materials, not a value order the record does not carry.',
    directAnswerAr:
      'السنط والعنبر مادتان مختلفتان، والسجل الذي يحمله الدفتر هو سجل الاثنين على جانبين: جانب الإنتاج وجانب الضبط. فسجل الإنتاج يقرر جغرافيا إنتاج الخشب الراتنجي، وهذا هو سجل جانب العنبر الخاص، ودراسة السوق تقرر الأشكال التي يحملها السوق، وهذا هو سجل حركة المادتين عبر السوق. وسجل الضبط يضع أجناس الخشب الراتنجي تحت التسمية التي تطوقها كلها، وهذا هو سجل حال العنبر، ونفس التسمية لا تضع جنس السنط تحته، وهذا هو الفرق المسجل على جانب الضبط. وما لا يحمله السجل هو مقارنة جودة بين الاثنين: لا مصدر في السجل يرتب مادة على الأخرى على القيمة، والفرق هو الفرق الموثق لمادتين، ليس ترتيب قيمة لا يحمله السجل.',
    sections: [
      {
        heading: 'The two materials on the producing record',
        headingAr: 'المادتان على سجل الإنتاج',
        body: [
          'The producing record is the side the two materials meet on the record, and the side is the record’s own. The review of the producing genera documents the producing geography of the resinous wood: the countries and the regions where the resinous-wood genera form the material, which is the record of agarwood’s own producing side. The market study adds the movement of the material through the market, which is the record of the material’s trade side, and the two records together are the record of agarwood’s own: the producing geography and the trade movement. The sandalwood side is the side the record does not carry as a producing record: the record does not document the producing geography of the sandalwood material, and the absence of the producing record is the recorded difference, not a claim the page makes about the sandalwood material’s own producing record.',
        ],
        bodyAr: [
          'سجل الإنتاج هو الجانب الذي المادتان يلتقيان فيه على السجل، والجانب هو الخاص بالسجل. فمراجعة الأجناس المنتجة توثق جغرافيا إنتاج الخشب الراتنجي: الدول والمناطق التي أجناس الخشب الراتنجي تكوّن فيها المادة، وهذا هو سجل جانب العنبر الخاص من الإنتاج. ودراسة السوق تضيف حركة المادة عبر السوق، وهذا هو سجل جانب المادة من التجارة، وسجلان معا هما سجل الخاصية بالعنبر: الجغرافيا الإنتاجية وحركة التجارة. وجانب السنط هو الجانب الذي لا يحمله السجل كسجل إنتاج: السجل لا يوثق جغرافيا إنتاج مادة السنط، وغياب سجل الإنتاج هو الفرق المسجل، ليس ادعاء تصنعه الصفحة عن سجل إنتاج مادة السنط الخاصة.',
        ],
      },
      {
        heading: 'The two materials on the regulation record',
        headingAr: 'المادتان على سجل الضبط',
        body: [
          'The regulation side is the side the two materials meet on the record, and the side is the record’s own. The regulation record places the resinous-wood genera under the listing that covers all of them, which is the record of agarwood’s status: the material is under the listing, and the movement of the material is under the listing. The same listing does not place the sandalwood genus under it, and the absence is the recorded difference on the regulation side: the sandalwood material is not under the listing, and the movement of the sandalwood material is not under the listing. The two records together are the regulation’s own on the two: the resinous-wood material is under the listing, and the sandalwood material is not, and the difference is the record’s own, not a claim the page makes about the two against one another.',
        ],
        bodyAr: [
          'جانب الضبط هو الجانب الذي المادتان يلتقيان فيه على السجل، والجانب هو الخاص بالسجل. فسجل الضبط يضع أجناس الخشب الراتنجي تحت التسمية التي تطوقها كلها، وهذا هو سجل حال العنبر: المادة تحت التسمية، ونقل المادة تحت التسمية. ونفس التسمية لا تضع جنس السنط تحتها، والغياب هو الفرق المسجل على جانب الضبط: مادة السنط ليست تحت التسمية، ونقل مادة السنط ليس تحت التسمية. وسجلان معا هما الخاص بالضبط على المادتين: مادة الخشب الراتنجي تحت التسمية، ومادة السنط ليست تحتها، والفرق هو الخاص بالسجل، ليس ادعاء تصنعه الصفحة عن الاثنين ضد بعض.',
        ],
      },
      {
        heading: 'Where the record stops',
        headingAr: 'أين ينتهي السجل',
        body: [
          'The record stops at the quality comparison, and the page states that plainly. No source in the register ranks one material against the other on value: the record does not state that the resinous-wood material is better, rarer or more valuable than the sandalwood material, and it does not state the reverse, because the record is the record of the two materials’ own sides, not of a value order between the two. The buyer’s position is to compare the two on the two records: the producing record and the regulation record, and to be told plainly that a quality or value order between the two is not something the record settles. The comparison is a comparison of two documented materials, and the order is not the record’s, which is the whole of what the record supports on the two against one another.',
        ],
        bodyAr: [
          'السجل ينتهي عند مقارنة الجودة، والصفحة تقول ذلك بوضوح. فلا مصدر في السجل يرتب مادة على أخرى على القيمة: السجل لا يقرر أن مادة الخشب الراتنجي أفضل أو نادرة أو أقيمة من مادة السنط، ولا يقرر العكس، لأن السجل هو سجل الجانبين الخاصين بالمادتين، ليس ترتيب قيمة بينهما. وموضع المشتري أن يقارن الاثنين على السجلين: سجل الإنتاج وسجل الضبط، وأن يُلزم بوضوح أن ترتيبا في الجودة أو القيمة بين الاثنين ليس ما يحسمه السجل. فالمقارنة مقارنة مادتين موثقتين، والترتيب ليس الخاص بالسجل، وهذا هو كل ما يدعمه السجل في أحد المادتين ضد الأخرى.',
        ],
        list: [
          'Compare the two materials on the producing record: the producing geography the record names for the resinous-wood material.',
          'Compare the two materials on the regulation record: the listing the record places the resinous-wood genera under.',
          'Refuse to order the two on value, because no source in the register does.',
        ],
        listAr: [
          'قارن المادتين على سجل الإنتاج: الجغرافيا الإنتاجية التي يسميها السجل لمادة الخشب الراتنجي.',
          'واقارن المادتين على سجل الضبط: التسمية التي يضع السجل أجناس الخشب الراتنجي تحتها.',
          'وامتنع عن ترتيب الاثنين على القيمة، لأنه لا مصدر في السجل يفعل ذلك.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022', 'AGARWOOD_REVIEW_2014'],
    workedExample: {
      situation:
        'A hypothetical buyer is told that “sandalwood is just a cheaper agarwood” and wants to know what the record says about that.',
      situationAr:
        'قيل لمشتري افتراضي أن “السنط ما هو إلا عنبر أرخص” ويريد أن يعرف ماذا يقول السجل في ذلك.',
      steps: [
        'Check the producing record: the resinous-wood material’s producing geography is on the record, and the sandalwood material’s is not, so the two are different on the producing side.',
        'Check the regulation record: the resinous-wood genera are under the listing and the sandalwood genus is not, so the two are different on the regulation side.',
        'Check the “cheaper” claim: no source in the register ranks the two on value, so the claim is not the record’s.',
        'Report: the two are different materials on the two records, and the value order is the seller’s word, not the record’s.',
      ],
      stepsAr: [
        'افحص سجل الإنتاج: جغرافيا إنتاج مادة الخشب الراتنجي على السجل وجغرافيا إنتاج مادة السنط ليست، فالثنيتان مختلفتان على جانب الإنتاج.',
        'وافحص سجل الضبط: أجناس الخشب الراتنجي تحت التسمية وجنس السنط ليس تحتها، فالثنيتان مختلفتان على جانب الضبط.',
        'وافحص ادعاء “الأرخص”: لا مصدر في السجل يرتب الاثنين على القيمة، فالادعاء ليس الخاص بالسجل.',
        'وقيل: المادتان مادتان مختلفتان على السجلين، وترتيب القيمة هو كلمة البائع، ليس السجل.',
      ],
      takeaway:
        'The example shows the comparison read on the two records: the two materials are different on the producing side and on the regulation side, and the value order is not the record’s. A buyer who compares the two on the two records and refuses the value order is comparing the two correctly, not buying a fact the record does not carry.',
        takeawayAr:
      'يبيّن المثال قراءة المقارنة على السجلين: المادتان مختلفتان على جانب الإنتاج وعلى جانب الضبط، وترتيب القيمة ليس الخاص بالسجل. ومشتري يقارن الاثنين على السجلين ويرت ترتيب القيمة يقارن الاثنين صحيحا، لا يشتري حقيقة لا يحمله السجل.',
    },
    limitations:
      'This page compares the two materials on the two records, the producing record and the regulation record. It does not rank the two on quality or value, because no source in the register does, and it does not document the sandalwood material’s producing geography, because the record does not carry it.',
      limitationsAr:
      'تقوم هذه الصفحة بمقارنة المادتين على السجلين، سجل الإنتاج وسجل الضبط. ولا ترتب الاثنين على الجودة أو القيمة، لأنه لا مصدر في السجل يفعل ذلك، ولا توثق الجغرافيا الإنتاجية لمادة السنط، لأن السجل لا يحملها.',
    nextSteps: [
      'Read the page on what agarwood is for the producing record',
      'Read the page on the listing for the regulation record',
      'Read the page on what a finished fragrance carries for the form side',
    ],
    nextStepsAr: [
      'اقرأ صفحة ما هو العنبر لسجل الإنتاج',
      'اقرأ صفحة التسمية لسجل الضبط',
      'اقرأ صفحة ما يحمله عطر منتهى لجانب الشكل',
    ],
    related: [
      { slug: 'products/sandalwood-materials', label: 'The recorded sandalwood form' },
      { slug: 'oud-basics/what-is-agarwood', label: 'What agarwood is on the producing record' },
      { slug: 'oud-basics/which-species-makes-oud', label: 'The producing genera on the record' },
      { slug: 'trade/cites-import-by-market', label: 'What the listing requires' },
    ],
  }),
];
