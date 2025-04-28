// Criar uma função construtora para representar um produto
// preco, nome, desconto (0 - 1) 15% ou 0.15
// precoFinal = preco * (1 - desconto)
// criar duas instâncias de produtos

function Produto(nome, preco, desconto) {
  // Atributos ou propriedades
  this.nome = nome;
  this.preco = preco;
  this.desconto = desconto;

  // Comportamento ou método público
  this.precoFinal = function () {
    return preco * (1 - desconto);
  };
}
// Instâncias
const p1 = new Produto("Caneta", 10, 0.15);
const p2 = new Produto("Notebook", 2000, 0.25);

console.log(p1.precoFinal());
console.log(p2.precoFinal());
