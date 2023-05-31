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
        question: "¿Cuál es el propósito de un plan de jubilación?",
        options: ["El propósito de un plan de jubilación es asegurar un ingreso estable y suficiente durante la etapa de retiro, pero no necesariamente involucra beneficios fiscales.",
		  "El propósito de un plan de jubilación es asegurar beneficios fiscales durante la etapa de retiro, pero no necesariamente garantiza un ingreso estable y suficiente.",
		  "El propósito de un plan de jubilación es garantizar un ingreso estable y suficiente durante la etapa de retiro, pero no necesariamente implica ahorros a largo plazo.",
		  "El propósito de un plan de jubilación es asegurar un ingreso estable y suficiente durante la etapa de retiro."],
        correct: "El propósito de un plan de jubilación es asegurar un ingreso estable y suficiente durante la etapa de retiro.",
	r: "El propósito de un plan de jubilación es asegurar un ingreso estable y suficiente durante la etapa de retiro. Además, los planes de jubilación a menudo ofrecen beneficios fiscales, lo que significa que puedes disfrutar de ventajas tributarias al ahorrar para tu jubilación. Es una forma efectiva de asegurarte de que tendrás los recursos financieros necesarios cuando dejes de trabajar.",
        },
    {
        id: "5",
        question: "¿Qué es la inflación y cómo puede afectar tus finanzas personales?",
        options: ["La inflación es el aumento generalizado y sostenido de los precios de bienes y servicios. Sin embargo, no tiene impacto en las finanzas personales.",
		  "La inflación es el aumento generalizado y sostenido de los precios de bienes y servicios. Puede afectar tus finanzas personales al aumentar tu poder adquisitivo con el tiempo.",
		  "La inflación es el aumento gradual de los precios de bienes y servicios. Puede afectar tus finanzas personales reduciendo la oferta de bienes disponibles en el mercado.",
		  "La inflación es el aumento generalizado y sostenido de los precios de bienes y servicios. Puede afectar tus finanzas personales reduciendo el poder adquisitivo de tu dinero con el tiempo."],
        correct: "La inflación es el aumento generalizado y sostenido de los precios de bienes y servicios. Puede afectar tus finanzas personales reduciendo el poder adquisitivo de tu dinero con el tiempo.",
	r: "La inflación se refiere al aumento generalizado y sostenido de los precios de bienes y servicios a lo largo del tiempo. Esto puede afectar tus finanzas personales al reducir el poder adquisitivo de tu dinero con el tiempo. Es importante tener en cuenta la inflación al realizar presupuestos, ahorrar e invertir para asegurarse de que tus recursos puedan mantener su valor a lo largo del tiempo.",
        },
	{
        id: "6",
        question: "¿Cuáles son algunos métodos efectivos para reducir o eliminar las deudas?",
        options: ["Algunos métodos para reducir o eliminar las deudas incluyen solicitar préstamos adicionales para pagar las deudas existentes, buscar ayuda de amigos y familiares, y aplazar los pagos.",
		  "Algunos métodos para reducir o eliminar las deudas incluyen pagar solo el pago mínimo requerido, ignorar las deudas y esperar a que desaparezcan, y gastar más para aumentar los ingresos y cubrir las deudas.",
		  "Algunos métodos para reducir o eliminar las deudas incluyen gastar más en tarjetas de crédito para mantener un buen historial de crédito, buscar préstamos con tasas de interés más altas y hacer pagos atrasados intencionalmente.",
		  "Algunos métodos incluyen hacer un presupuesto, priorizar el pago de las deudas con tasas de interés más altas, negociar con los acreedores y considerar la consolidación de deudas."],
        correct: "Algunos métodos incluyen hacer un presupuesto, priorizar el pago de las deudas con tasas de interés más altas, negociar con los acreedores y considerar la consolidación de deudas.",
	r: "Algunos métodos efectivos para reducir o eliminar las deudas incluyen hacer un presupuesto, priorizar el pago de las deudas con tasas de interés más altas, negociar con los acreedores para obtener mejores condiciones de pago y considerar la consolidación de deudas. Estos enfoques pueden ayudarte a tener un plan claro para salir de las deudas y mejorar tu situación financiera.",
        },
    {
        id: "7",
        question: "¿Qué es el riesgo de liquidez?",
        options: ["El riesgo de liquidez se refiere a la posibilidad de que los activos pierdan valor debido a fluctuaciones en el mercado.",
		  "El riesgo de liquidez se refiere a la probabilidad de que los bancos y otras instituciones financieras no tengan suficiente dinero en efectivo para satisfacer las demandas de retiro de los clientes.",
		  "El riesgo de liquidez se refiere a la variabilidad de los precios de los activos financieros debido a cambios en las tasas de interés.",
		  "El riesgo de liquidez se refiere a la incapacidad de convertir un activo en efectivo rápidamente sin sufrir una pérdida significativa de valor."],
        correct: "El riesgo de liquidez se refiere a la incapacidad de convertir un activo en efectivo rápidamente sin sufrir una pérdida significativa de valor.",
	r: "El riesgo de liquidez se refiere a la incapacidad de convertir un activo en efectivo rápidamente sin sufrir una pérdida significativa de valor. Esto puede ocurrir cuando hay una falta de compradores o vendedores en el mercado o cuando los activos son difíciles de vender sin incurrir en grandes costos. El riesgo de liquidez es importante considerarlo al invertir o al elegir activos financieros, ya que puede afectar la capacidad de convertirlos en efectivo cuando sea necesario.",
        },
    {
        id: "8",
        question: "¿Qué es el interés simple y cómo se calcula?",
        options: ["El interés simple es el interés que se calcula solo sobre el capital inicial, sin tener en cuenta el tiempo o la tasa de interés.",
		  "El interés simple es el interés que se calcula multiplicando el capital inicial por la tasa de interés al cuadrado.",
		  "El interés simple es el interés que se calcula agregando el capital inicial y la tasa de interés.",
		  "El interés simple es el interés que se calcula únicamente sobre el capital inicial. Se calcula multiplicando el capital inicial por la tasa de interés y el tiempo."],
        correct: "El interés simple es el interés que se calcula únicamente sobre el capital inicial. Se calcula multiplicando el capital inicial por la tasa de interés y el tiempo.",
	r: "El interés simple es el interés que se calcula únicamente sobre el capital inicial de una inversión o préstamo. Se calcula multiplicando el capital inicial por la tasa de interés y el tiempo transcurrido. A diferencia del interés compuesto, el interés simple no se acumula ni se calcula sobre los intereses generados previamente. Es importante comprender la diferencia entre el interés simple y el interés compuesto para tomar decisiones financieras informadas.",
        },
    {
        id: "9",
        question: "¿Cuál es la importancia de establecer metas financieras?",
        options: ["Establecer metas financieras no es importante, ya que las circunstancias económicas son impredecibles y cambiantes.",
		  "Establecer metas financieras solo es importante si se tienen altos ingresos y una gran cantidad de recursos.",
		  "Establecer metas financieras solo es importante si se planea retirarse temprano y disfrutar de la vida sin preocuparse por las finanzas.",
		  "Establecer metas financieras te ayuda a tener un enfoque claro, mantener la motivación y tomar decisiones financieras más acertadas a largo plazo."],
        correct: "Establecer metas financieras te ayuda a tener un enfoque claro, mantener la motivación y tomar decisiones financieras más acertadas a largo plazo.",
	r: "Establecer metas financieras es fundamental para tener un enfoque claro, mantener la motivación y tomar decisiones financieras acertadas a largo plazo. Las metas financieras pueden incluir ahorrar para la educación de los hijos, comprar una casa, planificar la jubilación o pagar las deudas. Al establecer metas financieras, se pueden priorizar los gastos, ajustar los hábitos de consumo y crear un plan de acción para lograr objetivos financieros específicos.",
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
