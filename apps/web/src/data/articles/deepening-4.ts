import type { Deepening } from './types.ts';

/**
 * The fourth batch of deepening sections: the sourcing guides.
 *
 * Same rule as the earlier batches: more of the thing the guide is
 * about, never a restatement of what the page already says. Each
 * section here is a facet the guide does not yet cover — what a
 * document proves as against what it asserts, what a number implies
 * about a back end, which half of a quotation binds, what a sample is
 * before it is a record, which fields a directory must keep apart, and
 * what a label means when it is not a quality claim.
 */
export const DEEPENING_4: Record<string, Deepening> = {
  'sourcing/business-evidence-checklist': {
    sections: [
      {
        heading: 'What a name on a document proves',
        headingAr: 'ما الذي يثبته اسم على وثيقة',
        body: [
          'A business name on an invoice, a letterhead or a licence proves that someone used that name on that document. It does not prove that the business traded, that it traded at the scale the letterhead implies, or that the address is anything other than a forwarding address. A registration is evidence that a body of that name exists on a register; it is not evidence that the body is still active, still solvent, or still trading in this material.',
          'The distinction matters most when a record is used to support a claim about capacity. "Established in 1994" is a fact about the record. It is not a fact about how much material the seller can put through a still this year, how many people are on the payroll, or whether the office address is a workshop, a desk in a shared building, or a letterbox.',
          'So treat any capacity signal as a claim in the same category as a grade label: interesting, checkable only by asking, and worth nothing on its own.',
        ],
        bodyAr: [
          'إن اسم منشأة على فاتورة أو ترويسة أو رخصة يثبت أن أحدهم استعمل ذلك الاسم في تلك الوثيقة. ولا يثبت أن المنشأة قد تبايعت، ولا أنها تبايعت بالحجم الذي توحي به الترويسة، ولا أن العنوان سوى عنوان مراجعة. والتسجيل دليل على وجود هيئة بهذا الاسم في سجل، وليس دليلاً على أن الهيئة ما زالت عاملة، ولا ملاء، ولا ما زالت تتبايع في هذه المادة.',
          'ويهم هذا التمييز أكثر ما يهم حين يُستعمل السجل مسنداً لادعاء عن القدرة. فـ«تأسست عام 1994» واقعة عن السجل. وليست واقعة عن مقدار المادة التي يستطيع البائع إدخالها في المِقطَّر هذا العام، ولا عن عدد من في كشف الرواتب، ولا عن كون عنوان المكتب ورشة أم مكتباً في مبنى مشترك أم صندوق بريد.',
          'فتعامل مع كل إشارة على القدرة كادعاء من الصنف نفسه الذي ينتمي إليه وسم الدرجة: مثير، لا يُتحقق منه إلا بالسؤال، ولا قيمة له منفرداً.',
        ],
      },
      {
        heading: 'The difference between a check and an audit',
        headingAr: 'الفرق بين الفحص والتدقيق',
        body: [
          'A check samples. It looks at one thing, at one moment, and reports what it found. An audit establishes that a system is doing what it was set up to do, over a period, across the whole of it. The first is what a directory can do. The second is what a buyer placing a large order might want, and what most small suppliers are not set up to offer.',
          'This is not a criticism of either. It is a reason to be precise about the word. When a record says "documentation reviewed", the useful questions are which document, for which consignment, for what product, and as at what date. A review of a permit establishes that a permit was issued for a consignment. A review of an invoice establishes that an invoice was issued. Neither is a review of the seller’s operation.',
          'The honest way to record a review is to write its scope next to it, the way the scope of a source is written next to the source. A record that says "documents verified" and a record that says "export permit for a dated consignment reviewed; contents of the parcel not examined" are not the same claim, and only the second tells a buyer what to do with it.',
        ],
        bodyAr: [
          'الفحص يأخذ عيّنة. فهو ينظر إلى شيء واحد، في لحظة واحدة، ويصف ما وجده. أما التدقيق فيثبت أن نظاماً ما يؤدي ما أُنشئ لأجله، على مدى فترة، وفي شمله كله. والأول هو ما يستطيع الدليل أن يفعله. والثاني هو ما قد يريده مشترٍ يضع طلباً كبيراً، وهو ما ليست أغلب المنشآت الصغيرة مجهزة لتقديمه.',
          'وهذا ليس انتقاداً لأيّ منهما، بل سبب للدقة في اللفظ. فحين يقول السجل «رُوجعت مستندات»، فالسؤال المفيد: أيّ مستند، ولأيّ شحنة، لأيّ منتج، وفي أيّ تاريخ. ومراجعة تصريح تثبت أن تصريحاً صدر لشحنة. ومراجعة فاتورة تثبت أن فاتورة صدرت. وليس أيّ منهما مراجعة لعمل البائع.',
          'والطريق الصادق في تسجيل المراجعة هو كتابة نطاقها بجانبها، كما يُكتب نطاق المصدر بجانب المصدر. فسجل يقول «تحققت المستندات» وسجل يقول «رُوجع تصريح التصدير لشحنة مؤرَّخة؛ ولم يُفحص محتوى الطرد» ليسا ادعاءً واحداً، ولا يفيد المشتري إلا الثاني.',
        ],
        list: [
          'Which document was reviewed, and for which consignment.',
          'What the document establishes, and what it does not.',
          'The date of the review, and the date on the document.',
          'Whether the review covered the form of the product: wood, oil, or a finished product.',
          'Whether the operation was examined, or only the paperwork.',
        ],
        listAr: [
          'أيّ مستند رُوجع، ولأيّ شحنة.',
          'ماذا يثبت المستند، وماذا لا يثبت.',
          'تاريخ المراجعة، والتاريخ المدوّن على المستند.',
          'هل شملت المراجعة شكل المنتج: خشب، أم زيت، أم منتج منتهٍ.',
          'هل فُحصت العملية، أم الأوراق وحدها.',
        ],
        callout: {
          title: 'The cheapest check there is',
          body:
            'Sending a message to the contact address on the record and asking the business to confirm its own particulars tests two things at once: that the address works, and that whoever replies is willing to be connected to what the record says. It establishes who is speaking, and it costs nothing.',
          bodyAr:
            'إرسال رسالة إلى عنوان الاتصال المذكور في السجل وطلب من المنشأة تأكيد بياناتها عن نفسها يختبر أمرين في وقت واحد: أن العنوان يعمل، وأن من يرد مستعد للربط بما يقوله السجل. وهو يثبت من يتكلم، ولا يكلّف شيئاً.',
        },
      },
      {
        heading: 'Consistency is weaker than it sounds',
        headingAr: 'الاتساق أضعف مما يبدو',
        body: [
          'Internal consistency is a necessary condition and a weak one. A record can be entirely self-consistent and still describe a business that does not exist, because the same party supplied every field. A name, an address, a registration number and a set of product categories all came from the seller, and their agreement with each other shows only that the seller is consistent with itself.',
          'What raises the value of consistency is when the parts come from different hands: a registration number confirmed against a register, a contact address confirmed by a reply from it, an origin stated on a permit that a third party issued. Each of those is a small, cheap check, and together they are the difference between a seller’s account and a record.',
          'The practical habit is to record the state against the field, not against the profile. A profile is a mixture of states and reads as a single one; a field-by-field record lets a reader see exactly where the evidence stops. This is unglamorous bookkeeping, and it is the whole difference between a directory that informs and one that decorates.',
        ],
        bodyAr: [
          'الاتساق الداخلي شرط لازم وضعيف. فالسجل قد يكون متسقاً تماماً مع نفسه ومع ذلك يصف منشأة غير موجودة، لأن الطرف نفسه قدّم كل حقل. فاسم وعنوان ورقم تسجيل ومجموعة أصناف منتجات جميعها جاءت من البائع، واتفاقها فيما بينها لا يبيّن إلا أن البائع متسق مع نفسه.',
          'والذي يرفع قيمة الاتساق هو أن تأتي أجزاؤه من أيدٍ مختلفة: رقم تسجيل مؤكَّد من سجل، وعنوان اتصال مؤكَّد بردّ منه، ومنشأ مذكور في تصريح أصدرته جهة ثالثة. كل واحد منها فحص صغير رخيص، وهي معاً الفرق بين رواية البائع وبين السجل.',
          'والعادة العملية هي تسجيل الحالة مع الحقل لا مع الملف. فالملف خليط من الحالات ويُقرأ كحالة واحدة؛ أما السجل الحقل بحقل فيتيح للقارئ أن يرى بدقة أين تتوقف الأدلة. وهذه أعمال محاسبة غير مغرية، وهي كل الفرق بين دليل يُفيد وآخر يزيّن.',
        ],
      },
    ],
  },

  'sourcing/minimum-order-quantities': {
    sections: [
      {
        heading: 'Why the same seller quotes different minimums',
        headingAr: 'لماذا يقتبس المورد الواحد حدوداً مختلفة',
        body: [
          'A minimum is quoted against something: a format, a product line, a grade, a destination, sometimes the buyer’s history. Two quotations from the same business can carry different minimums because the thing being minimised is different. A seller who quotes a minimum in kilos of wood and a minimum in tolas of oil is not being evasive; the two are constrained by different machinery, and the oil may sit in stock while the wood must be chipped and packed.',
          'And a minimum is not a constant of the business. It moves with what the seller has in hand, with how the material is being packed for that consignment, and with the terms the buyer is expected to take. The same seller can quote one figure to a customer paying in advance and another to a customer who does not, without either figure being dishonest.',
          'A minimum quoted in isolation is therefore a poor guide. It is a number, stated, in a context. A buyer who wants to know what he is really buying needs the minimum together with the case it was quoted in.',
        ],
        bodyAr: [
          'يُقتبس الحد الأدنى مقابل شيء: شكل، أو خط منتجات، أو درجة، أو وجهة، وأحياناً مقابل تاريخ المشتري. وقد يحمل عرضان من المنشأة نفسها حدّين مختلفين لأن الشيء الذي يقيَّد يختلف. فالمورد الذي يقتبس حداً بالكيلوغرام من الخشب وحداً بالتولا للزيت لا يتلعثم؛ فالاثنان مقيَّدان بآلات مختلفة، وقد يكون الزيت في المخزن بينما يجب تكسير الخشب وتعبئته.',
          'والحد الأدنى ليس ثابتاً في المنشأة. فهو يتحرك بما لدى البائع من بضاعة، وبطريقة تعبئة المادة في تلك الشحنة، وبشروط الدفع المتوقعة من المشتري. وقد يقتبس المورد رقماً لمشترٍ يدفع مقدماً، ورقماً آخر لمشترٍ لا يدفع مقدماً، دون أن يكون أيٌّ منهما مضللاً.',
          'فالحد المقتبس وحده دليل رديء. إنه رقم معلن في سياق. ومن يريد معرفة ما يشتريه فعلاً يحتاج الحد مع الحالة التي قُبِّس فيها.',
        ],
      },
      {
        heading: 'What a minimum reveals about the operation',
        headingAr: 'ما يكشفه الحد عن العملية',
        body: [
          'The number is information about the back end. A minimum that matches the size of a distillation batch tells you the material is made in batches of that order. A minimum that matches a packaging run tells you the packing is bought in, which is a different business from one that fills and seals its own containers. A minimum much larger than either is usually a shipping threshold: the point below which the seller cannot cover the cost of moving the goods.',
          'Read that way, a minimum is a piece of free intelligence about how the seller works, and a fairly reliable one, because it is rarely chosen for effect. A seller sets a minimum that reflects a real constraint, because a minimum set too low produces orders that lose money and the seller carries that loss.',
          'It also tells you what will not move. A batch-size minimum will not move for a larger buyer; that is equipment and physics. A shipping threshold may move, especially for a repeat order that can be consolidated with others. A packaging minimum moves when the supplier is willing to break a case.',
        ],
        bodyAr: [
          'الرقم معلومات عن المؤخرة. فالحد المطابق لحجم دفعة التقطير يخبرك أن المادة تُصنع بدفعات من ذلك الحجم. والحد المطابق لجولة تعبئة يخبرك أن التعبئة تُشترى جاهزة، وهو عمل مختلف عن عمل من يملأ ويعتمد عبواته بنفسه. أما الحد الأكبر من كليهما فهو غالباً عتبة شحن: النقطة التي دونها لا يستطيع البائع تغطية كلفة نقل البضاعة.',
          'ومقروءة على هذا النحو، يكون الحد الأدنى معلومة مجانية عن طريقة عمل البائع، ومعلومة موثوقة إلى حد معقول، لأن قلّة ما يختاره لأثر. فالمورد يضع حداً يعكس قيداً حقيقياً، لأن الحد الوضعي المفرط ينتج طلبات تخسر المال، والمورد هو من يحمل هذه الخسارة.',
          'وهو يخبرك أيضاً بما لا يتحرك. فالحد المبني على حجم الدفعة لا يتحرك أمام مشترٍ أكبر، فذاك معدات وطبيعة. أما عتبة الشحن فقد تتحرك، ولا سيما لطلب متكرر يمكن دمجه مع غيره. والحد المبني على التغليف يتحرك إن رضي المورد بتقسيم الطرد.',
        ],
        list: [
          'What the minimum is expressed in: mass, volume, pack count, or containers.',
          'Whether it is a batch size, a packaging run, or a shipping threshold.',
          'Whether it is quoted for oil, for chips, or for each separately.',
          'Whether the buyer is buying wood, oil, or a mixed order.',
          'What a smaller order would cost, freight included.',
        ],
        listAr: [
          'بماذا يُقاس الحد: كتلة، أم حجم، أم عدد عبوات، أم حاويات.',
          'هل هو حجم دفعة، أم جولة تغليف، أم عتبة شحن.',
          'هل هو مقتبس للزيت، أم للرقائق، أم لكلٍّ منهما على حدة.',
          'هل يشتري المشتري خشباً، أم زيتاً، أم طلباً مختلطاً.',
          'كم يكلّف طلب أصغر، أجرة الشحن مشمولة.',
        ],
      },
      {
        heading: 'The cost of being just below the line',
        headingAr: 'كلفة أن تكون تحت الخط بقليل',
        body: [
          'A minimum is a floor, and the interesting question is what happens at the floor. A buyer who orders just below it does not get a smaller order. The order is refused, or it is accepted at the minimum, or it is accepted at a price adjusted to cover the cost of shipping one small consignment.',
          'Those three outcomes are not equivalent, and the difference between them can be large relative to the quantity at stake. The practical question to ask before ordering is not "can you go lower" but "what happens to the price and the freight if I order at the minimum instead". If the answer is that the unit price rises to carry the shipping, then the minimum has become a price decision, and the two figures have to be compared as one.',
          'A supplier who states a minimum and then states what a smaller order would cost has done something rarer than a supplier who simply lowers the minimum: they have shown the constraint and the way through it. That is worth knowing before a first order rather than after it.',
        ],
        bodyAr: [
          'الحد الأدنى أرضية، والسؤال المهم هو ماذا يحدث عند هذه الأرضية. فمن يطلب دونها بقليل لا يحصل على طلب أصغر. بل يُرفض طلبه، أو يُقبل عند الحد، أو يُقبل بسعر مُعدَّل ليغطي كلفة شحن شحنة صغيرة واحدة.',
          'وهذه المخرجات الثلاثة ليست متكافئة، وقد يكون الفرق بينها كبيراً نسبةً إلى الكمية الموقوفة. فالسؤال العملي الذي يُسأل قبل الطلب ليس «هل تستطيع أن تنزل» بل «ماذا يحدث للسعر وللشحن إن طلبت عند الحد بدلاً من ذلك». فإن كان الجواب أن سعر الوحدة يرتفع ليحمل أجرة الشحن، يكون الحد الأدنى قد تحوّل إلى قرار سعري، والرقمان ينبغي أن يُقارنا كرقم واحد.',
          'والمورد الذي يذكر حدّه الأدنى ثم يذكر كم يكلّف طلب أصغر قد فعل ما هو أندر من مورد يخفض الحد ببساطة: فقد أظهر القيد وطريق العبور منه. وهذا معلومة تستحق أن تُعرف قبل الطلب الأول لا بعده.',
        ],
        callout: {
          title: 'Compare the order, not the price',
          body:
            'Two ways of buying the same material — one at the minimum, and one smaller with the freight charged on top — are not two prices for the same thing. They are two orders with different totals, and the total is the only figure that can be compared.',
          bodyAr:
            'طريقتان لشراء المادة نفسها — واحدة عند الحد الأدنى، وأخرى أصغر مع تحميل أجرة الشحن فوقها — ليستا سعرين للشيء نفسه. بل طلبان بمجموعين مختلفين، والمجموع هو الرقم الوحيد الذي يمكن مقارنته.',
        },
      },
      {
        heading: 'A minimum that is really a constraint on time',
        headingAr: 'حد أدنى هو في الحقيقة قيد على الوقت',
        body: [
          'Sometimes what is presented as a minimum order quantity is a constraint on time rather than on quantity. The seller will not break into a batch that is already running, or will not open a case that has been sealed for another destination, or will not decant from a container that is being shipped as it stands. This is the same operational fact expressed in a different unit.',
          'It behaves differently, and the difference is what a buyer has to plan around. A quantity minimum can be met by ordering more. A timing constraint can only be met by waiting, and waiting may cost more than the quantity would have. A seller who says "the minimum is whatever is left after this batch is dispatched" is describing a schedule, not a quantity.',
          'The way to tell them apart is to ask what happens if the quantity is raised but the timing is not. If nothing changes, it is a timing constraint wearing a quantity label. If the order becomes possible, it was a quantity minimum after all.',
        ],
        bodyAr: [
          'قد يكون ما يُعرض على أنه حد أدنى للطلب في الحقيقة قيداً على الوقت لا على الكمية. فالمورد لا يقتحم دفعة تجري، ولا يفتح طرداً خُتم لوجهة أخرى، ولا يسحب من وعاء يُشحن كما هو. وهذه هي الوقعة التشغيلية نفسها مقولة بوحدة أخرى.',
          'لكن هذا القيد يتصرف تصرفاً مختلفاً، والفرق هو ما ينبغي للمشتري أن يخطّط حوله. فالحد القائم على الكمية يمكن بلوغه بالطلب أكثر. أما القيد القائم على التوقيت فلا يُرفع إلا بالانتظار، وقد يكلّف الانتظار أكثر مما كلّفت الكمية. والمورد الذي يقول «الحد هو ما يتبقّى بعد شحن هذه الدفعة» يصف جدولاً زمنياً لا كمية.',
          'وطريقة التمييز بينهما أن تسأل: ماذا لو رفعت الكمية ولم يُغيَّر التوقيت؟ فإن لم يتغير شيء، فهو قيد زمني يحمل اسم حد كمي. وإن أمكن الطلب، فهو في الحقيقة حد أدنى كمي.',
        ],
      },
    ],
  },

  'sourcing/reading-a-quotation': {
    sections: [
      {
        heading: 'Descriptive words and binding words',
        headingAr: 'كلمات الوصف وكلمات الالتزام',
        body: [
          'A quotation contains two kinds of writing, and they carry different weight. The descriptive writing is the catalogue: the grade word, the adjectives, the way the material is characterised, the prose that tells a reader what kind of thing this is. The binding writing is the set of terms: the specification of what is sold, the quantity and its unit, the price and currency, the delivery terms, the payment terms, the lead time.',
          'Only the second kind decides what will be delivered and what happens if it is not. A description cannot be enforced, because it does not say what it claims. "Double Super, unheated Assam, third distillation" is a claim about the material, and a claim about the material can be checked against nothing except another sample and a longer argument.',
          'The confusion between the two is common and expensive, because the descriptive words are the memorable ones. A buyer who remembers "Triple Super" and forgets "100 ml" has remembered the wrong half of the document. The test is simple: a word in the quotation with no unit, no number and no defined term attached to it is describing, not specifying.',
        ],
        bodyAr: [
          'يحتوي عرض السعر على نوعين من الكتابة، ولكلٍّ منهما وزن مختلف. فالكتابة الوصفية هي الكتالوج: وسم الدرجة، والصفات، وكيفية وصف المادة، والنص الذي يبيّن للقارئ أي نوع من الأشياء هذا. والكتابة الملزمة هي مجموعة الشروط: مواصفة ما يُباع، والكمية ووحدتها، والسعر والعملة، وشروط التسليم، وشروط الدفع، ومدة التوريد.',
          'والنوع الثاني وحده هو الذي يحدد ما سيُسلَّم وماذا يحدث إن لم يُسلَّم. أما الوصف فلا يمكن إنفاذه، لأنه لا يقول ما يدّعي. فـ«دبل سوبر، أسام غير مسخّن، تقطير ثالث» ادعاء عن المادة، وادعاء عن المادة لا يُقابل بشيء إلا بعينة أخرى وبأطروحة أطول.',
          'والخلط بين النوعين شائع ومكلف، لأن الكلمات الوصفية هي التي تبقى في الذاكرة. فمن يتذكر «تريبل سوبر» وينسى «100 مل» قد احتفظ بالنصف الخطأ من الوثيقة. والاختبار بسيط: أي كلمة في عرض السعر بلا وحدة ولا رقم ولا مصطلح محدد تصف ولا تحدد.',
        ],
      },
      {
        heading: 'A price is three things',
        headingAr: 'السعر ثلاثة أشياء',
        body: [
          'A price is not one number. It is a number, a unit and a basis, and a quotation that gives the first without the other two has given the buyer something that cannot be used for arithmetic.',
          'The unit is the obvious failure. A price per kilogram for oil and a price per tola for oil are not two prices for the same thing, and a buyer who treats them as comparable has made a conversion error before the first purchase has been placed. The basis is the subtler one. Oil is sold by weight and by volume, and each container has its own fill, so the two are related to how full the containers are rather than being the same number.',
          'So the first thing to do with a price is to write down what it is per, and then to ask what is inside the unit it is per. The second question is where most of the real differences between two quotations live, and it stays invisible unless it is asked.',
        ],
        bodyAr: [
          'السعر ليس رقماً واحداً. إنه رقم ووحدة وأساس، وعرض السعر الذي يعطي الأول دون الآخرين يعطي المشتري شيئاً لا يصلح للحساب.',
          'والوحدة هي الإخفاق الظاهر. فسعر للكيلوغرام من الزيت وسعر للتولا من الزيت ليسا سعرين للشيء نفسه، ومن يعاملهما قابلين للمقارنة قد وقع في خطأ التحويل قبل أن يوضع أول طلب. وأما الأساس فأدقّ. فالزيت يُباع بالوزن وبالحجم، ولكل عبوة امتلاؤها، فيفصل بين الرقمين قدرُ الامتلاء، وهما ليسا رقماً واحداً.',
          'فأول ما يُفعل بالسعر أن يُكتب ما هو سعر لكل وحدة، ثم أن يُسأل ما الذي في الوحدة التي هو سعر لها. فالسؤال الثاني هو موضع معظم الفروق الحقيقية بين عرضَي سعر، ويبقى خفياً ما لم يُسأل.',
        ],
      },
      {
        heading: 'The quotation is an offer, and the offer has a date',
        headingAr: 'عرض السعر عرض، والعرض له تاريخ',
        body: [
          'A quotation states terms at a moment. Between that moment and the order there is a second market, and it moves. Whether the price is held for a stated period, or is valid only for a stated quantity, or is simply the price on the day the quotation was written, is a term, and it belongs with the terms rather than in the covering message.',
          'Two quotations that differ on this point are not comparable even at the same number, because one of them will change. The practical habit is to ask for the validity to be written into the document with its date, so that when the two sides return to the same conversation there is something on the table to point at.',
          'There is a second distinction of the same kind. A quotation may be a genuine offer to supply on those terms, or it may be an indication that a price will be discussed. The wording differs — an offer carries a quantity, a price and a validity, an indication carries none of the three — and reading for the difference is worth doing before the quotation is used as the basis of an order.',
        ],
        bodyAr: [
          'عرض السعر يذكر الشروط في لحظة. وبين تلك اللحظة والطلب سوق ثانٍ يتحرك. فهل السعر محفوظ لفترة معلنة، أم صالح لكمية معلنة، أم هو سعر يوم كتابة عرض السعر — كل ذلك شرط، وينتمي إلى الشروط لا إلى الرسالة المرافقة.',
          'وعرضان يختلفان في هذه النقطة غير قابلين للمقارنة حتى لو كان الرقم واحداً، لأن أحدهما سيتغير. والعادة العملية هي أن يُطلب تثبيت الصلاحية في الوثيقة مع تاريخها، حتى يعود الطرفان إلى الحديث نفسه فيجد كل منهما ما يشير إليه على الطاولة.',
          'وهناك تمييز ثانٍ من الصنف نفسه. فقد يكون عرض السعر عرضاً حقيقياً للتوريد على تلك الشروط، أو قد يكون إشارة إلى أن السعر سيدور في نقاش. والصياغة تختلف — فالعرض يحمل كمية وسعراً وصلاحية، والإشارة لا تحمل أيّاً منها — وقراءة هذا الفرق تستحق أن تُقرأ قبل أن يُبنى طلب على أساس عرض السعر.',
        ],
      },
      {
        heading: 'When the specification is only a description',
        headingAr: 'حين تكون المواصفة وصفاً لا أكثر',
        body: [
          'Sometimes a quotation cannot answer the specification question, because the seller is working from a list rather than from a material. In that case the quotation is still useful, but it has to be read as a request for a specification rather than as a specification.',
          'The way to find out is to look for the fields a description cannot carry: no weight or unit on the line, no species, no format, no treatment, no batch reference and no date. If a quotation has none of those, the buyer should ask for them before anything else, because the price is being quoted against something that has not been defined.',
          'And the reverse is worth doing too. If the quotation is unusually complete, it is still a statement of what was intended rather than a warranty. What makes a statement of intent part of what was agreed is the acceptance of it, and a buyer who wants the material the quotation describes should make the acceptance refer to the quotation, so that the description travels with the order instead of staying in the correspondence.',
        ],
        bodyAr: [
          'قد يعجز عرض السعر عن الإجابة عن سؤال المواصفة، لأن البائع يعمل من قائمة لا من مادة. وعندئذ يبقى العرض نافعاً، لكن ينبغي أن يُقرأ كطلب مواصفة لا كمواصفة.',
          'وطريقة معرفة ذلك أن تبحث عن الحقول التي لا يحملها الوصف: لا وزن ولا وحدة على السطر، ولا نوع، ولا شكل، ولا معالجة، ولا مرجع دفعة، ولا تاريخ. فإن خلا عرض السعر من هذه جميعاً، فعلى المشتري أن يطلبها قبل أي شيء آخر، لأن السعر مقتبس مقابل شيء لم يُعرَّف.',
          'والعكس يستحق العمل أيضاً. فإذا كان عرض السعر كاملاً على نحو غير معتاد، فهو يبقى بياناً لما قُصد لا ضماناً. وما يجعل بيان القصد جزءاً مما اتُّفق عليه هو قبوله. ومن يريد المادة التي يصفها عرض السعر ينبغي أن يجعل القبول يشير إلى عرض السعر، فيسير الوصف مع الطلب بدل أن يبقى في المراسلة.',
        ],
        callout: {
          title: 'A quotation is not a specification',
          body:
            'A description of the material in a quotation does not travel with the goods. What travels is what is written on the label, in the paperwork and in the batch record. The description is what the two sides were talking about; the paperwork is what a third party will see.',
          bodyAr:
            'وصف المادة في عرض السعر لا يسافر مع البضاعة. فما يسافر هو ما هو مكتوب على الملصق، وفي الأوراق، وفي سجل الدفعة. والوصف هو ما كان الطرفان يتحدثان فيه، والأوراق هي ما سيراه طرف ثالث.',
        },
      },
    ],
  },

  'sourcing/sample-to-bulk-matching': {
    sections: [
      {
        heading: 'The sample is itself an object that can be damaged',
        headingAr: 'العيّنة نفسها شيء قابل للتلف',
        body: [
          'A sample is usually sent through the same world as the bulk: a courier, a customs agent, a warehouse, a laboratory. Each of those is a place where a seal can be broken, a container can be left in a hot vehicle, and a label can detach. The sample is therefore the first point in the chain where loss can occur, and the only point at which it can occur without anybody noticing.',
          'This is why the seal and the label are not ceremony. A sealed container that arrives sealed tells you that what is inside is what was put in it and that nothing happened in between. An unsealed container tells you nothing at all, even if the material inside looks exactly as expected. The appearance of the material is not evidence of the history of the material.',
          'The habit worth forming is to treat a sample as evidence rather than as a convenience. Note the condition of the seal on arrival, note anything unusual about the packaging, and record the date the sample was opened. A sample assessed three months after it arrived is a weaker piece of evidence than one assessed the same week, and the difference is not visible in the material.',
        ],
        bodyAr: [
          'تُرسَل العيّنة عادةً عبر العالم نفسه الذي تسير فيه الجملة: وكيل شحن، ومكتب جمركي، ومستودع، ومختبر. وكل واحد منها موضع يمكن أن يُكسر فيه الختم، أو تُترك فيه العبوة في مركبة حارة، أو ينفصل فيها الملصق. فالعيّنة هي أول حلقة في السلسلة يمكن أن يقع فيها الفقد، وهي الحلقة الوحيدة التي يمكن أن يقع فيها دون أن ينتبه أحد.',
          'ولهذا الختم والملصق ليسا طقساً. فالوعاء المحكم الذي يصل محكماً يخبرك بأن ما في داخله هو ما وُضع فيه وأن شيئاً لم يحدث في الأثناء. أما الوعاء المفتوح فلا يخبرك بشيء، حتى لو بدت المادة في داخله تماماً كما هو متوقع. فمظهر المادة ليس دليلاً على تاريخ المادة.',
          'والعادة الجديرة بالاكتساب هي أن تُعامَل العيّنة كدليل لا كوسيلة راحة. فسجّل حالة الختم عند الوصول، وسجّل ما هو غير معتاد في التغليف، وسجّل تاريخ فتح العيّنة. والعيّنة التي قُيّمت بعد ثلاثة أشهر من وصولها دليل أضعف من التي قُيّمت في الأسبوع نفسه، والفرق لا يظهر في المادة.',
        ],
      },
      {
        heading: 'What can be controlled across the gap, and what cannot',
        headingAr: 'ما يمكن ضبطه عبر الفجوة وما لا يمكن',
        body: [
          'Three things can move between the sample and the bulk, and only one of them is fully in anybody’s hands.',
          'Identity can be controlled, by a batch reference on both sides and on the same record. This is the part that is achievable, and it is the part that decides whether a comparison means anything.',
          'Consistency within a batch can only partly be controlled. A single batch is not homogeneous, and the sample may have been drawn from a part of it that differs from the rest. That is a property of the material rather than of the paperwork, and no reference makes it disappear.',
          'Time cannot be controlled at all. Material rests, it is stored, it is moved; oil is bottled and then sits; wood is chipped and then dries. The sample is a picture of one moment and the bulk is the same material at a later moment, and the difference between them grows on its own.',
          'So the comparison a buyer makes on delivery is always between a sample that was true at one date and a bulk that is true at another. Making that comparison honestly means saying which of the three differences is being looked at, rather than treating any difference as a substitution.',
        ],
        bodyAr: [
          'ثلاثة أمور يمكن أن تتحول بين العيّنة والجملة، وواحد منها فقط في يدينا إلى حد كامل.',
          'الهوية يمكن ضبطها، بمرجع دفعة على الطرفين وفي السجل نفسه. وهذا هو الجزء الممكن، وهو الجزء الذي يحدد إن كان أي مقارنة ذات معنى.',
          'أما الاتساق داخل الدفعة فلا ضبط كاملاً له. فالدفعة الواحدة ليست متجانسة، وقد يكون العيّنة أُخذت من جزء منها يخالف ما تبقى. وهذه خاصية في المادة لا في الأوراق، ولا يزيلها أي مرجع.',
          'والوقت لا ضبط له أصلاً. فالمادة ترتاح وتُحفظ وتُنقل؛ والزيت يُعبأ ثم يبقى؛ والخشب يُكسَّر ثم يجفّ. فالعيّنة صورة لحظة، والجملة هي المادة نفسها في لحظة لاحقة، والفرق بينهما ينمو وحده.',
          'فالمقارنة التي يجريها المشتري عند التسليم تكون دائماً بين عيّنة كانت صحيحة في تاريخ وجملة صحيحة في تاريخ آخر. وصدق هذه المقارنة يعني أن يُحدد أيّ هذه الفروق الثلاثة هو المطلوب، لا أن يُعامل أي فرق على أنه استبدال.',
        ],
      },
      {
        heading: 'When the delivery does not match the sample',
        headingAr: 'حين لا يطابق التسليم العيّنة',
        body: [
          'A delivery that arrives and does not match the sample is one of four things, and they are worth separating before anybody argues about it.',
          'It may be a different material, which is the substitution case and the serious one. It may be the same material that has changed on its own, through storage or through further development, which is what a longer gap between sample and delivery makes more likely. It may be the same material seen differently, because the sample was a small piece and the delivery is a lot, and no two parts of a lot are identical. And it may be an assessment difference: the person comparing them is not comparing like with like, because the sample was a chip and the delivery is an oil, or because one has been opened and the other has not.',
          'Only the first of the four is a matter for the supplier. The practical consequence is that the order of the questions matters. Establish what was compared before concluding what has happened, because a difference that is explained by a faulty comparison has cost the buyer a delivery and gained nothing.',
        ],
        bodyAr: [
          'التسليم الذي يصل ولا يطابق العيّنة هو واحد من أربعة أمور، ويستحق تفصيلها قبل أن يتجادل أحد في شأنها.',
          'قد تكون مادة أخرى، وهي حالة الاستبدال وهي الجادة. وقد تكون المادة نفسها قد تغيّرت وحدها، بفعل التخزين أو بما طرأ عليها من تطور إضافي، وهي الحالة التي يزيدها طول الفجوة بين العيّنة والتسليم ترجيحاً. وقد تكون المادة نفسها مرئية على نحو مختلف، لأن العيّنة قطعة صغيرة والتسليم لوط، ولا يطابق جزءان من اللوط بعضهما. وقد يكون اختلافاً في التقييم: فالذي يقارن لا يقارن مثلاً بمثل، لأن العيّنة كانت رقائق والتسليم زيت، أو لأن إحداهما فُتحت والأخرى لم.',
          'وأحد هذه الأربعة لا يهم إلا الطرف الأول. والنتيجة العملية أن ترتيب الأسئلة مهم: ثبّت ما قورن قبل أن تستنتج ما حدث، لأن الفرق الذي يفسّره مقارنة خاطئة كلّف المشتري تسليماً ولم يكتسب شيئاً.',
        ],
        callout: {
          title: 'The second sample',
          body:
            'When a delivery arrives and does not match, the cheapest next step is another sample, taken from the delivery itself and sealed by whoever received it, with the batch reference on both. A disagreement between two samples is a fact. A disagreement between a sample and a description is an argument.',
          bodyAr:
            'حين يصل التسليم ولا يطابق، أرخص خطوة تالية هي عيّنة أخرى، تُؤخذ من التسليم نفسه ويختمها من استلمها، مع مرجع الدفعة على الاثنين. والخلاف بين عيّنتين واقعة. والخلاف بين عيّنة ووصف خلاف.',
        },
      },
    ],
  },

  'sourcing/supplier-origin-destination': {
    sections: [
      {
        heading: 'Why the destination is the hardest of the three',
        headingAr: 'لماذا الوجهة أصعب الوقائع الثلاث',
        body: [
          'Location and origin are both things a business can state about itself, and both can be checked against a register. The destination is different: it is a fact about performance rather than about identity, and it cannot be declared in the same way.',
          'A business says it ships to a country. What a buyer needs to know is whether it shipped there, with this product, on a documented consignment, and as at when. Those are four conditions, and a declaration satisfies none of them on its own. Shipping is a relationship between places that changes: routes close, licences change, a forwarder stops working a particular lane, a product is restricted in one destination that accepts it in another form.',
          'A destination field that is not dated is therefore close to useless, and a dated one is useful precisely because it will go out of date. The useful record is not "ships to the Gulf" but "shipped to this destination, this product, on this date, on this documentation". A buyer who reads such a field as a standing capability will eventually make a wrong assumption.',
        ],
        bodyAr: [
          'الموقع والمنشأ أمران تستطيع المنشأة أن تذكرهما عن نفسها، وكلاهما يمكن التحقق منه في سجل. أما الوجهة فمختلفة: هي واقعة عن الأداء لا عن الهوية، ولا يمكن إعلانها بالطريقة نفسها.',
          'فالمنشأة تقول إنها تشحن إلى بلد. وما يحتاجه المشتري هو أنها شحنت إليه، بهذا المنتج، وبشحنة موثّقة، وفي أيّ تاريخ. وهذه أربعة شروط، ولا يفي الإعلان بواحد منها وحده. فالشحن علاقة بين الأمكنة وهي تتغير: فالمسارات تُغلق، والتراخيص تتغير، ووسيط الشحن يكفّ عن مسار بعينه، ومنتج ما يكون مقيّداً في وجهة تقبله في شكل آخر.',
          'فحقل الوجهة غير المؤرَّخ قريب من عديم الفائدة، والمؤرَّخ نافع تحديداً لأنه سينتهي صلاحيته. والسجل النافع ليس «يشحن إلى الخليج»، بل «شُحن إلى هذه الوجهة، وهذا المنتج، وفي هذا التاريخ، بهذه الأوراق». ومن يقرأ حقلاً كهذا على أنه قدرة دائمة سيقع في افتراض خاطئ يوماً.',
        ],
      },
      {
        heading: 'Where the goods actually were',
        headingAr: 'أين كانت البضاعة فعلاً',
        body: [
          'A business address answers a question about the business, not about the goods. A company with a registered office in one city may receive, sort and store its material in a bonded warehouse in another, and may despatch from a third. For a buyer arranging collection, or for a buyer who needs to know what paper will be available on arrival, the places the goods physically pass through are more useful than the place on the letterhead.',
          'This is where the fourth fact earns its place. A production facility is a place with a function attached. A packing point, a storage site and a production site all have addresses, and only one of the three is the thing that makes a supplier a producer. Records that give a single address for all of them are describing a legal entity, not an operation.',
          'None of this makes the business address wrong. It makes it one address among several, and it means the question "where is it" has more than one correct answer.',
        ],
        bodyAr: [
          'عنوان المنشأة يجيب عن سؤال يخصّ المنشأة، لا سؤالاً يخصّ البضاعة. فالشركة التي يكون مقرها المسجل في مدينة قد تستقبل مادتها وتفرزها وتخزنها في مستودع جمركي في مدينة أخرى، وقد تشحن من مدينة ثالثة. ولمن ينسّق استلاماً، أو لمن يريد أن يعرف ما هي الأوراق المتاحة عند الوصول، تكون الأماكن التي تمرّ فيها البضاعة فعلياً أنفع من المكان المدوّن على الترويسة.',
          'وهنا هو الموضع الذي تستحق فيه الوقعة الرابعة مكانها. فمنشأ الإنتاج مكان له وظيفة. ومكان التعبئة وموقع التخزين ومنشأ الإنتاج لها جميعها عناوين، وواحد منها فقط هو ما يجعل المورد منتجاً. والسجلات التي تعطي عنواناً واحداً لها جميعاً تصف كياناً قانونياً لا عملية.',
          'وهذا لا يجعل عنوان المنشأة خاطئاً. بل يجعله عنواناً من بين عناوين، ومعناه أن سؤال «أين هو» له أكثر من جواب صحيح.',
        ],
      },
      {
        heading: 'Four fields, not one',
        headingAr: 'أربعة حقول لا حقل واحد',
        body: [
          'The reason the distinction matters to a directory is that a single country field cannot serve any buyer. Located in one country, handles origin in another, ships to a third: a filter built on one of those returns a different set of businesses from any filter built on another.',
          'A directory that collapses them into one field has not saved space; it has made all three queries wrong at once. And a buyer who knows the difference will find the mistake immediately, because the results will include businesses that cannot do what they are being shown for: a firm in Assam that cannot ship outside India, a producer shown to a buyer who wanted a reseller, or a reseller shown to a buyer who wanted a producer.',
          'Keeping them apart is unglamorous data work, and it is the difference between a search that answers the question and a search that returns a list.',
        ],
        bodyAr: [
          'سبب أهمية هذا التمييز للدليل أن حقل بلد واحد لا يخدم أيّ مشترٍ. فالموقع في بلد، والمنشأ الذي يُتعامل معه في آخر، والوجهة إلى ثالث: وأي فلتر مبني على واحد منها يعيد مجموعة منشآت مختلفة عن أيّ فلتر مبني على آخر.',
          'والدليل الذي يدمجها في حقل واحد لم يوفّر حيزاً، بل جعل الأسئلة الثلاثة خاطئة في وقت واحد. وسيلاحظ المشتري الذي يعرف الفرق الخطأ فوراً، لأن النتائج ستشمل منشآت لا تستطيع فعل ما عُرضت له: شركة في أسام لا تستطيع الشحن خارج الهند، ومنتجٌ عُرض على مشترٍ يريد موزّعاً، وموزّعٌ عُرض على مشترٍ يريد منتجاً.',
          'والفصل بينها عمل بيانات غير مغرٍ، وهو الفرق بين بحث يجيب عن السؤال وبحث يعيد قائمة.',
        ],
        list: [
          'Located in: the address of the business.',
          'Handles origin: the origins the seller says it works with.',
          'Ships to: the destinations documented, for a named product and a date.',
          'Works at: the places the goods physically pass through, if known.',
          'Separate: whether each of the four is recorded in its own field.',
        ],
        listAr: [
          'الموقع: عنوان المنشأة.',
          'المنشأ الذي يتعامل معه: الأصول التي يقول البائع إنه يعمل بها.',
          'الوجهة: الوجهات الموثّقة، لمنتج مسمّى وتاريخ مسمّى.',
          'العمل: الأماكن التي تمرّ فيها البضاعة فعلياً، إن عُرفت.',
          'الفصل: هل يُسجَّل كل واحد من الأربعة في حقل خاص به.',
        ],
      },
    ],
  },

  'sourcing/wild-and-cultivated-oud': {
    sections: [
      {
        heading: 'What each route can put in writing',
        headingAr: 'ما الذي يمكن لكل طريق أن يوثّقه',
        body: [
          'The difference between the two routes is not in the resin but in what can be written down about it. A plantation knows which species it planted, in which plot, and when it was inoculated, so its material can be described with a species, a location and a date. A wild stand does not record the individual tree in the same way, so its material is described by region and by the season it was gathered.',
          'That is the practical asymmetry between the two, and it is not a quality judgement. It is a documentation one. A cultivated origin can be specified more tightly than a wild one, which means the term that sounds like a statement about quality is often, in effect, a statement about traceability.',
          'It also explains why the label is easy to misuse. "Cultivated" reads as controlled and "wild" reads as natural, and neither word describes the material. One of them describes a supply chain in which the supplier knows what it planted and when, and the other describes a supply chain in which the supplier knows where the material came from and how much of it there is.',
        ],
        bodyAr: [
          'الفرق بين الطريقين ليس في الراتنج بل فيما يمكن كتابته عنه. فالمزرعة تعرف أي نوع زرعته، وفي أيّ قطعة، ومتى لُقّحت، فيمكن وصف مادتها بنوع وموقع وتاريخ. أما المشتل البري فلا يسجّل الشجرة الفردية على النحو نفسه، فتصف مادته بالإقليم وبموسم الجني.',
          'وهذا هو التفاوت العملي بين الاثنين، وهو ليس حكماً على الجودة بل على التوثيق. فالمنشأ المستزرع يمكن تحديده أدق من المنشأ البري، أي أن اللفظ الذي يبدو بياناً عن الجودة هو في الحقيقة، في كثير من الأحيان، بيان عن قابلية التتبع.',
          'وهو أيضاً يشرح كيف يسهل استعمال الوسم على غير معناه. فـ«مستزرع» يقرأ منضبطاً و«بري» يقرأ طبيعياً، ولا يصف أيٌّ منهما المادة. فالأول يصف سلسلة توريد يعرف فيها المورد ما زرعه ومتى، والثاني يصف سلسلة توريد يعرف فيها المورد من أين جاءت المادة وكم منها.',
        ],
      },
      {
        heading: 'Why the words do not travel',
        headingAr: 'لماذا لا تنتقل الكلمات',
        body: [
          'A seller told by a supplier "wild, from the forest" repeats it, and the repetition turns a piece of trade vocabulary into a fact about the material. That is how a label ends up asserting something nobody checked, and it happens most easily where the chain is longest.',
          'The test is the same as for any other seller’s statement: can the word be traced to a record, or is it a description that has travelled further than anyone can follow? If the answer is the second, the word carries no more information than the seller’s own confidence.',
          'It is worth naming what a buyer loses by treating the words as settled. The terms answer "how did this tree get its resin" and nothing else. A buyer who has decided that cultivated is better, or that wild is rarer, has taken a position on a word that was never carrying one, and will find it hard to look at the material in front of him.',
        ],
        bodyAr: [
          'البائع الذي يقول له مورد «بري، من الغابة» يكرّر ذلك، فيتحول التكرار من مفردة تجارية إلى واقعة عن المادة. وهكذا ينتهي الوسم إلى ادعاء لم يتحقق أحد، ويحدث ذلك أسهل ما يكون حيث تكون السلسلة أطول.',
          'والاختبار هو نفسه الذي يطبق على كل قول للبائع: هل يمكن تتبّع اللفظ إلى سجل، أم أنه وصف انتقل أبعد مما يستطيع أحد متابعته؟ فإن كان الثاني، فلا يحمل اللفظ من المعلومات إلا ثقة البائع نفسه.',
          'ومن المفيد تسمية ما يخسره المشتري حين يتعامل مع اللفظين كأنهما مستقرّان. فالمصطلحان يجيبان عن «كيف راتنج هذه الشجرة» ولا شيء غير ذلك. ومن حسم أن المستزرع أفضل، أو أن البري أندر، فقد أخذ موقفاً من لفظ لم يكن يحمل موقفاً، وسيجد نفسه عاجزاً عن النظر في المادة أمامه.',
        ],
      },
      {
        heading: 'What to ask instead',
        headingAr: 'ما الذي يُسأل بدلاً من ذلك',
        body: [
          'The useful questions come from the documentation, not from the label. Ask what record describes the material and what it contains: the species, the place, the date, the treatment, the party that handled it. Ask whether the material is documented as wild-collected or as cultivated, and on what instrument, because the trade documentation for wild-collected material turns on an assessment made before the trees were cut, and for cultivated material that question does not arise in the same way.',
          'Ask what the seller can evidence and what they are simply repeating, and record the two separately. The first is worth building on. The second is worth knowing about, because it tells you how much of the rest of the description is also second-hand.',
          'None of this makes the wild and cultivated distinction useless. It makes it a question about the supply chain rather than about the resin, which is what the two words have always meant once you look past the way they are usually used.',
        ],
        bodyAr: [
          'الأسئلة النافعة تأتي من التوثيق لا من الوسم. فاسأل ما السجل الذي يصف المادة وماذا يحتوي: النوع، والمكان، والتاريخ، والمعالجة، والجهة التي تعاملت معها. واسأل هل المادة موثّقة على أنها مجموعة برّياً أم مستزرعة، وبأيّ أداة، فوثائق المجموعة برّياً تقوم على تقدير يُعدّ قبل قطع الأشجار، أما المستزرعة فلا يطرح هذا السؤال بالطريقة نفسها.',
          'واسأل ما الذي يستطيع البائع إثباته وما هو يكرّره فحسب، وسجّل الأمرين منفصلين. فالأول تستحق أن تبني عليه، والثاني تستحق أن تعرفه، لأنه يخبرك بكم من بقية الوصف هو أيضاً منقول عن غيره.',
          'وهذا كله لا يجعل التمييز بين البري والمستزرع بلا فائدة. بل يجعله سؤالاً عن سلسلة التوريد لا عن الراتنج، وهو ما حمله اللفظان دائماً حين النظر إليهما في غير طريقة استعمالهما المعتادة.',
        ],
        list: [
          'Which record describes the material, and what fields does it carry?',
          'Is the material documented as wild-collected or as cultivated, and on what instrument?',
          'Which particulars can the seller evidence, and which are they repeating?',
          'Does the record name the species, the place and the date?',
          'Does it name the party that handled the material?',
        ],
        listAr: [
          'أيّ سجل يصف المادة، وما الحقول التي يحملها.',
          'هل المادة موثّقة على أنها مجموعة برّياً أم مستزرعة، وبأيّ أداة.',
          'أيّ البيانات يستطيع البائع إثباتها، وأيّها يكرّرها.',
          'هل يذكر السجل النوع والمكان والتاريخ.',
          'هل يذكر الجهة التي تعاملت مع المادة.',
        ],
        callout: {
          title: 'The question behind the question',
          body:
            'When a seller says wild or cultivated, the useful follow-up is not whether the word is accurate but what record the word is standing on. That question turns a label into a document, and a document can be asked for.',
          bodyAr:
            'حين يقول البائع «بري» أو «مستزرع»، فالسؤال النافع ليس أكان اللفظ دقيقاً، بل ما السجل الذي يقوم عليه هذا اللفظ. وهذا السؤال يحوّل الوسم إلى وثيقة، والوثيقة يمكن طلبها.',
        },
      },
    ],
  },
};
