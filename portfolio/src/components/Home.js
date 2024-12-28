import React from 'react';
import perfilImg from '../assets/images/perfil.jpg';
import linkedinImg from '../assets/images/linkedin.png';
import whatsappImg from '../assets/images/whatsapp.png';
import facebookImg from '../assets/images/facebook.png';
import htmlImg from '../assets/images/programation_language_icons/html.svg';
import cssImg from '../assets/images/programation_language_icons/css.svg';
import jsImg from '../assets/images/programation_language_icons/js.svg';
import reactImg from '../assets/images/programation_language_icons/react.svg';
import expressImg from '../assets/images/programation_language_icons/express.svg';
import nodeImg from '../assets/images/programation_language_icons/node.svg';
import gitImg from '../assets/images/programation_language_icons/git.svg';
import todolistImg from '../assets/images/project_card_background/listadetarefa.png';
import calculatorImg from '../assets/images/project_card_background/calculadora.png';
import timerImg from '../assets/images/project_card_background/cronometro.png';
import SkillCard from './SkillCard';
import ProjectCard from './ProjectCard';

export default function Home() {
    const skills = [
        { name: 'HTML5', img: htmlImg },
        { name: 'CSS3', img: cssImg },
        { name: 'JavaScript', img: jsImg },
        { name: 'React.js', img: reactImg },
        { name: 'Express.js', img: expressImg },
        { name: 'Node.js', img: nodeImg },
        { name: 'Git', img: gitImg },
    ];

    const projects = [
        { 
            id: 'calculator', 
            title: 'Calculadora', 
            img: calculatorImg, 
            languages: [
                {name: 'HTML', img: htmlImg},
                {name: 'CSS', img: cssImg},
                {name: 'JS', img: jsImg},
            ]
        },
        { 
            id: 'timer', 
            title: 'Cronômetro', 
            img: timerImg, 
            languages: [
                {name: 'HTML', img: htmlImg},
                {name: 'CSS', img: cssImg},
                {name: 'JS', img: jsImg},
            ]
        },
        { 
            id: 'to-do-list', 
            title: 'Lista de Tarefas', 
            img: todolistImg, 
            languages: [
                {name: 'HTML', img: htmlImg},
                {name: 'CSS', img: cssImg},
                {name: 'JS', img: jsImg},
            ]
        }
    ];

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

            <section id="skills-section">
                <h1>Habilidades</h1>
                <div id="skills-container">
                    {skills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </div>
            </section>

            <section id="projects-section">
                <h1>Projetos</h1>
                <div id="projects-container">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
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
