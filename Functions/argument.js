// Multiple Arg
let add = function (a, b) {
  return a + b;
};

let result = add(10, 1);
console.log(result);

//Deafult arg

let getscore = function (name, score = 1000) {
  return "Name : " + name + " - Score " + score;
};

let scoretext = getscore("mann", 120);
console.log(scoretext);

let names = "Mann Shah";
console.log(`Hey, my name is ${names}`);
