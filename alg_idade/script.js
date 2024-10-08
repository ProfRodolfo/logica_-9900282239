let idade = parseInt(prompt("Insira sua idade"));

if (idade <18 ){
    alert("Acesso Negado. Você deve ter pelo menos 18 anos");
} else if (idade >18 && idade <=65){
    alert("Acesso Liberado. Bem-vindo ao evento!");
} else{
    alert("Acesso Liberado. Você é um convidado especial!")
}