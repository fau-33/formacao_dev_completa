const trabalho1 = true;
const trabalho2 = true;

const comprarTv50 = trabalho1 && trabalho2; // AND
const comprarTV40 = trabalho1 != trabalho2; // XOR
const tomarSorvete = trabalho1 || trabalho2; // OR
const ficarEmCasa = !tomarSorvete; // NOT

console.log("Vamos comprar a TV de 50'' ? ", comprarTv50 ? "Sim" : "Nao");
console.log("Vamos comprar a TV de 40'' ? ", comprarTV40 ? "Sim" : "Nao");
console.log("Vamos comprar o sorvete ? ", tomarSorvete ? "Sim" : "Nao");
console.log("Vamos ficar em casa ? ", ficarEmCasa ? "Sim" : "Nao");
