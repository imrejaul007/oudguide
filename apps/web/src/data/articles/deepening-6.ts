import type { Deepening } from './types.ts';

/**
 * The sixth batch of deepening sections.
 *
 * The five `using-oud/` guides that no other session owns: labelling and
 * storing samples, reading intended-use instructions, skin-intended oils,
 * burning oud wood, and the wood-against-oil choice.
 *
 * Same rule as the earlier batches: more of the thing the guide is about,
 * never a restatement of what the page already says. No new sources — a
 * deepening section carries none of its own; it merges into an article
 * that already has its sources.
 */
export const DEEPENING_6: Record<string, Deepening> = {
  'using-oud/label-and-store-samples': {
    sections: [
      {
        heading: 'An identifier that still reads next year',
        headingAr: 'معرّف لا يزال مقروءاً بعد عام',
        body: [
          'A name you invent on the day, like first sample from supplier A, is fine on the day and useless on the tenth sample from that supplier in the third month. A usable identifier carries the facts the label already states, so it stays true when the paper is out of sight. A code built from supplier, batch and date is still decodable a year later, and it cannot drift into describing a different sample than the one it was written for.',
          'The point is not neatness. It is that the code does the work the memory does not. When the label is detached, or when two containers that look alike sit side by side, the identifier is the only thing that still points at the right material. A system you can apply to the next sample without thinking is one you will keep applying.',
          'A good identifier is also one that survives being read by someone else. If the code is a string of figures explained by a notebook, it is only as good as the notebook. A code that carries the supplier and the date in the order the sample was received can be read by anyone holding the sample, and the notebook only has to fill in the rest.',
        ],
        bodyAr: [
          'اسم تبتكره في اليوم، مثل أول عيّنة من المورد أ، لا بأس به في ذلك اليوم، لكنه عديم الفائدة عند العيّنة العاشرة من المورد نفسه في الشهر الثالث. أما المعرّف الصالح للاستعمال فيحمل الوقائع التي يحملها الملصق أصلاً، فيبقى صادقاً حتى إذا غاب الورق عن الأنظار. والترميز المبني على المورد والدفعة والتاريخ يبقى قابلاً للقراءة بعد عام، ولا ينحرف إلى وصف عيّنة أخرى غير التي كُتب من أجلها.',
          'والمقصود ليس الأناقة، بل أن الترميز يقوم بما لا تقوم به الذاكرة. فإذا انفصل الملصق، أو جرت وعاءان متشابهان جنباً إلى جنب، لا يبقى المعرّف إلا الشيء الذي ما زال يشير إلى المادة الصحيحة. والنظام الذي تستطيع تطبيقه على العيّنة التالية دون تفكير هو النظام الذي ستواصل تطبيقه.',
          'والمعرّف الجيد هو أيضاً معرّف يصمد حين يقرؤه شخص آخر. فإذا كان الترميز سلسلة أرقام يفسّرها دفتر، فهو لا يجاوز قيمة الدفتر نفسه. أما الترميز الذي يحمل اسم المورد والتاريخ بالترتيب الذي وصلت فيه العيّنة فيقرأه كل من يحمل العيّنة، ولا يبقى للدفتر إلا أن يكمل ما تبقّى.',
        ],
      },
      {
        heading: 'How a sample collection goes wrong',
        headingAr: 'كيف تفسد مجموعة العينات',
        body: [
          'A sample set rarely fails because a single label is written badly. It fails because the set is moved. A consolidation into a new box, a re-sealing, or two like containers traded on a shelf each break the pairing between the record and the material it describes, and the break is silent: the boxes still look right, and only the contents are wrong.',
          'Re-opening a sample is the other quiet failure. A sample opened to check on it is no longer its sealed baseline; the record has to say it was opened and when, or the later comparison is made against something that was not what you thought you were comparing. The two habits are cheap and stop most of the damage: write down the move or the opening on the day, and do not trust a container past its last written record.',
        ],
        bodyAr: [
          'نادراً ما تفسد مجموعة العينات بسبب ملصق واحد سيئ الكتابة، بل بسبب نقل المجموعة. فتجميعها في صندوق جديد، أو إعادة إحكامها، أو استبدال وعاءين متشابهين على الرف، كل ذلك يكسر الاقتران بين السجل والمادة التي يصفها، والانكسار صامت: فالصناديق تبدو سليمة، والمحتوى وحده هو المخطئ.',
          'وإعادة فتح العيّنة هي الخلل الصامت الآخر. فالعيّنة التي فُتحت للتفقّد لم تعد خطّ الأساس المغلق، ولا بد أن يقول السجل إنها فُتحت ومتى، وإلا جرى المقارنة اللاحقة على شيء لم يكن هو ما ظننت أنك تقارن به. والعادتان زهيدتان وتوقفان معظم الضرر: أن تكتب نقل العيّنة أو فتحها في اليوم نفسه، وألا تثق بوعاء بعد آخر سجل مكتوب له.',
        ],
      },
    ],
  },

  'using-oud/reading-product-instructions': {
    sections: [
      {
        heading: 'What a condition actually limits',
        headingAr: 'ما الذي يحدّه الشرط فعلاً',
        body: [
          'A condition does not describe the product; it describes the evaluation. It says this material was checked for this use, under these limits. So the condition’s real job is to draw a line, and the line is where the supplier’s responsibility ends and the buyer’s responsibility begins. Inside it, the buyer is relying on an evaluation that covers them; outside it, they are relying on nothing the product paperwork established.',
          'That has a consequence that is easy to miss. A product used outside its stated conditions is not a product that misbehaved; it is a product used in a way that was never checked. The difference matters when something goes wrong, because the failure belongs to the use, not to the material, and the record that settles who was responsible is the condition that was present, or absent.',
          'Conditions are also the part of the label that changes with the buyer, not with the product. Guidance is written for the person who uses the bottle as sold; conditions are written for the person who puts the product somewhere else. That is why the same oil can carry a condition that is unremarkable to one user and decisive to another, and why the same product can be entirely ordinary in one supply chain and out of scope in another.',
        ],
        bodyAr: [
          'الشرط لا يصف المنتج، بل يصف التقييم. فهو يقول إن هذه المادة فُحصت لهذا الاستخدام، بهذه الحدود. فمهمّة الشرط الحقيقية هي رسم خط، وهذا الخط هو حيث ينتهي مسؤولية المورد وتبدأ مسؤولية المشتري. فداخل الخط يعتمد المشتري على تقييم يشمله، وخارجه لا يعتمد على شيء أثبتهت أوراق المنتج.',
          'ولهذا نتيجة يسهل أن تغفل. فالمنتج المستعمَل خارج شروطه المعلنة ليس منتجاً أخطأ سلوكه، بل منتج استُعمل بطريقة لم تُفحص قط. والفرق يظهر عند وقوع خلل، لأن الخلل يعود إلى الاستعمال لا إلى المادة، والسجل الذي يحسم المسؤولية هو الشرط الذي كان موجوداً، أو غائباً.',
          'والشروط هي أيضاً الجزء من الملصق الذي يتغيّر بحسب المشتري لا بحسب المنتج. فالإرشاد يُكتب لمن يستعمل القارورة كما بيعت، والشرط يُكتب لمن يضع المنتج في موضع آخر. ولهذا قد يحمل الزيت نفسه شرطاً لا يستدعي عناية عند مستخدم ويكون حاسماً عند آخر، ولهذا قد يكون المنتج نفسه عادياً تماماً في سلسلة إمداد واحدة وخارج نطاق التقييم في أخرى.',
        ],
      },
      {
        heading: 'When the documents disagree',
        headingAr: 'حين تختلف الوثائق',
        body: [
          'Conditions can sit in more than one place, and they can disagree. A label and a data sheet that name different intended uses are not two statements of the same fact; one of them is the one the evaluation was run against, and the other is either stale or wider than the work behind it. Where they differ, the documentation that carries the conformity statement is the one to read first, because it is the one that says what was actually assessed.',
          'An absence of a condition is not a permission. If a use you want is not prohibited anywhere, that is not evidence it was evaluated; it is only that nobody wrote a prohibition. The two look identical on a shelf and are very different in the record, so the buyer who is relying on a use that is merely not banned is carrying the evaluation gap, not the supplier one.',
        ],
        bodyAr: [
          'وقد توجد الشروط في أكثر من موضع، وقد تختلف. فالملصق وورقة البيانات اللذان يسمّيان استخدامين مقصودين مختلفين ليسا تقريرين لواقعة واحدة؛ أحدهما هو ما جرى التقييم على أساسه، والآخر إما قديم أو أوسع من العمل الذي خلفه. وحيث يختلفان، تكون الوثيقة التي تحمل بيان المطابقة هي التي تُقرأ أولاً، لأنها هي التي تقول ما قيِّم فعلاً.',
          'وغياب الشرط ليس إذناً. فإذا كان استعمال تريده ممنوع في موضع ما، فليس هذا دليلاً على أنه قيِّم، بل يعني فقط أن أحداً لم يكتب منعاً. والاثنان يبدوان متطابقين على الرف ومختلفان تماماً في السجل، فالمشتري الذي يعتمد على استعمال لم يُمنع فحسب يحمل ثغرة التقييم، لا ثغرة المورد.',
        ],
        callout: {
          title: 'Ask for the document, not the assurance',
          titleAr: 'اطلب الوثيقة، لا التأكيد',
          body: 'If the intended use is not written where you can see it, you are not covered by an evaluation you cannot point to. Ask for the documentation, and treat a supplier’s willingness to name the specific product, the supplier and the use as the test of whether a check was done at all.',
          bodyAr: 'إذا لم يكن الاستخدام المقصود مكتوباً في موضع تراه، فأنت غير مغطّى بتقييم لا تستطيع أن تشير إليه. فاطلب الوثائق، واعتبر استعداد المورد أن يسمّي المنتج المعيّن والمورد والاستخدام اختباراً لما إذا كان قد جرى فحص أصلاً.',
        },
      },
    ],
  },

  'using-oud/skin-intended-fragrance-oils': {
    sections: [
      {
        heading: 'What the designation does not say',
        headingAr: 'ما لا يقوله التصنيف',
        body: [
          'A skin-intended designation establishes that the formulation was evaluated for contact with skin. It does not establish that the formulation will be well tolerated by the person who is wearing it. The evaluation is against the stated use and the standard it was run to; it is not a personal safety finding. Skin differs, and sensitivities differ, so a product that clears the evaluation for skin use still leaves the individual response to the person wearing it.',
          'So the statement is a boundary, not a guarantee. It tells the buyer that this is not the material that should be kept off the skin, and it does not tell the buyer that they personally will have no reaction. Reading the two things as one is the error the page is set out to prevent.',
          'A product marked not for skin is not defective. It is a product made for something else, and a buyer who wants it on skin is asking it to do a job it was not evaluated for. The designation is useful because it tells the buyer which question to ask next, and the answer is more often a different product than a different method of using the same one.',
        ],
        bodyAr: [
          'يثبت تصنيف «للبشرة» أن التركيبة قيِّمت لتلامس البشرة. ولا يثبت أن التركيبة سيتقبلها من سيلبسها تحمّلاً حسناً. فالتقييم يجري على أساس الاستخدام المعلن والمعيار الذي جُري على أساسه، وليس حكماً على سلامة شخص بعينه. فالجلد يختلف، والحساسية تختلف، فالمنتج الذي يجتاز التقييم للاستخدام على البشرة يبقى يترك الاستجابة الفردية لمن سيلبسه.',
          'فالبيان حدّ، لا ضمان. فهو يقول للمشتري إن هذه ليست المادة التي ينبغي إبعادها عن البشرة، ولا يقول له إنه شخصياً لن يُصاب بأي تفاعل. وقراءة الأمرين على أنهما شيء واحد هو الخطأ الذي وضعت هذه الصفحة لتفاديه.',
          'والمنتج الموسوم بأنه ليس للبشرة ليس معيباً. فهو منتج صُنع لغرض آخر، ومن يريده على البشرة يطلبه أن يقوم بعمل لم يُقوَّم له. والتصنيف نافع لأنه يبيّن للمشتري السؤال التالي، والجواب يكون في الغالب منتجاً آخر لا طريقة أخرى لاستعمال المنتج نفسه.',
        ],
      },
      {
        heading: 'Dilution changes the product',
        headingAr: 'التخفيف يغيّر المنتج',
        body: [
          'A skin-intended oil is still a concentrate, and it has to be carried in something. The carrier, and the proportion of carrier, change the product you are actually using. An oil diluted to one strength is a different formulation from the same oil diluted to another, and the evaluation ran against the one that was tested, not against every dilution a buyer might mix.',
          'The consequence is practical. When a use you want is achieved by a dilution the supplier did not specify, you are no longer inside the evaluation that the label points to, for the same reason that using the product outside its conditions is: the check was run against a stated product, and your mixture is not that product. The label still says what was evaluated; it does not follow the dilution you choose.',
          'The same reading applies to the word skin itself. It describes the use, not the person: it tells the buyer where the product was evaluated for use, and it says nothing about the concentration a given use needs, or about the other materials it will meet on the skin. Those are separate questions, and a buyer who wants them answered has to ask them separately, in writing.',
        ],
        bodyAr: [
          'يبقى الزيت المخصص للبشرة زيتاً مركّزاً، ولا بد من أن يحمله شيء. والحامل، ونسبة الحامل، يغيّران المنتج الذي تستعمله فعلاً. فالزيت المخفَّف إلى قوة صيغة مختلفة عن الزيت نفسه المخفَّف إلى قوة أخرى، والتقييم جُري على الصيغة التي اختُبرت، لا على كل تخفيف قد يمزجه المشتري.',
          'والنتيجة عملية. فإذا تحقق استعمال تريده بتخفيف لم يحدده المورد، فقد خرجت من نطاق التقييم الذي يشير إليه الملصق، للسبب نفسه الذي يجعل استعمال المنتج خارج شروطه خروجاً من النطاق: لأن الفحص جُري على منتج معلن، ومزيجك ليس ذلك المنتج. فالملصق لا يزال يقول ما قيِّم، لكنه لا يتبع التخفيف الذي تختاره.',
          'والقراءة نفسها تنطبق على كلمة «بشرة» نفسها. فهي تصف الاستعمال لا الشخص: تبيّن للمشتري أين قيِّم المنتج للاستعمال، ولا تقول شيئاً عن التركيز الذي يحتاجه استعمال بعينه، ولا عن المواد الأخرى التي سيلتقي بها على البشرة. وهذه أسئلة منفصلة، وعلى من يريد إجاباتها أن يسألها منفصلة، بالكتابة.',
        ],
      },
    ],
  },

  'using-oud/using-oud-wood': {
    sections: [
      {
        heading: 'The cut is the other half of the heat',
        headingAr: 'الشكل هو النصف الآخر من الحرارة',
        body: [
          'The heat source is half of what determines how a wood burns; the cut is the other half, because it sets how much of the resin is at the surface and how fast it can reach it. Powder gives its scent quickly and is spent quickly; a chip holds a longer burn; a block is the slowest and the most to control, and the most to lose if the heat is wrong.',
          'The practical point is that the cut that suits one piece of equipment will not suit another, and it is the cut, not the promise on the label, that has to match the burner. A buyer who picks a cut for one device and then moves the wood to another is asking for a different result without changing anything the result actually depends on.',
          'The cut also decides how much of the wood is used up in a sitting. A fine cut gives a stronger, shorter event; a coarse cut gives a longer, gentler one. Neither is better, but they are not interchangeable, and a piece bought on the assumption that it will give several long burns rarely does.',
        ],
        bodyAr: [
          'مصدر الحرارة نصف ما يحدد كيف يحترق الخشب، وشكل القطعة هو النصف الآخر، لأنه يحدد كم من الراتنج موجود على السطح وكم بسرعة يبلغه. فالمسحوق يعطي رائحته بسرعة ويُستهلك بسرعة، والرقائق تحتفظ باحتراق أطول، والكتلة هي الأبطأ والأصعب ضبطاً، والأكثر خسارة إن أخطأت الحرارة.',
          'والنقطة العملية أن الشكل الذي يناسب جهازاً لا يناسب جهازاً آخر، وأن ما ينبغي أن يطابق المحرق هو الشكل لا الوعد على الملصق. فمن يختار شكلاً لجهاز ثم ينقل الخشب إلى آخر يطلب نتيجة مختلفة دون أن يغيّر شيئاً مما تعتمد عليه النتيجة فعلاً.',
          'والشكل يقرر أيضاً كم من الخشب يُستهلك في الجلسة الواحدة. فالشكل الدقيق يعطي حدثاً أقوى وأقصر، والشكل الخشن يعطي حدثاً أطول وألطف. ولا واحد منهما أفضل، لكنهما غير قابلين للتبادل، وقطعة تُشترى على افتراض أنها ستمنح احتراقات طويلة متعددة نادراً ما تفعل ذلك.',
        ],
      },
      {
        heading: 'What can still be read before the first burn',
        headingAr: 'ما لا يزال مقروءاً قبل أول احتراق',
        body: [
          'Before a sample is burned it can still be read, and what it tells you then is gone afterwards. A fresh break shows how far the resin runs; the weight of the piece for its size is a check on how much of it is resin and how much is ordinary wood; and the scent at the break, not at the surface, is the one that matters.',
          'That reading is only worth doing on the day, because a burn consumes the evidence. A piece that has been put to the burner cannot be put back, so the observation has to happen before the commitment, and it should be written down on the same day, for the reason the sample page gives: a year later, the only record of what the wood was like is the one that was made while it was in front of you.',
          'A burn is also the only test that produces a scent, so a piece bought to be smelled and a piece bought to be used are not bought on the same evidence. The first needs a description of what the material is; the second needs to be put to the burner. Which one a piece is being bought for is worth settling before it is lit, because after the first burn there is no second reading of it.',
        ],
        bodyAr: [
          'قبل أن يُحرق الخشب يمكن قراءته، وما يقوله لك حينئذٍ يزول بعد ذلك. فالقطع الطازج يُظهر مدى امتداد الراتنج، ووزن القطعة قياساً لحجمها يتحقق من نسبة الراتنج فيها إلى الخشب العادي، ورائحة القطع الطازجة لا رائحة السطح هي المهمة.',
          'وهذه القراءة لا قيمة لها إلا في يومها، لأن الاحتراق يستهلك الدليل. فالقطعة التي وُضعت على المحرق لا تُرد، فيجب أن تقع الملاحظة قبل الالتزام، وأن تُكتب في اليوم نفسه، للسبب الذي تعطيه صفحة العينات: فبعد عام لا يبقى من سجل ما كان عليه الخشب إلا ما كُتب وهو أمامك.',
          'والاحتراق هو الاختبار الوحيد الذي ينتج رائحة، فالقطعة المشتراة لئن تُشمّ والقطعة المشتراة لتُستعمل لا تُشترى بالدليل نفسه. والأولى تحتاج وصفاً لما هي المادة، والثانية تحتاج إلى وضعها على المحرق. وأمر يستحق أن يُحسم قبل إشعالها: أيّهما تشتري القطعة لأجله، فبعد أول احتراق لا توجد قراءة ثانية لها.',
        ],
      },
    ],
  },

  'using-oud/wood-versus-oil': {
    sections: [
      {
        heading: 'Two different ways to fail',
        headingAr: 'طريقتان مختلفتان في الفشل',
        body: [
          'Wood and oil fail in different ways, and neither failure can be repaired with the other format. A wood fails in the burn: smoke, or a resin that does not reach the surface, or a cut the equipment cannot handle. An oil fails in the carrier: a dilution that was not the one evaluated, an ageing that has moved past the point the use wants, or a concentrate that was never meant for a given surface. Changing the oil does not fix the wood, and changing the wood does not fix the oil, which is the point the page makes when it says the two are not substitutes.',
          'That is why which is better is the wrong question. The question is which failure the buyer is prepared to live with, and which use the material is actually being put to. A format chosen for the use it suits fails less often; a format chosen for the cheaper price fails more often, because the cheaper one is the one whose failure mode the buyer did not account for.',
        ],
        bodyAr: [
          'الخشب والزيت يخفقان بطرق مختلفة، ولا يمكن إصلاح أي خلل بالشكل الآخر. فالخشب يخفق في الاحتراق: دخان، أو راتنج لا يبلغ السطح، أو شكل لا يتعامل معه المعدن. والزيت يخفق في الحامل: تخفيف لم يكن هو الذي قيِّم، أو تعتيق تجاوز النقطة التي يريدها الاستعمال، أو زيت مركّز لم يُقصد له سطح بعينه. وتغيير الزيت لا يصلح الخشب، وتغيير الخشب لا يصلح الزيت، وهذه هي النقطة التي تقولها الصفحة حين تقرر أن الشكلين ليسا بديلين.',
          'ولهذا السؤال الخاطئ هو: أيّهما أفضل. فالسؤال هو أيّ الخلل يكون المشتري مستعداً للعيش معه، وما هو الاستعمال الذي ستوضع فيه المادة فعلاً. والشكل المختار للاستعمال الذي يناسبه يخفق أقل، والشكل المختار بسبب سعره الأدنى يخفق أكثر، لأن الأرخص هو الذي لم يحسب المشتري موضع فشله.',
        ],
      },
      {
        heading: 'Where the two formats meet, and where they do not',
        headingAr: 'حيث يتلاقى الشكلان وحيث لا يتلاقيان',
        body: [
          'There is one place the two meet: a wood that has been distilled has given up most of its resin, and the oil is what came out of that distillation. A buyer who wants to burn the wood has, by buying the distilled version, already removed the thing they wanted to burn; and a buyer who took the wood only to get the oil out of it has paid for the wood without doing the distilling, so the oil they intended to have is the oil they would have bought more cheaply.',
          'The two do not meet in sampling. A sample of oil tells a buyer about oil, and a sample of wood tells them about wood; the properties of one do not predict the properties of the other, so using a sample of one format to decide on a bulk purchase of the other is a comparison the record will not support. The sample and the bulk have to be the same material in the same form, or the comparison is not between like things.',
        ],
        bodyAr: [
          'هناك موضع واحد يتلاقيان فيه: الخشب الذي قُطّر فقد معظم راتنجه، والزيت هو ما خرج من ذلك التقطير. فمن يريد حرق الخشب يكون قد نزع بالفعل الشيء الذي يريد حرقه حين يشتري النسخة المقطّرة؛ ومن أخذ الخشب ليستخرج منه الزيت يكون قد دفع ثمن الخشب دون أن يقطّر، فيكون الزيت الذي قصده هو الزيت الذي كان يشتريه بأرخص.',
          'ولا يتلاقيان في أخذ العينات. فالعيّنة من الزيت تقول للمشتري عن الزيت، والعيّنة من الخشب تقول له عن الخشب؛ وخصائص أحدهما لا تتنبأ بخصائص الآخر، فاستخدام عيّنة من شكل واحد للقرار في شراء بالجملة من الشكل الآخر مقارنة لا يسندها السجل. ولا بد أن تكون العيّنة والكمية بالجملة من المادة نفسها بالشكل نفسه، وإلا لم تكن المقارنة بين أشياء مماثلة.',
        ],
      },
    ],
  },
};
