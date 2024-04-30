// Seleciona os elementos do formulário de tarefas e de edição
const taskFormContainer = document.querySelector('#task-form-container'); 
const taskForm = document.querySelector('#task-form');
const taskFormInput = document.querySelector("#task-form-input"); 
const editFormContainer = document.querySelector('#edit-form-container');
const editForm = document.querySelector('#edit-form'); 
const editFormInput = document.querySelector('#edit-form-input'); 
const submitEditBtn = document.querySelector('#submit-edit-btn'); 
const cancelEditBtn = document.querySelector('#cancel-edit-btn'); 
const content = document.querySelector('#content'); 
const taskFormSubmitBtn = document.querySelector('#task-form-submit-btn'); 
const tasksContainer = document.querySelector('#tasks-container');
let taskId; // ID da tarefa alvo
let taskIdCounter = 0; // Contador de IDs de tarefas

// Oculta o formulário de edição inicialmente
editFormContainer.classList.add("hide");

// Adiciona a lista de tarefas ao conteúdo
content.appendChild(tasksContainer);

// Evento de clique no botão de envio do formulário de tarefas
taskForm.addEventListener("submit", e => {
    e.preventDefault();

    if (fieldIsValid(taskFormInput)) {
        addTask(taskFormInput.value)
    }
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
    taskTitle.classList.add('task-title');
    taskTitle.innerHTML = text;

    // Botão para marcar como concluído
    const doneBtn = document.createElement('button');
    doneBtn.classList.add('done-btn');
    doneBtn.innerHTML= '<i class="bi bi-plus-lg"></i>';

    // Botão para editar
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.innerHTML = '<i class="bi bi-plus-lg"></i>';

    // Botão para excluir
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '<i class="bi bi-plus-lg"></i>';

    // Adiciona botões para marcar como concluído, editar e excluir
    const taskBtnsContainer = document.createElement('div');
    taskBtnsContainer.classList.add('task-btns-container');
    taskBtnsContainer.appendChild(doneBtn);
    taskBtnsContainer.appendChild(editBtn);
    taskBtnsContainer.appendChild(deleteBtn);

    // Cria um elemento de tarefa
    const task = document.createElement('div');
    task.id = id;
    task.classList.add('task');
    task.appendChild(taskTitle);
    task.appendChild(taskBtnsContainer);

    tasksContainer.appendChild(task);

    // Limpa o campo de entrada e foca novamente
    taskFormInput.value = text;
    taskFormInput.focus()
};

// Função para atualizar o texto de uma tarefa
function updateTask(text, id) {
    const task = document.getElementById(id);

    if (task) {
        taskTitle = task.querySelector(".task-title");
        taskTitle.innerText = text
    }
};

// Função para alternar a exibição dos elementos entre formulário de tarefas e de edição
function toggleElementsDisplay() {
    taskFormContainer.classList.toggle('hide');
    editFormContainer.classList.toggle('hide');
    tasksContainer.classList.toggle('hide')
};

// Evento de clique em qualquer parte do documento
document.addEventListener('click', (e) => {
    const targetEl = e.target;
    const task = targetEl.closest('.task');

    if (task) {
        taskId = task.id;
        const taskTitleContainerTarget = task.querySelector('.task-title');
        const taskTitleTarget = taskTitleContainerTarget.innerText;

        if (targetEl.classList.contains("done-btn")) {
            // Marca a tarefa como concluída
            task.classList.toggle('task-done');

            console.log('Tarefa feita')
        };

        if (targetEl.classList.contains('edit-btn')) {
            // Exibe o formulário de edição e preenche com o texto da tarefa
            toggleElementsDisplay();
            editFormInput.value = taskTitleTarget;

            console.log('Editando')
        };

        if (targetEl.classList.contains("delete-btn")) {
            if (task) {
                // Remove a tarefa
                task.remove();

                console.log('Tarefa removida')
            }
        }
    }
});

// Evento de clique no botão de envio do formulário de edição
editForm.addEventListener('submit', e => {
    e.preventDefault()

    // Obtém o valor do campo de entrada do formulário de edição
    const editFormInputValue = editFormInput.value;

    if (editFormInputValue) {
        // Atualiza o texto da tarefa
        updateTask(editFormInputValue, taskId)
    };

    // Alterna a exibição dos elementos
    toggleElementsDisplay();

    console.log('Edição submetida')
});

// Evento de clique no botão de cancelar edição
cancelEditBtn.addEventListener('click', () => {
    toggleElementsDisplay();

    console.log('Edição cancelada')
});