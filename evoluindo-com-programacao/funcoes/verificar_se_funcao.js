let numero = 10;
let texto = "Boa tarde!";

function somar(n1, n2) {
  return n1 + n2;
}

const subtrair = function (n1, n2) {
  return n1 - n2;
};

console.log(typeof numero);
console.log(typeof texto);

console.log(typeof somar);
console.log(typeof subtrair);

console.log(typeof somar === "function");
console.log(typeof subtrair === "function");
