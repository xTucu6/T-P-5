document.addEventListener('DOMContentLoaded', function () {
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            listItem.innerHTML = `
          <span>${taskText}</span>
          <button class="btn btn-danger btn-sm delete-btn">Eliminar</button>
        `;

            taskList.appendChild(listItem);


            taskInput.value = '';


            const deleteBtn = listItem.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', function () {
                listItem.remove();
            });
        } else {
            alert('Por favor ingrese una tarea valida.');
        }
    }

    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});