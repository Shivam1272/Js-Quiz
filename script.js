const quizData = [
    {
        question: "Inside which HTML element do we put the JavaScript? ",
        a: '<script>',
        b: '<js>',
        c: '<javascript>',
        d: '<scripting>',
        correct: 'a',
    },
    {
        question: "How do you write " + "'Hello World'" + " in an alert box? ",
        a: 'msg("Hello World");',
        b: 'msgBox("Hello World");',
        c: 'alertBox("Hello World"); ',
        d: 'alert("Hello World");',
        correct: 'd',
    },
    {
        question: "How does a FOR loop start? ",
        a: 'for (i = 0; i <= 5; i++)  ',
        b: 'for (i = 0; i <= 5)',
        c: 'for i = 1 to 5',
        d: 'for (i <= 5; i++)',
        correct: 'a',
    },
    {
        question: "What is the correct way to write a JavaScript array? ",
        a: 'var colors = (1:"red", 2:"green", 3:"blue")',
        b: 'var colors = ["red", "green", "blue"]',
        c: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
        d: 'var colors = "red", "green", "blue"',
        correct: 'b',
    },
    {
        question: "How do you round the number 7.25, to the nearest integer? ",
        a: 'Math.rnd(7.25)',
        b: 'rnd(7.25)',
        c: 'Math.round(7.25)  ',
        d: 'round(7.25)',
        correct: 'c',
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        a: 'onmouseclick',
        b: 'onchange',
        c: 'onmouseover',
        d: 'onclick ',
        correct: 'a',
    },
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer == quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});



