function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
    // return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        let roundSummary = `It's a tie! Both chose ${humanChoice}.`
        return roundSummary
    } else if (
    (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        let roundSummary = `You win! ${humanChoice} beats ${computerChoice}.`
        humanScore++
        return roundSummary
    } else {
        let roundSummary = (`Computer wins! ${computerChoice} beats ${humanChoice}.`)
        computerScore++
        return roundSummary
    }
}


const container = document.querySelector('div.container')

// note that starting with adding position, flex properties may no longer work as expected
// and this is a manual technique for positioning of the created roundDiv within padding of container in css
// also, added position: relative in css for container
const roundDiv = document.createElement('div')
roundDiv.classList.add('roundSummary')
roundDiv.style.color = 'rgb(237, 75, 12)'
roundDiv.style.position = 'absolute'
roundDiv.style.bottom = '20px'

const humanScoreDiv = document.querySelector('.humanScore')
let humanScore = Number(humanScoreDiv.textContent)

const computerScoreDiv = document.querySelector('.computerScore')
let computerScore = Number(computerScoreDiv.textContent)

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let humanChoice = button.id.charAt(0).toUpperCase() + button.id.slice(1)
        let computerChoice = getComputerChoice()
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        roundDiv.textContent = playRound(computerChoice,humanChoice)
        container.appendChild(roundDiv)
        humanScoreDiv.textContent = humanScore
        computerScoreDiv.textContent = computerScore
        if (humanScore >= 5) {
            roundDiv.textContent = `Match Over: You win this time.`
        } else if (computerScore >= 5) {
            roundDiv.textContent = `Match Over: Better luck next time.`
        }
    });
});

