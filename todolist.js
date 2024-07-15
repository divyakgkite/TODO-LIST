document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                taskInput.value = '';
            }
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        const taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'Delete';

        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskCheckbox.addEventListener('change', () => {
            taskItem.classList.toggle('completed');
        });

        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    }
});
