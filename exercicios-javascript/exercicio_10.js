// 10) Crie um programa que gera um CPF válido

function gerarCpf() {
  const cpf = Math.floor(Math.random() * 99999999999);
  const separador = cpf
    .toString()
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

  return separador;
}

console.log(gerarCpf());
