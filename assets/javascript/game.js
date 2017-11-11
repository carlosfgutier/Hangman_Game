var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z'"];

var pieces = ["The Trinquetaille Bridge", "The Yellow House", "Four Cut Sunflowers", "Noon Rest From Work"];

//Player status
var wins = 0;
var guessesLeft = 10;
var guessesMade = [];
var piecePicked;

//PC picks piece
var index = Math.floor(Math.random() * pieces.length);
var piecePicked = pieces[index];
console.log(piecePicked);

//When run, code will reset all player status but wins
function reset() {
	guessesLeft = 10;
	guessesMade = [];
	index = Math.floor(Math.random() * pieces.length);
	piecePicked = options[index];
}


document.getElementById("wins").textContent = "Wins " + wins;

document.getElementById("guessesLeft").textContent = "Guesses remaining " + guessesLeft;

document.getElementById("guessesMade").textContent = "Guesses made so far " + guessesMade;


//PRESS ANY KEY TO GET STARTED

//WINS

//CURRENT WORD
	//letter shows when right letter key pressed

//GUESSES REMAINING
	//guesses remaining go down when letter key pressed
	//if letter already typed, do nothing

//LETTERS ALREADY GUESSED
	//show letter when key pressed