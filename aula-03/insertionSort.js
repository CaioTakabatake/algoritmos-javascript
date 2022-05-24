const livros = require('../aula-01/listaLivros');

function insertionSort(lista) {
  for (let atual = 0; atual < lista.length; atual++) {
    let analise = atual;

    while (analise > 0 && lista[analise].preco < lista[analise - 1]) {
      let itemAnalise = lista[analise];
      let itemAnterior = lista[analise - 1];

      lista[analise] = itemAnterior;
      lista[analise - 1] = itemAnalise;
      
      analise--
    }
  }

  return lista;
}

console.log(insertionSort(livros));