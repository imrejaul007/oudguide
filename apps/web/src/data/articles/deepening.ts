import type { Deepening } from './types.ts';

/**
 * The additional sections that bring a guide up to the article tier.
 *
 * The editorial runbook’s article gate is 600 words of main content
 * for a question-specific guide. Where a guide fell short, the
 * shortfall is closed with more of the thing the guide is about — the
 * distinctions a buyer actually has to make, the cases where the
 * method breaks, and the questions that follow from it — and not with
 * prose that restates what the page already says.
 *
 * Each section here is a different facet of the same question. They
 * are merged after the article’s own sections, so the reasoning comes
 * first and the worked example of it follows.
 */
export const DEEPENING: Record<string, Deepening> = {
 'oud-basics/agarwood-botanical-identity': {
 sections: [
 {
 heading: 'Why the genus matters more than the popular name',
 headingAr: 'لماذا الجنس أهم من الاسم الشائع',
 body: [
 'A buyer who asks "is this oud?" has asked a question with no useful answer, because the word covers several genera of the sandalwood family and a great many materials sold under it. The question that does discriminate is the botanical one: which species is this, and what is the regulatory position of that species in the country it is moving from.',
 'The distinction has practical consequences at every stage. It decides which documentation travels with the material, whether a permit is required and of what kind, whether the wood or the oil or a finished product is within the scope of the export instrument, and what a laboratory analysis is being asked to confirm. A buyer who works at the genus level can act on the answer; a buyer working at the "oud" level cannot.',
 'It also explains why two materials can carry the same well-known name and behave completely differently. Aquilaria crassna and Aquilaria agallocha are related trees with different chemistry, different resin chemistry and different histories in the distillation trade. Treating them as one material means treating their oils as one, and the buyer loses the ability to tell which one is in front of them.',
 ],
 bodyAr: [
 'المشتري الذي يسأل «هل هذا عود؟» طرح سؤالاً لا إجابة مفيدة له، لأن اللفظ يغطي عدة أجناس من فصيلة الصندل وكثيراً من المواد التي تُباع تحته. والسؤال الذي يفصل فعلاً هو النباتي: أي نوع هذا، وما الوضع التنظيمي لذلك النوع في بلد خروجه.',
 'ولهذا التميين نتائج عملية في كل مرحلة: يحدد أي وثائق ترافق المادة، وهل يلزم تصريح ومن أي نوع، وهل الخشب أم الزيت أم المنتج المنتهي داخل نطاق أداة التصدير، وما الذي يُطلب من التحليل المخبري تأكيده. والمشتري الذي يعمل على مستوى الجنس يستطيع التصرف بناءً على الجواب؛ ومن يعمل على مستوى «العود» لا يستطيع.',
 'وهو أيضاً يشرح لماذا يمكن لمادتين أن تحملا الاسم الشهير نفسه وتتصرفان مختلفتين تماماً. فـAquilaria crassna وA. agallocha شجرتان متقاربتان بكيمياء مختلفة، وتاريخ مختلف في تجارة التقطير. ومعاملتُهما كمادة واحدة تعني معاملة زيوتهما كواحدة، فيفقد المشتري القدرة على معرفة أيهما أمامه.',
 ],
 },
 {
 heading: 'The species a buyer is most likely to be shown',
 headingAr: 'النوع الذي يُرجَّح أن يُعرض على المشتري',
 body: [
 'A. crassna is the species most often associated with the Gulf trade, and it is the one a buyer will usually be offered first. A. malaccensis is the principal species of the Malay archipelago, and the two are frequently handled by the same businesses, which is part of why the distinction is lost in ordinary conversation. A. agallocha is the Indian species, associated with Assam and the adjoining hill states. A. sinensis and its relatives cover the Chinese material.',
 'Gyrinops is a separate genus with a separate range, covering New Guinea and parts of the Malay archipelago, and it produces a materially different resin. It is also, on the evidence available, the genus about which the trade knows least, which makes it the one where a seller’s description is least likely to be precise.',
 'The practical note is that a supplier’s answer is usually reliable at the genus level and unreliable at the species level. When a business says it handles Cambodian material, that is a claim about a well-known commercial category. When it says the wood is from a particular species, that is a narrower claim, and one worth putting in writing before the material is bought.',
 ],
 bodyAr: [
 'A. crassna هو النوع المرتبط أكثر من غيره بتجارة الخليج، وهو ما يُعرض على المشتري عادةً أولاً. وA. malaccensis هو النوع الرئيس في أرخبيل الملايو، والاثنان يتعامل بهما كثير من المنشآت نفسها، وهو جزء من سبب ضياع التمييز في الحديث العادي. وA. agallocha هو النوع الهندي المرتبط بأسام وولايات التلال المجاورة. وA. sinensis وأقاربه تغطي المادة الصينية.',
 'أما Gyrinops فجنس منفصل بنطاق منفصل، يغطي غينيا الجديدة وأجزاء من أرخبيل الملايو، وينتج راتنجاً مختلفاً جوهرياً. وهو أيضاً الجنس الذي تتجه المعرفة التجارية إليه أقل، وهذا يجعله أكثر الأنواع احتمالاً لأن يكون وصف البائع فيه أقل دقة.',
 'والملاحظة العملية أن جواب المورد موثوق عادةً في مستوى الجنس وغير موثوق في مستوى النوع. فحين تقول منشأة إنها تتعامل مع مادة كمبودية، فهي ادعاء عن فئة تجارية معروفة. وحين تقول إن الخشب من نوع بعينه، فذلك ادعاء أضيق ويستحق أن يكون مكتوباً قبل شراء المادة.',
 ],
 callout: {
 title: 'Where the sandalwood comparison is useful, and where it is not',
 body:
 'Santalum album is listed under CITES in its own right and is a genuine CITES Appendix II listed taxon. It belongs on the same paperwork as agarwood, and it is not agarwood. The comparison is useful for the paperwork and useless for the material: the two are different trees, different oils and different prices, and the only thing they reliably share is a place on an Appendix II list.',
 bodyAr:
 'Santalum album مشمول في سايتس بذاته وهو نوع مشمول فعلاً في الملحق الثاني. فهو ينتمي إلى الورقة نفسها التي ينتمي إليها العود، وهو ليس عوداً. والمقارنة مفيدة للورقة وعديمة الفائدة للمادة: فهما شجرتان مختلفتان، وزيتان مختلفان، وسعران مختلفان، وكل ما يشتركان فيه موضع على قائمة الملحق الثاني.',
 },
 },
 ],
 },

 'quality/oud-grading-explained': {
 sections: [
 {
 heading: 'Why the vocabulary is so widely used and so thinly defined',
 headingAr: 'لماذا المفردات مستعملة على هذا النحو ومحدَّدة على هذا القدر',
 body: [
 'Grading vocabularies tend to be old, because they are efficient. A buyer and a seller who have traded together for years can exchange "Double Super, Assam" in four words and both know what is meant, and neither has to write a specification. That efficiency is exactly what makes the vocabulary fragile outside the relationship that produced it: the words travel, and the shared understanding does not travel with them.',
 'This is why the same term can mean materially different things to two sellers in the same market, and can mean something different again to a buyer in a third market. It is also why the terms are so widely quoted as if they were specifications. Their authority is social — they are what the people who trade have always said — and that authority is real within the market and absent outside it.',
 'The practical consequence for a buyer is that the vocabulary is a useful map of what a seller believes matters, and a poor instrument for measuring a lot. When a seller leads with a grade, the grade tells you what they consider the deciding qualities. Asking what those qualities are, in measurable terms, converts the label back into a specification.',
 ],
 bodyAr: [
 'مفردات التقييم تميل إلى قِدمها لأنها فعّالة. فمشترٍ وبائع تعاملا سنوات يتبادلان «دبل سوبر، أسام» في أربع كلمات ويعرف كل منهما المراد، ولا يحتاج أيٌّ منهما إلى كتابة مواصفة. وهذه الكفاءة نفسها هي ما يجعل المفردات هشّة خارج العلاقة التي أنتجتها: فالكلمات تنتقل، والفهم المشترك لا ينتقل معها.',
 'ولهذا يمكن للمصطلح نفسه أن يعني أشياء مختلفة جوهرياً بين بائعَين في السوق نفسه، وأن يعني شيئاً آخر عند مشترٍ في سوق ثالث. ولهذا تُستشهد هذه المصطلحات بوصفها مواصفات. وسلطتها اجتماعية — فهي ما قاله أهل التجارة دائماً — وهي سلطة حقيقية داخل السوق وغائبة خارجه.',
 'والنتيجة العملية للمشتري أن المفردات خريطة مفيدة لما يعتقد البائع أنه المهم، وأداة رديئة لقياس اللوط. فحين يبدأ البائع بدرجة، فالدرجة تخبرك بالصفات التي يراها هي الحاكمة. والسؤال عن هذه الصفات بصيغة قابلة للقياس يعيد الوسم إلى مواصفة.',
 ],
 },
 {
 heading: 'A grading claim is a claim about a seller\'s method',
 headingAr: 'ادعاء التقييم ادعاء عن طريقة البائع',
 body: [
 'Once a grade is understood as a method rather than a measurement, the useful questions change. The buyer wants to know whether the seller assesses lots at all, on what basis, and whether the assessment is written down. A seller who has a method can describe it, and its absence is itself informative: a seller who cannot describe a method has either never written one down or does not use one.',
 'It also reframes what a good seller looks like. The strongest position is not a better-sounding label but a documented one: a stated criteria, a way of applying it, and a record of the result for each lot. That is more than most sellers can offer, and a buyer who asks for it will quickly find out who can and who cannot.',
 'And it is worth being clear about what this reframing does not do. It does not make the vocabulary wrong, and it does not make a graded lot better than an ungraded one. A seller with no grading method and excellent material is a better bet than a seller with an elaborate grading system and poor material. The point is that the label tells you nothing about the material until you know what it is a label for.',
 ],
 bodyAr: [
 'حين يُفهم التقييم بوصفه طريقة لا قياساً، تتغير الأسئلة النافعة. يريد المشتري أن يعرف: هل يقيّم البائع اللوطات أصلاً، وعلى أي أساس، وهل التقييم مكتوب. ومن له طريقة يستطيع وصفها، وغيابها مفيد بحد ذاته: فمن لا يستطيع وصف طريقة إما لم يكتب واحدة قط أو لا يستعمل طريقة.',
 'وهو يعيد أيضاً تحديد صورة البائع الجيد. فالموقف الأقوى ليس وسماً أجمل بل وسماً موثّقاً: معايير مذكورة، وطريقة لتطبيقها، وسجل للنتيجة لكل لوط. وهذا أكثر مما يستطيع معظم البائعين تقديمه، ومن يطلبه سيعرف سريعاً من يستطيع ومن لا يستطيع.',
 'ومن المهم أن يكون واضحاً ما لا يفعله هذا إعادة التأطير. فهو لا يجعل المفردات خاطئة، ولا يجعل اللوط المقيَّم أفضل من غير المقيَّم. والبائع بلا نظام تقييم ومادة ممتازة أرجح من بائع بنظام تقييم معقّد ومادة رديئة. والمقصود أن الوسم لا يخبرك بشيء عن المادة حتى تعرف ما هو وسم لشيء.',
 ],
 },
 ],
 },

 'quality/sinking-claims': {
 sections: [
 {
 heading: 'What the test measures, precisely',
 headingAr: 'ما الذي يقيسه الاختبار بدقة',
 body: [
 'The test is a buoyancy test, and its result depends on the density of the piece relative to water. Resin is denser than the wood it forms in, so as oleoresin accumulates in the heartwood the whole piece grows denser. Past a certain point it sinks. That is all it establishes: that the piece is denser than water.',
 'The gap between that observation and a quality claim is where the trouble lives. A piece can be made denser than water by adding resin, by adding something else denser, by impregnating the pores, or by being a dense wood in the first place. Density is the outcome; resin content is one of several possible causes of it, and the test cannot tell them apart.',
 'It is worth being clear, too, about what the test is *not*. It does not measure how much resin is in the wood, because a piece with a great deal of resin distributed thinly may float while one with a moderate amount concentrated in veins may sink. It does not measure age, because resin content and tree age are different things. And it does not measure quality, because the qualities a buyer actually cares about — how the oil smells, how it yields, how it ages — are not properties of a chip in water.',
 ],
 bodyAr: [
 'الاختبار اختبار طفو، ونتيجته تعتمد على كثافة القطعة نسبةً إلى الماء. فالراتنج أكثف من الخشب الذي يتكون فيه، فمع تراكم الزيت العطري في قلب الخشب تزداد كثافة القطعة كلها، وعند حد معينة تغرق. وكل ما يثبته هذا: أن القطعة أكثف من الماء.',
 'والفجوة بين هذه الملاحظة وادعاء الجودة هي موضع العسر. فالقطعة يمكن أن تصبح أكثف من الماء بإضافة راتنج، أو بإضافة شيء آخر أكثف، أو بنقع المسام، أو لأنها خشب كثيف أصلاً. فالكثافة نتيجة، ونسبة الراتنج واحد من أسبابٍ محتملة لها، والاختبار لا يميّز بينها.',
 'ومن المهم توضيح ما ليس هو. فهو لا يقيس كم من الراتنج في الخشب، لأن قطعة فيها راتنج كثير موزّع رقيقاً قد تطفو بينما قطعة فيها راتنج متوسط متركّز في العروق تغرق. ولا يقيس العمر، لأن نسبة الراتنج وعمر الشجرة شيءان مختلفان. ولا يقيس الجودة، فالصفات التي تهم المشتري فعلاً — رائحة الزيت ومردوده وتعتيقه — ليست خصائص لرقاقة في ماء.',
 ],
 },
 {
 heading: 'How the test is gamed, and what each method tells you',
 headingAr: 'كيف يُخدع الاختبار، وما الذي يخبرك به كل أسلوب',
 body: [
 'There are a few common ways, and knowing them helps a buyer read a result rather than simply accept it. Dense metal shot or wax can be introduced to add weight. Surface resin can be painted or brushed on. A low-density wood can be impregnated with a resin solution that fills the cell structure, which is why impregnated material can be very heavy and very convincing. And a piece selected for the demonstration can be swapped for the delivery, which is why a witnessed test on the actual parcel beats a photograph every time.',
 'None of these is exotic or difficult. They are ordinary, and they are what a buyer should assume is possible. That is not a reason to distrust every seller; it is a reason to notice which questions a seller answers readily and which ones are evaded, because the evasion is where the information is.',
 'The reason the test survives anyway is that it is cheap and it is still usually true. Most material is not adulterated, and the ones that are tend to be adulterated in ways that show up later — in the yield, in the scent, in how the oil behaves. A sinking claim is a screening observation, and the screening is worth doing because it is nearly free. It is simply not a certificate, and a buyer who treats it as one has not finished the enquiry.',
 ],
 bodyAr: [
 'هناك طرق شائعة، ومعرفتها تساعد المشتري على قراءة النتيجة لا على قبولها. ف إضافة رصاص أو شمع كثيف لزيادة الوزن، ويمكن طلاء الراتنج على السطح أو دهنه. ويمكن نقع خشب منخفض الكثافة بمحلول راتنج يملأ بنيته الخلوية، ولهذا قد تكون المادة المنقعة ثقيلة ومقنعة جداً. ويمكن تبديل القطعة المعروضة بقطعة أخرى عند التسليم، ولهذا يتفوق الاختبار المشهود على الطرد الفعلي على صورة في كل مرة.',
 'ولا شيء من هذا نادر أو معقد. فهذه أمور عادية، وهي ما ينبغي أن يفترض المشتري أنه ممكن. وليست سبباً وتشك في كل بائع؛ بل سبباً أن يلاحظ المشتري أي الأسئلة يجيب عنها المورد بكل ثقة وأيها يُدافَع عنها، فالمدافعة هي موضع المعلومة.',
 'والسبب في بقاء الاختبار مفيداً أنه رخيص وما زال صحيحاً في أغلب الأحيان. فمعظم المادة ليس مغشوشة، والمغشوشة منها تميل إلى أن تُغشَّ بطرق تظهر لاحقاً — في المردود، أو في الرائحة، أو في سلوك الزيت. وادعاء الغطاس ملاحظة فرز، والفرز يستحق الفعل لأنه يكاد يكون مجانياً. لكنه ليس شهادة، ومن يعامله كشهادة لم ينتهِ الاستفسار.',
 ],
 },
 ],
 },

 'quality/age-claims': {
 sections: [
 {
 heading: 'The four ages, and how far apart they can be',
 headingAr: 'الأعمار الأربعة، وكم قد يتباعد بينها',
 body: [
 'A tree can be a century old and have produced resin for a decade. A tree can be thirty years old and carry resin that has been forming for twenty of them. The oil can have been distilled years after the wood was harvested, and the bottle can have been filled later still, and the oil can have spent its time in a warehouse rather than in a bottle. Nothing forces these figures to be close together, and in the trade they frequently are not.',
 'Which of them a seller means is therefore not a pedantic question. The age of the tree is largely beside the point. The age of the resin is the one with a plausible connection to concentration, and the one nobody can document, because the wound date is rarely recorded. The distillation date is the one a buyer can usually obtain and the one that bears on how the oil will have developed.',
 'There is a fourth figure that is often used and rarely explained: time in storage. An oil kept for years in a warm room is not the same product as one bottled in the same year, and the aromatic profile of a distillate does change with time and with its storage conditions. A seller who says "aged" without saying "aged since when, and stored where" has not given a usable figure.',
 ],
 bodyAr: [
 'قد تكون الشجرة قرناً من العمر وقد أنتجت راتنجاً لعشر سنوات فقط. وقد تكون الشجرة ثلاثين عاماً ويحمل راتنجاً تكوّن خلال عشرين منها. وقد يكون الزيت قُطّر سنوات بعد قطع الخشب، وقد تكون القارورة معبأة بعد ذلك بزمن أطول، وقد يكون الزيت قضى وقتاً في مستودع لا في قارورة. ولا شيء يجمع هذه الأرقام معاً، وكثيراً ما لا تُجمع في التجارة.',
 'فأيّ هذه الأرقام يقصده البائع ليس سؤالاً تكلّفياً. فعمر الشجرة بعيد عن الموضوع إلى حد كبير. وعمر الراتنج هو الذي له صلة معقولة بالتركيز، وهو الذي لا يستطيع أحد توثيقه، لأن تاريخ الجرح نادراً ما يُسجَّل. وتاريخ التقطير هو الذي يستطيع المشتري الحصول عليه عادة، وهو الذي له صلة بكيفية تطور الزيت.',
 'وهناك رقم رابع يُستعمل كثيراً ولا يُشرح: مدة التخزين. فالزيت المحفوظ سنوات في غرفة دافئة ليس المنتج نفسه الذي حُزِّر في السنة نفسها، والملف العطري للناتج يتغير مع الزمن ومع ظروف حفظه. ومن يقول «معتّق» دون أن يقول «معتّق منذ متى، ومخزّن أين» لم يعطِ رقماً قابلاً للاستعمال.',
 ],
 },
 {
 heading: 'Why age is the claim buyers are least able to check',
 headingAr: 'لماذا العمر هو الادعاء الأقل قابلية للتحقق للمشتري',
 body: [
 'Almost every other claim in this trade can be tested by somebody. A species can be identified. A treatment can be looked for. A weight can be weighed. An age is different: there is no instrument for it and no party whose testimony is neutral, because the seller has an interest in the answer and the buyer has the opposite interest.',
 'This does not make an age claim worthless — age is a real property of a material and it does correlate with how a distillate has developed. It makes the claim a matter of record rather than of measurement, and a record is something you can ask for and check the consistency of. A seller with a distillation record and a storage history can support an age statement. A seller with neither is asking you to take the figure on trust.',
 'The most useful thing a buyer can do is convert the claim into something checkable. "Eighty years" becomes "distilled in 2019, stored at twenty-two degrees since", which can be confirmed against a record, and which also tells the buyer something useful about the oil they are about to buy. The conversion is cheap, and it is the point at which a vague claim either becomes a fact or visibly does not.',
 ],
 bodyAr: [
 'يكاد كل ادعاء آخر في هذه التجارة أن يكون قابلاً للاختبار من أحدهم. فالنوع يمكن تحديده، والمعالجة يمكن البحث عنها، والوزن يمكن قياسه. والعمر مختلف: لا أداة له ولا طرف شهادته محايد، لأن للبائع مصلحة في الجواب وللمشتري مصلحة معاكسة.',
 'وهذا لا يجعل ادعاء العمر بلا قيمة — فالعمر صفة حقيقية للمادة وله علاقة بكيفية تطور الناتج. لكنه يجعله مسألة سجل لا مسألة قياس، والسجل شيء يمكن أن تطلبه وأن تفحص اتساقه. ومن يملك سجل تقطير وسجل تخزين يستطيع أن يسند قولاً عن العمر. ومن لا يملكهما يطلب منك أن تصدّقه.',
 'وأكثر ما ينفع المشتري أن يحوّل الادعاء إلى ما يمكن فحصه. فـ«ثمانون سنة» تصبح «مقطور في 2019، ومخزّن عند اثنتين وعشرين درجة منذ ذلك الحين»، وهي قابلة للتأكد بسجل، وهي أيضاً تخبر المشتري شيئاً مفيداً عن الزيت الذي سيشتريه. والتحويل رخيص، وهو النقطة التي يتحول فيها الادعاء الغامض إلى واقعة أو يظهر بوضوح أنه ليس كذلك.',
 ],
 },
 ],
 },

 'quality/assessment-and-testing-limits': {
 sections: [
 {
 heading: 'What analysis can and cannot reach',
 headingAr: 'ما الذي يبلغه التحليل وما لا يبلغه',
 body: [
 'Analysis is very good at composition. Given a sample and a method, it can say what compounds are present and in what proportion, and where it is looking for specific targets it can say whether they were found. That is a real and substantial capability, and it is the right tool for the questions it answers.',
 'It cannot reach provenance, because the chemistry of a distillate does not record which forest the tree grew in. It cannot reach age, because age and composition are not linked in a way a chromatogram can read. It cannot reach the commercial qualities that decide a purchase — how a material behaves in a formula, how it yields, whether the seller will deliver what was sampled — because those are not properties of a sample in a vial.',
 'There is also a class of question analysis is routinely asked and cannot answer, which is the question of authenticity. A chromatographic profile can exclude certain adulterants when the method was built to look for them. It cannot establish that a material is natural, because a well-made accord can produce a profile that a given method finds clean. That is not a weakness of the method; it is a question of what the method was looking for.',
 ],
 bodyAr: [
 'التحليل ممتاز في التركيب. فمع عيّنة وطريقة يستطيع أن يقول ما المركبات الموجودة وبأي نسبة، وإذا كان يبحث عن أهداف محددة استطاع أن يقول هل عُثر عليها. وهذه قدرة حقيقية وجخمة، وهي الأداة الصحيحة للأسئلة التي تجيب عنها.',
 'لكنه لا يبلغ تثبيت المصدر، لأن كيمياء الناتج المقطَّر لا تسجل أي غابة نمت فيها الشجرة. ولا يبلغ العمر، لأن العمر والتركيب غير مرتبطين بطريقة يقرأها المخطط. ولا يبلغ الصفات التجارية التي تقرر الشراء — كيف يتصرف المادة في التركيبة، وما مردودها، وهل سيفي البائع بما عيّن — لأنها ليست خصائص لعيّنة في قارورة.',
 'وهناك أيضاً فئة من الأسئلة يُطلب من التحليل بانتظام ولا يستطيع الإجابة عنها، وهي سؤال الأصالة. فالبصمة الكروماتوغرافية تستطيع استبعاد معينة مواد مواد تلاعب حين بُنيت الطريقة للبحث عنها. ولا تستطيع إثبات أن المادة طبيعية، لأن Ozاً محكماً قد ينتج بصمة تجدها طريقة معيّنة نظيفة. وهذا ليس ضعفاً في الطريقة، بل مسألة عمّا كانت الطريقة تبحث عنه.',
 ],
 callout: {
 title: 'The two halves of a buying decision',
 body:
 'Analysis narrows the field. Judgement decides between what is left, and judgement is made on evidence of a different kind — the seller’s record, the batch documentation, and your own comparison across samples. A buying process that uses only the first half ends up unable to choose between three perfect reports.',
 bodyAr:
 'التحليل يضيّق الميدان. والحكم يقرّر بين ما تبقى، والحكم يُحكم على أدلة من نوع آخر — سجل البائع، ووثائق الدفعة، ومقارنتك الخاصة بين العينات. وعملية شراء لا تستعمل النصف الأول منها تنتهي عاجزة عن الاختيار بين ثلاثة تقارير ممتازة.',
 },
 },
 {
 heading: 'Where judgement is made, and how to make it defensibly',
 headingAr: 'أين يُتَّخذ الحكم، وكيف يمكن الدفاع عنه',
 body: [
 'The commercial judgement happens at the point where the analysis stops being decisive, and it is a judgement about four things: whether the material will do what you want it to do, whether the seller will deliver what they have described, whether the price is right for what has been established, and whether the origin claim holds up.',
 'Each of those can be made defensible rather than merely confident. The first, by assessing a sample on your own use rather than on a general standard. The second, by asking for records and by re-ordering a small amount first. The third, by comparing on a stated basis rather than on a headline rate. The fourth, by asking for the origin to be evidenced and by accepting an unevidenced origin as unevidenced.',
 'None of that is exotic, and none of it needs a laboratory. It needs the discipline of writing down what has been established and what has not, which is also what makes the next purchase better than the last one.',
 ],
 bodyAr: [
 'يحدث الحكم التجاري عند النقطة التي يتوقف فيها التحليل عن الحسم، وهو حكم في أربعة أمور: هل ستؤدي المادة ما تريده، وهل سيفي البائع بما وصف، وهل السعر مناسب لما أُثبت، وهل يصمد ادعاء المنشأ.',
 'وكل واحد من ذلك يمكن أن يُتخذ بصيغة قابلة للدفاع لا بصيغة واثقة فقط. الأول بتقييم العيّنة على استعمالك لا على معيار عام. والثاني بطلب السجلات وبطلب كمية صغيرة أولاً. والثالث بالمقارنة على أساس مذكور لا على سعر معلن. والرابع بطلب دليل للمنشأ وبقبول أن المنشأ غير المبيَّن غير مبيَّن.',
 'ولا شيء من ذلك غريب، ولا يحتاج مختبراً. يحتاج انضباط تدوين ما أُثبت وما لم يُثبت، وهو نفسه ما يجعل الشراء التالي أفضل من سابقه.',
 ],
 },
 ],
 },

 'quality/batch-records': {
 sections: [
 {
 heading: 'What a batch record is actually for',
 headingAr: 'ما الغرض الفعلي من سجل الدفعة',
 body: [
 'A batch record exists to answer one question: is this delivery the same material as the one that was assessed? Every field in it is either part of that answer or administrative convenience. A reference that does not appear on the delivery paperwork is not part of the answer, however well it is filed.',
 'That is why the four essential fields are the four they are. The identifier connects the sample to the delivery, and only if it travels on both. The date separates one production from another. The description says what was produced. And the party identifies who is answerable for it. Without any one of them, the chain breaks at that point and no amount of goodwill repairs it.',
 'Everything else in a batch record — the harvest method, the storage temperature, the distillation run length, the analysis reference — is useful, and all of it is secondary. It is there to let a buyer satisfy curiosity about a particular field, and it is worth having. But a record with all of that and no identifier is less useful than a record with an identifier and four lines, because the identifier is what makes the record capable of answering the question it exists to answer.',
 ],
 bodyAr: [
 'يوجد سجل الدفعة للإجابة عن سؤال واحد: هل هذا التسليم هو المادة نفسها التي قيّمت؟ وكل حقل فيه إما جزء من تلك الإجابة أو راحة إدارية. والمرجع الذي لا يظهر على أوراق التسليم ليس جزءاً من الإجابة، مهما كان منظماً.',
 'ولهذا كانت الحقول الأربعة الأساسية هي هي. فالمعرّف يصل العيّنة بالتسليم، وبشرط أن يسير معهما. والتاريخ يفصل إنتاجاً عن آخر. والوصف يقول ما أُنتج. والجهة تحدد من المسؤول عنه. وبدون أي واحد منها تنكسر السلسلة عند تلك النقطة ولا يصلحها حسن النية.',
 'وأمّا ما عداه في سجل الدفعة — طريقة الجمع، وحرارة التخزين، ومدة جولة التقطير، ومرجع التحليل — فهو مفيد، وكله ثانوي. فهو هنا ليتيح لمشتري أن يشبع فضوله في حقل بعينه، وهو يستحق أن يكون موجوداً. لكن سجلاً فيه كل ذلك ولا معرّف أقل نفعاً من سجل فيه معرّف وأربعة أسطر، لأن المعرّف هو ما يجعل السجل قادراً على الإجابة عن السؤال الذي وُجد من أجله.',
 ],
 },
 {
 heading: 'The record that does not travel',
 headingAr: 'السجل الذي لا يسير مع المادة',
 body: [
 'A common and frustrating pattern is a seller with an excellent system that stops at the loading bay. The files are ordered, the references are sequential, the analysis is filed — and none of it appears on the delivery paperwork, because the paperwork is produced by a different system, often a transport agent\'s, and the two are never reconciled.',
 'The fix is small and is entirely on the seller\'s side: put the reference on the delivery note. It costs nothing and it is the only thing that makes the record usable. A buyer who asks for it will find that some suppliers can do it immediately, some can do it from the next order, and some cannot see how.',
 'Until then, the buyer\'s own record has to carry the weight. If the supplier cannot supply a reference, the buyer should assign one, record it on their own sample and on their own file, and use it in correspondence. That does not create the supplier\'s traceability, but it preserves the buyer\'s own ability to recognise the material when it arrives, which is the half of the problem the buyer controls.',
 ],
 bodyAr: [
 'نمط شائع ومُحبط بائع يملك نظاماً ممتازاً يتوقف عند رصيف التحميل. فالملفات مرتبة والمراجع متسلسلة والتحليل مؤرشف — ولا شيء من ذلك يظهر على أوراق التسليم، لأن الأوراق ينتجها نظام آخر، غالباً نظام وكيل نقل، ولا يجري التوفيق بين النظامين أبداً.',
 'والعلاج صغير وكله على جانب البائع: أن يضع المرجع على سند التسليم. وهو لا يكلّف شيئاً وهو الشيء الوحيد الذي يجعل السجل قابلاً للاستعمال. ومن يطلبه سيجد أن بعض الموردين يستطيعون فعله فوراً، وبعضهم من الطلب التالي، وبعضهم لا يتصور كيف.',
 'إلى ذلك الحين، لا بد أن يحمل سجل المشتري نفسه. فإن عجز المورد عن تقديم مرجع، فعلى المشتري أن يفرض واحداً، ويسجّله على عينته وملفه، ويستخدمه في المراسلات. وذاك لا يصنع قابلية تتبّع المورد، لكنه يحفظ قدرة المشتري على التعرّف على المادة عند وصولها، وهو نصف المشكلة الذي يملكه.',
 ],
 },
 ],
 },

 'quality/photo-evidence-limits': {
 sections: [
 {
 heading: 'What a photograph is good evidence of',
 headingAr: 'ما تصلح الصورة دليلاً عليه',
 body: [
 'Photographs are excellent on form and on condition, and there is no substitute for them in those two respects. Chip size, the cut, the break, the grain, the colour of a fresh surface, whether a piece is clean or cracked or oil-saturated, whether two lots differ at all — these are visual facts, and a good photograph records them accurately and cheaply.',
 'Comparison is the strongest use. Two lots side by side under the same light, at the same scale, with the same background, is a genuinely informative image, and it is something a written description cannot do. It also surfaces the difference a buyer would have noticed in person, which is the point of showing it.',
 'A photograph also preserves a moment. A lot photographed at dispatch, with its label in frame, is a record of what was shown, and that record is worth having even if it settles very little on its own. It becomes evidence when it is tied to something — a reference, a weight, a date.',
 ],
 bodyAr: [
 'الصور ممتازة في الشكل والحالة، ولا بديل عنهما في هذين الاحترفين. فحجم الرقائق وطريقة القطع والكسر والبنية ولون السطح الطازج، وهل القطعة نظيفة أم متشققة أم مشبعة بالزيت، وهل يختلف لوطان إطلاقاً — هذه حقائق بصرية، والصورة الجيدة تسجّلها بدقة و بكلفة زهيدة.',
 'والمقارنة أقوى استعمال. فاللوطان جنباً إلى جنب تحت ضوء واحد وبنفس المقياس وخلفية واحدة صورة مفيدة فعلاً، وهي شيء لا يمكن لوصف مكتوب أن يفعله. وهي أيضاً تكشف الفرق الذي كان المشتري سيلاحظه بنفسه، وهذا هو الغرض من عرضها.',
 'والصورة تحفظ لحظة. فاللوط المصوَّر وقت الشحن وبطاقة الدفعة ظاهرة فيه سجل لما عُرض، وذلك السجل يستحق أن يكون موجوداً حتى لو حسم القليل بذاته. وهو يصير دليلاً حين يُربط بشيء — بمرجع، أو بوزن، أو بتاريخ.',
 ],
 },
 {
 heading: 'Where a photograph stops being evidence',
 headingAr: 'أين تتوقف الصورة عن أن تكون دليلاً',
 body: [
 'The limit is quantity. A photograph can show that resin is visible on a piece; it cannot show how much, because the image does not measure. It cannot show that the resin is natural rather than applied, because surface and internal resin look the same in a photograph and are distinguished by analysis or by the break. It cannot show whether the piece is the piece, because a photograph is not a chain of custody.',
 'Nor can it establish age, or yield, or how a material will perform. A photograph of a beautiful piece says the piece looked beautiful on that day, under that light, from that angle. Buyers sometimes wish it said more, and the wish is the reason counterfeit photographs are so effective — a buyer looking for reassurance is a buyer who will accept a picture.',
 'The habit worth building is to read a photograph as a list of questions. A photograph of a dark, resinous block raises the question of how the resin was distributed, whether it was treated, what it weighs, and whether the lot has a reference. A photograph of clean pale chips raises a different set. Asking those questions is what makes the image worth more than the marketing around it.',
 ],
 bodyAr: [
 'الحد هو الكمّ. فالصورة تُظهر أن راتنجاً ظاهراً على قطعة، ولا تُظهر كم منه، لأن الصورة لا تقيس. ولا تُظهر أن الراتنج طبيعي لا مُضاف، فالراتنج السطحي والداخلي يبدوان متطابقين في الصورة ويميّزهما التحليل أو الكسر. ولا تُظهر أن القطعة هي القطعة، فالصورة ليست سلسلة حيازة.',
 'ولا تُثبت العمر ولا المردود ولا أداء المادة. فصورة قطعة جميلة تقول إن اللوط بدا جميلاً في ذلك اليوم، وتحت ذلك الضوء، ومن تلك الزاوية. ويود المشترون أحياناً أن تقول أكثر من ذلك، والرغبة هي سبب فعالية صور الغش: مشترٍ يبحث عن الطمأنينة هو مشترٍ سيقبل صورة.',
 'والعادة التي تستحق البناء هي قراءة الصورة كقائمة أسئلة. فصورة كتلة داكنة راتنجية تثير سؤال كيفية توزيع الراتنج، وهل عولج، وكم وزنه، وهل للدفعة مرجع. وصورة رقائق فاتحة نظيفة تثير مجموعة أخرى. وطرح تلك الأسئلة هو ما يجعل الصورة أغلى من التسويق المحيط بها.',
 ],
 },
 ],
 },
};
