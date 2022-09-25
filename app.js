const computerChoiceDisplay = document.getElementById("computer-choice");
const yourChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll(
  '[className="choice-button"]'
);
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((button) => {
  button.addEventListener("click", (e) => {
    userChoice = e.target.innerHTML;
    yourChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  });
});

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);

  switch (randomNumber) {
    case 0:
      computerChoice = possibleChoices[0].innerHTML;
      break;
    case 1:
      computerChoice = possibleChoices[1].innerHTML;
      break;
    case 2:
      computerChoice = possibleChoices[2].innerHTML;
      break;
    default:
      console.log("something is wrong with switch case");
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw, no one wins, but it's better than losing";
  } else {
    if (computerChoice === "Rock" && userChoice === "Scissors") {
      result = "Computer wins!";
    } else if (computerChoice === "Scissors" && userChoice === "Rock") {
      result = "User wins!";
    } else if (computerChoice === "Rock" && userChoice === "Paper") {
      result = "User wins!";
    } else if (computerChoice === "Paper" && userChoice === "Rock") {
      result = "Computer wins!";
    } else if (computerChoice === "Paper" && userChoice === "Scissors") {
      result = "User wins!";
    } else if (computerChoice === "Scissors" && userChoice === "Paper") {
      result = "Computer wins!";
    }
  }
  resultDisplay.innerHTML = result;
}
