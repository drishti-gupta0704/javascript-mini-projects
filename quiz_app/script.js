
let questionText = document.getElementById("question");
let optionsDiv = document.getElementById("options");
let nextBtn = document.getElementById("nextBtn");
let scoreText = document.getElementById("score");

let quizData = [

    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Transfer Machine Language",
            "Home Tool Markup Language",
            "Hyperlinks Text Management Language"
        ],
        correct: "Hyper Text Markup Language"
    },

    {
        question: "Which language is used for styling web pages?",
        options: [
            "HTML",
            "Python",
            "CSS",
            "Java"
        ],
        correct: "CSS"
    },

    {
        question: "Which keyword declares variable in JavaScript?",
        options: [
            "int",
            "var",
            "string",
            "define"
        ],
        correct: "var"
    }

];

let currentQuestion = 0;
let score = 0;


// load first question
loadQuestion();

function loadQuestion() {

    optionsDiv.innerHTML = "";
    let currentQuiz = quizData[currentQuestion];
    questionText.innerText = currentQuiz.question;

    currentQuiz.options.forEach(function (option) {

        let button = document.createElement("button");

        button.innerText = option;

        button.addEventListener("click", function () {

            if (option === currentQuiz.correct) {
                score++;

            }

            let allButtons =
                optionsDiv.querySelectorAll("button");

            allButtons.forEach(function (btn) {

                btn.disabled = true;

            });

        });

        optionsDiv.appendChild(button);

    });

}


nextBtn.addEventListener("click", function () {
    currentQuestion++;


    if (currentQuestion >= quizData.length) {
        questionText.innerText = "Quiz Completed!";
        optionsDiv.innerHTML = "";

        nextBtn.style.display = "none";
        scoreText.innerText =
            "Your Score: " +
            score +
            "/" +
            quizData.length;

    }

    else {

        loadQuestion();

    }

});