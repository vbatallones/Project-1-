const boardDeck = [
    {
        src: "https://img.icons8.com/color/48/000000/yoda.png",
        matched: false,
        id: 'Yoda'
    },
    {
        src: "https://img.icons8.com/color/48/000000/chewbacca.png",
        matched: false,
        id: 'Chewbacca'
    },
    {
        src: "https://img.icons8.com/color/48/000000/darth-vader.png",
        matched: false,
        id: 'Darth-vader'
    },
    {
        src: "https://img.icons8.com/color/48/000000/r2-d2.png",
        matched: false,
        id: 'R2-D2'
    },
    {
        src: "https://img.icons8.com/color/48/000000/animation.png",
        matched: false,
        id: 'Mickey'
    },
    {
        src: "https://img.icons8.com/color/48/000000/sonic-the-hedgehog-1.png",
        matched: false,
        id: 'Sonic'
    },
    {
        src: "https://img.icons8.com/doodle/48/000000/super-mario.png",
        matched: false,
        id: 'Mario'
    },
    {
        src: "https://img.icons8.com/color/48/000000/pinball.png",
        matched: false,
        id: 'Pinball'
    },
    {
        src: "https://img.icons8.com/color/48/000000/bullbasaur.png",
        matched: false,
        id: 'Bulba'
    },
    {
        src: "https://img.icons8.com/officel/40/000000/walter-white.png",
        matched: false,
        id: 'MrWhite'
    },
    {
        src: "https://img.icons8.com/color/48/000000/jigglypuff.png",
        matched: false,
        id: 'JigglyPuff'
    },
    {
        src: "https://img.icons8.com/color/48/000000/empire.png",
        matched: false,
        id: 'Empire'
    },
    {
        src: "https://img.icons8.com/color/48/000000/luke-skywalker.png",
        matched: false,
        id: 'Luke'
    },
    {
        src: "https://img.icons8.com/office/40/000000/rebel.png",
        matched: false,
        id: 'Rebel'
    },
    {
        src: "https://img.icons8.com/color/48/000000/api.png",
        matched: false,
        id: 'API'
    },
    {
        src: "https://img.icons8.com/officel/40/000000/popeye.png",
        matched: false,
        id: 'Popeye'
    },
    {
        src: "https://img.icons8.com/officel/40/000000/olive-oyl.png",
        matched: false,
        id: 'Olive'
    },
    {
        src: "https://img.icons8.com/color/48/000000/finn.png",
        matched: false,
        id: 'Fin'
    },
    {
        src: "https://img.icons8.com/officel/40/000000/jake.png",
        matched: false,
        id: 'Jake'
    },
    {
        src: "https://img.icons8.com/color/48/000000/pirates-of-the-caribbean.png",
        matched: false,
        id: 'Pirates'
    },
    {
        src: "https://img.icons8.com/color/48/000000/snitch.png",
        matched: false,
        id: 'HarryP'
    }
]

const board = document.querySelector('.boardGame')
const cardContainer = document.querySelector('.card-container')
const body = document.querySelector('body')
let checkBoard = [];

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
        newCard.id = card.id
        card += newCard
        //append the image to my board
        board.appendChild(newCard)
        // duplicating my images into two, so I have 2 of each images.
        let cloneCard = newCard.cloneNode(true)
        board.appendChild(cloneCard)
        let cloneBackFace = backFace.cloneNode(true)
        board.appendChild(cloneBackFace)
        board.appendChild(backFace)
        
    }
};
gameLoop(levelOneBoard())

//levelOneBoard(boardDeck)




