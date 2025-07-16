import {
  multiplicar,
  multiplicarPerigosa,
  saudacao,
} from "../../src/tipos/funcoes";

test("Deve retormar a saudação baseada na hora atual", () => {
  const s = saudacao("João");
  expect(s).toBe("Olá João! Passar bem !");
});

test("Deve retornar dois numeros multiplicados", () => {
  const resultado = multiplicar(2, 2);
  expect(resultado).toBe(4);
});

test("Deve retornar NaN com parametro do tipo string", () => {
  const resultado = multiplicarPerigosa("a", 2);
  expect(resultado).toBeNaN();
});
