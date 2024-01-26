const taskFormContainer = document.querySelector('#task-form-container');
const taskFormInput = document.querySelector("#task-form-input");
const editFormContainer = document.querySelector('#edit-form-container');
const editForm = document.querySelector('#edit-form');
const editFormInput = document.querySelector('#edit-form-input');
const submitEditBtn = document.querySelector('#submit-edit-btn');
const content = document.querySelector('#content');
const taskFormSubmitBtn = document.querySelector('#task-form-submit-btn');
var taskIdTarget;
let taskIdCounter = 0;

editFormContainer.classList.add("hide");

const toDoList = document.createElement('div');
toDoList.classList.add('to-do-List');
content.appendChild(toDoList);

function addTask(text) {
    const id = taskIdCounter;
    taskIdCounter++;

    const task = document.createElement('div');
    task.id = id;
    task.classList.add('task');
    toDoList.appendChild(task);

    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task-title');
    taskTitle.innerHTML = text;
    task.appendChild(taskTitle);

    const taskBtnsContainer = document.createElement('div');
    taskBtnsContainer.classList.add('task-btns-container');
    task.appendChild(taskBtnsContainer);

    const doneImg = document.createElement('img');
    doneImg.classList.add('done-img');
    doneImg.src = 'images/done.png';
    const doneBtn = document.createElement('button');
    doneBtn.classList.add('done-btn');
    doneBtn.appendChild(doneImg);
    taskBtnsContainer.appendChild(doneBtn);

    const editImg = document.createElement('img');
    editImg.classList.add('edit-img');
    editImg.src = 'images/edit.png';
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.appendChild(editImg);
    taskBtnsContainer.appendChild(editBtn);

    const deleteImg = document.createElement('img');
    deleteImg.classList.add('delete-img');
    deleteImg.src = 'images/delete.png';
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.appendChild(deleteImg);
    taskBtnsContainer.appendChild(deleteBtn);

    taskFormInput.value = "";
    taskFormInput.focus()
};

function updateTask(text, taskId) {
    const task = document.getElementById(taskId);
   
    if (task) {
        taskTitle = task.querySelector(".task-title");
        
        taskTitle.innerText = text
    }

}; 

function toggleElementsDisplay() {
    taskFormContainer.classList.toggle('hide');
    editFormContainer.classList.toggle('hide');
    toDoList.classList.toggle('hide')
};

taskFormSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    var taskFormInputValue = document.querySelector('#task-form-input').value;

    if (taskFormInputValue) {
        if (taskFormInputValue.length <= 30) {
            addTask(taskFormInputValue);

            console.log('Tarefa salva!')
        } else {
            alert('A tarefa deve ter no máximo 30 caracteres.');

            console.log('A tarefa deve ter no máximo 30 caracteres.')
        }
    };
});

document.addEventListener('click', (e) => {
    const targetEl = e.target;
    const taskTarget = targetEl.closest('.task');
    const taskTitleTarget = taskTarget.querySelector('.task-title').innerText;
    const taskIdTargetDisplay = document.querySelector('.task-id-target-display')

    if (targetEl.classList.contains("done-btn") || targetEl.classList.contains("done-img")) {
        taskTarget.classList.toggle('task-done');

        console.log('Tarefa feita')
    };

    if (targetEl.classList.contains("edit-btn") || targetEl.classList.contains("edit-img")) {
        toggleElementsDisplay();

        taskIdTarget = taskTarget.id;

        editFormInput.value = taskTitleTarget;
        taskIdTargetDisplay.innerText = taskIdTarget;

        console.log('Editando')
    };

    if (targetEl.classList.contains("cancel-edit-btn") || targetEl.classList.contains("cancel-img")) {
        toggleElementsDisplay();

        console.log('Edição cancelada')
    };

    if (targetEl.classList.contains("delete-btn") || targetEl.classList.contains("delete-img")) {
        if (taskTarget) {
            taskTarget.remove();

            console.log('Tarefa removida')
        }
    }
});

submitEditBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const editFormInputValue = editFormInput.value;

    if (editFormInputValue) {
        updateTask(editFormInputValue, taskIdTarget)
    };

    toggleElementsDisplay();
    console.log('Edição submetida')
});






