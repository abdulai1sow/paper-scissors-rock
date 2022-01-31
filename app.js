//the variable
const userScore = 0;
const computerScore = 0;
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
  console.log(Math.floor(Math.random() * 3));
}                                 
getComputerChoice();

function game(userChoice) {

}

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
