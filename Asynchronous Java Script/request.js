const getPuzzle = (wordCount, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data.puzzle);
    } else if (e.target.readyState === 4) {
      callback("Error Occured", undefined);
    }
  });
  request.open("GET", `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
  request.send();
};

const getCountry = (countryCode, callback) => {
  const countryRequest = new XMLHttpRequest();

  countryRequest.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      const country = data.find((country) => country.cca2 === countryCode);
      callback(undefined, country);
    } else if (e.target.readyStatet === 4) {
      callback("Unable to fetch  data");
    }
  });

  countryRequest.open("GET", "https://restcountries.com/v3.1/all");
  countryRequest.send();
};
// const getPuzzleSync = () => {
//   const request = new XMLHttpRequest();

//   request.open("GET", "https://puzzle.mead.io/puzzle?wordCount=3", false);
//   request.send();

//   if (request.readyState === 4 && request.status === 200) {
//     const data = JSON.parse(request.responseText);
//     return data.puzzle;
//   } else if (request.readyState === 4) {
//     throw new Error("Error Occured");
//   }
// };
