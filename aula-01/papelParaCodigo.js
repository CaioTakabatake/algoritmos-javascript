const livros = require('./listaLivros');

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
  if (livros[atual].preco < livros[maisBarato].preco) {
    maisBarato = atual;
  }
}

console.log(`Livro mais barato:\nNome: ${livros[maisBarato].titulo}\nPreço: ${livros[maisBarato].preco}`);