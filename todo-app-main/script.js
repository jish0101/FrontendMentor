const newTaskForm = document.querySelector("[data-new-task-form]");

const newTaskInput = document.querySelector("[data-new-task-input]");

const todoList = document.querySelector("[data-todo-list]");

const taskTemplate = document.getElementById("task-template");

const addTaskBtn = document.querySelector(".btn-task");

// features items starts from here.

const darkModeToggle = document.querySelector("[data-dark-mode]");

const clearAll = document.querySelector(".clear-list");

const filter = document.querySelector(".filter");

const itemRemaining = document.querySelector("[data-item-count]");

const prevTodos = JSON.parse(localStorage.getItem("todos"));

const isDarkMode = JSON.parse(localStorage.getItem("darkMode"));

if (prevTodos) {
  prevTodos.forEach((prevTodo) => {
    const createdTodo = createTodo(prevTodo.text, prevTodo.completed);
    renderTodo(createdTodo);
  });
}

if (isDarkMode) {
  enableDarkMode();
  const labels = document.querySelectorAll("[data-label]");
  if (document.body.classList.contains("body-dark")) {
    if (labels) {
      labels.forEach((label) => {
        label.classList.add("dark-label-font");
      });
    }
  }
  updateLS();
}

newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = newTaskInput.value;
  if (text) {
    const todo = createTodo(text);
    renderTodo(todo);
  }
});

clearAll.addEventListener("click", () => {
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

function clearTodo(cross) {
  console.log(cross);
  if (cross) {
    cross.parentNode.remove();
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

  const deleteTodo = document.querySelectorAll('.deleteTodo');
  console.log(deleteTodo);
  
deleteTodo.forEach(cross => {
  cross.addEventListener("click", () => {
    clearTodo(cross);
  });
});

  const labels = document.querySelectorAll("[data-label]");
  if (document.body.classList.contains("body-dark")) {
    if (labels) {
      labels.forEach((label) => {
        label.classList.add("dark-label-font");
      });
    }
    const task = document.querySelectorAll('.task');
    task.forEach(task => {
      task.classList.add("task-dark");
    });
  } else {
    labels.forEach((label) => {
      label.classList.remove("dark-label-font");
    });
  }
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
  if (document.body.classList.contains("body-dark")){
    localStorage.setItem("darkMode", "true");
  } else {
    localStorage.setItem("darkMode", "false");
  }
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
  itemRemaining.innerText = `${itemRemainingc} ${
    itemRemainingc < 2 ? "item" : "items"
    } left`;
}

darkModeToggle.addEventListener("click", () => {
  enableDarkMode();
  const labels = document.querySelectorAll("[data-label]");
  if (document.body.classList.contains("body-dark")) {
    if (labels) {
      labels.forEach((label) => {
        label.classList.add("dark-label-font");
      });
    }
  } else {
    labels.forEach((label) => {
      label.classList.remove("dark-label-font");
    });
  }
  updateLS();
});

function enableDarkMode() {
  document.body.classList.toggle("body-dark");
  const todoHead = document.querySelector("[data-todo-head]");
  todoHead.classList.toggle("todo-head-dark");
  todoList.classList.toggle("todo-new-list-dark");
  newTaskInput.classList.toggle("todo-new-list-dark");
  const btn = document.querySelector('.btn-task');
  btn.classList.toggle("btn-task-dark");
  darkModeToggle.classList.toggle("todo-dark-mode-dark");
  const task = document.querySelectorAll('.task');
  task.forEach(task => {
    task.classList.toggle("task-dark");
  });
}

function filters(e) {
  const allfilter = document.querySelectorAll('.filter-list-item');
  if (e.target.classList.contains("filter-list-item")) {
    allfilter.forEach(filter => {
      filter.classList.remove("active-filter")
      filterLogic(e.target);
    });
    e.target.classList.add("active-filter");
    filterLogic(e.target);
  }
}

filter.addEventListener("click", (e) => {
  filters(e);
});

function filterLogic(object) {
  const task = document.querySelectorAll('.task');
  if (task) {
    if (object.innerText === "All") {
      task.forEach(task => {
        task.classList.remove("hide")
      });
    } else if (object.innerText === "Active") {
      const unactive = document.querySelectorAll('.checked');
      task.forEach(object => {
        object.classList.remove("hide");
      })
      if (unactive) {
        unactive.forEach(object => {
          object.parentNode.classList.add("hide");
        })
      }
    } else if (object.innerText === "Completed") {
      const unactive = document.querySelectorAll('.checked')
      task.forEach(object => {
        object.classList.add("hide");
      })
      if (unactive) {
        unactive.forEach(object => {
          object.parentNode.classList.remove("hide");
        })
      }
    }
  }
}
