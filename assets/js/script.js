

// Obtém o elemento do ícone do menu e o elemento do menu
const menu_icon = document.querySelector('#menu-icon');
const menu = document.querySelector('#menu');

// Função para ocultar ou exibir a lista de navegação
function openNav() {
    menu.classList.toggle('menu-opened');
}

// Adiciona um ouvinte de evento de clique ao ícone do menu
menu_icon.addEventListener('click', openNav)
