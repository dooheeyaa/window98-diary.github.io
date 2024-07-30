(function () {
  const toDoForm = document.querySelector(".main-todo-note");
  const todoInput = document.getElementById("main-todo-note-form");
  const todoList = document.querySelector(".main-todo-list ul");

  let toDoArr = [];

  function saveToLocal() {
    localStorage.setItem("todos", JSON.stringify(toDoArr));
  }

  function todoDelete(e) {
    const parent = e.target.parentNode;
    parent.remove();
    toDoArr = toDoArr.filter((x) => x.id !== parseInt(parent.id));
    saveToLocal();
  }

  function todoShow(elem) {
    const li = document.createElement("li");
    li.id = elem.id;
    const span = document.createElement("span");
    span.innerText = elem.value;
    const button = document.createElement("button");
    button.classList.add("todo-button");
    // button.innerText = "X";

    li.appendChild(button);
    li.appendChild(span);
    todoList.appendChild(li);

    button.addEventListener("click", todoDelete);
  }

  function todoHandler(e) {
    e.preventDefault();
    const value = todoInput.value;
    const valueObj = {
      id: Date.now(),
      value,
    };
    todoInput.value = "";
    toDoArr.push(valueObj);
    todoShow(valueObj);
    saveToLocal();
  }

  const localValue = localStorage.getItem("todos");

  if (localValue) {
    const parseTodo = JSON.parse(localValue);
    toDoArr = parseTodo;
    parseTodo.forEach(todoShow);
  }

  toDoForm.addEventListener("submit", todoHandler);
})();
