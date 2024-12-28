import React from 'react';

export default function ProjectCard({ project }) {
    const languages = project.languages;
    return (
        <div id={`${project.id}-project`} className="project">
            <img src={project.img} alt={project.title} className="background-project" />
            <div>
                <h1>{project.title}</h1>
                {languages.map((language) => (
                    <img
                        key={language.name}
                        src={language.img}
                        alt={language.name}
                        className="program-lang-img"
                    />
                ))}
            </div>
        </div>
    );
}