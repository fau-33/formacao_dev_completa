// Importando as ações de cozinhar
import acoesCozinhar from "../acoesCozinhar.js";

// Importando os alimentos
import { alimentos } from "../alimentos.js";

// Exportando um objeto combinado
export default {
  ...acoesCozinhar,
  alimentos,
};
