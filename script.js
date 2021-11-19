/////////// set width of nav bar
const width = document.documentElement.clientWidth;
document.querySelector(`nav`).style.width = width;

////////////////////// SCENE PROBLEM-SOLUTION//////////////////////////////////////

let arrayQuestion = [`console`, `log`, `.`, `(`, `)`, `Federico`];
let superComparisonArray = [];
let arrayAnswer = [`console`, `Federico`, `.`, `(`, `)`, `log`];

for (i = 0; i < arrayQuestion.length; i++) {
  let cute = arrayAnswer[i] === arrayQuestion[i];
  superComparisonArray.push(cute);
}
// console.log(superComparisonArray);

for (i = 0; i < arrayQuestion.length; i++) {
  const question = document.createElement(`div${i}`);
  question.setAttribute(`class`, `optionBox`);
  document.querySelector(`.textBoxTop`).appendChild(question);
  question.innerText = arrayQuestion[i];
  question.addEventListener(`click`, removeBox);

  function removeBox() {
    console.log(`hello ${question.innerText}`);
  }
}

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
