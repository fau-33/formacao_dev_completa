function criarData(dia, mes, ano) {
  return {
    dia,
    mes,
    ano,
    exibirDataFormatada() {
      return `${this.dia}/${this.mes}/${this.ano}`;
    },
  };
}

const data1 = criarData(7, 11, 2022);

const data2 = criarData(3, 3, 2023);

const data3 = criarData(24, 12, 2024);

console.log(data1.exibirDataFormatada());
console.log(data2.exibirDataFormatada());
console.log(data3.exibirDataFormatada());
