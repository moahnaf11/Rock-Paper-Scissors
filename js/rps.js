const body = document.querySelector("body");
const buttonDiv = document.createElement("div");
buttonDiv.classList.add("buttonContainer");

const titleDiv = document.createElement("div");
titleDiv.classList.add("title");
titleDiv.textContent = "Rock Paper Scissors";
body.appendChild(titleDiv);

const resultsDiv = document.createElement("div");
resultsDiv.classList.add("result")
body.appendChild(resultsDiv);

const points = document.createElement("div");
points.classList.add("points");
body.appendChild(points);

const pointsSelector = document.querySelector(".points");
const human = document.createElement("div");
human.classList.add("humanScore");
const computer = document.createElement("div");
computer.classList.add("computerScore");
pointsSelector.appendChild(human);
pointsSelector.appendChild(computer);

body.append(buttonDiv);


const rock = document.createElement("button");
rock.classList.add("rock");
buttonDiv.appendChild(rock);
rock.textContent = "ROCK";

rock.addEventListener("click", (e) => {
    let computerChoice = getComputerChoice();
    [result, humanScore, computerScore] = playRound("rock", computerChoice);
    if (humanScore == 5) {
        result = `You won with ${humanScore} points`;
        humanScore = 0;
        computerScore = 0;
    }   else if (computerScore == 5) {
        result = `Computer won with ${computerScore} points`;
        humanScore = 0;
        computerScore = 0;
    }
    resultsDiv.textContent = result;
    human.textContent = `Your Score: ${humanScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
    
})

const paper = document.createElement("button");
paper.classList.add("paper");
buttonDiv.appendChild(paper);
paper.textContent = "PAPER";

paper.addEventListener("click", (e) => {
    let computerChoice = getComputerChoice();
    [result, humanScore, computerScore] = playRound("paper", computerChoice);
    if (humanScore == 5) {
        result = `You won with ${humanScore} points`;
        humanScore = 0;
        computerScore = 0;
    }   else if (computerScore == 5) {
        result = `Computer won with ${computerScore} points`;
        humanScore = 0;
        computerScore = 0;
    }   
    resultsDiv.textContent = result;
    human.textContent = `Your Score: ${humanScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
    
})


const scissors = document.createElement("button");
scissors.classList.add("scissors");
buttonDiv.appendChild(scissors);
scissors.textContent = "SCISSORS";

scissors.addEventListener("click", (e) => {
    let computerChoice = getComputerChoice();
    [result, humanScore, computerScore] = playRound("scissors", computerChoice);
    if (humanScore == 5) {
        result = `You won with ${humanScore} points`;
        humanScore = 0;
        computerScore = 0;
    }   else if (computerScore == 5) {
        result = `Computer won with ${computerScore} points`;
        humanScore = 0;
        computerScore = 0;
    }   
    resultsDiv.textContent = result;
    human.textContent = `Your Score: ${humanScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
    

})


function getComputerChoice () {
    let num = Math.random()
    if (num <= 0.25) {
        return "rock"
    }  else if (num > 0.25 && num <= 0.75) {
        return "paper"
    }  else {return "scissors"}
}


let humanScore = 0;
let computerScore = 0;
let result = undefined
function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
        ++humanScore
        result = `You win! Computer chose ${computerChoice}`
            
    }   else if (humanChoice == "scissors" && computerChoice == "paper") {
        ++humanScore
        result = `You win! Computer chose ${computerChoice}`
            
    }   else if (humanChoice == "paper" && computerChoice == "rock") {
        ++humanScore
        result = `You win! Computer chose ${computerChoice}`

    }   else if ((humanChoice == computerChoice)) {
        result = `TIE!! Both chose ${computerChoice}`

    }   else {
        ++computerScore
        result = `Computer wins! Computer chose ${computerChoice}`
    }
    
    return [result, humanScore, computerScore];
}
 


   



