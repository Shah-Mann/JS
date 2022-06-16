let gettip = function (total, tippercent) {
  let tip = total * tippercent;

  return ` The tip would be of ${tip} `;
};

let tip = gettip(40, 0.25);
console.log(tip);
