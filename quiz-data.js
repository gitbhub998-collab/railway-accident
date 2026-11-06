const railwayDisasterQuestions = [
  {
    id: 1,
    type: "MCQ",
    questionEn: "Disaster is best defined as:",
    questionAr: "أفضل تعريف للكارثة (Disaster) هو:",
    options: [
      { textEn: "A small accident", textAr: "حادث بسيط", isCorrect: false },
      { textEn: "A sudden event causing great loss", textAr: "حدث مفاجئ يسبب خسائر فادحة", isCorrect: true },
      { textEn: "A harmless event", textAr: "حدث غير ضار", isCorrect: false },
      { textEn: "A routine issue", textAr: "مشكلة روتينية", isCorrect: false }
    ],
    hintAr: "الكارثة دائماً ترتبط بكونها حدثاً مفاجئاً ينتج عنه دمار وخسائر كبيرة تتخطى قدرة المجتمع على الاستجابة العادية."
  },
  {
    id: 2,
    type: "MCQ",
    questionEn: "Which of the following is a manmade major disaster?",
    questionAr: "أي مما يلي يُعد كارثة كبرى من صنع الإنسان (Manmade)؟",
    options: [
      { textEn: "Earthquake", textAr: "الزلزال", isCorrect: false },
      { textEn: "Flood", textAr: "الفيضان", isCorrect: false },
      { textEn: "War", textAr: "الحرب", isCorrect: true },
      { textEn: "Cold wave", textAr: "موجة البرد", isCorrect: false }
    ],
    hintAr: "الزلازل والفيضانات وموجات البرد هي كوارث طبيعية، بينما الحروب هي كوارث كبرى يتسبب فيها البشر."
  },
  {
    id: 3,
    type: "MCQ",
    questionEn: "An emergency differs from a disaster because:",
    questionAr: "تختلف حالة الطوارئ (Emergency) عن الكارثة (Disaster) في أن:",
    options: [
      { textEn: "It needs international help", textAr: "تحتاج إلى مساعدة دولية", isCorrect: false },
      { textEn: "It cannot be managed locally", textAr: "لا يمكن إدارتها محلياً", isCorrect: false },
      { textEn: "The community can cope with it", textAr: "المجتمع يمكنه التعامل معها", isCorrect: true },
      { textEn: "It always involves trains", textAr: "تتضمن القطارات دائماً", isCorrect: false }
    ],
    hintAr: "حالة الطوارئ يمكن السيطرة عليها وإدارتها باستخدام الموارد المحلية للمجتمع، عكس الكارثة التي تتجاوز هذه القدرات."
  },
  {
    id: 4,
    type: "MCQ",
    questionEn: "Accident in railway means:",
    questionAr: "الحادث في السكك الحديدية يعني:",
    options: [
      { textEn: "Any event delaying or damaging trains", textAr: "أي حدث يؤخر أو يتلف القطارات", isCorrect: true },
      { textEn: "Only natural disasters", textAr: "الكوارث الطبيعية فقط", isCorrect: false },
      { textEn: "Only derailments", textAr: "خروج القطار عن القضبان فقط", isCorrect: false },
      { textEn: "None of the above", textAr: "لا شيء مما سبق", isCorrect: false }
    ],
    hintAr: "مفهوم الحادث في السكة الحديد أشمل من مجرد خروج عن القضبان، فهو يشمل أي حدث يعطل حركة مسير القطارات أو يسبب تلفيات."
  },
  {
    id: 5,
    type: "MCQ",
    questionEn: "Flood is classified as:",
    questionAr: "يُصنف الفيضان على أنه:",
    options: [
      { textEn: "Minor Natural", textAr: "طبيعي بسيط (Minor)", isCorrect: false },
      { textEn: "Major Natural", textAr: "طبيعي كبير (Major)", isCorrect: true },
      { textEn: "Major Manmade", textAr: "من صنع الإنسان كبير", isCorrect: false },
      { textEn: "Minor Manmade", textAr: "من صنع الإنسان بسيط", isCorrect: false }
    ],
    hintAr: "الفيضان يحدث بسبب عوامل طبيعية ويخلف دماراً واسعاً، لذا يُصنف ككارثة طبيعية كبرى."
  },
  {
    id: 6,
    type: "MCQ",
    questionEn: "Chemical pollution is an example of:",
    questionAr: "التلوث الكيميائي هو مثال على:",
    options: [
      { textEn: "Natural Disaster", textAr: "كارثة طبيعية", isCorrect: false },
      { textEn: "Manmade Disaster", textAr: "كارثة من صنع الإنسان", isCorrect: true },
      { textEn: "Emergency only", textAr: "حالة طوارئ فقط", isCorrect: false },
      { textEn: "Accident", textAr: "حادث", isCorrect: false }
    ],
    hintAr: "التلوث الكيميائي ينتج عن الأنشطة الصناعية أو الأخطاء البشرية، لذلك يصنف ككارثة من صنع الإنسان."
  },
  {
    id: 7,
    type: "MCQ",
    questionEn: "Which of the following is NOT a natural disaster?",
    questionAr: "أي مما يلي لا يُعد كارثة طبيعية؟",
    options: [
      { textEn: "Drought", textAr: "الجفاف", isCorrect: false },
      { textEn: "Landslide", textAr: "الانهيار الأرضي", isCorrect: false },
      { textEn: "Epidemic", textAr: "الوباء", isCorrect: true },
      { textEn: "Earthquake", textAr: "الزلزال", isCorrect: false }
    ],
    hintAr: "وفقاً للتصنيفات المذكورة، الأوبئة (Epidemic) تُصنف غالباً ككوارث بيولوجية منفصلة أو تختلف في طبيعتها عن الكوارث الطبيعية الجيولوجية والمناخية كالجفاف والزلازل."
  },
  {
    id: 8,
    type: "MCQ",
    questionEn: "Which of the following involves train derailment?",
    questionAr: "أي مما يلي يتضمن خروج القطار عن القضبان (derailment)؟",
    options: [
      { textEn: "Consequential train accident", textAr: "حادث قطار تبَعي (ينتج عنه عواقب)", isCorrect: true },
      { textEn: "Indicative accident", textAr: "حادث تحذيري (إرشادي)", isCorrect: false },
      { textEn: "Equipment failure", textAr: "عطل في المعدات", isCorrect: false },
      { textEn: "Unusual incident", textAr: "واقعة غير معتادة", isCorrect: false }
    ],
    hintAr: "حوادث القطارات التبعية (Consequential) هي الحوادث الجسيمة التي يترتب عليها عواقب كبرى مثل خروج القطار عن القضبان أو التصادم."
  },
  {
    id: 9,
    type: "MCQ",
    questionEn: "Equipment failure in railways includes:",
    questionAr: "عطل المعدات (Equipment failure) في السكك الحديدية يشمل:",
    options: [
      { textEn: "Signal failure", textAr: "عطل في الإشارات", isCorrect: true },
      { textEn: "Collision", textAr: "التصادم", isCorrect: false },
      { textEn: "Fire outbreak", textAr: "اندلاع حريق", isCorrect: false },
      { textEn: "Level crossing crash", textAr: "حادث عند مزلقان", isCorrect: false }
    ],
    hintAr: "الأعطال الفنية في أنظمة التشغيل مثل أعطال الإشارات (Signals) تندرج تحت فئة أعطال المعدات."
  },
  {
    id: 10,
    type: "MCQ",
    questionEn: "Which of the following statements is TRUE?",
    questionAr: "أي من العبارات التالية صحيحة؟",
    options: [
      { textEn: "Disasters always have natural causes", textAr: "الكوارث دائماً لها أسباب طبيعية", isCorrect: false },
      { textEn: "Emergencies never cause loss", textAr: "حالات الطوارئ لا تسبب خسائر أبداً", isCorrect: false },
      { textEn: "Disasters exceed community capacity", textAr: "الكوارث تتجاوز قدرة المجتمع", isCorrect: true },
      { textEn: "Accidents never delay trains", textAr: "الحوادث لا تؤخر القطارات أبداً", isCorrect: false }
    ],
    hintAr: "السمة الأساسية التي تفرق الكارثة عن أي أزمة أخرى هي أنها تتخطى قدرات وموارد المجتمع المحلي للتعامل معها."
  },
  {
    id: 11,
    type: "TF",
    questionEn: "All disasters can be handled locally.",
    questionAr: "يمكن التعامل مع جميع الكوارث محلياً.",
    options: [
      { textEn: "True", textAr: "صح", isCorrect: false },
      { textEn: "False", textAr: "خطأ", isCorrect: true }
    ],
    hintAr: "خطأ. الكوارث بطبيعتها تتجاوز القدرات المحلية وغالباً ما تتطلب دعماً وتدخلاً من جهات خارجية أو دولية."
  },
  {
    id: 12,
    type: "TF",
    questionEn: "Flood is a natural disaster.",
    questionAr: "الفيضان يعتبر كارثة طبيعية.",
    options: [
      { textEn: "True", textAr: "صح", isCorrect: true },
      { textEn: "False", textAr: "خطأ", isCorrect: false }
    ],
    hintAr: "صح. الفيضان ظاهرة طبيعية بيئية تسبب دماراً كبيراً، لذا يُصنف ككارثة طبيعية."
  },
  {
    id: 13,
    type: "TF",
    questionEn: "Chemical pollution is a natural disaster.",
    questionAr: "التلوث الكيميائي يعتبر كارثة طبيعية.",
    options: [
      { textEn: "True", textAr: "صح", isCorrect: false },
      { textEn: "False", textAr: "خطأ", isCorrect: true }
    ],
    hintAr: "خطأ. التلوث الكيميائي يحدث بسبب التسريبات الصناعية أو الأنشطة البشرية، فهو كارثة من صنع الإنسان (Manmade)."
  },
  {
    id: 14,
    type: "TF",
    questionEn: "Accident in railways can cause delay or loss.",
    questionAr: "حوادث السكك الحديدية يمكن أن تسبب تأخيراً أو خسائر.",
    options: [
      { textEn: "True", textAr: "صح", isCorrect: true },
      { textEn: "False", textAr: "خطأ", isCorrect: false }
    ],
    hintAr: "صح. أي حادث في السكة الحديد يعطل مسير القطارات ويؤدي إلى تأخيرات في الجداول الزمنية أو خسائر مادية وبشرية."
  },
  {
    id: 15,
    type: "TF",
    questionEn: "An emergency always requires international help.",
    questionAr: "حالة الطوارئ تتطلب دائماً مساعدة دولية.",
    options: [
      { textEn: "True", textAr: "صح", isCorrect: false },
      { textEn: "False", textAr: "خطأ", isCorrect: true }
    ],
    hintAr: "خطأ. حالات الطوارئ (Emergencies) يمكن السيطرة عليها وإدارتها باستخدام الموارد والقدرات المحلية للمجتمع."
  }
];

function toQuizData(items) {
  return items.map((item) => {
    const correctIndex = item.options.findIndex((option) => option.isCorrect === true);

    return {
      id: item.id,
      question: item.questionEn,
      arabicQuestion: item.questionAr,
      options: Object.fromEntries(
        item.options.map((option, index) => [String.fromCharCode(65 + index), option.textEn])
      ),
      arabicOptions: Object.fromEntries(
        item.options.map((option, index) => [String.fromCharCode(65 + index), option.textAr])
      ),
      correctAnswer: correctIndex >= 0 ? String.fromCharCode(65 + correctIndex) : "A",
      hint: "",
      arabicHint: item.hintAr
    };
  });
}

const railwayMultipleChoiceQuiz = toQuizData(
  railwayDisasterQuestions.filter((item) => item.type === "MCQ")
);
const railwayTrueFalseQuiz = toQuizData(
  railwayDisasterQuestions.filter((item) => item.type === "TF")
);
