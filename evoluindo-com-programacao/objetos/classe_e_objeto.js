class Data {
  // data = 1;
  // mes = 1;
  // ano = 1970;

  constructor(data = 1, mes = 1, ano = 1970) {
    this.data = data;
    this.mes = mes;
    this.ano = ano;
  }

  formatar() {
    return `${this.data}/${this.mes}/${this.ano}`;
  }
}

const data1 = new Data(24, 12, 2024);
// data1.data = 24;

console.log(data1);
console.log(data1.formatar());

const data2 = new Data();
console.log(data2.formatar());
