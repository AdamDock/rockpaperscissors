let userWin = 0;
let cpuWin = 0;
let tie = 0;

const rock = document.querySelector('.rockButton');
const paper = document.querySelector('.paperButton');
const scissors = document.querySelector('.scissorButton');
const score = document.querySelector('.score');
const result = document.querySelector('.result');

rock.addEventListener('click', ()=>{
    game("rock")
}
)
paper.addEventListener('click', ()=>{
    game("paper")
}
)
scissors.addEventListener('click', ()=>{
    game("scissors")
}
)
function getComputerChoice() {
    let choice ="";
    let rand = Math.floor(Math.random() * (4-1)+1);
    console.log(rand);
    switch(rand){
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
            default:
                break;
    }
    return choice;
}

//Create buttons for each option and add event listener to start playRockpaperscissors function with player selection
function playRockPaperScissors(user){
    let computer = getComputerChoice();
    if(user===computer){
        tie++;
        return "It is a tie";
    }
    else if(computer==="rock"){
        return computerChoseRock(user);
    }
    else if(computer==="paper"){
        return computerChosePaper(user);
    }
    else if(computer==="scissors"){
        return computerChoseScissors(user);
    }
}
function computerChoseRock(userChoice){
    if(userChoice==="paper"){
        userWin++;
        return "Computer chose rock. Paper wraps rock. You wins.";
    }
    else if(userChoice==="scissors"){
        cpuWin++;
        return "Computer chose rock. Rock smashes scissors. Computer wins.";
    }
}
function computerChosePaper(userChoice){
    if(userChoice==="rock"){
        cpuWin++;
        return "Computer chose paper. Paper wraps rock. Computer wins";
    }
    else if(userChoice==="scissors"){
        userWin++;  
        return "Computer chose paper. Scissors cut paper. You win!";
    }
}
function computerChoseScissors(userChoice){
    if(userChoice==="paper"){
        cpuWin++;
        return "Computer chose scissors. Scissors cut paper. Computer wins";
    }
    else if(userChoice==="rock"){
        userWin++;
        return "Computer chose scissors. Rock smashes scissors. You win!";
    }
}
let game = (user)=>{
    if(userWin < 5 && cpuWin < 5){
    result.textContent= playRockPaperScissors(user);
    score.textContent = "Score is "+ userWin+ " to "+cpuWin+ " with "+ tie+" ties";
    }
    else{
        result.textContent = "Game Over";
    }
}
game();

/*Features to add
    -Need to refactor code for comparing user choices for DRY principle
    -Need to add counter to display score of wins and losses. Should be able to use PLSRD principle for this
    -Need to add HTML application
    --need to prompt user for selection and make it not case sensitive
    - */