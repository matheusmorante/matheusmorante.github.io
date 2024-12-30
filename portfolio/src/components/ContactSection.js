import React from 'react';
import linkedinImg from '../assets/images/linkedin.png';
import whatsappImg from '../assets/images/whatsapp.png';
import facebookImg from '../assets/images/facebook.png';

export default function Contact() {

    return (
        <section id="contacts">
            <h1>Contato</h1>
            <div>
                <a href="https://github.com/matheusmorante" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinImg} alt="LinkedIn" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5541997493547" target="_blank" rel="noopener noreferrer">
                    <img src={whatsappImg} alt="WhatsApp" />
                </a>
                <a href="https://www.facebook.com/matheusmorante002/" target="_blank" rel="noopener noreferrer">
                    <img src={facebookImg} alt="Facebook" />
                </a>
            </div>
        </section>
    );
}