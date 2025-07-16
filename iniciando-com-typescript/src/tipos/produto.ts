//Tipo deve ter Nome, Preco, Desconto (0-1), função PrecoComDesconto

type Produto = {
  nome: string;
  preco: number;
  desconto: number;
  precoComDesconto: () => number;
};

let produto: Produto = {
  nome: "Caneta",
  preco: 15.95,
  desconto: 0.1,
  precoComDesconto: () => {
    return produto.preco - produto.preco * produto.desconto;
  },
};

console.log(produto.nome);
console.log(produto.preco);
console.log(produto.desconto);
console.log(produto.precoComDesconto());
