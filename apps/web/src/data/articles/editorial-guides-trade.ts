import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

/**
 * Editorial guides: the trade block.
 *
 * A trade page is where the material meets the border, and the register
 * documents the regulation and the personal-carriage record, not the
 * outcome of any specific movement. Each page states the documented
 * record it rests on and keeps every claim it does not carry marked as a
 * limitation.
 */

export const editorialGuideTrade: Article[] = [
  /* ---------------------------------------------------------------
     trade/personal-travel-versus-commercial
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'trade/personal-travel-versus-commercial',
    parent: 'trade',
    title: 'Personal travel and commercial shipments',
    titleAr: 'السفر الشخصي والشحن التجاري',
    summary:
      'What the record says about moving the material in personal travel against a commercial shipment: the two lanes the record carries, and the checks each lane opens rather than assuming the lane settles the movement.',
    summaryAr:
      'ما يقوله السجل عن نقل المادة في السفر الشخصي مقابل الشحن التجاري: الحومتان اللتان يحملهما السجل، والفحوصات التي تفتحها كل حومة بدل أن تفترض الحومة أن النقل محسوم.',
    directAnswer:
      'The record carries two lanes it does not carry a settlement of either. The personal lane is the lane the personal-carriage record describes: the carrying of the material by a traveler under the recorded conditions, and the regulatory side states the regulation that governs the movement of the material, which is the side both lanes sit under. The commercial lane is the lane the trade record describes: the moving of the material through the trade, under the trade’s own record of the structure and the conditions. What the record does not carry is a statement that one lane is easier, safer or more lawful than the other: no source in the register measures one lane against the other on any of those, and a claim that one lane is easier is a claim the record does not carry. The two lanes are the two records, and the buyer’s check is the check on each lane’s own record: the personal-carriage check on the traveler’s lane, and the commercial documentation check on the trade’s lane, and the page keeps the two separate rather than assuming one lane settles the movement.',
    directAnswerAr:
      'السجل يحمل حومتين ولا يحمل حسم لأي منهما. فحومة الشخص هي الحومة التي يصفها سجل الحمل الشخصي: حمل المادة من قبل مسافر تحت الظروف المسجلة، وجانب الضبط يقرر الضبط الذي يحكم نقل المادة، وهذا هو الجانب الذي الحومتان تحتها. وحومة التجارة هي الحومة التي يصفها سجل التجارة: نقل المادة عبر التجارة، تحت سجل التجارة الخاص بالهيكل والظروف. وما لا يحمله السجل هو عبارة أن حومة أيسر أو أأمن أو أكثر قانونية من الأخرى: لا مصدر في السجل يقيس حومة على أخرى في أي من ذلك، والادعاء أن حومة أيسر هو ادعاء لا يحمله السجل. والحومتان هما السجلان، وفحص المشتري هو الفحص على سجل كل حومة: فحص الحمل الشخصي على حومة المسافر، وفحص توثيق التجارة على حومة التجارة، والصفحة تبقي الاثنين منفصلين بدل أن تفترض أن حومة تحسم النقل.',
    sections: [
      {
        heading: 'The two lanes on the record',
        headingAr: 'الحومتان على السجل',
        body: [
          'The record carries the two lanes on their own sides, and the sides are the two records’ own. The personal lane is the personal-carriage record: the carrying of the material by a traveler under the recorded conditions, which is the recorded side of the traveler’s movement, and the regulatory side states the regulation that governs the movement of the material, which is the side the traveler’s lane sits under. The commercial lane is the trade record: the moving of the material through the trade under the trade’s own record of the structure and the conditions, which is the recorded side of the trade’s movement, and the regulatory side states the same regulation that the trade’s lane sits under. The two lanes are the two records, and the two records are the two sides of the question, and the question is which lane a movement is in, not which lane is better, because the record does not carry the better.',
        ],
        bodyAr: [
          'السجل يحمل الحومتين على الجانبين، والجانبان هما الخاصان بالسجلين. فحومة الشخص هي سجل الحمل الشخصي: حمل المادة من قبل مسافر تحت الظروف المسجلة، وهذا هو الجانب المسجل من نقل المسافر، وجانب الضبط يقرر الضبط الذي يحكم نقل المادة، وهذا هو الجانب الذي حومة المسافر تحته. وحومة التجارة هي سجل التجارة: نقل المادة عبر التجارة تحت سجل التجارة الخاص بالهيكل والظروف، وهذا هو الجانب المسجل من نقل التجارة، وجانب الضبط يقرر نفس الضبط الذي حومة التجارة تحته. والحومتان هما السجلان، والسجلان هما الجانبان من السؤال، والسؤال أي حومة النقل فيها، ليس أي حومة أفضل، لأن السجل لا يحمل الأفضل.',
        ],
      },
      {
        heading: 'What each lane’s check is',
        headingAr: 'ما هو فحص كل حومة',
        body: [
          'The check on each lane is the lane’s own record, and the two checks are the two records’ own. The personal lane’s check is the personal-carriage check: does the carrying of the material by the traveler fit the conditions the personal-carriage record states, and does the carrying carry the documents the regulation requires for the movement of the material under it. The commercial lane’s check is the trade documentation check: does the movement of the material through the trade carry the documents the regulation requires for the movement of the material under it, and do the documents fit the structure the trade record describes. The two checks are the two lanes’ own, and the check on each is what the record supports on the lane, not a guarantee the lane does not carry. A movement that does not fit its lane’s check is a movement the buyer reads as the lane’s statement only, and the buyer’s move is to check the movement against the lane’s record rather than assume the lane settles it.',
        ],
        bodyAr: [
          'فحص كل حومة هو سجلها الخاص، والفحصان هما الخاصان بالسجلين. فشك حومة الشخص هو شك الحمل الشخصي: هل حمل المادة من قبل المسافر يلاءم الظروف التي يقررها سجل الحمل الشخصي، وهل الحمل يحمل المستندات التي يطلبها الضبط لنقل المادة تحته. وشك حومة التجارة هو شك توثيق التجارة: هل نقل المادة عبر التجارة يحمل المستندات التي يطلبها الضبط لنقل المادة تحته، وهل المستندات تلاءم الهيكل الذي يصفه سجل التجارة. فشكان هما الخاصان بالحومتين، والشك على كل هو ما يدعمه السجل على الحومة، ليس ضمانة لا تحملها الحومة. فنقل لا يلاءم شك حومته نقل يقرؤه المشتري عبارة الحومة فقط، وحركة المشتري أن يمحص النقل ضدا على سجل الحومة لا أن يفترض أن الحومة تحسمه.',
        ],
      },
      {
        heading: 'Why the lane does not settle the movement',
        headingAr: 'لماذا الحومة لا تحسم النقل',
        body: [
          'The lane does not settle the movement, and the page states that plainly. The record describes the two lanes and the regulation both sit under, and the record does not describe one lane as easier, safer or more lawful than the other, because no source in the register measures one against the other on any of those. A claim that one lane settles the movement is a claim the record does not carry, and the claim is the seller’s word, not the record’s. The page’s job is to say the two lanes carry the two checks, the checks are the records’ own, and the settlement is the record’s not the lane’s, which is the whole of what the record supports on the two against one another. The buyer’s position is to check the movement against its lane’s record, and to be told plainly that the lane does not settle the movement, which is what the record does not carry.',
        ],
        bodyAr: [
          'الحومة لا تحسم النقل، والصفحة تقول ذلك بوضوح. والسجل يصف الحومتين والضبط الذي تحتها الاثنتان، ولا يصف حومة واحدة أيسر أو أأمن أو أكثر قانونية من الأخرى، لأنه لا مصدر في السجل يقيس حومة على أخرى في أي من ذلك. والادعاء أن حومة تحسم النقل هو ادعاء لا يحمله السجل، والادعاء هو كلمة البائع، ليس السجل. ومهمة الصفحة أن تقول إن الحومتين تحملان الشكين، والشكان هما الخاصان بالسجلين، والحسم هو الخاص بالسجل ليس الخاص بالحومة، وهذا هو كل ما يدعمه السجل في أحدهما ضد الآخر. وموضع المشتري أن يمحص النقل ضدا على سجل حومته، وأن يُقال له بوضوح أن الحومة لا تحسم النقل، وهذا هو ما لا يحمله السجل.',
        ],
        list: [
          'Name the lane first: is the movement in the personal lane or the commercial lane.',
          'Check the movement against the lane’s own record: the personal-carriage check or the trade documentation check.',
          'Keep the settlement open: the lane does not settle the movement, and the record does not carry the settlement.',
        ],
        listAr: [
          'سمِّ الحومة أول: هل النقل في حومة الشخص أم حومة التجارة.',
          'وامحص النقل ضدا على سجل حومته: شك الحمل الشخصي أو شك توثيق التجارة.',
          'وأبقِ الحسم مفتوحا: الحومة لا تحسم النقل، والسجل لا يحمل الحسم.',
        ],
      },
    ],
    sourceIds: ['CBIC_AGARWOOD_PERSONAL_CARRIAGE', 'CITES_APPENDICES', 'TRAFFIC_UAE_AGARWOOD_TRADE'],
    workedExample: {
      situation:
        'A hypothetical buyer is told the material can move “the easy way” in personal travel and wants to know what the record says about that.',
      situationAr:
        'قيل لمشتري افتراضي أن المادة يمكن أن تنقل “بالطريقة السهلة” في سفر شخصي، ويريد أن يعرف ماذا يقول السجل في ذلك.',
      steps: [
        'Check the lane: is the movement in the personal lane or the commercial lane, and the lane is the record’s own, not the claim’s.',
        'Check the personal-carriage record: does the carrying fit the conditions the record states, and does it carry the documents the regulation requires.',
        'Check the settlement claim: no source in the register measures one lane against the other, so the “easy way” is a claim, not the record’s.',
        'Report: the lane’s record is the check, and the settlement is not the record’s, so the buyer’s move is to check the movement against the lane’s record.',
      ],
      stepsAr: [
        'افحص الحومة: هل النقل في حومة الشخص أم حومة التجارة، والحومة هي الخاصة بالسجل، ليست الخاصة بالادعاء.',
        'وافحص سجل الحمل الشخصي: هل الحمل يلاءم الظروف التي يقررها السجل، وهل يحمل المستندات التي يطلبها الضبط.',
        'وافحص ادعاء الحسم: لا مصدر في السجل يقيس حومة على أخرى، فالـ“الطريقة السهلة” هي ادعاء، ليست السجل.',
        'وقيل: سجل الحومة هو الشك، والحسم ليس الخاص بالسجل، فحركة المشتري أن يمحص النقل ضدا على سجل الحومة.',
      ],
      takeaway:
        'The example shows the lane read on the record: the two lanes are the two records, the check is the lane’s own, and the settlement is not the record’s. A buyer who checks the movement against the lane’s record is checking it correctly, not buying a settlement the record does not carry.',
        takeawayAr:
      'يبيّن المثال قراءة الحومة على السجل: الحومتان هما السجلان، والشك هو الخاص بالحومة، والحسم ليس الخاص بالسجل. ومشتري يمحص النقل ضدا على سجل الحومة يمحصه صحيحا، لا يشتري حسم لا يحمله السجل.',
    },
    limitations:
      'This page states the two lanes the record carries, the personal lane and the commercial lane, and the check each lane opens. It does not settle the movement of the material in either lane, and it does not rank one lane against the other, because no source in the register does.',
      limitationsAr:
      'تقرر هذه الصفحة الحومتين اللتين يحملهما السجل، حومة الشخص وحومة التجارة، والشك الذي تفتحه كل حومة. ولا تحسم نقل المادة في أي حومة، ولا ترتب حومة على أخرى، لأنه لا مصدر في السجل يفعل ذلك.',
    nextSteps: [
      'Read the page on what the personal-carriage record says',
      'Read the page on the trade documentation for the commercial lane',
      'Read the page on shipping the material under the regulation',
    ],
    nextStepsAr: [
      'اقرأ صفحة ماذا يقول سجل الحمل الشخصي',
      'اقرأ صفحة توثيق التجارة لحومة التجارة',
      'اقرأ صفحة شحن المادة تحت الضبط',
    ],
    related: [
      { slug: 'trade/cites-import-by-market', label: 'What the listing requires' },
      { slug: 'trade/agarwood-documentation', label: 'What lot documentation can establish' },
      { slug: 'trade/shipping-wood-oil-perfume', label: 'Shipping the material under the regulation' },
      { slug: 'trade/document-review-limits', label: 'What a document check does and does not establish' },
    ],
  }),
];
