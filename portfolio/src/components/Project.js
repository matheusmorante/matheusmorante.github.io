import React, { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext'

export default function ProjectItem({project, index}) {
    const { toggleDetailsDisplay } = useContext(ProjectContext);
    const languages = project.languages;
    return (
        <div id={`${project.id}-project`} className="project" onClick={() => toggleDetailsDisplay(index)}>
            <img src={project.img} alt={project.title} className="background-project" />
            <div>
                <h1>{project.title}</h1>
                {languages.map((language) => (
                    <img
                        key={language.name}
                        src={language.icon}
                        alt={language.name}
                        className="program-lang-img"
                    />
                ))}
            </div>
        </div>
    );
}