import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

/**
 * Where do I begin with oud?
 *
 * Gap §7 in the 2026-10-26 landscape audit: the onboarding set —
 * "where do I start, what is affordable, what should I not skip" —
 * was answered only inside community threads (r/TheOudCollective),
 * not on any vendor site. It is the first question a newcomer asks
 * and the one that decides whether they buy once or come back.
 *
 * This page is the orientation: it does not re-explain agarwood
 * (that is what-is-agarwood) and it does not grade a lot (that is
 * the authenticity protocol). It tells a first-timer what the four
 * decisions are, in the order that costs the least, and routes each
 * decision to the specific OudGuide page that serves it, so a new
 * reader has one path into the whole site instead of a wall of links.
 */
export const gettingStartedWithOudArticles: Article[] = [
  simpleGuide({
    slug: 'oud-basics/getting-started',
    parent: 'oud-basics',
    title: 'Where to begin with oud: the four decisions, in order',
    titleAr: 'من أين أبدأ مع العود: القرارات الأربعة بالترتيب',
    summary:
      'The four decisions a first-timer makes, in the order that costs the least: which word you mean, which form, what to spend, and what to check before you pay. Each routes to the OudGuide page that answers it, so the newcomer has one path in instead of a wall of links.',
    summaryAr:
      'القرارات الأربعة التي يتخذها المبتدئ، بالترتيب الذي يكلف أقل: أيّ كلمة تقصد، وأي شكل، وكم تنفق، وما الذي تفحصه قبل أن تدفع. ويرسل كل قرار إلى صفحة دليل العود التي تجيبه، فيملك المبتدئ مسارًا واحدًا إلى الموقع بدل حائط من الروابط.',
    directAnswer:
      'Begin with the four decisions, in this order, and each one costs less if the one before it is settled. First, say which of two things "oud" names — the fragrant resinous wood, or the stringed instrument — because every later step depends on it. Second, pick the form you actually want: chips to burn or keep, distilled oud oil, attar for the skin, or bakhoor. Third, set what you will spend against a documented range rather than against a figure a seller gave you, so you know what a low price is signalling. Fourth, check the claims that a low price opens — the grade, the provenance, and the one document that actually constrains the trade. A first-timer who does the four in this order makes a defensible first purchase; one who jumps straight to price or to a seller makes a hope.',
    directAnswerAr:
      'ابدأ بالقرارات الأربعة بهذا الترتيب، وكلّ ما استقرّ القرار السابق قلّ ما يكلّف التالي. أوّلًا، سمِّ أيّ شيئين تسمّيهما كلمة «عود» — الخشب الراتنجي العطري أم الأداة الوترية — لأن كل خطوة تالية تعتمد عليه. ثانيًا، اختر الشكل الذي تريده فعلًا: رقائقً تُحرق أو تُحفظ، أو زيت عود مقطّرًا، أو عودًا مقطّرًا للجلد، أو بخورًا. ثالثًا، حدّد ما ستدفعه مقابل نطاق موثّق لا مقابل رقم بائع، فتدرك أي إشارة يحمل سعر منخفض. رابعًا، افحص الادعاءات التي يفتحها سعر منخفض — الدرجة، والمنشأ، والوثيقة الوحيدة التي تقيد التجارة فعلًا. ومبتدئ أنجز الأربع بهذا الترتيب يتخذ أول شراء مدافَعًا عنه؛ ومَن يقفز إلى السعر أو إلى البائع يتخذ رجاءً.',
    sections: [
      {
        heading: 'The four decisions, and why that order',
        headingAr: 'القرارات الأربعة، ولماذا هذا الترتيب',
        body: [
          'The order is the content. It runs from the cheapest, fastest question to the most consequential, so that every later decision rests on an answer that is already settled. The word question is free and immediate; the form question changes everything about what you are buying and what it should cost; the budget question has a documented range to be set against; and the check question is where a capable supplier is separated from a careless one. A newcomer who works through them in this order never wastes money on the wrong thing, because the wrong thing is identified at step two, not at the point of payment. That is the whole reason the order exists: to stop the first purchase being a guess.',
        ],
        bodyAr: [
          'الترتيب هو المحتوى. فهو يسير من أرخص سؤال وأسرع إلى أخطر، بحيث يرتكز كل قرار لاحق على جواب استقرّ. وسؤال الكلمة مجاني وفوري؛ وسؤال الشكل يغيّر كل شيء فيما تشتري وفيما ينبغي أن يكلفه؛ وللسؤال عن الميزانية نطاق موثّق يُحدَّد عليه؛ وفي سؤال الفحص يُفرَق بين مورد كفء ومورد متهوّر. ومبتدئ يمرّ بها بهذا الترتيب لا ينفق أبدًا على الشيء الخاطئ، لأن الشيء الخاطئ يُحدَّد في الخطوة الثانية لا عند الدفع. وهذه هي كل سبب في وجود الترتيب: أن يوقف أول شراء عن أن يكون تخمينًا.',
        ],
      },
      {
        heading: 'Decision one: which "oud" you mean',
        headingAr: 'القرار الأول: أيّ «عود» تقصد',
        body: [
          'This is the question that saves a confused first purchase more than any other, and it takes no money and no time. In Arabic the word names two products that share nothing but a spelling: the fragrant resinous heartwood and its made products, and the stringed lute. If you are here for the fragrance, everything else on this site is for you and this is where you continue. If you are here for the instrument, this is not the place, and a music retailer is. The page that draws that line and says it plainly is the one you should read before anything else, because it tells you whether the rest of the path is your path at all.',
        ],
        bodyAr: [
          'هذا هو السؤال الذي يوفّر أول شراء محيّرًا أكثر من أي سؤال آخر، ولا يكلّف مالًا ولا وقتًا. ففي العربية تسمّي الكلمة منتجين لا شيء مشتركًا بينهما إلا الكتابة: الخشب الراتنجي العطري والمنتجات المصنوعة منه، والأداة الوترية. فإن كنت هنا من أجل العطر، فكل ما في هذا الموقع لك وهذا حيث تكمل. وإن كنت من أجل الآلة، فهذا ليس مكانك ومتجر الموسيقى مكانك. والصفحة التي ترسم تلك الحدود وتصرّح بها هي التي ينبغي أن تقرأها قبل أي شيء، لأنها تخبرك إن كان سائر المسار هو مسارك أصلًا.',
        ],
      },
      {
        heading: 'Decision two: which form, and what you will do with it',
        headingAr: 'القرار الثاني: أي شكل، وما ستفعل به',
        body: [
          'The fragrant material comes as chips, as the distilled oil, as attar on a sandalwood base, and as bakhoor, and the right one is fixed by what you will do with it, not by what a seller calls it. A chip is bought to burn, to keep, or to distill; an oil is bought to concentrate a scent; attar is bought to be worn; bakhoor is bought for the room. Choosing the form is the decision that saves the most money, because the wrong form is the wrong product at the wrong price regardless of how good the seller is. Two OudGuide choosing guides exist for this: one for wood and one for oil and attar, and they decide the question against what the form is actually for rather than against its name.',
        ],
        bodyAr: [
          'المادة العطرية تأتي رقائق وزيتًا مقطَّرًا وعطرًا على قاعدة صندل وبخورًا، والصحيح منها يحدّده ما ستفعله به لا ما يسميه البائع. فالرقائق تُشترى للحرق أو للاحتفاظ أو للتقطير، والزيت يُشترى لتكثيف الرائحة، والعطر يُلحَق على الجلد، والبخور لغرفة. واختيار الشكل هو القرار الذي يوفّر أكثر في المال، لأن الشكل الخاطئ هو المنتج الخاطئ بالسعر الخاطئ مهما كان البائع صالحًا. ودليلان لاختيار من دليل العود: واحد للخشب وواحد للزيت والعطر، ويقرران السؤال على الغاية التي هي الشكل لحظها فعلًا لا على اسمه.',
        ],
      },
      {
        heading: 'Decision three: what to spend, set against a documented range',
        headingAr: 'القرار الثالث: كم تنفق، يحدَّد على نطاق موثّق',
        body: [
          'A first-timer has no internal price reference, and that is exactly the point at which the trade is won by a careless seller. The OudGuide price observation baseline records what named public lists put a claimed grade and form on a stated date and market; it is not a price guide and not a current average, but it is the difference between a budget that is a number and one that is a hope. Set your budget against that range before you talk to anyone. Then read the result: a price at the bottom of the range for a claimed top grade is the single strongest signal that one of the claims is false, and the baseline tells you which claims to read against which range.',
        ],
        bodyAr: [
          'لا يملك المبتدئ مرجع سعر داخليًا، وهي بالذات اللحظة التي يربحها فيها بائع متهوّر. وخطّ الأساس المرصود من دليل العود يسجّل ما تضعه قوائم علنية مسمّاة لدرجة وشكل معيَّنين في تاريخ وسوق محدَّدين؛ وليس دليل أسعار ولا متوسطًا حاليًا، لكنه الفرق بين ميزانية هي رقم وميزانية هي رجاء. حدّد ميزانيتك على ذلك النطاق قبل أن تتحدث مع أحد. ثم اقرأ النتيجة: سعر في قعر النطاق لدرجة علوية مطلوبة هو أقوى إشارة بمفردها إلى أن أحد الادعاءات زائف، والخطّ الأساس يخبرك أي ادعاءات تُقرا على أي نطاق.',
        ],
      },
      {
        heading: 'Decision four: the check, before you pay',
        headingAr: 'القرار الرابع: الفحص، قبل أن تدفع',
        body: [
          'This is the step a capable supplier expects and a careless one avoids. Press the grade claim and the provenance claim with the question that each fails to answer, and set the price against the range. Then run the OudGuide authenticity protocol on a sample: the ordered set of physical checks — resin, density, the burn, scent persistence, and the price read against the range — and, read on their own, the one laboratory test and the one conservation document that actually carry evidence on their own. The protocol is not a verdict: a counterfeiter can pass the physical checks. It is the ordered set of questions a capable supplier can answer and a careless one cannot. Doing step four is what separates a first purchase you can defend from one you hope was fine.',
        ],
        bodyAr: [
          'هذه هي الخطوة التي يتوقعها مورد كفء ويتفاداه متهوّر. اضغط ادعاء الدرجة وادعاء المنشأ بالسؤال الذي يفشل كلٌّ منهما على إجابته، والميزانَ على النطاق. ثم أجرِ بروتوكول أصالة دليل العود على عينة: الفحوص المرتّبة — راتنج وكثافة وحرق وديمومة رائحة وسعرٌ يُقرأ على النطاق — والأداة المخبرية الوحيدة والوثيقة البيئية الوحيدة اللتان تحملان الدليل وحدهما. والبروتوكول ليس حكمًا؛ قد يجتاز مغشّش الفحوص المادية. بل هو الأسئلة المرتّبة التي يستطيع مورد كفء أن يجيبها ويفشل عليها متهوّر. وإنجاز الخطوة الرابعة هو ما يفصل أول شراء تدافع عنه عن شراء ترجو أن يكون حسنًا.',
        ],
      },
    ],
    sourceIds: [
      'ITTO_AGARWOOD_REVIEW',
      'TRAFFIC_UAE_AGARWOOD_TRADE',
      'AGARWOOD_REVIEW_2014',
    ],
    limitations:
      "This page orients a first-timer into the four decisions and routes each to the OudGuide page that answers it. It does not itself grade a lot, set a current price, recommend a named supplier, or authenticate any material; the price range it refers to is the OudGuide observation baseline's documented range on a stated date and market, not a current average, and the check it names is the site's own ordered protocol, not a published standard. For the stringed instrument it defers to instrument retailers. Nothing here is a purchase instruction for a specific transaction.",
    limitationsAr:
      'توجه هذه الصفحة المبتدئ إلى القرارات الأربعة وترسل كل واحد منها إلى صفحة دليل العود التي تجيبه. ولا تقيّم لوطًا بنفسها، ولا تحدد سعرًا حاليًا، ولا ترشّح موردًا مسمّىً، ولا توثّق مادة؛ والنطاق الذي تشير إليه هو النطاق الموثّق من خطّ الأساس المرصود في تاريخ وسوق محدَّدين لا متوسطًا حاليًا، والفحص الذي تسمّيه هو بروتوكول الموقع المرتّب لا معيارًا منشورًا. ولأجل الآلة الوترية تحيل على متاجر الآلات. ولا شيء هنا إرشاد شراء لصفقة بعينها.',
    nextSteps: [
      'Draw the line first: which "oud" you mean',
      'Choose the form you actually need: oud wood',
      'Set a budget against the documented range',
      'Run the authenticity protocol before you pay',
    ],
    nextStepsAr: [
      'ارسم الحدود أولًا: أيّ «عود» تقصد',
      'اختر الشكل الذي تحتاجه فعلًا: خشب العود',
      'حدّد ميزانية على النطاق الموثّق',
      'أجرِ بروتوكول الأصالة قبل أن تدفع',
    ],
    related: [
      { slug: 'oud-basics/what-is-agarwood', label: 'What agarwood is' },
      { slug: 'buying/how-to-buy-oud', label: 'Which "oud" you mean, and how to buy the fragrance' },
      { slug: 'buying/choosing-oud-wood', label: 'Choosing an oud wood purchase' },
      { slug: 'quality/oud-authenticity-protocol', label: 'The OudGuide authenticity protocol' },
    ],
  }),
];
