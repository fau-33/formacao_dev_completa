test("Devo verificar se um valor é outro valor", () => {
  expect(10).toBe(10);
});

test("Devo verificar se um valor é diferente de outro valor", () => {
  expect(10).not.toBe(20);
});

test("Devo verificar se um valor é null", () => {
  expect(null).toBe(null);
  expect(null).toBeNull();
});

test("Deve verificar se um valor não é nulo", () => {
  expect(10).not.toBe(null);
  expect(10).not.toBeNull();
});

test("Deve verificar se um valor é definido", () => {
  expect(3).toBeDefined();
  expect(3).not.toBe(undefined);
  expect(3).not.toBeUndefined();
});

test("Deve verificar se um valor é indefinido", () => {
  expect(undefined).toBe(undefined);
  expect(undefined).toBeUndefined();
});

test("Deve verificar se um valor é Falsy", () => {
  expect(undefined).toBeFalsy();
  expect(null).toBeFalsy();
  expect("").toBeFalsy();
  expect(NaN).toBeFalsy();
  expect(0).toBeFalsy();
  expect(-0).toBeFalsy();
});

test("Deve verificar se um valor é Truthy", () => {
  expect("0").toBeTruthy();
  expect(1).toBeTruthy();
  expect(-1).toBeTruthy();
});
