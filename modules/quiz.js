import { cardsArray, score } from "./cards.js";
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

  cardsArray[current].classList.remove("hidden");

  choices.forEach((choice) =>
    choice.addEventListener("click", () => {
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
    })
  );
}
