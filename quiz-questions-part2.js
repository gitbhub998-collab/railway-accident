const stage3 = [
  {
    questionAr: "ما هو المبدأ التشغيلي الأساسي الذي يحكم اكتشاف القطار باستخدام نظام عداد المحاور (Axle Counter)؟[cite: 10]",
    questionEn: "What basic operational principle governs train detection using an axle counter system?[cite: 10]",
    optionsAr: {
      A: "قياس انحراف السكة تحت الوزن الثقيل[cite: 10]",
      B: "عد المحاور التي تدخل قسم المسار عند نقطة الدخول وطرح المحاور التي تخرج عند نقطة الخروج[cite: 10]",
      C: "اكتشاف إشارات الراديو التي تبثها كبائن القاطرات[cite: 10]",
      D: "قياس التيار الكهربائي المستمر المتدفق عبر رأس السكة[cite: 10]"
    },
    optionsEn: {
      A: "Measuring rail deflection under heavy weight[cite: 10]",
      B: "Counting axles entering a track section at the entry point and subtracting axles exiting at the exit point[cite: 10]",
      C: "Detecting radio signals broadcast by locomotive cabs[cite: 10]",
      D: "Measuring continuous electrical current flowing through rail head[cite: 10]"
    },
    hintAr: "تقيم عدادات المحاور انشغال القسم عن طريق التحقق من: عدد الدخول ناقص عدد الخروج.[cite: 25]",
    hintEn: "Axle counters evaluate section occupancy by checking: In-Count minus Out-Count.[cite: 25]",
    answer: "B"
  },
  {
    questionAr: "أين يتم تركيب مستشعرات العجلات (الكواشف) في البنية التحتية للمسار؟[cite: 11]",
    questionEn: "Where are wheel sensors (detectors) mounted on the track infrastructure?[cite: 11]",
    optionsAr: {
      A: "تحت العوارض الخرسانية[cite: 11]",
      B: "مثبتة مباشرة على شبكة (عنق) السكة الحديدية بدون أجزاء متحركة[cite: 11]",
      C: "فوق سلك الكاتيناري[cite: 11]",
      D: "داخل كابينة الإشارات في المحطة[cite: 11]"
    },
    optionsEn: {
      A: "Underneath concrete sleepers[cite: 11]",
      B: "Clamped directly to the rail web without moving parts[cite: 11]",
      C: "On top of the catenary wire[cite: 11]",
      D: "Inside the station signaling cabinet[cite: 11]"
    },
    hintAr: "المستشعرات عبارة عن رؤوس حثية غير تلامسية يتم تثبيتها بقوة على شبكة السكة.[cite: 25]",
    hintEn: "Wheel sensors are non-contact inductive heads clamped directly to the rail web.[cite: 25]",
    answer: "B"
  },
  {
    questionAr: "ما هي الخاصية الفيزيائية في عجلة القطار المار التي يكتشفها مستشعر العجلة الحثي؟[cite: 11]",
    questionEn: "What physical feature of a passing train wheel is detected by an inductive wheel sensor?[cite: 11]",
    optionsAr: {
      A: "مداس الإطار المطاطي[cite: 11]",
      B: "الشفة المعدنية للعجلة التي تمر عبر المجال المغناطيسي للمستشعر[cite: 11]",
      C: "درجة حرارة صندوق شحم المحور[cite: 11]",
      D: "قطر قرص الفرامل[cite: 11]"
    },
    optionsEn: {
      A: "The rubber tire tread[cite: 11]",
      B: "The metallic wheel flange passing through the sensor's magnetic field[cite: 11]",
      C: "The axle grease box temperature[cite: 11]",
      D: "The brake disc diameter[cite: 11]"
    },
    hintAr: "يكتشف المستشعر الاضطراب في المجال المغناطيسي الناتج عن مرور الشفة الفولاذية للعجلة.[cite: 25]",
    hintEn: "Inductive wheel sensors detect the disturbance in magnetic field caused by the steel wheel flange.[cite: 25]",
    answer: "B"
  },
  {
    questionAr: "كيف تحدد مستشعرات العجلات ذات الملف المزدوج (الملف A والملف B) اتجاه العجلة المارة؟[cite: 11]",
    questionEn: "How do double-coil wheel sensors (Coil A and Coil B) determine the direction of a passing wheel?[cite: 11]",
    optionsAr: {
      A: "عن طريق قياس وزن العجلة[cite: 11]",
      B: "عن طريق تحليل التسلسل الزمني لنبضات الجهد المستحثة (النبضة A قبل النبضة B مقابل النبضة B قبل النبضة A)[cite: 11]",
      C: "عن طريق قياس درجة حرارة العجلة[cite: 11]",
      D: "عن طريق فحص قطبية بطارية المسار[cite: 11]"
    },
    optionsEn: {
      A: "By measuring wheel weight[cite: 11]",
      B: "By analyzing the time sequence of induced voltage pulses (Pulse A before Pulse B vs Pulse B before Pulse A)[cite: 11]",
      C: "By measuring wheel temperature[cite: 11]",
      D: "By checking the polarity of the track battery[cite: 11]"
    },
    hintAr: "الفرق الزمني الناتج عن التباعد المادي بين الملفين يحدد اتجاه الحركة.[cite: 25]",
    hintEn: "The physical offset causes a phase/time difference. Pulse A before B indicates forward motion.[cite: 25]",
    answer: "B"
  },
  {
    questionAr: "لماذا يعتبر الكشف عن الاتجاه أمراً ضرورياً لمستشعرات الدخول/الخروج الخاصة بعداد المحاور؟[cite: 11]",
    questionEn: "Why is directional detection essential for axle counter entry/exit sensors?[cite: 11]",
    optionsAr: {
      A: "لحساب عدد الركاب في القطار[cite: 11]",
      B: "لزيادة (+1) أو إنقاص (-1) عداد المُقَيِّم بشكل صحيح إذا توقف القطار وتراجع فوق حدود المستشعر[cite: 11]",
      C: "لضبط سطوع إشارة المسار[cite: 11]",
      D: "لقياس تمدد السكة[cite: 11]"
    },
    optionsEn: {
      A: "To calculate train passenger count[cite: 11]",
      B: "To correctly increment (+1) or decrement (-1) the evaluator counter if a train stops and reverses over a sensor boundary[cite: 11]",
      C: "To adjust track signal brightness[cite: 11]",
      D: "To measure rail expansion[cite: 11]"
    },
    hintAr: "الاستشعار الاتجاهي يضمن إنقاص العداد عند تراجع العجلات لتجنب أخطاء الانشغال الخاطئ.[cite: 25]",
    hintEn: "Directional sensing ensures reversed wheels decrement counts, preventing false occupancy errors.[cite: 25]",
    answer: "B"
  },
  {
    questionAr: "قطار EMU مكون من 8 عربات (4 محاور لكل عربة) يدخل إلى قسم عداد المحاور. يحصي مستشعر الدخول جميع المحاور. ما هو عدد الدخول؟[cite: 11]",
    questionEn: "An 8-car EMU train (4 axles per car) enters an axle counter section. The entry sensor counts all axles. What is the entry count?[cite: 11]",
    optionsAr: {
      A: "16 محورًا[cite: 11]",
      B: "24 محورًا[cite: 11]",
      C: "32 محورًا[cite: 11]",
      D: "64 محورًا[cite: 11]"
    },
    optionsEn: {
      A: "16 axles[cite: 11]",
      B: "24 axles[cite: 11]",
      C: "32 axles[cite: 11]",
      D: "64 axles[cite: 11]"
    },
    hintAr: "إجمالي المحاور = 8 عربات مضروبة في 4 محاور للعربة الواحدة.[cite: 25]",
    hintEn: "Total axles = 8 cars * 4 axles/car = 32 axles.[cite: 25]",
    answer: "C"
  },
  {
    questionAr: "إذا كان مستشعر الخروج للقسم المذكور أعلاه يحصي 30 محورًا فقط عند مغادرة القطار، فما هي الحالة التي سيعرضها المُقَيِّم؟[cite: 12]",
    questionEn: "If the exit sensor of the section above counts only 30 axles as the train leaves, what state will the evaluator show?[cite: 12]",
    optionsAr: {
      A: "خالٍ (0 محاور متبقية)[cite: 12]",
      B: "مشغول (محوران متبقيان في القسم)[cite: 12]",
      C: "خطأ / يتطلب إعادة ضبط فورية[cite: 12]",
      D: "النظام متوقف[cite: 12]"
    },
    optionsEn: {
      A: "Clear (0 axles remaining)[cite: 12]",
      B: "Occupied (2 axles remaining in section)[cite: 12]",
      C: "Fault / Reset required immediately[cite: 12]",
      D: "System off[cite: 12]"
    },
    hintAr: "الحساب: 32 دخلاً ناقص 30 خروجًا = محورين متبقيين، مما يجعل القسم في حالة 'مشغول'.[cite: 25]",
    hintEn: "Evaluator calculation: 32 in - 30 out = 2 axles remaining -> Section marked Occupied.[cite: 25]",
    answer: "B"
  },
  {
    questionAr: "في السيناريو الذي يتبقى فيه محوران غير معدودين بسبب خطأ في عد المستشعر، ماذا يحدث إذا دخل قطار EMU ثانٍ مكون من 8 عربات بدون إعادة ضبط النظام؟[cite: 12]",
    questionEn: "In the scenario where 2 axles remain uncounted due to sensor miscount, what happens if a second 8-car EMU enters without a system reset?[cite: 12]",
    optionsAr: {
      A: "يتم اكتشاف القطار الثاني بشكل طبيعي لكن القسم يظل مشغولاً طوال الوقت[cite: 12]",
      B: "يقوم العداد بمسح نفسه تلقائيًا[cite: 12]",
      C: "تتحول الإشارات إلى اللون الأخضر على الفور[cite: 12]",
      D: "ينطفئ مستشعر الدخول[cite: 12]"
    },
    optionsEn: {
      A: "The second train is detected normally but section remains occupied throughout[cite: 12]",
      B: "The counter automatically clears itself[cite: 12]",
      C: "The signals clear to green immediately[cite: 12]",
      D: "The entry sensor turns off[cite: 12]"
    },
    hintAr: "يظل القسم مقفلاً في حالة 'مشغول' لأن صافي العدد لا يساوي الصفر، مما يحمي الخط.[cite: 25]",
    hintEn: "The section remains latched Occupied because net count is not zero, protecting the line.[cite: 25]",
    answer: "A"
  },
  {
    questionAr: "في مستشعر العجلة الحثي، يتم الفصل بين الملف A والملف B بمسافة 50 مم (0.05 م). تمر عجلة بالملف A عند الزمن t=0 وبالملف B عند الزمن t=2.5 مللي ثانية (0.0025 ثانية). ما هي سرعة القطار؟[cite: 12]",
    questionEn: "In an inductive wheel sensor, Coil A and Coil B are separated by 50 mm (0.05 m). A wheel passes Coil A at t=0 and Coil B at t=2.5 ms (0.0025 s). What is the train speed?[cite: 12]",
    optionsAr: {
      A: "36 كم/ساعة[cite: 12]",
      B: "50 كم/ساعة[cite: 12]",
      C: "72 كم/ساعة[cite: 12]",
      D: "100 كم/ساعة[cite: 12]"
    },
    optionsEn: {
      A: "36 km/h[cite: 12]",
      B: "50 km/h[cite: 12]",
      C: "72 km/h[cite: 12]",
      D: "100 km/h[cite: 12]"
    },
    hintAr: "السرعة = المسافة / الزمن = 0.05 م / 0.0025 ث = 20 م/ث، وبتحويلها إلى كم/ساعة تصبح 72.[cite: 25]",
    hintEn: "Speed v = 0.05 m / 0.0025 s = 20 m/s. Converting to km/h: 20 * 3.6 = 72 km/h.[cite: 25]",
    answer: "C"
  },
  {
    questionAr: "بالنسبة لنفس مستشعر العجلة (بتباعد 50 مم)، ما هي الفترة الزمنية At التي تفصل بين النبضات من الملف A والملف B عندما يمر قطار عالي السرعة بسرعة 350 كم/ساعة (97.22 م/ث)؟[cite: 12]",
    questionEn: "For the same wheel sensor (50 mm spacing), what time interval At separates the pulses from Coil A and Coil B when a high-speed train passes at 350 km/h (97.22 m/s)?[cite: 12]",
    optionsAr: {
      A: "0.10 مللي ثانية[cite: 12]",
      B: "0.51 مللي ثانية[cite: 12]",
      C: "1.25 مللي ثانية[cite: 12]",
      D: "5.00 مللي ثانية[cite: 12]"
    },
    optionsEn: {
      A: "0.10 ms[cite: 12]",
      B: "0.51 ms[cite: 12]",
      C: "1.25 ms[cite: 12]",
      D: "5.00 ms[cite: 12]"
    },
    hintAr: "الزمن = 0.05 متر مقسوماً على 97.22 م/ث = 0.51 مللي ثانية.[cite: 25]",
    hintEn: "Time = 0.05 m / 97.22 m/s = 0.000514 s = 0.51 ms.[cite: 25]",
    answer: "B"
  },
  {
    questionAr: "ما هو متطلب قدرة المعالجة الذي يفرضه الفاصل الزمني للنبضة البالغ 0.51 مللي ثانية على إلكترونيات مستشعر عجلة عداد المحاور؟[cite: 12]",
    questionEn: "What processing capability requirement does the 0.51 ms pulse interval impose on axle counter wheel sensor electronics?[cite: 12]",
    optionsAr: {
      A: "يجب أن تعالج الإلكترونيات نقرات المرحل الميكانيكية[cite: 12]",
      B: "يجب أن تقوم إلكترونيات المُقَيِّم عالية السرعة بحل وتمييز النبضات التي تصل بفاصل زمني يبلغ حوالي 0.5 مللي ثانية دون تفويت أي عدد[cite: 12]",
      C: "يجب أن يعمل النظام على طاقة تيار متردد 50 هرتز[cite: 12]",
      D: "يجب تبريد المستشعرات بالماء[cite: 12]"
    },
    optionsEn: {
      A: "The electronics must process mechanical relay clicks[cite: 12]",
      B: "The high-speed evaluator electronics must resolve and differentiate pulses arriving only ~0.5 ms apart without missing counts[cite: 12]",
      C: "The system must operate on 50 Hz AC power[cite: 12]",
      D: "The sensors must be water-cooled[cite: 12]"
    },
    hintAr: "تتطلب حركة القطارات عالية السرعة استجابة حثية سريعة ومعالجة رقمية سريعة للنبضات.[cite: 25]",
    hintEn: "High-speed train travel requires fast inductive response and high-rate digital pulse processing.[cite: 25]",
    answer: "B"
  },
  {
    questionAr: "ما هي الميزة الرئيسية لعدادات المحاور مقارنة بدوائر المسار التقليدية في أقسام السكك الحديدية الطويلة والأنفاق؟[cite: 13]",
    questionEn: "What key advantage do axle counters have over traditional track circuits in long rail sections and tunnels?[cite: 13]",
    optionsAr: {
      A: "عدادات المحاور لا تتطلب طاقة كهربائية[cite: 13]",
      B: "عدادات المحاور لا تتطلب فواصل سكك حديدية معزولة ولا تتأثر بانخفاض مقاومة الحصى أو الظروف الرطبة[cite: 13]",
      C: "يمكن لعدادات المحاور نقل فيديو عالي الدقة للسائق[cite: 13]",
      D: "تقوم عدادات المحاور بإصلاح القضبان المكسورة تلقائيًا[cite: 13]"
    },
    optionsEn: {
      A: "Axle counters do not require electrical power[cite: 13]",
      B: "Axle counters do not require insulated rail joints and are unaffected by low ballast resistance or wet conditions[cite: 13]",
      C: "Axle counters can transmit high-definition video to the driver[cite: 13]",
      D: "Axle counters repair broken rails automatically[cite: 13]"
    },
    hintAr: "تستقل عدادات المحاور عن مقاومة الحصى بين القضبان، مما يجعلها مثالية للأنفاق والمناطق الرطبة.[cite: 25]",
    hintEn: "Axle counters are independent of rail-to-rail ballast resistance, ideal for long blocks and wet tunnels.[cite: 25]",
    answer: "B"
  },
  {
    questionAr: "ما هو العيب التشغيلي الرئيسي لعدادات المحاور مقارنة بدوائر المسار؟[cite: 13]",
    questionEn: "What major operational disadvantage do axle counters have compared to track circuits?[cite: 13]",
    optionsAr: {
      A: "لا يمكن لعدادات المحاور اكتشاف القضبان المكسورة[cite: 13]",
      B: "عدادات المحاور مكلفة في التنظيف[cite: 13]",
      C: "عدادات المحاور تعمل فقط مع قطارات الشحن[cite: 13]",
      D: "عدادات المحاور تسبب تآكلًا في رأس السكة[cite: 13]"
    },
    optionsEn: {
      A: "Axle counters cannot detect broken rails[cite: 13]",
      B: "Axle counters are expensive to clean[cite: 13]",
      C: "Axle counters only work for freight trains[cite: 13]",
      D: "Axle counters cause rail head wear[cite: 13]"
    },
    hintAr: "لأنها تفحص نقاط البداية والنهاية فقط، فلا يمكنها اكتشاف كسر مادي في السكة بين المستشعرات.[cite: 25]",
    hintEn: "Because they only check endpoints, they cannot detect a physical break in the rail between sensors.[cite: 25]",
    answer: "A"
  },
  {
    questionAr: "بعد انقطاع التيار الكهربائي أو حدوث خلل في المستشعر يترك عداد المحاور في حالة غير مؤكدة، ما هو إجراء السلامة الذي يجب تنفيذه قبل إعطاء إشارة الخلو؟[cite: 13]",
    questionEn: "Following a power outage or sensor glitch that leaves an axle counter in an unverified state, what safety procedure must be executed before clearing signals?[cite: 13]",
    optionsAr: {
      A: "إعادة ضبط النظام وإجراء تمشيط تعاوني للقطار / إجراء التحقق[cite: 13]",
      B: "زيادة جهد بطارية دائرة المسار[cite: 13]",
      C: "استبدال مشابك شبكة السكة[cite: 13]",
      D: "تجاوز منطق التعشيق بشكل دائم[cite: 13]"
    },
    optionsEn: {
      A: "System Reset and Cooperative Sweep Train / Verification procedure[cite: 13]",
      B: "Increasing track circuit battery voltage[cite: 13]",
      C: "Replacing the rail web clamps[cite: 13]",
      D: "Bypassing interlocking logic permanently[cite: 13]"
    },
    hintAr: "تتطلب إعادة ضبط عداد المحاور إجراءات إدارية صارمة وقطار تمشيط للتأكد من خلو المسار فعليًا.[cite: 25]",
    hintEn: "Requires strict logged administrative procedures and often a sweep train to verify the block is physically clear.[cite: 25]",
    answer: "A"
  },
  {
    questionAr: "ما هو الجهاز الذي يشكل عنصر الاستشعار المرفق بالسكة في نظام عداد المحاور؟[cite: 13]",
    questionEn: "What device forms the sensing element attached to the rail for an axle counter system?[cite: 13]",
    optionsAr: {
      A: "مرحل تيار مستمر (DC Relay)[cite: 13]",
      B: "مستشعر العجلة (رأس مستشعر التقارب)[cite: 13]",
      C: "رابط المعاوقة (Impedance Bond)[cite: 13]",
      D: "رافعة دواسة ميكانيكية (Mechanical Treadle Lever)[cite: 13]"
    },
    optionsEn: {
      A: "DC Relay[cite: 13]",
      B: "Wheel Sensor (Proximity Sensor Head)[cite: 13]",
      C: "Impedance Bond[cite: 13]",
      D: "Mechanical Treadle Lever[cite: 13]"
    },
    hintAr: "يعتبر مستشعر التقارب هو المكون الحساس الموجود بجانب المسار.[cite: 26]",
    hintEn: "The wheel sensor or proximity sensor head is the wayside sensing component.[cite: 26]",
    answer: "B"
  },
  {
    questionAr: "لماذا تستفيد الانحيازات الجانبية الخاملة ذات رؤوس السكك الصدئة من استبدال دوائر المسار بعدادات المحاور؟[cite: 13]",
    questionEn: "Why do idle sidings with rusty rail heads benefit from replacing track circuits with axle counters?[cite: 13]",
    optionsAr: {
      A: "السكك الصدئة تحسن موصلية التيار المستمر[cite: 13]",
      B: "يشكل الصدأ طبقة عازلة تسبب فشل تحويل دائرة المسار؛ بينما تكتشف عدادات المحاور حواف العجلات مغناطيسيًا بغض النظر عن الصدأ[cite: 13]",
      C: "تقوم عدادات المحاور بتنظيف الصدأ من القضبان[cite: 13]",
      D: "تحترق دوائر المسار على الانحيازات الجانبية الخاملة[cite: 13]"
    },
    optionsEn: {
      A: "Rusty rails improve DC conductivity[cite: 13]",
      B: "Rust forms an insulating layer that causes track circuit shunting failure; axle counters detect wheel flanges magnetically regardless of rust[cite: 13]",
      C: "Axle counters clean rust off rails[cite: 13]",
      D: "Track circuits burn out on idle sidings[cite: 13]"
    },
    hintAr: "الصدأ يمنع الاتصال الكهربائي الجيد لدوائر المسار، في حين أن عدادات المحاور تعمل بالحث المغناطيسي وتتجاوز هذه المشكلة.[cite: 26]",
    hintEn: "Axle counters bypass rust shunting problems by detecting flange metal inductively.[cite: 26]",
    answer: "B"
  },
  {
    questionAr: "في مُقَيِّم عداد المحاور، ما هو الشرط الذي يجب استيفاؤه لتغيير حالة قسم من 'مشغول' إلى 'خالٍ'؟[cite: 14]",
    questionEn: "In an axle counter evaluator, what condition must be satisfied to change a section status from 'Occupied' to 'Clear'?[cite: 14]",
    optionsAr: {
      A: "عدد الدخول يساوي عدد الخروج (صافي عدد المحاور = 0)[cite: 14]",
      B: "عدد الدخول أكبر من عدد الخروج[cite: 14]",
      C: "يصل عدد الخروج إلى 100[cite: 14]",
      D: "ينخفض جهد البطارية إلى أقل من 12 فولت[cite: 14]"
    },
    optionsEn: {
      A: "In-Count equals Out-Count (Net axle count = 0)[cite: 14]",
      B: "In-Count is greater than Out-Count[cite: 14]",
      C: "Out-Count reaches 100[cite: 14]",
      D: "Battery voltage drops below 12V[cite: 14]"
    },
    hintAr: "يتم إثبات خلو القسم فقط عندما تخرج كل المحاور التي دخلت.[cite: 26]",
    hintEn: "When all entering axles have exited (In-Out=0), the evaluator proves section clearance.[cite: 26]",
    answer: "A"
  },
  {
    questionAr: "ما هو نوع نظام كشف القطارات الذي يجمع بين عدادات المحاور ودوائر المسار للاستفادة من مزايا كلا النظامين؟[cite: 14]",
    questionEn: "What type of train detection combines both axle counters and track circuits to leverage the advantages of both systems?[cite: 14]",
    optionsAr: {
      A: "نظام الكشف الهجين (Hybrid detection system)[cite: 14]",
      B: "نظام يدوي بالتيار المستمر[cite: 14]",
      C: "نظام الحلقة الهوائية[cite: 14]",
      D: "نظام الكاميرا البصرية[cite: 14]"
    },
    optionsEn: {
      A: "Hybrid detection system[cite: 14]",
      B: "DC manual system[cite: 14]",
      C: "Pneumatic loop system[cite: 14]",
      D: "Optical camera system[cite: 14]"
    },
    hintAr: "الأنظمة الهجينة تستخدم دوائر المسار للكسور وعدادات المحاور للكشف الموثوق للحدود.[cite: 26]",
    hintEn: "Hybrid systems use track circuits for continuous broken rail/coding and axle counters for boundary detection resilience.[cite: 26]",
    answer: "A"
  },
  {
    questionAr: "ما هو المكون الذي يعالج النبضات الكهربائية المستلمة من مستشعرات عجلات الدخول والخروج ويحتفظ بالعدد الرقمي للمحاور؟[cite: 14]",
    questionEn: "Which component processes the electrical pulses received from entry and exit wheel sensors and maintains the digital axle tally?[cite: 14]",
    optionsAr: {
      A: "محطة الإرسال المركزية[cite: 14]",
      B: "مُقَيِّم عداد المحاور (Axle Counter Evaluator)[cite: 14]",
      C: "محرك آلة التحويل[cite: 14]",
      D: "وحدة BTM[cite: 14]"
    },
    optionsEn: {
      A: "Central Dispatching Terminal[cite: 14]",
      B: "Axle Counter Evaluator[cite: 14]",
      C: "Point Machine Motor[cite: 14]",
      D: "BTM Module[cite: 14]"
    },
    hintAr: "وحدة المُقَيِّم هي المسؤولة عن عد النبضات وتقييم الاتجاه وإرسال الحالة.[cite: 26]",
    hintEn: "The Evaluator unit counts pulses, performs direction evaluation, and outputs status.[cite: 26]",
    answer: "B"
  },
  {
    questionAr: "ما هو متطلب تركيب مستشعر العجلة الذي يضمن اكتشاف الشفة بشكل موثوق دون المخاطرة بحدوث تلف ميكانيكي من العجلات المارة؟[cite: 14]",
    questionEn: "What wheel sensor mounting requirement ensures reliable flange detection without risking mechanical damage from passing wheels?[cite: 14]",
    optionsAr: {
      A: "لحام المستشعر مباشرة على مداس السكة[cite: 14]",
      B: "تثبيت رأس المستشعر بدقة على شبكة (عنق) السكة على ارتفاع محدد أسفل رأس السكة[cite: 14]",
      C: "دفن المستشعر مترًا واحدًا تحت الحصى[cite: 14]",
      D: "إرفاق المستشعر بصندوق محور عجلة القطار[cite: 14]"
    },
    optionsEn: {
      A: "Welding the sensor directly to the rail tread[cite: 14]",
      B: "Clamping the sensor head precisely to the rail web at a designated height below the rail head[cite: 14]",
      C: "Burying the sensor 1 meter below ballast[cite: 14]",
      D: "Attaching the sensor to the train wheel axle box[cite: 14]"
    },
    hintAr: "يُثبت المستشعر على العنق ليقوم باكتشاف الشفة دون أن يتلامس معها ويتعرض للكسر.[cite: 26]",
    hintEn: "Sensors are clamped to the web so the flange passes within the high-sensitivity zone without touching the housing.[cite: 26]",
    answer: "B"
  },
  {
    questionAr: "كيف يكتشف مستشعر العجلة الحثي عجلة بدون اتصال مادي؟[cite: 14]",
    questionEn: "How does an inductive wheel sensor detect a wheel without physical contact?[cite: 14]",
    optionsAr: {
      A: "عن طريق إرسال موجات صوتية فوق صوتية[cite: 14]",
      B: "عن طريق اكتشاف التغيرات في محاثة الملف وسعة المجال الكهرومغناطيسي الناتجة عن مرور الشفة الفولاذية للعجلة[cite: 14]",
      C: "عن طريق قياس الحرارة تحت الحمراء من الفرامل[cite: 14]",
      D: "عن طريق استقبال إشارات راديوية من محور العجلة[cite: 14]"
    },
    optionsEn: {
      A: "By sending ultrasonic sound waves[cite: 14]",
      B: "By detecting changes in coil inductance and electromagnetic field amplitude caused by the passage of the steel wheel flange[cite: 14]",
      C: "By measuring infrared heat from brakes[cite: 14]",
      D: "By receiving radio signals from the wheel hub[cite: 14]"
    },
    hintAr: "تشوه الشفة الفولاذية المجال المغناطيسي عالي التردد الناتج عن ملفات المستشعر.[cite: 26]",
    hintEn: "The steel flange distorts the high-frequency alternating magnetic field generated by the sensor coils.[cite: 26]",
    answer: "B"
  },
  {
    questionAr: "ما هو متطلب سجل السلامة الذي يجب الحفاظ عليه في كل مرة يقوم فيها مهندس الصيانة بإعادة ضبط قسم عداد المحاور؟[cite: 15]",
    questionEn: "What safety log requirement must be maintained every time a maintenance engineer resets an axle counter section?[cite: 15]",
    optionsAr: {
      A: "تسجيل وتوثيق إعادة الضبط وفقًا لبروتوكولات السلامة[cite: 15]",
      B: "استبدال جميع كابلات المسار[cite: 15]",
      C: "تعطيل إرسال CTC[cite: 15]",
      D: "تغيير عدسات إشارة LED[cite: 15]"
    },
    optionsEn: {
      A: "Reset logging and documentation according to safety protocols[cite: 15]",
      B: "Replacing all track cables[cite: 15]",
      C: "Disabling CTC dispatching[cite: 15]",
      D: "Changing the LED signal lenses[cite: 15]"
    },
    hintAr: "يجب تسجيل كل عملية إعادة ضبط لعداد المحاور في سجلات إدارية صارمة.[cite: 26]",
    hintEn: "Every axle counter reset must be logged with strict administrative records.[cite: 26]",
    answer: "A"
  },
  {
    questionAr: "إذا مر قطار EMU مكون من 10 عربات مع 4 محاور لكل عربة عبر مستشعر دخول، فإن عدد الدخول = 40. فإذا خرج بالكامل، فما هو عدد الخروج؟[cite: 15]",
    questionEn: "If a 10-car EMU with 4 axles per car passes an entry sensor, entry count = 40. It exits fully. What is the exit count?[cite: 15]",
    optionsAr: {
      A: "38 محورًا[cite: 15]",
      B: "40 محورًا[cite: 15]",
      C: "42 محورًا[cite: 15]",
      D: "80 محورًا[cite: 15]"
    },
    optionsEn: {
      A: "38 axles[cite: 15]",
      B: "40 axles[cite: 15]",
      C: "42 axles[cite: 15]",
      D: "80 axles[cite: 15]"
    },
    hintAr: "الخروج الكامل يعني أن جميع المحاور التي دخلت قد خرجت، أي 40.[cite: 26]",
    hintEn: "Full exit means exit count = 40.[cite: 26]",
    answer: "B"
  },
  {
    questionAr: "في حسابات توقيت مستشعر العجلة، إذا كانت السرعة v = 20 م/ث ومسافة الملف d = 0.05 م، فما هو الفاصل الزمني للنبضة t؟[cite: 15]",
    questionEn: "In wheel sensor timing calculations, if speed v = 20 m/s and coil distance d = 0.05 m, what is the pulse time interval t?[cite: 15]",
    optionsAr: {
      A: "0.001 ثانية (1 مللي ثانية)[cite: 15]",
      B: "0.0025 ثانية (2.5 مللي ثانية)[cite: 15]",
      C: "0.005 ثانية (5 مللي ثانية)[cite: 15]",
      D: "0.010 ثانية (10 مللي ثانية)[cite: 15]"
    },
    optionsEn: {
      A: "0.001 s (1 ms)[cite: 15]",
      B: "0.0025 s (2.5 ms)[cite: 15]",
      C: "0.005 s (5 ms)[cite: 15]",
      D: "0.010 s (10 ms)[cite: 15]"
    },
    hintAr: "الزمن يساوي المسافة مقسومة على السرعة (0.05 / 20).[cite: 26]",
    hintEn: "t = d/v = 0.05/20 = 0.0025 s = 2.5 ms.[cite: 26]",
    answer: "B"
  },
  {
    questionAr: "ما هو جهاز الكشف البسيط الآخر الذي يستخدم نقاط تلامس ميكانيكية أو إلكترونية يتم تشغيلها بواسطة العجلات المارة؟[cite: 15]",
    questionEn: "What other simple detection device utilizes mechanical or electronic contacts triggered by passing wheels?[cite: 15]",
    optionsAr: {
      A: "حلقة حثية (Inductive Loop)[cite: 15]",
      B: "دواسة (Treadle)[cite: 15]",
      C: "رابط المعاوقة (Impedance Bond)[cite: 15]",
      D: "باليز (Balise)[cite: 15]"
    },
    optionsEn: {
      A: "Inductive Loop[cite: 15]",
      B: "Treadle[cite: 15]",
      C: "Impedance Bond[cite: 15]",
      D: "Balise[cite: 15]"
    },
    hintAr: "الدواسات هي وصلات ميكانيكية أو إلكترونية تُستخدم لاكتشاف العجلات في تطبيقات بسيطة.[cite: 26]",
    hintEn: "Treadles are mechanical or electronic wheel contacts used for simple point detection.[cite: 26]",
    answer: "B"
  }
];

