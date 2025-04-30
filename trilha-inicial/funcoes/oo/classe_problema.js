class Data {
  constructor(dia, mes, ano) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }

  exibir() {
    return `${this.dia}/${this.mes}/${this.ano}`;
  }
}

const d1 = new Data(45, 69, -970);

console.log(d1.exibir());
