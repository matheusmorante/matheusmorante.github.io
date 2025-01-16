import React from 'react';
import linkedinImg from '../assets/images/linkedin.png';
import githubImg from '../assets/images/github.png';
import facebookImg from '../assets/images/facebook.png';

export default function Footer() {

    return (
        <footer>
            <h1>Contato</h1>
            <div>
                <a href="https://github.com/matheusmorante" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinImg} alt="LinkedIn" />
                </a>
                <a href="https://github.com/matheusmorante" target="_blank" rel="noopener noreferrer">
                    <img src={githubImg} alt="Github" />
                </a>
                <a href="https://www.facebook.com/matheusmorante002/" target="_blank" rel="noopener noreferrer">
                    <img src={facebookImg} alt="Facebook" />
                </a>
            </div>
        </footer>
    );
}