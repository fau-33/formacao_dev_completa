// Uma funcao assíncrona retorna uma promise!!
async function obterVersiculo(livro, cap, versiculo) {
  const url = `https://bible-api.com/${livro}%20${cap}:${versiculo}`;

  const resposta = await fetch(url);
  const dados = await resposta.json();
  return dados.verses[0].text;
}

async function executar() {
  const texto = await obterVersiculo("Luke", 1, 1);
  console.log(texto);
}

executar();
