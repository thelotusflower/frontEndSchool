function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

var game = function(n=10, tries=3) {
	var secretNumber = getRandomInt(n);
	return function(guess) {
		if (tries-- == 0) {
			console.log('You lost');
			process.exit();
		}

		if (guess > secretNumber) {
			console.log('Too big');
		} else if (guess < secretNumber) {
			console.log('Too small');
		} else {
			console.log('Right!');
			process.exit();
		}
	};
};

var newGame = game();
console.log('Enter your guess: ');
process.stdin.addListener('data', function(d) {
	var guess = d;
	newGame(guess);
})