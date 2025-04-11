const hora = 20;

const saudacao1 = hora >= 12 ? "Boa tarde" : "Bom dia";
console.log(saudacao1);

const saudacao2 =
  hora <= 11 ? "Bom dia" : hora <= 17 ? "Boa tarde" : "Boa noite";
console.log(saudacao2);

console.log(true ? "Verdadeiro" : "Falso");
