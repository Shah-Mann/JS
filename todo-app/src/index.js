import { getFilters, setFilters } from "./filters";
import {
  getTodos,
  createTodo,
  removeTodo,
  toggleTodo,
  loadTodos,
} from "./todos";
import { generateTodoDOM, generateSummaryDOM, renderTodos } from "./views";

renderTodos();

document.querySelector("#i2").addEventListener("input", function(e) {
  setFilters({
    searchText: e.target.value,
  });
  renderTodos();
});

document.querySelector("#new-todo").addEventListener("submit", function(e) {
  setFilters({
    searchText: e.target.value,
  });
  const text = e.target.elements.text.value.trim();
  e.preventDefault();

  if (text.length > 0) {
    createTodo(text);
    renderTodos();
    e.target.elements.text.value = "";
  }
});

document.querySelector("#hide-completed").addEventListener("change", (e) => {
  setFilters({
    hideCompleted: e.target.checked,
  });
  renderTodos();
});

window.addEventListener("storage", (e) => {
  if (e.key === "todos") {
    loadTodos();
    renderTodos();
  }
});
