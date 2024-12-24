import React from 'react';

export default function header() {

    function toogle(){
        const menuList = document.querySelector('#menu-list');
        menuList.classList.toggle('hidden')


    }
    return (
        <>
            <header>
                <h1>Portfólio</h1>
                <nav>
                    <i id="menu-btn" onClick={toogle} class="bi bi-list" alt="botão de menu de navegação"></i>

                    <ul id='menu-list'>
                        <li><a href="#"  target="_blank" rel="noopener noreferrer">Inicio</a></li>
                        <li><a href="#"  target="_blank" rel="noopener noreferrer">Habilidades</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">Contato</a></li>

                    </ul>
                </nav>
            </header>
        </>
    )
}