import React from 'react';
import perfilImg from '../assets/images/perfil.jpg';
import linkedinImg from '../assets/images/linkedin.png';
import whatsappImg from '../assets/images/whatsapp.png';
import facebookImg from '../assets/images/facebook.png';
import Projects from './Projects';
import Skills from './Skills';


export default function Home() {
   

    return (
        <>
            <section id="home">
                <div id="presentation">
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
            </section>

            <section id="about-me-section">
                <img src={perfilImg} id="img-perfil" alt="Perfil" />
                <h1>Sobre mim</h1>
                <p>
                    Sempre fui apaixonado pela liberdade que a tecnologia nos proporciona para resolver os mais diversos
                    problemas. Foi em 2022 que comecei a estudar a área e, desde então, tenho trabalhado continuamente para
                    aprimorar minhas habilidades em programação.
                </p>
            </section>

            <Skills />

            <Projects />

            <section id="contacts">
                <h1>Contato</h1>
                <div>
                    <a href="https://github.com/matheusmorante" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinImg} alt="LinkedIn" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5541997493547" target="_blank" rel="noopener noreferrer">
                        <img src={whatsappImg} alt="WhatsApp" />
                    </a>
                    <a href="https://www.facebook.com/matheusmorante002/" target="_blank" rel="noopener noreferrer">
                        <img src={facebookImg} alt="Facebook" />
                    </a>
                </div>
            </section>
        </>
    );
}
