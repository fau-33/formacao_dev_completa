export const texto = "Calculadora complementar v3";

export function resto(a, b) {
  return a % b;
}

export function pot(a, b) {
  return a ** b;
}

// Exportação padrão (opcional)
export default {
  texto,
  pot,
  resto,
};
