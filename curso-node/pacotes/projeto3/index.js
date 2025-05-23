import { salvar, deletar, pegaDados } from "./Banco.js";

salvar("Flavio", 1);
salvar("Ana", 2);
salvar("Joao", 30);
salvar("Maria", 41);

console.log(pegaDados());

deletar(41);
deletar(30);

console.log("---------------");

console.log(pegaDados());
