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
        question: "¿Por qué es importante invertir?",
        options: ["Es importante porque ayuda a controlar los gastos y a planificar el uso del dinero, lo que puede ayudar a alcanzar metas financieras y evitar deudas innecesarias", "Es importante para incrementar el patrimonio y generar un flujo de ingresos pasivos, lo que puede ayudar a mejorar la situación financiera y a alcanzar metas a largo plazo.", "es la posibilidad de que se presenten pérdidas o que no se obtengan los beneficios esperados, y es importante considerarlo al momento de tomar decisiones de inversión.", "son títulos que representan una fracción del capital social de una empresa, y son utilizadas para obtener beneficios económicos a través de su compra y venta en el mercado de valores."],
        correct: "Es importante para incrementar el patrimonio y generar un flujo de ingresos pasivos, lo que puede ayudar a mejorar la situación financiera y a alcanzar metas a largo plazo.",
    },
    {
        id: "1",
        question: "¿Qué son las acciones?",
        options: ["Es una entidad financiera que se encarga de reunir el dinero de varios inversionistas y administrarlo en diferentes instrumentos financieros, como acciones o bonos.", "Es una estrategia en la que se invierte en diferentes activos o proyectos, con el fin de reducir el riesgo y maximizar los rendimientos.", "Son aquellas que se tienen que pagar de manera regular y constante, como la renta, las facturas de servicios públicos, seguros y otros.", "Son títulos que representan una fracción del capital social de una empresa, y son utilizadas para obtener beneficios económicos a través de su compra y venta en el mercado de valores."],
        correct: "Son títulos que representan una fracción del capital social de una empresa, y son utilizadas para obtener beneficios económicos a través de su compra y venta en el mercado de valores.",
    },
    {
        id: "2",
        question: "¿Qué son los bonos?",
        options: ["Son títulos de deuda que emiten empresas o gobiernos para obtener financiamiento, y ofrecen a los inversionistas un rendimiento en forma de intereses.", "Es una estrategia en la que se invierte en diferentes activos o proyectos, con el fin de reducir el riesgo y maximizar los rendimientos.", "Son las inversiones en el mercado de valores, en bienes raíces, en fondos de inversión y en negocios.", "Es el beneficio económico que se obtiene de una inversión, y puede ser medido en términos de rentabilidad o de ganancia de capital."],
        correct: "Son títulos de deuda que emiten empresas o gobiernos para obtener financiamiento, y ofrecen a los inversionistas un rendimiento en forma de intereses.",
    },
    {
        id: "3",
        question: "¿Qué es la diversificación de la inversión?:",
        options: ["Son títulos de deuda que emiten empresas o gobiernos para obtener financiamiento, y ofrecen a los inversionistas un rendimiento en forma de intereses.", "Es la posibilidad de que se presenten pérdidas o que no se obtengan los beneficios esperados, y es importante considerarlo al momento de tomar decisiones de inversión.", "Es una estrategia en la que se invierte en diferentes activos o proyectos, con el fin de reducir el riesgo y maximizar los rendimientos.", "es una entidad financiera que se encarga de reunir el dinero de varios inversionistas y administrarlo en diferentes instrumentos financieros, como acciones o bonos."],
        correct: "Es una estrategia en la que se invierte en diferentes activos o proyectos, con el fin de reducir el riesgo y maximizar los rendimientos.",
    },
    {
        id: "4",
        question: "¿Qué es la inversión en bienes raíces?",
        options: ["Consiste en comprar propiedades inmobiliarias con el fin de obtener un rendimiento económico a través del alquiler o de la venta de la propiedad en el futuro.", "Es la posibilidad de que se presenten pérdidas o que no se obtengan los beneficios esperados, y es importante considerarlo al momento de tomar decisiones de inversión.", "Es una entidad financiera que se encarga de reunir el dinero de varios inversionistas y administrarlo en diferentes instrumentos financieros, como acciones o bonos.", "Es el beneficio económico que se obtiene de una inversión, y puede ser medido en términos de rentabilidad o de ganancia de capital."],
        correct: "Consiste en comprar propiedades inmobiliarias con el fin de obtener un rendimiento económico a través del alquiler o de la venta de la propiedad en el futuro.",
    },
    {
        id: "5",
        question: "¿Qué es el riesgo en la inversión?",
        options: ["Consiste en comprar propiedades inmobiliarias con el fin de obtener un rendimiento económico a través del alquiler o de la venta de la propiedad en el futuro.", "Es la posibilidad de que se presenten pérdidas o que no se obtengan los beneficios esperados, y es importante considerarlo al momento de tomar decisiones de inversión.", "Es el beneficio económico que se obtiene de una inversión, y puede ser medido en términos de rentabilidad o de ganancia de capital.", "Son títulos de deuda que emiten empresas o gobiernos para obtener financiamiento, y ofrecen a los inversionistas un rendimiento en forma de intereses."],
        correct: "Es la posibilidad de que se presenten pérdidas o que no se obtengan los beneficios esperados, y es importante considerarlo al momento de tomar decisiones de inversión.",
    }, {
        id: "6",
        question: "¿Qué es la inversión?",
        options: ["Es la acción de destinar una cantidad de dinero en un proyecto o activo con el fin de obtener un beneficio económico en el futuro.", "es el beneficio económico que se obtiene de una inversión, y puede ser medido en términos de rentabilidad o de ganancia de capital.", "Son títulos que representan una fracción del capital social de una empresa, y son utilizadas para obtener beneficios económicos a través de su compra y venta en el mercado de valores.", "es una estrategia en la que se invierte en diferentes activos o proyectos, con el fin de reducir el riesgo y maximizar los rendimientos."],
        correct: "Es la acción de destinar una cantidad de dinero en un proyecto o activo con el fin de obtener un beneficio económico en el futuro.",
    },
    {
        id: "7",
        question: "¿Qué es un fondo de inversión?",
        options: ["Es una entidad financiera que se encarga de reunir el dinero de varios inversionistas y administrarlo en diferentes instrumentos financieros, como acciones o bonos.", "Son títulos que representan una fracción del capital social de una empresa, y son utilizadas para obtener beneficios económicos a través de su compra y venta en el mercado de valores.", "Es el beneficio económico que se obtiene de una inversión, y puede ser medido en términos de rentabilidad o de ganancia de capital.", "Es la acción de destinar una cantidad de dinero en un proyecto o activo con el fin de obtener un beneficio económico en el futuro."],
        correct: "Es una entidad financiera que se encarga de reunir el dinero de varios inversionistas y administrarlo en diferentes instrumentos financieros, como acciones o bonos.",
    },
    {
        id: "8",
        question: "¿Qué es el rendimiento de la inversión?:",
        options: ["Es una entidad financiera que se encarga de reunir el dinero de varios inversionistas y administrarlo en diferentes instrumentos financieros, como acciones o bonos.", "Es una entidad financiera que se encarga de reunir el dinero de varios inversionistas y administrarlo en diferentes instrumentos financieros, como acciones o bonos.", "Es el beneficio económico que se obtiene de una inversión, y puede ser medido en términos de rentabilidad o de ganancia de capital.", "Es una estrategia en la que se invierte en diferentes activos o proyectos, con el fin de reducir el riesgo y maximizar los rendimientos."],
        correct: "Es el beneficio económico que se obtiene de una inversión, y puede ser medido en términos de rentabilidad o de ganancia de capital.",
    },
    {
        id: "9",
        question: "¿Cuáles son los tipos de inversión más comunes?:",
        options: ["Son las inversiones en el mercado de valores, en trasnacionales, en fondos de inversión y en negocios.", "Son las inversiones en el mercado de valores, en bienes raíces, en fondos de inversión y en negocios.", "Son las inversiones en el mercado de valores, en nacionales, en fondos de inversión y en negocios.", "Son las inversiones en el mercado de valores, en bienes raíces, en fondos de inversión y en negocios."],
        correct: "Son las inversiones en el mercado de valores, en bienes raíces, en fondos de inversión y en negocios.",
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