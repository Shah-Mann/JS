const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
const game1 = new Hangman("Car 1", 2);

puzzleEl.textContent = game1.Puzzle;
guessesEl.textContent = game1.StatusMessage;

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.Puzzle;
  guessesEl.textContent = game1.StatusMessage;
});
