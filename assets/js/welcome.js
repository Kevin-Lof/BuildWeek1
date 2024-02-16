const bttnProceed = document.getElementById('buttonProceed');
const condizioni = document.getElementById('condizioni');
const error = document.getElementById('error');
let isFirstTime = true;
condizioni.addEventListener('click', function(){
    if(!condizioni.checked){
        error.classList.remove('error');
    }else{
        error.classList.add('error');
    }
});
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


const init = () => {
    condizioni.checked = false;
}