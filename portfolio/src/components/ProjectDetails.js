import React from 'react';

export default function ProjectDetails({ project }) {

    return (
        <div className='card project-details'>
            <img src={project.img} className="card-img-top" />
            <div className="card-body">
                <h1 className="card-title">{project.title}</h1>
            </div>

            <p className="card-text">{project.description}</p>
        </div>
    )

}