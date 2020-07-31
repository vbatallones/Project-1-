
# The Memory Game

## How the game works

* When the game starts, all tiles are turned face down.
* The player then flips over two cards, selecting them by clicking on them.
* If the two tiles have the same image, they remain face up. If not, they should be flipped face down again after a short delay.

## HTML

To start I added my boilerplate, with my CSS and Javascript link. <br />
```html
<link rel="stylesheet" href="style.css">
 <script src="./app.js"></script>
```
My **HTML** file consist of 2 parts. First part is that I have a two modal pop up and the main part is the images/icons I have for my game. <br />
Link for the icons I used in my game.
- [icon8](https://icons8.com/)
- [Google](https://www.google.com/)

### First part in HTML
1.**Modal 1** <br />
Is the instructions and when you click the the button the instruction will pop out and let you see how the game works. As you can see I used the data-* attributes allow us to store extra information on standard, semantic HTML elements without other hacks such as non-standard attributes, extra properties on DOM. I did a research on how to manipulate the modal so it will do what I want and [w3School](https://www.w3schools.com/howto/howto_css_modals.asp) is what I end up with.

```html
  <button class="insButton" data-modal-target="#modal">INSTRUCTIONS</button>
    <div class="modal" id="modal">
        <div class="modal-header">
            <div class="title-header">How To Play Memory Lane</div>
            <button data-close-button class="close">&times;</button>
        </div>
        <div class="modal-body">
            <ul>
                <li>Click any card to start the game.</li>
                <li>Find the pair of the first image.</li>
                <li>If not the same image you flip, "Oops Try Again".</li>
            </ul>
        </div>
    </div>
```

2.**Modal 2** <br />
Is for how well you played the game. I have a 2 extra paragraph that will pop out, in JavaScript that will appear when you complete the game which tells you how long it took and the count of moves you did.
```html
  <div class="modal-content" id="modal-content">
        <div class="modal-body-two">
            <span class="closeButt">&times;</span>
            <h2>YEET did it!!</h2>
            <h2>MEMORY FULL!</h2>
            <button class="play-again">Play Again?</button>
        </div>
    </div>
```
Javascript code for my 2nd modal.

```JS
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
```
### Main part in HTML

The main part is the images and icons that I have. I am having a hard time to loop and make my code DRY in the JS file. I know this is not the best way to do it, but I am sure that I will find a preferable strategy to make it cleaner and shorter along the way.

```html
 <div class="memory-game" data-name="bulba">
            <img class="front-face" src="https://img.icons8.com/color/96/000000/bullbasaur.png" alt="">
            <img class="back-face card-back-flip" src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/9142/thumb_CMYK-Red_Small_GeneralAssembly-Cog.png" alt=""> 
        </div> ......
```

## CSS

In the CSS the main focus I did is flipping the cards, having a board, and construct the front and back of the cards. The ```.memory-game``` class has pass in the images and icons. I need to make the ```.memory-game``` relative, and make the front and back icons/images to be absolute.That gives me a chance to do ```backface-visibility: hidden;``` the roperty sets whether the back face of an element is visible when turned towards the user. A lot of diffuclty that I encounter is flipping the cards. At first my card is flips like when you open a door. I decided to remove the  ``` text-align: center; ```, because the board is not even center when I have that and after that the cards start flipping the way I wanted. From there I express my code using the ```margin: 0 auto;```.
```CSS
.board-container {
    width: 840px;
    height: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin: 0 auto; 
    display: flex;
    flex-wrap: wrap;
    perspective: 1000px;
}
.memory-game {
    margin: 0 auto; 
    width: 15%;
    height: 25%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform .5s;
    cursor: pointer;
}
.memory-game.flip {
    transform: rotateY(180deg);
}
.front-face,
.back-face {
    width: 120px;
    height: 120px;
    position: absolute;
    border-radius: 5px;
    backface-visibility: hidden;
}
.front-face {
    transform: rotateY(180deg);
}
```

## JavaScript

As you can see I have a lot of manipulation going on in my ```app.js``` file. I set up my modal for instructions. So in my game I need to shuffle my cards so they are not in the same scene as always. It's nice to know when doing a project that you are learning different way of functions and syntax, like what I have learn the self invoking. This is from [w3school](https://www.w3schools.com/js/js_function_definition.asp#:~:text=Self%2DInvoking%20Functions&text=A%20self%2Dinvoking%20expression%20is,self%2Dinvoke%20a%20function%20declaration.) " Function expressions can be made "self-invoking".
A self-invoking expression is invoked (started) automatically, without being called.
Function expressions will execute automatically if the expression is followed by ().
You cannot self-invoke a function declaration.
You have to add parentheses around the function to indicate that it is a function expression "

## Shuffle function / Self invoking function
```JS
/ SELF INVOKING FUNCTION  we wrap the whole "(function nameOfFunction (){Bunch of code...})();" <-- important
//this function right here will automatically execute before we event click a card.
(function shuffleCard () {
    card.forEach(cards => {
        let randomCard = Math.floor(Math.random() * 24)
        // the order in the code right here is telling that the order of the
        // card is 1,2,3,4,5,6 since we have the variable randomCard it will give us the random numbers
        cards.style.order = randomCard
        
    })
})();
```
## Game timer function
As soon as you click a card the time will automatically start instead of you having to deal with time limit. You will a have trouble mind, because you havent complete the game yet and time is ticking! 

```JS
function gameTimer() {
    // Update the count every 1 second
	time = setInterval(function() {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
		// Update the timer in HTML with the time it takes the user to play the game
		timer.innerHTML =  " Timer: " + minutes + " Mins " + seconds + " Secs" ;
	}, 1000);
}
function stopTime() {
    clearInterval(time);
    themeSong.pause();
    themeSong.currentTime = 10;
}
```
## Count moves function

So the way you will win in this game or I would say to beat others is " **Less time and less number of tries or moves** ". Everytime you choose a second card the move will increment by 1, the first choice you did doesn't include yet. This is just to be fair that you need to make a pair in order to make your moves worth it.

```JS
function movesCount () {
    moveCount.innerHTML++
    moves++
}
```
## Flip card and check match function
This is my function on my flip card. Everytime I click a card a flip class will add on the images/icons. I seperate my function to check the match to dry up my code. The move count function is invoke in the check match function becuase I want to keep track of my moves everytime the player pick a card. I declared a variable that has a value of empty array. When the player got acquire the same pair, it will be push in to the empty array and hold it right there, until every card is flip and we have 24 cards exactly. That's where the win game function will come in.

```JS
//function for my card pick
function flipCard () {
    this.classList.add('flip')
    if(!hasMatch) {
        hasMatch = true;
        firstCard = this;
    } else {
        hasMatch = false;
        secondCard = this;
        
        checkMatch()
    }
}
//check the if the card it matching
function checkMatch () {
    // if the first card name is the same as the second card
    if (firstCard.dataset.name === secondCard.dataset.name) {
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
        mactchCard.push(firstCard)
        mactchCard.push(secondCard)
        winGame()
        movesCount()
       //if not the same pair
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flip')
            secondCard.classList.remove('flip')
        }, 500)
        movesCount()
    }  
}
card.forEach(cards => cards.addEventListener('click', flipCard))
```

## Win game function
Win game function will check if we have all 24 cards in the array. if we do, we want to stop the time and display the winning modal which is in the **Modal 2**, and we want to display the stats too. The moves and the time.

```js
function winGame() {
    if(mactchCard.length === 24) {
        stopTime();
        displayWinningModal();
        gameStats();
    }
}
```
## Play again button

This is connected to my **Modal 2** it will reset everything and I invoke the reload window location to shuffle the cards again. The shuffle card is not working until I refresh the page so I found the reload window and use that to refresh it when the play again button is click
```js
playAgain.addEventListener('click', function() {
    modalWinner.style.display = 'none';
    resetEverything()
    window.location.reload()
});
```