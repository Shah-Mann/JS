// let temp = {
//   F: 50,
// };

// console.log(
//   `The temp in Fahrenhiet is ${temp.F} F and in celsius is ${
//     (temp.F - 32) / 1.8
//   } C and in Kelvin is ${(temp.F - 32) / 1.8 + 273.15} K`
// );

let convertF = function (Fahrenhiet) {
  return {
    Fahrenhiet: Fahrenhiet,
    celsius: (Fahrenhiet - 32) / 1.8,
    kelvin: (Fahrenhiet - 32) / 1.8 + 273.15,
  };
};

let temp = convertF(74);
console.log(temp);
