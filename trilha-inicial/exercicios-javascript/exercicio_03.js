// 3) Crie uma função que recebe um objeto como parâmetro e retorna um segundo
// objeto com as chaves e valores do primeiro objeto invertidas

function inverterObjeto(obj) {
  let objetoRetorno = {};
  let conteudoObjeto = Object.entries(obj);
  for (par of conteudoObjeto) {
    let chave = par[0];
    let valor = par[1];
    objetoRetorno[valor] = chave;
  }
  return objetoRetorno;
}

// Testes

const objeto = {
  nome: "João",
  idade: 30,
  id: 123,
};
console.log(objeto);
console.log(inverterObjeto(objeto));
