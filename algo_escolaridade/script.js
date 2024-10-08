// Solicitar o número da serie escolar

let serie = parseInt(prompt("Qual o número da serie escolar?"));

// Verificar a classificação do nível de estudo

if (serie < 1){
    alert("Entrada invalida");
} else if (serie <=5) {
    alert("Ensino Fundamental I");
} else if (serie >=6 && serie <=9 ){
    alert("Ensino Fundamental II");
} else if (serie >=10 && serie <=12){
    alert("Ensino Medio");
}else {
    alert("Ensino Superior");
}