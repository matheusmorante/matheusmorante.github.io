import React from 'react';
import htmlIcon from '../assets/images/programation_language_icons/html.svg';
import cssIcon from '../assets/images/programation_language_icons/css.svg';
import jsIcon from '../assets/images/programation_language_icons/js.svg';
import reactIcon from '../assets/images/programation_language_icons/react.svg';
import expressIcon from '../assets/images/programation_language_icons/express.svg';
import nodeIcon from '../assets/images/programation_language_icons/node.svg';
import gitIcon from '../assets/images/programation_language_icons/git.svg';
import sassIcon from '../assets/images/programation_language_icons/sass.svg';
import Skill from './Skill'

export default function Skills() {

    const skills = [
        { name: 'HTML5', Icon: htmlIcon },
        { name: 'CSS3', Icon: cssIcon },
        { name: 'JavaScript', Icon: jsIcon },
        { name: 'React.js', Icon: reactIcon },
        { name: 'Express.js', Icon: expressIcon },
        { name: 'Node.js', Icon: nodeIcon },
        { name: 'Git', Icon: gitIcon },
    ]; 
    
    return (
        <section id="skills-section">
                <h1>Habilidades</h1>
                <div id="skills-container">
                    {skills.map((skill) => (
                        <Skill key={skill.name} skill={skill} />
                    ))}
                </div>
            </section>
    )
}