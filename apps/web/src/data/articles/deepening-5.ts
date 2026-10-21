import type { Deepening } from './types.ts';

/**
 * The fifth batch of deepening sections.
 *
 * Production, quality and trade questions. The rule is the same as in the
 * earlier batches: more of the thing the guide is about, never a restatement
 * of what the page already says.
 *
 * These sections carry no source ids of their own. They reason from what the
 * article already establishes, plus how contracts, samples, records, units,
 * inspections and regulation work in general.
 */
export const DEEPENING_5: Record<string, Deepening> = {
  'production/from-wood-to-oil': {
    sections: [
      {
        heading: 'The handover between steps',
        headingAr: 'التنازل بين الخطوات',
        body: [
          'The four steps on this page are not usually done by the same party, and the gaps between them are where a good deal of what goes wrong happens. The wood may be prepared at one works and distilled at another. Distillation may be contracted out to someone with a still, and bottling may be done closer to the market. Each of these is ordinary practice. None of them is visible in the bottle.',
          'The consequence is that a buyer who wants to know whether the oil came from the wood described has to assemble the records for the steps, not simply hold one record for the oil. A batch record that names the material, the run and the bottling is what links the chain. Where that link is broken, the buyer has a well-made oil from a starting point nobody can name, and no way to close the difference.',
        ],
        bodyAr: [
          'الخطوات الأربع الواردة في هذه الصفحة لا تُنفَّذ عادةً من جهة واحدة، والفجوات بينها هي موضع كثير مما يخطئ. فالخشب قد يُجهَّز في مشغَل ويُقطَّر في مشغَل آخر. وقد يُسنَد التقطير إلى من يملك قِدراً، والتعبئة قد تتم أقرب إلى السوق. وكل ذلك ممارسة مألوفة. ولا شيء منها يظهر في القارورة.',
          'والنتيجة أن المشتري الذي يريد أن يعرف إن كان الزيت قد جاء من الخشب الموصوف عليه أن يجمع سجلات الخطوات، لا أن يمسك بسجل واحد عن الزيت. والسجل الذي يسمّي المادة والجولة والتعبئة هو ما يصل السلسلة. وحين ينقطع هذا الوصل، يكون المشتري أمام زيت جيد من مادة أصلها مجهول، ولا وسيلة له أن يسدّ الفارق.',
        ],
      },
      {
        heading: 'What the bottle can and cannot show',
        headingAr: 'ما تُظهره القارورة وما لا تُظهره',
        body: [
          'A bottle is a poor record, and it is often the only record a buyer will ever hold. It carries a colour, a level, a clarity and a closure, and each of those says something limited. Oil that has separated into layers says the separation was not finished or that the storage was poor. Oil that has hazed says something is in it that was not in a clean distillate. A level below the mark says loss by evaporation or a leak.',
          'None of these observations identifies a material, dates a run or establishes a method. They are clues about condition, and a clue that fits several explanations cannot settle one. Their practical use is to decide whether the next question is worth asking. A hazy bottle is a reason to ask what was done to the oil after distillation. It is not a reason to conclude anything about the wood it came from.',
        ],
        bodyAr: [
          'القارورة سجل فقير، وهي السجل الوحيد الذي سيحتفظ به أغلب المشترين. فيها لون ومستوى ووضوح وإغلاق، وكل واحد منها يقول شيئاً محدوداً. والزيت الذي انفصل إلى طبقات يقول إن الفصل لم يكتمل أو إن التخزين كان سيئاً. والزيت الذي تحيّب يقول إن فيه شيئاً لم يكن في ناتج نظيف. والمستوى الأقل من العلامة يوحي بفقد بالتبخر أو بتسريب.',
          'ولا تُعرّف أيٌّ من هذه الملاحظات مادة، ولا تؤرّخ جولة، ولا تثبت طريقة عمل. إنها قرائن عن الحالة، والقرينة التي تتسق مع عدة تفسيرات لا تحسم تفسيراً واحداً. وفائدتها العملية أن تقرّر إن كان السؤال التالي يستحق أن يُطرح. القارورة المعكّسة سببٌ لتسأل ما الذي جرى للزيت بعد التقطير. وليست سبباً لتستنتج شيئاً عن الخشب الذي جاء منه.',
        ],
      },
      {
        heading: 'The material that never reaches the bottle',
        headingAr: 'المادة التي لا تصل إلى القارورة',
        body: [
          'Most of the original tree does not become oil. The non-resinous wood, the bark, the sawdust from breaking the log down and the exhausted chips left in the still are by-products, and the oil is the only fraction of the tree that a buyer ever holds in their hand. A buyer weighing a bottle of oil against a log of wood is comparing two different amounts of material, and the ratio between them is not a fixed figure.',
          'That ratio is not something a supplier can quote, because the answer depends on the wood, the run and the still. What can be quoted is what a buyer cares about: the quantity of oil from a stated quantity of wood of a stated origin, and even that is a claim that needs a record behind it.',
        ],
        bodyAr: [
          'معظم الشجرة الأصلية لا تصير زيتاً. فالخشب غير الراتنجي، واللحاء، ونشارة الخشب من كسر الجذع، والرقائق المستنزفة في القدر، كلّها نواتج ثانوية، والزيت هو الجزء الوحيد من الشجرة الذي يحتفظ به المشتري في يده. والمشتري الذي يزن قارورة زيت في مقابل جذع خشب يقارن كميتين مختلفتين من مادة واحدة، والنسبة بينهما ليست رقماً ثابتاً.',
          'وهذه النسبة ليست أمراً يستطيع المورد أن يثبته، لأن الجواب يعتمد على الخشب والجولة والقدر. وما يمكن ذكره هو ما يهم المشتري: كمية الزيت من كمية معلومة من خشب منشأه معلوم، وحتى ذلك دعوى تحتاج سجلاً يسندها.',
        ],
      },
    ],
  },

  'production/oud-extraction-methods': {
    sections: [
      {
        heading: 'How the difference shows up in the bottle',
        headingAr: 'كيف يظهر الفرق في القارورة',
        body: [
          'A buyer will usually meet the two methods as a comparison between two samples, and the differences show in ways that can be described without a laboratory. Copper distillation tends to carry more colour and a resinous haze, and its character is described as warmer and smokier. Steam distillation tends to give a clearer, thinner oil with the top notes more forward and less of the heavy material carried across. These are tendencies rather than guarantees, because a still is run by a person and not by a standard.',
          'The simplest way to see the difference is to put a drop of each on a paper blotter and let them dry side by side. The heavier oil leaves more of itself behind on the paper and takes longer to fade; the lighter one spreads further and leaves less. Nothing here establishes a species, a date or a method of record. It establishes that two oils are not the same oil, which is the question most buyers are actually asking.',
        ],
        bodyAr: [
          'يلتقي المشتري عادةً بالنمطين في صورة مقارنة بين عيّنتين، ويظهر الفرقان بطرق يمكن وصفها دون مختبر. فالتقطير النحاسي يميل إلى أن يحمل لوناً أكثر وغشوة راتنجية، ويُوصف طابعه بأنه أدفأ وأدخاني أكثر. أما التقطير بالبخار فيميل إلى إعطاء زيت أصفى وأرفع، ونتائجه العليا أكثر حضوراً، مع انتقال أقل للجزء الثقيل. وهذه ميول لا ضمانات، لأن القدر يُشغّله إنسان لا معيار.',
          'وأبسط طريقة لرؤية الفرق أن تضع قطرة من كل منهما على منديل ورقي وتتركهما تجفّان جنباً إلى جنب. فالزيت الأثقل يترك من نفسه على الورق أكثر ويأخذ وقتاً أطول ليخفت؛ والأخفّ ينتشر أبعد ويترك أقل. ولا يثبت شيءٌ هنا عن نوع ولا عن تاريخ ولا عن طريقة مسجّلة. لكنه يثبت أن زيتين ليسا الزيت نفسه، وهذا هو السؤال الذي يسأله المشتري في الغالب.',
        ],
      },
      {
        heading: 'Questions that separate one method from another',
        headingAr: 'أسئلة تفصل طريقة عن أخرى',
        body: [
          'The methods are easier to tell apart from the answers to a few operational questions than from the name on a quotation. Does the still run at atmospheric pressure or under pressure. Is the heat from a fire or from an outside source. Is the charge washed before it goes in, and how long the run lasts. Whether the oil is taken off in one pass or in fractions. Each of these has an answer, and each of them changes the oil.',
          'None of these answers is a quality judgement, and a supplier who gives them is describing a process rather than marketing one. A supplier who cannot answer them is not concealing anything. They have simply not watched the run closely enough to describe it, and that is worth knowing before an order is placed.',
        ],
        bodyAr: [
          'أسهل في تمييز الطريقتين من إجابات بعض الأسئلة التشغيلية مما هو من الاسم المكتوب في عرض السعر. هل يعمل القدر بالضغط أم بالضغط الجوي. هل الحرارة من نار أم من مصدر خارجي. هل تُغسل الحزمة قبل إدخالها، وكم تدوم الجولة. هل يُؤخذ الزيت في مرور واحد أم على دفعات. لكلٍّ من هذه إجابة، وكلٌّ منها يغيّر الزيت.',
          'ولا واحدة من هذه الإجابات حكمٌ على الجودة، ومن يجيب عنها يصف عمليةً لا يبيع وعداً. ومن لا يستطيع الإجابة عنها ليس يكتم شيئاً؛ فهو لم يراقب الجولة عن قرب بما يكفي لوصفها، وهذه معلومة تستحق أن تعرفها قبل وضع الطلب.',
        ],
      },
      {
        heading: 'The wood that comes out of the still',
        headingAr: 'الخشب الذي يخرج من القدر',
        body: [
          'What is left in the still after a run is spent wood: chips that have given up most of what they had. It is rarely something a buyer is shown, and it is the clearest physical trace of how hard the still was worked. Where it is available, it is worth asking to see, because exhausted chips and a full bottle of pale oil do not sit comfortably together. Where it is not available, the run remains something the buyer has taken on trust.',
        ],
        bodyAr: [
          'ما يبقى في القدر بعد الجولة هو خشب مستنفد: رقائق وقدت معظم ما كانت تملكه. وهو نادراً ما يُعرض على مشتري، وهو أوضح أثر مادي لكيفية إجهاد القدر. وحين يكون متاحاً، يستحق أن يُطلب رؤيته، لأن الرقائق المستنفدة وقارورة ممتلئة من زيت باهت لا يجتمعان بسهولة. وحين لا يكون متاحاً، تبقى الجولة أمراً قبله المشتري على الثقة.',
        ],
      },
    ],
  },

  'production/processing-location': {
    sections: [
      {
        heading: 'When one consignment is processed twice',
        headingAr: 'حين تُعالَج شحنة واحدة مرتين',
        body: [
          'A lot of wood is split before it is distilled. Part is distilled where the wood was bought, part is shipped out as wood and distilled in another country, and the buyer receives two oils from one source. The two have different processing locations and different paperwork, and the description of the origin will be the same on both. A seller who says the material is from one place has not necessarily said where each part of it was worked.',
          'The practical consequence is that a permit covering wood does not automatically cover oil made from that wood in a third country. A buyer matching one part of the chain against documents issued for another part will find a mismatch that looks like a problem and is really a description of the trade.',
        ],
        bodyAr: [
          'كثيراً ما يُقسَّم الخشب قبل تقطيره. فجزء يُقطَّر حيث اشتُري الخشب، وجزء يُشحن خشباً ويُقطَّر في بلد آخر، فيستلم المشتري زيتين من مصدر واحد. وللاثنين موقع معالجة مختلف وورق مختلف، ووصف المنشأ سيكون واحداً في الحالتين. فمن يقول إن المادة من مكان واحد لم يقل بالضرورة أين عولج كل جزء منها.',
          'والنتيجة العملية أن تصريحاً يغطي الخشب لا يغطي تلقائياً زيتاً صنع من ذلك الخشب في بلد ثالث. ومن يقابل جزءاً من السلسلة بأوراق صدرت لجزء آخر سيلقى اختلافاً يبدو عيباً وهو في الحقيقة وصف للتجارة.',
        ],
      },
      {
        heading: 'The rule that travels, and the rule that applies',
        headingAr: 'القاعدة التي تسافر، والقاعدة التي تُطبَّق',
        body: [
          'Each document in a consignment is issued under the rules of the country that issued it. An export permit is issued by the exporting authority and travels with the goods. An import permit, where one is required, has to be issued by the importing country before the goods arrive, and it is not a formality: it is the point at which the receiving country decides what may enter and on what terms. A file can be complete in the exporting country and still be missing the document that matters in the importing one.',
          'A buyer working through a supplier’s file should therefore note which authority issued each document, and separately note which authority will apply to the goods on arrival. The two are not the same, and a file that names only the first gives no indication of whether the second is in order.',
        ],
        bodyAr: [
          'كل وثيقة في الشحنة تصدر وفق قواعد البلد الذي أصدرها. فتصريح التصدير يصدر عن سلطة بلد التصدير ويسافر مع البضاعة. وتصريح الاستيراد، حيث يُشترط وجوده، لا بد أن يصدر عن بلد الاستيراد قبل وصول البضاعة، وهو ليس إجراءً شكلياً: هو النقطة التي تقرر فيها الدولة المستقبلة ما الذي يدخل وشروط دخوله. فيمكن لملف أن يكون كاملاً في بلد التصدير ويظل خالياً من الوثيقة المهمة في بلد الاستيراد.',
          'ولهذا ينبغي لمن يراجع ملف مورد أن يدوّن أيّ جهة أصدرت كل وثيقة، وأن يدوّن على حدة أيّ جهة ستنطبق على البضاعة عند وصولها. والاثنان ليسا واحداً، والملف الذي يذكر الأول وحده لا يدل على شيء في شأن الثاني.',
        ],
      },
      {
        heading: 'Bottled somewhere else',
        headingAr: 'معبّأة في مكان آخر',
        body: [
          'Filling is sometimes done in a third country, and this separates two things that are usually run together. The analysis a buyer receives describes what happened at the distillation, wherever that was. The label, the batch record and the responsible party for the product in the market belong to the filling country. A bottle can therefore carry a batch record from one country and be sold under a responsible party in another, and a buyer who expects the two to match is asking for something the trade does not do.',
        ],
        bodyAr: [
          'التعبئة تُجرى أحياناً في بلد ثالث، وهذا يفصل أمرين يُجرى عادةً معاً. فالتحليل الذي يستلمه المشتري يصف ما جرى عند التقطير أينما كان. أما البيان وسجل الدفعة والمسؤول عن المنتج في السوق فينتميان إلى بلد التعبئة. ولذلك قد تحمل القارورة سجل دفعة من بلد وتُباع بمسؤول عن المنتج من بلد آخر، ومن يتوقع أن يتطابقا يطلب شيئاً لا تفعله التجارة.',
        ],
      },
    ],
  },

  'quality/lab-report-reading': {
    sections: [
      {
        heading: 'Between the parcel and the instrument',
        headingAr: 'بين الطرد وجهاز القياس',
        body: [
          'A report describes one portion of one container. Getting from the parcel to that portion involves decisions that the report itself does not record: which container was opened, where in it the material was taken from, whether the sample was mixed before it was drawn, how much of it was needed, and how long it waited before analysis. A sample drawn from the top of a vessel and one drawn after the vessel was mixed can differ, and neither difference shows up in the result.',
          'This is why a report is more useful when it names the sample than when it describes the material. A batch reference, a seal, a retained portion and a stated sampling point are what allow a reader to tie a number to a parcel. Without them the report is a true statement about a substance that can no longer be connected to anything else.',
        ],
        bodyAr: [
          'يصف التقرير جزءاً واحداً من إناء واحد. والانتقال من الطرد إلى ذلك الجزء يمرّ بقرارات لا يسجّلها التقرير نفسه: أيّ إناء فُتح، ومن أيّ موضع في أُخذت العيّنة، وهل خلطت العيّنة قبل سحبها، وكم احتاج منها، وكم انتظرت قبل التحليل. والعينة المسحوبة من أعلى الوعاء تختلف عن عينة سُحبت بعد الخلط، ولا يظهر هذا الفرق في النتيجة.',
          'ولهذا يكون التقرير أنفع إذا سمّى فيه العيّنة من أن وصف المادة. فمرجع الدفعة، والختم، والجزء المحتفظ به، ونقطة السحب المعلنة هي ما يتيح لقارئ أن يربط رقماً بطرد. وبلا هذه العناصر يبقى التقرير قولاً صحيحاً عن مادة لم يعد بالإمكان وصلها بأي شيء آخر.',
        ],
      },
      {
        heading: 'What to ask for before the sample is drawn',
        headingAr: 'ما يُطلب قبل سحب العيّنة',
        body: [
          'Most of the useful questions can be asked before anything is analysed, and asking them then costs less than asking afterwards. What the sampling plan will be. Whether a portion will be retained, and for how long. Which method is intended, and what that method is designed to detect. Whether the report will say anything about origin, and if not, whether it will say so explicitly. A laboratory that answers these questions is describing a report it intends to write.',
          'The last of those answers matters more than it looks. A report that states its own limits is a document a buyer can argue from. A report that says nothing about what it did not test leaves the reader to guess, and the guess a reader is most likely to make is that the silence means the test was passed.',
        ],
        bodyAr: [
          'أكثر الأسئلة النافعة يمكن طرحها قبل أي تحليل، وطرحها حينئذٍ أرخص من طرحها بعده. ما خطة السحب. هل سيُحتفظ بجزء، وكم مدة الاحتفاظ. أيّ طريقة مقصودة، وما الذي صُممت هذه الطريقة لكشفه. هل سيقول التقرير شيئاً عن المنشأ، وإن لم يكن فهل سيقول إنه لا يقول. ومختبر يجيب عن هذه الأسئلة يصف تقريراً ينوي كتابة.',
          'وإجابة السؤال الأخير أهم مما تبدو. فالتقرير الذي يعلن حدوده وثيقة يستطيع المشتري أن يناقش بناءً عليها. أما التقرير الذي لا يقول شيئاً عما لم يُختبر فيترك القارئ يخمّن، وأرجح ما يخمّنه القارئ أن السكون يعني أن الاختبار كان ناجحاً.',
        ],
      },
    ],
  },

  'trade/agarwood-documentation': {
    sections: [
      {
        heading: 'A document attests to a process',
        headingAr: 'الوثيقة تشهد لعملية',
        body: [
          'Every instrument in this trade is written about a process. A non-detriment finding is an assessment of a collecting programme and of the consent under which it operates. An export permit is an authorisation of a consignment by an authority. An import permit is a decision by a receiving authority about what may enter. None of them is a description of the wood, and none of them is a statement about resin, age or quality.',
          'The distinction is worth holding on to, because these documents are usually presented in a way that invites the opposite reading. A file that arrives complete and stamped looks like a verdict on the material inside it. It is not. It is the record that the material was allowed to move, and the material inside the parcel remains whatever it was.',
        ],
        bodyAr: [
          'كل أداة في هذه التجارة مكتوبة عن عملية. فـ«نتيجة عدم الإضرار» تقييم لبرنامج جمع وإذنٍ بإبرائه ذلك البرنامج. وتصريح التصدير تفويض من سلطة بشحنة محدّدة. وتصريح الاستيراد قرار من دولة مستقبلة بشأن ما يمكن إدخاله. ولا واحد منها وصفٌ للخشب، ولا واحد منها بيانٌ عن الراتنج ولا العمر ولا الجودة.',
          'والتمييز يستحق الإبقاء عليه، لأن هذه الوثائق تُقدَّم عادةً بصيغة تدعو إلى عكسه. فملف يصل كاملاً مختوماً يبدو حكماً على المادة التي بداخله. وليس كذلك. إنه سجل يفيد بأن المادة أُذن بنقلها، والمادة داخل الطرد تبقى على ما كانت عليه.',
        ],
      },
      {
        heading: 'The order these documents arrive in',
        headingAr: 'ترتيب وصول هذه الوثائق',
        body: [
          'The sequence matters as much as the set. The non-detriment finding has to exist before a plant is cut, because it is the finding that the collection may proceed at all. The export permit authorises a specific consignment and is issued for it. The import permit, where the importing country requires one, has to be in place before the goods arrive. Three documents, three different moments, and none of them substitutes for another.',
          'A file that arrives out of that order has told the buyer something. It may be nothing more than a copy handed over in the wrong sequence, but it may also be a file assembled to answer a question after the fact rather than to record a process as it happened. The buyer cannot tell which from the documents alone, and should say so rather than assume the favourable reading.',
        ],
        bodyAr: [
          'ترتيب الوثائق لا يقل أهمية عن مجموعها. فـ«نتيجة عدم الإضرار» لا بد أن تكون قائمة قبل قطع الشجرة، لأنها هي التي تجيز الجمع أصلاً. وتصريح التصدير يفوّض شحنة بعينها ويُصدر لها. وتصريح الاستيراد، حيث تشترطه الدولة المستوردة، لا بد أن يكون قائباً قبل وصول البضاعة. ثلاث وثائق، وثلاث لحظات مختلفة، ولا واحدة منها تحلّ محلّ الأخرى.',
          'والملف الذي يصل خارج هذا الترتيب قد أخبر المشتري بشيء. قد لا يكون سوى نسخة سُلّمت بترتيب خاطئ، وقد يكون ملفاً جُمّع ليردّ على سؤال متأخر لا أن يسجّل عملية وقعت كما حدثت. ولا يستطيع المشتري أن يعرف أيّهما من الوثائق وحدها، والأصحّ أن يقول ذلك بدل أن يفترض القراءة الملائمة له.',
        ],
      },
      {
        heading: 'What is not in the file',
        headingAr: 'ما ليس في الملف',
        body: [
          'No document in this trade records the moment a particular tree was cut. The tree is recorded as a species and a quantity within a consignment. What happened at the cutting — how much resin had formed, how the wood was handled, how long it lay before it was worked — is written down nowhere in the file. For that part of the story the buyer is dependent on the supplier’s account.',
        ],
        bodyAr: [
          'لا وثيقة في هذه التجارة تسجّل لحظة قطع شجرة بعينها. فتسجَّل الشجرة نوعاً وكمية ضمن شحنة. وأما ما جرى عند القطع — كم من الراتنج قد تكوّن، وكيف نُقل الخشب، وكم ظلّ راكداً قبل تشغيله — فلا يُكتب في أي مكان من الملف. وفي هذا الجزء من الحكاية يعتمد المشتري على رواية المورد.',
        ],
      },
    ],
  },

  'trade/document-review-limits': {
    sections: [
      {
        heading: 'Three ways a good file still fails',
        headingAr: 'ثلاث طرق يفشل فيها الملف الجيد',
        body: [
          'A file can be complete, consistent and stamped, and still fail to prove the material. It fails first when it describes a different consignment — a set of permits issued for an earlier lot that has been re-used because the paperwork looked right. It fails second when the document is valid but the thing it covers has changed since: the quantity topped up after the permit was issued, or the consignment split and part of it shipped elsewhere.',
          'It fails third when the file is right about the wood and silent about the oil. Permits and certificates issued for a wood consignment are commonly carried forward to cover the oil made from it, and the two differ in scope, in quantity and in the form that crosses the border. None of these failures is visible from the file alone, which is precisely why the file cannot be the last word.',
        ],
        bodyAr: [
          'قد يكون الملف كاملاً ومتسقاً ومختوماً، ومع ذلك لا يثبت المادة. فهو يفشل أولاً حين يصف شحنة أخرى: مجموعة تصاريح صدرت لوط أقدم فأُعيد استعمالها لأن الأوراق بدت صحيحة. ويفشل ثانياً حين تكون الوثيقة سارية لكن ما تغطيه قد تغيّر بعدها: فالكمية استُكملت بعد إصدار التصريح، أو قُسّمت الشحنة وسُئل جزء منها.',
          'ويفشل ثالثاً حين يكون الملف صحيحاً في الخشب وصامتاً في الزيت. فالتصاريح والشهادات الصادرة لشحنة خشب تُحمل عادةً لتغطي الزيت المصنوع منها، والاثنان يختلفان في النطاق وفي الكمية وفي الشكل الذي يعبر الحدود. ولا يظهر أيٌّ من هذه الإخفاقات من الملف وحده، وهذا بالضبط سبب أن الملف لا يمكن أن يكون الكلمة الأخيرة.',
        ],
      },
      {
        heading: 'The outcome of a review is a list of open questions',
        headingAr: 'نتيجة المراجعة قائمة أسئلة مفتوحة',
        body: [
          'A document review that has been done properly ends with a set of statements rather than a verdict. It can say what is documented: which instruments exist, which authority issued each, whether they cover this consignment, whether the dates and quantities are consistent across the set. It can say what is absent: no import permit where one is expected, no link between the batch record and the sample, no processing statement for the country in which the oil was made.',
          'What it cannot do is close the question of what is inside the parcel. That question is not answered by the file, and a review that presents it as answered has not done its job. The honest output is a list of what remains open, together with the document that would close each one.',
        ],
        bodyAr: [
          'المراجعة السليمة للوثائق تنتهي بعبارات لا بحكم. فهي تستطيع أن تقول ما هو موثّق: أيّ الأدوات موجودة، وأيّ جهة أصدرت كل واحدة، وهل تغطي هذه الشحنة، وهل التواريخ والكميات متسقة عبر المجموعة. وتستطيع أن تقول ما هو غائب: لا تصريح استيراد حيث يُتوقع وجوده، ولا صلة بين سجل الدفعة والعيّنة، ولا بيان معالجة للبلد الذي صنع فيه الزيت.',
          'ولا تستطيع أن تُغلق سؤال محتوى الطرد. فذاك السؤال لا يجيب عنه الملف، والمراجعة التي تقدّمه على أنه مجاب عنها لم تُنجز عملها. والمخرج الصادق قائمة بما يبقى مفتوحاً، مع الوثيقة التي تُغلق كلاًّ منها.',
        ],
      },
      {
        heading: 'The two errors a review makes',
        headingAr: 'الخطآن اللذان تقع فيهما المراجعة',
        body: [
          'Two errors recur. The first is reading the absence of a document as evidence of a breach, when the far more common explanation is that the document was never required for this shipment or was handled by another party. The second is reading the presence of a document as evidence that the shipment is legitimate, which is the assumption this page exists to unsettle.',
          'A third error is quieter. Names appear in different forms across documents, dates are written in different conventions, and units are not always the same. A mismatch that is a rendering artefact looks exactly like a mismatch that is a problem, and the only way to tell them apart is to look at the underlying instrument in the issuing authority’s own format.',
        ],
        bodyAr: [
          'يتكرر خطآن. الأول أن يُقرأ غياب الوثيقة دليلاً على مخالفة، والسبب الشائع جداً هو أن الوثيقة لم تُطلَب لهذه الشحنة أو أدارتها جهة أخرى. والثاني أن يُقرأ وجود الوثيقة دليلاً على مشروعية الشحنة، وهو الافتراض الذي وُجدت هذه الصفحة أصلاً لتزعزعه.',
          'وهناك خطأ ثالث أهدأ. فالأسماء ترد بأشكال مختلفة عبر الوثائق، والتواريخ تُكتب بحسب عادات مختلفة، والوحدات ليست واحدة دائماً. والاختلاف الناتج عن اختلاف الصياغة يشبه تماماً الاختلاف الذي يدل على مشكلة، والطريقة الوحيدة للتفريق بينهما هي النظر في المستند الأصلي بالصيغة التي أصدرته بها الجهة صاحبة الصلاحية.',
        ],
      },
    ],
  },

  'trade/shipping-wood-oil-perfume': {
    sections: [
      {
        heading: 'The paperwork changes as the product changes form',
        headingAr: 'تغيّر الأوراق مع تغيّر شكل المنتج',
        body: [
          'A lot does not keep one set of documents for its whole life. Wood leaves the country of origin under a permit issued for wood, with a botanical description and a phytosanitary treatment for plant material. If it is distilled before it leaves, the oil that travels is described by a different set of papers, and the permit that covered the wood does not travel with the bottle or cover what is in it.',
          'This is not a defect in the paperwork. It is what happens when one consignment becomes two products, and it is why a document set assembled for a wood shipment and a document set assembled for an oil shipment should not be compared line by line. The useful question is whether each set covers the form that is actually shipping.',
        ],
        bodyAr: [
          'لا يحتفظ اللوط بمجموعة واحدة من الأوراق طوال حياته. فالخشب يغادر بلد المنشأ تحت تصريح صادر للخشب، مع وصف نباتي ومعالجة نباتية للمادة النباتية. فإن قُطِّر قبل أن يغادر، كان الزيت الذي يسافر موصوفاً بمجموعة مختلفة من الأوراق، والتصريح الذي غطّى الخشب لا يرافق القارورة ولا يغطي ما فيها.',
          'وهذا ليس عيباً في الأوراق. إنها نتيجة تحوّل شحنة واحدة إلى منتجين، ولهذا لا ينبغي مقارنة مجموعة أوراق أُعدّت لشحنة خشب بمجموعة أوراق أُعدّت لشحنة زيت سطراً سطراً. والسؤال النافع هو هل تغطي كل مجموعة الشكل الذي يُشحن فعلاً.',
        ],
      },
      {
        heading: 'When the oil travels with a carrier',
        headingAr: 'حين يسير الزيت بحامل',
        body: [
          'Oil is often shipped diluted, in a carrier that makes it stable and safe to handle, and the dilution changes what the paperwork can describe. A declaration of composition has to account for the carrier as well as the oil, a label has to account for the concentration, and the customs description of the goods becomes a description of a preparation rather than of a substance. The same oil in the same bottle can be two different products in the eyes of a receiving authority, depending on what is in it.',
          'The same applies to a concentrate that is reconstituted at destination. What arrives is the result of a dilution that happened somewhere other than under the eye of the person who bought it, and any composition figure quoted for the oil before reconstitution describes a product that is not the one on the shelf.',
        ],
        bodyAr: [
          'يُشحن الزيت غالباً مخفَّفاً، في حامل يجعله مستقراً وآمناً في المناولة، والتخفيف يغيّر ما تستطيع الأوراق وصفه. فبيان التركيب لا بد أن يأخذ الحامل بالحسبان إلى جانب الزيت، والبيان لا بد أن يأخذ التركيز بالحسبان، ووصف الجمارك للبضاعة يصير وصفاً لمستحضر لا لمادة. والزيت نفسه في القارورة نفسها قد يكون منتجين مختلفين في عيني الجهة المستقبلة، بحسب ما هو فيه.',
          'والشيء نفسه ينطبق على المركّز الذي يُعاد تخفيفه في بلد الوصول. فما يصل هو نتيجة تخفيف جرى في مكان غير موضع المشتري، وأي رقم تركيب يُذكر للزيت قبل التخفيف يصف منتجاً ليس هو المنتج المعروض.',
        ],
      },
      {
        heading: 'The check that happens on arrival',
        headingAr: 'الفحص الذي يقع عند الوصول',
        body: [
          'Most consignment checks are done before dispatch, and they describe a container that may not be the one that arrives. The check that carries more weight happens at the other end: the seal against the number on the delivery note, the label against the invoice, the marks on the container against the marks on the paperwork, and the quantity inside against the quantity declared. These are dull checks and they catch more than the elegant ones.',
          'A receiver who records them produces something the sender cannot, which is an observation of the parcel as it arrived. That observation is not a laboratory result and it establishes nothing about the contents beyond the parcel. It does establish that the parcel that landed is the parcel the documents describe, which is a smaller claim than the one most people hope for.',
        ],
        bodyAr: [
          'معظم فحوص الشحنات تجري قبل الإرسال، وهي تصف حاوية قد لا تكون هي التي وصلت. والفحص الذي يحمل وزناً أكبر يقع في الطرف الآخر: الختم مقابل الرقم على سند التسليم، والبيان مقابل الفاتورة، والعلامات على الحاوية مقابل العلامات على الأوراق، والكمية في الداخل مقابل الكمية المصرّح عنها. وهي فحوص مملة، وتلتقط أكثر مما تلتقط الفحوص الأنيقة.',
          'والمستلم الذي يدوّنها ينتج شيئاً لا يستطيع المرسل إنتاجه، وهو ملاحظة للطرد كما وصل. وهذه الملاحظة ليست نتيجة مخبرية ولا تثبت شيئاً عن المحتوى خارج الطرد. لكنها تثبت أن الطرد الذي وصل هو الطرد الذي تصفه الأوراق، وهذه دعوى أصغر مما يأمله أغلب الناس.',
        ],
      },
    ],
  },
};
