function getComputerChoice() {

    let number = Math.floor(Math.random()*3);
    return number === 0 ? "Rock" : number === 1 ? "Paper" : "Scissors";

}
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {

    let pS = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let cS = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();

    if (pS === "Rock" && cS === "Paper") {
        return "You Lose! Paper beats Rock"
    } else if (pS === "Rock" && cS === "Scissors") {
        return "You Win! Rock beats Scissors"
    } else if (pS === "Paper" && cS === "Rock") {
        return "You Win! Paper beats Rock"
    } else if (pS === "Paper" && cS === "Scissors") {
        return "You Lose! Scissors beats Paper "
    } else if (pS === "Scissors" && cS === "Paper") {
        return "You Win! Scissors beats Paper"
    } else if (pS === "Scissors"  && cS === "Rock" ) {
        return "You Lose! Rock beats Scissors"
    } else if (pS === cS) {
        return "It's a tie!"
    }
}

//let playerSelection = prompt("Enter rock, paper or scissors", "");
//let computerSelection = getComputerChoice();




function game() {
    let playerCount = 0;
    let computerCount = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter rock, paper or scissors", "");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        let winLoseTie = playRound(playerSelection,computerSelection).split(" ");
        if (winLoseTie[1] === "Win!") {
            playerCount += 1;
        } else if (winLoseTie[1] === "Lose!") {
            computerCount +=1;
        } else if (winLoseTie[2] === "tie!") {

        }
        
    }
    console.log(playerCount > computerCount ? "You Win!" : "You Lose!")
}

game()


