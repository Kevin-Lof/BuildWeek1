const risposteGiuste = document.getElementById('risposteGiuste');
const risposteSbagliate = document.getElementById('risposteSbagliate');
let numRisposteGiuste = localStorage.getItem('rispostaGiusta');
let numRisposteSbagliate = 10 - numRisposteGiuste;
 risposteGiuste.innerText = `${numRisposteGiuste}0 %`;
 risposteSbagliate.innerText = `${numRisposteSbagliate}0 %`;

