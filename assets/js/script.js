

// Obtém o elemento do ícone do menu e o elemento do menu
const menuIcon = document.querySelector('#menu-icon');
const menu = document.querySelector('#menu');
const header = document.querySelector('#header');

// Função para ocultar ou exibir a lista de navegação
function openMenu() {
    menu.classList.toggle('menu-opened');
    menuIcon.classList.toggle('bi-x');
    document.body.classList.toggle('overflowHidden')
}


// Adiciona um ouvinte de evento de clique ao ícone do menu
document.addEventListener('click', (e) => {
    const targetEL = e.target;

    if (targetEL.id === 'menu-icon') {
        openMenu()
     }

    if (targetEL.classList.contains('menu-item')) {
       openMenu()
    }
})


