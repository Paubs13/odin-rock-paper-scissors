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
    if (userChoice == computerChoice){
        console.log(`Computer picked ${computerChoice};
            Because of that, the game it's a tie`);
    }
    else {
        if ()
    }
}