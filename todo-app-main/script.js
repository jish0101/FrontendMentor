const newTaskForm = document.querySelector("[data-new-task-form]");

const newTaskInput = document.querySelector("[data-new-task-input]");

const todoList = document.querySelector("[data-todo-list]");

const taskTemplate = document.getElementById("task-template");

const addTaskBtn = document.querySelector(".btn-task");

// features items starts from here.

const clearCompleted = document.querySelector(".clear-list");

const filter = document.querySelector(".filter");

const itemRemaining = document.querySelector("[data-item-count]");

const prevTodos = JSON.parse(localStorage.getItem("todos"));

if (prevTodos) {
  prevTodos.forEach((prevTodo) => {
    const createdTodo = createTodo(prevTodo.text, prevTodo.completed);
    renderTodo(createdTodo);
  });
}

newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = newTaskInput.value;
  if (text) {
    const todo = createTodo(text);
    renderTodo(todo);
  }
});

clearCompleted.addEventListener("click", () => {
  clearTodo();
});

function createTodo(text, completed) {
  const taskElement = document.importNode(taskTemplate.content, true);
  const checkbox = taskElement.querySelector("input");
  checkbox.id = Date.now().toString();
  checkbox.checked = completed;
  const label = taskElement.querySelector("label");
  label.htmlFor = checkbox.id;
  label.append(text);
  return taskElement;
}

function clearTodo(todo) {
  if (todo) {
    todo.remove();
    updateLS();
    return;
  }
  const todolist = document.querySelectorAll(".task");
  todolist.forEach((task) => {
    task.remove();
  });
  updateLS();
}

function renderTodo(taskElement) {
  const Prevcheck = taskElement.querySelector("[data-checkbox]");
  if (Prevcheck.checked) {
    Prevcheck.classList.add("checked");
  }
  const check = taskElement.querySelector("[data-checkbox]");
  func(check);
  todoList.appendChild(taskElement);
  updateLS();
  newTaskInput.value = "";
}

function func(check) {
    check.addEventListener("click", () => {
      check.classList.toggle("checked");
      updateLS();
    });
}

function updateLS() {
  const todos = [];
  const todosEl = document.querySelectorAll(".task");
  let textTodo = "";
  let checked = undefined;

  todosEl.forEach((div) => {
    const label = div.querySelector("label");
    checked = div.querySelector(".check");
    textTodo = label.innerText;
    todos.push({
      text: textTodo,
      completed: checked.classList.contains("checked"),
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
  itemRemainingCount();
}

function itemRemainingCount() {
  let incompleteTask = 0;
  const todosEl = document.querySelectorAll(".task");
  const checked = document.querySelectorAll(".checked");
  let totalTask = todosEl.length;
  let completedTask = checked.length;
  let itemRemainingc = totalTask - completedTask;
  itemRemaining.innerText = `${itemRemainingc} ${itemRemainingc < 2 ? "item":"items"} left`
}
