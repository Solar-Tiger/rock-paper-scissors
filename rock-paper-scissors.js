const playerScore = 0;
const computerScore = 0;

function computerSelection() {
  const computerChoices = ['rock', 'paper', 'scissors'];

  const choice =
    computerChoices[Math.floor(Math.random() * computerChoices.length * 1)];

  return choice;
}

function playerSelection() {
  let playerChoices;
  let playerChoice;

  do {
    playerChoices = prompt('Enter rock, paper or scissors');

    if (playerChoices === null) {
      return 0;
    }

    playerChoice = playerChoices.toLowerCase();
  } while (
    playerChoice !== 'rock' &&
    playerChoice !== 'paper' &&
    playerChoice !== 'scissors'
  );

  return playerChoice;
}
