const card = document.querySelectorAll('.memory-game');
const timer = document.querySelector('.countdown');

let isWaiting = false;
let isRunning = false;
let countdownTimer;
let finalCountdown = false;
let seconds = 120;
let hasMatch = false;
let lockCard = false;
let firstCard;
let secondCard;

function flipCard () {
    
   this.classList.add('flip')
   if(!hasMatch) {
       hasMatch = true;
       firstCard = this;
       countdownTimer = setInterval(gameTime, 1000);
   } else {
       hasMatch = false;
       secondCard = this;

       checkMacth()
    }
}
function checkMacth () {
    
    if (firstCard.dataset.name === secondCard.dataset.name) {
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flip')
            secondCard.classList.remove('flip')
        }, 500)
    }  
}
function gameTime () {
    let minutes = Math.round((seconds - 30) / 60);
    let remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    document.querySelector('.counter').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
       function timeIsUp () {

       }
        if (finalCountdown) {
            clearInterval(countdownTimer); 
        } else {
            finalCountdown = true; 
        }
    } else {
        isWaiting = true;
        seconds--;
    }
}
// SELF INVOKING FUNCTION  we wrap the whole "(function nameOfFunction (){Bunch of code...})();" <-- important
//this function right here will automatically execute before we event click a card.
(function shuffleCard () {
    card.forEach(cards => {
        let randomCard = Math.floor(Math.random() * 24)
        // the order in the code right here is telling that the order of the
        // card is 1,2,3,4,5,6 since we have the variable randomCard it will give us the random numbers
        cards.style.order = randomCard
    })
})();


card.forEach(cards => cards.addEventListener('click', flipCard))