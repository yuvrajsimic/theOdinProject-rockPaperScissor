let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let allPossibilites = ["rock", "paper", "scissors"];

    let x = Math.floor(Math.random() * allPossibilites.length);

    return allPossibilites[x];
}

function playRound(humanChoice)
{
    let computerChoice = getComputerChoice();

    if(humanChoice === computerChoice)
    {
        result.textContent = "Its a tie";
    }
    else if((computerChoice === 'rock' && humanChoice === 'scissors') || (computerChoice === 'paper' && humanChoice === 'rock') || (computerChoice === 'scissors' && humanChoice === 'paper'))
    {
        computerScore++;
        result.textContent = `You lose, ${computerChoice} beats ${humanChoice}`;
    } else {
        humanScore++;
        result.textContent = `You win, ${humanChoice} beats ${computerChoice}`;
    }

    updateScores();
}

function updateScores(){
    human.textContent = `Human: ${humanScore}`;
    computer.textContent = `Computer ${computerScore}`;

    if(humanScore === 5 || computerScore === 5)
    {
        if(humanScore > computerScore)
        {
            result.textContent = "Congrats, you won the game!!!";
        } else {
            result.textContent = "Game over, you lost!!!";
        }
        resetGame();
    }
}

function resetGame(){
    humanScore = 0;
    computerScore = 0;

    updateScores();
}

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissor = document.querySelector('#scissor');
let result = document.querySelector('.result');
let human = document.querySelector('.human');
let computer = document.querySelector('.comp');

rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissor.addEventListener('click', () => playRound('scissor'));