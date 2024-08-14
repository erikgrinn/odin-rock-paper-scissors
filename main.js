function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
    // return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const userInput = String(prompt('enter your choice')).toLowerCase()
    if (choices.includes(userInput)) {
        return userInput;
    } else {
        alert('Invalid choice. Please enter "rock", "paper", or "scissors".');
        return getHumanChoice(); // Recursively ask for input again
    }
}


function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log (`It's a tie! Both chose ${humanChoice}.`)
        return
    } else if (
    (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
    (humanChoice === 'Paper' && computerChoice === 'Rock') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        console.log (`You win! ${humanChoice} beats ${computerChoice}.`)
        return 1
    } else {
        console.log (`Computer wins! ${computerChoice} beats ${humanChoice}.`)
        return 0
    }
}


function playGame() {
    let computerScore = 0
    let humanScore = 0 
    
    for (var i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice()
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        let humanChoice = getHumanChoice()
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
        result = playRound(computerChoice, humanChoice)
        if (result === 0) {
            computerScore++
        } else if (result === 1) {
            humanScore++
        }
    }

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


console.log(playGame())