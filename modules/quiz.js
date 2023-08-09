import cardsArray from "./cards.js";
import { over } from "./state.js";

const quizContainer = document.querySelector("#quizContainer");
const choices = Array.from(document.querySelectorAll(".choice"));

export default function quiz() {
  choices.forEach((choice) => choice.classList.remove("selected"));
  quizContainer.style.display = "block";
  let current = 0;
  cardsArray[current].classList.remove("hidden");

  const nextQuestionButton = document.querySelector(".nextQuestion");
  nextQuestionButton.addEventListener("click", () => {
    if (!cardsArray[current].classList.contains("answered")) {
      console.log("dont");
      return;
    }
    cardsArray[current].classList.add("hidden");
    current++;
    if (current >= cardsArray.length) {
      current = 0;
      quizContainer.style.display = "none";
      over();
      return;
    }
    cardsArray[current].classList.remove("hidden");
  });
}
