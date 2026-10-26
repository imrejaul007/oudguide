import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

/**
 * Editorial guides: the production block.
 *
 * A production page is where the material meets the process, and the
 * register documents the record of the two forms and the extraction,
 * not a process test or a yield figure. Each page states the documented
 * record it rests on and keeps every claim it does not carry marked as a
 * limitation.
 */

export const editorialGuideProduction: Article[] = [
  /* ---------------------------------------------------------------
     production/oil-and-hydrosol
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'production/oil-and-hydrosol',
    parent: 'production',
    title: 'Oil and hydrosol are different products',
    titleAr: 'الزيت والحيدروسول منتجان مختلفان',
    summary:
      'What separates the distilled oil from a hydrosol: the two different products, and the boundary where the record does not carry the hydrosol’s own record.',
    summaryAr:
      'ما الذي يفرق الزيت المقطر عن الحيدروسول: المنتجان المختلفان، والحد الذي لا يحمله السجل من سجل الحيدروسول الخاص.',
    directAnswer:
      'The two are different products, and the difference is the record’s, not the process’s. The record the register carries is the record of the extraction process: what the oil is that comes from the resinous wood, and the forms the process carries, which is the record of the oil’s own side. The hydrosol side is the side the record does not carry: no source in the register records a hydrosol as a form the process carries, and the hydrosol’s own record is the hydrosol’s, not the record’s. The distinction is therefore a documented difference of the two forms, and the page states the oil’s side on the record, states the hydrosol’s side as the side the record does not carry, and keeps the boundary between the two visible, because the boundary is where the record ends and the hydrosol’s own record begins.',
    directAnswerAr:
      'الاثنان منتجان مختلفان، والفرق هو الخاص بالسجل، ليس الخاصية بالعمية. والسجل الذي يحمله الدفتر هو سجل عمية الاستخراج: ما هو الزيت الذي يخرج من الخشب الراتنجي، والأشكال التي تحملها العمية، وهذا هو سجل جانب الزيت الخاص. وجانب الحيدروسول هو الجانب الذي لا يحمله السجل: لا مصدر في السجل يسجل حيدروسول شكلا تحملها العمية، وسجل الحيدروسول الخاص هو الخاص بالحيدروسول، ليس الخاص بالسجل. فالفرق إذن فرق موثق بين الشكلين، والصفحة تقرّر جانب الزيت على السجل، وتقرر جانب الحيدروسول الجانب الذي لا يحمله السجل، وتبقي الحد بين الاثنين ظاهرا، لأن الحد هو حيث ينتهي السجل ويبدأ سجل الحيدروسول الخاص.',
    sections: [
      {
        heading: 'What the record carries on the oil',
        headingAr: 'ما يحمله السجل على الزيت',
        body: [
          'The record carries the oil’s side, and the side is the record’s own. The production record states what the extraction process is and what the oil is that comes from the resinous wood, which is the record of the oil’s own: the substance, the process and the form the oil moves in. The market study adds the movement of the oil through the market, which is the record of the oil’s trade side, and the two records together are the record of the oil’s own side: the substance and the process on the production record, and the movement on the market record. The point for the buyer is that the oil’s side is on the record, and the oil is the form the record names and the market carries, which is the whole of what the record supports on the oil’s side.',
        ],
        bodyAr: [
          'السجل يحمل جانب الزيت، والجانب هو الخاص بالسجل. فسجل الإنتاج يقرر ما هي عمية الاستخراج وما هو الزيت الذي يخرج من الخشب الراتنجي، وهذا هو سجل جانب الزيت الخاص: المادة والعمية والشكل الذي يتحرك فيه الزيت. ودراسة السوق تضيف حركة الزيت عبر السوق، وهذا هو سجل جانب الزيت من التجارة، وسجلان معا هما سجل جانب الزيت الخاص: المادة والعمية على سجل الإنتاج والحركة على سجل السوق. وما يهم المشتري أن جانب الزيت على السجل، والزيت هو الشكل الذي يسميه السجل ويحمله السوق، وهذا هو كل ما يدعمه السجل على جانب الزيت.',
        ],
      },
      {
        heading: 'What the record does not carry on the hydrosol',
        headingAr: 'ما لا يحمله السجل على الحيدروسول',
        body: [
          'The record does not carry the hydrosol’s side, and the page states that plainly. No source in the register records a hydrosol as a form the process carries, and the hydrosol’s own record is the hydrosol’s, not the record’s. The absence is the recorded difference: the record names the oil as the form it carries, and it does not name the hydrosol as a form it carries, and the two are different products, and the difference is the record’s own on the record’s side. The buyer’s position is to read the oil on the record and to keep the hydrosol as the form the record does not carry, because the hydrosol’s own record is not the record’s, and the form is the hydrosol’s, not the record’s.',
        ],
        bodyAr: [
          'السجل لا يحمل جانب الحيدروسول، والصفحة تقول ذلك بوضوح. فلا مصدر في السجل يسجل حيدروسول شكلا تحملها العمية، وسجل الحيدروسول الخاص هو الخاص بالحيدروسول، ليس الخاص بالسجل. والغياب هو الفرق المسجل: السجل يسمي الزيت الشكل الذي يحمله، ولا يسمي الحيدروسول شكلا يحمله، والاثنان منتجان مختلفان، والفرق هو الخاص بالسجل على جانب السجل. وموضع المشتري أن يقرأ الزيت على السجل وأن يبقي الحيدروسول الشكل الذي لا يحمله السجل، لأن سجل الحيدروسول الخاص ليس الخاص بالسجل، والشكل هو الخاص بالحيدروسول، ليس الخاص بالسجل.',
        ],
      },
      {
        heading: 'Why the two are not one product',
        headingAr: 'لماذا الاثنين ليسا منتجا واحدا',
        body: [
          'The two are different products, and the difference is the record’s, not the process’s. The record names the oil as the form it carries, and it does not name the hydrosol as a form it carries, and the two are different on the record’s own side: one is the form the record names, and one is the form the record does not. A buyer who reads the two as one product is reading the two as the record does not carry, and the buyer’s move is to read the two as the record does: the oil on the record, and the hydrosol as the form the record does not carry. The two are different products, and the difference is the record’s, which is the whole of what the record supports on the two against one another.',
        ],
        bodyAr: [
          'الاثنان منتجان مختلفان، والفرق هو الخاص بالسجل، ليس الخاصية بالعمية. والسجل يسمي الزيت الشكل الذي يحمله، ولا يسمي الحيدروسول شكلا يحمله، والاثنان مختلفان على جانب السجل الخاص: أحدهما الشكل الذي يسميه السجل، والأخرى الشكل الذي لا يسميه السجل. ومشتري يقرأ الاثنين منتجا واحدا يقرأهما كما لا يحملهما السجل، وحركة المشتري أن يقرأهما كما يحملهما السجل: الزيت على السجل، والحيدروسول الشكل الذي لا يحمله السجل. والاثنان منتجان مختلفان، والفرق هو الخاص بالسجل، وهذا هو كل ما يدعمه السجل في أحد الاثنين ضد الآخر.',
        ],
        list: [
          'Read the oil on the record: the substance, the process and the form the oil moves in.',
          'Keep the hydrosol as the form the record does not carry, because the record does not name it.',
          'The two are different products, and the difference is the record’s, not the process’s.',
        ],
        listAr: [
          'اقرا الزيت على السجل: المادة والعمية والشكل الذي يتحرك فيه الزيت.',
          'وأبقِ الحيدروسول الشكل الذي لا يحمله السجل، لأن السجل لا يسميه.',
          'والاثنان منتجان مختلفان، والفرق هو الخاص بالسجل، ليس الخاصية بالعمية.',
        ],
      },
    ],
    sourceIds: ['TRAFFIC_UAE_AGARWOOD_TRADE', 'AGARWOOD_CITES_2022'],
    workedExample: {
      situation:
        'A hypothetical buyer is offered a “hydrosol” alongside the distilled oil and wants to know what the record says about the two.',
      situationAr:
        'قُدّم إلى المشتري الافتراضي “حيدروسول” إلى جانب الزيت المقطر، ويريد أن يعرف ماذا يقول السجل عن الاثنين.',
      steps: [
        'Check the oil: the record names the oil as the form it carries, so the oil’s side is on the record.',
        'Check the hydrosol: no source in the register records a hydrosol as a form it carries, so the hydrosol’s side is not on the record.',
        'Check the difference: the two are different products on the record’s own side, and the difference is the record’s.',
        'Report: the oil is on the record, the hydrosol is not, and the two are different products, not one product with two names.',
      ],
      stepsAr: [
        'افحص الزيت: السجل يسمي الزيت الشكل الذي يحمله، فنواحي الزيت على السجل.',
        'وافحص الحيدروسول: لا مصدر في السجل يسجل حيدروسول شكلا يحمله، فنواحي الحيدروسول ليست على السجل.',
        'وافحص الفرق: الاثنان منتجان مختلفان على جانب السجل الخاص، والفرق هو الخاص بالسجل.',
        'وقيل: الزيت على السجل والحيدروسول ليس، والاثنان منتجان مختلفان، ليس منتجا واحدا بأسمين.',
      ],
      takeaway:
        'The example shows the two read on the record: the oil’s side is on the record, the hydrosol’s side is not, and the two are different products, not one product with two names. A buyer who reads the two as the record does is reading them correctly, not buying a difference the record does not carry.',
        takeawayAr:
      'يبيّن المثال قراءة الاثنين على السجل: نواحي الزيت على السجل ونواحي الحيدروسول ليست، والاثنان منتجان مختلفان، ليس منتجا واحدا بأسمين. ومشتري يقرأهما كما يحملهما السجل يقرأهما صحيحا، لا يشتري فرقا لا يحمله السجل.',
    },
    limitations:
      'This page states what the record carries on the oil and what it does not carry on the hydrosol. It does not record a hydrosol as a form the process carries, and it does not settle a comparison between the two, because no source in the register does.',
      limitationsAr:
      'تقرر هذه الصفحة ما يحمله السجل على الزيت وما لا يحمله على الحيدروسول. ولا تسجل حيدروسول شكلا تحملها العمية، ولا تحسم مقارنة بين الاثنين، لأنه لا مصدر في السجل يفعل ذلك.',
    nextSteps: [
      'Read the page on the extraction process for the oil’s side',
      'Read the page on the market for the oil’s movement',
      'Read the page on distilled oil versus extract for the other distinction',
    ],
    nextStepsAr: [
      'اقرأ صفحة عمية الاستخراج لجانب الزيت',
      'اقرأ صفحة السوق لحركة الزيت',
      'اقرأ صفحة الزيت المقطر مقابل المستخلص للفرق الآخر',
    ],
    related: [
      { slug: 'production/oud-extraction-methods', label: 'The extraction process' },
      { slug: 'production/from-wood-to-oil', label: 'The oil’s side on the record' },
      { slug: 'production/distilled-oil-versus-extract', label: 'The other form distinction' },
      { slug: 'products/oud-oil', label: 'The recorded oil form' },
    ],
  }),

  /* ---------------------------------------------------------------
     production/distilled-oil-versus-extract
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'production/distilled-oil-versus-extract',
    parent: 'production',
    title: 'Distilled oil and other extracts',
    titleAr: 'الزيت المقطر والمستخلصات الأخرى',
    summary:
      'What separates the distilled oil from an extract: the two different products, and the boundary where the record does not carry the extract’s own process record.',
    summaryAr:
      'ما الذي يفرق الزيت المقطر عن مستخلص: المنتجان المختلفان، والحد الذي لا يحمله السجل من سجل عمية المستخلص الخاص.',
    directAnswer:
      'The two are different products, and the difference is the record’s, not the process’s. The record the register carries is the record of the distilled oil: what the oil is that comes from the resinous wood by distillation, and the forms the market carries, which is the record of the oil’s own side. The extract side is the side the record does not carry: no source in the register records an extract as a form the market carries, and the extract’s own process record is the extract’s, not the record’s. The distinction is therefore a documented difference of the two forms, and the page states the oil’s side on the record, states the extract’s side as the side the record does not carry, and keeps the boundary between the two visible, because the boundary is where the record ends and the extract’s own record begins.',
    directAnswerAr:
      'الاثنان منتجان مختلفان، والفرق هو الخاص بالسجل، ليس الخاصية بالعمية. والسجل الذي يحمله الدفتر هو سجل الزيت المقطر: ما هو الزيت الذي يخرج من الخشب الراتنجي بالتقطير، والأشكال التي يحملها السوق، وهذا هو سجل جانب الزيت الخاص. وجانب المستخلص هو الجانب الذي لا يحمله السجل: لا مصدر في السجل يسجل مستخلصا شكلا يحمله السوق، وسجل عمية المستخلص الخاص هو الخاص بالمستخلص، ليس الخاص بالسجل. فالفرق إذن فرق موثق بين الشكلين، والصفحة تقرّر جانب الزيت على السجل، وتقرر جانب المستخلص الجانب الذي لا يحمله السجل، وتبقي الحد بين الاثنين ظاهرا، لأن الحد هو حيث ينتهي السجل ويبدأ سجل المستخلص الخاص.',
    sections: [
      {
        heading: 'What the record carries on the distilled oil',
        headingAr: 'ما يحمله السجل على الزيت المقطر',
        body: [
          'The record carries the distilled oil’s side, and the side is the record’s own. The production record states what the distilled oil is and the process by which it comes from the resinous wood, which is the record of the oil’s own: the substance and the process. The market study adds the movement of the oil through the market, which is the record of the oil’s trade side, and the two records together are the record of the oil’s own side: the substance and the process on the production record, and the movement on the market record. The point for the buyer is that the oil’s side is on the record, and the oil is the form the record names and the market carries, which is the whole of what the record supports on the oil’s side.',
        ],
        bodyAr: [
          'السجل يحمل جانب الزيت المقطر، والجانب هو الخاص بالسجل. فسجل الإنتاج يقرر ما هو الزيت المقطر والعمية التي يخرج بها من الخشب الراتنجي، وهذا هو سجل جانب الزيت الخاص: المادة والعمية. ودراسة السوق تضيف حركة الزيت عبر السوق، وهذا هو سجل جانب الزيت من التجارة، وسجلان معا هما سجل جانب الزيت الخاص: المادة والعمية على سجل الإنتاج والحركة على سجل السوق. وما يهم المشتري أن جانب الزيت على السجل، والزيت هو الشكل الذي يسميه السجل ويحمله السوق، وهذا هو كل ما يدعمه السجل على جانب الزيت.',
        ],
      },
      {
        heading: 'What the record does not carry on the extract',
        headingAr: 'ما لا يحمله السجل على المستخلص',
        body: [
          'The record does not carry the extract’s side, and the page states that plainly. No source in the register records an extract as a form the market carries, and the extract’s own process record is the extract’s, not the record’s. The absence is the recorded difference: the record names the oil as the form it carries, and it does not name the extract as a form it carries, and the two are different products, and the difference is the record’s own on the record’s side. The buyer’s position is to read the oil on the record and to keep the extract as the form the record does not carry, because the extract’s own process record is not the record’s, and the form is the extract’s, not the record’s.',
        ],
        bodyAr: [
          'السجل لا يحمل جانب المستخلص، والصفحة تقول ذلك بوضوح. فلا مصدر في السجل يسجل مستخلصا شكلا يحمله السوق، وسجل عمية المستخلص الخاص هو الخاص بالمستخلص، ليس الخاص بالسجل. والغياب هو الفرق المسجل: السجل يسمي الزيت الشكل الذي يحمله، ولا يسمي المستخلص شكلا يحمله، والاثنان منتجان مختلفان، والفرق هو الخاص بالسجل على جانب السجل. وموضع المشتري أن يقرأ الزيت على السجل وأن يبقي المستخلص الشكل الذي لا يحمله السجل، لأن سجل عمية المستخلص الخاص ليس الخاص بالسجل، والشكل هو الخاص بالمستخلص، ليس الخاص بالسجل.',
        ],
      },
      {
        heading: 'Why the two are not one product',
        headingAr: 'لماذا الاثنين ليسا منتجا واحدا',
        body: [
          'The two are different products, and the difference is the record’s, not the process’s. The record names the oil as the form it carries, and it does not name the extract as a form it carries, and the two are different on the record’s own side: one is the form the record names, and one is the form the record does not. A buyer who reads the two as one product is reading the two as the record does not carry, and the buyer’s move is to read the two as the record does: the oil on the record, and the extract as the form the record does not carry. The two are different products, and the difference is the record’s, which is the whole of what the record supports on the two against one another.',
        ],
        bodyAr: [
          'الاثنان منتجان مختلفان، والفرق هو الخاص بالسجل، ليس الخاصية بالعمية. والسجل يسمي الزيت الشكل الذي يحمله، ولا يسمي المستخلص شكلا يحمله، والاثنان مختلفان على جانب السجل الخاص: أحدهما الشكل الذي يسميه السجل، والأخرى الشكل الذي لا يسميه السجل. ومشتري يقرأ الاثنين منتجا واحدا يقرأهما كما لا يحملهما السجل، وحركة المشتري أن يقرأهما كما يحملهما السجل: الزيت على السجل، والمستخلص الشكل الذي لا يحمله السجل. والاثنان منتجان مختلفان، والفرق هو الخاص بالسجل، وهذا هو كل ما يدعمه السجل في أحد الاثنين ضد الآخر.',
        ],
        list: [
          'Read the distilled oil on the record: the substance and the process it comes from.',
          'Keep the extract as the form the record does not carry, because the record does not name it.',
          'The two are different products, and the difference is the record’s, not the process’s.',
        ],
        listAr: [
          'اقرا الزيت المقطر على السجل: المادة والعمية التي يخرج بها.',
          'وأبقِ المستخلص الشكل الذي لا يحمله السجل، لأن السجل لا يسميه.',
          'والاثنان منتجان مختلفان، والفرق هو الخاص بالسجل، ليس الخاصية بالعمية.',
        ],
      },
    ],
    sourceIds: ['TRAFFIC_UAE_AGARWOOD_TRADE', 'AGARWOOD_CITES_2022'],
    workedExample: {
      situation:
        'A hypothetical buyer is offered an “extract” alongside the distilled oil and wants to know what the record says about the two.',
      situationAr:
        'قُدّم إلى المشتري الافتراضي “مستخلص” إلى جانب الزيت المقطر، ويريد أن يعرف ماذا يقول السجل عن الاثنين.',
      steps: [
        'Check the distilled oil: the record names the oil as the form it carries, so the oil’s side is on the record.',
        'Check the extract: no source in the register records an extract as a form the market carries, so the extract’s side is not on the record.',
        'Check the difference: the two are different products on the record’s own side, and the difference is the record’s.',
        'Report: the oil is on the record, the extract is not, and the two are different products, not one product with two names.',
      ],
      stepsAr: [
        'افحص الزيت المقطر: السجل يسمي الزيت الشكل الذي يحمله، فنواحي الزيت على السجل.',
        'وافحص المستخلص: لا مصدر في السجل يسجل مستخلصا شكلا يحمله السوق، فنواحي المستخلص ليست على السجل.',
        'وافحص الفرق: الاثنان منتجان مختلفان على جانب السجل الخاص، والفرق هو الخاص بالسجل.',
        'وقيل: الزيت على السجل والمستخلص ليس، والاثنان منتجان مختلفان، ليس منتجا واحدا بأسمين.',
      ],
      takeaway:
        'The example shows the two read on the record: the oil’s side is on the record, the extract’s side is not, and the two are different products, not one product with two names. A buyer who reads the two as the record does is reading them correctly, not buying a difference the record does not carry.',
        takeawayAr:
      'يبيّن المثال قراءة الاثنين على السجل: نواحي الزيت على السجل ونواحي المستخلص ليست، والاثنان منتجان مختلفان، ليس منتجا واحدا بأسمين. ومشتري يقرأهما كما يحملهما السجل يقرأهما صحيحا، لا يشتري فرقا لا يحمله السجل.',
    },
    limitations:
      'This page states what the record carries on the distilled oil and what it does not carry on the extract. It does not record an extract as a form the market carries, and it does not settle a comparison between the two, because no source in the register does.',
      limitationsAr:
      'تقرر هذه الصفحة ما يحمله السجل على الزيت المقطر وما لا يحمله على المستخلص. ولا تسجل مستخلصا شكلا يحمله السوق، ولا تحسم مقارنة بين الاثنين، لأنه لا مصدر في السجل يفعل ذلك.',
    nextSteps: [
      'Read the page on the extraction process for the oil’s side',
      'Read the page on oil and hydrosol for the other form distinction',
      'Read the page on the market for the oil’s movement',
    ],
    nextStepsAr: [
      'اقرأ صفحة عمية الاستخراج لجانب الزيت',
      'اقرأ صفحة الزيت والحيدروسول للفرق الآخر في الأشكال',
      'اقرأ صفحة السوق لحركة الزيت',
    ],
    related: [
      { slug: 'production/oud-extraction-methods', label: 'The extraction process' },
      { slug: 'production/oil-and-hydrosol', label: 'The other form distinction' },
      { slug: 'products/oud-oil', label: 'The recorded oil form' },
      { slug: 'buying/choosing-oud-oil', label: 'Choosing the oil on the record' },
    ],
  }),
];
