import { Utils } from "../src/Utils";

describe("Testando a função diferença de arrays de utils", () => {
  test("Deve retornar um array com os elementos que estao em array1 mas nao estao em array2", () => {
    const array1 = [1, 2, 3];
    const array2 = [2, 3, 4];
    expect(Utils.diferencaDeArrays(array1, array2)).toEqual([1]);
  });

  test("Deve verificar a diferença entre arrays de strings", () => {
    const array1 = ["a", "b", "c", "d"];
    const array2 = ["b", "c", "f"];
    expect(Utils.diferencaDeArrays(array1, array2)).toEqual(["a", "d"]);
  });
  test("Deve retornar um array vazio se o primeiro array estiver vazio.", () => {
    expect(Utils.diferencaDeArrays([], [1, 2])).toStrictEqual([]);
  });
  test("Deve retornar o primeiro array se o segundo array estiver vazio.", () => {
    const array1 = [1, 2];
    expect(Utils.diferencaDeArrays(array1, [])).toEqual(array1);
  });
  test("Deve retornar um array vazio se os arrays forem iguais.", () => {
    const array1 = [1, 2, 3];
    expect(Utils.diferencaDeArrays(array1, array1)).toEqual([]);
  });
});
