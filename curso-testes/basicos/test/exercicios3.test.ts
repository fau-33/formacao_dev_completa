import { Utils } from "../src/Utils";

describe("testes da funçao encontrarPorId", () => {
  const arr = [{id: 1, a: 1}, {id: 2, a: 2}, {id: 3, a: 3}];
  test("Deve retornar o objeto com id correspondente", () => {
    expect(Utils.encontrarPorId(arr, 1)).toEqual({id: 1, a: 1});
    expect(Utils.encontrarPorId(arr, 2)).toEqual({id: 2, a: 2});
    expect(Utils.encontrarPorId(arr, 3)).toEqual({id: 3, a: 3});
  })

  test("Deve retornar undefined se o id nao existir", () => {
    expect(Utils.encontrarPorId(arr, 100)).toBeUndefined();
  })
})

describe("testes da funçao inverterObjeto", () => {
  
  test("Deve retornar o objeto vazio se passar um objeto vazio", () => {
    expect(Utils.inverterObjeto({})).toEqual({});
  })

  test("Deve inverter propriedades com valores primitivos", () => {
    const obj = {nome: "Ana", idade: 54, salario: 5069.50, funcionario: true};
    const invertido = Utils.inverterObjeto(obj);
    expect(invertido).toEqual({
      Ana: "nome",
      54: "idade",
      5069.50: "salario",
      true: "funcionario"
    });
  });

  test("Deve inverter propriedades com arrays e objetos", () => {
    const obj = {array: [1, 2, "a", "b"], obj:{a: 1}}
    expect(Utils.inverterObjeto(obj)).toEqual({
      '[1,2,"a","b"]': "array",
      '{"a":1}': "obj"
    })
  })
})

describe("testes da funçao deletarPropriedade", () => {
  test("Deve deletar a propriedade de um objeto", () => {
    const obj = {nome: "Ana", admin: true};
    expect(Utils.deletarPropriedade(obj, "admin")).toEqual({nome: "Ana"});
  })
  test("Deve deletar a propriedade array de um objeto", () => {
    const obj = {nome: "Ana", array: [1, 2, 3]};
    expect(Utils.deletarPropriedade(obj, "array")).toEqual({nome: "Ana"});
  })
  test("Deve deletar a propriedade array de um objeto", () => {
    const obj = {nome: "Ana", array: [1, 2, 3]};
    expect(Utils.deletarPropriedade(obj, "array")).toEqual({nome: "Ana"});
  })
  test("Deve deletar a propriedade objeto de um objeto", () => {
    const obj = {nome: "Ana", admin: {pagina: "pagina.com", status: "ativo"}};
    expect(Utils.deletarPropriedade(obj, "admin")).toEqual({nome: "Ana"});
  })

  test("Deve retornar um objeto vazio se o objeto passado for vazio", () => {
    expect(Utils.deletarPropriedade({}, "admin")).toEqual({});
  })

  test("Deve retornar o objeto original se a propriedade não existir", () => {
    const obj = {nome: "Ana", idade: 35};
    expect(Utils.deletarPropriedade(obj, "endereco")).toEqual(obj);
  })
  
})

