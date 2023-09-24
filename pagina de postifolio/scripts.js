var menu_icon = document.getElementById('menu-icon');
var menu = document.getElementById('menu');

function hiddenNavList() {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none'
        console.log('Lista de navegação escondida')
    } 
    else {
        menu.style.display = 'flex'
        console.log('Lista de navegação exibida')
    }
}

menu_icon.addEventListener('click', hiddenNavList)

