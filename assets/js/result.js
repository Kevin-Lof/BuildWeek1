const risposteGiuste = document.getElementById('risposteGiuste');
const risposteSbagliate = document.getElementById('risposteSbagliate');
let numRisposteGiuste = localStorage.getItem('rispostaGiusta');
let numRisposteSbagliate = 10 - numRisposteGiuste;
 risposteGiuste.innerHTML = `<b>${numRisposteGiuste*10}%</b>`;
 risposteSbagliate.innerHTML = `<b>${numRisposteSbagliate*10}%</b>`;

let questionGiuste = document.getElementById('questionsGiuste')
let questionSbagliate = document.getElementById('questionsSbagliate')

const cerchioTesto = document.getElementById('cerchioTesto')

questionGiuste.innerHTML=`${numRisposteGiuste}/10 questions`
questionSbagliate.innerHTML=`${numRisposteSbagliate}/10 questions`


const scrittaCerchioTesto = () => {
    if (parseInt(numRisposteGiuste)>=6) {
        cerchioTesto.innerHTML=`<p>Congratulations! <span class='celestino'>You passed the exam.</span></p> We'll send you the certificate in few minutes. Check your email (including promotions / spam folder)`
    }

    else {
        cerchioTesto.innerHTML = `<p>We're sorry! <br> <span class='violetto'>You failed the exam.</span></p> Don't worry! You can try again and get your certificate!`
    }
}

scrittaCerchioTesto();



const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    //labels: ['Green', 'Red'],
    datasets: [{
      label: '%',
      data: [ numRisposteSbagliate, numRisposteGiuste],
      backgroundColor: [
        'rgba(194, 19, 141, 1)',
        'rgba(1, 255, 255, 1)'
         // Colore di sfondo per il restante
      ],
      borderColor: [
        'rgba(194, 19, 141, 1)',
        'rgba(1, 255, 255, 1)'
         
      ],
      borderWidth: 1
      
    }]
  },
  options: {
    responsive: false,
    cutout: '75%',
    scales: { }
  }
});


