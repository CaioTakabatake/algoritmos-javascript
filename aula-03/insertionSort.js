const livros = require('../aula-01/listaLivros');
const troca = require('./troca');

function insertionSort(lista) {
  for (let atual = 0; atual < lista.length; atual++) {
    let analise = atual;

    while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
      troca(lista, analise);
      
      analise--;
    }
  }

  return lista;
}

console.log(insertionSort(livros));