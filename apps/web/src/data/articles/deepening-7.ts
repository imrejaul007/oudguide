import type { Deepening } from './types.ts';

/**
 * The seventh batch of deepening sections: the six fragrance guides not
 * covered by the other batches.
 *
 * Same rule as the first: more of the thing the guide is about, never
 * a restatement of what the page already says. The English body carries
 * the word count; the Arabic is a full translation, paragraph for
 * paragraph, so the bilingual review gate sees the same reasoning on
 * both sides.
 */
export const DEEPENING_7: Record<string, Deepening> = {
  'fragrance/bakhoor-versus-raw-wood': {
    sections: [
      {
        heading: 'The two cases where a substitution fails',
        headingAr: 'حالتان تفشل فيهما الإحلال',
        body: [
          'The substitution runs in two directions, and each fails in its own way. A buyer who needs raw wood and receives bakhoor fails on the material: the infusion has already put oil into the wood, and what a distillation can still recover from it is whatever was not absorbed, which the seller does not state because the product was never sold on that basis. The buyer pays for a second infusion as if it were the first, and the result is a lot whose history is a blend of unknowns.',
          'The other direction fails on the experience. A buyer who wants a material to burn and receive bakhoor-shaped raw wood gets wood that carries its scent unevenly and faintly, so the fire smells of oud only where a resinous chip happens to sit, and of plain wood elsewhere. The product is not a fraud in that case: the seller described wood, and wood is what arrived. But the purpose the buyer had does not work with it, and neither a sample nor a photograph would have caught that, because the failure shows up only in use.',
          'The shared fault in both directions is that the word is doing the work of the description. Bakhoor named where raw wood is wanted, or wood named where bakhoor is wanted, and the mismatch only appears when the material reaches its use. The record that prevents it is one line each: the material, stated, and the purpose, stated, in the same document.',
        ],
        bodyAr: [
          'الإحلال يعمل في اتجاهين، ويفشل كلٌّ منهما بطريقته. فالمشتري الذي يحتاج خشباً خاماً ويصله بخور يفشل في المادة: فقد وضع الشِّبْع الزيت في الخشب مسبقا، وما يستطيع التقطير استخلاصه منه الآن هو ما لم يمتصه الخشب أصلا، وهذا لا يصرّح به البائع لأن المنتج لم يُسوّق على هذا الأساس. ويدفع المشتري ثمن نُقع ثانية وكأنها الأولى، وتكون النتيجة دفعة تاريخها خليط من مجهولات.',
          'أما الاتجاه الآخر فيفشل في التجربة. فالمشتري الذي يريد مادة للحرق وتستلمه رقائق خشب خام لا تشبه البخور، يكون الخشب يحمل رائحته من غير تساوٍ وقلة، فيشتعل النار فيستفوح العود فقط حيث تقع رقاقة راتنجية، ويصير دخان الخشب المسدّ حيث لا تقع. وفي هذه الحالة لا يكون المنتج غشاً: فقد وصف البائع خشباً، والخشب هو ما وصل. لكن الغرض الذي قصده المشتري لا ينجح بهذه المادة، ولا عيِّنة ولا صورة كانت ستكشف ذلك، لأن الخلل لا يظهر إلا في الاستعمال.',
          'والخلل المشترك في الاتجاهين أن الكلمة تؤدّي عمل الوصف. فسمَّى البخور حيث قُصد الخشب الخام، أو سُمّي الخشب حيث قُصد البخور، ولا يظهر التباين إلا إذا وصلت المادة إلى غرضها. والسجلّ الذي يضمنه سطران: المادة مصرَّحة بها والغرض مصرَّح به في المستند نفسه.',
        ],
      },
      {
        heading: 'The question that separates the two products',
        headingAr: 'السؤال الذي يفرّق بين المنتجين',
        body: [
          'Both products can be described as oud wood, and that description is true of each, which is exactly why it settles nothing. The question that separates them is not what the product is but what was done to it: raw wood is material that has carried its own resin through the growing season of the tree and through the season after cutting. Bakhoor is material to which another step has been added, and that step is an act of manufacture with its own time, its own material and its own proportion.',
          'Once the added step is known, the rest follows. The record that states what was infused, when it was done, and what was used to do it is a record of manufacture, and it is the same kind of record the trade keeps for a distillation. A buyer who does not ask for it is left with two words, wood and oud, that each fit both products, and the fit is what hides the substitution. The word does not record which step was done, and a description that stops at the word has stopped short of the one fact that matters.',
          'That is also why the price gap between the two products says nothing on its own. A cheap infusion and a costly one both make wood into bakhoor, and a raw lot that has already been partly worked for scent is not priced as plain wood. What the price establishes, if anything, is that a step was taken. Which step, and how much of what was used in it, is a fact that has to come from the record, because the piece in hand does not say.',
        ],
        bodyAr: [
          'يمكن وصف المنتجين كلاهما بـ«خشب العود»، والوصف صحيح عن كليهما، ولهذا بالتحديد لا يحسم أمرين. السؤال الفاصل بينهما ليس ما هو المنتج بل ما فُعِل به: فالخشب الخام مادة حملت راتنجها الخاص عبر موسم نمو الشجرة وبعد القصّ. والبخور مادة أُضيف إليها إجراءٌ آخر، وهو إجراء تصنيع له وقته ومادته ونسبته.',
          'وحين يُعرف الإجراء المضاف يتبعه الباقي. فالسجلّ الذي يصف ماذا نُقِع، ومتى أُجري، وبماذا أُجري، هو سجلّ تصنيع، وهو نوعه واحد مع السجلّ الذي تبقيه التجارة للتقطير. ومن لم يطلبه يبقى بين لفظين، خشب وعود، يصلحان للمنتجين معاً، وهذا الوصول هو الذي يخفي الإحلال. فاللفظ لا يسجّل أي الإجراءين جُرى، والوصف الذي يتوقف عند اللفظ قد توقف قبل الوقعة الواحدة المهمة.',
          'ولهذا أيضاً يظل الفرق في السعر لا يقول شيئاً بذاته. فشيّع رخيص وشيّع غالي كلاهما يصنع من الخشب بحوراً، والخشب الخام الذي أُجريت عليه معالجات سابقة للسعة لا يُسعّر كالخشب البسيط. ما يثبته السعر، إن يثبت شيئاً، هو أن إجراءً ما أُجري. وأي إجراء، وكم من ماذا استُعمِل فيه، هذه واقعة يجب أن تأتي من السجلّ، لأن القطعة في اليد لا تقول.',
        ],
      },
    ],
  },

  'fragrance/brand-and-manufacturing-origin': {
    sections: [
      {
        heading: 'What a place-statement does not establish',
        headingAr: 'ما لا تثبته عبارة المكان',
        body: [
          'The word made is doing a great deal of work in the sentence made in a place. It covers several different physical facts, and they are not the same: a house that mixes and fills product on one street and compounds its materials on another, a product whose parts were made in three places and put together in a fourth, and a product whose maker is the one named on the box. Each is a made in a place, and only one of them answers the question of who is responsible.',
          'It also does not establish the place of the material. A fragrance that carries an oud accord, and an accord is manufactured, may have been compounded at a place that is far from where the accord itself was made, and the place-statement on the box is about the compounding, not the supply. Where the material came from is a supply-chain fact, and it is not read off a place of manufacture.',
          'And it does not establish the date. The label states a place, not a moment, and a formulation from two years ago and a reformulation made now carry the same statement if the place did not move. The gap between the statement and each of these facts is not a gap the buyer fills by guessing, and it is not a gap the seller is obliged to close unless the buyer asks for the document that does close it.',
        ],
        bodyAr: [
          'كلمة «صُنع» تؤدّي عملا كبيرا في عبارة «صُنع في مكان». وهي تغطي وقائع فيزيائية مختلفة لا تتطابق: دار تخلط وتعبئ في شارع وتجهز موادها في شارع آخر، ومنتج قُدمت أجزاؤه من ثلاثة أماكن ثم جمع في الرابع، ومنتج هو ما يُسمّي المصنَّع نفسه الذي على العلبة. وكلها صُنع في مكان، ولا تجيب عن سؤال المسؤولية إلا واحدة منها.',
          'ولا تثبت عبارة المكان مكان المادة نفسها. فمادة أوز العود، وهو منتج مصنوع، قد تُركَّب في مكان بعيد عن مكان تصنيع الأوز، وكلام الصندوق عن التركيب لا عن الإمداد. وأين جاءت المادة واقعة سلسلة إمداد، ولا تُستنتج من مكان التصنيع.',
          'ولا تثبت التاريخ. فالملصق يذكر مكانا لا لحظة، وصيغة من سنتين وصيغة أُعيدت الآن تحمل العبارة نفسها إذا لم يتحرك المكان. والفجوة بين العبارة وكل واقعة من هذه ليست فجوة يملؤها المشتري بالتخمين، ولاها البائع إلا إذا طلب المشتري المستند الذي يغلقها.',
        ],
      },
      {
        heading: 'Where the fact lives, and what to ask for',
        headingAr: 'أين توجد الواقعة، وماذا يُطلب',
        body: [
          'The fact that identifies who made the thing is not in the name and it is not in the place-statement, and it is in the documents that move with the product. The conformity documentation, the safety assessment, and the label data naming the responsible party: they carry the name, and the name carries the jurisdiction, which is why the documentation and the regulatory treatment travel together.',
          'A buyer who cannot read the documents should ask for one question that forces the answer anyway: who is the party responsible for this specific product, and where are they situated. The answer to that question is the manufacturing origin as a fact rather than as a phrase. If the answer is the brand itself, the brand is also the maker, and the fact is now on the record. If it is another party, the buyer has a second name and a second place, and the two facts, brand and maker, have stopped being one.',
          'The habit that keeps this clean is to write the answer down as it is given. A record that says only the brand name, years later, cannot be used to trace anything, because the record did not record where the product was made. And a record that says nothing about the relationship between brand and maker leaves the buyer with a product whose paperwork, as the page has said, cannot be checked. The two facts, written on one line each, are what make the product traceable, and that line is the difference between the two.',
        ],
        bodyAr: [
          'الواقعة التي تحدد من صنع الشيء ليست في الاسم ولا في عبارة المكان، بل في المستندات التي تسير مع المنتج. فوثائق المطابقة، وتقييم السلامة، وبيانات الملصق الذي يسمّي الجهة المسؤولة، كلها تحمل الاسم، والاسم يحمل اختصاصها، ولهذا تمشي المستندات والمعالجة التنظيمية معاً.',
          'والمشتري الذي لا يقرأ المستندات يسأل سؤالا واحداً يفرض الإجابة بطريق آخر: مَن الجهة المسؤولة عن هذا المنتج بعينه، وأين مقرها. فالإجابة عن هذا السؤال هي منشأ التصنيع واقعة لا عبارة. فإن كانت الإجابة هي العلامة نفسها فهي العلامة هي المصنَّع، والواقعة الآن على السجل. وإن كانت طرفاً آخر فالمشتري عنده اسم ثانٍ ومكان ثانٍ، وقد انقطع الدمج بين الواقعتين، العلامة والصانع.',
          'والعادة التي تبقي الأمر سليماً أن تُكتب الإجابة كما أُعطيت. فالسجلّ الذي يقول اسم العلامة فقط لا يستعمل بعد سنوات للتتبع، لأنه لم يسجل أين صُنع المنتج. والسجلّ الذي لا يقول شيئاً عن العلاقة بين العلامة والصانع يترك المشتري بمنتج أوراقه، كما سبق أن قُيل، لا يمكن فحصها. والواقعتان، كل واحدة على سطر، هما ما يجعل المنتج قابلاً للتتبع، وهذا السطر هو الفرق.',
        ],
      },
    ],
  },

  'fragrance/concentration-labels': {
    sections: [
      {
        heading: 'The label and the document, and why they do not travel together',
        headingAr: 'الملصق والمستند، ولماذا لا يسيران معاً',
        body: [
          'A concentration label is one kind of claim, and it is a weak one: it names a band of proportion and stops there. The document that names the materials, and their proportion, and the intended use, is a different kind of statement altogether, and it is the one a buyer should ask for when the label alone does not answer the question. The two are not one object. A fragrance can carry the most precise label and no declaration of what is inside, and the label, being a band, remains a band.',
          'This is the point at which the implication the label works is worth naming. Because the scale is ordered, a fragrance is sold as the lighter one or as the richer one, and the price is set by the position on the scale, not by the materials. A buyer who buys on the scale is paying for position and not for substance, and the substance is the only thing that will actually be on the skin. The two facts, the band and the materials, can disagree entirely, and there is no rule that keeps them in agreement.',
          'It follows that the label, read honestly, is a first word in a comparison and not the last. The last word is the list of materials and the intended use, and those are in the document, not on the bottle. A buyer who wants the label to do the whole job has confused one kind of statement for another, and the confusion is not the label error: it is a question asked of a band rather than a composition.',
        ],
        bodyAr: [
          'ملصق التركيز نوع من الادعاءات، وهو أضعفها: يسمّي نطاق نسبة ويتوقف عنده. أما المستند الذي يسمّي المواد ونسبها والاستخدام المقصود فبيان من نوع آخر تمام، وهو الذي على المشتري أن يطلبه حين لا يكفي الملصق وحده. والشيئان ليسا جسداً واحداً: فقد يحمل عطرٌ أعدل ملصق بلا بيان لما في الداخل، والملصق يبقى نطاقاً لأنه نطاق.',
          'وهنا موضع يستحق تسمية الوهم الذي يعمل به الملصق. فالسلم مرتَّب، فمحت العطر بأنه الأخف أو الأغزر، وسُعر بمكانه على السلم لا بموادها. ومن اشترى على السلم فقد دفع للمكان لا للمادة، والمادة وحدها هي التي ستستقر على البشرة. والواقعتان، النطاق والمواد، قد تختلفان تمام، ولا قاعدة تبقيهما متوافقتين.',
          'وتترتب على ذلك أن الملصق، إن قُراءة بصدق، كلمة أول في المقارنة لا آخر. والكلمة الأخيرة قائمة المواد والاستخدام، وهما في المستند لا في القارورة. ومن يريد أن يؤدي الملصق كل العمل فقد خلط بين نوعين من البينات، والخلل ليس في الملصق: إنه سؤال سئل عن نطاق لا عن تركيب.',
        ],
      },
      {
        heading: 'Where the label stops working',
        headingAr: 'أين يتوقف الملصق عن العمل',
        body: [
          'The label stops working at the boundary of what it is. It answers a question of amount, and it is a rough answer, because the band is not a measurement and no two fragrances on the band are the same amount. It does not answer a question of quality, of composition or of performance, and it is not a place to put such answers. A fragrance described by its label alone, with no other information, is a fragrance with one fact, and that fact is a range.',
          'The consequence is that the label is a useful first filter and nothing more. A buyer who knows the scale, and knows that the scale is ordered by proportion and not by any other quality, can use it to narrow a set of fragrances and to set an expectation of staying power. The expectation is a rough one, because it is built from a band and not a measurement, and it is a starting point rather than a conclusion.',
          'And the label is not a claim of performance. A perfume that does not behave as the scale suggests does not disprove the label: the label was never a promise of performance, it was a position on a scale. The performance question belongs to the materials and to the composition, and those are not on the label. What the label does and does not say should be kept separate, because mixing them is how a position on a scale quietly becomes a promise of a result.',
        ],
        bodyAr: [
          'يتوقف الملصق عند حد ما هو عليه. فهو يجيب عن سؤال الكمية، ويجيب إجابة تقريبية، لأن النطاق ليس قياساً ولا تتطابق قارورتان على النطاق في الكمية. وهو لا يجيب عن سؤال الجودة أو التركيب أو الأداء، وليس موضعا يضع فيه أحد إجابات. فالعطر الموصف بملصقه فقط دون معلومة أخرى هو عطر واقعة واحدة، والواقعة نطاق.',
          'والنتيجة أن الملصق مرشح أول مفيد لا أكثر. فالمشتري الذي يعرف السلم، ويعرف أن السلم مرتَّب بالكمية لا بجودة أخرى، يستعمله لضيق مجموعة العطور ولوضع توقع تقريبي للمدى. والتوقع تقريبي، لأنه مبني على نطاق لا على قياس، وهو نقطة بداية لا نتيجة.',
          'والملصق ليس ادعاء أداء. فعطر لا يتصرف كما يوحي السلم لا ينقض الملصق: فالمقصود لم يكن وعد أداء، بل موقف على سلم. وسؤال الأداء يعود للمواد والتركيب، وكلاهما ليس في الملصق. ويجب أن يُميّز ما يقوله الملصق وما لا يقوله، لأن الخلط بينهما هو الطريق الذي يتحول به الموقف على سلم إلى وعد بنتيجة.',
        ],
      },
    ],
  },

  'fragrance/notes-versus-ingredients': {
    sections: [
      {
        heading: 'The two documents that do answer',
        headingAr: 'المستندان اللذان يجيبان فعلا',
        body: [
          'The question about what is inside a bottle, asked at full seriousness, needs two documents, and they are different documents. One is the list of materials, which names the substances, and sometimes their proportions. The other is the declaration of the oud material specifically: which kind of agarwood, whether it is a distillation or a blend or an accord, and where the agarwood in the accord, if any, came from. Each is a record that can be written, checked and disagreed with. Neither is a description of an impression.',
          'The reason the two are separate is that they answer different questions at different levels. The materials list answers the question of substance, what is inside the bottle, and it is a fact that can be read and can be wrong. The oud declaration answers the question of the material specifically, and it is a record about one material rather than the whole composition. A buyer who asks for both has asked for the complete picture, and a supplier who can provide both has provided it. A supplier who can provide neither has a description, not a record.',
          'What the two documents do together, and neither does alone, is to settle the question the note list will not settle. The note list is a map of an experience, the two documents are a map of a substance, and the map of the substance is what a buyer can hold, check and match against a later bottle. The experience map and the substance map can disagree, and when they do, the substance map is the one to follow, because it is the one that corresponds to the material in hand.',
        ],
        bodyAr: [
          'سؤال ما في القارورة، إن أُلحّ عليه جدياً، يحتاج مستنديين مختلفين. الأول قائمة المواد، تسمّي المواد وأحياناً نسبها. والثاني تصريح مادة العود بعينها: أي نوع خشب عود، وهل هو تقطير أم مزيج أم أوز، ومن أين جاء خشب العود في الأوز إن كان موجوداً. وكلاهما سجلّ يمكن كتابته وفحصه والإيراد معه. وواحد منهما ليس وصفاً لانطباع.',
          'وسبب انفصال المستنيين أن كل واحد يجيب عن سؤال مختلف في مستوى مختلف. فقائمة المواد تجيب عن سؤال الجوهر: ما في القارورة، وهي واقعة تُقرأ وقد تكون خاطئة. وتصريح العود يجيب عن سؤال المادة بعينها، وهو سجل عن مادة واحدة لا عن التركيب كله. ومن طلب الاثنين فقد طلب الصورة الكاملة، ومن قدّهما المورّد فقد قدّمها. ومن لم يقدّم واحداً منهما عنده وصف لا سجل.',
          'وما يقومان به معاً، ولا يقدر عليه واحد منهما، هو حسم السؤال الذي تقف أمامه قائمة النوتات. فقائمة النوتات خريطة تجربة، والمستندان خريطة جوهر، وخريطة الجوهير هي ما يستطيع المشتري أن يحفظه ويفحصه ويقيس عليه القارورة اللاحقة. وقد تختلف خريطة التجربة عن خريطة الجوهير، وإذا اختلفتا فالخريطة الثانية ما يُتبع، لأنها ما يطابق المادة في اليد.',
        ],
      },
      {
        heading: 'The buyer who stops at the description',
        headingAr: 'المشتري الذي يتوقف عند الوصف',
        body: [
          'The note list is accurate as far as it goes, and that is why it is not the place to stop. It tells the buyer how the fragrance will unfold over time, and a buyer who wants that information can take it and be fully served. A buyer who wants to know what is inside the bottle, and who takes the note list for an answer, is asking a different question of the same document, and the document cannot carry the different question. The failure is not in the note list and not in the document. The failure is in the assumption that a map of an experience is a map of a substance.',
          'That assumption is what makes the oud word work in two directions at once. As a note it describes an impression, and the word is doing its job. As a contents claim it asserts a substance, and the word is now a different word with a different job. The two uses are not the same word with two meanings. They are two different questions, and the buyer who holds one while asking the other is working with a map that does not show the territory. The territory, the substance, is only shown by the material declaration, and the declaration is only as good as the record that backs it.',
        ],
        bodyAr: [
          'قائمة النوتات دقيقة حتى حيث تتوقف، ولهذا ليس المكان المناسب للتوقف عندها. فهي تخبر المشتري كيف يتطور العطر مع الوقت، ومن أراد هذه المعلومة يأخذها ويُكتفى. ومن أراد أن يعرف ما في القارورة وأخذ قائمة النوتات إجابة عن سؤال مختلف من المستند نفسه، والمستند لا يحمل السؤال المختلف. والخلل ليس في قائمة النوتات ولا في المستند، بل في الافتراض أن خريطة تجربة هي خريطة جوهر.',
          'وافتراض ما هو الذي يجعل لفظ العود يعمل في الاتجاهين معاً. كنوتة يصف انطباعاً، فيؤدّي اللفظ عمله. وكادعاء محتوى يقترح جوهراً، واللفظ الآن لفظ آخر بعمل آخر. والاستعمالان ليسا لفظاً واحداً بمعنيين، بل سؤالان مختلفان، ومن أمسك أحدهما عن السؤال الآخر يعمل بخريطة لا ترسم الأرض. والأرض، الجوهير، لا ترسمه إلا تصريح المادة، والتصريح لا يصح إلا بالسجل الذي يؤكده.',
        ],
      },
    ],
  },

  'fragrance/oud-accords': {
    sections: [
      {
        heading: 'The three places the distinction is drawn',
        headingAr: 'المواقع الثلاثة التي يُرسم فيها التمييز',
        body: [
          'The distinction between an accord and a distillation is not one line but three, and each is drawn by a different pair of hands. The first is the material specification, where the material is named as a fragrance material rather than as a natural one. The second is the proportion, where the share of the accord in the finished product is given as a figure. The third is the record, where the buyer has a document to hold and match against the product. A buyer who receives all three has been told the whole story, and a buyer who receives none has been sold an impression.',
          'Where all three are drawn, the purchase is a clean one. The material is what it is said to be, the proportion is a figure rather than a word, and the record is something that can be held. Where only one is drawn, the purchase is open at the other two, and the buyer is filling the gaps with a description that is not a record. The number of lines that are not drawn is not a measure of the quality of the product. It is a measure of how much of the story the buyer still has to tell themselves.',
        ],
        bodyAr: [
          'التمييز بين الأوز والتقطير ليس سطر واحد بل ثلاثة، ويرسم كل منها بيدان مختلفان. الأول مواصفة المادة، حيث تُسمّى المادة مادة عطرية لا مادة طبيعية. الثاني النسبة، حيث تُعطى حصة الأوز في المنتج النهائي رقماً. الثالث السجل، حيث يكون لدى المشتري مستند يحفظه ويقيس عليه المنتج. ومن استلم الثلاثة فقد أُخبر بالقصة كاملة، ومن لم يستلم أيها فقد بيعه انطباع.',
          'وحيث تُرسم الثلاثة تكون الشراء نظيفاً. فالمادة ما قيل إنها، والنسبة رقم لا لفظ، والسجل شيء يُحفَظ. وحيث يُرسم واحد تبقى الشراء مفتوحاً على الاثنين الآخرين، والمشتري يملأ الفجوات بوصف ليس سجلا. وعدد الأسطر التي لم تُرسم ليس مقياس جودة المنتج، بل هو مقياس كم من القصة ما زال على المشتري أن يقصّها على نفسه.',
        ],
      },
      {
        heading: 'The two materials side by side',
        headingAr: 'المادتان جنبا إلى جنب',
        body: [
          'The comparison that settles the confusion is the one that puts the two materials next to each other. A distillation, taken at its full description, is a natural material with a known origin, a known method of extraction and a character that develops over time. An accord is a manufactured material with a known composition, a known supplier and a character that is fixed. Each, at its full description, is what it says it is. The confusion comes from describing one at its full length and the other at its name only.',
          'The practical habit is to keep both at the same length. A fragrance described as oud, with the word left at that, is a fragrance with one word in its record, and the word does not say which of the two materials it is. A fragrance described as a distillation, with the record that comes with it, and a fragrance described as an accord, with the record that comes with it, are two fragrances whose records can be compared. The comparison is not a judgment about quality, and it is not a reason to prefer one. It is the only way to keep two different materials from being sold under one word.',
        ],
        bodyAr: [
          'المقارنة التي تحسم الخلط هي التي تضع المادتين جنباً إلى جنب. فالتقطير، مأخوذاً بوصفه الكامل، مادة طبيعية لها منشأ معلوم وطريقة استخلاص معلومة وطابع يتطور مع الوقت. والأوز مادة مصنوعة لها تركيب معلوم ومورّد معروف وطابع ثابت. وكل واحدة، في وصفها الكامل، ما تقول إنها. والخلط يأتي من وصف إحداهما وصفها كاملاً والأخرى باسمها فقط.',
          'والعادة العملية أن تُبقي الاثنتين بطول واحد. فعطر يوصف بالعود، واللفظ متوقف عنده، هو عطر لفظ واحد في سجله، واللفظ لا يقول أي المادتين هو. وعطر يوصف تقطير مع سجله، وعطر يوصف أوز مع سجله، عطران سجلهما قابل للمقارنة. والمقارنة ليست حكماً بالجودة ولا سبباً لترجيح، بل هي الطريقة الوحيدة لإبقاء مادتين مختلفتين لا يُباعان تحت لفظ واحد.',
        ],
      },
    ],
  },

  'fragrance/perfumers-and-credits': {
    sections: [
      {
        heading: 'The credit and the record, and why they are not the same document',
        headingAr: 'الإسناد والسجل، ولماذا ليسا مستنداً واحداً',
        body: [
          'A credit is a statement in a catalogue, and a record is a statement in a file, and the two have different purposes. The credit says who is acknowledged for the composition, and it is written for a reader who is choosing between fragrances. The record says what was done, by whom, at what point, and it is written for a buyer or an auditor who wants to know. A house that keeps a credit but no record is keeping one of the two, and the one it is keeping is the one that does not survive a question.',
          'The difference is not a gap in the credit, because the credit was not written to close it. The credit is a professional acknowledgement, and it is the industry way of saying that a person did a thing and the industry knows. The record is a document that can be held, matched and checked, and it is the way of saying that a thing was done and the doing can be shown. Neither is wrong, and the buyer who takes the credit for the record is taking one thing for another, and the two are not one.',
          'The practical reading of a credit, taken this way, is to know what it is and to ask for what it is not. The credit says who is named and why, and that is all it says. The what it is not, the record, the material data, the batch reference, is a separate question, and it is the question a buyer should ask when the credit alone does not settle the purchase. The two, kept separate, do their different jobs. Mixed together, the credit carries a weight it was never made to carry.',
        ],
        bodyAr: [
          'الإسناد عبارة في فهارس، والسجل عبارة في ملف، والعرضان لهما غرضان مختلفان. فالإسناد يقول مَن مُنح التكريم في التركيب، وهو يُكتَب لقارئ يختار بين العطور. والسجل يقول ما أُجري، ومَن أجزاه، وفي أي مرحلة، وهو يُكتَب لمشتري أو مدقق يريد أن يعرف. والدار التي تحتفظ بالإسناد ولا تحتفظ بالسجل تحتفظ بإحدهما لا بالثاني، وهذا هو الذي لا يصمد أمام سؤال.',
          'والفرق ليس ثغرة في الإسناد، لأن الإسناد لم يُكتب لسدّها. فهو اعتراف مهني، وهو الطريقة التي تقول بها الصناعة إن شخصاً فعل شيئاً والعلم بهذا عام. والسجل مستند يمكن حفظه ومطابقته وفحصه، وهو الطريقة التي تقول بها إن شيئاً أُجري ويمكن إظهار أجره. وواحد منهما ليس خطأ، والمشتري الذي يأخذ الإسناد مكان السجل يأخذ شيئاً مكان آخر، والاثنان ليسا واحداً.',
          'والقراءة العملية للإسناد، على هذا الأساس، أن يُعرف ما هو وأن يُطلب ما ليس هو. فالإسناد يقول مَن ذُكر ولمَ، وهذا كل ما يقول. وما ليس هو، أي السجل وبيانات المادة ومرجع الدفعة، سؤال منفصل، وهو السؤال الذي على المشتري أن يطرحه حين لا يحسم الإسناد الشراء وحده. وهما، إذا أُبقيا منفصلين، يؤدّيان عملين مختلفين. وإذا اختُليا حمل الإسناد وزناً لم يُصنع له.',
        ],
      },
      {
        heading: 'The signature, and what it does not sign',
        headingAr: 'التوقيع، وما لا يوقّعه',
        body: [
          'The word signature is doing a great deal of work when it is attached to a perfumer credit, and it is doing more work than the credit does. A signature on a contract is an act with legal effect, and it means the signer is bound by what is written. A perfumer credit attached to a house product is not an act with legal effect, and it means the house acknowledges the perfumer. The two are different words with different jobs, and a buyer who reads the perfumer credit as a signature is reading one word as the other.',
          'What the credit does not sign, and this is the point the word signature quietly blurs, is the quality of the work, the materials chosen, and the process. A perfumer signature on a bottle, in the trade usage, is an acknowledgement of authorship, not a guarantee of composition. The composition is a fact that exists in the bottle, and the acknowledgement is a fact that exists in the catalogue. The two can be entirely different, and the signature does not reach across the gap to bring them into agreement.',
          'The practical habit is to keep the two facts in their separate places. The credit, read as a credit, is one fact: a person is acknowledged for a composition. The composition, as it is in the bottle, is a separate fact: a set of materials in specific proportions. The signature, and the word signature, does not connect the two, and a buyer who wants the connection has to ask for the document that makes it, which is the material record rather than the catalogue page.',
        ],
        bodyAr: [
          'كلمة «توقيع» تؤدّي عملا كثيرا حين تُربط بإسناد العطار، وتستعمل أكثر مما يستعمل الإسناد. فتوقيع على عقد فعل له أثر قانوني، ومعناه أن الموقّع ملزم بما كُتب. وإسناد عطار مرافق لمنتج دار ليس فعلاً قانونياً، ومعناه أن الدار تعترف بالعطار. وكلمتان مختلفتان بعمَلين مختلفين، ومن يقرأ إسناد العطار كتوقيع يقرأ كلمة مكان أخرى.',
          'وما لا يوقّعه الإسناد، وهذا هو النقطة التي تمحو كلمة التوقيع بدها، هو جودة العمل والمواد المختارة والعملية. فتوقيع عطار على القارورة، بالاستعمال التجاري، اعتراف بمؤلفية لا ضمان تركيب. والتركيب واقعة في القارورة، والاعتراف واقعة في الفهرس. وقد يكونا مختلفين تمام، والتوقيع لا يعبر الجرة ليصل بينهما.',
          'والعادة العملية إبقاء الواقعتين في موضعيهما. فالإسناد، مقروءا بإسناد، واقعة واحدة: شخص مُتكرم على تركيب. والتركيب، كما هو في القارورة، واقعة أخرى: مجموعة مواد بنسبة محددة. وكلمة التوقيع لا تصل بينهما، ومن أراد الصلة عليه أن يطلب المستند الذي يجعلها، وهو سجل المادة لا صفحة الفهرس.',
        ],
      },
    ],
  },
};
