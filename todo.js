let tasks = [];

function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
        taskItem.innerHTML = `
            <span>${task.text}</span>
            <div>
                <input type="checkbox" ${task.completed ? 'checked' : ''} data-index="${index}">
                <button class="delete-btn" data-index="${index}">Delete</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
    
    // Add event listeners to new elements
    document.querySelectorAll('.task-item input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', toggleTaskComplete);
    });
    
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', deleteTask);
    });
}

function addTask(text) {
    tasks.push({
        text,
        completed: false
    });
    displayTasks();
}

function toggleTaskComplete(e) {
    const index = e.target.dataset.index;
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function deleteTask(e) {
    const index = e.target.dataset.index;
    tasks.splice(index, 1);
    displayTasks();
}

// Add task form
document.getElementById('add-task-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const taskInput = document.getElementById('task-input');
    if (taskInput.value.trim() !== '') {
        addTask(taskInput.value.trim());
        taskInput.value = '';
    }
});

// Sample initial tasks
tasks = [
    { text: "Complete math homework", completed: false },
    { text: "Read history chapter 5", completed: true },
    { text: "Prepare for science quiz", completed: false }
];

// Display tasks when page loads
window.addEventListener('DOMContentLoaded', displayTasks);
