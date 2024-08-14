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

// function playRound(computerChoice, humanChoice) {
//     if (computerChoice === humanChoice) {
//         return `It's a tie! Both chose ${humanChoice}.`
//     } else if (
//     (humanChoice === 'rock' && computerChoice === 'scissors') ||
//     (humanChoice === 'paper' && computerChoice === 'rock') ||
//     (humanChoice === 'scissors' && computerChoice === 'paper')
//     ) {
//         return `You win! ${humanChoice} beats ${computerChoice}.`
//     } else {
//         return `Computer wins! ${computerChoice} beats ${humanChoice}.`
//     }
// }

// console.log(playRound(computerChoice, humanChoice))

// another way, don't pass in arguments and get choices inside function

// let computerScore = 0
// let humanScore = 0 

// function playRound() {
//     let computerChoice = getComputerChoice();
//     let humanChoice = getHumanChoice();

//     if (humanChoice === computerChoice) {
//         return `It's a tie! Both chose ${humanChoice}.`;
//     } else if (
//         (humanChoice === 'rock' && computerChoice === 'scissors') ||
//         (humanChoice === 'paper' && computerChoice === 'rock') ||
//         (humanChoice === 'scissors' && computerChoice === 'paper')
//     ) {
//         return `You win! ${humanChoice} beats ${computerChoice}.`;
//     } else {
//         return `Computer wins! ${computerChoice} beats ${humanChoice}.`;
//     }
// }

// console.log(playRound())