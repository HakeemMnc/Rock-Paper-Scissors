function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function gameRound(playerSelection, computerSelection) {
  let lcplayerSelection = playerSelection.toLowerCase();

  if (lcplayerSelection === computerSelection) {
    return "Tie";
  } else if (lcplayerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You loose, paper beats rock";
    } else {
      return "You win, rock beats scissors";
    }
  } else if (lcplayerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "You loose, scissors beats paper";
    } else {
      return "You win, paper beats rock";
    }
  } else {
    if (computerSelection === "rock") {
      return "You loose, rock beats scissors";
    } else {
      return "You win, scissors beats paper";
    }
  }
}

function game() {
  let computerChoice;
  let playerChoice;
  let round;
  let count = [0, 0];
  const choices = ["rock", "paper", "scissors"];
  for (let i = 0; i < 3; i++) {
    computerChoice = getComputerChoice();
    playerChoice = prompt("Rock, paper or scissors ?");
    round = gameRound(playerChoice, computerChoice);
    if (choices.includes(playerChoice.toLowerCase())) {
      console.log(round);
    } else {
      console.log("incorrect input");
    }
    if (round.includes("win")) {
      count[0]++;
    } else if (round.includes("loose")) {
      count[1]++;
    }
  }
  console.log(`Final result => You:${count[0]}  Computer:${count[1]}`);
}

game();
