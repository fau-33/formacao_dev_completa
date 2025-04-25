const produto = {
  nome: "IPad",
  marca: "Apple",
  anoDeFabricacao: 2019,
  preco: 7500,
  fragil: true,
  desconto: 0.15,
};

function precoComDesconto(produto) {
  return produto.preco * (1 - produto.desconto);
}

const precoFinal = precoComDesconto(produto);
console.log(`${produto.nome} tem o preço R$ ${precoFinal}`);
