const timerContainer = document.getElementById("timerContainer");
const domanda = document.getElementById("domanda");
const containerRisposte = document.getElementById("containerRisposte");
let domandeEstratte = [];  //array per contenere domande estratte e rendere possibile la randomizzazione
let risposteDateArray = [];  //ci pushiamo le risposte corrette date, per riprenderle a pagina dopo 

let answersEstratte = [];  //array per contenere risposte estratte e rendere possibile la randomizzazione
let risposte = [];  //ci pushiamo le 1/3 risposte sbagliate + la risposta corretta, in ordine, poi viene eseguito il random dell'array
const proceed = document.getElementById("proceedDomanda");
let risposta = false; //quando è vera, pushi in risposteDateArray

let timerInterval = null;
const numberQuestion = document.getElementById("numberQuestion");
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];


//  estrai domande - ricorsiva
const estraiIndiceQuestions = () => {
  let indiceQuestions = Math.floor(Math.random() * questions.length);
  if (!domandeEstratte.includes(indiceQuestions)) {
    // Se il numero non è già presente, lo pusha nell'array
    domandeEstratte.push(indiceQuestions);
   
} else {
    // Se il numero è già presente, richiama la funzione ricorsivamente per ottenere un nuovo numero unico
    estraiIndiceQuestions();
}
return indiceQuestions;
};


const estraiIndiceAnswers = () => {
  let indiceAnswers = Math.floor(Math.random() * risposte.length);
  
  if (!answersEstratte.includes(indiceAnswers)) {
    // Se il numero non è già presente, lo pusha nell'array
    answersEstratte.push(indiceAnswers);
} else {
    // Se il numero è già presente, richiama la funzione ricorsivamente per ottenere un nuovo numero unico
    estraiIndiceAnswers();
}
}; 



const init = () => {
  localStorage.clear(); //per non mantenere in memoria il vecchio test
  caricaDomanda();
};

const caricaDomanda = () => {
  estraiIndiceQuestions();  //ritorna  il valore dell'indice della domanda da pescare

  let indice = domandeEstratte[domandeEstratte.length - 1];   //prendi l'indice dell'ultima pushata

  risposte = [];
  answersEstratte = [];
  clearInterval(timerInterval);
  document.getElementById("base-timer-label").innerHTML = formatTime(30);

  timePassed = 0;  //per non mandare il tempo in negativo

  startTimer();  //parte il timer
  proceed.disabled = true;
  numberQuestion.innerHTML = `QUESTION ${domandeEstratte.length}<span class='violaQuestion'>/10</span>`;

  domanda.innerText = questions[indice].question;

  //in base alla domanda push risposte in base a multiple o boolean

  if(questions[indice].type === 'multiple'){
   for(let i=0; i< questions[indice].incorrect_answers.length; i++){  //cicliamo le domande a risposta  multipla e pushiamo IN ORDINE le 4 risposte
    risposte.push(questions[indice].incorrect_answers[i]);
   }
   risposte.push(questions[indice].correct_answer);

  }else{
    risposte.push(questions[indice].incorrect_answers[0]);  //cicliamo le domande a risposta  booleana e pushiamo IN ORDINE le 2 risposte
    risposte.push(questions[indice].correct_answer);
  }
  
  for(let i = 0; i< risposte.length; i++) {  //a seconda che siano 2 o 4 risposte, RANDOMIZZA l'ordine nell'array risposte (0,1,2,3 --> es. 2,0,3,1)
    estraiIndiceAnswers();
  }

//costruiamo i bottoni in base al nuovo ordine randomizzato dell'array risposte

  for (let i = 0; i < answersEstratte.length; i++) {
    const button = document.createElement("button");
    button.classList.add("risposta");
   
      button.innerText = risposte[answersEstratte[i]];
      button.value = risposte[answersEstratte[i]];
      button.addEventListener("click", function() {  
        if(button.value === questions[indice].correct_answer){  //a seconda del valore del bottone, parte un handler di risposte  
          gestisciRispostaEsatta();
        }else{
          gestisciRispostaSbagliata();
        }
      });

    containerRisposte.appendChild(button);
  }
  colora();
  
};

const uncolora = () => {
  const previousSelected = document.querySelector('.selected');
  if (previousSelected) {
    previousSelected.classList.remove("selected");
  }
};

const colora = () => {
  let risposte = document.querySelectorAll(".risposta");
 
  for (let i = 0; i < risposte.length; i++) {
    risposte[i].addEventListener(
      "click",
      function() {
        risposte[i].classList.add("selected")}); }
};



const gestisciRispostaSbagliata = () => {
  uncolora();
  proceed.disabled = false;
  risposta = false;
};

const gestisciRispostaEsatta = () => {
  uncolora();
  proceed.disabled = false;
  risposta = true;
};

const gestisciRisposta = () => {
  if (domandeEstratte.length === 10) {
    localStorage.setItem('rispostaGiusta', risposteDateArray.length);  //  salviamo i dati nel browser
    window.location.href = "result.html";  // se hai fatto 10 domande, vai ai risultati
  } else if (risposta) {
    risposteDateArray.push(risposta);  //se la risposta è corretta (true), pushiamo nell'array che ci portiamo a pag 3
  }

  containerRisposte.innerHTML = "";  //reset, svuotiamo il contenitore della domanda
  caricaDomanda();
};

proceed.addEventListener("click", function () {
  gestisciRisposta();
});

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;
let timePassed = 0;
const COLOR_CODES = {
  info: {
    color: "green",
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD,
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD,
  },
};

const TIME_LIMIT = 30;

let timeLeft = TIME_LIMIT;

let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("timer").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
  gestisciRisposta();
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;

    timeLeft = TIME_LIMIT - timePassed;

    document.getElementById("base-timer-label").innerHTML =
      formatTime(timeLeft);
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `SECONDS <b>${seconds}</b>REMAINING`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

window.onload = init();
