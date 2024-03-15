let playerSelection = ""
let computerSelection = ""
let playerPoints = 0
let computerPoints = 0

const playerSelectionButton = document.getElementById("playerSelection")
playerSelectionButton.addEventListener("click", (e) => {
  e.preventDefault()

  playerSelection = prompt("Choose Rock, Paper or Scissors: ")
})

const computerSelectionButton = document.getElementById("computerSelection")
computerSelectionButton.addEventListener("click", (e) => {
  e.preventDefault()

  computerSelection = getComputerChoice()
})

const playButton = document.getElementById("play")
playButton.addEventListener("click", (e) => {
  e.preventDefault()

  const container = document.querySelector(".results")
  container.innerHTML = ""

  const result = playRound(playerSelection, computerSelection)
  playerPoints = playerPoints + result.player
  computerPoints = computerPoints + result.computer

  let message = result.message
  if (playerPoints === 5 || computerPoints === 5) {
    if (playerPoints === computerPoints) {
      message = "Unbelievable! It's a complete tie!!!"
    } else {
      message =
        playerPoints === 5
          ? "Congratulations! You are the winner!!!"
          : "Sorry! You are the loser!!!"
    }

    playerPoints = 0
    computerPoints = 0
  }

  const scorePoints = document.createElement("h4")
  scorePoints.textContent = `SCORE: Your points: ${playerPoints}, Computer points: ${computerPoints}`
  container.appendChild(scorePoints)

  const resultsDiv = document.createElement("div")
  resultsDiv.textContent = message
  container.appendChild(resultsDiv)
})

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
      player: 1,
      computer: 1,
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

// playGame()
