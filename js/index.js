function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"]
  const choice = Math.floor(Math.random() * options.length)

  return options[choice]
}

function getWonMessage(playerSelection, computerSelection) {
  return {
    player: 1,
    computer: 0,
    message: `You Won! ${playerSelection} beats ${computerSelection}.`,
  }
}

function getLoseMessage(playerSelection, computerSelection) {
  return {
    player: 0,
    computer: 1,
    message: `You Lose! ${computerSelection} beats ${playerSelection}.`,
  }
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toUpperCase()
  const computer = computerSelection.toUpperCase()

  if (player === computer) {
    return {
      player: 0,
      computer: 0,
      message: `It is a tie! ${playerSelection} equals ${computerSelection}!`,
    }
  }

  if (player === "ROCK" && computer === "PAPER") {
    return getLoseMessage(playerSelection, computerSelection)
  }

  if (player === "PAPER" && computer === "SCISSORS") {
    return getLoseMessage(playerSelection, computerSelection)
  }

  if (player === "SCISSORS" && computer === "ROCK") {
    return getLoseMessage(playerSelection, computerSelection)
  }

  return getWonMessage(playerSelection, computerSelection)
}

function playGame() {
  let playerPoints = 0
  let computerPoints = 0

  let i = 0
  while (i < 5) {
    const playerSelection = prompt("Choose Rock, Paper or Scissors: ")
    const computerSelection = getComputerChoice()
    const result = playRound(playerSelection, computerSelection)

    playerPoints = playerPoints + result.player
    computerPoints = computerPoints + result.computer
    console.log(result.message)

    i++
  }

  console.log("----------- SCORES -----------")

  if (playerPoints === computerPoints) {
    console.log("Unbelievable! It's a complete tie!!!")
  } else if (playerPoints > computerPoints) {
    console.log("Congratulations! You are the winner!!!")
  } else {
    console.log("Sorry! You are the loser!!!")
  }

  console.log("Your points: ", playerPoints)
  console.log("Computer points: ", computerPoints)
}

playGame()
