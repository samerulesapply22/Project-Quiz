import quiz from "./quiz.js";

const gameContainer = document.querySelector("#container");
const overDiv = document.querySelector(".over");
const newQuiz = document.querySelector(".newQuiz");

export default function over() {
  gameContainer.style.display = "none";
  overDiv.style.display = "block";
  newQuiz.addEventListener("click", function () {
    overDiv.style.display = "none";
    //gameContainer.style.display = "block";
    //quiz();
  });
}
