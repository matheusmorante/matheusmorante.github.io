import React from 'react';


export default function SkillCard({ skill }) {
    return (
        <div className="skill">
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
        </div>
    );
}