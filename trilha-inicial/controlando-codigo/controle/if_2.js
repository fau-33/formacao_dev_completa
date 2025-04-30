const nota = 9.8;
const bomComportamento = false;

const dignoParabens = nota >= 7 && bomComportamento;

if (dignoParabens) console.log("Parabéns, voce foi aprovado!");

if (!dignoParabens) console.log("Melhore na próxima!");

console.log("Fim");
