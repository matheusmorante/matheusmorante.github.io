// Obtém o elemento com o ID "display" da página HTML
var display = document.getElementById('display');

// Função para inserir números e operadores no visor da calculadora
function Insert(num) {
    // Verifica se o comprimento atual do conteúdo no visor é menor ou igual a 15 caracteres
    if (display.innerHTML.length <= 15) {
        // Adiciona o número ou operador ao conteúdo do visor
        display.innerHTML += num;
    }
}

// Função para limpar o visor da calculadora
function Clean() {
    // Define o conteúdo do visor como uma string vazia, ou seja, limpa o visor
    display.innerHTML = "";
}

// Função para apagar o último caractere do visor
function Backspace() {
    // Remove o último caractere do conteúdo do visor
    display.innerHTML = display.innerHTML.slice(0, -1);
}

// Função para calcular o resultado da expressão matemática no visor
function Return() {
    // Obtém o conteúdo do visor
    var displayContent = display.innerHTML;

    // Verifica se o conteúdo do visor não está vazio ou contém apenas espaços em branco
    if (displayContent.trim() === "") {
        // Se estiver vazio ou só tiver espaços em branco, exibe uma mensagem de erro no visor
        display.innerHTML = "Erro";
    } else {
         // Substitui todos os símbolos de "%" por "/100"
         displayContent = displayContent.replace(/%/g, "/100");
         // Substitui todos os símbolos de "×" por "*"
         displayContent = displayContent.replace(/×/g, "*");
         // Substitui todos os símbolos de "÷" por "/"
         displayContent = displayContent.replace(/÷/g, "/");
         try {
            // Tenta avaliar a expressão matemática e atualizar o visor com o resultado
            display.innerHTML = eval(displayContent);
            // Exibe o resultado da expressão no console para fins de depuração
            console.log(displayContent);    
         } catch (error) {
            // Em caso de erro na avaliação da expressão, exibe uma mensagem de erro no visor
            display.innerHTML = 'Erro'
         }    
    }     
}