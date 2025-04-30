function exibirDataDetalhada(dia, mes, ano) {
  console.log(`Dia: ${dia}`);
  console.log(`Mês: ${mes}`);
  console.log(`Ano: ${ano}`);
}

function exibirData(dia, mes, ano) {
  console.log(`Data: ${dia}/${mes}/${ano}`);
}

const d1 = 7;
const m1 = "Maio";
const a1 = 2022;

const d2 = 24;
const m2 = "Dezembro";
const a2 = 2024;

exibirData(22, "Janeiro", 2021);
exibirData(d1, m1, a1);
exibirData(d2, m2, a2);

exibirDataDetalhada(d1, m1, a1);
