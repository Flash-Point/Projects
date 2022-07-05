
//for display
let roundNumber = document.getElementById("round");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");

//ensure set to zero
roundNumber.innerHTML = 0;
playerScore.innerHTML = 0;
computerScore.innerHTML = 0;

const computerPlay = () => {
    let computerOption = Math.floor(Math.random() * 3);
    return computerOption;
}

const playRound = (playerSelection) => {
    let computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        return "tie";
    } else if (playerSelection == '0' && computerSelection == '2') {
        return true;
    } else if (playerSelection == '1' && computerSelection == '2') {
        return true;
    } else if (playerSelection == '2' && computerSelection == '1') {
        return true;
    } else {
        return false;
    }
}

const winnerMessage = () => {
    const messageBox = document.createElement("div");
    const text = document.createElement("p");
    text.innerHTML = `<b>You are the Winner!<br> Player Score: ${playerScore.innerHTML}<br> Computer Score: ${computerScore.innerHTML}</b>`;
    messageBox.appendChild(text);
    document.body.appendChild(messageBox);
}

const looserMessage = () => {
    const messageBox = document.createElement("div");
    const text = document.createElement("p");
    text.innerHTML = `<b>The computer has better luck!<br> Player Score: ${playerScore.innerHTML}<br> Computer Score: ${computerScore.innerHTML}</b></b>`;
    messageBox.appendChild(text);
    document.body.appendChild(messageBox);
}

const scoreAndMessageReset = () => {
    roundNumber.innerHTML = 0;
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const roundResult = playRound(button.getAttribute('id'));

        //check result of round
        if (roundResult == true) {
            playerScore.innerHTML++;
            roundNumber.innerHTML++;
        } else if (roundResult == false) {
            computerScore.innerHTML++;
            roundNumber.innerHTML++;
        } else if (roundResult == "tie") {
            alert("This round was a tie!");
        }
        
        //check if player or computer has won
        if (playerScore.innerHTML == 5) {
            winnerMessage();
            scoreAndMessageReset();
        } else if (computerScore.innerHTML == 5) {
            looserMessage();
            scoreAndMessageReset();
        }
    });
});
