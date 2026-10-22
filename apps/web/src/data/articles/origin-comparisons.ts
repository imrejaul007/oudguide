import { originComparison } from './geography-kit.ts';
import type { Article } from './types.ts';

/**
 * The origin-comparison pages.
 *
 * The manifest carries six "Origin comparison" routes. The India and
 * Cambodia comparison already existed, so this file holds the other five.
 *
 * The manifest's gate for this family is: "Distinct comparison demand and
 * sourced differences; no deterministic aroma hierarchy." Two things
 * follow from it, and they shape every page here.
 *
 * The first is that a comparison is worth publishing only when there is
 * a SOURCED difference between the two places. So each page below is
 * built on a difference the sources actually record — a shared species
 * set, a shared genus, an export quota, a trade arrangement — and not on
 * an assumption that one place makes better material than another.
 *
 * The second is that the page must refuse to rank. So none of these
 * pages says that one origin is better, and the Arabic frames are
 * copied from the published India and Cambodia comparison, which were
 * written for exactly this purpose: to compare two origin claims
 * without settling between them.
 *
 * The English is authored. The Arabic is copied from the published
 * comparison page, whose four section frames and their bodies were
 * written to make a comparison without a verdict, so the new pages
 * carry the same frames rather than a parallel set that could drift.
 */

/**
 * The Arabic frames, copied from the published India and Cambodia
 * comparison page.
 *
 * The frames are the same because the comparison is the same: two origin
 * claims, a documented difference between them, and no ranking. What
 * changes between the pages is the specific difference and the
 * specific samples, which is the part that has to be original.
 */
const FRAMES = {
  /** "The comparison that can be made" */
  compare: {
    heading: 'The comparison that can be made',
    headingAr: 'المقارنة التي يمكن إجراؤها',
    body: [
      'Compare on the documented: the species, the growing area, the method of distillation, and the character of the material as it is described. And when two samples are available, compare the two samples — on the same day, by the same person, against the same measures.',
    ],
    bodyAr: [
      'قارن على الموثّق: النوع، ومنطقة النمو، وطريقة التقطير، وطابع المادة كما هو موصوف. وحين تتوفر عينتان، فقارن العينتين — في اليوم نفسه، وبالشخص نفسه، وبمقاييس نفسها.',
      'وقارن على المُدَّعى: فكل تسمية إقليمية تحمل دلالتها في سوقها، وادعاء المنشأ ادعاء يُتحقق منه أو لا. ومقارنة الادعاءات مفيدة لفهم التجارة، وهي لا تنتج حكماً.',
      'وانتبه لحدّ المقارنة: فادعاء منشأ مادة لا يمتد إلى الشجرة التي جاءت منها دون سلسلة سجلات، وهذا موضوع نقاش المصدر لا موضوع نقاش المادة.',
    ],
  },
  /** "Two samples differ in more than their origin" */
  samples: {
    heading: 'Two samples differ in more than their origin',
    headingAr: 'العيّنتان تختلفان في أكثر من المنشأ',
    body: [
      'Two samples sold as being from two different places differ in at least four respects, and a comparison that records only the origin has not recorded enough to explain what the comparer saw. The species differ, or the method of distillation differs, or the shape differs, or the two reach the buyer at different ages.',
    ],
    bodyAr: [
      'عيّنتان تُباعان على أنهما من منطقتين مختلفتين تختلفان في أربعة أوجه على الأقل، ومقارنة لا تسجّل إلا المنشأ لم تسجّل ما يكفي لتفسير ما رآه المقارن. فالنوعان يختلفان. وطريقة التقطير قد تختلف. والشكل قد يختلف. والاثنتان تصلان إلى المشتري في عمرين مختلفين، لأن الزيت يشيخ على رفّ البائع لا على جدول.',
      'والنتيجة عملية. فإذا اختلفت الطريقة بين العيّنتين، لم يكن اختلاف الرائحة بينهما منسوباً إلى المنشأ، والمقارنة المكتوبة وكأنها منسوبة ستضلّ من يقرؤها لاحقاً. وليس في هذا حجة ضد المقارنة، بل حجة على أن تُجرى على أساس معلن. ولكي تفيد المقارنة، يجب إما تثبيت الطريقة، أو تسجيلها للاثنين، وبيان أي الفروق يفسّره السجل وأيها لا يفسّره.',
    ],
  },
  /** "The vocabulary of one trade does not carry into the other" */
  vocabulary: {
    heading: 'The vocabulary of one trade does not carry into the other',
    headingAr: 'مفردات تجارةٍ لا تنتقل إلى الأخرى',
    body: [
      'Each of the two trades has its own vocabulary for the growing areas, the wood types, the customary practices and the grades, and that vocabulary is local. So the precise word used by someone in one of the two places is either unknown in the other, or worse, understood to mean something else.',
    ],
    bodyAr: [
      'لكل من التجارتين مفردات خاصة بها في مناطق النمو، وأنواع الخشب، والممارسات المعتادة، والدرجات، وهذه المفردات محلية. فاللفظ الدقيق عند إنسان في أحد الإقليمين إما مجهول في الآخر، أو أسوأ من ذلك، مفهوم على أنه شيء آخر. وهذه هي الطريقة المعتادة لفشل مصطلحات التجارة: لا بادعاء كاذب، بل بكلمة سافرت بلا معناها.',
      'فأولى ما ينبغي في المقارنة أن يُحسم ما يسمي كل طرف الأشياء به، لا أن تُقارن الكلمات. فاطلب من كل مورد أن يصف المادة بمصطلحاته، واكتب تلك المصطلحات إلى جانب الترجمة. وحيث لا مقابل لمصطلح، فسجّل أنه لا مقابل له بدل استبداله بأقرب لفظ، فأقرب لفظ هو مدخل الخطأ. والمقارنة المكتوبة كلها بمفردات طرف واحد تفضّل ذلك الطرف، وتوصف المادة الأخرى بلغة لا تتكلمها.',
    ],
  },
  /** "Neither claim is easier to evidence than the other" */
  evidence: {
    heading: 'Neither claim is easier to evidence than the other',
    headingAr: 'لا ادعاء أسهل إثباتاً من الآخر',
    body: [
      'It is tempting to see two origin claims in different genera and assume that one rests on an older regional tradition and the other on a newer trade. They are equal as evidence. An origin claim, whichever place is named, stands on the same classes of record: the species, the growing area, whether the material was wild or cultivated, the method of distillation, and a chain that reaches the material without a gap.',
    ],
    bodyAr: [
      'يغرى المرء بأن يرى ادعاءَي المنشأ مختلفين في الجنس، فيظن أن أحدهما يستند إلى تقليد إقليمي قديم والآخر إلى تجارة أحدث. لكنه من حيث الإثبات سواء. فادعاء المنشأ، أيّ الإقليمين سمّى، يقوم على أصناف السجل نفسها: النوع، ومنطقة النمو، وهل كانت المادة برية أم مستزرعة، وطريقة التقطير، وسلسلة تصل إلى المادة دون ثغرة. وما يختلف بين الاثنين هو الأوراق وصياغتها، لا المعيار.',
      'والنتيجة في المقارنة أن طرفاً لا يحصل على اختصار. فالادعاء الكمبودي الذي يحمله وصف البائع وحده في المؤر نفسه الذي يحمل فيه ادعاء هندي بوصفه البائع وحده، وينبغي كتابة الاثنين بالقدر نفسه من التحفظ. وحين يمتلك أحدهما ما هو أكثر، فاذكر أيّهما وماذا تثبته السجلات الزائدة — واحتفظ بملاحظة ما لم يثبت في الملف نفسه.',
    ],
  },
};

