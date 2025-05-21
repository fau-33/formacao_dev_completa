import chalk from "chalk";

const azul = (texto) => console.log(chalk.bgBlue(texto));
const aviso = (texto) => console.log(chalk.bgYellow.bold(texto));
const erro = (texto) => console.log(chalk.bgRed.bold.italic(texto));

azul("Sou um texto");
aviso("Preciso de atenção");
erro("Atenção a um erro!");
