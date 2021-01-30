const themeSong = new Audio();
themeSong.src = "assets/themeSong.mp3";

const card = document.querySelectorAll('.memory-game');
const timer = document.querySelector('.countdown');
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const boardContainer = document.querySelector('.board-container');
const moveCount = document.querySelector('.move-counter');
const modalWinner = document.querySelector('.modal-content');
const playAgain = document.querySelector('.play-again')

let timeStart = false;
let time;
let seconds = 0;
let minutes = 0;
let hasMatch = false;
let moves = 0;
let firstCard;
let secondCard;
let mactchCard = [];

//INSTRUCTIONS MODAL
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const openButton = document.querySelector(button.dataset.modalTarget)
        openModal(openButton)
    })
})
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        //the closest will target the class modal. starting from the button close going up
        const closeButton = button.closest('.modal')
        closeModal(closeButton)
    })
})
//function to open the modal
function openModal(openButton) {
    if (openButton == null) return
    console.log('show')
    openButton.classList.add('active')
    overlay.classList.add('active')
}
//function to close the modal
function closeModal(closeButton) {
    if (closeButton == null) return
    console.log('show')
    closeButton.classList.remove('active')
    overlay.classList.remove('active')
}

// SELF INVOKING FUNCTION  we wrap the whole "(function nameOfFunction (){Bunch of code...})();" <-- important
//this function right here will automatically execute before we event click a card.
(function shuffleCard() {
    card.forEach(cards => {
        let randomCard = Math.floor(Math.random() * 24)
        // the order in the code right here is telling that the order of the
        // card is 1,2,3,4,5,6 since we have the variable randomCard it will give us the random numbers
        cards.style.order = randomCard

    })
})();
//reset the everything when the game is over
function resetEverything() {
    stopTime();
    timeStart = false;
    seconds = 0;
    minutes = 0;
    timer.innerHTML = " Timer: 00:00";
    moves = 0;
    movesCount.innerHTML = 0;
}
function gameTimer() {
    // Update the count every 1 second
    time = setInterval(function () {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        // Update the timer in HTML with the time it takes the user to play the game
        timer.innerHTML = " Timer: " + minutes + " Mins " + seconds + " Secs";
    }, 1000);
}
function stopTime() {
    clearInterval(time);
    // themeSong.pause();
    // themeSong.currentTime = 10;
}
// counting my moves every 2 cards that's been click
function movesCount() {
    moveCount.innerHTML++
    moves++
}
function gameStats() {
    const stats = document.querySelector(".modal-body-two");
    // Create two different paragraphs
    for (let i = 1; i <= 2; i++) {
        // Create a new Paragraph
        const statsElement = document.createElement("p");
        // Add a class to the new Paragraph
        statsElement.classList.add("stats");
        // Add the new created <p> tag to the modal content
        stats.appendChild(statsElement);
    }
    // Select all p tags with the class of stats and update the content
    let p = stats.querySelectorAll("p.stats");
    p[0].innerHTML = "Memory Time: " + minutes + " Minutes and " + seconds + " Seconds";
    p[1].innerHTML = "Memory Moves Taken: " + moves;
}
function displayWinningModal() {
    const modalClose = document.getElementsByClassName("closeButt")[0];
    modalWinner.style.display = "block";
    modalClose.onclick = function () {
        modalWinner.style.display = "none";
    }
}
// as soon as you click the board the time will start
boardContainer.addEventListener('click', function (e) {
    themeSong.play();
    if (timeStart === false) {
        timeStart = true;
        gameTimer();
    }

})
//function for my card pick
function flipCard() {
    this.classList.add('flip')
    if (!hasMatch) {
        hasMatch = true;
        firstCard = this;
    } else {
        hasMatch = false;
        secondCard = this;

        checkMatch()
    }
}
//check the card if it matching
function checkMatch() {
    if (firstCard.dataset.name === secondCard.dataset.name) {
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
        mactchCard.push(firstCard)
        mactchCard.push(secondCard)
        winGame()
        movesCount()

    } else {
        setTimeout(() => {
            firstCard.classList.remove('flip')
            secondCard.classList.remove('flip')
        }, 500)
        movesCount()
    }
}
function winGame() {
    if (mactchCard.length === 24) {
        stopTime();
        displayWinningModal();
        gameStats();
    }
}
playAgain.addEventListener('click', function () {
    modalWinner.style.display = 'none';
    resetEverything()
    window.location.reload()
});
card.forEach(cards => cards.addEventListener('click', flipCard))

