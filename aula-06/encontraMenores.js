const listaLivros = require('./array');

function encontraMenores(pivo, array) {
    let menores = 0;

    for (let atual = 0; atual < array.length; atual++) {
        const produtoAtual = array[atual];

        if (produtoAtual.preco < pivo.preco) {
            menores++
        }
    }

    trocaLugar(array, array.indexOf(pivo), menores);

    return array;
}

function trocaLugar(array, de, para) {
    const element1 = array[de];
    const element2 = array[para];

    array[para] = element1;
    array[de] = element2;
}

console.log(encontraMenores(listaLivros[2], listaLivros));