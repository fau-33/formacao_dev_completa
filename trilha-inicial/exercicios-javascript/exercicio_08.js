// 8) Crie uma função que recebe dois arrays como parâmetros e retorna um objeto. As
// chaves do objeto serão os elementos do primeiro array passado como parâmetro e os
// valores, os elementos do segundo array

const array1 = ["Nome", "Idade", "Id"];
const array2 = ["João", 30, 5];

function criarObjeto(chaves, valores) {
  const objeto = {};
  for (let i = 0; i < chaves.length; i++) {
    objeto[chaves[i]] = valores[i];
  }
  return objeto;
}

const objeto = criarObjeto(array1, array2);
console.log(objeto);
