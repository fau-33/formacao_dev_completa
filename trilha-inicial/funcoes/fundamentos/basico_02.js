function bomDia() {
  console.log("Bom dia!");
}

const boaTarde = function () {
  console.log("Boa tarde!");
};

// Passar uma funcao como parametro para outra funcao
function executar(x) {
  if (typeof x === "function") {
    x();
  }
}

executar(1);
executar("boaTarde");

executar(bomDia);
executar(boaTarde);

// Retornar uma funcao a partir de outra funcao
function potencia(exp) {
  return function (base) {
    return Math.pow(base, exp);
  };
}

const aoQuadrado = potencia(2);
console.log(aoQuadrado(4));
console.log(aoQuadrado(5));

const aoCubo = potencia(3);
console.log(aoCubo(4));
console.log(aoCubo(5));

const resultado = potencia(4)(5);
console.log(resultado);
