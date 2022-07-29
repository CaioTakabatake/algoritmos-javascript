const listaLivros = require('./array');

function quickSort(array, esquerda, direita) {
    if (array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);
    }

    return array;
}

function particiona(array, esquerda, direita) {
    let pivo = array[Math.floor(esquerda + direita / 2)];
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));