export const originComparisonArticles: Article[] = [
  originComparison({
    slug: 'comparisons/vietnam-and-cambodia-oud',
    first: 'Vietnam',
    firstAr: 'فيتنام',
    firstSlug: 'origins/vietnam',
    second: 'Cambodia',
    secondAr: 'كمبوديا',
    secondSlug: 'origins/cambodia',
    summary:
      'Two countries that share their species set, that both export only plantation and home-garden material, and that differ in the scale they report and in how much of it is wild.',
    summaryAr:
      'بلدان يتشاركان مجموعة الأنواع نفسها، ويصدّران معاً مادة المزارع والحدائق المنزلية فقط، ويختلفان في الحجم الذي يبلّغان عنه وفي مقدار ما هو بري منه.',
    directAnswer:
      'Vietnam and Cambodia share the same Indo-China species set — Aquilaria crassna, A. baillonii, A. banaensis, A. rugosa and A. yunnanensis — and the same Appendix II listing, so nothing in the species record separates them. What the sources do separate is the scale and the basis of the material. Vietnam reported 20,000 to 30,000 hectares of plantation, mostly A. crassna, to the CITES questionnaire in 2020 and 16,000 hectares on the review questionnaire, and it exports only plantation and home-garden material. Cambodia reported more than 1 million trees in plantations, 80% A. crassna, and 60 trees in home gardens, with no estimate of its wild population, and the 2023 to 2026 Cardamom survey found the wild population thin: up to three trees per hectare in Koh Kong, an average of two in Pursat and one in Battambang. So the comparison that can be made is plantation scale against wild scarcity, and not a difference in species.',
    directAnswerAr:
      'تشترك فيتنام وكمبوديا في مجموعة أنواع الهند والصين نفسها — Aquilaria crassna وA. baillonii وA. banaensis وA. rugosa وA. yunnanensis — وفي الإدراج نفسه في الملحق الثاني، فلا شيء في سجل الأنواع يفصل بينهما. وما يفصلهما فعلاً هو حجم المادة وأساسها. فأبلغت فيتنام عن 20,000 إلى 30,000 هكتار من المزارع، معظمها A. crassna، في استبيان سايتس لعام 2020، وعن 16,000 هكتار في استبيان المراجعة، وهي لا تصدّر إلا مادة المزارع والحدائق المنزلية. وأبلغت كمبوديا عن أكثر من مليون شجرة في المزارع، 80٪ منها A. crassna، وعن 60 شجرة في الحدائق المنزلية، بلا تقدير لسكانتها البري، ووجد مسح كارداموم 2023-2026 أن السكان البري قليل: حتى ثلاثة أشجار في الهكتار في كوه كونغ، وبمعدل شجرتين في بورسات وشجرة واحدة في باتّبانغ. فالمقارنة التي يمكن إجراؤها هي حجم المزارع في مقابل ندرة البري، لا اختلاف في الأنواع.',
    scope:
      'This page compares the origin claims made for Vietnamese and Cambodian material. It covers the species the two countries share, the plantation and wild figures each reports, and the fields a buyer should establish for a lot from either. It does not rank the two, and it does not establish that a lot sold under either name came from the place named.',
    scopeAr:
      'تقارن هذه الصفحة ادعاءَي المنشأ للمادة الفيتنامية والكمبودية. وتغطي الأنواع التي تتشارك فيها البلدان، وأرقام المزارع والسكان البري التي يبلّغ عنها كل منهما، والحقول التي ينبغي للمشتري إثباتها للوط من أي منهما. ولا ترتّب بين البالِدين، ولا تثبت أن لوطاً يُباع تحت أي من الاسمين جاء من المكان المذكور.',
    labels:
      'The origin labels for these two overlap almost completely, which is the point. The species set is shared, the principal cultivated species is shared, and the trade vocabulary for the material is shared. What a label establishes is therefore a claim about a lot rather than a distinction between two countries: "A. crassna" tells a buyer what the tree is, and it does not tell them which of the two growing countries it was taken from.',
    labelsAr:
      'تتداخل تسميات المنشأ لهما إلى حد كبير، وهذا هو المقصود. فمجموعة الأنواع مشتركة، والنوع الرئيسي المزروع مشترك، ومفردات التجارة للمادة مشتركة. فالتسمية إذن ادعاء عن لوط لا تمييز بين بلدين: فـ «A. crassna» تخبر المشتري بالنوع، ولا تخبره بأي منهما أُخذت منه.',
    contexts:
      'Both countries are in the range of the same five species, and both report their material as plantation and home-garden origin. The planted area differs in the record — 20,000 to 30,000 hectares for Vietnam against more than 1 million trees for Cambodia — and the review is explicit that these figures differ between sources and sometimes between sources reporting the same year. The Cambodian survey of 2023 to 2026 adds the wild figure the country-level table could not give: a population thin enough that the restoration programme registered 20 parent trees, seventeen of them in Koh Kong.',
    contextsAr:
      'البلدان في نطاق الأنواع الخمسة نفسها، وكلاهما يبلّغ عن مادته بأنها من المزارع والحدائق المنزلية. والمساحة المزروعة تختلف في السجل — 20,000 إلى 30,000 هكتار لفيتنام في مقابل أكثر من مليون شجرة لكمبوديا — والمراجعة صريحة بأن هذه الأرقام تختلف بين المصادر وأحياناً بين مصدرين يبلّغان عن السنة نفسها. ويضيف مسح كمبوديا 2023-2026 رقم البري الذي لم يعطه جدول البلد: عدداً قليلاً بحيث سجّل برنامج الاستعادة 20 شجرة أم، سبع عشرة منها في كوه كونغ.',
    overlap:
      'The overlap is substantial and it is why a comparison between the two is worth reading rather than assuming. The same species are recorded in both, the same species is the one planted in both, and a lot described as A. crassna from either country is described in the same terms. What does not overlap is the record of how much material each has, and that is a difference in reporting rather than in the material.',
    overlapAr:
      'التداخل كبير، ولهذا تستحق المقارنة بين البالِدين أن تُقرأ لا أن تُفترض. فالأنواع نفسها مسجَّلة في كليهما، والأنواع نفسه هو المزروع في كليهما، واللوط الموصوف بأنه A. crassna من أي من البالِدين يوصف بالعبارات نفسها. وما لا يتداخل هو سجل كم يملك كل منهما، وذلك فرق في الإبلاغ لا في المادة.',
    samples:
      'Two samples, one from each country, should be compared side by side on the same day, by the same person, and assessed against the same list: the species and the method that established it, whether the material was plantation or wild, the treatment before any distillation, the resin content if it was stated, and the batch reference. A comparison of one country against the other that skips the species is not a comparison of origins, because the origins share their species set.',
    samplesAr:
      'عينتان، واحدة من كل بلد، ينبغي أن تُقارَنا جنباً إلى جنب في اليوم نفسه وبالشخص نفسه، وتُقيَّمان على القائمة نفسها: النوع والطريقة التي حدّدته، وهل كانت المادة مزروعة أم برية، والمعالجة قبل أي تقطير، ونسبة الراتنج إن ذُكرت، ومرجع الدفعة. ومقارنة بلد بآخر تتخطى النوع ليست مقارنة منشأ، لأن المنشأين يتشاركان مجموعة أنواعهما.',
    related: [
      { slug: 'origins/vietnam', label: 'Vietnam origin guide' },
      { slug: 'origins/cambodia', label: 'Cambodia origin guide' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000', 'AGARWOOD_REVIEW_2014'],
  }),

  originComparison({
    slug: 'comparisons/malaysia-and-indonesia-oud',
    first: 'Malaysia',
    firstAr: 'ماليزيا',
    firstSlug: 'origins/malaysia',
    second: 'Indonesia',
    secondAr: 'إندونيسيا',
    secondSlug: 'origins/indonesia',
    summary:
      'The two largest agarwood exporters, the two countries where wild harvesting is still permitted under controls, and the two whose species lists overlap almost completely.',
    summaryAr:
      'أكبر بلدين مصدِّرَين للعود، والبلدين الوحيدان اللذين ما زال الجمع البري مسموحاً فيهما بضوابط، والبلدان اللذين تتداخل قوائماهما نوعياً إلى حد كبير.',
    directAnswer:
      'Malaysia and Indonesia are the two largest Aquilaria exporters and the two countries where harvesting of wild trees is still permitted, under controls. That is a real difference in how the material is obtained, and not a difference in the material itself. The species lists overlap heavily — A. microcarpa, A. beccariana, A. cumingiana and A. hirta are recorded for both — while the quotas and the population figures differ: Malaysia recorded 1 571 100 trees on 2 500 hectares of plantation in 2014 and a 2013 census of 1.11 million wild stems, with 2022 quotas of 50 000 kg for Peninsular Malaysia and 5 000 kg for Sarawak; Indonesia recorded 3.12 million plantation trees, no wild population estimate, and 2021 quotas of 101 000 kg for A. malaccensis, 490 010 kg for A. filaria and 3 000 kg for G. versteegii. So the comparison is about a harvest regime, not about a tree.',
    directAnswerAr:
      'ماليزيا وإندونيسيا أكبر بلدين مصدِّرَين لـ Aquilaria، والبلدين الوحيدان اللذين ما زال فيهما جمع الأشجار البرية مسموحاً بضوابط. وهذا فرق حقيقي في طريقة الحصول على المادة، لا فرق في المادة نفسها. فقائمتا الأنواع تتداخلان إلى حد كبير — A. microcarpa وA. beccariana وA. cumingiana وA. hirta مسجَّلة للبلدين — بينما تختلف الحصص وأرقام السكان: فسجّلت ماليزيا 1 571 100 شجرة على 2 500 هكتار من المزارع في 2014 وجرداً في 2013 قدره 1.11 مليون ساق برية، بحصص 2022 قدرها 50,000 كغ لشبه الجزيرة و5,000 كغ لسارواك. وسجّلت إندونيسيا 3.12 مليون شجرة مزروعة، بلا تقدير للسكان البري، بحصص 2021 قدرها 101,000 كغ لـ A. malaccensis و490,010 كغ لـ A. filaria و3,000 كغ لـ G. versteegii. فالمقارنة عن نظام الجمع لا عن الشجرة.',
    scope:
      'This page compares the origin claims made for Malaysian and Indonesian material. It covers the species the two countries share, the harvest regimes that differ between them, the quotas and the population figures each reports, and what a buyer should establish for a lot from either. It does not rank the two, and it does not establish that a lot sold under either name came from the place named.',
    scopeAr:
      'تقارن هذه الصفحة ادعاءَي المنشأ للمادة الماليزية والإندونيسية. وتغطي الأنواع التي تتشارك فيها ، وأنظمة الجمع التي تختلف بينهما، وأرقام الحصص والسكان التي يبلّغ عنها كل منهما، وما ينبغي للمشتري إثباته للوط من أي منهما. ولا ترتّب بين البالِدين، ولا تثبت أن لوطاً يُباع تحت أي من الاسمين جاء من المكان المذكور.',
    labels:
      'The species overlap is close to total, and the differences are in the harvest regime and the paperwork rather than in the tree. Both countries permit wild collection under controls, both have CITES export quotas, and both have a domestic grading vocabulary that does not match the other. So "Malaysian" and "Indonesian" on a listing are claims about a harvest regime and a quota, and a buyer who wants a material difference has to ask about the species and the treatment rather than the country name.',
    labelsAr:
      'التداخل النوعي قريب من التام، والفروق في نظام الجمع والأوراق لا في الشجرة. فالبلدان يسمحان بالجمع البري بضوابط، ولكل منهما حصص تصدير سايتس، ولكل منهما مفردات تقييم محلية لا تطابق الأخرى. فـ «ماليزي» و«إندونيسي» على إعلان ادعاءان عن نظام الجمع وعن حصة، ومن يريد فرقاً في المادة عليه أن يسأل عن النوع والمعالجة لا عن اسم البلد.',
    contexts:
      'The two countries are the largest Aquilaria exporters, and the two where wild harvesting is still permitted under controls. The review records that more than 98% of the material exported from Malaysia and from Indonesia is wild stock, and that less than 2% of each country\'s exports came from plantations in 2019 and 2020, while most of the 8 400 kg Malaysia exported in 2020 was plantation material. The species lists overlap heavily, and the population figures do not: Malaysia has a 2013 census and a plantation area, Indonesia has a planted-tree count and no wild-population estimate at all.',
    contextsAr:
      'البلدان أكبر مصدّرين لـ Aquilaria، والبلدان اللذان ما زال الجمع البري مسموحاً فيهما بضوابط. وتسجّل المراجعة أن أكثر من 98٪ من المواد المصدَّرة من ماليزيا ومن إندونيسيا برية، وأن أقل من 2٪ من صادرات كل بلد جاءت من المزارع في 2019 و2020، بينما كان معظم الـ 8,400 كغ التي صدّرتها ماليزيا في 2020 من المزارع. وقائمتا الأنواع تتداخلان إلى حد كبير، وأرقام السكان لا: فماليزيا لها جرد 2013 ومساحة مزروعة، وإندونيسيا لها عدد أشجار مزروعة وبلا تقدير للسكان البري.',
    overlap:
      'The overlap is close to total on the species, and the differences are in the harvest regime and the paperwork rather than in the tree. Both countries permit wild collection under controls, both have CITES export quotas, and both have a domestic grading vocabulary that does not match the other\'s. So "Malaysian" and "Indonesian" on a listing are claims about a harvest regime and a quota, and a buyer who wants a material difference has to ask about the species and the treatment rather than the country name.',
    overlapAr:
      'التداخل قريب من التام على الأنواع، والفروق في نظام الجمع والأوراق لا في الشجرة. فالبلدان يسمحان بالجمع البري بضوابط، ولكل منهما حصص تصدير سايتس، ولكل منهما مفردات تقييم محلية لا تطابق الأخرى. فـ «ماليزي» و«إندونيسي» ادعاءان عن نظام الجمع وعن حصة، ومن يريد فرقاً في المادة عليه أن يسأل عن النوع والمعالجة لا عن اسم البلد.',
    samples:
      'The comparison to run is a side-by-side sample of the same species from each country, with the harvest regime established for each: plantation or wild, and if wild, under which licence and quota. Malaysia\'s Peninsular licensing regime, with its per-licence quota and royalty and its diameter limit, and Indonesia\'s provincial harvest quota, are both documented, and a sample without that field is not a fair comparison of the two materials.',
    samplesAr:
      'المقارنة التي تُجرى هي عينة جنباً إلى جنب من النوع نفسه من كل بلد، مع إثبات نظام الجمع لكل منهما: مزروعة أم برية، وإن كانت برية فبأي ترخيص وحصة. ونظام الترخيص في شبه الجزيرة الماليزية، بحصته لكل ترخيص ورسومه المشوية وسقف القطر الذي يقطع عنده، وحصة الحصاد لكل ولاية في إندونيسيا، كلاهما موثّق، والعينة التي تخلو من هذا الحقل ليست مقارنة منصفة بين المادتين.',
    related: [
      { slug: 'origins/malaysia', label: 'Malaysia origin guide' },
      { slug: 'origins/indonesia', label: 'Indonesia origin guide' },
      { slug: 'sourcing/wild-and-cultivated-oud', label: 'Wild and cultivated sourcing explained' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  }),

  originComparison({
    slug: 'comparisons/laos-and-vietnam-oud',
    first: 'Laos',
    firstAr: 'لاوس',
    firstSlug: 'origins/laos',
    second: 'Vietnam',
    secondAr: 'فيتنام',
    secondSlug: 'origins/vietnam',
    summary:
      'Two adjacent countries sharing a species set, one of them outside the permit system and the other inside it, and a border that the material crosses.',
    summaryAr:
      'بلدان متجاوران يتشاركان مجموعة أنواع، أحدهما خارج نظام التصاريح والآخر داخله، وحدود تعبرها المادة.',
    directAnswer:
      'Laos and Vietnam are adjacent, share a species set, and sit on opposite sides of a documentary divide that a buyer can act on. Laos is not a Party to CITES, so there is no Laos CITES export permit to present, and the review records instead that the country has had an export quota for A. crassna recorded since 2020, raised for 2022 to 7 600 cubic metres of logs, 134 000 kg of chips, 1 910 litres of oil and 42 000 kg of powder. Vietnam is a Party, so its material carries a CITES permit, and the review records that only plantation and home-garden material is exported. The two countries trade with each other, so the route of a lot is part of its origin claim.',
    directAnswerAr:
      'لاوس وفيتنام متجاوران، ويتشاركان مجموعة أنواع، ويقفان على جانبين من انقسام وثائقي يستطيع المشتري التصرف بناءً عليه. فليست لاوس طرفاً في سايتس، فلا تصريح تصدير لاوسي يُقدَّم، وتسجّل المراجعة بدلاً من ذلك أن للبلد حصة تصدير لـ A. crassna مسجَّلة منذ 2020، رُفعت لعام 2022 إلى 7,600 م³ من الأخشاب و134,000 كغ من الرقائق و1,910 لتر من الزيت و42,000 كغ من المسحوق. وفيتنام طرف في سايتس، فمادتها تحمل تصريحاً، وتسجّل المراجعة أنها لا تصدّر إلا مادة المزارع والحدائق المنزلية. والبلدان يتاجران بعضهما، فطريق اللوط جزء من ادعاء منشئه.',
    scope:
      'This page compares the origin claims made for Lao and Vietnamese material. It covers the species the two countries share, the difference between a country inside the permit system and a country outside it, and the route question that follows from the two being neighbours. It does not rank the two, and it does not establish that a lot sold under either name came from the place named.',
    scopeAr:
      'تقارن هذه الصفحة ادعاءَي المنشأ للمادة اللاوسية والفيتنامية. وتغطي الأنواع التي تتشارك فيها ، والفرق بين بلد داخل نظام التصاريح وآخر خارجه، وسؤال الطريق الذي ينشأ عن جوارهما. ولا ترتّب بين البالِدين، ولا تثبت أن لوطاً يُباع تحت أي من الاسمين جاء من المكان المذكور.',
    labels:
      'The origin labels for these two overlap heavily, and the difference between them is documentary rather than botanical. A. crassna, A. baillonii, A. banaensis and A. yunnanensis are recorded for both, and a lot described under either country\'s name is described in the same vocabulary. What the labels do not carry is the document: a Lao lot and a Vietnamese lot of the same species are the same wood, and only the permits and the route tell them apart.',
    labelsAr:
      'تتداخل تسميات المنشأ لهذين البالِدين إلى حد كبير، والفرق بينهما وثائقي لا نباتي. فـ A. crassna وA. baillonii وA. banaensis وA. yunnanensis مسجَّلة للبلدين، واللوط الموصوف تحت اسم أي منهما يوصف بالمفردات نفسها. وما لا تحمله التسميات هو الوثيقة: فلوط لاوسي ولوط فيتنامي من النوع نفسه خشب واحد، ولا يفصلهما إلا التصاريح والطريق.',
    contexts:
      'The two countries share four species, and the review records for Laos a national census of Aquilaria plantations in process, about 6 600 hectares of private plantations, plantations primarily of A. crassna, A. sinensis and A. yunnanensis in mixed stands, and at least 950 wild trees determined mostly for protected areas. For Vietnam it records 20 000 to 30 000 hectares of plantation, mostly A. crassna, and an estimate of 1.11 million wild stems on the last census in 2013 — a figure the review attributes to Malaysia\'s 2013 census. The quotas differ too, and Laos has one where CITES would have had one.',
    contextsAr:
      'يتشارك البلدان أربعة أنواع، وتسجّل المراجعة للاوس جرداً وطنياً لمزارع Aquilaria قيد الإجراء، ونحو 6,600 هكتار من المزارع الخاصة، ومزارع أساساً من A. crassna وA. sinensis وA. yunnanensis في خلط، وما لا يقل عن 950 شجرة برية حُدّد معظمها في المناطق المحمية. وتسجّل لفيتنام 20,000 إلى 30,000 هكتار من المزارع، معظمها A. crassna، وتقديراً بمليون ومئة ألف ساق برية في آخر جرد عام 2013 — وهو رقم تنسبه المراجعة إلى جرد ماليزيا لعام 2013. وتختلف الحصص بينهما، وللاوس حصة حيث كان لسايتس أن تكون له.',
    overlap:
      'The overlap is in the species and in the vocabulary, and the overlap a buyer has to be careful about is the route. The two countries trade with each other, and material can pass across a shared border, which is why the TRAFFIC study of 2000 records the border movement in both directions and why a Lao origin claim needs the route established rather than assumed.',
    overlapAr:
      'التداخل في الأنواع وفي المفردات، والتداخل الذي ينبغي للمشتري الحذر منه هو الطريق. فالبلدان يتاجران بعضهما، والمادة يمكن أن تعبر حدوداً مشتركة، ولهذا تسجّل دراسة TRAFFIC لعام 2000 حركة الحدود في الاتجاهين، ولهذا يحتاج ادعاء المنشأ اللاوسي إلى إثبات الطريق لا افتراضه.',
    samples:
      'The decisive field here is the route, not the scent. For each sample, establish the country of harvest, the country of export, the permits that travelled with it, and the quantity in each form. A sample described as Lao and a sample described as Vietnamese can be the same wood if one crossed the border, and the documents are what tell them apart.',
    samplesAr:
      'الحقل الحاسم هنا هو الطريق لا الرائحة. فلكل عينة، اثبت بلد الجمع، وبلد التصدير، والتصاريح التي رافقت الشحنة، والكمية في كل شكل. وعينة توصف بأنها لاوسية وعينة توصف بأنها فيتنامية قد تكون الخشب نفسه إن عبرت إحداهما الحدود، والوثائق هي التي تفصلهما.',
    related: [
      { slug: 'origins/laos', label: 'Laos origin guide' },
      { slug: 'origins/vietnam', label: 'Vietnam origin guide' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000', 'CITES_APPENDICES'],
  }),

  originComparison({
    slug: 'comparisons/sri-lanka-and-india-oud',
    first: 'Sri Lanka',
    firstAr: 'سريلانكا',
    firstSlug: 'origins/sri-lanka',
    second: 'India',
    secondAr: 'الهند',
    secondSlug: 'origins/india',
    summary:
      'Two countries that do not share a genus: the one range state for Gyrinops walla, and the one that holds most of the planted Aquilaria malaccensis.',
    summaryAr:
      'بلدان لا يتشاركان جنساً: الدولة الوحيدة في نطاق Gyrinops walla، والدولة التي تملك معظم Aquilaria malaccensis المزروع.',
    directAnswer:
      'Sri Lanka and India do not share a genus, which is what makes this comparison unusual. Sri Lanka is the only range state the ITTO review records for Gyrinops walla, and the review names Sri Lanka, with Indonesia, as one of the two main Gyrinops exporters, with the major producers of Gyrinops oil being Singapore and Sri Lanka. India is a range state for Aquilaria malaccensis and A. khasiana, and the review records India\'s export quota for 2022 to 2024 as 25 000 kg including 1 500 kg of oil, and its planted population at about 10 million trees with 387 576 wild forest trees and another 277 639 outside the forests. So one country\'s material is a Gyrinops and the other\'s an Aquilaria, and the two genera are traded in different markets by different buyers.',
    directAnswerAr:
      'لا يتشارك سريلانكا والهند جنساً، وهذا ما يجعل هذه المقارنة غير معتادة. فسريلانكا هي دولة الانتشار الوحيدة التي تسجّلها مراجعة ITTO للنوع Gyrinops walla، وتسمّي المراجعة سريلانكا، مع إندونيسيا، من المصدّرين الرئيسيين لـ Gyrinops، ومنتجا زيت Gyrinops هما سنغافورة وسريلانكا. والهند دولة نطاق لـ Aquilaria malaccensis وA. khasiana، وتسجّل المراجعة حصة تصدير الهند لعام 2022-2024 عند 25,000 كغ منها 1,500 كغ زيت، وسكانها المزروع بنحو عشرة ملايين شجرة مع 387,576 شجرة غابة برية وأخرى 277,639 خارج الغابات. فمادة أحدهما Gyrinops والأخرى Aquilaria، والجنسان يُتداولان في سوقين مختلفين وبمشترين مختلفين.',
    scope:
      'This page compares the origin claims made for Sri Lankan and Indian material. It covers the two different genera involved, the species each country records, the export and population figures, and why a Gyrinops material and an Aquilaria material are not two points on one scale. It does not rank the two, and it does not establish that a lot sold under either name came from the place named.',
    scopeAr:
      'تقارن هذه الصفحة ادعاءَي المنشأ للمادة السريلانكية والهندية. وتغطي الجنسين المختلفين المعنيين، والأنواع التي يسجّلها كل بلد، وأرقام التصدير والسكان، ولماذا مادة Gyrinops ومادة Aquilaria ليستا نقطتين على مقياس واحد. ولا ترتّب بين البالِدين، ولا تثبت أن لوطاً يُباع تحت أي من الاسمين جاء من المكان المذكور.',
    labels:
      'The labels here do not overlap, and that is the whole finding. A Gyrinops label and an Aquilaria label are claims about different trees with different chemistry, and the review records that the two genera are traded in different markets by different buyers. So a seller who offers one as a substitute for the other is making a claim about substitution that the sources do not support, and a buyer who reads one label as if it were the other is comparing two things that were never comparable.',
    labelsAr:
      'التسميات هنا لا تتداخل، وهذا هو الفحص كله. فتسميتا Gyrinops وAquilaria ادعاءان بنوعين مختلفين لهما كيمياء مختلفة، وتسجّل المراجعة أن الجنسين يُتداولان في سوقين مختلفين وبمشترين مختلفين. فمن يعرض أحدهما بديلاً للآخر يصنع ادعاءً عن الإحلال لا تدعمه المصادر، ومن يقرأ تسمية على أنها الأخرى يقارن شيئين لم يكونا قابلين للمقارنة.',
    contexts:
      'The two countries hold the two genera that matter, and the review treats them separately throughout. For Sri Lanka it records Gyrinops walla as the only agarwood-producing species of the country, classified as Vulnerable, and names the country with Indonesia as the main Gyrinops exporter, with the major producers of Gyrinops oil being Singapore and Sri Lanka. For India it records Aquilaria malaccensis and A. khasiana, the 25 000 kg export quota for 2022 to 2024, and a planted population of about 10 million trees, with plantations that are all A. malaccensis and no other species registered for cultivation.',
    contextsAr:
      'يحمل الجنسين المهمين، وتعامل المراجعة كلاً منهما على حدة. فتسجّل لسريلانكا Gyrinops walla بوصفه نوع العود الوحيد في البلاد، مصنَّفاً قابلاً للانقراض، وتسمّي البلاد مع إندونيسيا المصدّرين الرئيسيين لـ Gyrinops، ويكون منتجا زيت Gyrinops الكبيران سنغافورة وسريلانكا. وتسجّل للهند Aquilaria malaccensis وA. khasiana، وحصة تصدير 25,000 كغ لعام 2022-2024، وسكان مزروع بنحو عشرة ملايين شجرة، ومزارع كلها A. malaccensis ولا نوع آخر مسجَّل للزراعة.',
    overlap:
      'The commercial overlap is in the markets rather than in the trees. Both countries export into the Middle Eastern and South Asian fragrance trade, and the review records that a trader\'s order of preference placed both among the range states a buyer might consider for the better wood segments. The material overlap is minimal: one genus each, with A. agallocha recorded in the review as the Bangladesh, Bhutan, Myanmar and north-eastern Indian form of A. malaccensis, and G. walla recorded as endemic to Sri Lanka and very rare in south-west India.',
    overlapAr:
      'التداخل التجاري في الأسواق لا في الأشجار. فالبلدان يصدّران إلى تجارة العطور في الشرق الأوسط وجنوب آسيا، وتسجّل المراجعة أن ترتيب تفضيل لدى تاجر وضع كليهما ضمن دول الانتشار التي قد ينظر إليها المشتري في خشب أفضل. أما التداخل المادي فمحدود: جنس واحد لكل منهما، فـ A. agallocha تسجّلها المراجعة شكيلة بنغلاديش وبوتان وميانمار وشمال شرق الهند من A. malaccensis، وG. walla تسجّلها متوطنة في سريلانكا ونادرة جداً في جنوب غرب الهند.',
    samples:
      'Because the genera differ, a sample comparison has to be built on the genus first and the species second, and the chemistry and the buyers differ accordingly. A Gyrinops and an Aquilaria material should not be presented as two points on one scale, and a seller who offers them as alternatives to each other is making a claim about substitution that the sources do not support.',
    samplesAr:
      'لأن الجنسين مختلفان، ينبغي أن تُبنى مقارنة العينة على الجنس أولاً ثم النوع، وتختلف الكيمياء والمشترون تبعاً لذلك. ولا ينبغي تقديم مادة Gyrinops ومادة Aquilaria على أنهما نقطتان على مقياس واحد، ومن يعرضهما بديلين لبعضهما يصنع ادعاءً عن الإحلال لا تدعمه المصادر.',
    related: [
      { slug: 'origins/sri-lanka', label: 'Sri Lanka origin guide' },
      { slug: 'origins/india', label: 'India and northeast origin guide' },
      { slug: 'quality/gulf-market-grade-labels', label: 'Gulf-market oud grading vocabulary' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000', 'AGARWOOD_REVIEW_2014'],
  }),

  originComparison({
    slug: 'comparisons/thailand-and-cambodia-oud',
    first: 'Thailand',
    firstAr: 'تايلاند',
    firstSlug: 'origins/thailand',
    second: 'Cambodia',
    secondAr: 'كمبوديا',
    secondSlug: 'origins/cambodia',
    summary:
      'The country that proposed the listing and exports only plantation material, against the country that holds the last wild Cardamom population.',
    summaryAr:
      'البلد الذي اقترح الإدراج ولا يصدّر إلا المزروع، في مقابل البلد الذي يحمل آخر سكان كارداموم البري.',
    directAnswer:
      'Thailand proposed the listing of Aquilaria crassna and answers for it: the review records the country as exporting nothing but plantation-origin agarwood, with 219 hectares in home gardens, 1 111 hectares of plantation and 1 378 hectares of mixed-species plantation, 99% A. crassna and under 1% A. malaccensis, and no data for the wild population. Cambodia holds the other side of the record: the 2023 to 2026 survey found native agarwood at up to three trees per hectare in Koh Kong, an average of two in Pursat and one in Battambang, and the country reported more than 1 million trees in plantations, 80% A. crassna. The shared species is the one Thailand proposed for listing, and the difference is wild against planted.',
    directAnswerAr:
      'اقترحت تايلاند إدراج Aquilaria crassna وتتحمل مسؤوليته: فتسجّل المراجعة البلد بأنه لا يصدّر إلا عوداً مزروع المنشأ، مع 219 هكتاراً في الحدائق المنزلية و1,111 هكتار من المزارع و1,378 هكتار من مزارع الأنواع المختلطة، 99٪ منها A. crassna وأقل من 1٪ A. malaccensis، ولا بيانات عن السكان البري. وكمبوديا تحمل الجانب الآخر من السجل: فوجد مسح 2023-2026 العود البري حتى ثلاثة أشجار في الهكتار في كوه كونغ، وبمعدل شجرتين في بورسات وشجرة واحدة في باتّبانغ، وأبلغت البلاد عن أكثر من مليون شجرة في المزارع، 80٪ منها A. crassna. والأنواع المشترك هو الذي اقترحت تايلاند إدراجه، والفرق بين البري والمزروع.',
    scope:
      'This page compares the origin claims made for Thai and Cambodian material. It covers the species the two share, the difference between a country that exports only plantation material and one that holds a wild population, and the fields a buyer should establish for a lot from either. It does not rank the two, and it does not establish that a lot sold under either name came from the place named.',
    scopeAr:
      'تقارن هذه الصفحة ادعاءَي المنشأ للمادة التايلاندية والكمبودية. وتغطي الأنواع التي يتشاركانها، والفرق بين بلد لا يصدّر إلا المزروع وآخر يحمل سكاناً برياً، والحقول التي ينبغي للمشتري إثباتها للوط من أي منهما. ولا ترتّب بين البالِدين، ولا تثبت أن لوطاً يُباع تحت أي من الاسمين جاء من المكان المذكور.',
    labels:
      'The species overlap is real and so is the label overlap, because the shared species is the one Thailand proposed for listing. What the labels do not carry is the basis: a Thai lot is plantation by the country\'s own report, and a Cambodian lot may be wild. That difference is documentary, it is checkable against the export permit, and it is why a buyer who wants wild Cardamom material should say so rather than name a country.',
    labelsAr:
      'التداخل النوعي حقيقي وكذلك تداخل التسميات، لأن النوع المشترك هو الذي اقترحت تايلاند إدراجه. وما لا تحمله التسميات هو الأساس: فاللوط التايلندي مزروع بحسب إبلاغ البلاد نفسه، واللوط الكمبودي قد يكون برياً. وهذا الفرق وثائقي، ويمكن فحصه بميزان التصريح، ولهذا ينبغي لمن يريد مادة كارداموم برية أن يقول ذلك لا أن يسمّي بلداً.',
    contexts:
      'The two countries are on opposite sides of the wild-versus-planted divide, and the review is explicit about each. For Thailand it records that the wood from Thailand is all plantation origin, and a formal registration requirement for agarwood, with wild harvesting controlled. For Cambodia it records more than 1 million trees in plantations, 80% A. crassna and 20% A. malaccensis, 60 trees in home gardens, and no estimate of the wild population — a gap the 2023 to 2026 Cardamom survey then filled, at one to three trees per hectare and a restoration programme that registered 20 parent trees.',
    contextsAr:
      'يقف البلدان على جانبين من فاصل البري والمزروع، والمراجعة صريحة بكل منهما. فتسجّل لتايلاند أن خشب تايلاند كله مزروع المنشأ، وأن للبلد متطلب تسجيل رسمي للعود، وأن الجمع البري منضبط. وتسجّل لكمبوديا أكثر من مليون شجرة في المزارع، 80٪ منها A. crassna و20٪ A. malaccensis، و60 شجرة في الحدائق المنزلية، وبلا تقدير للسكان البري — وهي ثغرة ملأها مسح كارداموم 2023-2026 بواحد إلى ثلاثة أشجار في الهكتار، وبرنامج استعادة سجّل 20 شجرة أم.',
    overlap:
      'The species overlap is A. crassna and A. rugosa, with A. banaensis in Cambodia and A. vidalii in both, and the shared A. crassna is the species Thailand proposed for listing. The practical difference is what the material is: a Thai lot is plantation by the country\'s own report, and a Cambodian lot may be wild. That difference is documentary, it is checkable against the export permit, and it is the reason a buyer who wants a wild Cardamom material should say so rather than name a country.',
    overlapAr:
      'التداخل النوعي هو A. crassna وA. rugosa، مع A. banaensis في كمبوديا وA. vidalii في كليهما، والأنواع المشترك هو الذي اقترحت تايلاند إدراجه. والفرق العملي في كون المادة: فاللوط التايلندي مزروع بحسب إبلاغ البلاد نفسه، واللوط الكمبودي قد يكون برياً. وهذا الفرق وثائقي، ويمكن فحصه بميزان التصريح، وهو السبب في أن يقول المشتري «أريد مادة كارداموم برية» بدل أن يسمّي بلداً.',
    samples:
      'For these two, the comparison that is worth running is wild against plantation, and the two must be compared on the same species or not compared at all. Establish for each sample whether it is wild and where it was collected, or planted and when, and the species. A Cambodian wild lot and a Thai plantation lot of A. crassna are different products that the sources describe differently, and the sources do not put them on one scale.',
    samplesAr:
      'هذان الاثنان، المقارنة التي تستحق أن تُجرى هي البري في مقابل المزروع، ولا تُقارَن العينةان إلا من النوع نفسه أو لا تُقارَنان. فبيّن لكل عينة أهي برية وأين جُمعت أم مزروعة ومتى، وما نوعها. فاللوط الكمبودي البري واللوط التايلندي المزروع من A. crassna منتجان مختلفان تصفهما المصادر وصفاً مختلفاً، والمصادر لا تضعهما على مقياس واحد.',
    related: [
      { slug: 'origins/thailand', label: 'Thailand origin guide' },
      { slug: 'origins/cambodia', label: 'Cambodia origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000', 'AGARWOOD_REVIEW_2014'],
  }),
];
