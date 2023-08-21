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
function getUserChoice(){
    
}


function playRockPaperScissors(){
    let computer = getComputerChoice();
    let user = getComputerChoice();
    if(user===computer)
        return "It is a tie";
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
        return "Computer chose rock. Paper wraps rock. You wins.";
    }
    else if(userChoice==="scissors"){
        return "Computer chose rock. Rock smashes scissors. Computer wins.";
    }
}
function computerChosePaper(userChoice){
    if(userChoice==="rock"){
        return "Computer chose paper. Paper wraps rock. Computer wins";
    }
    else if(userChoice==="scissors"){
        return "Computer chose paper. Scissors cut paper. You win!";
    }
}
function computerChoseScissors(userChoice){
    if(userChoice==="paper"){
        return "Computer chose scissors. Scissors cut paper. Computer wins";
    }
    else if(userChoice==="rock"){
        return "Computer chose scissors. Rock smashes scissors. You win!";
    }
}
let game = ()=>{
    for(let i=0; i<5;i++){
        console.log(playRockPaperScissors());
    }
}
game();

/*Features to add
    -Need to refactor code for comparing user choices for DRY principle
    -Need to add counter to display score of wins and losses. Should be able to use PLSRD principle for this
    -Need to add HTML application
    --need to prompt user for selection and make it not case sensitive
    - 