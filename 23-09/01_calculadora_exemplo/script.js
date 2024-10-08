/*
Exercício: Calculadora Simples
Objetivo: Criar uma calculadora simples que realiza as quatro operações básicas (soma, subtração, multiplicação e divisão) com dois números fornecidos pelo usuário.

Passos:
Solicitar ao usuário que insira dois números.
Armazenar esses números em variáveis.
Calcular a soma, subtração, multiplicação e divisão.
Exibir os resultados das operações em um formato claro.
*/

 
// Solicitar ao usuário para inserir os números
let numero1 = Number(prompt("Insira o primeiro número: "));
let numero2 = Number(prompt("Insira o segundo número: "));

// Calcular as operações
let  soma = numero1 + numero2;
let  subtracao = numero1 - numero2;
let  multiplicacao = numero1 * numero2;
let  divisao = numero1 / numero2;

// Exibir os resultados
// console.log("A soma entre ", numero1, " e ", numero2, " é: ",  soma);
// console.log("A subtração entre:", numero1, " e ", numero2, " é: ", subtracao);
// console.log("A multiplicação entre:", numero1, " e ", numero2, " é: ",multiplicacao);
// console.log("A divisão entre:", numero1, " e ", numero2, " é: ", divisao);

// Exibir os resultados usando template strings
console.log(`A soma entre ${numero1} e ${numero2} é: ${soma}`);
console.log(`A subtração entre ${numero1} e ${numero2} é: ${subtracao}`);
console.log(`A multiplicação entre ${numero1} e ${numero2} é: ${multiplicacao}`);
console.log(`A divisão entre ${numero1} e ${numero2} é: ${divisao}`);