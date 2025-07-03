// One sample question for testing
const quizData = {
    question: "What is the value of \\( \\int_0^1 x^2 dx \\) ?",
    options: [
        "1/2",
        "1/3",
        "1/4",
        "2/3"
    ],
    correct: 1, // index of correct option
    explanation: "The integral \\( \\int_0^1 x^2 dx = [x^3/3]_0^1 = (1^3/3) - (0^3/3) = 1/3.\\"
};

const questionDiv = document.getElementById('question');
const optionsDiv = document.getElementById('options');
const explanationDiv = document.getElementById('explanation');

function loadQuestion() {
    questionDiv.innerHTML = quizData.question;
    optionsDiv.innerHTML = '';
    explanationDiv.classList.add('hidden');
    quizData.options.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.onclick = () => selectOption(idx, btn);
        optionsDiv.appendChild(btn);
    });
}

function selectOption(selectedIdx, btn) {
    // Disable all buttons after selection
    Array.from(optionsDiv.children).forEach(b => b.disabled = true);
    btn.classList.add('selected');
    // Show explanation
    explanationDiv.innerHTML = (selectedIdx === quizData.correct)
        ? "Correct!<br><br>" + quizData.explanation
        : "Incorrect.<br><br>" + quizData.explanation;
    explanationDiv.classList.remove('hidden');
}

window.onload = loadQuestion;
