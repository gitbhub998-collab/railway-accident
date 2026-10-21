function normalizeQuizData(items) {
    return items.map(item => {
        const normalized = { ...item };

        if (!normalized.arabicQuestion) {
            normalized.arabicQuestion = normalized.translation || '';
        }
        if (typeof normalized.question === 'string') {
            normalized.question = normalized.question.replace(/^\s*\d+[.)]\s*/, '');
        }
        if (!normalized.arabicOptions) {
            normalized.arabicOptions = {};
        }

        if (Array.isArray(normalized.options)) {
            const optionsObj = {};
            const arabicOptionsObj = {};

            normalized.options.forEach(optionText => {
                if (typeof optionText !== 'string') return;
                const match = optionText.trim().match(/^([A-D])[.)]?\s*(.*)$/i);
                if (!match) return;
                const key = match[1].toUpperCase();
                const rest = match[2] || '';
                const parts = rest.split('|').map(part => part.trim());

                optionsObj[key] = parts[0] || rest;
                arabicOptionsObj[key] = parts[1] || '';
            });

            normalized.options = optionsObj;
            normalized.arabicOptions = Object.keys(arabicOptionsObj).length ? arabicOptionsObj : normalized.arabicOptions;
            // Fallback: if options couldn't be parsed as labeled items (e.g. simple ["True","False"]),
            // assign sequential keys A, B, C... and split translations by '|'
            if (Object.keys(normalized.options).length === 0 && Array.isArray(item.options)) {
                const fallback = {};
                const fallbackAr = {};
                const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                item.options.forEach((opt, idx) => {
                    if (typeof opt !== 'string') return;
                    const parts = opt.split('|').map(p => p.trim());
                    const key = letters[idx] || String.fromCharCode(65 + idx);
                    fallback[key] = parts[0] || '';
                    if (parts[1]) fallbackAr[key] = parts[1];
                });
                if (Object.keys(fallback).length) {
                    normalized.options = fallback;
                    normalized.arabicOptions = Object.keys(fallbackAr).length ? fallbackAr : normalized.arabicOptions;
                }
            }
        }

        if (!normalized.correctAnswer && typeof normalized.answer === 'string') {
            const answerText = normalized.answer.trim();
            const ansMatch = answerText.match(/^([A-D])/i);
            if (ansMatch) {
                normalized.correctAnswer = ansMatch[1].toUpperCase();
            } else if (normalized.options && typeof normalized.options === 'object') {
                const lowerAnswer = answerText.toLowerCase();
                const booleanAnswer = answerText.match(/^(true|false)\b/i);
                for (const [optKey, optValue] of Object.entries(normalized.options)) {
                    const booleanOption = typeof optValue === 'string'
                        ? optValue.trim().match(/^(true|false)\b/i)
                        : null;
                    if (typeof optValue === 'string' && (
                        optValue.trim().toLowerCase() === lowerAnswer ||
                        (booleanAnswer && booleanOption && booleanAnswer[1].toLowerCase() === booleanOption[1].toLowerCase())
                    )) {
                        normalized.correctAnswer = optKey;
                        break;
                    }
                }
            }
        }

        if (!normalized.hint) normalized.hint = normalized.hintEN || '';
        if (!normalized.arabicHint) normalized.arabicHint = normalized.hintAR || '';

        return normalized;
    });
}

