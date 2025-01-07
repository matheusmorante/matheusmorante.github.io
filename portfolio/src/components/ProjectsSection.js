import React, { useContext } from 'react';
import ProjectCard from './Project';
import htmlIcon from '../assets/images/programation_language_icons/html.svg';
import cssIcon from '../assets/images/programation_language_icons/css.svg';
import jsIcon from '../assets/images/programation_language_icons/js.svg';
import sassIcon from '../assets/images/programation_language_icons/sass.svg';
import todolistImg from '../assets/images/project/listadetarefa.png';
import calculatorImg from '../assets/images/project/calculadora.png';
import timerImg from '../assets/images/project/cronometro.png';
import ProjectDetails from './ProjectDetails';
import CalculatorDescrition from './projectDescritions/calculator';
import TimerDescrition from './projectDescritions/timer';
import TodoListDescrition from './projectDescritions/todolist';
import { ProjectContext } from '../contexts/ProjectContext';


export default function Projects() {
    const { detailsDisplay } = useContext(ProjectContext);
    const projects = [
        {
            title: 'Calculadora',
            img: calculatorImg,
            languages: [
                { name: 'HTML', icon: htmlIcon },
                { name: 'SASS', icon: sassIcon },
                { name: 'JS', icon: jsIcon },
            ],
            description: <CalculatorDescrition />,
            sourceCodeLink: 'github.com/matheusmorante/calculadora',
            testProjectLink: '../projects/calculadora'

        },
        {
            title: 'Cronômetro',
            img: timerImg,
            languages: [
                { name: 'HTML', icon: htmlIcon },
                { name: 'SASS', icon: sassIcon },
                { name: 'JS', icon: jsIcon },
            ],
            description: <TimerDescrition />,
            sourceCodeLink: 'github.com/matheusmorante/cronometro',
            testProjectLink: 'projects/cronometro'
        },
        {
            title: 'Lista de Tarefas',
            img: todolistImg,
            languages: [
                { name: 'HTML', icon: htmlIcon },
                { name: 'CSS', icon: cssIcon },
                { name: 'JS', icon: jsIcon },
            ],
            description: <TodoListDescrition />,
            sourceCodeLink: 'github.com/matheusmorante/todolist',
            testProjectLink: 'portfolio/projects/lista-de-tarefa'
        }
    ];
    return (
        <section id="projects-section">
            <h1>Projetos</h1>
            <div id="projects-container">
                {projects.map((project, index) => (
                    <>
                        <ProjectCard
                            key={index}
                            index={index}
                            project={project}
                        />

                        {detailsDisplay === index &&
                            <ProjectDetails key={index} project={project} />
                        }

                    </>
                ))}

            </div>
        </section>
    )
}