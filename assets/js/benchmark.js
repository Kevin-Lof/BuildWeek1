const timerContainer = document.getElementById("timerContainer");
const domanda = document.getElementById("domanda");
const containerRisposte = document.getElementById("containerRisposte");
const domandeEstratte = [];
const risposteDateArray = [];
const proceed = document.getElementById("proceedDomanda");
let risposta = true; //andremmo a pushare le risposte qui
let indice = 0;
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
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
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

const estraiIndiceQuestions = () => {
  let indiceQuestions = Math.floor(Math.random() * 10);
  const findIndice = domandeEstratte.find(
    (element) => element === indiceQuestions
  );
  if (findIndice) {
    return estraiIndiceQuestions();
  }
  domandeEstratte.push(indiceQuestions);
  return indiceQuestions;
};

const init = () => {
  caricaDomanda(estraiIndiceQuestions());
};

const caricaDomanda = (indice) => {
  document.getElementById("base-timer-label").innerHTML = formatTime(30);
  clearInterval(timerInterval);
  timePassed = 0;
  startTimer();
  proceed.disabled = true;
  numberQuestion.innerHTML = `QUESTION ${domandeEstratte.length}<span class='violaQuestion'>/10</span>`;

  domanda.innerText = questions[indice].question;
  for (let i = 0; i <= questions[indice].incorrect_answers.length; i++) {
    const button = document.createElement("button");
    button.classList.add("risposta");
    if (i === questions[indice].incorrect_answers.length) {
      button.innerText = questions[indice].correct_answer;
      button.value = questions[indice].correct_answer;
      button.addEventListener("click", gestisciRispostaEsatta);
    } else {
      button.innerText = questions[indice].incorrect_answers[i];
      button.value = questions[indice].incorrect_answers[i];
      button.addEventListener("click", gestisciRispostaSbagliata);
    }

    containerRisposte.appendChild(button);
  }
  colora();
  //mettere il tutto in ordine sparso dentro il div 'risposte'

  //timer e domanda + 1
};

const uncolora = () => {
  const previousSelected = document.querySelector('.selected');
  if (previousSelected) {
    previousSelected.classList.remove("selected");
  }
};

const colora = () => {
  let risposte = document.querySelectorAll(".risposta");
  console.log(risposte);

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
    localStorage.setItem("risposta", risposteDateArray.length);
    window.location.href = "result.html";
  } else if (risposta) {
    risposteDateArray.push(risposta);
  }

  containerRisposte.innerHTML = "";
  caricaDomanda(estraiIndiceQuestions());
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

  return `${seconds}`;
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
