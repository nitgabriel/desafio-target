// Ao final do processamento, qual será o valor da variável SOMA
function somar() {
    let indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) {
        k = k + 1;
        
        soma = soma + k;
    }

    return soma;
}

console.log(somar());

//91