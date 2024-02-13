const timerContainer = document.getElementById('timerContainer');
const domanda = document.getElementById('domanda');
const containerRisposte = document.getElementById('containerRisposte');
const domandeEstratte = [];
const risposteDateArray = [];
const proceed = document.getElementById('proceedDomanda');
let risposta = true;        //andremmo a pushare le risposte qui
let indice = 0;
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
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
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
    let indiceQuestions = Math.floor((Math.random() * 10) );
    const findIndice = domandeEstratte.find(element => element === indiceQuestions )
    if(findIndice){
      return estraiIndiceQuestions();
    }
    domandeEstratte.push(indiceQuestions);
    return indiceQuestions;
}


  


const init = () => {
  
  caricaDomanda(estraiIndiceQuestions());
} 



 const caricaDomanda = (indice) =>{
    proceed.disabled = true;
    domanda.innerText = questions[indice].question;
    for(let i=0; i<=questions[indice].incorrect_answers.length; i++){
      const button = document.createElement('button');
      button.classList.add('risposta');
      if(i === questions[indice].incorrect_answers.length){
        button.innerText = questions[indice].correct_answer;
        button.value = questions[indice].correct_answer;
        button.addEventListener('click', gestisciRispostaEsatta);
      }else{
        button.innerText =  questions[indice].incorrect_answers[i];
        button.value = questions[indice].incorrect_answers[i];
        button.addEventListener('click', gestisciRispostaSbagliata);
      }
      containerRisposte.appendChild(button);
    }
   
        //mettere il tutto in ordine sparso dentro il div 'risposte'
           
   
    //timer e domanda + 1 
 }
 



const gestisciRispostaSbagliata = () => {
  proceed.disabled = false;
  risposta = false;
  console.log(risposta);
}


 const gestisciRispostaEsatta = () => {
  proceed.disabled = false;
    risposta = true;
    console.log(risposta);
    if(risposta === true){

        //
     /*  if(proceed  || timeout){
        risposteDateArray.push(risposta);
      
    } */
      // se viene premuto 'proceed' push
      // se scade il tempo ed è stato cliccato push
      // se scade solo il tempo ... return

  
    // push true e vai avanti
  }
    
 }

 proceed.addEventListener('click', function(){
  
 
  if(domandeEstratte.length === 10){
    
   // window.location.href = 'result.html';
  }else if(risposta){
    risposteDateArray.push(risposta);
  }
    console.log(risposteDateArray);  
    containerRisposte.innerHTML = '';
    caricaDomanda(estraiIndiceQuestions());
    
 }) 


 const rispostaTimer = () =>{
    return false;
 }

 const timer = () =>{

 }

 const finish = () => {

  // 

 }


 
 window.onload = init();
