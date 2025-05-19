// const acoes = require("./cozinha/acoesCozinhar");
// const { alimentos } = require("./cozinha/alimentos");
// console.log(acoes.cozinhar(alimentos[1]));

// const cozinha = require("./cozinha");
// console.log(cozinha.ferver(cozinha.alimentos[2]));

// const receita = require("./receita");
// console.log(receita(["carne", "alface"], cozinha.cortar, cozinha.assar));

const refeicao = require("./refeicao")("almoco");
refeicao("feijão", "arroz", "carne");

const refeicao2 = require("./refeicao")("jantar");
refeicao2("feijão", "arroz", "frango");
