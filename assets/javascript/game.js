let blanks = [];
let wins = 0;
let guessesLeft = 9;
let correct = [];
let all = [];
const choices = ["The Trinquetaille Bridge", "The Yellow House", "Four Cut Sunflowers", "Noon Rest From Work"];

newWord();

document.onkeyup = function(event) {
	let keyUp = event.key.toUpperCase();

	// Checks if key has been pressed
	if (all.indexOf(keyUp) < 0 && event.keyCode >= 65 && event.keyCode <= 90){
		
		// If guess is correct...
		if (pickArr.includes(keyUp)) {
			correct.push(keyUp);
			all.push(keyUp);

			$('#correctGuesses').text('Correct Guesses: ' + correct);
			$('#allGuesses').text('All Guesses: ' + all);

		} else {
			guessesLeft --;
			all.push(keyUp);

			$('#guessesLeft').text('Guesses Left: ' + guessesLeft);
			$('#allGuesses').text('All Guesses: ' + all);

			if (guessesLeft === 0) {
				alert('you lost');
				newWord();
			}
		}
	}

	for (var i = 0; i < pickArr.length; i++) {
		if (pickArr[i].includes(keyUp)) {
			blanks[i] = keyUp;
			$('#word').text(blanks.join(''));

			// Check for win condition
			if (pickArr.join('') === blanks.join('')) {
				alert('Good job. The name of the piece is: ' + blanks.join(''));
				wins ++;
				newWord();
			} 
		}
	}
};

function newWord() {
	console.log('NEW GAME')
	blanks = [];
	guessesLeft = 9;
	correct = [];
	all = [];

	// Pc chooses
	pick = Math.floor(Math.random() * choices.length);
	pickArr = choices[pick].toUpperCase().split("");

	// Create array of blanks
	for (let i = 0; i < pickArr.length; i++) {
		blanks.push("_ ")
	}

	// Update background
	if (pick === 0) {
		$('body').css('background-image', 'url("assets/images/1.jpg")');
	} else if (pick === 1) {
		$('body').css('background-image', 'url("assets/images/2.jpg")');
	} else if (pick === 2) {
		$('body').css('background-image', 'url("assets/images/3.jpg")');
	} else if (pick === 3) {
		$('body').css('background-image', 'url("assets/images/4.jpg")');
	}

	// Generate HTML
	$('#word').text(blanks.join(''));
	$('#wins').text('Wins: ' + wins);
	$('#guessesLeft').text('Guesses Left: ' + guessesLeft);
	$('#correctGuesses').text('Correct Guesses: ' + correct);
	$('#allGuesses').text('All Guesses: ' + all);

	// Show spaces
	for (var i = 0; i < pickArr.length; i++) {
		if (pickArr[i] === ' ') {
			blanks[i] = ' ';
		}
	}
};
