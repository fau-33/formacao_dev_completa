import pensador from "pensador-scrap";
import fs from "fs";

const autor = "desconhecido";
const { error, success } = await pensador.search({
  query: autor,
  limit: 12,
});

// console.log(error);
// console.log(success);
let pensamentosPraSalvar;
try {
  const pensamentos = success.thought;
  const indiceAleatorio = Math.floor(Math.random() * pensamentos.length);
  const pensamentosSelecionados = pensamentos[indiceAleatorio].content;

  // console.log(pensamentosSelecionados);

  pensamentosPraSalvar = `Pensamento de ${autor} -> ${pensamentosSelecionados}\n`;
  // console.log(pensamentosPraSalvar);
} catch (e) {
  pensamentosPraSalvar = `Pensamento de ${autor} -> Erro ao buscar pensamentos\n`;
} finally {
  //   fs.writeFileSync("frases.txt", pensamentosPraSalvar, "utf8");

  fs.appendFileSync("frases.txt", pensamentosPraSalvar, "utf8");

  const texto = fs.readFileSync("frases.txt", "utf8");

  console.log(texto);
}
