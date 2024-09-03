//Informe um número e o programa retornará uma mensagem avisando se o número é ou não um número de Fibonacci

function fibonacci(numero) {
    let a = 0;
    let b = 1;
    let c = 0;
    let resultado = false;

    while (c < numero) {
        c = a + b;
        a = b;
        b = c;
    }

    if (c === numero)
        resultado = `O Número ${numero} é um número de Fibonacci`;
    else 
        resultado = `O Número ${numero} não é um número de Fibonacci`;

    return resultado;
}

console.log(fibonacci(14));