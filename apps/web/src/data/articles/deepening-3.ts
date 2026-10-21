import type { Deepening } from './types.ts';

/**
 * The third batch of deepening sections.
 *
 * Same rule as the first two: more of the thing the guide is about, never
 * a restatement of what the page already says. Each section below opens a
 * facet the guide leaves closed — the figures a buyer cannot convert, the
 * questions a supplier cannot answer off the cuff, the risk that changes
 * hands with the route rather than with the price.
 */
export const DEEPENING_3: Record<string, Deepening> = {
  'buying/buying-bakhoor': {
    sections: [
      {
        heading: 'What the net weight of a jar does not tell you',
        headingAr: 'ما لا تخبرك به الكتلة الصافية للعبوة',
        body: [
          'The net content weight on a jar of bakhoor is the wood and the oil together, and neither part is stated on the label. The weight of the wood alone varies with the cut and the grade of the lot, so two jars of the same declared weight can carry noticeably different amounts of wood. The tare of the glass is already excluded from a net figure, so the container is not the problem. The problem is that one number covers two materials, and the weight of the wood cannot be recovered from it.',
          'That leaves the buyer with a figure that cannot be reduced to anything useful. It establishes how much material is arriving and nothing about what is in it. Where a listing states a weight and a proportion of oil, treat the proportion as the supplier’s assertion and ask what it was measured against.',
          'The question that does the work is aimed at the material rather than at the jar: how much oil was used per weight of chips, and over which batch. A supplier who can give that figure has a process behind the jar. One who cannot is describing a result, and results do not compare.',
        ],
        bodyAr: [
          'الكتلة الصافية للمحتوى في عبوة البخور هي الخشب والزيت معاً، ولا يُذكر أيٌّ منهما على حدة. فوزن الخشب وحده يختلف باختلاف طريقة القطع ودرجة اللوط، فتعبوتان بالوزن نفسه قد تحملان قدرين مختلفين من الخشب. وقد استُثني وزن العبوة الزجاجية من الرقم الصافي أصلاً، فليس الوعاء هو المشكلة؛ المشكلة أن رقماً واحداً يغطي مادتين، وأن وزن الخشب لا يُسترجع منه.',
          'وهكذا يبقى المشتري مع رقم لا يُختزل في شيء مفيد. فهو يثبت كم من مادة سيصل، لا ما فيها. وحيث يذكر إعلانٌ وزناً ونسبة زيت، فليُعامل هذه النسبة بوصفها قول المورد، ويُسأل: على أي أساس قِيست؟',
          'والسؤال الذي ينفع هو السؤال الموجَّه إلى المادة لا إلى العبوة: كم من الزيت استُعمل لكل وزن من الرقائق، وفي أي دفعة. ومن يستطيع إعطاء هذا الرقم لديه عملية خلف العبوة. ومن لا يستطيع يصف نتيجة، والنتائج لا تُقارن.',
        ],
      },
      {
        heading: 'The carrier changes how the material behaves',
        headingAr: 'الحامل يغيّر سلوك المادة',
        body: [
          'An accord carries different molecules from a distillation, and the difference shows up in use rather than in the jar. A bakhoor made with an accord will not develop the way one made with a distillation does, because there is nothing in it that continues to change. It also leaves the material differently when it burns, because the synthetic fraction behaves under heat in a way the resin and the heavy distillate fractions do not.',
          'This matters most when the bakhoor is bought to go into a formula rather than into a burner. A buyer working in a formula needs to know what the material is in order to build on it, and an accord is a defined chemical material that behaves predictably, while a distillation is a mixture whose behaviour has to be established before it can be used. A buyer who does not know which of the two is in the jar cannot decide which purchase they are making.',
          'The practical consequence is to state the use before the material is chosen, and to be wary of a bakhoor offered without any stated composition to a buyer who has already said what it is for.',
        ],
        bodyAr: [
          'الأوز يحمل جزيئات غير جزيئات التقطير، والفرق يظهر في الاستعمال لا في العبوة. فالبخور المعمول بأوز لا يتطور كما يتطور البخور المعمول بتقطير، لأنه لا شيء فيه يستمر في التغير. وهو كذلك يفارق المادة على نحو مختلف عند الحرق، لأن الجزء الاصطناعي يسلك تحت الحرارة غير سلوك الراتنج وأجزاء التقطير الثقيلة.',
          'وهذا أهم ما في المسألة حين يُشترى البخور ليدخل في تركيبة لا ليُحرق. فالمشتري العامل في تركيبة يحتاج أن يعرف ما المادة حتى يبني عليها، والأوز مادة كيميائية محددة تسلك سلوكاً يمكن التنبؤ به، أما التقطير فهو خليط يلزم إثبات سلوكه قبل استعماله. ومن لا يعرف أيّهما في العبوة لا يستطيع أن يقرر أيّ الشراءتين هو جارٍ.',
          'والنتيجة العملية أن يُحدَّد الغرض قبل اختيار المادة، وأن يُحذر من بخور يُعرض بلا تركيب معلن لمشتري قال قبل ذلك ما هو غرضه.',
        ],
      },
    ],
  },

  'buying/choosing-oud-oil': {
    sections: [
      {
        heading: 'What the word pure is a claim about',
        headingAr: 'ما الذي يدّعيه لفظ «خالص»',
        body: [
          'The word pure is used in this trade for two different relationships, and the distinction decides what a bottle contains. One use describes the relationship between the oil and its carrier: nothing has been added to thin it. The other describes the relationship between the oil and the tree: what proportion of the liquid is distillate from agarwood. A bottle can satisfy the first and still be a blend of agarwood distillate with other botanical distillates, and a buyer who has only asked about the carrier will believe they know more than they do.',
          'So the two questions have to be asked separately. Is anything in it that was not made from agarwood? And what proportion of the liquid is agarwood distillate? A supplier who answers only the first has answered the easy one, and the second may never have occurred to them.',
          'There is a related trap in the ageing group, and it is about where the time was spent. Age accrues in the bulk, before bottling, in whatever vessel the oil stood in. The date on the bottle is a bottling date. An oil described as aged is describing something that happened in a tank, and the storage history that goes with it is the history of that tank and not of the bottle.',
        ],
        bodyAr: [
          'يستعمل لفظ «خالص» في هذه التجارة لعلاقتين مختلفتين، والتمييز بينهما يقرر ما في القارورة. فاستعمال واحد يصف علاقة الزيت بحامله: لم يُخفَّف بشيء. والآخر يصف علاقة الزيت بالشجرة: أي نسبة من السائل هي تقطير من خشب العود. وقد تستوفي قارورة الشرط الأول وتكون مزيجاً من تقطير خشب العود بتقطيرات نباتية أخرى، ومن سأل عن الحامل وحده سيظن أنه يعرف أكثر مما يعرف.',
          'ولهذا يجب أن يُسأل كلٌّ منهما على حدة: أفيها شيء لم يُصنع من خشب العود؟ وما نسبة السائل التي هي تقطير من خشب العود؟ ومن يجيب عن الأول وحده يكون قد أجاب عن السؤال السهل، وقد لا يكون الثاني خطر ببالأصل.',
          'وفي مجموعة التعتيق فخّ قريب، وموضوعه أين قضى الوقت. فالتعتيق يتراكم في الكمية الكبيرة قبل التعبئة، في أي إناء كان الزيت فيه. وتاريخ القارورة تاريخ تعبئة. فالزيت الموصوف بأنه معتّق يصف شيئاً جرى في خزان، وتاريخ التخزين المرافق له تاريخ ذلك الخزان لا تاريخ القارورة.',
        ],
      },
      {
        heading: 'Write the four groups into a specification you can send out',
        headingAr: 'اكتب المجموعات الأربع في مواصفة ترسلها',
        body: [
          'The four groups are worth writing down as a specification rather than leaving as a list of questions, because that is the form in which answers from different suppliers can be set beside each other. Species, form, carrier and proportion, method, distillation date, storage, batch reference, and price on a stated basis: a buyer who sends the same eight lines to each supplier gets answers that can be compared, and a supplier who cannot complete the sheet has shown something by the empty field.',
          'Keep the sheet with the quotation, and keep the completed version with the material when it arrives. The point of writing the answers down is not tidiness. It is that a record made before the purchase is the only one that cannot be shaped afterwards by what turned up.',
        ],
        bodyAr: [
          'المجموعات الأربع تستحق أن تُكتب مواصفةً لا أن تبقى قائمة أسئلة، لأن تلك هي الصورة التي يمكن أن تُوضَع بها إجابات الموردين جنباً إلى جنب. النوع، والشكل، والحامل ونسبته، والطريقة، وتاريخ التقطير، والتخزين، ومرجع الدفعة، والسعر على أساس معلوم: ومن أرسل الأسطر نفسها إلى كل مورد يحصل على إجابات قابلة للمقارنة، ومن لم يستطع إكمال الورقة فقد بيّن شيئاً بالحقل الفارغ.',
          'واحتفظ بالورقة مع عرض السعر، واحتفظ بنسختها المكتملة مع المادة عند وصولها. فالغرض من كتابة الإجابات ليس الترتيب، بل أن السجل الذي يُحرَّر قبل الشراء هو الوحيد الذي لا يمكن تشكيله بعد ذلك بحسب ما وصل.',
        ],
      },
    ],
  },

  'buying/choosing-oud-wood': {
    sections: [
      {
        heading: 'The form of delivery is part of the specification',
        headingAr: 'شكل التسليم جزء من المواصفة',
        body: [
          'A lot described by weight can arrive in several forms, and the forms are not interchangeable. Chips go into a still. Blocks and larger pieces go into a burner, or onto a shelf as an object. A buyer who has not settled which of the three uses applies has not finished the specification, because the same word — the same wood at the same price — is being asked for in a shape that decides what can be done with it.',
          'The form also decides what the seller can reasonably charge for and what the buyer should expect on arrival. A supplier who cuts to order can price the cutting; one who sells whatever is in the sack cannot. Ask which of the two it is, and ask whether the quoted weight is the weight before or after cutting, because dust and offcuts are part of the arithmetic and are usually not returned to the buyer.',
          'Dust is worth mentioning on its own. A lot bought as chips and delivered partly as fine powder has lost weight the buyer has paid for, and a fine fraction burns and distils differently from the chips it came from.',
        ],
        bodyAr: [
          'اللوط الذي يوصف بالوزن يمكن أن يأتي بأشكال متعددة، والأشكال ليست قابلة للتبادل. فالرقائق تذهب إلى المقطّر، والكتل والقطع الأكبر تذهب إلى المحرقة أو إلى الرف كقطعة. ومن لم يحسم أيّ هذه الاستعمالات الثلاثة لم يكمل المواصفة، لأن الخشب نفسه بالسعر نفسه يُطلب بشكل يقرر ما يمكن أن يُعمل به.',
          'والشكل يقرر أيضاً ما الذي يمكن للمورد أن يطالب به بشكل معقول، وما الذي ينبغي للمشتري أن يتوقعه عند الوصول. فمن يقطع حسب الطلب يستطيع تسعير القطع، ومن يبيع ما في الكيس لا يستطيع. فاسأل أيّهما هو، واسأل هل الوزن المعروض هو وزن المادة قبل القطع أم بعده، فالغبار والمخلَّفات جزء من الحساب، ولا تُعاد عادةً إلى المشتري.',
          'والغبار يستحق أن يُذكر وحده. فاللوط المشترى رقائق ووصل منه جزء غبار ناعم قد يفقد المشتري وزناً دفع ثمنه، والجزء الناعم يحترق على نحو مختلف ويُقطَّر على نحو مختلف عن الرقائق التي جاء منها.',
        ],
      },
      {
        heading: 'Wood moves after it is bought',
        headingAr: 'الخشب يتحرك بعد شرائه',
        body: [
          'Resinous wood is not a fixed quantity between the mill and the burner. It loses weight as it dries, and it takes up moisture again if it is stored in damp air, and both movements change the weight that was paid for and the behaviour of the material when it is used. The weight on the invoice is the weight at one moment, in one place, and the moment matters.',
          'This is not a reason to refuse to buy wood. It is a reason to settle two things in order: what the weight was measured against, and how the material is to be stored until it is used. A buyer who has not asked the second question is buying a material whose condition is being decided by the season and by the packing rather than by anyone involved in the sale.',
          'And when two lots of the same species are described in the same terms, the honest comparison is between the two descriptions and the sample each supplier offers, not between the descriptions alone. Where no sample is available, the buyer is buying a category rather than a lot, and should price and record it that way.',
        ],
        bodyAr: [
          'الخشب الراتنجي ليس كمية ثابتة بين المطحنة والمحرقة. فهو يفقد وزناً وهو يجفّ، ويكتسب رطوبة ثانية إن حُفظ في الهواء الرطب، وكلا الحركتين يغيّران الوزن المدفوع وسلوك المادة عند الاستعمال. فالوزن في الفاتورة هو الوزن في لحظة واحدة، في مكان واحد، واللحظة مهمة.',
          'وهذا ليس سبباً للامتناع عن شراء الخشب، بل سبب لترتيب أمرين: ما الذي قيس الوزن على أساسه، وكيف تُحفظ المادة حتى تُستعمل. فمن لم يسأل السؤال الثاني يشتري مادةً حالتها يقررها الفصل وأحوال التعبئة، لا أحد له شأن بالبيع.',
          'وعند توصيف لوطَين من النوع نفسه بالعبارات نفسها، تكون المقارنة الصادقة بين الوصفين وبين العيّنة التي يقدّمها كل مورد، لا بين الوصفين وحدهما. وحيث لا عيّنة متاحة، فالمشتري يشتري فئة لا لوطاً، ينبغي أن يُسعَّر بها ويُسجَّل على هذا الأساس.',
        ],
      },
    ],
  },

  'buying/comparing-oud-oil-offers': {
    sections: [
      {
        heading: 'Hold the quantity fixed before you compare anything',
        headingAr: 'ثبّت الكمية قبل أن تقارن أي شيء',
        body: [
          'Two offers can be expressed in the same unit and still be about different amounts of money spent on different amounts of oil. The unit is the last thing to settle, not the first, because it is the field that decides how the rest of the sheet is filled in. Settle the quantity the buyer actually needs first — in one unit, on one basis — and then ask each supplier to price that quantity. An offer that arrives as a unit price at a quantity the buyer has not chosen is a price for somebody else’s order.',
          'The same applies to time. A quotation carries a date, and a price held for a period and a price that moves with the market are different instruments even when the number is identical on the day it is read. Two quotations of different ages are not two prices; they are one price and a guess about the other. Ask each supplier how long the price stands and what it is held against.',
          'Then the currency. Comparing a quotation in one currency with a quotation in another, without a stated rate and a date for that rate, produces a number that looks like a comparison and is not one. It is cheap to settle, and until it is settled the two figures should not sit in the same column.',
        ],
        bodyAr: [
          'قد يُعبَّر عن عرضين بالوحدة نفسها ويكونان مع ذلك على قدرين مختلفين من المال تنفقان على كميتين مختلفتين من الزيت. والوحدة آخر ما يُحسم لا أوله، لأنها الحقل الذي يقرر به تُملأ بقية الورقة. فثبّت الكمية التي يحتاجها المشتري فعلاً أولاً — بوحدة واحدة، وعلى أساس واحد — ثم اطلب من كل مورد أن يسعّر تلك الكمية. والعرض الذي يصل سعراً للوحدة عند كمية لم يخترها المشتري هو سعر طلب شخص آخر.',
          'وينطبق الشيء نفسه على الوقت. فعرض السعر يحمل تاريخاً، والسعر المحفوظ لفترة والسعر الذي يتحرك مع السوق أداتان مختلفتان حتى لو كان الرقم واحداً في يوم قراءته. وعرضان بتاريخين مختلفين ليسا سعرين، بل سعر وتخمين عن الآخر. فاسأل كل مورد كم يحفظ السعر وما الذي يُحفظ عليه.',
          'ثم العملة. فمقارنة عرض بعملة وعرض بعملة أخرى، دون سعر صرف معلوم وتاريخ له، تنتج رقماً يبدو مقارنة وليس كذلك. وهي مسألة تُحسم بسهولة، وإلى أن تُحسم فلا يوضع الرقمان في العمود نفسه.',
        ],
      },
      {
        heading: 'Grade the gaps by what they will cost',
        headingAr: 'رتّب الفجوات بحسب ما ستكلّفك',
        body: [
          'A field that cannot be filled in is a finding, but not all findings are the same size, and a buyer who treats them all as fatal ends by discarding the one offer worth having. The useful question is what the empty field would have settled if it had been filled. A missing batch reference does not change what is in the bottle; it changes whether a delivery can be matched to a sample later. A missing statement of proportion does change what is in the bottle, and it changes the price.',
          'So the empty fields fall into two groups: fields that affect the material, and fields that affect the paperwork. The first group makes an offer unpriceable, because the quantity of actual oil is unknown and the price per unit of actual oil cannot be computed. The second group makes an offer comparable with difficulty, and the comparison has to carry that difficulty forward rather than leave it at the supplier’s door.',
          'The way to handle it is to write the finding into the comparison itself. A column for what was not stated, with the consequence attached, keeps a gap visible through the whole exercise. An offer with two gaps in the material fields and one in the paperwork is a different proposition from an offer with a single gap in the paperwork, and only one of the two can be priced at all.',
        ],
        bodyAr: [
          'الحقل الذي لا يمكن ملؤه نتيجة، لكن النتائج ليست كلها بالحجم نفسه، ومن يتعامل معها كلها على أنها قاطعة ينتهي إلى طرح العرض الوحيد الذي يستحق. والسؤال النافع: ما الذي كان الحقل الفارغ سيحسمه لو امتلأ؟ فمرجع الدفعة الغائب لا يغيّر ما في القارورة، بل يغيّر هل يمكن مطابقة التسليم بعيّنة لاحقاً. وبيان نسبة الزيت الغائب يغيّر ما في القارورة، ويغيّر السعر.',
          'فتنقسم الحقول الفارغة إلى مجموعتين: حقول تؤثر في المادة، وحقول تؤثر في الأوراق. والمجموعة الأولى تجعل العرض غير قابل للتسعير، إذ تُجهَل كمية الزيت الفعلية ولا يمكن حساب السعر لكل وحدة منه. والمجموعة الثانية تجعل العرض صعب المقارنة، ويصبح على المقارنة أن تحمل هذه الصعوبة معها لا أن تتركها عند باب المورد.',
          'والمعالجة أن يُكتب هذا في المقارنة نفسها. فعمود لما لم يُذكر، ودلالته مذكورة معه، يبقي الفجوة ظاهرة طوال العمل. والعرض الذي فيه فجوتان في حقول المادة وواحدة في الأوراق أمر غير العرض الذي فيه فجوة واحدة في الأوراق، ولا يصح تسعير إلا واحد منهما.',
        ],
      },
    ],
  },

  'buying/evaluating-an-offer': {
    sections: [
      {
        heading: 'Run the sequence in order, and know where it stops',
        headingAr: 'نفّذ التسلسل بالترتيب، واعرف أين يتوقف',
        body: [
          'The order of the five checks is not decorative. Identity comes first because everything after it depends on it: a specification of a batch belonging to no identifiable organisation is a specification of nothing, and the batch reference in the record check means little unless the organisation holding the record can be named. Price comes last for the same reason. A price compared against a specification that has not been established is a number without a denominator.',
          'Each check has a stopping point, and it is better to decide it before the exchange begins, because the natural failure is to stop at the first uncomfortable answer and never to write anything down. The stopping point is not the point at which the seller hesitates; it is the point at which a required field cannot be filled at all. After that, the remaining checks produce information about the supplier rather than about the offer, and they are worth making, but they do not change the decision on this one.',
        ],
        bodyAr: [
          'ترتيب الفحوص الخمسة ليس زينة. فالهوية تأتي أولاً لأن كل ما بعدها متوقف عليها: فمواصفة دفعة لا تنتمي إلى منظمة معروفة ليست مواصفة شيء، ومرجع الدفعة في فحص السجل لا معنى له إلا إذا أمكن تسمية المنظمة الحاملة له. ويأتي السعر آخر الأمر للسبب نفسه. فالسعر المضروب على مواصفة لم تثبت بعد رقم بلا مقام.',
          'وكل فحص له حد يتوقف عنده، ومن الأفضل أن يُحدَّد قبل بدء الحوار، لأن الخلل الطبيعي أن يتوقف المرء عند أول جواب مقلق ولا يكتب شيئاً أبداً. وحد التوقف ليس نقطة تردد البائع، بل النقطة التي لا يمكن فيها ملء حقل مطلوب. وبعدها تُنتج الفحوص الباقية معلومات عن المورد لا عن العرض، وهي جديرة بطرحها، لكنها لا تغيّر القرار في هذا العرض.',
        ],
      },
      {
        heading: 'A clean result is a result',
        headingAr: 'النتيجة النظيفة نتيجة',
        body: [
          'A sequence of checks is not a search for reasons to reject, and treating it as one produces a decision no better than the unease it replaced. Scarcity is the ordinary reason for a good price: the material is limited, the supply is small, and a seller with the real thing will often beat a seller describing it. The checks establish what the buyer is buying; they do not establish whether the seller deserves the business.',
          'The output of the sequence is a written record, taken at the time and kept afterwards, and that record is what makes the next offer easy to compare and what protects the buyer if what arrives is not what was described. Write down what was asked, what was answered, in what form, and on what date, and note the fields that stayed empty. A record with empty fields in it is still a record. A memory is not.',
          'What the sequence cannot do is settle the question it appears to settle. It cannot establish that the material exists before it arrives, it cannot inspect what arrives, and it cannot make a delivery match a sample that was never linked to it in writing. It narrows the risk. It does not remove it.',
        ],
        bodyAr: [
          'تسلسل الفحوص ليس بحثاً عن أسباب للرفض، ومن يعامله على هذا النحو يخرج بقرار لا أفضل من القلق الذي حلّ محلّه. والندرة سبب السعر الجيد المعتاد: المادة محدودة، والتوريد قليل، ومن يملك الحق الحقيقي يتفوّق غالباً على من يصفه. فالفحوص تثبت ما الذي تشتريه، ولا تثبت استحقاق البائع للتجارة.',
          'وناتج التسلسل سجل مكتوب يُؤخذ في حينه ويُحفظ بعده، وهو ما يجعل العرض التالي سهل المقارنة، وما يحمي المشتري إن لم يكن الواصل هو الموصوف. فاكتب: ما الذي سُئل، وما الذي أُجيب، وبأي صورة، وفي أي تاريخ، وسجّل الحقول التي بقيت فارغة. والسجل الذي فيه حقول فارغة سجل، أما الذاكرة فلا.',
          'وما لا يفعله التسلسل هو حسم المسألة التي يبدو أنه يحسمها. فهو لا يثبت أن المادة موجودة قبل وصولها، ولا يفحص ما يصل، ولا يجعل تسليماً يطابق عيّنة لم تربط بينهما كتابة. هو يضيّق الخطر، لا أنه يزيله.',
        ],
      },
    ],
  },

  'buying/net-weight-and-volume': {
    sections: [
      {
        heading: 'Volume is a measurement of the container',
        headingAr: 'الحجم قياس للوعاء',
        body: [
          'A volume figure describes a container, not a quantity of oil. It is what fills the vessel to a stated mark, at a stated temperature, and oil does not fill a container in a way that has nothing to do with the container: the headspace at the neck, the meniscus at the shoulder, the space the closure takes up, and the fact that the oil was measured at a temperature other than the one at which it was filled all sit inside the gap between the two numbers.',
          'This is why the conversion needs a density, and why the density has to be stated for the material in hand. A figure taken from a general table for oils, or for a carrier rather than for the oil itself, is a figure for a different liquid. And a density quoted without a temperature is not quite a number, because density moves with temperature, and the direction of the move depends on the liquid.',
          'The same caution applies in the other direction. A mass figure is easier to check than a volume figure, because a scale can be set against a known weight and the container can be weighed empty and full. Where a supplier offers both, the mass is the one to rely on and the volume is the one to treat as a description of the packing.',
        ],
        bodyAr: [
          'رقم الحجم يصف وعاءً لا كمية زيت. فهو ما يملأ الإناء إلى علامة معلومة، وعند حرارة معلومة، والزيت لا يملأ الإناء بطريقة لا علاقة لها بالإناء: فالهواء فوق السائل في العنق، وخط السطح عند الكتف، والمساحة التي يشغلها الغطاء، وكون الزيت قد قيس عند حرارة غير حرارة التعبئة — كل ذلك يقع في الفجوة بين الرقمين.',
          'ولهذا يحتاج التحويل إلى كثافة، ولهذا يجب أن تُذكر الكثافة للموضوع المعني. والرقم المأخوذ من جدول عام للزيوت، أو للحامل بدل الزيت نفسه، هو رقم سائل آخر. والكثافة التي تُذكر دون حرارة ليست رقماً تماماً، لأن الكثافة تتحرك مع الحرارة، واتجاه الحركة يختلف بحسب السائل.',
          'وينطبق الحذر نفسه في الاتجاه الآخر. ورقم الكتلة أسهل فحصاً من رقم الحجم، لأن الميزان يمكن معايرته بوزن معلوم، ويمكن وزن الوعاء فارغاً ومملوءاً. وحيث يقدّم المورد الرقمين، فالكتلة هي ما يُعتمد عليه، والحجم وصفٌ لأسلوب التعبئة.',
        ],
      },
      {
        heading: 'Weigh what is inside, and write down when',
        headingAr: 'وزن ما في الداخل، وسجّل متى',
        body: [
          'The order of operations matters more than the accuracy of the scale. The weight that matters is the weight of the contents, at the moment the material changes hands. So: weigh the closed container and record it, open it, weigh the contents as they are, close it again, and record the times. A weight taken from a delivery note is a weight somebody else measured, and a weight taken at the moment of receipt is one the buyer can repeat.',
          'Record the scale as well as the weight. A counter scale and a calibrated balance will not agree on a small container, and the difference between them is not a fault in either; it is the reason the basis of a weight should be written next to it. Ask the supplier what they weigh on, and put the answer beside the number rather than in a separate note that will be lost.',
          'One further figure belongs on the sheet. The quantity that will be used is less than the quantity bought, because some is lost in handling and some is volatile. How much is lost depends on how the material is decanted and stored, so it belongs in the purchase as a stated allowance rather than as a surprise at the end of the run.',
        ],
        bodyAr: [
          'ترتيب العمليات أهم من دقة الميزان. فالوزن المهم هو وزن المحتوى، عند اللحظة التي تنتقل فيها المادة من يد إلى يد. فوزن الإناء المغلق وتسجيله، ثم فتحه، ثم وزن المحتوى كما هو، ثم إغلاقه، ثم تسجيل الوقت. والوزن المأخوذ من سند التسليم وزن قاسه غيرك، والوزن المأخوذ لحظة الاستلام وزن يعيده المشتري.',
          'وسجّل الميزان مع الوزن. فميزان الطاولة وفحص الدقة لا يتفقان على وعاء صغير، والفرق بينهما ليس عيباً في أيّهما؛ بل هو سبب وجوب ذكر أساس الوزن إلى جانبه. فاسأل المورد على أي ميزان يزن، واكتب الجواب إلى جانب الرقم لا في ملاحظة منفصلة تضيع.',
          'وهناك رقم آخر يستحق أن يكون على الورقة. فالكمية التي ستُستعمل أقل من الكمية المشتراة، لأن شيئاً منها يضيع في المناولة وبعضها متطاير. وقدر ما يضيع يعتمد على طريقة الصبّ والتخزين، فيُعطى في الشراء كبدل معلن لا كمفاجأة في آخر العمل.',
        ],
      },
    ],
  },

  'buying/supplier-questions': {
    sections: [
      {
        heading: 'Ask in the order the supplier knows best',
        headingAr: 'اسأل بالترتيب الذي يعرفه المورد',
        body: [
          'The order of the questions changes the quality of the answers. A supplier can name their species and their origins without stopping to think, and the answers come back cleanly. The same supplier asked about a batch record in the first exchange may give a shorter answer than they would have given at the end of the conversation. So start with the questions they know cold, and let the harder ones come later, when the relationship has a little substance in it.',
          'Frame them as what the supplier does rather than what they claim. How do you identify a batch asks for a method. Are your batches traceable asks for a judgement, and a judgement invites an answer in adjectives. The first question has a checkable answer and the second does not, which is the whole difference.',
        ],
        bodyAr: [
          'ترتيب الأسئلة يغيّر جودة الإجابات. فأشياع المورد ونوعه يستطيع أن يذكرهما من غير تردد، فتأتي الإجابة نظيفة. ونفس المورد إن سُئل عن سجل الدفعة في أول حوار قد يعطي إجابة أقصر مما كان يعطيها في أواخره. فابدأ بالأسئلة التي يعرفها عن ظهر قلب، ودع الأصعب منها تأتي متأخرة، حين يكون بين الطرفين قدر من العلاقة.',
          'وصُغ الأسئلة بحيث تطلب ما يفعله المورد لا ما يدّعيه. فسؤال «كيف تعرّفون الدفعة؟» يسأل عن طريقة، وسؤال «هل دفعاتكم قابلة للتتبع؟» يسأل عن تقدير، والتقدير يستدعي جواباً بالصفات. والسؤال الأول له جواب قابل للفحص والثاني لا جواب له، وهذا هو الفرق كله.',
        ],
      },
      {
        heading: 'The answer you want when they do not know',
        headingAr: 'الجواب الذي تريده حين لا يعرف',
        body: [
          'The most useful reply to a question the supplier cannot answer is that they will find out and come back, with a date attached. Not an invented answer, not a deflection back to the price, and not a confident guess dressed as a fact. A supplier who supplies an invented figure has told you something important about everything else they say, and the figure will not be the part you check.',
          'Keep the answers together, with the date and the name of the person who gave them. People leave, businesses reorganise, and an answer given by someone who has since left carries very little. The record of the exchange is also what lets a buyer come back to a supplier with a question rather than an accusation, which is a better position to be in than the other one.',
          'And ask these questions before the price is quoted rather than after. A question before the order costs something; a question after it costs a relationship.',
        ],
        bodyAr: [
          'أنفع جواب للسؤال الذي لا يعرف المورد إجابته هو أنه سيتحقق ويعود، بتاريخ. لا جواباً مخترعاً، ولا تحويلياً إلى السعر، ولا تخميناً واثقاً مسوخاً في صورة واقعة. ومن يقدّم رقماً مخترعاً فقد أخبرك بشيء مهم عن كل ما يقوله غيره، ولن يكون هذا الرقم هو الجزء الذي تفحصه.',
          'واجمع الإجابات في مكان واحد، مع التاريخ واسم من أعطى الإجابة. فالناس يتركون العمل، والمنشآت تُعيد تنظيمها، والإجابة التي أعطاها من ترك العمل تحمل وزناً قليلاً. وسجل الحوار هو أيضاً ما يتيح للمشتري العودة إلى المورد بسؤال لا بتهمة، وهذا موقف خير من المقابل.',
          'وأسأل هذه الأسئلة قبل طلب السعر لا بعده. فالسؤال قبل الطلب يكلّف شيئاً، والسؤال بعده يكلّف علاقة.',
        ],
      },
    ],
  },

  'buying/wholesale-versus-retail': {
    sections: [
      {
        heading: 'Ask the same seller for both prices',
        headingAr: 'اسأل البائع نفسه عن السعرين',
        body: [
          'The way to find the crossover is to ask the same business for both. Plenty of suppliers quote a retail price and a wholesale price for the same bottle, and the difference between the two is usually not the material but the packaging, the documentation and the handling. A retail quote and a wholesale quote from the same seller, for the same quantity, on the same date, is a usable comparison in a way that two quotes from different sellers never are.',
          'It also settles a question that otherwise stays open: whether the price advantage at volume is a function of the quantity or a function of the relationship. A seller who quotes both has a price structure the buyer can see. A seller who quotes one has a number, and the number is the whole of what is on offer.',
          'Where a wholesaler buys from a retailer rather than from the producer, the wholesale price contains the retail margin without adding the retail record. That is the case worth examining closely, and it is why the documentation question and the price question cannot be settled apart.',
        ],
        bodyAr: [
          'طريق معرفة نقطة التقاطع أن تطلب من البائع نفسه سعرين. فكثير من الموردين يذكرون سعر تجزئة وسعر جملة للقارورة نفسها، والفرق بينهما غالباً ليس المادة بل التغليف والتوثيق والمناولة. وعرضان من البائع نفسه، للكمية نفسها، في اليوم نفسه، مقارنة نافعة في كل ما لا تكون فيه عرضان من بائعين مختلفين كذلك.',
          'وهذا يحسم أيضاً سؤالاً يبقى معلقاً بغيره: أهو أثر الكمية أم أثر العلاقة. ومن يذكر السعرين لديه بنية أسعار يراها المشتري. ومن يذكر واحداً لديه رقم، والرقم هو كل ما عُرض.',
          'وحيث يشتري الجملة من التجزئة لا من المنتج، فإن سعر الجملة يشمل هامش التجزئة بلا أن يضيف سجلها. وهذه هي الحالة التي تستحق النظر عن قرب، وهي سبب أن لا يحسم سؤال التوثيق وسؤال السعر معاً.',
        ],
      },
      {
        heading: 'The reseller problem, and where the risk sits',
        headingAr: 'مشكلة الوسيط، وموقع الخطر',
        body: [
          'The difference between the two routes is also a difference in who carries the risk when something is wrong. A retail purchase is paid for before the goods are opened, and the description in the listing is what the buyer is measured against. A wholesale purchase is built around a specification and a record, so the material can be checked against a document, and the question of who pays for a return that does not match that document becomes a term of the sale rather than a matter of argument afterwards.',
          'This is why the wholesale route is described as a documented purchase rather than as a cheaper one. The record is what makes the difference enforceable, and it is also what makes the next order quick: the specification, the batch identity and the reference all exist, so the second purchase is a repetition rather than a fresh negotiation.',
          'Where a wholesaler buys through an intermediary, ask whose record it is. The batch reference may belong to the business upstream, in which case it has to travel with the goods and be asked for in writing, because an identifier that stays in another company’s system cannot be matched to a delivery on the buyer’s side.',
        ],
        bodyAr: [
          'الفرق بين المسارين فرق أيضاً فيمن يحمل الخطر عند حدوث خلل. فالشراء التجزئة يُدفع ثمنه قبل فتح السلعة، والوصف في الإعلان هو ما يُقاس به المشتري. أما الشراء بالجملة فمبني على مواصفة وسجل، فتُفحص المادة مقابل وثيقة، وسؤال من يتحمّل كلفة الرجوع الذي لا يطابق الوثيقة يصبح بنداً في البيع لا مسألة جدال بعده.',
          'ولهذا يوصف طريق الجملة بأنه شراء موثّق لا بأنه أرخص. فالسجل هو ما يجعل الفرق قابلاً للإلزام عند الخلاف، وهو أيضاً ما يجعل الطلب التالي سريعاً: المواصفة وهوية الدفعة والمرجع كلها موجودة، فالطلب الثاني تكرار لا مفاوضات جديدة.',
          'وحيث يشتري الجملة عبر وسيط، فاسأل: سجل من هذا؟ فقد يكون مرجع الدفعة ملك الشركة الأعلى، فيلزم أن يسافر مع البضاعة وأن يُطلب كتابةً، لأن المعرّف الذي يبقى في نظام شركة أخرى لا يمكن مطابقته بتسليم عند المشتري.',
        ],
      },
    ],
  },
};
