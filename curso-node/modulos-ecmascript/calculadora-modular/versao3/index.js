// Importações nomeadas de calculosBasicos
import { texto as textoBasico, soma, sub } from "./calculosBasicos.js";

// Importações nomeadas de calculosComplementares
import {
  texto as textoComplementar,
  pot,
  resto,
} from "./calculosComplementares.js";

// Importações padrões de calculosDivisao
import div from "./calculosDivisao.js";

// Valores para testar as funções
let x, y;
x = 300;
y = 50;

// Usando as funções e variáveis importadas
console.log(textoBasico); // Calculadora básica v3
console.log(soma(x, y)); // 350
console.log(sub(x, y)); // 250
console.log(resto(x, y)); // 0
console.log(pot(x, y)); // 300^50 (um número muito grande)

console.log(textoComplementar); // Calculadora complementar v3
console.log(div(x, y)); // A divisão de 300 por 50 e 6 (resto: 0)

// Se você quiser usar as exportações padrão:
// import calculosBasicos from "./calculosBasicos.js";
// import calculosComplementares from "./calculosComplementares.js";

// console.log(calculosBasicos.texto);
// console.log(calculosBasicos.soma(x, y));
// console.log(calculosBasicos.sub(x, y));

// console.log(calculosComplementares.texto);
// console.log(calculosComplementares.resto(x, y));
// console.log(calculosComplementares.pot(x, y));
