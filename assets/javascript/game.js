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
var wordToGuess = [];
var piecePicked;

//PC picks a piece
var index = Math.floor(Math.random() * pieces.length);

//Uppercase pc pick
piecePicked = pieces[index].toUpperCase();
console.log("Uppercase title of piece picked: " + piecePicked);

//PC pick becomes one array
var arrWord = piecePicked.split("");
console.log("Array of letters in piece picked: " + arrWord);

//Create array of blanks that is just as long as the array containing letters of pc pick
for (i = 0; i < arrWord.length; i++) {
	wordToGuess += blanks[i] + " ";
}

document.onkeyup = function(event) {
	//keuUp becomes capitalized verstion of event key
	var keyUp = event.key.toUpperCase();

	for (var i = 0; i < arrWord.length; i++) {
		if (event.keyCode === arrWord[i].keyCode) {
			arrWord[i] = arrWord[i].replace(arrWord[i], keyUp);
			console.log(arrWord);
		}	
	}
	
};

	// //if event key had not been pressed before, run loop
	// if (event.keyCode >= 65 && event.keyCode <= 90) {
	// 	for (var i = 0; i < arrWord.length; i++) {
	// 		//if the code of the event key matches the code of a letter arrWord
			
	// 	}
			
	// }


// console.log("Array to be displayed on html: " + wordToGuess);

// document.getElementById("start").textContent = "Press 'Enter' to begin.";

// document.getElementById("start").textContent = "Name of piece";
// document.getElementById("word").textContent = wordToGuess;
// document.getElementById("wins").textContent = "Wins";
// document.getElementById("guessesLeft").textContent = "Guesses remaining";
// document.getElementById("guessesMade").textContent = "Guesses made so far";









// document.onkeyup = function(event) {
// 	//keyUp becomes capitalized version of event key
// 	var keyUp = event.key.toUpperCase();
// 	//If event key is a letter key that has not been pressed run loop
// 	if (guessesMade.indexOf(keyUp) < 0 && keyUp.keyCode >= 65 && keyUp.keyCode <=90) {
// 		for (var i = 0; i < arrWord.length; i++) {
// 			//if the code of the event key matches the code of a letter in the array, 
// 			if (keyUp.keyCode === arrWord[i].keyCode) {
// 				arrWord[i] = arrWord[i].replace('arrWord[i]', 'keyUp')
// 			}

			
// 	}

	
// 	}
// };


// //PC pick becomes one array
// var arrWord = piecePickedUp.split("");
// console.log(arrWord);

// //Display blanks instead of letters
// for (i = 0; i < arrWord.length; i++) {
// 	wordToGuess += blanks[i] + " ";
// }

// var arrBlanks = wordToGuess.split("");
// console.log(arrBlanks);



//When Enter is pressed, status are set to default
// document.onkeyup = function(event) {
// 	var upperKey = event.key.toUpperCase();

// 	document.getElementById("start").textContent = "Name of piece";
// 	document.getElementById("word").textContent = wordToGuess;
// 	console.log(wordToGuess);

// 	if (guessesMade.indexOf(upperKey) < 0 && event.keyCode >= 65 && event.keyCode <= 90){
// 		for (var i = 0; i < arrWord.length; i++) {
// 			if (event.keyCode === arrWord.keyCode) {
// 				if (event.keyCode === arrWord[i].keyCode) {
// 					var present = true;
// 					if (present === true) {
// 						for (var i = 0; i < arrWord.length; i++) {
// 							arrBlanks[i] === arrBlanks[i].replace('arrBlanks[i]', 'upperKey');
// 							console.log(arrBlanks);
// 						}
// 					}
// 				}
// 			}
// 		}

		
// 	}
// };	

// 		for (var i =0; i < arrWord.length; i++) {
// 			// check if key pressed is present in the name of the piece
// 			if (event.keyCode === arrWord[i].keyCode) {
// 				var present = true;	
// 			} else {
// 				present = false;
// 			}
// 		}
// 		//if key pressed is pressent in word the edit word to guess array to show event key in correct spot
// 		if (present = true) {
// 			console.log(event.key.toUpperCase())
// 			// wordToGuess.splice(arrWord.indexOf(arrWord[i], arrWord.indexOf(arrWord[i], event.key));
// 		}
// 	}
// };

// //If key pressed has not been pressed, let conditional run. If key pressed has been pressed, do nothing.
// 	if (guessesMade.indexOf(lowerCaseLetter) < 0 && event.keyCode >= 65 && event.keyCode <= 90){

// 		//if player guesses PCpick, player wins and game restarts
// 		if (lowerCaseLetter === PCpick) {	
// 			wins++;
// 			alert("I guess you are a psychic");
// 			reset();
// 		}

// 		//if player guesses wrong and has no guesses left, player loses and game restarts
// 		else {
// 			guessesLeft--;
// 			if (guessesLeft === 0) {
// 				losses++;
// 				reset();
// 				alert("You're probably not psychic, but feel free to try again");
// 			}
// 			//if player guesses wrong and still has guesses left, player's guesses left drop by one and letter is documented
// 			else{
// 				guessesLeft - 1;
// 				guessesMade.push(lowerCaseLetter);
// 			}
// 		}
// 	}