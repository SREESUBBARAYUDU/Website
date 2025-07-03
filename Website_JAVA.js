const quizData = [
    {
        question: "Which number should come next in the series: 2, 4, 8, 16, ?",
        options: ["18", "24", "32", "20"],
        correct: 2,
        explanation: "Each number is multiplied by 2. Next is 16 × 2 = 32."
    },
    {
        question: "Find the odd one out: Apple, Banana, Carrot, Mango",
        options: ["Apple", "Banana", "Carrot", "Mango"],
        correct: 2,
        explanation: "Carrot is a vegetable; the others are fruits."
    },
    {
        question: "If CAT = 24 and DOG = 26, then COW = ?",
        options: ["28", "29", "41", "42"],
        correct: 0,
        explanation: "C=3, A=1, T=20 → 3+1+20=24. COW: 3+15+23=41."
    },
    {
        question: "Which word cannot be formed from 'IMAGINATION'?",
        options: ["MAGIC", "NATION", "MOTION", "ACTION"],
        correct: 0,
        explanation: "'MAGIC' needs a 'C', which is not in 'IMAGINATION'."
    },
    {
        question: "If 1=5, 2=25, 3=325, 4=4325, then 5=?",
        options: ["54325", "5", "25", "None"],
        correct: 0,
        explanation: "Pattern: Add the number in front of the previous result. So, 5=54325."
    },
    {
        question: "Which is the odd one out: 3, 5, 11, 14, 17",
        options: ["3", "5", "11", "14"],
        correct: 3,
        explanation: "14 is not a prime number; the others are."
    },
    {
        question: "If you rearrange the letters 'CIFAIPC', you get the name of a:",
        options: ["City", "Animal", "Ocean", "Country"],
        correct: 1,
        explanation: "'PACIFIC' is an ocean."
    },
    {
        question: "Which one is different from the rest?",
        options: ["Triangle", "Rectangle", "Circle", "Square"],
        correct: 2,
        explanation: "Circle has no sides; the others have straight sides."
    },
    {
        question: "What comes next: J, F, M, A, M, J, ?",
        options: ["J", "A", "S", "O"],
        correct: 0,
        explanation: "First letters of months: July comes after June."
    },
    {
        question: "Which number is missing: 3, 6, 9, __, 15",
        options: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "The sequence increases by 3. 9+3=12."
    }
];

let currentQuestion = 0;
let score = 0;

const homeScreen = document.getElementById('home-screen');
const startBtn = document.getElementById('start-btn');
const quizScreen = document.getElementById('quiz-screen');
const questionDiv = document.getElementById('question');
const optionsDiv = document.getElementById('options');
const explanationDiv = document.getElementById('explanation');
const resultScreen = document.getElementById('result-screen');
const finalScoreDiv = document.getElementById('final-score');
const restartBtn = document.getElementById('restart-btn');

function showHome() {
    homeScreen.classList.remove('hidden');
    quizScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    explanationDiv.classList.add('hidden');
    currentQuestion = 0;
    score = 0;
}

function startQuiz() {
    homeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    resultScreen.classList.add('hidden');
    explanationDiv.classList.add('hidden');
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion >= quizData.length) {
        showResult();
        return;
    }
    questionDiv.innerHTML = quizData[currentQuestion].question;
    optionsDiv.innerHTML = '';
    explanationDiv.classList.add('hidden');
    quizData[currentQuestion].options.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.onclick = () => selectOption(idx, btn);
        optionsDiv.appendChild(btn);
    });
}

function selectOption(selectedIdx, btn) {
    Array.from(optionsDiv.children).forEach(b => b.disabled = true);
    btn.classList.add('selected');
    const isCorrect = selectedIdx === quizData[currentQuestion].correct;
    explanationDiv.innerHTML = (isCorrect ? "Correct!<br><br>" : "Incorrect.<br><br>") + quizData[currentQuestion].explanation;
    explanationDiv.classList.remove('hidden');
    setTimeout(() => {
        if (isCorrect) {
            score++;
            currentQuestion++;
            loadQuestion();
        } else {
            showResult();
        }
    }, 1500);
}

function showResult() {
    quizScreen.classList.add('hidden');
    explanationDiv.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    finalScoreDiv.innerHTML = `Your score: <b>${score}</b> out of ${quizData.length}`;
}

startBtn.onclick = startQuiz;
restartBtn.onclick = showHome;

showHome();
