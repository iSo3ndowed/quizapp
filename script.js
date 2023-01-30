const quizData = [
    {
        Question: "What is the largest canyon in the world?",
        a: "Verdon Gorge, France",
        b: "King’s Canyon, Australia",
        c: "Grand Canyon, USA",
        d: "Fjaðrárgljúfur Canyon, Iceland",
        correct: "c",
    },
    {
        Question: "When did Hitler invade Poland?",
        a: "1st September 1939",
        b: "11th November 1939",
        c: "8th May 1940",
        d: "1st December 1940",
        correct: "a",
    },
    {
        Question: "How old is Javascript?",
        a: "10",
        b: "23",
        c: "73",
        d: "31",
        correct: "a",
    },
    {
        Question: "What is the largest continent in size?",
        a: "Africa",
        b: "Asia",
        c: "Europe",
        d: "North America",
        correct: "b",
    },
    {
        Question: "Who was George W. Bush’ vice president?",
        a: "Kamala Harris",
        b: "Joe Biden",
        c: "Dick Cheney",
        d: "Al Gore",
        correct: "c",
    },
    {
        Question: "What is the longest river in the world?",
        a: "Amazon River",
        b: "Nile",
        c: "Yellow River",
        d: "Congo River",
        correct: "b",
    },
    {
        Question: "Which country is the footballer Cristiano Ronaldo from?",
        a: "Spain",
        b: "Brazil",
        c: "Uruguay",
        d: "Portugal",
        correct: "d",
    },
    {
        Question: "In which city is the Juventus Football Club based?",
        a: "Turin",
        b: "Barcelona",
        c: "Manchester",
        d: "Marseille",
        correct: "a",
    },
    {
        Question: "If you are born on the 1st of January, which star sign are you?",
        a: "Scorpio",
        b: "Capricorn",
        c: "Libra",
        d: "Aries",
        correct: "b",
    }
];
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");
const submitBtn = document.getElementById("submit");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const answerEl = document.querySelectorAll(".answer");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.Question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function unloadQuiz(){
    let answer = undefined;
    answerEl.forEach((answerEl) => {
        answerEl.checked = true;
    });
}

function getSelected(){
    let answer = undefined;

    answerEl.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
        
    });

    return answer; 
}

function deselectAnswers() {
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

nextBtn.addEventListener("click", () => {
    
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
    }

    currentQuiz++;

    if(currentQuiz === quizData.length){
        nextBtn.innerHTML = "SUBMIT";
        nextBtn.style.backgroundColor = "Green"
        alert("Are you sure you want to SUBMIT?");
        quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        <button onclick = "location.reload()">Reload</button>
        `;
    }
    if(currentQuiz < quizData.length){
        loadQuiz();
    }
});
prevBtn.addEventListener("click", () => {
        currentQuiz--;
        loadQuiz();
        
});




