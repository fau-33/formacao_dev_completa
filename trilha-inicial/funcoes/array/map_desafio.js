const alunos = [
  { nome: "Kenneth", n1: 10, n2: 8, n3: 9, n4: 7 },
  { nome: "Leandro", n1: 9, n2: 8, n3: 7, n4: 8 },
  { nome: "João", n1: 8, n2: 9, n3: 8, n4: 9 },
  { nome: "Ricardo", n1: 9, n2: 9, n3: 9, n4: 9 },
  { nome: "Fernanda", n1: 10, n2: 10, n3: 10, n4: 10 },
  { nome: "Eduardo", n1: 9, n2: 9, n3: 9, n4: 9 },
];

// { nome: "Kenneth", media: 8.5 }

const mediaDosAlunos = (notas) => ({
  alunos: notas.nome,
  media: (notas.n1 + notas.n2 + notas.n3 + notas.n4) / 4,
});

const alunosMedia = alunos.map(mediaDosAlunos);

console.log(alunosMedia);
