//  let fruta = ["abacate", "melão","Kiwi", "maça"]; 


// console.log(fruta);
// console.log(fruta[fruta.length -1]); // último elemento array

// for(let i = 0; i < fruta.length; i++) {
//     console.log(fruta[i]);
// }


// let carros = ["Fusca", "Variant", "Brasília", "Caravan", "Opala"];

// let novoCarros = carros.map((carro) => {
//     return carro.length;
// });
// console.log(novoCarros); // Exibe o novo array com os comprimentos

// let legumes = ["batata", "cenoura", "beterraba", "beringela", "chuchu" ]

// // let legumesComB = legumes.find(b => b.startsWith("b"));

// let legumesComB = legumes.filter(legume => legume.startsWith("b"));

// console.log(legumesComB);


// function saudacao () {
//     console.log("olá jovem!");
// }

// saudacao();

function saudacao(nome) {
    console.log(`Ola ${nome}`);
}
saudacao("Joaquim");

//modificar a função despedida para que aceite um parâmetro nome e imprima uma mensagem personalizada.
function despedida(nome) {
    console.log(`Até logo ${nome}`);
}
despedida("Joaquim");

function soma ( a, b){
    return a + b;
}
console.log(soma(1, 2));
console.log(soma(4, 9));
console.log(soma(5, 3));

//criar uma função chamada multiplicacao que retorne o produto de dois números.
// function multiplica ( a, b){
//     const resultado = a * b;
//     console.log(resultado);
//     return resultado;
// }
// multiplica(1, 2);

// let somaAnonima = function(a, b) {
//     return a + b
// }

// console.log(somaAnonima(1, 2));


// Exercício 1: Função de Saudação
// Objetivo: Criar uma função que aceita um nome e imprime uma saudação.

// Tarefa:

// Crie uma função chamada saudacao que recebe um parâmetro nome e retorna a string "Olá, [nome]!".


function saudacao(nome) {
    return `Olá, ${nome}!`;
}

// Exemplo de uso
console.log(saudacao("João")); // "Olá, João!"

/*
Exercício 2: Soma de Dois Números
Objetivo: Criar uma função que soma dois números.

Tarefa:
Crie uma função chamada soma que recebe dois parâmetros, a e b, e retorna a soma deles.
*/