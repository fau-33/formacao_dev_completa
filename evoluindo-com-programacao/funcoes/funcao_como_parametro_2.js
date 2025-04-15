function verificar(funcao, x = 20, y = 10) {
  if (typeof funcao === "function") {
    console.log(funcao(x, y));
  }
}

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function boaNoite() {
  return "Boa noite";
}

verificar(somar, 1, 2);
verificar(subtrair, 33, 11);
verificar(multiplicar, 10, 10);
verificar(multiplicar, 777);
verificar(somar);
verificar(subtrair);
verificar(boaNoite);
