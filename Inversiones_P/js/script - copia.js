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
        question: "¿Cuál es la utilidad de una inversión?",
        options: ["Es la clave del crecimiento económico y el progreso. Por tal motivo pese a que involucra un riesgo, con el seguimiento adecuado es posible hacer que el dinero que se invierte crezca y en un futuro lejano o cercano será posible disponer de dicho dinero.", "Es importante para incrementar el patrimonio y generar un flujo de ingresos pasivos, lo que puede ayudar a mejorar la situación financiera y a alcanzar metas a largo plazo.", "es la posibilidad de que se presenten pérdidas o que no se obtengan los beneficios esperados, y es importante considerarlo al momento de tomar decisiones de inversión.", "son títulos que representan una fracción del capital social de una empresa, y son utilizadas para obtener beneficios económicos a través de su compra y venta en el mercado de valores."],
        correct: "Sistema Internacional de Cotizaciones",
    },
    {
        id: "2",
        question: "¿Qué es la inversión?:",
        options: ["Dinero que, en concepto de paga, recibe regularmente una persona de la empresa o entidad para la que trabaja.", "Es la acción de destinar una cantidad de dinero en un proyecto o activo con el fin de obtener un beneficio económico en el futuro.", "Moneda antigua que estuvo vigente en diversos países y que tenía diferentes valores según la época.", " partida que se asienta en el lado del haber. Se trata de un asiento que se contrapone al cargo, que se da en el lado del deber."],
        correct: "Es la acción de destinar una cantidad de dinero en un proyecto o activo con el fin de obtener un beneficio económico en el futuro.",
    },
    {
        id: "3",
        question: "¿Cuál es el activo más importante con el que cuentan las personas menores?",
        options: ["Energía", "Tiempo", "Dinero", "Creatividad"],
        correct: "Tiempo",
    },
    {
        id: "4",
        question: "¿Por qué el hecho de tener mucho dinero es suficiente?",
        options: ["Porque uno lo gasta rápido", "Es más fácil perderlo", "Porque uno no sabe en qué gastarlo", "Porque se requiere un poco de educación financiera primero"],
        correct: "Porque se requiere un poco de educación financiera primero",
    },
    {
        id: "5",
        question: "Es una forma en la cual podemos invertir nuestro tiempo de manera inteligente en términos de inversiones:",
        options: ["Pensar bien qué carrera eligiremos para la universidad", "Hacer los deberes de la casa", "Leer libros de ficción", "Escuchar tu música favorita"],
        correct: "InteractiveBrokers & TDAmeritrade",
    }, {
        id: "6",
        question: "Es una acción que comprende una pequeña inversión:",
        options: ["Pagar la renta", "Pagar la cuenta de luz", "Abrir un pequeño negocio", "Comprar alimentos"],
        correct: "Abrir un pequeño negocio",
    },
    {
        id: "7",
        question: "El mundo de las inversiones puede dividirse en:",
        options: ["Generales y específicas", "Renta fija y renta variable", "Mundiales y locales", "Favorables y desfavorables"],
        correct: "Renta fija y renta variable",
    },
    {
        id: "8",
        question: "¿En qué consiste la renta fija?",
        options: ["Es la acción de destinar una cantidad de dinero en un proyecto o activo con el fin de obtener un beneficio económico en el futuro.", "Moneda antigua que estuvo vigente en diversos países y que tenía diferentes valores según la época.", " partida que se asienta en el lado del haber. Se trata de un asiento que se contrapone al cargo, que se da en el lado del deber.", "Son aquellas inversiones en las que se te asegura una ganancia regularmente con bajo o incluso nulo riesgo, sin embargo, el rendimiento que se obtiene es poco."],
        correct: "Son aquellas inversiones en las que se te asegura una ganancia regularmente con bajo o incluso nulo riesgo, sin embargo, el rendimiento que se obtiene es poco.",
    },
    {
        id: "9",
        question: "¿En qué consiste la renta variable?",
        options: ["Es en donde están las criptos, las acciones, y no tienen una garantía de como les va a ir a lo largo plazo, sin embargo, podemos obtener una mayor cantidad de rendimiento asumiendoun riesgo mayor que con la renta fija.", "Consiste en comprar propiedades inmobiliarias con el fin de obtener un rendimiento económico a través del alquiler o de la venta de la propiedad en el futuro.", "Es una estrategia en la que se invierte en diferentes activos o proyectos, con el fin de reducir el riesgo y maximizar los rendimientos.", "es la posibilidad de que se presenten pérdidas o que no se obtengan los beneficios esperados, y es importante considerarlo al momento de tomar decisiones de inversión."],
        correct: "Es en donde están las criptos, las acciones, y no tienen una garantía de como les va a ir a lo largo plazo, sin embargo, podemos obtener una mayor cantidad de rendimiento asumiendoun riesgo mayor que con la renta fija.",
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