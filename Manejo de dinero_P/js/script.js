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
        question: "¿Cuáles son las principales diferencias entre un mercado primario y un mercado secundario?",
        options: ["En el mercado primario, los valores financieros se compran y venden entre inversores existentes, mientras que, en el mercado secundario, se emiten y venden valores financieros por primera vez.",
		  "En el mercado primario, los valores financieros se negocian en bolsas de valores, mientras que, en el mercado secundario, se negocian en mercados extrabursátiles.",
		  "En el mercado primario, los valores financieros se compran y venden entre inversores institucionales, mientras que, en el mercado secundario, se compran y venden entre inversores minoristas.",
		  "En el mercado primario, se emiten y venden valores financieros por primera vez, mientras que en el mercado secundario, los valores financieros se compran y venden entre inversores existentes."],
        correct: "En el mercado primario, se emiten y venden valores financieros por primera vez, mientras que en el mercado secundario, los valores financieros se compran y venden entre inversores existentes.",
		r: "En el mercado primario, los valores financieros se emiten y venden por primera vez. Los emisores, como las empresas o el gobierno, obtienen capital al vender los valores a los inversores. En el mercado secundario, los inversores compran y venden valores financieros entre ellos, sin la participación directa del emisor. Estos intercambios no generan capital adicional para el emisor.",
    },
    {
        id: "1",
        question: "¿Qué es el coeficiente de correlación en la diversificación de inversiones?",
        options: ["El coeficiente de correlación es una medida estadística que indica la relación entre los precios de mercado y los dividendos de un activo.",
		  "El coeficiente de correlación es una medida estadística que indica la relación entre el valor nominal de un activo y su valor de mercado.",
		  "El coeficiente de correlación es una medida estadística que indica la relación entre la volatilidad de un activo y la rentabilidad esperada.",
		  "El coeficiente de correlación es una medida estadística que indica la relación entre los rendimientos de diferentes activos. Una correlación negativa puede ayudar en la diversificación."],
        correct: "El coeficiente de correlación es una medida estadística que indica la relación entre los rendimientos de diferentes activos. Una correlación negativa puede ayudar en la diversificación.",
	r: "El coeficiente de correlación es una medida estadística que indica la relación entre los rendimientos de diferentes activos en una cartera de inversiones. Puede variar entre -1 y 1. Un coeficiente de correlación negativo implica una relación inversa entre los rendimientos de los activos, lo que puede ayudar en la diversificación de la cartera.",
        },
    {
        id: "2",
        question: "¿Qué es un crédito revolving?",
        options: ["Un crédito revolving es un tipo de préstamo a largo plazo utilizado para financiar proyectos de construcción de infraestructuras.",
		  "Un crédito revolving es una forma de financiamiento que solo está disponible para empresas grandes y establecidas.",
		  "Un crédito revolving es un préstamo que se otorga solo a individuos con un historial crediticio perfecto.",
		  "Un crédito revolving es una línea de crédito renovable en la que el prestatario puede tomar prestado repetidamente hasta un límite establecido. El saldo puede pagarse en cuotas o en su totalidad."],
        correct: "Un crédito revolving es una línea de crédito renovable en la que el prestatario puede tomar prestado repetidamente hasta un límite establecido. El saldo puede pagarse en cuotas o en su totalidad.",
	r: "Un crédito revolving es una línea de crédito renovable en la que el prestatario puede tomar prestado repetidamente hasta un límite establecido. El saldo pendiente puede pagarse en cuotas o en su totalidad. A medida que el prestatario paga, el crédito disponible se reabastece. Es similar a una tarjeta de crédito, donde el prestatario puede usar y pagar repetidamente dentro del límite establecido.",
        },
    {
        id: "3",
        question: "¿Cuál es la diferencia entre una opción de compra (call) y una opción de venta (put)?",
        options: ["Una opción de compra (call) otorga el derecho, pero no la obligación, de vender un activo subyacente a un precio determinado en una fecha futura. Una opción de venta (put) otorga el derecho, pero no la obligación, de comprar un activo subyacente a un precio variable en una fecha futura.",
		  "Una opción de compra (call) otorga el derecho, pero no la obligación, de comprar un activo subyacente a un precio variable en una fecha futura. Una opción de venta (put) otorga el derecho, pero no la obligación, de vender un activo subyacente a un precio determinado en una fecha futura.",
		  "Una opción de compra (call) otorga el derecho, pero no la obligación, de comprar un activo subyacente a cualquier precio en cualquier momento. Una opción de venta (put) otorga el derecho, pero no la obligación, de vender un activo subyacente a cualquier precio en cualquier momento.",
		  "Una opción de compra (call) otorga el derecho, pero no la obligación, de comprar un activo subyacente a un precio determinado en una fecha futura. Una opción de venta (put) otorga el derecho, pero no la obligación, de vender un activo subyacente a un precio determinado en una fecha futura."],
        correct: "Una opción de compra (call) otorga el derecho, pero no la obligación, de comprar un activo subyacente a un precio determinado en una fecha futura. Una opción de venta (put) otorga el derecho, pero no la obligación, de vender un activo subyacente a un precio determinado en una fecha futura.",
	r: "Una opción de compra (call) otorga el derecho, pero no la obligación, de comprar un activo subyacente a un precio determinado en una fecha futura. Una opción de venta (put) otorga el derecho, pero no la obligación, de vender un activo subyacente a un precio determinado en una fecha futura. Las opciones de compra y venta son utilizadas en el mercado de derivados para especular sobre movimientos de precios y para cubrir riesgos.",
        },
    {
        id: "4",
        question: "¿Qué es una hipoteca de tasa ajustable (ARM)?",
        options: ["Una hipoteca de tasa ajustable (ARM) es un tipo de préstamo hipotecario en el que la tasa de interés permanece constante durante todo el plazo del préstamo.",
		  "Una hipoteca de tasa ajustable (ARM) es un tipo de préstamo hipotecario en el que la tasa de interés puede cambiar diariamente según las condiciones del mercado.",
		  "Una hipoteca de tasa ajustable (ARM) es un tipo de préstamo hipotecario en el que la tasa de interés se ajusta una vez al mes según un índice financiero específico.",
		  "Una hipoteca de tasa ajustable (ARM) es un tipo de préstamo hipotecario en el que la tasa de interés puede cambiar periódicamente según las condiciones del mercado."],
        correct: "Una hipoteca de tasa ajustable (ARM) es un tipo de préstamo hipotecario en el que la tasa de interés puede cambiar periódicamente según las condiciones del mercado.",
	r: "Una hipoteca de tasa ajustable (ARM) es un tipo de préstamo hipotecario en el que la tasa de interés puede cambiar periódicamente según las condiciones del mercado. Generalmente, estas hipotecas tienen una tasa de interés inicial fija durante un período inicial, después del cual la tasa se ajusta de acuerdo con un índice financiero específico. Los cambios en la tasa de interés pueden afectar los pagos mensuales y la cantidad total de interés pagado a lo largo del plazo del préstamo.",
        },
    {
        id: "5",
        question: "¿Qué es el análisis fundamental en la selección de inversiones?",
        options: ["El análisis fundamental en la selección de inversiones se centra en el estudio de los patrones astrológicos y su impacto en los mercados financieros.",
		  "El análisis fundamental en la selección de inversiones es un enfoque basado en la intuición y los presentimientos para predecir el comportamiento del mercado.",
		  "El análisis fundamental en la selección de inversiones se basa en el análisis de datos históricos de precios sin considerar factores económicos y financieros.",
		  "El análisis fundamental es un enfoque que evalúa la salud financiera y el desempeño de una empresa o activo para determinar su valor intrínseco y su potencial de crecimiento."],
        correct: "El análisis fundamental es un enfoque que evalúa la salud financiera y el desempeño de una empresa o activo para determinar su valor intrínseco y su potencial de crecimiento.",
	r: "El análisis fundamental en la selección de inversiones es un enfoque que evalúa la salud financiera y el desempeño de una empresa o activo para determinar su valor intrínseco y su potencial de crecimiento. Implica analizar los estados financieros, las tendencias económicas, los factores macroeconómicos y otros aspectos relevantes para tomar decisiones informadas de inversión.",
        },
	{
        id: "6",
        question: "¿Cuál es la diferencia entre un fondo mutuo y un fondo cotizado en bolsa (ETF)?",
        options: ["Un fondo mutuo y un ETF son lo mismo; no hay diferencia entre ellos.",
		  "Un fondo mutuo se negocia en bolsa  y tiene un valor en tiempo real, mientras que un ETF es administrado por profesionales y se valora una vez al día.",
		  "Un fondo mutuo solo invierte en acciones  y tiene un valor en tiempo real, mientras que un ETF invierte en diversos tipos de activos y se valora una vez al día.",
		  "Un fondo mutuo es administrado activamente por profesionales y se valora una vez al día, mientras que un ETF es un fondo indexado que se negocia en bolsa y tiene un valor en tiempo real."],
        correct: "Un fondo mutuo es administrado activamente por profesionales y se valora una vez al día, mientras que un ETF es un fondo indexado que se negocia en bolsa y tiene un valor en tiempo real.",
	r: "Un fondo mutuo es administrado activamente por profesionales y se valora una vez al día, mientras que un ETF es un fondo indexado que se negocia en bolsa y tiene un valor en tiempo real. La principal diferencia radica en la forma en que se gestionan y se negocian en el mercado. Mientras que los fondos mutuos se compran y venden al valor liquidativo al final del día, los ETF se compran y venden como acciones durante el horario regular de mercado.",
        },
    {
        id: "7",
        question: "¿Qué es un contrato de futuros?",
        options: ["Un contrato de futuros es un acuerdo estandarizado entre amigos para comprar o vender un activo sin ninguna regulación o supervisión.",
		  "Un contrato de futuros es un acuerdo para comprar o vender un activo subyacente a un precio indefinido en un momento específico.",
		  "Un contrato de futuros es un acuerdo para comprar o vender un activo subyacente sin tener que intercambiar ningún dinero.",
		  "Un contrato de futuros es un acuerdo estandarizado para comprar o vender un activo subyacente en una fecha futura y a un precio acordado de antemano."],
        correct: "Un contrato de futuros es un acuerdo estandarizado para comprar o vender un activo subyacente en una fecha futura y a un precio acordado de antemano.",
	r: "Un contrato de futuros es un acuerdo estandarizado para comprar o vender un activo subyacente en una fecha futura y a un precio acordado de antemano. Los contratos de futuros se utilizan en mercados financieros para cubrir riesgos, especular sobre movimientos de precios o facilitar la negociación de activos sin necesidad de poseerlos físicamente.",
        },
    {
        id: "8",
        question: "¿Cuál es la relación entre el riesgo y el rendimiento en las inversiones?",
        options: ["En las inversiones, no existe ninguna relación entre el riesgo y el rendimiento. El riesgo y el rendimiento son independientes uno del otro.",
		  "En general, existe una relación positiva entre el riesgo y el rendimiento potencial de una inversión. A menor riesgo, se espera un rendimiento mayor en las inversiones con  posibles ganancias significativas.",
		  "La relación entre el riesgo y el rendimiento en las inversiones es aleatoria y no se puede predecir con certeza ni precisión.",
		  "En general, existe una relación positiva entre el riesgo y el rendimiento potencial de una inversión. A mayor riesgo, se espera un rendimiento mayor, pero también existe la posibilidad de pérdidas significativas."],
        correct: "En general, existe una relación positiva entre el riesgo y el rendimiento potencial de una inversión. A mayor riesgo, se espera un rendimiento mayor, pero también existe la posibilidad de pérdidas significativas.",
	r: "En general, existe una relación positiva entre el riesgo y el rendimiento potencial de una inversión. A mayor riesgo, se espera un rendimiento mayor, pero también existe la posibilidad de pérdidas significativas. Sin embargo, esta relación no es lineal y puede variar según el tipo de inversión y las condiciones del mercado.",
        },
    {
        id: "9",
        question: "¿Cuáles son algunas estrategias de protección contra la inflación en las inversiones?",
        options: ["No existen estrategias efectivas de protección contra la inflación en las inversiones, solo algunas estrategias insignificantes como considerar inversiones indexadas a la inflación.",
		  "La mejor estrategia de protección contra la inflación en las inversiones es mantener todo el dinero en efectivo o de preferencia invertido en oro, la unica inversión 100% confiable.",
		  "Las inversiones en bienes raíces o commodities, diversificar en diferentes clases de activos y considerar inversiones indexadas a la inflación no ofrecen protección contra la inflación.",
		  "Algunas estrategias incluyen invertir en activos reales como bienes raíces o commodities, diversificar en diferentes clases de activos y considerar inversiones indexadas a la inflación."],
        correct: "Algunas estrategias incluyen invertir en activos reales como bienes raíces o commodities, diversificar en diferentes clases de activos y considerar inversiones indexadas a la inflación.",
	r: "Algunas estrategias de protección contra la inflación en las inversiones incluyen invertir en activos reales como bienes raíces o commodities, diversificar en diferentes clases de activos y considerar inversiones indexadas a la inflación. Estas estrategias buscan preservar el poder adquisitivo del capital y compensar los efectos negativos de la inflación a lo largo del tiempo.",
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
