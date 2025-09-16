// 🚀 Part 1: Variables and Conditionals
// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Array to store tasks
let tasks = [];

// ❤️ Part 2: Functions

// Function to add a task
function addTask(task) {
  // Validate input: not empty and not just whitespace
  if (task.trim() === '') {
    alert('Please enter a valid task.');
    return false;
  }
  tasks.push(task);
  return true;
}

// Function to remove a task by index
function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// 🔁 Part 3: Loops

// Function to render tasks on the page
function renderTasks() {
  taskList.innerHTML = ''; // Clear current list

  // Loop through tasks and create list items
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    // 🌐 Part 4: DOM Interaction - Event Listener on remove button
    removeBtn.addEventListener('click', () => {
      removeTask(index);
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);
  });
}

// 🌐 Part 4: DOM Interaction - Add task on button click
addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value;

  // Use addTask function and render if successful
  if (addTask(task)) {
    renderTasks();
    taskInput.value = ''; // Clear input field
  }
});

// Bonus: add task by pressing Enter key
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTaskBtn.click();
  }
});
