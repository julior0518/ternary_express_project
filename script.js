/////////////////////// On page load ////////////////////////////////////////////////////////////////////////////////////////////////////////
const width = document.documentElement.clientWidth;
document.querySelector(`nav`).style.width = width;

/////////////////////////// Loading Zone ////////////////////////////////////////////////////////////////////////////////////////////////////////
const pressClassic = document.querySelector(`.classic`);
pressClassic.addEventListener(`click`, play);
const pressChallenge = document.querySelector(`.challenge`);
pressChallenge.addEventListener(`click`, playRandom);
const gameType = document.querySelector(`.type`);

/////////////////////// Question ans Answer object by level ////////////////////////////////////////////////////////////////////////////////////////////////////////
let levelito = [];

class Question {
  constructor(problem, answer) {
    this.problem = problem;
    this.answer = answer.split(' ');
  }
}

const question0 = new Question(
  `A code that prints 'hello' on the terminal`,
  `1 2 3 4`
);
levelito.push(question0);
const question1 = new Question(
  `Write a code to connect a CSS file to your HTML`,
  `1 2 3 4`
);
levelito.push(question1);
const question2 = new Question(
  `change the color of h1 to red with Java Script`,
  `1 2 3 4`
);
levelito.push(question2);
/////////////////////// Question ans Answer object by level ////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////// important variables ////////////////////////////////////////////////////////////////////////////////////////////////////////
let level = 0;
let questionCurrentNumber = 1;
let questionRandomCount = 0000;
let questionNumber = document.querySelector(`.questionNumber`);

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
    arrayAnswer = [];
    superComparisonArray = [];
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
                questionCurrentNumber++;
                questionNumber.innerText = `Question ${questionCurrentNumber}/${levelito.length}`;
                questionCurrentNumber === levelito.length + 1
                  ? end()
                  : sceneStar(levelito[level].problem, levelito[level].answer);
              } else {
                alert(`gotta try again`);
                function reset() {
                  arrayAnswer = [];
                  superComparisonArray = [];
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

////////////////////// SCENE START///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function play() {
  let loadPlay = document.querySelector(`.pressPlay`);
  loadPlay.parentNode.removeChild(loadPlay);
  let loadClassic = document.querySelector(`.classic`);
  loadClassic.parentNode.removeChild(loadClassic);
  let loadChallenge = document.querySelector(`.challenge`);
  loadChallenge.parentNode.removeChild(loadChallenge);

  gameType.innerText = `Classic Game`;

  sceneStar(levelito[level].problem, levelito[level].answer);
  questionNumber.innerText = `Question ${questionCurrentNumber}/${levelito.length}`;
}

////////////////////// Game End ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function end() {
  let endQuestionCount = document.querySelector(`.questionNumber`);
  endQuestionCount.innerHTML = ``;
  console.log(`get a life`);

  const endScene = document.createElement(`div`);

  endScene.setAttribute(`class`, `end`);
  document.querySelector(`.gameScreen`).appendChild(endScene);
  endScene.innerText = `Game Over`;
}

///////////////////// RANDOM MODE //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////// SCENE GAME CHOOSE THE RIGHT ORDER OF INPUTS//////////////////////////////////////////////////////////////////////////////////////
function sceneStarRandom(questionProblem, questionAnswer) {
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
    arrayAnswer = [];
    superComparisonArray = [];
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
                questionRandomCount++;
                questionNumber.innerText = `${questionRandomCount} in a row`;
                let domi2 = [Math.floor(Math.random() * levelito.length)];
                sceneStarRandom(
                  levelito[domi2].problem,
                  levelito[domi2].answer
                );
              } else {
                endR();
              }
            }
          }
        }
      }
    }
  }
}
////////////////////// SCENE START Randome Mode///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function playRandom() {
  let loadPlay = document.querySelector(`.pressPlay`);
  loadPlay.parentNode.removeChild(loadPlay);
  let loadClassic = document.querySelector(`.classic`);
  loadClassic.parentNode.removeChild(loadClassic);
  let loadChallenge = document.querySelector(`.challenge`);
  loadChallenge.parentNode.removeChild(loadChallenge);

  gameType.innerText = `Challenge Game`;

  let domi = [Math.floor(Math.random() * levelito.length)];

  sceneStarRandom(levelito[domi].problem, levelito[domi].answer);
  questionNumber.innerText = questionRandomCount;
  console.log(domi);
}
////////////////////////////// Game End Random Mode///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function endR() {
  let endQuestionCount = document.querySelector(`.questionNumber`);
  endQuestionCount.innerHTML = ``;

  const endScene = document.createElement(`div`);

  endScene.setAttribute(`class`, `end`);
  document.querySelector(`.gameScreen`).appendChild(endScene);
  endScene.innerText = `Game Over
  ${questionRandomCount} points`;
}
