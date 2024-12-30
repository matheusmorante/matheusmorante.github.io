import React from 'react';
import htmlIcon from '../assets/images/programation_language_icons/html.svg';
import cssIcon from '../assets/images/programation_language_icons/css.svg';
import jsIcon from '../assets/images/programation_language_icons/js.svg';
import reactIcon from '../assets/images/programation_language_icons/react.svg';
import expressIcon from '../assets/images/programation_language_icons/express.svg';
import nodeIcon from '../assets/images/programation_language_icons/node.svg';
import gitIcon from '../assets/images/programation_language_icons/git.svg';
import sassIcon from '../assets/images/programation_language_icons/sass.svg';
import bootstrapIcon from '../assets/images/programation_language_icons/bootstrap.svg';
import Skill from './Skill'

export default function Skills() {

    const skills = [
        { name: 'HTML5', icon: htmlIcon },
        { name: 'CSS3', icon: cssIcon },
        { name: 'JavaScript', icon: jsIcon },
        { name: 'React.js', icon: reactIcon },
        { name: 'Express.js', icon: expressIcon },
        { name: 'SASS', icon: sassIcon },
        { name: 'Git', icon: gitIcon },
        { name: 'Bootstrap', icon: bootstrapIcon }
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