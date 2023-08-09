const container = document.querySelector("#container");
const title = document.querySelector("#title");
const quizButton = document.querySelector("#quizButton");

export function start() {
  container.style.display = "flex";
  title.textContent = "Title";
  quizButton.textContent = "Start Quiz";
}

export function over(scores) {
  container.style.display = "flex";
  title.textContent = "Game over. Your score: " + scores;
  quizButton.textContent = "New Quiz";
}
