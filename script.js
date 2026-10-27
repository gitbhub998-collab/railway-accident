function cleanQuizText(value) {
    return typeof value === 'string'
        ? value.replace(/\s*\[cite:[^\]]+\]/gi, '').trim()
        : '';
}

function escapeHtml(value) {
    return cleanQuizText(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function normalizeQuizData(items) {
    return items.map(item => {
        const normalized = { ...item };

        if (!normalized.question) {
            normalized.question = normalized.questionEn || '';
        }
        if (!normalized.arabicQuestion) {
            normalized.arabicQuestion = normalized.questionAr || normalized.translation || '';
        }
        if (typeof normalized.question === 'string') {
            normalized.question = cleanQuizText(normalized.question.replace(/^\s*\d+[.)]\s*/, ''));
        }
        normalized.arabicQuestion = cleanQuizText(normalized.arabicQuestion);
        normalized.options = normalized.options || normalized.optionsEn || {};
        normalized.arabicOptions = normalized.optionsAr || normalized.arabicOptions || {};
        normalized.options = Object.fromEntries(
            Object.entries(normalized.options).map(([key, value]) => [key, cleanQuizText(value)])
        );
        normalized.arabicOptions = Object.fromEntries(
            Object.entries(normalized.arabicOptions).map(([key, value]) => [key, cleanQuizText(value)])
        );
        normalized.hintEn = cleanQuizText(normalized.hintEn || normalized.hint);
        normalized.hintAr = cleanQuizText(normalized.hintAr);
        if (!normalized.arabicOptions) {
            normalized.arabicOptions = {};
        }

        if (Array.isArray(normalized.options)) {
            const optionsObj = {};
            const arabicOptionsObj = {};

            if (Array.isArray(normalized.optionsAr)) {
                const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                normalized.options.forEach((option, index) => {
                    const key = letters[index];
                    if (!key || typeof option !== 'string') return;
                    optionsObj[key] = option;
                    arabicOptionsObj[key] = normalized.optionsAr[index] || '';
                });
                normalized.options = optionsObj;
                normalized.arabicOptions = arabicOptionsObj;
            } else {
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
        }

        if (Number.isInteger(normalized.correctIndex)) {
            normalized.correctAnswer = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[normalized.correctIndex] || '';
        } else if (!normalized.correctAnswer && typeof normalized.answer === 'string') {
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
    return shuffle(items);
}

// الجزء الأول: يحتوي على الأسئلة من 1 إلى 6
const mcqQuestions = window.quizQuestions || [];

const quizDataMain = shuffleQuiz(normalizeQuizData(mcqQuestions));
const quizzes = [quizDataMain].filter(q => q.length > 0);
let currentQuizIndex = 0;
let quizData = quizzes[currentQuizIndex];

let index = 0;
let userAnswers = new Array(quizData.length).fill(null);

const beboMessages = {
    resultsAdvice: [
        "نتيجتك دى يسطا ولا درجه حراره.",
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

const checkpointMessages = {
    success: [
        "عاش يا صحبي كمل اداء مبشر .",
        "توب التوب يا نجم  متنساش تريح عينك.",
        "دحيح دحيح يعنى مفيش كلام",
        "يا عم إنت جامد أهو، أمال كنت مخبي علينا ليه"
    ],
    advice: [
        "استووب قوم اشرب  شكلك بتنام.",
        "إيه يا بطل، أنت بتختبر معلوماتك ولا بتختبر صبرى.",
        "حاسس إنك بتحل بقلبك مش بمعلوماتك",
        "بص يا سيدي، هنعتبر اللي فات بروفة.. ورينا بقى",
        "لسه بدري على الإحباط يا عم، كمّل",
        "شد حيلك يا بطل، فاضل مجموعتين وتقدر ترفع نتيجتك."
    ]
};

const checkpointMessageQueues = {
    success: [],
    advice: []
};
const lastCheckpointMessages = {
    success: '',
    advice: ''
};

function getRandomCheckpointMessage(category) {
    const queue = checkpointMessageQueues[category];
    if (queue.length === 0) {
        const shuffledMessages = shuffle(checkpointMessages[category]);
        if (shuffledMessages.length > 1 && shuffledMessages[0] === lastCheckpointMessages[category]) {
            shuffledMessages.push(shuffledMessages.shift());
        }
        queue.push(...shuffledMessages);
    }

    const message = queue.shift();
    lastCheckpointMessages[category] = message;
    return message;
}

const beboMessageIndexes = {
    resultsAdvice: 0,
    resultsSuccess: 0
};

const checkpointAudioSources = [
    'audio/part1-3.mp3',
    'audio/part2-4.mp3',
    'audio/part3-1.mp3',
    'audio/part4-2.mp3'
];
const checkpointAudioStorageKey = 'lastCheckpointRunFirstAudio';
let checkpointAudioQueue = [];

function getNextCheckpointAudioSource() {
    if (checkpointAudioQueue.length === 0) {
        let previousRunFirstAudio = null;
        try {
            previousRunFirstAudio = localStorage.getItem(checkpointAudioStorageKey);
        } catch (error) {
            console.warn(`Could not read the previous run's first checkpoint audio: ${error.message}`);
        }

        const firstAudioOptions = checkpointAudioSources.filter(source => source !== previousRunFirstAudio);
        const firstAudio = shuffle(firstAudioOptions.length ? firstAudioOptions : checkpointAudioSources)[0];
        checkpointAudioQueue = [
            firstAudio,
            ...shuffle(checkpointAudioSources.filter(source => source !== firstAudio))
        ];

        try {
            localStorage.setItem(checkpointAudioStorageKey, firstAudio);
        } catch (error) {
            console.warn(`Could not save this run's first checkpoint audio: ${error.message}`);
        }
    }

    return checkpointAudioQueue.shift();
}

function getNextBeboMessage(category) {
    const messages = beboMessages[category];
    const message = messages[beboMessageIndexes[category] % messages.length];
    beboMessageIndexes[category]++;
    return message;
}

function setBebo(state, category, specificIdx = -1) {
    // Bebo robot disabled - only results messages will be shown
    return;
}

function init() {
    if (quizzes.length === 0) {
        document.getElementById('quiz-ui').classList.add('hidden');
        document.getElementById('results-ui').classList.remove('hidden');
        document.getElementById('final-pct').innerText = '0%';
        updateFinalScore(0, quizData.length);
        document.getElementById('final-feedback').innerText = 'لا توجد بيانات اختبار متاحة.';
        return;
    }

    document.querySelector('.bebo-wrapper').classList.add('hidden');
    setCurrentQuiz(0);
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
    const hintMarkup = data.hintEn || data.hintAr
        ? `
            <div class="hint-control">
                <button class="hint-toggle" id="hint-toggle" type="button" aria-expanded="false" aria-controls="question-hint" onclick="toggleHint()">
                    SHOW HINT / إظهار التلميح
                </button>
                <div class="hint-panel hidden" id="question-hint" aria-live="polite">
                    ${data.hintEn ? `<p lang="en" dir="ltr">${escapeHtml(data.hintEn)}</p>` : ''}
                    ${data.hintAr ? `<p lang="ar" dir="rtl">${escapeHtml(data.hintAr)}</p>` : ''}
                </div>
            </div>
        `
        : '';

    document.getElementById('question-text').innerHTML = `
        <div class="q-en-main">${index + 1}. ${escapeHtml(data.question)}</div>
        <div class="q-ar-box">${escapeHtml(data.arabicQuestion)}</div>
        ${hintMarkup}
    `;

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    const answered = userAnswers[index] !== null;

    document.getElementById('btn-next').disabled = !answered;
    document.getElementById('btn-next').innerText = (index + 1) % 25 === 0 ? "SECTION COMPLETE" : "NEXT";
    document.getElementById('btn-prev').disabled = index === 0 || index % 25 === 0;

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
                <span>${escapeHtml(opt)}</span>
            </div>
            <div class="option-translation">${escapeHtml(data.arabicOptions[key])}</div>
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

function toggleHint() {
    const hint = document.getElementById('question-hint');
    const button = document.getElementById('hint-toggle');
    const expanded = button.getAttribute('aria-expanded') !== 'true';

    hint.classList.toggle('hidden', !expanded);
    button.setAttribute('aria-expanded', String(expanded));
    button.innerText = expanded
        ? 'HIDE HINT / إخفاء التلميح'
        : 'SHOW HINT / إظهار التلميح';
}

function select(choice) {
    if (userAnswers[index] !== null) return;
    userAnswers[index] = choice;
    const correct = choice === quizData[index].correctAnswer;
    setBebo(correct ? 'success' : 'error', correct ? 'correct' : 'wrong', index);
    render();
}

function move(dir) {
    if (dir < 0) {
        if (index === 0 || index % 25 === 0) return;
        index--;
        render();
        return;
    }

    if ((index + 1) % 25 === 0) {
        showCheckpoint();
        return;
    }

    index++;
    render();
}

function showCheckpoint() {
    const sectionIndex = Math.floor(index / 25);
    const sectionStart = sectionIndex * 25;
    const sectionEnd = Math.min(sectionStart + 25, quizData.length);
    const score = userAnswers
        .slice(sectionStart, sectionEnd)
        .filter((answer, offset) => answer === quizData[sectionStart + offset].correctAnswer)
        .length;
    const passed = score > 18;
    const messageCategory = passed ? 'success' : 'advice';

    document.getElementById('quiz-ui').classList.add('hidden');
    document.getElementById('checkpoint-ui').classList.remove('hidden');
    document.getElementById('checkpoint-title').innerText = `نتيجة الأسئلة ${sectionStart + 1} - ${sectionEnd}`;
    document.getElementById('checkpoint-score').innerText = `إجابات صحيحة: ${score} من ${sectionEnd - sectionStart}`;
    document.getElementById('checkpoint-feedback').innerText =
        getRandomCheckpointMessage(messageCategory);

    const continueButton = document.getElementById('checkpoint-next');
    continueButton.innerText = sectionEnd === quizData.length ? 'عرض النتيجة النهائية' : 'NEXT';
    continueButton.focus();

    const audio = document.getElementById('checkpoint-audio');
    audio.src = getNextCheckpointAudioSource();
    audio.currentTime = 0;
    audio.load();
    const playback = audio.play();
    if (playback) {
        playback.catch(error => console.warn(`Could not play checkpoint feedback audio: ${error.message}`));
    }
}

function continueAfterCheckpoint() {
    document.getElementById('checkpoint-ui').classList.add('hidden');
    if (index === quizData.length - 1) {
        finish();
        return;
    }

    index++;
    document.getElementById('quiz-ui').classList.remove('hidden');
    render();
}

function finish() {
    document.getElementById('quiz-ui').classList.add('hidden');
    document.getElementById('results-ui').classList.remove('hidden');
    document.querySelector('.bebo-wrapper').classList.add('hidden');
    const score = userAnswers.filter((a, i) => a === quizData[i].correctAnswer).length;
    const pct = Math.round(score / quizData.length * 100);
    document.getElementById('final-pct').innerText = pct + '%';
    updateFinalScore(score, quizData.length);
    const fb = document.getElementById('final-feedback');
    const passed = score > 72;
    const category = passed ? 'resultsSuccess' : 'resultsAdvice';
    fb.innerText = getNextBeboMessage(category);

    const actionBtn = document.getElementById('results-action');
    if (currentQuizIndex < quizzes.length - 1) {
        actionBtn.innerText = 'CONTINUE TO NEXT QUIZ';
        actionBtn.onclick = startNextQuiz;
    } else {
        actionBtn.innerText = 'RESTART ASSESSMENT';
        actionBtn.onclick = () => location.reload();

        const audio = document.getElementById('results-audio');
        audio.src = pct >= 85 ? 'audio/success.mp3' : 'audio/fail.mp3';
        audio.currentTime = 0;
        audio.load();
        const playback = audio.play();
        if (playback) {
            playback.catch(error => console.warn(`Could not play final result audio: ${error.message}`));
        }
    }

}

function updateFinalScore(score, total) {
    document.getElementById('final-correct').innerText = String(score);
    document.getElementById('final-total').innerText = String(total);
    document.getElementById('final-score').setAttribute(
        'aria-label',
        `${score} إجابة صحيحة من ${total} سؤال`
    );
}

function startNextQuiz() {
    setCurrentQuiz(currentQuizIndex + 1);
    document.getElementById('results-ui').classList.add('hidden');
    document.getElementById('quiz-ui').classList.remove('hidden');
    render();
}

window.onload = init;
