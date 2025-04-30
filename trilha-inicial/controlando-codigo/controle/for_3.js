// [1-1][1-2][1-3]
// [2-1][2-2][2-3]
// [3-1][3-2][3-3]

for (let linha = 1; linha <= 3; linha++) {
  for (let coluna = 1; coluna <= 3; coluna++) {
    console.log(`[${linha}-${coluna}]`);
  }
}

console.log("Fim");
