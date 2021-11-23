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
  `Create an event listener for the button that prompts the function <play> on click`,
  `button . addEventListener ( " click " , play )`
);
levelito.push(question4);

const question5 = new Question(
  `combine these arrays 
  const even = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  const odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  * add even 1st and odd 2nd`,
  `const numberCombo = [ ... even , ... odd ]`
);
levelito.push(question5);

const question6 = new Question(
  `create a CSS grid for the body with 4 column and 3 rows`,
  `body {  grid-template-columns : 1fr 1fr 1fr 1fr ;
    grid-template-rows : 1fr 1fr 1fr ; }`
);
levelito.push(question6);

const question7 = new Question(
  `Use .map to return an "array" of all "num" multiplied by 5`,
  `const arrayTimes2 = array . map ( ( num ) = > { return num * 2 ; } )`
);
levelito.push(question7);
/////////////////////////////////////////////////////

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
  `Use .filter to return an array of all odd numbers
  array :[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`,
  `const arrayEvens = array . filter ( ( num ) = > { if ( num % 2 ) { return ; } return num ; } )`
);
levelito.push(question10);
