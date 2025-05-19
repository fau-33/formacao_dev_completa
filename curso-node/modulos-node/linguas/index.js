const lingua = "en";
let saudacoes;

if (lingua === "en") {
  saudacoes = require("./en");
} else if (lingua === "pt") {
  saudacoes = require("./pt");
}

console.log(saudacoes.dia);
console.log(saudacoes.tarde);
console.log(saudacoes.noite);
