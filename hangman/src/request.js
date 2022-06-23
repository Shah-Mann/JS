const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `//puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to get puzzle");
  }
};

const getCurrentCountry = async () => {
  const location = await getLocation();
  return getCountry(location.country);
};

const getCountry = async (countryCode) => {
  const response = await fetch("//restcountries.com/v3.1/all");

  if (response.status === 200) {
    const data = await response.json();
    return data.find((country) => country.cca2 === countryCode);
  } else {
    throw new Error("Unable to fetch the country");
  }
};

const getLocation = async () => {
  const response = await fetch("//ipinfo.io/json?token=8efab4cc9f1acc");

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Unable to get the current location");
  }
};

export { getPuzzle as default };
// const getCountryold = (countryCode) => {
//   return fetch("https://restcountries.com/v3.1/all")
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error("Unable to load data");
//       }
//     })
//     .then((data) => {
//       return data.find((country) => country.cca2 === countryCode);
//     });
// };

// const getPuzzleold = (wordCount) => {
//   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error("Unable to load Puzzle");
//       }
//     })
//     .then((data) => {
//       return data.puzzle;
//     });
// };

// const getLocationold = () => {
//   return fetch("http://ipinfo.io/json?token=8efab4cc9f1acc").then(
//     (response) => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error("Unable to load location");
//       }
//     }
//   );
// };
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
