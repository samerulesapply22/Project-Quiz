import quiz from "./quiz.js";

const gameContainer = document.querySelector("#container");
const startQuiz = document.querySelector(".startQuiz");

export default function start() {
  startQuiz.style.display = "block";
  gameContainer.style.display = "none";
  startQuiz.addEventListener("click", function () {
    this.style.display = "none";
    gameContainer.style.display = "block";
    quiz();
  });
}
