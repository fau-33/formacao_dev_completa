// Class Produto2 (id, nome (2 - 250), preco( > 0), desc(0 - 0.8), precoFinal => Método)

import Validador from "./validador";

class Produto {
  constructor(
    readonly id: number,
    readonly nome: string,
    readonly preco: number,
    readonly desconto: number = 0
  ) {
    Validador.maiorQueZero(id, "Id inválido");
    Validador.tamanhoEntre(nome, 3, 250, "Nome inválido");
    Validador.maiorQueZero(preco, "Preco inválido");
    Validador.entre(desconto, 0, 0.8, "Desconto inválido");
  }

  get precoFinal(): number {
    return this.preco * (1 - this.desconto);
  }
}

const p1 = new Produto(1, "Caneta", 15.95, 0.8);
console.log(p1.nome, p1.preco);

const p2 = new Produto(2, "Notebook", 7999.99);
console.log(p2.nome, p2.preco);

console.log(Validador.ERRO_DESCONHECIDO);

export {};
