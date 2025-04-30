// A+ => 10
// A => 9
// B+ => 8
// B => 7
// C+ => 6
// C => 5
// D+ => 4
// D => 3
// E+ => 2
// E => 1
// F => 0

// const conceito = "B";

// switch (conceito) {
//   case "A+":
//     console.log("Nota maior que 9, conceito A+ = " + 10);
//     break;
//   case "A":
//     console.log("Nota maior que 8, conceito A = " + 9);
//     break;
//   case "B+":
//     console.log("Nota maior que 7, conceito B+ = " + 8);
//     break;
//   case "B":
//     console.log("Nota maior que 6, conceito B = " + 7);
//     break;
//   case "C+":
//     console.log("Nota maior que 5, conceito C+ = " + 6);
//     break;
//   case "C":
//     console.log("Nota maior que 4, conceito C = " + 5);
//     break;
//   case "D+":
//     console.log("Nota maior que 3, conceito D+ = " + 4);
//     break;
//   case "D":
//     console.log("Nota maior que 2, conceito D = " + 3);
//     break;
//   case "E+":
//     console.log("Nota maior que 1, conceito E+ = " + 2);
//     break;
//   case "E":
//     console.log("Nota maior que 0, conceito E = " + 1);
//     break;
//   case "F":
//     console.log("Conceito F = " + 0);
//     break;
//   default:
//     console.log("Conceito inválido!");
// }

// console.log("Fim");

let conceito = "";
const nota = 7.9;

switch (Math.ceil(nota)) {
  case 10:
    conceito = "A+";
    break;
  case 9:
    conceito = "A";
    break;
  case 8:
    conceito = "B+";
    break;
  case 7:
    conceito = "B";
    break;
  case 6:
    conceito = "C+";
    break;
  case 5:
    conceito = "C";
    break;
  case 4:
    conceito = "D+";
    break;
  case 3:
    conceito = "D";
    break;
  case 2:
    conceito = "E+";
    break;
  case 1:
    conceito = "E";
    break;
  case 0:
    conceito = "F";
    break;
  default:
    conceito = undefined;
}

if (conceito === undefined) {
  console.log("Conceito inválido!");
} else {
  console.log(`Conceito ${conceito} = ${nota}`);
}

console.log("Fim");
