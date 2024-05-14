

// Obtém o elemento do ícone do menu e o elemento do menu
const menuIcon = document.querySelector('#menu-icon');
const menu = document.querySelector('#menu');
const header = document.querySelector('#header');
const overlay = document.querySelector('#overlay');
const projectModal = document.querySelector('#project-modal')


// Função para ocultar ou exibir a lista de navegação
function openMenu() {
    overlay.classList.toggle('overlay-bg');
    document.body.classList.toggle('overflowHidden')
    menu.classList.toggle('open-menu');
    menuIcon.classList.toggle('bi-x');
}

// Adiciona um ouvinte de evento de clique ao ícone do menu
document.addEventListener('click', e => {
    const targetEl = e.target;

    if (targetEl.id === 'menu-icon' || targetEl.classList.contains('menu-item')) {
        openMenu()
    }

    if (targetEl.classList.contains('projects')) {
        const title = targetEl.querySelector('#modal-title');
        const image = targetEl.querySelector('project-modal-image')
        const testUrl = targetEl.querySelector('test-project');
        const codeUrl = targetEl.querySelector('see-code');
        const description = targetEl.querySelector('description');

        if (targetEl.id === 'calculator-project') {
            title.innerText = 'Calculadora';
            image.src = 'assets\images\project_card_background\calculadora.png';
            testUrl.href = 'projects/calculator.index';
            codeUrl.href = 'https://github.com/matheusmorante/matheusmorante.github.io/tree/f41da9c97987320ee64ea2d2008afaa149a117de/projects/calculadora';
            description.innerText =
                'Esse projeto foi muito importante para a consolidação do meu aprendizado sobre'
        }
    }
})
