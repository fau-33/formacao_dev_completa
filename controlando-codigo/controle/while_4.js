let quantidade = 0;
const dataNoFuturo = Date.now() + 3000;

while (Date.now() < dataNoFuturo) {
  quantidade++;
}

console.log("Quantidade: " + quantidade);
