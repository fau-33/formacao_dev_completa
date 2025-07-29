import soma from "../src/soma";

test("Deve testar a função soma", () => {
  const result = soma(2, 3);
  expect(result).toBe(5);
});

test("Deve somar numeros positivos", () => {
  expect(soma(2, 3)).toBe(5);
});

test("Deve somar numeros negativos", () => {
  expect(soma(-2, -3)).toBe(-5);
});

it("Should test the function with it", () => {
  const result = soma(10, 50);
  expect(result).toBe(60);
});
