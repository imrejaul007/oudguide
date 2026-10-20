import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

/**
 * The using, fragrance, culture and collecting articles.
 *
 * These answer the questions a reader arrives with after they have
 * decided what to buy: how to use it, how it is described in
 * perfumery, where it sits culturally, and what happens to a collection.
 */

export const usingFragranceArticles: Article[] = [
  simpleGuide({
    slug: 'using-oud/wood-versus-oil',
    parent: 'using-oud',
    title: 'Wood versus oil: choose a format',
    titleAr: 'الخشب مقابل الزيت: اختر الشكل',
    summary:
      'The two formats are not substitutes. What each is for, what each costs, and why buying the wrong one wastes money.',
    summaryAr: 'الشكلان ليسا بديلين. ما لكلٍّ منهما، وما تكلفته، ولماذا يشتري أحدهما خطأً فيهدر المال.',
    directAnswer:
      'Wood and oil are different products with different uses, different yields and different failure modes. Wood is for distillation, for burning, and occasionally as an object. Oil is for fragrance and for application. A buyer who wants a specific quantity of oil should buy oil: distilling wood yourself recovers a fraction of its weight, and the time, equipment and fuel are all yours. A buyer who wants to smell a material before committing to a sample set should buy a retail quantity of oil, because that is what they will actually be buying in bulk.',
    directAnswerAr:
      'الخشب والزيت منتجان مختلفان لهما استعمالاتهما ومردودهما ومواضع فشلهما. الخشب للتقطير، وللحرق، وأحياناً كقطعة. والزيت للعطر وللاستعمال. ومن يريد كمية محددة من الزيت ينبغي أن يشتري الزيت: فالتقطير الذاتي يستعيد جزءاً من وزن الخشب، والوقت والمعدات والوقود كلها على حسابك. ومن يريد أن يشمّ مادة قبل الالتزام بمجموعة عينات فليشترِ كمية تجزئة من الزيت، لأن ذاك ما سيشتريه بالجملة.',
    sections: [
      {
        heading: 'What each is for',
        headingAr: 'ما لكلٍّ منهما',
        body: [
          'Wood: three uses, with different requirements. For distillation you want resin content and species, and you need a still. For burning you want resin distributed through the chip and a cut that suits your equipment. As an object, you want a piece that is well formed and pleasantly scented, which is a question about the piece rather than about the material.',
          'Oil: two uses that matter to most people. As a concentrate in a fine fragrance, where the carrier, the concentration and the ageing all matter. And as something applied to incense or to a diffuser, where the carrier and the scent profile matter more than the ageing.',
          'The cost shapes this too. A kilogram of resinous wood can be a fraction of the price of a tola of good oil, because only a fraction of the wood becomes oil. But the comparison is not like for like: the wood still has to be distilled, and the oil has to be bought.',
        ],
        bodyAr: [
          'الخشب: ثلاثة استعمالات، ومتطلبات مختلفة. للتقطير تريد نسبة راتنج ونوعاً، وتحتاج مِقطَّراً. للحرق تريد راتنجاً منتشراً في الرقائق وشكلاً يناسب معداتك. وكقطعة تريد قطعة حسنة الشكل ذات رائحة طيبة، وهذا سؤال عن القطعة لا عن المادة.',
          'الزيت: استعمالان يهمّان معظم الناس. كمركّز في عطر فاخر، حيث يهم الحامل والتركيز والتعتيق. وكشيء يُطبَّق على البخور أو الناشر، حيث يهم الحامل والطابع العطري أكثر من التعتيق.',
          'والتكلفة تحدّد ذلك أيضاً. فالكيلوغرام من الخشب الراتنجي قد يكون جزءاً من سعر التولا من الزيت الجيد، لأن جزءاً فقط من الخشب يصير زيتاً. غير أن المقارنة ليست بين أشياء مماثلة: فالخشب لا يزال يحتاج تقطيراً، والزيت لا يزال يحتاج شراءً.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022'],
    limitations:
      'This page compares the two formats in general terms. It does not state a price, a yield, or a distillation cost, and it does not assess any particular lot or supplier.',
    limitationsAr:
      'تقارن هذه الصفحة الشكلين بصورة عامة. ولا تذكر سعراً ولا مردوداً ولا تكلفة تقطير، ولا تقيّم أي لوط أو مورد بعينه.',
    nextSteps: ['Read how to choose a wood purchase', 'Read how to choose an oil purchase', 'Read how to use oud wood'],
    nextStepsAr: ['اقرأ كيف تختار شراء خشب', 'اقرأ كيف تختار شراء زيت', 'اقرأ كيف تستخدم خشب العود'],
    related: [
      { slug: 'buying/choosing-oud-wood', label: 'Choosing an oud wood purchase' },
      { slug: 'buying/choosing-oud-oil', label: 'Choosing an oud oil purchase' },
      { slug: 'using-oud/using-oud-wood', label: 'Using oud wood with suitable equipment' },
    ],
  }),

  simpleGuide({
    slug: 'using-oud/using-oud-wood',
    parent: 'using-oud',
    title: 'Using oud wood with suitable equipment',
    titleAr: 'استخدام خشب العود بمعدات مناسبة',
    summary:
      'Heat sources, why the equipment changes the result, and what to watch for while burning.',
    summaryAr: 'مصادر الحرارة، ولماذا تغيّر المعدات النتيجة، وما ينبغي مراقبته أثناء الحرق.',
    directAnswer:
      'How a wood burns depends mostly on the heat source and the cut. A chip burns differently from a block, and an electric heater behaves differently from charcoal because it delivers radiant heat without the smouldering bed that carries an oily resin across the surface. The practical rule is to start cool and small, and to increase heat only until the resin is releasing scent rather than smoke. Smoke at the wrong temperature is the commonest complaint, and it is almost always the equipment rather than the wood.',
    directAnswerAr:
      'يعتمد احتراق الخشب إلى حد بعيد على مصدر الحرارة وشكل القطعة. فالرقاقة تحترق  عن الكتلة، والسخّان الكهربائي يختلف عن الفحم لأنه يوصل حرارة إشعاعية دون الطبقة المتوهجة التي تحمل الراتنج  على السطح. والقاعدة العملية أن تبدأ بارداً وقليلاً، وترفع الحرارة فقط حتى ينطلق الراتنج برائحة لا بدخان. والدخان في الحرارة الخطأ هو أشيع شكوى، وهو في الغالب من المعدات لا من الخشب.',
    sections: [
      {
        heading: 'Heat sources',
        headingAr: 'مصادر الحرارة',
        body: [
          'Charcoal gives a bed of radiant heat with an even, sustained temperature once it has settled, and it is the traditional choice for burning chips and powder.',
          'An electric heater is controlled, clean and consistent, and it avoids the variable that makes charcoal difficult to standardise — the temperature at the surface. Its behaviour with resinous wood depends on the design: a unit that heats a surface will drive off scent and eventually char; a unit with a bowl over a resistive element behaves more like charcoal.',
          'A tea light or a spirit burner is enough for a small piece and nothing more. It will not sustain a burn long enough to appreciate a good resinous wood.',
        ],
        bodyAr: [
          'الفحم يعطي طبقة من الحرارة الإشعاعية بحرارة ثابتة بعد استقراره، وهو الخيار التقليدي لحرق الرقائق والمسحوق.',
          'السخّان الكهربائي متحكَّم ونظيف وثابت، ويتفادى المتغير الذي يجعل الفحم صعب التوحيد — أي حرة السطح. وسلوكه مع الخشب الراتنجي يعتمد على التصميم: فالوحدة التي تسخّن سطحاً تطلق الرائحة ثم تحرق، والوحدة ذات الكأس فوق عنصر مقاوم تسلك سلوك الفحم تقريباً.',
          'الشمع أو مصباح الكحول تكفي لقطعة صغيرة فحسب، ولا تدوم احتراقاً كافياً لتقدير خشب راتنجي جيد.',
        ],
      },
      {
        heading: 'What to watch for',
        headingAr: 'ما ينبغي مراقبته',
        body: [
          'Smoke means too much heat. Lower it rather than waiting for it to settle, and move the wood further from the source if the equipment allows.',
          'A wet or musty note usually means damp wood, not a fault in the material — wood that has not been stored properly carries water into the burn.',
          'And a material with little resin produces scent and then nothing. That is a property of the lot, and no equipment will change it.',
        ],
        bodyAr: [
          'الدخان يعني حرارة زائدة. اخفضها بدل انتظار أن تستقر، وابتعد الخشب عن المصدر إن سمح المعدن بذلك.',
          'والنفحة الرطبة أو العفنة تعني عادةً خشباً رطباً لا عيباً في المادة — فالخشب الذي لم يُحفظ جيداً يحمل ماءً إلى الاحتراق.',
          'والمادة قليلة الراتنج تعطي رائحة ثم لا شيء. وهذه صفة اللوط، ولا يغيّرها أي معدن.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022'],
    limitations:
      'This page describes general practice with heat sources. It does not specify a temperature, a duration or a result for any particular wood, and it does not assess any material.',
    limitationsAr:
      'تصف هذه الصفحة الممارسة العامة مع مصادر الحرارة. ولا تحدد حرارة ولا مدة ولا نتيجة لأي خشب بعينه، ولا تقيّم أي مادة.',
    nextSteps: ['Read about reading product instructions', 'Read how to label and store samples', 'Read the wood versus oil choice'],
    nextStepsAr: ['اقرأ عن قراءة تعليمات المنتج', 'اقرأ كيف تسمّي وتحفظ العينات', 'اقرأ خيار الخشب مقابل الزيت'],
    related: [
      { slug: 'using-oud/reading-product-instructions', label: 'Reading intended-use instructions' },
      { slug: 'using-oud/label-and-store-samples', label: 'Label and organize samples' },
      { slug: 'using-oud/wood-versus-oil', label: 'Wood versus oil: choose a format' },
    ],
  }),

  simpleGuide({
    slug: 'using-oud/skin-intended-fragrance-oils',
    parent: 'using-oud',
    title: 'Choosing and using skin-intended oils',
    titleAr: 'اختيار الزيوت المخصصة للبشرة واستخدامها',
    summary:
      'What an intended-use statement changes about how a product may be used, and how to read one.',
    summaryAr: 'ما الذي يغيّره بيان الاستخدام المقصود في طريقة استعمال المنتج، وكيف تقرأه.',
    directAnswer:
      'A fragrance oil carries a statement about what it is intended for, and that statement is a condition on lawful use rather than a suggestion. "Skin" or a body-contact designation means the formulation was evaluated for use on skin; "not for skin" means it was not, and applying it to skin is using it outside its evaluation. The designation also tells you what to expect: a skin-intended oil in a product made for skin will behave differently in terms of staining, of interaction with other fragrance materials, and of what it needs to be diluted in.',
    directAnswerAr:
      'يحمل زيت العطر بياناً عن الغرض المقصود منه، وهذا البيان شرط على الاستخدام المشروع لا مجرد اقتراح. فـ«للبشرة» أو أي تصنيف يلامس الجسم يعني أن التركيبة قيِّمت للاستخدام على البشرة؛ و«ليس للبشرة» يعني أنها لم تُقوَّم لذلك، فوضعه على البشرة هو استعمال خارج نطاق التقييم. والتصنيف يخبرك أيضاً بما تتوقعه: فالزيت المخصص للبشرة في منتج مصمم للبشرة يتصرف بصفة مختلفة من حيث التلطيخ والتفاعل مع المواد العطرية الأخرى، ومن حيث ما ينبغي تخفيفه به.',
    sections: [
      {
        heading: 'Reading the statement',
        headingAr: 'قراءة البيان',
        body: [
          'Look for three things: whether body contact is intended, what it is intended for, and any conditions attached. A statement that names an intended use without conditions is a scope, not an instruction; the conditions are the part that constrains you.',
          'The relevant reference point is the conformity documentation for the product and the intended use, not a general statement about oud. IFRA is explicit on this point: it does not itself issue certificates of conformity with its standards, and it does not authorise any organisation to certify on its behalf. Conformity is assessed for a specific product, by an independent third party, for a stated use.',
          'So a supplier pointing to "IFRA certified" has told you very little, and a product described as compliant with the IFRA Standards is a narrower and more checkable claim than a site-wide certification badge.',
        ],
        bodyAr: [
          'ابحث عن ثلاثة أمور: هل ملامسة الجسم مقصودة، وما الغرض المقصود منه، وأي شروط مرفقة. والبيان الذي يسمّي غرضاً دون شروط هو نطاق لا تعليمات؛ فالشروط هي الجزء المقيّد لك.',
          'ومرجعية المقارنة هي وثائق المطابقة للمنتج والاستخدام المقصود، لا بيان عام عن العود. وIFRA صريح في: فهي لا تصدر هي بنفسها شهادات مطابقة لمعاييرها، ولا تفوّض أي جهة بالتصديق نيابةً عنها. فالمطابقة تُقيَّم لمنتج بعينه، من طرف ثالث مستقل، لاستخدام محدد.',
          'فمن يشير البائع إلى «شهادة IFRA» لم يخبرك بشيء كثير، والمنتج الموصوف بأنه مطابق لمعايير IFRA ادعاء أضيق وأكثر قابلية للتحقق من شارة توثيق على مستوى الموقع.',
        ],
        callout: {
          title: 'A certification badge is not a certificate',
          body:
            'IFRA states that it does not itself certify compliance with its standards, does not create the certificates, and does not authorise any organisation to certify on its behalf. A badge that does not name a product, a supplier and an intended use is not evidence of conformity.',
          bodyAr:
            'تقول IFRA إنها لا توثّق المطابقة لمعاييرها بنفسها، ولا تنشئ الشهادات، ولا تفوّض أي جهة بالتصديق نيابةً عنها. والشارة التي لا تسمّي منتجاً ولا مورداً ولا استخداماً مقصوداً ليست دليل مطابقة.',
        },
      },
    ],
    sourceIds: ['IFRA_CERT'],
    limitations:
      'This page explains how to read an intended-use statement and a conformity reference. It does not certify any product, and it does not set dilution rates or safety limits.',
    limitationsAr:
      'تشرح هذه الصفحة كيف تقرأ بيان الاستخدام المقصود وإشارة المطابقة. ولا توثّق أي منتج، ولا تضع نسب تخفيف ولا حدود سلامة.',
    nextSteps: ['Read how perfumers and accords are documented', 'Read the concentration labels page', 'Read intended-use instructions'],
    nextStepsAr: ['اقرأ كيف توثَّق أسماء العطارين والأوزات', 'اقرأ صفحة ملصقات التركيز', 'اقرأ تعليمات الاستخدام المقصود'],
    related: [
      { slug: 'fragrance/perfumers-and-credits', label: 'How perfumer credits are documented' },
      { slug: 'fragrance/concentration-labels', label: 'Understanding perfume concentration labels' },
      { slug: 'using-oud/reading-product-instructions', label: 'Reading intended-use instructions' },
    ],
  }),

  simpleGuide({
    slug: 'using-oud/label-and-store-samples',
    parent: 'using-oud',
    title: 'Label and organize samples',
    titleAr: 'تسمية العينات وتنظيمها',
    summary:
      'The labelling that makes a sample set usable a year later rather than a week later.',
    summaryAr: 'التسمية التي تجعل مجموعة العينات صالحة بعد عام لا بعد أسبوع.',
    directAnswer:
      'A sample set is worth what its labelling is worth. The label has to carry an identifier that only your own system uses, the supplier, the material description, the date, and the batch reference if there is one — and a copy has to travel with the sample rather than staying in a notebook. Storage is the other half: resinous wood and distilled oil both change with heat, light and humidity, and a sample that has been kept badly cannot be compared against a fresh delivery.',
    directAnswerAr:
      'مجموعة العينات تساوي ما تساويه تسميتها. يجب أن يحمل الملصق معرّفاً يستخدمه نظـمك وحدك، واسم المورد، ووصف المادة، والتاريخ، ومرجع الدفعة إن وُجد — وينبغي أن ترافق نسخة منه العينة لا أن تبقى في دفتر. والتخزين هو النصف الآخر: فالخشب الراتنجي والزيت المقطَّر يتغيران بالحرارة والضوء والرطوبة، والعينة التي حُفظت سيئة لا يمكن مقارنتها بتسليم طازج.',
    sections: [
      {
        heading: 'What the label carries',
        headingAr: 'ما الذي يحمله الملصق',
        body: [
          'Your identifier, which should be unique to you and not the supplier\'s. The supplier\'s own marking is useful but is often reused across consignments, so two samples from different batches can carry the same mark.',
          'The material description in enough detail to distinguish it from another sample of the same thing: species, form, treatment, and concentration if it is an oil.',
          'The date, and the batch reference if there is one. The date matters because a sample that has been open for a year is no longer the material you assessed.',
          'And a note of what you thought of it at the time. This sounds redundant while the sample is in front of you, and it is the most useful thing on the label a year later.',
        ],
        bodyAr: [
          'معرّفك، وينبغي أن يكون فريداً إليك لا للمورد. فتعليم المورد مفيد لكنه يُعاد استخدامه بين شحنات مختلفة، فقد تحمل عيّنتان من دفعتين مختلفتين التعليم نفسه.',
          'وصف المادة بما يكفي لتمييزها عن عيّنة أخرى من الشيء نفسه: النوع والشكل والمعالجة والتركيز إن كانت زيتاً.',
          'التاريخ، ومرجع الدفعة إن وُجد. والتاريخ مهم لأن العيّنة التي بقيت مفتوحة سنة لم تعد المادة التي قيّمتها.',
          'وملاحظة عن رأيك فيها حينها. يبدو هذا زائداً والعيّنة أمامك، وهو أنفع ما في الملصق بعد سنة.',
        ],
      },
      {
        heading: 'Storage',
        headingAr: 'التخزين',
        body: [
          'Closed, dark, and as cool as the material allows. For chips, a sealed container with the label inside it rather than on the lid. For oil, a dark container, filled to reduce headspace where practical, and away from heat and light.',
          'And separated from anything that might contaminate it — other fragrance materials, cleaning products, and wood of a different kind, whose scent migrates.',
        ],
        bodyAr: [
          'مغلق، ومظلم، و بقدر ما تسمح به المادة من برودة. وللرقائق، وعاء محكم مع الملصق في داخله لا على غطائه. وللزيت، وعاء داكن، ومملوء بما يقلل منفذ الهواء قدر الإمكان، وبعيداً عن الحرارة والضوء.',
          'ومفصولاً عن أي شيء قد يلوثه — مواد عطرية أخرى، ومنظفات، وخشب من نوع آخر، تنتقل منه الرائحة.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022'],
    limitations:
      'This page describes how to label and store samples. It does not set a storage life for any material, and storage conditions that are right for wood are not right for every oil.',
    limitationsAr:
      'تصف هذه الصفحة كيف تسمّي وتحفظ العينات. ولا تضع عمراً تخزيناً لأي مادة، وظروف الحفظ المناسبة للخشب ليست مناسبة لكل زيت.',
    nextSteps: ['Read about storage and batch records', 'Read the sample plan', 'Read how a sample ties to a batch'],
    nextStepsAr: ['اقرأ عن التخزين وسجلات الدفعات', 'اقرأ خطة العيّنات', 'اقرأ كيف ترتبط العينة بالدفعة'],
    related: [
      { slug: 'using-oud/storage-and-batch-records', label: 'Storage and batch records' },
      { slug: 'sourcing/wholesale-sample-plan', label: 'Build a wholesale oud sample plan' },
      { slug: 'sourcing/sample-to-bulk-matching', label: 'Match samples to bulk batches' },
    ],
  }),

  simpleGuide({
    slug: 'using-oud/storage-and-batch-records',
    parent: 'using-oud',
    title: 'Storage and batch records',
    titleAr: 'التخزين وسجلات الدفعات',
    summary:
      'How to keep material in a state that can still be described honestly, and what to write down.',
    summaryAr: 'كيف تُبقي المادة في حالة يمكن وصفها بأمانة، وما الذي تدوّنه.',
    directAnswer:
      'A material that has been stored badly cannot be described accurately later, and that is a practical problem rather than a philosophical one: "aged" is a claim that depends on how the material was kept. Keep the container closed, keep it dark, keep it as cool as practical, and record the date you opened it. And keep the batch record with it — a material with no record of where it came from cannot be matched to a later delivery, and cannot be shown to have been the thing that was approved.',
    directAnswerAr:
      'المادة التي حُفظت سيئة لا يمكن وصفها بدقة لاحقاً، وهذه مشكلة عملية لا فلسفية: فـ«معتّق» ادعاء يعتمد على كيفية حفظ المادة. أبقِ الوعاء مغلقاً، وفي الظلام، وبارد قدر الإمكان، وسجّل تاريخ فتحه. واحتفظ بسجل الدفعة معه — فالمادة بلا سجل عن مصدرها لا يمكن مطابقتها بتسليم لاحق، ولا يمكن إثبات أنها هي التي اعتُمدت.',
    sections: [
      {
        heading: 'The record and the container go together',
        headingAr: 'السجل والوعاء معاً',
        body: [
          'Put the record inside the container, or in a sealed sleeve with it, rather than in a filing system that might be reorganised. The pairing is what survives.',
          'Record what you know about the storage, not only the material: when it was opened, whether it was moved, whether it was shared with anyone else. A material whose storage history has a gap in it cannot be described with confidence, and a buyer who asks will want to know.',
        ],
        bodyAr: [
          'ضع السجل داخل الوعاء، أو في كيس محكم معه، لا في نظام ملفات قد يُنظَّم من جديد. فالاقتران هو ما يصمد.',
          'وسجّل ما تعرفه عن التخزين لا عن المادة فقط: متى فُتح، وهل نُقل، وهل شاركت مع أحد. والمادة التي فيها ثغرة في سجل تخزينها لا يمكن وصفها بثقة، ومن يسألها سيحتاج إلى الجواب.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022'],
    limitations:
      'This page describes storage practice and record-keeping. It does not set a storage life for any material, and it does not establish the storage conditions under which any particular batch was held.',
    limitationsAr:
      'تصف هذه الصفحة ممارسات التخزين وحفظ السجلات. ولا تضع عمراً تخزيناً لأي مادة، ولا تثبت ظروف التخزين التي حُفظت بها دفعة بعينها.',
    nextSteps: ['Read about labelling samples', 'Read what a batch record contains', 'Read how a sample ties to a batch'],
    nextStepsAr: ['اقرأ عن تسمية العينات', 'اقرأ ما الذي تحتويه سجل الدفعة', 'اقرأ كيف ترتبط العينة بالدفعة'],
    related: [
      { slug: 'using-oud/label-and-store-samples', label: 'Label and organize samples' },
      { slug: 'quality/batch-records', label: 'What belongs in a batch record' },
      { slug: 'sourcing/sample-to-bulk-matching', label: 'Match samples to bulk batches' },
    ],
  }),

  simpleGuide({
    slug: 'using-oud/reading-product-instructions',
    parent: 'using-oud',
    title: 'Reading intended-use instructions',
    titleAr: 'قراءة تعليمات الاستخدام المقصود',
    summary:
      'What the instructions on a product oblige you to do, and the difference between guidance and conditions.',
    summaryAr: 'ما الذي تلتزم به تعليمات المنتج، والفرق بين الإرشاد والشرط.',
    directAnswer:
      'Instructions on a fragrance product come in two kinds, and the difference matters. Guidance tells you how to get the best result from the product: how to apply it, how much, when. Conditions tell you what the product may and may not be used for: which surfaces, whether it is for skin, whether it is for external use only. The first is advice; the second is a limitation of a product that has been evaluated for a stated purpose, and using a product outside it is using something whose evaluation does not cover you.',
    directAnswerAr:
      'تأتي تعليمات منتج عطري بنوعين، والفرق بينهما مهم. فالإرشاد يقول كيف تحصل على أفضل نتيجة من المنتج: كيف تستعمله، وكم، ومتى. والشرط يقول ما يجوز وما لا يجوز استعمال المنتج له: أي الأسطح، وهل هو للبشرة، وهل هو للاستعمال الخارجي فقط. الأول نصيحة، والثاني حدّ لمنتج قيِّم لغرض محدد، واستعمال المنتج خارجه هو استعمال شيء لم يشمل تقييمه إياك.',
    sections: [
      {
        heading: 'Finding the conditions',
        headingAr: 'إيجاد الشروط',
        body: [
          'The conditions are on the label, on the accompanying card, or in the supplier\'s own documentation — not usually in the marketing copy, which is where a buyer tends to look first. Ask for the documentation if the packaging is not to hand.',
          'Where a product carries a conformity statement, the statement is specific: it names a supplier, a product and an intended use. A claim that covers the supplier\'s whole catalogue, or the supplier\'s own site, is a different thing and a weaker one.',
        ],
        bodyAr: [
          'الشروط تكون على الملصق، أو على البطاقة المرافقة، أو في وثائق المورد — لا في النص التسويقي عادةً، وهو المكان الذي يبحث فيه المشتري أولاً. فاطلب الوثائق إن لم تتوفر العبوة.',
          'وحيث يحمل المنتج بيان مطابقة، يكون البيان محدداً: يسمّي مورداً ومنتجاً واستخداماً مقصوداً. أما الادعاء الذي يشمل كامل كتالوج المورد أو موقعه، فهو شيء آخر وأضعف.',
        ],
      },
    ],
    sourceIds: ['IFRA_CERT'],
    limitations:
      'This page explains how to distinguish guidance from conditions and where to find them. It does not state the conditions for any product, and it does not certify any product.',
    limitationsAr:
      'تشرح هذه الصفحة كيف تميّز بين الإرشاد والشرط وأين تجده. ولا تذكر شروط أي منتج، ولا توثّق أي منتج.',
    nextSteps: ['Read about skin-intended oils', 'Read the concentration labels page', 'Read how accords are documented'],
    nextStepsAr: ['اقرأ عن الزيوت المخصصة للبشرة', 'اقرأ صفحة ملصقات التركيز', 'اقرأ كيف توثَّق الأوزات'],
    related: [
      { slug: 'using-oud/skin-intended-fragrance-oils', label: 'Choosing and using skin-intended oils' },
      { slug: 'fragrance/concentration-labels', label: 'Understanding perfume concentration labels' },
      { slug: 'fragrance/oud-accords', label: 'Oud accords in fragrance composition' },
    ],
  }),

  simpleGuide({
    slug: 'fragrance/oud-in-perfumery',
    parent: 'fragrance',
    title: 'How oud is described in perfumery',
    titleAr: 'كيف يوصف العود في العطور',
    summary:
      'The vocabulary a fragrance brief uses for oud, and where that vocabulary is imprecise.',
    summaryAr: 'مفردات موجز العطر في وصف العود، وأين تكون هذه المفردات غير دقيقة.',
    directAnswer:
      'Perfumery describes oud by its character rather than by its origin: leather, animalic, resinous, woody, ambery, a hint of honey or camphor or vanilla. These words describe the olfactory impression a material leaves, and they are the vocabulary a brief is actually written in. The weakness is that they are impressionistic — "animalic" and "leathery" can describe materials that are nothing like each other, and a brief that uses only them leaves a buyer with no way to narrow the field.',
    directAnswerAr:
      'يوصف العود في العطور بطابعه لا بمنشئه: جلد، حيواني، راتنجي، خشبي، كهرماني، ولمسة من العسل أو الكافور أو الفانيليا. وهذه الكلمات توصف الأثر الشمي الذي يتركه المادة، وهي المفردات التي يُكتب بها الموجز فعلاً. وضعفها أنها انطباعية — فـ«حيواني» و«جلدي» قد يصفان مادتين لا تشبهان إحداهما الأخرى، والموجز الذي لا يستعمل سوى ذلك يترك المشتري بلا وسيلة لتضييق الميدان.',
    sections: [
      {
        heading: 'Character vocabulary and what it leaves out',
        headingAr: 'مفردات الطابع وما تتركه خارجاً',
        body: [
          'The character words are how perfumers communicate efficiently, and they are worth learning. But they describe the effect, not the material: a leather note can come from a genuine distillation, from a blend, or from an accord built on synthetic materials.',
          'A brief that says "leather, animalic, woody, amber" is therefore a description of a direction, not a specification. To make it a specification, it needs the material and the concentration and the carrier — which is what the sourcing pages in this encyclopedia are for.',
        ],
        bodyAr: [
          'كلمات الطابع هي طريقة العطارين في التواصل بكفاءة، وتستحق التعلم. لكنها تصف الأثر لا المادة: فالنوتة الجلدية قد تأتي من تقطير حقيقي، أو من مزيج، أو من أوز مبني على مواد اصطناعية.',
          'فالموجز الذي يقول «جلد، حيواني، خشبي، كهرماني» هو وصف لاتجاه لا مواصفة. ولجعله مواصفة يحتاج إلى المادة والتركيز والحامل — وهو ما لصفحات التوريد في هذه الموسوعة.',
        ],
      },
    ],
    sourceIds: ['IFRA_CERT'],
    limitations:
      'This page describes the perfumery vocabulary for oud. It does not define a quality, a house style or a composition, and the character words it lists are impressionistic by nature.',
    limitationsAr:
      'تصف هذه الصفحة مفردات العطور في وصف العود. ولا تعرّف جودة ولا أسلوب دار ولا تركيباً، والكلمات التي تذكرها انطباعية بطبيعتها.',
    nextSteps: ['Read notes against ingredients', 'Read what an oud accord is', 'Read the concentration labels page'],
    nextStepsAr: ['اقرأ النوتات مقابل المكونات', 'اقرأ ما هو أوز العود', 'اقرأ صفحة ملصقات التركيز'],
    related: [
      { slug: 'fragrance/notes-versus-ingredients', label: 'Fragrance notes versus ingredients' },
      { slug: 'fragrance/oud-accords', label: 'Oud accords in fragrance composition' },
      { slug: 'fragrance/concentration-labels', label: 'Understanding perfume concentration labels' },
    ],
  }),

  simpleGuide({
    slug: 'fragrance/concentration-labels',
    parent: 'fragrance',
    title: 'Understanding perfume concentration labels',
    titleAr: 'فهم ملصقات تركيز العطر',
    summary:
      'What parfum, EDP and EDT describe, what they leave open, and what they are not.',
    summaryAr: 'ما الذي تصفه بارفان وEDP وEDT، وما تتركه مفتوحاً، وما ليست هي.',
    directAnswer:
      'The concentration labels on a fragrance describe the proportion of aromatic material in the carrier: parfum at the top of the range, then eau de parfum, then eau de toilette, and the lighter bodies below. They are a useful shorthand for how long a scent will last and how far it will carry, and they are a rough guide rather than a specification — the actual performance depends on the materials used, and the categories are not defined by a single binding standard with fixed percentages.',
    directAnswerAr:
      'تصف ملصقات التركيز على العطر نسبة المادة العطرية في الحامل: بارفان في أعلى المدى، ثم ماء عطر، ثم ماء تويليت، ثم الأجسام الخفّة تحتها. وهي اختصار مفيد لمدة الثبات ومدى الانتشار، وهي دليل تقريبي لا مواصفة — فالأداء الفعلي يعتمد على المواد المستعملة، والفئات ليست معرّفة بمعيار ملزم واحد بنسب ثابتة.',
    sections: [
      {
        heading: 'What they tell you and what they do not',
        headingAr: 'ما تخبرك به وما لا تخبرك به',
        body: [
          'They tell you roughly how much aromatic material is in the bottle, and therefore a good deal about longevity and projection. They are a reasonable first filter when comparing two perfumes.',
          'They do not tell you the quality of the materials, the originality of the composition, the performance of any individual material in the base, or whether the product is intended for skin. A "parfum" can be built on accords alone, and a well-made eau de toilette can outlast a badly made parfum.',
          'And the label is not a conformity claim. It describes the concentration category, and the standards regime around a fragrance product is separate from it.',
        ],
        bodyAr: [
          'تخبرك تقريباً بكم من المادة العطرية في القارورة، ومن ثم عن مدة الثبات والانتشار إلى حد كبير. وهي مرشّح أول معقول عند مقارنة عطرين.',
          'ولا تخبرك بجودة المواد، ولا بأصالة التركيب، ولا بأداء أي مادة على حدة في القاعدة، ولا بما إذا كان المنتج مع مخصص للبشرة. فـ«بارفان» قد يُبنى على أوزات وحدها، وماء تويليت جيد الصنع قد يدوم أطول من بارفان سيئ الصنع.',
          'والملصق ليس ادعاء مطابقة. فهو يصف فئة التركيز، ونظام المعايير حول منتج عطري شيء منفصل عنه.',
        ],
      },
    ],
    sourceIds: ['IFRA_CERT'],
    limitations:
      'This page explains what concentration labels describe. It does not state the percentage ranges that labels imply, and it does not assess any product.',
    limitationsAr:
      'تشرح هذه الصفحة ما تصفه ملصقات التركيز. ولا تذكر نسب النسب التي يوحي بها الملصق، ولا تقيّم أي منتج.',
    nextSteps: ['Read about skin-intended oils', 'Read notes against ingredients', 'Read what an oud accord is'],
    nextStepsAr: ['اقرأ عن الزيوت المخصصة للبشرة', 'اقرأ النوتات مقابل المكونات', 'اقرأ ما هو أوز العود'],
    related: [
      { slug: 'using-oud/skin-intended-fragrance-oils', label: 'Choosing and using skin-intended oils' },
      { slug: 'fragrance/notes-versus-ingredients', label: 'Fragrance notes versus ingredients' },
      { slug: 'fragrance/oud-accords', label: 'Oud accords in fragrance composition' },
    ],
  }),

  simpleGuide({
    slug: 'fragrance/notes-versus-ingredients',
    parent: 'fragrance',
    title: 'Fragrance notes versus ingredients',
    titleAr: 'نوتات العطر مقابل المكونات',
    summary:
      'Why the pyramid on the back of a bottle is a description and not a list of what is inside.',
    summaryAr: 'لماذا الهرم على ظهر القارورة وصف لا قائمة بما في داخلها.',
    directAnswer:
      'The top, heart and base notes on a fragrance describe how a composition unfolds over time, not what is in the bottle. "Top notes" are the materials perceived first, usually the most volatile; "heart" and "base" are what remains and what anchors the scent. A listed material may be present in a trace amount and still be named, and a material that forms the backbone of the scent may be unnamed. The pyramid is a way of describing an experience in a way that helps someone choose, and it is not an ingredient declaration.',
    directAnswerAr:
      'النوتات العليا والقلب والقاعدة في العطر تصف كيف يتطور التركيب مع الوقت، لا ما في القارورة. فـ«النوتات العليا» هي المواد التي تُدرك أولاً وهي عادةً الأكثر ت تطايراً، و«القلب» و«القاعدة» ما يبقى وما يثبّت الرائحة. وقد تكون مادة مذكورة بكميات ضئيلة، وقد تكون مادة ها غير وارد وهي عماد الرائحة. والهرم وسيلة لوصف تجربة تساعد على الاختيار، وهو ليس بيان مكونات.',
    sections: [
      {
        heading: 'A description, not a declaration',
        headingAr: 'وصف لا بيان',
        body: [
          'This matters most for oud, because "oud" is often used as a note — an impression — when the question being asked is whether the product contains agarwood at all. Those are different questions and they need different answers: the note describes the effect, while the question about contents needs an ingredient statement or a supplier\'s declaration.',
          'Where a product is described as containing oud oil, ask which is meant: a distillation, a blend of distillations, or an accord. The three behave differently, cost differently and are documented differently.',
        ],
        bodyAr: [
          'وهذا أهم شيء في العود تحديداً، لأن «العود» يُستعمل كثيراًكنوتة — أي انطباع — بينما السؤال المطروح قد يكون هل يحتوي المنتج خشب عود أصلاً. فهما سؤالان مختلفان يحتاجان إجابتين مختلفتين: النوتة تصف الأثر، أما السؤال عن المحتوى فيحتاج بيان مكونات أو إقرار المورد.',
          'وح حيث يوصف منتج بأنه يحتوي دهن عود، فاسأل أيّهما يُقصد: تقطير، أم مزيج تقطيرات، أم أوز. فالثلاثة تتصرفان وتُسعّر وتُوثَّق بصورة مختلفة.',
        ],
      },
    ],
    sourceIds: ['IFRA_CERT'],
    limitations:
      'This page explains how a fragrance note list relates to the contents of a product. It does not establish the contents of any product, and a note list is not an ingredient declaration.',
    limitationsAr:
      'تشرح هذه الصفحة كيف قائمة إلى محتوى المنتج. ولا تثبت محتوى أي منتج، وقائمة النوتات ليست بيان مكونات.',
    nextSteps: ['Read how oud is described in perfumery', 'Read what an oud accord is', 'Read about brand versus manufacturing origin'],
    nextStepsAr: ['اقرأ كيف يوصف العود في العطور', 'اقرأ ما هو أوز العود', 'اقرأ عن هوية العلامة مقابل منشأ التصنيع'],
    related: [
      { slug: 'fragrance/oud-in-perfumery', label: 'How oud is described in perfumery' },
      { slug: 'fragrance/oud-accords', label: 'Oud accords in fragrance composition' },
      { slug: 'fragrance/brand-and-manufacturing-origin', label: 'Brand identity versus manufacturing origin' },
    ],
  }),

  simpleGuide({
    slug: 'fragrance/oud-accords',
    parent: 'fragrance',
    title: 'Oud accords in fragrance composition',
    titleAr: 'أوزات العود في تركيب العطور',
    summary:
      'What an accord is, why it exists, and why describing one as oud is a misrepresentation.',
    summaryAr: 'ما هو أوز، ولماذا وُجد، ولماذا وصفه بالعود تحريف.',
    directAnswer:
      'An oud accord is a fragrance material composed to reproduce the character of oud from defined chemical materials. It exists because a genuine distillation is expensive, constrained in supply and partly unstable, and perfumers need the tonal character available reliably. It is a legitimate and widely used ingredient, and a fragrance built on one is a real product rather than a substitute sold fraudulently. What it is not is oud: it contains no agarwood, and describing it as oud is a misrepresentation rather than a matter of taste or marketing latitude.',
    directAnswerAr:
      'أوز العود مادة عطرية مركّبة لتقليد طابع العود من مواد كيميائية محددة. وقد وُجد لأن التقطير الحقيقي غالٍ ومحدود التوريد وجزء منه غير مستقر،والعطارون يحتاجون الطابع متاحاً بثبات. وهو مكوّن مشروع مستعمل على نطاق واسع، والعطر المبني عليه منتج حقيقي لا بديل يُباع احتيالاً. لكنه ليس عوداً: لا يحتوي خشب عود، ووصفه بالعود تحريف لا مسألة ذوق أو هوامش تسويقية.',
    sections: [
      {
        heading: 'Why the distinction is enforced',
        headingAr: 'لماذا يُطبَّق هذا التمييز',
        body: [
          'A buyer who believes they are buying oud at oud prices, when the product is an accord, has been misled in a way that matters financially and in the way the product performs. An accord does not behave like a distillation: it does not develop the same way, does not age the same way, and does not smell the same close to the skin.',
          'The correct description is a fragrance material or an accord. Where a product contains both, the honest thing is to say so and to give the proportion — which is a legitimate thing for a supplier to provide, and a legitimate thing for a buyer to require.',
          'And the conformity regime is separate again. IFRA does not itself issue certificates, does not create them, and does not authorise any organisation to certify on its behalf; conformity is assessed for a specific product and a stated intended use, by an independent third party.',
        ],
        bodyAr: [
          'المشتري الذي يظن أنه يشتري عوداً بأسعار العود بينما المنتج أوز قد أُضلّ في جملة تهمّ مالياً وفي طريقة أداء المنتج. فالأوز لا يتصرف كالتقطير: لا يتطور كما، ولا يتعتيق كما، ولا شمّه عند الجلد كما.',
          'والوصف الصحيح مادة عطرية أو أوز. وحيث يحتوي المنتج على الاثنين، فالأمانة هي القول بذلك وإعطاء النسبة — وهو أمر مشروع أن يقدّمه المورد، ومشروعي أن يطلبه المشتري.',
          'ونظام المطابقة منفصل عن ذلك. فـIFRA لا تصدر هي شهادات ولا تنشئها ولا تفوّض جهة بالتصديق نيابةً عنها؛ فالمطابقة تُقيَّم لمنتج بعينه واستخدام مقصود محدد، من طرف ثالث مستقل.',
        ],
        callout: {
          title: 'A legitimate ingredient, not a substitute',
          body:
            'Using an oud accord is normal perfumery practice and does not make a fragrance a lesser product. Describing that accord as oud does. The distinction is about what the buyer is told, not about the quality of what they are buying.',
          bodyAr:
            'استعمال أوز عود ممارسة عطرية طبيعية ولا يجعل العطر أقل قيمة. لكن وصف ذلك أوز بأنه عود يفعل. والتمييز متعلق بما أُخبر به المشتري، لا بقيمة ما يشتريه.',
        },
      },
    ],
    sourceIds: ['IFRA_CERT', 'AGARWOOD_CITES_2022'],
    limitations:
      'This page explains what an accord is and why the distinction matters. It does not assess any product\'s composition, and it does not set a threshold above which a blend may be described in a particular way.',
    limitationsAr:
      'تشرح هذه الصفحة ما هو أوز ولماذا يهم التمييز. ولا تقيّم تركيب أي منتج، ولا تضع عتبة يُسمح عندها بوصف مزيج بطريقة معينة.',
    nextSteps: ['Read notes against ingredients', 'Read the brand and origin page', 'Read how oud is described in perfumery'],
    nextStepsAr: ['اقرأ النوتات مقابل المكونات', 'اقرأ صفحة العلامة والمنشأ', 'اقرأ كيف يوصف العود في العطور'],
    related: [
      { slug: 'fragrance/notes-versus-ingredients', label: 'Fragrance notes versus ingredients' },
      { slug: 'fragrance/brand-and-manufacturing-origin', label: 'Brand identity versus manufacturing origin' },
      { slug: 'fragrance/oud-in-perfumery', label: 'How oud is described in perfumery' },
    ],
  }),

  simpleGuide({
    slug: 'fragrance/bakhoor-versus-raw-wood',
    parent: 'fragrance',
    title: 'Bakhoor and raw oud wood',
    titleAr: 'البخور وخشب العود الخام',
    summary:
      'Two products that look similar, behave differently and are priced differently.',
    summaryAr: 'منتجان متشابهان في الشكل، مختلفان في السلوك والسعر.',
    directAnswer:
      'Raw agarwood carries its own scent, faintly and unevenly, in the resinous parts of the wood. Bakhoor is wood that has been infused with oil so that the scent is strong and even. They are used differently: raw wood is for distilling and for burning, bakhoor is for burning as a scented material and for use on incense. A buyer who wants to burn something that smells of oud is buying bakhoor; a buyer who wants to distill is buying raw wood and will be disappointed by bakhoor, which has already given up most of what it had.',
    directAnswerAr:
      'يحمل خشب العود الخام رائحته الخاصة، خفيفة وغير متساوية، في أجزاء الراتنج منه. أما البخور فهو خشب مُشبَّع بالزيت فتصير الرائحة قوية ومتساوية. واستعمالهما يختلف: الخشب الخام للتقطير وللحرق، والبخور للحرق كمادة معطرة وللتقديم على البخور. ومن يريد حرق شيء تفوح منه رائحة العود فهو يشتري البخور؛ ومن يريد التقطير يشتري الخشب الخام، وسيُخيب ظنه البخور لأنه， أعطى معظم ما لديه.',
    sections: [
      {
        heading: 'How to tell them apart',
        headingAr: 'كيف تفرّق بينهما',
        body: [
          'Weight for weight, bakhoor is heavier, because it now carries oil as well as resin. A piece that sinks and smells strongly is more likely to be bakhoor than raw sinking wood.',
          'The scent tells the rest: bakhoor smells evenly across a fresh break, because the oil has moved into the wood. Raw wood carries scent in the resinous parts and very little elsewhere.',
          'And the price difference is not a markup on raw wood — it is the price of the oil that was added, which is why a bakhoor made with an accord and one made with a distillation cost very different amounts.',
        ],
        bodyAr: [
          'البخور أثقل وزناً للوزن نفسه، لأنه يحمل الزيت إضافة إلى الراتنج. فالقطعة التي تغرق وتشمّ بقوة أرجح أن تكون بوراً من خشب غطاس خام.',
          'والرائحة تكمل الفرق: فالبخور يفوح برائحة متساوية عند الكسر الطازج، لأن الزيت انتشر في الخشب. أما الخشب الخام فيحمل الرائحة في أجزاء الراتنج فقط.',
          'وفرق السعر ليس زيادة لى سعر الخشب الخام — بل هو سعر الزيت المضاف، ولهذا يختلف سعر بور مصنوع بأوز عن سعر آخر مصنوع بتقطير حقيقي اختلافاً كبيراً.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022'],
    limitations:
      'This page distinguishes the two products and explains how to tell them apart. It does not assess any particular piece, and the heavier a piece is the more reliable the comparison becomes.',
    limitationsAr:
      'تفصل هذه الصفحة بين المنتجين وتشرح كيف تفرّق بينهما. ولا تقيّم أي قطعة بعينها، وكلما زاد وزن القطعة زادت موثوقية المقارنة.',
    nextSteps: ['Read about buying bakhoor', 'Read what an oud accord is', 'Read how to choose a wood purchase'],
    nextStepsAr: ['اقرأ عن شراء البخور', 'اقرأ ما هو أوز العود', 'اقرأ كيف تختار شراء خشب'],
    related: [
      { slug: 'buying/buying-bakhoor', label: 'Buying bakhoor with clear composition information' },
      { slug: 'fragrance/oud-accords', label: 'Oud accords in fragrance composition' },
      { slug: 'buying/choosing-oud-wood', label: 'Choosing an oud wood purchase' },
    ],
  }),

  simpleGuide({
    slug: 'culture/oud-in-islamic-traditions',
    parent: 'culture',
    title: 'Oud in Islamic traditions',
    titleAr: 'العود في التقاليد الإسلامية',
    summary:
      'How oud appears in the recorded practice of the Gulf and the wider Muslim world.',
    summaryAr: 'كيف يظهر العود في الممارسة المسجَّلة بالخليج والعالم الإسلامي أوسع.',
    directAnswer:
      'Oud appears in the recorded practice of the Gulf and of the wider Muslim world in several distinct settings: as a fragrance applied to the body and to clothing, as an ingredient in the attar tradition, and as a material burned in the context of hospitality and of the majlis. What the sources record is the use and its setting, not a doctrine — and it is worth being careful about the difference, because "oud is Islamic" is a claim about a tradition and not about a religious obligation.',
    directAnswerAr:
      'يظهر العود في الممارسة المسجَّلة بالخليج والعالم الإسلامي أوسع في عدة سياقات متمايزة: عطراً يُوضع على البدن والملابس، ومادةً في تقليد العطور الشرقية، ومادةً تُحرق في سياق الضيافة والمجلس. وما تسجله المصادر هو الاستعمال وسياقه لا مذهباً — ومن المهم الانتباه إلى الفرق، لأن قول «العود إسلامي» دعوى عن تقليد لا عن واجب ديني.',
    sections: [
      {
        heading: 'Setting and practice',
        headingAr: 'السياق والممارسة',
        body: [
          'The Gulf is the centre of the modern oud trade and the setting in which most of the written and oral record of its use was produced. That record describes the material as a fragrance, as an offering, and as part of the sequence of hospitality.',
          'A note on the record itself: much of what circulates about oud and religious practice comes from later compilations and from trade literature rather than from contemporaneous documentation. Where a claim is dated and sourced, it can be stated; where it is not, the honest treatment is to attribute it rather than to assert it.',
        ],
        bodyAr: [
          'الخليج هو مركز تجارة العود الحديثة، وهو السياق الذي أنتج معظم السجل المكتوب والشفهي لاستعماله. ويصف ذلك السجل المادة عطراً، وهدية، وجزءاً من ترتيب الضيافة.',
          'وملاحظة على السجل نفسه: فكثير مما يدور حول العود والممارسة الدينية يأتي من مؤلفات لاحقة ومن أدبيات التجارة لا من توثيق معاصر. وحين يكون الادعاء مؤرخاً ومصدراً يمكن ذكره؛ وحين لا يكون، فالمعالجة الصادقة هي النسبة لا التقرير.',
        ],
      },
    ],
    sourceIds: ['FAOLEX'],
    limitations:
      'This page describes the recorded settings in which oud appears in Islamic traditions. It does not describe a religious practice, and it does not assess any religious claim.',
    limitationsAr:
      'تصف هذه الصفحة السياقات المسجَّلة التي يظهر فيها العود في التقاليد الإسلامية. ولا تصف ممارسة دينية، ولا تقيّم أي ادعاء ديني.',
    nextSteps: ['Read about agarwood trade history', 'Read what agarwood actually is', 'Read the trade documentation page'],
    nextStepsAr: ['اقرأ عن تاريخ تجارة العود', 'اقرأ ما هو العود فعلاً', 'اقرأ صفحة وثائق التجارة'],
    related: [
      { slug: 'culture/agarwood-trade-history', label: 'Agarwood trade through time' },
      { slug: 'oud-basics/what-is-agarwood', label: 'Agarwood: names, material and uses' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
    ],
  }),

  simpleGuide({
    slug: 'culture/agarwood-trade-history',
    parent: 'culture',
    title: 'Agarwood trade through time',
    titleAr: 'تجارة العود عبر الزمن',
    summary:
      'The routes, terms and markets that shaped the trade in resinous wood.',
    summaryAr: 'الطرق والمفردات والأسواق التي شكّلت تجارة الخشب الراتنجي.',
    directAnswer:
      'Agarwood has moved along trade routes for centuries, from the growing regions of South and Southeast Asia to the markets of the Gulf, and the vocabulary of the trade records both. What is documented is the movement of the material, the terms used for it, and the places it passed through — which is enough to explain the regional names a buyer encounters today, and not enough to support any claim about the size or value of the historical trade.',
    directAnswerAr:
      'انتقل العود على طرق التجارة قروناً، من مناطق النمو في جنوب آسيا وجنوب شرق آسيا إلى أسواق الخليج، وسجلّ مفردات التجارة يوثّق ذلك. والموثّق هو انتقال المادة والمصطلحات المستعملة لها والأماكن التي مرّت بها — وهو ما يكفي لشرح الأسماء الإقليمية التي يصطدم بها المشتري اليوم، ولا يكفي لتسند أي ادعاء عن حجم تجارة التاريخية أو قيمتها.',
    sections: [
      {
        heading: 'Routes, names, and what they explain today',
        headingAr: 'الطرق والأسماء وما تفسّره اليوم',
        body: [
          'The regional names in use today are the residue of this history: terms that travelled with the material and stayed in the market. A buyer who asks why a Cambodian oil and an Assam oil are described so differently is asking a historical question, and the answer is that they come from different growing regions with different species and different distillation traditions, and their trade histories are separate.',
          'Two limits on the record are worth stating. Much of the written history of the trade is at second hand, and the figures often quoted for historical volumes are not documented in a way that would support a precise claim.',
        ],
        bodyAr: [
          'الأسماء الإقليمية المستعملة اليوم هي خلاصة هذا التاريخ: مصطلحات سافرت مع المادة وبقيت في السوق. ومن يسأل لماذا يوصف زيت كمبودي وزيت أسام بهذا الاختلاف يطرح سؤالاً تاريخياً، والجواب أنهما من منطقتي نمو مختلفين بأنواعين وتقليدي تقطير مختلفين، وتاريخ تجارتهما منفصل.',
          'وفي حدّين على السجل يجدر ذكرهما. فكثير من التاريخ المكتوب لتجارة العود غير مباشرة، والأرقام التي تُذكر عادةً للحجم التاريخي ليست موثّقة بما يدعم ادعاءً دقيقاً.',
        ],
      },
    ],
    sourceIds: ['FAOLEX', 'AGARWOOD_CITES_2022'],
    limitations:
      'This page describes the shape of the historical trade and what it explains about modern regional naming. It does not state historical volumes or values, and it does not date any specific trade route.',
    limitationsAr:
      'تصف هذه الصفحة شكل التجارة التاريخية وما تفسّره عن التسمية الإقليمية الحديثة. ولا تذكر أحجاماً تاريخية ولا قيماً، ولا تؤرخ أي طريق تجاري بعينه.',
    nextSteps: ['Read about the origins', 'Read what agarwood actually is', 'Read the trade documentation page'],
    nextStepsAr: ['اقرأ عن الأقاليم', 'اقرأ ما هو العود فعلاً', 'اقرأ صفحة وثائق التجارة'],
    related: [
      { slug: 'origins/india', label: 'India and northeast origin guide' },
      { slug: 'oud-basics/what-is-agarwood', label: 'Agarwood: names, material and uses' },
      { slug: 'trade/agarwood-documentation', label: 'Conservation and trade documentation' },
    ],
  }),

  simpleGuide({
    slug: 'culture/agarwood-in-chinese-traditions',
    parent: 'culture',
    title: 'Agarwood in Chinese traditions',
    titleAr: 'العود في التقاليد الصينية',
    summary:
      'The place of agarwood in Chinese medicine and incense, and what is recorded about it.',
    summaryAr: 'مكان العود في الطب الصيني والبخور، وما هو مسجَّل عنه.',
    directAnswer:
      'Agarwood has a documented place in Chinese practice: it appears in the materia medica as a valued material with a long history of use, and it is used in incense. The naming history is telling — the Chinese name for the resin, "chenxiang", appears in the classical materia medica, and the same name is used in the trade for a particular category of agarwood, which is a reminder that a trade term can be much older than the modern trade that uses it.',
    directAnswerAr:
      'للعود مكان مسجَّل في الصين: فهو يظهر في قائمة الأدوية مادّةً ثمينة بتاريخ طويل من الاستعمال، ويُستعمل في البخور. وتاريخ التسمية دالّ — فاسم الراتنج الصيني «تشن شيانغ» يظهر في قائمة الأدوية الكلاسيكية، ويُستعمل الاسم نفسه في التجارة لفئة بعينها من العود، وهو تذكير بأن المصطلح التجاري قد يكون أقدم بكثير من التجارة الحديثة التي تستعمله.',
    sections: [
      {
        heading: 'A long record, and what it does not say',
        headingAr: 'سجل طويل، وما لا يقوله',
        body: [
          'Classical Chinese texts describe the material and its uses, and it is possible to trace the name and the trade over a long period. What the classical record does not do is establish a quality standard in the modern sense, and a passage about the virtue of the material is not a graded specification.',
          'The trade term and the materia medica name overlap, which is a useful reminder for a buyer: a term that is centuries old may still carry an ordinary commercial meaning today, and using its age as evidence of quality would be a mistake.',
        ],
        bodyAr: [
          'تصف النصوص الصينية الكلاسيكية المادة واستعمالاتها، ويمكن تتبّع الاسم والتجارة عبر فترة طويلة.مع ذلك وما لا يفعله السجل الكلاسيكي هو وضع معيار جودة بالمعنى الحديث، فمقطع عن فضل المادة ليس مواصفة مقيَّمة.',
          'وتداخل المصطلح التجاري مع اسم قائمة الأدوية تذكير مفيد للمشتري: فمصطلح عمره قرون قد يحمل اليوم معنى تجارياً عادياً، واستخدام قِدَمه دليلاً على الجودة خطأ.',
        ],
      },
    ],
    sourceIds: ['FAOLEX', 'AGARWOOD_CITES_2022'],
    limitations:
      'This page describes the recorded place of agarwood in Chinese practice. It does not describe a medicinal effect, and it does not assess any material.',
    limitationsAr:
      'تصف هذه الصفحة المكان المسجَّل للعود في الصين. ولا تصف أثراً طبياً، ولا تقيّم أي مادة.',
    nextSteps: ['Read about Japanese incense appreciation', 'Read about the trade history', 'Read the botanical identities'],
    nextStepsAr: ['اقرأ عن تقدير البخور الياباني', 'اقرأ عن تاريخ التجارة', 'اقرأ الهويات النباتية'],
    related: [
      { slug: 'culture/japanese-incense-appreciation', label: 'Japanese incense appreciation' },
      { slug: 'culture/agarwood-trade-history', label: 'Agarwood trade through time' },
      { slug: 'oud-basics/agarwood-botanical-identity', label: 'Botanical identity and genus comparison' },
    ],
  }),

  simpleGuide({
    slug: 'culture/japanese-incense-appreciation',
    parent: 'culture',
    title: 'Japanese incense appreciation',
    titleAr: 'تقدير البخور الياباني',
    summary:
      'The graded vocabulary of the Japanese incense trade, and how to read it as a local system.',
    summaryAr: 'مفردات التقييم في تجارة البخور اليابانية، وكيف تقرأها كنظام محلي.',
    directAnswer:
      'Japanese buyers of incense and agarwood have used graded categories for a long time, and the terminology is embedded in auction and trade documentation. The categories describe material the way the local market describes it, and they carry a precision inside that market that they do not carry outside it. A buyer working with a Japanese supplier should learn the term being used and ask what it denotes to that supplier; a buyer reading a Japanese auction listing in translation should treat the grade as a local label rather than as a specification.',
    directAnswerAr:
      'استعمل مشترو البخور والخشب في اليابان فئات مقيَّمة منذ زمن طويل، والمصطلح متشعّب في وثائق المزادات والتجارة. وتصف الفئات المادة كما يصفها السوق المحلي، وتحمل داخل ذلك السوق دقة لا تحمله خارجه. وعلى المشتري الذي يعمل مع مورد ياباني أن يتعلّم المصطلح المستعمل ويسأل المورد عن دلالته عنده؛ ومن يقرأ كشف مزاد ياباني مترجماً فيتعامل مع الدرجة كتسميات محلية لا كمواصفة.',
    sections: [
      {
        heading: 'A local system with its own logic',
        headingAr: 'نظام محلي له منطقه',
        body: [
          'The Japanese system developed around a different set of considerations from the Gulf one: incense use, material form, and a long institutional history of grading and trading. The terms are therefore not transliterations of the Gulf labels and should not be read as if they were.',
          'What the system does share with every other grading vocabulary in this trade is the underlying caution. A category describes what the market has agreed to describe; it does not carry a published definition, and it establishes nothing about resin content, age or oil yield.',
        ],
        bodyAr: [
          'تطور النظام الياباني حول مجموعة اعتبارات مختلفة عن نظيره الخليجي: استعمال البخور، وشكل المادة، وتاريخ مؤسسي طويل للتقييم والتجارة. فالمصطلحات ليست نقلاً حرفياً لتسميات الخليج، ولا ينبغي قراءتها على أنها كذلك.',
          'وما يشترك فيه هذا النظام مع كل مفردات التقييم الأخرى في هذه التجارة هو التحذير نفسه. فالفئة تصف ما اتفق السوق على وصفه؛ ولا تحمل تعريفاً منشوراً، ولا تثبت شيئاً عن نسبة الراتنج ولا العمر ولا مردود الزيت.',
        ],
      },
    ],
    sourceIds: ['FAOLEX'],
    limitations:
      'This page describes the Japanese grading vocabulary in general terms. It does not translate or define individual category names, and it does not assess any material.',
    limitationsAr:
      'تصف هذه الصفحة مفردات التقييم اليابانية بصورة عامة. ولا تترجم أسماء الفئات ولا تعرّفها، ولا تقيّم أي مادة.',
    nextSteps: ['Read about Chinese traditions', 'Read how grading claims work', 'Read the glossary'],
    nextStepsAr: ['اقرأ عن التقاليد الصينية', 'اقرأ كيف تعمل ادعاءات التقييم', 'اقرأ المعجم'],
    related: [
      { slug: 'culture/agarwood-in-chinese-traditions', label: 'Agarwood in Chinese traditions' },
      { slug: 'quality/oud-grading-explained', label: 'How oud grading claims work' },
      { slug: 'glossary/jinko', label: 'Jinko: the Japanese and Chinese trade word for agarwood' },
    ],
  }),

  simpleGuide({
    slug: 'collecting/documenting-a-collection',
    parent: 'collecting',
    title: 'Documenting an oud collection',
    titleAr: 'توثيق مجموعة عود',
    summary:
      'What a durable record contains, and why provenance is harder than it looks.',
    summaryAr: 'ما يحتويه السجل الدائم، ولماذا تثبيت المصدر أصعب مما يبدو.',
    directAnswer:
      'A collection record has to answer three questions for each piece: what it is, where it came from, and what happened to it since. The first is the easiest. The second is the hard one, because provenance is a chain rather than a fact — it exists only as long as the records of every hand the material passed through, and it weakens each time one of them is missing. The third is the one most collectors neglect and the one that most affects value.',
    directAnswerAr:
      'يجب أن يجيب سجل المجموعة عن ثلاثة أسئلة لكل قطعة: ما هي، ومن أين جاءت، وماذا حدث لها منذ ذلك الحين. الأول هو الأسهل. والثاني هو الصعب، لأن تثبيت المصدر سلسلة لا واقعة — فهو موجود فقط ما دامت سجلات كل يد مرّت بها المادة، ويضعف كلما غاب أحدها. والثالث هو ما يهمله أكثر وهو ما يؤثر في القيمة أكثر من غيره.',
    sections: [
      {
        heading: 'The chain, and the weak link',
        headingAr: 'السلسلة، والحلقة الضعيفة',
        body: [
          'Provenance for a piece of agarwood is a chain: the tree, the wound, the collector, the distiller, the seller, and then every owner after that. Each link is a record someone made, and each record can be lost, destroyed or simply never have existed.',
          'The practical consequence is that most material in circulation has partial provenance, and the honest way to record it is by degree — what is documented, what is remembered, what is assumed — rather than by assertion. A record that says "origin claimed as Assam, seller-declared, no batch record" is more useful than one that says "Assam" and is not.',
          'The third question, what has happened to it since, covers the movements, the storage, and any treatment or blending it has been through, and it is the part that distinguishes a piece from another of the same kind.',
        ],
        bodyAr: [
          'تثبيت مصدر قطعة عود سلسلة: الشجرة، والجرح، والمُجتني، والمُقطِّر، والبائع، ثم كل مالك بعد ذلك. وكل حلقة سجل صُنعه شخص، وكل سجل يمكن أن يضيع أو يتلف أو لا يكون قد وُجد أصلاً.',
          'والنتيجة العملية أن معظم المادة المتداولة لها تثبيت مصدر جزئي، وطريقة تسجيلها الصادقة هي بالدرجة — ما هو موثّق، وما هو متذكَّر، وما هو مفترض — لا بالتقرير. فسجل يقول «منشأ معلن أسام، معلن من البائع، بلا سجل دفعة» أنفع من سجل يقول «أسام» ولا يثبت شيئاً.',
          'أما السؤال الثالث، فما حدث لها منذ ذلك الحين، فيغطي النقل والتخزين وأي معالجة أو مزج مرّت به، وهو ما يميز قطعة عن أخرى من النوع نفسه.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022'],
    limitations:
      'This page describes what a collection record should contain. It does not appraise a collection, and it does not establish the provenance of any particular piece.',
    limitationsAr:
      'تصف هذه الصفحة ما ينبغي أن يحتويه سجل المجموعة. ولا يقيّم مجموعة، ولا يثبت مصدر أي قطعة بعينها.',
    nextSteps: ['Read about collecting and resale', 'Read what a batch record contains', 'Read how documents are reviewed'],
    nextStepsAr: ['اقرأ عن التجميع وإعادة البيع', 'اقرأ ما الذي تحتويه سجل الدفعة', 'اقرأ كيف تُراجع الوثائق'],
    related: [
      { slug: 'collecting/resale-and-risk', label: 'Collecting and resale uncertainty' },
      { slug: 'quality/batch-records', label: 'What belongs in a batch record' },
      { slug: 'trade/document-review-limits', label: 'What reviewing a document can establish' },
    ],
  }),

  simpleGuide({
    slug: 'collecting/resale-and-risk',
    parent: 'collecting',
    title: 'Collecting and resale uncertainty',
    titleAr: 'التجميع وغياب اليقين في إعادة البيع',
    summary:
      'What makes a collection easier or harder to sell, and where the uncertainty sits.',
    summaryAr: 'ما يجعل المجموعة أسهل أو أصعب في البيع، وأين يقع الغموض.',
    directAnswer:
      'Resale value rests on three things: how well the material is documented, how well it is stored, and how clearly it can be identified by someone who was not there. Each is a record or a physical condition rather than a claim. The uncertainty in this trade is concentrated in a specific place — a piece with a strong scent and no record is worth less than a modest piece with a complete one, and a seller who cannot produce either is the reason buyers discount what they are shown.',
    directAnswerAr:
      'يقوم قيمة إعادة البيع على ثلاثة أمور: قوة توثيق المادة، وحسن حفظها، ووضوح التعرف عليها من لم يحضر. وكلها سجل أو حالة فيزيائية لا ادعاء. والغياب في هذه التجارة متركّز في مكان بعينه — فالقطعة ذات الرائحة القوية بلا سجل تساوي أقل من قطعة متواضعة بسجل كامل، ومن لا يستطيع تقديم أياً منهما هو سبب ما يطبّقه المشترون على ما يُعرض عليهم.',
    sections: [
      {
        heading: 'The three things that matter at resale',
        headingAr: 'الأمور الثلاثة المهمة عند إعادة البيع',
        body: [
          'Documentation: a complete record travels with the piece and is the first thing a buyer asks for. Its absence is the single largest discount in the market.',
          'Condition: an opened, exposed or distorted piece is worth less than an intact one, and the difference is physical and visible.',
          'Identifiability: a buyer cannot pay a specialist price for something they cannot confirm. Clear identification — the batch reference, the label, the characteristic appearance — is what allows a piece to be recognised later.',
          'None of these is a matter of taste, and none is improved by describing the piece more attractively. They are improved by keeping the record and the piece.',
        ],
        bodyAr: [
          'التوثيق: سجل كامل يرافق القطعة، وهو أول ما يطلبه المشتري. وغيابه أكبر سبب للخصم في السوق.',
          'الحالة: القطعة المفتوحة أو المكشوفة أو المشوّهة تساوي أقل من السليمة، والفرق فيزيائي ومرئي.',
          'قابلية التعرف: لا يستطيع المشتري دفع سعر متخصص لشيء لا يستطيع تأكيده. والتعرف الواضح — مرجع الدفعة والملصق والمظهر المميز — هو ما يسمح بالتعرف على القطعة لاحقاً.',
          'ولا شيء من هذه مسألة ذوق، ولا شيء منها يتحسن بوصف القطعة.الوصف أجمل. ما يتحسن منها هو الاحتفاظ بالسجل والقطعة.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022'],
    limitations:
      'This page describes what determines resale value. It does not value anything, and it does not address the tax, licensing or regulatory conditions that apply to reselling any particular material.',
    limitationsAr:
      'تصف هذه الصفحة ما يحدد قيمة إعادة البيع. ولا تسعّر شيئاً، ولا تتناول الشروط الضريبية أو الترخيصية أو التنظيمية المنطبقة على إعادة بيع مادة بعينها.',
    nextSteps: ['Read about documenting a collection', 'Read what a batch record contains', 'Read how documents are reviewed'],
    nextStepsAr: ['اقرأ عن توثيق مجموعة', 'اقرأ ما الذي تحتويه سجل الدفعة', 'اقرأ كيف تُراجع الوثائق'],
    related: [
      { slug: 'collecting/documenting-a-collection', label: 'Documenting an oud collection' },
      { slug: 'quality/batch-records', label: 'What belongs in a batch record' },
      { slug: 'trade/document-review-limits', label: 'What reviewing a document can establish' },
    ],
  }),

  simpleGuide({
    slug: 'comparisons/india-and-cambodia-oud',
    parent: 'comparisons',
    title: 'Comparing India and Cambodia oud claims',
    titleAr: 'مقارنة ادعاءات عود الهند وكمبوديا',
    summary:
      'Two different species, two different trades, and one shared word.',
    summaryAr: 'نوعان مختلفان، وتجارتان مختلفتان، واسم واحد مشترك.',
    directAnswer:
      'Indian oud and Cambodian oud are usually Aquilaria agallocha and Aquilaria crassna respectively, and they are different plants from different regions with different trade histories and different distillation traditions. What can be said is that the species differ, the material differs in character, and the commercial conventions around each are separate. What cannot be said is that one is better than the other, or that a seller calling a lot "Cambodian" has thereby established anything about the lot.',
    directAnswerAr:
      'العود الهندي والعود الكمبودي هما عادةً Aquilaria agallocha وAquilaria crassna على التوالي، وهما نباتان من منطقتين مختلفتين بتاريخين تجاريين مختلفين وتقليدي تقطير مختلفين.. والممكن قوله إن النوعين مختلفان، والمادة تختلف في الطابع، والعادات التجارية حول كل منهما منفصلة. ولا يمكن القول إن أحدهما أفضل من الآخر، ولا أن قول البائع «كمبودي» لوطاً يثبت شيئاً عن اللوط.',
    sections: [
      {
        heading: 'The comparison that can be made',
        headingAr: 'المقارنة التي يمكن إجراؤها',
        body: [
          'Compare on what is documented: the species, the growing region, the distillation method, and the character of the material as described. Where two samples are to hand, compare the samples — on the same day, by the same person, scored on the same attributes.',
          'Compare on what is claimed: both regional labels carry their own connotations in their own markets, and a claim of origin is a claim, checkable or not. Comparing the claims is useful for understanding the trade; it does not produce a verdict.',
          'And note the limit of the comparison: an origin claim about a material does not extend to the tree it came from without a chain of records, which is the subject of the provenance discussion rather than of the material discussion.',
        ],
        bodyAr: [
          'قارن على الموثّق: النوع، ومنطقة النمو، وطريقة التقطير، وطابع المادة كما هو موصوف. وحين تتوفر عينتان، فقارن العينتين — في اليوم نفسه، وبالشخص نفسه، وبمقاييس نفسها.',
          'وقارن على المُدَّعى: فكل تسمية إقليمية تحمل دلالاتها في سوقها، وادعاء المنشأ ادعاء يُتحقق منه أو لا. ومقارنة الادعاءات مفيدة لفهم التجارة، وهي لا تنتج حكماً.',
          'وانتبه لحدّ المقارنة: فادعاء منشأ مادة لا يمتد إلى الشجرة التي جاءت منها دون سلسلة سجلات، وهذا موضوع نقاش المصدر لا موضوع نقاش المادة.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_CITES_2022'],
    limitations:
      'This page compares two origin claims on their documented and claimed ground. It does not rank the two materials, and it does not establish that any particular lot is Indian or Cambodian.',
    limitationsAr:
      'تقارن هذه الصفحة ادعاءي منشأ على أساس الموثّق والمُدَّعى. ولا ترتّب المادتين، ولا تثبت أن لوطاً بعينه هندي أو كمبودي.',
    nextSteps: ['Read the India origin guide', 'Read the Assam page', 'Read the botanical identities'],
    nextStepsAr: ['اقرأ دليل الهند', 'اقرأ صفحة أسام', 'اقرأ الهويات النباتية'],
    related: [
      { slug: 'origins/india', label: 'India and northeast origin guide' },
      { slug: 'origins/india/assam', label: 'Assam: oud material and trade context' },
      { slug: 'oud-basics/agarwood-botanical-identity', label: 'Botanical identity and genus comparison' },
    ],
  }),
];
