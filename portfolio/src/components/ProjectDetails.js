import React, { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';

export default function ProjectDetails({ project }) {
    const { toggleDetailsDisplay } = useContext(ProjectContext);

    
    return (
        <div className='overlay active'>
            <div className='project-details'>
                <div id='heading'>
                    <i onClick={() => toggleDetailsDisplay(null)} className='bi bi-x-lg ms-auto' alt='close' />
                </div>
                <img src={project.img} alt={project.title} />
                <div>
                    <h1>{project.title}</h1>
                    {project.description}
                    <div id='actions-btn'>
                        <a href={project.sourceCodeLink} className='btn btn-primary m-2'>Ver codigo fonte</a>
                        <a href={project.testProjectLink} className='btn btn-primary m-2'>Ver em ação</a>
                    </div>
                </div>
            </div>
        </div >
    )

}