function exibirNoConsole(funcao) {
  if (typeof funcao === "function") {
    const resultado = funcao();

    console.log(`Ò resultado: ${resultado}`);
  }
}

function bomDia() {
  return "Bom dia!";
}

exibirNoConsole(bomDia);
exibirNoConsole(2);
exibirNoConsole("Bom dia!");
