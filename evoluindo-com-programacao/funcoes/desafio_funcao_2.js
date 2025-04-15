// (nota) => conceito
// 10 => (A+), 9 => (A), 8 => (B+), 7 => (B), 6 => (C+), 5 => (C), 4 => (D+), 3 => (D), 2 => (E+), 1 => (E), 0 => (F), null

// Função que converte nota numérica em conceito usando parseInt
function conceitoComParseInt(nota) {
  switch (parseInt(Math.ceil(nota))) {
    case 10:
      return "A+";
    case 9:
      return "A";
    case 8:
      return "B+";
    case 7:
      return "B";
    case 6:
      return "C+";
    case 5:
      return "C";
    case 4:
      return "D+";
    case 3:
      return "D";
    case 2:
      return "E+";
    case 1:
      return "E";
    case 0:
      return "F";
    default:
      return null;
  }
}

function conceito(nota) {
  switch (Math.ceil(nota)) {
    case 10:
      return "A+";
    case 9:
      return "A";
    case 8:
      return "B+";
    case 7:
      return "B";
    case 6:
      return "C+";
    case 5:
      return "C";
    case 4:
      return "D+";
    case 3:
      return "D";
    case 2:
      return "E+";
    case 1:
      return "E";
    case 0:
      return "F";
    default:
      return null;
  }
}

console.log(conceito(5.8));
