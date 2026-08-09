// const { createElement } = require("react");

console.log("hello world.");

let humanScore = 0;
let computerScore = 0;

const hands = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let ran_num = Math.floor(Math.random() * 3);
    return hands[ran_num];
}

function playRound(human_hand, comp_hand) {
    if (human_hand === "rock" && comp_hand === "scissors") {
        humanScore += 1;
        results.textContent = "You win! Rock beats Scissors.";
    } else if (human_hand === "paper" && comp_hand === "rock") {
        humanScore += 1;
        results.textContent = "You win! Paper beats Rock.";
    } else if (human_hand === "scissors" && comp_hand === "paper") {
        humanScore += 1;
        results.textContent = "You win! Scissors beats Paper.";
    } else if (human_hand === comp_hand) {
        results.textContent = `It's a tie. ${human_hand} and ${comp_hand}. Try again.`;
    } else {
        computerScore += 1;
        results.textContent = `You lost! ${comp_hand} beats ${human_hand}.`;
    }

    scores.textContent = `${humanScore}, ${computerScore}`;
}

const content = document.querySelector("body");

const results = document.createElement("div");
content.append(results);

const scores = document.createElement("div");
scores.textContent = `${humanScore}, ${computerScore}`;
content.append(scores);

function checker() {
    if (humanScore >= 5 || computerScore >= 5) {
        return false;
    } else {
        return true;
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        let comp = getComputerChoice();
        let human = event.target.textContent;

        if (checker()) {
            playRound(human, comp);

            if (humanScore >= 5) {
                results.textContent = "You won the game!";
            } else if (computerScore >= 5) {
                results.textContent = "Computer won the game!";
            }
        }
    });
});