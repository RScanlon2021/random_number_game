"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const setMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const setScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const bgColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};
const setWidth = function (width) {
  document.querySelector(".number").style.width = width;
};
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    setMessage("⛔️ No Number!");
  } else if (guess === number) {
    setMessage("🏆Correct Number!!");
    displayNumber(number);
    score++;
    setScore(score);
    bgColor("#60b347");
    setWidth("30rem");

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess !== number) {
    if (score > 1) {
      setMessage(`Guess is too ${guess > number ? "High!" : "Low!"}`);
      score--;
      setScore(score);
    } else {
      setMessage("💥 You Lost The Game!");
      setScore(0);
      bgColor("#ff0000");
      setWidth("30rem");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  setMessage("Start guessing...");
  bgColor("#222");
  setWidth("15rem");
  setScore(score);
  displayNumber("?");
  document.querySelector(".guess").value = "";
});
