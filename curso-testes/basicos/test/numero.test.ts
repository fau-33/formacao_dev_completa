test("Deve verificar se um valor é maior que outro", () => {
  expect(10).toBeGreaterThan(5);
});

test("Deve verificar se um valor é maior ou igual ao outro", () => {
  expect(10).toBeGreaterThanOrEqual(10);
  expect(10).toBeGreaterThanOrEqual(5);
});

test("Deve verificar se um valor é menor que outro", () => {
  expect(5).toBeLessThan(10);
});

test("Deve verificar se um valor é menor ou igual ao outro", () => {
  expect(5).toBeLessThanOrEqual(5);
  expect(5).toBeLessThanOrEqual(10);
});

test("Deve verificar se um valor é proximo ao outro", () => {
  expect(0.22222223).toBeCloseTo(0.22, 2);
});
