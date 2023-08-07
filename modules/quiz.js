const QUIZ = {
  question1: "answer1",
  question2: "answer2",
  question3: "answer3",
  question4: "answer4",
};
const questionContainer = document.querySelector(".questionContainer");
const choices = document.querySelectorAll(".choice");
const nextQuestionButton = document.querySelector(".nextQuestion");

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
    this.nextQuestion = null;
  }
  render() {
    questionContainer.textContent = this.question;
    choices.forEach((choice, index) => {
      choice.textContent = this.answers[index];
      choice.addEventListener("click", () => {
        console.log(choice.textContent)
        if (choice.textContent === this.correctAnswer) 
          choice.classList.toggle("correct");
        else choice.classList.toggle("incorrect");
      });
    });
  }
  clear() {
    questionContainer.textContent = "";
    choices.forEach((choice) => (choice.textContent = ""));
  }
}

export default function quiz() {
  const cardsArray = [];
  for (const question in QUIZ) {
    const card = new Card(question, QUIZ[question]);
    cardsArray.push(card);
    card.clear();
    card.render();
  }
  console.log(cardsArray);
}
