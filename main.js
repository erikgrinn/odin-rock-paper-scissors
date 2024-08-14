// two different ways

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

// one way, initialize choices outside of function and pass in

// let computerScore = 0
// let humanScore = 0 

// let computerChoice = getComputerChoice()
// let humanChoice = getHumanChoice()

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log (`It's a tie! Both chose ${humanChoice}.`)
        return
    } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log (`You win! ${humanChoice} beats ${computerChoice}.`)
        return 1
    } else {
        console.log (`Computer wins! ${computerChoice} beats ${humanChoice}.`)
        return 0
    }
}

// console.log(playRound(computerChoice, humanChoice))

// another way, don't pass in arguments and get choices inside function

// let computerScore = 0
// let humanScore = 0 

// function playRound() {
//     let computerChoice = getComputerChoice();
//     let humanChoice = getHumanChoice();

//     if (computerChoice === humanChoice) {
//         return (`It's a tie! Both chose ${humanChoice}. The current score is:
//             Human - ${humanScore} to Computer - ${computerScore}`)
//     } else if (
//     (humanChoice === 'rock' && computerChoice === 'scissors') ||
//     (humanChoice === 'paper' && computerChoice === 'rock') ||
//     (humanChoice === 'scissors' && computerChoice === 'paper')
//     ) {
//         humanScore++
//         return (`You win! ${humanChoice} beats ${computerChoice}. 
//     } else {
//         computerScore++
//         return (`Computer wins! ${computerChoice} beats ${humanChoice}. 
//     }
// }

// console.log(playRound())

function playGame() {
    let computerScore = 0
    let humanScore = 0 
    
    for (var i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice()
        let humanChoice = getHumanChoice()
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