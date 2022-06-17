const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
const game1 = new Hangman("Car 1", 2);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMessage;
});

getPuzzle((error, puzzle) => {
  if (error) {
    console.log(`Eroor: ${error}`);
  } else {
    console.log(puzzle);
  }
});
// const countryCode = "IN";
// const countryRequest = new XMLHttpRequest();

// countryRequest.addEventListener("readystatechange", (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText);
//     const country = data.find((country) => country.cca2 === countryCode);
//     console.log(country.name);
//   }
// });

// countryRequest.open("GET", "https://restcountries.com/v3.1/all");
// countryRequest.send();
