const livros = require('./listaLivros');

function menorValor(arrProdutos, posicaoInicial) {
  let maisBarato = posicaoInicial;

  for (let atual = posicaoInicial; atual < livros.length; atual++) {
    if (livros[atual].preco < livros[maisBarato].preco) {
      maisBarato = atual;
    }
  }

  return maisBarato;
}

const maisBarato = menorValor(menorValor, 0);
console.log(`Livro mais barato:\nNome: ${livros[maisBarato].titulo}\nPreço: ${livros[maisBarato].preco}`);

module.exports = menorValor;