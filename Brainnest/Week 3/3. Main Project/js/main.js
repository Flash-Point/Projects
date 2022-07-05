
//Method: generate random input for computer.
const computerPlay = () => {
    let computerOption = Math.floor(Math.random() * 3);
    switch (computerOption) {
        case 0: computerOption = 'rock';
            break;
        case 1: computerOption = 'paper';
            break;
        case 2: computerOption = 'scissors';
    }
    return computerOption;
}

//Method: gets input from human player and computer. Based on Rock/Paper/Scissors rule set.
const playRound = (playerSelection, computerSelection) => {
    let player = playerSelection.toLowerCase();
    if (player == computerSelection) {
        return `It's a tie!`;
    } else if (player == 'rock' && computerSelection == 'scissors') {
        return 'You Win! Rock crushes Scissors';
    } else if (player == 'scissors' && computerSelection == 'paper') {
        return 'You Win! Scissors cuts Paper';
    } else if (player == 'paper' && computerSelection == 'rock') {
        return 'You Win! Paper covers Rock'
    } else if (player == 'scissors' && computerSelection == 'rock') {
        return 'You Lose! Rock crushes Scissors';
    } else if (player == 'paper' && computerSelection == 'scissors') {
        return 'You Lose! Scissors cuts paper';
    } else if (player == 'rock' && computerSelection == 'paper') {
        return 'You Lose! Paper covers Rock'
    } else {
        //if user enters anything except valid game options.
        return 'Your option was invalid';
    }
}
/***************************************************************************************** */

//Game Starts Here!
let playerScore = 0;
let computerScore = 0;

//Game goes for 5 rounds.
for (let round = 0; round < 5; round++) {
    let playerSelection = prompt();
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

    //Used includes() method to check if the string that playRound returns contains either a win or loose for the player.
    if (playRound(playerSelection, computerSelection).includes('Win')) {
        playerScore++;
    } else if (playRound(playerSelection, computerSelection).includes('Lose')) {
        computerScore++;
    }
    console.log(`Player Score: ${playerScore}.\n`);
    console.log(`Computer Score: ${computerScore}\n`);
}
//Announce the winner!
if (playerScore > computerScore) {
    console.log(`Congratulations, you have won the game!\n Player Score: ${playerScore}.\n Computer Score: ${computerScore}`);
} else if (computerScore > playerScore) {
    console.log(`The computer has won! Refresh the page to try again.\n Player Score: ${playerScore}.\n Computer Score: ${computerScore}`);
}