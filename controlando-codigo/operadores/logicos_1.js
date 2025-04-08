const trabalho1 = true;
const trabalho2 = false;

const comprarTv50 = trabalho1 && trabalho2; // AND
const comprarTV40 = trabalho1 != trabalho2; // XOR
const tomarSorvete = trabalho1 || trabalho2; // OR
const ficarEmCasa = !tomarSorvete; // NOT

console.log("Vamos comprar a TV de 50'' ? ", comprarTv50);
console.log("Vamos comprar a TV de 40'' ? ", comprarTV40);
console.log("Vamos comprar o sorvete ? ", tomarSorvete);
console.log("Vamos ficar em casa ? ", ficarEmCasa);
