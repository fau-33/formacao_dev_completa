const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99, fragil: false },
  { nome: "Caderno", qtde: 4, preco: 27.1, fragil: false },
  { nome: "Impressora", qtde: 5, preco: 1000, fragil: true },
  { nome: "Lapis", qtde: 3, preco: 5.82, fragil: false },
  { nome: "IPad", qtde: 2, preco: 7500, fragil: true },
  { nome: "Tesoura", qtde: 1, preco: 19.2, fragil: false },
  { nome: "Computador", qtde: 2, preco: 5000, fragil: true },
];

// 5000 + 15000 + 10000 = 30000 / 3 = 10000
// filter, map, reduce
// 1.fragil: true (filter)
// 2.qtde * preco => total (map)
// 3. medias totais (reduce)

const produtosFragil = carrinho.filter((p) => p.fragil);
const totalizarFragil = produtosFragil.map((p) => p.qtde * p.preco);
const mediaFragil =
  totalizarFragil.reduce((a, b) => a + b) / produtosFragil.length;

console.log(mediaFragil);
