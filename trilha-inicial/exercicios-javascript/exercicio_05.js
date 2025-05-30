// 5) Dados dois arrays de números [a,b] e [d,e] crie uma função que faça a multiplicação
// do primeiro array com o segundo de maneira distributiva e a imprima na tela, ou seja,
// (a*d), (a*e),(b*d) (d*e). A função deve ser capaz de receber como parâmetros arrays de
// qualquer tamanho e não só com dois parâmetros

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const multiplicacaoDistributiva = (array1, array2) => {
  const result = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      result.push(array1[i] * array2[j]);
    }
  }
  return result;
};

console.log(multiplicacaoDistributiva(array1, array2));
