let selectedWeapon = ''; 
let playerScore = 0;
let opponentScore = 0;

function userInput(tool) {
  selectedWeapon = tool; // Set the selected weapon
  const outcome = document.getElementById("weapon-choice");
  outcome.textContent = 'You chose ' + selectedWeapon; // Provide feedback on the chosen weapon
}

function onSubmit() {
  if (!selectedWeapon) {
    alert("Please choose a weapon!"); // Alert if no weapon is chosen
    return;
  } else {
  const oppValue = numGenerator();
  const champion = winner(selectedWeapon, oppValue);
  const outcome = document.getElementById("weapon-choice");
  outcome.textContent = champion; // Displays the result
  // Displays scores on scoreboard
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("opponent-score").textContent = opponentScore;
  }
}

function resetGame() {
  playerScore = 0;
  opponentScore = 0;
  selectedWeapon = '';
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("opponent-score").textContent = opponentScore;
  const outcome = document.getElementById("weapon-choice");
  outcome.textContent = 'Choose your weapon';
  const opponent = document.getElementById("opponent-choice");
  opponent.textContent = '';
}

function numGenerator() {
  const randomDecimal = Math.random();
  const randomNumber = Math.floor(randomDecimal * 3);
  let options = ['rock', 'paper', 'scissors'];
  const opponent = document.getElementById("opponent-choice");
  opponent.textContent = 'Your opponent chose ' + options[randomNumber]; // Show opponent's choice
  return options[randomNumber];
}

function winner(you, opponent) {
  switch (you) {
    case 'scissors':
      switch (opponent) {
        case 'scissors':
          return 'Tie';
        case 'paper':
          playerScore++;
          return 'You win!';
        case 'rock':
          opponentScore++;
          return 'You lose';
      }

    case 'paper':
      switch (opponent) {
        case 'scissors':
          opponentScore++;
          return 'You lose';
        case 'paper':
          return 'Tie';
        case 'rock':
          playerScore++;
          return 'You win!';
      }

    case 'rock':
      switch (opponent) {
        case 'scissors':
          playerScore++;
          return 'You win!';
        case 'paper':
          opponentScore++;
          return 'You lose';
        case 'rock':
          return 'Tie';
      }

    default:
      return 'Oops';
  }
}
