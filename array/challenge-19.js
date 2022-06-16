const todos = [
  {
    title: "Order cat food",
    workdone: true,
  },
  {
    title: "Clean Kitchen",
    workdone: false,
  },
  {
    title: "Buy Food",
    workdone: true,
  },
  {
    title: "Do work",
    workdone: true,
  },
  {
    title: "Play",
    workdone: false,
  },
];

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if (!a.workdone && b.workdone) {
      return -1;
    } else if (a.workdone && !b.workdone) {
      return 1;
    } else {
      return 0;
    }
  });
};

// const deletetodo = function (todos, todoTitle) {
//   const index = todos.findIndex(function (todo) {
//     return todo.title.toLowerCase() === todo.Title.toLowerCase();
//   });
//   if (index > -1) {
//     todos.splice(index, 1);
//   }
// };

// const getThingsToDo = function (todos) {
//   return todos.filter(function (todos) {
//     return !todos.workdone;
//   });
// };

sortTodos(todos);
console.log(todos);

// deletetodo(todos, "buy food");
// console.log(todos);
