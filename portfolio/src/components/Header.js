import React, { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header>
            <h1>Portfólio</h1>
            <nav>
                <i
                    id="menu-btn"
                    onClick={toggleMenu}
                    className={`bi bi-list ${menuOpen ? 'active' : ''}`}
                    aria-label="botão de menu de navegação"
                    aria-expanded={menuOpen}
                ></i>

                <div className={`overlay ${menuOpen ? 'active' : ''}`}></div>
                <ul className={`menu-list ${menuOpen ? 'active' : ''}`}>
                    <li>
                        <a onClick={closeMenu} href="#home">Inicio</a>
                    </li>
                    <li>
                        <a onClick={closeMenu} href="#skills-section">Habilidades</a>
                    </li>
                    <li>
                        <a onClick={closeMenu} href="#contact">Contato</a>
                    </li>
                </ul>


            </nav>
        </header>
    );
}