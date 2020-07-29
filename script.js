const boardDeck = [
    {
        src: "https://img.icons8.com/color/48/000000/yoda.png",
        id: 'Yoda'
    },
    {
        src: "https://img.icons8.com/color/48/000000/chewbacca.png",
        id: 'Chewbacca'
    },
    {
        src: "https://img.icons8.com/color/48/000000/darth-vader.png",
        id: 'Darth-vader'
    },
    {
        src: "https://img.icons8.com/color/48/000000/r2-d2.png",
        id: 'R2-D2'
    },
    {
        src: "https://img.icons8.com/color/48/000000/animation.png",
        id: 'Mickey'
    },
    {
        src: "https://img.icons8.com/color/48/000000/sonic-the-hedgehog-1.png",
        id: 'Sonic'
    },
    {
        src: "https://img.icons8.com/doodle/48/000000/super-mario.png",
        id: 'Mario'
    },
    {
        src: "https://img.icons8.com/color/48/000000/pinball.png",
        id: 'Pinball'
    },
    {
        src: "https://img.icons8.com/color/48/000000/bullbasaur.png",
        id: 'Bulba'
    },
    {
        src: "https://img.icons8.com/officel/40/000000/walter-white.png",
        id: 'MrWhite'
    },
    {
        src: "https://img.icons8.com/color/48/000000/jigglypuff.png",
        id: 'JigglyPuff'
    },
    {
        src: "https://img.icons8.com/color/48/000000/empire.png",
        id: 'Empire'
    },
    {
        src: "https://img.icons8.com/color/48/000000/luke-skywalker.png",
        id: 'Luke'
    },
    {
        src: "https://img.icons8.com/office/40/000000/rebel.png",
        id: 'Rebel'
    },
    {
        src: "https://img.icons8.com/color/48/000000/api.png",
        id: 'API'
    },
    {
        src: "https://img.icons8.com/officel/40/000000/popeye.png",
        id: 'Popeye'
    },
    {
        src: "https://img.icons8.com/officel/40/000000/olive-oyl.png",
        id: 'Olive'
    },
    {
        src: "https://img.icons8.com/color/48/000000/finn.png",
        id: 'Fin'
    },
    {
        src: "https://img.icons8.com/officel/40/000000/jake.png",
        id: 'Jake'
    },
    {
        src: "https://img.icons8.com/color/48/000000/pirates-of-the-caribbean.png",
        id: 'Pirates'
    },
    {
        src: "https://img.icons8.com/color/48/000000/snitch.png",
        id: 'HarryP'
    }
]

const cardContainer = document.querySelector('.board-container')
const body = document.querySelector('body')
let checkBoard = [];
let match = true;
// level one board
const levelOneBoard = () => {
    // this will give me 5 images out of the board
    return boardDeck.splice(0,5);

}
// level two board 
const levelTwoBoard = () => {
    // this will give me 7 images out of the board
    return boardDeck.splice(0,7);
}
//level three board
const levelThreeBoard = () => {
    // this will give me 10 images out of the board
    return boardDeck.splice(0,10);
}
// level four board
const levelFourBoard = () => {
    // this will give me 15 images out of the board
    return boardDeck.splice(0,15);
}
// level five board
const levelFiveBoard = () => {
    // this will give me 20 images out of the board
    return boardDeck.splice(0);
}

const flipCard = (e) => {
    console.log('I was clicked')
    console.log(this)
   
}

// loop through images
const gameLoop = levelboards => {
    
    for (let card of levelboards) {
        // create an img element that will pass in the source and id of the object
        const backFace = document.createElement('img')
        backFace.classList.add('back-face')
        backFace.src = 'https://ih1.redbubble.net/image.202165125.2731/st,small,507x507-pad,600x600,f8f8f8.u2.jpg'
        const newCard = document.createElement('img')
        newCard.classList.add('front-face');
        newCard.src = card.src
        card += newCard
        let cloneCard = newCard.cloneNode(true)
        let cloneBackFace = backFace.cloneNode(true)
        // clone and append
        cardContainer.appendChild(newCard)
        cardContainer.appendChild(cloneCard)
        cardContainer.appendChild(backFace)
        cardContainer.appendChild(cloneBackFace)

        newCard.addEventListener('click', flipCard)
        
    }
};
gameLoop(levelOneBoard())





