const livros = require('../aula-01/listaLivros');
const menorValor = require('../aula-01/menorValor')

for (let atual = 0; atual < livros.length - 1; atual++) {
  let menor = menorValor(livros, atual);

  let livroAtual = livros[atual];
  console.log('posição atual', atual)
  console.log('livro atual', livros[atual])
  let livroMenor = livros[menor];
  console.log('livro menor preço', livros[menor])

  livros[atual] = livroMenor;
  livros[menor] = livroAtual;
}

console.table(livros);