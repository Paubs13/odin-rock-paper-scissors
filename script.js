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

function getUserChoice() {
    let userChoice = prompt("Type rock paper or scissors ==>");
    userChoice = userChoice.toLowerCase();
    return userChoice;
}

function playRound(){
    let userChoice = getUserChoice ();
    let computerChoice = getComputerChoice();
    let winMsg = `Computer picked ${computerChoice} hence:
        YOU WIN`;
    let loseMsg = `Computer picked ${computerChoice} hence:
        YOU LOSE`;
    if (userChoice == computerChoice){
        console.log(`Computer picked ${computerChoice}
        Because of that, the game it's a TIE`);
        return "none";
    }
    else {
        if ( userChoice || computerChoice == "rock" && userChoice || computerChoice == "paper") {
            if (userChoice == "paper") {
                console.log(winMsg);
                return "user";
            }
            else if (userChoice == "rock") {
                console.log(loseMsg);
                return "computer";
            }
        }
        if (userChoice || computerChoice == "rock" && userChoice || computerChoice == "scissors") {
            if(userChoice == "scissors") {
                console.log(loseMsg);
                return "computer";
            }
            else if (userChoice == "rock") {
                console.log(winMsg);
                return "user";
            }
        }
        if (userChoice || computerChoice == "paper" && userChoice || computerChoice == "scissors") {
            if (userChoice == "paper") {
                console.log(loseMsg)
                return "computer";
            }
            else if (userChoice == "scissors") {
                    console.log(winMsg)
                    return "user";
                }
            }
        }
    }

let humanScore = 0;
let computerScore = 0;

function playGame(humanScore, computerScore){
    for (let gameCount = 1; gameCount <= 5; ++gameCount){
        let winner = playRound(getUserChoice);
        if (winner = "user") {
            ++humanScore;
        }
        else if (winner = "computer") {
            ++computerScore
        }
        else {
        }
    }
    let overall_winner;
    if (humanScore > computerScore){
        overall_winner = "YOU"
    }
    else if (humanScore < computerScore) {
        overall_winner = "COMPUTER"
    }
    else if (humanScore == computerScore) {
        overall_winner = "NONE"
    }
    console.log(`${overall_winner} is the overall winner`)    
}

playGame (humanScore, computerScore);