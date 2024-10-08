// 01 - Crie uma função chamada saudacao que recebe um parâmetro nome e retorna a string "Olá, [nome]!".

// function saudacao(nome) {
//    return `Olá, ${nome}`
// }

// console.log(saudacao("Joaquim"))

// 02 - Enunciado: Crie uma função chamada multiplicacao que aceita dois parâmetros e retorna o produto deles.

// function multiplicacao(a, b) {
//     return a * b;
// }

// // Exemplo de uso
// console.log(multiplicacao(3, 4)); 

/* 03 - Exercício 3: Verificação de Par ou Ímpar
Objetivo: Criar uma função que verifica se um número é par ou ímpar.
Tarefa:
Crie uma função chamada parOuImpar que recebe um número e retorna "Par" ou "Ímpar" dependendo da verificação.*/ 

// function parOuImpar(numero) {
//     if (numero % 2 === 0){
//         return "Par"
//     } else {
//         return "Impar"
//     }
// }

// console.log(parOuImpar(4)); // true
// console.log(parOuImpar(5)); // false

/*
04 - Exercício 4: Cálculo da Média
Objetivo: Criar uma função que calcula a média de três números.
Tarefa:
Crie uma função chamada media que aceita três números como parâmetros e retorna a média deles.


function media(num1, num2, num3) {
    let soma = num1 + num2 + num3; // Calcula a soma dos números
    let media = soma / 3;           // Calcula a média
    return Math.round (media * 100) / 100 ;   //Arredonda para 2 casas decimais
    
}

// Exemplo de uso
console.log(media(4, 6, 8)); // 6
console.log(media(10, 20, 30)); // 20

*/ 

// // 05 
// function ehPalindromo(str) {
//     // Remove espaços e converte para minúsculas
//     let palavra = str.replace(/\s+/g, '').toLowerCase();
//     // Inverte a string
//     let palavraInvertida = palavra.split('').reverse().join('');
//     // Verifica se a string original é igual à invertida
//     return palavra === palavraInvertida;
// }
// // Exemplo de uso
// console.log(ehPalindromo("arara")); // true
// console.log(ehPalindromo("banana")); // false


// 6- 

// function contarVogais(str) {
//     let contador = 0; // Inicializa o contador de vogais
//     const vogais = 'aeiouAEIOU'; // Define as vogais a serem contadas

//     for (let i = 0; i < str.length; i++) {
//         if (vogais.includes(str[i])) { // Verifica se o caractere atual é uma vogal
//             contador++; // Incrementa o contador
//         }
//     }
//     return contador; // Retorna o total de vogais encontradas
// }
// // Exemplo de uso
// console.log(contarVogais("Ola, mundo")); // 4
// console.log(contarVogais("JavaScript e divertido")); // 8

/*
07
Exercício 7: Fatorial
Objetivo: Criar uma função que calcula o fatorial de um n úmero.

Tarefa:
Crie uma função chamada fatorial que aceita um número inteiro e retorna o fatorial desse número.
*/ 

// function fatorial(n) {
//     if (n < 0) {
//         return "O fatorial não está definido para números negativos."; // Tratamento para números negativos
//     }
//     if (n === 0 || n === 1) {
//         return 1; // O fatorial de 0 e 1 é 1
//     }
    
//     let resultado = 1; // Inicializa o resultado
//     for (let i = 2; i <= n; i++) {
//         resultado *= i; // Multiplica os números de 2 até n
//     }
    
//     return resultado; // Retorna o fatorial calculado
// }

// // Exemplo de uso
// console.log(fatorial(5)); // 120
// console.log(fatorial(0)); // 1
// console.log(fatorial(-3)); // "O fatorial não está definido para números negativos."

// 08 

// function numeroAleatorio(min, max) {
//     // Gera um número inteiro aleatório entre min e max (inclusive)
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Exemplo de uso
// console.log(numeroAleatorio(1, 10)); // Pode retornar qualquer número entre 1 e 10
// console.log(numeroAleatorio(50, 100)); // Pode retornar qualquer número entre 50 e 100

//09 

// function inverterString(str) {
//     // Converte a string em um array, inverte o array e depois junta os caracteres de volta em uma string
//     return str.split('').reverse().join('');
// }

// // Exemplo de uso
// console.log(inverterString("hello")); // "olleh"
// console.log(inverterString("JavaScript")); // "tpircSavaJ"
// console.log(inverterString("12345")); // "54321"


function celsiusParaFahrenheit(celsius) {
    // Converte Celsius para Fahrenheit
    return (celsius * 9 / 5) + 32;
}

// Exemplo de uso
console.log(celsiusParaFahrenheit(0));    // 32
console.log(celsiusParaFahrenheit(100));  // 212
console.log(celsiusParaFahrenheit(-40));   // -40