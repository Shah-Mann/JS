const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
let game1;

// puzzleEl.textContent = game1.puzzle;
// guessesEl.textContent = game1.statusMessage;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});

const render = () => {
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMessage;
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game1 = new Hangman(puzzle, 5);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();

// getPuzzle("2")
//   .then((puzzle) => {
//     console.log(puzzle);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

// getCurrentCountry()
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// getCountry("IN").then(
//   (name) => {
//     console.log(name.name);
//   },
//   (err) => {
//     console.log(`Error: ${err}`);
//   }
// );

// getLocation()
//   .then((location) => {
//     return getCountry(location.country);
//   })
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

// fetch("http://puzzle.mead.io/puzzle", {})
//   .then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error("Unable to load Puzzle");
//     }
//   })
//   .then((data) => {
//     console.log(data.puzzle);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// if (error) {
//   console.log(error);
// } else {
//   console.log(Country.name);
// }

// const puzzle = getPuzzleSync();
// console.log(puzzle);

// console.log("Hello");

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