function shuffle(items) {
    const shuffled = [...items];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function shuffleQuiz(items) {
    return shuffle(items).map(item => {
        const options = shuffle(Object.entries(item.options));
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const shuffledOptions = {};
        const shuffledArabicOptions = {};
        let correctAnswer = item.correctAnswer;

        options.forEach(([oldKey, option], index) => {
            const newKey = letters[index];
            shuffledOptions[newKey] = option;
            if (item.arabicOptions[oldKey]) {
                shuffledArabicOptions[newKey] = item.arabicOptions[oldKey];
            }
            if (oldKey === item.correctAnswer) {
                correctAnswer = newKey;
            }
        });

        return {
            ...item,
            options: shuffledOptions,
            arabicOptions: shuffledArabicOptions,
            correctAnswer
        };
    });
}

const mcqQuestions = [
  {
    //[cite: 1]
    question: "1. Disaster is best defined as: (أفضل تعريف للكارثة هو:)",
    options: [
      "a) A small accident (حادث بسيط)",
      "b) A sudden event causing great loss (حدث مفاجئ يسبب خسارة فادحة)",
      "c) A harmless event (حدث غير ضار)",
      "d) A routine issue (مشكلة روتينية)"
    ],
    hint: "تذكر أن الكارثة ترتبط دائماً بحدوث دمار أو فقدان كبير بشكل غير متوقع.",
    answer: "b) A sudden event causing great loss (حدث مفاجئ يسبب خسارة فادحة)"
  },
  {
    //[cite: 1]
    question: "2. Which of the following is a manmade major disaster? (أي مما يلي يعتبر كارثة كبرى من صنع الإنسان؟)",
    options: [
      "a) Earthquake (زلزال)",
      "b) Flood (فيضان)",
      "c) War (حرب)",
      "d) Cold wave (موجة برد)"
    ],
    hint: "ابحث عن الخيار الذي يتدخل فيه البشر بشكل مباشر وليس ظاهرة طبيعية.",
    answer: "c) War (حرب)"
  },
  {
    //[cite: 1]
    question: "3. An emergency differs from a disaster because: (تختلف حالة الطوارئ عن الكارثة في أن:)",
    options: [
      "a) It needs international help (تحتاج إلى مساعدة دولية)",
      "b) It cannot be managed locally (لا يمكن إدارتها محليًا)",
      "c) The community can cope with it (يمكن للمجتمع التعامل معها)",
      "d) It always involves trains (تشمل القطارات دائماً)"
    ],
    hint: "حالات الطوارئ عادة ما تكون ضمن قدرات الاستجابة المحلية للمجتمع، على عكس الكوارث.",
    answer: "c) The community can cope with it (يمكن للمجتمع التعامل معها)"
  },
  {
    //[cite: 2]
    question: "4. Accident in railway means: (الحادث في السكك الحديدية يعني:)",
    options: [
      "a) Any event delaying or damaging trains (أي حدث يؤخر أو يتلف القطارات)",
      "b) Only natural disasters (الكوارث الطبيعية فقط)",
      "c) Only derailments (خروج القطار عن المسار فقط)",
      "d) None of the above (لا شيء مما سبق)"
    ],
    hint: "مفهوم الحوادث في السكك الحديدية يشمل أي ضرر أو عائق يؤثر على سير القطارات المعتاد.",
    answer: "a) Any event delaying or damaging trains (أي حدث يؤخر أو يتلف القطارات)"
  },
  {
    //[cite: 2]
    question: "5. Flood is classified as: (يُصنف الفيضان على أنه:)",
    options: [
      "a) Minor Natural (طبيعي بسيط)",
      "b) Major Natural (طبيعي كبير)",
      "c) Major Manmade (كبير من صنع الإنسان)",
      "d) Minor Manmade (بسيط من صنع الإنسان)"
    ],
    hint: "الفيضانات هي ظواهر جيومناخية تسبب دماراً واسع النطاق وخسائر كبيرة.",
    answer: "b) Major Natural (طبيعي كبير)"
  },
  {
    //[cite: 2]
    question: "6. Chemical pollution is an example of: (التلوث الكيميائي هو مثال على:)",
    options: [
      "a) Natural Disaster (كارثة طبيعية)",
      "b) Manmade Disaster (كارثة من صنع الإنسان)",
      "c) Emergency only (حالة طوارئ فقط)",
      "d) Accident (حادث)"
    ],
    hint: "المواد الكيميائية يتم تصنيعها والتعامل معها بواسطة البشر، والتلوث الناتج عنها ليس ظاهرة طبيعية.",
    answer: "b) Manmade Disaster (كارثة من صنع الإنسان)"
  },
  {
    //[cite: 3]
    question: "7. Which of the following is NOT a natural disaster? (أي مما يلي لا يعتبر كارثة طبيعية؟)",
    options: [
      "a) Drought (جفاف)",
      "b) Landslide (انهيار أرضي)",
      "c) Epidemic (وباء)",
      "d) Earthquake (زلزال)"
    ],
    hint: "الأوبئة تعتبر كوارث بيولوجية وتصنف أحياناً بشكل منفصل عن الكوارث الطبيعية الجيولوجية أو المناخية.",
    answer: "c) Epidemic (وباء)"
  },
  {
    //[cite: 3]
    question: "8. Which of the following involves train derailment? (أي مما يلي يتضمن خروج القطار عن مساره؟)",
    options: [
      "a) Consequential train accident (حادث قطار تبعي / ذو عواقب)",
      "b) Indicative accident (حادث مؤشر / تحذيري)",
      "c) Equipment failure (عطل في المعدات)",
      "d) Unusual incident (حادث غير معتاد)"
    ],
    hint: "خروج القطار عن مساره يعتبر حادثاً كبيراً له عواقب واضحة ومباشرة تؤثر على الحركة.",
    answer: "a) Consequential train accident (حادث قطار تبعي / ذو عواقب)"
  },
  {
    //[cite: 3]
    question: "9. Equipment failure in railways includes: (عطل المعدات في السكك الحديدية يشمل:)",
    options: [
      "a) Signal failure (عطل في الإشارات)",
      "b) Collision (تصادم)",
      "c) Fire outbreak (اندلاع حريق)",
      "d) Level crossing crash (حادث تحطم عند تقاطع المزلقان)"
    ],
    hint: "ركز على الأعطال التقنية التي تصيب الأجهزة المستخدمة لتنظيم وتأمين حركة القطارات.",
    answer: "a) Signal failure (عطل في الإشارات)"
  },
  {
    //[cite: 4]
    question: "10. Which of the following statements is TRUE? (أي من العبارات التالية صحيحة؟)",
    options: [
      "a) Disasters always have natural causes (الكوارث لها أسباب طبيعية دائمًا)",
      "b) Emergencies never cause loss (حالات الطوارئ لا تسبب خسائر أبدًا)",
      "c) Disasters exceed community capacity (الكوارث تتجاوز قدرة المجتمع)",
      "d) Accidents never delay trains (الحوادث لا تؤخر القطارات أبدًا)"
    ],
    hint: "الكارثة تُعرف بحجمها الكبير وتأثيرها الذي يفوق إمكانيات الموارد المحلية للتعامل معها.",
    answer: "c) Disasters exceed community capacity (الكوارث تتجاوز قدرة المجتمع)"
  },
  {
    //[cite: 5]
    question: "1. All disasters can be handled locally. (جميع الكوارث يمكن التعامل معها محلياً.)",
    options: [
      "True (صح)",
      "False (خطأ)"
    ],
    hint: "تذكر الفرق الجوهري بين الكارثة وحالة الطوارئ من حيث حجم التأثير والقدرة على الاستجابة.",
    answer: "False - Disasters usually exceed local capacity. (خطأ - الكوارث عادة ما تتجاوز القدرة المحلية.)"
  },
  {
    //[cite: 5]
    question: "2. Flood is a natural disaster. (الفيضان يعتبر كارثة طبيعية.)",
    options: [
      "True (صح)",
      "False (خطأ)"
    ],
    hint: "الفيضانات تحدث نتيجة ظواهر مناخية وبيئية دون تدخل بشري مباشر في تكوينها.",
    answer: "True (صح)"
  },
  {
    //[cite: 5]
    question: "3. Chemical pollution is a natural disaster. (التلوث الكيميائي يعتبر كارثة طبيعية.)",
    options: [
      "True (صح)",
      "False (خطأ)"
    ],
    hint: "المواد الكيميائية يتم تصنيعها بواسطة البشر، لذا فإن الكوارث الناتجة عنها لها تصنيف مختلف.",
    answer: "False - It is manmade. (خطأ - إنه من صنع الإنسان.)"
  },
  {
    //[cite: 5]
    question: "4. Accident in railways can cause delay or loss. (الحوادث في السكك الحديدية يمكن أن تسبب تأخيراً أو خسارة.)",
    options: [
      "True (صح)",
      "False (خطأ)"
    ],
    hint: "أي خلل طارئ في تشغيل السكك الحديدية يؤثر مباشرة على حركة ومواعيد القطارات وقد يتلف المعدات.",
    answer: "True (صح)"
  },
  {
    //[cite: 5]
    question: "5. An emergency always requires international help. (حالة الطوارئ تتطلب دائماً مساعدة دولية.)",
    options: [
      "True (صح)",
      "False (خطأ)"
    ],
    hint: "حالات الطوارئ تكون عادة أقل حدة من الكوارث الكبرى وتستطيع الجهات المعنية السيطرة عليها بمفردها.",
    answer: "False - It can be handled locally. (خطأ - يمكن التعامل معها محلياً.)"
  }
];

const quizDataMain = shuffleQuiz(normalizeQuizData(mcqQuestions));
const quizzes = [quizDataMain].filter(q => q.length > 0);
let currentQuizIndex = 0;
let quizData = quizzes[currentQuizIndex];

let index = 0;
let userAnswers = new Array(quizData.length).fill(null);

const beboMessages = {
    intro: ["مرحبا اسمي بيبو جاهز لبدء الاختبار؟"],
    correct: [
        "عاش يا وحش! أداء أسطوري.", "الله ينور عليك، تركيزك في السما!", "ممتاز! كمل يا بطل بنفس الحماس.",
        "وحش! إجابة فنية مية مية.", "رائع، أنت فاهم اللعبة كويس جداً.", "برافو! إجابة أسطورية زي ما توقعت.",
        "عاش يا دحيح، مجهودك جبار.", "تسلم إيدك، إجابة مظبوطة بالملي.", "أحسنت! فخور بيك فعلاً يا وحش."
    ],
    wrong: [
        "غلط تماماً! ركز بقى عشان كدة كتير أوي!",
        "إيه العك ده؟ فوق كدة واقرأ السؤال كويس يا هندسة!",
        "إجابة كارثية! راجع معلوماتك فوراً كدة مينفعش!",
        "غلط! أنت بتهزر ولا إيه؟ ركز بقى شوية!"
    ],
    resultsAdvice: [
        "نتيجتك دى يسطا ولا درجه حراره.",
        "منت لو تبص على التلميحات وانت بتحل مكنتش جبت درجات الحراره دى.",
        "تعي اشب شاى يسطا بالى انت عامله ده.",
        "متزعلش مش مهم درجتك فى الامتحان المهم الصحه والستر.",
        "هيجى شخص يحسسك انك ف كفه والكون كله فى كفه وبعدين يسقفلك بالكفتين على وشك علشان النتيجه الى انت جايبها دى."
    ],
    resultsSuccess: [
        "مشاء الله عليك ",
        "هايل بجد عاش عليك.",
        "شيئ جميل جدا عندك احسن منكده كمان  عاش عليك  ."
    ]
};

function setBebo(state, category, specificIdx = -1) {
    // Bebo robot disabled - only results messages will be shown
    return;
}

function toggleHint() { document.getElementById('hint-panel').classList.toggle('active'); }

function init() {
    if (quizzes.length === 0) {
        document.getElementById('quiz-ui').classList.add('hidden');
        document.getElementById('results-ui').classList.remove('hidden');
        document.getElementById('final-pct').innerText = '0%';
        document.getElementById('final-feedback').innerText = 'لا توجد بيانات اختبار متاحة.';
        return;
    }
    setCurrentQuiz(0);
    document.querySelector('.bebo-wrapper').classList.add('hidden');
    render();
}

function setCurrentQuiz(quizIndex) {
    currentQuizIndex = quizIndex;
    quizData = quizzes[currentQuizIndex];
    index = 0;
    userAnswers = new Array(quizData.length).fill(null);
    document.getElementById('total-idx').innerText = quizData.length.toString().padStart(2, '0');
}

function render() {
    const data = quizData[index];
    document.getElementById('current-idx').innerText = (index + 1).toString().padStart(2, '0');

    document.getElementById('question-text').innerHTML = `
        <div class="q-en-main">${index + 1}. ${data.question}</div>
        <div class="q-ar-box">${data.arabicQuestion}</div>
    `;

    document.getElementById('hint-text').innerHTML = `
        <div class="hint-info">${data.hint}</div>
        <div class="hint-extra">${data.arabicHint || ''}</div>
    `;

    document.getElementById('hint-panel').classList.remove('active');

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    const answered = userAnswers[index] !== null;

    document.getElementById('btn-next').disabled = !answered;
    document.getElementById('btn-next').innerText = (index === quizData.length - 1) ? "FINALIZE" : "NEXT";
    document.getElementById('btn-prev').disabled = index === 0;

    const btnSkip = document.getElementById('btn-skip');
    if (answered) {
        btnSkip.classList.add('hidden');
    } else {
        btnSkip.classList.remove('hidden');
        btnSkip.innerText = "SKIP";
    }

    container.className = "options-grid";
    Object.entries(data.options).forEach(([key, opt]) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `
            <div class="option-main">
                <span class="char-idx">${key}</span>
                <span>${opt}</span>
            </div>
            <div class="option-translation">${data.arabicOptions[key]}</div>
        `;
        if (answered) {
            btn.disabled = true;
            if (key === data.correctAnswer) btn.classList.add('correct');
            if (userAnswers[index] === key && key !== data.correctAnswer) btn.classList.add('wrong');
        } else {
            btn.onclick = () => select(key);
        }
        container.appendChild(btn);
    });
}

