"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let record = 0;
let score = 20;
let game = true;

//function to display a message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//click check
document.querySelector(".check").addEventListener("click", function () {
  if (game === true) {
    const guess = Number(document.querySelector(".guess").value);

    //when there is no input
    if (!guess) {
      displayMessage("Insert a number between 1-20");

      //when the numbers are too high or low
    } else if (guess < 0 || guess > 20) {
      displayMessage("⛔Insert a number between 1-20");

      //when player wins
    } else if (guess === secretNumber) {
      displayMessage("🏆 Correct!");
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      game = false;
      if (score > record) {
        record = score;
        document.querySelector(".highscore").textContent = record;
      }

      //guess different than secret number
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        displayMessage("💥 You lost");
        score--;
        game = false;
        document.querySelector(".score").textContent = 0;
      }
    }
  }
});

//click reset
document.querySelector(".again").addEventListener("click", function () {
  game = true;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
