const path = require("path");
const fs = require("fs");

// Constrói o caminho para o arquivo
const caminho = path.join(__dirname, "..", "dados", "aprovados.txt");

function lerArquivo(err, conteudo) {
  if (err) {
    // Trata o erro caso ocorra
    console.error("Erro ao ler o arquivo:", err.message);
    return; // Encerra a execução da função em caso de erro
  }

  // Imprime o conteúdo do arquivo

  console.log(conteudo);
}

// Lê o arquivo de forma assíncrona
fs.readFile(caminho, "utf8", lerArquivo);

console.log("Fim #01");

const conteudo = fs.readFileSync(caminho, "utf8");
console.log(conteudo.toString());
console.log("Fim #02");
