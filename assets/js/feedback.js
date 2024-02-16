const feedbackBefore = document.getElementById('feedbackBefore');
const feedbackAfter = document.getElementById('feedbackAfter');
const recensioneScritta = document.getElementById('recensioneScritta');
const moreInfo = document.getElementById('moreInfo');
const errorFeedback = document.getElementById('errorFeedback');
const returnHome = document.getElementById('returnHome');
const testoRetry = document.getElementById('testoRetry');
let starsValue = 0;
let commentText = '';
let esame = localStorage.getItem('rispostaGiusta');

window.onload = () => {
init();

}

const starsValueHandler = () =>{
    for(let i = 1; i<11; i++ ){
        document.getElementById(`rating${i}`).addEventListener('click',
        function() {
            starsValue =  document.getElementById(`rating${i}`).value;
        })
    }
};

const inputTextHandler = () => {
    recensioneScritta.addEventListener('change', function() {
        commentText = recensioneScritta.value;
    })
}

const handlerFinaleOcchiBlu = () => {
  moreInfo.addEventListener('click', function() {
    if((starsValue !== 0) && (commentText !== '')){
        feedbackBefore.style.display = 'none';
        feedbackAfter.style.display = 'block';
      
    }else{
        errorFeedback.style.display = 'block';
    }
  })
}
const condizioneTestoRetry = () => {
    if (esame>5) {
        testoRetry.innerText = 'Show us your skills again!'
    }
    else {
        testoRetry.innerText = 'Try again, we know you can make it!'
    }
    
}
const init = () => {
    feedbackAfter.style.display = 'none';
    errorFeedback.style.display = 'none';
    starsValueHandler();
    inputTextHandler();
    handlerFinaleOcchiBlu();
condizioneTestoRetry();
    
}

