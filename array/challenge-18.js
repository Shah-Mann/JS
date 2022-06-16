const todos = [
  {
    title: "Order cat food",
    workdone: "yes",
  },
  {
    title: "Clean Kitchen",
    workdone: "no",
  },
  {
    title: "Buy Food",
    workdone: "yes",
  },
  {
    title: "Do work",
    workdone: "yes",
  },
  {
    title: "Play",
    workdone: "no",
  },
];

const deletetodo = function (todos, todoText) {
  const index = todos.findIndex(function (todo) {
    return todo.title.toLowerCase() === todoText.toLowerCase();
  });
  if (index > -1) {
    todos.splice(index, 1);
  }
};

deletetodo(todos, "buy food");
console.log(todos);
