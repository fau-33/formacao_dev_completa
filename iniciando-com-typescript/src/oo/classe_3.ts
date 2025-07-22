// Class Produto2 (id, nome (2 - 250), preco( > 0), desc(0 - 0.8), precoFinal => Método)

class Produto {
  constructor(
    readonly id: number,
    readonly nome: string,
    readonly preco: number,
    readonly desconto: number = 0
  ) {
    this.id = id;
    if (preco <= 0) throw new Error("Preco inválido");
    if (nome.length < 2 || nome.length > 250) throw new Error("Nome inválido");
    if (preco <= 0) throw new Error("Preco inválido");
    if (desconto < 0 || desconto > 0.8) throw new Error("Desconto inválido");
  }
  precoComDesconto(): number {
    return this.preco - this.preco * this.desconto;
  }

  get precoFinal(): number {
    return this.precoComDesconto();
  }
}

const p1 = new Produto(1, "Caneta", 15.95, 0.1);
console.log(p1.nome, p1.preco);

const p2 = new Produto(2, "Notebook", 7999.99);
console.log(p2.nome, p2.preco);

export {};
