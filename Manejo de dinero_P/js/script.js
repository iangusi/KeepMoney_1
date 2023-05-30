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
        question: "¿Qué significa el término 'presupuesto'?",
        options: ["Un presupuesto es un plan financiero que estima los ingresos y gastos de una persona o un hogar durante un período determinado.",
		  "Un presupuesto es un programa economico que estima los ingresos y gastos de una persona o un hogar.",
		  "Un presupuesto es un plan financiero que estima los egresos de una persona o un hogar durante un período determinado.",
		  "Un presupuesto es una herramienta para administrar el dinero de forma desordenada y sin restricciones."],
        correct: "Un presupuesto es un plan financiero que estima los ingresos y gastos de una persona o un hogar durante un período determinado.",
		r: "Recuerda que un presupuesto es una herramienta clave para planificar y controlar los recursos financieros de manera efectiva, estableciendo límites y prioridades claras en los ingresos y gastos.",
    },
    {
        id: "1",
        question: "¿Por qué es importante ahorrar? ",
        options: ["El ahorro es importante para alcanzar metas financieras a largo plazo, tener un respaldo financiero ante imprevistos y mejorar la calidad de vida en el futuro.",
		  "El ahorro es importante para poder comprar cosas caras en el futuro, como un auto lujoso o una casa grande.",
		  "El ahorro es importante para tener algo de dinero extra en caso de emergencias o pequeños contratiempos.",
		  "El ahorro es importante para tener un nivel de vida confortable en la vejez y no depender únicamente de la pensión."],
        correct: "El ahorro es importante para alcanzar metas financieras a largo plazo, tener un respaldo financiero ante imprevistos y mejorar la calidad de vida en el futuro.",
		r: "Estas respuestas son similares entre sí en cuanto a la importancia del ahorro para metas financieras, imprevistos y calidad de vida futura, pero pueden dar una idea distorsionada de la importancia y el alcance del ahorro responsable. Recuerda que el ahorro también es importante para la estabilidad financiera a corto plazo y para crear un fondo de emergencia adecuado.",
    },
    {
        id: "2",
        question: "¿Cuál es la técnica de ahorro más efectiva?",
        options: ["La técnica más efectiva es la regla del 50/30/20, que consiste en destinar el 50% de los ingresos a necesidades básicas, el 30% a gastos personales y el 20% al ahorro.",
		  "La técnica de ahorro más efectiva es la regla del 60/20/20, donde se destina el 60% de los ingresos a necesidades básicas, el 20% a gastos personales y el 20% al ahorro.",
		  "La técnica de ahorro más efectiva es la regla del 40/30/30, donde se destina el 40% de los ingresos a necesidades básicas, el 30% a gastos personales y el 30% al ahorro.",
		  "La técnica de ahorro más efectiva es la regla del 70/10/20, donde se destina el 70% de los ingresos a necesidades básicas, el 10% a gastos personales y el 20% al ahorro."],
        correct: "La técnica más efectiva es la regla del 50/30/20, que consiste en destinar el 50% de los ingresos a necesidades básicas, el 30% a gastos personales y el 20% al ahorro.",
		r: "Estas respuestas se asemejan entre sí, sin embargo, los porcentajes asignados difieren ligeramente y pueden alterar el equilibrio necesario para una buena gestión financiera. La regla del 50/30/20 es ampliamente recomendada como una guía efectiva para distribuir los ingresos de manera adecuada.",
    },
    {
        id: "3",
        question: "¿Qué es el ahorro automático?",
        options: ["El ahorro automático es una técnica en la que se establece una cantidad a ahorrar de forma periódica, que se descuenta directamente de la cuenta bancaria para evitar gastos innecesarios.",
		  "El ahorro automático es una técnica en la que el banco retira automáticamente una cantidad fija de dinero de la cuenta bancaria del usuario y lo invierte en acciones o bonos para generar mayores ganancias.",
		  "El ahorro automático es una técnica en la que el dinero ahorrado se destina automáticamente a comprar bienes o servicios de lujo como recompensa por haber ahorrado.",
		  "El ahorro automático es una técnica en la que el banco descuenta una pequeña cantidad de dinero de la cuenta bancaria del usuario cada vez que se realiza una transacción, lo cual permite ahorrar sin darse cuenta."],
        correct: "El ahorro automático es una técnica en la que se establece una cantidad a ahorrar de forma periódica, que se descuenta directamente de la cuenta bancaria para evitar gastos innecesarios.",
		r: "El ahorro automático se refiere a establecer una cantidad específica que se descuenta periódicamente de la cuenta bancaria para ahorrar de manera regular y evitar gastar ese dinero en compras innecesarias.",
    },
    {
        id: "4",
        question: "¿Cómo puedo ahorrar en gastos fijos?",
        options: ["Se puede ahorrar en gastos fijos negociando contratos de servicios como internet, telefonía o televisión, buscando promociones y descuentos en seguros, entre otros.",
		  "Puedes ahorrar en gastos fijos cancelando todos los servicios como internet, telefonía o televisión. De esta manera, no tendrás que pagar por ellos y ahorrarás dinero.",
		  "Puedes ahorrar en gastos fijos comprando productos o servicios de menor calidad y precio. Aunque no sean tan buenos, podrás ahorrar dinero en el corto plazo.",
		  "Puedes ahorrar en gastos fijos restringiendo completamente el uso de servicios como internet, telefonía o televisión. Al eliminarlos por completo, no tendrás que gastar dinero en ellos."],
        correct: "Se puede ahorrar en gastos fijos negociando contratos de servicios como internet, telefonía o televisión, buscando promociones y descuentos en seguros, entre otros.",
		r: "Algunas de estas respuestas se acercan a la idea de reducir los gastos fijos, pero presentan soluciones extremas o poco prácticas que pueden afectar negativamente la calidad de vida. La forma más efectiva de ahorrar en gastos fijos es mediante la negociación de contratos y la búsqueda de promociones y descuentos en los servicios necesarios, sin eliminarlos por completo.",
    },
    {
        id: "5",
        question: "¿Qué es el ahorro de energía?",
        options: ["El ahorro de energía es una técnica que consiste en reducir el consumo de energía eléctrica y agua en el hogar para disminuir el gasto en estos servicios.",
		  "El ahorro de energía es una técnica que consiste en apagar todos los electrodomésticos y luces en el hogar durante largos períodos de tiempo para evitar el consumo de energía por completo.",
		  "El ahorro de energía es una técnica que consiste en usar solo electrodomésticos y dispositivos electrónicos de baja potencia para reducir el consumo de energía en el hogar.",
		  "El ahorro de energía es una técnica que consiste en utilizar solo agua fría para todas las actividades, incluyendo lavado de ropa y duchas, para minimizar el consumo de energía asociado al calentamiento de agua."],
        correct: "El ahorro de energía es una técnica que consiste en reducir el consumo de energía eléctrica y agua en el hogar para disminuir el gasto en estos servicios.",
		r: "Varias de estas respuestas presentan soluciones extremas o poco prácticas que pueden no ser realistas para la vida cotidiana. El ahorro de energía implica adoptar hábitos y prácticas más eficientes en el uso de la electricidad y el agua, pero no requiere la eliminación total de su consumo.",
    }, {
        id: "6",
        question: "¿Qué es el ahorro en compras?",
        options: ["El ahorro en compras es una técnica en la que se busca adquirir productos y servicios de calidad a precios más bajos, por medio de comparar precios, utilizar cupones, buscar promociones y descuentos, entre otros.",
		  "El ahorro en compras es una técnica en la que se evita por completo realizar cualquier tipo de compra, con el fin de ahorrar dinero.",
		  "El ahorro en compras es una técnica en la que se adquieren productos de menor calidad o imitaciones más baratas para reducir los gastos en compras.",
		  "El ahorro en compras es una técnica en la que se esperan a las temporadas de rebajas y liquidaciones para comprar todo lo necesario a precios mucho más bajos."],
        correct: "El ahorro en compras es una técnica en la que se busca adquirir productos y servicios de calidad a precios más bajos, por medio de comparar precios, utilizar cupones, buscar promociones y descuentos, entre otros.",
		r: "El ahorro en compras implica encontrar formas inteligentes de adquirir productos y servicios de calidad a precios más bajos, utilizando estrategias como comparar precios, utilizar cupones, buscar promociones y descuentos, entre otros, sin sacrificar la calidad y el valor de lo que se adquiere.",
    },
    {
        id: "7",
        question: "¿Cómo puedo ahorrar en el transporte?",
        options: ["Se puede ahorrar en el transporte utilizando medios de transporte alternativos como bicicletas, caminar o utilizar transporte público, además de planificar los recorridos para evitar viajes innecesarios.",
		  "Puedes ahorrar en el transporte evitando cualquier forma de transporte y caminando siempre, incluso si implica largas distancias o dificultades.",
		  "Puedes ahorrar en el transporte reduciendo el uso de cualquier medio de transporte y optando por viajar únicamente en vehículos compartidos con extraños para ahorrar en gastos de combustible.",
		  "Puedes ahorrar en el transporte utilizando medios de transporte alternativos como helicópteros o vehículos de lujo, ya que son más eficientes y económicos a largo plazo."],
        correct: "Se puede ahorrar en el transporte utilizando medios de transporte alternativos como bicicletas, caminar o utilizar transporte público, además de planificar los recorridos para evitar viajes innecesarios.",
		r: "Si bien la respuesta correcta sugiere el uso de medios de transporte alternativos y planificación de recorridos, estas respuestas incorrectas distorsionan esas ideas de manera poco realista. El ahorro en el transporte implica tomar decisiones más conscientes y eficientes en cuanto al uso de los medios de transporte, considerando opciones más económicas y sostenibles.",
    },
    {
        id: "8",
        question: "¿Qué es el ahorro en comida?",
        options: ["El ahorro en comida es una técnica en la que se evita completamente comprar alimentos y se ayuna durante períodos prolongados para ahorrar dinero.",
		  "El ahorro en comida es una técnica en la que se opta por alimentos de baja calidad y poco saludables para reducir los gastos en alimentación.",
		  "El ahorro en comida es una técnica en la que se busca ahorrar en los gastos de alimentación a través de la planificación de menús, la compra de productos en ofertas y la reducción del desperdicio de alimentos.",
		  "El ahorro en comida es una técnica en la que se reduce drásticamente la cantidad de alimentos consumidos, limitándose a porciones muy pequeñas para ahorrar dinero."],
        correct: "El ahorro en comida es una técnica en la que se busca ahorrar en los gastos de alimentación a través de la planificación de menús, la compra de productos en ofertas y la reducción del desperdicio de alimentos.",
		r: "El ahorro en comida implica adoptar prácticas más inteligentes y económicas, como la planificación de menús, la compra de productos en oferta, la preparación de comidas en casa y la reducción del desperdicio de alimentos, sin comprometer la calidad y la nutrición de la dieta.",
    },
    {
        id: "9",
        question: "¿Cómo puedo ahorrar en el entretenimiento?",
        options: ["Se puede ahorrar en el entretenimiento buscando opciones gratuitas o económicas como actividades al aire libre, museos y exposiciones gratuitas, entre otras opciones.",
		  "Puedes ahorrar en el entretenimiento evitando por completo cualquier tipo de actividad de entretenimiento y dedicándote exclusivamente a actividades aburridas y sin costo.",
		  "Puedes ahorrar en el entretenimiento optando por opciones de entretenimiento de baja calidad y poco emocionantes que son mucho más baratas o gratuitas.",
		  "Puedes ahorrar en el entretenimiento limitándote a actividades repetitivas y monótonas, como ver la misma película o leer el mismo libro una y otra vez, para evitar gastar dinero en nuevas experiencias de entretenimiento."],
        correct: "Se puede ahorrar en el entretenimiento buscando opciones gratuitas o económicas como actividades al aire libre, museos y exposiciones gratuitas, entre otras opciones.",
		r: "El ahorro en el entretenimiento implica encontrar un equilibrio entre disfrutar de actividades emocionantes y agradables sin gastar en exceso, aprovechando opciones gratuitas o de bajo costo como actividades al aire libre, exposiciones gratuitas o eventos comunitarios.",
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
