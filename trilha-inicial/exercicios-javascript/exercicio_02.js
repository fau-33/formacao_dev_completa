// 2) Escreva uma função que recebe um objeto como primeiro parâmetro e, como
// segundo parâmetro, o nome de uma propriedade. Caso a propriedade não exista no
// primeiro objeto retorne o objeto original. Caso a propriedade exista, retorne uma cópia
// desse objeto sem a propriedade especificada no segundo parâmetro.

function removePropriedade(obj, prop) {
  // Verifica se a propriedade existe no objeto
  if (obj[prop]) {
    let objCopia = { ...obj };
    delete objCopia[prop];
    return objCopia; // retorna uma cópia do objeto sem a propriedade especificada
  } else {
    return obj; // retorna o objeto original se a propriedade não existir
  }
}

// Testes

const pessoa = {
  nome: "João",
  idade: 30,
};

const pessoaAtualizada = removePropriedade(pessoa, "idade");
console.log(pessoa);
console.log(pessoaAtualizada);