const stage4 = [
  {
    questionAr: "ما هي الألوان الأساسية لإشارات الضوء الملونة المرئية ومعانيها الموحدة؟[cite: 15]",
    questionEn: "What are the primary visual color-light signal aspects and their standardized meanings?[cite: 15]",
    optionsAr: {
      A: "الأحمر (تقدم)، الأصفر (توقف)، الأخضر (احذر)[cite: 15]",
      B: "الأحمر (توقف)، الأصفر (تقدم مستعدًا للتوقف عند الإشارة التالية)، الأخضر (تقدم، الخط خالٍ)[cite: 15]",
      C: "الأزرق (توقف)، الأبيض (تقدم)، الأحمر (تحذير)[cite: 15]",
      D: "الأخضر (توقف)، الأصفر (خالٍ)، الأحمر (عكس)[cite: 15]"
    },
    optionsEn: {
      A: "Red (Proceed), Yellow (Stop), Green (Caution)[cite: 15]",
      B: "Red (Stop), Yellow (Proceed prepared to stop at next signal), Green (Proceed, line clear)[cite: 15]",
      C: "Blue (Stop), White (Proceed), Red (Warning)[cite: 15]",
      D: "Green (Stop), Yellow (Clear), Red (Reverse)[cite: 15]"
    },
    hintAr: "هذا هو المعيار العالمي الأساسي لمعاني ألوان إشارات السكك الحديدية.[cite: 26]",
    hintEn: "Standard light signal aspects: Red = Stop, Yellow = Proceed prepared to stop, Green = Proceed line clear.[cite: 26]",
    answer: "B"
  },
  {
    questionAr: "ماذا يشير مظهر 'الأصفر المزدوج' أو 'الأصفر والأخضر' في خطوط الإشارة ذات المظاهر الأربعة؟[cite: 16]",
    questionEn: "What does a 'Double Yellow' or 'Yellow-Green' aspect signify on four-aspect signal lines?[cite: 16]",
    optionsAr: {
      A: "توقف فوراً[cite: 16]",
      B: "تقدم؛ قد تُظهر الإشارة التالية مظهر التقدم (إشارة تحذير مسبق)[cite: 16]",
      C: "يسمح بالتحويل فقط[cite: 16]",
      D: "قيد سرعة طارئ في الأمام[cite: 16]"
    },
    optionsEn: {
      A: "Stop immediately[cite: 16]",
      B: "Proceed; next signal may show a proceed aspect (pre-warning signal)[cite: 16]",
      C: "Shunting permitted only[cite: 16]",
      D: "Emergency speed restriction ahead[cite: 16]"
    },
    hintAr: "يعطي الأصفر المزدوج تحذيراً مبكراً للسائق بأن الإشارة التي تليه ستكون صفراء.[cite: 26]",
    hintEn: "In 4-aspect signaling, double yellow gives advanced warning that the next signal is showing yellow.[cite: 26]",
    answer: "B"
  },
  {
    questionAr: "ما هي ميزة استهلاك الطاقة التي تقدمها وحدات إشارة LED مقارنة بمصابيح الإشارة المتوهجة التقليدية؟[cite: 16]",
    questionEn: "What power consumption advantage do LED signal units offer over traditional incandescent signal lamps?[cite: 16]",
    optionsAr: {
      A: "تتطلب وحدات LED 100 واط مقارنة بـ 50 واط للمصابيح المتوهجة[cite: 16]",
      B: "تتطلب وحدات LED حوالي 10 واط لكل مظهر مقارنة بحوالي 50 واط للمصابيح المتوهجة[cite: 16]",
      C: "تتطلب وحدات LED 0 واط لأنها تعمل بالطاقة الشمسية[cite: 16]",
      D: "تستخدم وحدات LED والمصابيح المتوهجة طاقة متطابقة[cite: 16]"
    },
    optionsEn: {
      A: "LEDs require 100 W compared to 50 W for incandescent[cite: 16]",
      B: "LEDs require about 10 W per aspect compared to about 50 W for incandescent lamps[cite: 16]",
      C: "LEDs require 0 W because they run on solar power[cite: 16]",
      D: "LEDs and incandescent lamps use identical power[cite: 16]"
    },
    hintAr: "استهلاك LED للطاقة يمثل حوالي خمس استهلاك المصابيح التقليدية.[cite: 27]",
    hintEn: "LED power per aspect is ~10 W vs ~50 W for incandescent lamps.[cite: 27]",
    answer: "B"
  },
  {
    questionAr: "كيف يقارن عمر الخدمة وأنماط الفشل بين إشارات LED والمصابيح المتوهجة؟[cite: 16]",
    questionEn: "How do service life and failure modes compare between LED signals and incandescent lamps?[cite: 16]",
    optionsAr: {
      A: "عمر LED حوالي سنة واحدة (انقطاع مفاجئ)؛ المتوهج حوالي 10 سنوات (خفوت)[cite: 16]",
      B: "عمر LED حوالي 10 سنوات (خفوت تدريجي)؛ المتوهج حوالي سنة واحدة (انقطاع خيط مفاجئ)[cite: 16]",
      C: "كلاهما يستمر لمدة 25 عامًا دون فشل[cite: 16]",
      D: "المصابيح المتوهجة لا تفشل أبدًا[cite: 16]"
    },
    optionsEn: {
      A: "LED life ~1 year (sudden break); Incandescent ~10 years (dimming)[cite: 16]",
      B: "LED life ~10 years (gradual dimming); Incandescent ~1 year (sudden filament break)[cite: 16]",
      C: "Both last 25 years with no failure[cite: 16]",
      D: "Incandescent lamps never fail[cite: 16]"
    },
    hintAr: "إشارات LED تعمر لفترة أطول وتخفت تدريجياً، بعكس المصابيح المتوهجة التي تحترق فجأة.[cite: 27]",
    hintEn: "LEDs last 10 years with gradual dimming, whereas incandescent lamps last ~1 year and suffer sudden filament breakage.[cite: 27]",
    answer: "B"
  },
  {
    questionAr: "ما هي الظاهرة البصرية التي تقل بشكل كبير باستخدام وحدات إشارة LED بدون عاكسات؟[cite: 16]",
    questionEn: "What optical phenomenon is significantly reduced by using LED signal units without reflectors?[cite: 16]",
    optionsAr: {
      A: "خطأ الانكسار[cite: 16]",
      B: "تأثير الشبح (انعكاس ضوء الشمس على المرايا ليحاكي مظهراً مضاءً)[cite: 16]",
      C: "الزيغ اللوني[cite: 16]",
      D: "التفتح الحراري[cite: 16]"
    },
    optionsEn: {
      A: "Refraction error[cite: 16]",
      B: "Phantom effect (sunlight reflecting off mirrors to mimic a lit aspect)[cite: 16]",
      C: "Chromatic aberration[cite: 16]",
      D: "Thermal blooming[cite: 16]"
    },
    hintAr: "إلغاء تصميم العواكس يمنع ارتداد ضوء الشمس الذي كان يسبب مظهراً كاذباً.[cite: 27]",
    hintEn: "Incandescent reflectors can bounce sunlight back, creating a dangerous false 'phantom' aspect. LED units eliminate this.[cite: 27]",
    answer: "B"
  },
  {
    questionAr: "كيف يتم ترتيب الصمامات الثنائية الباعثة للضوء (LEDs) داخل رأس إشارة LED لمنع فشل المظهر المظلم بالكامل؟[cite: 16]",
    questionEn: "How are individual light-emitting diodes arranged within an LED signal aspect head to prevent total dark aspect failure?[cite: 16]",
    optionsAr: {
      A: "جميع مصابيح LED في حلقة متوالية واحدة بحيث إذا فشل أحدها تنطفئ جميعها[cite: 16]",
      B: "يتم ترتيب مصابيح LED في سلاسل متوالية-متوازية متعددة بحيث لا يؤدي فشل LED واحد إلى إفراغ المظهر[cite: 16]",
      C: "توضع مصابيح LED على قرص دوار بمحرك[cite: 16]",
      D: "يتم تشغيل مصابيح LED بواسطة بطاريات منفصلة[cite: 16]"
    },
    optionsEn: {
      A: "All LEDs are in one single series loop so if one fails all go dark[cite: 16]",
      B: "LEDs are arranged in multiple series-parallel strings so a single LED failure does not blank the aspect[cite: 16]",
      C: "LEDs are placed on a motorized spinning disc[cite: 16]",
      D: "LEDs are powered by separate batteries[cite: 16]"
    },
    hintAr: "التوزيع في مسارات متوازية متعددة يضمن عدم انطفاء الإشارة بالكامل إذا احترق صمام واحد.[cite: 27]",
    hintEn: "Grouping LEDs into multiple parallel strings ensures redundancy so single LED failures do not extinguish the signal.[cite: 27]",
    answer: "B"
  },
  {
    questionAr: "ما هي آلية المراقبة المدمجة في خزائن جانب المسار لإثبات للتعشيق أن مظهر إشارة LED مضاء بشكل نشط؟[cite: 17]",
    questionEn: "What monitoring mechanism is integrated into trackside cabinets to prove to the interlocking that an LED signal aspect is actively lit?[cite: 17]",
    optionsAr: {
      A: "دائرة مراقبة التيار لقياس تيار سلسلة LED[cite: 17]",
      B: "الفحص البصري اليدوي من قبل مراقبي المسار[cite: 17]",
      C: "ميكروفون صوتي يستمع إلى الطنين[cite: 17]",
      D: "مزدوجة حرارية تقيس درجة حرارة الصاري[cite: 17]"
    },
    optionsEn: {
      A: "Current monitoring circuit measuring LED string current[cite: 17]",
      B: "Manual visual inspection by track walkers[cite: 17]",
      C: "Acoustic microphone listening to hum[cite: 17]",
      D: "Thermocouple measuring mast temperature[cite: 17]"
    },
    hintAr: "تُستخدم دوائر لقياس تيار مشغل LED وإرسال ملاحظات إلى نظام التعشيق.[cite: 27]",
    hintEn: "Current monitoring circuits continuously measure LED driver current and send feedback.[cite: 27]",
    answer: "A"
  },
  {
    questionAr: "ما هو الإجراء الذي يتخذه التعشيق إذا اكتشفت دائرة مراقبة الإشارة أن إخراج الضوء قد انخفض إلى ما دون حد معين أو أن هناك سلسلة مفتوحة؟[cite: 17]",
    questionEn: "What action is taken by the interlocking if a signal monitoring circuit detects that light output has fallen below a set threshold or a string opened?[cite: 17]",
    optionsAr: {
      A: "يقوم التعشيق بترقية الإشارة إلى اللون الأخضر[cite: 17]",
      B: "يقوم التعشيق بالإبلاغ عن إنذار وتعيين مظهر مقيد (مثل الأحمر) للحفاظ على السلامة[cite: 17]",
      C: "يقوم التعشيق بإيقاف طاقة الجر عبر المقاطعة[cite: 17]",
      D: "يتجاهل التعشيق الخطأ حتى الليل[cite: 17]"
    },
    optionsEn: {
      A: "The interlocking upgrades the signal to Green[cite: 17]",
      B: "The interlocking reports an alarm and sets a restrictive aspect (e.g., Red) to preserve safety[cite: 17]",
      C: "The interlocking turns off traction power across the county[cite: 17]",
      D: "The interlocking ignores the fault until night[cite: 17]"
    },
    hintAr: "لضمان السلامة، يتم إطلاق إنذار وإجبار الإشارة على التحول لحالة مقيدة مثل التوقف.[cite: 27]",
    hintEn: "If current or light falls below threshold, an alarm is triggered, forcing a restrictive aspect.[cite: 27]",
    answer: "B"
  },
  {
    questionAr: "ما هي مسافة الرؤية الدنيا التي يجب توفيرها لسائق القطار لمراقبة إشارة الضوء الملونة الجانبية؟[cite: 17]",
    questionEn: "What minimum sighting distance must be provided for a train driver to observe a wayside color-light signal?[cite: 17]",
    optionsAr: {
      A: "على الأقل 50 متراً[cite: 17]",
      B: "على الأقل مسافة الكبح الكاملة زائد مسافة رد الفعل عند سرعة الخط[cite: 17]",
      C: "بالضبط 1000 متر بغض النظر عن السرعة[cite: 17]",
      D: "المسافة بين محطتين[cite: 17]"
    },
    optionsEn: {
      A: "At least 50 meters[cite: 17]",
      B: "At least the full braking distance plus reaction distance at line speed[cite: 17]",
      C: "Exactly 1000 meters regardless of speed[cite: 17]",
      D: "The distance between two stations[cite: 17]"
    },
    hintAr: "يجب أن تكون المسافة كافية للسائق لاستيعاب الإشارة وإيقاف القطار بأمان عند أقصى سرعة.[cite: 27]",
    hintEn: "Signal sighting distance must equal or exceed braking distance plus driver reaction distance at maximum line speed.[cite: 27]",
    answer: "B"
  },
  {
    questionAr: "ما هي المعدات التي يتم تثبيتها على طول أقسام المسار المنحنية أو خطوط الرؤية المعاقة لتحذير السائقين مسبقًا من مظاهر الإشارات في الأمام؟[cite: 17]",
    questionEn: "What equipment is installed along curved track sections or obstructed sightlines to pre-warn drivers of signal aspects ahead?[cite: 17]",
    optionsAr: {
      A: "أبواق صوتية[cite: 17]",
      B: "إشارات مكررة (Repeater signals)[cite: 17]",
      C: "بوابات تقاطع المستوى[cite: 17]",
      D: "روابط المعاوقة[cite: 17]"
    },
    optionsEn: {
      A: "Acoustic horns[cite: 17]",
      B: "Repeater signals[cite: 17]",
      C: "Level crossing gates[cite: 17]",
      D: "Impedance bonds[cite: 17]"
    },
    hintAr: "هذه الإشارات تكرر حالة الإشارة الرئيسية عندما تكون الرؤية المباشرة محجوبة.[cite: 27]",
    hintEn: "Repeater signals repeat the aspect of a main signal where curves restrict direct sighting distance.[cite: 27]",
    answer: "B"
  },
  {
    questionAr: "ما هي المهام التشغيلية الأساسية التي تقوم بها آلة التحويل (Point Machine) في المفتاح؟[cite: 17]",
    questionEn: "What are the primary operational jobs performed by a point machine at a turnout?[cite: 17]",
    optionsAr: {
      A: "تحريك وقفل وكشف وحماية شفرات التبديل[cite: 17]",
      B: "تشحيم سكك التبديل وتنظيف الحصى[cite: 17]",
      C: "قياس سرعة القطار ووزن المحاور[cite: 17]",
      D: "تزويد سلك الكاتيناري العلوي بالطاقة[cite: 17]"
    },
    optionsEn: {
      A: "Move, Lock, Detect, and Protect switch blades[cite: 17]",
      B: "Lubricate switch rails and clean ballast[cite: 17]",
      C: "Measure train speed and weigh axles[cite: 17]",
      D: "Power the overhead catenary wire[cite: 17]"
    },
    hintAr: "تقوم الآلة بأربع وظائف رئيسية لضمان سلامة مسار القطار على التحويلة.[cite: 27]",
    hintEn: "Point machines perform 4 key functions: Move switch rails, Lock, Detect, and Protect.[cite: 27]",
    answer: "A"
  },
  {
    questionAr: "أي نوع من آلات التحويل الكهربائية يُستخدم عالميًا على نطاق واسع وتم تطويره من تقنية سيمنز؟[cite: 18]",
    questionEn: "Which type of electric point machine is widely used globally and developed from Siemens technology?[cite: 18]",
    optionsAr: {
      A: "ZD6[cite: 18]",
      B: "S700K[cite: 18]",
      C: "ZYJ7[cite: 18]",
      D: "الرافعة اليدوية[cite: 18]"
    },
    optionsEn: {
      A: "ZD6[cite: 18]",
      B: "S700K[cite: 18]",
      C: "ZYJ7[cite: 18]",
      D: "Hand lever[cite: 18]"
    },
    hintAr: "هذه الآلة ذات المحرك والتروس هي طراز شهير يُعرف بـ S700K.[cite: 27]",
    hintEn: "S700K electric motor-and-gear point machine was developed from Siemens technology.[cite: 27]",
    answer: "B"
  },
  {
    questionAr: "ما هو نوع آلة التحويل المناسب بشكل خاص للتحويلات الرئيسية عالية السرعة التي تتطلب قوة دفع عالية؟[cite: 18]",
    questionEn: "What type of point machine is specifically suited for high-speed main-line turnouts requiring high throw force?[cite: 18]",
    optionsAr: {
      A: "رافعة يدوية ميكانيكية[cite: 18]",
      B: "آلة تحويل كهروهيدروليكية (مثل ZYJ7)[cite: 18]",
      C: "رحلة ملف لولبي للتيار المستمر[cite: 18]",
      D: "أسطوانة هوائية[cite: 18]"
    },
    optionsEn: {
      A: "Mechanical hand lever[cite: 18]",
      B: "Electro-hydraulic point machine (e.g., ZYJ7)[cite: 18]",
      C: "DC solenoid trip[cite: 18]",
      D: "Pneumatic cylinder[cite: 18]"
    },
    hintAr: "الأنظمة الكهروهيدروليكية توفر القوة الهيدروليكية المثالية للتحويلات الثقيلة.[cite: 27]",
    hintEn: "Electro-hydraulic machines (ZYJ7) supply hydraulic force ideal for heavy high-speed turnout switch rails.[cite: 27]",
    answer: "B"
  },
  {
    questionAr: "في التحويلات الطويلة والمرنة عالية السرعة (مثل تحويلات #18)، ما هو تكوين النظام الذي يقود نقاطًا متعددة على طول سكة التبديل؟[cite: 18]",
    questionEn: "In long flexible high-speed turnouts (e.g., #18 turnouts), what system configuration drives multiple points along the switch rail?[cite: 18]",
    optionsAr: {
      A: "رافعة يدوية واحدة[cite: 18]",
      B: "أنظمة دفع متعددة النقاط (مثل ZDJ9 مع عدة آلات متزامنة)[cite: 18]",
      C: "أثقال موازنة جاذبية[cite: 18]",
      D: "تيار دائرة المسار[cite: 18]"
    },
    optionsEn: {
      A: "A single hand lever[cite: 18]",
      B: "Multi-point drive systems (e.g., ZDJ9 with several synchronized machines)[cite: 18]",
      C: "Gravity counterweights[cite: 18]",
      D: "Track circuit current[cite: 18]"
    },
    hintAr: "الشفرات الطويلة تحتاج إلى أنظمة تحركها من نقاط متعددة ومتزامنة.[cite: 27]",
    hintEn: "Long switch blades require multi-point systems (ZDJ9) driving multiple throw positions.[cite: 27]",
    answer: "B"
  },
  {
    questionAr: "ما هو التسلسل التشغيلي الصحيح الذي تنفذه آلة التحويل عند تلقي أمر تحريك من التعشيق؟[cite: 18]",
    questionEn: "What is the correct operational sequence executed by a point machine upon receiving a move command from the interlocking?[cite: 18]",
    optionsAr: {
      A: "تحريك الشفرة -> فك القفل -> قفل -> كشف[cite: 18]",
      B: "فك قفل الشفرة -> تحريك الشفرة -> قفل وفحص -> كشف وإبلاغ[cite: 18]",
      C: "كشف -> قفل -> تحريك -> فك القفل[cite: 18]",
      D: "قفل -> كشف -> تحريك -> فك القفل[cite: 18]"
    },
    optionsEn: {
      A: "Move blade -> Unlock -> Lock -> Detect[cite: 18]",
      B: "Unlock blade -> Move blade -> Lock and check -> Detect and report[cite: 18]",
      C: "Detect -> Lock -> Move -> Unlock[cite: 18]",
      D: "Lock -> Detect -> Move -> Unlock[cite: 18]"
    },
    hintAr: "تبدأ بفك القفل، ثم التحريك، ثم القفل مجدداً، وأخيراً الفحص والإبلاغ.[cite: 27]",
    hintEn: "Operating sequence: 1. Unlock blade, 2. Move blade, 3. Lock & check, 4. Detect position and report to interlocking.[cite: 27]",
    answer: "B"
  },
  {
    questionAr: "في منطق الكشف الكهربائي لآلة التحويل، ما هي الحالة التي يتم إثباتها عندما تكون جهات الاتصال العادية (N) مغلقة وجهات الاتصال العكسية (R) مفتوحة؟[cite: 18]",
    questionEn: "In point machine electrical detection logic, what status is proved when Normal contacts (N) are closed and Reverse contacts (R) are open?[cite: 18]",
    optionsAr: {
      A: "تم إثبات التحويلة في وضع العكس ومقفلة[cite: 18]",
      B: "تم إثبات التحويلة في وضع عادي (NORMAL) ومقفلة[cite: 18]",
      C: "التحويلة في حالة خطأ عدم توافق[cite: 18]",
      D: "محرك آلة التحويل مقصور[cite: 18]"
    },
    optionsEn: {
      A: "Point proved REVERSE and locked[cite: 18]",
      B: "Point proved NORMAL and locked[cite: 18]",
      C: "Point in out-of-correspondence fault state[cite: 18]",
      D: "Point machine motor shorted[cite: 18]"
    },
    hintAr: "إغلاق نقطة الاتصال N وفتح R يثبت أن التحويلة في وضعها الطبيعي (Normal).[cite: 27]",
    hintEn: "N closed & R open proves Normal position; N open & R closed proves Reverse position.[cite: 27]",
    answer: "B"
  },
  {
    questionAr: "ماذا يحدث إذا واجهت آلة التحويل عائقًا يبلغ 4 مم بين سكة التبديل وسكة المخزون أثناء الحركة؟[cite: 19]",
    questionEn: "What happens if a point machine experiences a 4 mm obstruction between the switch rail and stock rail during movement?[cite: 19]",
    optionsAr: {
      A: "تجبر الآلة الشفرة على الإغلاق على أي حال[cite: 19]",
      B: "تفشل الآلة في القفل/الكشف، وتترك التحويلة 'غير مكتشفة'، ويمنع التعشيق تحديد المسار[cite: 19]",
      C: "تتحول الإشارة إلى اللون الأخضر تلقائيًا[cite: 19]",
      D: "يتجاوز التعشيق الكشف[cite: 19]"
    },
    optionsEn: {
      A: "The machine forces the blade closed anyway[cite: 19]",
      B: "The point fails to lock/detect, leaves the point 'not detected', and the interlocking prevents route setting[cite: 19]",
      C: "The signal turns Green automatically[cite: 19]",
      D: "The interlocking bypasses detection[cite: 19]"
    },
    hintAr: "يمنع العائق إغلاق الشفرة بإحكام، مما يؤدي إلى فتح جهات الاتصال وإطلاق إنذار بالخطأ.",
    hintEn: "If an obstruction prevents tight locking, detection contacts remain open, triggering a fault and blocking route clearance.",
    answer: "B"
  },
  {
    questionAr: "ما هو الهيكل السكني الذي يحمي معدات الإشارات الإلكترونية على جانب المسار، ووحدات دوائر المسار، وكتل أطراف التوصيل بالقرب من المسار؟[cite: 19]",
    questionEn: "What housing structure protects trackside electronic signaling equipment, track circuit modules, and terminal blocks near the track?[cite: 19]",
    optionsAr: {
      A: "خزانة جانب المسار (Location Case)[cite: 19]",
      B: "كابينة السائق[cite: 19]",
      C: "مأوى انتظار الركاب[cite: 19]",
      D: "رافعة المحطة الفرعية[cite: 19]"
    },
    optionsEn: {
      A: "Trackside Cabinet (Location Case)[cite: 19]",
      B: "Driver Cab[cite: 19]",
      C: "Passenger Waiting Shelter[cite: 19]",
      D: "Substation Gantry[cite: 19]"
    },
    hintAr: "تسمى الكبائن الموجودة بجانب المسار بخزائن المواقع وتحمي المعدات الإلكترونية.[cite: 28]",
    hintEn: "Trackside cabinets house electronic cards, transformers, fuses, and interface cables near field devices.[cite: 28]",
    answer: "A"
  },
  {
    questionAr: "ما هو منطق السلامة الذي يتحكم في أضواء التحذير والحواجز في تقاطعات السكك الحديدية الآلية؟[cite: 19]",
    questionEn: "What safety logic controls warning lights and barriers at automated railway level crossings?[cite: 19]",
    optionsAr: {
      A: "ينشط التقاطع فقط عندما تقترب سيارة على الطريق السريع[cite: 19]",
      B: "تكتشف دوائر/مستشعرات مسار الاقتراب القطار القادم عند مسافة زمنية للتحذير محددة، مما يؤدي إلى تشغيل الأضواء والأجراس والحواجز قبل وصول القطار[cite: 19]",
      C: "يتوقف سائق القطار ويضغط على زر عند كل تقاطع[cite: 19]",
      D: "تبقى الحواجز مغلقة على مدار 24 ساعة في اليوم[cite: 19]"
    },
    optionsEn: {
      A: "The crossing activates only when a highway car approaches[cite: 19]",
      B: "Approach track circuits/sensors detect incoming train at a set warning time distance, triggering lights, bells, and barriers before train arrival[cite: 19]",
      C: "The train driver stops and pushes a button at every crossing[cite: 19]",
      D: "Barriers stay closed 24 hours a day[cite: 19]"
    },
    hintAr: "يتم تشغيل معدات الكشف عن القطارات تلقائيًا بناءً على سرعة القطار والمسافة لضمان وقت تحذير مناسب.[cite: 28]",
    hintEn: "Train detection equipment triggers level crossing protection automatically with calculated timing for train speed.[cite: 28]",
    answer: "B"
  },
  {
    questionAr: "لماذا يجب تجهيز آلات التحويل بآليات قفل ميكانيكية داخلية أو خارجية؟[cite: 19]",
    questionEn: "Why must point machines be equipped with internal or external mechanical locking mechanisms?[cite: 19]",
    optionsAr: {
      A: "لجعلها أثقل[cite: 19]",
      B: "لإمساك شفرات التبديل بإحكام ضد سكك المخزون حتى لا يتسبب اهتزاز العجلات في انفصال الشفرة تحت القطارات المارة[cite: 19]",
      C: "لمنع تكون الصدأ[cite: 19]",
      D: "لتحويل جهد التيار المستمر إلى تيار متردد[cite: 19]"
    },
    optionsEn: {
      A: "To make them heavier[cite: 19]",
      B: "To hold switch blades firmly against stock rails so wheel vibration cannot cause blade separation under passing trains[cite: 19]",
      C: "To prevent rust formation[cite: 19]",
      D: "To convert DC voltage to AC[cite: 19]"
    },
    hintAr: "تعمل الأقفال الميكانيكية على تأمين الشفرة ضد الاهتزازات العنيفة الناتجة عن مرور القطار.[cite: 28]",
    hintEn: "Mechanical locks lock blades in position so intense mechanical vibration from passing trains cannot open the switch.[cite: 28]",
    answer: "B"
  },
  {
    questionAr: "ما هو المؤشر الذي يتم إرجاعه إلى التعشيق من خزانة جانب المسار بمجرد قفل التحويلة والتحقق منها؟[cite: 19]",
    questionEn: "What indication is returned to the interlocking from a trackside cabinet once a point is locked and verified?[cite: 19]",
    optionsAr: {
      A: "الإشارة غير مضاءة[cite: 19]",
      B: "التحويلة مقفلة وتم الكشف عن توافقها (عادي أو عكسي)[cite: 19]",
      C: "سقوط مرحل المسار[cite: 19]",
      D: "انقطاع الطاقة[cite: 19]"
    },
    optionsEn: {
      A: "Signal unlit[cite: 19]",
      B: "Point locked and detected in correspondence (Normal or Reverse)[cite: 19]",
      C: "Track relay dropped[cite: 19]",
      D: "Power cut[cite: 19]"
    },
    hintAr: "يطلب نظام التعشيق تأكيداً إيجابياً للتحويلة قبل السماح بإعداد مسار عبرها.[cite: 28]",
    hintEn: "The interlocking requires positive fail-safe detection of point correspondence before setting a route over the switch.[cite: 28]",
    answer: "B"
  },
  {
    questionAr: "ما هو المكون الموجود داخل رأس إشارة LED الذي يركز ويشكل شعاع الضوء ليتناسب مع مسافة رؤية السائق عند الاقتراب؟[cite: 20]",
    questionEn: "Which component inside an LED signal head focuses and shapes the light beam to match the driver's sighting distance on approach?[cite: 20]",
    optionsAr: {
      A: "مرآة عاكسة[cite: 20]",
      B: "عدسة بصرية وغطاء (Optical lens and hood)[cite: 20]",
      C: "محول خافض[cite: 20]",
      D: "مصراع ميكانيكي[cite: 20]"
    },
    optionsEn: {
      A: "Reflector mirror[cite: 20]",
      B: "Optical lens and hood[cite: 20]",
      C: "Step-down transformer[cite: 20]",
      D: "Mechanical shutter[cite: 20]"
    },
    hintAr: "تتحكم العدسات في زاوية الشعاع وتركيزه، بينما يقي الغطاء من أشعة الشمس.[cite: 28]",
    hintEn: "Optical lenses control beam angle and focus for optimal driver visibility while hoods shade against ambient sunlight.[cite: 28]",
    answer: "B"
  },
  {
    questionAr: "ما هي دائرة التشغيل الكهربائية المستخدمة لتشغيل سلاسل LED بشكل مستقر بغض النظر عن التقلبات الطفيفة في جهد الإمداد؟[cite: 20]",
    questionEn: "What electrical driver circuit is used to power LED strings stably regardless of minor supply voltage fluctuations?[cite: 20]",
    optionsAr: {
      A: "محرك تيار مستمر (Constant-current driver)[cite: 20]",
      B: "مقبض مقاومة متغير[cite: 20]",
      C: "مقوم صمام ثنائي غير منظم[cite: 20]",
      D: "محول ذاتي رافع[cite: 20]"
    },
    optionsEn: {
      A: "Constant-current driver[cite: 20]",
      B: "Variable resistor knob[cite: 20]",
      C: "Unregulated diode rectifier[cite: 20]",
      D: "Step-up autotransformer[cite: 20]"
    },
    hintAr: "يُستخدم محرك التيار المستمر للحفاظ على إنتاج ضوء موحد.[cite: 28]",
    hintEn: "Constant-current drivers maintain uniform LED light output across line supply variations.[cite: 28]",
    answer: "A"
  },
  {
    questionAr: "في خطوط الإشارة ذات المظاهر الأربعة، ما هو تسلسل المظاهر الذي يلاحظه السائق عند الاقتراب من إشارة تعرض اللون الأحمر؟[cite: 20]",
    questionEn: "On four-aspect signal lines, what aspect sequence does a driver observe when approaching a signal displaying Red?[cite: 20]",
    optionsAr: {
      A: "أخضر -> أصفر-أخضر (أصفر مزدوج) -> أصفر -> أحمر[cite: 20]",
      B: "أحمر -> أخضر -> أصفر -> أحمر[cite: 20]",
      C: "أصفر -> أخضر -> أحمر -> أصفر[cite: 20]",
      D: "أخضر -> أحمر -> أخضر -> أحمر[cite: 20]"
    },
    optionsEn: {
      A: "Green -> Yellow-Green (Double Yellow) -> Yellow -> Red[cite: 20]",
      B: "Red -> Green -> Yellow -> Red[cite: 20]",
      C: "Yellow -> Green -> Red -> Yellow[cite: 20]",
      D: "Green -> Red -> Green -> Red[cite: 20]"
    },
    hintAr: "يبدأ التسلسل بالأخضر، ثم تحذير مبكر، ثم تحذير مباشر، ثم توقف.[cite: 28]",
    hintEn: "4-aspect sequence approaching Stop: Green (Clear) -> Double Yellow (Pre-warning) -> Yellow (Caution/Stop at next) -> Red (Stop).[cite: 28]",
    answer: "A"
  },
  {
    questionAr: "ما هو الدور العام الذي تلعبه إشارات جانب المسار، وآلات التحويل، ودوائر المسار، والخزائن ضمن بنية التحكم الكلية في السكك الحديدية؟[cite: 20]",
    questionEn: "What overall role do trackside signals, point machines, track circuits, and cabinets play within the total railway control architecture?[cite: 20]",
    optionsAr: {
      A: "تعمل بمثابة 'الأيدي والعيون' في الميدان لتنفيذ الأوامر من التعشيق وإرجاع مؤشرات حالة آمنة من الفشل[cite: 20]",
      B: "إدارة تذاكر الركاب ومواقف المحطات[cite: 20]",
      C: "التحكم في حقن وقود محرك القاطرة[cite: 20]",
      D: "تحل محل أجهزة كمبيوتر الإرسال المركزية بالكامل[cite: 20]"
    },
    optionsEn: {
      A: "They function as the 'hands and eyes' in the field executing commands from the interlocking and returning fail-safe status indications[cite: 20]",
      B: "They manage passenger ticketing and station parking[cite: 20]",
      C: "They control locomotive engine fuel injection[cite: 20]",
      D: "They replace central dispatching computers completely[cite: 20]"
    },
    hintAr: "المعدات الميدانية تُنفذ الأوامر وتراقب الحالة لصالح نظام التعشيق.[cite: 28]",
    hintEn: "Trackside equipment acts as the railway's 'hands and eyes' in the field under interlocking control.[cite: 28]",
    answer: "A"
  }
];

window.quizQuestions = [...window.quizQuestions, ...stage3, ...stage4];