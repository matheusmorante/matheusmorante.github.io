// Seleciona os elementos do formulário de tarefas e de edição
const taskFormContainer = document.querySelector('#task-form-container');
const taskFormInput = document.querySelector("#task-form-input");
const editFormContainer = document.querySelector('#edit-form-container');
const editFormInput = document.querySelector('#edit-form-input');
const submitEditBtn = document.querySelector('#submit-edit-btn');
const cancelEditBtn = document.querySelector('#cancel-edit-btn');
const taskFormSubmitBtn = document.querySelector('#task-form-submit-btn');
const tasksContainer = document.querySelector('#tasks-container');
const overlay = document.querySelector('#overlay')
let taskId; // ID da tarefa alvo
let taskIdCounter = 0; // Contador de IDs de tarefas

document.addEventListener('submit', e => {
    const targetEl = e.target;
    if (targetEl.id === 'task-form') {
        e.preventDefault();

        if (fieldIsValid(taskFormInput)) {
            addTask(taskFormInput.value)
        }
    }

    if (targetEl.id === 'edit-form') {
        e.preventDefault()

        // Obtém o valor do campo de entrada do formulário de edição
        const editFormInputValue = editFormInput.value;

        if (editFormInputValue) {
            // Atualiza o texto da tarefa
            updateTask(editFormInputValue, taskId);

            toggleEditForm();

            console.log('Edição submetida');
        };
    }
})

// Evento de clique em qualquer parte do documento
document.addEventListener('click', e => {
    const targetEl = e.target;
    const task = targetEl.closest('.tasks');

    if (targetEl.classList.contains("done-btns") ||
        targetEl.closest('.done-btns')) {
        // Marca a tarefa como concluída
        task.classList.toggle('task-done');

        console.log('Tarefa feita');
    };

    if (targetEl.classList.contains('edit-btns') ||
        targetEl.closest('.edit-btns')) {
        toggleEditForm()
        // Exibe o formulário de edição e preenche com o texto da tarefa
        const taskTitle = task.querySelector('.task-titles');

        editFormInput.value = taskTitle.innerText;
        taskId = task.id;

        console.log('Editando')
    };

    if (targetEl.id === 'cancel-edit-btn') {
        toggleEditForm();

        console.log('Edição cancelada');
    };

    if (targetEl.classList.contains("delete-btns") ||
        targetEl.closest('.delete-btns')) {
        // Remove a tarefa
        task.remove();

        console.log('Tarefa removida');
    };
});

function fieldIsValid(field) {
    if (field.value == "") {
        console.log('A tarefa não pode estar vazia')

        alert('A tarefa não pode estar vazia');

        return false;
    }

    if (field.length > 50) {
        console.log('A tarefa deve ter no máximo 50 caracteres.')

        alert('A tarefa deve ter no máximo 50 caracteres.');

        return false;
    }

    return true;
}

// Função para adicionar uma nova tarefa
function addTask(text) {
    const id = taskIdCounter++;

    // Adiciona o título da tarefa
    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task-titles');
    taskTitle.innerHTML = text;

    // Botão para marcar como concluído
    const doneBtn = document.createElement('button');
    doneBtn.classList.add('done-btns');
    doneBtn.innerHTML = '<i class="bi bi-check-lg"></i>';

    // Botão para editar
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btns');
    editBtn.innerHTML = '<i class="bi bi-pencil-square">';

    // Botão para excluir
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btns');
    deleteBtn.innerHTML = '<i class="bi bi-trash">';

    // Adiciona botões para marcar como concluído, editar e excluir
    const taskBtnsContainer = document.createElement('div');
    taskBtnsContainer.classList.add('task-btns-container');
    taskBtnsContainer.appendChild(doneBtn);
    taskBtnsContainer.appendChild(editBtn);
    taskBtnsContainer.appendChild(deleteBtn);

    // Cria um elemento de tarefa
    const task = document.createElement('div');
    task.id = `task-${id}`;
    task.classList.add('tasks');
    task.appendChild(taskTitle);
    task.appendChild(taskBtnsContainer);

    tasksContainer.appendChild(task);

    // Limpa o campo de entrada e foca novamente
    taskFormInput.value = text;
    taskFormInput.focus()
};

function createPagenation() {

    const tasks = document.querySelectorAll('tasks')
    
}

// Função para atualizar o texto de uma tarefa
function updateTask(text, id) {
    const task = document.getElementById(id);

    taskTitle = task.querySelector(".task-titles");
    taskTitle.innerText = text;
};

function toggleEditForm() {
    overlay.classList.toggle('hide');
    editFormContainer.classList.toggle('hide');
};


