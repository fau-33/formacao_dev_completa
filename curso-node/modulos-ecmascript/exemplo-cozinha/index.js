// import cozinha from "./cozinha1/principal.js";
// console.log(cozinha);

// import receita from "./receita.js";
// const r = receita(["carne", "feijão"], cozinha.cortar, cozinha.assar);
// console.log(r);

import refeicao from "./refeicao.js";
// console.log(refeicao);

const vouComerNoAlmoco = refeicao("almoco");
const vouComerNoJantar = refeicao("jantar");

vouComerNoAlmoco("feijão", "arroz", "carne");
vouComerNoJantar("feijão", "arroz", "frango");
