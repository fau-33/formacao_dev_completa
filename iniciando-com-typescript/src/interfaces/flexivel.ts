interface Flexivel {
  nome: string;
  [key: string]: number | string;
}

const f1: Flexivel = {
  nome: "João Pedro",
  idade: 23,
  salario: 1500,
};

console.log(f1.nome);

export {};
