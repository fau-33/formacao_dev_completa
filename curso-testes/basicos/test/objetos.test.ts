test("Deve verificar se dois objetos são iguais", () => {
  expect({a: 1, b: 2}).toEqual({a: 1, b: 2});
})

test("Deve verificar se dois objetos são iguais com uma propriedade diferentes", () => {
  expect({a: 1, b: undefined}).toEqual({a: 1});
})

test("Deve verificar se dois objetos são iguais de forma estrita", () => {
  expect({a: 1, b: undefined}).not.toStrictEqual({a: 1});
  expect({a: 1, b: undefined}).toStrictEqual({a: 1, b: undefined});
})

test("Deve verificar se um objeto possui uma propriedade", () => {
  const obj = {nome: "John", idade: 30};
  expect(obj).toHaveProperty("nome");
  expect(obj).toHaveProperty("idade");
})

test("Deve verificar se um objeto não possui uma propriedade", () => {
  const obj = {};
  expect(obj).not.toHaveProperty("nome");
  expect(obj).not.toHaveProperty("idade");
})

test("Deve verificar se um objeto possui um subset de campos", () => {
  const obj = {nome: "John", idade: 30, email: "john@example.com"};
  expect(obj).toMatchObject({nome: "John", idade: 30});
})

test("Deve verificar se um objeto não possui um subset de campos", () => {
  const obj = {nome: "John", idade: 30, email: "john@example.com"};
  expect(obj).not.toMatchObject({nome: "John", endereco: "123 Main St"});
})

test("Deve verificar se um objeto é uma instancia de uma classe", () => {
  class Pessoa {
    constructor(public nome: string, public idade: number) {}
  }
  const pessoa = new Pessoa("John", 30);
  expect(pessoa).toBeInstanceOf(Pessoa);
})
