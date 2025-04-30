// Classe
// Função constructor -> cria um objeto
function Data(dia, mes, ano) {
  this.dia = dia;
  this.mes = mes;
  this.ano = ano;

  this.formatar = function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  };
}

const data1 = new Data(7, 11, 2022);
data1.dia = 24;
console.log(data1.formatar());

const data2 = new Data(3, 3, 2023);
console.log(data2.formatar());
console.log(data2["dia"]);

// 1. Inicia com a letra Maiuscula (Não Obrigatório)
// 2. Chamar a função com new Dat(......)
// 3. Usamos o this para acrescentar as propriedades e métodos ao objeto
