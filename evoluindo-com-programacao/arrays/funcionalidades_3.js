const nomes = ["Joaquim", "Maria", "Pedro", "Ana", "Carlos"];

function paraCadaElemento(elemento, indice, array) {
  console.log(elemento, indice, array);
}

// nomes.forEach(paraCadaElemento);

nomes.forEach((elemento, indice, array) => {
  console.log(elemento, indice, array);
});
