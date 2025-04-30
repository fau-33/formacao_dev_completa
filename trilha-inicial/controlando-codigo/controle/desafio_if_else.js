// Segunda até sexta => 8 horas
// Sábado => 4 horas
// Domingo => 0 horas
const SEGUNDA = "Segunda";
const TERCA = "Terça";
const QUARTA = "Quarta";
const QUINTA = "Quinta";
const SEXTA = "Sexta";
const SABADO = "Sábado";
const DOMINGO = "Domingo";

const diaDaSemana = SABADO;
let horasTrabalhadas = 0;

const eDiaUtil =
  diaDaSemana === SEGUNDA ||
  diaDaSemana === TERCA ||
  diaDaSemana === QUARTA ||
  diaDaSemana === QUINTA ||
  diaDaSemana === SEXTA;

if (eDiaUtil) {
  horasTrabalhadas = 8;
} else if (diaDaSemana === SABADO) {
  horasTrabalhadas = 4;
} else {
  horasTrabalhadas = 0;
}

console.log(`Horas trabalhadas: ${horasTrabalhadas} horas`);
