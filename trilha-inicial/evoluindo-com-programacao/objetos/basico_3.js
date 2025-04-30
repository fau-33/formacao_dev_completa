const data = {
  dia: 7,
  mes: 11,
  ano: 2022,
};

data.dia = 24;
data.mes = 12;
data.ano = 2024;
data.noFuturo = false;

console.log(data.dia);
console.log(data.mes);
console.log(data.ano);

console.log(`${data.dia}/${data.mes}/${data.ano}`);

console.log(data);
