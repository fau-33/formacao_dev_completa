// 11) Implemente uma função que recebe um array de objetos e uma propriedade e
// ordene o array de acordo com a propriedade

function ordenarPorPropriedade(array, propriedade) {
  return array.sort((a, b) => a[propriedade] - b[propriedade]);
}

const arrayObjetos = [
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 35 },
];

console.log(ordenarPorPropriedade(arrayObjetos, "idade"));
