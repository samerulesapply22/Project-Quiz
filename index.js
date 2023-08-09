import quiz from "./modules/quiz.js";
import { start } from "./modules/state.js";

const quizButton = document.querySelector("#quizButton");
quizButton.addEventListener("click", () => {
  container.style.display = "none";
  quiz();
});

start()
