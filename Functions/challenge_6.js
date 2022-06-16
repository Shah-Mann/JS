let fahrenhiettocelsius = function (fahrenhiet) {
  let result = (fahrenhiet - 32) / 1.8;
  return result;
};

let value = fahrenhiettocelsius(32);
let val2 = fahrenhiettocelsius(68);
console.log(value);
console.log(val2);
