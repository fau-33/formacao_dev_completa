const hora = 23;
let saudacao = "";

if (hora <= 11) {
  saudacao = "Bom dia";
} else if (hora <= 17) {
  saudacao = "Boa tarde";
} else if (hora <= 22) {
  saudacao = "Boa noite";
} else {
  saudacao = "Hora de dormir!";
}

console.log(saudacao);
