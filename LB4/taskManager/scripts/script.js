document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const filterStatus = document.getElementById('filter-status');
    const taskList = document.getElementById('task-list');

    let tasks = [];

    function renderTasks() {
        taskList.innerHTML = '';

        const filter = filterStatus.value;

        let filteredTasks = [];
        if (filter === 'in-progress') {
            filteredTasks = tasks.filter(task => !task.completed && !task.deleted);
        } else if (filter === 'completed') {
            filteredTasks = tasks.filter(task => task.completed);
        } else if (filter === 'deleted') {
            filteredTasks = tasks.filter(task => task.deleted);
        } else {
            filteredTasks = tasks;
        }

        filteredTasks.forEach((task, index) => {
            const li = document.createElement('li');
            const taskText = document.createElement('span');
            taskText.textContent = task.text;

            if (task.completed) {
                li.classList.add('completed');
                taskText.textContent += ` (Виконано: ${task.timeCompleted})`;
            }

            if (task.deleted) {
                li.classList.add('deleted');
                taskText.textContent += ` (Видалено: ${task.timeDeleted})`;
            }

            const actions = document.createElement('div');

            if (!task.completed && !task.deleted) {
                const completeBtn = document.createElement('button');
                completeBtn.textContent = '✅ Виконано';
                completeBtn.addEventListener('click', () => markCompleted(index));
                actions.appendChild(completeBtn);

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = '❌ Видалити';
                deleteBtn.addEventListener('click', () => deleteTask(index));
                actions.appendChild(deleteBtn);
            }

            li.appendChild(taskText);
            li.appendChild(actions);

            taskList.prepend(li); // Новіші зверху
        });
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const newTask = {
                text: taskText,
                completed: false,
                deleted: false,
                timeCreated: new Date().toLocaleString(),
            };
            tasks.unshift(newTask);
            taskInput.value = '';
            renderTasks();
        }
    }

    function markCompleted(index) {
        const task = tasks[index];
        task.completed = true;
        task.timeCompleted = new Date().toLocaleString();
        renderTasks();
    }

    function deleteTask(index) {
        const task = tasks[index];
        task.deleted = true;
        task.timeDeleted = new Date().toLocaleString();
        renderTasks();
    }

    addTaskBtn.addEventListener('click', addTask);
    filterStatus.addEventListener('change', renderTasks);

    renderTasks();
});