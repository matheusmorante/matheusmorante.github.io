import React, {useState} from 'react';
import ProjectCard from './ProjectCard';
import htmlImg from '../assets/images/programation_language_icons/html.svg';
import cssImg from '../assets/images/programation_language_icons/css.svg';
import jsImg from '../assets/images/programation_language_icons/js.svg';
import todolistImg from '../assets/images/project_card_background/listadetarefa.png';
import calculatorImg from '../assets/images/project_card_background/calculadora.png';
import timerImg from '../assets/images/project_card_background/cronometro.png';
import ProjectDetails from './ProjectDetails';


export default function Projects() {
    const [detailsDisplay, setDetailsDisplay] = useState(null);

    const toggleDetailsDisplay = (id) => {
        setDetailsDisplay(detailsDisplay === id);
    }

    const projects = [
        {
            id: 'calculator',
            title: 'Calculadora',
            img: calculatorImg,
            languages: [
                { name: 'HTML', img: htmlImg },
                { name: 'CSS', img: cssImg },
                { name: 'JS', img: jsImg },
            ],
            description: ''
        },
        {
            id: 'timer',
            title: 'Cronômetro',
            img: timerImg,
            languages: [
                { name: 'HTML', img: htmlImg },
                { name: 'CSS', img: cssImg },
                { name: 'JS', img: jsImg },
            ],
            description: ''
        },
        {
            id: 'to-do-list',
            title: 'Lista de Tarefas',
            img: todolistImg,
            languages: [
                { name: 'HTML', img: htmlImg },
                { name: 'CSS', img: cssImg },
                { name: 'JS', img: jsImg },
            ],
            description: ''
        }
    ];
    return (
        <section id="projects-section">
            <h1>Projetos</h1>
            <div id="projects-container">
                {projects.map(( project, index) => (
                    <>
                        <ProjectCard 
                            key={index} 
                            project={project} 
                            toggleDetailsDisplay={toggleDetailsDisplay}
                        />
                        
                        { detailsDisplay && 
                            <ProjectDetails key={index} project={project} />
                        }
                        
                    </>
                ))}

            </div>
        </section>
    )
}