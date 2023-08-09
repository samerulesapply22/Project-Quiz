const container = document.querySelector("#container");
const title = document.querySelector("#title");
const quizButton = document.querySelector("#quizButton");

export function start() {
  container.style.display = "flex";
  title.textContent = "Title";
  quizButton.textContent = "Start Quiz";
}

export function over() {
  container.style.display = "flex";
  title.textContent = "Game over. Your score: ";
  quizButton.textContent = "New Quiz";
}
