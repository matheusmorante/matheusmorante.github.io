import React, { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';

export default function ProjectDetails({ project }) {
    const { toggleDetailsDisplay } = useContext(ProjectContext);

    
    return (
        <div className='overlay'>
            <div className='card project-details'>
                <div className="card-header d-flex bg-transparent border-success">
                    <i onClick={() => toggleDetailsDisplay(null)} className='bi bi-x-lg ms-auto' alt='close' />

                </div>
                <img src={project.img} className="card-img-top" alt={project.title} />
                <div className="card-body">
                    <h1 className="card-title">{project.title}</h1>
                    <p className="card-text">{project.description}</p>
                    <div id='actions-btn'>
                        <a href={project.sourceCodeLink} className='btn btn-primary m-2'>Ver codigo fonte</a>
                        <a href={project.testProjectLink} className='btn btn-primary m-2'>Ver em ação</a>
                    </div>
                </div>
            </div>
        </div >
    )

}