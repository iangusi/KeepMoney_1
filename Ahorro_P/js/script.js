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
let answerr = false;

//Questions and Options array
const quizArray = [
    {
        id: "0",
        question: "¿Qué es el ahorro? ",
        options: ["El ahorro es la acción de separar una parte del ingreso para destinarlo a un fin específico en el futuro.", 
        "El ahorro es gastar todo el dinero que se tiene sin guardar nada para el futuro.", 
        "El ahorro se refiere a pedir prestado dinero a otras personas para financiar gastos personales.", 
        "El ahorro implica gastar todo el dinero de inmediato sin pensar en el futuro."],
        correct: "El ahorro es la acción de separar una parte del ingreso para destinarlo a un fin específico en el futuro.",
    },
    {
        id: "1",
        question: "¿Por qué es importante ahorrar? ",
        options: ["Ahorrar no es importante, es mejor gastar todo el dinero en cosas que nos hagan felices en el presente.", 
        "El ahorro no tiene ninguna importancia, ya que el dinero siempre estará disponible cuando lo necesitemos.", 
        "Ahorrar es importante solo para personas a las que les gusta privarse de disfrutar el dinero en el presente.", 
        "El ahorro es importante para alcanzar metas financieras a largo plazo, tener un respaldo financiero ante imprevistos y mejorar la calidad de vida en el futuro."],
        correct: "El ahorro es importante para alcanzar metas financieras a largo plazo, tener un respaldo financiero ante imprevistos y mejorar la calidad de vida en el futuro.",
    },
    {
        id: "2",
        question: "¿Cuál es la técnica de ahorro más efectiva?",
        options: ["La técnica más efectiva es la regla del 50/30/20, que consiste en destinar el 50% de los ingresos a necesidades básicas, el 30% a gastos personales y el 20% al ahorro.", 
        "La técnica más efectiva es gastar todo el dinero que se tiene y no preocuparse por ahorrar.", 
        "La técnica más efectiva es destinar el 100% de los ingresos al ahorro, sin tener en cuenta los gastos personales o las necesidades básicas.", 
        "La técnica más efectiva es ahorrar solo cuando se tenga dinero extra, sin seguir un plan o porcentaje específico."],
        correct: "La técnica más efectiva es la regla del 50/30/20, que consiste en destinar el 50% de los ingresos a necesidades básicas, el 30% a gastos personales y el 20% al ahorro.",
    },
    {
        id: "3",
        question: "¿Qué es el ahorro automático?",
        options: ["El ahorro automático es una técnica en la que se establece una cantidad a ahorrar de forma periódica, que se descuenta directamente de la cuenta bancaria para evitar gastos innecesarios.", 
        "El ahorro automático es un método en el que se retira dinero de la cuenta bancaria de forma aleatoria y sin control, lo que puede generar pérdidas financieras.", 
        "El ahorro automático es un proceso en el que se invierte todo el dinero disponible sin tener en cuenta las necesidades personales.", 
        "El ahorro automático es una técnica en la que se deposita el dinero ahorrado en una cuenta de gastos diarios, lo que dificulta su acumulación a largo plazo."],
        correct: "El ahorro automático es una técnica en la que se establece una cantidad a ahorrar de forma periódica, que se descuenta directamente de la cuenta bancaria para evitar gastos innecesarios.",
    },
    {
        id: "4",
        question: "¿Cómo puedo ahorrar en gastos fijos?",
        options: [" Se puede ahorrar en gastos fijos negociando contratos de servicios como internet, telefonía o televisión, buscando promociones y descuentos en seguros, entre otros.", 
        "No se puede ahorrar en gastos fijos, ya que son costos obligatorios y no se pueden reducir.", 
        "Para ahorrar en gastos fijos, es necesario contratar servicios adicionales que aumenten los costos.", 
        "La única forma de ahorrar en gastos fijos es reduciendo la calidad de los servicios contratados y sacrificando su funcionalidad."],
        correct: " Se puede ahorrar en gastos fijos negociando contratos de servicios como internet, telefonía o televisión, buscando promociones y descuentos en seguros, entre otros.",
    },
    {
        id: "5",
        question: "¿Qué es el ahorro de energía?",
        options: ["El ahorro de energía es innecesario, ya que la energía es un recurso ilimitado y no tiene impacto en las finanzas personales.", 
        "El ahorro de energía implica utilizar dispositivos electrónicos de alto consumo todo el tiempo sin apagarlos, lo que aumenta los costos.", 
        "El ahorro de energía es solo una moda pasajera y no tiene beneficios reales en términos de ahorro económico.", 
        "El ahorro de energía es una técnica que consiste en reducir el consumo de energía eléctrica y agua en el hogar para disminuir el gasto en estos servicios."],
        correct: "El ahorro de energía es una técnica que consiste en reducir el consumo de energía eléctrica y agua en el hogar para disminuir el gasto en estos servicios.",
    }, {
        id: "6",
        question: "¿Qué es el ahorro en compras? ",
        options: ["El ahorro de energía es innecesario, ya que la energía es un recurso ilimitado y no tiene impacto en las finanzas personales.", 
        "El ahorro de energía implica utilizar dispositivos electrónicos de alto consumo todo el tiempo sin apagarlos, lo que aumenta los costos.", 
        "El ahorro en compras es una técnica en la que se busca adquirir productos y servicios de calidad a precios más bajos, por medio de comparar precios, utilizar cupones, buscar promociones y descuentos, entre otros.", 
        "El ahorro de energía es solo una moda pasajera y no tiene beneficios reales en términos de ahorro económico."],
        correct: "El ahorro en compras es una técnica en la que se busca adquirir productos y servicios de calidad a precios más bajos, por medio de comparar precios, utilizar cupones, buscar promociones y descuentos, entre otros.",
    },
    {
        id: "7",
        question: "¿Cómo puedo ahorrar en el transporte? ",
        options: ["Se puede ahorrar en el transporte utilizando medios de transporte alternativos como bicicletas, caminar o utilizar transporte público, además de planificar los recorridos para evitar viajes innecesarios.", 
        "Para ahorrar en el transporte, es necesario utilizar siempre taxis o servicios de transporte privados, incluso para distancias cortas.", 
        "Ahorrar en el transporte implica comprar un vehículo de lujo y utilizarlo para todos los desplazamientos, sin importar el costo del combustible o el mantenimiento.", 
        "El ahorro en el transporte no es posible, ya que siempre se deben utilizar medios de transporte costosos y no existen alternativas más económicas."],
        correct: "Se puede ahorrar en el transporte utilizando medios de transporte alternativos como bicicletas, caminar o utilizar transporte público, además de planificar los recorridos para evitar viajes innecesarios.",
    },
    {
        id: "8",
        question: "¿Qué es el ahorro en comida? ",
        options: ["El ahorro en comida implica comer solo alimentos de baja calidad y poco saludables para reducir los costos.", 
        "Ahorrar en comida significa saltarse comidas regularmente para reducir el gasto en alimentos.", 
        "El ahorro en comida es una técnica en la que se busca ahorrar en los gastos de alimentación a través de la planificación de menús, la compra de productos en ofertas y la reducción del desperdicio de alimentos.", 
        "El ahorro en comida no es necesario, ya que la alimentación no tiene impacto significativo en las finanzas personales."],
        correct: "El ahorro en comida es una técnica en la que se busca ahorrar en los gastos de alimentación a través de la planificación de menús, la compra de productos en ofertas y la reducción del desperdicio de alimentos.",
    },
    {
        id: "9",
        question: "¿Cómo puedo ahorrar en el entretenimiento? ",
        options: ["Para ahorrar en el entretenimiento, es necesario gastar grandes cantidades de dinero en eventos y actividades exclusivas.", 
        "Ahorrar en el entretenimiento implica evitar cualquier forma de diversión y entretenimiento para reducir los gastos.", 
        "Se puede ahorrar en el entretenimiento buscando opciones gratuitas o económicas como actividades al aire libre, museos y exposiciones gratuitas, entre otras opciones.", 
        "El ahorro en el entretenimiento no es posible, ya que todas las opciones gratuitas o económicas carecen de valor y no son satisfactorias."],
        correct: "Se puede ahorrar en el entretenimiento buscando opciones gratuitas o económicas como actividades al aire libre, museos y exposiciones gratuitas, entre otras opciones.",
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
        if(answerr == true){
			answerr = false;
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Tuviste " + scoreCount + " respuestas correctas de " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " de " + quizArray.length + " preguntas";
            //display quiz
            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }}
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
        countOfQuestion.innerHTML = 1 + " de " + quizArray.length + " preguntas";
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
    answerr = true;
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
