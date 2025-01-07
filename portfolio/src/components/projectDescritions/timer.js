import React from 'react';

export default function TimerDescrition() {
    return (
        <div className='project-description'>
            <p>Este projeto consiste em um cronômetro interativo desenvolvido com HTML, CSS (SASS) e JavaScript, projetado para ser responsivo e funcional em dispositivos móveis e desktops. O cronômetro permite aos usuários realizar as seguintes operações:</p>
            <ul>
                <li>Iniciar: Começa a contagem do tempo no formato hh:mm:ss.</li>
                <li>Pausar: Interrompe a contagem sem zerar o tempo.</li>
                <li>Resetar: Zera o cronômetro e reinicia a contagem.</li>
            </ul>
            <p>O design é moderno e utiliza ícones da biblioteca Bootstrap Icons para os botões de controle, garantindo uma experiência intuitiva. O cronômetro é ideal para projetos que exigem contagem de tempo, como acompanhamento de tarefas ou cronometragem de atividades.</p>
            <h3>Funcionalidades Técnicas:</h3>
            <h4>Responsividade:</h4>
            <ul>
                <li>Utiliza consultas de mídia (<code>@media</code>) para ajustar o tamanho dos elementos em diferentes tamanhos de tela.</li>
                <li>O layout se adapta perfeitamente a dispositivos móveis e desktops.</li>
            </ul>
            <h4>Estilização:</h4>
            <ul>
                <li>Implementação de SASS para criar mixins reutilizáveis, como bordas dinâmicas.</li>
                <li>Estilo visual atrativo com botões arredondados que mudam de cor e ganham um efeito de pressão ao serem clicados.</li>
            </ul>
            <h4>Lógica de Contagem:</h4>
            <ul>
                <li>Usa a função <code>setInterval</code> para atualizar o display do cronômetro a cada segundo.</li>
                <li>Inclui validações para incrementar corretamente horas, minutos e segundos.</li>
            </ul>
            <h4>Componentes Reutilizáveis:</h4>
            <ul>
                <li>A função <code>Zero()</code> adiciona um zero à esquerda em números menores que 10, garantindo consistência no display.</li>
                <li>Separação de funções para cada operação do cronômetro (início, pausa e reset).</li>
            </ul>
            <h4>Bibliotecas Utilizadas:</h4>
            <ul>
                <li>Bootstrap Icons: Ícones dos botões.</li>
                <li>SASS: Modularidade no CSS.</li>
            </ul>
            <h4>Tecnologias Utilizadas:</h4>
            <ul>
                <li>HTML5: Estrutura semântica da aplicação.</li>
                <li>CSS3/SASS: Estilização moderna com foco em responsividade.</li>
                <li>JavaScript: Controle de funcionalidades dinâmicas do cronômetro.</li>
            </ul>
        </ div>
    );
}