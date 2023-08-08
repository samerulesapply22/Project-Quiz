import Card from "./card.js";
import over from "./over.js";

const QUIZ = {
  question1: "answer1",
  question2: "answer2",
  question3: "answer3",
  question4: "answer4",
};

const nextQuestionButton = document.querySelector(".nextQuestion");
export default function quiz() {
  const cardsArray = [];
  for (const question in QUIZ) {
    const card = new Card(question, QUIZ[question]);
    cardsArray.push(card.render());
  }

  let current = 0;
  cardsArray[current].classList.remove("hidden");

  nextQuestionButton.addEventListener("click", function () {
    cardsArray[current].classList.add("hidden");
    current++;
    if (current >= cardsArray.length) {
      current = 0;
      over();
      return;
    }
    cardsArray[current].classList.remove("hidden");
  });
}
