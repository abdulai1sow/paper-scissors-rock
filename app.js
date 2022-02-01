//the variable
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
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

function win() {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  
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
      win();
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose();
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw();
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
