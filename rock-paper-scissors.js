const playerScore = 0;
const computerScore = 0;

function computerSelection() {
  const choices = ['rock', 'paper', 'scissors'];

  const choice = choices[Math.floor(Math.random() * choices.length * 1)];

  return choice;
}
