function getComputerChoice(){
    let choice = Math.floor(Math.random()* 3);
    if (choice == 0) {
        return "rock";
    }
    else if (choice == 1) {
        return "paper";
    }
    else if (choice == 2) {
        return "scissors";
    }
}

function game(userChoice){
    let computerChoice = getComputerChoice()
    let winMsg = `Computer picked ${computerChoice} hence:
        YOU WIN`;
    let loseMsg = `Computer picked ${computerChoice} hence:
        YOU LOSE`;
    if (userChoice == computerChoice){
        console.log(`Computer picked ${computerChoice}
        Because of that, the game it's a TIE`);
    }
    else {
        if ( userChoice || computerChoice == "rock" && userChoice || computerChoice == "paper") {
            if (userChoice == "paper") {
                console.log(winMsg);
            }
            else if (userChoice == "rock") {
                console.log(loseMsg);
            }
        }
        if (userChoice || computerChoice == "rock" && userChoice || computerChoice == "scissors") {
            if(userChoice == "scissors") {
                console.log(loseMsg);
            }
            else if (userChoice == "rock") {
                console.log(winMsg);
            }
        }
    }
}

game("paper");