var inquirer = require('inquirer'); //installed
var Letter = require('./letter.js');
var Word = require('./word.js');
var wordsArray = ['Hangman', "Lebron James", "mug", "stove", "home", "coding", "Pavan Cat"]
var strikesMax = 5;
var strikesCount = 0;
// First welcome them to our Node Hangman App in the console
console.log("Welcome to Node Hangman")

// Show them the empty word with underscores
var currentWord = new Word(wordsArray[0]);
// console.log(currentWord)
currentWord.getLets();

// console.log(" letters" +currentWord.lets)
currentWord.found;
// console.log("found" + currentWord.found)

console.log("Here is your word....")


// Render the empty word to guess
//  _ _ _ _ _ _ _
console.log(currentWord.wordRender())

// Direct them via category to guess a letter
console.log("Please guess the word. Start guessing letters")

// while (strikesCount < 5) {
// //
// }

var guesses;

var gameRun = function(){
  // console.log("running");

  inquirer.prompt([
    {type: "input",
    name: "letterChoice",
    message: "What letter do you guess?"},
  ]).then(function(data){
    // console.log("data", data);
      guessedLetter = new Letter(data.letterChoice);
      console.log(guessedLetter);
      currentWord.checkIfLetterFound(guessedLetter.charac);
      currentWord.didWeFindTheWord();
      console.log(currentWord.wordRender());

      if(currentWord.found) {
        console.log("You Won! The word was ... "+ currentWord.word  );

      } else {
        console.log("Word not found..keep going")
        gameRun();
      }
  }
)};
//Prompt user to enter a letter
gameRun();
//Now check user input for correct guess
// use checkIfLetterFound

//Did they find the word?
//use didWeFindTheWord
