// // const calculateAverage = (name, ...numbers) => {
// //   //return (num1 + num2) / 2;
// //   let sum = 0;
// //   numbers.forEach((num) => (sum += num));
// //   const avg = sum / numbers.length;
// //   return `The average ${name} is ${avg}`;
// // };

// // console.log(calculateAverage("age", 50, 5, 100, 25));

// // const cricket = (teamname, coach, ...players) => {
// //   return `Your team ${teamname} has following players ${players} and coach is ${coach}`;
// // };

// // console.log(cricket("Liberty", "Casey Penn", "Marge, Aiden, Herbert, Sherry"));

// const printTeam = (teamname, coach, ...players) => {
//   console.log(`Team: ${teamname}`);
//   console.log(`coach: ${coach}`);
//   console.log(`players: ${players.join(", ")}`);
// };

// const team = {
//   name: "Liberty",
//   coach: "Casey Penn",
//   players: ["Marge", "Aiden", "Herbert", "Sherry"],
// };

// printTeam(team.name, team.coach, ...team.players);

// let cities = ["Maninagar", "Isanpur", "Vatva"];
// //const citiesCopy = ["C.G. Road", ...cities];
// cities = [...cities, "C.G.Road"];
// // citiesCopy.push("C.G. Road");

// console.log(cities);
// //console.log(citiesCopy);
// // printTeam("Liberty", "Casey Penn", "Marge", "Aiden", "Herbert", "Sherry");

// let house = {
//   bedroom: 3,
//   bathrooms: 2,
//   yearBuilt: 2000,
// };

// let newHouse = {
//   dininghall: true,
//   ...house,
//   bedroom: 1,
// };

// //newHouse.yearBuilt = 2002;

// console.log(house);
// console.log(newHouse);

// const person = {
//   name: "Mann",
//   age: 21,
// };

// const loacation = {
//   city: "Maninagar",
//   Country: "India",
// };

// const info = {
//   ...person,
//   ...loacation,
// };

// console.log(info);

const todo = {
  id: 54,
  text: "Pay the bill",
  completed: false,
};

// const text = todo.text;
// const completed = todo.completed;

const printTodo = (todo) => {
  console.log(`${todo.text}: ${todo.completed}`);
};

printTodo(todo);

const { text: todoText, completed, details = "Do it fast", ...others } = todo;

console.log(todoText);
console.log(completed);
console.log(details);
console.log(others);

const age = [65, 0, 13, 21];
const [firstAge, SecondAge, , lastAge] = age;

console.log(firstAge);
console.log(SecondAge);
console.log(lastAge);
