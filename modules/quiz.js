import { cardsArray } from "./cards.js";
import { over } from "./state.js";

const quizContainer = document.querySelector("#quizContainer");
const choices = Array.from(document.querySelectorAll(".choice"));

function reset() {
  choices.forEach((choice) => choice.classList.remove("selected"));
  cardsArray.forEach((form) => form.classList.remove("answered"));
  cardsArray.forEach((form) => form.classList.remove("correct"));
}

export default function quiz() {
  reset();
  quizContainer.style.display = "block";
  let current = 0;
  let score = 0;

  cardsArray[current].classList.remove("hidden");

  const nextQuestionButton = document.querySelector(".nextQuestion");

  nextQuestionButton.addEventListener("click", () => {
    if (!cardsArray[current].classList.contains("answered")) return;
    if (cardsArray[current].classList.contains("correct")) score++;

    cardsArray[current].classList.add("hidden");

    current++;
    if (current >= cardsArray.length) {
      current = 0;
      quizContainer.style.display = "none";
      const scores = score + "/" + cardsArray.length;
      over(scores);
      return;
    }
    cardsArray[current].classList.remove("hidden");
  });
}
