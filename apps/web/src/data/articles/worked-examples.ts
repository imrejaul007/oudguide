import type { WorkedExample } from './types.ts';

/**
 * Worked examples.
 *
 * The route manifest's `required_sections` for an Editorial guide
 * includes "worked hypothetical example" for 40 of the 41 editorial
 * guide routes. A guide that explains a method has to show the method
 * being applied, or the reader has to reconstruct it themselves.
 *
 * Every example here is hypothetical and says so in its own text. An
 * example that presented invented specifics as a real transaction would
 * be the same fabrication the audit found, so the buyer, the lot and
 * the supplier in each example are named as invented.
 */
export const WORKED_EXAMPLES: Record<string, WorkedExample> = {
  'sourcing/wholesale-sample-plan': {
    situation:
      'A hypothetical buyer has six suppliers and a budget for a small number of samples, and needs a plan before any money moves.',
    situationAr:
      'مشترٍ افتراضي لديه ستة موردين وميزانية لعدد صغير من العينات، ويحتاج خطة قبل تحويل أي مبلغ.',
    steps: [
      'The buyer defines the set before asking for it: one sample per supplier, in one specified format, in a specified quantity, so that every supplier is offering the same thing.',
      'The buyer labels each sample with their own identifier, the supplier, the material, the date and any batch reference, and photographs the label before it is sealed.',
      'The buyer assesses all the samples on one day, in one order, by one person, scoring the same attributes on a fixed scale, and writes each score down as it is given.',
      'The buyer agrees the acceptable variation in writing — what may differ between the sample and the delivery, and by how much — before ordering anything.',
      'The buyer asks each supplier to confirm in writing that the bulk will come from the sampled batch, and accepts only a stated batch link, not a verbal assurance.',
    ],
    stepsAr: [
      'يحدّد المشتري المجموعة قبل أن يطلبها: عيّنة واحدة لكل مورد، في شكل واحد محدّد، وبكمية محددة، ليقدّم كل مورد الشيء نفسه.',
      'يوسم كل عيّنة بمعرّفه هو واسم المورد والمادة والتاريخ ومرجع الدفعة إن وُجد، ويصوّر الملصق قبل ختمه.',
      'يقيّم المشتري كل العينات في يوم واحد وبترتيب واحد وبشخص واحد، على مقياس ثابت للصفات نفسها، ويكتب كل درجة عند إعطائها.',
      'يتفق المشتري كتابةً على النسبة المقبولة من الاختلاف — ما يجوز أن يختلف بين العيّنة والتسليم وبمقدار كم — قبل أن يطلب أي شيء.',
      'يطلب من كل مورد تأكيداً كتابةً بأن الجملة ستأتي من الدفعة التي عيّنها، ولا يقبل إلا صلة بدفعة مذكورة، لا تأكيداً شفهياً.',
    ],
    takeaway:
      'The example is the whole plan in five steps, and the order matters: the set is defined before it is solicited, the labels are made before the samples are sealed, the comparison is one method on one day, the tolerance is agreed before the order, and the batch link is obtained in writing rather than assumed. Skip any one of those and the sample set stops being evidence.',
    takeawayAr:
      'المثال هو الخطة كلها في خمس خطوات، والترتيب مهم: تُحدَّد المجموعة قبل طلبها، وتُصنع الملصقات قبل ختم العينات، وتُجرى المقارنة بطريقة واحدة في يوم واحد، ويُتَّفق على التفاوت قبل الطلب، وتُحصل صلة الدفعة كتابةً لا افتراضاً. وتخطّي أي منها يجعل مجموعة العينات تفقد صفتها كدليل.',
  },

  'quality/seller-defined-super-grades': {
    situation:
      'A hypothetical buyer is comparing two lots, both sold as Triple Super, from two suppliers. The question is whether the labels let them compare anything.',
    situationAr:
      'مشترٍ افتراضي يقارن لوطَين، كلاهما معروض بوصفه «تريبل سوبر»، من موردَين. والسؤال: هل تتيح التسميات لهما مقارنة أي شيء؟',
    steps: [
      'The buyer asks each supplier what the label denotes, and writes the answers down separately rather than comparing the words on the listing.',
      'One supplier answers that it means the lot has passed their own assessment against a stated criteria. The other answers that it means the oil was distilled from chips they rate at their top.',
      'The buyer asks each of them what those criteria are, in writing, and finds that the first has a written scale and the second has a judgement.',
      'The buyer therefore stops comparing the labels and compares the lots directly, by taking a sample from each and assessing both on the same day, by the same person, on the same attributes.',
      'The buyer records which lots differ on resin distribution and on scent after a fixed burn time, and keeps the suppliers’ own answers attached to the notes.',
    ],
    stepsAr: [
      'يسأل المشتري كل مورد عمّا تعني التسمية، ويكتب الإجابتين منفصلتين بدل مقارنة الكلمتين في الإعلان.',
      'أحد الموردين يجيب بأنها تعني أن اللوط اجتاز تقييمه وفق معايير مذكورة، والآخر يجيب بأنها تعني أن الزيت قُطّر من رقائق يصنّفها في مرتبته الأولى.',
      'يسأل المشتري كلاًّ منهما كتابةً عمّا هي هذه المعايير، فيجد أن لدى الأول ميزاناً مكتوباً ولدى الثاني تقديراً.',
      'فيتوقف المشتري عن مقارنة التسميات ويقارن اللوطَين مباشرةً، بأخذ عيّنة من كل منهما وتقييمهما في اليوم نفسه وبنفس الشخص وبنفس الصفات.',
      'يسجّل أي اللوطَين يختلف في انتشار الراتنج وفي الرائحة بعد زمن احتراق ثابت، ويحتفظ بإجابات الموردَين مرفقة بالملاحظات.',
    ],
    takeaway:
      'The labels turned out to be comparable in wording and incomparable in meaning, which is why the buyer compared the material rather than the names. The example shows a method, not a verdict: it does not establish that either lot is good, and it does not say which supplier is more reliable — only that a label without a stated standard cannot carry that comparison.',
    takeawayAr:
      'تبيّن أن التسميتين متطابقتان في اللفظ ومختلفتان في المعنى، ولهذا قارن المشتري المادة لا الاسمين. والمثال يبيّن طريقة لا حكماً: فهو لا يثبت أن أي لوط جيد، ولا يقول أي الموردَين أكثر موثوقية — بل يقول فقط إن تسمية بلا معيار معلن لا تصلح أن تحمل هذه المقارنة.',
  },

  'quality/sinking-claims': {
    situation:
      'A hypothetical buyer has been shown a piece that sinks, and has been told it is premium sinking-grade agarwood. The piece is on the table.',
    situationAr:
      'عُرض على مشترٍ افتراضي قطعة تغرق في الماء، وقيل له إنها خشب عود غطاس ممتاز. والقطعة على الطاولة.',
    steps: [
      'The buyer puts the piece in water and confirms it sinks, and records that it did.',
      'The buyer then weighs the piece and compares its weight with the weight of an unresinated piece of the same species and size that the supplier has shown.',
      'The difference is far larger than resin alone accounts for, and the buyer asks the supplier about how the piece was treated before it was offered.',
      'The supplier mentions impregnation and provides a batch record with the treatment stated on it.',
      'The buyer records the sinking result as a true observation and the treatment as a disclosed fact, and declines to treat the density as a quality figure.',
    ],
    stepsAr: [
      'يضع المشتري القطعة في الماء ويؤكد أنها تغرق، ويسجل أنها غرقت.',
      'ثم يزنها ويقارن وزنها بوزن قطعة غير محتوِ من النوع والحجم نفسيهما التي عرضها المورد.',
      'الفرق أكبر بكثير مما يفسّره الراتنج وحده، فيسأل المورد عن المعالجة التي حُصلت عليها القطعة قبل عرضها.',
      'يذكر المورد النقع، ويقدّم سجل دفعة مذكوراً فيه المعالجة.',
      'يسجّل المشتري نتيجة الغطاس بوصفها ملاحظة صحيحة، والمعالجة بوصفها واقعة مُعلَنة، ويمتنع عن اعتبار الكثافة رقماً للجودة.',
    ],
    takeaway:
      'Every step here is something a buyer can do at the table. The example does not conclude that the piece was fraudulent — impregnation is lawful and disclosed — and it does not produce a quality grade. It shows what the sinking test actually settles, and what has to be asked alongside it.',
    takeawayAr:
      'كل خطوة هنا يستطيع المشتري تنفيذها على الطاولة. والمثال لا يستنتج أن القطعة كانت مزيفة — فالنقع مشروع ومُعلَن — ولا ينتج درجة جودة، بل يبيّن ما يُثبته اختبار الغطاس فعلاً، وما يجب سؤاله معه.',
  },

  'quality/age-claims': {
    situation:
      'A hypothetical listing describes a lot as "80 years old". The buyer wants to know what that number refers to and what it is worth.',
    situationAr:
      'يصف إعلان افتراضي لوطاً بأنه «عمره 80 سنة». والمشتري يريد أن يعرف أيّ هذه الأرقام يُقصد وكم يساوي.',
    steps: [
      'The buyer asks which of the four ages is meant: the tree, the wound, the resin formation, or the time since distillation.',
      'The seller says it refers to the age of the tree the wood came from.',
      'The buyer asks what record supports the tree age, and whether the distillation date is known instead.',
      'The seller confirms a distillation date and no tree-age record, and the buyer uses the distillation date because it is documented and because it bears on how the oil will have developed.',
      'The buyer records the "80 years" claim in the file as a seller statement about the tree, with no supporting record, and the distillation date as the documented fact.',
    ],
    stepsAr: [
      'يسأل المشتري أيّ الأعمار الأربعة يُقصد: عمر الشجرة، أم الجرح، أم تكوّن الراتنج، أم المدة منذ التقطير.',
      'يقول البائع إنه يعني عمر الشجرة التي جاء منها الخشب.',
      'يسأل المشتري ما السجل الذي يسند عمر الشجرة، وهل تاريخ التقطير معلوم بدل ذلك.',
      'يؤكد البائع تاريخ تقطير ولا سجل لعمر الشجرة، فيستخدم المشتري تاريخ التقطير لأنه موثّق وله صلة بكيفية تطور الزيت.',
      'يسجّل المشتري ادعاء «80 سنة» في الملف بوصفه قولاً من البائع عن الشجرة بلا سجل يسنده، ويسجّل تاريخ التقطير بوصفه الواقعة الموثّقة.',
    ],
    takeaway:
      'The example shows a four-way question that takes one sentence to ask, and it shows why the documented date is the more useful one. It does not establish that the tree was young, because nobody has shown the buyer the tree.',
    takeawayAr:
      'يُظهر المثال سؤالاً بأربعة فروع يُطرح في جملة واحدة، ويُظهر لماذا كان التاريخ الموثّق أنفع. ولا يثبت أن الشجرة كانت صغيرة، لأن أحداً لم يُرِ المشتري الشجرة.',
  },

  'quality/lab-report-reading': {
    situation:
      'A hypothetical buyer receives a chromatographic report with a supplier and considers whether it settles the question they asked.',
    situationAr:
      'يستلم مشترٍ افتراضي تقريراً كروماتوغرافياً مع مورد، ويتساءل هل يحسم التقرير السؤال الذي طرحه.',
    steps: [
      'The buyer reads what was analysed: a client-supplied sample, not a sample drawn at the works.',
      'The buyer reads the method and the detection limits, and notes that no solvent or plasticiser screen was in scope.',
      'The buyer checks what the report says about origin, and finds it says nothing.',
      'The buyer asks the supplier for the batch record that identifies the sample, and for a scope that covers the questions still open.',
      'The buyer treats the report as evidence about a sample at a point in time, and keeps the origin and the adulterant questions open.',
    ],
    stepsAr: [
      'يقرأ المشتري ما حُلِّل: عيّنة قدّمها العميل، لا عيّنة سحبت من المعمل.',
      'يقرأ الطريقة وحدود الكشف، ويلاحظ أن فحص المذيبات واللدائن لم يكن ضمن النطاق.',
      'يفحص ما يقوله التقرير عن المنشأ، فيجد أنه لا يقول شيئاً.',
      'يطلب من المورد سجل الدفعة الذي يعرّف العيّنة، ونطاقاً يغطي الأسئلة التي ما زالت مفتوحة.',
      'يتعامل المشتري مع التقرير كدليل على عيّنة في لحظة، ويُبقي سؤال المنشأ وسؤال التلاعب مفتوحين.',
    ],
    takeaway:
      'The report is genuine and it answers a narrower question than the buyer asked. The example shows how to read the scope — who sampled, by what method, what was in scope, what was silent — and it shows that a clean result for synthetic markers is not a certificate of authenticity.',
    takeawayAr:
      'التقرير صحيح، لكنه يجيب سؤالاً أضيق مما طرحه المشتري. ويُظهر المثال كيف يُقرأ النطاق — من أخذ العيّنة، وبأي طريقة، وما كان داخل النطاق وما سكت عنه — ويُظهر أن نتيجة خالية من المؤشرات الاصطناعية ليست شهادة أصالة.',
  },

  'quality/batch-records': {
    situation:
      'A hypothetical buyer has bought a lot and, a year later, wants to reorder the same material. The supplier’s paperwork is thin.',
    situationAr:
      'اشترى مشترٍ افتراضي لوطاً، وبعد سنة يريد إعادة طلب المادة نفسها. وأوراق المورد ضعيفة.',
    steps: [
      'The buyer asks for the identifier the material travelled under, the date it was produced, a description of it, and the party who handled it.',
      'The supplier can give a date and a description, but the identifier on the delivery paperwork does not appear anywhere in their system.',
      'The buyer therefore records the lot by the date and the description alone, and notes that it can be re-identified only by matching those two against the supplier’s own records.',
      'Before ordering again, the buyer asks the supplier to adopt an identifier and to record it on the delivery paperwork, and asks to see the record for the earlier lot under that identifier.',
      'The buyer keeps a copy of the record with the retained sample, so that a future comparison has something to compare against.',
    ],
    stepsAr: [
      'يطلب المشتري المعرّف الذي حملت به المادة، وتاريخ إنتاجها، ووصفها، والجهة التي تعاملت معها.',
      'يستطيع المورد إعطاء التاريخ والوصف، لكن المعرّف الوارد في أوراق التسليم لا يظهر في نظامه.',
      'فيسجّل المشتري اللوط بالتاريخ والوصف وحدهما، ويدوّن أنه لا يمكن إعادة التعرّف عليه إلا بمطابقة الاثنين بسجلات المورد.',
      'قبل إعادة الطلب يطلب من المورد اعتماد معرّف وتسجيله على أوراق التسليم، ويرى سجل اللوط السابق تحت ذلك المعرّف.',
      'يحتفظ المشتري بنسخة من السجل مع العيّنة المحتفظ بها، ليكون للمقارنة المستقبلية ما تُقارن به.',
    ],
    takeaway:
      'The example shows a batch with no identifier, which is still a real lot but is not yet a traceable one. It also shows the cheap remedy: an identifier costs the supplier nothing and is the thing that makes a reorder possible at all.',
    takeawayAr:
      'يُظهر المثال لوطاً بلا معرّف، وهو لوط حقيقي لكنه ليس بعد لوطاً قابلاً للتتبع. ويُظهر أيضاً العلاج الرخيص: المعرّف لا يكلّف المورد شيئاً، وهو ما يجعل إعادة الطلب ممكنة أصلاً.',
  },

  'quality/photo-evidence-limits': {
    situation:
      'A hypothetical buyer is comparing two lots from photographs supplied in a listing, and has to decide what the images can settle.',
    situationAr:
      'يقارن مشترٍ افتراضي لوطَين من صور موردة في إعلان، وعليه أن يقرر ما الذي يمكن للصور حسمه.',
    steps: [
      'The buyer checks the images for form: chip size, cut, and how the pieces break.',
      'The buyer checks them for condition: whether the surface is clean, cracked, or oil-saturated.',
      'The buyer notes that the images do not establish resin content, and that a photograph cannot show natural resin against applied resin.',
      'The buyer asks for a photograph taken at the moment of dispatch, with the batch label in frame, and asks for the weight of one piece to be compared with the images.',
      'The buyer treats the images as evidence of appearance and as a list of questions, and not as a substitute for a measurement or a record.',
    ],
    stepsAr: [
      'يفحص المشتري الصور من ناحية الشكل: حجم الرقائق، وطريقة القطع، وكيف تتكسر القطع.',
      'يفحصها من ناحية الحالة: هل السطح نظيف أم متشقق أم مشبع بالزيت.',
      'يلاحظ أن الصور لا تثبت نسبة الراتنج، وأن الصورة لا تُظهر راتنجاً طبيعياً من راتنج مُضاف.',
      'يطلب صورةً وقت الشحن، وبطاقة الدفعة ظاهرة فيها، ويطلب وزن قطعة واحدة ليقارنه بالصور.',
      'يتعامل مع الصور كدليل على المظهر وكقائمة أسئلة، لا كبديل عن قياس أو سجل.',
    ],
    takeaway:
      'The example ends with the buyer knowing more than before and still not able to choose. That is the honest result of working from photographs: they are good for form, condition and comparison, and they settle none of the quantitative questions.',
    takeawayAr:
      'ينتهي المثال ومشتري يعرف أكثر مما كان يعرف ومع ذلك لا يستطيع أن يختار. وهذه هي النتيجة الصادقة للعمل بالصور: فهي جيدة للشكل والحالة والمقارنة، ولا تحسم أي سؤال كمّي.',
  },

  'buying/net-weight-and-volume': {
    situation:
      'A hypothetical buyer is comparing two quotations for oud oil, one priced per kilo and one per bottle, and both look comparable on the page.',
    situationAr:
      'يقارن مشترٍ افتراضي عرضَي سعر لدهن العود، أحدهما بالكيلو والآخر بالقارورة، ويبدوان متشابهين على الورق.',
    steps: [
      'The buyer asks both suppliers for the basis: net mass, gross mass, or volume, and the container tare.',
      'The buyer asks what the carrier is and what proportion of the liquid is actual distilled oil.',
      'The buyer converts both quotations to a comparable quantity of actual oil, and asks each supplier for the density they use when they convert.',
      'The buyer checks whether that density is stated for the specific oil and the specific carrier, or taken from a general table.',
      'The buyer compares the two on the converted basis, and records the conversion figure used so the comparison can be repeated later.',
    ],
    stepsAr: [
      'يسأل المشتري الموردَين عن الأساس: الكتلة الصافية، أم الإجمالية، أم الحجم، ووزن الوعاء.',
      'يسأل عن الحامل وعن نسبة السائل التي هي زيت مقطّر فعلي.',
      'يحوّل العرضين إلى كمية متكافئة من الزيت الفعلي، ويسأل كل مورد عن الكثافة التي يستعملها في التحويل.',
      'يتأكد إن كانت هذه الكثافة مذكورة لهذا الزيت وهذا الحامل بعينهما، أم مأخوذة من جدول عام.',
      'يقارن على الأساس المحوَّل، ويسجّل رقم التحويل المستعمل حتى تتاح إعادة المقارنة لاحقاً.',
    ],
    takeaway:
      'The two quotations were never comparable, and the page made them look comparable. The example shows the three questions that make them comparable — basis, carrier, and whose density — and it shows that the conversion figure is itself something to record rather than accept.',
    takeawayAr:
      'لم يكن العرضان قابلين للمقارنة أبداً، لكن الصفحة جعلتهما يبدو كذلك. ويُظهر المثال الأسئلة الثلاثة التي تجعلهما قابلين للمقارنة — الأساس، والحامل، وكثافة مَن — ويُظهر أن رقم التحويل نفسه شيء يُسجَّل لا شيء يُقبَل.',
  },

  'buying/buying-bakhoor': {
    situation:
      'A hypothetical buyer is buying bakhoor and wants to know what is actually in the jar rather than what the listing calls it.',
    situationAr:
      'يشتري مشترٍ افتراضي بخوراً، ويريد أن يعرف ما في العبوة فعلاً لا ما يسمّيه الإعلان.',
    steps: [
      'The buyer asks whether the oil used is a distillation, a blend, or an accord, and in what proportion the wood was infused.',
      'The seller states that the oil is an accord and the wood is lower-grade chips, which is a complete and honest answer.',
      'The buyer checks the response by breaking a piece: bakhoor made with an even oil smells evenly across the fresh break, and a piece that smells strongly at the surface and faintly inside was soaked after the wood was already resinous.',
      'The buyer weighs a sealed jar against the weight of its contents and compares that with the same figure from a jar using a distillation.',
      'The buyer prices the two on the basis of actual oil content rather than on the jar, and records the answer so the next purchase is compared like for like.',
    ],
    stepsAr: [
      'يسأل المشتري: هل الزيت المستعمل تقطير أم مزيج أم أوز، وما نسبة نقع الخشب.',
      'يجيب البائع بأن الزيت أوز والخشب رقائق أدنى درجة، وهي إجابة كاملة وصادقة.',
      'يتحقق المشتري من الإجابة بكسر قطعة: فالبخور المحشو بزيت متساوٍ تفوح منه الرائحة بانتظام عند الكسر الطازج، والقطعة القوية على السطح وضعيفة في الداخل غُرقت بعد أن صار الخشب راتنجياً.',
      'يزن المشتري عبوة مغلقة ويقارن وزن محتواها بالرقم نفسه من عبوة تستعمل زيتاً مقطّراً.',
      'يسعّر المشتري الكمية على أساس محتوى الزيت الفعلي لا على العبوة، ويسجّل الإجابة لتكون المقارنة القادمة مثلها.',
    ],
    takeaway:
      'The seller answered the question fully, and the answer changed the price rather than ending the enquiry. The example shows that asking what the oil is produces a usable answer, and that the honest answer and the expensive answer are not the same answer.',
    takeawayAr:
      'أجاب البائع عن السؤال بالكامل،-بلا رد والإجابة غيّرت السعر ولم تنهي الاستفسار. ويُظهر المثال أن سؤال «ما هو الزيت» يعطي إجابة قابلة للاستخدام، وأن الإجابة الصادقة والإجابة الغالية ليستا إجابة واحدة.',
  },

  'buying/wholesale-versus-retail': {
    situation:
      'A hypothetical buyer needs forty tolas of oud oil for a production run, and has been quoted a retail price and a wholesale price for the same product.',
    situationAr:
      'يحتاج مشترٍ افتراضي أربعين تولا من دهن العود لجولة إنتاج، وقد قُوبل بسعر تجزئة وسعر جملة للمنتج نفسه.',
    steps: [
      'The buyer asks what each quotation includes: the documentation, the batch identity and the comparison across suppliers.',
      'The buyer works out that the retail route gives them a product but no record, so a later reorder would have to start again.',
      'The buyer asks the wholesale supplier for the minimum order, and learns that the price quoted assumes a quantity the buyer may not need.',
      'The buyer asks whether a smaller first order is possible at the same basis, and what it would cost.',
      'The buyer splits the decision: a small retail purchase to smell the material, and a documented wholesale order for the volume, with the samples from the first feeding the second.',
    ],
    stepsAr: [
      'يسأل المشتري ما يشمله كل عرض: الوثائق، وهوية الدفعة، والمقارنة بين الموردين.',
      'يستنتج أن مسار التجزئة يعطيه منتجاً بلا سجل، فإعادة الطلب لاحقاً ستبدأ من الصفر.',
      'يسأل مورد الجملة عن حدّه الأدنى، ويعلم أن السعر المعروض يفترض كمية قد لا يحتاجها.',
      'يسأل هل طلب أول أصغر ممكن على الأساس نفسه، وكم يكلّف.',
      'يقسم القرار: شراء تجزئة صغير ليشمّ المادة، وطلب جملة موثّق للحجم، مع تغذية الطلب الثاني بالعيّنات من الأول.',
    ],
    takeaway:
      'The example separates the two routes by what they produce rather than by what they cost — a product against a documented purchase — and it shows the sensible combination: use retail to explore and wholesale to document, with the samples carried across.',
    takeawayAr:
      'يفصل المثال بين المسارين بما ينتجان لا بما يكلفان — منتج مقابل شراء موثّق — ويُظهر التركيبة المعقولة: التجزئة للاستكشاف والجملة للتوثيق، مع نقل العينات بينهما.',
  },

  'production/processing-location': {
    situation:
      'A hypothetical consignment is labelled Assam origin. The distillation, the buyer discovers later, took place in another country.',
    situationAr:
      'شحنة افتراضية موسومة بمنشأ أسام. ثم يكتشف المشتري لاحقاً أن التقطير جرى في بلد آخر.',
    steps: [
      'The buyer asks for both facts separately: where the wood grew, and where it was distilled.',
      'The seller confirms the wood is from Assam and the distillation was performed abroad, which is lawful and ordinary in cross-border trade.',
      'The buyer checks the species documentation that accompanies the consignment, because the growing country is what determines the export and import instruments.',
      'The buyer checks the analysis the importing authority receives, because the processing country is what determines the treatment the oil is given on entry.',
      'The buyer records both in the file, and stops describing the product as "Assam distilled", which is a claim about neither fact.',
    ],
    stepsAr: [
      'يسأل المشتري عن الواقعتين منفصلتين: أين نما الخشب، وأين قُطّر.',
      'يؤكد البائع أن الخشب من أسام وأن التقطير تم في الخارج، وهو أمر مشروع ومعتاد في التجارة العابرة للحدود.',
      'يفحص المشتري وثائق النوع المرافقة للشحنة، لأن بلد النمو هو ما يحدد أدوات التصدير والاستيراد.',
      'يفحص التحليل الذي تتلقاه سلطة الاستيراد، لأن بلد المعالجة هو ما يحدد المعالجة التي يُمنح بها الزيت عند الدخول.',
      'يسجّل المشتري الواقعتين في الملف، ويكف عن وصف المنتج بأنه «مقطّر في أسام»، وهو ادعاء لا يثبت أياً من الواقعتين.',
    ],
    takeaway:
      'The example shows a case where nothing is wrong and the description is still wrong. Two facts, both true, were merged into a phrase that asserts neither of them — which is how a listing ends up making a claim it cannot support.',
    takeawayAr:
      'يُظهر المثال حالة لا خطأ فيها والوصف مع ذلك خاطئ. واقعتان، كلتاهما صحيحة، ذُوبتا في عبارة لا تقرّر أياً منهما — وهكذا ينتهي الإعلان إلى ادعاء لا يستطيع إسناده.',
  },

  'trade/document-review-limits': {
    situation:
      'A hypothetical consignment arrives with a valid permit, a certificate of origin and an invoice. The buyer has to decide what the file establishes.',
    situationAr:
      'تصل شحنة افتراضية بتصريح صحيح وشهادة منشأ وفاتورة. وعلى المشتري أن يقرّر ما الذي يثبته الملف.',
    steps: [
      'The buyer checks the permit against the consignment: the species, the quantity, the origin and the date all correspond.',
      'The buyer confirms the permit is for the form in front of them — wood rather than oil, or oil rather than a finished product.',
      'The buyer reads the certificate of origin and notes that it says nothing about composition or resin content.',
      'The buyer reads the invoice and notes that it establishes a commercial agreement and says nothing about either.',
      'The buyer records the file as establishing the existence and the scope of three documents, and keeps the question of what is inside the parcel open.',
    ],
    stepsAr: [
      'يقارن المشتري التصريح بالشحنة: النوع والكمية والمنشأ والتاريخ متطابقة.',
      'يؤكد أن التصريح للشكل الموجود أمامه — خشب لا زيت، أو زيت لا منتج منتهٍ.',
      'يقرأ شهادة المنشأ ويلاحظ أنها لا تقول شيئاً عن التركيب ولا نسبة الراتنج.',
      'يقرأ الفاتورة ويلاحظ أنها تثبت اتفاقاً تجارياً ولا تقول شيئاً عن أيٍّ منهما.',
      'يسجّل الملف على أنه يثبت وجود ثلاثة وثائق ونطاق كل منها، ويُبقي سؤال محتوى الطرد مفتوحاً.',
    ],
    takeaway:
      'Every document in the file is genuine, and together they still do not answer the question the buyer actually has. The example shows the distinction that matters commercially: a document establishes what it says about the consignment, and the contents of the parcel are established separately, or not at all.',
    takeawayAr:
      'كل وثيقة في الملف صحيحة، ومع ذلك لا تجيب مجتمعةً عن السؤال الذي يحمله المشتري. ويُظهر المثال التمييز الذي يهم تجارياً: الوثيقة تثبت ما تذكره عن الشحنة، ومحتوى الطرد يُثبت على حدة أو لا يُثبت.',
  },

  'trade/shipping-wood-oil-perfume': {
    situation:
      'A hypothetical supplier ships one consignment containing three forms made from the same material, and the paperwork needs to match.',
    situationAr:
      'يشحن مورد افتراضي شحنة واحدة تحوي ثلاثة أشكال من المادة نفسها، وتحتاج الأوراق أن تطابق.',
    steps: [
      'The buyer checks each form against its own requirements: the wood against the plant-material rules, the oil against the preparation rules, the fragrance against the rules for a formulated product.',
      'The buyer finds that the species documentation covers the wood and, through it, the oil, and that it does not cover the fragrance.',
      'The buyer asks whether the fragrance contains any agarwood at all, and learns it is built on an accord.',
      'The buyer notes that a fragrance made on an accord carries no agarwood and is not in scope for the species documentation — and that this is a fact about the product, not a loophole.',
      'The buyer separates the three forms in the file and in the shipment, because they are three products with three different treatments.',
    ],
    stepsAr: [
      'يفحص المشتري كل شكل بمتطلباته: الخشب بقواعد المادة النباتية، والزيت بقواعد المستحضر، والعطر بقواعد المنتج المركّب.',
      'يجد أن وثائق النوع تغطي الخشب ومنه الزيت، ولا تغطي العطر.',
      'يسأل هل يحتوي العطر أي خشب عود، ويعلم أنه مبني على أوز.',
      'يلاحظ أن العطر المبني على أوز لا يحمل خشب عود وليس داخل نطاق وثائق النوع — وهذه واقعة عن المنتج لا ثغرة.',
      'يفصل المشتري الأشكال الثلاثة في الملف وفي الشحنة، لأنها ثلاثة منتجات بثلاثة معالجات.',
    ],
    takeaway:
      'The example shows a supplier doing nothing wrong and a buyer who would have mis-declared if they had treated the consignment as one product. The three forms travel together but do not belong together in the paperwork, and the difference is not cosmetic.',
    takeawayAr:
      'يُظهر المثال مورداً لا يخطئ ومشترياً كان سيُصرّح خطأً لو عامل الشحنة كمنتج واحد. الأشكال الثلاثة تسافر معاً لكنها لا تنتمي معاً إلى الأوراق، والفرق ليس تجميلياً.',
  },

  'sourcing/sample-to-bulk-matching': {
    situation:
      'A hypothetical buyer has approved a sample and ordered fifty kilos. The delivery arrives with a different reference on the paperwork.',
    situationAr:
      'وافق مشترٍ افتراضي على عيّنة وطلب خمسين كيلوغراماً. ووصل التسليم بمرجع مختلف على الأوراق.',
    steps: [
      'The buyer compares the reference on the delivery with the reference recorded on the sample, and they do not match.',
      'The buyer asks the supplier which of the two is the sample’s lot and whether the delivery was drawn from it.',
      'The supplier explains that the sample came from a smaller production run and the order was filled from a later run of the same material, which is a common and lawful arrangement.',
      'The buyer asks what record links the two runs, and is given a batch record for the delivery that does not reference the sample.',
      'The buyer records the delivery as unverified against the sample, and treats the order as requiring a fresh assessment rather than accepting the earlier approval.',
    ],
    stepsAr: [
      'يقارن المشتري المرجع الوارد على التسليم بالمرجع المسجّل على العيّنة، ولا يتطابقان.',
      'يسأل المورد أيّهما مرجع لوط العيّنة، وهل سُحب التسليم منه.',
      'يشرح المورد أن العيّنة جاءت من جولة إنتاج أصغر وأن الطلب عُبّئ من جولة لاحقة من المادة نفسها، وهو ترتيب مشروع وشائع.',
      'يسأل ما السجل الذي يصل بين الجولتين، ويُعطى سجل دفعة للتسليم لا يشير إلى العيّنة.',
      'يسجّل المشتري التسليم بوصفه غير محقّق مقابل العيّنة، ويعامل الطلب على أنه يحتاج تقييماً جديداً لا قبولاً للموافقة السابقة.',
    ],
    takeaway:
      'The example shows a genuine failure to trace, caused by an ordinary and lawful arrangement rather than by bad faith. The remedy is not distrust: it is asking for the link before the order, because once the material has moved, no comparison will produce it.',
    takeawayAr:
      'يُظهر المثال فشلاً حقيقياً في التتبّع، سببه ترتيب عادي ومشروع لا سوء نية. والعلاج ليس عدم الثقة: بل طلب الصلة قبل الطلب، فبعد انتقال المادة لا تُنتج المقارنةُ شيئاً.',
  },

  'sourcing/reading-a-quotation': {
    situation:
      'A hypothetical quotation arrives with a price, a quantity and a delivery window. The buyer needs to know whether it can be acted on.',
    situationAr:
      'وصل عرض سعر افتراضي بسعر وكمية وموعد تسليم. وعلى المشتري أن يعرف إن كان يمكن التصرف بناءً عليه.',
    steps: [
      'The buyer reads the specification first: the species, the form, the treatment and the concentration.',
      'The buyer finds the specification is two adjectives and a size, and asks what they are describing.',
      'The buyer reads the quantity basis and finds no unit on the price, and asks whether it is per tola, per kilo, per bottle and on what basis.',
      'The buyer reads the delivery terms and finds no reference to the batch, and asks what will identify the delivered material.',
      'The buyer asks the supplier to restate the quotation with the specification, the unit and the batch identity filled in, and does not compare it with any other quotation until they do.',
    ],
    stepsAr: [
      'يقرأ المشتري المواصفة أولاً: النوع والشكل والمعالجة والتركيز.',
      'يجد المواصفة صفتين وحجماً، فيسأل عن أي شيء تصفانه.',
      'يقرأ أساس الكمية فيجد أن السعر بلا وحدة، فيسأل هل هو لكل تولا أم لكل كيلو أم لكل قارورة وعلى أي أساس.',
      'يقرأ شروط التسليم فيجد لا إشارة إلى الدفعة، فيسأل ما الذي سيعرّف المادة المسلَّمة.',
      'يطلب من المورد إعادة كتابة العرض بالمواصفة والوحدة وهوية الدفعة مُملأة، ولا يقارنه بأي عرض آخر قبل ذلك.',
    ],
    takeaway:
      'The example stops at the point where a buyer usually stops — a price that looks actionable — and shows the three fields whose absence make it not actionable. A quotation missing its specification, its unit and its batch identity cannot be compared with anything, including another quotation.',
    takeawayAr:
      'يتوقف المثال عند النقطة التي يتوقف عندها المشتري عادةً — سعر يبدو قابلاً للتنفيذ — ويُظهر الحقول الثلاثة التي غيابها يجعله غير قابل. وعرض ينقصه المواصفة والوحدة وهوية الدفعة لا يمكن مقارنته بشيء، ولا بعرض آخر.',
  },

  'sourcing/minimum-order-quantities': {
    situation:
      'A hypothetical buyer is told the minimum order is "10 tolas", and wants to know what that number actually constrains.',
    situationAr:
      'قيل لمشترٍ افتراضي إن الحد الأدنى للطلب «عشرة تولات»، ويريد أن يعرف ما الذي يقيّده هذا الرقم فعلاً.',
    steps: [
      'The buyer asks what the minimum applies to: oil, chips, or both.',
      'The buyer learns it is the oil minimum and that the chips minimum is different, and asks for both in writing.',
      'The buyer asks what the minimum is a consequence of — a distillation batch, a packaging run, or simply the smallest order worth the shipping.',
      'The buyer asks what happens at the boundary: whether a smaller trial order is possible, and what it would cost.',
      'The buyer records the answer as a constraint rather than a negotiating position, and plans the first order against the format the minimum actually applies to.',
    ],
    stepsAr: [
      'يسأل المشتري عمّا ينطبق الحد: الزيت، أم الرقائق، أم كلاهما.',
      'يعلم أنه حدّ الزيت وأن حدّ الرقائق مختلف، فيطلب كليهما كتابةً.',
      'يسأل ما نتيجة الحد — دفعة تقطير، أم جولة تغليف، أم ببساطة أصغر طلب تستحق أجرة الشحن.',
      'يسأل ماذا يحدث عند الحد: هل طلب تجريبي أصغر ممكن، وبكم.',
      'يسجّل الإجابة كقيد لا كموقف تفاوضي، ويخطط الطلب الأول على الشكل الذي ينطبق عليه الحد فعلاً.',
    ],
    takeaway:
      'The example turns a single number into a usable constraint. The minimum was real, but it applied to a format the buyer had not asked about, and the constraint on the trial order was different from the constraint on the production order.',
    takeawayAr:
      'يحوّل المثال رقماً واحداً إلى قيد قابل للاستعمال. الحد كان حقيقياً، لكنه انطبق على شكل لم يسأل عنه المشتري، وقيد الطلب التجريبي مختلف عن قيد طلب الإنتاج.',
  },

  'sourcing/supplier-origin-destination': {
    situation:
      'A hypothetical buyer wants Cambodian-origin material delivered to the Gulf, and finds a supplier who is in neither place.',
    situationAr:
      'يريد مشترٍ افتراضي مادة من منشأ كمبودي تُسلَّم إلى الخليج، فيجد مورداً ليس في أيٍّ منهما.',
    steps: [
      'The buyer asks the three questions separately: where is the business, what origins does it handle, and which destinations does it serve.',
      'The supplier is in Dubai, handles Cambodian-origin material, and is documented to ship to the buyer’s destination.',
      'The buyer checks whether the supplier has a Cambodian production facility, and finds that it does not — it buys material and resells it.',
      'The buyer therefore treats this as a Cambodian-origin product from a Dubai-based reseller, not as a Cambodian producer, and does not read the supplier’s origin claim as a claim about where the material was made.',
      'The buyer checks the documented capability for the destination separately, including the product and the date, because that is what governs delivery rather than the origin.',
    ],
    stepsAr: [
      'يطرح المشتري الأسئلة الثلاثة منفصلة: أين المنشأة، وأي الأصول تتعامل، وإلى أي الوجهات تخدم.',
      'المورد في دبي، ويتعامل مع مادة من منشأ كمبودي، وموثّق بأنه يشحن إلى وجهة المشتري.',
      'يفحص المشتري إن كان للمورد منشأ إنتاج في كمبوديا، فيجد أنه ليس كذلك — فهو يشتري المادة ويعيد بيعها.',
      'فيتعامل مع الأمر بوصفه منتجاً من منشأ كمبودي يبيعه مورد في دبي، لا منتجاً كمبودي الإنتاج، ولا يقرأ ادعاء المنشأ كادعاء عن مكان صنع المادة.',
      'يفصل المشتري القدرة الموثّقة على التوصيل، بما فيها المنتج والتاريخ، لأنها هي التي تحكم التسليم لا المنشأ.',
    ],
    takeaway:
      'The example shows four facts a directory has to keep apart, and a buyer who could easily have read the supplier as a Cambodian producer. Every relationship here is real; only the collapse of them into one would mislead.',
    takeawayAr:
      'يُظهر المثال وقائع أربع يجب أن يبقي الدليل بينها، ومشترياً كان يمكن بسهولة أن يقرأ المورد منتجاً كمبودياً. كل علاقة هنا واقعة؛ وخداعها وحدها هي ما يضلّل.',
  },

  'sourcing/business-evidence-checklist': {
    situation:
      'A hypothetical buyer is deciding how much weight to give what a supplier has told them.',
    situationAr:
      'يقرّر مشترٍ افتراضي كم وزناً يعطي لما أخبره به مورد.',
    steps: [
      'The buyer asks whether the supplier has confirmed control of the contact address, which establishes who is speaking.',
      'The buyer asks which of the particulars have been independently checked and which are the seller’s own statement.',
      'The buyer asks whether a named document has been reviewed, and what that document establishes and what it does not.',
      'The buyer records each field with its state — owner verified, seller declared, or documentation reviewed — rather than with a single badge.',
      'The buyer treats the review state as a statement about the evidence, not about the supplier’s honesty.',
    ],
    stepsAr: [
      'يسأل المشتري هل أكد المورد التحكم في عنوان الاتصال، وهو ما يثبت من يتكلم.',
      'يسأل أيّ من البيانات فُحصت بشكل مستقل وأيّها قول المورد نفسه.',
      'يسأل هل روجعت وثيقة مسمّاة، وما الذي تثبته وما الذي لا تثبته.',
      'يسجّل كل حقل بحالته — ملكية موثقة، أو معلن من البائع، أو مراجعة مستندات — بدل شارة واحدة.',
      'يتعامل مع حالة المراجعة على أنها بيان عن الدليل، لا عن نزاهة المورد.',
    ],
    takeaway:
      'The example replaces one badge with a field-by-field record, and it shows the practical difference: a fact that has been reviewed and a fact that has merely been stated look identical on a profile and behave completely differently in a decision.',
    takeawayAr:
      'يبدّل المثال شارة واحدة بسجل لكل حقل، ويُظهر الفرق العملي: واقعة فُوجِعت وواقعة قيلت فقط يبدوان متطابقين على الملف ويتصرفان مختلف تماماً في القرار.',
  },

  'using-oud/label-and-store-samples': {
    situation:
      'A hypothetical buyer has six samples from six suppliers and needs to still know, a year later, which is which.',
    situationAr:
      'لدى مشترٍ افتراضي ست عيّنات من ستة موردين، ويحتاج بعد سنة أن يعرف أيّها أيّ.',
    steps: [
      'The buyer labels each sample with their own identifier, the supplier, the material description and the date, and keeps a duplicate of the label with the sample rather than only in a notebook.',
      'The buyer records the batch reference where there is one, and notes where there is not.',
      'The buyer stores the wood in sealed containers with the label inside the lid, and the oil in dark glass away from heat and light.',
      'The buyer keeps the samples apart from other fragrance materials, because scent migrates.',
      'The buyer writes a one-line note of their own impression at the time, because a year later that note is the only record of what they thought they were buying.',
    ],
    stepsAr: [
      'يوسم كل مشترٍ كل عيّنة بمعرّفه هو واسم المورد ووصف المادة والتاريخ، ويحتفظ بنسخة من الملصق مع العيّنة لا في دفتر وحده.',
      'يسجّل مرجع الدفعة حيث وُجد، ويدوّن أين لم يوجد.',
      'يخزّن الخشب في أوعية محكمة والملصق داخل الغطاء، والزيت في زجاج داكن بعيداً عن الحرارة والضوء.',
      'يفصل العينات عن المواد العطرية الأخرى، لأن الرائحة تنتقل.',
      'يكتب ملاحظة سطر واحد عن تقديره وقتئذ، فالملاحظة بعد سنة هي السجل الوحيد لما ظن أنه يشتري.',
    ],
    takeaway:
      'The example is mostly housekeeping, and it is the difference between a sample set that is useful next year and one that has become a box of anonymous chips. Nothing here is expensive; all of it has to happen on the day.',
    takeawayAr:
      'المثال معظمه ترتيب، وهو الفرق بين مجموعة عينات نافعة في العام القادم وبين صندوق من الرقائق بلا هوية. لا شيء هنا مكلف، وكله يجب أن يقع في اليوم نفسه.',
  },

  'using-oud/reading-product-instructions': {
    situation:
      'A hypothetical buyer has an oil with no intended-use statement, and wants to know whether that is a problem.',
    situationAr:
      'لدى مشترٍ افتراضي زيت بلا بيان استخدام مقصود، ويريد أن يعرف إن كان ذلك مشكلة.',
    steps: [
      'The buyer looks for an intended-use statement on the label, the accompanying card and the supplier’s documentation, rather than in the listing.',
      'The buyer finds none, and asks the supplier for it directly.',
      'The supplier explains that the product was formulated for a professional application and is not intended for direct skin contact, and supplies the documentation.',
      'The buyer reads what that documentation covers and what it excludes, and notes that a formulation for professional use is a limitation rather than a defect.',
      'The buyer records the limitation, and decides how the material will be used accordingly rather than assuming a general-purpose product.',
    ],
    stepsAr: [
      'يبحث المشتري عن بيان الاستخدام المقصود على الملصق والبطاقة المرافقة ووثائق المورد، لا في نص الإعلان.',
      'لا يجده، فيسأل المورد عنه مباشرةً.',
      'يشرح المورد أن المنتج مُركَّب لاستخدام مهني وليس للملامسة المباشرة بالجلد، ويقدّم الوثائق.',
      'يقرأ ما تغطيه الوثائق وما تستثنيه، ويدوّن أن التركيبة للاستخدام المهني قيد لا عيب.',
      'يسجّل القيد، ويقرّر طريقة استعمال المادة بناءً عليه بدل افتراض أنها منتج عام الغرض.',
    ],
    takeaway:
      'The example shows an absence that is easy to overlook and cheap to resolve. A missing intended-use statement is not evidence of a problem; it is a question that takes one email to answer.',
    takeawayAr:
      'يُظهر المثال غياباً سهل الإهمال ورخيص المعالجة. فغياب بيان الاستخدام المقصود ليس دليل مشكلة، بل سؤال يجيب عنه بريد واحد.',
  },

  'fragrance/concentration-labels': {
    situation:
      'A hypothetical buyer is comparing a parfum with an eau de toilette, both priced at what looks like the same rate.',
    situationAr:
      'يقارن مشترٍ افتراضي عطر بارفان بماء تويليت، وسعراهما يبدو متماثلين.',
    steps: [
      'The buyer establishes that the labels describe concentration categories, and that the categories are rough rather than fixed-percentage standards.',
      'The buyer asks what proportion of aromatic material each contains, and learns the figures are indicative.',
      'The buyer asks what the actual materials are, and whether either product contains oud oil, a blend, or an accord.',
      'The buyer notes that a well-made eau de toilette can outlast a badly made parfum, so the label cannot settle the performance question.',
      'The buyer compares the two by wearing them, and treats the concentration label as a first filter rather than a conclusion.',
    ],
    stepsAr: [
      'يقرّر المشتري أن التسميات تصف فئات التركيز وأن الفئات إرشادية لا معايير بنسب ثابتة.',
      'يسأل عن نسبة المادة العطرية في كل منهما، ويعلم أن الأرقام تقريبية.',
      'يسأل عن المواد الفعلية، وهل يحتوي أيٌّ منهما دهن عود أم مزيجاً أم Ozاً.',
      'يلاحظ أن ماء تويليت جيد الصنع قد يدوم أطول من بارفان سيئ، فالتسمية لا تحسم أداء المنتج.',
      'يقارن بين الاثنين بتجربته، ويتعامل مع التسمية كمرشّح أول لا كنتيجة.',
    ],
    takeaway:
      'The example shows the label doing the job it is good at and being unable to do a job it is not. Concentration predicts rough performance; it says nothing about the materials, the formulation or whether the oud in it is oud at all.',
    takeawayAr:
      'يُظهر مثال التسمية ما تصلح له وعجزها عن ما لا تصلح له. فالتركيز يتنبّأ بأداء تقريبي، ولا يقول شيئاً عن المواد ولا عن التركيب ولا عمّا إذا كان العود فيه عوداً أصلاً.',
  },

  'fragrance/notes-versus-ingredients': {
    situation:
      'A hypothetical buyer is told a fragrance contains oud, and wants to know what kind of oud.',
    situationAr:
      'قيل لمشترٍ افتراضي إن عطراً يحتوي عوداً، ويريد أن يعرف أيّ عود.',
    steps: [
      'The buyer asks whether the oud is a distillation, a blend of distillations, or an accord.',
      'The supplier answers that it is an accord, and provides the material data for the product.',
      'The buyer checks whether the accord contains any agarwood at all, and learns it does not.',
      'The buyer notes that the top, heart and base notes on the label describe how the composition unfolds over time, and are not an ingredient declaration.',
      'The buyer records the product as a fragrance built on an oud accord, which is a different and accurate description from one that implies agarwood.',
    ],
    stepsAr: [
      'يسأل المشتري: هل العود تقطير، أم مزيج تقطيرات، أم أوز.',
      'يجيب المورد بأنه أوز، ويقدّم بيانات المواد للمنتج.',
      'يفحص المشتري إن كان أوز نفسه يحتوي أي خشب عود، ويعلم أنه لا يحتوي.',
      'يلاحظ أن النوتات العليا والقلب والقاعدة تصف تطوّر التركيب مع الوقت، وليست بيان مكونات.',
      'يسجّل المنتج عطراً مبنياً على أوز عود، وهو وصف مختلف ودقيق عن وصف يوحي بوجود خشب عود.',
    ],
    takeaway:
      'The example resolves a question the word "oud" on a label cannot. Nothing deceptive has happened: an accord, an accord, and the note pyramid are all accurate descriptions of different things, and a buyer who wanted agarwood had to ask.',
    takeawayAr:
      'يُحسم مثال سؤالاً لا يستطيعه لفظ «عود» على ملصق. فلم يحدث تضليل: الأوز هو أوز، وهرم النوتات وصف دقيق لأشياء مختلفة، ومن أراد خشب عود كان عليه أن يسأل.',
  },

  'fragrance/oud-accords': {
    situation:
      'A hypothetical buyer is sold an oud accord at a price that would be remarkable for a distillation.',
    situationAr:
      'بِيع لمشترٍ افتراضي أوز عود بسطر يكون لافتاً لو كان تقطيراً.',
    steps: [
      'The buyer asks what the material is, and is told it is an accord made from defined chemical materials.',
      'The buyer asks for the proportion of the accord in the product, and is given a figure.',
      'The buyer asks what conformity documentation exists for the product, and learns it names the product, the supplier and the intended use.',
      'The buyer notes that an accord does not develop, age or sit on skin the way a distillation does, and that the price reflects a manufactured material rather than a scarce one.',
      'The buyer records the product accurately, and prices it against other accords rather than against distillations.',
    ],
    stepsAr: [
      'يسأل المشتري عن المادة، ويُبلَّغ أنها أوز مصنوع من مواد كيميائية محددة.',
      'يسأل عن نسبة أوز في المنتج، فيُعطى رقماً.',
      'يسأل عن وثائق المطابقة الموجودة للمنتج، فيعلم أنها تسمّي المنتج والمورد والاستخدام المقصود.',
      'يلاظ أن أوز لا يتطور ولا يتعتيق ولا يستقر على البشرة كما يفعل التقطير، وأن السعر يعكس مادة مصنوعة لا شحيحة.',
      'يسجّل المشتري المنتج بدقّة، ويسعّره مقابل أوزات أخرى لا مقابل تقطيرات.',
    ],
    takeaway:
      'The example shows an accord described accurately and priced accordingly, which is legitimate perfumery practice. What it does not permit is the description being blurred into "oud" — and the example ends with the buyer comparing like with like rather than being surprised by a distillation price.',
    takeawayAr:
      'يُظهر المثال Ozاً موصوفاً بدقّة ومسعّراً على أساسه، وهي ممارسة عطرية مشروعة. لكنه لا يسمح بتمويه الوصف إلى «عود» — وينتهي المثال بمشتري يقارن مثلاً بمثل بدل أن يفاجأ بسعر التقطير.',
  },

  'fragrance/bakhoor-versus-raw-wood': {
    situation:
      'A hypothetical buyer is buying chips to distil and receives something that smells strongly of oud.',
    situationAr:
      'يشتري مشترٍ افتراضي رقائق ليقطّرها، فيستلم شيئاً تفوح منه رائحة العود بقوة.',
    steps: [
      'The buyer breaks a piece, and notes that the scent is strong at the surface and weak inside.',
      'The buyer weighs a sealed package against the weight of the chips it holds, and finds more weight than chips of that size account for.',
      'The buyer concludes the material is bakhoor — wood already infused with oil — rather than raw resinous wood.',
      'The buyer asks whether the oil used was a distillation or an accord, and records the answer as the material that will actually be distilled.',
      'The buyer does not proceed with the distillation as planned, because bakhoor has already given up most of what raw wood would have yielded.',
    ],
    stepsAr: [
      'يكسر المشتري قطعة، ويلاحظ أن الرائحة قوية على السطح وضعيفة في الداخل.',
      'يزن عبوة مغلقة ويقارن وزنها بما يمكن أن تفسّره رقائق بهذا الحجم، فيجد وزناً أكبر.',
      'يستنتج أن المادة بخور — خشب مُشبَّع بالزيت — لا خشب خام راتنجي.',
      'يسأل هل كان الزيت المستعمل تقطيراً أم Ozاً، ويسجّل الإجابة بوصفها المادة التي ستُقطَّر فعلاً.',
      'لا يواصل التقطير كما خطّط، لأن البخور قد أعطى معظم ما كان الخشب الخام سيعطيه.',
    ],
    takeaway:
      'The example shows a material arriving as one thing and being another, caught by three cheap observations. It also shows the cost: buying bakhoor when you wanted raw wood means paying for oil you cannot distil out of it.',
    takeawayAr:
      'يُظهر مثال مادة تصل شيئاً وتكون آخر، بثلاثة اكتشافات رخيصة. ويُظهر أيضاً الكلفة: شراء البخور وأنت تريد الخشب الخام يعني دفع ثمن زيت لا تستطيع تقطيره منه.',
  },

  'fragrance/brand-and-manufacturing-origin': {
    situation:
      'A hypothetical buyer wants to know where a fragrance was made, and asks the brand.',
    situationAr:
      'يريد مشترٍ افتراضي أن يعرف أين صُنع عطر، فيسأل العلامة.',
    steps: [
      'The buyer asks for the manufacturing origin — the place where the product was compounded and filled.',
      'The brand replies that the fragrance is its own and does not name a manufacturing facility.',
      'The buyer asks for the documentation that accompanies the product, which names the manufacturer and the intended use, and which therefore answers the question the brand did not.',
      'The buyer notes that the brand and the manufacturer may be in different places, and that the relationship between them is a fact about the product rather than a marketing point.',
      'The buyer records both: who owns the name, and who made the product.',
    ],
    stepsAr: [
      'يسأل المشتري عن منشأ التصنيع — المكان الذي ركّب فيه المنتج وعُبِّئ.',
      'تجيب العلامة بأن العطر ملكها ولا تسمّي منشأة تصنيع.',
      'يطلب المشتري الوثائق المرافقة للمنتج، وهي تسمّي المصنع والاستخدام المقصود، فتجيب عن السؤال الذي لم تجب عنه العلامة.',
      'يلاحظ أن العلامة والمصنع قد يكونان في مكانين مختلفين، وأن العلاقة بينهما واقعة عن المنتج لا نقطة تسويقية.',
      'يسجّل المشتري الأمرين: من يملك الاسم، ومن صنع المنتج.',
    ],
    takeaway:
      'The example shows a question that a trademark can never answer, and the document that can. It also separates two facts that a single brand name quietly merges: who owns the name, and who made the thing.',
    takeawayAr:
      'يُظهر مثال سؤالاً لا يمكن لعلامة تجارية أن تجيب عنه، والوثيقة التي تجيب عنه. ويُظهر أيضاً واقعتين تدمجهما العلامة التجارية بصمت: من يملك الاسم، ومن صنع الشيء.',
  },

  'fragrance/perfumers-and-credits': {
    situation:
      'A hypothetical fragrance carries a credit, and the buyer wants to know what it asserts.',
    situationAr:
      'يحمل عطر افتراضي إسناداً، والمشتري يريد أن يعرف ما الذي يقرّره.',
    steps: [
      'The buyer reads who is named: an individual, a house, or several people at different stages.',
      'The buyer asks whether the credit covers the whole range or this product, and whether it survived a reformulation.',
      'The buyer asks what work the named person did, and how the credit came about.',
      'The buyer treats the credit as an acknowledgement of authorship within the industry’s conventions, and not as a statement about the materials or the process.',
      'The buyer records who is credited and on what basis, so that a reformulation which changes the credit does not pass unnoticed.',
    ],
    stepsAr: [
      'يقرأ المشتري مَن ذُكر: شخص، أم دار، أم عدة أشخاص في مراحل مختلفة.',
      'يسأل هل يشمل الإسناد الخط كله أم هذا المنتج، وهل بقي بعد إعادة الصياغة.',
      'يسأل ما العمل الذي أداه المسمّى وكيف وصل الإسناد.',
      'يتعامل مع الإسناد على أنه اعتراف بالمؤلفية ضمن أعراف الصناعة، لا بيان عن المواد أو العملية.',
      'يسجّل من ذُكر وبأي أساس، حتى لا تمر إعادة صياغة تغيّر الإسناد دون ملاحظة.',
    ],
    takeaway:
      'The example shows a credit answering a narrow question — who is acknowledged — and leaving the commercial ones open. It also shows the one thing worth watching over time: whether the credit still matches the product.',
    takeawayAr:
      'يُظهر مثال إسناداً يجيب سؤالاً ضيقاً — من يُقدَّر — ويُترك الأسئلة التجارية مفتوحة. ويُظهر أيضاً الشيء الوحيد يستحق المتابعة مع الوقت: هل لا يزال الإسناد يطابق المنتج.',
  },

  'collecting/documenting-a-collection': {
    situation:
      'A hypothetical collector inherits a cabinet of agarwood with no paperwork, and wants to know what can be established.',
    situationAr:
      'ورث جامع افتراضي خزانة من العود بلا أوراق، ويريد أن يعرف ما الذي يمكن إثباته.',
    steps: [
      'The buyer works through the collection piece by piece, recording for each one what it is, as far as that can be told.',
      'For the origin, the buyer records the degree rather than a claim: what is documented, what is remembered, and what is assumed.',
      'The buyer finds that some pieces carry a batch reference and some carry only the name of the shop they came from, and records both as they are.',
      'The buyer records what has happened to each piece since it was acquired — where it has been kept, and whether it has been treated or blended.',
      'The buyer accepts that a piece with a strong scent and no record is worth less than a modest one with a complete record, and prices the difference into any sale.',
    ],
    stepsAr: [
      'يمرّ المشتري على المجموعة قطعةً قطعة، ويسجّل لكل قطعة ما هي بالقدر الذي يمكن معرفةه.',
      'وأما المنشأ فيسجّل الدرجة لا الادعاء: ما هو موثّق، وما هو متذكَّر، وما هو مفترض.',
      'يجد أن بعض القطع تحمل مرجع دفعة وبعضها لا يحمل سوى اسم المحل الذي جاءت منه، ويسجّل الأمرين كما هما.',
      'يسجّل ما حدث لكل قطعة منذ حيازتها — أين حُفظت، وهل عولجت أو امتزجت.',
      'يقبل أن القطعة ذات الرائحة القوية بلا سجل تساوي أقل من قطعة متواضعة بسجل كامل، ويضع الفرق في أي بيع.',
    ],
    takeaway:
      'The example shows that most provenance is a chain with gaps rather than a fact, and that recording the degree of the evidence is more useful than recording a confident claim. It also shows where the value sits: in the record, not in the story.',
    takeawayAr:
      'يُظهر مثال أن معظم تثبيت المصدر سلسلة فيها ثغرات لا واقعة، وأن تسجيل درجة الدليل أنفع من تسجيل ادعاء واثق. ويُظهر أيضاً أين تجلس القيمة: في السجل، لا في الحكاية.',
  },

  'comparisons/india-and-cambodia-oud': {
    situation:
      'A hypothetical buyer has samples of two materials sold as Indian and Cambodian oud, and wants to compare them.',
    situationAr:
      'لدى مشترٍ افتراضي عيّنات من مادتين تُباعان على أنهما عود هندي وعود كمبودي، ويريد أن يقارنهما.',
    steps: [
      'The buyer establishes the species behind each label first, because the labels are trade names and the species are the facts.',
      'The buyer checks the growing region and the distillation method for each, since these differ and both bear on the character of the oil.',
      'The buyer assesses both samples on the same day, by the same person, scored on the same attributes.',
      'The buyer records the comparison, and records the origin claims separately as claims, with the basis for each noted.',
      'The buyer draws no ranking from the comparison, because a difference in character between two materials is not a judgement of which is better.',
    ],
    stepsAr: [
      'يقرّر المشتري أولاً النوع خلف كل تسمية، فالتسميات أسماء تجارية والأنواع هي الوقائع.',
      'يفحص منطقة النمو وطريقة التقطير لكل منهما، فهما يختلفان وكلاهما له صلة بطابع الزيت.',
      'يقيّم العيّنتين في اليوم نفسه وبنفس الشخص وبمقاييس نفسها.',
      'يسجّل المقارنة، ويسجّل ادعاءات المنشأ على حدة كادعاءات، مع ذكر أساس كل منها.',
      'لا يستنج ترتيباً من المقارنة، فاختلاف الطابع بين مادتين ليس حكماً بأيهما أفضل.',
    ],
    takeaway:
      'The example shows how to compare two origin claims without turning the comparison into a verdict. The two materials can be compared factually and ranked only on grounds someone has actually established.',
    takeawayAr:
      'يُظهر مثال مقارنة ادعاءي منشأ دون تحويلها إلى حكم. فالمادتان تُقارنان واقعياً، ولا تُرتّبان إلا على أسس أقامها أحد فعلاً.',
  },
};
