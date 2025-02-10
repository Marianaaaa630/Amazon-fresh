const promptSync = require('prompt-sync'); // Biblioteca para ler entradas do usuário
const prompt = promptSync();
const math = require('mathjs'); // Biblioteca para cálculos matemáticos avançados

// Função para somar dois números
function soma(a, b) {
    return a + b;
}

// Função para subtrair dois números
function subtracao(a, b) {
    return a - b;
}

// Função para multiplicar dois números
function multiplicacao(a, b) {
    return a * b;
}

// Função para dividir dois números, verificando se o divisor não é zero
function divisao(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Erro: Não é possível dividir por zero.";
    }
}

// Função para calcular a raiz quadrada, impedindo números negativos
function raizQuadrada(a) {
    if (a < 0) {
        return "Erro: Não é possível calcular a raiz quadrada de um número negativo.";
    }
    return Math.sqrt(a);
}

// Função para calcular o seno de um ângulo em graus
function seno(a) {
    return Math.sin(math.unit(a, 'deg').toNumber('rad'));
}

// Função para calcular o cosseno de um ângulo em graus
function cosseno(a) {
    return Math.cos(math.unit(a, 'deg').toNumber('rad'));
}

// Loop principal da calculadora, permitindo vários cálculos até que o usuário decida sair
while (true) {
    console.log("\nEscolha a operação:");
    console.log("1. Soma");
    console.log("2. Subtração");
    console.log("3. Multiplicação");
    console.log("4. Divisão");
    console.log("5. Raiz Quadrada");
    console.log("6. Seno");
    console.log("7. Cosseno");
    console.log("8. Tangente");
    console.log("9. Sair");

    let escolha = prompt("Digite a opção desejada: ");

    // Se o usuário escolher sair, o loop termina
    if (escolha === "9") {
        console.log("Saindo da calculadora. Até mais!");
        break;
    }

    let num1, num2;
    
    // Pega os números necessários para a operação escolhida
    if (["1", "2", "3", "4"].includes(escolha)) {
        num1 = parseFloat(prompt("Digite o primeiro número: "));
        num2 = parseFloat(prompt("Digite o segundo número: "));
    } else if (["5", "6", "7", "8"].includes(escolha)) {
        num1 = parseFloat(prompt("Digite o número: "));
    } else {
        console.log("Erro: Opção inválida. Escolha um número entre 1 e 9.");
        continue;
    }

    // Realiza a operação escolhida e exibe o resultado
    switch (escolha) {
        case "1":
            console.log("Resultado:", soma(num1, num2));
            break;
        case "2":
            console.log("Resultado:", subtracao(num1, num2));
            break;
        case "3":
            console.log("Resultado:", multiplicacao(num1, num2));
            break;
        case "4":
            console.log("Resultado:", divisao(num1, num2));
            break;
        case "5":
            console.log("Resultado:", raizQuadrada(num1));
            break;
        case "6":
            console.log("Resultado:", seno(num1));
            break;
        case "7":
            console.log("Resultado:", cosseno(num1));
            break;
        case "8":
            console.log("Resultado:", tangente(num1));
            break;
        default:
            console.log("Erro: Opção inválida.");
    }
}