const cliente = {
  codigo: 37899,
  nome: "Maria da Silva",
  vip: true,
  endereco: {
    logradouro: "Rua dos Bobos",
    numero: 987,
    complemento: "Bloco A apto 101",
    pontosRef: ["Hotel da Praia", "Pousada do Sol"],
  },
  filhos: [
    { nome: "Pedro da Silva", anoDoNascimento: 2000 },
    { nome: "Paulo da Silva", anoDoNascimento: 2005 },
    { nome: "Paula da Silva", anoDoNascimento: 2008 },
  ],
};

console.log(cliente["endereco"]["logradouro"]);
console.log(cliente.endereco.logradouro);

console.log(cliente.filhos[1].anoDoNascimento);
