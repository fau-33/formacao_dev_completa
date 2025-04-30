const nomes = ["Joaquim", "Maria", "Pedro", "Ana", "Carlos"];

function forEach(array, funcao) {
  for (let indice in array) {
    funcao(array[indice], indice, array);
  }
}

function paraCadaElemento(el, i, array) {
  console.log(el, i, array);
}

// forEach(nomes, paraCadaElemento);

forEach(nomes, (el, i) => {
  console.log(`${i} => ${el}`);
});
