const produto = {
  nome: "IPad",
  marca: "Apple",
  anoDeFabricacao: 2019,
  preco: 7500,
  fragil: true,
  desconto: 0.15,
  precoComDesconto: function () {
    return this.preco * (1 - this.desconto);
  },
};

const precoComDesconto = produto.precoComDesconto();
console.log(`${produto.nome} tem o preço R$ ${precoComDesconto}`);
