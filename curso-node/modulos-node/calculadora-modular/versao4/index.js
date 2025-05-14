const { soma, sub, texto } = require("./calculosBasicos");
const complementares = require("./calculosComplementares");
const { pot, resto } = complementares;
const textoConflitante = complementares.texto;
const { textoDivisão } = require("./calculosDivisão");

let x, y;
x = 20;
y = 3;

console.log(soma(x, y));
console.log(sub(x, y));
console.log(texto);
console.log(pot(x, y));
console.log(resto(x, y));
console.log(textoConflitante);
console.log(textoDivisão(x, y));
