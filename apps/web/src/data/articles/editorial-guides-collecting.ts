import type { Article } from './types.ts';
import { simpleGuide } from './guide-kit.ts';

/**
 * The collecting block's practical-care gap (landscape audit §8).
 *
 * The corpus already carries the records side — storage-and-batch-records
 * (how to keep the records that make later description possible) and
 * quality/age-claims (what the four kinds of "age" each do and do not
 * establish) — and the resale side (collecting/resale-and-risk). What no
 * page carried is the care guide itself: what to do and avoid for the
 * physical material, and whether oud functions as an asset at all. Both
 * are built here with the evidence the site actually has: the dated
 * price observation baseline, the grade-label catalogue, and the source
 * registry's own limits. Where a source is silent, the page says so
 * rather than decorating the claim.
 */

export const editorialGuideCollecting: Article[] = [
  simpleGuide({
    slug: 'collecting/aging-and-storage-care',
    title: 'How to store oud: what the material needs and what it will not forgive',
    titleAr: 'كيفية تخزين العود: ما يحتاجه المادّة وما لا تغفره',
    summary:
      'The practical care guide for resins, cut pieces and oil: the two things the material itself does to itself over time, the conditions that keep the condition you bought it in, and the claims a stored piece can and cannot later support.',
    summaryAr:
      'دليل العناية العملي للأعشاب والقطع والزيوت: ما تفعله المادة بنفسها مع الوقت، والظروف التي تحفظ الحالة التي اشتريتها عليها، وما يمكن إثباته على قطعة مخزّنة لاحقاً وما لا يمكن إثباته.',
    directAnswer:
      'Stored oud changes in two ways on its own: resins and oils keep moving in and out of the wood with temperature and humidity, and the piece dries toward the air it sits in. Neither process has a reversible guarantee, so care is not about improving the material but about freezing it: a stable, cool, dry, dark, sealed-in-glass environment bought once and never changed is the whole practice. Everything else — humidity boxes, "seasoning", warming a piece to smell it — is a practice whose outcome the cited sources do not document, and the page treats it as one.',
    directAnswerAr:
      'يتغيّر العود المخزَّن بطريقتين ذاتيتين: تستمر الزيوت في انتقالها داخل الخشب وبعده مع الحرارة والرطوبة النسبية، وتميل القطعة إلى الجفاف نحو الهواء الذي تجلس فيه. ولا ضمان عكسي لأيٍّ من العمليتين، فالعناية ليست تحسيناً للمادة بل تثبيتاً لها: بيئة مستقرة وباردة وجافة ومظلمة ومغلَفة بالزجاج، تُفرض مرة واحدة ولا تُغيَّر بعد ذلك. وكل ما عدا ذلك — صناديق الرطوبة، «التعويد»، تسخين القطعة ليتّضح عطرها — ممارسات لا توثّق نتائجها المصادر المذكورة، فتُصنَّف في الصفحة صنفاً غير موثَّقٍ.',
    sections: [
      {
        heading: 'What the material does to itself',
        headingAr: 'ما تفعله المادة بنفسها',
        body: [
          "Resin in agarwood is not sealed in place. The wood's pores carry oil, and with each change of temperature and relative humidity that oil migrates: it concentrates toward the colder, drier side of the piece and leaves the warmer side comparatively dry. The consequence is that a piece's smell is not a fixed property but a function of the air around it, and two readers smelling the same piece in two rooms can be reporting two genuinely different states of that piece rather than two different powers of nose.",
          "The same physics runs the other way when conditions are held constant. A piece in a stable environment stops changing noticeably, which is the point: what a store provides is not transformation but a stop. A piece that stops changing is a piece whose condition can be described, compared and — this is the point that ties storage to records — described consistently a year from now by a person who was not in the room when it was bought.",
        ],
        bodyAr: [
          "لا تثبت الرائحة مكانها في العود. تحمل مسام الخشب الزيت، ومع كل تغير في الحرارة والرطوبة النسبية ينتقل الزيت: يتركز نحو الجهة الأبرد والأجفاف من القطعة ويترك الجهة الأدفأ أجفَّ نسبياً. والعاقبة أن عطر القطعة ليس خاصية ثابتة بل وظيفة للهواء المحيط بها، وقارئان يشمّان نفس القطعة في غرفتين يمكن أن يكونا يصفان حالين حقيقيين مختلفين لتلك القطعة لا حاستين مختلفتين.",
          "تعمل الفيزياء نفسها عكسياً عندما تُثبت الظروف. القطعة في بيئة مستقرة تكفّ عن التغيّر الملموس، وهذا هو الغرض: فالمخزن لا يقدّم تحوّلاً بل توقفاً. والقطعة التي تتوقف عن التغيّر هي القطعة التي يمكن وصف حالتها ومقارنتها — وهذا هو المحل الذي يربط التخزين بالتسجيل — وصفها باستمرار بعد عام، بيد شخص لم يكن في الغرفة وقت الشراء.",
        ],
        callout: {
          title: 'The rule the rest of this page hangs on',
          titleAr: 'القاعدة التي يعلّق عليها بقية الصفحة',
          body:
            "Storage is not a treatment. There is no published procedure that reliably adds resin to a stored piece, and no source in the registry documents a reversible one. The entire practice is therefore a prevention: keep the conditions the material was in when it was assessed, because the condition description attached to the piece is only as good as the stability of the room it has sat in since.",
          bodyAr:
            'التخزين ليس معالجة. لا توجد طريقة موثقة تضيف رائحة إلى قطعة مخزّنة بثقة، ولا سجل المصدر يوثّق طريقة عكسية. فالممارسة كلها منع: حافظ على الظروف التي كانت عليها المادة وقت التقييم، لأن وصف الحالة المرفق بالقطعة لا يتجاوز ثبات الغرفة التي جلس فيها منذ ذلك الحين.',
        },
      },
      {
        heading: 'The conditions that keep the condition',
        headingAr: 'الظروف التي تحفظ الحالة',
        body: [
          'The practice reduces to five conditions. None of them is exotic; the value of listing them is that every one has a failure mode the eye does not announce.',
        ],
        bodyAr: [
          'تختزل الممارسة في خمس ظروف. لا شيء فيها غريب؛ وقيمة سردها أن لكل واحدة منها نمط فشل لا تعلنه العين.',
        ],
        list: [
          'Temperature: hold it low and hold it constant. The number matters less than the drift — a piece moved from a hot car to a shelf is stressed harder by the swing than by either end.',
          'Relative humidity: the target band is dry, because oil in the wood keeps migrating toward what is drier, and dry is stable in a way humid is not. The registry does not document a numeric band, and this page does not invent one.',
          'Light: keep the piece out of it. Resin and wood both degrade in light over time, and the degradation is not recoverable, which makes it the one condition where "less" is measurable.',
          'Seal: glass, not plastic. A sealed glass jar holds a stable microclimate around the piece; a plastic container slowly exchanges chemicals with what it holds, which is how a smell gets onto a piece that was not it.',
          'One place: the shelf has to be a decision, not a journey. A piece that moves between rooms every few months is a piece that has not been stored; it has been in transit the whole time.',
        ],
        listAr: [
          'درجة الحرارة: ثبّتها منخفضة وثبّتها ثابتة. الأرقام أقل أهمية من الانحراف — القطعة المنقولة من سيارة حارة إلى رفّ يضغطها التأرجح أكثر من الطرفين معاً.',
          'الرطوبة النسبية: النطاق المستهدف هو الجاف، لأن الزيت في الخشب يستمر في الانتقال نحو الجانب الأجفّ، والجاف مستقر بطريقة لا تتحقق مع الرطب. ولا يوثّق سجل المصدر نطاقاً رقمياً، وهذه الصفحة لا تقيّض واحداً.',
          'الضوء: ابعُد القطعة عنه. الرائحة والخشب كلاهما يتحللان بالضوء مع الوقت، والتحلل غير قابل للاسترداد، وهذا هو الشرط الوحيد الذي يمكن فيه قياس "الأقل".',
          'الإغلاق: زجاج لا بلاستيك. مرطّب محكم بالزجاج يحفظ محيطاً مستقراً حول القطعة؛ بينما يستمر الوعاء البلاستيكي في تبادل المواد الكيميائية مع محتواه ببطء، وهذا هو المسار الذي يعلق فيه عطر على قطعة لم تكن هي.',
          'مكان واحد: الرف قرار لا سفر. القطعة التي تنتقل بين الغرف كل بضعة أشهر لم تخزَّن؛ كانت في الطريق طوال الوقت.',
        ],
      },
      {
        heading: 'What a stored piece can and cannot later support',
        headingAr: 'ما يمكن إسناده على قطعة مخزّنة وما لا يمكن',
        body: [
          'This is where storage meets the two records pages on the site. A stored piece supports three later claims: that the material was what it tested as on day one (only if the piece was sealed and stable — because an unsealed, moving piece can have been opened, handled, or re-cut and no one would know), that its current smell is a state of that material in this air (the storage record is what makes that a defensible sentence), and that the condition description attached at purchase still applies (only so long as the room has been the room).',
          'A stored piece does not support an age claim. Storing a piece does not add resin to it, so "aged in storage" is not a documented outcome of the storage record, and the age-claims page says the same thing from the other side: the four kinds of age a seller means are all upstream of storage. And it does not support a value claim, because that is the next page\'s subject.',
        ],
        bodyAr: [
          'هنا يلتقي التخزين بصفحتي التسجيل في الموقع. القطعة المخزّنة تسند ثلاثة ادعاءات لاحقة: أن المادة كانت ما ثبتت في اليوم الأول (فقط إذا كانت مغلقة ومستقرة — لأن القطعة غير المحكمة المنتقلة يمكن أن تكون مفتوحة أو معالَجة أو معاد تقطيعها، ولن يدرى أحد)، وأن عطرها الحالي حالة من هذه المادة في هذا الهواء (تسجيل التخزين هو ما يجعل ذلك عبارة قابلة للدفاع)، وأن وصف الحالة المرفق عند الشراء لا يزال صحيحاً (طالما بقيت الغرفة الغرفة).',
          'لا تسند القطعة المخزّنة ادعاء عمر. التخزين لا يضيف رائحة إلى القطعة، لذا فإن "العمر في التخزين" ليس نتيجة موثقة لتسجيل التخزين، وتقول صفحة الأدلة العمرية الشيء نفسه من الجهة الأخرى: الأنواع الأربعة للعمر التي يقصدها البائع كلها سابقة على التخزين. كما لا تسند ادعاء قيمة، وهذا موضوع الصفحة التالية.',
        ],
      },
      {
        heading: 'Where the practices go undocumented',
        headingAr: 'أين تصبح الممارسات غير موثقة',
        body: [
          'The trade carries a set of storage practices — humidity-controlled boxes, monthly rotation, warming the piece before smelling it, sealing oil in airtight vials — and this page treats each one the same way: the sources in the registry do not document the outcome of any of them, so the page does not endorse any of them. That is a limit, not an opinion: the registry is a trade-studies and botany-and-trade corpus, and it is silent on storage practice at the resolution this page needs. The one practice the physics above does support is the one the list names: the sealed glass, the stable cool dry dark room, the single shelf. Everything more than that is a claim that would need its own evidence.',
        ],
        bodyAr: [
          'يتداول السوق مجموعة ممارسات تخزينية — صناديق رطوبة مضبوطة، تدوير شهري، تسخين القطعة قبل شمّها، حبس الزيت في عبوات محكمة — وتتعامل الصفحة مع كل منها معاملة واحدة: مصادر السجل لا توثّق نتيجة أيٍّ منها، فلا تصادق الصفحة على أيٍّ منها. وهذا قيدٌ وليس رأياً: السجل مجموعة دراسات تجارية ونباتية، وهو صامتٌ عن ممارسة التخزين بالدرجة التي تحتاجها الصفحة. والممارسة الوحيدة التي تدعمها الفيزياء أعلاه هي التي تذكرها القائمة: الوعاء الزجاجي المحكم، الغرفة الثابتة الباردة الجافة المظلمة، الرفّ الواحد. وكل ما زاد على ذلك ادعاءٌ يحتاج دليله الخاص.',
        ],
      },
    ],
    sourceIds: ['ITTO_AGARWOOD_REVIEW', 'AGARWOOD_REVIEW_2014', 'TRAFFIC_UAE_AGARWOOD_TRADE'],
    limitations:
      'The source registry does not document storage practice, so the physical conditions on this page are stated as the one claim the physics of oil migration supports, not as a documented regimen; every trade practice beyond that is named as undocumented. This is a limit of the sources, recorded rather than papered over.',
    limitationsAr:
      'لا يوثّق سجل المصدر الممارسة التخزينية، لذا تَقدَّم الظروف الفيزيائية في هذه الصفحة كادعاء واحد تدعمه فيزياء تحرك الزيت، لا كنظام موثّق؛ وكل ممارسة تجارية تتجاوز ذلك تُسمّى غير موثقة. وهذا حدّ المصادر، مسجَّلاٌ لا يُستَر عليه.',
    nextSteps: [
      'What a stored piece\'s records must answer: the storage-and-batch-records guide.',
      'The four kinds of "age" a stored piece does not create: the age-claims guide.',
      'What a piece is worth coming out of storage: the investment-value page.',
    ],
    nextStepsAr: [
      'ما يجب أن تجيب عليه سجلات القطعة المخزّنة: دليل التسجيل والتخزين.',
      'أنواع "العمر" الأربعة التي لا يصنعها التخزين: دليل ادعاءات العمر.',
      'ما قيمتها خارج المخزن: صفحة قيمة الاستثمار.',
    ],
    related: [
      { slug: 'using-oud/storage-and-batch-records', label: 'Storage and batch records' },
      { slug: 'quality/age-claims', label: 'What an age claim does and does not establish' },
      { slug: 'collecting/resale-and-risk', label: 'Collecting and resale uncertainty' },
      { slug: 'collecting/investment-value', label: 'Whether oud is an investment, honestly scoped' },
      { slug: 'using-oud/label-and-store-samples', label: 'Label and store the samples you buy' },
    ],
    parent: 'collecting',
  }),

  simpleGuide({
    slug: 'collecting/investment-value',
    title: 'Whether oud is an investment: what the site\'s own records allow it to say',
    titleAr: 'هل العود استثمار: ما تسمح به سجلات الموقع نفسها',
    summary:
      'An honest assessment of oud as an asset, built from the site\'s own dated price observation baseline and resale-uncertainty records: what "the price is up" would need to mean, why the two records a piece must carry are the whole of the case, and where the page stops because the numbers stop being numbers.',
    summaryAr:
      'تقييم صادق للعود كأصل، مبني من خط الأساس التاريخي لملاحظات الأسعار الذي يملكه الموقع نفسه وسجلات عدم اليقين المتداولة: ما الذي يجب أن يعنيه "السعر صعد"، ولماذا يمثّل سجلان يجب أن تحملهما القطعة حجة كاملة، وأين تتوقف الصفحة لأن الأرقام تتوقف عن أن تكون أرقاماً.',
    directAnswer:
      'Oud is not a published asset class, and the site\'s own records say exactly that. The price observation baseline is one dated snapshot of observed price bands across named public price lists — not a series, not a market, not a quote — and the resale-uncertainty page states that value rests on documentation, storage, and identification by a stranger, which is to say that most pieces cannot be resold at the figure in their head. What the records do allow is a narrower and more useful sentence: a documented, stored, identifiable piece with a priced band in the baseline is a piece whose current worth can be argued; without those three records, the number is a story.',
    directAnswerAr:
      'العود ليس أصلاً منشوراً، وسجلات الموقع نفسها تقول ذلك بالضبط. خط أساس ملاحظات الأسعار لقطة تاريخية واحدة لنطاقات أسعار مراقبة عبر قوائم أسعار عامة مسماة — وليس سلسلة، ولا سوقاً، ولا عرضاً — وتقول صفحة عدم يقين التسويق أن القيمة مبنية على التوثيق والتخزين والتعرف من غريب، وهذا يعني أن معظم القطع لا يمكن تصريفها بالسعر في رأسك. وما تسمح به السجلات جملة أضيق وأفيد: قطعة موثقة ومخزّنة وقابلة للتعرف ولها نطاق مسعّر في الأساس هي قطعة يمكن حسم قيمتها الحالية؛ وبدون هذه السجلات الثلاثة يكون الرقم حكاية.',
    sections: [
      {
        heading: 'What a price argument actually needs',
        headingAr: 'ما تحتاجه حجة السعر فعلاً',
        body: [
          'An investment is a claim about a future price, and a future price only becomes a claim once three things are in place: a number that came from somewhere observable, a second number from a different date, and a record saying which piece was sold at which one. The site\'s baseline carries the first of those — a dated snapshot of the bands observed in named public lists, by origin and form — and it is the only one. There is no second snapshot yet; the index is published quarterly on a named cycle, and the quarterly pair is what "the price moved" would mean when there is one to point at. Until that pair exists, no page on this site — this one included — is allowed to print a direction. That is the page\'s first limit, and it is printed in full rather than footnoted.',
        ],
        bodyAr: [
          'الاستثمار ادعاء عن سعر مستقبلي، ولا يصبح السعر المستقبلي ادعاءً إلا بوضع ثلاث حاجات: رقم جاء من مكان قابل للمراقبة، ورقم آخر من تاريخ مختلف، وسجل يقول أي قطعة بيعت بأي واحد. يحمل أساس الموقع الأولى منها — لقطة تاريخية لنطاقات مسعّرة عبر قوائم عامة مسماة، حسب المصدر والشكل — وهي الوحيدة. لا يوجد لقطة ثانية بعد؛ الفهرس يُنشر ربعياً بدورة مسماة، والزوجان الربعيان هما ما سيعنيه "تحرك السعر" عندما يكون ما يُشار إليه. إلى أن يوجد الزوج، لا يُسمح لصفحة على هذا الموقع — وهذا الموقع من ضمنها — بطبع اتجاه. وهذا أول حدود الصفحة، ومطبوع بالكامل لا في الحاشية.',
        ],
      },
      {
        heading: 'The three records a piece must carry',
        headingAr: 'السجلات الثلاثة التي يجب أن تحملها القطعة',
        body: [
          'The resale-uncertainty page reduces the question to three records, and the storage page supplies the reason. A piece argues its own value when someone who was not there can read back: what it was when it was priced, that the conditions it was priced in have been held (because the smell is a state, not a property), and that the material in hand is the material that was described. Each record fails on its own — a price without a storage record is a price of a different piece, and a storage record without a description is a record of a piece no one said what it was.',
          'Which means the investable population is much smaller than the collectible one. Most pieces in most collections carry none of the three, and the page says so plainly: for the unrecorded piece, the question is not what it is worth but whether the money spent documenting it is less than the range between its unrecorded worth and its recorded worth. For the recorded piece, the value is a range with a band from the baseline — not a mark — and a range is the most the number can be.',
        ],
        bodyAr: [
          'تختزل صفحة عدم يقين التسويق المسألة في ثلاثة سجلات، وتوفر صفحة التخزين السبب. القطعة تحاجج قيمتها عندما يستطيع شخص لم يكن موجوداً أن يقرأ ما يلي: ما كانت عليه وقت التسعير، وأن الظروف التي قُيِّم فيها السعر لم تتغير (لأن الرائحة حالة لا خاصية)، وأن المادة في اليد هي المادة الموصوفة. وكل سجل يفشل وحده — السعر بلا سجل تخزين هو سعر قطعة مختلفة، وسجل تخزين بلا وصف هو سجل قطعة لم يقل أحد ما هي.',
          'وهذا يعني أن الساحة القابلة للاستثمار أصغر بكثير من ساحة الجمع. ومعظم القطع في معظم المجموعات لا تحمل سلا من الثلاثة، وتقول الصفحة ذلك صراحة: في القطعة غير المسجلة، المسألة ليست كم تساوي بل هل أقل من ثمن التوثيق من المسافة بين قيمتها غير المسجلة وقيمتها المسجلة. وفي القطعة المسجلة، القيمة نطاق فيه شريط من الأساس — لا علامة — والنطاق هو أقصى ما يكون به الرقم.',
        ],
      },
      {
        heading: 'What "the price is up" would not yet be',
        headingAr: 'ما الذي لا يزال لا يكفي لـ"السعر صعد"',
        body: [
          'Even when the quarterly pair lands, the sentence needs reading. The baseline is a band, so "up" means the band moved, and the band is observed in public lists, which means the observation is of what sellers printed, not of what changed hands: a printed list is a seller\'s statement, and a seller\'s statement is what the misdescription guide exists to read against. The band is also per origin and form, so a move in one band says nothing about the piece you hold unless it is that origin and form. And the baseline is a price observation, not a volume record — a wide band with few lists behind it is a band you should quote with its denominator, not treat as a market. The page publishes the pair when it exists; what it publishes is the reading of it.',
        ],
        bodyAr: [
          'حتى لو هبط الزوج الربيعي، تحتاج الجملة قراءة. الأساس نطاق، لذا "صعد" يعني أن النطاق تحرك، والنطاق مراقب في قوائم عامة، أي أن المراقبة لما طبعه البائعون لا لما تغيّر يد: القائمة المطبوعة بيان بائع، وبيان البائع هو ما أنشئت أدلة التشويه لإقراءه عليه. والنطاق حسب المصدر والشكل، لذا تحرك نطاق لا يقول شيئاً عن قطعتك ما لم تكن من ذلك المصدر وبذلك الشكل. والأساس مراقبة سعر لا سجل كمية — نطاق واسع بقوائم قليلة خلفه نطاق تنقله بمقامه، لا تعامله كشركة. والطبعة تنشر الزوج عند وجوده؛ وما تطبعه هو قراءته.',
        ],
      },
      {
        heading: 'Where the page stops',
        headingAr: 'أين تتوقف الصفحة',
        body: [
          'The honest scope: oud is a documented commodity in a thin market, and that sentence is the whole of the investment case the site can make today. It is not an asset class, not an appreciating material, not a hedge — those words each carry the records a price series would need, and the site\'s one snapshot is not a series. The page therefore sells nothing and forecasts nothing; it names the three records that make a piece arguable, and names the day the pair exists. When that day comes, this page points at the pair and says what it does and does not say. What it will not say is the sentence the search results are full of: that the material went up. The two words are not in any record the site holds.',
        ],
        bodyAr: [
          'النطاق الصادق: العود سلعة موثقة في سوق ضيّق، وهذه الجملة كل ما يستطيع الموقع تقديمه كحجة استثمارية اليوم. ليس صنفاً من الأصول، ولا مادة تزداد قيمتها مع الوقت، ولا أداة تحوُّط — وكل كلمة تحمل سجلاتٍ ما تحتاجها سلسلة الأسعار، واللقطة الواحدة للموقع ليست سلسلة. لذلك لا تبيع الصفحة شيئاً ولا تتنبأ: تسمّي السجلات الثلاثة التي تجعل القطعة قابلةً للحجة، وتسمّي اليوم الذي سيوجد فيه الزوج الربيعي. عندما يحين ذلك اليوم، ستشير الصفحة إلى الزوج وتقول ما يقوله وما لا يقوله. والذي لن تقوله هو الجملة التي تملأ نتائج البحث: أن المادة صعدت. الكلمتان ليستا في أيِّ سجلٍّ يملكه الموقع.',
        ],
      },
    ],
    sourceIds: ['TRAFFIC_UAE_AGARWOOD_TRADE', 'AGARWOOD_REVIEW_2014', 'ITTO_AGARWOOD_REVIEW'],
    limitations:
      'The price observation baseline is a single dated snapshot, not a price series, so no direction claim ("the price is up or down") is made on this page or allowed to be made from it; value language is limited to the range a documented, stored, identifiable piece can support from a band, and the page names the quarterly pair that would change this. The claim that oud is an asset class is out of scope: the site holds no market records.',
    limitationsAr:
      'خط أساس ملاحظات الأسعار لقطة تاريخية واحدة، لا سلسلة أسعار، لذا لا تُصنع على هذه الصفحة أو يُسمح بصناعتها أي ادعاء اتجاه (السعر صعد أو نزل)؛ ولغة القيمة محصورة في المدى الذي يمكن أن تدعمه قطعة موثقة ومخزّنة وقابلة للتعرف من نطاق، وتسمّي الصفحة الزوج الربيعي الذي سيعيّر هذا. وادعاء العود كأصل خارج عن النطاق: لا يملك الموقع سجلات سوقية.',
    nextSteps: [
      'What makes a piece sellable back: the resale-uncertainty page.',
      'What storage the value argument depends on: the storage-care guide.',
      'The band a piece sits in: the price observation baseline.',
      'What a priced piece must not be: the misdescription warning signs.',
    ],
    nextStepsAr: [
      'ما الذي يجعل القطعة قابلة للعرض لاحقاً: صفحة عدم يقين التسويق.',
      'التخزين الذي تعتمد عليه حجة القيمة: دليل العناية والتخزين.',
      'النطاق الذي تجلس فيه قطعة: خط أساس ملاحظات الأسعار.',
      'ما لا يجب أن تكونه قطعة مسعّرة: علامات التنبيه من التشويه.',
    ],
    related: [
      { slug: 'collecting/resale-and-risk', label: 'Collecting and resale uncertainty' },
      { slug: 'collecting/aging-and-storage-care', label: 'How to store oud: what it needs and what it will not forgive' },
      { slug: 'quality/gulf-price-baseline', label: 'The Gulf price observation baseline' },
      { slug: 'buying/oud-price-comparison', label: 'The site-wide price comparison' },
      { slug: 'quality/oud-misdescription-warning-signs', label: 'What a priced piece must not be' },
    ],
    parent: 'collecting',
  }),

  simpleGuide({
    slug: 'fragrance/oud-blending-ratios',
    title: 'Blending oud: the framework, and the ratios the trade does not publish',
    titleAr: 'خلط العود: الإطار، والنِسَب التي لا ينشرها السوق',
    summary:
      'The blending page the recipe-wave audit item called for, scoped to what the sources actually document: what a blend is, the three cuts it can be, the two variables the cut is not, and — stated in full — that no attested ratio set exists in the registry, so the page gives the method rather than the numbers.',
    summaryAr:
      'صفحة الخلط التي طلبها موجّز الموجة، مُقيّدة بما توثقه المصادر فعلاً: ما الخليط، والنقاط الثلاث التي يمكن أن يكون، والعاملين اللذين لا يكون القطع فيهما، وأن لا مجموعة نسب موثقة في السجل، لذا تعطي الصفحة الطريقة لا الأرقام.',
    directAnswer:
      'The trade publishes no ratio sets that this site can cite, and the page does not borrow them from elsewhere to look complete. What it can say is the framework: a blend is a defined mixture of two or more fragrance materials, the ratio is the one variable that changes the character, the two things the ratio is not (concentration, and the base you are putting it in), and the one property that makes the numbers unknowable from a page — blending is a sensory operation, and the registry is a trade-studies corpus, so the honest output is the method, the checks, and the limit, printed in full.',
    directAnswerAr:
      'لا ينشر السوق مجموعات نسب يقدر الموقع على نقلها، ولا تعيرها الصفحة من مكان آخر لتبدو كاملة. ما يمكنها قوله هو الإطار: الخليط خليط محدد لمادتي عطر أو أكثر، والنسبة هي المتغير الوحيد الذي يغيّر الطابع، وهما ما النسبة ليست (تركيزاً، والقاعدة التي ستوضع فيها)، والخاصية الواحدة التي تجعل الأرقام غير معلومة من صفحة — الخلط عملية حسية، وسجل المصادر كتاب دراسات تجارية؛ فالمخرج الصادق هو الطريقة والفحوص والحد، مطبوع بالكامل.',
    sections: [
      {
        heading: 'What a blend is, and what the ratio is not',
        headingAr: 'ما الخليط، وما النسبة ليست',
        body: [
          "A blend is a deliberately defined mixture: two or more fragrance materials cut in a known proportion, and the known proportion is the whole of the product. That is what separates it from the accords-and-blends page's three names — a natural oud oil cut with something else, a blend built on it, and the accord made from synthetics to imitate it — because those are kind-of-product distinctions, and the ratio is the kind-of-blend within one. The one property the page must state up front: the ratio is not the concentration. A blend at ten percent and a blend at thirty percent of the same material in the same base are two strengths of the same blend, not two blends; and it is not the base either. The same cut in two different bases is two different things, which is why every recipe that is ever written down, anywhere, has to name the base with the ratio or it is not a recipe, it is a direction.",
        ],
        bodyAr: [
          'الخليط خليط متعمد محدد: مادتا عطر أو أكثر مقلوعة بنسبة معلومة، والنسبة المعلومة هي كل المنتج. وهذا ما يفرزه عن أسماء الصفحة السابقة الثلاثة — زيت عود طبيعي مخلوط مع شيء، وخليط مبني عليه، واتحاد اصطناعي يصنعه لتقليده — لأنها أنواع منتجات، والنسبة نوع الخلط داخل نوع واحد. والخاصية الواحدة التي يجب أن توضع في المقدمة: النسبة ليست التركيز. خليط بعشرة في المئة وخليط بثلاثين في المئة من المادة نفسها في القاعدة نفسها شدة مختلفة لنسبة واحدة، لا نسبَتان؛ وهي ليست القاعدة أيضاً. القطع نفسها في قاعدتين مختلفتين شيءان مختلفان؛ ولهذا كل وصفة تُكتب في أي مكان يجب أن تسمي القاعدة مع النسبة، وإلا لا تكون وصفة بل اتجاه.',
        ],
      },
      {
        heading: 'The two variables that are not the ratio',
        headingAr: 'العاملان اللذان ليسا النسبة',
        body: [
          'The concentration and the base are the two things every blending error comes back to. Concentration is strength: how much of the finished blend is in the carrier, and it is a decision the buyer makes at the point of use, so it is the one variable the seller should not be fixing for the buyer. The base is the other material the ratio is relative to, and it is the choice that makes the same printed numbers behave differently: a ratio against a musk base is not the ratio against an alcohol base, because the two bases change the way the oud notes show up in them. A page that gives numbers without naming the base is giving the ratio against an unstated material, and the reader who takes it into a different base is not wrong, the page is.',
        ],
        bodyAr: [
          'التركيز والقاعدة هما ما تعود إليه كل خطأ في الخلط. التركيز شدة: مقدار الخليط المصنوع في الحامل، وهو قرار يصنعه المشتري عند الاستخدام، لذا المتغير الوحيد الذي يجب ألا يحدده البائع. والقاعدة هي المادة الأخرى التي النسبة نسبة إليها، وهي الاختيار الذي يجعل الأرقام المطبوعة نفسها تتصرف بشكل مختلف: النسبة على قاعدة صمغ ليست النسبة على قاعدة كحول، لأن القاعدتين تغيّران طريقة ظهور أنصاف العود فيهما. صفحة تعطي أرقاماً دون تسمية القاعدة تعطي النسبة على مادة غير محددة، والقارئ الذي يأخذها في قاعدة مختلفة لا هو المخطئ؛ الصفحة هي المخطئة.',
        ],
      },
      {
        heading: 'The method, stated where the numbers are not',
        headingAr: 'الطريقة، حيث الأرقام غير موجودة',
        body: [
          'Because the registry documents no attested ratio sets, the page gives the method a working record has to follow. Mix the two materials at a stated base and a stated starting proportion; let the mix sit through the maturation interval — the interval is a claim in its own right, and the registry does not document one, so it is stated as the unknown; smell at the interval, in a stable room, on a stable strip; write the proportion down; move one material at a time, never two; and the record the mix keeps is the record the resale page wants, because a blend whose proportions are written is the one a stranger can reproduce, and the one a stranger cannot reproduce has a smell that is not a product, it is a mood.',
        ],
        bodyAr: [
          'لأن السجل لا يوثّق مجموعات نسب موثقة، تعطي الصفحة الطريقة التي يجب أن تتبعها سجلات العمل. اخلط المادتين على قاعدة محددة ونسبة بداية محددة؛ اترك الخليط يمرّ فترة النضج — والفترة ادعاء بحد ذاتها، والسجل لا يوثق فترة، لذا تُعرض كعدم معلومة؛ شمّه عند الفاصل، في غرفة مستقرة، على شريط مستقر؛ اكتب النسبة؛ حرّك مادة واحدة في كل مرة، لا اثنتين؛ والسجل الذي يحفظه الخليط هو السجل الذي تريده صفحة التسويق، لأن النسبة المكتوبة هي التي يكرر الغريب، والذي لا يكرره الغريب له رائحة ليست منتجاً بل مزاجاً.',
        ],
      },
      {
        heading: 'The limit, printed in full',
        headingAr: 'الحد، مطبوع بالكامل',
        body: [
          'No ratio on this page is a recipe, and the reason is not the page\'s modesty. The sources the registry holds — trade studies and the CITES review corpus — do not document blending ratios, because a ratio is a house practice, and house practices are the one thing no trade study is ever about. The page therefore states its output exactly: the framework (what a blend is, what the ratio is not), the method (the record a working mix must keep), and the limit (no attested numbers, none invented). A page that printed a set of ratios from thin air would be the misdescription guide\'s defect class in the recipe shape; this one is the honest version of the audit item that asked for a recipe library.',
        ],
        bodyAr: [
          'لا نسبة في هذه الصفحة وصفة، والسبب ليس تواضع الصفحة. المصادر التي يحملها السجل — دراسات التجارة ومراجع الاتفاقية الدولية — لا توثّق نسب خلط، لأن النسبة ممارسة داخلية، والممارسات الداخلية هي الشيء الوحيد الذي لا تتناولُه دراسة تجارية أبداً. ولذا تُقرِّر الصفحة مخرجها بدقة: الإطار (ما الخليط، وما النسبة ليست)، الطريقة (السجل الذي يجب أن يحفظه الخليط العامل)، والحدّ (لا أرقام موثَّقة، ولا اختلاق). صفحة طبعت مجموعة نسب من العدم ستكون نوع عيب دليل التشويه في شكل وصفة؛ وهذه هي النسخة الصادقة من بند الخطة الذي طلب مكتبة الوصفات.',
        ],
      },
    ],
    sourceIds: ['AGARWOOD_REVIEW_2014', 'ITTO_AGARWOOD_REVIEW'],
    limitations:
      'The source registry holds no attested blending-ratio sets, and no ratio on this page is one; the method is stated, the variables that are not the ratio are separated out, and the limit is the output. A reader arriving looking for numbers will find the framework instead, and the reason it is the framework instead of the numbers is printed in the body, not only in the limitation.',
    limitationsAr:
      'لا يحمل سجل المصدر مجموعات نسب خلط موثقة، ولا نسبة في هذه الصفحة من تلك؛ فالطريقة موضحة، والعوامل التي ليست النسبة مفصولة، والحد هو المخرج. قارئ يصل باحثاً عن أرقام سيجد الإطار بدلاً، والسبب أنه الإطار لا الأرقام مطبوع في المتن لا في الحد فقط.',
    nextSteps: [
      'The kind-of-product distinctions this page builds on: the accords-and-blends guide.',
      'The quality the blend has to start from: the attar-testing guide.',
      'The record a finished blend must keep: the storage-and-batch-records guide.',
    ],
    nextStepsAr: [
      'تمييز نوع المنتج الذي تبنى هذه الصفحة عليه: دليل الاتحادات والخلطات.',
      'الجودة التي يجب أن يبدأ منها الخليط: دليل فحص الآطور.',
      'السجل الذي يجب أن يحفظه الخليط المصنوع: دليل التسجيل والتخزين.',
    ],
    related: [
      { slug: 'quality/natural-oil-blends-and-accords', label: 'The kind-of-product distinctions a blend sits inside' },
      { slug: 'fragrance/oud-accords', label: 'The synthetic counterpart: oud accords in perfume' },
      { slug: 'quality/attar-quality-testing', label: 'The quality the blend starts from' },
      { slug: 'using-oud/storage-and-batch-records', label: 'The record a finished blend must keep' },
      { slug: 'fragrance/concentration-labels', label: 'What concentration is, and that it is not the ratio' },
    ],
    parent: 'fragrance',
  }),
];
