const notas = [7.3, 8.1, 9.2, 8.1, 6.3, 7.9, 5.0, 6.0, 8.9];

// Calcular a média das notas do array
let soma = 0;
for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}
const media = soma / notas.length;
console.log(`A média das notas é ${media}`);

// Calcular a média das notas do array usando for of
let soma1 = 0;
for (let nota of notas) {
  soma1 += nota;
}
const media1 = soma1 / notas.length;
console.log(`A média das notas é ${media1}`);

// Calcular a média das notas do array usando for in
let soma2 = 0;
for (let indice in notas) {
  soma2 += notas[indice];
}
const media2 = soma2 / notas.length;
console.log(`A média das notas é ${media2}`);
