
var words = [
    "homerun",
    "single",
    "double",
    "triple",
    "pitcher",
    "catcher",
    "batter",
    "ball",
    "strike",
    "walk",
    "grandslam",
    "doubleplay",
    "flyout"
];

var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];

for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
console.log(word)

var remainingLetters = word.length;

// The game loop

while (remainingLetters > 0) {
    alert(answerArray.join(" "));


    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {

        break;
    } else if (guess.length !== 1) {
        alert("Single letter ONLY DUDE.");
    } else {

        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess; remainingLetters--;
            }
        }
    }

    console.log(answerArray);
}


alert(answerArray.join(" "));
alert("Home Run! You won the Manny Hangman the answer was " + word);


var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var pickWord = function () {
};

var setupAnswerArray = function (word) {

};
var showPlayerProgress = functin(answerArray)
{
   
};

var getGuess = function () {
   
};

var updateGameState = function (guess, word, answerArray) {
   
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
};
while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Single letter ONLY DUDE.");
    } else {
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}

showAnswerAndCongratulatePlayer(answerArray);