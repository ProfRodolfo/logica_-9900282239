/*Exemplo 01 - imprimindo cada linha sem loop

console.log(10)
console.log(9)
console.log(8)
console.log(7)
console.log(6)
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log("Feliz Ano Novo!")
*/

/*Exemplo 02 - imprimindo cada linha com loop While 

let contador = 10; 

while (contador > 0) {
    console.log(contador);
    contador--;
}

console.log("Feliz Ano Novo!");*/

/*Exemplo 03 - Em ordem crescente imprimindo cada linha com loop While 

let contador = 0; 

while (contador < 500 ) {
    console.log(contador);
    contador += 20;
}

console.log("Feliz Ano Novo!");*/

/*1 - O programa solicita que o usuário digite um número inicial usando prompt.
2 - Ele verifica se o número é válido (um número maior ou igual a 0).
3 - Se válido, inicia a contagem crescente de dois em dois até 10, imprimindo cada número no console.

4- Se inválido, exibe uma mensagem de erro*/ 

// Solicita um número ao usuário
let numeroInicial = parseInt(prompt("Digite um número para iniciar a contagem crescente de dois em dois: "));
// Verifica se o número é válido
if(!isNaN(numeroInicial) && numeroInicial >=0) {
    let contador = numeroInicial;
     // Inicia a contagem crescente de dois em dois até 10
     while (contador <= 10) {
        console.log(contador);
        contador += 2; // Incrementa de dois em dois
    }
    // Imprime uma mensagem de finalização
    console.log("Feliz Ano Novo!");
}else{
    // Imprime uma mensagem de erro
    console.log("Número inválido, Por favor, digite um número válido maior ou igual a 0.");
}