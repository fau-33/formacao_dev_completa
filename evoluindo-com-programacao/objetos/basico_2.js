function precoComDesconto(preco, desconto) {
  return preco * (1 - desconto);
}

const produto = {
  nome: "Macbook",
  preco: 32000,
  desconto: 0.25,
  precoComDesconto: function () {
    return this.preco * (1 - this.desconto);
  },
};

console.log(produto.preco);
console.log(produto.precoComDesconto());
console.log(precoComDesconto(produto.preco, produto.desconto));
