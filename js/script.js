const taskInput = document.getElementById('task-input');
const taskDate = document.getElementById('task-date');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', function () {
    const taskName = taskInput.value.trim();
    const taskTime = taskDate.value;
    
    if (taskName && taskTime) {
        addTask(taskName, taskTime);
        taskInput.value = '';
        taskDate.value = '';
    }
});

function addTask(taskName, taskTime) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskName} (Due: ${new Date(taskTime).toLocaleString()})</span>
        <div class="task-buttons">
            <button class="complete">Complete</button>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;
    
    taskList.appendChild(taskItem);

    taskItem.querySelector('.complete').addEventListener('click', function () {
        taskItem.classList.toggle('completed');
    });

    taskItem.querySelector('.edit').addEventListener('click', function () {
        const newTaskName = prompt("Edit Task", taskName);
        if (newTaskName) {
            taskItem.querySelector('span').textContent = `${newTaskName} (Due: ${new Date(taskTime).toLocaleString()})`;
        }
    });

    taskItem.querySelector('.delete').addEventListener('click', function () {
        taskItem.remove();
    });
}

const style = document.createElement('style');
style.textContent = `.completed span { text-decoration: line-through; }`;
document.head.append(style);
