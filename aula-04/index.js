const { edFolha, edGalho } = require('./arrays');

function juntaListas(lista1, lista2) {
    let listaFinal = [];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;

    while (listaFinal.length !== lista1.length + lista2.length) {
        let produtoAtualLista1 = lista1[posicaoAtualLista1];
        let produtoAtualLista2 = lista2[posicaoAtualLista2];

        if (!produtoAtualLista1) {
            listaFinal.push(produtoAtualLista2);
            posicaoAtualLista2++;
        } else if (!produtoAtualLista2) {
            listaFinal.push(produtoAtualLista1);
            posicaoAtualLista1++;
        } else if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
            listaFinal.push(produtoAtualLista1);
            posicaoAtualLista1++;
        } else {
            listaFinal.push(produtoAtualLista2);
            posicaoAtualLista2++;
        }
    }

    return listaFinal;
}

console.log(juntaListas(edFolha, edGalho));