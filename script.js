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
    let winMsg = console.log(`Computer picked ${computerChoice} hence:
        YOU WIN`);
    let loseMsg = console.log(`Computer picked ${computerChoice} hence:
        YOU LOSE`);
    if (userChoice == computerChoice){
        console.log(`Computer picked ${computerChoice};
            Because of that, the game it's a TIE`);
    }
    else {
        if ( userChoice || computerChoice == "rock" && userChoice || computerChoice == "paper") {
            if (userChoice == "paper") {
                winMsg;
            }
            else {
                loseMsg;
            }
        }
        if (userChoice || computerChoice == "rock" && userChoice || computerChoice == "scissors") {
            if(userChoice != "rock") {
                loseMsg;
            }
            else {
                winMsg;
            }
        }
    }
}

game("paper");