let level = 0;
/////////////////////// On page load ////////////////////////////////////////////////////////////////////////////////////////////////////////
const width = document.documentElement.clientWidth;
document.querySelector(`nav`).style.width = width;
const pressPlay = document.querySelector(`.pressPlay`);
pressPlay.addEventListener(`click`, play);
/////////////////////// Question ans Answer object by level ////////////////////////////////////////////////////////////////////////////////////////////////////////
let levelEasy = [];

class Question {
  constructor(problem, answer) {
    this.problem = problem;
    this.answer = answer.split(' ');
  }
}

const question0 = new Question(
  `A code that prints 'hello' on the terminal`,
  `console . log ( " hello " )`
);
levelEasy.push(question0);
const question1 = new Question(
  `Write a code to connect a CSS file to your HTML`,
  `< link rel = " stylesheet " href = " style.css / >`
);
levelEasy.push(question1);
const question2 = new Question(
  `change the color of h1 to red with Java Script`,
  `document . querySelector ( " h1 " ) . style . color = " red "`
);
levelEasy.push(question2);

/////////////////////// Question ans Answer object by level ////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////// SCENE GAME CHOOSE THE RIGHT ORDER OF INPUTS//////////////////////////////////////////////////////////////////////////////////////
function sceneStar(questionProblem, questionAnswer) {
  const screenText = document.createElement(`div`);
  screenText.setAttribute(`class`, `instructions`);
  document.querySelector(`.screen`).appendChild(screenText);
  screenText.innerText = questionProblem;
  let arrayQuestion = questionAnswer;
  let superArrayGhost = [];
  let arrayQuestionRandom = [];
  let arrayAnswer = [];
  let superComparisonArray = [];

  const resetButton = document.querySelector(`.backspace`);
  resetButton.addEventListener(`click`, () => {
    arrayAnswer.splice(0, arrayAnswer.length);
    superComparisonArray.splice(0, superComparisonArray.length);
    let answerBoxes = document.querySelectorAll(`#answer`);
    answerBoxes.forEach((box, i) => {
      box.remove();
    });
  });

  arrayQuestion.forEach((word, i) => {
    superArrayGhost.push(word);
  });
  for (i = superArrayGhost.length - 1; i > -1; i--) {
    let randomizer = [Math.floor(Math.random() * superArrayGhost.length)];
    arrayQuestionRandom.push(superArrayGhost[randomizer]);
    superArrayGhost.splice(randomizer, 1);
  }

  if (arrayQuestionRandom.length === arrayQuestion.length) {
    for (i = 0; i < arrayQuestionRandom.length; i++) {
      const question = document.createElement(`div${i}`);
      question.setAttribute(`class`, `optionBox`);
      question.setAttribute(`id`, `question`);
      document.querySelector(`.textBoxTop`).appendChild(question);
      question.innerText = arrayQuestionRandom[i];
      question.addEventListener(`click`, clickBox);

      function clickBox() {
        // question.style.backgroundColor = `black`;
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
                let instruction = document.querySelector(`.instructions`);
                instruction.parentNode.removeChild(instruction);
                let questionBoxes = document.querySelectorAll(`#question`);
                questionBoxes.forEach((box, i) => {
                  box.remove();
                });
                let answerBoxes = document.querySelectorAll(`#answer`);

                answerBoxes.forEach((box, i) => {
                  box.remove();
                });

                superArrayGhost = [];
                arrayQuestionRandom = [];
                arrayAnswer = [];
                superComparisonArray = [];
                level++;
                sceneStar(levelEasy[level].problem, levelEasy[level].answer);
              } else {
                alert(`gotta try again`);
                function reset() {
                  arrayAnswer.splice(0, arrayAnswer.length);
                  superComparisonArray.splice(0, superComparisonArray.length);
                  let answerBoxes = document.querySelectorAll(`#answer`);
                  answerBoxes.forEach((box, i) => {
                    box.remove();
                  });
                }
                reset();
              }
            }
          }
        }
      }
    }
  }
}
// sceneStar(levelEasy[1].problem, levelEasy[1].answer);
////////////////////// SCENE GAME CHOOSE THE RIGHT ORDER OF INPUTS//////////////////////////////////////////////////////////////////////////////////////

function play() {
  let loadScene = document.querySelector(`.loadScene`);
  loadScene.parentNode.removeChild(loadScene);

  sceneStar(levelEasy[level].problem, levelEasy[level].answer);
}
