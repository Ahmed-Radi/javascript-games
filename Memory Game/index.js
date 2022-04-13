const cardArray = [
    {
        name: 'fries',
        src: './images/fries.png'
    },
    {
        name: 'hotdog',
        src: './images/hotdog.png'
    },
    {
        name: 'ice-cream',
        src: './images/ice-cream.png'
    },
    {
        name: 'milkshake',
        src: './images/milkshake.png'
    },
    {
        name: 'pizza',
        src: './images/pizza.png'
    },
    {
        name: 'cheeseburger',
        src: './images/cheeseburger.png'
    },
    {
        name: 'fries',
        src: './images/fries.png'
    },
    {
        name: 'hotdog',
        src: './images/hotdog.png'
    },
    {
        name: 'ice-cream',
        src: './images/ice-cream.png'
    },
    {
        name: 'milkshake',
        src: './images/milkshake.png'
    },
    {
        name: 'pizza',
        src: './images/pizza.png'
    },
    {
        name: 'cheeseburger',
        src: './images/cheeseburger.png'
    },
];

// way to create random distribution(shuffle)
cardArray.sort(() => 0.5 - Math.random());

const gridItems = document.getElementById('grid');
const result = document.querySelector('#result');

let cardChosen = [];
let cardChosenIds = [];
const cardWon = [];
result.textContent = 0;

const createBoard = () => {
    cardArray.forEach((item, index) => {
        const card = document.createElement('img');
        card.setAttribute('src', './images/blank.png');
        card.setAttribute('data-id', index);
        card.addEventListener('click', flipCard);
        gridItems.appendChild(card);
    })
}
createBoard()

function checkMatch() {
    const card = document.querySelectorAll('#grid img');
    let optionOneId = cardChosenIds[0];
    let optionTwoId = cardChosenIds[1];
    if(optionOneId === optionTwoId) {
        alert('You are choose the same card');
        card[optionOneId].setAttribute('src', './images/blank.png');
        card[optionTwoId].setAttribute('src', './images/blank.png');
        if (cardChosenIds.length === 3) {
            card[cardChosenIds[2]].setAttribute('src', './images/blank.png'); // If the user selects one card twice the before this function end he chose another card the `cardChosenIds` will contain three indexes not 2
        }
        cardChosen = [];
        cardChosenIds = [];
        return;
    }
    if(cardChosen[0] === cardChosen[1]) {
        // alert('Great job!!');
        card[optionOneId].setAttribute('src', './images/white.png');
        card[optionTwoId].setAttribute('src', './images/white.png');
        card[optionOneId].removeEventListener('click', flipCard);
        card[optionTwoId].removeEventListener('click', flipCard);
        cardWon.push(cardChosen);
    } else {
        card[optionOneId].setAttribute('src', './images/blank.png');
        card[optionTwoId].setAttribute('src', './images/blank.png');
    }
    cardChosen = [];
    cardChosenIds = [];
    result.textContent = cardWon.length;
    if(cardWon.length === cardArray.length/2) {
        result.textContent = 'Congratulation you found them all';
    }
}

function flipCard () {
    const cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    cardChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].src);
    if (cardChosen.length === 2) setTimeout(checkMatch, 550)
}