function retornarUmaFuncao() {
  return function () {
    return "Estou dentro de uma função anonima!";
  };
}

console.log(retornarUmaFuncao);
console.log(retornarUmaFuncao());
console.log(retornarUmaFuncao()());

const x = retornarUmaFuncao;

console.log(x);
console.log(x());
console.log(x()());
