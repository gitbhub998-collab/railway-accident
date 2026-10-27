const stage1 = [
  {
    questionAr: "ما هي الوظائف الأساسية لنظام إشارات السكك الحديدية عالية السرعة (HSR)؟[cite: 1]",
    questionEn: "What are the core primary functions of a High-Speed Railway (HSR) signal system?[cite: 1]",
    optionsAr: {
      A: "زيادة وزن القطار وتقليل تكاليف صيانة المسار[cite: 1]",
      B: "ضمان سلامة التشغيل، رفع الكفاءة، ومراقبة سرعة القطار/المسافة بين القطارات في الوقت الفعلي[cite: 1]",
      C: "التحكم في جهد الكهرباء وضغط البانتوجراف[cite: 1]",
      D: "القضاء على الحاجة إلى مكاتب الإرسال المركزية[cite: 1]"
    },
    optionsEn: {
      A: "To increase train weight and reduce track maintenance costs[cite: 1]",
      B: "To ensure operation safety, raise efficiency, and monitor train speed/headway in real time[cite: 1]",
      C: "To control electrification voltage and pantograph pressure[cite: 1]",
      D: "To eliminate the need for centralized dispatching offices[cite: 1]"
    },
    hintAr: "تركز هذه الأنظمة على السلامة، ورفع الكفاءة، والمراقبة الفورية للسرعة والمسافات.[cite: 21]",
    hintEn: "These systems focus on safety, efficiency, and real-time monitoring of speed and headway.[cite: 21]",
    answer: "B"
  },
  {
    questionAr: "ما هو مستوى نظام تحكم القطارات عالية السرعة الذي يجب اعتماده للخطوط التي تعمل بسرعات 300 كم/ساعة فأكثر؟[cite: 1]",
    questionEn: "Which high-speed train control system level MUST be adopted for lines operating at speeds of 300 km/h and above?[cite: 1]",
    optionsAr: {
      A: "TCS-0[cite: 1]",
      B: "TCS-1[cite: 1]",
      C: "TCS-2[cite: 1]",
      D: "TCS-3[cite: 1]"
    },
    optionsEn: {
      A: "TCS-0[cite: 1]",
      B: "TCS-1[cite: 1]",
      C: "TCS-2[cite: 1]",
      D: "TCS-3[cite: 1]"
    },
    hintAr: "السرعات التي تبلغ 300 كم/ساعة فأكثر تتطلب نظاماً يعتمد على الراديو (GSM-R) للحصول على صلاحية الحركة المستمرة.[cite: 21]",
    hintEn: "Speeds of 300 km/h and above require a system utilizing radio (GSM-R) for continuous movement authority.[cite: 21]",
    answer: "D"
  },
  {
    questionAr: "تحت أي ظروف يكون نظام TCS-2 مقبولاً على خطوط السكك الحديدية عالية السرعة؟[cite: 1]",
    questionEn: "Under what conditions is TCS-2 acceptable on high-speed rail lines?[cite: 1]",
    optionsAr: {
      A: "على الخطوط التي تعمل بسرعة تفوق 250 كم/ساعة مع كثافة مرورية منخفضة[cite: 1]",
      B: "على جميع الخطوط التي تعمل بسرعة تفوق 350 كم/ساعة[cite: 1]",
      C: "فقط في مستودعات صيانة القاطرات[cite: 1]",
      D: "عندما تكون تغطية راديو GSM-R نشطة بالكامل عبر جميع الساحات[cite: 1]"
    },
    optionsEn: {
      A: "On lines operating above 250 km/h with low traffic density[cite: 1]",
      B: "On all lines operating above 350 km/h[cite: 1]",
      C: "Only in locomotive maintenance depots[cite: 1]",
      D: "When GSM-R radio coverage is fully active across all yards[cite: 1]"
    },
    hintAr: "يكون هذا النظام مقبولاً للسرعات التي تتجاوز 250 كم/ساعة بشرط ألا تكون الكثافة المرورية عالية.[cite: 21]",
    hintEn: "It is acceptable for speeds slightly above 250 km/h provided traffic is not dense.[cite: 21]",
    answer: "A"
  },
  {
    questionAr: "كيف ينقل نظام TCS-2 صلاحية الحركة ومعلومات السرعة إلى معدات تحكم القطار الموجودة على متنه؟[cite: 1]",
    questionEn: "How does TCS-2 transmit movement authority and speed information to the onboard train control equipment?[cite: 1]",
    optionsAr: {
      A: "عبر تتبع الأقمار الصناعية GPS[cite: 1]",
      B: "من خلال دوائر المسار التي ترسل إشارات مشفرة، مدعومة بباليزات (Balises) لملفات تعريف الخط[cite: 1]",
      C: "حصرياً عبر أبراج راديو GSM-R[cite: 1]",
      D: "من خلال الملاحظة البصرية للسائق للإشارات الميكانيكية الجانبية[cite: 1]"
    },
    optionsEn: {
      A: "Via satellite GPS tracking[cite: 1]",
      B: "Through track circuits sending coded signals, supplemented by balises for line profiles[cite: 1]",
      C: "Exclusively via GSM-R radio towers[cite: 1]",
      D: "Through driver visual observation of wayside mechanical signals[cite: 1]"
    },
    hintAr: "يعتمد هذا النظام على دوائر المسار لمعلومات السرعة المشفرة والباليزات لبيانات الخط.[cite: 21]",
    hintEn: "This system relies on track circuits for coded speed info and balises for line data.[cite: 21]",
    answer: "B"
  },
  {
    questionAr: "ما هو وسيط الإرسال التكنولوجي الأساسي الذي يميز TCS-3 عن TCS-2؟[cite: 1]",
    questionEn: "What primary technology transmission medium distinguishes TCS-3 from TCS-2?[cite: 1]",
    optionsAr: {
      A: "مصدات التوقف الميكانيكية[cite: 1]",
      B: "دوائر مسار التيار المتردد فقط[cite: 1]",
      C: "اتصالات الراديو اللاسلكية GSM-R[cite: 1]",
      D: "أجهزة استشعار الأشعة تحت الحمراء بجانب المسار[cite: 1]"
    },
    optionsEn: {
      A: "Mechanical trip stops[cite: 1]",
      B: "AC track circuits only[cite: 1]",
      C: "GSM-R wireless radio communication[cite: 1]",
      D: "Infrared trackside sensors[cite: 1]"
    },
    hintAr: "يعتمد نظام TCS-3 على الاتصال الراديوي المستمر بين مركز الكتلة الراديوية والقطار.[cite: 21]",
    hintEn: "TCS-3 relies on radio communication between the RBC and the train for movement authority.[cite: 21]",
    answer: "C"
  },
  {
    questionAr: "ما هو دور مركز الكتلة الراديوية (RBC) في نظام TCS-3؟[cite: 2]",
    questionEn: "What is the role of the Radio Block Center (RBC) in TCS-3?[cite: 2]",
    optionsAr: {
      A: "توفير طاقة الجر لسلك الكاتيناري[cite: 2]",
      B: "توليد صلاحية الحركة بناءً على بيانات التعشيق و CTC ونقلها عبر GSM-R[cite: 2]",
      C: "قفل شفرات مفاتيح التحويل فعليًا في الموقع[cite: 2]",
      D: "قياس مقاومة حصى المسار أثناء هطول الأمطار الغزيرة[cite: 2]"
    },
    optionsEn: {
      A: "To supply traction power to the catenary wire[cite: 2]",
      B: "To generate movement authority based on interlocking and CTC data and transmit it via GSM-R[cite: 2]",
      C: "To physically lock turnout switch blades in the field[cite: 2]",
      D: "To measure track ballast resistance during heavy rainfall[cite: 2]"
    },
    hintAr: "يعمل RBC كـ 'حارس إلكتروني' يستقبل بيانات الإشغال ويولد صلاحيات الحركة الراديوية.[cite: 21]",
    hintEn: "The RBC acts as an 'electronic guard' that receives occupancy data and generates radio movement authorities.[cite: 21]",
    answer: "B"
  },
  {
    questionAr: "ما هي أقصى سرعة مسيطر عليها مسموح بها عند تشغيل قطار تحت تحكم نظام LKJ (نظام المراقبة/التسجيل على المتن)؟[cite: 2]",
    questionEn: "What is the maximum controlled speed permitted when a train is operated under LKJ (onboard monitoring/recording) system control?[cite: 2]",
    optionsAr: {
      A: "120 كم/ساعة[cite: 2]",
      B: "160 كم/ساعة[cite: 2]",
      C: "165 كم/ساعة[cite: 2]",
      D: "200 كم/ساعة[cite: 2]"
    },
    optionsEn: {
      A: "120 km/h[cite: 2]",
      B: "160 km/h[cite: 2]",
      C: "165 km/h[cite: 2]",
      D: "200 km/h[cite: 2]"
    },
    hintAr: "القطارات التي يتحكم فيها نظام LKJ لها حد أقصى للسرعة محدد بدقة يتجاوز 160 بقليل.[cite: 21]",
    hintEn: "LKJ-controlled trains have a maximum speed limit explicitly set at 165 km/h.[cite: 21]",
    answer: "C"
  },
  {
    questionAr: "ما هو النظام المركزي الذي يدير ويتحقق ويقسم ويضبط ويلغي قيود السرعة المؤقتة (TSR)؟[cite: 2]",
    questionEn: "Which centralized system manages, verifies, splits, sets, and cancels Temporary Speed Restrictions (TSR)?[cite: 2]",
    optionsAr: {
      A: "خادم تقييد السرعة المؤقت (TSRS)[cite: 2]",
      B: "التعشيق القائم على الكمبيوتر (CBI)[cite: 2]",
      C: "وحدة إرسال الباليز (BTM)[cite: 2]",
      D: "آلة S700K[cite: 2]"
    },
    optionsEn: {
      A: "TSRS (Temporary Speed Restriction Server)[cite: 2]",
      B: "CBI (Computer Based Interlocking)[cite: 2]",
      C: "BTM (Balise Transmission Module)[cite: 2]",
      D: "S700K Machine[cite: 2]"
    },
    hintAr: "اسم النظام يتضمن مباشرة مصطلح 'خادم تقييد السرعة المؤقت'.[cite: 21]",
    hintEn: "The system is responsible for the centralized management of temporary speed restriction commands.[cite: 21]",
    answer: "A"
  },
  {
    questionAr: "ما هي الوظيفة الأساسية للتحكم المركزي في حركة المرور (CTC) في عمليات السكك الحديدية الحديثة؟[cite: 2]",
    questionEn: "What is the primary function of Centralized Traffic Control (CTC) in modern railway operations?[cite: 2]",
    optionsAr: {
      A: "مراقبة وزن المحور على عربات الشحن[cite: 2]",
      B: "أتمتة إرسال حركة القطارات وضبط أوامر المسارات من مكتب مركزي[cite: 2]",
      C: "ضبط شد سلك الكاتيناري[cite: 2]",
      D: "استبدال دوائر المسار بكاميرات بصرية[cite: 2]"
    },
    optionsEn: {
      A: "To monitor axle weight on freight wagons[cite: 2]",
      B: "To automate train movement dispatching and command route setting from a central office[cite: 2]",
      C: "To adjust catenary wire tension[cite: 2]",
      D: "To replace track circuits with optical cameras[cite: 2]"
    },
    hintAr: "يقوم نظام CTC بأتمتة الإرسال وتوجيه إعدادات المسار عبر الخط بأكمله من مكتب مركزي.[cite: 21]",
    hintEn: "CTC automates dispatching and commands route setting across an entire line from a central office.[cite: 21]",
    answer: "B"
  },
  {
    questionAr: "أي مبدأ تصميم يضمن أن أي عطل فني يعيد نظام الإشارات افتراضيًا إلى حالة آمنة ومقيدة؟[cite: 2]",
    questionEn: "Which design principle ensures that any technical malfunction defaults the signaling system to a safe, restrictive state?[cite: 2]",
    optionsAr: {
      A: "التشغيل المرن عند الفشل (Fail-soft)[cite: 2]",
      B: "الآمن عند الفشل (Fail-safe)[cite: 2]",
      C: "النشط عند الفشل (Fail-active)[cite: 2]",
      D: "الصامت عند الفشل (Fail-silent)[cite: 2]"
    },
    optionsEn: {
      A: "Fail-soft[cite: 2]",
      B: "Fail-safe[cite: 2]",
      C: "Fail-active[cite: 2]",
      D: "Fail-silent[cite: 2]"
    },
    hintAr: "هذا المبدأ يجبر النظام على الانتقال إلى حالته الأكثر أمانًا (مثل إشارة التوقف) أثناء حدوث عطل.[cite: 21]",
    hintEn: "This design ensures any component failure forces the system into its safest, most restrictive state.[cite: 21]",
    answer: "B"
  },
  {
    questionAr: "ما هو الغرض من تصميم 'fail-soft' في مرافق إشارات السكك الحديدية عالية السرعة؟[cite: 3]",
    questionEn: "What is the purpose of 'fail-soft' design in high-speed railway signal facilities?[cite: 3]",
    optionsAr: {
      A: "تشغيل الكبح في حالات الطوارئ فوراً بأقصى سرعة عند أي خلل بسيط[cite: 3]",
      B: "السماح باستمرار التشغيل الآمن على الرغم من وجود خطأ بسيط، لتجنب التوقفات الطارئة غير الضرورية بسرعة عالية[cite: 3]",
      C: "تجاوز قواعد التعشيق خلال ساعات الذروة[cite: 3]",
      D: "فصل مراقبة دائرة المسار[cite: 3]"
    },
    optionsEn: {
      A: "To immediately trigger emergency braking at top speed upon any minor glitch[cite: 3]",
      B: "To allow continued safe operation despite a minor fault, avoiding unnecessary high-speed emergency stops[cite: 3]",
      C: "To bypass interlocking rules during peak hours[cite: 3]",
      D: "To disconnect track circuit monitoring[cite: 3]"
    },
    hintAr: "يحافظ على استمرار العمليات بأمان رغم الأعطال الطفيفة لمنع التوقفات القاسية.[cite: 21]",
    hintEn: "It keeps operations running safely despite faults to prevent disruptive emergency stops from top speed.[cite: 21]",
    answer: "B"
  },
  {
    questionAr: "في التعشيق القائم على الكمبيوتر (CBI)، ما هي استراتيجية التخطيط المنفذة للمحطات الكبيرة ذات الساحات المتعددة؟[cite: 3]",
    questionEn: "In Computer-Based Interlocking (CBI), what layout strategy is implemented for large stations with multiple yards?[cite: 3]",
    optionsAr: {
      A: "إطار مرحل مركزي واحد للمنطقة بأكملها[cite: 3]",
      B: "نظام CBI واحد لكل ساحة لتقليل تأثير الأعطال وتبسيط الترقيات[cite: 3]",
      C: "إطارات رافعة يدوية في كل ساحة[cite: 3]",
      D: "تحكم لاسلكي مباشر للسائق بدون تعشيق[cite: 3]"
    },
    optionsEn: {
      A: "A single central relay frame for the whole region[cite: 3]",
      B: "One CBI system per individual yard to minimize failure impact and simplify upgrades[cite: 3]",
      C: "Manual hand-lever frames in each yard[cite: 3]",
      D: "Direct driver radio control without interlocking[cite: 3]"
    },
    hintAr: "توزيع نظام لكل ساحة يحد من مساحة الأعطال والاضطرابات أثناء التحديثات.[cite: 21]",
    hintEn: "Installing one CBI per yard reduces the failure face and disruption during upgrades.[cite: 21]",
    answer: "B"
  },
  {
    questionAr: "أين يجب تركيب معدات التعشيق القائم على الكمبيوتر (CBI) عبر شبكة السكك الحديدية؟[cite: 3]",
    questionEn: "Where must Computer-Based Interlocking (CBI) equipment be installed across a railway network?[cite: 3]",
    optionsAr: {
      A: "فقط في محطات الركاب النهائية[cite: 3]",
      B: "في المحطات ونقاط التوقف ومستودعات/ورش الوحدات المتعددة (MU)[cite: 3]",
      C: "حصريًا داخل كبائن السائقين[cite: 3]",
      D: "فقط على طول أقسام المسار المفتوحة بعيدًا عن المحولات[cite: 3]"
    },
    optionsEn: {
      A: "Only at terminal passenger stations[cite: 3]",
      B: "In stations, block posts, and Multiple Unit (MU) depots/workshops[cite: 3]",
      C: "Exclusively inside driver cabs[cite: 3]",
      D: "Only along open track sections away from switches[cite: 3]"
    },
    hintAr: "يجب تثبيته في مواقع رئيسية تشمل المحطات ونقاط التوقف ومستودعات الوحدات المتعددة.",
    hintEn: "CBI should be installed in stations, block posts, and MU depots/workshops.",
    answer: "B"
  },
  {
    questionAr: "أي من الحالات التالية محظورة تمامًا في نظام التعشيق الآمن (fail-safe) أثناء حدوث عطل؟[cite: 3]",
    questionEn: "Which of the following conditions is STRICTLY PROHIBITED in a fail-safe interlocking system during a fault?[cite: 3]",
    optionsAr: {
      A: "التبديل التلقائي إلى إشارة حمراء مقيدة[cite: 3]",
      B: "إصدار مسار خاطئ، أو إشارة تحويل خاطئة، أو عرض إشارة تمت ترقيتها[cite: 3]",
      C: "إشارة انشغال ناتجة عن حصى مبلل[cite: 3]",
      D: "إنذار بخطأ في تشخيص النظام[cite: 3]"
    },
    optionsEn: {
      A: "An automatic switch to a restrictive Red aspect[cite: 3]",
      B: "A false route release, wrong turnout indication, or upgraded signal display[cite: 3]",
      C: "An occupied indication caused by wet ballast[cite: 3]",
      D: "A system diagnostic fault alarm[cite: 3]"
    },
    hintAr: "يُحظر بشدة إظهار حالات خاطئة قد تسمح للقطار بالتحرك بشكل غير آمن كترقية الإشارات.[cite: 22]",
    hintEn: "Conditions like false route release or wrong turnout indications are absolutely forbidden.[cite: 22]",
    answer: "B"
  },
  {
    questionAr: "ما هي قدرة سرعة المرور الجانبي المطلوبة للتحويلات الرئيسية الكبيرة على خطوط السكك الحديدية عالية السرعة؟[cite: 3]",
    questionEn: "What lateral passing speed capability is required for large main-line turnouts on high-speed rail lines?[cite: 3]",
    optionsAr: {
      A: "أعلى من 50 كم/ساعة أو 80 كم/ساعة[cite: 3]",
      B: "أعلى من 100 كم/ساعة أو 120 كم/ساعة[cite: 3]",
      C: "أعلى من 160 كم/ساعة أو 200 كم/ساعة[cite: 3]",
      D: "أعلى من 300 كم/ساعة فقط[cite: 3]"
    },
    optionsEn: {
      A: "Above 50 km/h or 80 km/h[cite: 3]",
      B: "Above 100 km/h or 120 km/h[cite: 3]",
      C: "Above 160 km/h or 200 km/h[cite: 3]",
      D: "Above 300 km/h only[cite: 3]"
    },
    hintAr: "تدعم التحويلات الرئيسية الكبيرة (مثل #18) سرعات مرور جانبية تتجاوز 160 أو 200 كم/ساعة.[cite: 22]",
    hintEn: "Main-line HSR turnouts support lateral passing speeds above 160 km/h or 200 km/h.[cite: 22]",
    answer: "C"
  },
  {
    questionAr: "ما هي معايير الإشارات الأوروبية التي تحكم دورة الحياة والبرمجيات والتحقق من السلامة للأنظمة المتعلقة بسلامة السكك الحديدية؟[cite: 4]",
    questionEn: "What European signaling standards govern the life cycle, software, and safety validation of railway safety-related systems?[cite: 4]",
    optionsAr: {
      A: "ISO 9001 / ISO 14001[cite: 4]",
      B: "EN 50126 / EN 50128 / EN 50129[cite: 4]",
      C: "IEEE 802.11 / IEEE 802.15[cite: 4]",
      D: "IEC 60064 / IEC 60076[cite: 4]"
    },
    optionsEn: {
      A: "ISO 9001 / ISO 14001[cite: 4]",
      B: "EN 50126 / EN 50128 / EN 50129[cite: 4]",
      C: "IEEE 802.11 / IEEE 802.15[cite: 4]",
      D: "IEC 60064 / IEC 60076[cite: 4]"
    },
    hintAr: "تشمل هذه المعايير سلسلة EN التي تبدأ بـ 5012x لتغطية الموثوقية والبرمجيات والسلامة.[cite: 22]",
    hintEn: "These include EN 50126 (RAMS), EN 50128 (Software), and EN 50129 (Safety).[cite: 22]",
    answer: "B"
  },
  {
    questionAr: "ما هي وظيفة نظام المراقبة المركزي للإشارات على الخطوط عالية السرعة؟[cite: 4]",
    questionEn: "What is the function of the Centralized Signaling Monitoring System on high-speed lines?[cite: 4]",
    optionsAr: {
      A: "بيع تذاكر الركاب عبر الإنترنت[cite: 4]",
      B: "البقاء متصلاً بالشبكة باستمرار للتشخيص عن بُعد، وجمع الحالة، وإنذارات الأعطال عبر دوائر المسار، وCBI، وCTC[cite: 4]",
      C: "حساب استهلاك القطار للوقود[cite: 4]",
      D: "ضبط تكييف هواء الكابينة[cite: 4]"
    },
    optionsEn: {
      A: "To sell passenger tickets online[cite: 4]",
      B: "To stay continuously networked for remote diagnosis, status collection, and fault alarms across track circuits, CBI, and CTC[cite: 4]",
      C: "To calculate train fuel consumption[cite: 4]",
      D: "To adjust cabin air conditioning[cite: 4]"
    },
    hintAr: "يركز النظام على المراقبة المستمرة، والتشخيص عن بُعد، وجمع الإنذارات من الأجهزة المختلفة.[cite: 22]",
    hintEn: "It is constantly networked to collect diagnostic data and fault alarms from CTC, CBI, and track circuits.[cite: 22]",
    answer: "B"
  },
  {
    questionAr: "كيف تتعامل دوائر المسار مع عمليات القطارات في الاتجاه المعاكس على خطوط HSR مزدوجة المسار؟[cite: 4]",
    questionEn: "How do track circuits handle reverse-direction train operations on double-track HSR lines?[cite: 4]",
    optionsAr: {
      A: "يتم إيقاف تشغيلها بالكامل[cite: 4]",
      B: "ترسل إشارات مشفرة في تسلسل كود التتبع باستخدام نفس مبادئ إرسال الكود مثل الاتجاه الطبيعي[cite: 4]",
      C: "تعتمد فقط على إشارات اليد للسائق[cite: 4]",
      D: "تعكس قطبية جهد التيار المستمر كل 5 ثوانٍ[cite: 4]"
    },
    optionsEn: {
      A: "They are turned off completely[cite: 4]",
      B: "They send coded signals in tracing code sequence using the same code-sending principles as normal direction[cite: 4]",
      C: "They rely solely on driver hand signals[cite: 4]",
      D: "They reverse the DC voltage polarity every 5 seconds[cite: 4]"
    },
    hintAr: "تضمن تلقي المعدات الموجودة على القطار للبيانات بشكل متوقع عبر كود التتبع.[cite: 22]",
    hintEn: "They use tracing code sequences to ensure onboard equipment receives predictable data.[cite: 22]",
    answer: "B"
  },
  {
    questionAr: "ما هي مبادئ اختصار RAMS الأساسية التي يجب أن تلبيها التصميمات العامة لإشارات السرعة العالية؟[cite: 4]",
    questionEn: "What primary RAMS acronym principles must high-speed signal general designs satisfy?[cite: 4]",
    optionsAr: {
      A: "الموثوقية، التوافر، القابلية للصيانة، السلامة (Reliability, Availability, Maintainability, Safety)[cite: 4]",
      B: "التقييم السريع، المراقبة، الأمان (Rapid Assessment, Monitoring, Security)[cite: 4]",
      C: "جهاز الإرسال والاستقبال الراديوي، الوحدة التلقائية، المستشعر[cite: 4]",
      D: "محاذاة المسار، معيار الصيانة[cite: 4]"
    },
    optionsEn: {
      A: "Reliability, Availability, Maintainability, Safety[cite: 4]",
      B: "Rapid Assessment, Monitoring, Security[cite: 4]",
      C: "Radio Transceiver, Automatic Module, Sensor[cite: 4]",
      D: "Route Alignment, Maintenance Standard[cite: 4]"
    },
    hintAr: "يشير الاختصار إلى أربعة عناصر رئيسية تضمن جودة النظام وصيانته وأمانه.[cite: 22]",
    hintEn: "RAMS stands for Reliability, Availability, Maintainability, and Safety.[cite: 22]",
    answer: "A"
  },
  {
    questionAr: "ما هو النظام الذي يعمل كاحتياطي للإشراف على سرعة القطار في حالة فشل نظام TCS على متنه أو المعدات الجانبية للخط على خطوط TCS-2؟[cite: 4]",
    questionEn: "What system acts as a fallback for train speed supervision if onboard TCS or lineside equipment fails on TCS-2 lines?[cite: 4]",
    optionsAr: {
      A: "هواتف GSM-R المحمولة[cite: 4]",
      B: "نظام LKJ[cite: 4]",
      C: "إشارات العلم اليدوية من العمال[cite: 4]",
      D: "علامات المسافة البصرية بجانب المسار[cite: 4]"
    },
    optionsEn: {
      A: "GSM-R handheld phones[cite: 4]",
      B: "LKJ system[cite: 4]",
      C: "Hand-flag signalmen[cite: 4]",
      D: "Visual trackside mileposts[cite: 4]"
    },
    hintAr: "يعمل نظام LKJ كإشراف احتياطي في حالة فشل المعدات الأساسية.[cite: 22]",
    hintEn: "LKJ serves as the fallback supervision system when primary TCS equipment fails.[cite: 22]",
    answer: "B"
  },
  {
    questionAr: "لماذا يتم تصميم قنوات اتصالات الإشارات ذات الأهمية للسلامة بتكرار الأجهزة ومسارات مادية مختلفة؟[cite: 5]",
    questionEn: "Why are safety-critical signal communication channels designed with hardware redundancy and different physical paths?[cite: 5]",
    optionsAr: {
      A: "لتقليل تكاليف الكابلات[cite: 5]",
      B: "لمنع انقطاع كابل واحد أو اضطراب مادي من التسبب في فقدان الاتصال بالكامل[cite: 5]",
      C: "للسماح بالمكالمات الهاتفية التناظرية[cite: 5]",
      D: "لتعزيز تيار دائرة المسار[cite: 5]"
    },
    optionsEn: {
      A: "To decrease cable costs[cite: 5]",
      B: "To prevent a single cable break or physical disruption from causing complete communication loss[cite: 5]",
      C: "To allow analogue telephone calls[cite: 5]",
      D: "To boost track circuit current[cite: 5]"
    },
    hintAr: "التكرار في المسارات المادية يحمي الاتصالات من الفشل الناتج عن نقطة تعطل واحدة.[cite: 22]",
    hintEn: "Redundant physical channels protect safety-affecting data paths against single point failures.[cite: 22]",
    answer: "B"
  },
  {
    questionAr: "ما هو الدور الأساسي لمركز تحكم القطار (TCC) في المحطات في نظام TCS-2؟[cite: 5]",
    questionEn: "What is the primary role of the Train Control Center (TCC) at stations in TCS-2?[cite: 5]",
    optionsAr: {
      A: "توليد رسائل الباليز وتنسيق تشفير دائرة المسار مع تعشيق المحطة[cite: 5]",
      B: "التحكم في إضاءة رصيف المحطة[cite: 5]",
      C: "قياس تآكل شفة العجلة[cite: 5]",
      D: "تشغيل حواجز تقاطع الطرق يدويًا[cite: 5]"
    },
    optionsEn: {
      A: "To generate balise telegrams and coordinate track circuit coding with station interlocking[cite: 5]",
      B: "To control station platform lighting[cite: 5]",
      C: "To measure wheel flange wear[cite: 5]",
      D: "To operate level crossing road barriers manually[cite: 5]"
    },
    hintAr: "يدير TCC تشفير دائرة المسار ويتعامل مع رسائل الباليز النشطة.[cite: 22]",
    hintEn: "TCC manages track circuit coding, controls active balise telegrams, and interfaces with interlocking.[cite: 22]",
    answer: "A"
  },
  {
    questionAr: "أي مكون على متن القطار يتفاعل مع الباليزات الأرضية عبر الحث الكهرومغناطيسي؟[cite: 5]",
    questionEn: "Which component onboard the train interfaces with ground balises via electromagnetic induction?[cite: 5]",
    optionsAr: {
      A: "وحدة إرسال الباليز (BTM) والهوائي[cite: 5]",
      B: "البانتوجراف[cite: 5]",
      C: "مولد التاكومتر[cite: 5]",
      D: "سارية راديو GSM-R[cite: 5]"
    },
    optionsEn: {
      A: "BTM (Balise Transmission Module) and antenna[cite: 5]",
      B: "Pantograph[cite: 5]",
      C: "Tachometer generator[cite: 5]",
      D: "GSM-R radio mast[cite: 5]"
    },
    hintAr: "يتم استخدام الهوائي ووحدة BTM لفك تشفير الرسالة المرسلة من الباليز.[cite: 22]",
    hintEn: "The train antenna and BTM filter and decode the telegram transmitted by the balise.[cite: 22]",
    answer: "A"
  },
  {
    questionAr: "ما هو التردد الذي يستخدمه هوائي القطار لتشغيل باليز أرضي سلبي عند المرور فوقه؟[cite: 5]",
    questionEn: "What frequency is used by the train antenna to power a passive ground balise when passing over it?[cite: 5]",
    optionsAr: {
      A: "50 هرتز[cite: 5]",
      B: "450 ميجاهرتز[cite: 5]",
      C: "27 ميجاهرتز[cite: 5]",
      D: "2.4 جيجاهرتز[cite: 5]"
    },
    optionsEn: {
      A: "50 Hz[cite: 5]",
      B: "450 MHz[cite: 5]",
      C: "27 MHz[cite: 5]",
      D: "2.4 GHz[cite: 5]"
    },
    hintAr: "يصدر هوائي القطار مجالاً بتردد 27 ميجاهرتز لتنشيط الباليز عن طريق الحث.[cite: 22]",
    hintEn: "The train antenna emits a 27 MHz field to energize the passive balise via induction.[cite: 22]",
    answer: "C"
  },
  {
    questionAr: "ما هو طول الرسالة المرسلة من باليز أرضي إلى وحدة BTM في القطار المار؟[cite: 5]",
    questionEn: "What length is the telegram transmitted from a ground balise to the passing train BTM?[cite: 5]",
    optionsAr: {
      A: "64 بت[cite: 5]",
      B: "256 بت[cite: 5]",
      C: "1023 بت[cite: 5]",
      D: "4096 بت[cite: 5]"
    },
    optionsEn: {
      A: "64 bits[cite: 5]",
      B: "256 bits[cite: 5]",
      C: "1023 bits[cite: 5]",
      D: "4096 bits[cite: 5]"
    },
    hintAr: "يرسل الباليز رسالة رقمية تتكون من أكثر من 1000 بت.[cite: 22]",
    hintEn: "The balise sends a telegram that is exactly 1023 bits long.[cite: 22]",
    answer: "C"
  }
];

