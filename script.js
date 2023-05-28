
const quizData = [
    {
        question: "1) Which planet is known as the 'Red Planet'?",
        options: ["Venus", "Mars", "Jupitor", "Earth"],
        answer: "Mars"
    },
    {
        question: "2) Which country is known as the 'Land of the Rising Sun'?",
        options: ["China", "Japan", "India", "South Korea"],
        answer: "Japan"
    },
    {
        question: "3) What is the largest organ in the human body?",
        options: ["Brain", "Heart", "Liver", "Skin"],
        answer: "Skin"
    },
    {
        question: "4) Which animal is known as the 'King of the Jungle'?",
        options: ["Elephant", "Lion", "Tiger", "Gorilla"],
        answer: "Lion"
    },
    {
        question: "5) Who is the author of the Harry Potter book series?",
        options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Stephen King"],
        answer: "J.K. Rowling"
    }
];



const container = document.querySelector(".container");
const questionElem = document.getElementById("question");
const optionsElem = document.getElementById("options");
const submitBtn = document.getElementById("submit");
const scoreElem = document.getElementById("score");

let currentQuestion = 0;
let score = 0;


function displayQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionElem.textContent = currentQuiz.question;

    optionsElem.innerHTML = "";
    currentQuiz.options.forEach(option => {
        const radioElem = document.createElement("input");
        radioElem.type = "radio";
        radioElem.name = "answer";
        radioElem.value = option;
        optionsElem.appendChild(radioElem);

        const labelElem = document.createElement("label");
        labelElem.textContent = option;
        optionsElem.appendChild(labelElem);

        optionsElem.appendChild(document.createElement("br"));
    });
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        if (selectedAnswer.value === quizData[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;

        if (currentQuestion < quizData.length) {
            displayQuestion();
        } else {
            let message = "";
            let emoji = "";

            if (score === 0 || score === 1) {
                message = "Very bad !";
                emoji = "😞";
            } else if (score === 2 || score === 3 || score === 4) {
                message = "Better! Keep practicing!";
                emoji = "👍";
            } else if (score === 5) {
                message = "Congratulations! You got a perfect score!";
                emoji = "🎉";
            }

            container.innerHTML = `<h2>Quiz Completed</h2><p>Your score: ${score}/${quizData.length}</p><p>${message}</p><p>${emoji}</p>`;
        }
    }
}

submitBtn.addEventListener("click", checkAnswer);
displayQuestion();
