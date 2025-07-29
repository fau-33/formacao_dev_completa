interface Entidade {
  id: number;
}

interface Vendavel {
  nome: string;
  preco: number;
  desconto: number;
}

class Produto implements Entidade, Vendavel {
  constructor(
    public readonly id: number,
    public readonly nome: string,
    public readonly preco: number,
    public readonly desconto: number
  ) {}

  get precoFinal() {
    return this.preco * (1 - this.desconto);
  }
}

class Servico implements Vendavel, Entidade {
  constructor(
    public readonly id: number,
    public readonly nome: string,
    public readonly preco: number,
    public readonly desconto: number
  ) {}
}

const p1 = new Produto(123, "Caneta", 9.8, 0.8);
console.log(p1);
console.log(p1.precoFinal);

let v1: Vendavel = new Produto(123, "Caneta", 10, 0);
console.log(v1);

v1 = new Servico(123, "Montar Tv", 80, 0.1);
console.log(v1);
console.log(v1.preco);

export {};
