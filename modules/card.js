import create from "./helpers/createElement.js";

const container = document.querySelector("#container");
export default class Card {
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
    form.classList.add('hidden');
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
    return form;
  }

}
