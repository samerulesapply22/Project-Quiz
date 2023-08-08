import start from "./started.js";

const QUIZ = {
  question1: "answer1",
  question2: "answer2",
  question3: "answer3",
  question4: "answer4",
};

const container = document.querySelector("#container");
const nextQuestionButton = document.querySelector(".nextQuestion");

function create(parent, className, text) {
  const el = document.createElement("div");
  parent.append(el);
  el.className = className;
  el.textContent = text;
  return el;
}

export class Card {
  constructor(question, correctAnswer) {
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.answers = [
      this.correctAnswer,
      "wrongAnswer1",
      "wrongAnswer2",
      "wrongAnswer3",
    ];
  }
  render() {
    const form = document.createElement("form");
    container.prepend(form);

    create(form, "questionContainer", this.question);
    const answersContainer = create(form, "answersContainer");

    const choices = [];
    for (let answer of this.answers)
      choices.push(create(answersContainer, "choice", answer));

    choices.forEach((choice) => {
      choice.addEventListener("click", () => {
        choices.forEach((choice) => choice.classList.remove("selected"));
        choice.classList.add("selected");
        if (choice.textContent === this.correctAnswer)
          choice.classList.add("correct");
        else choice.classList.add("incorrect");
      });
    });
  }
}

export default function quiz() {
  const cardsArray = [];
  for (const question in QUIZ) {
    const card = new Card(question, QUIZ[question]);
    cardsArray.push(card);
  }
  let current = 0;
  cardsArray[current].render();
  nextQuestionButton.addEventListener("click", function () {
    const form = document.querySelector("form");
    form.style.display = "none";
    current++;
    if (current >= cardsArray.length) {
      current = 0;
      start();
      return;
    }
    cardsArray[current].render();
  });
}
