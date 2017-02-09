var inquirer = require('inquirer'); //installed
var letter = require('./letter.js');
var word = require('./word.js');
var guessesLeft = 15;


// First welcome them to our Node Hangman App in the console
console.log("Welcome to Tree Name Hangman")
console.log("Guess a word. All words are a type of tree. Start guessing letters")

var Letter = function(let) {
    
    this.charac = let;
    
    this.appear = false;

    this.letterRender = function() {
        //if appear is false then show the _
        //else appear is true then show character
        return !(this.appear) ? " _ " : this.charac;
    };
};

var Word = function(wrd){
    this.word = wrd;
    this.lets = []; //letter objects
    this.found = false;

    this.getLets = function() {
        for(var i = 0; i < this.word.length; i++) {
            this.lets.push(new Letter(this.word[i]));
        }
    };
    
    //found the current word
    this.didWeFindTheWord = function() {
        //sets this.found in the word object to true or false if all letter objects have a true value in their appear property
        this.found = this.lets.every(function(curLet) {
            return curLet.appear;
        });

        return this.found;
    };

    this.checkIfLetterFound = function(guessLetter) {
        var whatToReturn = 0;

        for(var i = 0; i < this.lets.length; i++) {
            if (this.lets[i].charac == guessLetter){
                this.lets[i].appear = true;
                whatToReturn++;
            }
        }

        return whatToReturn;
    };

    this.wordRender = function() {
        var str = '';

        for(var i=0; i < this.lets.length; i++){
            str += this.lets[i].letterRender();
        }

        return str;
        console.log(str);
    };
}


// Show them the empty word with underscores
var Game = function(){
  this.wordOptions = ['Oak','Maple','Sycamore', 'Cedar', 'Spruce', 'Fur'];

  this.randomWord = this.wordOptions[ Math.floor(Math.random() * this.wordOptions.length)];
  this.currentWord = new Word(this.randomWord);
}
  var hangMan = new Game();
  // console.log(hangMan);


//starting the game
 prompt.start();


// Direct them to guess a letter
inquirer.prompt([
    {type: "input",
    name: "letterChoice",
    message: "What letter do you guess?"},
  ]).then(function(data){
    console.log("data", data)
    guess = new Letter(data.letterChoice);
    console.log(guess);
  });

//Prompt user to enter a letter
//Decide if letter is in word and display if it is.Otherwise console log not in word
//continually update guesses left until it equals zero
// console.log("Guesses Left: " + guessesLeft)







  


