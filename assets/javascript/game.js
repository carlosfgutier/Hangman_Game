//alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z'"];

//array of blanks
var blanks = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];

//array of possible words to guess
var pieces = ["The Trinquetaille Bridge", "The Yellow House", "Four Cut Sunflowers", "Noon Rest From Work"];


document.getElementById("start").textContent = "Press Enter to begin.";

//run following function when Enter is pressed
document.onkeyup = function(event) {
	if (event.keyCode = 13) {
		
		//Definition of status variables
		var wins = 0;
		var guessesLeft = 10;
		var guessesMade = [];
		var wordToGuess = "";
		var piecePicked;
		
		//PC picks a piece
		var index = Math.floor(Math.random() * pieces.length);
		var piecePicked = pieces[index];
		
		//PC pick becomes uppercased
		var piecePickedUp = piecePicked.toUpperCase();
		console.log(piecePickedUp);
		
		//PC pick becomes one array
		var arrWord = piecePickedUp.split("");
		console.log(arrWord);
		
		//display blanks instead of letters
		for (i = 0; i < arrWord.length; i++) {
			wordToGuess += blanks[i] + " ";
		}
		document.getElementById("word").textContent = wordToGuess;
		document.getElementById("start").textContent = "Name of piece";
		document.getElementById("wins").textContent = "Wins";
		document.getElementById("guessesLeft").textContent = "Guesses remaining";
		document.getElementById("guessesMade").textContent = "Gueses made so far";
	}
};

// var arrWord = piecePickedUp.split("");
// console.log(arrWord);
// document.getElementById("word").textContent = arrWord;


// //When run, code will reset all player status but wins
// function reset() {
// 	guessesLeft = 10;
// 	guessesMade = [];
// 	index = Math.floor(Math.random() * pieces.length);
// 	piecePicked = options[index];
// }



// document.onkeyup = function(event) {
// 	//Uppercase keypressed
// 	var keyPressed = event.key.toUpperCase();
// 	console.log(keyPressed);


// }

// document.getElementById("wins").textContent = "Wins " + wins;

// document.getElementById("guessesLeft").textContent = "Guesses remaining " + guessesLeft;

// document.getElementById("guessesMade").textContent = "Guesses made so far " + guessesMade;

// document.getElementById("instructions").textContent = "";

//PRESS ANY KEY TO GET STARTED

//WINS

//CURRENT WORD
	//letter shows when right letter key pressed

//GUESSES REMAINING
	//guesses remaining go down when letter key pressed
	//if letter already typed, do nothing

//LETTERS ALREADY GUESSED
	//show letter when key pressed