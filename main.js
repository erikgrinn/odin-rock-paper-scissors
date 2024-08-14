

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
    // return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const userChoice = String(prompt('enter your choice'))
    
}

console.log(getComputerChoice())