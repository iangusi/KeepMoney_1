//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
    {
        id: "0",
        question: "¿Cuántas casas de bolsa existen en México?",
        options: ["28", "35", "31", "19"],
        correct: "35",
    },
    {
        id: "1",
        question: "Este sistema nos da ciertos beneficios tales como una cobranza menor de impuestos si es que nosotros invertimos desde el sistema financiero mexicano.",
        options: ["Fondo Monetario Internacional", "Sistema Mundial del Comercio", "MERCOSUR", "Sistema Internacional de Cotizaciones"],
        correct: "Sistema Internacional de Cotizaciones",
    },
    {
        id: "2",
        question: "Al momento de empezar a invertir en GBM se tienen dos opciones a seguir:",
        options: ["Business Deal & International Business", "Trading & Trading Global", "Inversión exterior e inversión local", "Inversión completa e inversión parcial"],
        correct: "Trading & Trading Global",
    },
    {
        id: "3",
        question: "Esta plataforma no cuenta con ningún intermediario que te permita invertir en la bolsa americana, perdiendo así también, el beneficio de comprar fracciones de acciones:",
        options: ["GMB", "TDAmeritrade", "InteractiveBrokers", "Bursanet"],
        correct: "Bursanet",
    },
    {
        id: "4",
        question: "Una buena opción para invertir con información proporcionada opr inversionistas reconocidos sería:",
        options: ["TDAmeritrade", "GMB", "Bursanet", "InteractiveBrokers"],
        correct: "TDAmeritrade",
    },
    {
        id: "5",
        question: "Las páginas que cuentan con el monto mínimo de inversión son:",
        options: ["InteractiveBrokers & TDAmeritrade", "Bursanet & TDAmeritrade", "GMB & Bursanet", "GBM & TDAmeritrade"],
        correct: "InteractiveBrokers & TDAmeritrade",
    }, {
        id: "6",
        question: "Las siglas de 'GMB' quieren decir:",
        options: ["Grupo Mexicano de Bienes", "Grupo Bursátil Mexicano", "Grupo Mexicano Benemérito", "Grupo del Bienestar Mundial"],
        correct: "Grupo Bursátil Mexicano",
    },
    {
        id: "7",
        question: "La tasa de comisión por una transferencia internacional hecha desde Bursanet es de:",
        options: ["$7 USD por operación", "$5 USD por operación", "$8 USD por operación", "$6 USD por operación"],
        correct: "$6 USD por operación",
    },
    {
        id: "8",
        question: "Esta plataforma no te permite comprar acciones fraccionadas y no cuenta con criptomonedas:",
        options: ["GMB", "TDAmeritrade", "Bursanet", "InteractiveBrokers"],
        correct: "TDAmeritrade",
    },
    {
        id: "9",
        question: "Esta plataforma te permite interactuar coon todas las bolsas del mundo:",
        options: ["GMB", "TDAmeritrade", "Bursanet", "InteractiveBrokers"],
        correct: "InteractiveBrokers",
    },
];

//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}

//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};
