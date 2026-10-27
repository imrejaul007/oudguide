import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

/**
 * The OudGuide price observation baseline.
 *
 * The sister original-data asset to the grade-label dataset. That one records
 * what labels the market uses; this one records what price bands named public
 * lists state, on a date, for named origins and forms. The content bar is the
 * same: an observation is recorded, not measured; a recorded claim is kept
 * apart from a band; nothing here is a market index, an average or a price
 * list of OudGuide's own.
 *
 * What the entries are:
 *   - Observed 2026-window bands from named public price lists in the Gulf,
 *     Indian and Indonesian markets (the 26 October 2026 keyword-research
 *     window): commercial Cambodian chips, natural Cambodian, the market
 *     name "murruki" as observed in listings, natural Indian (Assam),
 *     Laotian old claims, pure attar by the tola, and gaharu in rupiah.
 *   - Two registry-cited dated anchors: the 2010 UAE study's per-kilogram
 *     AED retail range (TRAFFIC) and the industry's own estimate record
 *     (ITTO). Those are study records, not 2026 observations.
 *
 * What they are not: a market average, a fair value, a forecast, and no
 * entry is a measurement of any lot. A "recorded claim" is a figure a single
 * listing or report stated, not one OudGuide verified across markets.
 */

export const priceBaselineArticles: Article[] = [
  simpleGuide({
    slug: 'quality/gulf-price-baseline',
    kind: 'guide',
    title: 'The OudGuide price observation baseline',
    titleAr: 'خطّ الأساس لملاحظات الأسعار من دليل العود',
    summary:
      'A dated catalogue of the price bands observed in named public price lists, by documented origin and form, recorded 26 October 2026 from Gulf, Indian and Indonesian markets — what each observation is, the conditions it carries, and what it does not establish.',
    summaryAr:
      'سجلّ مؤرَّخ يضمّ نطاقات الأسعار المرصودة في قوائم أسعار علنية مسمّاة، بحسب المصدر والشكل الموثَّقَين، سُجِّل في 26 أكتوبر 2026 من الأسواق الخليجية والهندية والإندونيسية — ما الذي تُثبته كل ملاحظة، والظروف المصحوبة بها، وما لا تثبته.',
    directAnswer:
      'This is OudGuide’s own dated record, not a market index: a catalogue of observed price bands by documented origin and form, recorded on 26 October 2026 from named public price lists in the Gulf, Indian and Indonesian markets. Each entry carries its band, its currency, its market, the conditions it was stated under, and where it was observed. It exists so that a buyer can hold a seller’s figure against the observed band for the same conditions, and know that a band is an observation, not a quote and not a market truth. The record states what was observed and where; it does not measure any lot, average a market or attach a threshold to a grade.',
    directAnswerAr:
      'هذا سجلّ خاص بدليل العود، مؤرَّخ، وليس مؤشر سوق: فهرس نطاقات أسعار مرصودة بحسب المصدر والشكل الموثَّقين، سُجِّل في 26 أكتوبر 2026 من قوائم أسعار علنية مسمّاة في الأسواق الخليجية والهندية والإندونيسية. كل بند يحمل نطاقه، وعموته، وسوقه، والظروف التي ذُكر فيها، ومكان رصده. وُجد كي يقابل المشتري الرقم الذي يقدّمه البائع بالنطاق المرصود للظروف نفسها، ويعرف أن النطاق ملاحظة، ليس عرضاً ولا حقيقة سوقية. السجلّ يذكر ما رُصد وأين؛ ولا يقيس أيَّ دفعة، ولا يتمسّط السوق، ولا يربط عتبةً بأيّ مرتبة.',
    sections: [
      {
        heading: 'What the baseline records',
        headingAr: 'ما يسجّله خطّ الأساس',
        body: [
          'The baseline is a catalogue of observations, and its content is the observation. It records the price bands that public commercial lists state for a named origin and form on the date of recording: the band, the currency, the market, and the conditions the entry was stated under — the form, the grade label where one is printed, and whether the entry is a listing price, a recorded claim, or a dated study record. The entries it records span Cambodian, Indian, Laotian and gaharu material in chip and oil form, together with the two dated study anchors from the industry’s own reviews. They are commercial observations, and that is a fact about the market, not about any standard.',
          'The record is dated and scoped: it was compiled on 26 October 2026 from named public price lists in the Gulf, Indian and Indonesian markets, and it records, entry by entry, the conditions that observation carries. A band from a named retail list is not a band from a wholesale market, and a recorded claim is not a verified figure; the record keeps the two apart, because the difference between them is where a buyer’s margin of error lives.',
        ],
        bodyAr: [
          'خطّ الأساس فهرس ملاحظات، ومضمونه هو الملاحظة. يسجّل نطاقات الأسعار التي تذكرها القوائم التجارية العلنية لمصدر وشكل مسمَّيَين في تاريخ التسجيل: النطاق، والعملة، والسوق، والظروف التي ذُكر فيها البند — الشكل، ووسم المرتبة إن وُجد مطبوعاً، وهل البند سعر قائمة، أم ادعاء مسجَّل، أم سجلّ بحثي مؤرَّخ. البنود المسجّلة تمتد عبر مواد كمبودية وهندية ولاوسية وغارو إندونيسية بأشكالها من الشرائح والزيت، مع مسندين بحثيَّين مؤرَّخين من مراجعات القطاع نفسه. هذه ملاحظات تجارية، وهذا أمر عن السوق لا عن معيار.',
          'السجلّ مؤرَّخ ومحدد النطاق: أُعِدّ في 26 أكتوبر 2026 من قوائم أسعار علنية مسمّاة في الأسواق الخليجية والهندية والإندونيسية، ويسجّل بنداً بنداً الظروف المصاحبة لكل ملاحظة. نطاق من قائمة تجزئة مسمّاة ليس نطاقاً من سوق جملة، والادعاء المسجَّل ليس رقماً متحققاً؛ يفصل السجلّ بينهما، لأن الفرق بينهما هو حيث يسكن هامش خطأ المشتري.',
        ],
        callout: {
          title: 'What makes this OudGuide’s own data',
          titleAr: 'ما يجعل هذا بيانات دليل العود',
          body: 'The collection is the original contribution: OudGuide observed which bands named public price lists actually state, on a date, for a named origin and form, and recorded what each entry does and does not establish. That is a record of observation. It is not a market index, an average, or a price list of its own, and it is not presented as any of them.',
          bodyAr: 'الجِمع هو الإسهام الأصلي: رصد دليل العود أيّ نطاقات تذكرها قوائم الأسعار العلنية المسمّاة فعلاً، في تاريخ، لمصدر وشكل مسمَّيَين، وسجّل ما يثبته كل بند وما لا يثبته. هذا سجلّ ملاحظة. ليس مؤشراً سوقياً ولا تمسيطاً ولا قائمة أسعار من عنده، ولا يُقدَّم على أيٍّ من هذه الوجوه.',
        },
      },
      {
        heading: 'The observed bands',
        headingAr: 'النطاقات المرصودة',
        body: [
          'The bands below are recorded as observed. Each row states the material, the form, the band, the currency, the market, and the date of observation, and it states what the observation does not establish. A recorded claim is a figure a single listing or report stated, not one OudGuide verified across markets; it is flagged as such and it is not a band. The two registry-cited records at the end are the dated study anchors: what the industry’s own reviews state, not 2026 observations.',
        ],
        bodyAr: [
          'النطاقات أدناه مسجّلة كما رُصدت. كل سطر يذكر المادة، والشكل، والنطاق، والعملة، والسوق، وتاريخ الرصد، ويذكر ما لا تثبته الملاحظة. الادعاء المسجَّل رقم ذكرته قائمة مفردة أو تقرير مفرد، لم يتحقق منه دليل العود في الأسواق؛ يُوسم على ذلك وليس نطاقاً. البنديان المسنودان بالسجلّ في النهاية هما المسندان البحثيان المؤرَّخان: ما تذكره مراجعات القطاع نفسها، لا ملاحظات 2026.',
        ],
        list: [
          'Cambodian chips, “taqir” class as the list labels it — commercial: observed 550–600 SAR/kg. A named-listing retail observation; resin content and origin are not verified by OudGuide.',
          'Cambodian, natural, “malak” as the list labels it: recorded from 18,000 SAR/kg upward. The upper end is an open one; it is recorded as the lists recorded it, not as a verified ceiling.',
          'Murruki (the market name, recorded as observed in listings — the name does not establish the material behind it): enhanced 300–550 SAR/kg; natural 3,000–7,000 SAR/kg.',
          'Indian (Assam), natural: observed 8,000–13,000 SAR/kg in Gulf retail lists.',
          'Laotian, old natural: a single-listing recorded claim of 45,000 SAR/kg. Recorded as a claim, not as a band.',
          'Pure attar (oud oil): observed roughly 100–500 USD per tola in Gulf retail; the Indian wholesale figure of above 150,000 INR/kg is a recorded claim.',
          'Gaharu (Indonesian retail): observed 300,000–20,000,000 IDR/kg across named listings; press-recorded top grades up to about 25,000,000 IDR/kg; the “super king, around 100,000 USD/kg” figure is a recorded claim. The band is wide because the named lists are wide, not because an average was computed.',
          'Dated study anchor: the 2010 UAE study records the per-kilogram retail range in AED for its period (TRAFFIC, source registry). An estimate record of the industry’s total value appears in the industry’s own review (ITTO, source registry). Both are dated records, not 2026 observations.',
        ],
        listAr: [
          'شرائح كمبودية، صنف «تَقير» كما يسمّيها القوائم — تجارية: رُصد 550–600 ريال سعودي للكيلو. ملاحظة تجزئة من قائمة مسمّاة؛ محتوى الراتنج والمصدر لم يتحقق منهما دليل العود.',
          'كمبودي طبيعي، «مَلَك» كما تسميه القوائم: سُجِّل من 18,000 ريال سعودي للكيلو صعوداً. الحدّ العلوي مفتوح؛ سُجِّل كما سجّلته القوائم، ليس كسقف متحقق.',
          'مروكي (الاسم التجاري، مسجّل كما رُصد في القوائم — الاسم لا يثبت ما ورائه من مادة): المحسَّن 300–550 ريالاً للكيلو؛ الطبيعي 3,000–7,000 ريال.',
          'هندي (أسامي) طبيعي: رُصد 8,000–13,000 ريال للكيلو في قوائم تجزئة خليجية.',
          'لاوس، طبيعي قديم: ادعاء مسجّل من قائمة مفردة بـ45,000 ريال للكيلو. سُجِّل ادعاءً، لا نطاقاً.',
          'المطراة الصافي (زيت العود): رُصد نحو 100–500 دولار للتولة في تجزئة خليجية؛ الرقم الجملة الهندي بأكثر من 150,000 روبية للكيلو ادعاء مسجَّل.',
          'غارو (تجزئة إندونيسية): رُصد 300,000–20,000,000 روبية إندونيسية للكيلو عبر قوائم مسمّاة؛ أعلى الأصناف المسجلة في الصحافة حتى نحو 25,000,000 روبية؛ الرقم «سوبر كينق، نحو 100,000 دولار للكيلو» ادعاء مسجَّل. النطاق واسع لأن القوائم المسمّاة واسعة، ليس لأن تمسيطاً حُسب.',
          'مسنِد بحثي مؤرَّخ: دراسة تجارة العود الإماراتية لعام 2010 تسجّل نطاق البيع بالتجزئة بالدرهم للكيلو في عهدها، وسجلّ تقديرات قيمة القطاع الإجمالية يظهر في مراجعة المنظمة الدولية. كلاهما سجلّان بحثيان مؤرَّخان، لا ملاحظتان لعام 2026.',
        ],
      },
      {
        heading: 'How to use it, and what it does not show',
        headingAr: 'كيف يُستعمل، وماذا لا يُظهر',
        body: [
          'The baseline is used the way a reference range is used: to hold a figure against the band for the conditions it claims. A seller who states a price under named conditions is checked against the observed band for those same conditions; the gap between the two is what the price framework reads. The band is not a quote, not a fair value, and not a prediction. It is what named lists stated on a date, and the next observation may move it.',
          'The record does not average a market: no aggregation is performed on the observations, and the wide gaharu band in particular is recorded wide because the named lists are wide. Where a seller’s figure and the band disagree, the difference is stated as a gap, not smoothed away. OudGuide’s own observation stream records new buyer observations through the RFQ channel, k-anonymised; the published baseline remains this dated compilation, updated by new compilations rather than by a live feed, until the capture has a durable store.',
        ],
        bodyAr: [
          'يُستعمل خطّ الأساس كما يُستعمل نطاق مرجعي: ليُقابَل به رقم مع النطاق المصاحب للظروف التي يدّعيها. البائع الذي يذكر سعراً وظروفاً مسمّاة يُطابق نطاقه المرصود لتلك الظروف نفسها؛ الهوّة بينهما هي ما يقرأه إطار السعر. النطاق ليس عرضاً، ولا قيمة عادلة، ولا توقعاً. هو ما ذكرته قوائم مسمّاة في تاريخ، والملاحظة التالية قد تحرّكه.',
          'السجلّ لا يتمسّط سوقاً: لا تتمّ أيّة عملية تمسيط على الملاحظات، والنطاق الواسع للغارو على وجه التحديد مسجّل واسعاً لأن القوائم المسمّاة واسعة. حيث يتفاوت رقم البائع والنطاق، تُذكر الفارق هوّةً لا يُنسى. تدفّق ملاحظات دليل العود يسجّل ملاحظات مشترين جدداً عبر قناة طلب العروض مع تمويه رقمي؛ يبقى خطّ الأساس المنشور هذا التجميع المؤرَّخ، يُحدَّث بتجمعات جديدة لا بتدفق حي، حتى يحوز الالتقاط مخزناً دائماً.',
        ],
      },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'TRAFFIC_UAE_AGARWOOD_TRADE', 'AGARWOOD_REVIEW_2014'],
    dataset: {
      variableMeasured: [
        'material',
        'form',
        'price band',
        'currency',
        'market',
        'conditions recorded',
        'date of observation',
      ],
      downloadPath: '/data/gulf-price-baseline',
      license:
        'CC BY 4.0 — attribution: OudGuide, compiled 2026-10-26. A dated record of observed bands, not a market index or average.',
    },
    limitations:
      'This is OudGuide’s own dated record of observed price bands, and it is not a market index, an average, or a price list. It does not establish the price, quality or authenticity of any lot, and it does not attach a threshold or a standard to an origin or a grade, because the entries are commercial observations, not measurements. The record states what named public lists and named study records state on a date; it does not verify any entry across markets, and it keeps a recorded claim apart from a multi-listing band. The RFQ capture that feeds new observations is per-session until a durable store is wired in, so the published baseline remains a dated compilation. Prices move with conditions, and a dated band does not follow them on its own.',
    limitationsAr:
      'هذا سجلّ خاص بدليل العود، مؤرَّخ، لنطاقات أسعار مرصودة، وليس مؤشراً سوقياً ولا تمسيطاً ولا قائمة أسعار. لا يثبت سعر أيّ دفعة ولا جودتها ولا أصالتها، ولا يربط عتبة أو معياراً بمصدر أو مرتبة، لأن البنود ملاحظات تجارية لا قياسات. السجلّ يذكر ما تذكره قوائم علنية مسمّاة وسجلات بحثية مسمّاة في تاريخ؛ لا يتحقق من أيّ بند عبر الأسواق، ويفصل الادعاء المسجَّل عن نطاق متعدد القوائم. الالتقاط عبر طلب العروض الذي يغذّي ملاحظات جديدة يعمل ضمن الجلسة حتى يُوصَل مخزن دائم، يبقى خطّ الأساس المنشور تجميعاً مؤرَّخاً. الأسعار تتحرّك مع الظروف، والنطاق المؤرَّخ لا يتبعها من نفسه.',
    nextSteps: [
      'Read the price framework: how a price observation is assembled',
      'Read the grade-label dataset: what a label does not establish',
      'Check a questionable offer against the observed band',
      'See what the limit of testing and documentation is',
    ],
    nextStepsAr: [
      'اقرأ إطار السعر: كيف يُجمَع رصد سعري',
      'اقرأ فهرس وسوم المرتبة: ما لا تثبته الوسوم',
      'طابق عرضاً مشكوكاً مع النطاق المرصود',
      'اعرف حدّ ما تثبته الفحوص والوثائق',
    ],
    related: [
      { slug: 'buying/oud-oil-price-framework', label: 'A buyer’s framework for oud oil price' },
      { slug: 'quality/grade-label-dataset', label: 'The OudGuide grade-label dataset' },
      { slug: 'quality/gulf-market-grade-labels', label: 'Gulf-market oud grading vocabulary' },
      { slug: 'quality/fraud-identification', label: 'Oud fraud and counterfeit identification' },
      { slug: 'buying/evaluating-an-offer', label: 'Evaluating a questionable offer' },
      { slug: 'quality/assessment-and-testing-limits', label: 'The limit of what testing and documentation establish' },
      { slug: 'glossary/murruxi', label: 'Murruxi (Murūki): the market name, not a grower region' },
    ],
    parent: 'quality',
  }),
];
