import React from 'react';
import perfilImg from '../assets/images/perfil.jpg';
import linkedinImg from '../assets/images/linkedin.png';
import whatsappImg from '../assets/images/whatsapp.png';
import facebookImg from '../assets/images/facebook.png';
import htmlImg from '../assets/images/programation_language_icons/html.svg';
import cssImg from '../assets/images/programation_language_icons/css.svg';
import jsImg from '../assets/images/programation_language_icons/js.svg';

export default function Home() {
    
    return (
        <>
            <section id="home">
                {/* Apresentação pessoal */}
                <div id="presentation">
                    <div id="heading">
                        Olá, meu nome é <span className="apresentation-strings">Matheus Morante.</span>
                    </div>
                    <p id="description">
                        Sou um estudante de programação se capacitando para se tornar um Desenvolvedor Full-Stack
                    </p>
                    {/* Botão para baixar o currículo */}
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
                {/* Imagem de perfil */}
                <img src={perfilImg} id="img-perfil" alt="Perfil" />
                <h1>Sobre mim</h1>
                <p>
                    Sempre fui apaixonado pela liberdade que a tecnologia nos proporciona para resolver os mais diversos
                    problemas. Foi em 2022 que comecei a estudar a área e, desde então, tenho trabalhado continuamente para
                    aprimorar minhas habilidades em programação. Estou entusiasmado em continuar aprendendo e crescendo em um
                    campo que está em constante evolução, e estou em busca de minha primeira oportunidade de trabalho para
                    aplicar e expandir meus conhecimentos.
                </p>
            </section>

            <section id="skills-section">
                <h1>Habilidades</h1>
                <div id="skills-container">
                    {[
                        { title: 'HTML', percentage: 80 },
                        { title: 'CSS', percentage: 80 },
                        { title: 'Javascript', percentage: 70 },
                    ].map((skill) => (
                        <div key={skill.title} className="skills">
                            <div className="skill-headers">
                                <div className="title">{skill.title}</div>
                                <div>{skill.percentage}%</div>
                            </div>
                            <div className="progress" role="progressbar">
                                <div className="progress-bar" style={{ width: `${skill.percentage}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="projects-section">
                <h1>Projetos</h1>
                <div id="projects-container">
                    {[
                        { id: 'calculator', title: 'Calculadora' },
                        { id: 'timer', title: 'Cronômetro' },
                        { id: 'to-do-list', title: 'Lista de Tarefas' },
                    ].map((project) => (
                        <div key={project.id} id={`${project.id}-project`} className="projects">
                            <div>
                                <h1>{project.title}</h1>
                                <img src={htmlImg} alt="HTML" />
                                <img src={cssImg} alt="CSS" />
                                <img src={jsImg} alt="JS" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

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
