// const numeros = [7, 8, 9];

// Objeto de forma literal
const produto = {
  nome: "Notebook",
  preco: 3000,
  desconto: 0.1,
  altoCusto: false,
};

console.log(produto["nome"]);
console.log(produto["preco"]);
console.log(produto["desconto"]);
console.log(produto["altoCusto"]);

console.log(produto.nome);
console.log(produto.preco);
console.log(produto.desconto);
console.log(produto.altoCusto);

produto["nome"] = "Caneta";
produto.nome = "Lapis";

console.log(produto.nome);
console.log(produto["nome"]);
