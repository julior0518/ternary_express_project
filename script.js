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
  `console . log ( " hello " )`
);
levelito.push(question0);

const question1 = new Question(
  `Code to connect a CSS file to your HTML`,
  `< link rel = " stylesheet " href = " style.css " >`
);
levelito.push(question1);

const question2 = new Question(
  `Select the <body> of HTML using Java Script`,
  `document . querySelector ( " body " )`
);
levelito.push(question2);

const question3 = new Question(
  `Change the color of <h1> to red using CSS`,
  `h1 { color : red ; }`
);
levelito.push(question3);

const question4 = new Question(
  `Create an HTML <div> element from Java Script`,
  `document . createElement ( " div " )`
);
levelito.push(question4);

const question5 = new Question(
  `Create an event listener for the button that prompts the function <play> on click`,
  `button . addEventListener ( " click " , play )`
);
levelito.push(question5);

const question6 = new Question(
  `combine these arrays 
  const even = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  const odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  *add even 1st and odd 2nd`,
  `const numberCombo = [ ... even , ... odd ]`
);
levelito.push(question6);

const question7 = new Question(
  `create a CSS grid for the body with 4 column and 3 rows`,
  `body {  grid-template-columns : 1fr 1fr 1fr 1fr ;
    grid-template-rows : 1fr 1fr 1fr ; }`
);
levelito.push(question7);

const question8 = new Question(
  `create a class called City with a constructor that takes in this citys name and an attribut called planet that is Earth`,
  `class City { constructor ( name ) { this . planet = " Earth " } }`
);
levelito.push(question8);

const question9 = new Question(
  `convert the following "if statement" to a "ternary operator"
  if (5 > i) {
    console.log("great")
  } else {
    console.log("lame")
  }`,
  `5 > i ? console . log ( " great " ) : console . log ( " lame " )`
);
levelito.push(question9);

const question10 = new Question(
  `create a for loop that runs 10 times`,
  `for ( i = 0 ; i < 10 ; i + + ) { }`
);
levelito.push(question10);

const question11 = new Question(
  `Use .map to return an "array" of all "num" multiplied by 5`,
  `const arrayTimes2 = array . map ( ( num ) = > { return num * 2 ; } )`
);
levelito.push(question11);

const question12 = new Question(
  `create a constant called randomizer that equals a random number from an array`,
  `const randomizer = [ Math . floor ( Math . random ( ) * array . length ]`
);
levelito.push(question12);

const question13 = new Question(
  `Create a filter that retung words with a lenght of 5 letters or shorter
  words = ["pen", "pineapple", "apple", "pencil"]`,
  `const shortWords = words . filter ((word) = > { return word . length < = 5 } )`
);
levelito.push(question13);

const question14 = new Question(
  `Use .filter to return an array of all odd numbers
  array :[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`,
  `const arrayEvens = array . filter ( ( num ) = > { if ( num % 2 ) { return ; } return num ; } )`
);
levelito.push(question14);

const question15 = new Question(
  `Use .reduce to return the total product of all numbers
  array :[ 1, 2, 3, 4, 5]`,
  `const arrayMultiply = array . reduce ( ( accumulator , num ) = > { return accumulator * num ; } , 1 )`
);
levelito.push(question15);

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
