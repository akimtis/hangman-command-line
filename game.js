var inquirer = require('inquirer'); //installed
var letter = require('./letter.js');
var word = require('./word.js');

// First welcome them to our Node Hangman App in the console
console.log("Welcome to Node Hangman")

// Show them the empty word with underscores

// Direct them via category to guess a letter
console.log("Please guess the word. Start guessing letters")

//Prompt user to enter a letter

// var guesses;


// word("Hangman")

//guess generator
  inquirer.prompt([
    {type: "input",
    name: "letterChoice",
    message: "What letter do you guess?"},
  ]).then(function(data){
    console.log("data", data)
    guesses = new letter(data.letterChoice);
    console.log(guesses);
  });


// function guesses(){
//   newWord
//
// }