function select(choice) {
    if (userAnswers[index] !== null) return;
    userAnswers[index] = choice;
    const correct = choice === quizData[index].correctAnswer;
    setBebo(correct ? 'success' : 'error', correct ? 'correct' : 'wrong', index);
    render();
}

function move(dir) {
    if (dir === 1 && index === quizData.length - 1) { finish(); }
    else { index += dir; render(); }
}

function finish() {
    document.getElementById('quiz-ui').classList.add('hidden');
    document.getElementById('results-ui').classList.remove('hidden');
    document.querySelector('.bebo-wrapper').classList.add('hidden');
    const score = userAnswers.filter((a, i) => a === quizData[i].correctAnswer).length;
    const pct = Math.round(score / quizData.length * 100);
    document.getElementById('final-pct').innerText = pct + '%';
    const fb = document.getElementById('final-feedback');
    const category = pct >= 85 ? 'resultsSuccess' : 'resultsAdvice';
    fb.innerText = beboMessages[category][Math.floor(Math.random() * beboMessages[category].length)];

    const failAudio = document.getElementById('audio-fail');
    const successAudio = document.getElementById('audio-success');
    if (pct >= 80) {
        successAudio?.play().catch(() => {});
    } else {
        failAudio?.play().catch(() => {});
    }

    const actionBtn = document.getElementById('results-action');
    if (currentQuizIndex < quizzes.length - 1) {
        actionBtn.innerText = 'CONTINUE TO NEXT QUIZ';
        actionBtn.onclick = startNextQuiz;
    } else {
        actionBtn.innerText = 'RESTART ASSESSMENT';
        actionBtn.onclick = () => location.reload();
    }
}

function startNextQuiz() {
    setCurrentQuiz(currentQuizIndex + 1);
    document.getElementById('results-ui').classList.add('hidden');
    document.getElementById('quiz-ui').classList.remove('hidden');
    render();
}

window.onload = init;
