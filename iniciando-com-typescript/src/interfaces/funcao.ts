interface OperacaoMatematicaObj {
  fn: (a: number, b: number) => number;
}

const somaObj: OperacaoMatematicaObj = {
  fn: (a: number, b: number) => a + b,
};

console.log(somaObj.fn(1, 2));

interface OperacaoMatematica {
  (a: number, b: number): number;
}

const soma: OperacaoMatematica = (a: number, b: number) => a + b;

console.log(soma(9, 8));
