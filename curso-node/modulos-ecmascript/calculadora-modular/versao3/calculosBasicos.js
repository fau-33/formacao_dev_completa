export const texto = "Calculadora básica v3";

export function soma(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// Exportação padrão (opcional)
export default {
  texto,
  soma,
  sub,
};
