function computerPlay() {
  return "rock";
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  return "You Lose! Paper beats Rock";
}

function game() {
  for (let i = 0; i < 5; i++) {
    const userInput = prompt("Your choice");
    playRound(userInput, computerPlay());
  }
}
game()