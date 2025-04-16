function getComputerChoice() {
    const computerChoicesArr = ['rock', 'paper', 'scissors']
    let getRandomNumber = Math.floor(Math.random() * 3)
    let computerChoice = computerChoicesArr[getRandomNumber]
    return computerChoice
}

function getPlayerChoice() {
    let playerChoice = prompt("Please choose, 'rock', 'paper', or 'scissors': ")
    return playerChoice.toLowerCase()
}

function handleGameChoices() {
    let computerChoice = getComputerChoice()
    let playerChoice = getPlayerChoice()

    if (playerChoice == computerChoice) {
        console.log(`It was a tie! You chose ${playerChoice} and computer chose ${computerChoice}!`)
        return
    }

    switch (playerChoice) {
        case 'rock':
            if (computerChoice == 'scissors') {
                console.log('You win! Computer chose scissors!')
                return true
            } else if (computerChoice == 'paper') {
                console.log('You lose! Computer chose paper!')
                return false
            }
        break;

        case 'paper':
            if (computerChoice == 'rock') {
                console.log('You win! Computer chose rock!')
                return true
            } else if (computerChoice == 'scissors') {
                console.log('You lose! Computer chose scissors!')
                return false
            }
        break;

        case 'scissors':
            if (computerChoice == 'paper') {
                console.log('You win! Computer chose paper!')
                return true
            } else if (computerChoice == 'rock') {
                console.log('You lose! Computer chose rock!')
                return false
            }
        break;

        default:
            console.log("Invalid choice. Please pick 'rock', 'paper', or 'scissors'.")
    }

}


function playGame() {
    let playerScore = 0
    let computerScore = 0
    let rounds = 5

    for (let i = 1; i <= rounds; i++) {
        console.log(`----Round ${i}----`)
        const result = handleGameChoices()

        if (result === true) {
            playerScore++
        } else if (result == false) {
            computerScore++
        } else {
            console.log('No points this round. Try again!')
        }

        console.log(`Score: You ${playerScore} - ${computerScore} Computer`)
    }

    if (playerScore > computerScore) {
        console.log('Congrats! You won the game!')
    } else if (playerScore < computerScore) {
        console.log('Darn! You lost, better luck next time!')
    } else {
        console.log('It was a tie! That was a good game though!')
    }
}

playGame()