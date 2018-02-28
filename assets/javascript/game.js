let word = "";
let blanks = [];
let wins = 0;
let guessesLeft = 9;
let correct = [];
let all = [];

// Pc chooses
const choices = ["The Trinquetaille Bridge", "The Yellow House", "Four Cut Sunflowers", "Noon Rest From Work"];
let pick = Math.floor(Math.random() * choices.length)
let pickArr = choices[pick].toUpperCase().split("");
console.log(pickArr);
for (var i = 0; i < pickArr.length; i++) {
	blanks.push("_ ")
}

// Lay out html
$( document ).ready(function() {
	$('#word').text(blanks.join(''));
	$('#wins').text('Wins: ' + wins);
	$('#guessesLeft').text('Guesses Left: ' + guessesLeft);
	$('#correctGuesses').text('Correct Guesses: ' + correct);
	$('#allGuesses').text('All Guesses: ' + all);
});



// //alphabet
// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z'"];

// //array of blanks
// var blanks = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];

// //array of possible words to guess
// var pieces = ["The Trinquetaille Bridge", "The Yellow House", "Four Cut Sunflowers", "Noon Rest From Work"];

// //status variables
// var wins = 0;
// var guessesLeft = 10;
// var guessesMade = [];
// var wordToGuess = [];
// var piecePicked;

// //PC picks a piece
// var index = Math.floor(Math.random() * pieces.length);

// //Uppercase pc pick
// piecePicked = pieces[index].toUpperCase();
// console.log("Uppercase title of piece picked: " + piecePicked);

// //PC pick becomes one array
// var arrWord = piecePicked.split("");
// console.log("Array of letters in piece picked: " + arrWord);

// //Create array of blanks that is just as long as the array containing letters of pc pick
// for (i = 0; i < arrWord.length; i++) {
// 	wordToGuess += blanks[i] + " ";
// }

// //display array of blanks, which is the word to guess, without the comas
// var arrBlanks = wordToGuess.split("");
// console.log("Array of blanks" + arrBlanks);

// document.getElementById("start").textContent = "Name of piece";
// document.getElementById("word").textContent = arrBlanks.join("");
// document.getElementById("wins").textContent = "Wins";
// document.getElementById("guessesLeft").textContent = "Guesses remaining";
// document.getElementById("guessesMade").textContent = "Guesses made so far";

// document.onkeyup = function(event) {
// 	//keuUp becomes capitalized verstion of event key
// 	var keyUp = event.key.toUpperCase();
// 	console.log(keyUp);


// 	for (var i = 0; i < arrWord.length; i++) {
// 		if (arrWord[i].includes(keyUp)) {
// 			arrBlanks[i] = keyUp;
			
// 		}	
// 	}
// 	document.getElementById("word").textContent = arrBlanks.join("");
// 	console.log(arrBlanks);
// };
