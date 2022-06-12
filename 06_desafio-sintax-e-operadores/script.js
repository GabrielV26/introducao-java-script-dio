// Função que compara dois números.
function comparation(a, b){
    // Verifica se os parâmetros a e b são iguais.
    (a === b) ? console.log("Os números ",a ," e ",b ," são iguais.") : console.log("Os números ",a ," e ",b ," não são iguais.");
    
    // Verifica se a soma dos parâmetros é maior que 10 e menor que 20.
    ((a + b) > 10 && (a + b) < 20) ? console.log("Sua soma é ",(a+b),", que é maior que 10 e menor que 20"): console.log("Sua soma é ", (a + b), "e não se encaixam em número menor/maior que 10 ou mernor/maior que 20");
    
    // Verifica se a soma dos parâmetros é menor que 10 ou maior que 20. 
    ((a + b) < 10) ? console.log("Sua soma é ",(a + b),", que é menor que 10") : ((a + b) > 20)? console.log("Sua soma é ",(a + b),", que é maior que 20"): console.log();
}

// Passando os valores 5 e 10 para a função comparation.
comparation(5,10);
