import React, { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
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
                ></i>

                {menuOpen && (
                    <div className="overlay">
                        <ul id="menu-list" className="menu-list">
                            <li>
                                <a onClick={toggleMenu} href="#home">Inicio</a>
                            </li>
                            <li>
                                <a onClick={toggleMenu} href="#skills-section">Habilidades</a>
                            </li>
                            <li>
                                <a onClick={toggleMenu} href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}