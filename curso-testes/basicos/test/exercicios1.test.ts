import { Utils } from "../src/Utils";

describe("Testando a função max de utils", () => {
  test("Deve retornar o maior número do array", () => {
    expect(Utils.max([1, 2, 3])).toBe(3);
  });

  test("Deve retornar null se o array estiver vazio", () => {
    expect(Utils.max([])).toBe(null);
  });
});

describe("Testando a função min de utils", () => {
  test("Deve retornar o maior número do array", () => {
    expect(Utils.min([1, 2, 3])).toBe(1);
  });

  test("Deve retornar null se o array estiver vazio", () => {
    expect(Utils.min([])).toBe(null);
  });
});

describe("Testando a função somaArray de utils", () => {
  test("Deve retornar 0 se o array estiver vazio", () => {
    expect(Utils.somaArray([])).toBe(0);
  });

  test("Deve retornar a soma dos números positivos, negativos e pontos flutuantes do array", () => {
    const arr = [1, 2, 3, 5.25, 1.3, -10, -5.55];
    expect(Utils.somaArray(arr)).toBeCloseTo(-3, 2);
  });
});

describe("Testando a função limitarNumero de utils", () => {
  const min = 0;
  const max = 10;

  test("Deve retornar o número se estiver dentro do intervalo", () => {
    const n = 5;
    expect(Utils.limitarNumero(n, min, max)).toBe(5);
  });

  test("Deve retornar o valor minimo se o número estiver abaixo do intervalo", () => {
    const n = -10;
    expect(Utils.limitarNumero(n, min, max)).toBe(min);
  });

  test("Deve retornar o valor maximo se o número estiver acima do intervalo", () => {
    const n = 900;
    expect(Utils.limitarNumero(n, min, max)).toBe(max);
  });

  test("Deve retornar o valor minimo decimal se o número estiver abaixo do intervalo", () => {
    const min = -9.5;
    const n = -10;
    expect(Utils.limitarNumero(n, min, max)).toBe(min);
  });

  test("Deve retornar o valor maximo decimal se o número estiver acima do intervalo", () => {
    const max = 10.9999;
    const n = 11;
    expect(Utils.limitarNumero(n, min, max)).toBe(max);
  });
});
