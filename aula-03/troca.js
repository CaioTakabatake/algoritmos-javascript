module.exports = troca;

function troca(lista, indexAtual) {
  let itemAnalise = lista[indexAtual];
  let itemAnterior = lista[indexAtual - 1];

  lista[indexAtual] = itemAnterior;
  lista[indexAtual - 1] = itemAnalise;
}