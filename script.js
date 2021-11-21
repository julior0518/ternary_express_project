/////////// set width of nav bar
const width = document.documentElement.clientWidth;
document.querySelector(`nav`).style.width = width;

////////////////////// SCENE PROBLEM-SOLUTION//////////////////////////////////////

// let arrayQuestion = [`console`, `log`, `.`, `(`, `)`, `Federico`];
// let arrayAnswer = [];
// let superComparisonArray = [];

// let a = JSON.stringify(arrayQuestion);
// let b = JSON.stringify(arrayAnswer);

// function sceneStar() {
//   for (i = 0; i < arrayQuestion.length; i++) {
//     const question = document.createElement(`div${i}`);
//     question.setAttribute(`class`, `optionBox`);
//     document.querySelector(`.textBoxTop`).appendChild(question);
//     question.innerText = arrayQuestion[i];
//     question.addEventListener(`click`, clickBox);

//     function clickBox() {
//       arrayAnswer.push(question.innerText);
//       const answer = document.createElement(`div`);
//       answer.setAttribute(`class`, `optionBox`);
//       document.querySelector(`.textBoxBottom`).appendChild(answer);
//       answer.innerText = question.innerText;
//       for (i = 0; i < arrayQuestion.length; i++) {
//         if (arrayAnswer.length === arrayQuestion.length) {
//           superComparisonArray.push(arrayAnswer[i] === arrayQuestion[i]);
//           if (superComparisonArray.length === arrayQuestion.length) {
//             if (!superComparisonArray.includes(false)) {
//               console.log(`fuck yeah`);
//             } else {
//               console.log(`nopers`);
//             }
//           }
//         }
//       }
//     }
//   }
// }
// sceneStar();
//////////////////////////// get buttons from array and verify the order of the input array /////////////

let arrayQuestion = [`console`, `.`, `log`, `(`, `Hello`, `)`];
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

// function montana() {
// const tonyMontana = document.createElement('img');
// document.querySelector(`.box2`).appendChild(tonyMontana);
// tonyMontana.setAttribute(
//   'src',
//   `https://ih1.redbubble.net/image.1305797960.8312/pp,840x830-pad,1000x1000,f8f8f8.jpg`
// );
// tonyMontana.style.width = `100%`;
// tonyMontana.style.gridColumn = 1;
// tonyMontana.style.gridRow = 10;

//   // tonyMontana.remove();
// }
