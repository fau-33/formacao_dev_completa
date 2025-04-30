// Coloca dentro do objeto com a data formatada
const data = {
  dia: 7,
  mes: 11,
  ano: 2022,
  exibirDataFormatada: function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  },
};

data.dia = 24;
data.mes = 12;

console.log(data.exibirDataFormatada());

// console.log(`${data.dia}/${data.mes}/${data.ano}`);
