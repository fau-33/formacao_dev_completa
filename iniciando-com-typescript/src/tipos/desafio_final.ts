// type Conta corrente (numero, saldo, função movientar)
type ContaCorrente = {
  numero: number;
  saldo: number;
  movimentar: (valor: number) => void;
};
// type Cliente (nome, email. contas[])
type Cliente = {
  nome: string;
  email: string;
  contas: ContaCorrente[];
};

function movimentar(this: ContaCorrente, valor: number) {
  this.saldo += valor;
}

// const clientes: Cliente[] = [...];
const clientes: Cliente[] = [
  {
    nome: "Joao",
    email: "j@j",
    contas: [
      { numero: 123, saldo: 0, movimentar },
      { numero: 6444, saldo: 354.33, movimentar },
    ],
  },
  {
    nome: "Maria",
    email: "m@m",
    contas: [
      { numero: 3232, saldo: 670.12, movimentar },
      { numero: 3000, saldo: 1398.98, movimentar },
    ],
  },
];

// função movimentarConta(numConta: number, valor: number)
function movimentarConta(numConta: number, valor: number) {
  const conta = clientes
    .map((cli) => {
      return cli.contas.find((cc) => cc.numero === numConta);
    })
    .filter((c) => c)[0];
  conta?.movimentar(valor);
}

function consultarSaldo(numConta: number): number | null {
  const conta = clientes
    .map((cli) => {
      return cli.contas.find((cc) => cc.numero === numConta);
    })
    .filter((c) => c)[0];
  return conta?.saldo || null;
}

// console.log(clientes)

movimentarConta(3232, 670.12);
console.log(consultarSaldo(3232));

movimentarConta(3000, -398.89);
console.log(consultarSaldo(3000));
