function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
    // return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        let score = `It's a tie! Both chose ${humanChoice}.`
        return score
    } else if (
    (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        let score = `You win! ${humanChoice} beats ${computerChoice}.`
        return score
    } else {
        let score = (`Computer wins! ${computerChoice} beats ${humanChoice}.`)
        return score
    }
}


function playGame() {
    let computerScore = 0
    let humanScore = 0 
    
    // for (var i = 0; i < 5; i++) {
    //     let computerChoice = getComputerChoice()
    //     computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    //     let humanChoice = getHumanChoice()
    //     humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    //     result = playRound(computerChoice, humanChoice)
    //     if (result === 0) {
    //         computerScore++
    //     } else if (result === 1) {
    //         humanScore++
    //     }
    // }

    let winner = null
    if (computerScore > humanScore) {
        winner = 'Computer'
    } else if (humanScore > computerScore) {
        winner = 'Human'
    } else {
        winner = `Neither player`
    }
    return (`${winner} wins! The final score is: Human - ${humanScore} to Computer - ${computerScore}`)
}

const container = document.querySelector('div.container')

// note that starting with adding position, flex properties may no longer work as expected
// and this is a manual technique for positioning of the created scoreDiv within padding of container in css
// also, added position: relative in css for container
const scoreDiv = document.createElement('div')
scoreDiv.classList.add('score')
scoreDiv.style.color = 'rgb(237, 75, 12)'
scoreDiv.style.position = 'absolute'
scoreDiv.style.bottom = '20px'

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let humanChoice = button.id.charAt(0).toUpperCase() + button.id.slice(1)
        let computerChoice = getComputerChoice()
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        scoreDiv.textContent = playRound(computerChoice,humanChoice)
        container.appendChild(scoreDiv)
    });
});

