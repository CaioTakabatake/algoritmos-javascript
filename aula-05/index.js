const listaLivros = require('./array');

function mergeSort(array) {
    if (array.length > 1) {
        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0, meio));
        const parte2 = mergeSort(array.slice(meio, array.length));
        array = ordena(parte1, parte2);
    }

    return array;
}

function ordena(parte1, parte2) {
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = [];

    while (resultado.length !== parte1.length + parte2.length) {
        let produtoAtualParte1 = parte1[posicaoAtualParte1];
        let produtoAtualLista2 = parte2[posicaoAtualParte2];

        if (!produtoAtualParte1) {
            resultado.push(produtoAtualLista2);
            posicaoAtualParte2++;
        } else if (!produtoAtualLista2) {
            resultado.push(produtoAtualParte1);
            posicaoAtualParte1++;
        } else if (produtoAtualParte1.preco < produtoAtualLista2.preco) {
            resultado.push(produtoAtualParte1);
            posicaoAtualParte1++;
        } else {
            resultado.push(produtoAtualLista2);
            posicaoAtualParte2++;
        }
    }

    return resultado;
}

console.log(mergeSort(listaLivros));