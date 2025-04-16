const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Percorrer o array a partir do penúltimo elemento usando for
for (let i = numeros.length - 2; i >= 0; i -= 2) {
  console.log(`${i} => ${numeros[i]}`);
}

// Percorrer o array a partir do penúltimo elemento usando for of
const numerosInvertidos = numeros.reverse();

for (let i of numerosInvertidos) {
  if (i % 2 === 1) {
    console.log(`${i} => ${numeros[i]}`);
  }
}
