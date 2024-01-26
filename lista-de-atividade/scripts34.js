const todoFormContainer = document.querySelector('#todo-form-container');
const todoFormInput = document.querySelector("#todo-form-input");
const editFormContainer = document.querySelector('#edit-form-container');
const editForm = document.querySelector('#edit-form');
const editFormInput = document.querySelector('#edit-form-input');
const submitEditBtn = document.querySelector('#submit-edit-btn');
const todoContainer = document.querySelector('#todo-container');
const todoFormSubmitBtn = document.querySelector('#todo-form-submit-btn');
const todo = document.querySelector(".todo-item");
let todoId = 0;
let OldEditInputValue;

editFormContainer.classList.add("hide");

const todoList = document.createElement('div');
todoList.classList.add('todo-list');
todoContainer.appendChild(todoList);

function addTodo(text) {
    const todoItem = document.createElement('div');
    todoItem.classList.add("todo-item");
    todoItem.dataset.todoId = todoId++
    todoList.appendChild(todoItem);

    const todoTitle = document.createElement('div');
    todoTitle.classList.add('todo-title');
    todoTitle.innerHTML = text;
    todoItem.appendChild(todoTitle);

    const todoBtnsContainer = document.createElement('div');
    todoBtnsContainer.classList.add('todo-btns-container');
    todoItem.appendChild(todoBtnsContainer);

    const doneImg = document.createElement('img');
    doneImg.classList.add('done-img');
    doneImg.src = 'images/done.png';
    const doneBtn = document.createElement('button');
    doneBtn.classList.add('done-btn');
    doneBtn.appendChild(doneImg);
    todoBtnsContainer.appendChild(doneBtn);

    const editImg = document.createElement('img');
    editImg.classList.add('edit-img');
    editImg.src = 'images/edit.png';
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.appendChild(editImg);
    todoBtnsContainer.appendChild(editBtn);

    const deleteImg = document.createElement('img');
    deleteImg.classList.add('delete-img');
    deleteImg.src = 'images/delete.png';
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.appendChild(deleteImg);
    todoBtnsContainer.appendChild(deleteBtn);

    todoFormInput.value = "";
    todoFormInput.focus()
};

function updateTodo(id, text) {
    const todos = document.querySelectorAll(".todo-item");
    const todo = document.querySelector(`[data-todo-id="${id}"]`);

    if (todo) {
        let todoTitle = todo.querySelector(".todo-title");
        todoTitle.innerText = text;
    }
};

function toggleElementsDisplay() {
    todoFormContainer.classList.toggle('hide');
    editFormContainer.classList.toggle('hide');
    todoList.classList.toggle('hide')
};

todoFormSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    var todoFormInputValue = document.querySelector('#todo-form-input').value;

    if (todoFormInputValue) {
        if (todoFormInputValue.length <= 30) {
            addTodo(todoFormInputValue);

            console.log('Tarefa salva!')
        } else {
            alert('A tarefa deve ter no máximo 30 caracteres.');

            console.log('A tarefa deve ter no máximo 30 caracteres.')
        }
    }; 4
});

document.addEventListener('click', (e) => {
    const targetEl = e.target;
    const todoItemTargetEl = targetEl.closest('.todo-item');
    let todoTitleTargetEl;

    if (todoItemTargetEl && todoItemTargetEl.querySelector('.todo-title')) {
        todoTitleTargetEl = todoItemTargetEl.querySelector('.todo-title').innerText
    };

    if (targetEl.classList.contains("done-btn") || targetEl.classList.contains("done-img")) {
        todoItemTargetEl.classList.toggle('todo-item-done');

        console.log('Tarefa feita')
    };

    if (targetEl.classList.contains("edit-btn") || targetEl.classList.contains("edit-img")) {
        toggleElementsDisplay();

        if (todoItemTargetEl) {
            const todoId = todoItemTargetEl.dataset.todoId;
            editFormInput.value = todoTitleTargetEl;
            OldEditInputValue = todoTitleTargetEl;

            console.log(`Editando tarefa`);
        }
    };

    if (targetEl.classList.contains("cancel-edit-btn") || targetEl.classList.contains("cancel-img")) {
        toggleElementsDisplay();

        console.log('Edição cancelada')
    };

    if (targetEl.classList.contains("delete-btn") || targetEl.classList.contains("delete-img")) {
        if (todoItemTargetEl) {
            todoItemTargetEl.remove();

            console.log('Tarefa removida')
        }
    }
});

submitEditBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const editFormInputValue = editFormInput.value;
    const todoItemTargetEl = document.querySelector('.todo-item-editing'); // Adicionado

    if (editFormInputValue && todoItemTargetEl) { // Modificado
        const todoId = todoItemTargetEl.dataset.todoId;
        updateTodo(todoId, editFormInputValue);
    }

    toggleElementsDisplay()

    console.log('Edição submetida')
})




