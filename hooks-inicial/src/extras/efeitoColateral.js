// Função pura
function soma(a, b) {
  return a + b;
}

//Função impura
let resultado;
function soma2(a, b) {
  resultado = a + b;
}

soma2(10, 20);
console.log(resultado);
