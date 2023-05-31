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
        question: "1.	¿Por qué es importante tener un presupuesto?",
        options: ["Un presupuesto es importante porque ayuda a controlar los gastos y a planificar el uso del dinero, lo que puede ayudar a alcanzar metas financieras y evitar deudas innecesarias.",
         "Un presupuesto es importante porque te permite gastar todo tu dinero sin preocuparte por las consecuencias financieras.",
          "No es necesario tener un presupuesto, puedes gastar libremente y confiar en que las cosas se resolverán por sí solas.",
           "El presupuesto es una herramienta obsoleta que solo limita tus opciones de gasto y no tiene beneficios reales."],
        correct: "Un presupuesto es importante porque ayuda a controlar los gastos y a planificar el uso del dinero, lo que puede ayudar a alcanzar metas financieras y evitar deudas innecesarias.",
		r: "Retroalimentación: Tener un presupuesto es fundamental para tomar el control de tus finanzas, planificar tus gastos y asegurarte de que estás viviendo dentro de tus posibilidades.",
    },
    {
        id: "1",
        question: "¿Qué es el ahorro?",
        options: ["El ahorro es la acción de guardar una parte del dinero que se recibe, en lugar de gastarlo todo, con el fin de tener un fondo de emergencia o para invertir en el futuro.",
         "El ahorro es innecesario, deberías gastar todo tu dinero para disfrutar del presente sin preocuparte por el futuro.",
          "El ahorro consiste en guardar todo el dinero en casa para evitar riesgos en los bancos.",
           "El ahorro es solo para personas con ingresos altos; si ganas poco, no tiene sentido ahorrar."],
        correct: "El ahorro es la acción de guardar una parte del dinero que se recibe, en lugar de gastarlo todo, con el fin de tener un fondo de emergencia o para invertir en el futuro.",
		r: "Retroalimentación: El ahorro implica reservar una parte de tus ingresos en lugar de gastarlos completamente, lo que te permite acumular fondos para emergencias, futuras inversiones y metas financieras a largo plazo.",
    },
    {
        id: "2",
        question: "¿Qué son los gastos fijos?",
        options: ["Los gastos fijos son aquellos que puedes evitar si no los pagas a tiempo; no son realmente obligatorios.",
         "Los gastos fijos son aquellos que se tienen que pagar de manera regular y constante, como la renta, las facturas de servicios públicos, seguros y otros.",
          "Los gastos fijos son los gastos que solo las personas adineradas tienen, como los pagos de hipotecas de mansiones lujosas.",
           "Los gastos fijos son aquellos que fluctúan constantemente y nunca se mantienen en el mismo monto."],
        correct: "Los gastos fijos son aquellos que se tienen que pagar de manera regular y constante, como la renta, las facturas de servicios públicos, seguros y otros.",
		r: "Retroalimentación: Los gastos fijos son aquellos pagos recurrentes y obligatorios que debes realizar, como la renta, las facturas de servicios públicos y otros gastos que se mantienen constantes mes tras mes.",
    },
    {
        id: "3",
        question: "¿Qué son los gastos variables?",
        options: ["Los gastos variables son aquellos que pueden variar en cantidad y frecuencia, como la comida, la ropa, los entretenimientos, etc.",
         "Los gastos variables son aquellos que siempre se mantienen en la misma cantidad, sin importar las circunstancias.",
          "Los gastos variables son los gastos que solo las personas adineradas pueden permitirse, como viajes de lujo y compras extravagantes.",
           "Los gastos variables son los gastos relacionados con servicios gubernamentales que no se pueden cambiar o negociar."],
        correct: "Los gastos variables son aquellos que pueden variar en cantidad y frecuencia, como la comida, la ropa, los entretenimientos, etc.",
		r: "Retroalimentación: Los gastos variables son aquellos que pueden fluctuar en cantidad y frecuencia, como los gastos en alimentos, ropa, entretenimiento y otros gastos que no son constantes.",
    },
    {
        id: "4",
        question: "¿Qué es la deuda?",
        options: ["La deuda es el dinero que se debe a alguien o a alguna institución, generalmente con la obligación de devolverlo en un plazo determinado y con intereses.",
         "La deuda es un concepto inexistente; todas las transacciones financieras son regalos sin condiciones.",
          "La deuda es una forma de enriquecimiento rápido, ya que puedes obtener grandes sumas de dinero sin ninguna consecuencia negativa.",
           "La deuda es simplemente una transacción financiera en la que recibes dinero y nunca tienes que devolverlo."],
        correct: "La deuda es el dinero que se debe a alguien o a alguna institución, generalmente con la obligación de devolverlo en un plazo determinado y con intereses.",
		r: "Retroalimentación: La deuda es el dinero que se debe a alguien o alguna institución, generalmente con la obligación de devolverlo en un plazo determinado y con intereses.",
    },
    {
        id: "5",
        question: "¿Qué es el interés?",
        options: ["El interés es el costo del dinero que se presta o se invierte, y se expresa como un porcentaje del monto original.",
         "El interés es un concepto irrelevante en las transacciones financieras; no tiene impacto en el resultado final.",
          "El interés es un cargo ilegal que los bancos cobran para aprovecharse de las personas.",
           "El interés es un monto adicional que debes pagar al recibir un préstamo, pero no es relevante en las inversiones."],
        correct: "El interés es el costo del dinero que se presta o se invierte, y se expresa como un porcentaje del monto original.",
		r: "Retroalimentación: El interés es el costo del dinero prestado o invertido, y se expresa como un porcentaje del monto original. Representa el beneficio que se obtiene al prestar dinero o el costo adicional al pedir prestado.",
    }, {
        id: "6",
        question: "¿Qué es el puntaje crediticio?",
        options: ["El puntaje crediticio es una calificación que se asigna a una persona o empresa basada en su historial de crédito, y que sirve como una medida de su capacidad de pago y de su riesgo crediticio.",
         "El puntaje crediticio es una invención reciente y no tiene ninguna relevancia en las transacciones financieras.",
          "El puntaje crediticio es una medida subjetiva creada por los bancos para discriminar a ciertos grupos de personas.",
           "El puntaje crediticio es una calificación que se asigna al azar y no refleja la capacidad de pago de una persona o empresa."],
        correct: "El puntaje crediticio es una calificación que se asigna a una persona o empresa basada en su historial de crédito, y que sirve como una medida de su capacidad de pago y de su riesgo crediticio.",
		r: "Retroalimentación: El puntaje crediticio es una calificación que se asigna a una persona o empresa basada en su historial de crédito, y sirve como una medida de su capacidad de pago y su riesgo crediticio.",
    },
    {
        id: "7",
        question: "¿Qué es el ahorro a largo plazo?",
        options: ["El ahorro a largo plazo es el dinero que se destina a metas financieras a largo plazo, como la jubilación, la educación de los hijos, la compra de una propiedad, entre otros.",
         "El ahorro a largo plazo implica guardar dinero en una cuenta bancaria sin ningún propósito específico.",
          "El ahorro a largo plazo es un concepto obsoleto y no tiene ninguna ventaja en el mundo financiero actual.",
           "El ahorro a largo plazo es acumular grandes sumas de dinero rápidamente sin considerar las metas financieras futuras."],
        correct: "El ahorro a largo plazo es el dinero que se destina a metas financieras a largo plazo, como la jubilación, la educación de los hijos, la compra de una propiedad, entre otros.",
		r: "Retroalimentación: El ahorro a largo plazo se refiere a destinar dinero a metas financieras que se alcanzarán en un futuro distante, como la jubilación, la educación de los hijos o la compra de una propiedad.",
    },
    {
        id: "8",
        question: "¿Qué es el gasto inteligente?",
        options: ["El gasto inteligente es aquel que se realiza de manera consciente y planificada, con el fin de maximizar el valor y la utilidad de los recursos, evitando los gastos innecesarios.",
         "El gasto inteligente implica gastar dinero sin ninguna consideración ni planificación, sin importar el valor de los productos o servicios adquiridos.",
          "El gasto inteligente es evitar gastar dinero por completo y vivir en una forma extrema de frugalidad.",
           "El gasto inteligente es gastar dinero de manera impulsiva y sin considerar las necesidades o metas financieras."],
        correct: "El gasto inteligente es aquel que se realiza de manera consciente y planificada, con el fin de maximizar el valor y la utilidad de los recursos, evitando los gastos innecesarios.",
		r: "Retroalimentación: El gasto inteligente se refiere a realizar gastos de manera consciente y planificada, maximizando el valor y la utilidad de los recursos y evitando gastos innecesarios.",
    },
    {
        id: "9",
        question: "¿Qué es la inversión en uno mismo?",
        options: ["La inversión en uno mismo es el proceso de mejorar habilidades, adquirir nuevos conocimientos y desarrollar talentos personales, con el fin de mejorar la calidad de vida, obtener mejores oportunidades laborales y generar mayores ingresos.",
         "La inversión en uno mismo es un desperdicio de tiempo y dinero, ya que no hay garantía de que se obtengan beneficios tangibles.",
          "La inversión en uno mismo significa depender exclusivamente de los demás para el crecimiento personal y profesional.",
           "La inversión en uno mismo es simplemente malgastar dinero en actividades recreativas sin ningún beneficio real."],
        correct: "La inversión en uno mismo es el proceso de mejorar habilidades, adquirir nuevos conocimientos y desarrollar talentos personales, con el fin de mejorar la calidad de vida, obtener mejores oportunidades laborales y generar mayores ingresos.",
		r: "Retroalimentación: La inversión en uno mismo implica mejorar habilidades, adquirir nuevos conocimientos y desarrollar talentos personales para mejorar la calidad de vida, obtener mejores oportunidades laborales y generar mayores ingresos.",
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
