import create from "./helpers/createElement.js";

const QUIZ = {
  question1: "answer1",
  question2: "answer2",
  question3: "answer3",
  question4: "answer4",
};

class Card {
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
    const quizContainer = document.querySelector("#quizContainer");
    const form = document.createElement("form");
    form.classList.add("hidden");
    quizContainer.prepend(form);

    create(form, "questionContainer", this.question);
    const answersContainer = create(form, "answersContainer");

    const choices = [];
    for (let answer of this.answers)
      choices.push(create(answersContainer, "choice", answer));

    choices.forEach((choice) => {
      choice.addEventListener("click", () => {
        choices.forEach((choice) => choice.classList.remove("selected"));
        choice.classList.add("selected");
        form.classList.add("answered");
        if (choice.textContent === this.correctAnswer)
          choice.classList.add("correct");
        else choice.classList.add("incorrect");
      });
    });

    return form;
  }
}

const cardsArray = [];
for (let question in QUIZ) {
  const card = new Card(question, QUIZ[question]);
  cardsArray.push(card.render());
}
export default cardsArray;