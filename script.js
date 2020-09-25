window.onload = () => {
    setTimeout(() => {
      document.querySelector("body").classList.add("display");
    }, 4000);
  };
const quizData = [
    {
        question: "Which attribute specifies a unique alphanumeric identifier to be associated with an element?",
        a: "class",
        b: "id",
        c: "article",
        d: "html",
        correct: "b",
    },
    {
        question: "____ files are more compact than the GIF files.",
        a: ".JPG and JPEG",
        b: ".JPG",
        c: ".JPEG",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Which is the formal description of message formats and rules to be followed by computers?",
        a: "Standards",
        b: "Protocol",
        c: "Syntax",
        d: "Language",
        correct: "b",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which of the following function of Array object sorts the elements of an array?",
        a: "toSource()",
        b: "sort()",
        c: "toString()",
        d: "unshift()",
        correct: "b",
    },
    {
        question: "Which program is used by web clients to view the web pages?",
        a: "Web browser",
        b: "Protocol",
        c: "Web server",
        d: "Search Engine",
        correct: "a",
    },
    {
        question: "How many colour names are used by the browsers?",
        a: "8",
        b: "10",
        c: "12",
        d: "16",
        correct: "d",
    },
    {
        question: "Which tag is used to identify the keywords describing the site?",
        a: "Comment tag",
        b: "Title tag",
        c: "Meta tag",
        d: "Anchor tag",
        correct: "c",
    },
    {
        question: "Which are used with a tag to modify its function?",
        a: "Files",
        b: "Functions",
        c: "Attributes",
        d: "Documents",
        correct: "c",
    },
    {
        question: "____ is a collection of controls in HTML.",
        a: "Form",
        b: "Field",
        c: "Table",
        d: "Frame",
        correct: "a",
    },
];

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
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
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