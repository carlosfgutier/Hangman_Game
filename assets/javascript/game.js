//alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z'"];

//array of blanks
var blanks = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];

//array of possible words to guess
var pieces = ["The Trinquetaille Bridge", "The Yellow House", "Four Cut Sunflowers", "Noon Rest From Work"];

//status variables
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

//Display blanks instead of letters
for (i = 0; i < arrWord.length; i++) {
	wordToGuess += blanks[i] + " ";
}

document.getElementById("start").textContent = "Press 'Enter' to begin.";
document.getElementById("wins").textContent = "Wins";
document.getElementById("guessesLeft").textContent = "Guesses remaining";
document.getElementById("guessesMade").textContent = "Guesses made so far";


//When Enter is pressed, status are set to default
document.onkeyup = function(event) {
	var upperKey = event.key.toUpperCase();

	document.getElementById("start").textContent = "Name of piece";
	document.getElementById("word").textContent = wordToGuess;
	console.log(wordToGuess);

	if (guessesMade.indexOf(upperKey) < 0 && event.keyCode >= 65 && event.keyCode <= 90){

		for (var i =0; i < arrWord.length; i++) {
			// check if key pressed is present in the name of the piece
			if (event.keyCode === arrWord[i].keyCode) {
				var present = true;	
			} else {
				present = false;
			}
		}
		//if key pressed is pressent in word the edit word to guess array to show event key in correct spot
		if (present = true) {
			console.log(event.key.toUpperCase())
			// wordToGuess.splice(arrWord.indexOf(arrWord[i], arrWord.indexOf(arrWord[i], event.key));
		}
	}
};


