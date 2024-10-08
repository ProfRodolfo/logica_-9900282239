// let contador = 1;
// const numero =5;

// while (contador <=10 ){
//     console.log(`${numero} X ${contador}  = ${numero * contador}`);
//     contador++;
// }


// let contador = 1;
// const numero =5;

// do {
//     console.log(`${numero} multiplica por ${contador}  igual ${numero * contador}`);
//     contador++;
// } 
// while(contador <=10)

// const numero = parseInt(prompt("Digite o número da tabuada"));

// for(let contador =1; contador <=10; contador++){
//     alert(`${numero} X ${contador} = ${numero * contador}`);
// }

const numero = parseInt(prompt("Digite o número da tabuada"));
let resultado = "";

for(let contador =1; contador <=10; contador++){
    resultado += `${numero} X ${contador} = ${numero * contador}\n`;
}
alert(resultado)
