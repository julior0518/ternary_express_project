/////////// set width of nav bar
const width = document.documentElement.clientWidth;
document.querySelector(`nav`).style.width = width;

////////////////////// SCENE GAME CHOOSE THE RIGHT ORDER OF INPUTS//////////////////////////////////////////////////////////////////////////////////////
let arrayQuestion = [`la`, `langosta`, `esata`, `muy`, `rica`];
let arrayQuestionRandom = [];
let arrayAnswer = [];
let superComparisonArray = [];

function sceneStar() {
  for (i = 1; arrayQuestionRandom.length < arrayQuestion.length; i++) {
    let randomizer = [Math.floor(Math.random() * arrayQuestion.length)];
    if (!arrayQuestionRandom.includes(arrayQuestion[randomizer]))
      arrayQuestionRandom.push(arrayQuestion[randomizer]);
  }

  for (i = 0; i < arrayQuestionRandom.length; i++) {
    const question = document.createElement(`div${i}`);
    question.setAttribute(`class`, `optionBox`);
    document.querySelector(`.textBoxTop`).appendChild(question);
    question.innerText = arrayQuestionRandom[i];
    question.addEventListener(`click`, clickBox);

    function clickBox() {
      arrayAnswer.push(question.innerText);
      const answer = document.createElement(`div`);
      answer.setAttribute(`class`, `optionBox`);
      answer.setAttribute(`id`, `answer`);
      document.querySelector(`.textBoxBottom`).appendChild(answer);
      answer.innerText = question.innerText;
      for (i = 0; i < arrayQuestion.length; i++) {
        if (arrayAnswer.length === arrayQuestion.length) {
          superComparisonArray.push(arrayAnswer[i] === arrayQuestion[i]);
          if (superComparisonArray.length === arrayQuestion.length) {
            if (!superComparisonArray.includes(false)) {
              console.log(`fuck yeah`);
              alert(`nice`);
            } else {
              alert(`gotta try again`);
              arrayAnswer.splice(0, arrayAnswer.length);
              arrayQuestionRandom.splice(0, arrayQuestionRandom.length);
              superComparisonArray.splice(0, superComparisonArray.length);
              let answerBoxes = document.querySelectorAll(`#answer`);
              answerBoxes.forEach((box, i) => {
                box.remove();
              });
            }
          }
        }
      }
    }
  }
}
sceneStar();
////////////////////// SCENE GAME CHOOSE THE RIGHT ORDER OF INPUTS//////////////////////////////////////////////////////////////////////////////////////
