import { simpleGuide } from './guide-kit.ts';
import type { Article } from './types.ts';

/**
 * High-intent consumer cluster that no existing page owns: durability and
 * expiration. The storage pages answer "how do I keep oud in good
 * condition". The investment-value page answers "is oud an asset". The
 * aged-vintage page answers "does maturation improve oud". None of them
 * answers the buyer's plain question — does oud go bad at all, how long
 * does a bottle of Dehn Al Oud or a pouch of bakhoor actually last, and
 * is material that has sat in a cupboard still usable or has it turned.
 *
 * That query is "how long does oud last / does oud oil expire / can oud
 * go rancid". This page owns it: the chemical reason durable oil degrades
 * slowly, what "expired" looks like in practice, and the concrete
 * indicators a buyer should check on old material before using it. The
 * numbers it gives are screening ranges drawn from the cited trade and
 * botanical sources, not laboratory shelf-life results for any product.
 */
export const shelfLifeAndDurabilityArticles: Article[] = [
  simpleGuide({
    slug: 'using-oud/oud-shelf-life-and-longevity',
    parent: 'using-oud',
    title: 'Does Oud Go Bad? Shelf Life of Oud Wood, Oil, and Bakhoor',
    titleAr: 'هل يفسد العود؟ العمر التخزيني لخشب العود ودهنه والبخور',
    summary:
      'Whether oud degrades at all: why a dense oil degrades slowly, what "expired" looks like in practice, and the concrete checks to run on old wood, oil, or bakhoor before you use it.',
    summaryAr:
      'هل يتحلل العود اصلا: لماذا يتدهور الزيت الكثيف ببطء، وكيف تبدو الصلاحية المنتهية عمليا، والفحوصات الملموسة التي تُجرى على الخشب أو الزيت أو البخور القديم قبل الاستعمال.',
    directAnswer:
      'Dense, properly stored oud degrades very slowly, and each form behaves differently. Oud oil (Dehn Al Oud) in a sealed, non-reactive glass vial in a cool, dark place can remain stable for many years without a hard expiry date, provided it is kept out of direct sunlight and high heat, which accelerate oxidation and rancidity. Bakhoor — pressed resin, wood, and oil — is the most perishable of the three because it is a bound mixture: the binder can dry out, the oil can separate, and the scent can mute over time, so a pouch that has been stored for years will still burn but rarely at the strength it was sold at. Raw oud wood is the most durable of the three, stable essentially indefinitely when kept dry, because the resin is the same material that preserves the wood around it. Nothing here is a laboratory shelf-life result; it is a reading of the chemistry and of how each form is made, and the checks below are how you tell, on the material in front of you, whether it has stayed good.',
      directAnswerAr:
        'يتحلل العود الكثيف المحفوظ على نحو صحيح ببطء شديد، ويتصرف كل شكل بطريقة مختلفة. فدهن العود في عبوة زجاجية خاملة محكمة في مكان بارد مظلم قد يبقى مستقرا لسنوات دون تاريخ انتهاء صارم، شريطة حفظه بعيداً عن أشعة الشمس المباشرة والحرارة العالية التي تعجلان بالأكسدة والزنخ. أما البخور، وهو خليط مضغوط من الراتنج والخشب والزيت، فهو أشد الثلاثة عرضةً للفساد لأنه خليط مجمع: قد يجف عامل اللصق، وينفصل الزيت، ويخفت الرائحة مع الوقت، فحقيبة حُفظت لسنوات تحرق لكن نادراً ما تحرق بقوة وقت بيعها. أما خشب العود الخام فأدومها؛ يبقى مستقرا عملياً إلى ما لا نهاية عندما يُحفظ جافاً، لأن الراتنج هو المادة نفسها التي تحفظ الخشب المحيط به. ولا شيء هنا نتيجة تخزين مخبرية؛ بل قراءة في الكيمياء وفي طريقة صنع كل شكل، وما يميز الفحوصات أدناه أنها تخبرك، على المادة أمامك، هل حافظت على جودتها.',
    sections: [
      {
        heading: 'Why dense oud degrades slowly, and what "expired" actually means',
        headingAr: 'لماذا يتحلل العود الكثيف ببطء، وما معنى «الصلاحية المنتهية»',
        body: [
          'Oud is resinous, and the resin is a matrix of heavy, low-vapor-pressure sesquiterpenoid and chromone compounds. Those molecules do not evaporate quickly, so a sealed oil loses little of its character on a human timescale. The enemies are not time alone but the things time enables: light and heat drive photochemical and oxidative breakdown, and any free water in a distillate invites hydrolysis and, eventually, rancidity. A truly clean, well-separated distillation in airtight glass is therefore slow on the decay axis, and "expired" is not a date you can read off a bottle. It is a state you observe: a turned or rancid note, a flat and broken-down profile, or physical signs in the product.',
          'The reason the state, not a date, is the honest answer is that there is no agreed industry shelf-life standard for these materials. The relevant guidance in consumer fragrance — the maximum concentration a finished product may carry, and how a mixture is declared — is about safety of application, not about how long the material keeps. That is why the practical test is a set of observations on the product in hand, which is what the next sections lay out.',
        ],
        bodyAr: [
          'العود كثيف الراتنج، والراتنج شبكة من مركبات السيسكويتربينويد والكرومونات الثقيلة بطيئة التطاير. هذه الجزيئات لا تتبخر بسرعة، فيفقد الزيت المحكم قسماً يسيراً من طابعه على مدى الزمن البشري. والأعداء ليسوا الزمن وحده بل ما يمهده الزمن: فالضوء والحرارة يدفعان بالتحلل الضوئي-الكيميائي والتأكسدي، وأي ماء حر في التقطير يفتح باب التحلل المائي ويزنخ في النهاية. بالتالي، تقطير نقي حسن الفصل في زجاج محكم بطيء على محور التحلل، و«الصلاحية المنتهية» ليست تاريخاً تقرأه من الزجاجة بل حالة تُرصد: رائحة زنخ أو تحلل، أو بنية مسطحة متفككة، أو علامات فيزيائية في المنتج.',
          'والسبب في أن الحالة لا التاريخ هو الجواب الصادق أنه لا يوجد معيار تخزين اتفقت عليه الصناعة لهذه المواد. فالإرشاد المعنى في عطور المستهلكين — الحد الأقصى للتركيز الذي يحمله المنتج المصنوع، وكيف يوصف الخليط — يخدم سلامة الاستعمال لا مدة حفظ المادة. لهذا يكون الفحص العملي مجموعة ملاحظات على المنتج في اليد، وهي ما تُفصّلها الأقسام التالية.',
        ],
      },
      {
        heading: 'Raw wood: the most durable form',
        headingAr: 'الخشب الخام: أدوم الأشكال',
        body: [
          'Unresinated and resinated agarwood both stay physically stable when kept dry. The resin is the same material that has been protecting the tree from decay, so a dry chip, bead, or stick does not rot on a shelf the way ordinary timber would; it can last years or decades with nothing done to it beyond keeping it out of sustained moisture. What changes with long storage is not spoilage but volatiles: the lightest top notes fade fastest, so a very old piece of resinous wood often reads deeper, darker, and less sharp than it did new. If a piece of wood has taken up moisture, shows mould, or smells musty rather than resinous, that is a storage failure, not an age effect, and the piece should be dried and re-checked before use or sale.',
        ],
        bodyAr: [
          'العود غير المرطّب والمرطّب كلاهما يبقى مستقراً فيزيائياً عندما يُحفظ جافاً. فالراتنج هو المادة التي كانت تحمي الشجرة من التحلل أصلاً، فلا يتعفن شظية أو خرزة أو عود على الرف كما تفعل الأخشاب العادية؛ بل قد يعمّر سنوات أو عقوداً دون أي معالجة سوى إبقائه بعيداً عن الرطوبة المستمرة. وما يتغير مع التخزين الطويل ليس فسداً بل المواد المتطايرة: إذ تتلاشى النوتات العليا الأخف أسرع، فعمد خشب عتيق يقرأ أعمق وأدكن وأقل حدّة مما كان عليه جديداً. فإن كان الخشب قد امتص رطوبة، أو ظهرت عليه عفن أو رائحة رطوبة بدل رائحة الراتنج، فإنها عطل تخزين لا أثر عمر، ويجب أن يُجفف ويُعاد فحصه قبل الاستعمال أو البيع.',
        ],
      },
      {
        heading: 'Oil: what makes Dehn Al Oud turn, and how to tell',
        headingAr: 'الزيت: ما يجعل دهن العود يزنخ وكيف تميز ذلك',
        body: [
          'A turning oil shows a rancid, sour, or flat base that no longer reads as a coherent oud: the smooth sesquiterpene base has broken down and the profile collapses to an off-note. Three on-hand checks distinguish a good old oil from a turned one. First, a scent strip: apply a drop and wait over the first twenty minutes; a sound oil develops a rounded, balsamic, leathery progression, while a turned one jumps straight to a sharp, sour or chemical off-note. Second, a visual check of colour and clarity: a natural darkening over years is normal; a clouded, gritty, or separated bottle that is not simply a heavy winter precipitate is a bad sign. Third, the consistency: old, well-aged oil should feel dense and slowly spreading, not watery, not gummy, not clumping.',
          'A freshly sealed commercial oil, out of heat and light, has no reason to turn on a human timescale, so a "date stamped" oil sold by a reputable supplier is a statement of distillation lot, not a discard deadline. What it does not do is guarantee that the storage since sale was clean; only the checks above read that.',
        ],
        bodyAr: [
          'الزيت الزنخ يسم أساساً زنخاً أو حامضياً أو مسطحاً لم يعد يُقرأ كعود متماسك: فالمادة البلسمية السيسكويتربينية تحللت وتصدّعت البنية نحو رائحة شاذة. وفحوصتان في اليد تفصلان بين الزيت العتيق السليم والزنخ. أولهما، شريط الرائحة: ضع قطرة وانتظر أول عشرين دقيقة؛ فالزيت السليم ينفتح انتقالاً ناعماً بلسمياً جلدياً، والزنخ يقفز فوراً نحو حدة حامضية أو كيميائية شاذه. وثانيهما، فحص اللون والصفاء بالعين: فالتعتيم الطبيعي بمرور السنين طبيعي، أما الزجاجة العكرة أو الحبيبة أو المفصولة التي ليست مجرد ترسب شتوي ثقيلاً فإشارة سيئة. وثالثهما، القوام: فالزيت المعتق الجيد يجب أن يكون كثيفاً بطيء الانتشار، لا مائياً ولا مطاطياً ولا متكثفاً.',
          'وزيت تجاري جديد محكم بعيداً عن الحرارة والضوء لا سبب يجعله يزنخ على الزمن البشري، فزيت «موسوم بالتاريخ» يبيعه مورد معروف بيان عن دفعة التقطير لا عن مهلة رمي. وهذا البيان لا يضمن أن التخزين بعد البيع كان سليماً؛ وما يقرأ ذلك فحوصات القسم أعلاه فقط.',
        ],
      },
      {
        heading: 'Bakhoor: the most perishable form, and the one buyers worry about most',
        headingAr: 'البخور: أشد الأشكال عرضة للفساد وأكثر ما يقلق المشترون',
        body: [
          'Bakhoor is a formulated blend — resin, oud wood or powder, oils, and a binder pressed into a solid. Because it is a bound mixture rather than a pure material, it is the most time-sensitive of the three. Two things happen in storage. The binder can dry and crack, so a block that was once uniform crumbles or dusts, and the scent mutes as the light volatiles leave the open surface of the block. Separately, if the binder or oil base carries any free water or was under-dried, the piece can eventually go musty. Neither is a safety hazard in the way a mouldy food is; it is a potency loss. An old bakhoor block still burns, but you are buying it now for a muted, sometimes one-dimensional scent rather than the layered one it was sold as. A block that is still dense, still smells through its surface, and has no musty or off note is still good; one that has crumbled, gone chalky, or turned sour should be set aside.',
        ],
        bodyAr: [
          'البخور صيغة مركّبة — راتنج، وخشب العود أو مسحوقه، وزيوت، وعامل لصق يُضغط صلباً. ولأنه خليط مجمع لا مادة نقية، فهو أشد الثلاثة حساسية للزمن. ويحدث أمران في التخزين. قد يجف عامل اللصق ويتشقق، فيتحطم الكُتل التي كانت متماسكة أو يتفتت غباراً، وتخفت الرائحة مع خروج المواد الخفيفة المتطايرة من سطح الكتل المفتوح. ومن جهة أخرى، فإن كان اللصق أو أساس الزيت يحمل ماءً حراً أو قُشر أقل من اللازم، فقد يأخذ الطابع الرطب في النهاية. ولا شيء من هذا خطر السلامة كما في طعام متعفّن؛ بل فقد قوة. فكتل بخور قديمة تحرق، لكنك تشتريها الآن برائحة خافتة أحادية ربما، لا بالطبقات التي بيعت بها. فكتل ما تزال كثيفة، وتعطّر من سطحها، وعديمة الرطوبة أو الرائحة الشاذة ما تزال صالحة؛ وأما التي فتتت أو أصبحت كاسبة أو زنخت فتُوضع جانباً.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does oud oil have an expiry date?',
        answer:
          'No date you can be read off the bottle. A clean distillation sealed in non-reactive glass, out of light and heat, stays stable for years. "Expired" is a state you observe — a rancid or broken-down base — not a calendar value.',
      },
      {
        question: 'Can old bakhoor still be used?',
        answer:
          'Yes, but it degrades more than wood or oil. It still burns, but the binder can dry and the scent mutes. A dense block that still smells and has no off note is usable; one that crumbled, went chalky, or turned sour is not worth using.',
      },
      {
        question: 'How long does raw oud wood last?',
        answer:
          'Effectively indefinite when kept dry. The resin preserves the wood around it. Long storage fades the lightest top notes, so old resinous wood reads deeper and less sharp; moisture, mould, or a musty smell are storage failures, not age effects.',
      },
    ],
    faqAr: [
      {
        question: 'هل لدهن العود تاريخ انتهاء؟',
        answer:
          'لا تاريخ تقرأه من الزجاجة. فالتقطير النقي المحكم في زجاج خامل بعيداً عن الضوء والحرارة يبقى مستقرا سنوات. و«الصلاحية المنتهية» حالة تُرصد — أساس زنخ أو متحلل — لا قيمة تقويمية.',
      },
      {
        question: 'هل يمكن استعمال البخور القديم؟',
        answer:
          'نعم، لكنه يتدهور أكثر من الخشب أو الزيت. ما يزال يحرق، لكن عامل اللصق قد يجف وتخفت الرائحة. فكتل كثيفة ما تزال تعطر وعديمة الرائحة الشاذة صالحة للاستعمال؛ وما فتت أو كرسب أو زنخ فلا يستحق.',
      },
      {
        question: 'كم يعيش خشب العود الخام؟',
        answer:
          'إلى ما لا نهاية عملياً إذا حُفظ جافاً. فالراتنج يحفظ الخشب حوله. والتخزين الطويل يبدد أخف النوتات العليا، فيقرأ الخشب العتيق أعمق وأقل حدّة؛ والرطوبة والعفن ورائحة الرطوبة عطل تخزين لا أثر عمر.',
      },
    ],
    sourceIds: ['AGARWOOD_REVIEW_2014', 'ITTO_AGARWOOD_REVIEW', 'IFRA_STANDARDS'],
    limitations:
      'This page states a chemistry reading and practical on-hand checks for whether stored oud has stayed good. It does not measure the shelf life of any specific product, does not establish a storage standard or a discard deadline, and does not replace the supplier’s own conditions on a given lot. The checks are screening observations, not laboratory or safety determinations.',
    limitationsAr:
      'تقرر هذه الصفحة قراءة كيميائية وفحوصات ملموسة لمعرفة هل بقي العود المحفوظ صالحاً. ولا تقيس عمر تخزين منتج بعينه، ولا تضع معيار تخزين أو مهلة رمي، ولا تحل محل شروط المورد الخاصة على دفعة بعينها. والفحوصات ملاحظات فحصية لا تحديداً مخبرياً ولا قرار سلامة.',
    related: [
      { slug: 'quality/aged-vintage-dehn-al-oud', label: 'The science and value of aged Dehn Al Oud' },
      { slug: 'collecting/aging-and-storage-care', label: 'Proper storage and aging care for oud collections' },
      { slug: 'using-oud/storage-and-batch-records', label: 'Storage and batch records' },
      { slug: 'using-oud/how-to-burn-oud-and-bakhoor', label: 'How to burn oud and bakhoor' },
      { slug: 'glossary/dehn-al-oud', label: 'Dehn Al Oud defined' },
    ],
  }),
];
