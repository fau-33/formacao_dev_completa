// #01 - Funções sem parâmetros e sem retorno
function exibirMensagem() {
  console.log("Boa tarde!");
}

exibirMensagem();

// #02 - Funções com parâmetros e sem retorno
function exibirMensagemPara(nome, msg) {
  console.log(`Boa tarde, ${nome}! ${msg}`);
}

exibirMensagemPara("Joaquim", "Como vai você hoje?");
exibirMensagemPara("Maria", "Vamos para reunião hoje?");
exibirMensagemPara("Pedro", "Voce vai estudar hoje?");

// #03 - Funções sem parâmetros e com retorno
function numeroEntre0e10() {
  const numero = parseInt(Math.random() * 10);
  return numero;
}

console.log(numeroEntre0e10());
// #04 - Funções com parâmetros e com retorno
function somar(n1, n2) {
  return n1 + n2;
}

const resultado = somar(10, 20526455);
console.log(resultado);

console.log(somar(10, 40));
