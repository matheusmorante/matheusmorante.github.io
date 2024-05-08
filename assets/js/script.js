// Obtém o elemento do ícone do menu e o elemento do menu
var menu_icon = document.getElementById('menu-icon');
var menu = document.getElementById('menu');

// Função para ocultar ou exibir a lista de navegação
function hiddenNavList() {

    menu.classList.toggle('menu-opened')
 
}

// Adiciona um ouvinte de evento de clique ao ícone do menu
menu_icon.addEventListener('click', hiddenNavList)
