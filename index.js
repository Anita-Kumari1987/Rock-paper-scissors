console.log('Hello World');

let computerScore = 0;
let humanScore=0;

playGame();
playGame();
playGame();
playGame();
playGame();

function getHumanChoice() {
  let userInput = prompt('Choose among rock/ ROCK/ RocK or paper/ PAPER/ Paper or scissors/ Scissors/ SCISSORS: ');
  return userInput;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice===computerChoice){
    return "it's the tie";
  }if((humanChoice==='paper' && computerChoice==='rock')|| 
      ((humanChoice==='rock' || humanChoice==='Rock' || humanChoice==='ROCK') && computerChoice==='scissors')|| 
      (humanChoice==='scissors' && computerChoice==='paper')){
        humanScore =humanScore+1;
    return 'Human won'
  } else {
    computerScore =computerScore+1;
    return 'Computer won';
  }
}

function getComputerChoice() {
  let randomNumber= Math.random()*3;
  if (randomNumber > 0 && randomNumber<=1){
    return 'rock';
  } else if (randomNumber > 1 && randomNumber<=2){
    return 'paper';
  } else{
    return 'scissors';
  }   

}

function playGame(){
  let humanChoice= getHumanChoice();
  console.log('Human choice is ' + humanChoice);
  let computerChoice = getComputerChoice();
  console.log('computer choice is ' + computerChoice);
  console.log(playRound(humanChoice, computerChoice));
  console.log("Human Score: "+humanScore+" Computer Score "+computerScore);
}
