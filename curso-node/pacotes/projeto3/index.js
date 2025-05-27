import { salvar, deletar, pegaDados, persistirValores } from "./Banco.js";

// console.log(pegaDados());

// salvar("Flavio");
// salvar("Ana");
// salvar("Joao");
// salvar("Maria");

// deletar(5);
deletar(2);
// deletar(7);

console.log(pegaDados());
console.log("---------------");
salvar("Teste12", 7);
console.log(pegaDados());
persistirValores();
