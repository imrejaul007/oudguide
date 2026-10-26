import { originCountry } from './geography-kit.ts';
import { originRegionChildren } from './origin-regions.ts';
import type { Article } from './types.ts';

/**
 * The origin-country pages.
 *
 * The manifest carries fifteen "Origin country" routes. India and its
 * Assam region already existed, so this file holds the other fourteen.
 *
 * The spine of every page here is Table 1 of the ITTO review of the two
 * genera, which lists every accepted Aquilaria and Gyrinops species with
 * its IUCN status and its range states. That table is what makes these
 * pages differ from one another: each country has a genuinely different
 * species list, a genuinely different trade position and a genuinely
 * different control position, and the pages are built from those
 * differences rather than from a shared template with the name changed.
 *
 * Three things each page states, and states early:
 *
 *   1. A species range is a botanical fact, not a production record.
 *      A tree of that species grows in the country; that is all it
 *      establishes.
 *   2. A trade figure carries the year the source recorded it. The
 *      TRAFFIC export series is 1993 to 1998 and is used to show the
 *      shape of the trade, not to state a position today.
 *   3. A country being a range state says nothing about whether a
 *      supplier operates there, and nothing about whether a buyer can
 *      be assured of delivery into any market.
 *
 * The names of the species are given in Latin script because that is
 * how they are cited in the sources, and the Arabic paragraphs name
 * the species in the same way — the convention the rest of the corpus
 * already uses for Aquilaria and Gyrinops.
 */

