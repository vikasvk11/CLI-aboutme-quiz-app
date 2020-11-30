var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("What's your name? ")

console.log("Welcome " + userName + " to the random quiz. Let's see what you've got!")

var allScores = [{
  name: "X",
  score: 1
}, {
  name: "Y",
  score: 0
}]

//questionAnswer function
function qa(question, answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Great!, Right answer.");
    score = score + 1;
  } else {
    console.log("Tough Luck! It's wrong.");
  }

  console.log("Current score: ", score);
  console.log("---------")
}
var questions = [{
  question: "Where am I from ",
  answer: "Bengaluru",
}, {
  question: "What's my fav superhero ",
  answer: "Superman",
}, {
  question: "Where do I work ",
  answer: "Marvel",
}]

for (var i=0; i<questions.length; i++) {
  qa(questions[i].question,questions[i].answer)
}

console.log("Yay! Your final score is " + score);