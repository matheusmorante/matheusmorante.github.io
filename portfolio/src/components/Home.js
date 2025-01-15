import React from 'react';
import perfilImg from '../assets/images/perfil.jpg';

import Projects from './ProjectsSection';
import Skills from './SkillsSection';
import Contact from './ContactSection';


export default function Home() {
    return (
        <>
            <section id="presentation">
                <div>

                    <div id="heading">
                        Olá, meu nome é <span className="apresentation-strings">Matheus Morante.</span>
                    </div>
                    <p id="description">
                        Sou um estudante de programação se capacitando para se tornar um Desenvolvedor Full-Stack.
                    </p>
                    <a
                        id="cv"
                        href="https://drive.google.com/file/d/1JgdsenjWsEzuyq4UCBcbFFYCREapuyw1/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Baixar CV
                    </a>
                </div>
                <img src={perfilImg} id="big-perfil-img"  class="perfil-img" alt="Perfil" />
            </section>

            <section id="about-me-section">
                <img src={perfilImg} id="small-perfil-img" class="perfil-img" alt="Perfil" />
                <h1>Sobre mim</h1>
                <p>
                    Sempre fui apaixonado pela liberdade que a tecnologia nos proporciona para resolver os mais diversos
                    problemas. Foi em 2022 que comecei a estudar a área e, desde então, tenho trabalhado continuamente para
                    aprimorar minhas habilidades em programação.
                </p>
            </section>

            <Skills />

            <Projects />

            <Contact />
        </>
    );
}
