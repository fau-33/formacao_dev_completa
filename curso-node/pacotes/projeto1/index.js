import chalk from "chalk";
import { DateTime } from "luxon";
import server from "server";

const { get } = server.router;

function imprimeHora(cidade, hora) {
  console.log(chalk.bgBlue(`Hora em ${cidade}: ${hora}`));
}

function getHoraExata(timeZone) {
  return DateTime.now().setZone(timeZone).toFormat("HH:mm:ss (ZZZZ)");
}

server({ port: 8080 }, [
  get("/", (ctx) => "Olá mundo"),
  get("/roma", () => {
    const h = getHoraExata("Europe/Rome");
    imprimeHora("Roma", h);
    return h;
  }),
  get("/luanda", () => {
    const h = getHoraExata("Africa/Luanda");
    imprimeHora("Luanda", h);
    return h;
  }),
  get("/seoul", () => {
    const h = getHoraExata("Asia/Seoul");
    imprimeHora("Seoul", h);
    return h;
  }),
  get("/cuiaba", () => {
    const h = getHoraExata("America/Campo_Grande");
    imprimeHora("Cuiabá", h);
    return h;
  }),
]);

// const azul = (texto) => console.log(chalk.bgBlue(texto));
// const aviso = (texto) => console.log(chalk.bgYellow.bold(texto));
// const erro = (texto) => console.log(chalk.bgRed.bold.italic(texto));

// azul("Sou um texto");
// aviso("Preciso de atenção");
// erro("Atenção a um erro!");
