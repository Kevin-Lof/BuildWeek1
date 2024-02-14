const risposteGiuste = document.getElementById('risposteGiuste');
const risposteSbagliate = document.getElementById('risposteSbagliate');
let numRisposteGiuste = localStorage.getItem('rispostaGiusta');
let numRisposteSbagliate = 10 - numRisposteGiuste;
 risposteGiuste.innerText = `${numRisposteGiuste}0 %`;
 risposteSbagliate.innerText = `${numRisposteSbagliate}0 %`;

let questionGiuste = document.getElementById('questionsGiuste')
let questionSbagliate = document.getElementById('questionsSbagliate')

questionGiuste.innerHTML=`${numRisposteGiuste}/10 questions`
questionSbagliate.innerHTML=`${numRisposteSbagliate}/10 questions`