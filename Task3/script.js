let todos = JSON.parse(localStorage.getItem("todos")) || [];
let theme = localStorage.getItem("theme") || "dark";

const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const clearAll = document.getElementById("clearAll");
const themeToggle = document.getElementById("themeToggle");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  displayTasks();
});

addBtn.addEventListener("click", addTask);
todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});
clearAll.addEventListener("click", clearAllTasks);
themeToggle.addEventListener("click", toggleTheme);

function addTask() {
  const text = todoInput.value.trim();
  if (!text) return;
  todos.push({ text, completed: false });
  saveTasks();
  todoInput.value = "";
  displayTasks();
}

function displayTasks() {
  todoList.innerHTML = "";
  todos.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "todo-item" + (task.completed ? " completed" : "");
    li.innerHTML = `
      <p onclick="toggleComplete(${index})">${task.text}</p>
      <div class="todo-actions">
        <button onclick="editTask(${index})">✏️</button>
        <button onclick="deleteTask(${index})">🗑️</button>
      </div>
    `;
    todoList.appendChild(li);
  });
  todoCount.textContent = todos.length;
}

function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  saveTasks();
  displayTasks();
}

function editTask(index) {
  const newText = prompt("Edit your task:", todos[index].text);
  if (newText !== null && newText.trim() !== "") {
    todos[index].text = newText.trim();
    saveTasks();
    displayTasks();
  }
}

function deleteTask(index) {
  todos.splice(index, 1);
  saveTasks();
  displayTasks();
}

function clearAllTasks() {
  if (confirm("Are you sure you want to clear all tasks?")) {
    todos = [];
    saveTasks();
    displayTasks();
  }
}

function saveTasks() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// THEME HANDLING
function toggleTheme() {
  theme = theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme);
  applyTheme();
}

function applyTheme() {
  if (theme === "light") {
    document.body.classList.add("light-theme");
    themeToggle.textContent = "☀️";
  } else {
    document.body.classList.remove("light-theme");
    themeToggle.textContent = "🌙";
  }
}
