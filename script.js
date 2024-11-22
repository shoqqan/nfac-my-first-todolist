
document.addEventListener('DOMContentLoaded',()=>{
    function createTodolist(title){
        const todolistContainer = document.getElementById('todolistContainer');

        const todolist = document.createElement('div');
        todolist.classList.add('todolist');
        todolist.id= Date.now().toString();

        const todolistTitle = document.createElement('p');
        todolistTitle.classList.add('todolist__title');
        todolistTitle.textContent = title;

        const hr = document.createElement('hr');
        const taskList = document.createElement('ul');
        taskList.classList.add('todolist__task_list');

        const taskInput = document.createElement('input');


        taskInput.addEventListener('keyup',(event)=>{
            if (event.key==='Enter'){
                createTask(taskList,taskInput.value);
                taskInput.value = '';
            }
        });

        todolist.appendChild(todolistTitle);
        todolist.appendChild(hr);
        todolist.appendChild(taskInput)
        todolist.appendChild(taskList);
        todolistContainer.appendChild(todolist);

    }

    function createTask(taskList,title){
        const task = document.createElement('li');
        const taskLabel = document.createElement('label');
        const taskCheckbox = document.createElement('input');
        taskCheckbox.type='checkbox';
        const taskText = document.createElement('span');
        taskText.innerHTML=title

        task.appendChild(taskLabel);
        taskLabel.appendChild(taskCheckbox)
        taskLabel.appendChild(taskText);
        taskList.appendChild(task)
    }

    const todoInput = document.getElementById('headerInput');
    todoInput.addEventListener('keyup',(event)=>{
        if (event.key==='Enter'){
            createTodolist(todoInput.value);
            todoInput.value = '';
        }
    });


});
