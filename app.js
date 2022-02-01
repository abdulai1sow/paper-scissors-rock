//the variable
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

//when click on choices, compare and give result
//game reference game from event
function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}           

//convert letters to word
function convertToWord(letter) {
  if (letter === 'r') return 'Rock';
  if (letter === 'p') return 'Paper';
  return 'scissors';
}

//add score to board & show win or lose
function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToWord (userChoice)} beats ${convertToWord (computerChoice)}. you win`;
}

function lose() {
  console.log('lose');
}

function draw() {
  console.log('draw');
}

//mind of the game
function game(userChoice) {
  const computerChoice = getComputerChoice();
  // console.log('user choice => ' + userChoice);
  // console.log('computerChoice => ' + computerChoice);
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice + computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice + computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice + computerChoice);
      break;
  }
}

// game('c');

function main() {
  //event listeners for the choices
  rock_div.addEventListener('click', function () {
    game('r');
  })

  paper_div.addEventListener('click', function () {
    game('p');
  })

  scissors_div.addEventListener('click', function () {
    game('s');
  })
}

main();