export const originCountryArticles: Article[] = [
  originCountry({
    slug: 'origins/vietnam',
    name: 'Vietnam',
    nameAr: 'فيتنام',
    iso2: 'VN',
    summary:
      'Aquilaria crassna in Vietnam: the species recorded, the plantation scale, the distillation tradition, and what a Vietnam origin claim needs behind it.',
    summaryAr:
      'الـ Aquilaria crassna في فيتنام: الأنواع المسجَّلة، وحجم المزارع، وتقاليد التقطير، وما يحتاج إليه ادعاء منشأ فيتنام من أدلة.',
    directAnswer:
      'Vietnam is one of the two or three countries that every major account of the agarwood trade treats as a centre of the material, and the species it is recorded for include Aquilaria crassna, which the Kew record gives a native range of Indo-China. The trade is plantation-based: the ITTO review records that the wood from Thailand is all plantation origin, and the Vietnamese plantation area was reported to the CITES Secretariat as 20,000 to 30,000 hectares in 2020 and 16,000 hectares to the ITTO questionnaire, with 18,000 hectares reported for 2018 — the same country giving three different figures in three years. That variance is itself the point: a country\'s planted area is not a fixed number, and a buyer who wants a volume should ask for the year and the basis.',
    directAnswerAr:
      'فيتنام من الدول التي تعاملها كل رواية كبرى عن تجارة العود بوصفها مركزاً للمادة، والأنواع المسجَّلة لها تشمل Aquilaria crassna الذي يعطي سجل كيو له نطاقاً أصلياً يمتد في الهند الصينية. والتجارة هنا قائمة على المزارع: فمراجعة ITTO تسجّل أن خشب تايلاند كله مزروع، وأن المساحة المزروعة في فيتنام أُبلغ عنها إلى أمانة سايتس في 2020 بنحو 20,000 إلى 30,000 هكتار، وأُبلغ عنها في استبيان ITTO بـ 16,000 هكتار، وذكر 18,000 هكتار لعام 2018 — أي أن البلد نفسه أعطى ثلاثة أرقام مختلفة في ثلاث سنوات. وهذا التباين هو عين الحقيقة: فمساحة المزروع في بلد ليست رقماً ثابتاً، ومن يريد حجماً ينبغي أن يسأل عن السنة والأساس.',
    scope:
      'This page covers the species recorded for Vietnam, the scale and basis of the plantation trade, the distillation tradition associated with the material, the conservation and trade-control position, and the questions a buyer should put to a seller who states a Vietnam origin. It does not cover the individual growing districts, which have their own pages, and it does not cover the Vietnamese market as a destination, which is a separate subject.',
    scopeAr:
      'تغطي هذه الصفحة الأنواع المسجَّلة لفيتنام، وحجم تجارة المزارع وأساسها، وتقاليد التقطير المرتبطة بالمادة، وموقف الحفظ وضوابط التجارة، والأسئلة التي ينبغي للمشتري أن يضعها لمن يدّعي منشأ فيتنام. ولا تغطي المناطق النامية منفردة، فلكل منها صفحتها، ولا تغطي السوق الفيتنامي بوصفه وجهة، فهي موضوع آخر.',
    species: [
      'Aquilaria crassna. Critically Endangered; native range Indo-China, which the Kew record gives as Cambodia, Laos, Myanmar, Thailand and Vietnam',
      'Aquilaria baillonii. Data Deficient; Cambodia, Lao PDR, Viet Nam',
      'Aquilaria banaensis. Vulnerable; Viet Nam, Cambodia, Lao PDR',
      'Aquilaria rugosa. Vulnerable; Viet Nam, Cambodia, Thailand',
      'Aquilaria yunnanensis. Vulnerable; China (Yunnan), Lao PDR, Viet Nam',
      'Gyrinops vidalii. Critically Endangered; Thailand, Cambodia, Lao PDR',
    ],
    speciesAr: [
      'Aquilaria crassna. مهدد بشدة؛ نطاقه الأصلي الهند الصينية، الذي يعطيه سجل كيو كمبوديا ولاوس وميانمار وتايلاند وفيتنام',
      'Aquilaria baillonii. البيانات ناقصة؛ كمبوديا ولاوس وفيتنام',
      'Aquilaria banaensis. قابل للانقراض؛ فيتنام وكمبوديا ولاوس',
      'Aquilaria rugosa. قابل للانقراض؛ فيتنام وكمبوديا وتايلاند',
      'Aquilaria yunnanensis. قابل للانقراض؛ الصين (يوننان) ولاوس وفيتنام',
      'Gyrinops vidalii. مهدد بشدة؛ تايلاند وكمبوديا ولاوس',
    ],
    trade:
      'Vietnam appears in the TRAFFIC export series compiled from Taiwan Customs data for 1993 to 1998, at 531,769 kilograms in total across those six years, behind Indonesia and ahead of Thailand and Cambodia. That figure is a weight in kilograms from a customs database, it covers one destination rather than the whole world, and it is now more than twenty-five years old. It is useful for the shape of the trade and for nothing else. The ITTO review records Vietnam as one of the countries with very large agarwood plantations, and the CITES questionnaire response of 20,000 to 30,000 hectares in 2020 as the largest plantation area reported by any country in that round.',
    tradeAr:
      'تظهر فيتنام في سلسلة التصدير التي أعدّتها TRAFFIC من بيانات الجمارك التايبانية للفترة 1993-1998، بمجموع 531,769 كيلوجراما في تلك الست سنوات، بعد إندونيسيا وقبل تايلاند وكمبوديا. وهذا الرقم وزن بالكيلوجرام من قاعدة بيانات جمركية، ويغطي وجهة واحدة لا العالم كله، وعمره الآن أكثر من خمسة وعشرين عاماً. فهو مفيد لإبراز بنية التجارة لا لشيء غير ذلك. وتسجّل مراجعة ITTO فيتنام ضمن البلدان ذات مزارع العود الضخمة، وتسجّل إجابة استبيان سايتس بمساحة 20,000 إلى 30,000 هكتار في 2020، وهي أكبر مساحة مزروعة أبلغ عنها أي بلد في تلك الجولة.',
    control:
      'All Aquilaria and Gyrinops species are in CITES Appendix II, so an export permit from Vietnam is required and an import permit is required only where the importing country\'s own law asks for one. Vietnam answered the CITES questionnaire on plantations in 2020 and again for the ITTO review, and gave different figures each time, which is the ordinary state of a national record and not a discrepancy to be explained away. The ITTO review records that harvesting of wild Aquilaria is now illegal in most countries, with Indonesia and Malaysia the exceptions where it is still allowed under controls; Vietnam is not among the exceptions.',
    controlAr:
      'جميع أنواع Aquilaria وGyrinops مدرجة في ملحق سايتس الثاني، فتلزم تصريح تصدير من فيتنام، ولا يلزم تصريح استيراد إلا إذا اشترطته قوانين بلد الاستيراد نفسه. وقد أجابت فيتنام عن استبيان سايتس المتعلق بالمزارع في 2020، ثم مرة أخرى لأجل مراجعة ITTO، وأعطت رقمين مختلفين في كل مرة، وهذا هو الحال المعتاد لسجل وطني لا تناقض يُحتاج إلى تفسيره. وتسجّل مراجعة ITTO أن جمع Aquilaria البري صار غير قانوني في معظم البلدان، وأن إندونيسيا وماليزيا هما الاستثناءان حيث ما زال مسموحاً بضوابط؛ وفيتنام ليست من الاستثناءات.',
    terminology:
      'The Vietnamese material carries its own vocabulary, and the local names for the grades are the ones a buyer will hear in a Vietnamese supply chain. The two names that recur are kỳ nam for the darker, heavier grades and trầm hương for the material in general, with the country described in the trade as the place where the material is both grown and distilled. The word trầm hương is the country\'s own name for agarwood and carries no grade claim of its own, and a seller who uses it is describing the material and not its quality.',
    terminologyAr:
      'للمادة الفيتنامية مفرداتها الخاصة، وأسماء الدرجات المحلية هي التي سيلتقي بها المشتري في سلسلة توريد فيتنام. الاسمان المتكرران هما «كي نام» للداكن الأتقل و«ترام هوانغ» للمادة عموماً، وتُوصف الدولة في التجارة بأنها المكان الذي تُزرع فيه المادة وتُقطَّر فيه. ولفظ «ترام هوانغ» هو اسم البلد نفسه للعود ولا يحمل ادعاء جودة بذاته، فمن يستعمله يصف المادة لا جودتها.',
    questions: [
      'Which species was the material taken from, and how was that established',
      'Was the material plantation-grown or wild, and which year applies to the answer',
      'What area of plantation is the claim based on, and in which year was it assessed',
      'How was the oil distilled, and was the distillation done in Vietnam or elsewhere',
      'What batch reference identifies the lot, and does the export permit name that reference',
    ],
    questionsAr: [
      'من أي نوع أُخذت المادة، وعلى أي أساس ثبت ذلك',
      'هل كانت المادة مزروعة أم برية، وأي سنة ينطبق عليها الجواب',
      'على أي مساحة مزروعة يقوم الادعاء، وفي أي سنة قُيّست',
      'كيف قُطِّر الزيت، وهل جرى التقطير في فيتنام أم في غيرها',
      'ما مرجع الدفعة الذي يعرّف اللوط، وهل يذكر تصريح التصدير هذا المرجع',
    ],
    related: [
      { slug: 'origins/cambodia', label: 'Cambodia origin guide' },
      { slug: 'origins/thailand', label: 'Thailand origin guide' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
    
      { slug: 'origins/vietnam/ha-tinh', label: 'Ha Tinh — Vietnamese agarwood region', labelAr: 'ها تينه — منطقة عود فيتنامية' },
      { slug: 'origins/vietnam/khanh-hoa', label: 'Khanh Hoa — Vietnamese agarwood region', labelAr: 'خانه هوا — منطقة عود فيتنامية' },
      { slug: 'origins/vietnam/quang-nam', label: 'Quang Nam — Vietnamese agarwood region', labelAr: 'كوانغ نام — منطقة عود فيتنامية' },
      { slug: 'origins/vietnam/quang-ngai', label: 'Quang Ngai — Vietnamese agarwood region', labelAr: 'كوانغ نجاي — منطقة عود فيتنامية' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000', 'POWO_AQUILARIA_CRASSNA'],
  }),

  originCountry({
    slug: 'origins/indonesia',
    name: 'Indonesia',
    nameAr: 'إندونيسيا',
    iso2: 'ID',
    summary:
      'Gaharu in Indonesia: the widest species range of any country, the largest exporter, the plantation split, and the quotas that govern what leaves.',
    summaryAr:
      'الغاهارو في إندونيسيا: أوسع نطاق نوعي في العالم، وأكبر بلد مصدِّر، وتقسيم المزارع، والحصص التي تحكم ما يغادر.',
    directAnswer:
      'Indonesia is the largest agarwood exporter in the world and the only country that has both the widest species range and the largest plantation area. The ITTO review records thirteen species across the two genera in the country, from Aquilaria malaccensis in Sumatra and Kalimantan to Gyrinops decipiens, which it records only for Sulawesi, and Gyrinops ledermannii, which it records for Papua. It records that more than 98% of the material exported from Indonesia is wild stock, and it records the same thing of Malaysia, while the wood from Thailand is all plantation origin. So the country that exports most is also the country where the export is most exposed to the sustainability problem, and a buyer asking about Indonesian material should ask which of the two it is.',
    directAnswerAr:
      'إندونيسيا أكبر بلد مصدِّر للعود في العالم، وهي الوحيدة التي تجمع أوسع نطاق نوعي وأكبر مساحة مزروعة. وتسجّل مراجعة ITTO ثلاثة عشر نوعاً من الجنسين في البلاد، من Aquilaria malaccensis في سومترا وكاليمانتان إلى Gyrinops decipiens الذي لا تسجّله إلا في سولايسي، وGyrinops ledermannii الذي تسجّله في بابوا. وتسجّل أن أكثر من 98٪ من المواد المصدَّرة من إندونيسيا برية، وتسجّل الشيء نفسه في ماليزيا، بينما خشب تايلاند كله مزروع. فالبلد الذي يصدّر أكثر هو أيضاً البلد الذي يكون تصديره أكثر تعرضاً لمشكلة الاستدامة، ومن يسأل عن مادة إندونيسية ينبغي أن يسأل أيّهما هي.',
    scope:
      'This page covers the species recorded for Indonesia, the country\'s export position and what is exported, the split between wild and plantation material, the provincial quota system, and the questions a buyer should put to a seller who states an Indonesian origin. It does not cover the individual provinces, which have their own pages, and it does not cover Indonesia as a destination market.',
    scopeAr:
      'تغطي هذه الصفحة الأنواع المسجَّلة لإندونيسيا، وموقعها التصديري وما يُصدَّر، وتقسيم المادة بين البري والمزروع، ونظام الحصص على مستوى الولايات، والأسئلة التي ينبغي وضعها لمن يدّعي منشأً إندونيسياً. ولا تغطي الولايات منفردة، فلكل منها صفحتها، ولا تغطي إندونيسيا بوصفها سوق وجهة.',
    species: [
      'Aquilaria malaccensis. Critically Endangered; the principal cultivated species, in Sumatra and Kalimantan',
      'Aquilaria microcarpa. Endangered; Kalimantan, Sumatra',
      'Aquilaria beccariana. Vulnerable; Kalimantan, Sumatra',
      'Aquilaria cumingiana. Vulnerable; Kalimantan, Maluku, Moluccas, Papua',
      'Aquilaria filaria. Vulnerable; East Nusa Tenggara, Moluccas, Papua',
      'Aquilaria hirta. Vulnerable; Kalimantan, Sumatra',
      'Gyrinops decipiens. Endangered; recorded only for Sulawesi',
      'Gyrinops versteegii. Vulnerable; Nusa Tenggara, Sulawesi, Moluccas, Papua',
      'Gyrinops moluccana. Endangered; Moluccas, Papua',
    ],
    speciesAr: [
      'Aquilaria malaccensis. مهدد بشدة؛ النوع الرئيسي المزروع، في سومترا وكاليمانتان',
      'Aquilaria microcarpa. مهدد بالانقراض؛ كاليمانتان، سومترا',
      'Aquilaria beccariana. قابل للانقراض؛ كاليمانتان، سومترا',
      'Aquilaria cumingiana. قابل للانقراض؛ كاليمانتان، مالوكو، مولوكاس، بابوا',
      'Aquilaria filaria. قابل للانقراض؛ شرق نوسا تنغارا، مولوكاس، بابوا',
      'Aquilaria hirta. قابل للانقراض؛ كاليمانتان، سومترا',
      'Gyrinops decipiens. مهدد بالانقراض؛ مسجَّل لسولايسي وحدها',
      'Gyrinops versteegii. قابل للانقراض؛ نوسا تنغارا، سولايسي، مولوكاس، بابوا',
      'Gyrinops moluccana. مهدد بالانقراض؛ مولوكاس، بابوا',
    ],
    trade:
      'The TRAFFIC export series for 1993 to 1998 records Indonesia at 2,829,536 kilograms, more than two and a half times the next country, and the ITTO review names Indonesia as the major exporter of Aquilaria and, together with Sri Lanka, of Gyrinops. A plantation inventory reported to the ITTO review put planted agarwood in Indonesia at 3.4 million trees, with 24.7% in Central Kalimantan, and a separate account put the plantations at 53% in Sumatra and 38% in Kalimantan. The figures are from different years and different methods, and they are given here as what the sources record rather than as a current total.',
    tradeAr:
      'تسجّل سلسلة التصدير في TRAFFIC للفترة 1993-1998 إندونيسيا عند 2,829,536 كيلوجراما، أي أكثر من ضعف ونصف البلد التالي، وتسمّي مراجعة ITTO إندونيسيا المصدّر الأكبر لـ Aquilaria، ومع سريلانكا المصدّر الأكبر لـ Gyrinops. وجرد المزارع المبلَّغ إلى مراجعة ITTO قدّر العود المزروع في إندونيسيا بـ 3.4 مليون شجرة، منها 24.7٪ في كاليمانتان الوسطى، وذكر حساب آخر أن المزارع 53٪ في سومترا و38٪ في كاليمانتان. والأرقام من سنوات مختلفة وطرق مختلفة، وتُذكر هنا كما سجّلتها المصادر لا كإجمالي حالي.',
    control:
      'Indonesia is one of only two countries where harvesting of wild Aquilaria is still permitted, the other being Malaysia, and in both cases it is permitted under controls rather than freely. The ITTO review records that there are no restrictions on local communities entering the forest or on timber concessions in Indonesia, although a harvest quota is set for each province, and that a non-concession-system control on agarwood tree harvesting has been proposed. It records that Indonesia produced a non-detriment finding for Aquilaria species, and that the country is one of four that have produced one. An export permit is required for every consignment of every species in the two genera.',
    controlAr:
      'إندونيسيا إحدى دولتين اثنتين فقط التي ما زال فيها جمع Aquilaria البري مسموحاً، والأخرى ماليزيا، وفي الحالتين مسموح بضوابط لا بلا قيد. وتسجّل مراجعة ITTO أنه لا قيود على دخول المجتمعات المحلية الغابة ولا على امتيازات الأخشاب في إندونيسيا، وإن كان هناك حصص حصاد لكل ولاية، وأن نظاماً غير امتيازي لضبط جمع أشجار العود قد اقترح. وتسجّل أن إندونيسيا أنتجت تقريراً عن عدم الإضرار بنوع Aquilaria، وأنها إحدى أربع دول أنتجت تقريراً كذلك. وتلزم تصريح تصدير لكل شحنة من كل نوع في الجنسين.',
    terminology:
      'The Indonesian material is called gaharu, and the trade uses a vocabulary of its own that is worth learning before a conversation starts. The country\'s own grading runs to nine grades, against Malaysia\'s twelve, and the ITTO review records that the industry still lacks a global grading standard based on quantifiable indicators — so an Indonesian grade label and a Malaysian grade label are not on the same scale, and a seller who quotes one while comparing it against the other is making a claim that has to be examined.',
    terminologyAr:
      'تسمى المادة في إندونيسيا «غاهارو»، وتستعمل التجارة مفردات خاصة بها تستحق التعلّم قبل بدء الحديث. ودرجة البلد نفسها تسع درجات، في مقابل اثنتي عشرة درجة في ماليزيا، وتسجّل مراجعة ITTO أن القطاع ما يزال يفتقر إلى معيار تقييم عالمي قائم على مؤشرات قابلة للقياس — فدرجة إندونيسية ودرجة ماليزية ليستا على مقياس واحد، ومن يذكر إحداهما يقارنها بال الأخرى يصنع ادعاءً لا بد من فحصه.',
    questions: [
      'Is the material wild or plantation, and which province did it come from',
      'Which species, and how was the species determined rather than assumed from the province',
      'Does the harvest quota for that province cover this lot, and is there a record of the quota',
      'What is the batch reference, and does the export permit match it',
      'For an oil, was it distilled in Indonesia and under what method',
    ],
    questionsAr: [
      'هل المادة برية أم مزروعة، ومن أي ولاية جاءت',
      'أي نوع، وكيف حُدِّد النوع لا استناج من الولاية وحدها',
      'هل يغطي حصص الحصاد لتلك الولاية هذا اللوط، وهل هناك سجل للحصة',
      'ما مرجع الدفعة، وهل يطابقه تصريح التصدير',
      'وللزيت، هل قُطِّر في إندونيسيا وبأي طريقة',
    ],
    related: [
      { slug: 'origins/malaysia', label: 'Malaysia origin guide' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
    
      { slug: 'origins/indonesia/kalimantan', label: 'Kalimantan — Indonesian agarwood region', labelAr: 'كاليمانتان — منطقة عود إندونيسية' },
      { slug: 'origins/indonesia/lombok', label: 'Lombok — Indonesian agarwood region', labelAr: 'لومبوك — منطقة عود إندونيسية' },
      { slug: 'origins/indonesia/maluku', label: 'Maluku — Indonesian agarwood region', labelAr: 'مالوكو — منطقة عود إندونيسية' },
      { slug: 'origins/indonesia/merauke', label: 'Merauke — Indonesian agarwood region', labelAr: 'مروكي — منطقة عود إندونيسية' },
      { slug: 'origins/indonesia/papua', label: 'Papua — Indonesian agarwood region', labelAr: 'بابوا — منطقة عود إندونيسية' },
      { slug: 'origins/indonesia/sulawesi', label: 'Sulawesi — Indonesian agarwood region', labelAr: 'سولايسي — منطقة عود إندونيسية' },
      { slug: 'origins/indonesia/sumatra', label: 'Sumatra — Indonesian agarwood region', labelAr: 'سومترا — منطقة عود إندونيسية' },
      { slug: 'origins/indonesia/west-papua', label: 'West Papua — Indonesian agarwood region', labelAr: 'بابوا الغربية — منطقة عود إندونيسية' },
    
      { slug: 'origins/cambodia/kampot', label: 'Kampot — Cambodian agarwood region', labelAr: 'كامبوت — منطقة عود كمبودية' },
      { slug: 'origins/cambodia/koh-kong', label: 'Koh Kong — Cambodian agarwood region', labelAr: 'كوه كونغ — منطقة عود كمبودية' },
      { slug: 'origins/cambodia/pursat', label: 'Pursat — Cambodian agarwood region', labelAr: 'بورسات — منطقة عود كمبودية' },
    
      { slug: 'origins/thailand/chanthaburi', label: 'Chanthaburi — Thai agarwood region', labelAr: 'تشانثابوري — منطقة عود تايلاندية' },
      { slug: 'origins/thailand/prachin-buri', label: 'Prachin Buri — Thai agarwood region', labelAr: 'براتشينبوري — منطقة عود تايلاندية' },
      { slug: 'origins/thailand/trat', label: 'Trat — Thai agarwood region', labelAr: 'ترات — منطقة عود تايلاندية' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  }),

  originCountry({
    slug: 'origins/cambodia',
    name: 'Cambodia',
    nameAr: 'كمبوديا',
    iso2: 'KH',
    summary:
      'Aquilaria crassna in Cambodia: the Cardamom Mountains range, the restoration programme, the export record, and the limits of what the wild population supports.',
    summaryAr:
      'الـ Aquilaria crassna في كمبوديا: نطاق جبال كارداموم، وبرنامج الاستعادة، وسجل التصدير، وحدود ما يدعمه المورد البري.',
    directAnswer:
      'Cambodia holds the wild population that most of the trade talks about, in the Cardamom Mountains, and the recent field work there found it thin: a 2023 to 2026 restoration project surveyed 176 inventory plots across Koh Kong, Pursat and Battambang and recorded native agarwood at up to three trees per hectare in Koh Kong, an average of two in Pursat and one in Battambang, with most trunks under five centimetres across. A country can hold the last wild trees of a species and still have almost nothing to sell, and that is the position the survey describes. The restoration programme registered 20 parent trees, seventeen of them in Koh Kong, and by July 2025 had planted 50,100 seedlings across 35.5 hectares. A buyer should read those two numbers together: a very small wild population, and a restoration programme of a few hundred hectares.',
    directAnswerAr:
      'تحمل كمبوديا آخر الأشجار البرية التي يتحدث عنها معظم التجارة، في جبال كارداموم، وكان العمل الميداني الأخير هناك قد وجدها قليلة: فمشروع استعادة امتد من 2023 إلى 2026 مسح 176 قطعة جرد في كوه كونغ وبورسات وباتّبانغ وسجّل العود البري حتى ثلاثة أشجار في الهكتار في كوه كونغ، وبمعدل شجرتين في بورسات وشجرة واحدة في باتّبانغ، ومعظم الجذوع دون خمسة سنتيمترات. فالبلد قد يملك آخر أشجار نوع من الأنواع ومع ذلك لا يملك ما يُباع تقريباً، وذلك هو الوضع الذي يصفه المسح. وسجّل برنامج الاستعادة 20 شجرة أم، سبع عشرة منها في كوه كونغ، وقد زرع حتى يوليو 2025 نحو 50,100 شتلة في 35.5 هكتاراً. وينبغي للمشتري أن يقرأ الرقمين معاً: عدد ضئيل جداً من الأشجار البرية، وبرنامج استعادة مساحته بضع مئات من الهكتارات.',
    scope:
      'This page covers the species recorded for Cambodia, the state of the wild population as the 2023 to 2026 field survey recorded it, the export position, the conservation and trade-control position, and the questions a buyer should put to a seller who states a Cambodian origin. It does not cover the individual provinces, which have their own pages, and it does not cover the Cambodian market as a destination.',
    scopeAr:
      'تغطي هذه الصفحة الأنواع المسجَّلة لكمبوديا، وحالة الفرد البري كما سجّلها المسح الميداني 2023-2026، وموقع التصدير، وموقف الحفظ وضوابط التجارة، والأسئلة التي ينبغي وضعها لمن يدّعي منشأً كمبودياً. ولا تغطي المقاطعات منفردة، فلكل منها صفحتها، ولا تغطي السوق الكمبودي بوصفه وجهة.',
    species: [
      'Aquilaria crassna. Critically Endangered; Bhutan, Cambodia, Lao PDR, Thailand, Viet Nam',
      'Aquilaria baillonii. Data Deficient; Cambodia, Lao PDR, Viet Nam',
      'Aquilaria banaensis. Vulnerable; Viet Nam, Cambodia, Lao PDR',
      'Aquilaria rugosa. Vulnerable; Viet Nam, Cambodia, Thailand',
      'Gyrinops vidalii. Critically Endangered; Thailand, Cambodia, Lao PDR',
    ],
    speciesAr: [
      'Aquilaria crassna. مهدد بشدة؛ بوتان وكمبوديا ولاوس وتايلاند وفيتنام',
      'Aquilaria baillonii. البيانات ناقصة؛ كمبوديا ولاوس وفيتنام',
      'Aquilaria banaensis. قابل للانقراض؛ فيتنام وكمبوديا ولاوس',
      'Aquilaria rugosa. قابل للانقراض؛ فيتنام وكمبوديا وتايلاند',
      'Gyrinops vidalii. مهدد بشدة؛ تايلاند وكمبوديا ولاوس',
    ],
    trade:
      'The TRAFFIC export series records Cambodia at 315,087 kilograms for 1993 to 1998, which places it third behind Indonesia and Vietnam in that window, and a second line in the same source records that traders regarded Cambodian material as among the best of the wood segments on offer, valued at between USD 2,000 and 3,000 per kilogram with Cambodian oil valued higher still. Those are the prices and the position of the late 1990s, and they are recorded here because they are what the source says, not because they describe today. The 2023 to 2026 restoration survey recorded no export quantity and no export value for Cambodia at all.',
    tradeAr:
      'تسجّل سلسلة التصدير في TRAFFIC كمبوديا عند 315,087 كيلوجراما للفترة 1993-1998، وهو ما يضعها في المرتبة الثالثة بعد إندونيسيا وفيتنام في تلك الحقبة. ويسجّل المصدر نفسه أن التجار عدّوا المادة الكمبودية من بين أفضل قطع الخشب المعروضة، فتُقيَّم بين 2,000 و3,000 دولار للكيلوجرام، ويزيد على ذلك قدر الزيت الكمبودي. وهذه أسعار ومواقف أواخر التسعينات، وتُذكر هنا لأنها ما يقوله المصدر لا لأنها تصف اليوم. ولم يسجّل مسح الاستعادة 2023-2026 أي كمية تصدير ولا أي قيمة تصدير لكمبوديا.',
    control:
      'All species in the two genera are in CITES Appendix II, so an export permit is required, and the CITES study notes that the countries involved in the agarwood trade must regulate exports through official permits. Cambodia submitted responses to the ITTO questionnaire and to the 2020 CITES round, and it also answered for a CITES process in 2022. What the sources do not record is a Cambodian export quota figure for the species, so a buyer should ask the seller for the permit rather than infer one.',
    controlAr:
      'جميع أنواع الجنسين مدرجة في ملحق سايتس الثاني، فتلزم تصريح تصدير، وتسجّل دراسة سايتس أن الدول المشتركة في تجارة العود ينظمون التصدير بتصاريح رسمية. وقد قدّمت كمبوديا إجابات عن استبيان ITTO وعن جولة سايتس 2020، وأجابت أيضاً عن عملية في سايتس عام 2022. أما ما لا تسجّله المصادر فهو رقم حصة تصدير كمبودية لهذا النوع، وعلى المشتري أن يطلب التصريح من البائع لا أن يستنتجه.',
    terminology:
      'Cambodian material is described in the trade in terms of its species and its province rather than in a grade series, and the province names are the vocabulary that matters: a buyer who knows whether a lot is described as Koh Kong or as Pursat is asking a different question from one who has only a seller\'s name for it. The distinction between the wild Cardamom material and the cultivated material elsewhere in the country is the distinction the restoration programme was set up to address, and it is the distinction a buyer should ask about.',
    terminologyAr:
      'توصف المادة الكمبودية في التجارة بالنوع والمقاطعة لا بسلسلة درجات، وأسماء المقاطعات هي المفردات المهمة: فمشتري يعرف أن اللوط موصوف بأنه من كوه كونغ أو من بورسات يسأل سؤالاً مختلفاً عمّن لا يملك إلا اسم البائع. والفصل بين مادة كارداموم البرية والمادة المزروعة في بقية البلد هو الفصل الذي أُنشئ برنامج الاستعادة لمعالجته، وهو الفصل الذي ينبغي أن يُسأل عنه.',
    questions: [
      'Is the material wild Cardamom material or cultivated, and how is that established',
      'Which province, and is that a growing area or a collection point',
      'Does the export permit name the batch, and does it state wild or planted origin',
      'For a restoration seedling lot, what is the planting year and the treatment applied',
      'If an oil, where was it distilled and from which species',
    ],
    questionsAr: [
      'هل المادة من كارداموم البرية أم مزروعة، وعلى أي أساس ثبت ذلك',
      'أي مقاطعة، وهل هي منطقة نامية أم نقطة تجمع',
      'هل يذكر تصريح التصدير الدفعة، وهل يذكر أنها برية أم مزروعة',
      'ولدفعة شتلات استعادة، ما سنة الزراعة وما المعالجة المطبقة',
      'وللزيت، أين قُطِّر ومن أي نوع',
    ],
    related: [
      { slug: 'origins/vietnam', label: 'Vietnam origin guide' },
      { slug: 'origins/thailand', label: 'Thailand origin guide' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
    
      { slug: 'origins/malaysia/kelantan', label: 'Kelantan — Malaysian agarwood region', labelAr: 'كلانتان — منطقة عود ماليزية' },
      { slug: 'origins/malaysia/pahang', label: 'Pahang — Malaysian agarwood region', labelAr: 'باحانغ — منطقة عود ماليزية' },
      { slug: 'origins/malaysia/sabah', label: 'Sabah — Malaysian agarwood region', labelAr: 'ساباه — منطقة عود ماليزية' },
      { slug: 'origins/malaysia/sarawak', label: 'Sarawak — Malaysian agarwood region', labelAr: 'سارواك — منطقة عود ماليزية' },
      { slug: 'origins/malaysia/terengganu', label: 'Terengganu — Malaysian agarwood region', labelAr: 'تيرينغانو — منطقة عود ماليزية' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  }),

  originCountry({
    slug: 'origins/thailand',
    name: 'Thailand',
    nameAr: 'تايلاند',
    iso2: 'TH',
    summary:
      'Mai kritsana in Thailand: the all-plantation export position, the eastern growing provinces, the distillation method, and the documentation the country requires.',
    summaryAr:
      '«ماي كريتسانا» في تايلاند: موقع التصدير المزروع كله، والولايات النامية الشرقية، وطريقة التقطير، والوثائق التي يشترطها البلد.',
    directAnswer:
      'Thailand is the one country the ITTO review describes as exporting nothing but plantation-origin agarwood, and it is also the country that proposed the listing of Aquilaria crassna, so the country that supplies the species most consistently is the country that asked for it to be controlled. The material is called mai kritsana and the trade places it in the eastern provinces, with wild trees recorded in Trat, Chanthaburi, Nakhon Nayok and Prachin Buri. The oil is steam-distilled from resin-rich A. crassna wood, and the plantation basis is what a buyer can rely on here that a buyer cannot rely on elsewhere: the material is renewable, and the price reflects that rather than scarcity.',
    directAnswerAr:
      'تايلاند هي البلد الوحيد الذي تصفه مراجعة ITTO بأنه لا يصدّر إلا عوداً مزروعاً، وهي أيضاً البلد الذي اقترح إدراج Aquilaria crassna، فالبلد الذي يزوّد النوع بانتظام هو نفسه الذي طالب بإدراجه. وتسمى المادة «ماي كريتسانا»، وتضع التجارة في ولايات الشرق، وقد سُجّلت الأشجار البرية في ترات وتشانثابوري وناخون نايوك وبراتشينبوري. ويُقطَّر الزيت بالبخار من خشب A. crassna الغني بالراتنج، وأساس المزروع هو ما يستطيع المشتري الاعتماد عليه هنا ولا يستطيع الاعتماد عليه في غيره: فالمادة متجددة، والسعر يعكس ذلك لا الندرة.',
    scope:
      'This page covers the species recorded for Thailand, the all-plantation export position and what it means for a buyer, the eastern growing provinces, the distillation tradition, the trade-control position, and the questions to put to a seller who states a Thai origin. It does not cover the individual provinces, which have their own pages, and it does not cover the Thai market as a destination.',
    scopeAr:
      'تغطي هذه الصفحة الأنواع المسجَّلة لتايلاند، وموقع التصدير المزروع كله وما يعنيه ذلك للمشتري، والولايات النامية الشرقية، وتقاليد التقطير، وموقف ضوابط التجارة، والأسئلة التي تُوضع لمن يدّعي منشأً تايلندياً. ولا تغطي الولايات منفردة، فلكل منها صفحتها، ولا تغطي السوق التايلندي بوصفه وجهة.',
    species: [
      'Aquilaria crassna. Critically Endangered; the species the country proposed for listing, and the principal one planted and distilled',
      'Aquilaria malaccensis. Critically Endangered; the principal cultivated species, and a range state for the country',
      'Aquilaria rugosa. Vulnerable; Viet Nam, Cambodia, Thailand',
      'Aquilaria subintegra. Data Deficient; Thailand',
      'Aquilaria hirta. Vulnerable; Malaysia (Peninsula, Borneo), Indonesia (Kalimantan, Sumatra), Thailand',
      'Gyrinops vidalii. Critically Endangered; Thailand, Cambodia, Lao PDR',
    ],
    speciesAr: [
      'Aquilaria crassna. مهدد بشدة؛ النوع الذي اقترحه البلد للإدراج، والرئيسي المزروع والمقطَّر',
      'Aquilaria malaccensis. مهدد بشدة؛ النوع الرئيسي المزروع، والبلد في نطاقه',
      'Aquilaria rugosa. قابل للانقراض؛ فيتنام وكمبوديا وتايلاند',
      'Aquilaria subintegra. البيانات ناقصة؛ تايلاند',
      'Aquilaria hirta. قابل للانقراض؛ ماليزيا (شبه الجزيرة وبورنيو)، إندونيسيا (كاليمانتان وسومترا)، تايلاند',
      'Gyrinops vidalii. مهدد بشدة؛ تايلاند وكمبوديا ولاوس',
    ],
    trade:
      'The TRAFFIC export series records Thailand at 327,283 kilograms for 1993 to 1998, third in that window, and the ITTO review records Thailand as one of the three major Aquilaria exporters. The distinguishing fact is the origin: the review states that the wood from Thailand is all plantation-origin, and that starting in 2017 more plantation-origin than wild-origin agarwood exports were recorded in the CITES database across the trade as a whole. The same review also records that plantation agarwood is reported to be of inferior quality and worth less than wild material, and that demand for wild stock remains very high. So a Thai lot is renewable and more traceable, and those two things pull the price in opposite directions.',
    tradeAr:
      'تسجّل سلسلة التصدير في TRAFFIC تايلاند عند 327,283 كيلوجراما للفترة 1993-1998، في المرتبة الثالثة في تلك الحقبة، وتسجّل مراجعة ITTO تايلاند بوصفها إحدى ثلاث دول المصدّرة الرئيسيين لـ Aquilaria. والحقيقة الفارقة هي المنشأ: فالمراجعة تذكر أن خشب تايلاند كله مزروع، وأن ابتداءً من 2017 سُجِّلت في قاعدة بيانات سايتس صادرات عود مزروع أكثر من البرّي في التجارة كلها. وتسجّل المراجعة نفسها أن عود المزارع أدنى جودةً وأقل قيمة من البرّي، وأن الطلب على المخزون البري لا يزال شديداً. فاللوط التايلندي متجدَّد وأوثق تتبّعاً، وهذان الأمران يجذبان السعر في اتجاهين متضادين.',
    control:
      'Thailand is one of the four countries that have produced a non-detriment finding for Aquilaria species, and the country that proposed the A. crassna listing. It answered the 2020 CITES questionnaire and the ITTO questionnaire. The ITTO review records that the country has a formal registration requirement for agarwood and that wild harvesting is controlled, and that Thailand is one of the four countries where wild Aquilaria harvesting is illegal. The practical consequence for a buyer is that a Thai export permit is a document with a known basis, and a Thai plantation lot can be traced to a registered holding.',
    controlAr:
      'تايلاند إحدى أربع دول أنتجت تقريراً عن عدم الإضرار بنوع Aquilaria، وهي البلد الذي اقترح إدراج A. crassna. وقد أجابت عن استبيان سايتس 2020 وعن استبيان ITTO. وتسجّل مراجعة ITTO أن في البلد متطلب تسجيل رسمي للعود وأن الجمع البري منضبط، وأن تايلاند إحدى الدول الأربع التي يكون فيها جمع Aquilaria البري غير قانوني. والنتيجة العملية للمشتري أن تصريح التصدير التايلندي وثيقة ذات أساس معلوم، وأن اللوط المزروع التايلندي يمكن تتبّعه إلى حيازة مسجَّلة.',
    terminology:
      'The Thai name for the tree is mai kritsana, and the trade uses a set of names for the material that are worth having before a conversation. The grades the Thai trade uses sit on a ladder — the Super series appears in the merchant catalogues and the ITTO review records that the country publishes its own grading guide — and the country\'s practice of steam-distilling from resin-rich wood gives its oil a character that buyers describe as cleaner and less animalic than a wood-distilled oil. Neither the name nor the description is a measurement, and a buyer who has been given a grade label and a scent note has been given two claims and no evidence.',
    terminologyAr:
      'اسم الشجرة بالتايلاندية «ماي كريتسانا»، وتستعمل التجارة مجموعة أسماء للمادة يستحق المرء أن تكون في ذهنه قبل الحديث. والدرجات التي تستعملها التجارة التايلاندية تقع على سلم — فتظهر سلسلة «سوبر» في كتالوجات التجار، وتسجّل المراجعة أن البلد ينشر دليل تقييم خاصاً به — وممارسة تايلاند في التقطير بالبخار من خشب غني بالراتنج تعطي زيتها طابعاً يصفه المشترون بأن أنظف وأقل حيوانية من زيت مقطَّر من خشب. ولا الاسم ولا الوصف قياس، فمن أُعطي تسمية ودرجة ورائحة فقد أُعطي ادعاءين ودليلاً لا شيء.',
    questions: [
      'Is the lot from a registered plantation holding, and can the registration be shown',
      'Which species, and was the oil steam-distilled from resin-rich wood',
      'What is the planting year, and is the wood mature enough to have resin',
      'Does the export permit name the batch and the holding',
      'For an oil, what is the concentration and the carrier, and was the water separated or not',
    ],
    questionsAr: [
      'هل اللوط من حيازة مزروعة مسجَّلة، وهل يتيسر إبراز التسجيل',
      'أي نوع، وهل قُطِّر الزيت بالبخار من خشب غني بالراتنج',
      'ما سنة الزراعة، وهل الخشب ناضج بما فيه راتنج',
      'هل يذكر تصريح التصدير الدفعة والحيازة',
      'وللزيت، ما التركيز والحامل، وهل فصل الماء أم لا',
    ],
    related: [
      { slug: 'origins/cambodia', label: 'Cambodia origin guide' },
      { slug: 'origins/vietnam', label: 'Vietnam origin guide' },
      { slug: 'production/oud-extraction-methods', label: 'Distillation and extraction comparisons' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  }),

  originCountry({
    slug: 'origins/laos',
    name: 'Laos',
    nameAr: 'لاوس',
    iso2: 'LA',
    summary:
      'Aquilaria crassna in Laos: the Indo-China range, a country outside CITES, a small recorded export, and a trade that runs through its neighbours.',
    summaryAr:
      'الـ Aquilaria crassna في لاوس: نطاق الهند الصينية، وبلد خارج سايتس، وتصدير مسجَّل صغير، وتجارة تمرّ عبر جاراته.',
    directAnswer:
      'Laos sits inside the native range of Aquilaria crassna and the ITTO review records the species there, together with Aquilaria baillonii, A. banaensis, A. yunnanensis and Gyrinops vidalii — and Laos is not a Party to CITES, which the TRAFFIC study of 2000 records explicitly. So the country lies inside the range of a species whose international trade is controlled, while not itself subject to the control system. The recorded trade is small: 1,850 kilograms in the 1993 to 1998 Taiwan import series, and the source notes that no trade appeared in the CITES data for Laos. The material is described in the trade as a kham mueang, and the honest reading is that a Lao origin claim is one that needs more evidence than most, not less.',
    directAnswerAr:
      'تقع لاوس داخل النطاق الأصلي لـ Aquilaria crassna، وتسجّل مراجعة ITTO النوع هناك، مع Aquilaria baillonii وA. banaensis وA. yunnanensis وGyrinops vidalii — ولاوس ليست طرفاً في سايتس، وهو ما تسجّله دراسة TRAFFIC لعام 2000 صراحةً. فالبلد يقع داخل نطاق نوع تجارته الدولية منضبطة، وليس هو نفسه خاضعاً لنظام الضبط. والتجارة المسجَّلة صغيرة: 1,850 كيلوجراما في سلسلة واردات تايوان 1993-1998، وتسجّل المصادر أنه لم يظهر في بيانات سايتس تجارة للاوس. وتوصف المادة في التجارة بأنها «خم موانغ»، والقراءة الصادقة أن ادعاء المنشأ اللاوسي يحتاج إلى دليل أكثر من غيره لا أقل.',
    scope:
      'This page covers the species recorded for Laos, the country\'s position outside CITES and what that means for a shipment, the small recorded export, the conservation and trade-control position, and the questions a buyer should put to a seller who states a Lao origin. It does not cover the individual provinces, which have their own pages, and it does not cover Laos as a destination market.',
    scopeAr:
      'تغطي هذه الصفحة الأنواع المسجَّلة للاوس، وموقع البلد خارج سايتس وما يعنيه ذلك للشحنة، والتصدير المسجَّل الصغير، وموقف الحفظ وضوابط التجارة، والأسئلة التي ينبغي وضعها لمن يدّعي منشأً لاوسياً. ولا تغطي المقاطعات منفردة، فلكل منها صفحتها، ولا تغطي لاوس بوصفها سوق وجهة.',
    species: [
      'Aquilaria crassna. Critically Endangered; Bhutan, Cambodia, Lao PDR, Thailand, Viet Nam',
      'Aquilaria baillonii. Data Deficient; Cambodia, Lao PDR, Viet Nam',
      'Aquilaria banaensis. Vulnerable; Viet Nam, Cambodia, Lao PDR',
      'Aquilaria yunnanensis. Vulnerable; China (Yunnan), Lao PDR, Viet Nam',
      'Aquilaria sinensis. Vulnerable; recorded for Lao PDR in plantation only',
      'Gyrinops vidalii. Critically Endangered; Thailand, Cambodia, Lao PDR',
    ],
    speciesAr: [
      'Aquilaria crassna. مهدد بشدة؛ بوتان وكمبوديا ولاوس وتايلاند وفيتنام',
      'Aquilaria baillonii. البيانات ناقصة؛ كمبوديا ولاوس وفيتنام',
      'Aquilaria banaensis. قابل للانقراض؛ فيتنام وكمبوديا ولاوس',
      'Aquilaria yunnanensis. قابل للانقراض؛ الصين (يوننان) ولاوس وفيتنام',
      'Aquilaria sinensis. قابل للانقراض؛ مسجَّل للاوس في المزارع فقط',
      'Gyrinops vidalii. مهدد بشدة؛ تايلاند وكمبوديا ولاوس',
    ],
    trade:
      'The recorded trade is small among the producing countries in the TRAFFIC series: 1,850 kilograms between 1993 and 1998, against 315,087 for Cambodia and 2,829,536 for Indonesia. The same source states that no trade appeared in the CITES data and that Taiwan\'s customs statistics showed under two tonnes imported from Lao PDR across the same six years and no imports from Myanmar. It also records that Lao PDR and Myanmar are considered important sources of agarwood in international trade on the assessment of the researchers the source cites, and that the available data did not show significant exports. So the country is important by reputation and small by record, and those two things are in tension.',
    tradeAr:
      'التجارة المسجَّلة صغيرة بين بلدان الإنتاج في سلسلة TRAFFIC: 1,850 كيلوجراما بين 1993 و1998، في مقابل 315,087 لكمبوديا و2,829,536 لإندونيسيا. وتسجّل المصادر نفسها أنه لم تظهر تجارة في بيانات سايتس، وأن إحصاءات الجمارك التايبانية أظهرت وارداً أقل من طنّين من جمهورية لاوس في الست سنوات نفسها ولا وارداً من ميانمار. وتسجّل أيضاً أن لاوس وميانمار يُعَدّان من مصادر مهمة للعود في التجارة الدولية بحسب تقدير الباحثين الذين يستشهد بهم المصدر، وأن البيانات المتاحة لم تُظهر صادرات كبيرة. فالبلد مهم بحسب السمعة وصغير بحسب السجل، وهذان الأمران في تعارض وتوتر.',
    control:
      'Laos is not a Party to CITES, and the TRAFFIC study records that as a fact with a consequence: trade with the country is not detailed in the CITES annual reports. The ITTO review lists Laos among the countries it sent the plantation questionnaire to, and received a response from, and notes that for one species the range state is reported as uncertain because it was not reported by the Lao People\'s Democratic Republic. So a Lao origin claim is a claim made outside the permit system that controls every other range state, and a buyer should establish the route the material took rather than assume it is covered by an export permit.',
    controlAr:
      'لاوس ليست طرفاً في سايتس، وتسجّل دراسة TRAFFIC ذلك واقعاً له أثر: فالتجارة مع هذا البلد لا تفصَّل في التقارير السنوية لسايتس. وتذكر مراجعة ITTO لاوس ضمن البلدان التي أرسلت إليها استبيان المزارع وتلقت منها إجابة، وتلاحظ أن نطاق إحدى الأنواع مُبلَّغ عنه على أنه غير مؤكد لأنه لم يبلّغ عنه جمهورية لاوس. فادعاء المنشأ اللاوسي ادعاء يُطرح خارج نظام التصاريح الذي يضبط كل دول الانتشار الأخرى، وعلى المشتري أن يثبت الطريق الذي سلكته المادة لا أن يفترض أنها مشمولة بتصريح تصدير.',
    terminology:
      'The Lao name for the material in the trade is kham mueang, and the trade places the country among the sources of the better wood segments, with a second TRAFFIC line recording that traders considered Cambodian and Lao material the best of the wood segments on offer. Those two statements sit in an odd relationship: the country has a strong reputation for its material and a very small recorded export, and the most likely explanation is that much of what is sold as Lao material has moved through Thailand, Vietnam or Cambodia first. That is a reason to ask about the route, and it is not an accusation of anything.',
    terminologyAr:
      'الاسم اللاوسي للمادة في التجارة «خم موانغ»، وتضع التجارة البلد ضمن مصادر أفضل قطع الخشب، وتسجّل سطر ثانٍ في TRAFFIC أن التجار عدّوا المادة الكمبودية واللاوسي أفضل ما عُرض من قطع الخشب. والعلاقتان بين هذين القولين غريبة: فالبلد له سمعة قوية لمادته وتصدير مسجَّل صغير جداً، وأرجح التفسير أن كثيراً مما يُباع على أنه لاوسي قد مرّ عبر تايلاند أو فيتنام أو كمبوديا أولاً. وذاك سبب للسؤال عن الطريق، وليس اتهاماً بشيء.',
    questions: [
      'Where was the material handled before it reached the buyer, and in which country',
      'Which species, and is there a record of the harvest rather than a description',
      'If the material was processed elsewhere, which permits accompanied it',
      'What is the batch reference, and who holds the original record',
      'Is the material being offered as Lao because it grew there, or because it passed through',
    ],
    questionsAr: [
      'أين عولجت المادة قبل أن تصل إلى المشتري، وفي أي بلد',
      'أي نوع، وهل هناك سجل للجمع لا وصف له',
      'ولو عولجت المادة في غير بلدها، أي تصاريح رافقتها',
      'ما مرجع الدفعة، ومن يحتفظ بالسجل الأصلي',
      'هل المادة تُعرض كلاوسية لأنها نمت هناك، أم لأنها مرّت من هناك',
    ],
    related: [
      { slug: 'origins/vietnam', label: 'Vietnam origin guide' },
      { slug: 'origins/cambodia', label: 'Cambodia origin guide' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
    
      { slug: 'origins/laos/bolikhamxay', label: 'Bolikhamxay — Lao agarwood region', labelAr: 'بوليكامساي — منطقة عود لاوسية' },
      { slug: 'origins/laos/vientiane', label: 'Vientiane — Lao agarwood region', labelAr: 'فيينتيان — منطقة عود لاوسية' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  }),

  originCountry({
    slug: 'origins/malaysia',
    name: 'Malaysia',
    nameAr: 'ماليزيا',
    iso2: 'MY',
    summary:
      'Karas in Malaysia: five species across three CITES authorities, the twelve-grade system, the Sarawak and Sabah permit position, and the Borneo species nobody else records.',
    summaryAr:
      '«كراس» في ماليزيا: خمسة أنواع تحت ثلاث سلطات سايتس، ونظام الاثنتي عشرة درجة، وموقف تصاريح سارواك وساباه، وأنواع بورنيو التي لا يسجّلها غيرها.',
    directAnswer:
      'Malaysia records more agarwood species than any country except Indonesia, and it is the only country in the ITTO review whose range for a species is stated in two parts: the Peninsular Malaysia and Borneo populations are recorded separately, and so are the export regimes. The ITTO review records that the country has a twelve-grade system against Indonesia\'s nine, that a population census was last completed in 2013, and that a 2019 study put the plantation area at 24,000 hectares against a considerably different figure in an earlier study. The country also has three separate CITES authorities, and the TRAFFIC study records that Peninsular Malaysia and Sarawak require export permits while Sabah did not, and that a separate quota applies to the non-CITES-listed material from the adjacent Indonesian provinces.',
    directAnswerAr:
      'تسجّل ماليزيا أنواع العود أكثر من أي بلد سوى إندونيسيا، وهي البلد الوحيد الذي يذكره مراجعة ITTO بنطاق مزدوج لنوع واحد: فسكان شبه الجزيرة وبورنيو مسجَّلان على حدة، وكذلك نظاما التصدير. وتسجّل المراجعة أن للبلد نظام اثنتي عشرة درجة في مقابل تسع لإندونيسيا، وأن آخرجرد سكاني أُنجز عام 2013، وأن دراسة عام 2019 قدّرت المساحة المزروعة بـ 24,000 هكتار في مقابل رقم يختلف كثيراً عن دراسة سابقة. وللبلد أيضاً ثلاث سلطات سايتس منفصلة، وتسجّل دراسة TRAFFIC أن ماليزيا شبه الجزيرة وسارواك تشترطان تصريح التصدير بينما لم تكن ساباه تشترطه، وأن هناك حصة منفصلة للمادة غير المدرَجة في سايتس من الولايات الإندونيسية المجاورة.',
    scope:
      'This page covers the species recorded for Malaysia across its two land areas, the grading system, the export and permit position across its three CITES authorities, the plantation area and how it is reported, and the questions a buyer should put to a seller who states a Malaysian origin. It does not cover the individual states, which have their own pages, and it does not cover Malaysia as a destination market.',
    scopeAr:
      'تغطي هذه الصفحة الأنواع المسجَّلة لماليزيا في أرضيها، ونظام التقييم، وموقع التصدير والتصاريح في سلطات سايتس الثلاث، والمساحة المزروعة وكيف يُبلَّغ عنها، والأسئلة التي ينبغي وضعها لمن يدّعي منشأً ماليزياً. ولا تغطي الولايات منفردة، فلكل منها صفحتها، ولا تغطي ماليزيا بوصفها سوق وجهة.',
    species: [
      'Aquilaria malaccensis. Critically Endangered; Malacca and Borneo populations, and the principal cultivated species',
      'Aquilaria microcarpa. Endangered; Peninsular Malaysia and Borneo',
      'Aquilaria beccariana. Vulnerable; Peninsular Malaysia and Borneo',
      'Aquilaria cumingiana. Vulnerable; Malaysia (Borneo)',
      'Aquilaria rostrata. Critically Endangered; Malaysia (Peninsula), and rediscovered in Terengganu',
      'Aquilaria hirta. Vulnerable; Malaysia (Peninsula, Borneo)',
    ],
    speciesAr: [
      'Aquilaria malaccensis. مهدد بشدة؛ سكان ملقا وبورنيو، والنوع الرئيسي المزروع',
      'Aquilaria microcarpa. مهدد بالانقراض؛ ماليزيا شبه الجزيرة وبورنيو',
      'Aquilaria beccariana. قابل للانقراض؛ ماليزيا شبه الجزيرة وبورنيو',
      'Aquilaria cumingiana. قابل للانقراض؛ ماليزيا (بورنيو)',
      'Aquilaria rostrata. مهدد بشدة؛ ماليزيا (شبه الجزيرة)، وأُعيد اكتشافه في تيرينغانو',
      'Aquilaria hirta. قابل للانقراض؛ ماليزيا (شبه الجزيرة وبورنيو)',
    ],
    trade:
      'The TRAFFIC export series records Malaysia at 191,227 kilograms for 1993 to 1998, and the ITTO review names Malaysia one of the three major Aquilaria exporters. It records that more than 98% of the material exported from Malaysia is wild stock, and it records that the country\'s export quota has declined from a high set earlier. The same review gives Malaysia\'s trade a shape the other exporters do not have: chips, powder, sawn wood and logs all move, and Gyrinops is primarily imported rather than exported, so the Malaysian trade is in part a re-export trade.',
    tradeAr:
      'تسجّل سلسلة التصدير في TRAFFIC ماليزيا عند 191,227 كيلوجراما للفترة 1993-1998، وتسمّي مراجعة ITTO ماليزيا إحدى ثلاث دول المصدّرة الرئيسيين لـ Aquilaria. وتسجّل أن أكثر من 98٪ من المواد المصدَّرة من ماليزيا برية، وأن حصة تصدير البلد قد انخفضت عن مستوى مرتفع سابق. وتعطي المراجعة التجارة الماليزية شكلاً لا تملكه بقية المصدّرين: فالرقائق والمسحوق والخشب المنشور والجذوع كلها تتحرك، وGyrinops يُستورد في الأساس لا يُصدَّر، فتجارة ماليزيا تجارة إعادة تصدير في جزء منها.',
    control:
      'Malaysia is one of only two countries where harvesting of wild Aquilaria is still permitted, under controls. It is one of the four that have produced a non-detriment finding, it has a twelve-grade national grading system, and it levies a 5% tax on exported agarwood products. The three CITES authorities matter to a buyer: the TRAFFIC study records that Peninsular Malaysia and Sarawak require export permits and that Sabah did not, and it records that Sarawak\'s wildlife ordinance lists Aquilaria malaccensis as a prohibited species to be retained when harvesting timber inside forest reserves, and that both Sarawak and Sabah require a licence for harvesting and export.',
    controlAr:
      'ماليزيا إحدى بلديتين فقط لا يزال فيهما جمع Aquilaria البري مسموحاً، بضوابط. وهي إحدى الأربع التي أنتجت تقريراً عن عدم الإضرار، ولها نظام تقييم وطني من اثنتي عشرة درجة، وتُطبِّق ضريبة 5٪ على منتجات العود المصدَّرة. وسلطات سايتس الثلاث مهمة للمشتري: فتسجّل دراسة TRAFFIC أن ماليزيا شبه الجزيرة وسارواك تشترطان تصريح التصدير وأن ساباه لم تكن تشترطه، وتسجّل أن لائحة الحياة البري في سارواك تذكر Aquilaria malaccensis نوعاً محظوراً يُحتفظ به عند قطع الأخشاب داخل المحميات، وأن سارواك وساباه كلتيهما تشترطان ترخيصاً للجمع والتصدير.',
    terminology:
      'The Malaysian word for the tree is karas, and the country\'s twelve-grade system is the most granular in the trade, which is useful and dangerous in equal measure. It is useful because a grade means something within the country and a buyer who deals with Malaysian material can be given a specific answer. It is dangerous because the ITTO review records that the industry still lacks a global grading standard based on quantifiable indicators, so a Malaysian grade number and a grade label used anywhere else are on different scales, and a grade quoted without the country attached to it is not a specification.',
    terminologyAr:
      'الاسم الماليزي للشجرة «كراس»، ونظام الاثنتي عشرة درجة هو أدق نظام في التجارة، وهو مفيد وخطير بالقدر نفسه. فهو مفيد لأن الدرجة تعني شيئاً داخل البلد، والمشتري الذي يتعامل مع مادة ماليزية يمكن أن يتلقى جواباً محدداً. وهو خطير لأن مراجعة ITTO تسجّل أن القطاع ما يزال يفتقر إلى معيار تقييم عالمي قائم على مؤشرات قابلة للقياس، فرقم الدرسة الماليزي ودرجة التسمية المستعملة في أي مكان آخر على مقياسين مختلفين، ودرجة تُذكر بلا اسم البلد ليست مواصفة.',
    questions: [
      'Which of the three authorities is the permit from, and which land area is the material from',
      'Which species, and for a Borneo lot whether it is A. microcarpa, A. beccariana or A. cumingiana',
      'Is the material wild or planted, and which year does the quota figure belong to',
      'If an oil, was it distilled in Malaysia and from which species',
      'What is the batch reference, and does it appear on the permit',
    ],
    questionsAr: [
      'من أي من السلطات الثلاث يكون التصريح، ومن أي أرض جاءت المادة',
      'أي نوع، ولمادة من بورنيو أهو A. microcarpa أم A. beccariana أم A. cumingiana',
      'هل المادة برية أم مزروعة، وإلى أي سنة تنتمي رقم الحصة',
      'وللزيت، هل قُطِّر في ماليزيا ومن أي نوع',
      'ما مرجع الدفعة، وهل يظهر على التصريح',
    ],
    related: [
      { slug: 'origins/indonesia', label: 'Indonesia origin guide' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/gulf-market-grade-labels', label: 'Gulf-market oud grading vocabulary' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  }),

  originCountry({
    slug: 'origins/sri-lanka',
    name: 'Sri Lanka',
    nameAr: 'سريلانكا',
    iso2: 'LK',
    summary:
      'Gyrinops walla in Sri Lanka: the one country in the range for a Gyrinops species, the wet-zone distribution, and the export position the ITTO review records.',
    summaryAr:
      'الـ Gyrinops walla في سريلانكا: البلد الوحيد في نطاق نوع من Gyrinops، وتوزيع المنطقة الرطبة، وموقع التصدير الذي تسجّله مراجعة ITTO.',
    directAnswer:
      'Sri Lanka is the only range state the ITTO review records for Gyrinops walla, and it is one of the two countries the review names as the major exporters of Gyrinops, alongside Indonesia. That makes it the one place in the trade where a Gyrinops name on a listing is a materially different claim from an Aquilaria name — different genus, different chemistry, different trade. The species is the walla patta of the wet zone, and it is recorded as a tree of the wet zone of Sri Lanka and very rarely in south-west India. The consequence for a buyer is that a Sri Lankan lot should be asked about its genus before anything else, because the answer changes what the rest of the questions mean.',
    directAnswerAr:
      'سريلانكا هي دولة الانتشار الوحيدة التي تسجّلها مراجعة ITTO للنوع Gyrinops walla، وهي إحدى الدولتين اللتين تسمّيهما المراجعة المصدّرين الرئيسيين لـ Gyrinops، إلى جانب إندونيسيا، وهو ما يجعلها المكان الوحيد في التجارة الذي يختلف فيه ادعاء اسم Gyrinops على لطف جوهرياً عن ادعاء اسم Aquilaria — جنس مختلف، وكيمياء مختلفة، وتجارة مختلفة. والنوع هو «والا باتا» في المنطقة الرطبة، ومسجَّل أنه شجرة في المنطقة الرطبة بسريلانكا ونادراً جداً في جنوب غرب الهند. والنتيجة العملية للمشتري أن اللوط السريلانكي ينبغي أن يُسأل عنه عن جنسه قبل أي شيء آخر، لأن الجواب يغيّر معنى بقية الأسئلة.',
    scope:
      'This page covers the species recorded for Sri Lanka, the country\'s position as a Gyrinops exporter, the wet-zone distribution of the species, the conservation and trade-control position, and the questions a buyer should put to a seller who states a Sri Lankan origin. It does not cover the two provinces, which have their own pages, and it does not cover Sri Lanka as a destination market.',
    scopeAr:
      'تغطي هذه الصفحة الأنواع المسجَّلة لسريلانكا، وموقع البلد كمصدِّر لـ Gyrinops، وتوزيع النوع في المنطقة الرطبة، وموقف الحفظ وضوابط التجارة، والأسئلة التي ينبغي وضعها لمن يدّعي منشأً سريلانكياً. ولا تغطي المقاطعتين منفردتين، فلكل منهما صفحتها، ولا تغطي سريلانكا بوصفها سوق وجهة.',
    species: [
      'Gyrinops walla. Vulnerable; Sri Lanka, and recorded as very rare in south-west India',
    ],
    speciesAr: [
      'Gyrinops walla. قابل للانقراض؛ سريلانكا، ومسجَّل أنه نادر جداً في جنوب غرب الهند',
    ],
    trade:
      'The ITTO review names Sri Lanka, with Indonesia, as the main Gyrinops exporters, and records that the major producers of agarwood oil from Gyrinops species are Singapore and Sri Lanka. The TRAFFIC export series for 1993 to 1998 does not record Sri Lanka as a significant exporter of Aquilaria, which is consistent: the country is a Gyrinops exporter and not an Aquilaria one. The same review gives the trade a scale figure — about 492,778 kg of Gyrinops against 19,681,624 kg of Aquilaria from all source countries between 2000 and 2020 — and that ratio is the clearest single statement of where Gyrinops sits in the agarwood trade.',
    tradeAr:
      'تسمّي مراجعة ITTO سريلانكا، مع إندونيسيا، المصدّرين الرئيسيين لـ Gyrinops، وتسجّل أن المنتجين الرئيسيين لزيت العود من أنواع Gyrinops هما سنغافورة وسريلانكا. وتسجّل سلسلة التصدير في TRAFFIC للفترة 1993-1998 أن سريلانكا ليست من المصدّرين المهمين لـ Aquilaria، وهو ما يتفق مع كونها مصدّرة لـ Gyrinops لا لـ Aquilaria. وتعطي المراجعة هذه التجارة رقماً دالاً — نحو 492,778 كغ من Gyrinops في مقابل 19,681,624 كغ من Aquilaria من كل دول المنشأ بين 2000 و2020 — وهذا النسبة أوضح عبارة مفردة عن موضع Gyrinops في تجارة العود.',
    control:
      'All species in the two genera are in CITES Appendix II, so a Sri Lankan export permit is required. The ITTO review records the country among those that answered the plantation questionnaire, and that it was among the recipients of the request for information on agarwood tree management. The TRAFFIC study records the species as the one the country is a range state for, and notes that Sri Lanka is one of the places from which agarwood is traded in substantial volumes. What the sources do not establish is a current export figure, and a buyer should ask the seller for the permit rather than rely on a published volume.',
    controlAr:
      'جميع أنواع الجنسين في ملحق سايتس الثاني، فتلزم تصريح تصدير سريلانكي. وتسجّل مراجعة ITTO البلاد ضمن من أجاب عن استبيان المزارع، ومن المعنيين بطلب المعلومات حول إدارة أشجار العود. وتسجّل دراسة TRAFFIC النوع بوصفه النوع الذي تسجّله الدولة في نطاقها، وتلاحظ أن سريلانكا إحدى البلدان التي يتداول فيها العود بكميات كبيرة. أما ما لا تثبته المصادر فهو رقم تصدير حالي، وعلى المشتري أن يطلب التصريح من البائع لا أن يعتمد على منشور.',
    terminology:
      'The Sri Lankan name for the tree is walla patta, and the material it yields is described in the trade as a gaha. The word gaha is used in the trade more broadly for agarwood from Gyrinops species, and it is a different word from the gaharu of Indonesia even though both are names for the same material, which is a good example of how the same product acquires two unrelated trade names. Sri Lanka is also the country where the trade describes the material as silani oud, and the term is worth knowing because it travels in the marketing and not in the documentation.',
    terminologyAr:
      'الاسم السريلانكي للشجرة «والا باتا»، والمادة منها توصف في التجارة بأنها «غا». ولفظ «غا» يُستعمل في التجارة أوسع لعود Gyrinops، وهو لفظ مختلف عن «غاهارو» الإندونيسي مع أن كليهما اسمان لنفس المادة، وهذا مثال جيد على كيف يكتسب المنتوج الواحد اسمين تجاريين لا صلة بينهما. وسريلانكا أيضاً هي البلد الذي تصف فيه التجارة المادة بأنها «سيلاني»، واللفظ يستحق المعرفة لأنه يسير في التسويق لا في الوثائق.',
    questions: [
      'Is the material Gyrinops or Aquilaria, and how was the genus determined',
      'Which species within the genus, and how was the species determined',
      'Is the material wild or planted, and from which province',
      'For an oil, was it distilled in Sri Lanka and from which species',
      'What batch reference identifies the lot, and does the export permit name it',
    ],
    questionsAr: [
      'هل المادة من Gyrinops أم Aquilaria، وعلى أي أساس حُدِّد الجنس',
      'أي نوع داخل الجنس، وعلى أي أساس حُدِّد النوع',
      'هل المادة برية أم مزروعة، ومن أي مقاطعة',
      'وللزيت، هل قُطِّر في سريلانكا ومن أي نوع',
      'ما مرجع الدفعة الذي يعرّف اللوط، وهل يذكره تصريح التصدير',
    ],
    related: [
      { slug: 'origins/indonesia', label: 'Indonesia origin guide' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/gulf-market-grade-labels', label: 'Gulf-market oud grading vocabulary' },
    
      { slug: 'origins/sri-lanka/sabaragamuwa', label: 'Sabaragamuwa — Sri Lankan agarwood region', labelAr: 'ساباراغاموا — منطقة عود سريلانكية' },
      { slug: 'origins/sri-lanka/southern-province', label: 'Southern Province — Sri Lankan agarwood region', labelAr: 'المقاطعة الجنوبية — منطقة عود سريلانكية' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  }),

  originCountry({
    slug: 'origins/papua-new-guinea',
    name: 'Papua New Guinea',
    nameAr: 'بابوا غينيا الجديدة',
    iso2: 'PG',
    summary:
      'Gaharu in Papua New Guinea: the Gyrinops end of the trade, the species recorded, the Middle East market that took it, and the harvest pressure behind it.',
    summaryAr:
      'الغاهارو في بابوا غينيا الجديدة: طرف Gyrinops في التجارة، والأنواع المسجَّلة، وسوق الشرق الأوسط الذي استقبلها، وضغط الجمع وراءها.',
    directAnswer:
      'Papua New Guinea is where the genus Gyrinops is most diverse and most documented: the ITTO review records Gyrinops ledermannii, G. caudata, G. moluccana, G. salicifolia and G. versteegii across Papua and Papua New Guinea, plus Aquilaria filaria in the country. The TRAFFIC study of the national trade records that the country was one of the major exporters of agarwood in international trade, that the material was recorded in trade under the name Aquilaria malaccensis even where the producing species were Gyrinops, and that the principal market was the Middle East. So a Papua New Guinean lot in the trade may be filed under a name that is not its genus, which is a filing error with a real price consequence: the two genera are traded in different markets by different buyers.',
    directAnswerAr:
      'بابوا غينيا الجديدة هي حيث يكون جنس Gyrinops أكثر تنوعاً وأكثر توثيقاً: فتسجّل مراجعة ITTO الأنواع Gyrinops ledermannii وGyrinops caudata وGyrinops moluccana وGyrinops salicifolia وGyrinops versteegii عبر بابوا وبابوا غينيا الجديدة، وتسجّل Aquilaria filaria في البلد. وتسجّل دراسة TRAFFIC للتجارة الوطنية أن البلاد كانت من المصدّرين الكبار للعود في التجارة الدولية، وأن المادة سُجِّلت في التجارة باسم Aquilaria malaccensis حتى حيث كانت الأنواع المنتِجة من Gyrinops، وأن السوق الرئيسي كان الشرق الأوسط. فاللوط البابوازي في التجارة قد يكون مسجَّلاً تحت اسم ليس جنسه، وهو خطأ في التوثيق له أثر سعري حقيقي: فالجنسان يُتداولان في سوقين مختلفين وبمشترين مختلفين.',
    scope:
      'This page covers the species recorded for Papua New Guinea, the country\'s export position, the fact that the material was filed in trade under an Aquilaria name, the conservation and trade-control position, and the questions a buyer should put to a seller who states a Papua New Guinean origin. It does not cover the two provinces, which have their own pages, and it does not cover the country as a destination market.',
    scopeAr:
      'تغطي هذه الصفحة الأنواع المسجَّلة لبابوا غينيا الجديدة، وموقع البلد التصديري، وحقيقة أن المادة سُجِّلت في التجارة باسم من Aquilaria، وموقف الحفظ وضوابط التجارة، والأسئلة التي ينبغي وضعها لمن يدّعي منشأً بابوازياً. ولا تغطي المقاطعتين منفردتين، فلكل منهما صفحتها، ولا تغطي البلد بوصفه سوق وجهة.',
    species: [
      'Gyrinops ledermannii. Endangered; Papua, Papua New Guinea, and the first species recorded for the country in field research',
      'Gyrinops caudata. Vulnerable; Papua, Papua New Guinea',
      'Gyrinops moluccana. Endangered; Indonesia (Moluccas, Papua), Papua New Guinea',
      'Gyrinops salicifolia. Endangered; Papua, Papua New Guinea',
      'Gyrinops versteegii. Vulnerable; Indonesia (Nusa Tenggara, Sulawesi, Moluccas, Papua), Papua New Guinea',
      'Aquilaria filaria. Vulnerable; Indonesia (East Nusa Tenggara, Moluccas, Papua), Papua New Guinea, Philippines',
    ],
    speciesAr: [
      'Gyrinops ledermannii. مهدد بالانقراض؛ بابوا وبابوا غينيا الجديدة، وأول نوع سُجّل للبلد في العمل الميداني',
      'Gyrinops caudata. قابل للانقراض؛ بابوا وبابوا غينيا الجديدة',
      'Gyrinops moluccana. مهدد بالانقراض؛ إندونيسيا (مولوكاس، بابوا)، بابوا غينيا الجديدة',
      'Gyrinops salicifolia. مهدد بالانقراض؛ بابوا وبابوا غينيا الجديدة',
      'Gyrinops versteegii. قابل للانقراض؛ إندونيسيا (نوسا تنغارا، سولايسي، مولوكاس، بابوا)، بابوا غينيا الجديدة',
      'Aquilaria filaria. قابل للانقراض؛ إندونيسيا (شرق نوسا تنغارا، مولوكاس، بابوا)، بابوا غينيا الجديدة، الفلبين',
    ],
    trade:
      'The TRAFFIC study of the national harvest and trade records the country as one of the major exporters of agarwood in international trade, with the Middle East as the principal market, and records that the material was reported under the name Aquilaria malaccensis in trade statistics even where the trees that produced it were Gyrinops. The ITTO review adds the scale of the genus: about 492,778 kg of Gyrinops against 19,681,624 kg of Aquilaria from all source countries between 2000 and 2020. A trade figure for the country as a whole is not given in the sources read, and the ITTO review records that Papua did not respond to the plantation questionnaire, so no plantation area is recorded for it either.',
    tradeAr:
      'تسجّل دراسة TRAFFIC للجمع والتجارة الوطنية البلاد بوصفها من المصدّرين الكبار للعود في التجارة الدولية، وأن السوق الرئيسي كان الشرق الأوسط، وأن المادة كانت تُبلَّغ في إحصاءات التجارة باسم Aquilaria malaccensis حتى حيث كانت الأشجار المنتِجة من Gyrinops. وتضيف مراجعة ITTO حجم الجنس: نحو 492,778 كغ من Gyrinops في مقابل 19,681,624 كغ من Aquilaria من كل دول المنشأ بين 2000 و2020. ولا تعطي المصادر قريناً للتجارة الإجمالية للبلد، وتسجّل مراجعة ITTO أن بابوا لم تجب عن استبيان المزارع، فلا مساحة مزروعة مسجَّلة لها أيضاً.',
    control:
      'All the species in the two genera are in CITES Appendix II, so an export permit is required, and the ITTO review records the country among the range states for five Gyrinops species and for Aquilaria filaria. The TRAFFIC study is a management study, and it documents the harvest and trading arrangements and the pressure they put on the resource, including the pattern of cutting trees to determine whether agarwood is present. That is a trade-compliance finding, and it is the reason a Papua New Guinean lot with a documented wild origin needs its own evidence rather than a general assurance.',
    controlAr:
      'جميع أنواع الجنسين في ملحق سايتس الثاني، فتلزم تصريح تصدير، وتسجّل مراجعة ITTO البلاد ضمن دول الانتشار لخمسة أنواع من Gyrinops وللنوع Aquilaria filaria. ودراسة TRAFFIC دراسة إدارية، وهي توثّق ترتيبات الجمع والتجارة والضغط الذي تُحدثه على المورد، بما في ذلك نمط قطع الأشجار لمعرفة هل فيها عود أم لا. وهذه نتيجة في الالتزام التجاري، وهي سبب أن اللوط البابوازي ذي المنشأ البري الموثَّق يحتاج إلى دليل خاص به لا إلى اطمئنان عام.',
    terminology:
      'The material is called gaharu in Papua New Guinea as it is in Indonesia, and the country also has its own name for the gaharu trade. What matters for a buyer is the genus question rather than the vocabulary: because the material was filed in trade statistics under an Aquilaria name, a lot sold with that name may be a Gyrinops material, and a buyer comparing it against a reference Aquilaria sample would be comparing two different things. The provincial names — East Sepik and Sandaun — are the vocabulary that identifies where within the country the material came from.',
    terminologyAr:
      'تسمى المادة «غاهارو» في بابوا غينيا الجديدة كما في إندونيسيا، وللبلد اسمه الخاص أيضاً لتجارة الغاهارو. والمهم للمشتري هو سؤال الجنس لا سؤال المفردات: فلأن المادة سُجِّلت في إحصاءات التجارة باسم من Aquilaria، قد يكون اللوط المباع بذلك الاسم مادة من Gyrinops، ومن قارنه بعينة مرجعية من أكويلاريا يكون قد قارن شيئين مختلفين. وأسماء المقاطعات — سيبك الشرقية وسنداون — هي المفردات التي تعرّف موقع المادة داخل البلد.',
    questions: [
      'Is the material Aquilaria or Gyrinops, and how was the genus determined rather than read off the paperwork',
      'Which species, and which province',
      'Is the material wild or planted, and if wild, what record exists of the harvest',
      'What is the batch reference, and does the export permit name it and name the species',
      'Has the material passed through an intermediate country, and under which permit',
    ],
    questionsAr: [
      'هل المادة من Aquilaria أم Gyrinops، وعلى أي أساس حُدِّد الجنس لا بقراءة الورق',
      'أي نوع، وأي مقاطعة',
      'هل المادة برية أم مزروعة، وإن كانت برية فما سجل للجمع',
      'ما مرجع الدفعة، وهل يذكره تصريح التصدير ويسمّي النوع',
      'هل مرّت المادة عبر بلد وسيط، وبأي تصريح',
    ],
    related: [
      { slug: 'origins/indonesia', label: 'Indonesia origin guide' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
    
      { slug: 'origins/papua-new-guinea/east-sepik', label: 'East Sepik — Papua New Guinea agarwood region', labelAr: 'سيبك الشرقية — منطقة عود بابوا غينيا الجديدة' },
      { slug: 'origins/papua-new-guinea/sandaun', label: 'Sandaun — Papua New Guinea agarwood region', labelAr: 'سنداون — منطقة عود بابوا غينيا الجديدة' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_PNG_AGARWOOD'],
  }),

  originCountry({
    slug: 'origins/myanmar',
    name: 'Myanmar',
    nameAr: 'ميانمار',
    iso2: 'MM',
    summary:
      'Aquilaria malaccensis in Myanmar: a range state with no recorded CITES trade, a reputation for material, and a border that the trade moves across.',
    summaryAr:
      'الـ Aquilaria malaccensis في ميانمار: دولة نطاق بلا تجارة مسجَّلة في سايتس، وسمعة لمادة، وحدود تعبرها التجارة.',
    directAnswer:
      'Myanmar is a range state for Aquilaria malaccensis and a country whose agarwood is described in the trade as having a distinct odour profile, and yet the CITES annual report data show no trade in agarwood involving Myanmar at all. The ITTO review records that Myanmar did not respond to the plantation questionnaire, so no plantation area is on the record either. The combination — a range state, a described material character, and an absence of recorded trade — is the shape of a country whose material moves through its neighbours rather than through its own export channels, and the 2000 TRAFFIC study records material being moved across the border in both directions.',
    directAnswerAr:
      'ميانمار دولة نطاق لـ Aquilaria malaccensis، وبلد توصف مادته في التجارة بأن لها رائحة مميزة مميزة، ومع ذلك لا تُظهر بيانات التقارير السنوية لسايتس أي تجارة في العود في ميانمار. وتسجّل مراجعة ITTO أن ميانمار لم تجب عن استبيان المزارع، فلا مساحة مزروعة في السجل أيضاً. وهذه المجموعة — دولة نطاق، وطابع لوصف مادة، وغياب تجارة مسجَّلة — هي شكل بلد تتنقل مادته عبر جاراته لا عبر قنوات تصديره، وتسجّل دراسة TRAFFIC لعام 2000 مادةً تُنقل عبر الحدود في الاتجاهين.',
    scope:
      'This page covers the species recorded for Myanmar, the absence of recorded CITES trade, the reputation for the material, the border movement the sources record, and the questions a buyer should put to a seller who states a Myanmar origin. It does not cover the one region the manifest lists, which has its own page, and it does not cover Myanmar as a destination market.',
    scopeAr:
      'تغطي هذه الصفحة الأنواع المسجَّلة لميانمار، وغياب التجارة المسجَّلة في سايتس، والسمعة التي تحظى بها المادة، وحركة الحدود التي تسجّلها المصادر، والأسئلة التي ينبغي وضعها لمن يدّعي منشأً ميانمارياً. ولا تغطي الإقليم الوحيد الذي يسرده السجل، فله صفحته، ولا تغطي ميانمار بوصفها سوق وجهة.',
    species: [
      'Aquilaria malaccensis. Critically Endangered; India, Myanmar, Bhutan, Malaysia, Indonesia, Philippines, Thailand, Singapore, Bangladesh, Nepal',
    ],
    speciesAr: [
      'Aquilaria malaccensis. مهدد بشدة؛ الهند وميانمار وبوتان وماليزيا وإندونيسيا والفلبين وتايلاند وسنغافورة وبنغلاديش ونيبال',
    ],
    trade:
      'The record is thin and says so. The CITES annual report data show no trade in agarwood involving Myanmar, and the TRAFFIC study records that the available data did not show significant exports from Myanmar, and that Taiwan\'s customs statistics showed no imports from Myanmar between 1993 and 1998 — while also recording that Myanmar is considered an important source of agarwood in international trade, and that some Middle Eastern clients preferred wood from Myanmar for its distinct odour. The same study records material being moved across the Myanmar border in both directions, including material said to have been flown into Indian cities. A country with a reputation and no recorded export is a country whose material is being moved, and the record of how is a matter for the record.',
    tradeAr:
      'السجل رفيع ويقول ذلك. فبيانات التقارير السنوية لسايتس لا تُظهر أي تجارة في العود في ميانمار، وتسجّل دراسة TRAFFIC أن البيانات المتاحة لم تُظهر صادرات كبيرة من ميانمار، وأن إحصاءات الجمارك التايبانية لم تُظهر وارداً من ميانمار بين 1993 و1998 — وهي نفسها تسجّل أن ميانمار يُعدّ مصدراً مهماً للعود في التجارة الدولية، وأن بعض زبائن الشرق الأوسط فضّلوا خشب ميانمار لطاقته المميزة. وتسجّل الدراسة نفسها مادةً تُنقل عبر حدود ميانمار في الاتجاهين، منها مادة قيل إنها نُقلت جواً إلى مدن هندية. والبلد الذي له سمعة ولا تصدير مسجَّل بلدٌ تُنقل مادته، وسجل كيفية نقلها شأن السجل.',
    control:
      'Myanmar became a Party to CITES in November 1997, so an export permit is required for every consignment of every species in the two genera, and the country was among the range states the 2000 TRAFFIC study examined. The ITTO review records that Myanmar did not respond to the plantation questionnaire, and it records the country among the range states for Aquilaria malaccensis. The practical reading is that the control system applies and the national record on the volume and the origin of the material is incomplete, which is a reason to ask a seller for the permit and the batch record rather than a reason to assume anything.',
    controlAr:
      'صارت ميانمار طرفاً في سايتس في نوفمبر 1997، فتلزم تصريح تصدير لكل شحنة من كل نوع في الجنسين، وكانت من دول الانتشار التي فحصتها دراسة TRAFFIC لعام 2000. وتسجّل مراجعة ITTO أن ميانمار لم تجب عن استبيان المزارع، وتسجّلها ضمن دول الانتشار لـ Aquilaria malaccensis. والقراءة العملية أن نظام الضبط مطبَّق وأن السجل الوطني على حجم المادة ومنشئها ناقص، وهذا سبب أن يطلب المشتري من البائع التصريح وسجل الدفعة لا سبب للافتراض.',
    terminology:
      'The material from Myanmar is described in the trade as having a distinct odour, and the study that reports it also records the order of preference that a Dubai dealer gave for the range states: Bhutan, India, Myanmar, Lao PDR, Cambodia, Vietnam and Indonesia, in that order. A preference order expressed by one dealer in one market is not a quality ranking, and this site does not reproduce it as one. What is useful is that the Myanmar entry in that order sits third, which tells a buyer that the material is valued for a property that is recognised in the market rather than claimed.',
    terminologyAr:
      'توصف المادة الميانمارية في التجارة بأنها ذات رائحة مميزة، وتسجّل الدراسة التي تذكر ذلك ترتيب تفضيل أعطاه تاجر في دبي لدول الانتشار: بوتان والهند وميانمار ولاوس وكمبوديا وفيتنام وإندونيسيا، بهذا الترتيب. وترتيب تفضيل أبداه تاجر واحد في سوق واحدة ليس ترتيب جودة، وهذا الموقع لا يعيده على هذا النحو. بل المفيد أن ميانمار في المرتبة الثالثة، فيُعرف للمشتري أن المادة مُقدَّرة لخاصية معترف بها في السوق لا مدَّعاة.',
    questions: [
      'Which species, and how was the species determined',
      'What is the batch reference, and what permit accompanied the lot',
      'Is the material wild or planted, and who harvested it',
      'Through which country did the material move, and where was it processed',
      'What record exists of the harvest itself, as distinct from the sale',
    ],
    questionsAr: [
      'أي نوع، وعلى أي أساس حُدِّد النوع',
      'ما مرجع الدفعة، وأي تصريح رافق اللوط',
      'هل المادة برية أم مزروعة، ومن جمعها',
      'عبر أي بلد تحركت المادة، وأين عولجت',
      'ما السجل الموجود للجمع نفسه، بصرف النظر عن البيع',
    ],
    related: [
      { slug: 'origins/india', label: 'India and northeast origin guide' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
    
      { slug: 'origins/myanmar/kachin', label: 'Kachin — Myanmar agarwood region', labelAr: 'كاتين — منطقة عود ميانمارية' },
      { slug: 'origins/india/nagaland', label: 'Nagaland — Bordering Indian agarwood region', labelAr: 'ناغالاند — منطقة عود هندية مجاورة' },
      { slug: 'origins/india/manipur', label: 'Manipur — Bordering Indian agarwood region', labelAr: 'مانيبور — منطقة عود هندية مجاورة' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  }),

  originCountry({
    slug: 'origins/bangladesh',
    name: 'Bangladesh',
    nameAr: 'بنغلاديش',
    iso2: 'BD',
    summary:
      'The agar tree in Bangladesh: the Moulvibazar and Sylhet production centre, four centuries of smallholder cultivation, and an export record of almost nothing.',
    summaryAr:
      'شجرة العود في بنغلاديش: مركز الإنتاج في مولفيبازار وسيلهيت، وأربعة قرون من الزراعة الصغيرة، وسجل تصدير يكاد يكون معدوماً.',
    directAnswer:
      'Bangladesh has a long record of agarwood cultivation in the sources, and an international trade that the CITES annual report data record in small figures. The production is concentrated in the Sylhet division, and within it in Moulvibazar, where the research literature places the plantations and the enterprises; the ITTO review records the country among the range states for Aquilaria malaccensis, which it also notes is the species native to nine north-eastern Indian states, and that the Bangladesh production is a plantation industry on a smallholder scale with about a hundred enterprises. The CITES annual report data record 1,170 kilograms of imports into Bangladesh in 1995, 1,646 in 1996 and 3,420 in 1997, and the country does not appear in the 1993 to 1998 Taiwan Customs import series.',
    directAnswerAr:
      'لبنغلاديش لها سجل طويل في زراعة العود لدى المصادر، وتجارتها الدولية بأرقام صغيرة تسجّلها بيانات التقارير السنوية لسايتس. ف الإنتاج متركز في إقليم سيلهيت، وداخلها في مولفيبازار حيث تضع أدبيات البحث المزارع والمؤسسات؛ وتسجّل مراجعة ITTO البلاد ضمن دول الانتشار لـ Aquilaria malaccensis، وتلاحظ أن إنتاج بنغلاديش صناعة مزروعة على نطاق صغار المزارعين بما يقارب مئة مؤسسة. وتسجّل بيانات التقارير السنوية لسايتس واردات بنغلاديش: 1,170 كيلوجراما في 1995 و1,646 في 1996 و3,420 في 1997، ولا يظهر اسم البلاد في سلسلة واردات تايوان 1993-1998.',
    scope:
      'This page covers the species recorded for Bangladesh, the production centre and its scale, the export record, the conservation and trade-control position, and the questions a buyer should put to a seller who states a Bangladesh origin. It does not cover the two districts, which have their own pages, and it does not cover Bangladesh as a destination market.',
    scopeAr:
      'تغطي هذه الصفحة الأنواع المسجَّلة لبنغلاديش، ومركز الإنتاج وحجمه، وسجل التصدير، وموقف الحفظ وضوابط التجارة، والأسئلة التي ينبغي وضعها لمن يدّعي منشأً بنغلاديشياً. ولا تغطي المقاطعتين منفردتين، فلكل منهما صفحتها، ولا تغطي بنغلاديش بوصفها سوق وجهة.',
    species: [
      'Aquilaria malaccensis. Critically Endangered; recorded for Bangladesh, and the species the country\'s plantations grow',
    ],
    speciesAr: [
      'Aquilaria malaccensis. مهدد بشدة؛ مسجَّل لبنغلاديش، وهو النوع الذي تزرعه مزارع البلاد',
    ],
    trade:
      'The trade record is small among the South and South-East Asian origins in the sources. The CITES annual report data record 1,170 kilograms of imports into Bangladesh in 1995, 1,646 in 1996 and 3,420 in 1997, and the country does not appear in the 1993 to 1998 Taiwan Customs import series. At the same time the ITTO review records Bangladesh among the countries that did not respond to the plantation questionnaire, so no plantation area is on the record. The picture is of a domestic industry with an international trade that the paperwork does not show, which is a gap in the record rather than an absence of the material.',
    tradeAr:
      'والسجل التجاري صغير بين منشآت جنوب آسيا وجنوب شرق آسيا في المصادر. وتسجّل بيانات التقارير السنوية لسايتس واردات بنغلاديش 1,170 كيلوجراما في 1995 و1,646 في 1996 و3,420 في 1997، ولا يظهر اسم البلاد في سلسلة واردات تايوان 1993-1998. وفي المقابل تسجّل مراجعة ITTO بنغلاديش ضمن البلدان التي لم تجب عن استبيان المزارع، فلا مساحة مزروعة في السجل. فالصورة صناعة محلية وتجارة دولية لا تُظهرها الأوراق، وهي ثغرة في السجل لا غياب للمادة.',
    control:
      'Bangladesh is a CITES Party and every species in the two genera is in Appendix II, so an export permit is required. The TRAFFIC study records the country among the range states it examined, and it records that Indian-based importers of agarwood had to present proof of legal origin because of the Indian Forest Act, and that agarwood had been imported into India by air from the direction of Myanmar and from Cambodia and Vietnam. The ITTO review records that Bangladesh did not respond to the plantation questionnaire. So the permit system applies and the national record on the origin and volume of the material is incomplete.',
    controlAr:
      'بنغلاديش طرف في سايتس وكل أنواع الجنسين في ملحقه الثاني، فتلزم تصريح تصدير. وتسجّل دراسة TRAFFIC البلاد ضمن دول الانتشار التي فحصتها، وتسجّل أن المستوردين المبينيين كان عليهم تقديم إثبات للمصدر القانوني بحكم قانون الغابات الهندي، وأن العود ورد إلى الهند جواً من اتجاه ميانمار ومن كمبوديا وفيتنام. وتسجّل مراجعة ITTO أن بنغلاديش لم تجب عن استبيان المزارع. فنظام التصاريح مطبَّق والسجل الوطني على منشأ المادة وحجمها ناقص.',
    terminology:
      'The local name is agar, and the trade\'s vocabulary for the material in Bangladesh is the local vocabulary of a four-century-old smallholder industry rather than an export vocabulary. That is worth knowing when a seller states a Bangladesh origin, because the material will often be described in terms of a tree, a village and a practice rather than in terms of a grade. The distinction the 2000 study draws is the one to hold on to: the same grade from different countries of origin may hold different value in the overall market, so a grade in a Bangladesh context is not a grade in a Gulf context.',
    terminologyAr:
      'الاسم المحلي «آغار»، ومفردات التجارة للمادة في بنغلاديش هي مفردات صناعة صغيرة عمرها أربعة قرون لا مفردات تصدير. وذلك يستحق المعرفة حين يدّعي البائع منشأً بنغلاديشياً، لأن المادة توصف غالباً بشجرة وقرية وممارسة لا بدرجة. والتمييز الذي ترسمه دراسة عام 2000 هو ما ينبغي الإمساك به: فالدرجة نفسها من مصادر مختلفة قد تحمل قيمة مختلفة في السوق العام، فالدرجة في سياق بنغلاديش ليست درجة في سياق خليجي.',
    questions: [
      'Which species, and how was the species determined',
      'Is the material from a smallholder holding or a registered plantation',
      'What is the batch reference, and what permit accompanied the lot',
      'What process was used to induce resin, and how long ago',
      'If an oil, where was it distilled and under what method',
    ],
    questionsAr: [
      'أي نوع، وعلى أي أساس حُدِّد النوع',
      'هل المادة من حيازة صغيرة أم من مزرعة مسجَّلة',
      'ما مرجع الدفعة، وأي تصريح رافق اللوط',
      'ما العملية المستعملة لاستحثاث الراتنج، ومنذ متى',
      'وللزيت، أين قُطِّر وبأي طريقة',
    ],
    related: [
      { slug: 'origins/india', label: 'India and northeast origin guide' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'buying/net-weight-and-volume', label: 'Compare mass, volume and pack counts' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
    
      { slug: 'origins/bangladesh/moulvibazar', label: 'Moulvibazar — Bangladeshi agarwood region', labelAr: 'مولفيبازار — منطقة عود بنغلاديشية' },
      { slug: 'origins/bangladesh/sylhet', label: 'Sylhet — Bangladeshi agarwood region', labelAr: 'سيلهيت — منطقة عود بنغلاديشية' },
      { slug: 'origins/india/tripura', label: 'Tripura — Bordering Indian agarwood region', labelAr: 'تريبورا — منطقة عود هندية مجاورة' },
      { slug: 'origins/india/meghalaya', label: 'Meghalaya — Bordering Indian agarwood region', labelAr: 'ميغالايا — منطقة عود هندية مجاورة' },
      { slug: 'origins/india/mizoram', label: 'Mizoram — Bordering Indian agarwood region', labelAr: 'ميزورام — منطقة عود هندية مجاورة' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  }),

  originCountry({
    slug: 'origins/china',
    name: 'China',
    nameAr: 'الصين',
    iso2: 'CN',
    summary:
      'Aquilaria sinensis in China: Hainan and Guangdong plantations, the published grading guide, the scale of the planted population, and the border questions.',
    summaryAr:
      'الـ Aquilaria sinensis في الصين: مزارع هاينان وقوانغدونغ، ودليل التقييم المنشور، وحجم المزروع، وأسئلة الحدود.',
    directAnswer:
      'China is the one country in the sources that has published its own national agarwood grading guide, which makes it the only place where a grade claim can be read against a published reference — and the ITTO review records that Malaysia runs twelve grades, Indonesia nine, and China a guide of its own, while the industry still lacks a global standard based on quantifiable indicators. The planted population is the largest recorded of any range state: at least 30 million planted trees in Guangdong and Hainan alone by the ITTO questionnaire, against a 50-million difference between two sources for the country as a whole. The species is Aquilaria sinensis, and it is a different species from the A. crassna of the Indo-China range states, with a published range in Fujian, Guangdong, Guangxi, Hainan, Sichuan, Hong Kong and Yunnan.',
    directAnswerAr:
      'الصين هي البلد الوحيد في المصادر الذي نشر دليل تقييم وطني للعود، وهي بذلك المكان الوحيد الذي يمكن أن يُقرأ فيه ادعاء الدرجة في مقابل مرجع منشور — وتسجّل مراجعة ITTO أن ماليزيا تدير اثنتي عشرة درجة وإندونيسيا تسعاً والصين دليلاً خاصاً بها، بينما ما يزال القطاع يفتقر إلى معيار عالمي قائم على مؤشرات قابلة للقياس. والمزروع هو أكبرعداد مسجَّلة بين دول الانتشار: ما لا يقل عن 30 مليون شجرة مزروعة في قوانغدونغ وهاينان وحدهما بحسب استبيان ITTO، في مقابل فارق 50 مليون بين مصدرين للبلد كله. والنوع هو Aquilaria sinensis، وهو نوع مختلف عن A. crassna في دول نطاق الهند الصينية، ونطاقه المنشور في فوجيان وقوانغدونغ وقوانغشي وهاينان وسيتشوان وهونغ كونغ ويوننان.',
    scope:
      'This page covers the species recorded for China, the published grading guide, the planted population and how differently it is reported, the provinces the production is concentrated in, the trade-control position, and the questions a buyer should put to a seller who states a Chinese origin. It does not cover the two provinces, which have their own pages, and it does not cover China as a destination market.',
    scopeAr:
      'تغطي هذه الصفحة الأنواع المسجَّلة للصين، ودليل التقييم المنشور، والمزروع وكيف يختلف الإبلاغ عنه، والولايات التي يتركّز فيها الإنتاج، وموقف ضوابط التجارة، والأسئلة التي ينبغي وضعها لمن يدّعي منشأً صينياً. ولا تغطي المقاطعتين منفردتين، فلكل منهما صفحتها، ولا تغطي الصين بوصفها سوق وجهة.',
    species: [
      'Aquilaria sinensis. Vulnerable; China (Fujian, Guangdong, Guangxi, Hainan, Sichuan, Hong Kong SAR, Yunnan), and recorded for Lao PDR in plantation only',
      'Aquilaria yunnanensis. Vulnerable; China (Yunnan), Lao PDR, Viet Nam',
    ],
    speciesAr: [
      'Aquilaria sinensis. قابل للانقراض؛ الصين (فوجيان، قوانغدونغ، قوانغشي، هاينان، سيتشوان، هونغ كونغ، يوننان)، ومسجَّل للاوس في المزارع فقط',
      'Aquilaria yunnanensis. قابللانقراض؛ الصين (يوننان)، ولاوس، وفيتنام',
    ],
    trade:
      'The TRAFFIC export series records China at 46,748 kilograms for 1993 to 1998, which is a substantial figure for a country that appears in the series and a small one beside Indonesia\'s. The scale that the ITTO review records is at the other end: at least 30 million planted trees in Guangdong and Hainan alone by the questionnaire response, and 70,442 trees aged twenty to thirty years in Guangdong, 59,888 trees aged two to thirty years in Hainan, two trees over forty years old in Guangxi and 300 scattered trees remaining in Hong Kong. So the planted population is very large and the recorded export is small, which points to a domestic market rather than an export industry.',
    tradeAr:
      'تسجّل سلسلة التصدير في TRAFFIC الصين عند 46,748 كيلوجراما للفترة 1993-1998، وهو رقم معتبر لبلد يظهر في السلسلة وصغير إلى جانب إندونيسيا. والمقياس الذي تسجّله مراجعة ITTO في الطرف الآخر: ما لا يقل عن 30 مليون شجرة مزروعة في قوانغدونغ وهاينان وحدهما بحسب إجابة الاستبيان، و70,442 شجرة عمرها من عشرين إلى ثلاثين سنة في قوانغدونغ، و59,888 شجرة عمرها من سنتين إلى ثلاثين في هاينان، وشجرتان تجاوزت الأربعين في قوانغشي، و300 شجرة متبقية متفرقة في هونغ كونغ. فالمزروع ضخم جداً والمسجَّل من التصدير صغير، وهو ما يشير إلى سوق داخلي لا صناعة تصدير.',
    control:
      'Every species in the two genera is in CITES Appendix II, so an export permit is required. China answered both the 2020 CITES questionnaire and the ITTO questionnaire, and the review records the country among the recipients of the request for information on agarwood tree management, and the government-sanctioned plantation work in 2021. It also records that a hundred or so trees in Hong Kong remain under protection. The review is explicit that the plantation population in China is uncertain by 50 million trees depending on the source, and that figure is worth remembering when a Chinese planted-volume claim is made.',
    controlAr:
      'جميع أنواع الجنسين في ملحق سايتس الثاني، فتلزم تصريح تصدير. وقد أجابت الصين عن استبيان سايتس 2020 وعن استبيان ITTO، وتسجّل المراجعة البلاد ضمن المعنيين بطلب المعلومات حول إدارة أشجار العود، وبالعمل المزروع المعتمد حكومياً عام 2021. وتسجّل أيضاً بقاء نحو مئة شجرة في هونغ كونغ تحت الحماية. والمراجعة صريحة أن المزروع في الصين غير مؤكد بفارق 50 مليون شجرة بحسب المصدر، وهذا الرقم يستحق التذكر حين يُقدَّم ادعاء عن حجم المزروع الصيني.',
    terminology:
      'The Chinese name for the material is chen xiang, which the 2000 TRAFFIC study notes literally means the wood that sinks — which is a name for the physical property of dense, resin-rich wood rather than a grade. China also has the only published national grading guide, so a Chinese grade claim is the one grade claim in this trade that can be read against a document. The provinces are the vocabulary that matters: Hainan and Guangdong are the two the sources name for production, and the material from them is A. sinensis, a different species from the A. crassna material of the Indo-China states.',
    terminologyAr:
      'الاسم الصيني للمادة «تشن شيانغ»، وتسجّل دراسة TRAFFIC لعام 2000 أن معناه الحرفي «الخشب الذي يغرق» — وهو اسم لصفة الخشب الكثيف الغني بالراتنج لا لدرجة. و الصين هي أيضاً المكان الوحيد الذي فيه دليل تقييم وطني منشور، فادعاء الدرجة الصيني هو الوحيد في هذه التجارة الذي يمكن قراءته في مقابل وثيقة. والولايات هي المفردات المهمة: هاينان وقوانغدونغ هما ما تسمّيه المصادر بالإنتاج، ومادتهما A. sinensis، وهو نوع مختلف عن مادة A. crassna في دول الهند الصينية.',
    questions: [
      'Which species, and how was it determined',
      'Is the material plantation-grown, and from which holding',
      'If a grade is quoted, is it the Chinese national guide\'s grade, and which edition',
      'What is the batch reference, and does the export permit name it',
      'For an oil, was it distilled in China and from which species',
    ],
    questionsAr: [
      'أي نوع، وعلى أي أساس حُدِّد',
      'هل المادة مزروعة، ومن أي حيازة',
      'لو ذُكرت درجة، أهي درجة الدليل الوطني الصيني، وأي طبعة',
      'ما مرجع الدفعة، وهل يذكره تصريح التصدير',
      'وللزيت، هل قُطِّر في الصين ومن أي نوع',
    ],
    related: [
      { slug: 'origins/vietnam', label: 'Vietnam origin guide' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'quality/gulf-market-grade-labels', label: 'Gulf-market oud grading vocabulary' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
    
      { slug: 'origins/china/guangdong', label: 'Guangdong — Chinese agarwood region', labelAr: 'قوانغدونغ — منطقة عود صينية' },
      { slug: 'origins/china/hainan', label: 'Hainan — Chinese agarwood region', labelAr: 'هاينان — منطقة عود صينية' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  }),

  originCountry({
    slug: 'origins/philippines',
    name: 'Philippines',
    nameAr: 'الفلبين',
    iso2: 'PH',
    summary:
      'The Philippine agarwood species: six Aquilaria and Gyrinops names recorded for the islands, a species that is data deficient rather than merely rare, and a small recorded export.',
    summaryAr:
      'أنواع العود في الفلبين: ستة أسماء من Aquilaria وGyrinops مسجَّلة لجزائرها، ونوع ناقص البيانات لا نادر فحسب، وتصدير مسجَّل صغير.',
    directAnswer:
      'The Philippines holds more distinct species names than any country in the sources apart from Indonesia, and the ITTO review records most of them as data deficient rather than endangered or vulnerable — Aquilaria apiculata, A. citrinicarpa, A. parvifolia and A. urdanetensis are all recorded with that status. That is a statement about what is known, not about what is safe: a species recorded as data deficient is a species whose population has not been assessed, and the review records that the proportion of wild trees with agarwood is likely under ten per cent and that trees are often cut down to determine whether agarwood is present. The country also has the Philippines\' own place in the trade, where material is filed under Aquilaria malaccensis and Aquilaria filaria names.',
    directAnswerAr:
      'تحمل الفلبين من الأسماء النوعية أكثر من أي بلد في المصادر سوى إندونيسيا، وتسجّل مراجعة ITTO معظمها على أنها ناقصة البيانات لا مهددة ولا قابلة للانقراض — فـ Aquilaria apiculata وA. citrinicarpa وA. parvifolia وA. urdanetensis مسجَّلة كلها بهذه الحالة. وهذه عبارة عن ما هو معروف لا عن ما هو آمن: فالنوع المسجَّل على أنه ناقص البيانات نوع لم يُقيَّم عدده، وتسجّل المراجعة أن نسبة الأشجار البرية التي فيها عود أقل على الأرجح من عشرة في المائة وأن الأشجار تُقطع أحياناً لمعرفة هل فيها عود. وللبلد أيضاً موضعه الخاص في التجارة حيث تُسجَّل المادة بأسماء Aquilaria malaccensis وAquilaria filaria.',
    scope:
      'This page covers the species recorded for the Philippines, what the data-deficient status of most of them does and does not mean, the export position, the conservation and trade-control position, and the questions a buyer should put to a seller who states a Philippine origin. It does not cover the one region the manifest lists, which has its own page, and it does not cover the Philippines as a destination market.',
    scopeAr:
      'تغطي هذه الصفحة الأنواع المسجَّلة للفلبين، وما تعنيه حالة نقص البيانات لمعظمها وما لا تعنيه، وموقع التصدير، وموقف الحفظ وضوابط التجارة، والأسئلة التي ينبغي وضعها لمن يدّعي منشأً فلبينياً. ولا تغطي الإقليم الوحيد الذي يسرده السجل، فله صفحته، ولا تغطي الفلبين بوصفها سوق وجهة.',
    species: [
      'Aquilaria apiculata. Data Deficient; Philippines',
      'Aquilaria citrinicarpa. Data Deficient; Philippines',
      'Aquilaria parvifolia. Data Deficient; Philippines',
      'Aquilaria urdanetensis. Data Deficient; Philippines',
      'Aquilaria cumingiana. Vulnerable; Malaysia (Borneo), Indonesia (Kalimantan, Maluku, Moluccas, Papua), Philippines',
      'Aquilaria filaria. Vulnerable; Indonesia (East Nusa Tenggara, Moluccas, Papua), Papua New Guinea, Philippines',
      'Aquilaria malaccensis. Critically Endangered; a range state for the Philippines',
    ],
    speciesAr: [
      'Aquilaria apiculata. البيانات ناقصة؛ الفلبين',
      'Aquilaria citrinicarpa. البيانات ناقصة؛ الفلبين',
      'Aquilaria parvifolia. البيانات ناقصة؛ الفلبين',
      'Aquilaria urdanetensis. البيانات ناقصة؛ الفلبين',
      'Aquilaria cumingiana. قابل للانقراض؛ ماليزيا (بورنيو)، إندونيسيا (كاليمانتان، مالوكو، مولوكاس، بابوا)، الفلبين',
      'Aquilaria filaria. قابل للانقراض؛ إندونيسيا (شرق نوسا تنغارا، مولوكاس، بابوا)، بابوا غينيا الجديدة، الفلبين',
      'Aquilaria malaccensis. مهدد بشدة؛ دولة نطاق للفلبين',
    ],
    trade:
      'The TRAFFIC export series does not record the Philippines as an exporter of agarwood, and the ITTO review records that the Philippines was among the countries that did not respond to the plantation questionnaire, so no plantation area is on the record for it either. The review does record Aquilaria cumingiana and Aquilaria filaria for the Philippines alongside the four data-deficient endemic species, and it records the Philippines in the range of Aquilaria malaccensis. So the country has the most species names and the least trade record, which is a combination worth asking a supplier about rather than assuming.',
    tradeAr:
      'لا تسجّل سلسلة التصدير في TRAFFIC الفلبين بوصفها مصدّرة للعود، وتسجّل مراجعة ITTO أن الفلبين كانت ضمن البلدان التي لم تجب عن استبيان المزارع، فلا مساحة مزروعة في السجل لها أيضاً. وتسجّل المراجعة مع ذلك Aquilaria cumingiana وAquilaria filaria للفلبين إلى جانب الأنواع المتوطنة الأربعة ناقصة البيانات، وتسجّل الفلبين في نطاق Aquilaria malaccensis. فللبلد أكثر الأسماء النوعية وأقل السجل التجاري، وهي مزيج يستحق السؤال عنه من مورد لا الافتراض.',
    control:
      'Every species in the two genera is in CITES Appendix II, so an export permit is required, and the country is a range state for seven of the names the ITTO review lists. The review records that the Philippines was one of the countries it sent the questionnaire to and did not receive a reply, and the 2000 TRAFFIC study records the national legal position of each range state it examined. The practical point is that a Philippine origin claim rests on a species record and a permit, and a buyer should ask for both rather than for a reputation.',
    controlAr:
      'جميع أنواع الجنسين في ملحق سايتس الثاني، فتلزم تصريح تصدير، والبلد دولة نطاق لسبعة من الأسماء التي تسردها مراجعة ITTO. وتسجّل المراجعة أن الفلبين إحدى البلدان التي أُرسل إليها الاستبيان ولم يصل ردها، وتسجّل دراسة TRAFFIC لعام 2000 الموقف القانوني الوطني لكل دولة انتشار فحصتها. والنقطة العملية أن ادعاء المنشأ الفلبيني يستند إلى سجل نوعي وإلى تصريح، وعلى المشتري أن يطلبهما لا أن يطلب سمعة.',
    terminology:
      'The Philippine material is traded under the same names as the material from elsewhere, which is the first thing to check: Aquilaria filaria and A. cumingiana are Philippine range states in their own right, and a lot sold under an Aquilaria malaccensis name may be either. The local vocabulary is the Tagalog name agar and the trade\'s Philippine terms, and the four data-deficient species have almost no trade vocabulary at all — which is itself the point, because a name with no trade meaning is a name that has not been traded under, and a buyer should ask what the seller is actually selling.',
    terminologyAr:
      'تُتداول المادة الفلبينية بالأسماء نفسها التي تُتداول بها المادة من غيرها، وهذا أول ما ينبغي فحصه: فـ Aquilaria filaria وA. cumingiana دولتا نطاق فلبينيتان بذاتهما، واللوط المبيع باسم Aquilaria malaccensis قد يكون أيّهما. والمفردات المحلية هي اسم التاغالوغي «آغار» ومفردات الفلبين التجارية، والأنواع الأربعة ناقصة البيانات تكاد لا تملك مفردات تجارية البتة — وهذا عين المطلوب، فاسم لا معنى تجاري له اسم لم يُتداول تحت، وعلى المشتري أن يسأل عمّا يبيعه البائع فعلاً.',
    questions: [
      'Which species, and how was the species determined rather than assumed from the origin',
      'Is the material A. filaria, A. cumingiana or A. malaccensis, and what distinguishes the one in this lot',
      'Is the material wild or planted, and what record supports that',
      'What batch reference identifies the lot, and does the export permit name it and name the species',
      'Has the material passed through an intermediate country or a re-export',
    ],
    questionsAr: [
      'أي نوع، وعلى أي أساس حُدِّد النوع لا بالافتراض من المنشأ',
      'هل المادة A. filaria أم A. cumingiana أم A. malaccensis، وما الذي يميز ما في هذا اللوط',
      'هل المادة برية أم مزروعة، وما السجل الذي يسند ذلك',
      'ما مرجع الدفعة الذي يعرّف اللوط، وهل يذكره تصريح التصدير ويسمّي النوع',
      'هل مرّت المادة عبر بلد وسيط أو عبر إعادة تصدير',
    ],
    related: [
      { slug: 'origins/malaysia', label: 'Malaysia origin guide' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
    
      { slug: 'origins/philippines/mindanao', label: 'Mindanao — Philippine agarwood region', labelAr: 'مينداناو — منطقة عود فلبينية' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  }),

  originCountry({
    slug: 'origins/brunei',
    name: 'Brunei',
    nameAr: 'بروناي',
    iso2: 'BN',
    summary:
      'Three Aquilaria species in Borneo, a quota recorded for the material from the adjacent Indonesian provinces, and a country with no export of its own in the record.',
    summaryAr:
      'ثلاثة أنواع من Aquilaria في بورنيو، وحصة مسجَّلة للمادة من الولايات الإندونيسية المجاورة، وبلد لا يظهر له تصدير في السجل.',
    directAnswer:
      'Brunei is a range state for three Aquilaria species and a country with no agarwood export of its own in the sources. The ITTO review records Aquilaria microcarpa, A. beccariana and A. malaccensis for Brunei, and it records that the country has a separate export quota for the non-CITES-listed material from the adjacent Indonesian provinces of Irian Jaya and the Maluku islands, and that since 2010 the government has hired local Indigenous people for the work. The quota is the interesting fact: it is a quota on material from another country, which tells a buyer that Brunei\'s position in this trade is as a place through which Borneo material moves rather than as a source of its own.',
    directAnswerAr:
      'بروناي دولة نطاق لثلاثة أنواع من Aquilaria، وبلد لا يظهر له في المصادر تصدير عود من عنده. وتسجّل مراجعة ITTO له Aquilaria microcarpa وA. beccariana وA. malaccensis، وتسجّل أن للبلد حصة تصدير منفصلة للمادة غير المدرَجة في سايتس من الولايات الإندونيسية المجاورة — إيريان جايا ومالوكو — وأن الحكومة استأجرت منذ 2010 أفراداً محليين من السكان الأصليين لأجل العمل. والحصة هي الحقيقة اللافتة: فهي حصة على مادة من بلد آخر، وهذا يخبر المشتري بأن موضع بروناي في هذه التجارة هو موضع تعبر منه مادة بورنيو لا موضع مصدر.',
    scope:
      'This page covers the species recorded for Brunei, the quota that applies to the non-listed material from the adjacent Indonesian provinces, the absence of any recorded Brunei export of its own, the conservation and trade-control position, and the questions a buyer should put to a seller who states a Brunei origin. It does not cover the individual districts, which have their own pages, and it does not cover Brunei as a destination market.',
    scopeAr:
      'تغطي هذه الصفحة الأنواع المسجَّلة لبروناي، والحصة المنطبقة على المادة غير المدرَجة من الولايات الإندونيسية المجاورة، وغياب أي تصدير مسجَّل لبروناي من عندها، وموقف الحفظ وضوابط التجارة، والأسئلة التي ينبغي وضعها لمن يدّعي منشأً برونايياً. ولا تغطي المقاطعات منفردة، فلكل منها صفحتها، ولا تغطي بروناي بوصفها سوق وجهة.',
    species: [
      'Aquilaria microcarpa. Endangered; Brunei Darussalam, Indonesia (Kalimantan, Sumatra), Malaysia (Peninsular, Borneo)',
      'Aquilaria beccariana. Vulnerable; Brunei Darussalam, Indonesia (Kalimantan, Sumatra), Malaysia (Peninsular, Borneo)',
      'Aquilaria malaccensis. Critically Endangered; a range state for Brunei',
    ],
    speciesAr: [
      'Aquilaria microcarpa. مهدد بالانقراض؛ بروناي، إندونيسيا (كاليمانتان، سومترا)، ماليزيا (شبه الجزيرة وبورنيو)',
      'Aquilaria beccariana. قابل للانقراض؛ بروناي، إندونيسيا (كاليمانتان، سومترا)، ماليزيا (شبه الجزيرة وبورنيو)',
      'Aquilaria malaccensis. مهدد بشدة؛ دولة نطاق لبروناي',
    ],
    trade:
      'No Brunei export figure appears in the sources. The trade record that exists is the quota: a separate export quota for the non-CITES-listed Aquilaria filaria material from Irian Jaya and the Maluku islands, set at 125 tonnes in the 2000 TRAFFIC study, which brought the total for the country up. The ITTO review records that Brunei\'s own range is three species and does not record the country among the exporters, and it records that the country hired local Indigenous people for agarwood work from 2010. So the country is a range state and a control point, and the material associated with it in the trade papers is material from next door.',
    tradeAr:
      'لا يظهر في المصادر رقم تصدير لبروناي. وسجل التجارة الموجود هو الحصة: حصة تصدير منفصلة لمادة Aquilaria filaria غير المدرَجة في سايتس من إيريان جايا ومالوكو، محددة بـ 125 طناً في دراسة TRAFFIC لعام 2000، وهو ما رفع إجمالي البلد. وتسجّل مراجعة ITTO أن نطاق بروناي هو ثلاثة أنواع ولا تسرد البلاد بين المصدّرين، وتسجّل أن البلاد استأجرت من 2010 أباً محلياً من السكان الأصليين لأعمل العود. فالبلد دولة نطاق ونقطة ضبط، والمادة التي تُربط به في أوراق التجارة مادة من الباب المجاور.',
    control:
      'All species in the two genera are in CITES Appendix II, and the quota the TRAFFIC study records applies to a species that is not listed, which shows how the two systems sit alongside each other. The country has a separate CITES authority from the Malaysian states on the same island, and the material it exports under that quota originates in Indonesia. A buyer should establish the country of origin of the material separately from the country of export, because in the Brunei case they are not the same, and the documentation follows the origin.',
    controlAr:
      'جميع أنواع الجنسين في ملحق سايتس الثاني، والحصة التي تسجّلها دراسة TRAFFIC تنطبق على نوع غير مدرَج، وهو ما يبيّن كيف يجلس النظامان جنباً إلى جنب. وللبلد سلطة سايتس منفصلة عن ولايات ماليزيا في الجزيرة نفسها، والمادة التي يصدّرها تحت تلك الحصة منشؤها في إندونيسيا. وعلى المشتري أن يثبت منشأ المادة على حدة عن بلد التصدير، فالحالتان في بروناي ليستا واحدة، والوثائق تتبع المنشأ.',
    terminology:
      'There is almost no Bruneian trade vocabulary on the record, and that absence is itself informative. The country has three recorded species and one recorded quota, and the material that moves under that quota is Indonesian material from the neighbouring provinces. So a Brunei origin claim should be treated as a claim about the route rather than about the growing place, and a buyer should ask which of the two the seller means.',
    terminologyAr:
      'لا يوجد في السجل تقريباً أي مفردات تجارية برونائية، وهذا الغياب في حد ذاته مفيد. فللبلد ثلاثة أنواع مسجَّلة وحصة مسجَّلة واحدة، والمادة التي تتحرك تحت تلك الحصة مادة إندونيسية من الولايات المجاورة. فادعاء المنشأ البرونائي ينبغي أن يعامل كادعاء عن الطريق لا عن مكان النمو، وعلى المشتري أن يسأل أيّهما يقصد البائع.',
    questions: [
      'Is the material of Brunei origin, or Indonesian material exported from Brunei',
      'Which species, and how was the species determined',
      'Is the material covered by the CITES permit or by the separate quota for the non-listed material',
      'What is the batch reference, and which authority issued the permit',
      'What is the document trail between the place of harvest and the place of export',
    ],
    questionsAr: [
      'هل المادة من بروناي أم مادة إندونيسية تُصدَّر منها',
      'أي نوع، وعلى أي أساس حُدِّد',
      'هل المادة مشمولة بتصريح سايتس أم بالحصة المنفصلة للمادة غير المدرَجة',
      'ما مرجع الدفعة، وأي سلطان أصدر التصريح',
      'ما مسار الوثائق بين مكان الجمع ومكان التصدير',
    ],
    related: [
      { slug: 'origins/malaysia', label: 'Malaysia origin guide' },
      { slug: 'origins/indonesia', label: 'Indonesia origin guide' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
    
      { slug: 'origins/malaysia/sabah', label: 'Sabah — Neighbouring Borneo agarwood region', labelAr: 'ساباه — منطقة عود مجاورة في بورنيو' },
      { slug: 'origins/malaysia/sarawak', label: 'Sarawak — Neighbouring Borneo agarwood region', labelAr: 'سارواك — منطقة عود مجاورة في بورنيو' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  }),

  originCountry({
    slug: 'origins/bhutan',
    name: 'Bhutan',
    nameAr: 'بوتان',
    iso2: 'BT',
    summary:
      'Bhutan: a range state for two species, a country outside CITES, an assessed area suitable for cultivation, and CITES-recorded imports of 20 kilograms in 1995.',
    summaryAr:
      'بوتان: دولة نطاق لنوعين، وبلد خارج سايتس، ومساحة مقيسة صالحة للزراعة، وواردات مسجَّلة لها في سايتس بلغت 20 كيلوجراما في 1995.',
    directAnswer:
      'Bhutan appears in the sources in a way that is easy to misread. It is a range state for both Aquilaria crassna and Aquilaria malaccensis, and the 2000 TRAFFIC study records that a Dubai-based dealer considered Bhutan the first of the range states in order of decreasing value — a single dealer\'s preference, and not a quality ranking. It is also not a Party to CITES, which the same study records explicitly, and the CITES annual report data record 20 kilograms of imports into Bhutan in 1995, 72 in 1996 and 574 in 1997. What is documented and current is cultivation: a study of the growing conditions in Bhutan assessed 6,490.8 square kilometres, sixteen point nine per cent of the country, as suitable for agarwood cultivation, and a national programme has been planting seedlings.',
    directAnswerAr:
      'تظهر بوتان في المصادر على نحو يسهل سوء قراءته. فهي دولة نطاق للنوعين Aquilaria crassna وA. malaccensis، وتسجّل دراسة TRAFFIC لعام 2000 أن تاجراً في دبي عدّ بوتان أول دول الانتشار في تنازلي القيمة — وهذا تفضيل تاجر واحد لا ترتيب جودة. وهي أيضاً ليست طرفاً في سايتس، وهو ما تسجّله الدراسة نفسها صراحةً، وتسجّل بيانات التقارير السنوية لسايتس واردات بوتان 20 كيلوجراما في 1995 و72 في 1996 و574 في 1997. أما الموثّق والحالي فهو الزراعة: فدراسة لظروف النمو في بوتان قيّست 6,490.8 كم²، أي 16.9٪ من البلاد، صالحةً لزراعة العود، وقد زرع برنامج وطني شتلات.',
    scope:
      'This page covers the species recorded for Bhutan, the country\'s position outside CITES, the cultivation assessment and the national programme, the export record, and the questions a buyer should put to a seller who states a Bhutan origin. It does not cover the individual districts, which have their own pages, and it does not cover Bhutan as a destination market.',
    scopeAr:
      'تغطي هذه الصفحة الأنواع المسجَّلة لبوتان، وموقع البلد خارج سايتس، وتقييم الزراعة والبرنامج الوطني، وسجل التصدير، والأسئلة التي ينبغي وضعها لمن يدّعي منشأً بوتانياً. ولا تغطي المقاطعات منفردة، فلكل منها صفحتها، ولا تغطي بوتان بوصفها سوق وجهة.',
    species: [
      'Aquilaria crassna. Critically Endangered; Bhutan is one of the five range states the review records for it',
      'Aquilaria malaccensis. Critically Endangered; India, Myanmar, Bhutan, Malaysia, Indonesia, Philippines, Thailand, Singapore, Bangladesh, Nepal',
    ],
    speciesAr: [
      'Aquilaria crassna. مهدد بشدة؛ بوتان إحدى دول الانتشار الخمس التي تسجّلها المراجعة',
      'Aquilaria malaccensis. مهدد بشدة؛ الهند وميانمار وبوتان وماليزيا وإندونيسيا والفلبين وتايلاند وسنغافورة وبنغلاديش ونيبال',
    ],
    trade:
      'The trade record is small: 20 kilograms of imports into Bhutan in 1995, 72 in 1996 and 574 in 1997, in the CITES annual report data. The CITES study also records Bhutan as not a Party to the Convention, so no Bhutan CITES export permit exists and no Bhutan material would appear in the CITES trade database as Bhutan origin. The 2000 study records the only trade-related claim about Bhutan, a dealer\'s order of preference, and the ITTO review records that Bhutan responded to the 2020 CITES questionnaire along with China, Cambodia and Thailand. So the country is being assessed, and what is being assessed is the cultivation opportunity rather than a trade already in being.',
    tradeAr:
      'والسجل التجاري صغير: واردات بوتان 20 كيلوجراما في 1995 و72 في 1996 و574 في 1997 بحسب بيانات التقارير السنوية لسايتس. وتسجّل دراسة سايتس أيضاً أن بوتان ليست طرفاً في الاتفاقية، فلا يوجد تصريح تصدير بوتاني ولا تظهر مادة بوتانية في قاعدة بيانات تجارة سايتس بوصفها من بوتان. وتسجّل دراسة عام 2000 الادعاء الوحيد المتعلق بتجارتها، وهو ترتيب تفضيل لدى تاجر، وتسجّل مراجعة ITTO أن بوتان أجابت عن استبيان سايتس 2020 مع الصين وكمبوديا وتايلاند. فالبلد يجري تقييمه، وما يجري تقييمه هو فرصة الزراعة لا تجارة قائمة بالفعل.',
    control:
      'Bhutan is not a Party to CITES, which the TRAFFIC study records as a plain fact with an immediate consequence: the country\'s agarwood does not appear in the CITES annual report data, and there is no Bhutan CITES permit to produce. The country answered the 2020 CITES questionnaire, so it is inside the review process even though it is outside the permit system, and the 2000 study records the material moving through the Indian market as one of the flows it examined. A buyer should ask where a Bhutan lot was documented and by whom, because the answer will not be a Bhutan permit.',
    controlAr:
      'بوتان ليست طرفاً في سايتس، وهو ما تسجّله دراسة TRAFFIC واقعاً عادياً له أثر فوري: فلا يظهر عود بوتان في بيانات التقارير السنوية لسايتس، ولا يوجد تصريح بوتاني رسمي صادر. وقد أجابت البلاد عن استبيان سايتس 2020، فهي داخل عملية المراجعة وإن كانت خارج نظام التصاريح، وتسجّل دراسة عام 2000 المادة تمرّ عبر السوق الهندي ضمن التدفقات التي فحصتها. وعلى المشتري أن يسأل أين وُثّق لوط بوتاني ومن وثّقه، فالجواب لن يكون تصريحاً بوتانياً.',
    terminology:
      'Bhutan carries a reputation in the Gulf trade that outruns its recorded trade, and the 2000 study is careful about how it reports that: a Dubai dealer\'s order of preference, in which Bhutan came first, and the largest Indian trading company gave a different order while reporting Assam material as the most sought after. Two traders, two orders, no standard behind either. The 2000 study also records that the highest-quality agarwood was reported to come from Aquilaria baillonii in Cambodia, A. crassna in Thailand, A. grandiflora in Hainan and A. agallocha, which the researchers considered a variant of A. malaccensis, in Bangladesh, Bhutan, Myanmar and the north-eastern Indian border districts.',
    terminologyAr:
      'للبوتان سمعة في تجارة الخليج تتجاوز تجارتها المسجَّلة، وتحرص دراسة عام 2000 على كيفية إيرادها: ترتيب تفضيل لتاجر في دبي، جاءت فيه بوتان أولاً، وأعطى أكبر شركة تجارية هندية ترتيباً مختلفاً معتبر عن مادة Assam أكثر ما يُطلب. تجاران، وترتيبان، ولا معيار خلف أيٍّ منهما. وتسجّل الدراسة أيضاً أن أعلى جودة من العود نُسبت إلى Aquilaria baillonii في كمبوديا وA. crassna في تايلاند وA. grandiflora في هاينان وA. agallocha التي عدّها الباحثون صورة من A. malaccensis، في بنغلاديش وبوتان وميانمار وولايات الهند الحدودية.',
    questions: [
      'Where was the material documented, given that Bhutan is not a CITES Party',
      'Which species, and how was the species determined',
      'Is the material wild or cultivated, and is the cultivation recent',
      'What batch reference identifies the lot, and who holds the original record',
      'Through which market did the material reach the buyer',
    ],
    questionsAr: [
      'أين وُثّقت المادة، بما أن بوتان ليست طرفاً في سايتس',
      'أي نوع، وعلى أي أساس حُدِّد',
      'هل المادة برية أم مزروعة، وهل الزراعة حديثة',
      'ما مرجع الدفعة الذي يعرّف اللوط، ومن يحتفظ بالسجل الأصلي',
      'عبر أي سوق بلغت المادة المشتري',
    ],
    related: [
      { slug: 'origins/india', label: 'India and northeast origin guide' },
      { slug: 'sourcing/supplier-origin-destination', label: 'Seller location, material origin and buyer destination' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
    
      { slug: 'origins/india/assam', label: 'Assam — Bordering Indian agarwood region', labelAr: 'أسام — منطقة عود هندية مجاورة' },
      { slug: 'origins/india/meghalaya', label: 'Meghalaya — Bordering Indian agarwood region', labelAr: 'ميغالايا — منطقة عود هندية مجاورة' },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_AGARWOOD_TRADE_2000'],
  }),
];

/**
 * Every country page lists the regions the register documents for that
 * country. The labels and blurbs come from the region pages' own titles
 * and summaries, so a country page cannot name a region in words the
 * region page does not use. Brunei and Bhutan have no region routes in
 * the manifest, so they carry no children: a country page never lists a
 * sub-division the sources do not record.
 */
for (const article of originCountryArticles) {
  const key = article.slug.replace('origins/', '');
  const children = originRegionChildren[key];
  if (children && children.length > 0) {
    article.children = children.map((child) => ({
      slug: child.slug,
      label: child.title,
      labelAr: child.titleAr,
      blurb: child.summary,
      blurbAr: child.summaryAr,
    }));
  }
}
