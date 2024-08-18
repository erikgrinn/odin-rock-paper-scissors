function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
    // return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        let roundSummary = `It's a tie! Both chose ${humanChoice}.`
        roundDiv.style.color = 'silver'
        return roundSummary
    } else if (
    (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        let roundSummary = `You win! ${humanChoice} beats ${computerChoice}.`
        humanScore++
        roundDiv.style.color = 'green'
        return roundSummary
    } else {
        let roundSummary = (`Computer wins! ${computerChoice} beats ${humanChoice}.`)
        computerScore++
        roundDiv.style.color = 'red'
        return roundSummary
    }
}

function handleClick (event) {
    let humanChoice = event.target.id.charAt(0).toUpperCase() + event.target.id.slice(1)
    let computerChoice = getComputerChoice()
    computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    roundDiv.textContent = playRound(computerChoice,humanChoice)
    container.appendChild(roundDiv)
    humanScoreDiv.textContent = humanScore
    computerScoreDiv.textContent = computerScore

    if (humanScore >= 5) {
        roundDiv.textContent = `Match Over: You win this time.`
        buttons.forEach((button) => {
            button.removeEventListener("click", handleClick);
        });
        document.body.appendChild(replayButton)
    } else if (computerScore >= 5) {
        roundDiv.textContent = `Match Over: Better luck next time.`
        buttons.forEach((button) => {
            button.removeEventListener("click", handleClick);
        });
        document.body.appendChild(replayButton)
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
roundDiv.style.bottom = '15px'
roundDiv.style.fontSize = '25px'

const humanScoreDiv = document.querySelector('.humanScore')
let humanScore = Number(humanScoreDiv.textContent)

const computerScoreDiv = document.querySelector('.computerScore')
let computerScore = Number(computerScoreDiv.textContent)

const replayButton = document.createElement('button')
replayButton.classList.add('replay')
replayButton.textContent = 'Try again?'
replayButton.style.cssText = `
    background-color: rgb(25, 99, 92);
    color: silver;
    height: 50px;
    width: 200px;
    font-size: 20px;
    position: absolute;
    top: 414px;
    left: 0;
    right: 0;
    text-align: center;
    margin: auto;
    border: 5px outset rgb(145, 64, 32);

`

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", handleClick)
    //     let humanChoice = button.id.charAt(0).toUpperCase() + button.id.slice(1)
    //     let computerChoice = getComputerChoice()
    //     computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    //     roundDiv.textContent = playRound(computerChoice,humanChoice)
    //     container.appendChild(roundDiv)
    //     humanScoreDiv.textContent = humanScore
    //     computerScoreDiv.textContent = computerScore
    //     if (humanScore >= 5) {
    //         roundDiv.textContent = `Match Over: You win this time.`
    //     } else if (computerScore >= 5) {
    //         roundDiv.textContent = `Match Over: Better luck next time.`
    //     }
    // });
});

