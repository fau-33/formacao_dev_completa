const { resto } = require("./calculosComplementares");

function div(a, b) {
  return a / b;
}

exports.textoDivisão = (a, b) => {
  return `Divisão de ${a} por ${b} é igual a ${div(a, b)} e o resto é ${resto(
    a,
    b
  )}`;
};
