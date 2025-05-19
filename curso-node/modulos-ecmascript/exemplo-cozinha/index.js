// index.js

// Importando o módulo principal da cozinha
import cozinha from "./cozinha/principal.js";

// Importando as ações de cozinhar
import acoesCozinhar from "./acoesCozinhar.js";

// Importando os alimentos
import { alimentos } from "./alimentos.js";

// Exibindo as funcionalidades importadas
console.log("Módulo Cozinha:", cozinha);
console.log("Ações de Cozinhar:", acoesCozinhar);
console.log("Alimentos Disponíveis:", alimentos);

// Testando algumas funcionalidades
console.log(cozinha.cozinhar(alimentos[0])); // Exemplo: "cozinhando feijão"
console.log(cozinha.servir(alimentos[1])); // Exemplo: "servindo arroz"
