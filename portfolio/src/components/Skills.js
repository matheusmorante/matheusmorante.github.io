import React from 'react';
import htmlImg from '../assets/images/programation_language_icons/html.svg';
import cssImg from '../assets/images/programation_language_icons/css.svg';
import jsImg from '../assets/images/programation_language_icons/js.svg';
import reactImg from '../assets/images/programation_language_icons/react.svg';
import expressImg from '../assets/images/programation_language_icons/express.svg';
import nodeImg from '../assets/images/programation_language_icons/node.svg';
import gitImg from '../assets/images/programation_language_icons/git.svg';
import SkillCard from './SkillCard'

export default function Skills() {

    const skills = [
        { name: 'HTML5', img: htmlImg },
        { name: 'CSS3', img: cssImg },
        { name: 'JavaScript', img: jsImg },
        { name: 'React.js', img: reactImg },
        { name: 'Express.js', img: expressImg },
        { name: 'Node.js', img: nodeImg },
        { name: 'Git', img: gitImg },
    ]; 
    
    return (
        <section id="skills-section">
                <h1>Habilidades</h1>
                <div id="skills-container">
                    {skills.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </div>
            </section>
    )
}