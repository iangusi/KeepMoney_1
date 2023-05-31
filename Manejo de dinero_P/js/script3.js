//References
let timeLeft = document.querySelector(".time-left");
let nextBtn = document.getElementById("next-button");
let quizContainer = document.getElementById("container");
let quizContainer2 = document.getElementById("container2");
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
        question: "¿Cuáles son los principales factores a considerar al elegir una cuenta bancaria?",
        options: ["Los factores a considerar incluyen las comisiones, las tasas de interés, los servicios ofrecidos y la accesibilidad a sucursales y cajeros automáticos.",
		  "Los factores a considerar incluyen las comisiones, las tasas de interés, los servicios ofrecidos y la ubicación geográfica de las sucursales, pero no es necesario tener en cuenta la accesibilidad a cajeros automáticos.",
		  "Los factores a considerar incluyen las tasas de interés, los servicios ofrecidos y la accesibilidad a sucursales, pero no es necesario tener en cuenta las comisiones.",
		  "Los factores a considerar incluyen las tasas de interés, los servicios ofrecidos y la accesibilidad a cajeros automáticos, pero no es necesario tener en cuenta las comisiones."],
        correct: "Los factores a considerar incluyen las comisiones, las tasas de interés, los servicios ofrecidos y la accesibilidad a sucursales y cajeros automáticos.",
		r: "Al elegir una cuenta bancaria, es importante considerar diversos factores, como las comisiones, las tasas de interés, los servicios ofrecidos y la accesibilidad a sucursales y cajeros automáticos. Estos elementos afectarán la rentabilidad de tus ahorros y la comodidad de tus transacciones bancarias.",
    },
    {
        id: "1",
        question: "¿Qué es la diversificación en las inversiones?",
        options: ["La diversificación implica invertir en diferentes activos, pero no es necesario considerar diferentes mercados.",
		  "La diversificación implica invertir en diferentes mercados, pero no es necesario diversificar en diferentes activos.",
		  "La diversificación implica invertir en diferentes activos y mercados, pero no necesariamente reduce el riesgo.",
		  "La diversificación implica invertir en diferentes clases de activos y mercados para reducir el riesgo y maximizar las oportunidades de rendimiento."],
        correct: "La diversificación implica invertir en diferentes clases de activos y mercados para reducir el riesgo y maximizar las oportunidades de rendimiento.",
	r: "La diversificación en las inversiones implica invertir en diferentes clases de activos y mercados para reducir el riesgo y maximizar las oportunidades de rendimiento. Al distribuir tus inversiones de esta manera, puedes mitigar el impacto negativo de cualquier pérdida en una sola inversión y aprovechar las oportunidades de crecimiento en diversas áreas.",
        },
    {
        id: "2",
        question: "¿Cuál es la diferencia entre una tasa de interés fija y una tasa de interés variable?",
        options: ["Una tasa de interés fija permanece constante durante todo el plazo del préstamo o la inversión, pero una tasa de interés variable puede cambiar en función de las decisiones del banco.",
		  "Una tasa de interés fija puede cambiar según las condiciones del mercado, mientras que una tasa de interés variable permanece constante durante todo el plazo del préstamo o la inversión.",
		  "Una tasa de interés fija es determinada por las tasas de interés internacionales, mientras que una tasa de interés variable es fijada por el banco.",
		  "Una tasa de interés fija permanece constante durante todo el plazo del préstamo o la inversión, mientras que una tasa de interés variable puede cambiar según las condiciones del mercado."],
        correct: "Una tasa de interés fija permanece constante durante todo el plazo del préstamo o la inversión, mientras que una tasa de interés variable puede cambiar según las condiciones del mercado.",
	r: "Una tasa de interés fija permanece constante durante todo el plazo del préstamo o la inversión, lo que brinda estabilidad y previsibilidad en los pagos. Por otro lado, una tasa de interés variable puede cambiar según las condiciones del mercado, lo que implica que los pagos pueden aumentar o disminuir a lo largo del tiempo.",
        },
    {
        id: "3",
        question: "¿Qué es un fondo de inversión?",
        options: ["Un fondo de inversión es una forma de inversión colectiva en la que se reúnen los recursos de múltiples inversionistas para ser administrados por profesionales y maximizar el riesgo.",
		  "Un fondo de inversión es una forma de inversión colectiva en la que se reúnen los recursos de múltiples inversionistas para ser administrados por profesionales y diversificar las oportunidades de rendimiento.",
		  "Un fondo de inversión es una forma de inversión colectiva en la que se reúnen los recursos de múltiples inversionistas para ser administrados por profesionales y garantizar ganancias constantes.",
		  "Un fondo de inversión es una forma de inversión colectiva en la que se reúnen los recursos de múltiples inversionistas para ser administrados por profesionales y diversificar el riesgo."],
        correct: "Un fondo de inversión es una forma de inversión colectiva en la que se reúnen los recursos de múltiples inversionistas para ser administrados por profesionales y diversificar el riesgo.",
	r: "Un fondo de inversión es una forma de inversión colectiva en la que se reúnen los recursos de múltiples inversionistas para ser administrados por profesionales y diversificar el riesgo. Esto significa que los inversionistas se benefician de una cartera diversificada de activos, lo que reduce la exposición a riesgos individuales y puede ofrecer un mayor potencial de rendimiento a largo plazo.",
        },
    {
        id: "4",
        question: "",
        options: ["",
		  "",
		  "",
		  ""],
        correct: "",
	r: "",
        },
    {
        id: "5",
        question: "",
        options: ["",
		  "",
		  "",
		  ""],
        correct: "",
	r: "",
        },
	{
        id: "6",
        question: "",
        options: ["",
		  "",
		  "",
		  ""],
        correct: "",
	r: "",
        },
    {
        id: "7",
        question: "",
        options: ["",
		  "",
		  "",
		  ""],
        correct: "",
	r: "",
        },
    {
        id: "8",
        question: "",
        options: ["",
		  "",
		  "",
		  ""],
        correct: "",
	r: "",
        },
    {
        id: "9",
        question: "",
        options: ["",
		  "",
		  "",
		  ""],
        correct: "",
	r: "",
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
			quizContainer2.innerHTML = "";
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
        }
		}
    })
);

//Timer
const timerDisplay = () => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
			answerr = true;
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
	
	/*
	for (let i of quizArray) {
		if(userOption.innerHTML == i.options[0] ||
		userOption.innerHTML == i.options[1] ||
		userOption.innerHTML == i.options[2] ||
		userOption.innerHTML == i.options[3]){
			let question_DIVr = document.createElement("p");
			question_DIVr.innerHTML = i.r;
			question_DIVr.classList.add("r");
		    question_DIVr.classList.remove("hide");
		
        quizContainer2.appendChild(question_DIVr);
		}
	}*/
	
	let question_DIVr = document.createElement("p");
		question_DIVr.innerHTML = quizArray[questionCount].r;
		question_DIVr.classList.add("r");
		question_DIVr.classList.remove("hide");
		
        quizContainer2.appendChild(question_DIVr);

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
