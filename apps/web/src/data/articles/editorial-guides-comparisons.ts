import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

/**
 * Editorial guides: the comparisons block.
 *
 * A comparison page is only useful if it compares things that are
 * recorded, and records the difference between what is recorded and what
 * is not. These pages put documented sets of the material side by side,
 * and state plainly where no source carries the comparison being asked
 * for.
 */

export const editorialGuideComparisons: Article[] = [
  /* ---------------------------------------------------------------
     comparisons/agarwood-origins
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'comparisons/agarwood-origins',
    parent: 'comparisons',
    title: 'Compare documented origins',
    titleAr: 'مقارنة المناسخ الموثقة',
    summary:
      'How the recorded origin record sets up a comparison: which countries and regions are documented as producing or trading the material, and what a comparison across them can and cannot say.',
    summaryAr:
      'كيف يدّرج سجل المنشأ المسجّل للمقارنة: أي الدول والمناطق موثقة بوصفها منتجة للمادة أو متداولة لها، وما الذي تستطيع مقارنة بينها أن تقوله وألا تقوله.',
    directAnswer:
      'The register documents a producing geography: the review of the producing genera records a set of producing countries, and the trade studies add the re-export and destination side, showing the material moving into regional markets. A comparison across those origins is therefore a comparison of recorded facts about where the material is produced and where it trades. What it is not is a comparison of quality or price between the origins: no source in the register ranks one origin above another, and the recorded trade shows the market carrying material from a set of origins without a documented fixed relationship between origin and value. The page compares the recorded geography honestly and stops at the boundary where the register would have to invent a ranking it does not carry.',
    directAnswerAr:
      'يوثّق السجل جغرافيا إنتاج: وتسجّل مراجعة الأجناس المنتجة مجموعة دول منتجة، وتضيف دراسات التجارة جانب إعادة التصدير والاستقبال، وتُبيّن تحرك المادة إلى أسواق إقليمية. وبالتالي فإن مقارنة بين هذه المناسخ هي مقارنة لحقائق مسجلة عن أين تُنتج المادة وأين تتاجر. وما هي ليست مقارنةً في الجودة أو السعر بين المناسخ: فلا مصدر في السجل يرتب منشأً فوق آخر، وتُبيّن التجارة المسجلة أن السوق يحمل المادة من مجموعة مناسخ دون علاقة ثابتة موثقة بين المنشأ والقيمة. وتقوم الصفحة بمقارنة الجغرافيا المسجلة بصدق وتتوقف عند الحد الذي يضطر السجل عنده إلى تزييف ترتيب لا يحمله.',
    sections: [
      {
        heading: 'The recorded producing geography',
        headingAr: 'جغرافيا الإنتاج المسجلة',
        body: [
          'The comparison starts from the producing record. The review of the agarwood-producing genera documents which countries and producing regions carry the material: a set of producing countries across Southeast Asia, with the genera named and the regions recorded. That is the first column of any comparison across origins. The study of the Papua New Guinea trade adds a second producing context to the record, and the study of the United Arab Emirates market adds the destination side: a recorded market where material from a set of origins is carried. Together they give the buyer two maps, a producing map and a destination map, and a comparison of origins is a reading across those two maps rather than a ranking that no map provides.',
        ],
        bodyAr: [
          'تبدأ المقارنة من سجل الإنتاج. فمراجعة أجناس الخشب الراتنجي توثّق أي الدول والمناطق المنتجة تحمل المادة: مجموعة دول منتجة في جنوب شرق آسيا، تُسجّل الأجناس المسمّاة والمناطق المسجلة. وهذه هي العمود الأول لأي مقارنة بين مناسخ. وتضيف دراسة تجارة بابوا غينيا الجديدة سياق إنتاج ثانٍ إلى السجل، وتضيف دراسة سوق الإمارات جانب الوجهة: سوقا موثقا تحمله المادة من مجموعة مناسخ. ويعطيان المشتري خريطتين، خريطة إنتاج وخريطة استقبال، ومقارنة المناسخ قراءة عبر الخريطةين، لا ترتيب لا يقدمه أي خريطة.',
        ],
      },
      {
      heading: 'What a comparison across origins can say',
        headingAr: 'ما يمكن لمقارنة بين مناسخ أن تقوله',
        body: [
          'Within the recorded geography, a comparison can say recorded things: that a producing region is documented, that a destination market is documented, and that the material moves between them. It can point the reader to the origin pages that carry the specifics of each region, and to the destination pages that carry the market side. That is a serviceable comparison: it is a documented map with pointers to the record for each location. What it cannot say is that one region’s material is better, rarer or more valuable than another’s, because the register does not rank the regions against one another on value. A trade study that records a market carrying material from several origins is not a source that orders those origins; it documents the carrying, not a ranking. The page keeps to the documentation and does not add the ordering.',
        ],
        bodyAr: [
          'ضمن الجغرافيا المسجلة تستطيع مقارنة أن تقول أشياء مسجلة: أن منطقة إنتاج موثقة، وأن سوق وجهة موثقة، وأن المادة تتحرك بينهما. ويمكن أن تشير القارئ إلى صفحات المنشأ التي تحمل تفاصيل كل منطقة، وإلى صفحات الوجهة التي تحمل جانب السوق. وهذه مقارنة صالحة: إنها خريطة موثقة بآلية إلى سجل كل موقع. وما لا تستطيع قوله أن مادة منطقة أفضل أو أقل أو قيمة من مادة أخرى، لأنه لا يرتب السجل المناطق فيما بينها على القيمة. فدراسة تجارية تسجل سوقا تحمّل المادة من عدة مناسخ ليست مصدرا يرتب تلك المناسخ؛ فهي توثق التحميل لا الترتيب. وتبقى الصفحة على التوثيق ولا تضيف الترتيب.',
        ],
      },
      {
        heading: 'Where the comparison stops',
        headingAr: 'أين تتوقف المقارنة',
        body: [
          'The honest stopping point is the quality and price comparison between the regions. The register has no source that ranks one producing region’s material above another’s on value, and the page will not manufacture that ranking. The related origin pages carry the documented specifics for each region, and the destination pages carry the recorded markets, so the comparison page’s job is to set those recorded pieces together without asserting the order the record does not give. A buyer comparing origins is therefore comparing documented geography and documented trade, and is told plainly that a quality or price ranking between the regions is not something the register supports. That is the limit, and stating it is what keeps the comparison from turning into a list the sources do not back.',
          'In practice the reader gets a documented map of where the material is produced and where it trades, with a clear pointer to each record, and a clear statement that the register does not order the map’s entries against one another on value.',
        ],
        bodyAr: [
          'نقطة التوقف الصادقة هي مقارنة الجودة والسعر بين المناطق. فلا يوجد في السجل مصدر يرتب مادة منطقة إنتاجية فوق أخرى على القيمة، ولن تصنع الصفحة ذلك الترتيب. وتحمل صفحات المنشأ المرتبطة تفاصيل موثقة لكل منطقة، وتحمل صفحات الوجهة الأسواق المسجلة، لذا فإن واجب صفحة المقارنة هو أن تجمع تلك القطع المسجلة دون أن تقرر ما لا يعطيه السجل من الترتيب. فالمشتري الذي يقارن مناسخ يقارن جغرافيا موثقة وتجارا موثقا، ويُقال له بوضوح أن ترتيبا في الجودة أو السعر بين المناطق ليس ما يدعمه السجل. وهذا هو الحد، وقوله هو ما يبقي المقارنة من أن تتحول إلى قائمة لا تدعمها المصادر.',
          'وفي الممارسة يملك القارئ خريطة موثقة لأين تُنتج المادة وأين تتاجر، وبآلية واضحة إلى كل سجل، وبقرار واضح أن السجل لا يرتب إدخالات الخريطة فيما بعضها على القيمة.',
        ],
        list: [
          'Compare only what is recorded: producing regions, destination markets, and movement between them.',
          'Point each entry to its own documented origin or destination page.',
          'Refuse to rank the regions on value, because no source in the register does.',
        ],
        listAr: [
          'قارن ما هو مسجل فقط: مناطق الإنتاج، أسواق الوجهة، والتحرك بينها.',
          'وجوّه كل مدخل إلى صفحته الخاصة الموثقة للمنشأ أو الوجهة.',
          'وامتنع عن ترتيب المناطق على القيمة، لأنه لا مصدر في السجل يفعل.',
        ],
      },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_PNG_AGARWOOD', 'TRAFFIC_UAE_AGARWOOD_TRADE'],
    workedExample: {
      situation:
        'A hypothetical buyer is deciding between two origins and wants the encyclopedia to say which is “better”; the question is what the register can actually put side by side.',
      situationAr:
        'مشتري افتراضي يقرر بين منشأين ويريد من الموسوعة أن تقول أيهما «أفضل»؛ والسؤال ماذا يستطيع السجل فعلا أن يضع جنبا إلى جنب.',
      steps: [
        'Lay out the two origins as documented: each is a recorded producing region with its own origin page.',
        'Lay out the trade record: the recorded markets that carry material from a set of origins.',
        'Check the “better” claim: no source in the register ranks one region’s material above another’s, so that question stays open.',
        'Report the split: the geography and the trade are side by side on the record; the value ranking is not.',
      ],
      stepsAr: [
        'ضع المنشأين الموثّقين: كل واحد منهما منطقة إنتاج مسجلة بصفحة منشأ خاصة.',
        'واضع سجل التجارة: الأسواق المسجلة التي تحمّل المادة من مجموعة مناسخ.',
        'وفحص ادعاء «الأفضل»: لا مصدر في السجل يرتب مادة منطقة فوق أخرى، فيبقى السؤال مفتوحا.',
        'وقيل الانقسام: الجغرافيا والتجارة جنبًا إلى جنب على السجل؛ أما ترتيب القيمة فلا.',
      ],
      takeaway:
        'The example shows a comparison that sets the recorded facts side by side and leaves the value ranking open: the page serves the buyer the map and refuses to order it. That refusal is the comparison working as documented, not as a list the record does not contain.',
      takeawayAr:
        'يُبيّن المثال مقارنة وضعت الحقائق المسجلة جنبا إلى جنب وترت ترتيب القيمة مفتوحا: فالصفحة تقدم القارئ الخريطة وترت ترتيبها. وهذا الرفض هو المقارنة تعمل بوصفها موثقة، لا بوصفها قائمة لا يحتويها السجل.',
    },
    limitations:
      'This page compares the documented producing regions and the documented destination markets, and points each entry to its own record. It does not rank the origins on quality, rarity or price, because no source in the register does. The comparison is a documented geography, not a value order.',
      limitationsAr:
      'تقوم هذه الصفحة بمقارنة مناطق الإنتاج الموثقة وأسواق الوجهة الموثقة، وتوجيه كل مدخل إلى سجله الخاص. ولا ترتب المناسخ على الجودة أو الندرة أو السعر، لأنه لا مصدر في السجل يفعل. فالمقارنة جغرافيا موثقة، لا ترتيب قيمة.',
    nextSteps: [
      'Read each origin’s own documented page',
      'Read the destination pages for the recorded markets',
      'Read a specific origin-to-origin comparison for its recorded contrast',
    ],
    nextStepsAr: [
      'اقرأ صفحة كل منشأ الموثقة نفسها',
      'اقرأ صفحات الوجهة عن الأسواق المسجلة',
      'اقرأ مقارنة منشأ إلى منشأ محددة عن تباينها المسجل',
    ],
    related: [
      { slug: 'comparisons/india-and-cambodia-oud', label: 'An origin-to-origin comparison' },
      { slug: 'comparisons/vietnam-and-cambodia-oud', label: 'A second recorded contrast' },
      { slug: 'origins/indonesia', label: 'A documented producing region' },
      { slug: 'fragrance/oud-in-the-fragrance-market', label: 'Where the material lands in the market' },
    ],
  }),

  /* ---------------------------------------------------------------
     comparisons/attar-oud-oil-fragrance-oil
     --------------------------------------------------------------- */
  simpleGuide({
    slug: 'comparisons/attar-oud-oil-fragrance-oil',
    parent: 'comparisons',
    title: 'Attar, oud oil and fragrance oil',
    titleAr: 'الإتر وزيت العود وزيت العطر',
    summary:
      'What separates attar, oud oil and fragrance oil as three different products, and why a price or a claim stated for one does not transfer to another.',
    summaryAr:
      'ما الذي يفرق بين الإتر وزيت العود وزيت العطر بوصفها ثلاثة منتجات مختلفة، ولماذا لا ينتقل سعر أو ادعاء يُقال عن واحد منها إلى آخر.',
    directAnswer:
      'These are three different products, and the comparison is a comparison of product types rather than of quality within one product. Attar is a traditional formulation the market carries, oud oil is the oil distilled from the resinous wood, and fragrance oil is a finished fragrance made to carry the oud character. The recorded market study documents the material and the forms the market carries, and the recorded standards frame what a finished fragrance must state on its label. What the comparison cannot do is set one number against another: a price recorded for one form is not a price for another, and no source in the register fixes a price for any of the three. The page draws the product line clearly and keeps every claim about one product out of another’s lane.',
    directAnswerAr:
      'هذه ثلاثة منتجات مختلفة، والمقارنة مقارنة أنواع منتجات لا مقارنة جودة داخل منتج واحد. والإتر صياغة تقليدية يحملها السوق، وزيت العود هو الزيت المقطّر من الخشب الراتنجي، وزيت العطر عطر منتهٍ مصنوع ليهيكل شخصية العود. ودراسة السوق المسجلة توثّق المادة وأشكال السوق التي تحملها، والأطر المسجلة تقرر ما يجب أن يقوله عطر منتهٍ على ملصقه. وما لا تستطيع المقارنة فعله هو وضع رقم مقابل آخر: فسعر مسجل لشكل واحد ليس سعرا لآخر، ولا مصدر في السجل يثبّت سعرا لأي من الثلاثة. وترسم الصفحة خط المنتج بوضوح وتبقي كل ادعاء عن منتج واحد خارج حومة منتج آخر.',
    sections: [
      {
        heading: 'Three products, three lanes',
        headingAr: 'ثلاثة منتجات، ثلاثة حومات',
        body: [
          'The first move is to draw the product line, because confusing the three is where most of the confusion in the question comes from. Attar is a traditional formulation the market carries, and the recorded market study documents it among the forms in the market. Oud oil is the oil distilled from the resinous wood, a different material with its own uses and its own handling. Fragrance oil is a finished fragrance made to carry the oud character, and as a finished product it sits under the recorded standards for what a fragrance must state on its label. The three are not one product in three names: they are three different materials with different uses, different handling and different label requirements, and a comparison across them is a comparison of product types. That is the documented shape of the three, and it is the whole of what the register can put side by side.',
        ],
        bodyAr: [
          'الحركة الأولى أن ترسم خط المنتج، لأن الخلط بين الثلاثة هو منبع معظم الالتباس في السؤال. فالإتر صياغة تقليدية يحملها السوق، ودراسة السوق المسجلة توثقه من بين الأشكال في السوق. وزيت العود هو الزيت المقطّر من الخشب الراتنجي، مادة مختلفة باستخداماتها وقواعد تعاملها الخاصة. وزيت العطر عطر منتهٍ مصنوع ليهيكل شخصية العود، وبصفته منتجا منتهيا فهو يخضع للأطر المسجلة لما يجب أن يقوله عطر على ملصقه. فالثلاثة ليست منتجا واحدا بثلاثة أسماء؛ إنها ثلاث مواد مختلفة باستخدامات مختلفة وقواعد تعامل مختلفة ومتطلبات تسمية مختلفة، ومقارنة بينها مقارنة أنواع منتجات. وهذا هو الشكل الموثق للثلاثة، وهو كل ما يستطيع السجل أن يضعه جنبا إلى جنب.',
        ],
      },
      {
        heading: 'What the comparison can say about each',
        headingAr: 'ما تستطيع المقارنة أن تقوله عن كل',
        body: [
          'Within the product line, the comparison can say recorded things about each. About attar, it can point to the market record that documents it as a form the market carries. About oud oil, it can point to the producing and extraction record: what the oil is and how it is obtained from the wood. About fragrance oil, it can point to the standards record: what a finished fragrance must state on its label, and why that statement matters to a buyer. Each of those is a documented fact about its own product, and holding each one to its own lane is what makes the comparison useful. A reader can be told, for each of the three, what its record says, without the records of one product being used to answer a question about another.',
        ],
        bodyAr: [
          'داخل خط المنتج تستطيع المقارنة أن تقول أشياء مسجلة عن كل. عن الإتر تستطيع أن تشير إلى سجل السوق الذي يوثقه بوصفه شكلا يحمله السوق. وعن زيت العود تستطيع أن تشير إلى سجل الإنتاج والاستخراج: ما هو الزيت وكيف يُستحصل من الخشب. وعن زيت العطر تستطيع أن تشير إلى سجل المعايير: ما الذي يجب أن يقوله عطر منتهٍ على ملصقه، ولماذا يهم ذلك القارئ. وكل تلك حقيقة موثقة عن منتجها، وإبقاء كل واحد في حومته هو ما يجعل المقارنة نافعة. ويمكن القول للقارئ، عن كل من الثلاثة، ما يقوله سجله، دون استخدام سجل منتج واحد للإجابة عن سؤال عن منتج آخر.',
        ],
      },
      {
        heading: 'The price line that does not transfer',
        headingAr: 'خط السعر الذي لا ينتقل',
        body: [
          'The practical limit is price, and the limit is that a number recorded for one form does not transfer to another. The recorded market study gives a recorded price for the oil, and that price is a price for the oil, not for attar and not for a finished fragrance. No source in the register fixes a price for any of the three, and a buyer who quotes one form against another is comparing things that are not the same product. The page keeps that line: it can report a recorded price where the record has one, and it can say plainly that a figure for one form is not a figure for another, and that no source in the register prices any of the three against one another. The comparison is a product-type comparison, and price is the clearest place where the lane-holding shows.',
          'In practice the reader compares the three by what each is and what its record says, and is told that the number, if one is quoted, belongs to the product it was stated for, not to the other two.',
        ],
        bodyAr: [
          'الحد العملي هو السعر، وحدّه أن رقما مسجلا لشكل واحد لا ينتقل إلى آخر. وتعطي دراسة السوق المسجلة سعرا مسجلا للزيت، وسعر ذلك هو سعر الزيت، لا سعر الإتر ولا سعر عطر منتهٍ. ولا مصدر في السجل يثبّت سعرا لأي من الثلاثة، والمشتري الذي يضع شكلين متقابلين يقارن شيئين ليسا منتجا واحدا. وتبقي الصفحة على ذلك الخط: يمكنها أن تقرّر سعرا مسجلا حيث يوجد في السجل، ويمكنها أن تقول بوضوح أن رقما عن شكل واحد ليس رقما عن الآخر، وأن لا مصدر في السجل يسعر أي من الثلاثة مقابل الآخر. فالمقارنة مقارنة أنواع منتجات، والسعر هو أوضح مكان يظهر فيه التحفظ على الحومة.',
          'وفي الممارسة يقارن القارئ الثلاثة بما هو كل وما يقوله سجله، ويُقال له أن الرقم، إن قيل، ينتمي للمنتج الذي قيل عليه، لا للآخرين.',
        ],
        list: [
          'Draw the product line: attar, oud oil and fragrance oil are three different materials.',
          'Hold each claim to its own product’s record.',
          'Keep a price stated for one form out of the other two forms.',
        ],
        listAr: [
          'ارسم خط المنتج: الإتر وزيت العود وزيت العطر ثلاث مواد مختلفة.',
          'أبقِ كل ادعاء على سجل منتجها الخاص.',
          'وأبقِ سعرا قيل عن شكل واحد خارج الشكلين الآخرين.',
        ],
      },
    ],
    sourceIds: ['TRAFFIC_UAE_AGARWOOD_TRADE', 'IFRA_STANDARDS'],
    workedExample: {
      situation:
        'A hypothetical buyer is offered a bottle labelled “oud fragrance oil” at a price and wants to know whether that price says anything about attar or about distilled oud oil.',
        situationAr:
        'قُيّمَ المشتري زجاجة ملصقها «زيت عطر العود» بسعر، ويريد أن يعرف إن كان ذلك السعر يقول شيئا عن الإتر أو عن زيت العود المقطّر.',
      steps: [
        'Name the product: the bottle is a finished fragrance, so it sits under the standards that govern what a finished fragrance states on its label.',
        'Check the transfer: the recorded price the study gives is a price for the oil, so it does not move to the finished fragrance or to attar.',
        'Check attar: it is a separate form the market carries, and a figure for the fragrance says nothing about it.',
        'Report: the figure belongs to the product it was stated for, and the other two keep their own records.',
      ],
      stepsAr: [
        'سمِّ المنتج: الزجاجة عطر منتهٍ، لذا تخضع للأطر التي تقرر ما يقوله عطر منتهٍ على ملصقه.',
        'وفحص الانتقال: السعر المسجل الذي تعطييه الدراسة هو سعر الزيت، فلا ينتقل إلى العطر المنتهي ولا إلى الإتر.',
        'وفحص الإتر: شكل منفصل يحمله السوق، ورقم عن العطر لا يقول شيئا عنه.',
        'وقيل: الرقم ينتمي للمنتج الذي قيل عليه، ويحافظ الآخران على سجلاتهما الخاصة.',
      ],
      takeaway:
        'The example shows the lane-holding in action: a price on one product does not reach two others, and the only record that speaks for the finished bottle is the standards record. A buyer who keeps the products in their lanes is not blocked from comparing them, they are compared correctly.',
        takeawayAr:
        'يُبيّن المثال عمل التحفظ على الحومة: سعرا على منتج واحد لا يصل إلى اثنين آخرين، والسجل الوحيد الذي يصرّح عن الزجاجة المنتهية هو سجل المعايير. والمشتري الذي يبقي المنتجات في حوماتها لا يُمنع من المقارنة، بل يُقارن صحيحا.',
    },
    limitations:
      'This page compares attar, oud oil and fragrance oil as three different product types, and points each to the record that speaks for it. It does not fix a price for any of the three, and it does not transfer a figure recorded for one form to another, because no source in the register does.',
      limitationsAr:
      'تقوم هذه الصفحة بمقارنة الإتر وزيت العود وزيت العطر بوصفها ثلاثة أنواع منتجات مختلفة، وتوجيه كل إلى السجل الذي يصرّح عنه. ولا تثبّت سعرا لأي من الثلاثة، ولا تنتقل رقم مسجل عن شكل إلى آخر، لأنه لا مصدر في السجل يفعل.',
    nextSteps: [
      'Read the oud oil page for what the oil is',
      'Read the attar page for the traditional form',
      'Read the fragrance standards for what a finished product must state',
    ],
    nextStepsAr: [
      'اقرأ صفحة زيت العود عن ما هو الزيت',
      'اقرأ صفحة الإتر عن الشكل التقليدي',
      'اقرأ معايير العطور عن ما يجب أن يقوله المنتج المنتهي',
    ],
    related: [
      { slug: 'products/attars', label: 'The traditional form the market carries' },
      { slug: 'products/oud-oil', label: 'What the oil is' },
      { slug: 'products/perfume-oils', label: 'The finished fragrance form' },
      { slug: 'fragrance/oud-oil-vs-attar', label: 'The recorded contrast between two forms' },
    ],
  }),
];
