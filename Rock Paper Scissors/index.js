const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoices,computerChoice;

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoices = e.target.id;
    // console.log(e.target.innerText)
    userChoiceDisplay.innerHTML = e.target.innerText;
    generateComputerChoice()
    winnerFunction()
}))

const generateComputerChoice = () => {
    const randomChoices = Math.floor(Math.random() * possibleChoices.length) + 1 ;
    if (randomChoices === 1) {
        computerChoice = 'Rock'
    } else if (randomChoices === 2) {
        computerChoice = 'Paper'
    } else if (randomChoices === 3) {
        computerChoice = 'Scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
const winnerFunction = () => {
    if(computerChoice.toLowerCase() === userChoices.toLowerCase()) {
        resultDisplay.innerHTML = 'The game is a Draw'
    }
    // you win
    else if (computerChoice.toLowerCase() === 'paper' && userChoices.toLowerCase() === 'scissors') {
        resultDisplay.innerHTML = 'You are the Winner'
    } else if (computerChoice.toLowerCase() === 'rock' && userChoices.toLowerCase() === 'paper') {
        resultDisplay.innerHTML = 'You are the Winner'
    } else if (computerChoice.toLowerCase() === 'scissors' && userChoices.toLowerCase() === 'rock') {
        resultDisplay.innerHTML = 'You are the Winner'
    }
    // Computer win
    else if (computerChoice.toLowerCase() === 'scissors' && userChoices.toLowerCase() === 'paper') {
        resultDisplay.innerHTML = 'Computer Win'
    } else if (computerChoice.toLowerCase() === 'paper' && userChoices.toLowerCase() === 'rock') {
        resultDisplay.innerHTML = 'Computer Win'
    } else if (computerChoice.toLowerCase() === 'rock' && userChoices.toLowerCase() === 'scissors') {
        resultDisplay.innerHTML = 'Computer Win'
    }
}