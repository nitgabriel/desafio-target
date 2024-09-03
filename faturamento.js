const fs = require('fs');

function lerArquivoJSON(caminho, callback) {
    fs.readFile(caminho, 'utf-8', (err, data) => {
        if (err) {
            return callback(err);
        }
        try {
            const jsonData = JSON.parse(data);
            callback(null, jsonData);
        } catch (err) {
            callback(parseErr);
        }
    });
}

function calcularFaturamento(faturamentoMensal) {
    let menorValor = Number.MAX_VALUE;
    let maiorValor = Number.MIN_VALUE;
    let soma = 0;
    let diasComFaturamento = 0;

    faturamentoMensal.forEach((dia) => {
        let valor = dia.valor;

        if (valor > 0) {
            if (valor < menorValor) {
                menorValor = valor;
            }
            if (valor > maiorValor) {
                maiorValor = valor;
            }
            soma += valor;
            diasComFaturamento++;
        }
    });

    const mediaMensal = soma / diasComFaturamento;
    let diasAcimaDaMedia = 0;
    faturamentoMensal.forEach((dia) => {
        if (dia.valor > mediaMensal) {
            diasAcimaDaMedia++;
        }
    });

    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia
    };
}

function exibirResultados(resultado) {
    console.log(`Menor valor: ${resultado.menorValor}`);
    console.log(`Maior valor: ${resultado.maiorValor}`);
    console.log(`Número de dias no mês com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
}

function main() {
    const caminhoArquivo = 'dados.json';
    lerArquivoJSON(caminhoArquivo, (err, faturamentoMensal) => {
        if (err) {
            console.error('Erro ao ler arquivo JSON:', err);
            return;
        }
        const resultado = calcularFaturamento(faturamentoMensal);
        exibirResultados(resultado);
    });
}

main();