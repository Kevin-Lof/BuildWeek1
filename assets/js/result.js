const risposteGiuste = document.getElementById('risposteGiuste');
const risposteSbagliate = document.getElementById('risposteSbagliate');
let numRisposteGiuste = localStorage.getItem('rispostaGiusta');
let numRisposteSbagliate = 10 - numRisposteGiuste;
 risposteGiuste.innerHTML = `<b>${numRisposteGiuste}0%</b>`;
 risposteSbagliate.innerHTML = `<b>${numRisposteSbagliate}0%</b>`;

let questionGiuste = document.getElementById('questionsGiuste')
let questionSbagliate = document.getElementById('questionsSbagliate')

questionGiuste.innerHTML=`${numRisposteGiuste}/10 questions`
questionSbagliate.innerHTML=`${numRisposteSbagliate}/10 questions`

