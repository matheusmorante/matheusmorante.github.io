var menu_icon = document.getElementById('menu-icon');
var menu_opened = document.getElementById('menu-opened');

function hiddenNavList() {
    if (menu_opened.style.display === 'flex') {
        menu_opened.style.display = 'none'
        console.log('Lista de navegação escondida')
    } 
    else {
        menu_opened.style.display = 'flex'
        console.log('Lista de navegação exibida')
    }
}

menu_icon.addEventListener('click', hiddenNavList)

