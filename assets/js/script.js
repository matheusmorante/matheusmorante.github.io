

// Obtém o elemento do ícone do menu e o elemento do menu
const menuIcon = document.querySelector('#menu-icon');
const menu = document.querySelector('#menu');
const header = document.querySelector('#header');
const overlay = document.querySelector('#overlay');
const projectModal = document.querySelector('#project-modal')


// Função para ocultar ou exibir a lista de navegação
function openMenu() {
    overlay.classList.toggle('open-menu-overlay-bg');
    menu.classList.toggle('open-menu');
    menuIcon.classList.toggle('bi-x');
}

function openProjectModal(titleText, imagePath, testUrl, codeUrl, descriptionText) {
    const title = document.querySelector('#modal-title');
    const image = document.querySelector('#project-modal-image')
    const testA = document.querySelector('#test-project-a');
    const codeA = document.querySelector('#see-code-a');
    const description = document.querySelector('#modal-description');

    title.innerText = titleText;
    image.src = imagePath;
    testA.href = testUrl;
    codeA.href = codeUrl;
    description.innerText = descriptionText;

    projectModal.classList.remove('hidden');
    projectModal.classList.add('project-modal-on');
    overlay.classList.add('project-modal-overlay-bg');
}

// Adiciona um ouvinte de evento de clique ao ícone do menu
document.addEventListener('click', e => {
    const targetEl = e.target;

    if (targetEl.id === 'menu-icon' || targetEl.classList.contains('menu-item')) {
        openMenu()
    }

    if (targetEl.classList.contains('projects')) {


        if (targetEl.id === 'calculator-project') {
            const titleText = 'Calculadora';
            const imagePath = 'assets/images/project_card_background/calculadora.png';
            const testUrl = 'projects/calculator.index';
            const codeUrl = 'https://github.com/matheusmorante/matheusmorante.github.io/tree/f41da9c97987320ee64ea2d2008afaa149a117de/projects/calculadora';
            const descriptionText =
                'Esse projeto foi muito importante para a consolidação do meu aprendizado sobre';

            openProjectModal(titleText, imagePath, testUrl, codeUrl, descriptionText)
        }

        if (targetEl.id === 'to-do-list-project') {
            const titleText = 'Lista de tarefa';
            const imagePath = 'assets/images/project_card_background/listadetarefa.png';
            const testUrl = 'projects/lista-de-atividade.index';
            const codeUrl = 'https://github.com/matheusmorante/matheusmorante.github.io/tree/4b6324ee0955443e604b2256cd3b83bde48d465c/projects/lista-de-atividade';
            const descriptionText =
                'Esse projeto foi muito importante para a consolidação do meu aprendizado sobre';

            openProjectModal(titleText, imagePath, testUrl, codeUrl, descriptionText)
        }
    }
});

overlay.addEventListener('click', () => {
    projectModal.classList.add('hidden');
    projectModal.classList.remove('project-modal-on');
    overlay.classList.remove('project-modal-overlay-bg');
});
