var inquirer = require('inquirer'); //installed
var letter = require('./letter.js');
var word = require('./word.js');

var guesses = [];

//guess generator
  inquirer.prompt([
    {type: "input",
    name: "letterChoice",
    message: "What letter do you guess?"},
  ])then(function(data){
    guesses = new guesses("", data.letterChoice);
  });


function guesses(){
  newWord

}