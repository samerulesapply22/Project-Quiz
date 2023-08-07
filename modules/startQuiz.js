import quiz from "./quiz.js";

const gameContainer = document.querySelector("#container");
export default function start() {
  const startQuiz = document.createElement("button");
  startQuiz.className = "startQuiz";
  document.body.append(startQuiz);
  startQuiz.textContent = "Start Quiz";
  startQuiz.addEventListener("click", function () {
    this.style.display = "none";
    gameContainer.style.display = "block";
    quiz();
  });
}
