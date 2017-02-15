//Prompt user to enter a letter
//Decide if letter is in word and display if it is.Otherwise console log not in word
//continually update guesses left until it equals zero

var inquirer = require('inquirer'); //installed
var prompt = require('prompt'); //installed
var letter = require('./letter.js');
var word = require('./word.js');
var confirm = require('inquirer-confirm');//installed

function Letter(letter){
    this.letter = letter;
    this.found = false;
    this.display = function(){
        if (this.found) return " " + this.letter + " ";
        else return ' _ ';
    }
}

function Word(word){
    this.word = word;
    this.letters = [];
    this.makeAndPushLettersIntoWord = function(){
        for (var i=0; i< this.word.length; i++){
            var lett = new Letter(this.word[i]);
            this.letters.push(lett);
        }
    },
    this.display = function(){
        var str = "";
        for (var i=0; i < this.letters.length; i++){
            str = str + this.letters[i].display();
        }

        return str;
    }
    this.updateLetter = function(guess){
        //check all of the letter objects and see if the guess matches
        //if it does I update that letter's found to true

        //another way
        // var index = this.word.indexOf(guess);
        // if (index > -1) this.letters[index].found = true;

        //one way
        for (var i=0; i<this.letters.length; i++){
            if (this.letters[i].letter == guess) this.letters[i].found = true;
        }
    }
}

// First welcome them to our Node Hangman App in the console
console.log("Welcome to Tree Name Hangman")
console.log("Guess a word. All words are a type of tree. Start guessing letters")


var words = ['oak','maple','sycamore', 'cedar', 'spruce', 'fur'];

var guessesLeft = 10

var wordToPlay = words[Math.floor(Math.random()*words.length)];

var wordObject = new Word(wordToPlay);
wordObject.makeAndPushLettersIntoWord();
console.log(wordObject.display());


function askLetter(){
    inquirer.prompt([
    {
    type: "input",
    name: "guess",
    message: "What letter do you guess? If you are done then say no."},
    ]).then(function(data){
        if (data.guess != 'no') {
            wordObject.updateLetter(data.guess);
            this.guessesLeft--;
            console.log (guessesLeft);
            console.log(wordObject.display());
            askLetter();
        }if (data.guess = 'no' OR this.guessesLeft = 0){
          confirm("Game Over. Would you like to play again?")
          .then (function confirmed(){
            generateLetter();

          });
        }

    });
}

askLetter();


// confirm('are you ok?')
//   .then(function confirmed() {
//     console.log('you are ok');
//   }, function cancelled() {
//     console.log('sorry to hear that');
//   });

// var Letter = function(let) {
    
//     this.charac = let;
    
//     this.appear = false;

//     this.letterRender = function() {
//         //if appear is false then show the _
//         //else appear is true then show character
//         return !(this.appear) ? " _ " : this.charac;
//     };
// };

// var Word = function(wrd){
//     this.word = wrd;
//     this.lets = []; //letter objects
//     this.found = false;

//     this.getLets = function() {
//         for(var i = 0; i < this.word.length; i++) {
//             this.lets.push(new Letter(this.word[i]));
//         }
//     };
    
//     //found the current word
//     this.didWeFindTheWord = function() {
//         //sets this.found in the word object to true or false if all letter objects have a true value in their appear property
//         this.found = this.lets.every(function(curLet) {
//             return curLet.appear;
//         });

//         return this.found;
//     };

//     this.checkIfLetterFound = function(guessLetter) {
//         var whatToReturn = 0;

//         for(var i = 0; i < this.lets.length; i++) {
//             if (this.lets[i].charac == guessLetter){
//                 this.lets[i].appear = true;
//                 whatToReturn++;
//             }
//         }

//         return whatToReturn;
//     };

//     this.wordRender = function() {
//         var str = '';

//         for(var i=0; i < this.lets.length; i++){
//             str += this.lets[i].letterRender();
//         }

//         return str;
//         console.log(str);
//     };
// }

// //starting the game
// prompt.start();

// var Game = {
//   wordList: ['Oak','Maple','Sycamore', 'Cedar', 'Spruce', 'Fur'],
//   guessesLeft : 15,
//   currentWrd : null,

//   startGame : function(wrd){
//     var randomWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
//     console.log(randomWord); // Comment out after testing
//     this.currentWrd = new Word(randomWord);
//     this.currentWrd.getLets();
//     this.keepPrompting(); 
//   },

//   keepPrompting: function() {
//     var self = this;
//     prompt.get(["guessLetter"], function(err, result) {
//       console.log("The letter you guessed is : "+result.guessLetter);
//       var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);

//       console.log("Guess"+findHowManyOfUserGuess);
      
//       if(findHowManyOfUserGuess === 0) {
//         console.log("You chose poorly");
//         self.guessesLeft-- ;        
//       } else {
//         console.log("You chose wisely");
//         if (self.currentWrd.didWeFindTheWord()) {
//           console.log("You won");
//           return 1;
//         }else {
//           console.log("Guesses remaining:"+ self.guessesLeft);
//           console.log(self.currentWrd.wordRender());
//           if (self.guessesRemaining > 0 && self.currentWrd.found === false){
//             self.keepPrompting();
//           } else {
//             if (self.guessesRemaining === 0){
//               console.log("Game Over"); 
//               console.log("The word you were guessing was:"+self.randomWord);
//             }else {
//               console.log(self.currentWrd.wordRender());
//             }
//           }
//         }
//       }
//     });
//   }
// }

// Game.startGame();
// Show them the empty word with underscores
// var wordGenerator = function(){
//   this.wordList = ['Oak','Maple','Sycamore', 'Cedar', 'Spruce', 'Fur'];

//   this.randomWord = this.wordList[ Math.floor(Math.random() * this.wordList.length)];
//   this.generatedWord = new Word(this.randomWord);
// }
//   var game = new wordGenerator();
  // console.log(hangMan);




// Direct them to guess a letter
// inquirer.prompt([
//     {type: "input",
//     name: "letterChoice",
//     message: "What letter do you guess?"},
//   ]).then(function(data){
//     console.log("data", data)
//     guess = new Letter(data.letterChoice);
//     console.log(guess);
//   });


// console.log("Guesses Left: " + guessesLeft)







  


