// 12) Escreva uma função que recebe um objeto e que retorna este objeto com uma
// chave a mais que contém os metadados do objeto. Esses metadados serão as
// quantidades de atributos do tipo  string, number, boolean e function que o objeto inicial
// possui. Caso o objeto passado como parâmetro seja vazio, o retorno deve ser um
// objeto vazio

function metadados(objeto) {
  let metadadosObjeto = {
    quantidadeDeAtributosString: 0,
    quantidadeDeAtributosNumber: 0,
    quantidadeDeAtributosBoolean: 0,
    quantidadeDeAtributosFunction: 0,
  };

  for (let chave in objeto) {
    if (typeof objeto[chave] === "string") {
      metadadosObjeto.quantidadeDeAtributosString += 1;
    } else if (typeof objeto[chave] === "number") {
      metadadosObjeto.quantidadeDeAtributosNumber += 1;
    } else if (typeof objeto[chave] === "boolean") {
      metadadosObjeto.quantidadeDeAtributosBoolean += 1;
    } else if (typeof objeto[chave] === "function") {
      metadadosObjeto.quantidadeDeAtributosFunction += 1;
    }
  }
  return { ...objeto, ...metadadosObjeto };
}

const carro = {
  marca: "Honda",
  modelo: "Civic",
  ano: 2020,
  cor: "Prata",
  placa: "ABC1234",
  qteDePortas: 4,
  vidrosEletricos: true,
  seguro: true,
  acelar: () => console.log("Acelerando..."),
  frear: () => console.log("Freando..."),
  abrirVidros: () => console.log("Abrindo vidros..."),
};

console.log(metadados(carro));
