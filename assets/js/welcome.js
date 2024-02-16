const bttnProceed = document.getElementById('buttonProceed');
const condizioni = document.getElementById('condizioni');
const error = document.getElementById('error');
let isFirstTime = true;

//se non checki la checkbox fai vedere il messaggio, altrimenti nascondilo
condizioni.addEventListener('click', function(){
    if(!condizioni.checked){
        error.classList.remove('error');
    }else{
        error.classList.add('error');
    }
});

//se checki la checkbox si attiva il bottone, altrimenti si vede il messaggio d'errore
bttnProceed.addEventListener('click', function(e){

    e.preventDefault();
    if(condizioni.checked){
        window.location.href='benchmark.html';
    }else{
        error.classList.remove('error');
    }
})


window.onload = () => {
    init();
}

//quando carichi la pagina, la checkbox risulterà non checked
const init = () => {
    condizioni.checked = false;
}