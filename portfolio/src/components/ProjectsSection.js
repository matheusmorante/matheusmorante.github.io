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
import { ProjectContext } from '../contexts/ProjectContext';


export default function Projects() {
    const { detailsDisplay } = useContext(ProjectContext);
    const projects = [
        {
            title: 'Calculadora',
            img: calculatorImg,
            languages: [
                { name: 'HTML', icon: htmlIcon },
                { name: 'CSS', icon: cssIcon },
                { name: 'JS', icon: jsIcon },
            ],
            description: `Lorem 
            ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra eu velit sed hendrerit. Morbi nec eleifend nisl. Mauris sit amet commodo odio. Donec venenatis volutpat vehicula. Sed vestibulum arcu purus, non aliquet diam pretium vel. Nam sagittis pharetra maximus. Fusce sapien est, accumsan sollicitudin laoreet sit amet, varius sit amet quam. Proin libero nibh, blandit in elit eu, tempus accumsan velit. Aenean imperdiet non augue non tempor. Pellentesque non elit vitae libero vestibulum commodo ut eget arcu. Curabitur imperdiet, turpis vel imperdiet molestie, ligula lectus scelerisque orci, ut malesuada lectus neque sit amet nulla. 
            Etiam eu ante quis ipsum rutrum pharetra nec non massa. 
            Maecenas semper justo eros, in pretium odio cursus vel.
             Aenean sagittis, erat facilisis porta condimentum, ex
              tortor consequat est, vitae porta turpis lorem ut est.
               Vestibulum at nunc id nibh blandit varius.`,
            sourceCodeLink: 'github.com/matheusmorante/calculadora',
            testProjectLink: '../projects/calculadora'

        },
        {
            title: 'Cronômetro',
            img: timerImg,
            languages: [
                { name: 'HTML', icon: htmlIcon },
                { name: 'CSS', icon: cssIcon },
                { name: 'JS', icon: jsIcon },
            ],
            description: `Lorem 
            ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra eu velit sed hendrerit. Morbi nec eleifend nisl. Mauris sit amet commodo odio. Donec venenatis volutpat vehicula. Sed vestibulum arcu purus, non aliquet diam pretium vel. Nam sagittis pharetra maximus. Fusce sapien est, accumsan sollicitudin laoreet sit amet, varius sit amet quam. Proin libero nibh, blandit in elit eu, tempus accumsan velit. Aenean imperdiet non augue non tempor. Pellentesque non elit vitae libero vestibulum commodo ut eget arcu. Curabitur imperdiet, turpis vel imperdiet molestie, ligula lectus scelerisque orci, ut malesuada lectus neque sit amet nulla. 
            Etiam eu ante quis ipsum rutrum pharetra nec non massa. 
            Maecenas semper justo eros, in pretium odio cursus vel.
             Aenean sagittis, erat facilisis porta condimentum, ex
              tortor consequat est, vitae porta turpis lorem ut est.
               Vestibulum at nunc id nibh blandit varius.`,
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
            description: `Lorem 
            ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra eu velit sed hendrerit. Morbi nec eleifend nisl. Mauris sit amet commodo odio. Donec venenatis volutpat vehicula. Sed vestibulum arcu purus, non aliquet diam pretium vel. Nam sagittis pharetra maximus. Fusce sapien est, accumsan sollicitudin laoreet sit amet, varius sit amet quam. Proin libero nibh, blandit in elit eu, tempus accumsan velit. Aenean imperdiet non augue non tempor. Pellentesque non elit vitae libero vestibulum commodo ut eget arcu. Curabitur imperdiet, turpis vel imperdiet molestie, ligula lectus scelerisque orci, ut malesuada lectus neque sit amet nulla. 
            Etiam eu ante quis ipsum rutrum pharetra nec non massa. 
            Maecenas semper justo eros, in pretium odio cursus vel.
             Aenean sagittis, erat facilisis porta condimentum, ex
              tortor consequat est, vitae porta turpis lorem ut est.
               Vestibulum at nunc id nibh blandit varius.`,
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