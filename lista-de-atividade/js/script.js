// Seleciona os elementos do formulário de tarefas e de edição
const taskFormContainer = document.querySelector('#task-form-container'); // Container do formulário de tarefas
const taskFormInput = document.querySelector("#task-form-input"); // Campo de entrada de texto do formulário de tarefas
const editFormContainer = document.querySelector('#edit-form-container'); // Container do formulário de edição
const editForm = document.querySelector('#edit-form'); // Formulário de edição
const editFormInput = document.querySelector('#edit-form-input'); // Campo de entrada de texto do formulário de edição
const submitEditBtn = document.querySelector('#submit-edit-btn'); // Botão de envio do formulário de edição
const cancelEditBtn = document.querySelector('#cancel-edit-btn'); // Botão de cancelar edição
const content = document.querySelector('#content'); // Conteúdo principal
const taskFormSubmitBtn = document.querySelector('#task-form-submit-btn'); // Botão de envio do formulário de tarefas
const toDoList = document.getElementById('to-do-list'); // Lista de tarefas
let taskIdTarget; // ID da tarefa alvo
let taskIdCounter = 0; // Contador de IDs de tarefas

// Oculta o formulário de edição inicialmente
editFormContainer.classList.add("hide");

// Adiciona a lista de tarefas ao conteúdo
content.appendChild(toDoList);

// Função para adicionar uma nova tarefa
function addTask(text) {
    const id = taskIdCounter;
    taskIdCounter++;

    // Cria um elemento de tarefa
    const task = document.createElement('div');
    task.id = id;
    task.classList.add('task');
    toDoList.appendChild(task);

    // Adiciona o título da tarefa
    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task-title');
    taskTitle.innerHTML = text;
    task.appendChild(taskTitle);

    // Adiciona botões para marcar como concluído, editar e excluir
    const taskBtnsContainer = document.createElement('div');
    taskBtnsContainer.classList.add('task-btns-container');
    task.appendChild(taskBtnsContainer);

    // Botão para marcar como concluído
    const doneImg = document.createElement('img');
    doneImg.classList.add('done-img');
    doneImg.src = 'images/done.png';
    const doneBtn = document.createElement('button');
    doneBtn.classList.add('done-btn');
    doneBtn.appendChild(doneImg);
    taskBtnsContainer.appendChild(doneBtn);

    // Botão para editar
    const editImg = document.createElement('img');
    editImg.classList.add('edit-img');
    editImg.src = 'images/edit.png';
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.appendChild(editImg);
    taskBtnsContainer.appendChild(editBtn);

    // Botão para excluir
    const deleteImg = document.createElement('img');
    deleteImg.classList.add('delete-img');
    deleteImg.src = 'images/delete.png';
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.appendChild(deleteImg);
    taskBtnsContainer.appendChild(deleteBtn);

    // Limpa o campo de entrada e foca novamente
    taskFormInput.value = "";
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
    toDoList.classList.toggle('hide')
};

// Evento de clique no botão de envio do formulário de tarefas
taskFormSubmitBtn.addEventListener("click", e => {
    e.preventDefault();

    // Obtém o valor do campo de entrada do formulário de tarefas
    var taskFormInputValue = document.querySelector('#task-form-input').value;

    if (taskFormInputValue == "") {
        // Alerta se o campo estiver vazio
        alert('A tarefa não pode estar vazia');

        console.log('A tarefa não pode estar vazia')
    } else {
        if (taskFormInputValue.length <= 50) {
            // Adiciona a tarefa se estiver dentro do limite de caracteres
            addTask(taskFormInputValue);

            console.log('Tarefa salva!')
        } else {
            // Alerta se a tarefa ultrapassar o limite de caracteres
            alert('A tarefa deve ter no máximo 50 caracteres.');

            console.log('A tarefa deve ter no máximo 50 caracteres.')
        }
    }
});

// Evento de clique em qualquer parte do documento
document.addEventListener('click', (e) => {
    const targetEl = e.target;
    const taskTarget = targetEl.closest('.task');
    
    if (taskTarget) {
        taskIdTarget = taskTarget.id;
        const taskTitleContainerTarget = taskTarget.querySelector('.task-title');
        const taskTitleTarget = taskTitleContainerTarget.innerText;

        if (targetEl.classList.contains("done-btn") || targetEl.classList.contains("done-img")) {
            // Marca a tarefa como concluída
            taskTarget.classList.toggle('task-done');

            console.log('Tarefa feita')
        };

        if (targetEl.classList.contains('edit-btn') || targetEl.classList.contains("edit-img")) {
            // Exibe o formulário de edição e preenche com o texto da tarefa
            toggleElementsDisplay();
            editFormInput.value = taskTitleTarget;

            console.log('Editando')
        };

        if (targetEl.classList.contains("delete-btn") || targetEl.classList.contains("delete-img")) {
            if (taskTarget) {
                // Remove a tarefa
                taskTarget.remove();

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
        updateTask(editFormInputValue, taskIdTarget)
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