// This is the JavaScript for the to-do app. It adds interactivity to the app, such as adding new to-dos, marking to-dos as complete, and deleting to-dos.
const todos = []; // This is an array that stores all of the to-dos.

const addTodo = () => {
    // This function adds a new to-do to the list.
    const newTodo = document.getElementById("new-todo").value;
    todos.push({
        text: newTodo,
        completed: false,
    });
    refreshTodos();
};

const refreshTodos = () => {
    // This function refreshes the list of to-dos.
    const todoList = document.getElementById("todos");
    todoList.innerHTML = todos.map(todo => `
    <li data-id="${todo.id}">
      ${todo.text}
      <button class="complete">Complete</button>
    </li>
  `).join("");
};

const handleComplete = (event) => {
    // This function marks a to-do as complete.
    const todo = event.target.parentElement;
    todo.classList.toggle("completed");
    todo.dataset.completed = todo.classList.contains("completed");
};

document.getElementById("add-todo").addEventListener("click", addTodo);
document.querySelectorAll(".complete").forEach(button => button.addEventListener("click", handleComplete));

refreshTodos();