let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let allPossibilites = ["rock", "paper", "scissors"];

    let x = Math.floor(Math.random() * allPossibilites.length);

    return allPossibilites[x];
}

// let computerChoice = getComputerChoice();
// console.log(computerChoice);

function getHumanChoice(){
    let choice = prompt("enter rock,paper or scissors: ");
    if(choice === "rock" || choice === "paper" || choice === "scissors")
        {
            return choice;
        }    
    else
    {
        return "Invalid Choice"
    }
}

// let humanChoice = getHumanChoice();
// console.log(humanChoice);

function playRound(computerChoice, humanChoice)
{
    if(computerChoice === "rock" && humanChoice === "paper")
    {
        humanScore++;
        console.log("You win! Paper beats Rock");
    }
    else if(computerChoice === "rock" && humanChoice === "scissors")
    {
        computerScore++;
        console.log("You lose! rock beats scissors");
    }
    else if(computerChoice === "paper" && humanChoice === "scissors")
    {
        humanScore++;
        console.log("You win! scissors beats paper");
    }
    else if(computerChoice === "paper" && humanChoice === "rock")
    {
        computerScore++;
        console.log("You lose! paper beats rock");
    }
    else if(computerChoice === "scissors" && humanChoice === "rock")
    {
        humanScore++;
        console.log("You win! rock beats scissors");
    }
    else if(computerChoice === "scissors" && humanChoice === "paper")
    {
        computerScore++;
        console.log("You lose! scissors beats paper");
    }
    else 
    {
        humanScore += 0;
        computerScore += 0;
    }
}


for( let i = 0; i < 5; i++)
{
    let humanChoice = getHumanChoice();
    // console.log(humanChoice);

    let computerChoice = getComputerChoice();
    // console.log(computerChoice);

    playRound(computerChoice, humanChoice);
    console.log(`|| Computer: ${computerScore} Vs Human: ${humanScore}`);

}

if(humanScore > computerScore)
{
console.log("You win :)");
}
else if(computerScore > humanScore)
{
    console.log("You lose :(");
}
else 
{
    console.log("tie");
}