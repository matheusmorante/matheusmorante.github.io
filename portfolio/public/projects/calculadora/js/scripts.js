
// Obtém o elemento com o ID "display" da página HTML
const $display = $('#display');

// Função para inserir números e operadores no visor da calculadora
function Insert(value) {
    // Verifica se o comprimento atual do conteúdo no visor é menor ou igual a 15 caracteres
    if ($display.text().length <= 15) {
        // Adiciona o número ou operador ao conteúdo do visor
        $display.text($display.text() + value);
    }
}

// Função para limpar o visor da calculadora
function Clean() {
    // Define o conteúdo do visor como uma string vazia, ou seja, limpa o visor
    $display.text('') ;
}

// Função para apagar o último caractere do visor
function Backspace() {
    // Remove o último caractere do conteúdo do visor
    $display.text($display.text().slice(0, -1));
}

// Função para calcular o resultado da expressão matemática no visor
function Return() {
    // Obtém o conteúdo do visor
    let $displayContent = $display.text();

    // Verifica se o conteúdo do visor não está vazio ou contém apenas espaços em branco
    if ($displayContent.trim() === "") {
        // Se estiver vazio ou só tiver espaços em branco, exibe uma mensagem de erro no visor
        $display.text("Erro");
    } else {
        $displayContent = $displayContent.replace(/%/g, "/100")
                                         .replace(/×/g, "*")
                                         .replace(/÷/g, "/");
        try {
            // Tenta avaliar a expressão matemática e atualizar o visor com o resultado
            $display.text(eval($displayContent));
            // Exibe o resultado da expressão no console para fins de depuração
            console.log($displayContent);
        } catch (error) {
            // Em caso de erro na avaliação da expressão, exibe uma mensagem de erro no visor
            $display.text('Erro')
        }
    }
}