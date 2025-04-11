const x = 8;
const y = 10;

const operacao = "+";

const parcial1 = operacao === "*" ? x * y : x / y;
const parcial2 = operacao === "-" ? x - y : parcial1;
const resultado = operacao === "+" ? x + y : parcial2;

console.log(resultado);
