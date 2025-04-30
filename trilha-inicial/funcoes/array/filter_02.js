const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.5 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 0, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const qtdMaiorQueZero = (produto) => produto.qtde > 0;
const apenasNomes = (produto) => produto.nome;

const produtosFinal = carrinho.filter(qtdMaiorQueZero).map(apenasNomes);

console.log(produtosFinal);
