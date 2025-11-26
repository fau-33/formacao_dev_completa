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

describe("Teste da função remover duplicados", () => {
  test("Deve remover duplicados de um array numérico", () => {
    const array1 = [1, 2, 3, -1, -2, -3, 2, 3];
    expect(Utils.removerDuplicados(array1)).toEqual([1, 2, 3, -1, -2, -3]);
  });
  test("Deve remover duplicados de um array de strings", () => {
    const array1 = ["a", "b", "c", "a", "b", "c"];
    expect(Utils.removerDuplicados(array1)).toEqual(["a", "b", "c"]);
  });
  test("Deve remover duplicados de um array de boleanos", () => {
    const array1 = [true, false, true, false, true, false];
    expect(Utils.removerDuplicados(array1)).toEqual([true, false]);
  });
  test("Deve retornar um array vazio se o array estiver vazio", () => {
    const array1: number[] = [];
    expect(Utils.removerDuplicados(array1)).toEqual([]);
  });
});

describe("Teste da função capitalizarString", () => {
  test("Deve capitalizar uma string para lower case", () => {
    const s = "boa tarde";
    expect(Utils.capitalizarString(s)).toBe("Boa Tarde");
  });
  test("Deve capitalizar uma string para upper case", () => {
    const s = "BOA TARDE";
    expect(Utils.capitalizarString(s)).toBe("Boa Tarde");
  });
  test("Deve capitalizar uma string com case misto", () => {
    const s = "Boa Tarde";
    expect(Utils.capitalizarString(s)).toBe("Boa Tarde");
  });
  test("Deve capitalizar uma string que contenha numeros", () => {
    const s = "boa123 4tarde";
    expect(Utils.capitalizarString(s)).toStrictEqual("Boa123 4tarde");
  });
  test("Deve retornar uma string vazia se a string estiver vazia", () => {
    const s = "";
    expect(Utils.capitalizarString(s)).toBe("");
  });
  test("Deve alterar uma string numerica", () => {
    const s = "12345 67890 12345";
    expect(Utils.capitalizarString(s)).toBe(s);
  });

  test("Deve capitalizar uma string com caracteres especiais", () => {
    const s = "!!@#$%&*()_+";
    expect(Utils.capitalizarString(s)).toBe(s);
  });
})
