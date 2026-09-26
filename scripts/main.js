// 1. DOM Element Selection
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const errorMessage = document.getElementById('error-message');
const taskList = document.getElementById('task-list');
const filterBtns = document.querySelectorAll('.filter-btn');

// 2. State Management & localStorage Retrieval
// Retrieve tasks from localStorage or initialize an empty array if none exist
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all'; // Possible values: 'all', 'pending', 'completed'

// 3. Save to localStorage Function
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// 4. Core Render Function (Dynamic DOM Updates)
function renderTasks() {
    // Clear the current list
    taskList.innerHTML = '';
    
    // Apply Filtering Logic
    let filteredTasks = tasks;
    if (currentFilter === 'pending') {
        filteredTasks = tasks.filter(task => !task.completed);
    } else if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    }

    // Generate DOM elements for each task
    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        // Add the 'completed' class dynamically if the task status is true
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.dataset.id = task.id; // Store unique ID in a data attribute

        li.innerHTML = `
            <span class="task-text">${task.text}</span>
            <div class="task-actions">
                <button class="icon-btn complete-btn">${task.completed ? '↺' : '✓'}</button>
                <button class="icon-btn edit-btn">✎</button>
                <button class="icon-btn delete-btn">✗</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// 5. Add Task & Form Validation Event Listener
taskForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent standard page reload on submit
    
    const text = taskInput.value.trim();

    // Validation: Check if input is empty
    if (text === '') {
        errorMessage.classList.remove('error-hidden');
        errorMessage.classList.add('error-visible');
        return;
    }

    // Hide error message if validation passes
    errorMessage.classList.remove('error-visible');
    errorMessage.classList.add('error-hidden');

    // Create a new task object
    const newTask = {
        id: Date.now(), // Generate a unique ID
        text: text,
        completed: false
    };

    tasks.push(newTask);
    saveTasks();
    
    // Reset input field and update the UI
    taskInput.value = '';
    renderTasks();
});

// 6. Event Delegation for Task Actions (Edit, Delete, Complete)
// We listen on the parent <ul> to handle clicks on dynamically generated buttons
taskList.addEventListener('click', (e) => {
    const target = e.target;
    
    // Ignore clicks that are not on our action buttons
    if (!target.classList.contains('icon-btn')) return;

    // Find the parent <li> and extract its unique ID
    const li = target.closest('.task-item');
    const id = Number(li.dataset.id);

    // Handle Delete
    if (target.classList.contains('delete-btn')) {
        tasks = tasks.filter(task => task.id !== id);
    } 
    // Handle Mark as Complete
    else if (target.classList.contains('complete-btn')) {
        const task = tasks.find(task => task.id === id);
        if (task) task.completed = !task.completed;
    } 
    // Handle Edit
    else if (target.classList.contains('edit-btn')) {
        const task = tasks.find(task => task.id === id);
        if (task) {
            const newText = prompt('Edit your task:', task.text);
            // Validation: Only save if the user typed something and didn't hit cancel
            if (newText !== null && newText.trim() !== '') {
                task.text = newText.trim();
            }
        }
    }

    // Save updates and refresh UI
    saveTasks();
    renderTasks();
});

// 7. Filtering Event Listeners
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove the 'active' class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add 'active' class to the clicked button
        btn.classList.add('active');
        
        // Update filter state and re-render
        currentFilter = btn.dataset.filter;
        renderTasks();
    });
});

// 8. Initial Initialization
// Render any tasks that were saved in localStorage upon first page load
renderTasks();