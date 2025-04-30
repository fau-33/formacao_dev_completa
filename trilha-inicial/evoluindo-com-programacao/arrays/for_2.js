// Indices:       0   1   2   3   4   5   6   7
const numeros = [22, 33, 44, 55, 66, 77, 88, 99];

// Foreach => percorre os elementos do array
for (let numero of numeros) {
  console.log(`Numero: ${numero}`);
}

// Foreach => percorre os indices do array
for (let indice in numeros) {
  console.log(`Indice ${indice}: ${numeros[indice]}`);
}
