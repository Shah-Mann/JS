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

console.log(todos);
