const todos = [
  "Order cat food",
  "Clean Kitchen",
  "Buy Food",
  "Do work",
  "Play",
];

todos.splice(2, 1);
todos.splice(0, 1);
todos.push("This is last");

console.log(` You have ${todos.length} todos`);
//todos.forEach(function (item, index) {
//  console.log(`${index + 1}. ${item}`);
//});

// for (let count = 0; count < todos.length; count++) {
//   const num = count + 1;
//   const todo = todos[count];
//   console.log(`${num}. ${todo}`);
// }
