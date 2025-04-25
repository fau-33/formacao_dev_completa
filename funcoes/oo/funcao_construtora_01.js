// MOLDE!! Função construtora
function Data(dia, mes, ano) {
  this.dia = dia;
  this.mes = mes;
  this.ano = ano;
}

const d1 = new Data(1, 1, 1970); // Obj #1 instanciado
const d2 = new Data(25, 12, 2022); // Obj #2 instanciado

console.log(typeof d1, d1);
console.log(typeof d2, d2);

d1.dia = 24;
d1.mes = 12;

console.log(`${d1.dia}/${d1.mes}/${d1.ano}`);
