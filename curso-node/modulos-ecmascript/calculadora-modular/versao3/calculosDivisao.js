import { resto } from "./calculosComplementares.js";

function div(a, b) {
  return a / b;
}

export default function divisaoPorExtenso(a, b) {
  return `A divisão de ${a} por ${b} e ${div(a, b)} (resto: ${resto(a, b)})`;
}
