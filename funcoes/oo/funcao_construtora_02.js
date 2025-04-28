function Data(dia, mes, ano) {
  this.dia = dia;
  this.mes = mes;
  this.ano = ano;
  // Comportamento ou método público
  this.exibir = function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  };
}

const d1 = new Data(1, 1, 1970);
const d2 = new Data(25, 12, 2022);

console.log(d1.exibir());
console.log(d2.exibir());