const stage2 = [
  {
    questionAr: "ما هما الوظيفتان التشغيليتان الأساسيتان اللتان تؤديهما دوائر مسار السكك الحديدية؟[cite: 6]",
    questionEn: "What are the two fundamental operational functions performed by railway track circuits?[cite: 6]",
    optionsAr: {
      A: "قياس سرعة القطار وشحن بطاريات القاطرة[cite: 6]",
      B: "اكتشاف انشغال قسم المسار ونقل معلومات التشغيل (الإشارات المشفرة) إلى القطارات[cite: 6]",
      C: "تبريد القضبان وإضاءة إشارات جانب المسار[cite: 6]",
      D: "لحام وصلات السكك الحديدية وعد محاور القطار[cite: 6]"
    },
    optionsEn: {
      A: "Measuring train speed and charging locomotive batteries[cite: 6]",
      B: "Detecting track section occupancy and transmitting operation information (coded signals) to trains[cite: 6]",
      C: "Cooling the rails and lighting trackside signals[cite: 6]",
      D: "Welding rail joints and counting train axles[cite: 6]"
    },
    hintAr: "الدوائر مخصصة لاكتشاف وجود القطار وإرسال الأكواد عبر القضبان.[cite: 23]",
    hintEn: "Track circuits perform two jobs: detecting occupancy and transmitting coded information.[cite: 23]",
    answer: "B"
  },
  {
    questionAr: "في دائرة مسار التيار المستمر الأساسية على مسار غير مشغول (خالٍ)، ما هي حالة مرحل المسار (track relay)؟[cite: 6]",
    questionEn: "In a basic DC track circuit on an unoccupied (clear) track, what is the state of the track relay?[cite: 6]",
    optionsAr: {
      A: "المرحل مسقط (غير نشط)[cite: 6]",
      B: "المرحل ملتقط (منشط بواسطة التيار المتدفق عبر القضبان)[cite: 6]",
      C: "المرحل في حالة قصر الدائرة بواسطة مجموعات العجلات[cite: 6]",
      D: "المرحل يتذبذب بين الفتح والإغلاق[cite: 6]"
    },
    optionsEn: {
      A: "Relay is dropped away (de-energized)[cite: 6]",
      B: "Relay is picked up (energized by current flowing through the rails)[cite: 6]",
      C: "Relay is short-circuited by wheelsets[cite: 6]",
      D: "Relay oscillates between open and closed[cite: 6]"
    },
    hintAr: "في المسار الخالي، يمر تيار البطارية لتنشيط والتقاط المرحل.[cite: 23]",
    hintEn: "On clear track, current flows through the rails to pick up the track relay.[cite: 23]",
    answer: "B"
  },
  {
    questionAr: "ماذا يحدث لمرحل المسار عندما يدخل قطار إلى قسم دائرة مسار التيار المستمر؟[cite: 6]",
    questionEn: "What happens to the track relay when a train enters a DC track circuit block?[cite: 6]",
    optionsAr: {
      A: "يزداد التيار ويلتقط المرحل بشكل أقوى[cite: 6]",
      B: "تقوم عجلات القطار بعمل دائرة قصر (تحويل) للقضبان، متجاوزة المرحل مما يتسبب في إسقاطه[cite: 6]",
      C: "تعكس البطارية قطبيتها[cite: 6]",
      D: "ينفصل المقاوم المحدد[cite: 6]"
    },
    optionsEn: {
      A: "Current increases and the relay picks up higher[cite: 6]",
      B: "Train wheelsets short-circuit (shunt) the rails, bypassing the relay and causing it to drop away[cite: 6]",
      C: "The battery reverses polarity[cite: 6]",
      D: "The limiting resistor disconnects[cite: 6]"
    },
    hintAr: "محاور القطار تحول مسار التيار، مما يؤدي إلى انخفاض التيار وإسقاط المرحل.[cite: 23]",
    hintEn: "Steel axles shunt the rails, causing the track relay to drop.[cite: 23]",
    answer: "B"
  },
  {
    questionAr: "لماذا يعتبر تصميم دائرة المسار التقليدية آمناً ضد الأعطال (fail-safe) مثل الأسلاك المكسورة أو كسور القضبان؟[cite: 6]",
    questionEn: "Why is the traditional track circuit design inherently fail-safe against hardware faults like broken wires or rail breaks?[cite: 6]",
    optionsAr: {
      A: "لأن أي دائرة مفتوحة أو انقطاع طاقة يوقف التيار عن المرحل، مما يؤدي إلى إسقاطه لحالة 'مشغول'[cite: 6]",
      B: "لأن كسور القضبان تؤدي تلقائيًا إلى تشغيل بطارية احتياطية للطوارئ[cite: 6]",
      C: "لأن المرحل مزود بنابض ليبقى ملتقطاً بشكل دائم[cite: 6]",
      D: "لأن التيار يزداد أثناء انقطاع السلك[cite: 6]"
    },
    optionsEn: {
      A: "Because any open circuit, power failure, or rail break stops current to the relay, causing it to drop to the 'occupied' state[cite: 6]",
      B: "Because rail breaks automatically trigger an emergency backup battery[cite: 6]",
      C: "Because the relay is spring-loaded to stay permanently picked up[cite: 6]",
      D: "Because current increases during a wire break[cite: 6]"
    },
    hintAr: "أي انقطاع للتيار يسقط المرحل ويعطي إشارة انشغال كإجراء أمان.[cite: 23]",
    hintEn: "Since clear state needs current, any break drops the relay safely to 'occupied'.[cite: 23]",
    answer: "A"
  },
  {
    questionAr: "بافتراض دائرة مسار تيار مستمر حيث Vs=2.0 V والمقاوم المحدد Rl=2 Ω، ومقاومة حلقة السكة=1 Ω، ومرحل المسار Rr=9 Ω، ما هو تيار مرحل المسار الخالي؟[cite: 6]",
    questionEn: "Given a DC track circuit with Vs=2.0 V, Limiting Resistor Rl=2 Ω, Rail Loop Resistance=1 Ω, and Track Relay Rr=9 Ω, what is the clear track relay current?[cite: 6]",
    optionsAr: {
      A: "80 مللي أمبير[cite: 6]",
      B: "120 مللي أمبير[cite: 6]",
      C: "167 مللي أمبير[cite: 6]",
      D: "220 مللي أمبير[cite: 6]"
    },
    optionsEn: {
      A: "80 mA[cite: 6]",
      B: "120 mA[cite: 6]",
      C: "167 mA[cite: 6]",
      D: "220 mA[cite: 6]"
    },
    hintAr: "المقاومة الكلية هي 12 أوم، والتيار هو الجهد مقسوماً على المقاومة (2/12).[cite: 23]",
    hintEn: "Total R = 12 Ω. Relay current I = 2.0 / 12 = 0.1667 A (167 mA).[cite: 23]",
    answer: "C"
  },
  {
    questionAr: "في الدائرة السابقة (التقاط = 80 mA، إسقاط = 40 mA)، تم تطبيق تحويل محور بمقدار 0.25 أوم عبر نهاية المرحل. ما هو تيار المرحل الناتج؟[cite: 6]",
    questionEn: "In the track circuit above (pick-up = 80 mA, drop-away = 40 mA), an axle shunt of 0.25 Ω is applied across the relay end. What is the resulting relay current?[cite: 6]",
    optionsAr: {
      A: "16.7 مللي أمبير (يسقط المرحل)[cite: 6]",
      B: "45.0 مللي أمبير (يحتفظ المرحل)[cite: 6]",
      C: "80.0 مللي أمبير (يلتقط المرحل)[cite: 6]",
      D: "167 مللي أمبير (بدون تغيير)[cite: 6]"
    },
    optionsEn: {
      A: "16.7 mA (Relay Drops)[cite: 6]",
      B: "45.0 mA (Relay Holds)[cite: 6]",
      C: "80.0 mA (Relay Picks Up)[cite: 6]",
      D: "167 mA (Unchanged)[cite: 6]"
    },
    hintAr: "بعد حساب المقاومة المتوازية وتقسيم الجهد، التيار يصبح أقل من حد الإسقاط.[cite: 23]",
    hintEn: "Calculating parallel resistance gives relay V = 0.15 V, so I = 16.7 mA (Drops).[cite: 23]",
    answer: "A"
  },
  {
    questionAr: "ما هي المقاومة القصوى لتحويلة المحور (حساسية التحويل) التي ستنجح في إسقاط مرحل 9 أوم يتطلب تياراً أقل من 40 مللي أمبير (حيث Vs=2V و Rl+Rrail=3Ω)؟[cite: 7]",
    questionEn: "What is the maximum axle shunt resistance (shunting sensitivity) that will successfully drop a 9 Ω track relay requiring current < 40 mA (where Vs=2V and Rl+Rrail=3Ω)?[cite: 7]",
    optionsAr: {
      A: "0.10 أوم[cite: 7]",
      B: "0.25 أوم[cite: 7]",
      C: "0.71 أوم[cite: 7]",
      D: "1.50 أوم[cite: 7]"
    },
    optionsEn: {
      A: "0.10 Ω[cite: 7]",
      B: "0.25 Ω[cite: 7]",
      C: "0.71 Ω[cite: 7]",
      D: "1.50 Ω[cite: 7]"
    },
    hintAr: "من خلال معادلات الجهد والتيار الموازي، حساسية التحويل تساوي 0.71 أوم.[cite: 23]",
    hintEn: "Parallel Rs calculations yield Rs = 0.71 Ω to reach exactly 40 mA.[cite: 23]",
    answer: "C"
  },
  {
    questionAr: "كيف تؤثر الأمطار الغزيرة وانخفاض مقاومة الحصى على تشغيل دائرة المسار؟[cite: 7]",
    questionEn: "How does heavy rain and low ballast resistance affect track circuit operation?[cite: 7]",
    optionsAr: {
      A: "تزيد من تيار المرحل وتسبب إشارة خلو خاطئة[cite: 7]",
      B: "تخلق تسرباً كهربائياً بين القضبان، مما يقلل من تيار المرحل ويحتمل أن يسبب 'انشغالاً خاطئاً' (فشل آمن)[cite: 7]",
      C: "تزيد من موصلية السكة وتسرع الإشارات[cite: 7]",
      D: "تتسبب في مضاعفة جهد البطارية[cite: 7]"
    },
    optionsEn: {
      A: "It increases relay current and causes a false clear[cite: 7]",
      B: "It creates electrical leakage between rails, reducing relay current and potentially causing a 'false occupied' (right-side failure)[cite: 7]",
      C: "It increases rail conductivity and speeds up signals[cite: 7]",
      D: "It causes the battery voltage to double[cite: 7]"
    },
    hintAr: "يؤدي التسرب عبر الحصى المبلل إلى خفض التيار وإسقاط المرحل بصورة آمنة.[cite: 23]",
    hintEn: "Wet ballast leaks current, dropping the relay to a safe 'false occupied'.[cite: 23]",
    answer: "B"
  },
  {
    questionAr: "في دائرة مسار طولها 1.2 كم (Vs=2V، Rl+Rrail=3Ω، Rr=9Ω)، أدت الأمطار الغزيرة إلى انخفاض مقاومة الحصى إلى 2 أوم-كم (تسرب Rb=1.67 أوم عبر القضبان). ما هو تيار مرحل المسار الخالي؟[cite: 7]",
    questionEn: "In a 1.2 km track circuit (Vs=2V, Rl+Rrail=3Ω, Rr=9Ω), heavy rain drops ballast resistance to 2 Ω-km (leakage Rb=1.67 Ω across rails). What is the clear track relay current?[cite: 7]",
    optionsAr: {
      A: "40 مللي أمبير[cite: 7]",
      B: "71 مللي أمبير[cite: 7]",
      C: "80 مللي أمبير[cite: 7]",
      D: "167 مللي أمبير[cite: 7]"
    },
    optionsEn: {
      A: "40 mA[cite: 7]",
      B: "71 mA[cite: 7]",
      C: "80 mA[cite: 7]",
      D: "167 mA[cite: 7]"
    },
    hintAr: "الجمع المتوازي للمقاومات يؤدي إلى انخفاض تيار المرحل إلى 71 مللي أمبير.[cite: 23]",
    hintEn: "Parallel combination of Rr and Rb results in I_relay = 71 mA.[cite: 23]",
    answer: "B"
  },
  {
    questionAr: "ما هو الحد الأدنى لمقاومة الحصى المطلوب للحفاظ على التقاط المرحل بشكل موثوق (80 مللي أمبير) لدائرة المسار 1.2 كم المذكورة أعلاه؟[cite: 7]",
    questionEn: "What is the minimum ballast resistance required to maintain reliable relay pick-up (80 mA) for the 1.2 km track circuit mentioned above?[cite: 7]",
    optionsAr: {
      A: "1.0 أوم-كم[cite: 7]",
      B: "1.67 أوم-كم[cite: 7]",
      C: "2.50 أوم-كم[cite: 7]",
      D: "5.00 أوم-كم[cite: 7]"
    },
    optionsEn: {
      A: "1.0 Ω-km[cite: 7]",
      B: "1.67 Ω-km[cite: 7]",
      C: "2.50 Ω-km[cite: 7]",
      D: "5.00 Ω-km[cite: 7]"
    },
    hintAr: "للحفاظ على تيار 80 مللي أمبير، يجب أن تكون المقاومة 2.50 أوم-كم.[cite: 23]",
    hintEn: "To maintain 80 mA, ballast resistance must be ≥ 2.50 Ω-km.[cite: 23]",
    answer: "C"
  },
  {
    questionAr: "ما هو المكون المستخدم في السكك الحديدية المكهربة للسماح لتيار عودة جر التيار المتردد بتجاوز فواصل السكك المعزولة (IRJs) مع منع تيارات الإشارات؟[cite: 7]",
    questionEn: "What component is used on electrified railways to allow AC traction return current to bypass Insulated Rail Joints (IRJs) while blocking signaling currents?[cite: 7]",
    optionsAr: {
      A: "محول خافض للجهد[cite: 7]",
      B: "رابط المعاوقة (Impedance bond)[cite: 7]",
      C: "مكثف حظر[cite: 7]",
      D: "عازل جلفاني[cite: 7]"
    },
    optionsEn: {
      A: "Step-down transformer[cite: 7]",
      B: "Impedance bond[cite: 7]",
      C: "Blocking capacitor[cite: 7]",
      D: "Galvanic isolator[cite: 7]"
    },
    hintAr: "يوفر رابط المعاوقة مسارًا لتيار الجر مع مقاومة ترددات الإشارات.[cite: 23]",
    hintEn: "Impedance bonds provide a path for AC/DC traction while blocking signaling frequencies.[cite: 23]",
    answer: "B"
  },
  {
    questionAr: "ما هو القيد الأساسي لفواصل السكك المعزولة (IRJs) الذي أدى إلى تطوير دوائر المسار غير الموصولة على خطوط السكك الحديدية عالية السرعة؟[cite: 8]",
    questionEn: "What primary limitation of Insulated Rail Joints (IRJs) led to the development of jointless track circuits on high-speed rail lines?[cite: 8]",
    optionsAr: {
      A: "الفواصل رخيصة جدًا في التركيب[cite: 8]",
      B: "تمثل الفواصل نقاط ضعف ميكانيكية تحت أحمال القطار الثقيلة، وتتطلب صيانة متكررة، ويمكن أن تعاني من انهيار العزل[cite: 8]",
      C: "الفواصل تمتص الإشارات الراديوية اللاسلكية[cite: 8]",
      D: "الفواصل تمنع القطارات من تجاوز 50 كم/ساعة[cite: 8]"
    },
    optionsEn: {
      A: "IRJs are too cheap to install[cite: 8]",
      B: "IRJs represent mechanical weak points under heavy train loads, require frequent maintenance, and can suffer insulation breakdown[cite: 8]",
      C: "IRJs absorb wireless radio signals[cite: 8]",
      D: "IRJs prevent trains from exceeding 50 km/h[cite: 8]"
    },
    hintAr: "الفواصل المعزولة تتأكل ميكانيكياً بسرعة تحت الأحمال الثقيلة وتحتاج لصيانة.[cite: 23]",
    hintEn: "Glued joints suffer from mechanical wear and risk insulation failure bridging circuits.[cite: 23]",
    answer: "B"
  },
  {
    questionAr: "كيف تحقق دوائر المسار غير الموصولة (التردد الصوتي) الانفصال الكهربائي بين أقسام الكتلة المتجاورة بدون قطع مادي للسكة؟[cite: 8]",
    questionEn: "How do jointless (audio-frequency) track circuits achieve electrical separation between adjacent block sections without physical rail cuts?[cite: 8]",
    optionsAr: {
      A: "باستخدام مفاتيح ميكانيكية تفتح عند اقتراب القطار[cite: 8]",
      B: "من خلال تخصيص ترددات حاملة مختلفة للأقسام المتجاورة واستخدام وحدات LC مضبوطة عند حدود الأقسام[cite: 8]",
      C: "عن طريق طلاء الجزء العلوي من السكة بطلاء عازل[cite: 8]",
      D: "عن طريق إيقاف تشغيل الطاقة بين القطارات العابرة[cite: 8]"
    },
    optionsEn: {
      A: "By using mechanical switches that open when a train approaches[cite: 8]",
      B: "By assigning different carrier frequencies to adjacent sections and using tuned LC stub units at section boundaries[cite: 8]",
      C: "By coating the rail top with insulating paint[cite: 8]",
      D: "By turning off the power between passing trains[cite: 8]"
    },
    hintAr: "تستخدم هذه الدوائر ترددات صوتية مختلفة ومصائد كهربائية عند الحدود.[cite: 24]",
    hintEn: "They use distinct audio carrier frequencies and tuned electrical traps at boundaries.[cite: 24]",
    answer: "B"
  },
  {
    questionAr: "ما هو نموذج دائرة المسار غير الموصولة المنتشر على نطاق واسع في السكك الحديدية الصينية الجديدة عالية السرعة لاكتشاف انشغال القسم ونقل المعلومات؟[cite: 8]",
    questionEn: "Which model of jointless track circuit is widely deployed on new Chinese High-Speed Railways for section occupancy detection and information transmission?[cite: 8]",
    optionsAr: {
      A: "مُعَدَّل الطور 25 هرتز[cite: 8]",
      B: "ZPW-2000A/K[cite: 8]",
      C: "تيار مستمر نبضي مشفر[cite: 8]",
      D: "50 هرتز صناعي[cite: 8]"
    },
    optionsEn: {
      A: "25 Hz Phase-Modulated[cite: 8]",
      B: "ZPW-2000A/K[cite: 8]",
      C: "DC Pulse Coded[cite: 8]",
      D: "50 Hz Industrial[cite: 8]"
    },
    hintAr: "النموذج القياسي المستخدم في الخطوط الصينية عالية السرعة هو سلسلة ZPW.[cite: 24]",
    hintEn: "ZPW-2000A/K jointless track circuits are used on new HSR main-line sections.[cite: 24]",
    answer: "B"
  },
  {
    questionAr: "في أقسام دائرة المسار التي يتجاوز طولها 300 متر، ما هو المكون الذي يتم تركيبه على طول القضبان لتعويض محاثة السكة وضمان انتشار الإشارة؟[cite: 8]",
    questionEn: "On track circuit sections exceeding 300 meters in length, what component is installed along the rails to compensate for rail inductance and ensure signal propagation?[cite: 8]",
    optionsAr: {
      A: "محولات متسلسلة[cite: 8]",
      B: "مكثفات تعويض (مثل ZPW:CBGM)[cite: 8]",
      C: "مقاومات التخميد[cite: 8]",
      D: "منظمات الجهد[cite: 8]"
    },
    optionsEn: {
      A: "Series transformers[cite: 8]",
      B: "Compensation capacitors (e.g., ZPW:CBGM)[cite: 8]",
      C: "Damping resistors[cite: 8]",
      D: "Voltage regulators[cite: 8]"
    },
    hintAr: "تُستخدم المكثفات لتعويض المفاعلة الحثية للقضبان في المسافات الطويلة.[cite: 24]",
    hintEn: "Compensation capacitors are placed to offset rail inductive reactance.[cite: 24]",
    answer: "B"
  },
  {
    questionAr: "ما هو تكوين دائرة المسار المستخدم لمسارات المحطات على الخطوط المحسنة؟[cite: 8]",
    questionEn: "What track circuit configuration is utilized for station tracks on improved lines according to Lecture 2?[cite: 8]",
    optionsAr: {
      A: "50 هرتز مسار واحد تيار مستمر[cite: 8]",
      B: "دوائر مسار مُعَدَّلة الطور 25 هرتز[cite: 8]",
      C: "مستشعرات بصرية نقية[cite: 8]",
      D: "رادار عالي التردد[cite: 8]"
    },
    optionsEn: {
      A: "50 Hz single-rail DC[cite: 8]",
      B: "25 Hz phase-modulated track circuits[cite: 8]",
      C: "Pure optical sensors[cite: 8]",
      D: "High-frequency radar[cite: 8]"
    },
    hintAr: "تستخدم مسارات المحطات نظام تردد 25 هرتز مع تعديل الطور.[cite: 24]",
    hintEn: "Station tracks use 25 Hz phase-modulated track circuits.[cite: 24]",
    answer: "B"
  },
  {
    questionAr: "أي وضع فشل في دائرة المسار يمثل 'فشلاً خاطئ الجانب' خطيراً؟[cite: 9]",
    questionEn: "Which track circuit failure mode represents a dangerous 'wrong-side failure'?[cite: 9]",
    optionsAr: {
      A: "كسر في السكة يؤدي إلى سقوط المرحل[cite: 9]",
      B: "انقطاع التيار الكهربائي يؤدي إلى سقوط المرحل[cite: 9]",
      C: "الصدأ أو أوراق الشجر على القضبان مما يتسبب في تحويلة ضعيفة حيث يعرض القسم المشغول إشارة 'خالٍ'[cite: 9]",
      D: "حصى مبلل يؤدي إلى انخفاض تيار المرحل[cite: 9]"
    },
    optionsEn: {
      A: "Broken rail causing relay to drop[cite: 9]",
      B: "Power cut causing relay to drop[cite: 9]",
      C: "Rust or leaves on rails causing a poor shunt where an occupied section displays 'clear'[cite: 9]",
      D: "Wet ballast dropping relay current[cite: 9]"
    },
    hintAr: "الفشل الذي يظهر المسار خالياً بينما هو مشغول يعرض القطارات لخطر التصادم.[cite: 24]",
    hintEn: "Poor shunting due to rust prevents wheelsets from shorting, leaving the relay picked up ('false clear').[cite: 24]",
    answer: "C"
  },
  {
    questionAr: "ما هو روتين الصيانة الذي يقوم به فنيو الإشارات للتحقق من أن دائرة المسار تكتشف تحويلة القطار بشكل موثوق؟[cite: 9]",
    questionEn: "What maintenance routine is performed by signaling technicians to verify that a track circuit reliably detects a train shunt?[cite: 9]",
    optionsAr: {
      A: "اختبار مقاومة العزل بالميجر[cite: 9]",
      B: "اختبار التحويل القياسي باستخدام شريط مقاومة تحويل معاير عبر القضبان[cite: 9]",
      C: "قياس جهد الكاتيناري[cite: 9]",
      D: "فحص محاذاة السكة بالليزر[cite: 9]"
    },
    optionsEn: {
      A: "Insulation resistance megger test[cite: 9]",
      B: "Standard Shunt Test using a calibrated shunt resistance strap across rails[cite: 9]",
      C: "Catenary voltage measurement[cite: 9]",
      D: "Laser rail alignment check[cite: 9]"
    },
    hintAr: "يطبق الفني مقاومة معايرة لضمان سقوط المرحل بشكل صحيح.[cite: 24]",
    hintEn: "A shunt test applies a fixed resistance across the rails to prove the track relay drops correctly.[cite: 24]",
    answer: "B"
  },
  {
    questionAr: "لماذا يُعتبر 'الفشل خاطئ الجانب' (خلو خاطئ) أكثر أهمية وخطورة من 'الفشل السليم' (انشغال خاطئ)؟[cite: 9]",
    questionEn: "Why is a 'wrong-side failure' (false clear) considered far more critical than a 'right-side failure' (false occupied)?[cite: 9]",
    optionsAr: {
      A: "حالات الفشل السليم تدمر عجلات القطار[cite: 9]",
      B: "الخلو الخاطئ يمكن أن يسمح لقطار بدخول كتلة مشغولة والتسبب في تصادم، في حين أن الانشغال الخاطئ يسبب فقط تأخيرات آمنة[cite: 9]",
      C: "الخلو الخاطئ يزيد من فواتير الكهرباء[cite: 9]",
      D: "حالات الفشل السليم تفصل قواطع المحطات الفرعية الرئيسية[cite: 9]"
    },
    optionsEn: {
      A: "Right-side failures damage train wheels[cite: 9]",
      B: "False clear can allow a train to enter an occupied block and cause a collision, whereas false occupied only causes fail-safe delays[cite: 9]",
      C: "False clear increases electricity bills[cite: 9]",
      D: "Right-side failures trip main substation breakers[cite: 9]"
    },
    hintAr: "الخلو الخاطئ يخفي قطاراً موجوداً، مما يسبب كارثة، بينما الانشغال الخاطئ يوقف القطارات بأمان.[cite: 24]",
    hintEn: "A wrong-side failure compromises safety directly, while right-side failures stop traffic safely.[cite: 24]",
    answer: "B"
  },
  {
    questionAr: "ما هو الإعداد المستخدم في مسارات التحويل المنحنية لضمان إرسال وجمع إشارات موثوق به في دوائر المسار غير الموصولة؟[cite: 9]",
    questionEn: "What setup is used in curved switch tracks to ensure reliable signal transmission and collection in jointless track circuits?[cite: 9]",
    optionsAr: {
      A: "بطاريتان متصلتان على التوالي[cite: 9]",
      B: "خط إرسال واحد بالإضافة إلى خط جمع واحد بالتوازي[cite: 9]",
      C: "نبضات تيار مستمر عالية الجهد[cite: 9]",
      D: "أسلاك سحب ميكانيكية[cite: 9]"
    },
    optionsEn: {
      A: "Two batteries in series[cite: 9]",
      B: "One transmission line plus one collection line in parallel[cite: 9]",
      C: "High-voltage DC pulses[cite: 9]",
      D: "Mechanical pull-wires[cite: 9]"
    },
    hintAr: "يتم استخدام خطين متوازيين للإرسال والجمع.[cite: 24]",
    hintEn: "One transmission line plus one collection line in parallel is specified for curved switch tracks.[cite: 24]",
    answer: "B"
  },
  {
    questionAr: "ما هي الميزة التي تمتلكها دوائر المسار مقارنة بأنظمة عدادات المحاور النقية؟[cite: 9]",
    questionEn: "What advantage do track circuits possess over pure axle counter systems?[cite: 9]",
    optionsAr: {
      A: "دوائر المسار لا تتطلب طاقة كهربائية[cite: 9]",
      B: "دوائر المسار يمكنها الكشف باستمرار عن كسور القضبان ونقل بيانات الإشارة المشفرة إلى القطار[cite: 9]",
      C: "دوائر المسار محصنة تماماً ضد الطقس الرطب[cite: 9]",
      D: "دوائر المسار لا تتطلب صيانة للمسار أبداً[cite: 9]"
    },
    optionsEn: {
      A: "Track circuits do not require electrical power[cite: 9]",
      B: "Track circuits can continuously detect broken rails and convey coded signal data to the train[cite: 9]",
      C: "Track circuits are completely immune to wet weather[cite: 9]",
      D: "Track circuits never require track maintenance[cite: 9]"
    },
    hintAr: "توفر دوائر المسار ميزة الكشف عن أي كسر في السكة وإرسال إشارات مستمرة للقطار.[cite: 24]",
    hintEn: "Track circuits automatically detect rail breaks and transmit continuous cab signal codes.[cite: 24]",
    answer: "B"
  },
  {
    questionAr: "ما هي المدة التي يتم فيها إشغال قسم كشف يبلغ طوله 1500 متر بواسطة قطار طوله 400 متر يسافر بسرعة ثابتة تبلغ 300 كم/ساعة (83.3 م/ث)؟[cite: 10]",
    questionEn: "How long is a 1500 m detection section occupied by a 400 m train traveling at a constant speed of 300 km/h (83.3 m/s)?[cite: 10]",
    optionsAr: {
      A: "18.0 ثانية[cite: 10]",
      B: "20.4 ثانية[cite: 10]",
      C: "22.8 ثانية[cite: 10]",
      D: "28.5 ثانية[cite: 10]"
    },
    optionsEn: {
      A: "18.0 seconds[cite: 10]",
      B: "20.4 seconds[cite: 10]",
      C: "22.8 seconds[cite: 10]",
      D: "28.5 seconds[cite: 10]"
    },
    hintAr: "المسافة الكلية هي 1900 متر، قسّم المسافة على السرعة لتحصل على 22.8 ثانية.[cite: 24]",
    hintEn: "Total distance = 1500 + 400 = 1900 m. Time = 1900 / 83.33 = 22.8 seconds.[cite: 24]",
    answer: "C"
  },
  {
    questionAr: "في موسم تساقط أوراق الشجر الكثيف، ما هو الخطر التشغيلي الذي يؤثر على تحويل دائرة المسار؟[cite: 10]",
    questionEn: "In heavy leaf-fall season, what operational hazard affects track circuit shunting?[cite: 10]",
    optionsAr: {
      A: "تتمدد القضبان وتكسر المفاصل المعزولة[cite: 10]",
      B: "تشكل طبقة الأوراق المسحوقة حاجزًا عازلًا بين العجلات والقضبان، مما يمنع التحويل الكهربائي المناسب[cite: 10]",
      C: "ترتفع درجة حرارة مرحلات المسار[cite: 10]",
      D: "روابط المعاوقة تتشبع بالمغناطيسية[cite: 10]"
    },
    optionsEn: {
      A: "Rails expand and break insulated joints[cite: 10]",
      B: "Crushed leaf film forms an insulating barrier between wheels and rails, preventing proper electrical shunting[cite: 10]",
      C: "Track relays overheat[cite: 10]",
      D: "Impedance bonds saturate with magnetism[cite: 10]"
    },
    hintAr: "تعمل الأوراق المسحوقة كعازل يمنع الاتصال الكهربائي الجيد بين العجلات والقضبان.[cite: 24]",
    hintEn: "Crushed leaves form an insulating layer, preventing low-resistance wheel-rail contact.[cite: 24]",
    answer: "B"
  },
  {
    questionAr: "ما هو المعيار الذي يحدد 'حساسية التحويل' في دائرة المسار؟[cite: 10]",
    questionEn: "What parameter defines the 'shunting sensitivity' of a track circuit?[cite: 10]",
    optionsAr: {
      A: "أقصى مقاومة عبر القضبان ستؤدي إلى خفض تيار المرحل إلى ما دون قيمة الإسقاط[cite: 10]",
      B: "أقصى جهد يمكن أن تخرجه البطارية[cite: 10]",
      C: "طول سلك ربط السكة[cite: 10]",
      D: "وزن القاطرة[cite: 10]"
    },
    optionsEn: {
      A: "The maximum resistance across rails that will reduce relay current below drop-away value[cite: 10]",
      B: "The maximum voltage the battery can output[cite: 10]",
      C: "The length of the rail bond wire[cite: 10]",
      D: "The weight of the locomotive[cite: 10]"
    },
    hintAr: "الحساسية هي أعلى مقاومة تحويل تسقط المرحل بنجاح.[cite: 24]",
    hintEn: "It is the highest shunt resistance that reliably causes the track relay to drop.[cite: 24]",
    answer: "A"
  },
  {
    questionAr: "ما هي الوظيفة الأساسية للمقاوم المحدد في دائرة المسار (RI)؟[cite: 10]",
    questionEn: "What is the primary function of a track circuit limiting resistor (RI)?[cite: 10]",
    optionsAr: {
      A: "تعزيز تيار المرحل أثناء هطول الأمطار الغزيرة[cite: 10]",
      B: "حماية بطارية التغذية من الدائرة القصيرة المباشرة عندما يحول القطار نهاية تغذية المسار وتحديد تيار المسار الخالي[cite: 10]",
      C: "تحويل جهد التيار المستمر إلى ترددات صوتية تيار متردد[cite: 10]",
      D: "تفريغ الكهرباء الساكنة في الحصى[cite: 10]"
    },
    optionsEn: {
      A: "To boost relay current during heavy rain[cite: 10]",
      B: "To protect the feed battery from direct short-circuit when a train shunts the track feed end and to set clear-track current[cite: 10]",
      C: "To convert DC voltage to AC audio frequencies[cite: 10]",
      D: "To discharge static electricity into the ballast[cite: 10]"
    },
    hintAr: "المقاوم يحد من التيار لمنع تلف البطارية عند حدوث دائرة قصر مباشرة.[cite: 24]",
    hintEn: "RI limits short-circuit current from the battery when axles stand across the feed terminals.[cite: 24]",
    answer: "B"
  }
];

window.quizQuestions = [...stage1, ...stage2];